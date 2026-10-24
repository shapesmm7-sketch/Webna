import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-BKOpR0qA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tiktok.functions-CxLNLtL2.js
/**
* Normalizes TikTok cover URLs to ensure they display reliably in all web browsers.
* TikTok CDN links frequently use .heic formats or block direct hotlinking with crossOrigin.
* Passing them through wsrv.nl converts them to universal high-speed JPEGs.
*/
function normalizeTikTokCoverUrl(rawUrl) {
	if (!rawUrl) return "";
	let fullUrl = rawUrl.trim();
	if (fullUrl.startsWith("/")) fullUrl = `https://www.tikwm.com${fullUrl}`;
	if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) return fullUrl;
	return `https://wsrv.nl/?url=${encodeURIComponent(fullUrl)}&output=jpg`;
}
var FALLBACK_TIKTOK_VIDEOS = [
	{
		video_id: "7680205818096127252",
		title: "Se que otro amor encontrarás #indirectas #estadoparawhatsapp #music #parati #video",
		image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		play: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		subtitle: "@user361528580 • 319.8K views",
		author_id: "user361528580",
		author_name: "User 361528",
		play_count: 319802,
		digg_count: 42100,
		tiktokWebUrl: "https://www.tiktok.com/@user361528580/video/7680205818096127252"
	},
	{
		video_id: "7681206916353166624",
		title: "This is what heaven must look like. A waterfall falling straight into the ocean #nature #travel #fyp",
		image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		play: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		subtitle: "@briddl • 12.1M views",
		author_id: "briddl",
		author_name: "Briddl",
		play_count: 12132757,
		digg_count: 980400,
		tiktokWebUrl: "https://www.tiktok.com/@briddl/video/7681206916353166624"
	},
	{
		video_id: "7689205393364487455",
		title: "POV: Trying this viral transition trend for the first time #fyp #trending",
		image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		play: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		subtitle: "@brookemonk_ • 18.5M views",
		author_id: "brookemonk_",
		author_name: "Brooke Monk",
		play_count: 18549599,
		digg_count: 24e5,
		tiktokWebUrl: "https://www.tiktok.com/@brookemonk_/video/7689205393364487455"
	},
	{
		video_id: "7691409088852266254",
		title: "Love an updo moment 🤎🧸 #hairinspo #hairtok #voluminoushair #capcut",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
		play: "https://media.w3.org/2010/05/sintel/trailer.mp4",
		subtitle: "@j_sophia • 1.9M views",
		author_id: "j_sophia",
		author_name: "Sophia J",
		play_count: 1984249,
		digg_count: 312e3,
		tiktokWebUrl: "https://www.tiktok.com/@j_sophia/video/7691409088852266254"
	},
	{
		video_id: "7694020380368899329",
		title: "Viral mood & daily vibe #глобальныерекомендации #крутая #тренд #vibes",
		image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		play: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		subtitle: "@befishechka • 3.0M views",
		author_id: "befishechka",
		author_name: "Befishechka",
		play_count: 3086439,
		digg_count: 489e3,
		tiktokWebUrl: "https://www.tiktok.com/@befishechka/video/7694020380368899329"
	}
];
var cachedVideos = [];
var cacheTimestamp = 0;
var CACHE_TTL_MS = 3e5;
var isFetchingTikTok = false;
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
		const values = Object.values(dataObj);
		if (values.length > 0 && typeof values[0] === "object" && values[0] !== null) return values;
	}
	return [];
}
function mapToTikTokVideos(items) {
	const seenIds = /* @__PURE__ */ new Set();
	const results = [];
	for (let index = 0; index < items.length; index++) {
		const v = items[index];
		if (!v) continue;
		const videoId = String(v.video_id || v.id || `tik-${Date.now()}-${index}`);
		if (seenIds.has(videoId)) continue;
		seenIds.add(videoId);
		const rawCover = v.cover || v.origin_cover || v.cover_url || v.dynamic_cover || v.ai_dynamic_cover || "";
		const playUrl = v.play || v.hdplay || v.wmplay || "";
		if (!playUrl) continue;
		const authorId = v.author?.unique_id || v.author?.nickname || "tiktok.creator";
		const authorName = v.author?.nickname || authorId;
		const playCount = typeof v.play_count === "number" ? v.play_count : 15e4;
		const diggCount = typeof v.digg_count === "number" ? v.digg_count : 24e3;
		const title = typeof v.title === "string" && v.title.trim() ? v.title.trim() : typeof v.content_desc === "string" && v.content_desc.trim() ? v.content_desc.trim() : typeof v.desc === "string" && v.desc.trim() ? v.desc.trim() : "Trending TikTok Viral Clip #fyp";
		const subtitle = `@${authorId} • ${formatViews(playCount)} views`;
		const tiktokWebUrl = `https://www.tiktok.com/@${authorId.replace(/^@/, "")}/video/${videoId}`;
		const optimizedCover = normalizeTikTokCoverUrl(rawCover);
		results.push({
			video_id: videoId,
			title,
			image: optimizedCover,
			cover: optimizedCover,
			origin_cover: rawCover.startsWith("/") ? `https://www.tikwm.com${rawCover}` : rawCover,
			videoUrl: playUrl.startsWith("/") ? `https://www.tikwm.com${playUrl}` : playUrl,
			play: playUrl.startsWith("/") ? `https://www.tikwm.com${playUrl}` : playUrl,
			subtitle,
			author_id: authorId,
			author_name: authorName,
			play_count: playCount,
			digg_count: diggCount,
			tiktokWebUrl
		});
	}
	return results;
}
async function refreshTikTokCache(count = 20) {
	if (isFetchingTikTok) return cachedVideos.length > 0 ? cachedVideos : FALLBACK_TIKTOK_VIDEOS;
	isFetchingTikTok = true;
	try {
		try {
			const primaryResponse = await fetch("https://www.tikwm.com/api/feed/list", {
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					count,
					region: "US"
				}),
				signal: AbortSignal.timeout(6e3)
			});
			if (primaryResponse.ok) {
				const json = await primaryResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							cacheTimestamp = Date.now();
							return mapped;
						}
					}
				}
			}
		} catch {}
		try {
			const formResponse = await fetch("https://www.tikwm.com/api/feed/list", {
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `count=${count}&region=US`,
				signal: AbortSignal.timeout(6e3)
			});
			if (formResponse.ok) {
				const json = await formResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							cacheTimestamp = Date.now();
							return mapped;
						}
					}
				}
			}
		} catch {}
		try {
			const getListResponse = await fetch(`https://www.tikwm.com/api/feed/list?count=${count}&region=US`, {
				method: "GET",
				headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36" },
				signal: AbortSignal.timeout(6e3)
			});
			if (getListResponse.ok) {
				const json = await getListResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							cacheTimestamp = Date.now();
							return mapped;
						}
					}
				}
			}
		} catch {}
		if (cachedVideos.length > 0) return cachedVideos;
		cachedVideos = FALLBACK_TIKTOK_VIDEOS;
		cacheTimestamp = Date.now();
		return FALLBACK_TIKTOK_VIDEOS;
	} finally {
		isFetchingTikTok = false;
	}
}
if (typeof fetch !== "undefined") setTimeout(() => {
	refreshTikTokCache(20).catch(() => {});
}, 200);
var getTikTokFeed_createServerFn_handler = createServerRpc({
	id: "12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c",
	name: "getTikTokFeed",
	filename: "src/lib/tiktok.functions.ts"
}, (opts) => getTikTokFeed.__executeServer(opts));
var getTikTokFeed = createServerFn({ method: "GET" }).inputValidator((d) => d ?? {}).handler(getTikTokFeed_createServerFn_handler, async ({ data }) => {
	const now = Date.now();
	const count = data?.count || 20;
	if (cachedVideos.length > 0) {
		if (now - cacheTimestamp > CACHE_TTL_MS) refreshTikTokCache(count).catch(() => {});
		return cachedVideos;
	}
	return refreshTikTokCache(count);
});
//#endregion
export { getTikTokFeed_createServerFn_handler };
