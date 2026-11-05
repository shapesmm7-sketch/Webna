import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, ".output", "public");
const assetsDir = path.join(publicDir, "assets");
const androidPublicDir = path.join(
  rootDir,
  "android",
  "app",
  "src",
  "main",
  "assets",
  "public",
);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Find built JS and CSS chunks using relative paths for Capacitor Android
let scriptTag = '<script type="module" src="./src/main.tsx"></script>';
let cssTags = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  // Sort files by mtime desc to pick the freshest build artifacts if multiple exist
  const jsFiles = files
    .filter((f) => f.startsWith("index-") && f.endsWith(".js"))
    .sort((a, b) => {
      const aTime = fs.statSync(path.join(assetsDir, a)).mtimeMs;
      const bTime = fs.statSync(path.join(assetsDir, b)).mtimeMs;
      return bTime - aTime;
    });
  const cssFiles = files
    .filter((f) => f.startsWith("styles-") && f.endsWith(".css"))
    .sort((a, b) => {
      const aTime = fs.statSync(path.join(assetsDir, a)).mtimeMs;
      const bTime = fs.statSync(path.join(assetsDir, b)).mtimeMs;
      return bTime - aTime;
    });

  const mainJs = jsFiles[0];
  const stylesCss = cssFiles[0];

  if (stylesCss) {
    cssTags = `<link rel="stylesheet" href="./assets/${stylesCss}">`;
  }
  if (mainJs) {
    // Only load the entry point module (index-*.js). Async route chunks are dynamically imported by index-*.js.
    scriptTag = `<script type="module" src="./assets/${mainJs}"></script>`;
  }
}

const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>WebNa Browser</title>
    <meta name="description" content="WebNa: fast mobile browser with search engines, worldwide news, saved links and media player." />
    <meta name="theme-color" content="#c25e00" />
    <script>
      window.__IS_CAPACITOR__ = true;
      // Ensure hash route is set to #/ for hash history on Android WebView
      try {
        if (!window.location.hash || window.location.hash === "#") {
          window.location.hash = "#/";
        }
      } catch (e) {}
    </script>
    ${cssTags}
  </head>
  <body>
    <div id="root"></div>
    ${scriptTag}
  </body>
</html>
`;

// Write to .output/public/index.html
fs.writeFileSync(path.join(publicDir, "index.html"), htmlTemplate, "utf-8");

// Helper function to recursively copy directory
function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

// Clean android/app/src/main/assets/public completely to eliminate stale chunks
if (fs.existsSync(androidPublicDir)) {
  fs.rmSync(androidPublicDir, { recursive: true, force: true });
}
fs.mkdirSync(androidPublicDir, { recursive: true });

// Copy everything from .output/public to android/app/src/main/assets/public
copyFolderSync(publicDir, androidPublicDir);

// Explicitly ensure android/app/src/main/assets/public/index.html has the sanitized template
fs.writeFileSync(
  path.join(androidPublicDir, "index.html"),
  htmlTemplate,
  "utf-8",
);

console.log(
  "Successfully prepared and synchronized fresh Android assets with relative paths in android/app/src/main/assets/public!",
);
