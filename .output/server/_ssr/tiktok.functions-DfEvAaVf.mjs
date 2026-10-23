import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tiktok.functions-DfEvAaVf.js
var cachedVideos = [];
var cacheTimestamp = 0;
var CACHE_TTL_MS = 12e4;
var FALLBACK_TRENDING_VIDEOS = [
  {
    video_id: "tik-trend-1",
    title: "Mesmerizing nature time-lapse in 4K #fyp #viral #nature",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    videoUrl: "/videos/flower.mp4",
    play: "/videos/flower.mp4",
    subtitle: "@nature.wonders • 1.4M views",
    author_id: "nature.wonders",
    author_name: "Nature Wonders",
    play_count: 142e4,
    digg_count: 185e3,
  },
  {
    video_id: "tik-trend-2",
    title:
      "Crazy 3D animated character loop! Who made this? 🔥 #animation #trending",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    play: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    subtitle: "@animation_lab • 890.5K views",
    author_id: "animation_lab",
    author_name: "Animation Lab",
    play_count: 890500,
    digg_count: 124e3,
  },
  {
    video_id: "tik-trend-3",
    title:
      "Cinematic adventure scene that feels like a fantasy movie 🎬✨ #cinematography",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    play: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    subtitle: "@cinema.shots • 2.1M views",
    author_id: "cinema.shots",
    author_name: "Cinema Shots",
    play_count: 21e5,
    digg_count: 34e4,
  },
  {
    video_id: "tik-trend-4",
    title:
      "Fast-paced neon highway visual odyssey 🏎️💨 #aesthetic #vibe #motion",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    videoUrl: "/videos/movie_300.mp4",
    play: "/videos/movie_300.mp4",
    subtitle: "@visuals_daily • 645.2K views",
    author_id: "visuals_daily",
    author_name: "Visuals Daily",
    play_count: 645200,
    digg_count: 78e3,
  },
  {
    video_id: "tik-trend-5",
    title:
      "Viral creative transitions you have to try today 📲✨ #editing #transition #tutorial",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    play: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    subtitle: "@creator.hacks • 3.5M views",
    author_id: "creator.hacks",
    author_name: "Creator Hacks",
    play_count: 35e5,
    digg_count: 512e3,
  },
  {
    video_id: "tik-trend-6",
    title:
      "Golden hour sunset vibes with lofi beats 🌅🎶 #sunset #peace #chill",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    videoUrl: "/videos/flower.mp4",
    play: "/videos/flower.mp4",
    subtitle: "@chill.horizon • 1.1M views",
    author_id: "chill.horizon",
    author_name: "Chill Horizon",
    play_count: 11e5,
    digg_count: 198e3,
  },
];
function formatViews(count) {
  if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
  if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
  return count > 0 ? count.toLocaleString() : "Trending";
}
function parseVideosFromResponse(json) {
  if (!json || typeof json !== "object") return [];
  const obj = json;
  if (Array.isArray(obj.data)) return obj.data;
  if (obj.data && typeof obj.data === "object") {
    const dataObj = obj.data;
    if (Array.isArray(dataObj.videos)) return dataObj.videos;
    if (Array.isArray(dataObj.posts)) return dataObj.posts;
  }
  return [];
}
function mapToTikTokVideos(items) {
  const seenIds = /* @__PURE__ */ new Set();
  const results = [];
  for (let index = 0; index < items.length; index++) {
    const v = items[index];
    if (!v || (!v.video_id && !v.id && !v.play && !v.cover)) continue;
    const videoId = String(v.video_id || v.id || `tik-${Date.now()}-${index}`);
    if (seenIds.has(videoId)) continue;
    seenIds.add(videoId);
    const coverUrl =
      v.cover ||
      v.cover_url ||
      v.origin_cover ||
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80";
    const playUrl =
      v.play ||
      v.hdplay ||
      v.wmplay ||
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
    const authorId =
      v.author?.unique_id || v.author?.nickname || "tiktok.creator";
    const authorName = v.author?.nickname || authorId;
    const playCount = typeof v.play_count === "number" ? v.play_count : 125e3;
    const diggCount = typeof v.digg_count === "number" ? v.digg_count : 18400;
    const title =
      v.title && v.title.trim()
        ? v.title.trim()
        : v.desc && v.desc.trim()
          ? v.desc.trim()
          : "Trending TikTok Viral Clip #fyp";
    const subtitle = `@${authorId} • ${formatViews(playCount)} views`;
    results.push({
      video_id: videoId,
      title,
      image: coverUrl,
      cover: coverUrl,
      videoUrl: playUrl,
      play: playUrl,
      subtitle,
      author_id: authorId,
      author_name: authorName,
      play_count: playCount,
      digg_count: diggCount,
    });
  }
  return results;
}
var getTikTokFeed_createServerFn_handler = createServerRpc(
  {
    id: "12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c",
    name: "getTikTokFeed",
    filename: "src/lib/tiktok.functions.ts",
  },
  (opts) => getTikTokFeed.__executeServer(opts),
);
var getTikTokFeed = createServerFn({ method: "GET" })
  .inputValidator((d) => d ?? {})
  .handler(getTikTokFeed_createServerFn_handler, async ({ data }) => {
    const now = Date.now();
    if (cachedVideos.length > 0 && now - cacheTimestamp < CACHE_TTL_MS)
      return cachedVideos;
    const count = data?.count || 20;
    try {
      const primaryResponse = await fetch(
        `https://www.tikwm.com/api/feed/list?count=${count}&region=US`,
        {
          method: "POST",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            count,
            region: "US",
          }),
          signal: AbortSignal.timeout(6e3),
        },
      );
      if (primaryResponse.ok) {
        const json = await primaryResponse.json();
        if (json.code === 0) {
          const rawVideos = parseVideosFromResponse(json);
          if (rawVideos.length > 0) {
            const mapped = mapToTikTokVideos(rawVideos);
            cachedVideos = mapped;
            cacheTimestamp = Date.now();
            return mapped;
          }
        }
      }
    } catch (primaryErr) {
      console.warn("Primary TikTok feed/list POST request error:", primaryErr);
    }
    try {
      const fallbackResponse = await fetch(
        `https://www.tikwm.com/api/feed/list?region=US&count=${count}`,
        {
          method: "GET",
          headers: { "User-Agent": "Mozilla/5.0" },
          signal: AbortSignal.timeout(6e3),
        },
      );
      if (fallbackResponse.ok) {
        const json = await fallbackResponse.json();
        if (json.code === 0) {
          const rawVideos = parseVideosFromResponse(json);
          if (rawVideos.length > 0) {
            const mapped = mapToTikTokVideos(rawVideos);
            cachedVideos = mapped;
            cacheTimestamp = Date.now();
            return mapped;
          }
        }
      }
    } catch (fallbackErr) {
      console.warn("Fallback TikTok feed/list GET request error:", fallbackErr);
    }
    try {
      const trendingResponse = await fetch(
        `https://www.tikwm.com/api/feed/trending?count=${count}`,
        {
          method: "GET",
          headers: { "User-Agent": "Mozilla/5.0" },
          signal: AbortSignal.timeout(5e3),
        },
      );
      if (trendingResponse.ok) {
        const rawVideos = parseVideosFromResponse(
          await trendingResponse.json(),
        );
        if (rawVideos.length > 0) {
          const mapped = mapToTikTokVideos(rawVideos);
          cachedVideos = mapped;
          cacheTimestamp = Date.now();
          return mapped;
        }
      }
    } catch (trendingErr) {
      console.warn("Trending endpoint GET request error:", trendingErr);
    }
    if (cachedVideos.length > 0) return cachedVideos;
    cachedVideos = FALLBACK_TRENDING_VIDEOS;
    cacheTimestamp = Date.now();
    return FALLBACK_TRENDING_VIDEOS;
  });
//#endregion
export { getTikTokFeed_createServerFn_handler };
