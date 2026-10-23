import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Trash2,
  X,
  Music,
  Film,
  History,
  Star,
  User,
  Settings as SettingsIcon,
  Bookmark,
  RotateCw,
  Menu,
  Compass,
  ListMusic,
  Heart,
  Disc,
  Home as HomeIcon,
  Search,
  Globe,
  Sparkles,
  Bot,
  ExternalLink,
  Check,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";
import { BottomTabs, type TabName } from "@/components/BottomTabs";
import { SearchBar } from "@/components/SearchBar";
import { BrowserView } from "@/components/BrowserView";
import { Discover } from "@/components/Discover";
import { ArticleView } from "@/components/ArticleView";
import { AudioPlayerPanel } from "@/components/AudioPlayerPanel";
import { BookmarksManager } from "@/components/BookmarksManager";
import { SavedLinksManager } from "@/components/SavedLinksManager";
import { SettingsManager } from "@/components/SettingsManager";
import {
  TabSwitcherPanel,
  type BrowserTab,
} from "@/components/TabSwitcherPanel";
import { useAppLanguage } from "@/lib/i18n";
import { isCleanLinksEnabled, stripTrackingParams } from "@/lib/safety";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebNa Browser — Search, news & downloader" },
      {
        name: "description",
        content:
          "WebNa: fast browser with Google search, worldwide news, saved links and a video downloader.",
      },
      { property: "og:title", content: "WebNa Browser" },
      {
        property: "og:description",
        content:
          "Fast browser with Google search, worldwide news and a video downloader.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: App,
});

type Entry = { url: string; title: string; at: number };
// igu=1 lets Google render inside the in-app view
const host = (u: string) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};

const DIAL = [
  { t: "Google", u: "https://www.google.com/?igu=1" },
  { t: "Wikipedia", u: "https://en.wikipedia.org" },
  { t: "OpenStreetMap", u: "https://www.openstreetmap.org/export/embed.html" },
  { t: "Hacker News", u: "https://news.ycombinator.com" },
  { t: "Archive", u: "https://archive.org" },
  { t: "MDN", u: "https://developer.mozilla.org" },
  { t: "Bing", u: "https://www.bing.com" },
  { t: "DuckDuckGo", u: "https://html.duckduckgo.com/html/" },
];

function useStored<T>(k: string, init: T) {
  const [v, setV] = useState<T>(init);
  useEffect(() => {
    const s = localStorage.getItem(k);
    if (s) setV(JSON.parse(s));
  }, [k]);
  const set = (n: T) => {
    setV(n);
    localStorage.setItem(k, JSON.stringify(n));
  };
  return [v, set] as const;
}

const DEFAULT_ENGINES: Record<string, string> = {
  Google: "https://www.google.com/search?igu=1&q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://html.duckduckgo.com/html/?q=",
  Brave: "https://search.brave.com/search?q=",
  Ecosia: "https://www.ecosia.org/search?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
  Startpage: "https://www.startpage.com/do/search?query=",
  Yandex: "https://yandex.com/search/?text=",
  Kagi: "https://kagi.com/search?q=",
  Baidu: "https://www.baidu.com/s?wd=",
  Sogou: "https://www.sogou.com/web?query=",
};
const ENGINES = DEFAULT_ENGINES;

function ensureIframeCompatibleUrl(rawUrl: string): string {
  try {
    const parsed = new URL(rawUrl);
    if (
      parsed.hostname.includes("google.") &&
      !parsed.searchParams.has("igu")
    ) {
      parsed.searchParams.set("igu", "1");
      return parsed.toString();
    }
    return rawUrl;
  } catch {
    if (rawUrl.includes("google.") && !rawUrl.includes("igu=1")) {
      const sep = rawUrl.includes("?") ? "&" : "?";
      return `${rawUrl}${sep}igu=1`;
    }
    return rawUrl;
  }
}

export type AiEngine = {
  name: string;
  url: string;
  domain: string;
  desc: string;
  badge?: string;
};

