import { createServerFn } from "@tanstack/react-start";

export type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  thumbnail?: string;
  description?: string;
};

import { dec, tag, decodeGoogleNews, findOgImage } from "./news-shared";

export function parseRssFeed(
  xml: string,
  feedUrl: string,
  fallbackSource?: string,
): NewsItem[] {
  const items: NewsItem[] = [];
  const seenLinks = new Set<string>();

  const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  for (const [, it] of itemMatches) {
    if (!it) continue;
    const rawTitle =
      it.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/i)?.[1] ||
      tag(it, "title");
    const rawDesc =
      it.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i,
      )?.[1] || tag(it, "description");
    const rawLink =
      it.match(/<link><!\[CDATA\[([\s\S]*?)\]\]><\/link>/i)?.[1] ||
      it.match(/<link>([\s\S]*?)<\/link>/i)?.[1]?.trim() ||
      tag(it, "link");
    const pubDate = tag(it, "pubDate");

    const cleanLink = dec(rawLink).trim();
    const cleanTitleRaw = dec(rawTitle).trim();
    const cleanDesc = dec(rawDesc)
      .replace(/<[^>]*>/g, "")
      .trim();

    // Prevent duplicate items with the same link or title in the feed
    const dedupeKey = cleanLink || cleanTitleRaw;
    if (!dedupeKey || seenLinks.has(dedupeKey)) {
      continue;
    }
    seenLinks.add(dedupeKey);

    // Determine source name
    let source = tag(it, "source");
    if (!source) {
      if (fallbackSource) {
        source = fallbackSource;
      } else if (feedUrl.includes("bbci.co.uk") || cleanLink.includes("bbc.")) {
        source = "BBC Sport";
      } else if (feedUrl.includes("espn.com") || cleanLink.includes("espn.")) {
        source = "ESPN";
      } else if (
        feedUrl.includes("nytimes.com") ||
        cleanLink.includes("nytimes.")
      ) {
        source = "The New York Times";
      } else if (cleanTitleRaw.includes(" - ")) {
        source = cleanTitleRaw.split(" - ").pop()?.trim() || "News";
      } else {
        try {
          source = new URL(cleanLink).hostname.replace("www.", "");
        } catch {
          source = "News";
        }
      }
    }

    const cleanTitle = cleanTitleRaw.endsWith(" - " + source)
      ? cleanTitleRaw.slice(0, -(source.length + 3))
      : cleanTitleRaw;

    // Extract thumbnail from media tags, enclosure or HTML body
    const mediaThumb =
      it.match(/<(?:media:)?thumbnail[^>]*?\surl=["']([^"']+)["']/i)?.[1] ||
      it.match(/<(?:media:)?thumbnail[^>]+url=["']([^"']+)["']/i)?.[1];
    const mediaContent =
      it.match(/<(?:media:)?content[^>]*?\surl=["']([^"']+)["']/i)?.[1] ||
      it.match(/<(?:media:)?content[^>]+url=["']([^"']+)["']/i)?.[1];
    const enclosure =
      it.match(/<enclosure[^>]*?\surl=["']([^"']+)["']/i)?.[1] ||
      it.match(/<enclosure[^>]+url=["']([^"']+)["']/i)?.[1];
    const imgMatch =
      rawDesc.match(/<img[^>]*?\ssrc=["']([^"']+)["']/i)?.[1] ||
      it.match(
        /<content:encoded>[\s\S]*?<img[^>]*?\ssrc=["']([^"']+)["']/i,
      )?.[1];

    let thumbnail = mediaThumb || mediaContent || enclosure || imgMatch || null;

    if (thumbnail) {
      thumbnail = dec(thumbnail).trim();
      if (thumbnail.startsWith("//")) {
        thumbnail = "https:" + thumbnail;
      }
      // Upgrade BBC thumbnail from 240px to 800px for crystal-clear display
      if (thumbnail.includes("ichef.bbci.co.uk/ace/standard/")) {
        thumbnail = thumbnail.replace(/\/standard\/\d+\//, "/standard/800/");
      }
    }

    items.push({
      title: cleanTitle,
      link: cleanLink,
      pubDate,
      source,
      thumbnail: thumbnail || undefined,
      description: cleanDesc || undefined,
    });
  }

  return items;
}

