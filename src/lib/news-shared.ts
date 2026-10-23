export const dec = (s: string) =>
  s
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
export const tag = (x: string, t: string) =>
  dec(x.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`))?.[1] ?? "");

// Category picture used when an article has no photo of its own.
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=600`;
export const DEFAULT_IMAGE = U("1504711434969-e33886168f5c");
export const FOOTBALL_PLACEHOLDER =
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80";

const FALLBACKS: Record<string, string> = {
  WORLD: U("1521295121783-8a321d551ad2"),
  TECHNOLOGY: U("1518770660439-4636190af475"),
  SPORTS: U("1461896836934-ffe607ba8211"),
  BUSINESS: U("1611974789855-9c2a0a7236a3"),
  SCIENCE: U("1446776653964-20c1d3a81b06"),
  ENTERTAINMENT: U("1514525253161-7a46d19cd819"),
  FOOTBALL: FOOTBALL_PLACEHOLDER,
};
export const fallbackImage = (category: string, _seed?: string) =>
  FALLBACKS[category] ?? DEFAULT_IMAGE;
export const validImage = (u?: string | null) =>
  !!u && u.length >= 10 && u.startsWith("http");

// Google News links are wrappers; decode them to the publisher's real URL.
export async function decodeGoogleNews(url: string): Promise<string> {
  const id = url.match(/articles\/([^?/]+)/)?.[1];
  if (!id) return url;
  try {
    const page = await (
      await fetch(`https://news.google.com/rss/articles/${id}`, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(5000),
      })
    ).text();
    const sg = page.match(/data-n-a-sg="([^"]+)"/)?.[1];
    const ts = page.match(/data-n-a-ts="([^"]+)"/)?.[1];
    if (!sg || !ts) return url;
    const req = [
      [
        [
          "Fbv4je",
          `["garturlreq",[["X","X",["X","X"],null,null,1,1,"US:en",null,1,null,null,null,null,null,0,1],"X","X",1,[1,1,1],1,1,null,0,0,null,0],"${id}",${ts},"${sg}"]`,
        ],
      ],
    ];
    const r = await fetch(
      "https://news.google.com/_/DotsSplashUi/data/batchexecute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "User-Agent": "Mozilla/5.0",
        },
        body: "f.req=" + encodeURIComponent(JSON.stringify(req)),
        signal: AbortSignal.timeout(5000),
      },
    );
    const inner = JSON.parse(
      JSON.parse((await r.text()).split("\n\n")[1]!)[0][2],
    );
    return typeof inner?.[1] === "string" ? inner[1] : url;
  } catch {
    return url;
  }
}

export async function findOgImage(url: string): Promise<string | undefined> {
  try {
    const html = (
      await (
        await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          },
          signal: AbortSignal.timeout(5000),
        })
      ).text()
    ).slice(0, 500000);
    const m =
      html.match(
        /<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/i,
      ) ??
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/i,
      );
    const img = m?.[1] ? dec(m[1]).trim() : undefined;
    if (!img) return undefined;
    if (img.startsWith("//")) return "https:" + img;
    return img.startsWith("http") ? img : undefined;
  } catch {
    return undefined;
  }
}
