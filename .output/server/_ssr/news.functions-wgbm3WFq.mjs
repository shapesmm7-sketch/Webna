import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import {
  i as decodeGoogleNews,
  o as findOgImage,
  r as dec,
  s as tag,
} from "./news-shared-DeMLIqT_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news.functions-wgbm3WFq.js
function parseRssFeed(xml, feedUrl, fallbackSource) {
  const items = [];
  const seenLinks = /* @__PURE__ */ new Set();
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
    const dedupeKey = cleanLink || cleanTitleRaw;
    if (!dedupeKey || seenLinks.has(dedupeKey)) continue;
    seenLinks.add(dedupeKey);
    let source = tag(it, "source");
    if (!source)
      if (fallbackSource) source = fallbackSource;
      else if (feedUrl.includes("bbci.co.uk") || cleanLink.includes("bbc."))
        source = "BBC Sport";
      else if (feedUrl.includes("espn.com") || cleanLink.includes("espn."))
        source = "ESPN";
      else if (
        feedUrl.includes("nytimes.com") ||
        cleanLink.includes("nytimes.")
      )
        source = "The New York Times";
      else if (cleanTitleRaw.includes(" - "))
        source = cleanTitleRaw.split(" - ").pop()?.trim() || "News";
      else
        try {
          source = new URL(cleanLink).hostname.replace("www.", "");
        } catch {
          source = "News";
        }
    const cleanTitle = cleanTitleRaw.endsWith(" - " + source)
      ? cleanTitleRaw.slice(0, -(source.length + 3))
      : cleanTitleRaw;
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
      if (thumbnail.startsWith("//")) thumbnail = "https:" + thumbnail;
      if (thumbnail.includes("ichef.bbci.co.uk/ace/standard/"))
        thumbnail = thumbnail.replace(/\/standard\/\d+\//, "/standard/800/");
    }
    items.push({
      title: cleanTitle,
      link: cleanLink,
      pubDate,
      source,
      thumbnail: thumbnail || void 0,
      description: cleanDesc || void 0,
    });
  }
  return items;
}
var getNews_createServerFn_handler = createServerRpc(
  {
    id: "bfbec92a60869ea1e09c7f95f0839b6952da957ddfb9e9d7e780b3072625bd4f",
    name: "getNews",
    filename: "src/lib/news.functions.ts",
  },
  (opts) => getNews.__executeServer(opts),
);
var getNews = createServerFn({ method: "GET" })
  .inputValidator((d) => d)
  .handler(getNews_createServerFn_handler, async ({ data }) => {
    const feedUrl = data.rss || "https://feeds.bbci.co.uk/news/rss.xml";
    if (!feedUrl.startsWith("http")) return [];
    try {
      const r = await fetch(feedUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
        signal: AbortSignal.timeout(8e3),
      });
      if (!r.ok) throw new Error("feed " + r.status);
      const items = parseRssFeed(await r.text(), feedUrl);
      const missing = items
        .slice(0, 12)
        .filter((it) => !it.thumbnail && it.link.startsWith("http"));
      if (missing.length > 0)
        await Promise.allSettled(
          missing.map(async (item) => {
            const og = await findOgImage(item.link);
            if (og) item.thumbnail = og;
          }),
        );
      return items;
    } catch (e) {
      console.error("Error fetching news feed:", e);
      return [];
    }
  });
var getFootballNews_createServerFn_handler = createServerRpc(
  {
    id: "0ec82f665f21f8137a72aa7c79c6a4b115662d17f0e8fd9fe00bc51789fe9299",
    name: "getFootballNews",
    filename: "src/lib/news.functions.ts",
  },
  (opts) => getFootballNews.__executeServer(opts),
);
var getFootballNews = createServerFn({ method: "GET" }).handler(
  getFootballNews_createServerFn_handler,
  async () => {
    try {
      const espnRes = await fetch("https://www.espn.com/espn/rss/soccer/news", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
        signal: AbortSignal.timeout(6e3),
      });
      if (espnRes.ok && espnRes.status === 200) {
        const text = await espnRes.text();
        if (text && text.includes("<item>") && text.length > 200) {
          const items = parseRssFeed(
            text,
            "https://www.espn.com/espn/rss/soccer/news",
            "ESPN",
          );
          if (items.length > 0) return items;
        }
      }
    } catch (espnErr) {
      console.warn(
        "ESPN soccer RSS failed, falling back to BBC Sport:",
        espnErr,
      );
    }
    try {
      const bbcRes = await fetch(
        "https://feeds.bbci.co.uk/sport/football/rss.xml",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            Accept: "application/rss+xml, application/xml, text/xml, */*",
          },
          signal: AbortSignal.timeout(8e3),
        },
      );
      if (bbcRes.ok) {
        const items = parseRssFeed(
          await bbcRes.text(),
          "https://feeds.bbci.co.uk/sport/football/rss.xml",
          "BBC Sport",
        );
        if (items.length > 0) return items;
      }
    } catch (bbcErr) {
      console.error("BBC Sport football RSS fallback failed:", bbcErr);
    }
    return [];
  },
);
var resolveNews_createServerFn_handler = createServerRpc(
  {
    id: "a3071d49fef0c4e200c04884cdb0bdc49a01a98fd796e18ba9329ca56e4dd094",
    name: "resolveNews",
    filename: "src/lib/news.functions.ts",
  },
  (opts) => resolveNews.__executeServer(opts),
);
var resolveNews = createServerFn({ method: "POST" })
  .inputValidator((d) => d)
  .handler(resolveNews_createServerFn_handler, async ({ data }) => {
    return decodeGoogleNews(data.url);
  });
var getArticle_createServerFn_handler = createServerRpc(
  {
    id: "2d9ab34da3812c140e34a8ff8418d3b07aa14e8e0c4153bb9620ccb96a43fc49",
    name: "getArticle",
    filename: "src/lib/news.functions.ts",
  },
  (opts) => getArticle.__executeServer(opts),
);
var getArticle = createServerFn({ method: "POST" })
  .inputValidator((d) => d)
  .handler(getArticle_createServerFn_handler, async ({ data }) => {
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
      const meta = (p) =>
        html.match(
          new RegExp(
            `<meta[^>]+(?:property|name)=["']${p}["'][^>]+content=["']([^"']+)`,
            "i",
          ),
        )?.[1];
      const paragraphs = [
        ...html
          .replace(
            /<(script|style|noscript|svg|nav|footer|header|aside|form)[\s\S]*?<\/\1>/gi,
            "",
          )
          .matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi),
      ]
        .map(([, t]) =>
          dec(t.replace(/<[^>]+>/g, ""))
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
      return {
        url: data.url,
        site,
        title: "",
        paragraphs: [],
      };
    }
  });
//#endregion
export {
  getArticle_createServerFn_handler,
  getFootballNews_createServerFn_handler,
  getNews_createServerFn_handler,
  resolveNews_createServerFn_handler,
};
