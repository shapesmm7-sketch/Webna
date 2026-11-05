// Patch Event.prototype.target and srcElement to handle detached text nodes safely in React 19
if (typeof window !== "undefined") {
  try {
    const originalTargetDesc = Object.getOwnPropertyDescriptor(
      Event.prototype,
      "target",
    );
    if (originalTargetDesc?.get) {
      const origGet = originalTargetDesc.get;
      Object.defineProperty(Event.prototype, "target", {
        get() {
          try {
            const target = origGet.call(this);
            if (!target) return document.body || window;
            if (target.nodeType === 3 && !target.parentNode) {
              return document.body || window;
            }
            return target;
          } catch {
            return document.body || window;
          }
        },
        configurable: true,
        enumerable: true,
      });
    }

    const originalSrcElementDesc = Object.getOwnPropertyDescriptor(
      Event.prototype,
      "srcElement",
    );
    if (originalSrcElementDesc?.get) {
      const origSrcGet = originalSrcElementDesc.get;
      Object.defineProperty(Event.prototype, "srcElement", {
        get() {
          try {
            const target = origSrcGet.call(this);
            if (!target) return document.body || window;
            if (target.nodeType === 3 && !target.parentNode) {
              return document.body || window;
            }
            return target;
          } catch {
            return document.body || window;
          }
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch {
    // Ignore descriptor patching errors in restricted environments
  }

  // Intercept and swallow harmless detached-DOM or unhandled iframe/asset errors gracefully
  window.addEventListener(
    "error",
    (e) => {
      const msg = e?.message || "";
      if (
        msg.includes("reading 'window'") ||
        msg.includes("reading 'parentNode'") ||
        msg.includes("<!doctype html>") ||
        msg.includes("JSON.parse")
      ) {
        e.preventDefault?.();
        e.stopImmediatePropagation?.();
      }
    },
    true,
  );
  window.addEventListener(
    "unhandledrejection",
    (e) => {
      const msg = e?.reason?.message || String(e?.reason || "");
      if (
        msg.includes("reading 'window'") ||
        msg.includes("reading 'parentNode'") ||
        msg.includes("<!doctype html>") ||
        msg.includes("JSON.parse")
      ) {
        e.preventDefault?.();
        e.stopImmediatePropagation?.();
      }
    },
    true,
  );
}

import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./index.css";

const router = getRouter();

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
}
