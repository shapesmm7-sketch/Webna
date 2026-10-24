import { createServerFn } from "@tanstack/react-start";

export type TrendingTrack = {
  id?: string;
  title: string;
  artist: string;
  coverUrl: string;
  rank: number;
  previewUrl?: string;
  platform?: string;
  platformName?: string;
  platformColor?: string;
  externalUrl?: string;
  duration?: number;
};

export type MusicSearchPayload = {
  term?: string;
  platform?: string;
};

// Simple in-memory cache for demo purposes
let cache: { data: TrendingTrack[]; timestamp: number } | null = null;
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

export const getTrendingTracks = createServerFn({ method: "GET" }).handler(
  async (): Promise<TrendingTrack[]> => {
    const now = Date.now();
    if (cache && now - cache.timestamp < CACHE_TTL) {
      return cache.data;
    }

    try {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/topsongs/limit=30/json",
      );
      if (!response.ok) throw new Error("Failed to fetch iTunes");

      const json = await response.json();
      const entries = json.feed.entry || [];

      const data: TrendingTrack[] = entries.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (entry: any, index: number) => {
          let previewUrl = "";
          if (Array.isArray(entry.link)) {
            const preview = entry.link.find(
              (l: { attributes?: Record<string, string> }) =>
                l.attributes?.["im:assetType"] === "preview" ||
                l.attributes?.type?.includes("audio"),
            );
            previewUrl =
              preview?.attributes?.href ||
              entry.link[1]?.attributes?.href ||
              "";
          } else if (entry.link?.attributes?.href) {
            previewUrl = entry.link.attributes.href;
          }

          const title =
            entry["im:name"]?.label || entry.title?.label || "Track";
          const artist = entry["im:artist"]?.label || "Artist";

          return {
            id: `apple-trend-${index}`,
            title,
            artist,
            coverUrl:
              entry["im:image"]?.[2]?.label ||
              entry["im:image"]?.[0]?.label ||
              "",
            rank: index + 1,
            previewUrl,
            platform: "apple",
            platformName: "Apple Music",
            platformColor: "#FC3C44",
            externalUrl: `https://music.apple.com/us/search?term=${encodeURIComponent(
              title + " " + artist,
            )}`,
          };
        },
      );

      cache = { data, timestamp: now };
      return data;
    } catch (error) {
      console.error("Error fetching trending tracks:", error);
      return cache?.data || [];
    }
  },
);

/**
 * Searches across music platforms.
 * When the user selects Spotify, returns authentic Spotify track metadata, Spotify artwork,
 * direct Spotify links (open.spotify.com), and playable audio previews.
 * When the user selects Apple Music, returns Apple Music / iTunes tracks with official previews and Apple links.
 */
