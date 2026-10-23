import { useState, useRef, useEffect, useMemo } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Globe,
  Palette,
  Star,
  Share2,
  Bell,
  ShieldCheck,
  Database,
  KeyRound,
  FileText,
  Trash2,
  Copy,
  Check,
  Eye,
  EyeOff,
  Plus,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  Lock,
  Moon,
  Sun,
  Laptop,
  Send,
  ExternalLink,
  Activity,
  Shield,
  Fingerprint,
  Link2,
  BellOff,
  Cookie,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Radio,
  FileDown,
  CreditCard,
} from "lucide-react";
import { toast } from "sonner";
import { useAppLanguage, type LanguageCode } from "@/lib/i18n";

export type SettingsSubView =
  | null
  | "language"
  | "appearance"
  | "notifications"
  | "safety"
  | "backup"
  | "passwords"
  | "privacy"
  | "blockings"
  | "clear-data"
  | "payments";

export type StoredCard = {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  billingAddress: string;
  isDefault: boolean;
  cardBrand: "Visa" | "Mastercard" | "American Express" | "Discover" | "Card";
  updatedAt: number;
};
export type StoredCredential = {
  domain: string;
  username: string;
  password: string;
  updatedAt: number;
};

const LANGUAGES: Array<{ code: LanguageCode; name: string; native: string }> = [
  { code: "en", name: "English (US)", native: "English" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "fr", name: "French", native: "Français" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "ar", name: "Arabic", native: "العربية" },
  { code: "zh", name: "Chinese (Simplified)", native: "简体中文" },
  { code: "ja", name: "Japanese", native: "日本語" },
  { code: "ru", name: "Russian", native: "Русский" },
  { code: "id", name: "Indonesian", native: "Bahasa Indonesia" },
  { code: "ko", name: "Korean", native: "한국어" },
  { code: "tr", name: "Turkish", native: "Türkçe" },
  { code: "it", name: "Italian", native: "Italiano" },
  { code: "nl", name: "Dutch", native: "Nederlands" },
];

const INITIAL_PASSWORDS: StoredCredential[] = [
  {
    id: "pwd-1",
    domain: "google.com",
    username: "musichub661@gmail.com",
    password: "••••••••••••",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: "pwd-2",
    domain: "github.com",
    username: "webna-developer",
    password: "••••••••••••",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 12,
  },
  {
    id: "pwd-3",
    domain: "reddit.com",
    username: "tech_surfer99",
    password: "••••••••••••",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 20,
  },
];

interface SettingsManagerProps {
  onClose: () => void;
  initialSubView?: SettingsSubView;
  // Browser state references for backup & clearing
  bookmarks: Array<{ url: string; title: string; at: number }>;
  setBookmarks: (b: Array<{ url: string; title: string; at: number }>) => void;
  history: Array<{ url: string; title: string; at: number }>;
  setHistory: (h: Array<{ url: string; title: string; at: number }>) => void;
  savedLinks: Array<{ url: string; title: string; at: number }>;
  setSavedLinks: (s: Array<{ url: string; title: string; at: number }>) => void;
  categories: Record<string, { t: string; u: string }[]>;
  setCategories: (c: Record<string, { t: string; u: string }[]>) => void;
  // Blockings
  blockAds: boolean;
  setBlockAds: (v: boolean) => void;
  blockPopups: boolean;
  setBlockPopups: (v: boolean) => void;
  blockTrackers: boolean;
  setBlockTrackers: (v: boolean) => void;
  blockCookies: boolean;
  setBlockCookies: (v: boolean) => void;
  blockLocation: boolean;
  setBlockLocation: (v: boolean) => void;
  blockMic: boolean;
  setBlockMic: (v: boolean) => void;
  blockCamera: boolean;
  setBlockCamera: (v: boolean) => void;
  blockNotifications: boolean;
  setBlockNotifications: (v: boolean) => void;
  blockAutoplay: boolean;
  setBlockAutoplay: (v: boolean) => void;
  blockJs: boolean;
  setBlockJs: (v: boolean) => void;
}

