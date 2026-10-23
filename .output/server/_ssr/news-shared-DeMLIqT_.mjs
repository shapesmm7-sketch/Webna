//#region node_modules/.nitro/vite/services/ssr/assets/news-shared-DeMLIqT_.js
var dec = (s) => s.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").trim();
var tag = (x, t) => dec(x.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`))?.[1] ?? "");
var U = (id) => `https://images.unsplash.com/photo-${id}?w=600`;
var DEFAULT_IMAGE = U("1504711434969-e33886168f5c");
var FOOTBALL_PLACEHOLDER = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80";
var FALLBACKS = {
	WORLD: U("1521295121783-8a321d551ad2"),
	TECHNOLOGY: U("1518770660439-4636190af475"),
	SPORTS: U("1461896836934-ffe607ba8211"),
	BUSINESS: U("1611974789855-9c2a0a7236a3"),
	SCIENCE: U("1446776653964-20c1d3a81b06"),
	ENTERTAINMENT: U("1514525253161-7a46d19cd819"),
	FOOTBALL: FOOTBALL_PLACEHOLDER
};
var fallbackImage = (category, _seed) => FALLBACKS[category] ?? DEFAULT_IMAGE;
var validImage = (u) => !!u && u.length >= 10 && u.startsWith("http");
async function decodeGoogleNews(url) {
	const id = url.match(/articles\/([^?/]+)/)?.[1];
	if (!id) return url;
	try {
		const page = await (await fetch(`https://news.google.com/rss/articles/${id}`, {
			headers: { "User-Agent": "Mozilla/5.0" },
			signal: AbortSignal.timeout(5e3)
		})).text();
		const sg = page.match(/data-n-a-sg="([^"]+)"/)?.[1];
		const ts = page.match(/data-n-a-ts="([^"]+)"/)?.[1];
		if (!sg || !ts) return url;
		const req = [[["Fbv4je", `["garturlreq",[["X","X",["X","X"],null,null,1,1,"US:en",null,1,null,null,null,null,null,0,1],"X","X",1,[1,1,1],1,1,null,0,0,null,0],"${id}",${ts},"${sg}"]`]]];
		const r = await fetch("https://news.google.com/_/DotsSplashUi/data/batchexecute", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				"User-Agent": "Mozilla/5.0"
			},
			body: "f.req=" + encodeURIComponent(JSON.stringify(req)),
			signal: AbortSignal.timeout(5e3)
		});
		const inner = JSON.parse(JSON.parse((await r.text()).split("\n\n")[1])[0][2]);
		return typeof inner?.[1] === "string" ? inner[1] : url;
	} catch {
		return url;
	}
}
async function findOgImage(url) {
	try {
		const html = (await (await fetch(url, {
			headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" },
			signal: AbortSignal.timeout(5e3)
		})).text()).slice(0, 5e5);
		const m = html.match(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/i) ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/i);
		const img = m?.[1] ? dec(m[1]).trim() : void 0;
		if (!img) return void 0;
		if (img.startsWith("//")) return "https:" + img;
		return img.startsWith("http") ? img : void 0;
	} catch {
		return;
	}
}
//#endregion
export { fallbackImage as a, validImage as c, decodeGoogleNews as i, FOOTBALL_PLACEHOLDER as n, findOgImage as o, dec as r, tag as s, DEFAULT_IMAGE as t };
