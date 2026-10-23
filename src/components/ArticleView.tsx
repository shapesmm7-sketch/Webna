import { useEffect, useState } from "react";
import { ArrowLeft, Bookmark, ExternalLink, Globe } from "lucide-react";
import { getArticle, resolveNews, type Article } from "@/lib/news.functions";

export function ArticleView({
  link,
  onBack,
  onOpenWeb,
  isSaved,
  onToggleSave,
}: {
  link: string;
  onBack: () => void;
  onOpenWeb: (url: string) => void;
  isSaved?: boolean;
  onToggleSave?: (url: string, title: string) => void;
}) {
  const [a, setA] = useState<Article | null>(null);
  useEffect(() => {
    let live = true;
    setA(null);
    (async () => {
      const url = await resolveNews({ data: { url: link } });
      const art = await getArticle({ data: { url } });
      if (live) setA(art);
    })().catch(
      () => live && setA({ url: link, site: "", title: "", paragraphs: [] }),
    );
    return () => {
      live = false;
    };
  }, [link]);

  return (
    <div className="fixed inset-0 z-30 overflow-y-auto bg-background pb-28">
      <div className="sticky top-0 z-10 flex items-center gap-2 bg-background/95 px-3 py-3 backdrop-blur">
        <button
          onClick={onBack}
          className="rounded-full bg-card p-2 shadow-sm"
          aria-label="Back"
        >
          <ArrowLeft className="size-5" />
        </button>
        <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
          {a?.site || "Loading…"}
        </span>
        {a && onToggleSave && (
          <button
            onClick={() => onToggleSave(a.url, a.title || a.site || "Article")}
            className="flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm hover:bg-muted"
            title={isSaved ? "Saved to links" : "Save to saved links"}
            aria-label="Save link"
          >
            <Bookmark
              className={`size-4 ${
                isSaved ? "fill-brand text-brand" : "text-muted-foreground"
              }`}
            />
            <span className={isSaved ? "text-brand font-semibold" : ""}>
              {isSaved ? "Saved" : "Save"}
            </span>
          </button>
        )}
        {a && (
          <button
            onClick={() => onOpenWeb(a.url)}
            className="flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm"
          >
            <Globe className="size-4" />
            Web
          </button>
        )}
        {a && (
          <a
            href={a.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-card p-2 shadow-sm"
            aria-label="Open externally"
          >
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>
      <article className="mx-auto max-w-xl px-4">
        {!a ? (
          <div className="space-y-3">
            <div className="aspect-video animate-pulse rounded-2xl bg-muted" />
            <div className="h-6 animate-pulse rounded bg-muted" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 animate-pulse rounded bg-muted" />
            ))}
          </div>
        ) : (
          <>
            {a.image && (
              <img
                src={a.image}
                alt=""
                referrerPolicy="no-referrer"
                className="mb-4 aspect-video w-full rounded-2xl object-cover"
              />
            )}
            <h1 className="mb-4 text-2xl font-bold leading-tight">{a.title}</h1>
            {a.paragraphs.length ? (
              a.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <div className="rounded-2xl bg-card p-4 text-sm">
                This article can't be shown in reader mode.
                <button
                  onClick={() => onOpenWeb(a.url)}
                  className="mt-3 block font-medium text-brand"
                >
                  Open web page
                </button>
              </div>
            )}
          </>
        )}
      </article>
    </div>
  );
}
