import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tiktok.functions-CS7366tO.js
var getTikTokFeed_createServerFn_handler = createServerRpc(
  {
    id: "12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c",
    name: "getTikTokFeed",
    filename: "src/lib/tiktok.functions.ts",
  },
  (opts) => getTikTokFeed.__executeServer(opts),
);
var getTikTokFeed = createServerFn({ method: "GET" })
  .inputValidator((d) => d)
  .handler(getTikTokFeed_createServerFn_handler, async ({ data }) => {
    const count = data.count || 20;
    const url = `https://www.tikwm.com/api/hashtag/posts?hashtag=${data.hashtag || "fyp"}&count=${count}&region=US`;
    try {
      const r = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
        },
        signal: AbortSignal.timeout(8e3),
      });
      if (!r.ok) throw new Error("feed " + r.status);
      const json = await r.json();
      if (json.code !== 0 || !json.data || !Array.isArray(json.data.videos))
        return [];
      return json.data.videos.map((v) => ({
        video_id: v.video_id,
        title: v.title || "Trending video",
        play: v.play,
        cover: v.cover,
        author_id: v.author?.unique_id || "tiktok",
        play_count: v.play_count,
        digg_count: v.digg_count,
      }));
    } catch (e) {
      console.error("Error fetching TikTok feed:", e);
      return [];
    }
  });
var getTikTokHashtags_createServerFn_handler = createServerRpc(
  {
    id: "95383726419c8d41b607b329c198f2eb5226890e770792a1efa653ff18c70c69",
    name: "getTikTokHashtags",
    filename: "src/lib/tiktok.functions.ts",
  },
  (opts) => getTikTokHashtags.__executeServer(opts),
);
var getTikTokHashtags = createServerFn({ method: "GET" }).handler(
  getTikTokHashtags_createServerFn_handler,
  async () => {
    try {
      const r = await fetch("https://www.tikwm.com/api/hashtag/list?count=20", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Mobile Safari/537.36",
        },
        signal: AbortSignal.timeout(8e3),
      });
      if (!r.ok) return [];
      return (await r.json()).data.hashtags.map((h) => h.hashtag);
    } catch {
      return [];
    }
  },
);
//#endregion
export {
  getTikTokFeed_createServerFn_handler,
  getTikTokHashtags_createServerFn_handler,
};