export function SettingsManager({
  onClose,
  initialSubView = null,
  bookmarks,
  setBookmarks,
  history,
  setHistory,
  savedLinks,
  setSavedLinks,
  categories,
  setCategories,
  blockAds,
  setBlockAds,
  blockPopups,
  setBlockPopups,
  blockTrackers,
  setBlockTrackers,
  blockCookies,
  setBlockCookies,
  blockLocation,
  setBlockLocation,
  blockMic,
  setBlockMic,
  blockCamera,
  setBlockCamera,
  blockNotifications,
  setBlockNotifications,
  blockAutoplay,
  setBlockAutoplay,
  blockJs,
  setBlockJs,
}: SettingsManagerProps) {
  const { lang, setLanguage, t } = useAppLanguage();
  const [subView, setSubView] = useState<SettingsSubView>(initialSubView);

  // 1. Language state
  const [autoTranslate, setAutoTranslate] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-auto-translate");
    if (val !== null) setAutoTranslate(val !== "false");
  }, []);

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    const langObj = LANGUAGES.find((l) => l.code === code);
    toast.success(
      code === "es"
        ? "Idioma cambiado a Español"
        : `Language changed to ${langObj?.name || code}`,
    );
  };

  // 2. Appearance state
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  useEffect(() => {
    const val = localStorage.getItem("webna-theme") as
      "system" | "light" | "dark";
    if (val) setTheme(val);
  }, []);
  const [fontSize, setFontSize] = useState<
    "small" | "medium" | "large" | "xlarge"
  >("medium");
  useEffect(() => {
    const val = localStorage.getItem("webna-font-size") as
      "small" | "medium" | "large" | "xlarge";
    if (val) setFontSize(val);
  }, []);
  const [addressBarPosition, setAddressBarPosition] = useState<
    "top" | "bottom"
  >("top");
  useEffect(() => {
    const val = localStorage.getItem("webna-address-bar") as "top" | "bottom";
    if (val) setAddressBarPosition(val);
  }, []);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  useEffect(() => {
    const val = localStorage.getItem("webna-high-contrast");
    if (val !== null) setHighContrast(val === "true");
  }, []);

  const applyTheme = (newTheme: "system" | "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("webna-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    toast.success(`${t("themeAndDisplay")}: ${newTheme}`);
  };

  const applyFontSize = (size: "small" | "medium" | "large" | "xlarge") => {
    setFontSize(size);
    localStorage.setItem("webna-font-size", size);
    toast.success(`${t("textScaling")}: ${size}`);
  };

  // 3. Rate Us action: Immediately open Google Play Store (per user request)
  const handleRatePlayStore = () => {
    const playStoreIntent = "market://details?id=com.webna.browser";
    const webPlayStore =
      "https://play.google.com/store/apps/details?id=com.webna.browser";

    toast.success(
      lang === "es"
        ? "Abriendo Google Play Store para calificar..."
        : "Opening Google Play Store to rate WebNa...",
    );

    // In Android WebView/Capacitor, market:// opens Google Play Store directly
    try {
      window.location.href = playStoreIntent;
      setTimeout(() => {
        window.open(webPlayStore, "_blank");
      }, 500);
    } catch {
      window.open(webPlayStore, "_blank");
    }
  };

  // 4. Share App action: Immediately open Android system share sheet (per user request)
  const handleShareApp = async () => {
    const appShareUrl = "https://webna.app";
    const shareText =
      lang === "es"
        ? "Navegador WebNa: Navegador móvil ultrarrápido y privado con bloqueo de anuncios, reproductor multimedia y descargas. ¡Descárgalo ahora!"
        : "WebNa Browser: Lightning fast, privacy-first mobile browser with ad blocking, audio/video player and downloader. Download now!";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "WebNa Browser",
          text: shareText,
          url: appShareUrl,
        });
        toast.success(
          lang === "es"
            ? "¡Gracias por compartir WebNa!"
            : "Thanks for sharing WebNa!",
        );
        return;
      } catch (err: unknown) {
        if (
          err &&
          typeof err === "object" &&
          "name" in err &&
          (err as { name: string }).name === "AbortError"
        ) {
          // User dismissed the native share sheet
          return;
        }
      }
    }

    // Direct fallback if navigator.share is unavailable
    navigator.clipboard.writeText(`${shareText}\n${appShareUrl}`);
    toast.success(
      lang === "es"
        ? "¡Enlace de descarga de WebNa copiado al portapapeles!"
        : "WebNa download link copied to clipboard!",
    );
  };

  // 5. Notifications state
  const [notifPermission, setNotifPermission] = useState<string>("default");
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setNotifPermission(Notification.permission);
    }
  }, []);
  const [notifDownloads, setNotifDownloads] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-downloads");
    if (val !== null) setNotifDownloads(val !== "false");
  }, []);
  const [notifSecurity, setNotifSecurity] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-security");
    if (val !== null) setNotifSecurity(val !== "false");
  }, []);
  const [notifNews, setNotifNews] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-news");
    if (val !== null) setNotifNews(val !== "false");
  }, []);
  const [notifPlayback, setNotifPlayback] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-playback");
    if (val !== null) setNotifPlayback(val !== "false");
  }, []);
  const [notifVibration, setNotifVibration] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-vibration");
    if (val !== null) setNotifVibration(val !== "false");
  }, []);

  const requestNotifPermission = async () => {
    if ("Notification" in window) {
      try {
        const res = await Notification.requestPermission();
        setNotifPermission(res);
        if (res === "granted") {
          toast.success("Notification permissions enabled for WebNa!");
        } else {
          toast.error("Notification permission was denied.");
        }
      } catch {
        toast.error(
          "Could not request notification permissions on this device.",
        );
      }
    } else {
      toast.info("Notifications are handled natively by your Android system.");
    }
  };

  const sendTestNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("WebNa Browser", {
        body: "Test notification: Download completed! Sample song was saved.",
        icon: "/favicon.ico",
      });
    }
    toast(
      lang === "es"
        ? "Alerta de notificación WebNa"
        : "WebNa Notification Alert",
      {
        description:
          lang === "es"
            ? "Prueba: ¡Descarga completada! Archivo multimedia guardado."
            : "Sample test: Download completed! Sample media was saved.",
        icon: <Bell className="size-4 text-brand" />,
      },
    );
  };

  // 6. Safety Hub state
  const [safetyTab, setSafetyTab] = useState<"controls" | "audit">("controls");
  const [httpsOnly, setHttpsOnly] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-https-only");
    if (val !== null) setHttpsOnly(val !== "false");
  }, []);
  const [phishingProtection, setPhishingProtection] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-phishing-prot");
    if (val !== null) setPhishingProtection(val !== "false");
  }, []);
  const [doNotTrack, setDoNotTrack] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-dnt");
    if (val !== null) setDoNotTrack(val !== "false");
  }, []);
  const [dnsLeakProtection, setDnsLeakProtection] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-dns-leak");
    if (val !== null) setDnsLeakProtection(val !== "false");
  }, []);
  const [fingerprintProt, setFingerprintProt] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-fingerprint-prot");
    if (val !== null) setFingerprintProt(val !== "false");
  }, []);
  const [cleanLinks, setCleanLinks] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-clean-links");
    if (val !== null) setCleanLinks(val !== "false");
  }, []);
  const [cookiePolicy, setCookiePolicy] = useState<
    "allow" | "block-3rd" | "block-all"
  >("block-3rd");
  useEffect(() => {
    const val = localStorage.getItem("webna-cookie-mode");
    if (val === "allow" || val === "block-3rd" || val === "block-all")
      setCookiePolicy(val);
  }, []);
  const [strictDownloads, setStrictDownloads] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-strict-downloads");
    if (val !== null) setStrictDownloads(val !== "false");
  }, []);
  const [blockMixedContent, setBlockMixedContent] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-block-mixed-content");
    if (val !== null) setBlockMixedContent(val !== "false");
  }, []);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [lastAuditAt, setLastAuditAt] = useState<number | null>(null);
  useEffect(() => {
    const t = localStorage.getItem("webna-last-audit");
    if (t) setLastAuditAt(Number(t));
  }, []);

  // Payment methods state
  const [savedCards, setSavedCards] = useState<StoredCard[]>([]);
  useEffect(() => {
    const s = localStorage.getItem("webna-saved-cards");
    if (s) {
      try {
        setSavedCards(JSON.parse(s));
      } catch {
        // ignore invalid storage json
      }
    } else {
      setSavedCards([
        {
          id: "card-1",
          cardNumber: "•••• •••• •••• 4242",
          cardHolder: "Alex Morgan",
          expiryMonth: "08",
          expiryYear: "28",
          cvv: "•••",
          billingAddress: "123 Silicon Valley Way, CA",
          isDefault: true,
          cardBrand: "Visa",
          updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
        },
      ]);
    }
  }, []);
  const [autofillCards, setAutofillCards] = useState<boolean>(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-autofill-cards");
    if (val !== null) setAutofillCards(val !== "false");
  }, []);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardHolder, setNewCardHolder] = useState("");
  const [newExpiryMonth, setNewExpiryMonth] = useState("12");
  const [newExpiryYear, setNewExpiryYear] = useState("28");
  const [newCvv, setNewCvv] = useState("");
  const [newBillingAddress, setNewBillingAddress] = useState("");

  const handleOpenAddCard = () => {
    setEditingCardId(null);
    setNewCardNumber("");
    setNewCardHolder("");
    setNewExpiryMonth("12");
    setNewExpiryYear("28");
    setNewCvv("");
    setNewBillingAddress("");
    setShowAddCardModal(true);
  };

  const handleOpenEditCard = (card: StoredCard) => {
    setEditingCardId(card.id);
    setNewCardNumber(card.cardNumber);
    setNewCardHolder(card.cardHolder);
    setNewExpiryMonth(card.expiryMonth);
    setNewExpiryYear(card.expiryYear);
    setNewCvv("•••");
    setNewBillingAddress(card.billingAddress);
    setShowAddCardModal(true);
  };

  const handleSaveCard = () => {
    if (!newCardNumber.trim() || !newCardHolder.trim()) {
      toast.error(
        lang === "es"
          ? "Por favor ingrese el número de tarjeta y titular."
          : "Please enter card number and cardholder name.",
      );
      return;
    }
    const cleanNum = newCardNumber.replace(/\s+/g, "");
    let brand: StoredCard["cardBrand"] = "Card";
    if (cleanNum.startsWith("4")) brand = "Visa";
    else if (cleanNum.startsWith("5") || cleanNum.startsWith("2"))
      brand = "Mastercard";
    else if (cleanNum.startsWith("3")) brand = "American Express";
    else if (cleanNum.startsWith("6")) brand = "Discover";

    const last4 = cleanNum.length >= 4 ? cleanNum.slice(-4) : "4242";
    const masked = cleanNum.includes("•")
      ? newCardNumber
      : `•••• •••• •••• ${last4}`;

    if (editingCardId) {
      const updated = savedCards.map((c) => {
        if (c.id === editingCardId) {
          return {
            ...c,
            cardNumber: masked,
            cardHolder: newCardHolder.trim(),
            expiryMonth: newExpiryMonth,
            expiryYear: newExpiryYear,
            billingAddress: newBillingAddress.trim() || c.billingAddress,
            cardBrand: brand !== "Card" ? brand : c.cardBrand,
            updatedAt: Date.now(),
          };
        }
        return c;
      });
      setSavedCards(updated);
      localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
      setShowAddCardModal(false);
      setEditingCardId(null);
      toast.success(
        lang === "es"
          ? "¡Tarjeta de pago actualizada con éxito!"
          : "Payment card updated successfully!",
      );
    } else {
      const newCard: StoredCard = {
        id: `card-${Date.now()}`,
        cardNumber: masked,
        cardHolder: newCardHolder.trim(),
        expiryMonth: newExpiryMonth,
        expiryYear: newExpiryYear,
        cvv: "•••",
        billingAddress: newBillingAddress.trim() || "Default Address",
        isDefault: savedCards.length === 0,
        cardBrand: brand,
        updatedAt: Date.now(),
      };

      const updated = [newCard, ...savedCards];
      setSavedCards(updated);
      localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
      setShowAddCardModal(false);
      toast.success(
        lang === "es"
          ? "¡Tarjeta de pago guardada de forma segura!"
          : "Payment card saved securely for online checkout!",
      );
    }

    setNewCardNumber("");
    setNewCardHolder("");
    setNewCvv("");
    setNewBillingAddress("");
  };

  const handleDeleteCard = (id: string) => {
    const updated = savedCards.filter((c) => c.id !== id);
    setSavedCards(updated);
    localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
    toast.success(
      lang === "es" ? "Tarjeta eliminada." : "Payment card removed.",
    );
  };

  const handleSetDefaultCard = (id: string) => {
    const updated = savedCards.map((c) => ({
      ...c,
      isDefault: c.id === id,
    }));
    setSavedCards(updated);
    localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
    toast.success(
      lang === "es"
        ? "Tarjeta predeterminada actualizada."
        : "Default payment card updated.",
    );
  };

  // Calculate dynamic security score (0 to 100)
  const activeDefensesCount = [
    blockAds && blockTrackers,
    fingerprintProt,
    cleanLinks,
    blockNotifications,
    cookiePolicy !== "allow",
    httpsOnly,
    phishingProtection,
    blockPopups,
    blockMixedContent,
    doNotTrack,
    strictDownloads,
  ].filter(Boolean).length;
  const securityScore = Math.round((activeDefensesCount / 11) * 100);

  const handleRunSecurityAudit = () => {
    setIsAuditing(true);
    setAuditStep(1);
    setTimeout(() => setAuditStep(2), 350);
    setTimeout(() => setAuditStep(3), 700);
    setTimeout(() => setAuditStep(4), 1050);
    setTimeout(() => {
      setIsAuditing(false);
      const now = Date.now();
      setLastAuditAt(now);
      localStorage.setItem("webna-last-audit", String(now));
      toast.success(
        lang === "es"
          ? `¡Auditoría completada! Protección del navegador: ${securityScore}%`
          : `Audit completed! Browser protection rated at ${securityScore}%`,
      );
    }, 1400);
  };

  const handleAutoProtectAll = () => {
    setBlockAds(true);
    setBlockTrackers(true);
    setFingerprintProt(true);
    setCleanLinks(true);
    setBlockNotifications(true);
    setCookiePolicy("block-3rd");
    setBlockCookies(true);
    setHttpsOnly(true);
    setPhishingProtection(true);
    setBlockPopups(true);
    setBlockMixedContent(true);
    setDoNotTrack(true);
    setStrictDownloads(true);
    setDnsLeakProtection(true);

    localStorage.setItem("webna-block-ads", "true");
    localStorage.setItem("webna-block-trackers", "true");
    localStorage.setItem("webna-fingerprint-prot", "true");
    localStorage.setItem("webna-clean-links", "true");
    localStorage.setItem("webna-block-notifications", "true");
    localStorage.setItem("webna-cookie-mode", "block-3rd");
    localStorage.setItem("webna-block-cookies", "true");
    localStorage.setItem("webna-https-only", "true");
    localStorage.setItem("webna-phishing-prot", "true");
    localStorage.setItem("webna-block-popups", "true");
    localStorage.setItem("webna-block-mixed-content", "true");
    localStorage.setItem("webna-dnt", "true");
    localStorage.setItem("webna-strict-downloads", "true");
    localStorage.setItem("webna-dns-leak", "true");

    toast.success(t("allProtected"));
  };

  // 7. Data Backup state
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "synced">(
    "synced",
  );
  const [lastSyncTime, setLastSyncTime] = useState<string>("Just now");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportData = () => {
    setIsExporting(true);
    try {
      const backupData = {
        app: "WebNa Browser",
        version: "2.4.0",
        exportedAt: new Date().toISOString(),
        bookmarks,
        savedLinks,
        history,
        categories,
        settings: {
          language: lang,
          theme,
          fontSize,
          blockAds,
          blockPopups,
          blockTrackers,
          blockCookies,
          httpsOnly,
          phishingProtection,
        },
      };

      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(backupData, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      const dateTag = new Date().toISOString().split("T")[0];
      downloadAnchor.setAttribute("download", `webna-backup-${dateTag}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      toast.success(
        lang === "es"
          ? "¡Copia de seguridad descargada exitosamente!"
          : "Backup downloaded successfully!",
      );
    } catch {
      toast.error("Failed to generate backup file.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (!json || typeof json !== "object") {
          throw new Error("Invalid format");
        }

        let restoredBookmarks = 0;
        let restoredHistory = 0;
        let restoredSaved = 0;

        if (Array.isArray(json.bookmarks)) {
          setBookmarks(json.bookmarks);
          restoredBookmarks = json.bookmarks.length;
        }
        if (Array.isArray(json.savedLinks)) {
          setSavedLinks(json.savedLinks);
          restoredSaved = json.savedLinks.length;
        }
        if (Array.isArray(json.history)) {
          setHistory(json.history);
          restoredHistory = json.history.length;
        }
        if (json.categories && typeof json.categories === "object") {
          setCategories(json.categories);
        }

        toast.success(
          lang === "es"
            ? `¡Copia restaurada! (${restoredBookmarks} marcadores, ${restoredSaved} enlaces, ${restoredHistory} historial)`
            : `Backup restored! (${restoredBookmarks} bookmarks, ${restoredSaved} saved links, ${restoredHistory} history items)`,
        );
        setSubView(null);
      } catch {
        toast.error(
          lang === "es"
            ? "No se pudo restaurar. El archivo no es un JSON de WebNa válido."
            : "Could not restore backup. Please ensure the file is a valid WebNa backup JSON.",
        );
      } finally {
        setIsImporting(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.readAsText(file);
  };

  const handleCloudSync = () => {
    setSyncStatus("syncing");
    setTimeout(() => {
      setSyncStatus("synced");
      setLastSyncTime(lang === "es" ? "Ahora mismo" : "Just now");
      toast.success(
        lang === "es"
          ? "Sincronización en la nube completada."
          : "Cloud sync complete: All bookmarks and settings are up to date.",
      );
    }, 1200);
  };

  // 8. Passwords state
  const [passwords, setPasswords] = useState<StoredCredential[]>(() => {
    const saved = localStorage.getItem("webna-passwords");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PASSWORDS;
      }
    }
    return INITIAL_PASSWORDS;
  });
  const [passwordSearch, setPasswordSearch] = useState("");
  const [showPasswordMap, setShowPasswordMap] = useState<
    Record<string, boolean>
  >({});
  const [showAddPasswordModal, setShowAddPasswordModal] = useState(false);
  const [editingPasswordId, setEditingPasswordId] = useState<string | null>(
    null,
  );
  const [newDomain, setNewDomain] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPasswordVal, setNewPasswordVal] = useState("");
  const [savePasswordPrompt, setSavePasswordPrompt] = useState<boolean>(() => {
    return localStorage.getItem("webna-save-password-prompt") !== "false";
  });
  const [autoFillEnabled, setAutoFillEnabled] = useState<boolean>(() => {
    return localStorage.getItem("webna-autofill-passwords") !== "false";
  });

  const savePasswordsList = (list: StoredCredential[]) => {
    setPasswords(list);
    localStorage.setItem("webna-passwords", JSON.stringify(list));
  };

  const toggleShowPassword = (id: string) => {
    setShowPasswordMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(
      lang === "es"
        ? `${label} copiado al portapapeles`
        : `${label} copied to clipboard!`,
    );
  };

  const handleDeletePassword = (id: string) => {
    const next = passwords.filter((p) => p.id !== id);
    savePasswordsList(next);
    toast.success(
      lang === "es"
        ? "Credencial eliminada"
        : "Credential removed from saved passwords.",
    );
  };

  const handleOpenAddPassword = () => {
    setEditingPasswordId(null);
    setNewDomain("");
    setNewUsername("");
    setNewPasswordVal("");
    setShowAddPasswordModal(true);
  };

  const handleOpenEditPassword = (cred: StoredCredential) => {
    setEditingPasswordId(cred.id);
    setNewDomain(cred.domain);
    setNewUsername(cred.username);
    setNewPasswordVal(cred.password);
    setShowAddPasswordModal(true);
  };

  const handleAddPassword = () => {
    if (!newDomain.trim() || !newUsername.trim() || !newPasswordVal.trim()) {
      toast.error(
        lang === "es"
          ? "Por favor completa todos los campos"
          : "Please fill in all fields.",
      );
      return;
    }
    const cleanDomain = newDomain
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/\/.*$/, "");

    if (editingPasswordId) {
      const next = passwords.map((p) => {
        if (p.id === editingPasswordId) {
          return {
            ...p,
            domain: cleanDomain,
            username: newUsername.trim(),
            password: newPasswordVal.trim(),
            updatedAt: Date.now(),
          };
        }
        return p;
      });
      savePasswordsList(next);
      setEditingPasswordId(null);
      setNewDomain("");
      setNewUsername("");
      setNewPasswordVal("");
      setShowAddPasswordModal(false);
      toast.success(
        lang === "es"
          ? "Credencial actualizada"
          : "Password credential updated successfully.",
      );
    } else {
      const newEntry: StoredCredential = {
        id: "pwd-" + Date.now(),
        domain: cleanDomain,
        username: newUsername.trim(),
        password: newPasswordVal.trim(),
        updatedAt: Date.now(),
      };
      const next = [newEntry, ...passwords];
      savePasswordsList(next);
      setNewDomain("");
      setNewUsername("");
      setNewPasswordVal("");
      setShowAddPasswordModal(false);
      toast.success(
        lang === "es"
          ? `¡Contraseña guardada para ${cleanDomain}!`
          : `Saved password for ${cleanDomain}!`,
      );
    }
  };

  const generateStrongPassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let gen = "";
    for (let i = 0; i < 16; i++) {
      gen += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewPasswordVal(gen);
    toast.success(
      lang === "es"
        ? "¡Contraseña segura generada!"
        : "Strong password generated!",
    );
  };

  // 9. Clear Browsing Data state
  const [clearHistorySelected, setClearHistorySelected] = useState(true);
  const [clearCookiesSelected, setClearCookiesSelected] = useState(true);
  const [clearCacheSelected, setClearCacheSelected] = useState(true);
  const [clearBookmarksSelected, setClearBookmarksSelected] = useState(false);
  const [clearPasswordsSelected, setClearPasswordsSelected] = useState(false);
  const [clearTimeRange, setClearTimeRange] = useState<
    "hour" | "day" | "week" | "all"
  >("all");

  const handleExecuteClear = () => {
    const clearedItems: string[] = [];
    if (clearHistorySelected) {
      setHistory([]);
      clearedItems.push(t("browsingHistory"));
    }
    if (clearBookmarksSelected) {
      setBookmarks([]);
      clearedItems.push(t("bookmarks"));
    }
    if (clearCookiesSelected) {
      clearedItems.push(t("cookiesSiteData"));
    }
    if (clearCacheSelected) {
      clearedItems.push(t("cachedImages"));
    }
    if (clearPasswordsSelected) {
      savePasswordsList([]);
      clearedItems.push(t("savedPasswords"));
    }

    toast.success(
      lang === "es"
        ? `Borrado: ${clearedItems.join(", ")}`
        : `Cleared: ${clearedItems.join(", ")}`,
    );
    setSubView(null);
  };

  // Active language label for main view
  const currentLangLabel =
    LANGUAGES.find((l) => l.code === lang)?.name || "English (US)";

  // Sub-view title map
  const subViewTitles: Record<NonNullable<SettingsSubView>, string> = {
    language: t("language"),
    appearance: t("appearance"),
    notifications: t("notifications"),
    safety: t("safetyHub"),
    backup: t("dataBackup"),
    passwords: t("passwords"),
    privacy: t("privacyPolicy"),
    blockings: t("blockingsAndShields"),
    "clear-data": t("clearBrowsingData"),
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-3 shrink-0">
        <div className="flex items-center gap-2">
          {subView !== null && (
            <button
              onClick={() => setSubView(null)}
              className="p-1 -ml-1 text-foreground hover:bg-muted rounded-full transition-colors"
              aria-label={t("back")}
            >
              <ChevronLeft className="size-6" />
            </button>
          )}
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {subView ? subViewTitles[subView] : t("settings")}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
          aria-label={t("close")}
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* ================= MAIN SETTINGS MENU ================= */}
        {subView === null && (
          <div className="space-y-3 pb-8">
            <div className="space-y-2.5">
              {/* 1. Language */}
              <button
                onClick={() => setSubView("language")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("language")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {currentLangLabel}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 2. Appearance */}
              <button
                onClick={() => setSubView("appearance")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Palette className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("appearance")}
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {theme} • {fontSize}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 3. Rate us (Immediately opens Google Play per user instruction) */}
              <button
                onClick={handleRatePlayStore}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <Star className="size-5 fill-amber-500" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("rateUs")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("rateSupportOnPlay")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-brand">
                  <ExternalLink className="size-4" />
                </div>
              </button>

              {/* 4. Share app (Immediately triggers Android share sheet per user instruction) */}
              <button
                onClick={handleShareApp}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Share2 className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("shareApp")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("shareWithFriends")}
                    </span>
                  </div>
                </div>
                <Share2 className="size-4 text-muted-foreground/60" />
              </button>

              {/* 5. Notifications */}
              <button
                onClick={() => setSubView("notifications")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <Bell className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("notifications")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("notificationsSub")}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 6. Safety hub */}
              <button
                onClick={() => setSubView("safety")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("safetyHub")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("safetyHubSub")}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 7. Data backup */}
              <button
                onClick={() => setSubView("backup")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Database className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("dataBackup")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("dataBackupSub")}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 8. Passwords */}
              <button
                onClick={() => setSubView("passwords")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <KeyRound className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("passwords")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {passwords.length} {t("savedCredentialsCount")}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* Payment Methods (Google-like payments) */}
              <button
                onClick={() => setSubView("payments")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <CreditCard className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {lang === "es" ? "Métodos de pago" : "Payment Methods"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {savedCards.length}{" "}
                      {lang === "es"
                        ? "tarjetas guardadas, autocompletar"
                        : "saved cards, autofill"}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* 9. Privacy policy */}
              <button
                onClick={() => setSubView("privacy")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("privacyPolicy")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("privacySub")}
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground/60" />
              </button>

              {/* Blockings Shortcut */}
              <button
                onClick={() => setSubView("blockings")}
                className="flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500">
                    <Lock className="size-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-foreground block">
                      {t("blockingsAndShields")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("shieldsSub")}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-brand font-semibold px-2.5 py-0.5 rounded-full bg-brand/10">
                  {t("active")}
                </span>
              </button>
            </div>

            {/* Clear all browsing data button */}
            <div className="pt-2">
              <button
                onClick={() => setSubView("clear-data")}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive/10 hover:bg-destructive/15 text-destructive p-4 font-semibold text-sm transition-colors border border-destructive/20"
              >
                <Trash2 className="size-4" />
                <span>{t("clearAllBrowsingData")}</span>
              </button>
            </div>

            {/* App Info footer */}
            <div className="text-center pt-3 text-xs text-muted-foreground space-y-1">
              <p className="font-medium">
                WebNa Browser v2.4.0 (Android & Web)
              </p>
              <p className="text-[11px] text-muted-foreground/70">
                Fast • Secure • Ad-Free
              </p>
            </div>
          </div>
        )}

        {/* ================= 1. LANGUAGE ================= */}
        {subView === "language" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs">
              <h3 className="font-semibold text-sm text-foreground">
                {t("displayAndSearchLanguage")}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t("chooseLanguageSub")}
              </p>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs">
              <div>
                <h4 className="font-semibold text-sm">
                  {t("autoTranslateForeign")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("autoTranslateSub")}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={autoTranslate}
                onClick={() => {
                  const next = !autoTranslate;
                  setAutoTranslate(next);
                  localStorage.setItem("webna-auto-translate", String(next));
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                  autoTranslate ? "bg-brand" : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    autoTranslate ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                {t("supportedLanguages")}
              </p>
              <div className="rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs">
                {LANGUAGES.map((item) => {
                  const isSelected = lang === item.code;
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleSelectLanguage(item.code)}
                      className="flex w-full items-center justify-between p-3.5 text-left hover:bg-muted/40 transition-colors"
                    >
                      <div>
                        <span className="font-medium text-sm text-foreground block">
                          {item.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.native}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
                          <Check className="size-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. APPEARANCE ================= */}
        {subView === "appearance" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs">
              <h3 className="font-semibold text-sm text-foreground">
                {t("themeAndDisplay")}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t("appearanceSub")}
              </p>
            </div>

            {/* Theme options */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                {t("colorTheme")}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "light" as const, label: t("lightTheme"), Icon: Sun },
                  { id: "dark" as const, label: t("darkTheme"), Icon: Moon },
                  {
                    id: "system" as const,
                    label: t("systemTheme"),
                    Icon: Laptop,
                  },
                ].map(({ id, label, Icon }) => {
                  const isSel = theme === id;
                  return (
                    <button
                      key={id}
                      onClick={() => applyTheme(id)}
                      className={`flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border text-center transition-all ${
                        isSel
                          ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold shadow-xs"
                          : "border-border/80 bg-card hover:bg-muted/40 text-foreground"
                      }`}
                    >
                      <Icon className="size-5" />
                      <span className="text-xs">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Font scaling */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                {t("textScaling")}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "small" as const, label: t("small"), size: "85%" },
                  { id: "medium" as const, label: t("normal"), size: "100%" },
                  { id: "large" as const, label: t("large"), size: "115%" },
                  { id: "xlarge" as const, label: t("huge"), size: "130%" },
                ].map(({ id, label, size }) => {
                  const isSel = fontSize === id;
                  return (
                    <button
                      key={id}
                      onClick={() => applyFontSize(id)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border text-center transition-all ${
                        isSel
                          ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold"
                          : "border-border/80 bg-card hover:bg-muted/40 text-foreground"
                      }`}
                    >
                      <span className="text-xs font-bold">{label}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {size}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Address Bar Position */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                {t("addressBarPosition")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "top" as const, label: t("topStandard") },
                  { id: "bottom" as const, label: t("bottomEasy") },
                ].map(({ id, label }) => {
                  const isSel = addressBarPosition === id;
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        setAddressBarPosition(id);
                        localStorage.setItem("webna-address-bar", id);
                        toast.success(`${t("addressBarPosition")}: ${label}`);
                      }}
                      className={`p-3 rounded-2xl border text-center text-xs font-medium transition-all ${
                        isSel
                          ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold"
                          : "border-border/80 bg-card hover:bg-muted/40 text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* High Contrast Mode */}
            <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs">
              <div>
                <h4 className="font-semibold text-sm">{t("highContrast")}</h4>
                <p className="text-xs text-muted-foreground">
                  {t("highContrastSub")}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={highContrast}
                onClick={() => {
                  const next = !highContrast;
                  setHighContrast(next);
                  localStorage.setItem("webna-high-contrast", String(next));
                  toast.success(
                    next ? "High contrast enabled" : "High contrast disabled",
                  );
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                  highContrast ? "bg-brand" : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    highContrast ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* ================= 5. NOTIFICATIONS ================= */}
        {subView === "notifications" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {t("androidNotificationPermission")}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t("permissionRequiredSub")}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${
                    notifPermission === "granted"
                      ? "bg-emerald-500/10 text-emerald-600"
                      : notifPermission === "denied"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-amber-500/10 text-amber-600"
                  }`}
                >
                  {notifPermission}
                </span>
              </div>

              {notifPermission !== "granted" && (
                <button
                  onClick={requestNotifPermission}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs"
                >
                  <Bell className="size-3.5" />
                  <span>{t("requestPermission")}</span>
                </button>
              )}
            </div>

            {/* Notification channels toggles */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                {t("notificationCategories")}
              </p>
              <div className="space-y-2.5">
                {[
                  {
                    title: t("downloadCompletedAlerts"),
                    desc: t("downloadCompletedSub"),
                    val: notifDownloads,
                    set: (v: boolean) => {
                      setNotifDownloads(v);
                      localStorage.setItem("webna-notif-downloads", String(v));
                    },
                  },
                  {
                    title: t("safeBrowsingAlerts"),
                    desc: t("safeBrowsingSub"),
                    val: notifSecurity,
                    set: (v: boolean) => {
                      setNotifSecurity(v);
                      localStorage.setItem("webna-notif-security", String(v));
                    },
                  },
                  {
                    title: t("newsTrendingUpdates"),
                    desc: t("newsTrendingSub"),
                    val: notifNews,
                    set: (v: boolean) => {
                      setNotifNews(v);
                      localStorage.setItem("webna-notif-news", String(v));
                    },
                  },
                  {
                    title: t("mediaBackgroundPlayback"),
                    desc: t("mediaPlaybackSub"),
                    val: notifPlayback,
                    set: (v: boolean) => {
                      setNotifPlayback(v);
                      localStorage.setItem("webna-notif-playback", String(v));
                    },
                  },
                  {
                    title: t("vibrationSoundAlerts"),
                    desc: t("vibrationSub"),
                    val: notifVibration,
                    set: (v: boolean) => {
                      setNotifVibration(v);
                      localStorage.setItem("webna-notif-vibration", String(v));
                    },
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs"
                  >
                    <div className="space-y-0.5 pr-4">
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={item.val}
                      onClick={() => item.set(!item.val)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        item.val ? "bg-brand" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                          item.val ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Test notification button */}
            <button
              onClick={sendTestNotification}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-foreground font-medium text-xs hover:bg-muted/40 transition-colors"
            >
              <Send className="size-3.5 text-brand" />
              <span>{t("sendTestNotification")}</span>
            </button>
          </div>
        )}

        {/* ================= 6. SAFETY HUB ================= */}
        {subView === "safety" && (
          <div className="space-y-4 pb-8">
            {/* Top Shield Status Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 p-4 shadow-2xs">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
                    <ShieldCheck className="size-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-foreground">
                        {t("shieldActive")}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {securityScore >= 90
                          ? t("auditStatusExcellent")
                          : securityScore >= 70
                            ? t("auditStatusGood")
                            : t("auditStatusFair")}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {t("shieldActiveSub")}
                    </p>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="shrink-0 text-right">
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 leading-none">
                    {securityScore}%
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold">
                    {activeDefensesCount}/11 active
                  </span>
                </div>
              </div>
            </div>

            {/* Segmented Tab Switcher (Unique WebNa pill styling) */}
            <div className="grid grid-cols-2 p-1 rounded-2xl bg-muted/60 border border-border/60">
              <button
                type="button"
                onClick={() => setSafetyTab("controls")}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  safetyTab === "controls"
                    ? "bg-card text-foreground shadow-xs border border-border/60"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Shield className="size-3.5 text-brand" />
                <span>{t("safetyControlsTab")}</span>
              </button>
              <button
                type="button"
                onClick={() => setSafetyTab("audit")}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  safetyTab === "audit"
                    ? "bg-card text-foreground shadow-xs border border-border/60"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Activity className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t("safetyAuditTab")}</span>
                <span className="size-2 rounded-full bg-emerald-500" />
              </button>
            </div>

            {/* TAB 1: CONTROLS */}
            {safetyTab === "controls" && (
              <div className="space-y-4">
                {/* Section A: Privacy & Anti-Tracking Shield */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <Fingerprint className="size-3.5 text-brand" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {t("privacyAndIdentity")}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand px-2 py-0.5 rounded-full bg-brand/10">
                      Privacy
                    </span>
                  </div>

                  <div className="space-y-2">
                    {/* 1. Intrusive Ads & Web Trackers */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("adsAndTrackers")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("adsAndTrackersSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={blockAds && blockTrackers}
                        onClick={() => {
                          const next = !(blockAds && blockTrackers);
                          setBlockAds(next);
                          setBlockTrackers(next);
                          localStorage.setItem("webna-block-ads", String(next));
                          localStorage.setItem(
                            "webna-block-trackers",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Ad & Tracker Shield enabled"
                              : "Ad & Tracker Shield disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          blockAds && blockTrackers ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            blockAds && blockTrackers
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 2. Device Anti-Fingerprinting */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("fingerprintProtection")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("fingerprintProtectionSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={fingerprintProt}
                        onClick={() => {
                          const next = !fingerprintProt;
                          setFingerprintProt(next);
                          localStorage.setItem(
                            "webna-fingerprint-prot",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Anti-Fingerprint masking enabled"
                              : "Anti-Fingerprint masking disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          fingerprintProt ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            fingerprintProt ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 3. Link Sanitizer (URL Tracking Stripper) */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("cleanLinks")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("cleanLinksSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={cleanLinks}
                        onClick={() => {
                          const next = !cleanLinks;
                          setCleanLinks(next);
                          localStorage.setItem(
                            "webna-clean-links",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Link Sanitizer active (tracking tags stripped)"
                              : "Link Sanitizer disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          cleanLinks ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            cleanLinks ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 4. Silent Browsing (Mute Push Requests) */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("blockNotificationRequests")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("blockNotificationRequestsSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={blockNotifications}
                        onClick={() => {
                          const next = !blockNotifications;
                          setBlockNotifications(next);
                          localStorage.setItem(
                            "webna-block-notifications",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Silent browsing enabled (push requests muted)"
                              : "Notification requests allowed",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          blockNotifications ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            blockNotifications
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 5. Cookie & Storage Isolation Policy */}
                    <div className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2">
                      <div>
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("cookieManagement")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          {t("cookieManagementSub")}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        {[
                          {
                            id: "allow" as const,
                            label: t("cookieAllow"),
                            desc: "Standard",
                          },
                          {
                            id: "block-3rd" as const,
                            label: t("cookieBlock3rd"),
                            desc: "Recommended",
                          },
                          {
                            id: "block-all" as const,
                            label: t("cookieBlockAll"),
                            desc: "Strict",
                          },
                        ].map((opt) => {
                          const isSel = cookiePolicy === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setCookiePolicy(opt.id);
                                localStorage.setItem(
                                  "webna-cookie-mode",
                                  opt.id,
                                );
                                setBlockCookies(opt.id !== "allow");
                                localStorage.setItem(
                                  "webna-block-cookies",
                                  String(opt.id !== "allow"),
                                );
                                toast.success(
                                  `Cookie policy set: ${opt.label}`,
                                );
                              }}
                              className={`p-2 rounded-xl text-center border transition-all ${
                                isSel
                                  ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-bold shadow-2xs"
                                  : "border-border/60 bg-muted/30 hover:bg-muted/60 text-muted-foreground"
                              }`}
                            >
                              <span className="text-[11px] block leading-tight">
                                {opt.label}
                              </span>
                              <span className="text-[9px] opacity-75 font-normal">
                                {opt.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section B: Network & Threat Defense */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5">
                      <Lock className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {t("connectionAndThreat")}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
                      Security
                    </span>
                  </div>

                  <div className="space-y-2">
                    {/* 6. Strict HTTPS Upgrade Engine */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("httpsOnlyMode")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("httpsOnlySub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={httpsOnly}
                        onClick={() => {
                          const next = !httpsOnly;
                          setHttpsOnly(next);
                          localStorage.setItem(
                            "webna-https-only",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Strict HTTPS enforcement enabled"
                              : "HTTPS enforcement relaxed",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          httpsOnly ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            httpsOnly ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 7. Phishing & Malware Sentry */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("antiPhishing")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("antiPhishingSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={phishingProtection}
                        onClick={() => {
                          const next = !phishingProtection;
                          setPhishingProtection(next);
                          localStorage.setItem(
                            "webna-phishing-prot",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Phishing & malware sentry active"
                              : "Phishing sentry disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          phishingProtection ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            phishingProtection
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 8. Pop-up & Window Blocker */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("blockPopupsTitle")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("blockPopupsSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={blockPopups}
                        onClick={() => {
                          const next = !blockPopups;
                          setBlockPopups(next);
                          localStorage.setItem(
                            "webna-block-popups",
                            String(next),
                          );
                          toast.success(
                            next ? "Pop-up blocker active" : "Pop-ups allowed",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          blockPopups ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            blockPopups ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 9. Insecure Mixed Content Barrier */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("blockMixedContent")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("blockMixedContentSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={blockMixedContent}
                        onClick={() => {
                          const next = !blockMixedContent;
                          setBlockMixedContent(next);
                          localStorage.setItem(
                            "webna-block-mixed-content",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Mixed content blocked"
                              : "Mixed content permitted",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          blockMixedContent ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            blockMixedContent
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 10. Global Privacy Control (Do Not Track) */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("sendDntHeader")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("sendDntSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={doNotTrack}
                        onClick={() => {
                          const next = !doNotTrack;
                          setDoNotTrack(next);
                          localStorage.setItem("webna-dnt", String(next));
                          toast.success(
                            next
                              ? "Global Privacy Control & DNT enabled"
                              : "DNT headers disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          doNotTrack ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            doNotTrack ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 11. Drive-by Download Guard */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("strictDownloads")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("strictDownloadsSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={strictDownloads}
                        onClick={() => {
                          const next = !strictDownloads;
                          setStrictDownloads(next);
                          localStorage.setItem(
                            "webna-strict-downloads",
                            String(next),
                          );
                          toast.success(
                            next
                              ? "Drive-by download guard enabled"
                              : "Strict download guard disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          strictDownloads ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            strictDownloads ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 12. DNS & WebRTC Leak Shield */}
                    <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs">
                      <div className="space-y-0.5 pr-3">
                        <h4 className="font-semibold text-xs text-foreground">
                          {t("dnsLeakMitigation")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t("dnsLeakSub")}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={dnsLeakProtection}
                        onClick={() => {
                          const next = !dnsLeakProtection;
                          setDnsLeakProtection(next);
                          localStorage.setItem("webna-dns-leak", String(next));
                          toast.success(
                            next
                              ? "DNS leak mitigation active"
                              : "DNS leak mitigation disabled",
                          );
                        }}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                          dnsLeakProtection ? "bg-brand" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            dnsLeakProtection
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Shortcut to Detailed Blockings */}
                <button
                  type="button"
                  onClick={() => setSubView("blockings")}
                  className="flex w-full items-center justify-between rounded-2xl border border-brand/30 bg-brand/5 p-4 text-left hover:bg-brand/10 transition-colors"
                >
                  <div>
                    <span className="font-semibold text-xs text-brand block">
                      {t("detailedShieldPermissions")}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {t("detailedShieldSub")}
                    </span>
                  </div>
                  <ChevronRight className="size-4 text-brand" />
                </button>
              </div>
            )}

            {/* TAB 2: AUDIT & HEALTH */}
            {safetyTab === "audit" && (
              <div className="space-y-4">
                {/* Health Rating Gauge Card */}
                <div className="rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">
                        {t("auditScoreTitle")}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {t("auditScoreSub")}
                      </p>
                    </div>
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xl">
                      {securityScore}%
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        securityScore >= 90
                          ? "bg-emerald-500"
                          : securityScore >= 70
                            ? "bg-amber-500"
                            : "bg-destructive"
                      }`}
                      style={{ width: `${securityScore}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                    <span>
                      {securityScore >= 90
                        ? `✓ ${t("auditStatusExcellent")}`
                        : securityScore >= 70
                          ? `! ${t("auditStatusGood")}`
                          : `⚠ ${t("auditStatusFair")}`}
                    </span>
                    {lastAuditAt && (
                      <span className="text-[10px]">
                        Last audit: {new Date(lastAuditAt).toLocaleTimeString()}
                      </span>
                    )}
                  </div>

                  {/* Auto protect all button if score < 100% */}
                  {securityScore < 100 && (
                    <button
                      type="button"
                      onClick={handleAutoProtectAll}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 px-3 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity"
                    >
                      <Sparkles className="size-3.5" />
                      <span>{t("optimizeAll")}</span>
                    </button>
                  )}
                </div>

                {/* Audit Scanner Action */}
                <div className="rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-muted text-foreground">
                        <Activity
                          className={`size-4 ${isAuditing ? "animate-spin text-brand" : "text-emerald-600"}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-foreground">
                          {isAuditing ? t("runningAudit") : t("runAudit")}
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          {isAuditing
                            ? auditStep === 1
                              ? "Auditing TLS cipher suites & HTTPS..."
                              : auditStep === 2
                                ? "Testing tracker & telemetry filter rules..."
                                : auditStep === 3
                                  ? "Validating canvas fingerprint obfuscation..."
                                  : "Checking link sanitizer rules..."
                            : "Performs full integrity check of device shields"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRunSecurityAudit}
                    disabled={isAuditing}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-muted hover:bg-muted/80 border border-border py-2.5 text-foreground font-semibold text-xs transition-colors"
                  >
                    <RefreshCw
                      className={`size-3.5 text-brand ${isAuditing ? "animate-spin" : ""}`}
                    />
                    <span>
                      {isAuditing ? t("runningAudit") : t("runAudit")}
                    </span>
                  </button>
                </div>

                {/* Itemized Diagnostic Checklist */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
                    {t("auditChecklist")}
                  </p>

                  <div className="rounded-2xl border border-border/80 bg-card divide-y divide-border/60 overflow-hidden shadow-2xs">
                    {[
                      {
                        name: t("adsAndTrackers"),
                        active: blockAds && blockTrackers,
                        fix: () => {
                          setBlockAds(true);
                          setBlockTrackers(true);
                          localStorage.setItem("webna-block-ads", "true");
                          localStorage.setItem("webna-block-trackers", "true");
                        },
                      },
                      {
                        name: t("fingerprintProtection"),
                        active: fingerprintProt,
                        fix: () => {
                          setFingerprintProt(true);
                          localStorage.setItem(
                            "webna-fingerprint-prot",
                            "true",
                          );
                        },
                      },
                      {
                        name: t("cleanLinks"),
                        active: cleanLinks,
                        fix: () => {
                          setCleanLinks(true);
                          localStorage.setItem("webna-clean-links", "true");
                        },
                      },
                      {
                        name: t("blockNotificationRequests"),
                        active: blockNotifications,
                        fix: () => {
                          setBlockNotifications(true);
                          localStorage.setItem(
                            "webna-block-notifications",
                            "true",
                          );
                        },
                      },
                      {
                        name: t("cookieManagement"),
                        active: cookiePolicy !== "allow",
                        fix: () => {
                          setCookiePolicy("block-3rd");
                          localStorage.setItem(
                            "webna-cookie-mode",
                            "block-3rd",
                          );
                          setBlockCookies(true);
                          localStorage.setItem("webna-block-cookies", "true");
                        },
                      },
                      {
                        name: t("httpsOnlyMode"),
                        active: httpsOnly,
                        fix: () => {
                          setHttpsOnly(true);
                          localStorage.setItem("webna-https-only", "true");
                        },
                      },
                      {
                        name: t("antiPhishing"),
                        active: phishingProtection,
                        fix: () => {
                          setPhishingProtection(true);
                          localStorage.setItem("webna-phishing-prot", "true");
                        },
                      },
                      {
                        name: t("blockPopupsTitle"),
                        active: blockPopups,
                        fix: () => {
                          setBlockPopups(true);
                          localStorage.setItem("webna-block-popups", "true");
                        },
                      },
                      {
                        name: t("blockMixedContent"),
                        active: blockMixedContent,
                        fix: () => {
                          setBlockMixedContent(true);
                          localStorage.setItem(
                            "webna-block-mixed-content",
                            "true",
                          );
                        },
                      },
                      {
                        name: t("sendDntHeader"),
                        active: doNotTrack,
                        fix: () => {
                          setDoNotTrack(true);
                          localStorage.setItem("webna-dnt", "true");
                        },
                      },
                      {
                        name: t("strictDownloads"),
                        active: strictDownloads,
                        fix: () => {
                          setStrictDownloads(true);
                          localStorage.setItem(
                            "webna-strict-downloads",
                            "true",
                          );
                        },
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          {item.active ? (
                            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          ) : (
                            <AlertCircle className="size-4 text-amber-500 shrink-0" />
                          )}
                          <span className="font-medium text-foreground">
                            {item.name}
                          </span>
                        </div>
                        {item.active ? (
                          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
                            Protected
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              item.fix();
                              toast.success(`Enabled: ${item.name}`);
                            }}
                            className="text-[10px] font-bold text-brand px-2 py-0.5 rounded-full bg-brand/10 hover:bg-brand/20 transition-colors"
                          >
                            Enable
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= 7. DATA BACKUP ================= */}
        {subView === "backup" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs">
              <h3 className="font-semibold text-sm text-foreground">
                {t("backupAndSync")}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t("backupSub")}
              </p>
            </div>

            {/* Cloud Sync Status */}
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-base shrink-0">
                    M
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      musichub661@gmail.com
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("cloudSync")}:{" "}
                      {syncStatus === "syncing" ? "Syncing..." : "Connected"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCloudSync}
                  disabled={syncStatus === "syncing"}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition-colors disabled:opacity-50"
                >
                  <RefreshCw
                    className={`size-3.5 ${syncStatus === "syncing" ? "animate-spin text-brand" : ""}`}
                  />
                  <span>{t("syncNow")}</span>
                </button>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground pt-1 border-t">
                <span>{t("lastCloudSync")}</span>
                <span className="font-medium text-foreground">
                  {lastSyncTime}
                </span>
              </div>
            </div>

            {/* Export Backup Card */}
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Download className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{t("exportToJson")}</h4>
                  <p className="text-xs text-muted-foreground">
                    {t("exportSub")}
                  </p>
                </div>
              </div>
              <button
                onClick={handleExportData}
                disabled={isExporting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity mt-2"
              >
                <Download className="size-3.5" />
                <span>
                  {isExporting ? "Exporting..." : t("downloadBackupFile")}
                </span>
              </button>
            </div>

            {/* Import & Restore Card */}
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Upload className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    {t("restoreFromBackup")}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t("restoreSub")}
                  </p>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleImportFile}
                className="hidden"
                id="restore-file-input"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isImporting}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-foreground font-semibold text-xs hover:bg-muted/40 transition-colors mt-2"
              >
                <Upload className="size-3.5 text-brand" />
                <span>
                  {isImporting ? "Reading File..." : t("chooseBackupFile")}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ================= 8. PASSWORDS ================= */}
        {subView === "passwords" && (
          <div className="space-y-4 pb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm text-foreground">
                  {t("savedPasswords")}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t("passwordVaultSub")}
                </p>
              </div>
              <button
                onClick={handleOpenAddPassword}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90"
              >
                <Plus className="size-3.5" />
                <span>{t("add")}</span>
              </button>
            </div>

            {/* Search filter */}
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchAccounts")}
                value={passwordSearch}
                onChange={(e) => setPasswordSearch(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card py-2.5 pl-9 pr-4 text-xs outline-none focus:border-brand"
              />
              <Lock className="absolute left-3 top-3 size-3.5 text-muted-foreground" />
            </div>

            {/* Autofill & prompt settings */}
            <div className="rounded-2xl border border-border/80 bg-card p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span>{t("offerToSavePasswords")}</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={savePasswordPrompt}
                  onClick={() => {
                    const next = !savePasswordPrompt;
                    setSavePasswordPrompt(next);
                    localStorage.setItem(
                      "webna-save-password-prompt",
                      String(next),
                    );
                  }}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                    savePasswordPrompt ? "bg-brand" : "bg-muted"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                      savePasswordPrompt ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between border-t pt-2">
                <span>{t("autoFillWebForms")}</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={autoFillEnabled}
                  onClick={() => {
                    const next = !autoFillEnabled;
                    setAutoFillEnabled(next);
                    localStorage.setItem(
                      "webna-autofill-passwords",
                      String(next),
                    );
                  }}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                    autoFillEnabled ? "bg-brand" : "bg-muted"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                      autoFillEnabled ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Password List */}
            <div className="space-y-2.5">
              {passwords
                .filter(
                  (p) =>
                    p.domain
                      .toLowerCase()
                      .includes(passwordSearch.toLowerCase()) ||
                    p.username
                      .toLowerCase()
                      .includes(passwordSearch.toLowerCase()),
                )
                .map((cred) => {
                  const isVisible = showPasswordMap[cred.id];
                  return (
                    <div
                      key={cred.id}
                      onClick={() => handleOpenEditPassword(cred)}
                      className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2.5 cursor-pointer hover:border-brand/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${cred.domain}&sz=32`}
                            alt=""
                            className="size-5 rounded-sm shrink-0"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                          <span className="font-semibold text-sm text-foreground truncate">
                            {cred.domain}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeletePassword(cred.id);
                          }}
                          className="text-muted-foreground hover:text-destructive p-1 rounded-lg"
                          aria-label={t("delete")}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl">
                          <span className="text-muted-foreground truncate mr-2">
                            {cred.username}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(cred.username, "Username");
                            }}
                            className="p-1 hover:text-brand"
                            aria-label={t("copy")}
                          >
                            <Copy className="size-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl">
                          <span className="font-mono text-xs tracking-wider truncate mr-2">
                            {isVisible ? cred.password : "••••••••••••"}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleShowPassword(cred.id);
                              }}
                              className="p-1 hover:text-foreground text-muted-foreground"
                              aria-label="Toggle password view"
                            >
                              {isVisible ? (
                                <EyeOff className="size-3.5" />
                              ) : (
                                <Eye className="size-3.5" />
                              )}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(cred.password, "Password");
                              }}
                              className="p-1 hover:text-brand text-muted-foreground"
                              aria-label={t("copy")}
                            >
                              <Copy className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Add Password Modal */}
        {showAddPasswordModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-foreground">
                  {editingPasswordId
                    ? lang === "es"
                      ? "Editar credencial"
                      : "Edit Credential"
                    : t("saveNewCredential")}
                </h3>
                <button
                  onClick={() => setShowAddPasswordModal(false)}
                  className="p-1 text-muted-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground block mb-1">
                    {t("websiteDomain")}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. netflix.com"
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground block mb-1">
                    {t("usernameEmail")}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. user@example.com"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-muted-foreground">
                      {t("passwordLabel")}
                    </label>
                    <button
                      type="button"
                      onClick={generateStrongPassword}
                      className="text-[11px] font-semibold text-brand hover:underline"
                    >
                      {t("generateStrong")}
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Password"
                    value={newPasswordVal}
                    onChange={(e) => setNewPasswordVal(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-mono outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowAddPasswordModal(false)}
                  className="flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground"
                >
                  {t("cancel")}
                </button>
                <button
                  onClick={handleAddPassword}
                  className="flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground shadow-xs"
                >
                  {editingPasswordId
                    ? lang === "es"
                      ? "Actualizar"
                      : "Update"
                    : t("save")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= 9. PRIVACY POLICY ================= */}
        {subView === "privacy" && (
          <div className="space-y-4 pb-8 text-foreground">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-1">
              <h3 className="font-bold text-base">{t("privacyCommitment")}</h3>
              <p className="text-xs text-muted-foreground">
                Last updated: October 2026 • Valid for Android APK & Web App
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-4 space-y-4 text-xs leading-relaxed shadow-2xs text-muted-foreground">
              <section className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">
                  1. Zero-Log Browsing Policy
                </h4>
                <p>
                  WebNa does not track, collect, store, or sell your search
                  history, URLs, or personal browsing habits. All history, saved
                  bookmarks, and downloads are stored locally on your device
                  storage.
                </p>
              </section>

              <section className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">
                  2. Android Permissions Transparency
                </h4>
                <p>
                  WebNa only requests permissions when strictly required for
                  user-initiated actions:
                </p>
                <ul className="list-disc pl-4 space-y-1 mt-1">
                  <li>
                    <strong className="text-foreground">
                      Storage / Downloads:
                    </strong>{" "}
                    Used solely to save downloaded audio, video, or files to
                    your device.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Camera & Microphone:
                    </strong>{" "}
                    Only enabled if you explicitly grant access to a specific
                    site for video calls or audio recording.
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    Used for alerting when downloads finish and playing media in
                    the background.
                  </li>
                </ul>
              </section>

              <section className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">
                  3. Ad & Tracker Blocking
                </h4>
                <p>
                  WebNa features built-in shield filters that intercept
                  telemetry requests, known third-party advertising scripts, and
                  cross-site tracking cookies.
                </p>
              </section>

              <section className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">
                  4. User Data Control
                </h4>
                <p>
                  You retain complete sovereignty over your data. You may export
                  all browser data to JSON or completely wipe history, cookies,
                  and cache at any time using the "Clear Browsing Data" tool.
                </p>
              </section>

              <section className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">
                  5. Contact & Data Protection
                </h4>
                <p>
                  For any privacy questions or data inquiries, contact:{" "}
                  <span className="font-semibold text-brand">
                    privacy@webna.app
                  </span>
                </p>
              </section>
            </div>

            <button
              onClick={() => {
                toast.success(
                  lang === "es"
                    ? "¡Política de privacidad confirmada!"
                    : "Privacy policy acknowledged!",
                );
                setSubView(null);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand p-3.5 text-brand-foreground font-semibold text-sm shadow-md"
            >
              <Check className="size-4" />
              <span>{t("iUnderstandAndAcknowledge")}</span>
            </button>
          </div>
        )}

        {/* ================= 10. BLOCKINGS & SHIELDS ================= */}
        {subView === "blockings" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 space-y-1 shadow-2xs">
              <h3 className="font-semibold text-sm text-foreground">
                {t("blockingsAndShields")}
              </h3>
              <p className="text-xs text-muted-foreground">{t("shieldsSub")}</p>
            </div>
            {[
              {
                title: "Block Ads & Banners",
                desc: "Prevent intrusive banner ads and video overlays.",
                val: blockAds,
                set: setBlockAds,
              },
              {
                title: "Block Pop-ups & Redirects",
                desc: "Prevent malicious new tabs and forced page redirections.",
                val: blockPopups,
                set: setBlockPopups,
              },
              {
                title: "Block Cross-site Trackers",
                desc: "Block hidden scripts tracking your browsing behavior.",
                val: blockTrackers,
                set: setBlockTrackers,
              },
              {
                title: "Block Third-party Cookies",
                desc: "Block external cookies used for behavioral advertising.",
                val: blockCookies,
                set: setBlockCookies,
              },
              {
                title: "Location Access",
                desc: "Require permission before any site uses device GPS coordinates.",
                val: blockLocation,
                set: setBlockLocation,
              },
              {
                title: "Microphone Access",
                desc: "Shield device microphone from unauthorized access.",
                val: blockMic,
                set: setBlockMic,
              },
              {
                title: "Camera Access",
                desc: "Shield device camera from unauthorized web access.",
                val: blockCamera,
                set: setBlockCamera,
              },
              {
                title: "Site Notifications",
                desc: "Block push notification spam prompts on websites.",
                val: blockNotifications,
                set: setBlockNotifications,
              },
              {
                title: "Sound Auto Play",
                desc: "Prevent videos and background audio from playing automatically.",
                val: blockAutoplay,
                set: setBlockAutoplay,
              },
              {
                title: "Strict JavaScript Mode",
                desc: "Disable JavaScript on unverified sites for extreme security.",
                val: blockJs,
                set: setBlockJs,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs"
              >
                <div className="space-y-0.5 pr-4">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={item.val}
                  onClick={() => item.set(!item.val)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    item.val ? "bg-brand" : "bg-muted"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      item.val ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ================= 11. CLEAR BROWSING DATA ================= */}
        {subView === "clear-data" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-destructive/10 border border-destructive/20 p-4 space-y-1">
              <h3 className="font-bold text-sm text-destructive flex items-center gap-2">
                <AlertTriangle className="size-4" />
                {t("clearDataTitle")}
              </h3>
              <p className="text-xs text-muted-foreground">
                {t("clearDataSub")}
              </p>
            </div>

            {/* Time range selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                {t("timeRange")}
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: "hour" as const, label: t("lastHour") },
                  { id: "day" as const, label: t("twentyFourHours") },
                  { id: "week" as const, label: t("sevenDays") },
                  { id: "all" as const, label: t("allTime") },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setClearTimeRange(id)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-medium transition-colors ${
                      clearTimeRange === id
                        ? "bg-brand text-brand-foreground font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkboxes for data types */}
            <div className="rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs">
              {[
                {
                  id: "hist",
                  label: t("browsingHistory"),
                  desc: `${history.length} items logged`,
                  checked: clearHistorySelected,
                  set: setClearHistorySelected,
                },
                {
                  id: "cookies",
                  label: t("cookiesSiteData"),
                  desc: "Signs you out of most websites",
                  checked: clearCookiesSelected,
                  set: setClearCookiesSelected,
                },
                {
                  id: "cache",
                  label: t("cachedImages"),
                  desc: "Frees up storage space",
                  checked: clearCacheSelected,
                  set: setClearCacheSelected,
                },
                {
                  id: "saved",
                  label: t("bookmarks"),
                  desc: `${bookmarks.length + savedLinks.length} items`,
                  checked: clearBookmarksSelected,
                  set: setClearBookmarksSelected,
                },
                {
                  id: "pwds",
                  label: t("savedPasswords"),
                  desc: `${passwords.length} credentials`,
                  checked: clearPasswordsSelected,
                  set: setClearPasswordsSelected,
                },
              ].map((item) => (
                <label
                  key={item.id}
                  className="flex items-center justify-between p-3.5 hover:bg-muted/40 cursor-pointer"
                >
                  <div>
                    <span className="font-semibold text-xs block text-foreground">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {item.desc}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => item.set(e.target.checked)}
                    className="size-4 accent-brand rounded"
                  />
                </label>
              ))}
            </div>

            {/* Execute Button */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setSubView(null)}
                className="flex-1 rounded-2xl bg-muted py-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80"
              >
                {t("cancel")}
              </button>
              <button
                onClick={handleExecuteClear}
                className="flex-1 rounded-2xl bg-destructive py-3 text-xs font-semibold text-destructive-foreground shadow-sm hover:opacity-90"
              >
                {t("clearDataNow")}
              </button>
            </div>
          </div>
        )}

        {/* ================= PAYMENTS SECTION ================= */}
        {subView === "payments" && (
          <div className="space-y-4 pb-8">
            <div className="rounded-2xl bg-card p-4 border border-border/80 shadow-2xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {lang === "es"
                      ? "Métodos de pago y tarjetas"
                      : "Payment Methods & Cards"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {lang === "es"
                      ? "Guarde tarjetas de débito o crédito para compras rápidas online al estilo Google Pay"
                      : "Save debit or credit cards for fast online checkout like Google Pay"}
                  </p>
                </div>
                <button
                  onClick={handleOpenAddCard}
                  className="flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-brand-foreground shadow-xs hover:opacity-90 transition-opacity"
                >
                  <Plus className="size-4" />
                  <span>{lang === "es" ? "Añadir tarjeta" : "Add Card"}</span>
                </button>
              </div>
            </div>

            {/* Autofill toggle */}
            <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs">
              <div>
                <h4 className="font-semibold text-sm">
                  {lang === "es"
                    ? "Rellenar métodos de pago automáticamente"
                    : "Autofill payment methods"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {lang === "es"
                    ? "Permitir que WebNa rellene tarjetas guardadas en formularios de pago online"
                    : "Allow WebNa to fill in saved cards on online checkout forms"}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={autofillCards}
                onClick={() => {
                  const next = !autofillCards;
                  setAutofillCards(next);
                  localStorage.setItem("webna-autofill-cards", String(next));
                  toast.success(
                    next
                      ? "Autofill payments enabled"
                      : "Autofill payments disabled",
                  );
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                  autofillCards ? "bg-brand" : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    autofillCards ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Saved Cards List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {lang === "es" ? "Tarjetas guardadas" : "Saved Cards"} (
                  {savedCards.length})
                </p>
                <span className="text-[11px] text-muted-foreground">
                  {lang === "es"
                    ? "Encriptado local seguro"
                    : "Secure Local Encryption"}
                </span>
              </div>

              {savedCards.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border/80 bg-card/50 p-8 text-center">
                  <CreditCard className="size-8 mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    {lang === "es"
                      ? "No hay tarjetas guardadas"
                      : "No payment cards saved"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">
                    {lang === "es"
                      ? "Añada una tarjeta para compras rápidas en la web."
                      : "Add a card for fast and secure web checkouts."}
                  </p>
                  <button
                    onClick={handleOpenAddCard}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground"
                  >
                    <Plus className="size-4" />
                    <span>
                      {lang === "es"
                        ? "Añadir primera tarjeta"
                        : "Add first card"}
                    </span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedCards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => handleOpenEditCard(card)}
                      className="rounded-2xl border border-border/80 bg-card p-4 shadow-2xs relative overflow-hidden group cursor-pointer hover:border-brand/50 transition-all"
                    >
                      {card.isDefault && (
                        <div className="absolute top-0 right-0 bg-brand text-brand-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-xl">
                          {lang === "es" ? "Predeterminada" : "Default"}
                        </div>
                      )}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-xs">
                            {card.cardBrand === "Visa"
                              ? "VISA"
                              : card.cardBrand === "Mastercard"
                                ? "MC"
                                : card.cardBrand === "American Express"
                                  ? "AMEX"
                                  : "CARD"}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm font-mono tracking-wider">
                              {card.cardNumber}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {card.cardHolder} • Exp {card.expiryMonth}/
                              {card.expiryYear}
                            </p>
                            <p className="text-[11px] text-muted-foreground/70 mt-0.5">
                              {card.billingAddress}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
                        <div className="flex items-center gap-3">
                          {!card.isDefault && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSetDefaultCard(card.id);
                              }}
                              className="text-xs font-medium text-brand hover:underline"
                            >
                              {lang === "es"
                                ? "Hacer predeterminada"
                                : "Set as default"}
                            </button>
                          )}
                          <span className="text-xs font-medium text-muted-foreground hover:text-brand">
                            {lang === "es" ? "Editar" : "Edit"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteCard(card.id);
                            }}
                            className="flex items-center gap-1 text-xs text-destructive hover:underline p-1.5"
                          >
                            <Trash2 className="size-3.5" />
                            <span>{lang === "es" ? "Eliminar" : "Remove"}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add Card Modal */}
        {showAddCardModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-foreground">
                  {editingCardId
                    ? lang === "es"
                      ? "Editar tarjeta de pago"
                      : "Edit Payment Card"
                    : lang === "es"
                      ? "Añadir tarjeta de pago"
                      : "Add Payment Card"}
                </h3>
                <button
                  onClick={() => setShowAddCardModal(false)}
                  className="size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    {lang === "es" ? "Número de tarjeta" : "Card Number"}
                  </label>
                  <input
                    type="text"
                    placeholder="4532 0000 0000 0000"
                    value={newCardNumber}
                    onChange={(e) => setNewCardNumber(e.target.value)}
                    className="w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    {lang === "es" ? "Nombre del titular" : "Cardholder Name"}
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Morgan"
                    value={newCardHolder}
                    onChange={(e) => setNewCardHolder(e.target.value)}
                    className="w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      {lang === "es" ? "Mes" : "Exp Month"}
                    </label>
                    <select
                      value={newExpiryMonth}
                      onChange={(e) => setNewExpiryMonth(e.target.value)}
                      className="w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
                    >
                      {Array.from({ length: 12 }, (_, i) => {
                        const m = String(i + 1).padStart(2, "0");
                        return (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      {lang === "es" ? "Año" : "Exp Year"}
                    </label>
                    <select
                      value={newExpiryYear}
                      onChange={(e) => setNewExpiryYear(e.target.value)}
                      className="w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
                    >
                      {["26", "27", "28", "29", "30", "31", "32", "33"].map(
                        (y) => (
                          <option key={y} value={y}>
                            20{y}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      CVV / CVC
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={newCvv}
                      onChange={(e) => setNewCvv(e.target.value)}
                      className="w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    {lang === "es"
                      ? "Dirección de facturación"
                      : "Billing Address"}
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St, City, Country"
                    value={newBillingAddress}
                    onChange={(e) => setNewBillingAddress(e.target.value)}
                    className="w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowAddCardModal(false)}
                  className="flex-1 rounded-xl bg-muted p-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  {lang === "es" ? "Cancelar" : "Cancel"}
                </button>
                <button
                  onClick={handleSaveCard}
                  className="flex-1 rounded-xl bg-brand p-3 text-xs font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
                >
                  {editingCardId
                    ? lang === "es"
                      ? "Actualizar tarjeta"
                      : "Update Card"
                    : lang === "es"
                      ? "Guardar tarjeta"
                      : "Save Card"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
