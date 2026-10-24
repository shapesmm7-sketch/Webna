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
      } else if (feedUrl.includes("/sport/") || cleanLink.includes("/sport/")) {
        source = "BBC Sport";
      } else if (feedUrl.includes("bbci.co.uk") || cleanLink.includes("bbc.")) {
        source = "BBC News";
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
export const FALLBACK_FOOTBALL_ITEMS: NewsItem[] = [
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

export const FALLBACK_GENERAL_NEWS: NewsItem[] = [
  {
    title: "Global Tech Summit Highlights Breakthroughs in AI and Quantum Computing",
    link: "https://news.google.com/rss",
    pubDate: new Date().toUTCString(),
    source: "Wired",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    description: "Industry leaders gather to discuss the next wave of computing architecture and sustainable technology innovations.",
  },
  {
    title: "Global Markets Rally Following Positive Economic Forecasts",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 1800000).toUTCString(),
    source: "Reuters",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    description: "Stock indexes reached new milestones as trade agreements and inflation metrics show encouraging stability.",
  },
  {
    title: "Major Leap Forward in Renewable Energy Grid Storage Efficiency",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 3600000).toUTCString(),
    source: "Associated Press",
    thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
    description: "Scientists unveil a novel battery design capable of stabilizing regional power grids using sustainable materials.",
  },
  {
    title: "Space Telescope Captures Unprecedented Detail of Distant Nebula",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 5400000).toUTCString(),
    source: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description: "Astronomers celebrate high-resolution imagery revealing star formation processes in deep space.",
  },
  {
    title: "Next-Generation Electric Vehicles Achieve Record Highway Ranges in Independent Trials",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 7200000).toUTCString(),
    source: "Bloomberg",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80",
    description: "Solid-state battery configurations push EV travel past 650 miles on a single charge.",
  },
  {
    title: "International Climate Accord Sets Binding Targets for Ocean Protection",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 9000000).toUTCString(),
    source: "The Guardian",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    description: "Diplomats from over 140 nations agree on strict safeguards for marine ecosystems across international waters.",
  },
  {
    title: "Breakthrough Gene-Editing Therapy Receives Fast-Track Regulatory Approval",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 10800000).toUTCString(),
    source: "STAT News",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
    description: "Targeted cellular therapies offer new hope for patients with previously untreatable hereditary disorders.",
  },
  {
    title: "Global Supply Chains Stabilize as Maritime Logistics Modernize with Automated Ports",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 12600000).toUTCString(),
    source: "Wall Street Journal",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    description: "Freight rates decline while port turnaround times drop by 30 percent in key international hubs.",
  },
  {
    title: "Artificial Intelligence Models Show Surprising Aptitude in Solving Complex Mathematical Conjectures",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 14400000).toUTCString(),
    source: "MIT Technology Review",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    description: "Researchers report collaborative proof verification using specialized neural reasoning engines.",
  },
  {
    title: "Archaeologists Unearth Preserved Ancient Roman Marketplace Along Mediterranean Coast",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 16200000).toUTCString(),
    source: "National Geographic",
    thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80",
    description: "Excavations reveal intact mosaics, mercantile tablets, and amphorae dating back two millennia.",
  },
  {
    title: "Central Banks Signal Cautious Rate Adjustments Amid Resilient Job Growth",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 18000000).toUTCString(),
    source: "Financial Times",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    description: "Monetary policymakers balance price stability targets with sustained labor market performance.",
  },
  {
    title: "Revolutionary 3D-Bioprinted Tissue Implants Enter Phase II Clinical Trials",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 19800000).toUTCString(),
    source: "Medical News Today",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80",
    description: "Patient-specific collagen scaffolds demonstrate vascular integration in early human testing.",
  },
  {
    title: "Lunar Exploration Mission Confirms Extensive Subsurface Ice Deposits at South Pole",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 21600000).toUTCString(),
    source: "Space.com",
    thumbnail: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=800&auto=format&fit=crop&q=80",
    description: "Spectrometric data provides critical confirmation for prospective permanent moon habitat sites.",
  },
  {
    title: "Urban Farming Skyscrapers Revolutionize Fresh Produce Access in Megacities",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 23400000).toUTCString(),
    source: "Fast Company",
    thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80",
    description: "Hydroponic vertical towers drastically reduce water consumption while shortening farm-to-table transit times.",
  },
  {
    title: "Global Aviation Consortium Announces Zero-Emission Hydrogen Flight Prototype",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 25200000).toUTCString(),
    source: "Aviation Week",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
    description: "Test flights for regional 100-seat passenger airliners are slated to commence within eighteen months.",
  },
  {
    title: "Consumer Tech Brands Embrace Modular, User-Repairable Hardware Architecture",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 27000000).toUTCString(),
    source: "The Verge",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    description: "Standardized screws and accessible battery compartments return as right-to-repair standards take hold.",
  },
  {
    title: "Global Film Festival Celebrates Independent Cinema with Record International Entries",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 28800000).toUTCString(),
    source: "Variety",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
    description: "Emerging storytellers from Africa, Latin America, and Southeast Asia claim top festival honors.",
  },
  {
    title: "Quantum Sensing Instruments Detect Minute Gravitational Variations Underground",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 30600000).toUTCString(),
    source: "Physics World",
    thumbnail: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80",
    description: "Novel atom-interferometry devices locate deep mineral aquifers without exploratory drilling.",
  },
  {
    title: "Next Wave of Smart Wearables Focuses on Continuous Non-Invasive Metabolic Tracking",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 32400000).toUTCString(),
    source: "TechCrunch",
    thumbnail: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
    description: "Photonic sensors monitor vital biochemical markers directly through the skin with medical-grade precision.",
  },
  {
    title: "Historic Peace Treaty Signed to Conserve Transboundary Wildlife Corridors",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 34200000).toUTCString(),
    source: "BBC News",
    thumbnail: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&auto=format&fit=crop&q=80",
    description: "Neighboring countries remove border barriers to secure migration routes for endangered megafauna.",
  },
  {
    title: "High-Speed Rail Networks Expand with Autonomous Train Control Upgrades",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 36000000).toUTCString(),
    source: "Railway Gazette",
    thumbnail: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
    description: "Modern signaling increases passenger capacity by 40 percent while lowering operational energy demand.",
  },
  {
    title: "Sustainable Architecture Movement Reimagines Modern Cities with Cross-Laminated Timber",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 37800000).toUTCString(),
    source: "Architectural Digest",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    description: "Engineered timber high-rises sequester carbon while creating resilient, warm living spaces.",
  },
  {
    title: "Global Art Biennial Showcases Immersive Digital and Holographic Installations",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 39600000).toUTCString(),
    source: "Artforum",
    thumbnail: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=80",
    description: "Visitors experience dynamic kinetic environments blending physical sculpture with real-time responsive optics.",
  },
  {
    title: "Deep-Sea Biodiversity Expedition Discovers Dozens of Previously Unknown Organisms",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 41400000).toUTCString(),
    source: "Scientific American",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
    description: "Robotic submersibles mapping abyssal plains uncover thriving hydrothermal communities.",
  },
  {
    title: "E-Commerce Logistics Implement Robotic Packing Stations to Slash Packaging Waste",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 43200000).toUTCString(),
    source: "Forbes",
    thumbnail: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80",
    description: "Custom-fitted cardboard origami eliminates plastic fillers across millions of everyday shipments.",
  },
  {
    title: "Global Music Streaming Trends Reveal Resurgence of Ambient and Instrumental Genres",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 45000000).toUTCString(),
    source: "Billboard",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    description: "Listeners increasingly turn to organic soundscapes and neoclassical compositions for focus and relaxation.",
  },
  {
    title: "Advances in Micro-Desalination Offer Low-Energy Drinking Water for Arid Regions",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 46800000).toUTCString(),
    source: "The Economist",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
    description: "Solar-powered membrane distillation delivers scalable freshwater solutions for remote coastal villages.",
  },
  {
    title: "Cybersecurity Researchers Uncover New Defensive Protocols for Critical Infrastructure",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 48600000).toUTCString(),
    source: "Ars Technica",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    description: "Zero-trust verification mechanisms fortify power plants and municipal water systems against intrusion.",
  },
  {
    title: "Global Culinary Heritage Added to UNESCO Intangible Cultural List",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 50400000).toUTCString(),
    source: "Eater",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    description: "Centuries-old fermentation traditions and regional street food crafts receive international recognition.",
  },
  {
    title: "Astrophysicists Unveil Most Comprehensive 3D Map of the Observable Universe",
    link: "https://news.google.com/rss",
    pubDate: new Date(Date.now() - 52200000).toUTCString(),
    source: "Science Daily",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80",
    description: "Over six million galaxies are charted in unprecedented clarity, illuminating cosmic web filaments.",
  },
];

