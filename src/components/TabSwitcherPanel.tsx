import { Plus, X, Globe, ExternalLink, Layers, Trash2 } from "lucide-react";
import { useAppLanguage } from "@/lib/i18n";

export type BrowserTab = {
  id: string;
  url: string;
  title: string;
  active: boolean;
};

interface TabSwitcherPanelProps {
  tabs: BrowserTab[];
  activeTabId: string;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string) => void;
  onNewTab: () => void;
  onCloseAll: () => void;
}

const host = (u: string) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};

export function TabSwitcherPanel({
  tabs,
  activeTabId,
  onSelectTab,
  onCloseTab,
  onNewTab,
  onCloseAll,
}: TabSwitcherPanelProps) {
  const { lang } = useAppLanguage();

  return (
    <div className="h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col bg-background px-4 py-3 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/80">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Layers className="size-4" />
          </div>
          <div>
            <h2 className="font-bold text-base text-foreground">
              {lang === "es" ? "Pestañas del navegador" : "Browser Tabs"}
            </h2>
            <p className="text-xs text-muted-foreground">
              {tabs.length} {lang === "es" ? "pestañas abiertas" : "open tabs"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onNewTab}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90 transition-opacity"
          >
            <Plus className="size-3.5" />
            <span>{lang === "es" ? "Nueva" : "New Tab"}</span>
          </button>
          {tabs.length > 0 && (
            <button
              onClick={onCloseAll}
              title={lang === "es" ? "Cerrar todas" : "Close all"}
              className="flex items-center justify-center size-8 rounded-xl bg-muted text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <Trash2 className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tabs Grid */}
      {tabs.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 py-16 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-muted/60 text-muted-foreground mb-3">
            <Layers className="size-8" />
          </div>
          <p className="font-semibold text-sm text-foreground">
            {lang === "es" ? "No hay pestañas abiertas" : "No open tabs"}
          </p>
          <p className="text-xs text-muted-foreground mt-1 mb-4">
            {lang === "es"
              ? "Abre una nueva pestaña para empezar a navegar."
              : "Open a new tab to start browsing the web."}
          </p>
          <button
            onClick={onNewTab}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-brand-foreground text-xs font-semibold"
          >
            <Plus className="size-4" />
            <span>{lang === "es" ? "Abrir pestaña" : "Open Tab"}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 pb-24">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <div
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`group relative flex flex-col rounded-2xl border bg-card overflow-hidden shadow-xs cursor-pointer transition-all ${
                  isActive
                    ? "border-brand ring-2 ring-brand/30 shadow-md"
                    : "border-border/80 hover:border-brand/40"
                }`}
              >
                {/* Tab Card Header (Preview thumbnail bar) */}
                <div className="flex items-center justify-between bg-muted/60 px-3 py-2 border-b border-border/60">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${host(tab.url)}&sz=32`}
                      alt=""
                      className="size-4 rounded-xs shrink-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span className="font-medium text-[11px] text-foreground truncate">
                      {tab.title || host(tab.url) || "New Tab"}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseTab(tab.id);
                    }}
                    title={lang === "es" ? "Cerrar pestaña" : "Close tab"}
                    className="flex size-5 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                </div>

                {/* Tab Card Preview Content */}
                <div className="h-28 bg-background/50 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-brand to-transparent pointer-events-none" />
                  <div className="space-y-1 z-10">
                    <p className="text-xs font-semibold text-foreground line-clamp-2">
                      {tab.title || "WebNa Browser Page"}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate font-mono">
                      {tab.url}
                    </p>
                  </div>
                  <div className="flex items-center justify-between z-10 pt-2 border-t border-border/40">
                    <span className="text-[10px] text-brand font-medium">
                      {host(tab.url)}
                    </span>
                    {isActive && (
                      <span className="text-[9px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                        {lang === "es" ? "Activa" : "Active"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
