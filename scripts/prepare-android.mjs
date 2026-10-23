import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, ".output", "public");
const assetsDir = path.join(publicDir, "assets");
const androidAssetsDir = path.join(
  rootDir,
  "android",
  "app",
  "src",
  "main",
  "assets",
);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (!fs.existsSync(androidAssetsDir)) {
  fs.mkdirSync(androidAssetsDir, { recursive: true });
}

// Find built JS and CSS chunks using relative paths for Capacitor Android
let scriptTag = '<script type="module" src="./src/main.tsx"></script>';
let cssTags = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const mainJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const routesJs = files.find(
    (f) => f.startsWith("routes-") && f.endsWith(".js"),
  );
  const stylesCss = files.find(
    (f) => f.startsWith("styles-") && f.endsWith(".css"),
  );

  if (stylesCss) {
    cssTags = `<link rel="stylesheet" href="./assets/${stylesCss}">`;
  }
  if (mainJs) {
    scriptTag = `${routesJs ? `<script type="module" src="./assets/${routesJs}"></script>` : ""}<script type="module" src="./assets/${mainJs}"></script>`;
  }
}

const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>WebNa Browser</title>
    <meta name="description" content="WebNa: fast browser with Google search, worldwide news, saved links and a video downloader." />
    <meta name="theme-color" content="#c25e00" />
    ${cssTags}
  </head>
  <body>
    <div id="root"></div>
    ${scriptTag}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlTemplate, "utf-8");
console.log(
  "Successfully prepared .output/public/index.html with relative paths for Capacitor Android!",
);