const DEFAULT_GOOGLE_NEWS_FEED =
  "https://news.google.com/rss?ceid=US:en&gl=US&hl=en";

// Server-side cache for General News RSS feeds (Google News RSS)
// Start with an empty cache so real Google News RSS is fetched immediately on first request
const newsCache = new Map<string, { items: NewsItem[]; timestamp: number }>();
const NEWS_CACHE_TTL_MS = 180_000; // 3 minutes cache

async function fetchAndCacheNews(feedUrl: string): Promise<NewsItem[]> {
  try {
    const r = await fetch(feedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });
    if (!r.ok) throw new Error("feed status " + r.status);
    const xml = await r.text();
    const items = parseRssFeed(xml, feedUrl);

    if (items && items.length > 0) {
      newsCache.set(feedUrl, { items, timestamp: Date.now() });
      return items;
    }
    const prev = newsCache.get(feedUrl);
    return prev && prev.items.length >= 10 ? prev.items : FALLBACK_GENERAL_NEWS;
  } catch (err) {
    console.warn("fetchAndCacheNews warning:", err);
    const prev = newsCache.get(feedUrl);
    return prev && prev.items.length >= 10 ? prev.items : FALLBACK_GENERAL_NEWS;
  }
}

// Pre-warm default Google News feed on server startup
if (typeof fetch !== "undefined") {
  setTimeout(() => {
    fetchAndCacheNews(DEFAULT_GOOGLE_NEWS_FEED).catch(() => {});
  }, 50);
}

