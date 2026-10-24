import fs from "fs";
import path from "path";

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

if (!fs.existsSync(androidPublicDir)) {
  fs.mkdirSync(androidPublicDir, { recursive: true });
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
    <script>
      // Normalize Capacitor Android initial URL if loaded from /index.html or file:///
      if (window.location.pathname.endsWith("index.html") || window.location.pathname.includes("android_asset")) {
        try {
          window.history.replaceState(null, "", "/");
        } catch (e) {}
      }
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

// Copy everything to android/app/src/main/assets/public
copyFolderSync(publicDir, androidPublicDir);

// Also explicitly ensure android/app/src/main/assets/public/index.html is the sanitized one
fs.writeFileSync(
  path.join(androidPublicDir, "index.html"),
  htmlTemplate,
  "utf-8",
);

console.log(
  "Successfully prepared and synchronized Android assets with relative paths in android/app/src/main/assets/public!",
);
