import { useState } from "react";
import { Bookmark, ExternalLink, Plus, Search, Trash2, X } from "lucide-react";

export type SavedLinkEntry = {
  url: string;
  title: string;
  at: number;
};

const host = (u: string) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};

export function SavedLinksManager({
  items,
  onGo,
  onRemove,
  onAdd,
}: {
  items: SavedLinkEntry[];
  onGo: (u: string) => void;
  onRemove: (item: SavedLinkEntry) => void;
  onAdd: (item: SavedLinkEntry) => void;
}) {
  const [query, setQuery] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const filtered = items.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.url.toLowerCase().includes(query.toLowerCase()),
  );

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let u = newUrl.trim();
    if (!u) return;
    if (!u.startsWith("http://") && !u.startsWith("https://")) {
      u = "https://" + u;
    }
    const t = newTitle.trim() || host(u);
    onAdd({
      url: u,
      title: t,
      at: Date.now(),
    });
    setNewTitle("");
    setNewUrl("");
    setShowAdd(false);
  };

  return (
    <div className="space-y-4">
      {/* Top action row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Bookmark className="size-4.5 fill-brand/20 text-brand" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">Saved Links</h3>
            <p className="text-[11px] text-muted-foreground">
              {items.length} {items.length === 1 ? "link" : "links"} saved to
              read later
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90"
        >
          {showAdd ? <X className="size-3.5" /> : <Plus className="size-3.5" />}
          <span>{showAdd ? "Cancel" : "Save Link"}</span>
        </button>
      </div>

      {/* Add Form */}
      {showAdd && (
        <form
          onSubmit={handleAddSubmit}
          className="rounded-2xl border border-brand/30 bg-brand/5 p-3.5 space-y-2.5"
        >
          <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
            <Bookmark className="size-3.5 text-brand" />
            <span>Save a New Link</span>
          </div>
          <input
            type="text"
            placeholder="Link Title (e.g. Interesting Article)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
          />
          <input
            type="text"
            placeholder="URL (e.g. https://example.com/article)"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            required
            className="w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
          />
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAdd(false)}
              className="rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground"
            >
              Save Link
            </button>
          </div>
        </form>
      )}

      {/* Search Filter */}
      {items.length > 2 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search saved links..."
            className="w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
      )}

      {/* Items list */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border">
          <div className="mb-3 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <Bookmark className="size-7 fill-brand/20 text-brand" />
          </div>
          <h4 className="text-sm font-semibold text-foreground">
            {query ? "No matching saved links" : "No saved links yet"}
          </h4>
          <p className="mt-1 max-w-xs text-xs text-muted-foreground">
            {query
              ? "Try searching for another title or URL."
              : "Save news stories, articles, and useful websites to read them anytime from this page."}
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs">
          {filtered.map((item, i) => (
            <div
              key={`${item.url}-${i}`}
              className="group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40"
            >
              <button
                type="button"
                onClick={() => onGo(item.url)}
                className="flex min-w-0 flex-1 items-center gap-3 text-left"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${host(item.url)}&sz=64`}
                    alt=""
                    className="size-4.5 rounded-xs object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-foreground">
                    {item.title || host(item.url)}
                  </div>
                  <div className="truncate text-[11px] text-muted-foreground">
                    {host(item.url)}
                  </div>
                </div>
              </button>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => onGo(item.url)}
                  title="Open link"
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand"
                >
                  <ExternalLink className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onRemove(item)}
                  title="Delete saved link"
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