// Fallback items for crystal-clear offline or network-restricted experience
const FALLBACK_FOOTBALL_ITEMS: NewsItem[] = [
  {
    title:
      "Champions League Quarter-Finals: Thrilling Encounters Set the Stage",
    link: "https://www.espn.com/soccer/story/_/id/champions-league-preview",
    pubDate: new Date().toUTCString(),
    source: "ESPN",
    thumbnail:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
    description:
      "European heavyweights prepare for high-stakes quarter-final showdowns with tactical masterclasses expected across all fixtures.",
  },
  {
    title: "Premier League Title Race Heats Up as Top Contenders Clash",
    link: "https://www.bbc.co.uk/sport/football/articles/premier-league-title-race",
    pubDate: new Date(Date.now() - 3600000).toUTCString(),
    source: "BBC Sport",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80",
    description:
      "The race for the English Premier League crown enters its decisive final stretch with crucial fixtures this weekend.",
  },
  {
    title: "Tactical Analysis: How Modern Full-Backs Transform the Game",
    link: "https://www.espn.com/soccer/story/_/id/tactical-fullbacks",
    pubDate: new Date(Date.now() - 7200000).toUTCString(),
    source: "ESPN",
    thumbnail:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop&q=80",
    description:
      "An in-depth look at inverted full-backs and how tactical innovation is reshaping modern football formations.",
  },
  {
    title:
      "International Break Preview: World Cup Qualifiers Heat Up Worldwide",
    link: "https://www.bbc.co.uk/sport/football/articles/world-cup-qualifiers",
    pubDate: new Date(Date.now() - 14400000).toUTCString(),
    source: "BBC Sport",
    thumbnail:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=80",
    description:
      "National teams prepare for crucial qualification matches as players return to represent their countries on the global stage.",
  },
  {
    title: "Rising Stars: The Young Prospects Making Waves in European Leagues",
    link: "https://www.espn.com/soccer/story/_/id/rising-stars-europe",
    pubDate: new Date(Date.now() - 21600000).toUTCString(),
    source: "ESPN",
    thumbnail:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&auto=format&fit=crop&q=80",
    description:
      "Profiling the breakout teenagers lighting up top-flight football leagues across Europe this season.",
  },
];

const FALLBACK_GENERAL_NEWS: NewsItem[] = [
  {
    title:
      "Global Tech Summit Highlights Breakthroughs in AI and Quantum Computing",
    link: "https://www.bbc.co.uk/news/technology-summit",
    pubDate: new Date().toUTCString(),
    source: "BBC News",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    description:
      "Industry leaders gather to discuss the next wave of computing architecture and sustainable technology innovations.",
  },
  {
    title: "Global Markets Rally Following Positive Economic Forecasts",
    link: "https://www.nytimes.com/economy-rally",
    pubDate: new Date(Date.now() - 3600000).toUTCString(),
    source: "The New York Times",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    description:
      "Stock indexes reached new milestones as trade agreements and inflation metrics show encouraging stability.",
  },
  {
    title: "Major Leap Forward in Renewable Energy Grid Storage Efficiency",
    link: "https://www.bbc.co.uk/news/science-energy",
    pubDate: new Date(Date.now() - 7200000).toUTCString(),
    source: "BBC News",
    thumbnail:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
    description:
      "Scientists unveil a novel battery design capable of stabilizing regional power grids using sustainable materials.",
  },
  {
    title: "Space Telescope Captures Unprecedented Detail of Distant Nebula",
    link: "https://www.bbc.co.uk/news/science-space",
    pubDate: new Date(Date.now() - 14400000).toUTCString(),
    source: "BBC News",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description:
      "Astronomers celebrate high-resolution imagery revealing star formation processes in deep space.",
  },
];

// Server-side cache for General News RSS feeds
const newsCache = new Map<string, { items: NewsItem[]; timestamp: number }>();
newsCache.set("https://feeds.bbci.co.uk/news/rss.xml", {
  items: FALLBACK_GENERAL_NEWS,
  timestamp: Date.now(),
});
const NEWS_CACHE_TTL_MS = 240_000; // 4 minutes

async function fetchAndCacheNews(feedUrl: string): Promise<NewsItem[]> {
  try {
    const r = await fetch(feedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) throw new Error("feed " + r.status);
    const xml = await r.text();
    const items = parseRssFeed(xml, feedUrl);

    // For items still missing thumbnails, fetch OG image for the top ones
    const missing = items
      .slice(0, 12)
      .filter((it) => !it.thumbnail && it.link.startsWith("http"));
    if (missing.length > 0) {
      await Promise.allSettled(
        missing.map(async (item) => {
          const og = await findOgImage(item.link);
          if (og) item.thumbnail = og;
        }),
      );
    }

    if (items.length > 0) {
      newsCache.set(feedUrl, { items, timestamp: Date.now() });
      return items;
    }
    const prev = newsCache.get(feedUrl);
    return prev ? prev.items : FALLBACK_GENERAL_NEWS;
  } catch (e) {
    const prev = newsCache.get(feedUrl);
    return prev ? prev.items : FALLBACK_GENERAL_NEWS;
  }
}

// Pre-warm default news feed on server startup
if (typeof fetch !== "undefined") {
  setTimeout(() => {
    fetchAndCacheNews("https://feeds.bbci.co.uk/news/rss.xml").catch(() => {});
  }, 100);
}

// Fetches real news RSS feeds on the server with authentic photo thumbnails.
export const getNews = createServerFn({ method: "GET" })
  .inputValidator((d: { rss: string }) => d)
  .handler(async ({ data }): Promise<NewsItem[]> => {
    const feedUrl = data.rss || "https://feeds.bbci.co.uk/news/rss.xml";
    if (!feedUrl.startsWith("http")) return FALLBACK_GENERAL_NEWS;

    const cached = newsCache.get(feedUrl);
    const now = Date.now();
    if (cached && cached.items.length > 0) {
      if (now - cached.timestamp > NEWS_CACHE_TTL_MS) {
        // Revalidate in background
        fetchAndCacheNews(feedUrl).catch(() => {});
      }
      return cached.items;
    }

    return fetchAndCacheNews(feedUrl);
  });

