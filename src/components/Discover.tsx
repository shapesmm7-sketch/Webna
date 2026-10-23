import { useEffect, useRef, useState, useCallback } from "react";
import { getNews, getFootballNews, type NewsItem } from "@/lib/news.functions";
import { getTikTokFeed, type TikTokVideo } from "@/lib/tiktok.functions";
import {
  fallbackImage,
  validImage,
  DEFAULT_IMAGE,
  FOOTBALL_PLACEHOLDER,
} from "@/lib/news-shared";
import {
  Play,
  RotateCw,
  AlertTriangle,
  Video,
  ExternalLink,
} from "lucide-react";

const CHIPS = [
  { l: "For You", t: "" },
  { l: "World", t: "WORLD" },
  { l: "Technology", t: "TECHNOLOGY" },
  { l: "Sports", t: "SPORTS" },
  { l: "Business", t: "BUSINESS" },
  { l: "Science", t: "SCIENCE" },
  { l: "Entertainment", t: "ENTERTAINMENT" },
];

export interface DiscoverProps {
  onOpen: (url: string) => void;
  onOpenWeb?: (url: string) => void;
  onPlayVideo?: (video: {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    author: string;
  }) => void;
}

function feedUrl(topic: string) {
  const TOPIC_FEEDS: Record<string, string> = {
    "": "https://feeds.bbci.co.uk/news/rss.xml",
    WORLD: "https://feeds.bbci.co.uk/news/world/rss.xml",
    TECHNOLOGY: "https://feeds.bbci.co.uk/news/technology/rss.xml",
    SPORTS: "https://feeds.bbci.co.uk/sport/rss.xml",
    BUSINESS: "https://feeds.bbci.co.uk/news/business/rss.xml",
    SCIENCE: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    ENTERTAINMENT:
      "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
  };
  return TOPIC_FEEDS[topic] || "https://feeds.bbci.co.uk/news/rss.xml";
}

