import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ExternalLink,
  Film,
  Home,
  Menu,
  Music,
  RotateCw,
  Star,
  X,
  Share2,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";
import { isCleanLinksEnabled, stripTrackingParams } from "@/lib/safety";

export function resolveIframeSrc(rawUrl: string): string {
  if (!rawUrl) return "";
  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname.toLowerCase();

    // Sites known to support direct iframe embedding
    if (host.includes("google.") && !parsed.searchParams.has("igu")) {
      parsed.searchParams.set("igu", "1");
      return parsed.toString();
    }
    if (
      host.includes("google.") ||
      host.includes("wikipedia.org") ||
      host.includes("archive.org")
    ) {
      return rawUrl;
    }

    // OpenStreetMap has official full-screen embed
    if (host.includes("openstreetmap.org")) {
      if (
        parsed.pathname === "/" ||
        !parsed.pathname.includes("export/embed.html")
      ) {
        return "https://www.openstreetmap.org/export/embed.html";
      }
      return rawUrl;
    }

    // All sites that restrict embedding via X-Frame-Options or CSP frame-ancestors
    // are seamlessly served through the built-in WebNa proxy
    return `/api/proxy?url=${encodeURIComponent(rawUrl)}`;
  } catch {
    return rawUrl;
  }
}

function getDisplayUrl(u: string): string {
  if (!u) return "";
  try {
    if (u.startsWith("/api/proxy")) {
      const q = new URL(u, "http://localhost:3000").searchParams.get("url");
      if (q) return q;
    }
    return u
      .replace("?igu=1&", "?")
      .replace("&igu=1", "")
      .replace("?igu=1", "");
  } catch {
    return u;
  }
}

