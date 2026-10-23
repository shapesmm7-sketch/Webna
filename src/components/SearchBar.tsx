import { useEffect, useState } from "react";
import { Mic, ScanSearch, Search } from "lucide-react";
import { useAppLanguage } from "@/lib/i18n";

export function SearchBar({
  value = "",
  onSubmit,
  onLens,
  engineName = "Google",
  engineDomain = "google.com",
  onEngineClick,
}: {
  value?: string;
  onSubmit: (q: string) => void;
  onLens: () => void;
  engineName?: string;
  engineDomain?: string;
  onEngineClick?: () => void;
}) {
  const { t } = useAppLanguage();
  const [q, setQ] = useState(value);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => setQ(value), [value]);
  useEffect(() => {
    setImgFailed(false);
  }, [engineDomain, engineName]);

  const [listening, setListening] = useState(false);

  const voice = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as unknown as Record<string, any>;
    const SR = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (!SR) {
      alert(
        "Voice search is not supported in this browser. Try Chrome or Safari.",
      );
      return;
    }
    try {
      const r = new SR();
      r.lang = navigator.language || "en-US";
      r.interimResults = false;
      r.maxAlternatives = 1;

      r.onstart = () => {
        setListening(true);
      };

      r.onresult = (e: { results: { transcript: string }[][] }) => {
        setListening(false);
        const t = e.results?.[0]?.[0]?.transcript;
        if (t) {
          setQ(t);
          onSubmit(t);
        }
      };

      r.onerror = (e: { error?: string }) => {
        setListening(false);
        if (e.error === "not-allowed") {
          alert(
            "Microphone permission was denied. Please allow microphone access in your browser settings.",
          );
        } else {
          console.warn("Speech recognition error:", e.error);
        }
      };

      r.onend = () => {
        setListening(false);
      };

      r.start();
    } catch (err) {
      setListening(false);
      console.error("Voice search start error:", err);
      alert(
        "Could not start voice recognition. Please check microphone permissions.",
      );
    }
  };

  const isAi = [
    "Gemini",
    "ChatGPT",
    "Claude",
    "Perplexity",
    "Copilot",
    "DeepSeek",
    "Grok",
    "Poe",
    "Phind",
    "You.com",
    "Meta AI",
    "Mistral",
    "HuggingChat",
    "Pi AI",
  ].includes(engineName);

  const placeholder = isAi
    ? t("askOrType").replace("{engine}", engineName)
    : t("searchWithOrType").replace("{engine}", engineName);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (q.trim()) onSubmit(q.trim());
      }}
      className="flex items-center gap-2 rounded-full bg-card px-3.5 py-2 shadow-sm border border-border/50"
    >
      <button
        type="button"
        onClick={onEngineClick}
        className="flex items-center justify-center -ml-1 p-1 rounded-full hover:bg-muted/70 active:scale-95 transition-all shrink-0"
        title={`Current engine: ${engineName}. Tap to change.`}
        aria-label={`Change search engine, currently ${engineName}`}
      >
        {engineName === "Google" ? (
          <span
            className="text-lg font-bold leading-none px-0.5"
            style={{
              background: "var(--gradient-google)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            G
          </span>
        ) : !imgFailed ? (
          <img
            src={`https://www.google.com/s2/favicons?domain=${engineDomain}&sz=64`}
            alt={engineName}
            onError={() => setImgFailed(true)}
            className="size-5 rounded-full object-contain"
          />
        ) : (
          <span className="size-5 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
            {engineName.charAt(0)}
          </span>
        )}
      </button>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={(e) => e.target.select()}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
      />
      <button
        type="button"
        onClick={voice}
        aria-label="Voice search"
        title={listening ? "Listening... Speak now" : "Search with voice"}
        className={`p-1 rounded-full transition-colors ${
          listening
            ? "bg-brand/20 animate-pulse text-brand"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Mic
          className={`size-4.5 ${listening ? "text-brand" : "text-muted-foreground hover:text-foreground"}`}
        />
      </button>
      <button type="button" onClick={onLens} aria-label="Google Lens">
        <ScanSearch className="size-4.5 text-muted-foreground hover:text-foreground" />
      </button>
      <button type="submit" aria-label="Search" className="p-1">
        <Search className="size-4.5 text-brand hover:scale-105 transition-transform" />
      </button>
    </form>
  );
}