function ago(d: string) {
  const s = (Date.now() - new Date(d).getTime()) / 1000;
  if (!isFinite(s)) return "";
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export function Discover({ onOpen, onOpenWeb, onPlayVideo }: DiscoverProps) {
  const [topic, setTopic] = useState("");
  const [viewMode, setViewMode] = useState<"news" | "tiktok" | "football">(
    "news",
  );

  // General News state
  const [items, setItems] = useState<NewsItem[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const cached = localStorage.getItem("webna-feed-v4-");
      if (cached) {
        const parsed = JSON.parse(cached) as NewsItem[];
        return parsed.length > 0 ? parsed : null;
      }
    } catch {
      // ignore
    }
    return null;
  });
  const [shown, setShown] = useState(8);

  // Football News state
  const [footballItems, setFootballItems] = useState<NewsItem[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const cached = localStorage.getItem("webna-football-news-cache");
      if (cached) {
        const parsed = JSON.parse(cached) as NewsItem[];
        return parsed.length > 0 ? parsed : null;
      }
    } catch {
      // ignore
    }
    return null;
  });
  const [footballLoading, setFootballLoading] = useState(false);
  const [footballError, setFootballError] = useState(false);
  const [footballShown, setFootballShown] = useState(8);

  // TikTok state
  const [tiktokVideos, setTikTokVideos] = useState<TikTokVideo[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const cached = localStorage.getItem("webna-tiktok-cached");
      if (cached) {
        const parsed = JSON.parse(cached) as TikTokVideo[];
        return parsed.length > 0 ? parsed : null;
      }
    } catch {
      // ignore
    }
    return null;
  });
  const [tiktokLoading, setTiktokLoading] = useState(false);
  const [tiktokError, setTiktokError] = useState(false);

  const [pull, setPull] = useState(0);
  const startY = useRef<number | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  const key = "webna-feed-v4-" + topic;

  const loadNews = useCallback(
    async (force = false, currentTopic = topic) => {
      const currentKey = "webna-feed-v4-" + currentTopic;
      const cached = localStorage.getItem(currentKey);
      if (cached && !force) {
        try {
          const parsed = JSON.parse(cached);
          const seen = new Set<string>();
          const unique = (parsed as NewsItem[]).filter((it) => {
            const u = it.link || it.title;
            if (!u || seen.has(u)) return false;
            seen.add(u);
            return true;
          });
          if (unique.length > 0) {
            setItems(unique);
          }
        } catch {
          // ignore
        }
      }

      try {
        const list = await getNews({ data: { rss: feedUrl(currentTopic) } });
        if (!list.length) throw new Error("empty");
        const seen = new Set<string>();
        const unique = list.filter((it) => {
          const u = it.link || it.title;
          if (!u || seen.has(u)) return false;
          seen.add(u);
          return true;
        });
        setItems(unique);
        setShown(8);
        try {
          localStorage.setItem(currentKey, JSON.stringify(unique));
        } catch {
          // ignore
        }
      } catch {
        if (!cached) setItems([]);
      }
    },
    [topic],
  );

  const fetchTikTokFeedData = useCallback(async (force = false) => {
    const cached = localStorage.getItem("webna-tiktok-cached");
    let hasData = false;
    if (cached && !force) {
      try {
        const parsed = JSON.parse(cached) as TikTokVideo[];
        if (parsed && parsed.length > 0) {
          setTikTokVideos(parsed);
          hasData = true;
        }
      } catch {
        // ignore
      }
    }

    if (!hasData) {
      setTiktokLoading(true);
    }
    setTiktokError(false);

    try {
      const videos = await getTikTokFeed({ data: { count: 20 } });
      if (videos && videos.length > 0) {
        const seen = new Set<string>();
        const unique = videos.filter((v) => {
          if (!v?.video_id || seen.has(v.video_id)) return false;
          seen.add(v.video_id);
          return true;
        });
        setTikTokVideos(unique);
        try {
          localStorage.setItem("webna-tiktok-cached", JSON.stringify(unique));
        } catch {
          // ignore storage quota error
        }
      } else if (!hasData) {
        setTiktokError(true);
      }
    } catch (err) {
      console.warn("Failed to fetch live TikTok trends:", err);
      if (!hasData) {
        setTiktokError(true);
      }
    } finally {
      setTiktokLoading(false);
    }
  }, []);

  const loadFootball = useCallback(async (force = false) => {
    const cached = localStorage.getItem("webna-football-news-cache");
    let hasData = false;
    if (cached && !force) {
      try {
        const parsed = JSON.parse(cached) as NewsItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setFootballItems(parsed);
          hasData = true;
        }
      } catch {
        // ignore
      }
    }

    if (!hasData) {
      setFootballLoading(true);
    }
    setFootballError(false);

    try {
      const list = await getFootballNews();
      if (!list || list.length === 0) {
        throw new Error("No football news items returned");
      }
      setFootballItems(list);
      setFootballShown(8);
      try {
        localStorage.setItem("webna-football-news-cache", JSON.stringify(list));
      } catch {
        // ignore
      }
    } catch (err) {
      console.error("Error loading football news:", err);
      if (!hasData) {
        setFootballError(true);
      }
    } finally {
      setFootballLoading(false);
    }
  }, []);

  // Pre-fetch all 3 tabs (News, TikTok Trends, and Football News) on mount
  // so whenever the user clicks any tab, the content is already downloaded and ready
  useEffect(() => {
    loadNews(false, "");
    fetchTikTokFeedData(false);
    loadFootball(false);
  }, [loadNews, fetchTikTokFeedData, loadFootball]);

  // When general news topic chip changes, reload that topic's news
  useEffect(() => {
    if (topic) {
      loadNews(false, topic);
    }
  }, [topic, loadNews]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0]?.isIntersecting) {
        if (viewMode === "football") {
          setFootballShown((s) => s + 6);
        } else if (viewMode === "news") {
          setShown((s) => s + 6);
        }
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [items, footballItems, viewMode]);

  const handleVideoClick = (video: TikTokVideo) => {
    if (onPlayVideo) {
      onPlayVideo({
        id: video.video_id,
        title: video.title,
        videoUrl: video.videoUrl || video.play,
        thumbnailUrl: video.image || video.cover,
        author: video.author_name || video.author_id,
      });
    } else {
      onOpen(video.videoUrl || video.play);
    }
  };

  const handleOpenFootballArticle = (url: string) => {
    if (onOpenWeb) {
      onOpenWeb(url);
    } else {
      onOpen(url);
    }
  };

  const handleOpenOnTikTok = (e: React.MouseEvent, video: TikTokVideo) => {
    e.stopPropagation();
    const cleanAuthor = (video.author_id || "tiktok").replace(/^@/, "");
    const tiktokUrl =
      video.tiktokWebUrl ||
      `https://www.tiktok.com/@${cleanAuthor}/video/${video.video_id}`;

    if (onOpenWeb) {
      onOpenWeb(tiktokUrl);
    } else if (typeof window !== "undefined") {
      window.open(tiktokUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onTouchStart={(e) => {
        if (
          window.scrollY <= 0 &&
          (e.currentTarget.parentElement?.scrollTop ?? 0) <= 0
        )
          startY.current = e.touches[0]!.clientY;
      }}
      onTouchMove={(e) => {
        if (startY.current !== null)
          setPull(
            Math.min(80, Math.max(0, e.touches[0]!.clientY - startY.current)),
          );
      }}
      onTouchEnd={() => {
        if (pull > 60) {
          if (viewMode === "news") {
            loadNews(true);
          } else if (viewMode === "tiktok") {
            fetchTikTokFeedData();
          } else if (viewMode === "football") {
            loadFootball(true);
          }
        }
        setPull(0);
        startY.current = null;
      }}
    >
      <div
        style={{ height: pull }}
        className="flex items-center justify-center text-xs text-muted-foreground"
      >
        {pull > 60 ? "Release to refresh" : pull > 0 ? "Pull to refresh" : ""}
      </div>

      {/* Header Switcher: News | TikTok Trends | Football */}
      <div className="mb-4 flex gap-1 rounded-xl bg-card p-1 shadow-xs border border-border/50">
        <button
          onClick={() => setViewMode("news")}
          className={`flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold transition-all ${
            viewMode === "news"
              ? "bg-brand text-brand-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          News
        </button>
        <button
          onClick={() => setViewMode("tiktok")}
          className={`flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
            viewMode === "tiktok"
              ? "bg-brand text-brand-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Video className="size-3.5 sm:size-4" />
          <span>TikTok Trends</span>
        </button>
        <button
          onClick={() => setViewMode("football")}
          className={`flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
            viewMode === "football"
              ? "bg-brand text-brand-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span>⚽ Football</span>
        </button>
      </div>

      {viewMode === "football" ? (
        <div className="flex flex-col gap-3">
          {/* Progress Bar when loading football news and no items yet */}
          {footballLoading &&
            (!footballItems || footballItems.length === 0) && (
              <div className="space-y-3 mb-2">
                <div
                  className="w-full bg-muted/70 rounded-full h-1.5 overflow-hidden"
                  role="progressbar"
                  aria-label="Loading football news"
                >
                  <div className="bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full" />
                </div>
                <p className="text-center text-xs text-muted-foreground font-medium">
                  Fetching latest football headlines and match updates...
                </p>

                {/* Skeleton placeholders */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40"
                  >
                    <div className="aspect-video animate-pulse bg-muted" />
                    <div className="space-y-2 p-3.5">
                      <div className="h-4 animate-pulse rounded bg-muted" />
                      <div className="h-3 w-4/5 animate-pulse rounded bg-muted" />
                      <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            )}

          {/* Error handling with retry button */}
          {!footballLoading &&
            footballError &&
            (!footballItems || footballItems.length === 0) && (
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3">
                  <AlertTriangle className="size-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Failed to load football news
                </h3>
                <p className="text-xs text-muted-foreground mb-4 max-w-xs mx-auto">
                  Unable to retrieve the soccer feeds right now. Please check
                  your connection and try again.
                </p>
                <button
                  onClick={() => loadFootball(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all"
                >
                  <RotateCw className="size-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

          {/* Football articles list */}
          {!footballLoading &&
            !footballError &&
            footballItems &&
            footballItems.length === 0 && (
              <div className="rounded-2xl border border-border/60 bg-card p-6 text-center my-4">
                <p className="text-sm text-muted-foreground mb-3">
                  No football news available right now.
                </p>
                <button
                  onClick={() => loadFootball(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs"
                >
                  <RotateCw className="size-3.5" />
                  <span>Refresh</span>
                </button>
              </div>
            )}

          {footballItems?.slice(0, footballShown).map((it, idx) => (
            <button
              key={`fb-${it.link || "no-link"}-${idx}-${it.title?.slice(0, 15) || "no-title"}`}
              onClick={() => handleOpenFootballArticle(it.link)}
              className="group mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all active:scale-[0.99]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={it.thumbnail || FOOTBALL_PLACEHOLDER}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FOOTBALL_PLACEHOLDER;
                  }}
                />
                <div className="absolute top-2.5 left-2.5 rounded-md bg-black/65 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs flex items-center gap-1 shadow-xs">
                  <span>⚽</span>
                  <span>{it.source || "Football"}</span>
                </div>
              </div>

              <div className="p-3.5">
                <h3 className="line-clamp-2 text-sm font-bold text-foreground leading-snug">
                  {it.title}
                </h3>
                {it.description && (
                  <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground/90 leading-relaxed">
                    {it.description}
                  </p>
                )}
                <div className="mt-2.5 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-foreground/80">
                      {it.source}
                    </span>
                    <span>•</span>
                    <span>{ago(it.pubDate)}</span>
                  </div>
                  <span className="text-brand font-semibold text-[11px] group-hover:underline">
                    Read article
                  </span>
                </div>
              </div>
            </button>
          ))}

          {footballItems && footballShown < footballItems.length && (
            <div ref={sentinel} className="h-10" />
          )}
        </div>
      ) : viewMode === "tiktok" ? (
        <div className="flex flex-col gap-3">
          {/* Progress Bar when loading and no videos yet */}
          {tiktokLoading && (!tiktokVideos || tiktokVideos.length === 0) && (
            <div className="space-y-3 mb-2">
              <div
                className="w-full bg-muted/70 rounded-full h-1.5 overflow-hidden"
                role="progressbar"
                aria-label="Loading TikTok trends"
              >
                <div className="bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full" />
              </div>
              <p className="text-center text-xs text-muted-foreground font-medium">
                Fetching trending videos from feed...
              </p>

              {/* Skeleton placeholders matching adapter layout */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`skeleton-tik-${i}`}
                  className="mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40"
                >
                  <div className="aspect-video animate-pulse bg-muted flex items-center justify-center">
                    <Play className="size-10 text-muted-foreground/30" />
                  </div>
                  <div className="space-y-2 p-3">
                    <div className="h-4 animate-pulse rounded bg-muted" />
                    <div className="h-3.5 w-1/2 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error handling with retry button */}
          {!tiktokLoading &&
            tiktokError &&
            (!tiktokVideos || tiktokVideos.length === 0) && (
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3">
                  <AlertTriangle className="size-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Failed to load TikTok trends
                </h3>
                <p className="text-xs text-muted-foreground mb-4 max-w-xs mx-auto">
                  Unable to retrieve the trending feed right now. Please check
                  your connection and try again.
                </p>
                <button
                  onClick={() => fetchTikTokFeedData(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all"
                >
                  <RotateCw className="size-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

          {/* Video List - mapped to RecyclerView model & news tab layout */}
          {!tiktokLoading &&
            !tiktokError &&
            tiktokVideos &&
            tiktokVideos.length === 0 && (
              <div className="rounded-2xl border border-border/60 bg-card p-6 text-center my-4">
                <p className="text-sm text-muted-foreground mb-3">
                  No trending videos found.
                </p>
                <button
                  onClick={() => fetchTikTokFeedData(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs"
                >
                  <RotateCw className="size-3.5" />
                  <span>Refresh</span>
                </button>
              </div>
            )}

          {tiktokVideos?.map((v, idx) => (
            <div
              key={`tik-${v.video_id || "no-id"}-${idx}-${v.author_id || "no-author"}`}
              className="group mb-4 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all"
            >
              {/* Video Thumbnail with Play Icon Overlay - plays in app Player */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleVideoClick(v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleVideoClick(v);
                }}
                className="relative aspect-video w-full cursor-pointer overflow-hidden bg-neutral-900"
                title={`Play "${v.title}" in WebNa Player`}
              >
                {/* Exact TikTok video thumbnail directly from video object */}
                <img
                  src={
                    v.image && v.image.startsWith("http")
                      ? v.image
                      : v.cover && v.cover.startsWith("http")
                        ? v.cover
                        : `https://wsrv.nl/?url=${encodeURIComponent(v.origin_cover || v.cover)}&output=jpg`
                  }
                  alt={v.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const imgEl = e.currentTarget;
                    const stage =
                      imgEl.getAttribute("data-fallback-stage") || "0";
                    if (
                      stage === "0" &&
                      v.origin_cover &&
                      imgEl.src !== v.origin_cover
                    ) {
                      imgEl.setAttribute("data-fallback-stage", "1");
                      imgEl.src = `https://wsrv.nl/?url=${encodeURIComponent(v.origin_cover)}&output=jpg`;
                    } else if (stage === "1") {
                      imgEl.setAttribute("data-fallback-stage", "2");
                      imgEl.src = `https://images.weserv.nl/?url=${encodeURIComponent(v.origin_cover || v.cover)}&output=jpg`;
                    } else if (stage === "2" && v.origin_cover) {
                      imgEl.setAttribute("data-fallback-stage", "3");
                      imgEl.src = v.origin_cover;
                    }
                  }}
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                  <div className="flex size-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="size-5 fill-white ml-0.5 text-white" />
                  </div>
                </div>
                {/* Subtle view count badge */}
                <div className="absolute bottom-2 right-2 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs border border-white/10">
                  {v.play_count > 0
                    ? `${v.play_count.toLocaleString()} views`
                    : "Trending"}
                </div>
              </div>

              {/* Card Title, Creator, & Action Buttons */}
              <div className="p-3.5 space-y-2.5">
                <h4
                  onClick={() => handleVideoClick(v)}
                  className="line-clamp-2 text-sm font-bold text-foreground cursor-pointer hover:text-brand transition-colors"
                >
                  {v.title}
                </h4>

                <p className="truncate text-xs text-muted-foreground font-medium">
                  {v.subtitle}
                </p>

                {/* Actions row: Watch on TikTok OR Play in App */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-border/40">
                  {/* Button to watch full video on TikTok */}
                  <button
                    type="button"
                    onClick={(e) => handleOpenOnTikTok(e, v)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs active:scale-95 transition-all border border-neutral-700/60"
                    title="Watch full video on TikTok"
                  >
                    <svg
                      className="size-3.5 fill-current text-[#25F4EE]"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.891 2.896 2.896 0 0 1-2.892-2.891 2.896 2.896 0 0 1 2.892-2.892c.328 0 .641.057.933.161V9.45a6.34 6.34 0 0 0-.933-.069 6.34 6.34 0 0 0-6.335 6.336 6.34 6.34 0 0 0 6.335 6.336 6.34 6.34 0 0 0 6.335-6.336V9.012a8.163 8.163 0 0 0 4.887 1.605V7.172a4.773 4.773 0 0 1-1.116-.486z" />
                    </svg>
                    <span>Watch on TikTok</span>
                    <ExternalLink className="size-3 text-[#FE2C55] opacity-90" />
                  </button>

                  {/* Button to play in WebNa player */}
                  <button
                    type="button"
                    onClick={() => handleVideoClick(v)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand/10 hover:bg-brand/20 px-3 py-1.5 text-xs font-semibold text-brand active:scale-95 transition-all"
                    title="Play in WebNa Player"
                  >
                    <Play className="size-3.5 fill-current" />
                    <span>Play in Player</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Topics Chips for General News */}
          <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4">
            {CHIPS.map((c) => (
              <button
                key={`chip-${c.l}`}
                onClick={() => setTopic(c.t)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm ${
                  topic === c.t
                    ? "bg-brand text-brand-foreground font-semibold shadow-xs"
                    : "bg-card shadow-xs border border-border/40 text-muted-foreground"
                }`}
              >
                {c.l}
              </button>
            ))}
          </div>

          {!items &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`skeleton-news-${i}`}
                className="mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40"
              >
                <div className="aspect-video animate-pulse bg-muted" />
                <div className="space-y-2 p-3">
                  <div className="h-4 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ))}

          {items?.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Couldn't load news. Pull down to retry.
            </p>
          )}

          {items?.slice(0, shown).map((it, idx) => {
            const img = it.thumbnail;
            return (
              <button
                key={`news-${it.link || "no-link"}-${idx}-${it.title?.slice(0, 15) || "no-title"}`}
                onClick={() => onOpen(it.link)}
                className="mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/40 hover:border-brand/40 transition-all"
              >
                <NewsImg src={img} fallback={fallbackImage(topic)} />
                <div className="p-3">
                  <p className="line-clamp-2 text-sm font-bold text-foreground">
                    {it.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${(() => {
                        try {
                          return new URL(it.link).hostname;
                        } catch {
                          return "bbc.co.uk";
                        }
                      })()}&sz=32`}
                      alt=""
                      className="size-4 rounded-full"
                    />
                    <span className="truncate">{it.source}</span>
                    <span className="ml-auto shrink-0">{ago(it.pubDate)}</span>
                  </div>
                </div>
              </button>
            );
          })}

          {items && shown < items.length && (
            <div ref={sentinel} className="h-10" />
          )}
        </>
      )}
    </div>
  );
}

function NewsImg({
  src,
  fallback,
}: {
  src?: string | undefined;
  fallback: string;
}) {
  const [err, setErr] = useState(0);

  useEffect(() => {
    setErr(0);
  }, [src]);

  let currentSrc = fallback;
  if (validImage(src)) {
    if (err === 0) {
      currentSrc = src!;
    } else if (err === 1 && src!.includes("/standard/800/")) {
      currentSrc = src!.replace("/standard/800/", "/standard/240/");
    } else if (err < 3) {
      currentSrc = fallback;
    } else {
      currentSrc = DEFAULT_IMAGE;
    }
  } else {
    currentSrc = err >= 1 ? DEFAULT_IMAGE : fallback;
  }

  return (
    <img
      src={currentSrc}
      alt=""
      referrerPolicy="no-referrer"
      onError={() => setErr((e) => e + 1)}
      className="aspect-video w-full bg-muted object-cover"
      loading="lazy"
    />
  );
}
