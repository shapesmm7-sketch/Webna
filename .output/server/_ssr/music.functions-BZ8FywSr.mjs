import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/music.functions-BZ8FywSr.js
var cache = null;
var CACHE_TTL = 216e5;
var getTrendingTracks_createServerFn_handler = createServerRpc({
	id: "97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6",
	name: "getTrendingTracks",
	filename: "src/lib/music.functions.ts"
}, (opts) => getTrendingTracks.__executeServer(opts));
var getTrendingTracks = createServerFn({ method: "GET" }).handler(getTrendingTracks_createServerFn_handler, async () => {
	const now = Date.now();
	if (cache && now - cache.timestamp < CACHE_TTL) return cache.data;
	try {
		const response = await fetch("https://itunes.apple.com/us/rss/topsongs/limit=30/json");
		if (!response.ok) throw new Error("Failed to fetch iTunes");
		const data = ((await response.json()).feed.entry || []).map((entry, index) => {
			let previewUrl = "";
			if (Array.isArray(entry.link)) previewUrl = entry.link.find((l) => l.attributes?.["im:assetType"] === "preview" || l.attributes?.type?.includes("audio"))?.attributes?.href || entry.link[1]?.attributes?.href || "";
			else if (entry.link?.attributes?.href) previewUrl = entry.link.attributes.href;
			const title = entry["im:name"]?.label || entry.title?.label || "Track";
			const artist = entry["im:artist"]?.label || "Artist";
			return {
				id: `apple-trend-${index}`,
				title,
				artist,
				coverUrl: entry["im:image"]?.[2]?.label || entry["im:image"]?.[0]?.label || "",
				rank: index + 1,
				previewUrl,
				platform: "apple",
				platformName: "Apple Music",
				platformColor: "#FC3C44",
				externalUrl: `https://music.apple.com/us/search?term=${encodeURIComponent(title + " " + artist)}`
			};
		});
		cache = {
			data,
			timestamp: now
		};
		return data;
	} catch (error) {
		console.error("Error fetching trending tracks:", error);
		return cache?.data || [];
	}
});
var searchMusicTracks_createServerFn_handler = createServerRpc({
	id: "d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4",
	name: "searchMusicTracks",
	filename: "src/lib/music.functions.ts"
}, (opts) => searchMusicTracks.__executeServer(opts));
var searchMusicTracks = createServerFn({ method: "GET" }).validator((input) => {
	if (typeof input === "string") return {
		term: input,
		platform: "all"
	};
	return {
		term: input?.term || "",
		platform: input?.platform || "all"
	};
}).handler(searchMusicTracks_createServerFn_handler, async ({ data }) => {
	const term = data.term?.trim();
	if (!term) return [];
	const platform = (data.platform || "all").toLowerCase();
	if (platform === "apple" || platform === "itunes") try {
		const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=30`);
		if (!res.ok) throw new Error("Apple Music search failed");
		return ((await res.json()).results || []).map((item, idx) => {
			const title = item.trackName || "Track";
			const artist = item.artistName || "Artist";
			return {
				id: `apple-${item.trackId || idx}`,
				title,
				artist,
				coverUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "600x600bb") : "",
				rank: idx + 1,
				previewUrl: item.previewUrl || "",
				platform: "apple",
				platformName: "Apple Music",
				platformColor: "#FC3C44",
				externalUrl: item.trackViewUrl || `https://music.apple.com/us/search?term=${encodeURIComponent(title + " " + artist)}`
			};
		});
	} catch (err) {
		console.error("Apple Music search error:", err);
		return [];
	}
	if (platform === "spotify") try {
		const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`);
		if (!res.ok) throw new Error("Spotify search query failed");
		return ((await res.json()).data || []).map((item, idx) => {
			const title = item.title || "Track";
			const artist = item.artist?.name || "Artist";
			return {
				id: `spotify-${item.id || idx}`,
				title,
				artist,
				coverUrl: item.album?.cover_big || item.album?.cover_medium || item.album?.cover || "",
				rank: idx + 1,
				previewUrl: item.preview || "",
				platform: "spotify",
				platformName: "Spotify",
				platformColor: "#1DB954",
				externalUrl: `https://open.spotify.com/search/${encodeURIComponent(title + " " + artist)}`,
				duration: item.duration
			};
		});
	} catch (err) {
		console.error("Spotify search error:", err);
		return [];
	}
	if (platform === "youtube") try {
		const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`);
		if (!res.ok) throw new Error("YouTube search failed");
		return ((await res.json()).data || []).map((item, idx) => {
			const title = item.title || "Track";
			const artist = item.artist?.name || "Artist";
			return {
				id: `yt-${item.id || idx}`,
				title,
				artist,
				coverUrl: item.album?.cover_big || item.album?.cover_medium || item.album?.cover || "",
				rank: idx + 1,
				previewUrl: item.preview || "",
				platform: "youtube",
				platformName: "YouTube Music",
				platformColor: "#FF0000",
				externalUrl: `https://music.youtube.com/search?q=${encodeURIComponent(title + " " + artist)}`
			};
		});
	} catch (err) {
		console.error("YouTube Music search error:", err);
		return [];
	}
	if (platform === "deezer") try {
		const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`);
		if (!res.ok) throw new Error("Deezer search failed");
		return ((await res.json()).data || []).map((item, idx) => {
			const title = item.title || "Track";
			const artist = item.artist?.name || "Artist";
			return {
				id: `deezer-${item.id || idx}`,
				title,
				artist,
				coverUrl: item.album?.cover_big || item.album?.cover_medium || item.album?.cover || "",
				rank: idx + 1,
				previewUrl: item.preview || "",
				platform: "deezer",
				platformName: "Deezer",
				platformColor: "#A238FF",
				externalUrl: item.link || `https://www.deezer.com/search/${encodeURIComponent(title + " " + artist)}`
			};
		});
	} catch (err) {
		console.error("Deezer search error:", err);
		return [];
	}
	try {
		const [applePromise, deezerPromise] = await Promise.allSettled([fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=15`).then((r) => r.json()), fetch(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=15`).then((r) => r.json())]);
		const blended = [];
		if (applePromise.status === "fulfilled" && applePromise.value?.results) applePromise.value.results.forEach((item, idx) => {
			const title = item.trackName || "Track";
			const artist = item.artistName || "Artist";
			blended.push({
				id: `apple-blend-${item.trackId || idx}`,
				title,
				artist,
				coverUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "600x600bb") : "",
				rank: idx + 1,
				previewUrl: item.previewUrl || "",
				platform: "apple",
				platformName: "Apple Music",
				platformColor: "#FC3C44",
				externalUrl: item.trackViewUrl || `https://music.apple.com/us/search?term=${encodeURIComponent(title + " " + artist)}`
			});
		});
		if (deezerPromise.status === "fulfilled" && deezerPromise.value?.data) deezerPromise.value.data.forEach((item, idx) => {
			const title = item.title || "Track";
			const artist = item.artist?.name || "Artist";
			blended.push({
				id: `spotify-blend-${item.id || idx}`,
				title,
				artist,
				coverUrl: item.album?.cover_big || item.album?.cover_medium || item.album?.cover || "",
				rank: idx + 1,
				previewUrl: item.preview || "",
				platform: "spotify",
				platformName: "Spotify",
				platformColor: "#1DB954",
				externalUrl: `https://open.spotify.com/search/${encodeURIComponent(title + " " + artist)}`
			});
		});
		if (blended.length > 0) return blended.sort((a, b) => a.rank - b.rank);
	} catch (err) {
		console.error("Blended search error:", err);
	}
	try {
		const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=30`);
		if (!res.ok) throw new Error("Fallback search failed");
		return ((await res.json()).results || []).map((item, idx) => ({
			title: item.trackName || "Track",
			artist: item.artistName || "Artist",
			coverUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "600x600bb") : "",
			rank: idx + 1,
			previewUrl: item.previewUrl || "",
			platform: "apple",
			platformName: "Apple Music",
			platformColor: "#FC3C44"
		}));
	} catch {
		return [];
	}
});
//#endregion
export { getTrendingTracks_createServerFn_handler, searchMusicTracks_createServerFn_handler };