// Fetches real Google News RSS feeds on the server with authentic photo thumbnails.
export const getNews = createServerFn({ method: "POST" })
  .inputValidator((d: { rss: string }) => d)
  .handler(async ({ data }): Promise<NewsItem[]> => {
    const feedUrl = data.rss || DEFAULT_GOOGLE_NEWS_FEED;
    if (!feedUrl.startsWith("http")) return FALLBACK_GENERAL_NEWS;

    const cached = newsCache.get(feedUrl);
    const now = Date.now();
    // Return cached items if available and reasonably fresh
    if (cached && cached.items.length >= 10) {
      if (now - cached.timestamp > NEWS_CACHE_TTL_MS) {
        // Revalidate in background without blocking current request
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
    return cachedFootballItems.length > 0
      ? cachedFootballItems
      : FALLBACK_FOOTBALL_ITEMS;
  }
  isFetchingFootball = true;

  try {
    const combinedItems: NewsItem[] = [];
    const seenTitles = new Set<string>();

    // 1. BBC Sport Football RSS (shown ONLY on football)
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
          redirect: "follow",
        },
      );

      if (bbcRes.ok) {
        const text = await bbcRes.text();
        const items = parseRssFeed(
          text,
          "https://feeds.bbci.co.uk/sport/football/rss.xml",
          "BBC Sport",
        );
        for (const it of items) {
          const key = it.title.toLowerCase().trim();
          if (!seenTitles.has(key)) {
            seenTitles.add(key);
            combinedItems.push(it);
          }
        }
      }
    } catch {
      // Continue to ESPN
    }

    // 2. ESPN Football / Soccer RSS
    try {
      const espnRes = await fetch("https://www.espn.com/espn/rss/soccer/news", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
        signal: AbortSignal.timeout(6000),
        redirect: "follow",
      });

      if (espnRes.ok && espnRes.status === 200) {
        const text = await espnRes.text();
        if (text && text.includes("<item>")) {
          const items = parseRssFeed(
            text,
            "https://www.espn.com/espn/rss/soccer/news",
            "ESPN",
          );
          for (const it of items) {
            const key = it.title.toLowerCase().trim();
            if (!seenTitles.has(key)) {
              seenTitles.add(key);
              combinedItems.push(it);
            }
          }
        }
      }
    } catch {
      // Continue
    }

    if (combinedItems.length > 0) {
      cachedFootballItems = combinedItems;
      footballCacheTimestamp = Date.now();
      return combinedItems;
    }

    return cachedFootballItems.length > 0
      ? cachedFootballItems
      : FALLBACK_FOOTBALL_ITEMS;
  } catch {
    return cachedFootballItems.length > 0
      ? cachedFootballItems
      : FALLBACK_FOOTBALL_ITEMS;
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

// Football News: BBC Sport Football RSS & ESPN RSS
export const getFootballNews = createServerFn({ method: "POST" })
  .inputValidator((d?: { count?: number }) => d ?? {})
  .handler(async (): Promise<NewsItem[]> => {
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
  });

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
