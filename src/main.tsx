import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./index.css";

if (typeof window !== "undefined") {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.includes("android_asset")
  ) {
    try {
      window.history.replaceState(null, "", "/");
    } catch {
      // ignore
    }
  }
}

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