export function BrowserView({
  stack,
  idx,
  onNav,
  onMove,
  onHome,
  isSaved,
  onToggleSave,
  onOpenPanel,
  onOpenPlayer,
  isIncognito = false,
  onToggleIncognito,
}: {
  stack: string[];
  idx: number;
  onNav: (raw: string) => void;
  onMove: (d: number) => void;
  onHome: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenPanel: (
    p: "history" | "bookmarks" | "saved-links" | "settings" | "account",
  ) => void;
  onOpenPlayer: (mode: "audio" | "video") => void;
  isIncognito?: boolean;
  onToggleIncognito?: () => void;
}) {
  const rawUrl = stack[idx] ?? "";
  const [reload, setReload] = useState(0);
  const [menu, setMenu] = useState(false);
  const [addr, setAddr] = useState<string | null>(null);
  const btn = "p-2 rounded-full disabled:opacity-30";
  const displayUrl = getDisplayUrl(rawUrl);
  const iframeSrc = resolveIframeSrc(rawUrl);

  return (
    <div className="flex h-full flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (addr) onNav(addr);
          setAddr(null);
        }}
        className="mx-3 mt-3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm border border-border/40"
      >
        <input
          value={addr ?? displayUrl}
          onChange={(e) => setAddr(e.target.value)}
          onFocus={(e) => e.target.select()}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          inputMode="url"
          placeholder="Search or enter URL"
        />
        <button
          type="button"
          onClick={onToggleSave}
          aria-label={isSaved ? "Remove from bookmarks" : "Add to bookmarks"}
          title={isSaved ? "Bookmarked (tap to remove)" : "Bookmark this page"}
          className="p-1 rounded-full transition-transform active:scale-90"
        >
          <Star
            className={`size-4.5 transition-colors ${
              isSaved
                ? "fill-amber-400 text-amber-500 drop-shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          />
        </button>
        <button
          type="button"
          onClick={() => setReload(reload + 1)}
          aria-label="Reload"
          title="Reload"
        >
          <RotateCw className="size-4 text-muted-foreground hover:text-foreground" />
        </button>
        <button
          type="button"
          onClick={() => {
            window.open(displayUrl, "_blank");
          }}
          aria-label="Open in external browser"
          title="Open in new window"
        >
          <ExternalLink className="size-4 text-muted-foreground hover:text-foreground" />
        </button>
      </form>
      <div className="mx-3 mt-1.5 flex items-center justify-between rounded-xl bg-muted/60 px-3 py-1 text-[11px] text-muted-foreground border border-border/30">
        <span className="truncate pr-2 font-medium">
          {(() => {
            try {
              return new URL(displayUrl).hostname.replace("www.", "");
            } catch {
              return displayUrl || "Web page";
            }
          })()}
        </span>
        <button
          type="button"
          onClick={() => {
            window.open(displayUrl, "_blank");
          }}
          className="flex items-center gap-1 shrink-0 font-semibold text-brand hover:underline"
        >
          <span>Open Full Site</span>
          <ExternalLink className="size-3" />
        </button>
      </div>

      <iframe
        key={iframeSrc + reload}
        src={iframeSrc}
        title="Web page"
        className="mt-2 w-full flex-1 border-0 bg-card"
        allow="fullscreen; clipboard-read; clipboard-write; encrypted-media; picture-in-picture; web-share; geolocation; microphone; camera"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
      />

      <div className="mb-24 flex items-center justify-around border-t bg-card py-1">
        <button
          className={btn}
          disabled={idx === 0}
          onClick={() => onMove(-1)}
          aria-label="Back"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          className={btn}
          disabled={idx >= stack.length - 1}
          onClick={() => onMove(1)}
          aria-label="Forward"
        >
          <ArrowRight className="size-5" />
        </button>
        <button className={btn} onClick={onHome} aria-label="Home">
          <Home className="size-5" />
        </button>
        <button className={btn} onClick={() => setMenu(true)} aria-label="Menu">
          <Menu className="size-5" />
        </button>
      </div>
      {menu && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs"
          onClick={() => setMenu(false)}
        >
          <div
            className="w-full rounded-t-3xl bg-card p-4 pb-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between border-b pb-2">
              <span className="text-sm font-bold text-foreground">Menu</span>
              <button onClick={() => setMenu(false)} aria-label="Close menu">
                <X className="size-5" />
              </button>
            </div>
            {[
              {
                l: isIncognito ? "Turn off Incognito" : "Incognito mode",
                I: EyeOff,
                f: () => {
                  setMenu(false);
                  if (onToggleIncognito) onToggleIncognito();
                },
              },
              {
                l: "Bookmarks",
                I: Star,
                f: () => onOpenPanel("bookmarks"),
              },
              {
                l: "Saved links",
                I: Bookmark,
                f: () => onOpenPanel("saved-links"),
              },
              {
                l: "History",
                I: RotateCw,
                f: () => onOpenPanel("history"),
              },
              {
                l: "Audio player",
                I: Music,
                f: () => onOpenPlayer("audio"),
              },
              {
                l: "Video player",
                I: Film,
                f: () => onOpenPlayer("video"),
              },
              {
                l: "Settings",
                I: Menu,
                f: () => onOpenPanel("settings"),
              },
              {
                l: "Account",
                I: Home,
                f: () => onOpenPanel("account"),
              },
              {
                l: "Share clean link",
                I: Share2,
                f: async () => {
                  let shareUrl = displayUrl;
                  if (isCleanLinksEnabled()) {
                    shareUrl = stripTrackingParams(shareUrl);
                  }
                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: "WebNa Browser",
                        url: shareUrl,
                      });
                      return;
                    } catch {
                      // ignore abort
                    }
                  }
                  navigator.clipboard.writeText(shareUrl);
                  toast.success("Clean link copied to clipboard!");
                },
              },
              {
                l: "Open in external browser",
                I: ExternalLink,
                f: () => {
                  window.open(displayUrl, "_blank");
                },
              },
              {
                l: "Quit app",
                I: X,
                f: () => onHome(),
              },
            ].map(({ l, I, f }) => (
              <button
                key={l}
                onClick={() => {
                  f();
                  setMenu(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors"
              >
                <I className="size-5 text-brand" />
                <span>{l}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