export const AI_ENGINES: Record<string, AiEngine> = {
  Gemini: {
    name: "Gemini",
    url: "https://gemini.google.com/app",
    domain: "gemini.google.com",
    desc: "Google's smart assistant for writing, search & coding",
    badge: "Google",
  },
  ChatGPT: {
    name: "ChatGPT",
    url: "https://chatgpt.com/?q=",
    domain: "chatgpt.com",
    desc: "OpenAI versatile conversation and smart search",
    badge: "OpenAI",
  },
  Perplexity: {
    name: "Perplexity",
    url: "https://www.perplexity.ai/search?q=",
    domain: "perplexity.ai",
    desc: "Real-time conversational AI search with citations",
    badge: "Search",
  },
  Claude: {
    name: "Claude",
    url: "https://claude.ai/new",
    domain: "claude.ai",
    desc: "Anthropic thoughtful and nuanced AI model",
    badge: "Anthropic",
  },
  Copilot: {
    name: "Copilot",
    url: "https://copilot.microsoft.com/?q=",
    domain: "copilot.microsoft.com",
    desc: "Microsoft AI companion with web grounding",
    badge: "Microsoft",
  },
  DeepSeek: {
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    domain: "deepseek.com",
    desc: "High-reasoning open AI model for math and code",
    badge: "Reasoning",
  },
  Grok: {
    name: "Grok",
    url: "https://grok.com",
    domain: "x.ai",
    desc: "xAI witty real-time search & chat",
    badge: "xAI",
  },
  Poe: {
    name: "Poe",
    url: "https://poe.com",
    domain: "poe.com",
    desc: "Multi-bot AI platform with top models in one place",
    badge: "Multi-AI",
  },
  Phind: {
    name: "Phind",
    url: "https://www.phind.com/search?q=",
    domain: "phind.com",
    desc: "AI search engine optimized for developers & research",
    badge: "Dev Search",
  },
  "You.com": {
    name: "You.com",
    url: "https://you.com/search?q=",
    domain: "you.com",
    desc: "AI search assistant with multi-source synthesis",
    badge: "Search",
  },
  "Meta AI": {
    name: "Meta AI",
    url: "https://www.meta.ai",
    domain: "meta.ai",
    desc: "Meta's conversational assistant powered by Llama",
    badge: "Meta",
  },
  Mistral: {
    name: "Mistral",
    url: "https://chat.mistral.ai",
    domain: "mistral.ai",
    desc: "Le Chat by Mistral AI, fast and open European model",
    badge: "Mistral",
  },
  HuggingChat: {
    name: "HuggingChat",
    url: "https://huggingface.co/chat",
    domain: "huggingface.co",
    desc: "Open-source community AI models and chat",
    badge: "Open Source",
  },
  "Pi AI": {
    name: "Pi AI",
    url: "https://pi.ai",
    domain: "pi.ai",
    desc: "Supportive and friendly conversational companion",
    badge: "Personal",
  },
};

export function getEngineDomain(name: string): string {
  const customDomains: Record<string, string> = {
    Google: "google.com",
    Bing: "bing.com",
    DuckDuckGo: "duckduckgo.com",
    Brave: "brave.com",
    Ecosia: "ecosia.org",
    Yahoo: "yahoo.com",
    Startpage: "startpage.com",
    Yandex: "yandex.com",
    Kagi: "kagi.com",
    Baidu: "baidu.com",
    Sogou: "sogou.com",
    Gemini: "gemini.google.com",
    ChatGPT: "chatgpt.com",
    Perplexity: "perplexity.ai",
    Claude: "claude.ai",
    Copilot: "copilot.microsoft.com",
    DeepSeek: "deepseek.com",
    Grok: "x.ai",
    Poe: "poe.com",
    Phind: "phind.com",
    "You.com": "you.com",
    "Meta AI": "meta.ai",
    Mistral: "mistral.ai",
    HuggingChat: "huggingface.co",
    "Pi AI": "pi.ai",
  };
  if (customDomains[name]) return customDomains[name];
  if (AI_ENGINES[name]) return AI_ENGINES[name].domain;
  return `${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`;
}