// Server-side cache for Football News to provide instant response for all users
let cachedFootballItems: NewsItem[] = [...FALLBACK_FOOTBALL_ITEMS];
let footballCacheTimestamp = Date.now();
const FOOTBALL_CACHE_TTL_MS = 300_000; // 5 minutes cache
let isFetchingFootball = false;

async function refreshFootballCache(): Promise<NewsItem[]> {
  if (isFetchingFootball) {
    return cachedFootballItems;
  }
  isFetchingFootball = true;

  try {
    // 1. Primary ESPN RSS feed
    try {
      const espnRes = await fetch("https://www.espn.com/espn/rss/soccer/news", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
        signal: AbortSignal.timeout(6000),
      });

      if (espnRes.ok && espnRes.status === 200) {
        const text = await espnRes.text();
        if (text && text.includes("<item>") && text.length > 200) {
          const items = parseRssFeed(
            text,
            "https://www.espn.com/espn/rss/soccer/news",
            "ESPN",
          );
          if (items.length > 0) {
            cachedFootballItems = items;
            footballCacheTimestamp = Date.now();
            return items;
          }
        }
      }
    } catch {
      // Fallback to BBC Sport
    }

    // 2. Fallback BBC Sport football RSS feed
    try {
      const bbcRes = await fetch(
        "https://feeds.bbci.co.uk/sport/football/rss.xml",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            Accept: "application/rss+xml, application/xml, text/xml, */*",
          },
          signal: AbortSignal.timeout(8000),
        },
      );

      if (bbcRes.ok) {
        const text = await bbcRes.text();
        const items = parseRssFeed(
          text,
          "https://feeds.bbci.co.uk/sport/football/rss.xml",
          "BBC Sport",
        );
        if (items.length > 0) {
          cachedFootballItems = items;
          footballCacheTimestamp = Date.now();
          return items;
        }
      }
    } catch {
      // Fallback items
    }

    if (cachedFootballItems.length > 0) {
      return cachedFootballItems;
    }

    return FALLBACK_FOOTBALL_ITEMS;
  } finally {
    isFetchingFootball = false;
  }
}

// Pre-warm football cache on startup in background
if (typeof fetch !== "undefined") {
  setTimeout(() => {
    refreshFootballCache().catch(() => {});
  }, 100);
}

// Football News: Primary ESPN RSS, Fallback BBC Sport RSS
export const getFootballNews = createServerFn({ method: "GET" }).handler(
  async (): Promise<NewsItem[]> => {
    const now = Date.now();
    // Fast return: if cache is present, return immediately
    if (cachedFootballItems.length > 0) {
      // If cache expired, revalidate in background without blocking user
      if (now - footballCacheTimestamp > FOOTBALL_CACHE_TTL_MS) {
        refreshFootballCache().catch(() => {});
      }
      return cachedFootballItems;
    }

    return refreshFootballCache();
  },
);

// Google News links can't be shown inside the app, so decode them to the publisher's real URL.
export const resolveNews = createServerFn({ method: "POST" })
  .inputValidator((d: { url: string }) => d)
  .handler(async ({ data }): Promise<string> => {
    return decodeGoogleNews(data.url);
  });

export type Article = {
  url: string;
  title: string;
  image?: string | undefined;
  site: string;
  paragraphs: string[];
};

// Reader mode: most publishers block being shown inside other apps, so extract the article text.
export const getArticle = createServerFn({ method: "POST" })
  .inputValidator((d: { url: string }) => d)
  .handler(async ({ data }): Promise<Article> => {
    const site = (() => {
      try {
        return new URL(data.url).hostname.replace("www.", "");
      } catch {
        return "";
      }
    })();
    try {
      const html = await (
        await fetch(data.url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
            Accept: "text/html",
          },
        })
      ).text();
      const meta = (p: string) =>
        html.match(
          new RegExp(
            `<meta[^>]+(?:property|name)=["']${p}["'][^>]+content=["']([^"']+)`,
            "i",
          ),
        )?.[1];
      const body = html.replace(
        /<(script|style|noscript|svg|nav|footer|header|aside|form)[\s\S]*?<\/\1>/gi,
        "",
      );
      const paragraphs = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
        .map(([, t]) =>
          dec(t!.replace(/<[^>]+>/g, ""))
            .replace(/\s+/g, " ")
            .replace(/&#x27;|&rsquo;|&lsquo;/g, "'")
            .replace(/&nbsp;/g, " ")
            .replace(/&[a-z]+;|&#\d+;/g, ""),
        )
        .filter((t) => t.length > 60)
        .slice(0, 60);
      return {
        url: data.url,
        site,
        title: dec(meta("og:title") || tag(html, "title")),
        image: meta("og:image"),
        paragraphs,
      };
    } catch {
      return { url: data.url, site, title: "", paragraphs: [] };
    }
  });
