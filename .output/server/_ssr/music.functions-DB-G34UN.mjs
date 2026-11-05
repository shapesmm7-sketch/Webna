import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/music.functions-DB-G34UN.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/./_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
async function safeFetchJson(url, timeoutMs = 6e3) {
	try {
		const res = await fetch(url, {
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
				Accept: "application/json, text/plain, */*"
			},
			signal: AbortSignal.timeout(timeoutMs)
		});
		if (!res || !res.ok) return null;
		const text = await res.text();
		if (!text || text.trim().startsWith("<")) return null;
		return JSON.parse(text);
	} catch {
		return null;
	}
}
var FALLBACK_TRENDING_TRACKS = [
	{
		id: "pop-1",
		title: "Espresso",
		artist: "Sabrina Carpenter",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/2d/18/bf2d1872-bb28-aa92-f703-9bb6a254ec32/24UMGIM39223.rgb.jpg/600x600bb.jpg",
		rank: 1,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4a/12/34/4a1234bc-5678-90ab-cdef-1234567890ab/mzaf_12345678901234567890.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Espresso%20Sabrina%20Carpenter"
	},
	{
		id: "pop-2",
		title: "Not Like Us",
		artist: "Kendrick Lamar",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/aa/bc/30aabc81-30bc-2a5c-7b44-96cf9380fb35/24UMGIM53229.rgb.jpg/600x600bb.jpg",
		rank: 2,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/38/20/c338202d-bc48-0382-7aa7-0130f14faaa6/mzaf_11703273155700779836.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Not%20Like%20Us%20Kendrick%20Lamar"
	},
	{
		id: "pop-3",
		title: "Birds of a Feather",
		artist: "Billie Eilish",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f2/8f/33/f28f337a-11c5-849d-3db2-d6b9d6288899/24UMGIM37042.rgb.jpg/600x600bb.jpg",
		rank: 3,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5a/2d/1f/5a2d1f89-8d76-e179-88ff-c9bb699a7385/mzaf_10271574313504880597.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Birds%20of%20a%20Feather%20Billie%20Eilish"
	},
	{
		id: "pop-4",
		title: "A Bar Song (Tipsy)",
		artist: "Shaboozey",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/59/a7/9d/59a79d03-e84b-0145-6a58-df291c981881/198015822363.jpg/600x600bb.jpg",
		rank: 4,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/7e/8e/807e8e50-96f3-f933-7221-50794931a788/mzaf_16886475658602693822.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=A%20Bar%20Song%20Shaboozey"
	},
	{
		id: "pop-5",
		title: "Please Please Please",
		artist: "Sabrina Carpenter",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/2d/18/bf2d1872-bb28-aa92-f703-9bb6a254ec32/24UMGIM39223.rgb.jpg/600x600bb.jpg",
		rank: 5,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a8/38/bc/a838bc86-5085-f554-4f05-df853b027ca5/mzaf_7307044671424681656.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Please%20Please%20Please%20Sabrina%20Carpenter"
	},
	{
		id: "pop-6",
		title: "Cruel Summer",
		artist: "Taylor Swift",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e0/7d/50/e07d5071-70e0-c9a1-fb5a-52f400787e2a/19UMGIM53229.rgb.jpg/600x600bb.jpg",
		rank: 6,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8b/6f/10/8b6f1082-8bc1-1a0e-a57d-f421f158913b/mzaf_13813958934522818957.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Cruel%20Summer%20Taylor%20Swift"
	},
	{
		id: "pop-7",
		title: "Die With A Smile",
		artist: "Lady Gaga & Bruno Mars",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/80/e7/1e/80e71ea4-5690-3323-8686-ef77be025bc0/24UMGIM86060.rgb.jpg/600x600bb.jpg",
		rank: 7,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/22/2c/19222c84-91f1-3a05-3e28-36bd69411d31/mzaf_10793616657967923700.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Die%20With%20A%20Smile%20Lady%20Gaga%20Bruno%20Mars"
	},
	{
		id: "pop-8",
		title: "Good Luck, Babe!",
		artist: "Chappell Roan",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/33/c2/c633c2a0-bc2d-53f7-d0d5-b6d498aa2900/24UMGIM33618.rgb.jpg/600x600bb.jpg",
		rank: 8,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d4/ec/3b/d4ec3ba2-66b4-a4ee-3d3f-5c20c02581f1/mzaf_12948210459529388371.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Good%20Luck%20Babe%20Chappell%20Roan"
	},
	{
		id: "pop-9",
		title: "I Had Some Help",
		artist: "Post Malone ft. Morgan Wallen",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/37/10/7c/37107c1b-e523-3b1a-28e4-e35c249a21e4/24UM1IM08922.rgb.jpg/600x600bb.jpg",
		rank: 9,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/7e/8e/807e8e50-96f3-f933-7221-50794931a788/mzaf_16886475658602693822.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=I%20Had%20Some%20Help%20Post%20Malone"
	},
	{
		id: "pop-10",
		title: "Blinding Lights",
		artist: "The Weeknd",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/09/2d/a4092d6e-dfa9-3e3e-ef7d-f421f158913b/20UMGIM02801.rgb.jpg/600x600bb.jpg",
		rank: 10,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4a/12/34/4a1234bc-5678-90ab-cdef-1234567890ab/mzaf_12345678901234567890.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Blinding%20Lights%20The%20Weeknd"
	},
	{
		id: "pop-11",
		title: "Flowers",
		artist: "Miley Cyrus",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/df/77/89/df778949-34b7-846d-aa3f-fae12015f624/886449830504.jpg/600x600bb.jpg",
		rank: 11,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/df/77/89/df778949-34b7-846d-aa3f-fae12015f624/mzaf_12345678901234567890.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=Flowers%20Miley%20Cyrus"
	},
	{
		id: "pop-12",
		title: "As It Was",
		artist: "Harry Styles",
		coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/14/df/aa/14dfaa7f-6831-299f-3d02-e20bc2080a2b/196589088612.jpg/600x600bb.jpg",
		rank: 12,
		previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/df/aa/14dfaa7f-6831-299f-3d02-e20bc2080a2b/mzaf_12345678901234567890.plus.aac.p.m4a",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44",
		externalUrl: "https://music.apple.com/us/search?term=As%20It%20Was%20Harry%20Styles"
	}
];
var getTrendingTracks_createServerFn_handler = createServerRpc({
	id: "97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6",
	name: "getTrendingTracks",
	filename: "src/lib/music.functions.ts"
}, (opts) => getTrendingTracks.__executeServer(opts));
var getTrendingTracks = createServerFn({ method: "GET" }).handler(getTrendingTracks_createServerFn_handler, async () => {
	const now = Date.now();
	if (cache && now - cache.timestamp < CACHE_TTL && cache.data.length > 0) return cache.data;
	try {
		const response = await fetch("https://itunes.apple.com/us/rss/topsongs/limit=30/json");
		if (!response.ok) throw new Error("Failed to fetch iTunes");
		const data = ((await response.json()).feed.entry || []).map((entry, index) => {
			let previewUrl = "";
			if (Array.isArray(entry.link)) previewUrl = entry.link.find((l) => l.attributes?.["im:assetType"] === "preview" || l.attributes?.type?.includes("audio"))?.attributes?.href || entry.link[1]?.attributes?.href || "";
			else if (entry.link?.attributes?.href) previewUrl = entry.link.attributes.href;
			const title = entry["im:name"]?.label || entry.title?.label || "Track";
			const artist = entry["im:artist"]?.label || "Artist";
			const rawCover = entry["im:image"]?.[2]?.label || entry["im:image"]?.[1]?.label || entry["im:image"]?.[0]?.label || "";
			const coverUrl = rawCover ? rawCover.replace(/\/\d+x\d+bb/g, "/600x600bb") : "";
			return {
				id: `apple-trend-${index}`,
				title,
				artist,
				coverUrl,
				rank: index + 1,
				previewUrl,
				platform: "apple",
				platformName: "Apple Music",
				platformColor: "#FC3C44",
				externalUrl: `https://music.apple.com/us/search?term=${encodeURIComponent(title + " " + artist)}`
			};
		});
		if (data.length > 0) {
			cache = {
				data,
				timestamp: now
			};
			return data;
		}
		return FALLBACK_TRENDING_TRACKS;
	} catch (error) {
		console.error("Error fetching trending tracks:", error);
		return cache?.data && cache.data.length > 0 ? cache.data : FALLBACK_TRENDING_TRACKS;
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
	if (platform === "apple" || platform === "itunes") return ((await safeFetchJson(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=30`))?.results || []).map((item, idx) => {
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
	if (platform === "spotify") {
		const results = (await safeFetchJson(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`))?.data || [];
		if (results.length > 0) return results.map((item, idx) => {
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
		return ((await safeFetchJson(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=30`))?.results || []).map((item, idx) => {
			const title = item.trackName || "Track";
			const artist = item.artistName || "Artist";
			return {
				id: `spotify-it-${item.trackId || idx}`,
				title,
				artist,
				coverUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "600x600bb") : "",
				rank: idx + 1,
				previewUrl: item.previewUrl || "",
				platform: "spotify",
				platformName: "Spotify",
				platformColor: "#1DB954",
				externalUrl: `https://open.spotify.com/search/${encodeURIComponent(title + " " + artist)}`
			};
		});
	}
	if (platform === "youtube") return ((await safeFetchJson(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`))?.data || []).map((item, idx) => {
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
	if (platform === "deezer") return ((await safeFetchJson(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=30`))?.data || []).map((item, idx) => {
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
	const [appleJson, deezerJson] = await Promise.all([safeFetchJson(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=15`), safeFetchJson(`https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=15`)]);
	const blended = [];
	if (appleJson?.results) appleJson.results.forEach((item, idx) => {
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
	if (deezerJson?.data) deezerJson.data.forEach((item, idx) => {
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
	if (blended.length > 0) return blended;
	return ((await safeFetchJson(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=30`))?.results || []).map((item, idx) => ({
		title: item.trackName || "Track",
		artist: item.artistName || "Artist",
		coverUrl: item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb", "600x600bb") : "",
		rank: idx + 1,
		previewUrl: item.previewUrl || "",
		platform: "apple",
		platformName: "Apple Music",
		platformColor: "#FC3C44"
	}));
});
//#endregion
export { getTrendingTracks_createServerFn_handler, searchMusicTracks_createServerFn_handler };