function App() {
  const [tab, setTab] = useStored<TabName>("webna-tab", "home");
  const [engines, setEngines] = useStored<Record<string, string>>(
    "webna-engines",
    DEFAULT_ENGINES,
  );

  useEffect(() => {
    if (engines) {
      let changed = false;
      const copy = { ...engines };
      if (copy.Google && !copy.Google.includes("igu=1")) {
        copy.Google = "https://www.google.com/search?igu=1&q=";
        changed = true;
      }
      if (copy.ChatGPT) {
        delete copy.ChatGPT;
        changed = true;
      }
      if (changed) {
        setEngines(copy);
      }
    }
  }, [engines, setEngines]);
  const DEFAULT_CATEGORIES: Record<string, { t: string; u: string }[]> = {
    Social: [
      { t: "YouTube", u: "https://youtube.com" },
      { t: "Reddit", u: "https://reddit.com" },
      { t: "Twitter / X", u: "https://x.com" },
      { t: "Instagram", u: "https://instagram.com" },
    ],
    Media: [
      { t: "Netflix", u: "https://netflix.com" },
      { t: "Spotify", u: "https://spotify.com" },
      { t: "Twitch", u: "https://twitch.tv" },
      { t: "SoundCloud", u: "https://soundcloud.com" },
    ],
    News: [
      { t: "BBC News", u: "https://bbc.com" },
      { t: "CNN", u: "https://cnn.com" },
      { t: "Reuters", u: "https://reuters.com" },
    ],
  };

  const { t } = useAppLanguage();
  const [engine, setEngine] = useStored<string>("webna-engine", "Google");
  const [categories, setCategories] = useStored<
    Record<string, { t: string; u: string }[]>
  >("webna-categories-data", DEFAULT_CATEGORIES);
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const safeCategories = useMemo<
    Record<string, { t: string; u: string }[]>
  >(() => {
    if (!categories || typeof categories !== "object")
      return DEFAULT_CATEGORIES;
    if (Array.isArray(categories)) {
      const obj: Record<string, { t: string; u: string }[]> = {};
      categories.forEach((item) => {
        if (typeof item === "string") obj[item] = [];
      });
      return Object.keys(obj).length > 0 ? obj : DEFAULT_CATEGORIES;
    }
    return Object.keys(categories).length > 0 ? categories : DEFAULT_CATEGORIES;
  }, [categories]);

  useEffect(() => {
    const keys = Object.keys(safeCategories);
    if (activeCategory && !safeCategories[activeCategory] && keys.length > 0) {
      setActiveCategory(null);
    }
  }, [safeCategories, activeCategory]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("webna-theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const [shortcutModalCategory, setShortcutModalCategory] = useState<
    string | null
  >(null);
  const [shortcutName, setShortcutName] = useState("");
  const [shortcutUrl, setShortcutUrl] = useState("");

  const [bookmarks, setBookmarks] = useStored<Entry[]>("webna-bm", []);
  const [savedLinks, setSavedLinks] = useStored<Entry[]>(
    "webna-saved-links",
    [],
  );
  const [history, setHistory] = useStored<Entry[]>("webna-hist", []);
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  useEffect(() => {
    const s = localStorage.getItem("webna-browser-tabs");
    if (s) {
      try {
        setTabs(JSON.parse(s));
      } catch {
        // ignore invalid storage json
      }
    } else {
      setTabs([
        {
          id: "tab-1",
          url: "https://www.google.com/?igu=1",
          title: "Google Search",
          active: true,
        },
      ]);
    }
  }, []);
  const [activeTabId, setActiveTabId] = useState<string>("tab-1");
  useEffect(() => {
    const t = tabs.find((x) => x.active);
    if (t) setActiveTabId(t.id);
  }, [tabs]);
  const [stack, setStack] = useState<string[]>([]);
  const [idx, setIdx] = useState(-1);
  const [homeMenu, setHomeMenu] = useState(false);
  const [isIncognito, setIsIncognito] = useState(false);
  const [panel, setPanel] = useState<
    | null
    | "bookmarks"
    | "saved-links"
    | "history"
    | "settings"
    | "blockings"
    | "player"
    | "account"
    | "search"
    | "search-add"
  >(null);
  const [blockAds, setBlockAds] = useStored<boolean>("webna-block-ads", true);
  const [blockPopups, setBlockPopups] = useStored<boolean>(
    "webna-block-popups",
    true,
  );
  const [blockTrackers, setBlockTrackers] = useStored<boolean>(
    "webna-block-trackers",
    true,
  );
  const [blockCookies, setBlockCookies] = useStored<boolean>(
    "webna-block-cookies",
    false,
  );
  const [blockLocation, setBlockLocation] = useStored<boolean>(
    "webna-block-location",
    true,
  );
  const [blockMic, setBlockMic] = useStored<boolean>("webna-block-mic", true);
  const [blockCamera, setBlockCamera] = useStored<boolean>(
    "webna-block-camera",
    true,
  );
  const [blockNotifications, setBlockNotifications] = useStored<boolean>(
    "webna-block-notifications",
    true,
  );
  const [blockAutoplay, setBlockAutoplay] = useStored<boolean>(
    "webna-block-autoplay",
    true,
  );
  const [blockJs, setBlockJs] = useStored<boolean>("webna-block-js", false);
  const [playerMode, setPlayerMode] = useState<"audio" | "video">("audio");
  const [queuedVideo, setQueuedVideo] = useState<{
    id: string;
    title: string;
    channel: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration: string;
    durationSeconds: number;
    quality: string;
  } | null>(null);
  const [article, setArticle] = useState<string | null>(null);
  const browsing = idx >= 0;
  const url = stack[idx] ?? "";

  const open = (rawUrl: string) => {
    let target = rawUrl;
    if (isCleanLinksEnabled()) {
      target = stripTrackingParams(target);
    }
    const isHttpsOnly =
      typeof window !== "undefined" &&
      localStorage.getItem("webna-https-only") !== "false";
    if (
      isHttpsOnly &&
      target.startsWith("http://") &&
      !target.includes("localhost")
    ) {
      target = target.replace("http://", "https://");
    }
    const u = ensureIframeCompatibleUrl(target);
    const next = [...stack.slice(0, idx + 1), u];
    setStack(next);
    setIdx(next.length - 1);
    setPanel(null);
    if (!isIncognito) {
      setHistory(
        [{ url: u, title: host(u), at: Date.now() }, ...history].slice(0, 300),
      );
    }
  };
  const go = (raw: string) => {
    const q = raw.trim();
    if (!q) return;
    if (/^https?:\/\//i.test(q)) return open(q);
    if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(q)) return open("https://" + q);

    if (AI_ENGINES[engine]) {
      const ai = AI_ENGINES[engine];
      if (ai.url.includes("?q=") || ai.url.includes("search?q=")) {
        return open(ai.url + encodeURIComponent(q));
      }
      return open(ai.url);
    }

    if (engine === "Google") {
      return open(
        `https://www.google.com/search?igu=1&q=${encodeURIComponent(q)}`,
      );
    }

    const baseEngine =
      engines?.[engine] ||
      DEFAULT_ENGINES[engine] ||
      DEFAULT_ENGINES["Google"] ||
      "https://www.google.com/search?igu=1&q=";
    open(baseEngine + encodeURIComponent(q));
  };
  const home = () => {
    setIdx(-1);
    setStack([]);
  };
  // returning from a web page opened from an article goes back to the article
  const isSaved = bookmarks.some((b) => b.url === url);

  return (
    <div className="min-h-[100dvh] bg-background">
      {browsing ? (
        <div className="fixed inset-0 flex flex-col">
          <BrowserView
            stack={stack}
            idx={idx}
            onNav={go}
            onMove={(d) =>
              setIdx(Math.min(stack.length - 1, Math.max(0, idx + d)))
            }
            onHome={home}
            isSaved={isSaved}
            onToggleSave={() =>
              setBookmarks(
                isSaved
                  ? bookmarks.filter((b) => b.url !== url)
                  : [{ url, title: host(url), at: Date.now() }, ...bookmarks],
              )
            }
            onOpenPanel={setPanel}
            onOpenPlayer={(mode) => {
              setPlayerMode(mode);
              setTab("player");
              home();
            }}
            isIncognito={isIncognito}
            onToggleIncognito={() => setIsIncognito(!isIncognito)}
          />
        </div>
      ) : (
        <div className="mx-auto max-w-xl px-4 pb-28">
          <div className="sticky top-0 z-30 -mx-4 bg-background px-4 pb-3 pt-4">
            {tab === "home" && (
              <div className="relative mb-3 flex items-center justify-center">
                <h1 className="text-2xl font-bold tracking-tight text-brand">
                  WebNa
                </h1>
                <button
                  onClick={() => setHomeMenu(true)}
                  className="absolute right-0 p-2 text-muted-foreground"
                  aria-label="Settings"
                >
                  <div className="size-6 rounded-full bg-card flex items-center justify-center">
                    ⚙️
                  </div>
                </button>
              </div>
            )}
            {tab === "player" ? (
              <div className="flex items-center justify-center py-1">
                <div className="flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner">
                  <button
                    onClick={() => setPlayerMode("audio")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      playerMode === "audio"
                        ? "bg-white dark:bg-background text-brand shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="Switch to Audio Player"
                  >
                    <Music className="size-3.5" />
                    <span>{t("audioPlayer")}</span>
                  </button>
                  <button
                    onClick={() => setPlayerMode("video")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      playerMode === "video"
                        ? "bg-white dark:bg-background text-brand shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="Switch to Video Player"
                  >
                    <Film className="size-3.5" />
                    <span>{t("videoPlayer")}</span>
                  </button>
                </div>
              </div>
            ) : (
              <SearchBar
                onSubmit={go}
                onLens={() => window.open("https://lens.google.com", "_blank")}
                engineName={engine}
                engineDomain={getEngineDomain(engine)}
                onEngineClick={() => setPanel("search")}
              />
            )}
          </div>
          {tab === "home" ? (
            <div className="space-y-6">
              <section>
                <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
                  {t("shortcuts")}
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {DIAL.map((d) => (
                    <button
                      key={d.u}
                      onClick={() => open(d.u)}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${host(d.u)}&sz=64`}
                          alt=""
                          className="size-7"
                        />
                      </span>
                      <span className="w-full truncate text-xs">{d.t}</span>
                    </button>
                  ))}
                </div>
              </section>
              <div className="my-3">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Site/App Hub
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  You can keep your favorite sites or apps here for quick
                  access.
                </p>
              </div>
              <section>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-semibold text-muted-foreground">
                    {t("categories")}
                  </h2>
                  <button
                    onClick={() => setAddingCategory(true)}
                    className="text-xs font-medium text-brand hover:underline"
                  >
                    {t("addCategory")}
                  </button>
                </div>
                {addingCategory && (
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Category name"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newCategory.trim()) {
                          const catName = newCategory.trim();
                          setCategories({ ...safeCategories, [catName]: [] });
                          setActiveCategory(catName);
                          setNewCategory("");
                          setAddingCategory(false);
                        }
                      }}
                      className="flex-1 rounded-xl border bg-card p-2 text-sm outline-none focus:border-brand"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        const catName = newCategory.trim();
                        if (catName) {
                          setCategories({ ...safeCategories, [catName]: [] });
                          setActiveCategory(catName);
                          setNewCategory("");
                          setAddingCategory(false);
                        }
                      }}
                      className="rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setNewCategory("");
                        setAddingCategory(false);
                      }}
                      className="rounded-xl bg-muted px-3 py-2 text-xs font-medium text-muted-foreground"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                {/* Horizontal categories without white background */}
                <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 py-1">
                  {Object.keys(safeCategories).map((cat) => (
                    <button
                      key={cat}
                      onClick={() =>
                        setActiveCategory(activeCategory === cat ? null : cat)
                      }
                      className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? "bg-brand text-brand-foreground font-semibold shadow-xs"
                          : "text-muted-foreground hover:text-foreground bg-transparent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                {activeCategory && (
                  <div className="grid grid-cols-4 gap-4">
                    {(safeCategories[activeCategory] || []).map((s, i) => (
                      <div
                        key={i}
                        className="relative group flex flex-col items-center"
                      >
                        <button
                          onClick={() => open(s.u)}
                          className="flex flex-col items-center gap-1 w-full"
                        >
                          <span className="flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-border/40 group-hover:border-brand/40 transition-colors">
                            <img
                              src={`https://www.google.com/s2/favicons?domain=${host(s.u)}&sz=64`}
                              alt=""
                              className="size-7"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display =
                                  "none";
                              }}
                            />
                          </span>
                          <span className="w-full truncate text-xs text-center">
                            {s.t}
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const current =
                              safeCategories[activeCategory] || [];
                            const updated = current.filter(
                              (_, idx) => idx !== i,
                            );
                            setCategories({
                              ...safeCategories,
                              [activeCategory]: updated,
                            });
                          }}
                          title="Remove shortcut"
                          className="absolute -top-1 -right-1 hidden group-hover:flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground text-[10px]"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setShortcutModalCategory(activeCategory);
                        setShortcutName("");
                        setShortcutUrl("");
                      }}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-dashed border-border group-hover:border-brand text-2xl text-muted-foreground transition-colors">
                        +
                      </span>
                      <span className="w-full truncate text-xs text-center font-medium">
                        Add shortcut
                      </span>
                    </button>
                  </div>
                )}
              </section>
            </div>
          ) : tab === "discover" ? (
            <Discover
              onOpen={setArticle}
              onOpenWeb={open}
              onPlayVideo={(v) => {
                setQueuedVideo({
                  id: v.id,
                  title: v.title,
                  channel: v.author,
                  videoUrl: v.videoUrl,
                  thumbnailUrl: v.thumbnailUrl,
                  duration: "00:30",
                  durationSeconds: 30,
                  quality: "720p HD",
                });
                setPlayerMode("video");
                setTab("player");
              }}
            />
          ) : tab === "player" ? (
            <div className="h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col">
              <AudioPlayerPanel
                playerMode={playerMode}
                onPlayerModeChange={setPlayerMode}
                initialVideoQueue={queuedVideo ? [queuedVideo] : undefined}
                onCloseVideo={() => setQueuedVideo(null)}
                onOpenUrl={open}
              />
            </div>
          ) : null}
        </div>
      )}

      {article && !browsing && (
        <ArticleView
          link={article}
          onBack={() => setArticle(null)}
          onOpenWeb={open}
          isSaved={savedLinks.some((s) => s.url === article)}
          onToggleSave={(urlToSave, titleToSave) => {
            const exists = savedLinks.some((s) => s.url === urlToSave);
            if (exists) {
              setSavedLinks(savedLinks.filter((s) => s.url !== urlToSave));
            } else {
              setSavedLinks([
                { url: urlToSave, title: titleToSave, at: Date.now() },
                ...savedLinks,
              ]);
            }
          }}
        />
      )}

      <BottomTabs
        active={tab}
        tabCount={tabs.length}
        onChange={(t) => {
          setTab(t);
          home();
          setArticle(null);
          setPanel(t === "tabs" ? "tabs" : null);
        }}
      />

      {panel === "tabs" ? (
        <TabSwitcherPanel
          tabs={tabs}
          activeTabId={activeTabId}
          onSelectTab={(id) => {
            setActiveTabId(id);
            setTab("home");
            setPanel(null);
          }}
          onCloseTab={(id) => {
            const newTabs = tabs.filter((t) => t.id !== id);
            setTabs(newTabs);
            localStorage.setItem("webna-browser-tabs", JSON.stringify(newTabs));
            if (activeTabId === id && newTabs.length > 0) {
              setActiveTabId(newTabs[0].id);
            }
          }}
          onNewTab={() => {
            const newTab: BrowserTab = {
              id: `tab-${Date.now()}`,
              url: "https://www.google.com/?igu=1",
              title: "New Tab",
              active: true,
            };
            const newTabs = [
              ...tabs.map((t) => ({ ...t, active: false })),
              newTab,
            ];
            setTabs(newTabs);
            setActiveTabId(newTab.id);
            localStorage.setItem("webna-browser-tabs", JSON.stringify(newTabs));
            setTab("home");
            setPanel(null);
          }}
          onCloseAll={() => {
            setTabs([]);
            localStorage.removeItem("webna-browser-tabs");
            setTab("home");
            setPanel(null);
          }}
        />
      ) : (
        panel && (
          <div className="fixed inset-0 z-50 flex flex-col bg-background">
            {panel === "settings" || panel === "blockings" ? (
              <SettingsManager
                onClose={() => setPanel(null)}
                initialSubView={panel === "blockings" ? "blockings" : null}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                history={history}
                setHistory={setHistory}
                savedLinks={savedLinks}
                setSavedLinks={setSavedLinks}
                categories={safeCategories}
                setCategories={setCategories}
                blockAds={blockAds}
                setBlockAds={setBlockAds}
                blockPopups={blockPopups}
                setBlockPopups={setBlockPopups}
                blockTrackers={blockTrackers}
                setBlockTrackers={setBlockTrackers}
                blockCookies={blockCookies}
                setBlockCookies={setBlockCookies}
                blockLocation={blockLocation}
                setBlockLocation={setBlockLocation}
                blockMic={blockMic}
                setBlockMic={setBlockMic}
                blockCamera={blockCamera}
                setBlockCamera={setBlockCamera}
                blockNotifications={blockNotifications}
                setBlockNotifications={setBlockNotifications}
                blockAutoplay={blockAutoplay}
                setBlockAutoplay={setBlockAutoplay}
                blockJs={blockJs}
                setBlockJs={setBlockJs}
              />
            ) : (
              <>
                <div className="flex items-center justify-between border-b p-3 sm:p-4">
                  {panel === "player" ? (
                    <div className="flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner">
                      <button
                        onClick={() => setPlayerMode("audio")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          playerMode === "audio"
                            ? "bg-white dark:bg-background text-brand shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        aria-label="Switch to Audio Player"
                      >
                        <Music className="size-3.5" />
                        <span>{t("audioPlayer")}</span>
                      </button>
                      <button
                        onClick={() => setPlayerMode("video")}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          playerMode === "video"
                            ? "bg-white dark:bg-background text-brand shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        aria-label="Switch to Video Player"
                      >
                        <Film className="size-3.5" />
                        <span>{t("videoPlayer")}</span>
                      </button>
                    </div>
                  ) : (
                    <h2 className="text-lg font-semibold">
                      {
                        {
                          bookmarks: t("bookmarks"),
                          "saved-links": t("savedLinks"),
                          history: t("history"),
                          settings: t("settings"),
                          player: t("player"),
                          account: "Account",
                          search: t("searchEngines"),
                          "search-add": t("add"),
                        }[panel!]
                      }
                    </h2>
                  )}
                  <button onClick={() => setPanel(null)} aria-label="Close">
                    <X className="size-5" />
                  </button>
                </div>
                <div
                  className={`flex-1 flex flex-col min-h-0 ${
                    panel === "player"
                      ? "p-0 overflow-hidden"
                      : "p-4 overflow-y-auto"
                  }`}
                >
                  {panel === "player" && (
                    <AudioPlayerPanel
                      playerMode={playerMode}
                      onPlayerModeChange={setPlayerMode}
                      onOpenUrl={open}
                    />
                  )}
                  {panel === "search" && (
                    <div className="space-y-6 pb-6">
                      {/* Section 1: Standard Web Search Engines */}
                      <section>
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                            <Globe className="size-3.5 text-brand" />
                            <span>Search engines</span>
                          </h3>
                          <span className="text-[11px] text-muted-foreground">
                            Active:{" "}
                            <strong className="text-brand font-semibold">
                              {engine}
                            </strong>
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                          {Object.entries(engines)
                            .filter(([name]) => name !== "ChatGPT")
                            .map(([name]) => {
                              const isSelected = engine === name;
                              const domain = getEngineDomain(name);
                              return (
                                <button
                                  key={name}
                                  type="button"
                                  onClick={() => {
                                    setEngine(name);
                                    setPanel(null);
                                  }}
                                  className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${
                                    isSelected
                                      ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand"
                                      : "border-border/60 hover:border-border"
                                  }`}
                                  aria-label={`Select ${name} search engine`}
                                >
                                  {isSelected && (
                                    <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs">
                                      <Check className="size-2.5 stroke-[3]" />
                                    </span>
                                  )}
                                  <div className="flex size-7 items-center justify-center rounded-full">
                                    {name === "Google" ? (
                                      <span
                                        className="text-xl font-bold leading-none"
                                        style={{
                                          background: "var(--gradient-google)",
                                          WebkitBackgroundClip: "text",
                                          color: "transparent",
                                        }}
                                      >
                                        G
                                      </span>
                                    ) : (
                                      <img
                                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                                        alt={name}
                                        className="size-6 object-contain rounded-full"
                                        onError={(e) => {
                                          (
                                            e.target as HTMLElement
                                          ).style.display = "none";
                                        }}
                                      />
                                    )}
                                  </div>
                                  <span className="text-xs font-medium truncate w-full text-foreground group-hover:text-foreground">
                                    {name}
                                  </span>
                                </button>
                              );
                            })}
                          <button
                            type="button"
                            onClick={() => setPanel("search-add")}
                            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-border/80 bg-card/60 p-3 text-center transition-all hover:border-brand hover:bg-card active:scale-95 text-muted-foreground hover:text-foreground"
                          >
                            <div className="flex size-7 items-center justify-center rounded-full bg-muted font-bold text-sm">
                              +
                            </div>
                            <span className="text-xs font-medium truncate w-full">
                              Add
                            </span>
                          </button>
                        </div>
                      </section>

                      {/* Section 2: AI Search & Chats (at the bottom) */}
                      <section className="pt-4 border-t border-border/60">
                        <div className="mb-3">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                            <Sparkles className="size-3.5 text-brand" />
                            <span>AI search & chats</span>
                          </h3>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            Choose popular AI sites and apps to search or chat
                            with
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                          {Object.values(AI_ENGINES).map((ai) => {
                            const isSelected = engine === ai.name;
                            return (
                              <button
                                key={ai.name}
                                type="button"
                                onClick={() => {
                                  setEngine(ai.name);
                                  setPanel(null);
                                }}
                                className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${
                                  isSelected
                                    ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand"
                                    : "border-border/60 hover:border-border"
                                }`}
                                title={ai.desc}
                                aria-label={`Select ${ai.name}`}
                              >
                                {isSelected && (
                                  <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs">
                                    <Check className="size-2.5 stroke-[3]" />
                                  </span>
                                )}
                                <div className="flex size-7 items-center justify-center rounded-full">
                                  <img
                                    src={`https://www.google.com/s2/favicons?domain=${ai.domain}&sz=64`}
                                    alt={ai.name}
                                    className="size-6 object-contain rounded-full"
                                    onError={(e) => {
                                      (e.target as HTMLElement).style.display =
                                        "none";
                                    }}
                                  />
                                </div>
                                <span className="text-xs font-medium truncate w-full text-foreground group-hover:text-foreground">
                                  {ai.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    </div>
                  )}
                  {panel === "search-add" && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Engine Name"
                        id="new-engine-name"
                        className="w-full rounded-xl border bg-card p-3"
                      />
                      <input
                        type="text"
                        placeholder="Query URL (e.g. https://example.com/search?q=)"
                        id="new-engine-url"
                        className="w-full rounded-xl border bg-card p-3"
                      />
                      <button
                        onClick={() => {
                          const name = (
                            document.getElementById(
                              "new-engine-name",
                            ) as HTMLInputElement
                          ).value;
                          const url = (
                            document.getElementById(
                              "new-engine-url",
                            ) as HTMLInputElement
                          ).value;
                          if (name && url) {
                            setEngines({ ...engines, [name]: url });
                            setPanel("search");
                          }
                        }}
                        className="w-full rounded-xl bg-brand p-3 text-brand-foreground"
                      >
                        Add Search Engine
                      </button>
                      <button
                        onClick={() => setPanel("search")}
                        className="w-full rounded-xl bg-card p-3"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  {panel === "bookmarks" && (
                    <BookmarksManager
                      items={bookmarks}
                      onGo={open}
                      onRemove={(e) =>
                        setBookmarks(bookmarks.filter((b) => b !== e))
                      }
                      onAdd={(e) => setBookmarks([e, ...bookmarks])}
                    />
                  )}
                  {panel === "saved-links" && (
                    <SavedLinksManager
                      items={savedLinks}
                      onGo={open}
                      onRemove={(e) =>
                        setSavedLinks(savedLinks.filter((b) => b !== e))
                      }
                      onAdd={(e) => setSavedLinks([e, ...savedLinks])}
                    />
                  )}
                  {panel === "history" && (
                    <>
                      {history.length > 0 && (
                        <button
                          onClick={() => setHistory([])}
                          className="mb-3 text-sm text-destructive"
                        >
                          Clear history
                        </button>
                      )}
                      <List
                        items={history}
                        onGo={open}
                        onRemove={(e) =>
                          setHistory(history.filter((h) => h !== e))
                        }
                      />
                    </>
                  )}
                  {panel === "account" && (
                    <div className="space-y-4 p-2">
                      <div className="flex items-center gap-4 rounded-2xl bg-card p-4 border shadow-xs">
                        <div className="size-14 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl shrink-0">
                          M
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-base truncate">
                            musichub661@gmail.com
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Connected Account & Cloud Sync
                          </p>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-card p-4 border space-y-3 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Account Status:</span>
                          <span className="font-semibold text-brand">
                            Active & Verified
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sync Storage:</span>
                          <span className="font-medium">
                            Playlists & Favorites Synced
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )
      )}

      {/* Home Page Menu Modal (matching user's screenshot & requested sections) */}
      {homeMenu && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setHomeMenu(false)}
        >
          <div
            className="w-full rounded-t-3xl bg-card p-4 pb-10 shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-end border-b pb-2">
              <button
                onClick={() => setHomeMenu(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            {[
              {
                l: isIncognito ? "Turn off Incognito" : "Incognito mode",
                I: EyeOff,
                f: () => {
                  setHomeMenu(false);
                  setIsIncognito(!isIncognito);
                  toast.success(
                    isIncognito
                      ? "Incognito mode turned off"
                      : "Incognito mode turned on",
                  );
                },
              },
              {
                l: t("setDefaultBrowser"),
                I: Globe,
                f: () => {
                  setHomeMenu(false);
                  if (navigator.setAppBadge) {
                    try {
                      navigator.setAppBadge(1);
                    } catch (e) {
                      console.log(e);
                    }
                  }
                  alert(
                    "WebNa is now set as your preferred in-app browser experience! To make WebNa your system default browser on Android/iOS, use your browser's 'Add to Home Screen' or default browser settings.",
                  );
                },
              },
              {
                l: t("bookmarks"),
                I: Star,
                f: () => {
                  setHomeMenu(false);
                  setPanel("bookmarks");
                },
              },
              {
                l: t("history"),
                I: RotateCw,
                f: () => {
                  setHomeMenu(false);
                  setPanel("history");
                },
              },
              {
                l: t("savedLinks"),
                I: Bookmark,
                f: () => {
                  setHomeMenu(false);
                  setPanel("saved-links");
                },
              },

              {
                l: t("searchEngines"),
                I: Search,
                f: () => {
                  setHomeMenu(false);
                  setPanel("search");
                },
              },
              {
                l: t("settings"),
                I: SettingsIcon,
                f: () => {
                  setHomeMenu(false);
                  setPanel("settings");
                },
              },
              {
                l: t("home"),
                I: HomeIcon,
                f: () => {
                  setHomeMenu(false);
                  home();
                  setTab("home");
                  setArticle(null);
                },
              },
            ].map(({ l, I, f }) => (
              <button
                key={l}
                onClick={f}
                className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors"
              >
                <I className="size-5 text-brand" />
                <span>{l}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add Shortcut Dialog Modal */}
      {shortcutModalCategory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShortcutModalCategory(null);
              setShortcutName("");
              setShortcutUrl("");
            }
          }}
        >
          <div className="w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base text-foreground">
                  Add shortcut
                </h3>
                <p className="text-xs text-muted-foreground">
                  To category:{" "}
                  <span className="font-medium text-foreground">
                    {shortcutModalCategory}
                  </span>
                </p>
              </div>
              <button
                onClick={() => {
                  setShortcutModalCategory(null);
                  setShortcutName("");
                  setShortcutUrl("");
                }}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Shortcut name
                </label>
                <input
                  type="text"
                  placeholder="e.g. YouTube"
                  value={shortcutName}
                  onChange={(e) => setShortcutName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Shortcut link
                </label>
                <input
                  type="text"
                  placeholder="e.g. https://youtube.com or youtube.com"
                  value={shortcutUrl}
                  onChange={(e) => setShortcutUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const name = shortcutName.trim();
                      const rawUrl = shortcutUrl.trim();
                      if (name && rawUrl && shortcutModalCategory) {
                        const validUrl =
                          rawUrl.startsWith("http://") ||
                          rawUrl.startsWith("https://")
                            ? rawUrl
                            : `https://${rawUrl}`;
                        const current =
                          safeCategories[shortcutModalCategory] || [];
                        setCategories({
                          ...safeCategories,
                          [shortcutModalCategory]: [
                            ...current,
                            { t: name, u: validUrl },
                          ],
                        });
                        setShortcutModalCategory(null);
                        setShortcutName("");
                        setShortcutUrl("");
                      }
                    }
                  }}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setShortcutModalCategory(null);
                  setShortcutName("");
                  setShortcutUrl("");
                }}
                className="flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = shortcutName.trim();
                  const rawUrl = shortcutUrl.trim();
                  if (name && rawUrl && shortcutModalCategory) {
                    const validUrl =
                      rawUrl.startsWith("http://") ||
                      rawUrl.startsWith("https://")
                        ? rawUrl
                        : `https://${rawUrl}`;
                    const current = safeCategories[shortcutModalCategory] || [];
                    setCategories({
                      ...safeCategories,
                      [shortcutModalCategory]: [
                        ...current,
                        { t: name, u: validUrl },
                      ],
                    });
                    setShortcutModalCategory(null);
                    setShortcutName("");
                    setShortcutUrl("");
                  }
                }}
                disabled={!shortcutName.trim() || !shortcutUrl.trim()}
                className="flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                Add shortcut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function List({
  items,
  onGo,
  onRemove,
}: {
  items: Entry[];
  onGo: (u: string) => void;
  onRemove: (e: Entry) => void;
}) {
  if (!items.length)
    return (
      <p className="rounded-2xl bg-card p-4 text-center text-sm text-muted-foreground">
        Nothing here yet
      </p>
    );
  return (
    <div className="rounded-2xl bg-card px-3 shadow-sm">
      {items.map((e, i) => (
        <div
          key={i}
          className="flex items-center gap-3 border-b py-3 last:border-0"
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${host(e.url)}&sz=32`}
            alt=""
            className="size-5"
          />
          <button
            onClick={() => onGo(e.url)}
            className="min-w-0 flex-1 text-left"
          >
            <p className="truncate text-sm font-medium">{e.title}</p>
            <p className="truncate text-xs text-muted-foreground">{e.url}</p>
          </button>
          <button onClick={() => onRemove(e)} aria-label="Remove">
            <X className="size-4 text-muted-foreground" />
          </button>
        </div>
      ))}
    </div>
  );
}