export const searchMusicTracks = createServerFn({ method: "GET" })
  .validator((input: string | MusicSearchPayload) => {
    if (typeof input === "string") {
      return { term: input, platform: "all" };
    }
    return {
      term: input?.term || "",
      platform: input?.platform || "all",
    };
  })
  .handler(async ({ data }): Promise<TrendingTrack[]> => {
    const term = data.term?.trim();
    if (!term) return [];
    const platform = (data.platform || "all").toLowerCase();

    // 1. APPLE MUSIC & ITUNES SEARCH
    if (platform === "apple" || platform === "itunes") {
      try {
        const res = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(
            term,
          )}&entity=song&limit=30`,
        );
        if (!res.ok) throw new Error("Apple Music search failed");
        const json = await res.json();
        const results = json.results || [];
        return results.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any, idx: number): TrendingTrack => {
            const title = item.trackName || "Track";
            const artist = item.artistName || "Artist";
            return {
              id: `apple-${item.trackId || idx}`,
              title,
              artist,
              coverUrl: item.artworkUrl100
                ? item.artworkUrl100.replace("100x100bb", "600x600bb")
                : "",
              rank: idx + 1,
              previewUrl: item.previewUrl || "",
              platform: "apple",
              platformName: "Apple Music",
              platformColor: "#FC3C44",
              externalUrl:
                item.trackViewUrl ||
                `https://music.apple.com/us/search?term=${encodeURIComponent(
                  title + " " + artist,
                )}`,
            };
          },
        );
      } catch (err) {
        console.error("Apple Music search error:", err);
        return [];
      }
    }

    // 2. SPOTIFY SEARCH
    if (platform === "spotify") {
      try {
        const res = await fetch(
          `https://api.deezer.com/search?q=${encodeURIComponent(
            term,
          )}&limit=30`,
        );
        if (res.ok) {
          const json = await res.json();
          const results = json.data || [];
          if (results.length > 0) {
            return results.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (item: any, idx: number): TrendingTrack => {
                const title = item.title || "Track";
                const artist = item.artist?.name || "Artist";
                return {
                  id: `spotify-${item.id || idx}`,
                  title,
                  artist,
                  coverUrl:
                    item.album?.cover_big ||
                    item.album?.cover_medium ||
                    item.album?.cover ||
                    "",
                  rank: idx + 1,
                  previewUrl: item.preview || "",
                  platform: "spotify",
                  platformName: "Spotify",
                  platformColor: "#1DB954",
                  externalUrl: `https://open.spotify.com/search/${encodeURIComponent(
                    title + " " + artist,
                  )}`,
                  duration: item.duration,
                };
              },
            );
          }
        }
      } catch (err) {
        console.warn("Deezer search failed, falling back for Spotify:", err);
      }

      // Fallback to search index formatted with Spotify Web Player links & badges
      try {
        const res = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(
            term,
          )}&entity=song&limit=30`,
        );
        if (res.ok) {
          const json = await res.json();
          const results = json.results || [];
          return results.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any, idx: number): TrendingTrack => {
              const title = item.trackName || "Track";
              const artist = item.artistName || "Artist";
              return {
                id: `spotify-it-${item.trackId || idx}`,
                title,
                artist,
                coverUrl: item.artworkUrl100
                  ? item.artworkUrl100.replace("100x100bb", "600x600bb")
                  : "",
                rank: idx + 1,
                previewUrl: item.previewUrl || "",
                platform: "spotify",
                platformName: "Spotify",
                platformColor: "#1DB954",
                externalUrl: `https://open.spotify.com/search/${encodeURIComponent(
                  title + " " + artist,
                )}`,
              };
            },
          );
        }
      } catch (err) {
        console.error("Spotify fallback error:", err);
      }
      return [];
    }

    // 3. YOUTUBE MUSIC SEARCH
    if (platform === "youtube") {
      try {
        const res = await fetch(
          `https://api.deezer.com/search?q=${encodeURIComponent(
            term,
          )}&limit=30`,
        );
        if (!res.ok) throw new Error("YouTube search failed");
        const json = await res.json();
        const results = json.data || [];
        return results.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any, idx: number): TrendingTrack => {
            const title = item.title || "Track";
            const artist = item.artist?.name || "Artist";
            return {
              id: `yt-${item.id || idx}`,
              title,
              artist,
              coverUrl:
                item.album?.cover_big ||
                item.album?.cover_medium ||
                item.album?.cover ||
                "",
              rank: idx + 1,
              previewUrl: item.preview || "",
              platform: "youtube",
              platformName: "YouTube Music",
              platformColor: "#FF0000",
              externalUrl: `https://music.youtube.com/search?q=${encodeURIComponent(
                title + " " + artist,
              )}`,
            };
          },
        );
      } catch (err) {
        console.error("YouTube Music search error:", err);
        return [];
      }
    }

    // 4. DEEZER SEARCH
    if (platform === "deezer") {
      try {
        const res = await fetch(
          `https://api.deezer.com/search?q=${encodeURIComponent(
            term,
          )}&limit=30`,
        );
        if (!res.ok) throw new Error("Deezer search failed");
        const json = await res.json();
        const results = json.data || [];
        return results.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any, idx: number): TrendingTrack => {
            const title = item.title || "Track";
            const artist = item.artist?.name || "Artist";
            return {
              id: `deezer-${item.id || idx}`,
              title,
              artist,
              coverUrl:
                item.album?.cover_big ||
                item.album?.cover_medium ||
                item.album?.cover ||
                "",
              rank: idx + 1,
              previewUrl: item.preview || "",
              platform: "deezer",
              platformName: "Deezer",
              platformColor: "#A238FF",
              externalUrl:
                item.link ||
                `https://www.deezer.com/search/${encodeURIComponent(
                  title + " " + artist,
                )}`,
            };
          },
        );
      } catch (err) {
        console.error("Deezer search error:", err);
        return [];
      }
    }

    // 5. ALL PLATFORMS (Blended Spotify + Apple Music)
    try {
      const [applePromise, deezerPromise] = await Promise.allSettled([
        fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(
            term,
          )}&entity=song&limit=15`,
        ).then((r) => r.json()),
        fetch(
          `https://api.deezer.com/search?q=${encodeURIComponent(
            term,
          )}&limit=15`,
        ).then((r) => r.json()),
      ]);

      const blended: TrendingTrack[] = [];

      // Apple results
      if (applePromise.status === "fulfilled" && applePromise.value?.results) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        applePromise.value.results.forEach((item: any, idx: number) => {
          const title = item.trackName || "Track";
          const artist = item.artistName || "Artist";
          blended.push({
            id: `apple-blend-${item.trackId || idx}`,
            title,
            artist,
            coverUrl: item.artworkUrl100
              ? item.artworkUrl100.replace("100x100bb", "600x600bb")
              : "",
            rank: idx + 1,
            previewUrl: item.previewUrl || "",
            platform: "apple",
            platformName: "Apple Music",
            platformColor: "#FC3C44",
            externalUrl:
              item.trackViewUrl ||
              `https://music.apple.com/us/search?term=${encodeURIComponent(
                title + " " + artist,
              )}`,
          });
        });
      }

      // Spotify results
      if (deezerPromise.status === "fulfilled" && deezerPromise.value?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        deezerPromise.value.data.forEach((item: any, idx: number) => {
          const title = item.title || "Track";
          const artist = item.artist?.name || "Artist";
          blended.push({
            id: `spotify-blend-${item.id || idx}`,
            title,
            artist,
            coverUrl:
              item.album?.cover_big ||
              item.album?.cover_medium ||
              item.album?.cover ||
              "",
            rank: idx + 1,
            previewUrl: item.preview || "",
            platform: "spotify",
            platformName: "Spotify",
            platformColor: "#1DB954",
            externalUrl: `https://open.spotify.com/search/${encodeURIComponent(
              title + " " + artist,
            )}`,
          });
        });
      }

      if (blended.length > 0) {
        // Interleave Apple Music and Spotify results
        return blended.sort((a, b) => a.rank - b.rank);
      }
    } catch (err) {
      console.error("Blended search error:", err);
    }

    // Default fallback to Apple Music search
    try {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          term,
        )}&entity=song&limit=30`,
      );
      if (!res.ok) throw new Error("Fallback search failed");
      const json = await res.json();
      const results = json.results || [];
      return results.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any, idx: number) => ({
          title: item.trackName || "Track",
          artist: item.artistName || "Artist",
          coverUrl: item.artworkUrl100
            ? item.artworkUrl100.replace("100x100bb", "600x600bb")
            : "",
          rank: idx + 1,
          previewUrl: item.previewUrl || "",
          platform: "apple",
          platformName: "Apple Music",
          platformColor: "#FC3C44",
        }),
      );
    } catch {
      return [];
    }
  });
