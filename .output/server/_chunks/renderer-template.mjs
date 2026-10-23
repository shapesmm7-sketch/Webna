import { i as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () =>
  new HTTPResponse(
    '<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>WebNa Browser</title>\n    <meta\n      name="description"\n      content="Fast mobile browser with search engines, worldwide news, saved links and media player."\n    />\n    <meta property="og:title" content="WebNa Browser" />\n    <meta\n      property="og:description"\n      content="Fast mobile browser with search engines, worldwide news, saved links and media player."\n    />\n    <meta property="og:type" content="website" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <link rel="manifest" href="/manifest.json" />\n    <meta name="theme-color" content="#ffffff" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"><\/script>\n  </body>\n</html>\n',
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
