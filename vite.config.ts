// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    base: "./",
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    plugins: [
      {
        name: "webna-dev-proxy",
        configureServer(server) {
          server.middlewares.use("/api/proxy", async (req, res, next) => {
            try {
              const { handleProxyNodeRequest } =
                await import("./src/lib/proxy-handler.ts");
              await handleProxyNodeRequest(req, res);
            } catch (err) {
              console.error("Proxy middleware error:", err);
              next();
            }
          });
        },
      },
    ],
  },
});
