import { n as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import {
  a as TSS_SERVER_FUNCTION,
  l as createServerFn,
} from "./createServerFn-DDDJMFWM.mjs";
import {
  a as fallbackImage,
  c as validImage,
  n as FOOTBALL_PLACEHOLDER,
  t as DEFAULT_IMAGE,
} from "./news-shared-DeMLIqT_.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { t as AI_ENGINES } from "./routes-BkBYedTG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BybzanSy.mjs";
import {
  $ as FingerprintPattern,
  A as Plus,
  B as Menu,
  C as Search,
  Ct as Activity,
  D as Repeat,
  E as RotateCcw,
  F as Palette,
  G as ListMusic,
  H as Lock,
  I as Music,
  J as KeyRound,
  K as Layers,
  L as Moon,
  M as PictureInPicture2,
  N as Phone,
  O as Repeat1,
  P as Pause,
  Q as FolderPlus,
  R as Minimize2,
  S as Send,
  St as ArrowLeft,
  T as RotateCw,
  U as ListX,
  V as Maximize2,
  W as ListPlus,
  X as Heart,
  Y as House,
  Z as Globe,
  _ as Shuffle,
  _t as ChevronLeft,
  a as Video,
  at as EllipsisVertical,
  b as Share2,
  bt as Bell,
  c as TriangleAlert,
  ct as Database,
  d as Star,
  dt as Compass,
  et as Film,
  f as Square,
  ft as Clock,
  g as SkipBack,
  gt as ChevronRight,
  h as SkipForward,
  ht as CircleAlert,
  i as Volume1,
  it as ExternalLink,
  j as Play,
  k as RefreshCw,
  l as Trash2,
  lt as CreditCard,
  m as Sparkles,
  mt as CircleCheck,
  n as VolumeX,
  nt as Eye,
  o as User,
  ot as Download,
  p as SquareCheckBig,
  pt as CirclePlay,
  q as Laptop,
  r as Volume2,
  rt as EyeOff,
  s as Upload,
  st as Disc,
  t as X,
  tt as FileText,
  u as Sun,
  ut as Copy,
  v as Shield,
  vt as Check,
  w as ScanSearch,
  x as Settings,
  xt as ArrowRight,
  y as ShieldCheck,
  yt as Bookmark,
  z as Mic,
} from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COqGiD5m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRANSLATIONS = {
  en: {
    settings: "Settings",
    language: "Language",
    appearance: "Appearance",
    rateUs: "Rate us",
    shareApp: "Share app",
    notifications: "Notifications",
    safetyHub: "Safety hub",
    dataBackup: "Data backup",
    passwords: "Passwords",
    privacyPolicy: "Privacy policy",
    blockingsAndShields: "Blockings & Shields",
    clearBrowsingData: "Clear browsing data",
    clearAllBrowsingData: "Clear all browsing data",
    aboutWebNa: "About WebNa",
    active: "Active",
    rateSupportOnPlay: "Support WebNa on Google Play",
    ratedStars: "Rated ★★★★★",
    shareWithFriends: "Share with friends and family",
    notificationsSub: "Downloads, news, and safe alerts",
    safetyHubSub: "Safe browsing, HTTPS & shields",
    dataBackupSub: "Export, restore and cloud sync",
    savedCredentialsCount: "saved credentials",
    privacySub: "Zero logs, local data & permissions",
    shieldsSub: "Ads, trackers, cookies, media permissions",
    home: "Home",
    discover: "Discover",
    player: "Player",
    audioPlayer: "Audio player",
    videoPlayer: "Video player",
    shortcuts: "Shortcuts",
    categories: "Categories",
    addCategory: "+ Add Category",
    siteAppHub: "Site/App Hub",
    siteAppHubSub:
      "You can keep your favorite sites or apps here for quick access.",
    bookmarks: "Bookmarks",
    history: "History",
    savedLinks: "Saved links",
    searchEngines: "Search engines",
    setDefaultBrowser: "Set WebNa as default browser",
    searchWithOrType: "Search with {engine} or type URL",
    askOrType: "Ask {engine} or type URL",
    cancel: "Cancel",
    save: "Save",
    add: "Add",
    delete: "Delete",
    copied: "Copied",
    copy: "Copy",
    back: "Back",
    close: "Close",
    displayAndSearchLanguage: "Display & Search Language",
    chooseLanguageSub:
      "Choose the preferred language for menus, search queries, and content.",
    autoTranslateForeign: "Auto-translate foreign sites",
    autoTranslateSub: "Offer Google translate bar for foreign languages",
    supportedLanguages: "Supported Languages",
    themeAndDisplay: "Theme & Display",
    appearanceSub:
      "Customize colors, font scaling, and navigation toolbar placement.",
    colorTheme: "Color Theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    systemTheme: "System",
    textScaling: "Text Scaling",
    small: "Small",
    normal: "Normal",
    large: "Large",
    huge: "Huge",
    addressBarPosition: "Address Bar Position",
    topStandard: "Top (Standard)",
    bottomEasy: "Bottom (Easy reach)",
    highContrast: "AMOLED / High Contrast",
    highContrastSub:
      "Deep pure blacks to save battery on OLED Android displays",
    androidNotificationPermission: "Android Notification Permission",
    permissionRequiredSub:
      "Required for download completions and background audio",
    requestPermission: "Request Permission",
    notificationCategories: "Notification Categories",
    downloadCompletedAlerts: "Download completed alerts",
    downloadCompletedSub:
      "Notify when videos, MP3s, or files finish downloading",
    safeBrowsingAlerts: "Safe browsing alerts",
    safeBrowsingSub: "Warn when a site has known security risks or scams",
    newsTrendingUpdates: "News & trending updates",
    newsTrendingSub: "Daily morning highlights from the Discover feed",
    mediaBackgroundPlayback: "Media background playback",
    mediaPlaybackSub:
      "Keep playback controls in your Android notification shade",
    vibrationSoundAlerts: "Vibration & Sound alerts",
    vibrationSub: "Vibrate on high-priority download or security warnings",
    sendTestNotification: "Send Test Notification",
    shieldActive: "WebNa Sentinel Shield",
    shieldActiveSub:
      "On-device privacy filters and encrypted network guard active",
    safetyControlsTab: "Protection Controls",
    safetyAuditTab: "Safety Health & Audit",
    privacyAndIdentity: "Privacy & Anti-Tracking Shield",
    privacyAndIdentitySub:
      "Guard device identifiers, URL parameters, and suppress web push noise",
    connectionAndThreat: "Connection & Threat Defense",
    connectionAndThreatSub:
      "Enforce encrypted transport, pop-up barriers, and malicious domain blocking",
    adsAndTrackers: "Intrusive Ads & Web Trackers",
    adsAndTrackersSub:
      "Hides banner ads, video overlays, and stops invisible telemetry beacons.",
    fingerprintProtection: "Device Anti-Fingerprinting",
    fingerprintProtectionSub:
      "Masks canvas rendering, audio context, and hardware signatures from cross-site profilers.",
    cleanLinks: "Link Sanitizer (URL Tracking Stripper)",
    cleanLinksSub:
      "Automatically strips utm_, fbclid, gclid, and referral trackers when navigating or sharing links.",
    blockNotificationRequests: "Silent Browsing (Mute Push Requests)",
    blockNotificationRequestsSub:
      "Silently drops website prompts asking permission to send push notifications.",
    cookieManagement: "Cookie & Storage Isolation Policy",
    cookieManagementSub:
      "Choose how cookies and site storage behave across browsing sessions.",
    cookieAllow: "Allow All",
    cookieBlock3rd: "Block 3rd-Party",
    cookieBlockAll: "Block All Cookies",
    httpsOnlyMode: "Strict HTTPS Upgrade",
    httpsOnlySub:
      "Enforce encrypted connections; warn before loading unencrypted HTTP.",
    antiPhishing: "Phishing & Malware Sentry",
    antiPhishingSub:
      "Proactively inspects domains against known malicious databases and deceptive web traps.",
    blockPopupsTitle: "Pop-up & Window Blocker",
    blockPopupsSub:
      "Intercepts unauthorized new windows, hidden tabs, and deceptive redirect loops.",
    blockMixedContent: "Insecure Mixed Content Barrier",
    blockMixedContentSub:
      "Blocks unencrypted HTTP elements, images, and scripts from executing on HTTPS pages.",
    sendDntHeader: "Global Privacy Control (Do Not Track)",
    sendDntSub:
      "Transmits DNT and Sec-GPC signals requesting websites not to sell or profile your data.",
    strictDownloads: "Drive-by Download Guard",
    strictDownloadsSub:
      "Blocks automatic background downloads unless explicitly initiated by your tap.",
    dnsLeakMitigation: "DNS & WebRTC Leak Shield",
    dnsLeakSub:
      "Prevents real IP address leaks through WebRTC peer connections and encrypted DNS.",
    auditScoreTitle: "Protection Rating",
    auditScoreSub:
      "Calculated in real-time from your active privacy & security defenses",
    auditStatusExcellent: "Hardened Protection",
    auditStatusGood: "Good Defense",
    auditStatusFair: "Moderate Protection",
    runAudit: "Run Live Security Audit",
    runningAudit: "Auditing browser subsystems...",
    auditComplete: "Security Audit Complete",
    optimizeAll: "Auto-Harden All Defenses",
    allProtected: "All defenses enabled at maximum security!",
    auditChecklist: "Diagnostic Health Checklist",
    detailedShieldPermissions: "Detailed Shield & Permissions",
    detailedShieldSub:
      "Configure ads, pop-ups, cookies, camera & location permissions",
    backupAndSync: "Backup & Synchronization",
    backupSub:
      "Never lose your bookmarks, saved links, custom search engines, or history.",
    cloudSync: "Cloud Sync",
    syncNow: "Sync Now",
    lastCloudSync: "Last Cloud Sync:",
    exportToJson: "Export to JSON File",
    exportSub: "Download a full backup of bookmarks, saved links, and history.",
    downloadBackupFile: "Download Backup File (.json)",
    restoreFromBackup: "Restore from Backup",
    restoreSub: "Load a previously saved WebNa backup file into this device.",
    chooseBackupFile: "Choose Backup File (.json)",
    savedPasswords: "Saved Passwords",
    passwordVaultSub:
      "Secure local credential vault with one-tap copy & autofill",
    searchAccounts: "Search accounts or websites...",
    offerToSavePasswords: "Offer to save web passwords",
    autoFillWebForms: "Auto-fill web forms",
    saveNewCredential: "Save New Credential",
    websiteDomain: "Website domain or URL",
    usernameEmail: "Username / Email",
    passwordLabel: "Password",
    generateStrong: "Generate Strong",
    clearDataTitle: "Clear Browsing Data",
    clearDataSub: "Select items you wish to remove from this device.",
    timeRange: "Time Range",
    lastHour: "Last hour",
    twentyFourHours: "24 hours",
    sevenDays: "7 days",
    allTime: "All time",
    browsingHistory: "Browsing History",
    cookiesSiteData: "Cookies & Site Data",
    cachedImages: "Cached Images & Files",
    clearDataNow: "Clear Data Now",
    privacyCommitment: "WebNa Privacy Commitment",
    iUnderstandAndAcknowledge: "I Understand & Acknowledge",
  },
  es: {
    settings: "Configuración",
    language: "Idioma",
    appearance: "Apariencia",
    rateUs: "Califícanos",
    shareApp: "Compartir aplicación",
    notifications: "Notificaciones",
    safetyHub: "Centro de seguridad",
    dataBackup: "Copia de seguridad",
    passwords: "Contraseñas",
    privacyPolicy: "Política de privacidad",
    blockingsAndShields: "Bloqueos y escudos",
    clearBrowsingData: "Borrar datos de navegación",
    clearAllBrowsingData: "Borrar todos los datos de navegación",
    aboutWebNa: "Acerca de WebNa",
    active: "Activo",
    rateSupportOnPlay: "Apoya a WebNa en Google Play",
    ratedStars: "Calificado ★★★★★",
    shareWithFriends: "Compartir con amigos y familiares",
    notificationsSub: "Descargas, noticias y alertas de seguridad",
    safetyHubSub: "Navegación segura, HTTPS y escudos",
    dataBackupSub: "Exportar, restaurar y sincronización en la nube",
    savedCredentialsCount: "credenciales guardadas",
    privacySub: "Sin registros, datos locales y permisos",
    shieldsSub: "Anuncios, rastreadores, cookies, permisos",
    home: "Inicio",
    discover: "Descubrir",
    player: "Reproductor",
    audioPlayer: "Reproductor de audio",
    videoPlayer: "Reproductor de video",
    shortcuts: "Accesos directos",
    categories: "Categorías",
    addCategory: "+ Añadir categoría",
    bookmarks: "Marcadores",
    history: "Historial",
    savedLinks: "Enlaces guardados",
    searchEngines: "Motores de búsqueda",
    setDefaultBrowser: "Establecer WebNa como navegador predeterminado",
    searchWithOrType: "Buscar con {engine} o escribir URL",
    askOrType: "Preguntar a {engine} o escribir URL",
    cancel: "Cancelar",
    save: "Guardar",
    add: "Añadir",
    delete: "Eliminar",
    copied: "Copiado",
    copy: "Copiar",
    back: "Atrás",
    close: "Cerrar",
    displayAndSearchLanguage: "Idioma de pantalla y búsqueda",
    chooseLanguageSub:
      "Elige el idioma preferido para menús, consultas de búsqueda y contenido.",
    autoTranslateForeign: "Traducir sitios extranjeros automáticamente",
    autoTranslateSub:
      "Ofrecer barra de Google Traductor para idiomas extranjeros",
    supportedLanguages: "Idiomas compatibles",
    themeAndDisplay: "Tema y visualización",
    appearanceSub:
      "Personaliza colores, tamaño de fuente y posición de la barra de navegación.",
    colorTheme: "Tema de color",
    lightTheme: "Claro",
    darkTheme: "Oscuro",
    systemTheme: "Sistema",
    textScaling: "Escala de texto",
    small: "Pequeño",
    normal: "Normal",
    large: "Grande",
    huge: "Enorme",
    addressBarPosition: "Posición de la barra de direcciones",
    topStandard: "Superior (Estándar)",
    bottomEasy: "Inferior (Fácil alcance)",
    highContrast: "AMOLED / Alto contraste",
    highContrastSub:
      "Negros puros y profundos para ahorrar batería en pantallas OLED",
    androidNotificationPermission: "Permiso de notificaciones de Android",
    permissionRequiredSub:
      "Requerido para descargas completadas y audio en segundo plano",
    requestPermission: "Solicitar permiso",
    notificationCategories: "Categorías de notificaciones",
    downloadCompletedAlerts: "Alertas de descarga completada",
    downloadCompletedSub: "Avisar cuando se descarguen videos, MP3 o archivos",
    safeBrowsingAlerts: "Alertas de navegación segura",
    safeBrowsingSub:
      "Avisar si un sitio web tiene riesgos de seguridad conocidos",
    newsTrendingUpdates: "Noticias y tendencias",
    newsTrendingSub:
      "Destacados diarios de la mañana desde la pestaña Descubrir",
    mediaBackgroundPlayback: "Reproducción multimedia en segundo plano",
    mediaPlaybackSub:
      "Mantener controles en la barra de notificaciones de Android",
    vibrationSoundAlerts: "Alertas con vibración y sonido",
    vibrationSub: "Vibrar con avisos de seguridad o descargas importantes",
    sendTestNotification: "Enviar notificación de prueba",
    shieldActive: "Escudo Centinela WebNa",
    shieldActiveSub:
      "Filtros de privacidad en el dispositivo y guardia de red cifrada activos",
    safetyControlsTab: "Controles de protección",
    safetyAuditTab: "Auditoría de seguridad",
    privacyAndIdentity: "Privacidad y protección contra rastreo",
    privacyAndIdentitySub:
      "Protege identificadores de dispositivo, limpia URLs y silencia avisos web",
    connectionAndThreat: "Seguridad de red y amenazas",
    connectionAndThreatSub:
      "Fuerza transporte cifrado, barrera de pop-ups y bloqueo de dominios maliciosos",
    adsAndTrackers: "Anuncios y rastreadores invasivos",
    adsAndTrackersSub:
      "Oculta anuncios molestos, capas de video y detiene balizas de telemetría invisibles.",
    fingerprintProtection: "Protección contra huellas digitales",
    fingerprintProtectionSub:
      "Oculta el renderizado de canvas, contexto de audio y firmas de hardware ante rastreadores.",
    cleanLinks: "Limpiador de enlaces (Sin rastreadores)",
    cleanLinksSub:
      "Elimina automáticamente utm_, fbclid, gclid y etiquetas de seguimiento al abrir o compartir enlaces.",
    blockNotificationRequests: "Navegación silenciosa (Sin avisos de push)",
    blockNotificationRequestsSub:
      "Rechaza silenciosamente las molestas solicitudes de sitios para enviarte notificaciones push.",
    cookieManagement: "Política de aislamiento de cookies",
    cookieManagementSub:
      "Define cómo interactúan las cookies y el almacenamiento de datos entre sitios.",
    cookieAllow: "Permitir todas",
    cookieBlock3rd: "Bloquear de 3ros",
    cookieBlockAll: "Bloquear todas",
    httpsOnlyMode: "Modo HTTPS estricto",
    httpsOnlySub:
      "Fuerza conexiones cifradas; avisa antes de cargar páginas HTTP no seguras.",
    antiPhishing: "Protección antiphishing y malware",
    antiPhishingSub:
      "Inspecciona dominios contra listas de amenazas y sitios fraudulentos en tiempo real.",
    blockPopupsTitle: "Bloqueador de ventanas emergentes",
    blockPopupsSub:
      "Impide la apertura de ventanas emergentes no autorizadas y bucles de redirección.",
    blockMixedContent: "Filtro de contenido mixto no seguro",
    blockMixedContentSub:
      "Bloquea elementos, scripts e imágenes HTTP sin cifrar en páginas HTTPS seguras.",
    sendDntHeader: "Control de privacidad global (No rastrear)",
    sendDntSub:
      "Transmite señales DNT y Sec-GPC solicitando a los sitios no vender ni perfilar tus datos.",
    strictDownloads: "Protección contra descargas silenciosas",
    strictDownloadsSub:
      "Detiene descargas automáticas en segundo plano a menos que toques el enlace directamente.",
    dnsLeakMitigation: "Protección contra fugas DNS y WebRTC",
    dnsLeakSub:
      "Evita fugas de tu dirección IP real a través de conexiones WebRTC y fuerza DNS privado.",
    auditScoreTitle: "Calificación de protección",
    auditScoreSub:
      "Calculado en tiempo real según tus defensas de privacidad y seguridad activas",
    auditStatusExcellent: "Protección blindada",
    auditStatusGood: "Buena defensa",
    auditStatusFair: "Protección moderada",
    runAudit: "Ejecutar auditoría de seguridad",
    runningAudit: "Auditando subsistemas del navegador...",
    auditComplete: "Auditoría de seguridad completada",
    optimizeAll: "Activar todas las protecciones",
    allProtected: "¡Todas las defensas activadas con la máxima seguridad!",
    auditChecklist: "Lista de diagnóstico de salud",
    detailedShieldPermissions: "Escudo y permisos detallados",
    detailedShieldSub:
      "Configurar anuncios, ventanas emergentes, cookies y cámara",
    backupAndSync: "Copia de seguridad y sincronización",
    backupSub:
      "No pierdas nunca tus marcadores, enlaces guardados o historial.",
    cloudSync: "Sincronización en la nube",
    syncNow: "Sincronizar ahora",
    lastCloudSync: "Última sincronización:",
    exportToJson: "Exportar a archivo JSON",
    exportSub:
      "Descarga una copia completa de marcadores, enlaces e historial.",
    downloadBackupFile: "Descargar copia de seguridad (.json)",
    restoreFromBackup: "Restaurar desde copia",
    restoreSub: "Carga un archivo de respaldo WebNa previamente guardado.",
    chooseBackupFile: "Elegir archivo (.json)",
    savedPasswords: "Contraseñas guardadas",
    passwordVaultSub:
      "Bóveda local segura con copia y autorrelleno en un toque",
    searchAccounts: "Buscar cuentas o sitios web...",
    offerToSavePasswords: "Ofrecer guardar contraseñas web",
    autoFillWebForms: "Autorrellenar formularios web",
    saveNewCredential: "Guardar nueva credencial",
    websiteDomain: "Dominio web o URL",
    usernameEmail: "Usuario / Correo electrónico",
    passwordLabel: "Contraseña",
    generateStrong: "Generar segura",
    clearDataTitle: "Borrar datos de navegación",
    clearDataSub:
      "Selecciona los elementos que deseas eliminar de este dispositivo.",
    timeRange: "Rango de tiempo",
    lastHour: "Última hora",
    twentyFourHours: "24 horas",
    sevenDays: "7 días",
    allTime: "Todo el tiempo",
    browsingHistory: "Historial de navegación",
    cookiesSiteData: "Cookies y datos del sitio",
    cachedImages: "Imágenes y archivos en caché",
    clearDataNow: "Borrar datos ahora",
    privacyCommitment: "Compromiso de privacidad de WebNa",
    iUnderstandAndAcknowledge: "Entendido y aceptado",
  },
  fr: {
    settings: "Paramètres",
    language: "Langue",
    appearance: "Apparence",
    rateUs: "Évaluez-nous",
    shareApp: "Partager l'application",
    notifications: "Notifications",
    safetyHub: "Centre de sécurité",
    dataBackup: "Sauvegarde des données",
    passwords: "Mots de passe",
    privacyPolicy: "Politique de confidentialité",
    blockingsAndShields: "Blocages et boucliers",
    clearBrowsingData: "Effacer les données de navigation",
    clearAllBrowsingData: "Effacer toutes les données",
    aboutWebNa: "À propos de WebNa",
    active: "Actif",
    rateSupportOnPlay: "Soutenir WebNa sur Google Play",
    ratedStars: "Noté ★★★★★",
    shareWithFriends: "Partager avec amis et famille",
    notificationsSub: "Téléchargements, actualités et alertes",
    safetyHubSub: "Navigation sécurisée, HTTPS et protection",
    dataBackupSub: "Exporter, restaurer et synchroniser",
    savedCredentialsCount: "identifiants enregistrés",
    privacySub: "Zéro journal, données locales et permissions",
    shieldsSub: "Publicités, trackers, cookies, permissions",
    home: "Accueil",
    discover: "Découvrir",
    player: "Lecteur",
    audioPlayer: "Lecteur audio",
    videoPlayer: "Lecteur vidéo",
    shortcuts: "Raccourcis",
    categories: "Catégories",
    addCategory: "+ Ajouter catégorie",
    bookmarks: "Favoris",
    history: "Historique",
    savedLinks: "Liens enregistrés",
    searchEngines: "Moteurs de recherche",
    setDefaultBrowser: "Définir WebNa par défaut",
    searchWithOrType: "Rechercher avec {engine} ou taper une URL",
    askOrType: "Demander à {engine} ou taper une URL",
    cancel: "Annuler",
    save: "Enregistrer",
    add: "Ajouter",
    delete: "Supprimer",
    copied: "Copié",
    copy: "Copier",
    back: "Retour",
    close: "Fermer",
    displayAndSearchLanguage: "Langue d'affichage et de recherche",
    chooseLanguageSub: "Choisissez la langue pour les menus et le contenu.",
    autoTranslateForeign: "Traduire automatiquement",
    autoTranslateSub: "Proposer la barre Google Traduction",
    supportedLanguages: "Langues prises en charge",
    themeAndDisplay: "Thème et affichage",
    appearanceSub: "Personnalisez les couleurs, la police et la barre.",
    colorTheme: "Thème de couleur",
    lightTheme: "Clair",
    darkTheme: "Sombre",
    systemTheme: "Système",
    textScaling: "Taille du texte",
    small: "Petit",
    normal: "Normal",
    large: "Grand",
    huge: "Très grand",
    addressBarPosition: "Position de la barre d'adresse",
    topStandard: "Haut (Standard)",
    bottomEasy: "Bas (Accès facile)",
    highContrast: "AMOLED / Contraste élevé",
    highContrastSub: "Noirs profonds pour économiser la batterie",
    androidNotificationPermission: "Autorisation de notification Android",
    permissionRequiredSub: "Requis pour les téléchargements et le lecteur",
    requestPermission: "Demander l'autorisation",
    notificationCategories: "Catégories de notifications",
    downloadCompletedAlerts: "Alertes de téléchargement terminé",
    downloadCompletedSub: "Avertir quand un fichier est prêt",
    safeBrowsingAlerts: "Alertes de navigation sécurisée",
    safeBrowsingSub: "Avertir en cas de site malveillant",
    newsTrendingUpdates: "Actualités et tendances",
    newsTrendingSub: "Actualités quotidiennes dans Découvrir",
    mediaBackgroundPlayback: "Lecture en arrière-plan",
    mediaPlaybackSub: "Contrôles dans la barre de notifications",
    vibrationSoundAlerts: "Alertes vibration et son",
    vibrationSub: "Vibrer pour les alertes de sécurité",
    sendTestNotification: "Envoyer une notification test",
    shieldActive: "Bouclier WebNa actif",
    shieldActiveSub: "Votre navigation est protégée contre les menaces.",
    httpsOnlyMode: "Mode HTTPS uniquement",
    httpsOnlySub: "Mettre à niveau la navigation vers HTTPS chiffré",
    antiPhishing: "Anti-phishing et navigation sûre",
    antiPhishingSub: "Vérifier les sites contre les fraudes",
    sendDntHeader: "Envoyer l'en-tête 'Ne pas suivre' (DNT)",
    sendDntSub: "Demander aux sites de ne pas vous pister",
    dnsLeakMitigation: "Protection contre les fuites DNS",
    dnsLeakSub: "Masquer l'adresse IP réelle sur VPN",
    detailedShieldPermissions: "Bouclier et autorisations détaillés",
    detailedShieldSub: "Gérer pubs, pop-ups, cookies et micro",
    backupAndSync: "Sauvegarde et synchronisation",
    backupSub: "Ne perdez plus vos favoris ou votre historique.",
    cloudSync: "Synchronisation Cloud",
    syncNow: "Synchroniser maintenant",
    lastCloudSync: "Dernière synchro :",
    exportToJson: "Exporter au format JSON",
    exportSub: "Télécharger une copie complète de vos données.",
    downloadBackupFile: "Télécharger le fichier (.json)",
    restoreFromBackup: "Restaurer depuis sauvegarde",
    restoreSub: "Charger un fichier de sauvegarde WebNa.",
    chooseBackupFile: "Choisir un fichier (.json)",
    savedPasswords: "Mots de passe enregistrés",
    passwordVaultSub: "Coffre-fort local sécurisé avec copie rapide",
    searchAccounts: "Rechercher des comptes...",
    offerToSavePasswords: "Proposer d'enregistrer les mots de passe",
    autoFillWebForms: "Remplissage automatique",
    saveNewCredential: "Enregistrer un identifiant",
    websiteDomain: "Domaine web ou URL",
    usernameEmail: "Identifiant / E-mail",
    passwordLabel: "Mot de passe",
    generateStrong: "Générer fort",
    clearDataTitle: "Effacer les données de navigation",
    clearDataSub: "Sélectionnez les données à supprimer.",
    timeRange: "Période",
    lastHour: "Dernière heure",
    twentyFourHours: "24 heures",
    sevenDays: "7 jours",
    allTime: "Tout l'historique",
    browsingHistory: "Historique de navigation",
    cookiesSiteData: "Cookies et données de site",
    cachedImages: "Images et fichiers en cache",
    clearDataNow: "Effacer maintenant",
    privacyCommitment: "Engagement de confidentialité WebNa",
    iUnderstandAndAcknowledge: "J'ai compris et j'accepte",
  },
  de: {
    settings: "Einstellungen",
    language: "Sprache",
    appearance: "Erscheinungsbild",
    rateUs: "Bewerten",
    shareApp: "App teilen",
    notifications: "Benachrichtigungen",
    safetyHub: "Sicherheitscenter",
    dataBackup: "Datensicherung",
    passwords: "Passwörter",
    privacyPolicy: "Datenschutzerklärung",
    blockingsAndShields: "Blockaden & Schilde",
    clearBrowsingData: "Browserdaten löschen",
    clearAllBrowsingData: "Alle Browserdaten löschen",
    aboutWebNa: "Über WebNa",
    active: "Aktiv",
    rateSupportOnPlay: "WebNa auf Google Play bewerten",
    ratedStars: "Bewertet ★★★★★",
    shareWithFriends: "Mit Freunden teilen",
    notificationsSub: "Downloads, News und Sicherheitswarnungen",
    safetyHubSub: "Sicheres Surfen, HTTPS & Schilde",
    dataBackupSub: "Exportieren, wiederherstellen & Cloud-Sync",
    savedCredentialsCount: "gespeicherte Passwörter",
    privacySub: "Keine Logs, lokale Daten & Rechte",
    shieldsSub: "Werbung, Tracker, Cookies, Berechtigungen",
    home: "Startseite",
    discover: "Entdecken",
    player: "Player",
    audioPlayer: "Audio-Player",
    videoPlayer: "Video-Player",
    shortcuts: "Verknüpfungen",
    categories: "Kategorien",
    addCategory: "+ Kategorie hinzufügen",
    bookmarks: "Lesezeichen",
    history: "Verlauf",
    savedLinks: "Gespeicherte Links",
    searchEngines: "Suchmaschinen",
    setDefaultBrowser: "WebNa als Standardbrowser festlegen",
    searchWithOrType: "Mit {engine} suchen oder URL eingeben",
    askOrType: "{engine} fragen oder URL eingeben",
    cancel: "Abbrechen",
    save: "Speichern",
    add: "Hinzufügen",
    delete: "Löschen",
    copied: "Kopiert",
    copy: "Kopieren",
    back: "Zurück",
    close: "Schließen",
    displayAndSearchLanguage: "Anzeige- & Suchsprache",
    chooseLanguageSub: "Wähle die bevorzugte Sprache für Menüs und Inhalte.",
    autoTranslateForeign: "Fremdsprachige Seiten automatisch übersetzen",
    autoTranslateSub: "Google Übersetzer-Leiste anbieten",
    supportedLanguages: "Unterstützte Sprachen",
    themeAndDisplay: "Design & Anzeige",
    appearanceSub: "Passe Farben, Schriftgröße und Leiste an.",
    colorTheme: "Farbdesign",
    lightTheme: "Hell",
    darkTheme: "Dunkel",
    systemTheme: "System",
    textScaling: "Textgröße",
    small: "Klein",
    normal: "Normal",
    large: "Groß",
    huge: "Sehr groß",
    addressBarPosition: "Adressleistenposition",
    topStandard: "Oben (Standard)",
    bottomEasy: "Unten (Leicht erreichbar)",
    highContrast: "AMOLED / Hoher Kontrast",
    highContrastSub: "Tiefes Schwarz zum Energiesparen auf OLED",
    androidNotificationPermission: "Android-Benachrichtigungsberechtigung",
    permissionRequiredSub: "Erforderlich für Downloads und Hintergrund-Audio",
    requestPermission: "Berechtigung anfordern",
    notificationCategories: "Benachrichtigungskategorien",
    downloadCompletedAlerts: "Download-Benachrichtigungen",
    downloadCompletedSub: "Melden, wenn Dateien fertig geladen sind",
    safeBrowsingAlerts: "Sicherheitswarnungen",
    safeBrowsingSub: "Vor betrügerischen Webseiten warnen",
    newsTrendingUpdates: "News & Trends",
    newsTrendingSub: "Tägliche Highlights aus Entdecken",
    mediaBackgroundPlayback: "Hintergrund-Wiedergabe",
    mediaPlaybackSub: "Steuerung in Android-Benachrichtigungen",
    vibrationSoundAlerts: "Vibration & Ton",
    vibrationSub: "Vibrieren bei Sicherheitswarnungen",
    sendTestNotification: "Test-Benachrichtigung senden",
    shieldActive: "WebNa-Schild aktiv",
    shieldActiveSub: "Surfen ist vor Schadsoftware und Tracking geschützt.",
    httpsOnlyMode: "Nur HTTPS-Modus",
    httpsOnlySub: "Verbindungen automatisch verschlüsseln",
    antiPhishing: "Anti-Phishing & Schutz",
    antiPhishingSub: "URLs gegen Betrugsseiten prüfen",
    sendDntHeader: "'Do Not Track' (DNT) senden",
    sendDntSub: "Websites auffordern, Tracking zu stoppen",
    dnsLeakMitigation: "DNS-Leckschutz",
    dnsLeakSub: "Echte IP-Adresse in VPNs schützen",
    detailedShieldPermissions: "Detaillierte Schilde & Rechte",
    detailedShieldSub: "Werbung, Cookies und Kamera einstellen",
    backupAndSync: "Datensicherung & Synchronisation",
    backupSub: "Verliere nie Lesezeichen oder deinen Verlauf.",
    cloudSync: "Cloud-Synchronisation",
    syncNow: "Jetzt synchronisieren",
    lastCloudSync: "Letzter Sync:",
    exportToJson: "Als JSON-Datei exportieren",
    exportSub: "Vollständige Sicherung herunterladen.",
    downloadBackupFile: "Sicherungsdatei (.json) herunterladen",
    restoreFromBackup: "Aus Sicherung wiederherstellen",
    restoreSub: "Gespeicherte WebNa-Datei importieren.",
    chooseBackupFile: "Datei auswählen (.json)",
    savedPasswords: "Gespeicherte Passwörter",
    passwordVaultSub: "Sicherer lokaler Tresor mit 1-Klick-Kopieren",
    searchAccounts: "Konten oder Websites suchen...",
    offerToSavePasswords: "Passwortspeichern anbieten",
    autoFillWebForms: "Automatisches Ausfüllen",
    saveNewCredential: "Neues Passwort speichern",
    websiteDomain: "Webseite / URL",
    usernameEmail: "Benutzername / E-Mail",
    passwordLabel: "Passwort",
    generateStrong: "Sicheres generieren",
    clearDataTitle: "Browserdaten löschen",
    clearDataSub: "Wähle die zu entfernenden Elemente.",
    timeRange: "Zeitraum",
    lastHour: "Letzte Stunde",
    twentyFourHours: "24 Stunden",
    sevenDays: "7 Tage",
    allTime: "Gesamter Zeitraum",
    browsingHistory: "Browserverlauf",
    cookiesSiteData: "Cookies & Websitedaten",
    cachedImages: "Bilder & Dateien im Cache",
    clearDataNow: "Jetzt löschen",
    privacyCommitment: "WebNa Datenschutzversprechen",
    iUnderstandAndAcknowledge: "Verstanden & Zustimmen",
  },
  pt: {
    settings: "Configurações",
    language: "Idioma",
    appearance: "Aparência",
    rateUs: "Avalie-nos",
    shareApp: "Compartilhar aplicativo",
    notifications: "Notificações",
    safetyHub: "Central de segurança",
    dataBackup: "Backup de dados",
    passwords: "Senhas",
    privacyPolicy: "Política de privacidade",
    blockingsAndShields: "Bloqueios e escudos",
    clearBrowsingData: "Limpar dados de navegação",
    clearAllBrowsingData: "Limpar todos os dados",
    aboutWebNa: "Sobre o WebNa",
    active: "Ativo",
    rateSupportOnPlay: "Avalie o WebNa no Google Play",
    ratedStars: "Avaliado ★★★★★",
    shareWithFriends: "Compartilhe com amigos",
    notificationsSub: "Downloads, notícias e alertas",
    safetyHubSub: "Navegação segura, HTTPS e proteção",
    dataBackupSub: "Exportar, restaurar e sincronizar",
    savedCredentialsCount: "senhas salvas",
    privacySub: "Zero registros, dados locais e privacidade",
    shieldsSub: "Anúncios, rastreadores, cookies, permissões",
    home: "Início",
    discover: "Descobrir",
    player: "Player",
    audioPlayer: "Player de áudio",
    videoPlayer: "Player de vídeo",
    shortcuts: "Atalhos",
    categories: "Categorias",
    addCategory: "+ Adicionar categoria",
    bookmarks: "Favoritos",
    history: "Histórico",
    savedLinks: "Links salvos",
    searchEngines: "Mecanismos de busca",
    setDefaultBrowser: "Definir WebNa como padrão",
    searchWithOrType: "Pesquisar com {engine} ou digitar URL",
    askOrType: "Perguntar ao {engine} ou digitar URL",
    cancel: "Cancelar",
    save: "Salvar",
    add: "Adicionar",
    delete: "Excluir",
    copied: "Copiado",
    copy: "Copiar",
    back: "Voltar",
    close: "Fechar",
    displayAndSearchLanguage: "Idioma de exibição e busca",
    chooseLanguageSub: "Escolha o idioma para menus e conteúdo.",
    autoTranslateForeign: "Traduzir automaticamente páginas em outro idioma",
    autoTranslateSub: "Oferecer barra do Google Tradutor",
    supportedLanguages: "Idiomas suportados",
    themeAndDisplay: "Tema e exibição",
    appearanceSub: "Personalize cores, tamanho do texto e barra.",
    colorTheme: "Tema de cor",
    lightTheme: "Claro",
    darkTheme: "Escuro",
    systemTheme: "Sistema",
    textScaling: "Tamanho do texto",
    small: "Pequeno",
    normal: "Normal",
    large: "Grande",
    huge: "Enorme",
    addressBarPosition: "Posição da barra de endereço",
    topStandard: "Superior (Padrão)",
    bottomEasy: "Inferior (Fácil acesso)",
    highContrast: "AMOLED / Alto contraste",
    highContrastSub: "Preto puro para economizar bateria em telas OLED",
    androidNotificationPermission: "Permissão de notificações do Android",
    permissionRequiredSub: "Necessário para downloads e áudio em segundo plano",
    requestPermission: "Solicitar permissão",
    notificationCategories: "Categorias de notificações",
    downloadCompletedAlerts: "Alertas de download concluído",
    downloadCompletedSub: "Avisar quando arquivos terminarem de baixar",
    safeBrowsingAlerts: "Alertas de navegação segura",
    safeBrowsingSub: "Avisar sobre sites com riscos de segurança",
    newsTrendingUpdates: "Notícias e tendências",
    newsTrendingSub: "Destaques diários na aba Descobrir",
    mediaBackgroundPlayback: "Reprodução em segundo plano",
    mediaPlaybackSub: "Controles na barra de notificações",
    vibrationSoundAlerts: "Alertas com vibração e som",
    vibrationSub: "Vibrar em avisos de segurança",
    sendTestNotification: "Enviar notificação de teste",
    shieldActive: "Escudo WebNa ativo",
    shieldActiveSub: "Sua navegação está filtrada e protegida contra ameaças.",
    httpsOnlyMode: "Modo somente HTTPS",
    httpsOnlySub: "Atualizar conexões automaticamente para HTTPS",
    antiPhishing: "Anti-phishing e proteção",
    antiPhishingSub: "Verificar URLs contra fraudes e malware",
    sendDntHeader: "Enviar cabeçalho 'Não rastrear' (DNT)",
    sendDntSub: "Pedir aos sites para não rastrear atividade",
    dnsLeakMitigation: "Proteção contra vazamento de DNS",
    dnsLeakSub: "Proteger IP real ao usar VPN ou proxy",
    detailedShieldPermissions: "Escudo e permissões detalhadas",
    detailedShieldSub: "Configurar anúncios, pop-ups, cookies e câmera",
    backupAndSync: "Backup e sincronização",
    backupSub: "Nunca perca seus favoritos ou histórico.",
    cloudSync: "Sincronização na nuvem",
    syncNow: "Sincronizar agora",
    lastCloudSync: "Última sincronização:",
    exportToJson: "Exportar para arquivo JSON",
    exportSub: "Baixar backup completo dos seus dados.",
    downloadBackupFile: "Baixar arquivo (.json)",
    restoreFromBackup: "Restaurar do backup",
    restoreSub: "Carregar arquivo salvo anteriormente.",
    chooseBackupFile: "Escolher arquivo (.json)",
    savedPasswords: "Senhas salvas",
    passwordVaultSub: "Cofre local seguro com cópia em 1 toque",
    searchAccounts: "Buscar contas ou sites...",
    offerToSavePasswords: "Perguntar se deseja salvar senhas",
    autoFillWebForms: "Preenchimento automático",
    saveNewCredential: "Salvar nova credencial",
    websiteDomain: "Domínio ou URL",
    usernameEmail: "Usuário / E-mail",
    passwordLabel: "Senha",
    generateStrong: "Gerar senha forte",
    clearDataTitle: "Limpar dados de navegação",
    clearDataSub: "Selecione o que deseja remover deste dispositivo.",
    timeRange: "Período",
    lastHour: "Última hora",
    twentyFourHours: "24 horas",
    sevenDays: "7 dias",
    allTime: "Todo o período",
    browsingHistory: "Histórico de navegação",
    cookiesSiteData: "Cookies e dados do site",
    cachedImages: "Imagens e arquivos em cache",
    clearDataNow: "Limpar dados agora",
    privacyCommitment: "Compromisso de privacidade WebNa",
    iUnderstandAndAcknowledge: "Entendi e concordo",
  },
  ar: {
    settings: "الإعدادات",
    language: "اللغة",
    appearance: "المظهر",
    rateUs: "قيّمنا",
    shareApp: "مشاركة التطبيق",
    notifications: "الإشعارات",
    safetyHub: "مركز الأمان",
    dataBackup: "النسخ الاحتياطي",
    passwords: "كلمات المرور",
    privacyPolicy: "سياسة الخصوصية",
    blockingsAndShields: "الحظر والحماية",
    clearBrowsingData: "مسح بيانات التصفح",
    clearAllBrowsingData: "مسح جميع بيانات التصفح",
    aboutWebNa: "حول WebNa",
    active: "مفعل",
    rateSupportOnPlay: "ادعم WebNa على Google Play",
    ratedStars: "تم التقييم ★★★★★",
    shareWithFriends: "شارك مع الأصدقاء والعائلة",
    notificationsSub: "التنزيلات، الأخبار وتنبيهات الأمان",
    safetyHubSub: "تصفح آمن، HTTPS ودروع الحماية",
    dataBackupSub: "تصدير، استعادة والمزامنة السحابية",
    savedCredentialsCount: "كلمات مرور محفوظة",
    privacySub: "بلا سجلات، بيانات محلية وأذونات شفافة",
    shieldsSub: "إعلانات، متتبعات، ملفات تعريف الارتباط",
    home: "الرئيسية",
    discover: "اكتشف",
    player: "المشغل",
    audioPlayer: "مشغل الصوت",
    videoPlayer: "مشغل الفيديو",
    shortcuts: "الاختصارات",
    categories: "الفئات",
    addCategory: "+ إضافة فئة",
    bookmarks: "الإشارات المرجعية",
    history: "السجل",
    savedLinks: "الروابط المحفوظة",
    searchEngines: "محركات البحث",
    setDefaultBrowser: "تعيين WebNa كمتصفح افتراضي",
    searchWithOrType: "ابحث باستخدام {engine} أو اكتب عنوان URL",
    askOrType: "اسأل {engine} أو اكتب عنوان URL",
    cancel: "إلغاء",
    save: "حفظ",
    add: "إضافة",
    delete: "حذف",
    copied: "تم النسخ",
    copy: "نسخ",
    back: "رجوع",
    close: "إغلاق",
    displayAndSearchLanguage: "لغة العرض والبحث",
    chooseLanguageSub: "اختر اللغة المفضلة للقوائم والبحث والمحتوى.",
    autoTranslateForeign: "ترجمة المواقع الأجنبية تلقائيًا",
    autoTranslateSub: "عرض شريط ترجمة Google للمواقع الأجنبية",
    supportedLanguages: "اللغات المدعومة",
    themeAndDisplay: "المظهر والشاشة",
    appearanceSub: "خصص الألوان، حجم الخط وموقع شريط العنوان.",
    colorTheme: "سمة الألوان",
    lightTheme: "فاتح",
    darkTheme: "داكن",
    systemTheme: "النظام",
    textScaling: "حجم النص",
    small: "صغير",
    normal: "عادي",
    large: "كبير",
    huge: "ضخم",
    addressBarPosition: "موضع شريط العنوان",
    topStandard: "أعلى (قياسي)",
    bottomEasy: "أسفل (سهل الوصول)",
    highContrast: "AMOLED / تباين عالي",
    highContrastSub: "أسود نقي لتوفير طاقة البطارية على شاشات OLED",
    androidNotificationPermission: "إذن إشعارات أندرويد",
    permissionRequiredSub: "مطلوب لتنبيهات اكتمال التنزيل والصوت بالخلفية",
    requestPermission: "طلب الإذن",
    notificationCategories: "فئات الإشعارات",
    downloadCompletedAlerts: "تنبيهات اكتمال التنزيل",
    downloadCompletedSub: "إشعارك عند اكتمال تنزيل مقاطع الفيديو والملفات",
    safeBrowsingAlerts: "تنبيهات التصفح الآمن",
    safeBrowsingSub: "تحذيرك عند زيارة مواقع ذات مخاطر أمنية",
    newsTrendingUpdates: "الأخبار والمستجدات",
    newsTrendingSub: "ملخصات صباحية من خلاصة اكتشف",
    mediaBackgroundPlayback: "تشغيل الوسائط بالخلفية",
    mediaPlaybackSub: "إبقاء أزرار التحكم في لوحة إشعارات أندرويد",
    vibrationSoundAlerts: "تنبيهات الاهتزاز والصوت",
    vibrationSub: "الاهتزاز عند التحذيرات الأمنية العالية",
    sendTestNotification: "إرسال إشعار تجريبي",
    shieldActive: "درع WebNa نشط",
    shieldActiveSub: "جلسات التصفح مفلترة ومحمية ضد المواقع الضارة.",
    httpsOnlyMode: "وضع HTTPS فقط",
    httpsOnlySub: "ترقية جميع الاتصالات تلقائيًا إلى HTTPS المشفر",
    antiPhishing: "مكافحة التصيد والاحتيال",
    antiPhishingSub: "فحص الروابط ضد البرمجيات الخبيثة",
    sendDntHeader: "إرسال ترويسة 'عدم التتبع' (DNT)",
    sendDntSub: "مطالبة المواقع بعدم تسجيل نشاطك",
    dnsLeakMitigation: "حماية تسريب DNS و WebRTC",
    dnsLeakSub: "منع كشف عنوان IP الحقيقي على شبكات VPN",
    detailedShieldPermissions: "الحماية والأذونات التفصيلية",
    detailedShieldSub: "التحكم في الإعلانات، النوافذ المنبثقة، والكاميرا",
    backupAndSync: "النسخ الاحتياطي والمزامنة",
    backupSub: "لا تفقد إشاراتك المرجعية أو روابطك أو سجلك أبدًا.",
    cloudSync: "المزامنة السحابية",
    syncNow: "مزامنة الآن",
    lastCloudSync: "آخر مزامنة:",
    exportToJson: "تصدير إلى ملف JSON",
    exportSub: "تنزيل نسخة احتياطية كاملة من بياناتك.",
    downloadBackupFile: "تنزيل ملف النسخة الاحتياطية (.json)",
    restoreFromBackup: "استعادة من نسخة احتياطية",
    restoreSub: "تحميل ملف نسخة احتياطية محفوظ سابقًا.",
    chooseBackupFile: "اختر ملف (.json)",
    savedPasswords: "كلمات المرور المحفوظة",
    passwordVaultSub: "خزينة محلية آمنة مع نسخ وتعبئة سريعة",
    searchAccounts: "ابحث في الحسابات أو المواقع...",
    offerToSavePasswords: "عرض حفظ كلمات المرور",
    autoFillWebForms: "التعبئة التلقائية للنماذج",
    saveNewCredential: "حفظ كلمة مرور جديدة",
    websiteDomain: "نطاق الموقع أو الرابط",
    usernameEmail: "اسم المستخدم / البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    generateStrong: "توليد كلمة قوية",
    clearDataTitle: "مسح بيانات التصفح",
    clearDataSub: "حدد العناصر التي تريد إزالتها من هذا الجهاز.",
    timeRange: "النطاق الزمني",
    lastHour: "آخر ساعة",
    twentyFourHours: "24 ساعة",
    sevenDays: "7 أيام",
    allTime: "كل الوقت",
    browsingHistory: "سجل التصفح",
    cookiesSiteData: "ملفات تعريف الارتباط وبيانات المواقع",
    cachedImages: "الصور والملفات المخزنة مؤقتًا",
    clearDataNow: "مسح البيانات الآن",
    privacyCommitment: "التزام WebNa بالخصوصية",
    iUnderstandAndAcknowledge: "فهمت وأوافق",
  },
  zh: {
    settings: "设置",
    language: "语言",
    appearance: "外观",
    rateUs: "给我们评分",
    shareApp: "分享应用",
    notifications: "通知",
    safetyHub: "安全中心",
    dataBackup: "数据备份",
    passwords: "密码管理",
    privacyPolicy: "隐私政策",
    blockingsAndShields: "拦截与防护",
    clearBrowsingData: "清除浏览数据",
    clearAllBrowsingData: "清除全部浏览数据",
    aboutWebNa: "关于 WebNa",
    active: "已开启",
    rateSupportOnPlay: "在 Google Play 上支持 WebNa",
    ratedStars: "已评 ★★★★★",
    shareWithFriends: "与朋友和家人分享",
    notificationsSub: "下载、新闻与安全提醒",
    safetyHubSub: "安全浏览、HTTPS 与防护盾",
    dataBackupSub: "导出、恢复与云端同步",
    savedCredentialsCount: "条已保存凭据",
    privacySub: "零日志、本地存储与透明权限",
    shieldsSub: "广告、追踪器、Cookie、媒体权限",
    home: "首页",
    discover: "探索",
    player: "播放器",
    audioPlayer: "音频播放器",
    videoPlayer: "视频播放器",
    shortcuts: "快捷方式",
    categories: "分类",
    addCategory: "+ 添加分类",
    bookmarks: "书签",
    history: "历史记录",
    savedLinks: "已存链接",
    searchEngines: "搜索引擎",
    setDefaultBrowser: "将 WebNa 设为默认浏览器",
    searchWithOrType: "使用 {engine} 搜索或输入网址",
    askOrType: "向 {engine} 提问或输入网址",
    cancel: "取消",
    save: "保存",
    add: "添加",
    delete: "删除",
    copied: "已复制",
    copy: "复制",
    back: "返回",
    close: "关闭",
    displayAndSearchLanguage: "显示与搜索语言",
    chooseLanguageSub: "选择菜单、搜索及内容的优先语言。",
    autoTranslateForeign: "自动翻译外语网页",
    autoTranslateSub: "遇到外语时显示 Google 翻译栏",
    supportedLanguages: "支持的语言",
    themeAndDisplay: "主题与显示",
    appearanceSub: "自定义主题颜色、文字缩放及导航栏位置。",
    colorTheme: "颜色主题",
    lightTheme: "浅色",
    darkTheme: "深色",
    systemTheme: "跟随系统",
    textScaling: "字体大小",
    small: "小",
    normal: "标准",
    large: "大",
    huge: "超大",
    addressBarPosition: "地址栏位置",
    topStandard: "顶部 (标准)",
    bottomEasy: "底部 (便于单手触达)",
    highContrast: "AMOLED / 高对比度",
    highContrastSub: "纯黑色彩，省电并保护 OLED 屏幕",
    androidNotificationPermission: "Android 通知权限",
    permissionRequiredSub: "用于下载完成通知及后台音频控制",
    requestPermission: "请求权限",
    notificationCategories: "通知类别",
    downloadCompletedAlerts: "下载完成提醒",
    downloadCompletedSub: "当视频、音频或文件下载完成时提醒",
    safeBrowsingAlerts: "安全浏览提醒",
    safeBrowsingSub: "发现恶意欺诈或高风险网站时发出警告",
    newsTrendingUpdates: "新闻与热点推荐",
    newsTrendingSub: "每天早晨推送“探索”频道的精选摘要",
    mediaBackgroundPlayback: "媒体后台播放",
    mediaPlaybackSub: "在 Android 通知栏保留快捷播放控制面板",
    vibrationSoundAlerts: "振动与声音提醒",
    vibrationSub: "高优先级安全警告或完成时振动",
    sendTestNotification: "发送测试通知",
    shieldActive: "WebNa 防护盾已开启",
    shieldActiveSub: "您的浏览已开启恶意网址过滤与隐私防护。",
    httpsOnlyMode: "仅限 HTTPS 模式",
    httpsOnlySub: "自动将所有网页导航升级为加密的 HTTPS",
    antiPhishing: "防钓鱼与安全浏览",
    antiPhishingSub: "根据恶意威胁库实时检查访问网址",
    sendDntHeader: "发送“不追踪”(DNT) 请求头",
    sendDntSub: "要求网站不记录或转售您的浏览数据",
    dnsLeakMitigation: "DNS 与 WebRTC 防泄漏",
    dnsLeakSub: "在使用网络代理时保护真实 IP 地址",
    detailedShieldPermissions: "高级防护与网站权限",
    detailedShieldSub: "配置广告、弹窗、Cookie、相机与麦克风权限",
    backupAndSync: "数据备份与同步",
    backupSub: "书签、已存链接和历史记录永不丢失。",
    cloudSync: "云端同步",
    syncNow: "立即同步",
    lastCloudSync: "上次同步：",
    exportToJson: "导出为 JSON 文件",
    exportSub: "下载包含书签、链接与历史的完整备份文件。",
    downloadBackupFile: "下载备份文件 (.json)",
    restoreFromBackup: "从备份中恢复",
    restoreSub: "导入之前导出的 WebNa 备份文件。",
    chooseBackupFile: "选择备份文件 (.json)",
    savedPasswords: "已存密码",
    passwordVaultSub: "安全本地密码保险库，支持一键复制与自动填充",
    searchAccounts: "搜索账户或网站域名...",
    offerToSavePasswords: "提示保存网站密码",
    autoFillWebForms: "自动填充网页表单",
    saveNewCredential: "保存新密码凭据",
    websiteDomain: "网站域名或网址",
    usernameEmail: "用户名 / 邮箱",
    passwordLabel: "密码",
    generateStrong: "生成强密码",
    clearDataTitle: "清除浏览数据",
    clearDataSub: "选择要从此设备中彻底清除的数据项。",
    timeRange: "时间范围",
    lastHour: "过去 1 小时",
    twentyFourHours: "过去 24 小时",
    sevenDays: "过去 7 天",
    allTime: "全部时间",
    browsingHistory: "浏览历史记录",
    cookiesSiteData: "Cookie 及网站数据",
    cachedImages: "缓存的图片和文件",
    clearDataNow: "立即清除数据",
    privacyCommitment: "WebNa 隐私承诺",
    iUnderstandAndAcknowledge: "我已阅读并知晓",
  },
};
var listeners = /* @__PURE__ */ new Set();
function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("webna-language");
  return saved && TRANSLATIONS[saved] ? saved : "en";
}
function setAppLanguage(lang) {
  if (typeof window !== "undefined") {
    localStorage.setItem("webna-language", lang);
    window.dispatchEvent(
      new CustomEvent("webna-language-change", { detail: lang }),
    );
  }
  listeners.forEach((fn) => fn(lang));
}
function useAppLanguage() {
  const [lang, setLang] = (0, import_react.useState)(getStoredLanguage);
  (0, import_react.useEffect)(() => {
    const handleUpdate = (nextLang) => setLang(nextLang);
    listeners.add(handleUpdate);
    const onCustomEvent = (e) => {
      const custom = e;
      if (custom.detail) setLang(custom.detail);
    };
    window.addEventListener("webna-language-change", onCustomEvent);
    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener("webna-language-change", onCustomEvent);
    };
  }, []);
  const t = (key, fallback) => {
    return (
      (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] ||
      TRANSLATIONS.en[key] ||
      fallback ||
      key
    );
  };
  return {
    lang,
    setLanguage: setAppLanguage,
    t,
  };
}
function BottomTabs({ active, onChange, tabCount = 1 }) {
  const { t, lang } = useAppLanguage();
  const items = [
    {
      id: "home",
      label: t("home"),
      Icon: House,
    },
    {
      id: "discover",
      label: t("discover"),
      Icon: Compass,
    },
    {
      id: "player",
      label: t("player"),
      Icon: CirclePlay,
    },
    {
      id: "tabs",
      label: lang === "es" ? "Pestañas" : "Tabs",
      Icon: Layers,
      badge: tabCount,
    },
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    className:
      "fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background py-2 shadow-lg",
    children: items.map(({ id, label, Icon, badge }) => {
      const on = active === id;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          onClick: () => onChange(id),
          className: `relative flex flex-col items-center justify-center gap-1 px-3 py-1 text-xs font-medium ${on ? "text-primary" : "text-muted-foreground"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                  className: `size-6 ${on ? "stroke-[2.5]" : "stroke-2"}`,
                }),
                badge !== void 0 &&
                  badge > 0 &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-brand-foreground",
                    children: badge,
                  }),
              ],
            }),
            label,
          ],
        },
        id,
      );
    }),
  });
}
function SearchBar({
  value = "",
  onSubmit,
  onLens,
  engineName = "Google",
  engineDomain = "google.com",
  onEngineClick,
}) {
  const { t } = useAppLanguage();
  const [q, setQ] = (0, import_react.useState)(value);
  const [imgFailed, setImgFailed] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => setQ(value), [value]);
  (0, import_react.useEffect)(() => {
    setImgFailed(false);
  }, [engineDomain, engineName]);
  const [listening, setListening] = (0, import_react.useState)(false);
  const voice = () => {
    const win = window;
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
      r.onresult = (e) => {
        setListening(false);
        const t = e.results?.[0]?.[0]?.transcript;
        if (t) {
          setQ(t);
          onSubmit(t);
        }
      };
      r.onerror = (e) => {
        setListening(false);
        if (e.error === "not-allowed")
          alert(
            "Microphone permission was denied. Please allow microphone access in your browser settings.",
          );
        else console.warn("Speech recognition error:", e.error);
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
  const placeholder = [
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
  ].includes(engineName)
    ? t("askOrType").replace("{engine}", engineName)
    : t("searchWithOrType").replace("{engine}", engineName);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
    onSubmit: (e) => {
      e.preventDefault();
      if (q.trim()) onSubmit(q.trim());
    },
    className:
      "flex items-center gap-2 rounded-full bg-card px-3.5 py-2 shadow-sm border border-border/50",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        onClick: onEngineClick,
        className:
          "flex items-center justify-center -ml-1 p-1 rounded-full hover:bg-muted/70 active:scale-95 transition-all shrink-0",
        title: `Current engine: ${engineName}. Tap to change.`,
        "aria-label": `Change search engine, currently ${engineName}`,
        children:
          engineName === "Google"
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-lg font-bold leading-none px-0.5",
                style: {
                  background: "var(--gradient-google)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                },
                children: "G",
              })
            : !imgFailed
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: `https://www.google.com/s2/favicons?domain=${engineDomain}&sz=64`,
                  alt: engineName,
                  onError: () => setImgFailed(true),
                  className: "size-5 rounded-full object-contain",
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "size-5 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center",
                  children: engineName.charAt(0),
                }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        value: q,
        onChange: (e) => setQ(e.target.value),
        onFocus: (e) => e.target.select(),
        placeholder,
        className:
          "min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        onClick: voice,
        "aria-label": "Voice search",
        title: listening ? "Listening... Speak now" : "Search with voice",
        className: `p-1 rounded-full transition-colors ${listening ? "bg-brand/20 animate-pulse text-brand" : "text-muted-foreground hover:text-foreground"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
          className: `size-4.5 ${listening ? "text-brand" : "text-muted-foreground hover:text-foreground"}`,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        onClick: onLens,
        "aria-label": "Google Lens",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, {
          className: "size-4.5 text-muted-foreground hover:text-foreground",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "submit",
        "aria-label": "Search",
        className: "p-1",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
          className: "size-4.5 text-brand hover:scale-105 transition-transform",
        }),
      }),
    ],
  });
}
/**
 * WebNa Safety & Privacy Utilities
 * Handles link sanitation, fingerprint masking signals, and cookie policy.
 */
var TRACKING_PARAM_PREFIXES = [
  "utm_",
  "fbclid",
  "gclid",
  "gclsrc",
  "dclid",
  "msclkid",
  "mc_eid",
  "zanpid",
  "igshid",
  "_hsenc",
  "_hsmi",
  "yclid",
  "_openstat",
  "wickedid",
  "twclid",
  "ttclid",
  "si",
  "ref_src",
  "fbadid",
];
/**
 * Sanitizes URLs by stripping intrusive ad tracking query params
 */
function stripTrackingParams(rawUrl) {
  if (!rawUrl) return "";
  try {
    const url = new URL(rawUrl);
    const toDelete = [];
    url.searchParams.forEach((_, key) => {
      const lower = key.toLowerCase();
      if (
        TRACKING_PARAM_PREFIXES.some(
          (prefix) => lower === prefix || lower.startsWith(prefix),
        )
      )
        toDelete.push(key);
    });
    if (toDelete.length > 0) {
      toDelete.forEach((k) => url.searchParams.delete(k));
      return url.toString();
    }
    return rawUrl;
  } catch {
    return rawUrl;
  }
}
function isCleanLinksEnabled() {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("webna-clean-links") !== "false";
}
function resolveIframeSrc(rawUrl) {
  if (!rawUrl) return "";
  try {
    const parsed = new URL(rawUrl);
    const host = parsed.hostname.toLowerCase();
    if (host.includes("google.") && !parsed.searchParams.has("igu")) {
      parsed.searchParams.set("igu", "1");
      return parsed.toString();
    }
    if (
      host.includes("google.") ||
      host.includes("wikipedia.org") ||
      host.includes("archive.org")
    )
      return rawUrl;
    if (host.includes("openstreetmap.org")) {
      if (
        parsed.pathname === "/" ||
        !parsed.pathname.includes("export/embed.html")
      )
        return "https://www.openstreetmap.org/export/embed.html";
      return rawUrl;
    }
    return `/api/proxy?url=${encodeURIComponent(rawUrl)}`;
  } catch {
    return rawUrl;
  }
}
function getDisplayUrl(u) {
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
function BrowserView({
  stack,
  idx,
  onNav,
  onMove,
  onHome,
  isSaved,
  onToggleSave,
  onOpenPanel,
  onOpenPlayer,
}) {
  const rawUrl = stack[idx] ?? "";
  const [reload, setReload] = (0, import_react.useState)(0);
  const [menu, setMenu] = (0, import_react.useState)(false);
  const [addr, setAddr] = (0, import_react.useState)(null);
  const btn = "p-2 rounded-full disabled:opacity-30";
  const displayUrl = getDisplayUrl(rawUrl);
  const iframeSrc = resolveIframeSrc(rawUrl);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex h-full flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
        onSubmit: (e) => {
          e.preventDefault();
          if (addr) onNav(addr);
          setAddr(null);
        },
        className:
          "mx-3 mt-3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm border border-border/40",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            value: addr ?? displayUrl,
            onChange: (e) => setAddr(e.target.value),
            onFocus: (e) => e.target.select(),
            className: "min-w-0 flex-1 bg-transparent text-sm outline-none",
            inputMode: "url",
            placeholder: "Search or enter URL",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: onToggleSave,
            "aria-label": isSaved
              ? "Remove from bookmarks"
              : "Add to bookmarks",
            title: isSaved
              ? "Bookmarked (tap to remove)"
              : "Bookmark this page",
            className: "p-1 rounded-full transition-transform active:scale-90",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
              className: `size-4.5 transition-colors ${isSaved ? "fill-amber-400 text-amber-500 drop-shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: () => setReload(reload + 1),
            "aria-label": "Reload",
            title: "Reload",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
              className: "size-4 text-muted-foreground hover:text-foreground",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: () => {
              window.open(displayUrl, "_blank");
            },
            "aria-label": "Open in external browser",
            title: "Open in new window",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ExternalLink,
              {
                className: "size-4 text-muted-foreground hover:text-foreground",
              },
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "mx-3 mt-1.5 flex items-center justify-between rounded-xl bg-muted/60 px-3 py-1 text-[11px] text-muted-foreground border border-border/30",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "truncate pr-2 font-medium",
            children: (() => {
              try {
                return new URL(displayUrl).hostname.replace("www.", "");
              } catch {
                return displayUrl || "Web page";
              }
            })(),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            type: "button",
            onClick: () => {
              window.open(displayUrl, "_blank");
            },
            className:
              "flex items-center gap-1 shrink-0 font-semibold text-brand hover:underline",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "Open Full Site",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                className: "size-3",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "iframe",
        {
          src: iframeSrc,
          title: "Web page",
          className: "mt-2 w-full flex-1 border-0 bg-card",
          allow:
            "fullscreen; clipboard-read; clipboard-write; encrypted-media; picture-in-picture; web-share; geolocation; microphone; camera",
          sandbox:
            "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads",
        },
        iframeSrc + reload,
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "mb-24 flex items-center justify-around border-t bg-card py-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: btn,
            disabled: idx === 0,
            onClick: () => onMove(-1),
            "aria-label": "Back",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
              className: "size-5",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: btn,
            disabled: idx >= stack.length - 1,
            onClick: () => onMove(1),
            "aria-label": "Forward",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
              className: "size-5",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: btn,
            onClick: onHome,
            "aria-label": "Home",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
              className: "size-5",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: btn,
            onClick: () => setMenu(true),
            "aria-label": "Menu",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
              className: "size-5",
            }),
          }),
        ],
      }),
      menu &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs",
          onClick: () => setMenu(false),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "w-full rounded-t-3xl bg-card p-4 pb-8 shadow-2xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "mb-2 flex items-center justify-between border-b pb-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-sm font-bold text-foreground",
                    children: "Menu",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setMenu(false),
                    "aria-label": "Close menu",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              [
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
                  I: House,
                  f: () => onOpenPanel("account"),
                },
                {
                  l: "Share clean link",
                  I: Share2,
                  f: async () => {
                    let shareUrl = displayUrl;
                    if (isCleanLinksEnabled())
                      shareUrl = stripTrackingParams(shareUrl);
                    if (navigator.share)
                      try {
                        await navigator.share({
                          title: "WebNa Browser",
                          url: shareUrl,
                        });
                        return;
                      } catch {}
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
              ].map(({ l, I, f }) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    onClick: () => {
                      f();
                      setMenu(false);
                    },
                    className:
                      "flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {
                        className: "size-5 text-brand",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: l,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            ],
          }),
        }),
    ],
  });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId, { origin: "server" }))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
var getNews = createServerFn({ method: "GET" })
  .inputValidator((d) => d)
  .handler(
    createSsrRpc(
      "bfbec92a60869ea1e09c7f95f0839b6952da957ddfb9e9d7e780b3072625bd4f",
    ),
  );
var getFootballNews = createServerFn({ method: "GET" }).handler(
  createSsrRpc(
    "0ec82f665f21f8137a72aa7c79c6a4b115662d17f0e8fd9fe00bc51789fe9299",
  ),
);
var resolveNews = createServerFn({ method: "POST" })
  .inputValidator((d) => d)
  .handler(
    createSsrRpc(
      "a3071d49fef0c4e200c04884cdb0bdc49a01a98fd796e18ba9329ca56e4dd094",
    ),
  );
var getArticle = createServerFn({ method: "POST" })
  .inputValidator((d) => d)
  .handler(
    createSsrRpc(
      "2d9ab34da3812c140e34a8ff8418d3b07aa14e8e0c4153bb9620ccb96a43fc49",
    ),
  );
var getTikTokFeed = createServerFn({ method: "GET" })
  .inputValidator((d) => d ?? {})
  .handler(
    createSsrRpc(
      "12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c",
    ),
  );
var CHIPS = [
  {
    l: "For You",
    t: "",
  },
  {
    l: "World",
    t: "WORLD",
  },
  {
    l: "Technology",
    t: "TECHNOLOGY",
  },
  {
    l: "Sports",
    t: "SPORTS",
  },
  {
    l: "Business",
    t: "BUSINESS",
  },
  {
    l: "Science",
    t: "SCIENCE",
  },
  {
    l: "Entertainment",
    t: "ENTERTAINMENT",
  },
];
function feedUrl(topic) {
  return (
    {
      "": "https://feeds.bbci.co.uk/news/rss.xml",
      WORLD: "https://feeds.bbci.co.uk/news/world/rss.xml",
      TECHNOLOGY: "https://feeds.bbci.co.uk/news/technology/rss.xml",
      SPORTS: "https://feeds.bbci.co.uk/sport/rss.xml",
      BUSINESS: "https://feeds.bbci.co.uk/news/business/rss.xml",
      SCIENCE: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
      ENTERTAINMENT:
        "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    }[topic] || "https://feeds.bbci.co.uk/news/rss.xml"
  );
}
function ago(d) {
  const s = (Date.now() - new Date(d).getTime()) / 1e3;
  if (!isFinite(s)) return "";
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}
function Discover({ onOpen, onOpenWeb, onPlayVideo }) {
  const [topic, setTopic] = (0, import_react.useState)("");
  const [viewMode, setViewMode] = (0, import_react.useState)("news");
  const [items, setItems] = (0, import_react.useState)(null);
  const [shown, setShown] = (0, import_react.useState)(8);
  const [footballItems, setFootballItems] = (0, import_react.useState)(null);
  const [footballLoading, setFootballLoading] = (0, import_react.useState)(
    false,
  );
  const [footballError, setFootballError] = (0, import_react.useState)(false);
  const [footballShown, setFootballShown] = (0, import_react.useState)(8);
  const [tiktokVideos, setTikTokVideos] = (0, import_react.useState)(null);
  const [tiktokLoading, setTiktokLoading] = (0, import_react.useState)(false);
  const [tiktokError, setTiktokError] = (0, import_react.useState)(false);
  const [pull, setPull] = (0, import_react.useState)(0);
  const startY = (0, import_react.useRef)(null);
  const sentinel = (0, import_react.useRef)(null);
  const key = "webna-feed-v4-" + topic;
  const loadNews = (0, import_react.useCallback)(
    async (force = false) => {
      if (viewMode !== "news") return;
      const cached = localStorage.getItem(key);
      if (cached && !force)
        try {
          const parsed = JSON.parse(cached);
          const seen = /* @__PURE__ */ new Set();
          const unique = parsed.filter((it) => {
            const u = it.link || it.title;
            if (!u || seen.has(u)) return false;
            seen.add(u);
            return true;
          });
          setItems(unique);
        } catch {
          setItems(null);
        }
      else setItems(null);
      try {
        const list = await getNews({ data: { rss: feedUrl(topic) } });
        if (!list.length) throw new Error("empty");
        const seen = /* @__PURE__ */ new Set();
        const unique = list.filter((it) => {
          const u = it.link || it.title;
          if (!u || seen.has(u)) return false;
          seen.add(u);
          return true;
        });
        setItems(unique);
        setShown(8);
        localStorage.setItem(key, JSON.stringify(unique));
      } catch {
        if (!cached) setItems([]);
      }
    },
    [key, topic, viewMode],
  );
  const fetchTikTokFeedData = (0, import_react.useCallback)(async () => {
    setTiktokLoading(true);
    setTiktokError(false);
    try {
      const videos = await getTikTokFeed({ data: { count: 20 } });
      if (videos && videos.length > 0) {
        const seen = /* @__PURE__ */ new Set();
        const unique = videos.filter((v) => {
          if (!v?.video_id || seen.has(v.video_id)) return false;
          seen.add(v.video_id);
          return true;
        });
        setTikTokVideos(unique);
        try {
          localStorage.setItem("webna-tiktok-cached", JSON.stringify(unique));
        } catch {}
      } else {
        const local = localStorage.getItem("webna-tiktok-cached");
        if (local)
          try {
            const parsed = JSON.parse(local);
            const seen = /* @__PURE__ */ new Set();
            const unique = parsed.filter((v) => {
              if (!v?.video_id || seen.has(v.video_id)) return false;
              seen.add(v.video_id);
              return true;
            });
            setTikTokVideos(unique);
          } catch {
            setTiktokError(true);
          }
        else setTiktokError(true);
      }
    } catch (err) {
      console.warn("Failed to fetch live TikTok trends, checking cache:", err);
      const local = localStorage.getItem("webna-tiktok-cached");
      if (local)
        try {
          const parsed = JSON.parse(local);
          const seen = /* @__PURE__ */ new Set();
          const unique = parsed.filter((v) => {
            if (!v?.video_id || seen.has(v.video_id)) return false;
            seen.add(v.video_id);
            return true;
          });
          setTikTokVideos(unique);
        } catch {
          setTiktokError(true);
        }
      else setTiktokError(true);
    } finally {
      setTiktokLoading(false);
    }
  }, []);
  const loadFootball = (0, import_react.useCallback)(async (force = false) => {
    const cached = localStorage.getItem("webna-football-news-cache");
    if (cached && !force)
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0)
          setFootballItems(parsed);
      } catch {}
    setFootballLoading(true);
    setFootballError(false);
    try {
      const list = await getFootballNews();
      if (!list || list.length === 0)
        throw new Error("No football news items returned");
      setFootballItems(list);
      setFootballShown(8);
      try {
        localStorage.setItem("webna-football-news-cache", JSON.stringify(list));
      } catch {}
    } catch (err) {
      console.error("Error loading football news:", err);
      const cachedFallback = localStorage.getItem("webna-football-news-cache");
      if (cachedFallback)
        try {
          setFootballItems(JSON.parse(cachedFallback));
        } catch {
          setFootballError(true);
        }
      else setFootballError(true);
    } finally {
      setFootballLoading(false);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (viewMode === "news") loadNews();
    else if (viewMode === "tiktok") {
      const cached = localStorage.getItem("webna-tiktok-cached");
      if (cached)
        try {
          const parsed = JSON.parse(cached);
          const seen = /* @__PURE__ */ new Set();
          const unique = parsed.filter((v) => {
            if (!v?.video_id || seen.has(v.video_id)) return false;
            seen.add(v.video_id);
            return true;
          });
          setTikTokVideos(unique);
        } catch {}
      fetchTikTokFeedData();
    } else if (viewMode === "football") loadFootball();
  }, [viewMode, loadNews, fetchTikTokFeedData, loadFootball]);
  (0, import_react.useEffect)(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0]?.isIntersecting) {
        if (viewMode === "football") setFootballShown((s) => s + 6);
        else if (viewMode === "news") setShown((s) => s + 6);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [items, footballItems, viewMode]);
  const handleVideoClick = (video) => {
    if (onPlayVideo)
      onPlayVideo({
        id: video.video_id,
        title: video.title,
        videoUrl: video.videoUrl || video.play,
        thumbnailUrl: video.image || video.cover,
        author: video.author_name || video.author_id,
      });
    else onOpen(video.videoUrl || video.play);
  };
  const handleOpenFootballArticle = (url) => {
    if (onOpenWeb) onOpenWeb(url);
    else onOpen(url);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    onTouchStart: (e) => {
      if (
        window.scrollY <= 0 &&
        (e.currentTarget.parentElement?.scrollTop ?? 0) <= 0
      )
        startY.current = e.touches[0].clientY;
    },
    onTouchMove: (e) => {
      if (startY.current !== null)
        setPull(
          Math.min(80, Math.max(0, e.touches[0].clientY - startY.current)),
        );
    },
    onTouchEnd: () => {
      if (pull > 60) {
        if (viewMode === "news") loadNews(true);
        else if (viewMode === "tiktok") fetchTikTokFeedData();
        else if (viewMode === "football") loadFootball(true);
      }
      setPull(0);
      startY.current = null;
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        style: { height: pull },
        className:
          "flex items-center justify-center text-xs text-muted-foreground",
        children:
          pull > 60 ? "Release to refresh" : pull > 0 ? "Pull to refresh" : "",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "mb-4 flex gap-1 rounded-xl bg-card p-1 shadow-xs border border-border/50",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: () => setViewMode("news"),
            className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold transition-all ${viewMode === "news" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
            children: "News",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            onClick: () => setViewMode("tiktok"),
            className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${viewMode === "tiktok" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
                className: "size-3.5 sm:size-4",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "TikTok Trends",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: () => setViewMode("football"),
            className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${viewMode === "football" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              children: "⚽ Football",
            }),
          }),
        ],
      }),
      viewMode === "football"
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              footballLoading &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-3 mb-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "w-full bg-muted/70 rounded-full h-1.5 overflow-hidden",
                      role: "progressbar",
                      "aria-label": "Loading football news",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "div",
                        {
                          className:
                            "bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full",
                        },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-center text-xs text-muted-foreground font-medium",
                      children:
                        "Fetching latest football headlines and match updates...",
                    }),
                    Array.from({ length: 3 }).map((_, i) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "aspect-video animate-pulse bg-muted",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "space-y-2 p-3.5",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-4 animate-pulse rounded bg-muted",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-3 w-4/5 animate-pulse rounded bg-muted",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-3 w-1/3 animate-pulse rounded bg-muted",
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                        i,
                      ),
                    ),
                  ],
                }),
              !footballLoading &&
                footballError &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        TriangleAlert,
                        { className: "size-6" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "text-base font-semibold text-foreground mb-1",
                      children: "Failed to load football news",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs text-muted-foreground mb-4 max-w-xs mx-auto",
                      children:
                        "Unable to retrieve the soccer feeds right now. Please check your connection and try again.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => loadFootball(true),
                      className:
                        "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Retry",
                        }),
                      ],
                    }),
                  ],
                }),
              !footballLoading &&
                !footballError &&
                footballItems &&
                footballItems.length === 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl border border-border/60 bg-card p-6 text-center my-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-sm text-muted-foreground mb-3",
                      children: "No football news available right now.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => loadFootball(true),
                      className:
                        "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Refresh",
                        }),
                      ],
                    }),
                  ],
                }),
              footballItems?.slice(0, footballShown).map((it, idx) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    onClick: () => handleOpenFootballArticle(it.link),
                    className:
                      "group mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all active:scale-[0.99]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "relative aspect-video w-full overflow-hidden bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                            src:
                              it.thumbnail ||
                              "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
                            alt: it.title,
                            className:
                              "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                            loading: "lazy",
                            onError: (e) => {
                              e.target.src = FOOTBALL_PLACEHOLDER;
                            },
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "absolute top-2.5 left-2.5 rounded-md bg-black/65 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs flex items-center gap-1 shadow-xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                { children: "⚽" },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                { children: it.source || "Football" },
                              ),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "p-3.5",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className:
                              "line-clamp-2 text-sm font-bold text-foreground leading-snug",
                            children: it.title,
                          }),
                          it.description &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-1.5 line-clamp-2 text-xs text-muted-foreground/90 leading-relaxed",
                              children: it.description,
                            }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "mt-2.5 flex items-center justify-between text-xs text-muted-foreground",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "font-medium text-foreground/80",
                                        children: it.source,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: "•" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: ago(it.pubDate) },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-brand font-semibold text-[11px] group-hover:underline",
                                  children: "Read article",
                                },
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  `${it.link || it.title}-${idx}`,
                ),
              ),
              footballItems &&
                footballShown < footballItems.length &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  ref: sentinel,
                  className: "h-10",
                }),
            ],
          })
        : viewMode === "tiktok"
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                tiktokLoading &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-3 mb-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "w-full bg-muted/70 rounded-full h-1.5 overflow-hidden",
                        role: "progressbar",
                        "aria-label": "Loading TikTok trends",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "div",
                          {
                            className:
                              "bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "text-center text-xs text-muted-foreground font-medium",
                        children: "Fetching trending videos from feed...",
                      }),
                      Array.from({ length: 3 }).map((_, i) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className:
                              "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "aspect-video animate-pulse bg-muted flex items-center justify-center",
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsx)(Play, {
                                    className:
                                      "size-10 text-muted-foreground/30",
                                  }),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-2 p-3",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "h-4 animate-pulse rounded bg-muted",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "h-3.5 w-1/2 animate-pulse rounded bg-muted",
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          },
                          i,
                        ),
                      ),
                    ],
                  }),
                !tiktokLoading &&
                  tiktokError &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          TriangleAlert,
                          { className: "size-6" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className:
                          "text-base font-semibold text-foreground mb-1",
                        children: "Failed to load TikTok trends",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "text-xs text-muted-foreground mb-4 max-w-xs mx-auto",
                        children:
                          "Unable to retrieve the trending feed right now. Please check your connection and try again.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: fetchTikTokFeedData,
                        className:
                          "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            RotateCw,
                            { className: "size-3.5" },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Retry",
                          }),
                        ],
                      }),
                    ],
                  }),
                !tiktokLoading &&
                  !tiktokError &&
                  tiktokVideos &&
                  tiktokVideos.length === 0 &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "rounded-2xl border border-border/60 bg-card p-6 text-center my-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground mb-3",
                        children: "No trending videos found.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: fetchTikTokFeedData,
                        className:
                          "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            RotateCw,
                            { className: "size-3.5" },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Refresh",
                          }),
                        ],
                      }),
                    ],
                  }),
                !tiktokLoading &&
                  !tiktokError &&
                  tiktokVideos?.map((v, idx) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        onClick: () => handleVideoClick(v),
                        className:
                          "group mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all active:scale-[0.99]",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "relative aspect-video w-full overflow-hidden bg-black/10",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "img",
                                {
                                  src: v.image || v.cover,
                                  alt: v.title,
                                  className:
                                    "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                                  loading: "lazy",
                                  onError: (e) => {
                                    e.target.src =
                                      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80";
                                  },
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors",
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsx)("div", {
                                    className:
                                      "flex size-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md border border-white/20 group-hover:scale-110 transition-transform",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)(Play, {
                                      className:
                                        "size-5 fill-white ml-0.5 text-white",
                                    }),
                                  }),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs",
                                  children:
                                    v.play_count > 0
                                      ? `${v.play_count.toLocaleString()} views`
                                      : "Trending",
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "p-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "line-clamp-2 text-sm font-bold text-foreground",
                                children: v.title,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "mt-2 flex items-center justify-between text-xs text-muted-foreground",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "truncate font-medium text-muted-foreground",
                                        children: v.subtitle,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "shrink-0 text-brand font-semibold hover:underline",
                                        children: "Play in Player",
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                        ],
                      },
                      `${v.video_id}-${idx}`,
                    ),
                  ),
              ],
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_jsx_runtime.Fragment,
              {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4",
                    children: CHIPS.map((c) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          onClick: () => setTopic(c.t),
                          className: `shrink-0 rounded-full px-4 py-1.5 text-sm ${topic === c.t ? "bg-brand text-brand-foreground font-semibold shadow-xs" : "bg-card shadow-xs border border-border/40 text-muted-foreground"}`,
                          children: c.l,
                        },
                        c.l,
                      ),
                    ),
                  }),
                  !items &&
                    Array.from({ length: 3 }).map((_, i) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "aspect-video animate-pulse bg-muted",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "space-y-2 p-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-4 animate-pulse rounded bg-muted",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-4 w-2/3 animate-pulse rounded bg-muted",
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                        i,
                      ),
                    ),
                  items?.length === 0 &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "py-10 text-center text-sm text-muted-foreground",
                      children: "Couldn't load news. Pull down to retry.",
                    }),
                  items?.slice(0, shown).map((it, idx) => {
                    const img = it.thumbnail;
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        onClick: () => onOpen(it.link),
                        className:
                          "mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/40 hover:border-brand/40 transition-all",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsImg, {
                            src: img,
                            fallback: fallbackImage(topic),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "p-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "line-clamp-2 text-sm font-bold text-foreground",
                                children: it.title,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "mt-2 flex items-center gap-2 text-xs text-muted-foreground",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "img",
                                      {
                                        src: `https://www.google.com/s2/favicons?domain=${(() => {
                                          try {
                                            return new URL(it.link).hostname;
                                          } catch {
                                            return "bbc.co.uk";
                                          }
                                        })()}&sz=32`,
                                        alt: "",
                                        className: "size-4 rounded-full",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className: "truncate",
                                        children: it.source,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className: "ml-auto shrink-0",
                                        children: ago(it.pubDate),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                        ],
                      },
                      `${it.link || it.title}-${idx}`,
                    );
                  }),
                  items &&
                    shown < items.length &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      ref: sentinel,
                      className: "h-10",
                    }),
                ],
              },
            ),
    ],
  });
}
function NewsImg({ src, fallback }) {
  const [err, setErr] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    setErr(0);
  }, [src]);
  let currentSrc = fallback;
  if (validImage(src))
    if (err === 0) currentSrc = src;
    else if (err === 1 && src.includes("/standard/800/"))
      currentSrc = src.replace("/standard/800/", "/standard/240/");
    else if (err < 3) currentSrc = fallback;
    else currentSrc = DEFAULT_IMAGE;
  else currentSrc = err >= 1 ? DEFAULT_IMAGE : fallback;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
    src: currentSrc,
    alt: "",
    referrerPolicy: "no-referrer",
    onError: () => setErr((e) => e + 1),
    className: "aspect-video w-full bg-muted object-cover",
    loading: "lazy",
  });
}
function ArticleView({ link, onBack, onOpenWeb, isSaved, onToggleSave }) {
  const [a, setA] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    let live = true;
    setA(null);
    (async () => {
      const art = await getArticle({
        data: { url: await resolveNews({ data: { url: link } }) },
      });
      if (live) setA(art);
    })().catch(
      () =>
        live &&
        setA({
          url: link,
          site: "",
          title: "",
          paragraphs: [],
        }),
    );
    return () => {
      live = false;
    };
  }, [link]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "fixed inset-0 z-30 overflow-y-auto bg-background pb-28",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "sticky top-0 z-10 flex items-center gap-2 bg-background/95 px-3 py-3 backdrop-blur",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: onBack,
            className: "rounded-full bg-card p-2 shadow-sm",
            "aria-label": "Back",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
              className: "size-5",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "min-w-0 flex-1 truncate text-sm text-muted-foreground",
            children: a?.site || "Loading…",
          }),
          a &&
            onToggleSave &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              onClick: () =>
                onToggleSave(a.url, a.title || a.site || "Article"),
              className:
                "flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm hover:bg-muted",
              title: isSaved ? "Saved to links" : "Save to saved links",
              "aria-label": "Save link",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
                  className: `size-4 ${isSaved ? "fill-brand text-brand" : "text-muted-foreground"}`,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: isSaved ? "text-brand font-semibold" : "",
                  children: isSaved ? "Saved" : "Save",
                }),
              ],
            }),
          a &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              onClick: () => onOpenWeb(a.url),
              className:
                "flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
                  className: "size-4",
                }),
                "Web",
              ],
            }),
          a &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: a.url,
              target: "_blank",
              rel: "noreferrer",
              className: "rounded-full bg-card p-2 shadow-sm",
              "aria-label": "Open externally",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                ExternalLink,
                { className: "size-4" },
              ),
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
        className: "mx-auto max-w-xl px-4",
        children: !a
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "aspect-video animate-pulse rounded-2xl bg-muted",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "h-6 animate-pulse rounded bg-muted",
                }),
                Array.from({ length: 6 }).map((_, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    { className: "h-4 animate-pulse rounded bg-muted" },
                    i,
                  ),
                ),
              ],
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_jsx_runtime.Fragment,
              {
                children: [
                  a.image &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: a.image,
                      alt: "",
                      referrerPolicy: "no-referrer",
                      className:
                        "mb-4 aspect-video w-full rounded-2xl object-cover",
                    }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "mb-4 text-2xl font-bold leading-tight",
                    children: a.title,
                  }),
                  a.paragraphs.length
                    ? a.paragraphs.map((p, i) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "p",
                          {
                            className: "mb-4 leading-relaxed",
                            children: p,
                          },
                          i,
                        ),
                      )
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "rounded-2xl bg-card p-4 text-sm",
                        children: [
                          "This article can't be shown in reader mode.",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "button",
                            {
                              onClick: () => onOpenWeb(a.url),
                              className: "mt-3 block font-medium text-brand",
                              children: "Open web page",
                            },
                          ),
                        ],
                      }),
                ],
              },
            ),
      }),
    ],
  });
}
var getTrendingTracks = createServerFn({ method: "GET" }).handler(
  createSsrRpc(
    "97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6",
  ),
);
var searchMusicTracks = createServerFn({ method: "GET" })
  .validator((term) => term)
  .handler(
    createSsrRpc(
      "d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4",
    ),
  );
var TRENDING_VIDEOS = [
  {
    id: "flower-1",
    title: "Blooming Flower - Nature Macro Time-Lapse",
    channel: "Nature & Botanical Wonders",
    videoUrl: "/videos/flower.mp4",
    fallbackUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    duration: "00:05",
    durationSeconds: 5,
    quality: "1080p HD",
  },
  {
    id: "bbb-2",
    title: "Big Buck Bunny - Animated Short Film",
    channel: "Blender Animation Studio",
    videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    fallbackUrl: "/videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    duration: "00:33",
    durationSeconds: 33,
    quality: "720p HD",
  },
  {
    id: "sintel-3",
    title: "Sintel - Fantasy Quest Film",
    channel: "Durian Open Movie Project",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    fallbackUrl: "/videos/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    duration: "00:52",
    durationSeconds: 52,
    quality: "720p HD",
  },
  {
    id: "movie-4",
    title: "Cinematic Motion Odyssey",
    channel: "World Cinema Arts",
    videoUrl: "/videos/movie_300.mp4",
    fallbackUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    duration: "00:12",
    durationSeconds: 12,
    quality: "1080p HD",
  },
  {
    id: "bbb-webm-5",
    title: "Big Buck Bunny - WebM 480p Edition",
    channel: "Blender Foundation",
    videoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm",
    fallbackUrl: "/videos/flower.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    duration: "09:56",
    durationSeconds: 596,
    quality: "480p WebM",
  },
  {
    id: "sintel-webm-6",
    title: "Sintel - 4K Remaster Showcase",
    channel: "Open Movie Project",
    videoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.480p.vp9.webm",
    fallbackUrl: "/videos/movie_300.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    duration: "14:48",
    durationSeconds: 888,
    quality: "480p WebM",
  },
];
async function getTrendingVideos() {
  return TRENDING_VIDEOS;
}
function isTrendingTrack(item) {
  return !!item && !("size" in item) && "title" in item;
}
function getAudioItemName(item) {
  if (!item) return "";
  if (isTrendingTrack(item)) return `${item.artist} - ${item.title}`;
  return item.name;
}
function getAudioItemTitle(item) {
  if (!item) return "";
  if (isTrendingTrack(item)) return item.title;
  return item.name.replace(/\.[^/.]+$/, "");
}
function getAudioItemCover(item) {
  if (!item) return null;
  if (isTrendingTrack(item)) return item.coverUrl;
  return null;
}
function getAudioBlob(file) {
  if (file.type && file.type.startsWith("audio/")) return file;
  const ext = file.name.split(".").pop()?.toLowerCase();
  let mimeType = file.type;
  if (ext === "mp3") mimeType = "audio/mpeg";
  else if (ext === "wav") mimeType = "audio/wav";
  else if (ext === "ogg") mimeType = "audio/ogg";
  else if (ext === "m4a" || ext === "aac") mimeType = "audio/mp4";
  else if (ext === "flac") mimeType = "audio/flac";
  else if (ext === "weba" || ext === "webm") mimeType = "audio/webm";
  if (mimeType && mimeType !== file.type)
    return new Blob([file], { type: mimeType });
  return file;
}
function parseTrackMetadata(item) {
  if (!item)
    return {
      artist: "Unknown Artist",
      title: "Music Track",
      album: "Music Album",
    };
  if (typeof item === "object" && isTrendingTrack(item))
    return {
      artist: item.artist || "Artist",
      title: item.title || "Track",
      album: `${item.artist || "Artist"} Essentials`,
    };
  const base = (typeof item === "string" ? item : item.name || "Track").replace(
    /\.[^/.]+$/,
    "",
  );
  let artist = "Unknown Artist";
  let title = base;
  if (base.includes(" by ")) {
    const parts = base.split(" by ");
    title = parts[0].replace(/^\d+[\s._-]+/, "").trim();
    artist = parts[1].trim();
  } else if (base.includes(" - ")) {
    const parts = base.split(" - ");
    artist = parts[0].trim();
    title = parts[1].replace(/^\d+[\s._-]+/, "").trim();
  } else title = base.replace(/^\d+[\s._-]+/, "").trim();
  const album = `${artist} Album`;
  return {
    title,
    artist,
    album,
  };
}
var BASE_WAVE_BARS = [
  0.22, 0.26, 0.3, 0.35, 0.42, 0.5, 0.6, 0.72, 0.82, 0.9, 0.96, 0.92, 0.82,
  0.72, 0.64, 0.58, 0.62, 0.72, 0.84, 0.94, 1, 0.96, 0.88, 0.78, 0.7, 0.62,
  0.54, 0.48, 0.44, 0.46, 0.52, 0.58, 0.66, 0.74, 0.82, 0.88, 0.86, 0.8, 0.72,
  0.64, 0.56, 0.5, 0.46, 0.48, 0.54, 0.62, 0.7, 0.76, 0.8, 0.82, 0.8, 0.74,
  0.68, 0.6, 0.54, 0.46, 0.38, 0.32, 0.28, 0.24, 0.2, 0.16,
];
function AudioPlayer({
  file,
  tracks = [],
  initialIndex = 0,
  onClose,
  onSwitchToVideo,
}) {
  const playlist = (0, import_react.useMemo)(() => {
    if (tracks && tracks.length > 0) return tracks;
    if (file) return [file];
    return [];
  }, [tracks, file]);
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(() => {
    if (initialIndex >= 0 && initialIndex < playlist.length)
      return initialIndex;
    if (file) {
      const fileName = getAudioItemName(file);
      const idx = playlist.findIndex((t) => getAudioItemName(t) === fileName);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const currentTrack = playlist[currentIndex] || file;
  getAudioItemName(currentTrack);
  const parsedMeta = (0, import_react.useMemo)(() => {
    if (!currentTrack)
      return {
        artist: "Unknown Artist",
        title: "Music Track",
        album: "Music Album",
      };
    if (isTrendingTrack(currentTrack))
      return {
        artist: currentTrack.artist || "Artist",
        title: currentTrack.title || "Track",
        album: `${currentTrack.artist} Essentials`,
      };
    return parseTrackMetadata(currentTrack);
  }, [currentTrack]);
  const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
  const [progress, setProgress] = (0, import_react.useState)(0);
  const [duration, setDuration] = (0, import_react.useState)(0);
  const [playbackSpeed, setPlaybackSpeed] = (0, import_react.useState)(1);
  const [repeatMode, setRepeatMode] = (0, import_react.useState)("off");
  const [isShuffle, setIsShuffle] = (0, import_react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
  const [volume, setVolume] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_music_volume");
      return saved !== null ? Math.max(0, Math.min(1, Number(saved))) : 1;
    } catch {
      return 1;
    }
  });
  const [isMuted, setIsMuted] = (0, import_react.useState)(false);
  const prevVolumeRef = (0, import_react.useRef)(1);
  const [showMoreMenu, setShowMoreMenu] = (0, import_react.useState)(false);
  const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = (0,
  import_react.useState)(false);
  const [showAlbumModal, setShowAlbumModal] = (0, import_react.useState)(false);
  const [showArtistModal, setShowArtistModal] = (0, import_react.useState)(
    false,
  );
  const [showPlaylist, setShowPlaylist] = (0, import_react.useState)(false);
  const [showEqualizer, setShowEqualizer] = (0, import_react.useState)(false);
  const [showSleepTimer, setShowSleepTimer] = (0, import_react.useState)(false);
  const [toastMessage, setToastMessage] = (0, import_react.useState)(null);
  const [showFooterModal, setShowFooterModal] = (0, import_react.useState)(
    false,
  );
  const [activeFooterTab, setActiveFooterTab] = (0, import_react.useState)(
    "playlists",
  );
  const [selectedAlbumName, setSelectedAlbumName] = (0, import_react.useState)(
    null,
  );
  const albumsList = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    playlist.forEach((trackFile, index) => {
      const meta = parseTrackMetadata(trackFile);
      const albumKey = meta.album || "Default Album";
      if (!map.has(albumKey))
        map.set(albumKey, {
          albumName: albumKey,
          artist: meta.artist,
          tracks: [],
        });
      map.get(albumKey).tracks.push({
        file: trackFile,
        index,
      });
    });
    return Array.from(map.values());
  }, [playlist]);
  const [userPlaylists, setUserPlaylists] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_user_playlists");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: "default-1",
        name: "My Favorite Mix",
        createdAt: Date.now(),
        trackNames: [],
      },
      {
        id: "default-2",
        name: "Chill & Focus",
        createdAt: Date.now(),
        trackNames: [],
      },
    ];
  });
  const [newPlaylistName, setNewPlaylistName] = (0, import_react.useState)("");
  const [selectedPlaylistId, setSelectedPlaylistId] = (0,
  import_react.useState)(null);
  const savePlaylists = (updated) => {
    setUserPlaylists(updated);
    try {
      localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
    } catch {}
  };
  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    const trimmed = newPlaylistName.trim();
    if (!trimmed) return;
    const updated = [
      {
        id: "pl-" + Date.now(),
        name: trimmed,
        createdAt: Date.now(),
        trackNames: currentTrack ? [currentTrack.name] : [],
      },
      ...userPlaylists,
    ];
    savePlaylists(updated);
    setNewPlaylistName("");
    showToast(`Created playlist "${trimmed}"`);
  };
  const handleDeletePlaylist = (id, name) => {
    const updated = userPlaylists.filter((p) => p.id !== id);
    savePlaylists(updated);
    if (selectedPlaylistId === id) setSelectedPlaylistId(null);
    showToast(`Deleted playlist "${name}"`);
  };
  const addTrackToPlaylist = (playlistId) => {
    if (!currentTrack) return;
    const updated = userPlaylists.map((pl) => {
      if (pl.id === playlistId) {
        if (pl.trackNames.includes(currentTrack.name)) {
          showToast(`Track is already in "${pl.name}"`);
          return pl;
        }
        showToast(`Added to "${pl.name}"`);
        return {
          ...pl,
          trackNames: [...pl.trackNames, currentTrack.name],
        };
      }
      return pl;
    });
    savePlaylists(updated);
  };
  const removeTrackFromPlaylist = (playlistId, trackName) => {
    const updated = userPlaylists.map((pl) => {
      if (pl.id === playlistId)
        return {
          ...pl,
          trackNames: pl.trackNames.filter((n) => n !== trackName),
        };
      return pl;
    });
    savePlaylists(updated);
    showToast("Removed track from playlist");
  };
  const [activePreset, setActivePreset] = (0, import_react.useState)(
    "Flat (Original)",
  );
  const [sleepTimerMinutes, setSleepTimerMinutes] = (0, import_react.useState)(
    null,
  );
  const [sleepRemainingSeconds, setSleepRemainingSeconds] = (0,
  import_react.useState)(null);
  const [favorites, setFavorites] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_music_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const isFavorited = currentTrack
    ? favorites.includes(currentTrack.name)
    : false;
  const toggleFavorite = () => {
    if (!currentTrack) return;
    setFavorites((prev) => {
      const next = prev.includes(currentTrack.name)
        ? prev.filter((name) => name !== currentTrack.name)
        : [...prev, currentTrack.name];
      try {
        localStorage.setItem("webna_music_favorites", JSON.stringify(next));
      } catch {}
      showToast(
        next.includes(currentTrack.name)
          ? "Added to favorites ❤️"
          : "Removed from favorites",
      );
      return next;
    });
  };
  const removeFavoriteByName = (trackName) => {
    setFavorites((prev) => {
      const next = prev.filter((n) => n !== trackName);
      try {
        localStorage.setItem("webna_music_favorites", JSON.stringify(next));
      } catch {}
      showToast("Removed from favorites");
      return next;
    });
  };
  const playSongByName = (trackName) => {
    const foundIdx = playlist.findIndex((t) => t.name === trackName);
    if (foundIdx !== -1) {
      setCurrentIndex(foundIdx);
      setShowFooterModal(false);
      setShowPlaylist(false);
      showToast(`Playing ${trackName}`);
    } else showToast("Track not loaded in current session");
  };
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 2500);
  };
  (0, import_react.useEffect)(() => {
    if (sleepRemainingSeconds === null) return;
    if (sleepRemainingSeconds <= 0) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
      setSleepTimerMinutes(null);
      setSleepRemainingSeconds(null);
      showToast("Sleep timer ended. Playback paused.");
      return;
    }
    const timer = setInterval(() => {
      setSleepRemainingSeconds((s) => (s !== null ? s - 1 : null));
    }, 1e3);
    return () => clearInterval(timer);
  }, [sleepRemainingSeconds]);
  const setSleepTimer = (minutes) => {
    setSleepTimerMinutes(minutes);
    setSleepRemainingSeconds(minutes ? minutes * 60 : null);
    setShowSleepTimer(false);
    showToast(
      minutes ? `Sleep timer set for ${minutes} min` : "Sleep timer turned off",
    );
  };
  const audioRef = (0, import_react.useRef)(null);
  const [audioUrl, setAudioUrl] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    if (!currentTrack) return;
    if (isTrendingTrack(currentTrack)) {
      const url =
        currentTrack.previewUrl ||
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      setAudioUrl(url);
      return;
    }
    const blob = getAudioBlob(currentTrack);
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [currentTrack]);
  (0, import_react.useEffect)(() => {
    if (!audioUrl) return;
    const audio = audioRef.current;
    if (!audio) return;
    setErrorMessage(null);
    audio.src = audioUrl;
    audio.playbackRate = playbackSpeed;
    audio.volume = isMuted ? 0 : volume;
    audio.load();
    const playPromise = audio.play();
    if (playPromise !== void 0)
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay deferred or blocked:", err);
          setIsPlaying(false);
        });
    return () => {
      audio.pause();
    };
  }, [audioUrl]);
  (0, import_react.useEffect)(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  const handleVolumeChange = (e) => {
    const newVol = Math.max(0, Math.min(1, parseFloat(e.target.value)));
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
    if (newVol > 0 && isMuted) setIsMuted(false);
    try {
      localStorage.setItem("webna_music_volume", newVol.toString());
    } catch {}
  };
  const toggleMute = () => {
    if (isMuted) {
      const restoreVol =
        prevVolumeRef.current > 0 ? prevVolumeRef.current : 0.8;
      setIsMuted(false);
      setVolume(restoreVol);
      if (audioRef.current) audioRef.current.volume = restoreVol;
      showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
    } else {
      prevVolumeRef.current = volume > 0 ? volume : 0.8;
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
      showToast("Muted");
    }
  };
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused)
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Playback error:", err);
          setErrorMessage("Failed to play audio.");
        });
    else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  const handleNext = (0, import_react.useCallback)(() => {
    if (playlist.length <= 1) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
      return;
    }
    if (isShuffle) {
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if (nextIdx === currentIndex && playlist.length > 1)
        nextIdx = (currentIndex + 1) % playlist.length;
      setCurrentIndex(nextIdx);
    } else setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }, [playlist.length, isShuffle, currentIndex]);
  const handlePrev = (0, import_react.useCallback)(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      return;
    }
    if (playlist.length <= 1) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      return;
    }
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);
  const handleSkip = (seconds) => {
    if (audioRef.current) {
      const newTime = Math.min(
        Math.max(0, audioRef.current.currentTime + seconds),
        duration || Infinity,
      );
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };
  const handleSeek = (newTime) => {
    setProgress(newTime);
    if (audioRef.current) audioRef.current.currentTime = newTime;
  };
  const cycleRepeatMode = () => {
    setRepeatMode((current) => {
      if (current === "off") {
        showToast("Repeat All playlist");
        return "all";
      }
      if (current === "all") {
        showToast("Repeat Current song");
        return "one";
      }
      showToast("Repeat Off");
      return "off";
    });
  };
  const cycleSpeed = () => {
    const speeds = [0.75, 1, 1.25, 1.5, 2];
    const nextSpeed =
      speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) audioRef.current.playbackRate = nextSpeed;
    showToast(`Speed: ${nextSpeed}x`);
  };
  const handleShare = async () => {
    if (!currentTrack) return;
    if (navigator.share)
      try {
        await navigator.share({
          title: currentTrack.name,
          text: `Listening to ${currentTrack.name} on WebNa Music Player`,
        });
      } catch {}
    else
      try {
        await navigator.clipboard.writeText(currentTrack.name);
        showToast("Track title copied to clipboard!");
      } catch {
        showToast("Sharing not supported on this browser");
      }
  };
  const handleSetAsRingtone = () => {
    if (!currentTrack) return;
    const blob = getAudioBlob(currentTrack);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentTrack.name.replace(/\.[^/.]+$/, "")}_ringtone.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowMoreMenu(false);
    showToast("Downloaded! Set it in Settings > Sound > Ringtone");
  };
  const handleRemoveTrack = () => {
    if (!currentTrack) return;
    const trackToRemove = currentTrack.name;
    setShowMoreMenu(false);
    if (playlist.length <= 1) {
      showToast(`Removed "${trackToRemove}"`);
      onClose();
    } else {
      showToast(`Removed "${trackToRemove}" from queue`);
      handleNext();
    }
  };
  const handleTrackEnded = () => {
    if (stopAfterCurrentTrack) {
      setIsPlaying(false);
      setProgress(0);
      setStopAfterCurrentTrack(false);
      showToast("Stopped playback after track finished");
      return;
    }
    if (repeatMode === "one") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    } else if (repeatMode === "all" || currentIndex < playlist.length - 1)
      handleNext();
    else {
      setIsPlaying(false);
      setProgress(0);
    }
  };
  const [waveAnimationTime, setWaveAnimationTime] = (0, import_react.useState)(
    0,
  );
  const animFrameRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }
    const start = performance_default.now();
    const updateWaves = (now) => {
      const elapsed = (now - start) / 1e3;
      setWaveAnimationTime(elapsed);
      animFrameRef.current = requestAnimationFrame(updateWaves);
    };
    animFrameRef.current = requestAnimationFrame(updateWaves);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);
  const waveformRef = (0, import_react.useRef)(null);
  const isDraggingRef = (0, import_react.useRef)(false);
  const calculateSeekFromPointer = (clientX) => {
    if (!waveformRef.current || !duration) return;
    const rect = waveformRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    handleSeek(pos * duration);
  };
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const progressFraction = duration > 0 ? Math.min(1, progress / duration) : 0;
  const activeBarIndex = Math.floor(progressFraction * BASE_WAVE_BARS.length);
  const favoriteTracksInPlaylist = playlist.filter((t) =>
    favorites.includes(t.name),
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "fixed inset-0 z-[60] flex flex-col bg-[#fbf9f6] text-[#2b2520] select-none overflow-hidden",
    children: [
      toastMessage &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "absolute top-14 left-1/2 -translate-x-1/2 z-[90] bg-[#3a322c]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-fade-in pointer-events-none",
          children: toastMessage,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex flex-col gap-2 px-4 pt-3 pb-2 shrink-0 border-b border-[#eee7de]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center gap-1 bg-[#f0eae0] p-1 rounded-xl shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-brand shadow-xs transition-all",
                    title: "Audio Player (Active)",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
                        className: "size-3.5 text-brand",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Audio player",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      if (audioRef.current) audioRef.current.pause();
                      if (onSwitchToVideo) onSwitchToVideo();
                      else onClose();
                    },
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#7c726a] hover:text-[#2b2520] hover:bg-white/60 transition-all",
                    title: "Switch to Video Player",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
                        className: "size-3.5",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Video player",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-0.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowMoreMenu(true),
                    className:
                      "p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform",
                    "aria-label": "More options",
                    title: "Options",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      EllipsisVertical,
                      { className: "size-5 text-[#4a423a]" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: onClose,
                    className:
                      "p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform",
                    "aria-label": "Close player",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5 text-[#4a423a]",
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "min-w-0 flex items-center justify-between px-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "min-w-0 flex-1 pr-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "text-sm font-semibold truncate leading-tight",
                  children: getAudioItemTitle(currentTrack) || "Music Player",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-[11px] text-[#8c827a] truncate mt-0.5",
                  children: isTrendingTrack(currentTrack)
                    ? currentTrack.artist
                    : playlist.length > 1
                      ? `Track ${currentIndex + 1} of ${playlist.length}`
                      : "Local Audio",
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex-1 flex flex-col items-center justify-center px-6 py-1 min-h-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "relative size-48 sm:size-56 rounded-full bg-[#f1ebe3] flex items-center justify-center shadow-inner my-auto transition-transform",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: `size-40 sm:size-44 rounded-full bg-gradient-to-tr from-[#6d5b97]/20 to-[#9e8ec2]/30 flex items-center justify-center border-4 border-white/60 shadow-sm overflow-hidden transition-transform duration-700 ${isPlaying ? "rotate-360 duration-[12000ms] ease-linear repeat-infinite" : ""}`,
                children: getAudioItemCover(currentTrack)
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: getAudioItemCover(currentTrack),
                      alt: "",
                      className: "size-full object-cover",
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-4xl sm:text-5xl select-none",
                      children: "🎵",
                    }),
              }),
              isPlaying &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "absolute inset-0 rounded-full border-2 border-dashed border-[#6d5b97]/30 animate-spin duration-[16000ms]",
                }),
            ],
          }),
          errorMessage &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex items-center gap-2 p-2 rounded-xl bg-destructive/10 text-destructive text-xs text-center w-full max-w-sm mt-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
                  className: "size-4 shrink-0",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  children: errorMessage,
                }),
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "w-full max-w-md mx-auto px-5 pb-2 pt-1 flex flex-col gap-3.5 shrink-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between text-[#574d46] px-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => setShowPlaylist(true),
                className:
                  "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
                title: "Playlist queue",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                    className: "size-5",
                  }),
                  playlist.length > 1 &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "absolute -top-0.5 -right-0.5 bg-[#6d5b97] text-white text-[9px] size-3.5 rounded-full flex items-center justify-center font-bold",
                      children: playlist.length,
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => setShowEqualizer(true),
                className:
                  "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform",
                title: "Equalizer & Track Info",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  CreditCard,
                  { className: "size-5" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: toggleFavorite,
                className: `p-1.5 active:scale-90 transition-transform ${isFavorited ? "text-[#d14343]" : "hover:text-[#6d5b97]"}`,
                title: isFavorited ? "Favorited" : "Add to favorites",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                  className: `size-5 transition-colors ${isFavorited ? "fill-[#d14343] text-[#d14343]" : ""}`,
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: cycleRepeatMode,
                className: `p-1.5 relative active:scale-90 transition-transform ${repeatMode !== "off" ? "text-[#6d5b97]" : "hover:text-[#6d5b97]"}`,
                title: `Repeat: ${repeatMode}`,
                children: [
                  repeatMode === "one"
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, {
                        className: "size-5 text-[#6d5b97]",
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, {
                        className: "size-5",
                      }),
                  repeatMode === "all" &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "absolute bottom-1 right-1 size-1.5 rounded-full bg-[#6d5b97]",
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => setShowSleepTimer(true),
                className: `p-1.5 relative active:scale-90 transition-transform ${sleepRemainingSeconds !== null ? "text-[#6d5b97]" : "hover:text-[#6d5b97]"}`,
                title: "Sleep timer",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
                    className: "size-5",
                  }),
                  sleepRemainingSeconds !== null &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className:
                        "absolute -top-1 -right-2 bg-[#6d5b97] text-white text-[8px] px-1 rounded-full font-mono",
                      children: [Math.ceil(sleepRemainingSeconds / 60), "m"],
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: handleShare,
                className:
                  "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform",
                title: "Share track",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
                  className: "size-5",
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                ref: waveformRef,
                className:
                  "h-12 w-full flex items-center justify-between gap-[2.5px] sm:gap-[3px] cursor-pointer select-none py-1 relative group",
                onPointerDown: (e) => {
                  isDraggingRef.current = true;
                  calculateSeekFromPointer(e.clientX);
                },
                onPointerMove: (e) => {
                  if (isDraggingRef.current)
                    calculateSeekFromPointer(e.clientX);
                },
                onPointerUp: () => {
                  isDraggingRef.current = false;
                },
                onPointerLeave: () => {
                  isDraggingRef.current = false;
                },
                children: BASE_WAVE_BARS.map((baseHeight, index) => {
                  const isPast = index <= activeBarIndex;
                  const isCurrent = index === activeBarIndex;
                  let liveMultiplier = 1;
                  if (isPlaying) {
                    const harmonic =
                      Math.sin(waveAnimationTime * 6 + index * 0.35) * 0.28 +
                      Math.cos(waveAnimationTime * 4 - index * 0.2) * 0.15;
                    liveMultiplier = Math.max(0.3, 1 + harmonic);
                  }
                  const barHeightPct = Math.min(
                    100,
                    Math.max(14, baseHeight * 100 * liveMultiplier),
                  );
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "flex-1 flex flex-col justify-center items-center h-full relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: `w-[2.5px] sm:w-[3px] rounded-full transition-all duration-75 ${isPast ? "bg-[#6d5b97]" : "bg-[#cfc8c2] dark:bg-muted-foreground/30"}`,
                          style: { height: `${barHeightPct}%` },
                        }),
                        isCurrent &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "absolute top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#6d5b97] shadow-md border-2 border-white pointer-events-none ring-2 ring-[#6d5b97]/30 scale-110",
                          }),
                      ],
                    },
                    index,
                  );
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex justify-between text-xs font-medium text-[#7a6f67] px-0.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: formatTime(progress),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: formatTime(duration),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between px-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => {
                  setIsShuffle(!isShuffle);
                  showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
                },
                className: `p-2 transition-transform active:scale-90 ${isShuffle ? "text-[#6d5b97]" : "text-[#574d46] hover:text-[#6d5b97]"}`,
                title: "Toggle shuffle",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
                  className: "size-5",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: handlePrev,
                className:
                  "p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform",
                title: "Previous track",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  SkipBack,
                  { className: "size-6 fill-current" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: togglePlay,
                className:
                  "size-16 rounded-full bg-[#6d5b97] hover:bg-[#5e4d87] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all mx-2",
                "aria-label": isPlaying ? "Pause" : "Play",
                children: isPlaying
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
                      className: "size-8 fill-current",
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
                      className: "size-8 fill-current ml-1",
                    }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: handleNext,
                className:
                  "p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform",
                title: "Next track",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  SkipForward,
                  { className: "size-6 fill-current" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: cycleSpeed,
                className:
                  "px-2.5 py-1 rounded-full bg-[#ece6f2] hover:bg-[#dfd7e8] text-[#6d5b97] font-semibold text-xs tracking-tight active:scale-95 transition-all shadow-xs",
                title: "Change playback speed",
                children: [playbackSpeed.toFixed(1), "x"],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-center gap-12 text-[#685d55]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => handleSkip(-10),
                className:
                  "flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
                title: "Rewind 10 seconds",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
                    className: "size-5",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-[7.5px] font-bold absolute top-[5px]",
                    children: "10",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => handleSkip(10),
                className:
                  "flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
                title: "Forward 10 seconds",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
                    className: "size-5",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-[7.5px] font-bold absolute top-[5px]",
                    children: "10",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "border-t border-[#e8e2d9] pt-2.5 pb-1 mt-0.5 flex flex-col gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center gap-2.5 px-3 py-1.5 bg-white/80 rounded-2xl border border-[#e8e2d9] shadow-2xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    type: "button",
                    onClick: toggleMute,
                    className:
                      "p-1 rounded-lg text-[#685d55] hover:text-[#6d5b97] hover:bg-black/5 active:scale-90 transition-all shrink-0",
                    title: isMuted || volume === 0 ? "Unmute" : "Mute",
                    "aria-label": isMuted || volume === 0 ? "Unmute" : "Mute",
                    children:
                      isMuted || volume === 0
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
                            className: "size-4.5 text-[#d14343]",
                          })
                        : volume < 0.5
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Volume1,
                              { className: "size-4.5 text-[#6d5b97]" },
                            )
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Volume2,
                              { className: "size-4.5 text-[#6d5b97]" },
                            ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex-1 flex items-center gap-2.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "1",
                        step: "0.01",
                        value: isMuted ? 0 : volume,
                        onChange: handleVolumeChange,
                        className:
                          "w-full h-1.5 bg-[#e4ddd5] rounded-lg appearance-none cursor-pointer accent-[#6d5b97] transition-all",
                        "aria-label": "Playback volume",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "text-[11px] font-semibold text-[#7a6f67] w-9 text-right font-mono shrink-0 select-none",
                        children: isMuted
                          ? "0%"
                          : `${Math.round(volume * 100)}%`,
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between text-xs gap-1.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setActiveFooterTab("playlists");
                      setSelectedPlaylistId(null);
                      setShowFooterModal(true);
                    },
                    className:
                      "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]",
                    title: "View playlists",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                        className: "size-4 text-[#6d5b97] shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "font-semibold text-xs",
                        children: "Playlist",
                      }),
                      userPlaylists.length > 0 &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0",
                          children: userPlaylists.length,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setActiveFooterTab("favorites");
                      setShowFooterModal(true);
                    },
                    className:
                      "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#d14343]",
                    title: "View favorites",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                        className:
                          "size-4 fill-[#d14343] text-[#d14343] shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "font-semibold text-xs",
                        children: "Favorites",
                      }),
                      favorites.length > 0 &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-[10px] bg-red-50 text-[#d14343] font-bold px-1.5 py-0.2 rounded-full shrink-0",
                          children: favorites.length,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setActiveFooterTab("albums");
                      setSelectedAlbumName(null);
                      setShowFooterModal(true);
                    },
                    className:
                      "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]",
                    title: "View albums",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                        className: "size-4 text-[#6d5b97] shrink-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "font-semibold text-xs",
                        children: "Albums",
                      }),
                      albumsList.length > 0 &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0",
                          children: albumsList.length,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
        ref: audioRef,
        preload: "auto",
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false),
        onEnded: handleTrackEnded,
        onTimeUpdate: () => setProgress(audioRef.current?.currentTime || 0),
        onLoadedMetadata: () => setDuration(audioRef.current?.duration || 0),
        onError: () => {
          setIsPlaying(false);
          setErrorMessage("Unable to play this audio file.");
        },
      }),
      showMoreMenu &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
          onClick: () => setShowMoreMenu(false),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-white rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-200 text-[#1a1a1a]",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-3 mb-2 border-b border-[#f0ece5]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "font-semibold text-sm truncate",
                        children: parsedMeta.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs text-[#8c827a] truncate",
                        children: parsedMeta.artist,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowMoreMenu(false),
                    className:
                      "p-1 rounded-full hover:bg-black/5 text-[#7a6f67]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "divide-y divide-[#f5f1eb] text-sm font-medium",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setShowMoreMenu(false);
                      setShowAlbumModal(true);
                    },
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                        className: "size-5 text-[#2b2520]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Go to album",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setShowMoreMenu(false);
                      setShowArtistModal(true);
                    },
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
                        className: "size-5 text-[#2b2520]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Go to artist",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setShowMoreMenu(false);
                      setActiveFooterTab("playlists");
                      setSelectedPlaylistId(null);
                      setShowFooterModal(true);
                    },
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, {
                        className: "size-5 text-[#2b2520]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Add to playlist",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: handleSetAsRingtone,
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                        className: "size-5 text-[#2b2520]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Set as ringtone",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      toggleFavorite();
                      setShowMoreMenu(false);
                    },
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#d14343] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                        className: `size-5 ${isFavorited ? "fill-[#d14343] text-[#d14343]" : "text-[#2b2520]"}`,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: isFavorited
                          ? "Remove from favorites"
                          : "Add to favorites",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: handleRemoveTrack,
                    className:
                      "w-full flex items-center gap-4 py-3.5 text-[#d14343] hover:opacity-80 active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListX, {
                        className: "size-5",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Remove",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      const nextState = !stopAfterCurrentTrack;
                      setStopAfterCurrentTrack(nextState);
                      setShowMoreMenu(false);
                      showToast(
                        nextState
                          ? "Will stop playback after this track"
                          : "Stop after this track disabled",
                      );
                    },
                    className:
                      "w-full flex items-center justify-between py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
                            className: "size-5 text-[#2b2520]",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "text-[15px]",
                            children: "Stop after this track",
                          }),
                        ],
                      }),
                      stopAfterCurrentTrack &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                          className: "size-4 text-[#6d5b97] font-bold",
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setShowMoreMenu(false);
                      handleShare();
                    },
                    className:
                      "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
                        className: "size-5 text-[#2b2520]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-[15px]",
                        children: "Share",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      showAlbumModal &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                        className: "size-5 text-[#6d5b97]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base",
                        children: "Album Overview",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowAlbumModal(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5 text-[#5e534a]",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "size-16 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Disc,
                          { className: "size-8 text-[#6d5b97]" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                            className:
                              "font-bold text-sm text-[#2b2520] truncate",
                            children: parsedMeta.album,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-xs text-[#8c827a] truncate mt-0.5",
                            children: parsedMeta.artist,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className:
                              "text-[11px] text-[#6d5b97] font-medium mt-1",
                            children: [
                              playlist.length,
                              " ",
                              playlist.length === 1 ? "track" : "tracks",
                              " available",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-1.5 max-h-48 overflow-y-auto",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "text-xs font-semibold text-[#8c827a] uppercase",
                        children: "Tracks in this Album / Session",
                      }),
                      playlist.map((t, idx) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "button",
                          {
                            onClick: () => {
                              setCurrentIndex(idx);
                              setShowAlbumModal(false);
                            },
                            className: `w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-left transition-colors ${idx === currentIndex ? "bg-[#ece6f2] text-[#6d5b97] font-semibold" : "bg-white border border-[#e8e2d9] hover:bg-[#f6f2ec]"}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "truncate flex-1",
                                  children: t.name,
                                },
                              ),
                              idx === currentIndex &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "span",
                                  {
                                    className:
                                      "text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full ml-2",
                                    children: "Playing",
                                  },
                                ),
                            ],
                          },
                          idx,
                        ),
                      ),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowAlbumModal(false),
                    className:
                      "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]",
                    children: "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
      showArtistModal &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
                        className: "size-5 text-[#6d5b97]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base",
                        children: "Artist Profile",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowArtistModal(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5 text-[#5e534a]",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "size-16 rounded-full bg-[#ece6f2] flex items-center justify-center shrink-0",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          User,
                          { className: "size-8 text-[#6d5b97]" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                            className:
                              "font-bold text-base text-[#2b2520] truncate",
                            children: parsedMeta.artist,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "text-xs text-[#8c827a] mt-0.5",
                            children: ["Track: ", parsedMeta.title],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: `https://www.google.com/search?q=${encodeURIComponent(parsedMeta.artist + " music")}`,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#e8e2d9] text-xs font-semibold text-[#6d5b97] hover:bg-[#ece6f2]/50 transition-colors",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ExternalLink,
                        { className: "size-3.5" },
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        children: ["Search ", parsedMeta.artist, " on Google"],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowArtistModal(false),
                    className:
                      "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]",
                    children: "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
      showFooterModal &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center gap-2 bg-[#ece6f2]/80 p-1 rounded-xl",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: () => {
                          setActiveFooterTab("playlists");
                          setSelectedPlaylistId(null);
                        },
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-[#6d5b97] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            ListMusic,
                            { className: "size-3.5" },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Playlist",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: () => setActiveFooterTab("favorites"),
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-[#d14343] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                            className: "size-3.5 fill-[#d14343] text-[#d14343]",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Favorites",
                          }),
                          favorites.length > 0 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "text-[10px] bg-red-100 text-[#d14343] px-1.5 rounded-full",
                                children: favorites.length,
                              },
                            ),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: () => {
                          setActiveFooterTab("albums");
                          setSelectedAlbumName(null);
                        },
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-[#6d5b97] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                            className: "size-3.5",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Albums",
                          }),
                          albumsList.length > 0 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "text-[10px] bg-[#ece6f2] text-[#6d5b97] px-1.5 rounded-full",
                                children: albumsList.length,
                              },
                            ),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowFooterModal(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5 text-[#5e534a]",
                    }),
                  }),
                ],
              }),
              activeFooterTab === "playlists" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: selectedPlaylistId
                    ? (() => {
                        const pl = userPlaylists.find(
                          (p) => p.id === selectedPlaylistId,
                        );
                        if (!pl) return null;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className: "space-y-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        onClick: () =>
                                          setSelectedPlaylistId(null),
                                        className:
                                          "text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1",
                                        children: "← Back to all playlists",
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("span", {
                                      className: "text-xs text-[#8c827a]",
                                      children: [
                                        pl.trackNames.length,
                                        " tracks",
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "h4",
                                      {
                                        className:
                                          "font-bold text-base text-[#2b2520]",
                                        children: pl.name,
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("button", {
                                      onClick: () => addTrackToPlaylist(pl.id),
                                      className:
                                        "flex items-center gap-1 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Plus, {
                                          className: "size-3.5",
                                        }),
                                        "Add Current Track",
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-1.5",
                                  children: [
                                    pl.trackNames.map((trackName, idx) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9] text-xs hover:border-[#6d5b97]/40 transition-colors",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              onClick: () =>
                                                playSongByName(trackName),
                                              className:
                                                "flex items-center gap-2 min-w-0 flex-1 text-left",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  CirclePlay,
                                                  {
                                                    className:
                                                      "size-4 text-[#6d5b97] shrink-0",
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "font-medium truncate",
                                                    children: trackName,
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: () =>
                                                removeTrackFromPlaylist(
                                                  pl.id,
                                                  trackName,
                                                ),
                                              className:
                                                "p-1 text-[#a3978e] hover:text-destructive",
                                              title: "Remove track",
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Trash2, {
                                                className: "size-3.5",
                                              }),
                                            }),
                                          ],
                                        },
                                        idx,
                                      ),
                                    ),
                                    pl.trackNames.length === 0 &&
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("p", {
                                        className:
                                          "text-center py-8 text-xs text-[#8c827a]",
                                        children:
                                          'No tracks in this playlist yet. Tap "Add Current Track" above to add one!',
                                      }),
                                  ],
                                },
                              ),
                            ],
                          },
                        );
                      })()
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        import_jsx_runtime.Fragment,
                        {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "form",
                              {
                                onSubmit: handleCreatePlaylist,
                                className: "flex gap-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "input",
                                    {
                                      type: "text",
                                      value: newPlaylistName,
                                      onChange: (e) =>
                                        setNewPlaylistName(e.target.value),
                                      placeholder: "New playlist name...",
                                      className:
                                        "flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#e8e2d9] focus:outline-none focus:ring-2 focus:ring-[#6d5b97]",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "button",
                                    {
                                      type: "submit",
                                      className:
                                        "flex items-center gap-1.5 px-3 py-2 bg-[#6d5b97] text-white text-xs font-semibold rounded-xl hover:bg-[#5e4d87] transition-colors shadow-xs",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(FolderPlus, {
                                          className: "size-3.5",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          children: "Create",
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "space-y-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "h4",
                                    {
                                      className:
                                        "text-xs font-semibold text-[#8c827a] uppercase tracking-wider",
                                      children: [
                                        "Your Playlists (",
                                        userPlaylists.length,
                                        ")",
                                      ],
                                    },
                                  ),
                                  userPlaylists.map((pl) =>
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-[#6d5b97]/50 shadow-xs transition-all",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("button", {
                                            onClick: () =>
                                              setSelectedPlaylistId(pl.id),
                                            className:
                                              "flex items-center gap-3 min-w-0 flex-1 text-left",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("div", {
                                                className:
                                                  "size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0",
                                                children: /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  ListMusic,
                                                  {
                                                    className:
                                                      "size-5 text-[#6d5b97]",
                                                  },
                                                ),
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)("p", {
                                                    className:
                                                      "font-semibold text-sm truncate",
                                                    children: pl.name,
                                                  }),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-xs text-[#8c827a]",
                                                      children: [
                                                        pl.trackNames.length,
                                                        " ",
                                                        pl.trackNames.length ===
                                                        1
                                                          ? "track"
                                                          : "tracks",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    addTrackToPlaylist(pl.id),
                                                  className:
                                                    "p-1.5 text-[#6d5b97] hover:bg-[#ece6f2] rounded-lg",
                                                  title: "Add current track",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Plus,
                                                    { className: "size-4" },
                                                  ),
                                                },
                                              ),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    handleDeletePlaylist(
                                                      pl.id,
                                                      pl.name,
                                                    ),
                                                  className:
                                                    "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg",
                                                  title: "Delete playlist",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Trash2,
                                                    { className: "size-4" },
                                                  ),
                                                },
                                              ),
                                            ],
                                          }),
                                        ],
                                      },
                                      pl.id,
                                    ),
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                      ),
                }),
              activeFooterTab === "favorites" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              className: "font-bold text-sm text-[#2b2520]",
                              children: "Favorite Tracks",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                              className: "text-xs text-[#8c827a]",
                              children: [
                                favorites.length,
                                " ",
                                favorites.length === 1 ? "song" : "songs",
                                " saved",
                              ],
                            }),
                          ],
                        }),
                        favorites.length > 0 &&
                          favoriteTracksInPlaylist.length > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "button",
                            {
                              onClick: () =>
                                playSongByName(
                                  favoriteTracksInPlaylist[0].name,
                                ),
                              className:
                                "flex items-center gap-1.5 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  CirclePlay,
                                  { className: "size-3.5" },
                                ),
                                "Play Favorites",
                              ],
                            },
                          ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        favorites.map((favName, i) => {
                          const isCurrentPlaying =
                            currentTrack?.name === favName;
                          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "div",
                            {
                              className: `flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${isCurrentPlaying ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]" : "bg-white border-[#e8e2d9] text-[#2b2520]"}`,
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "button",
                                  {
                                    onClick: () => playSongByName(favName),
                                    className:
                                      "flex items-center gap-2.5 min-w-0 flex-1 text-left",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(CirclePlay, {
                                        className: `size-4.5 ${isCurrentPlaying ? "text-[#6d5b97]" : "text-[#7a6f67]"}`,
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("p", {
                                            className: "font-medium truncate",
                                            children: favName,
                                          }),
                                          isCurrentPlaying &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-[10px] text-[#6d5b97] font-semibold",
                                              children: "Currently Playing",
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "button",
                                  {
                                    onClick: () =>
                                      removeFavoriteByName(favName),
                                    className:
                                      "p-1 text-[#d14343] hover:bg-red-50 rounded-lg transition-colors ml-2",
                                    title: "Remove from favorites",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)(Heart, {
                                      className: "size-4 fill-[#d14343]",
                                    }),
                                  },
                                ),
                              ],
                            },
                            i,
                          );
                        }),
                        favorites.length === 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "text-center py-10 space-y-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "size-12 rounded-full bg-red-50 text-[#d14343] flex items-center justify-center mx-auto",
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsx)(Heart, {
                                    className: "size-6 fill-[#d14343]",
                                  }),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className: "text-xs text-[#8c827a]",
                                children: "No favorite tracks yet.",
                              }),
                              currentTrack &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "button",
                                  {
                                    onClick: toggleFavorite,
                                    className:
                                      "inline-flex items-center gap-1.5 text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-4 py-2 rounded-xl hover:bg-[#dfd7e8] transition-colors",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(Heart, {
                                        className: "size-3.5",
                                      }),
                                      "Favorite Current Song",
                                    ],
                                  },
                                ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              activeFooterTab === "albums" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: selectedAlbumName
                    ? (() => {
                        const album = albumsList.find(
                          (a) => a.albumName === selectedAlbumName,
                        );
                        if (!album) return null;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className: "space-y-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        onClick: () =>
                                          setSelectedAlbumName(null),
                                        className:
                                          "text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1",
                                        children: "← Back to all albums",
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("span", {
                                      className: "text-xs text-[#8c827a]",
                                      children: [
                                        album.tracks.length,
                                        " ",
                                        album.tracks.length === 1
                                          ? "track"
                                          : "tracks",
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "size-12 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0",
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Disc, {
                                          className:
                                            "size-6 animate-spin [animation-duration:8s]",
                                        }),
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-bold text-sm text-[#2b2520] truncate",
                                          children: album.albumName,
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-xs text-[#8c827a] truncate",
                                          children: album.artist,
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("button", {
                                      onClick: () => {
                                        if (album.tracks.length > 0) {
                                          setCurrentIndex(
                                            album.tracks[0].index,
                                          );
                                          showToast(
                                            `Playing "${album.albumName}"`,
                                          );
                                        }
                                      },
                                      className:
                                        "flex items-center gap-1.5 px-3 py-1.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] shadow-xs",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Play, {
                                          className: "size-3.5 fill-current",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          children: "Play All",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "space-y-1.5",
                                  children: album.tracks.map(
                                    ({ file: trackFile, index: trackIdx }) => {
                                      const isCurrent =
                                        trackIdx === currentIndex;
                                      const meta =
                                        parseTrackMetadata(trackFile);
                                      return /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)(
                                        "div",
                                        {
                                          className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${isCurrent ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]" : "bg-white border-[#e8e2d9] hover:bg-[#f6f2ec] text-[#2b2520]"}`,
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              onClick: () =>
                                                setCurrentIndex(trackIdx),
                                              className:
                                                "flex items-center gap-2.5 min-w-0 flex-1 text-left",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  CirclePlay,
                                                  {
                                                    className: `size-4 ${isCurrent ? "text-[#6d5b97]" : "text-[#8c827a]"}`,
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "font-medium truncate",
                                                          children: meta.title,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-[10px] text-[#8c827a] truncate",
                                                          children: meta.artist,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                            isCurrent &&
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                className:
                                                  "text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full font-semibold",
                                                children: "Playing",
                                              }),
                                          ],
                                        },
                                        trackIdx,
                                      );
                                    },
                                  ),
                                },
                              ),
                            ],
                          },
                        );
                      })()
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        import_jsx_runtime.Fragment,
                        {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "p-3.5 rounded-2xl bg-gradient-to-r from-[#ece6f2] to-[#f4eff8] border border-[#ded5e5] flex items-center justify-between gap-3 shadow-xs",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-3 min-w-0 flex-1",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("div", {
                                          className:
                                            "size-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#6d5b97] shrink-0",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Disc, {
                                            className: "size-6",
                                          }),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className:
                                                "text-[10px] uppercase font-bold text-[#6d5b97] tracking-wider",
                                              children: "Now Playing Album",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("h4", {
                                              className:
                                                "font-bold text-sm text-[#2b2520] truncate",
                                              children: parsedMeta.album,
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-xs text-[#685d55] truncate",
                                              children: parsedMeta.artist,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "button",
                                    {
                                      onClick: () =>
                                        setSelectedAlbumName(parsedMeta.album),
                                      className:
                                        "px-3 py-1.5 rounded-xl bg-white text-[#6d5b97] text-xs font-semibold hover:bg-white/80 shadow-2xs shrink-0",
                                      children: "View Tracks",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "space-y-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "h4",
                                    {
                                      className:
                                        "text-xs font-semibold text-[#8c827a] uppercase tracking-wider",
                                      children: [
                                        "Available Albums (",
                                        albumsList.length,
                                        ")",
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "grid grid-cols-1 gap-2",
                                      children: [
                                        albumsList.map((album) => {
                                          const isNowPlayingThis =
                                            parsedMeta.album ===
                                            album.albumName;
                                          return /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "button",
                                            {
                                              onClick: () =>
                                                setSelectedAlbumName(
                                                  album.albumName,
                                                ),
                                              className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:scale-[1.01] ${isNowPlayingThis ? "bg-white border-[#6d5b97]/60 shadow-xs ring-1 ring-[#6d5b97]/30" : "bg-white border-[#e8e2d9] hover:border-[#6d5b97]/40 shadow-xs"}`,
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-3 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Disc,
                                                              {
                                                                className:
                                                                  "size-5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "min-w-0 flex-1",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-semibold text-sm text-[#2b2520] truncate",
                                                                children:
                                                                  album.albumName,
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsxs)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-xs text-[#8c827a] truncate",
                                                                children: [
                                                                  album.artist,
                                                                  " • ",
                                                                  album.tracks
                                                                    .length,
                                                                  " ",
                                                                  album.tracks
                                                                    .length ===
                                                                  1
                                                                    ? "track"
                                                                    : "tracks",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-xs text-[#6d5b97] font-medium ml-2 shrink-0",
                                                    children: "Browse →",
                                                  },
                                                ),
                                              ],
                                            },
                                            album.albumName,
                                          );
                                        }),
                                        albumsList.length === 0 &&
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("p", {
                                            className:
                                              "text-center py-8 text-xs text-[#8c827a]",
                                            children:
                                              "No albums found in current playlist",
                                          }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                      ),
                }),
            ],
          }),
        }),
      showPlaylist &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-t-3xl max-h-[70vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between p-4 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                        className: "size-5 text-[#6d5b97]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base",
                        children: "Playing Queue",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-2 py-0.5 rounded-full",
                        children: playlist.length,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowPlaylist(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "overflow-y-auto p-3 space-y-1 divide-y divide-[#ece6f2]/50",
                children: [
                  playlist.map((track, i) => {
                    const isSelected = i === currentIndex;
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        onClick: () => {
                          setCurrentIndex(i);
                          setShowPlaylist(false);
                        },
                        className: `w-full flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-colors ${isSelected ? "bg-[#ece6f2] text-[#6d5b97] font-medium" : "hover:bg-black/5 text-[#3b322a]"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "w-5 text-center text-xs opacity-60",
                            children: i + 1,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "flex-1 truncate",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsx)("p", {
                              className: "truncate",
                              children: track.name,
                            }),
                          }),
                          isSelected &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "flex gap-0.5 items-end h-4",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "w-0.5 h-3 bg-[#6d5b97] animate-pulse",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "w-0.5 h-4 bg-[#6d5b97] animate-pulse delay-75",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "w-0.5 h-2 bg-[#6d5b97] animate-pulse delay-150",
                                    },
                                  ),
                                ],
                              },
                            ),
                        ],
                      },
                      i,
                    );
                  }),
                  playlist.length === 0 &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-center py-8 text-xs text-[#8c827a]",
                      children: "No songs in queue",
                    }),
                ],
              }),
            ],
          }),
        }),
      showEqualizer &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                        className: "size-5 text-[#6d5b97]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base",
                        children: "Sound & Track Info",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowEqualizer(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "bg-[#f1ebe3] p-3 rounded-xl text-xs space-y-1.5 text-[#5e534a]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "font-medium text-[#2b2520] truncate",
                        children: currentTrack?.name,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "File size:",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "font-mono",
                            children: currentTrack
                              ? `${(currentTrack.size / 1048576).toFixed(2)} MB`
                              : "Unknown",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Format:",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "font-mono uppercase",
                            children:
                              currentTrack?.name.split(".").pop() || "Audio",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Length:",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "font-mono",
                            children: formatTime(duration),
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs font-semibold text-[#5e534a] mb-2",
                        children: "Sound Profile Preset",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 text-xs",
                        children: [
                          "Flat (Original)",
                          "Bass Boost",
                          "Vocal Enhance",
                          "Treble Boost",
                        ].map((preset) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "button",
                            {
                              onClick: () => {
                                setActivePreset(preset);
                                showToast(`Preset: ${preset}`);
                              },
                              className: `p-2.5 rounded-lg border text-left transition-all ${activePreset === preset ? "border-[#6d5b97] bg-[#ece6f2] text-[#6d5b97] font-semibold" : "border-[#e0d8cd] hover:bg-black/5 text-[#4a423a]"}`,
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    { children: preset },
                                  ),
                                  activePreset === preset &&
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Check,
                                      { className: "size-3.5 text-[#6d5b97]" },
                                    ),
                                ],
                              }),
                            },
                            preset,
                          ),
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowEqualizer(false),
                    className:
                      "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] transition-colors",
                    children: "Done",
                  }),
                ],
              }),
            ],
          }),
        }),
      showSleepTimer &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "bg-[#fbf9f6] rounded-2xl w-full max-w-xs p-5 shadow-2xl animate-in zoom-in-95 duration-150",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                        className: "size-5 text-[#6d5b97]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base",
                        children: "Sleep Timer",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowSleepTimer(false),
                    className: "p-1 rounded-full hover:bg-black/5",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-3 space-y-1.5 text-xs",
                children: [
                  {
                    label: "Turn off timer",
                    value: null,
                  },
                  {
                    label: "15 minutes",
                    value: 15,
                  },
                  {
                    label: "30 minutes",
                    value: 30,
                  },
                  {
                    label: "45 minutes",
                    value: 45,
                  },
                  {
                    label: "60 minutes",
                    value: 60,
                  },
                ].map((opt) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      onClick: () => setSleepTimer(opt.value),
                      className: `w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${sleepTimerMinutes === opt.value ? "bg-[#ece6f2] text-[#6d5b97] font-semibold" : "hover:bg-black/5 text-[#3b322a]"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: opt.label,
                        }),
                        sleepTimerMinutes === opt.value &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                            className: "size-4 text-[#6d5b97]",
                          }),
                      ],
                    },
                    String(opt.value),
                  ),
                ),
              }),
            ],
          }),
        }),
    ],
  });
}
function VideoPlayer({
  tracks = [],
  file,
  initialIndex = 0,
  onClose,
  onSwitchToAudio,
}) {
  const playlist = (0, import_react.useMemo)(() => {
    if (tracks.length > 0) return tracks;
    if (file) return [file];
    return [];
  }, [tracks, file]);
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(
    Math.min(initialIndex, Math.max(0, playlist.length - 1)),
  );
  const videoRef = (0, import_react.useRef)(null);
  const containerRef = (0, import_react.useRef)(null);
  const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
  const [progress, setProgress] = (0, import_react.useState)(0);
  const [duration, setDuration] = (0, import_react.useState)(0);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
  const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
  const [showControls, setShowControls] = (0, import_react.useState)(true);
  const hideControlsTimerRef = (0, import_react.useRef)(null);
  const [repeatMode, setRepeatMode] = (0, import_react.useState)("off");
  const [isShuffle, setIsShuffle] = (0, import_react.useState)(false);
  const [playbackSpeed, setPlaybackSpeed] = (0, import_react.useState)(1);
  const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = (0,
  import_react.useState)(false);
  const [volume, setVolume] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_player_volume");
      return saved !== null ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });
  const [isMuted, setIsMuted] = (0, import_react.useState)(false);
  const prevVolumeRef = (0, import_react.useRef)(volume > 0 ? volume : 0.8);
  const [activeFooterTab, setActiveFooterTab] = (0, import_react.useState)(
    null,
  );
  const [selectedVideoAlbumId, setSelectedVideoAlbumId] = (0,
  import_react.useState)(null);
  const videoAlbums = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    playlist.forEach((item, index) => {
      let albumName = "Featured Video Collection";
      let description = "Curated video selection";
      let thumb = void 0;
      if ("channel" in item) {
        albumName = item.channel;
        description = `${item.channel} Series`;
        thumb = item.thumbnailUrl;
      } else {
        albumName = "Uploaded Video Library";
        description = "Personal uploaded video files";
      }
      if (!map.has(albumName))
        map.set(albumName, {
          id: `album-${albumName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          title: albumName,
          description,
          thumbnailUrl: thumb,
          items: [],
        });
      const entry = map.get(albumName);
      if (!entry.thumbnailUrl && "thumbnailUrl" in item)
        entry.thumbnailUrl = item.thumbnailUrl;
      entry.items.push({
        item,
        index,
      });
    });
    return Array.from(map.values());
  }, [playlist]);
  const [toastMessage, setToastMessage] = (0, import_react.useState)(null);
  const toastTimeoutRef = (0, import_react.useRef)(null);
  const [showMoreMenu, setShowMoreMenu] = (0, import_react.useState)(false);
  const [showDetailsModal, setShowDetailsModal] = (0, import_react.useState)(
    false,
  );
  const [favorites, setFavorites] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_video_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [playlists, setPlaylists] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_video_playlists");
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: "favs-default",
              name: "Featured Clips",
              createdAt: Date.now(),
              trackNames: [],
            },
          ];
    } catch {
      return [];
    }
  });
  const [newPlaylistName, setNewPlaylistName] = (0, import_react.useState)("");
  const [isCreatingPlaylist, setIsCreatingPlaylist] = (0,
  import_react.useState)(false);
  const [selectedPlaylistForAdd, setSelectedPlaylistForAdd] = (0,
  import_react.useState)(null);
  const currentItem = playlist[currentIndex];
  const getItemTitle = (item) => {
    if (!item) return "Video Player";
    if ("name" in item) return item.name;
    return item.title;
  };
  const getItemSubtitle = (item) => {
    if (!item) return "Video";
    if ("channel" in item) return item.channel;
    return `${(item.size / 1048576).toFixed(1)} MB • ${item.name.split(".").pop()?.toUpperCase()}`;
  };
  const currentTitle = getItemTitle(currentItem);
  const currentSubtitle = getItemSubtitle(currentItem);
  const showToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };
  const [activeVideoSrc, setActiveVideoSrc] = (0, import_react.useState)("");
  const [hasTriedFallback, setHasTriedFallback] = (0, import_react.useState)(
    false,
  );
  const blobUrlRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    setHasTriedFallback(false);
    setErrorMessage(null);
    setProgress(0);
    setDuration(0);
    if (!currentItem) {
      setActiveVideoSrc("");
      return;
    }
    if ("videoUrl" in currentItem) setActiveVideoSrc(currentItem.videoUrl);
    else {
      const url = URL.createObjectURL(currentItem);
      blobUrlRef.current = url;
      setActiveVideoSrc(url);
    }
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [currentItem]);
  const handleVideoError = (0, import_react.useCallback)(() => {
    const video = videoRef.current;
    console.warn(
      "Video load error for:",
      activeVideoSrc,
      video?.error?.message,
    );
    if (
      !hasTriedFallback &&
      currentItem &&
      "fallbackUrl" in currentItem &&
      currentItem.fallbackUrl &&
      activeVideoSrc !== currentItem.fallbackUrl
    ) {
      setHasTriedFallback(true);
      setActiveVideoSrc(currentItem.fallbackUrl);
      showToast("Switching to backup video stream...");
      return;
    }
    if (
      !hasTriedFallback &&
      currentItem &&
      "videoUrl" in currentItem &&
      activeVideoSrc !== "/videos/flower.mp4"
    ) {
      setHasTriedFallback(true);
      setActiveVideoSrc("/videos/flower.mp4");
      showToast("Loading local backup video...");
      return;
    }
    setIsPlaying(false);
    if (currentItem && "name" in currentItem)
      setErrorMessage(
        `Unable to decode "${currentItem.name}". Your browser may not support this video format.`,
      );
    else
      setErrorMessage(
        "Video source could not be played. Please check your connection.",
      );
  }, [activeVideoSrc, hasTriedFallback, currentItem]);
  (0, import_react.useEffect)(() => {
    const video = videoRef.current;
    if (!video || !activeVideoSrc) return;
    setErrorMessage(null);
    video.playbackRate = playbackSpeed;
    video.volume = isMuted ? 0 : volume;
    try {
      video.load();
    } catch {}
    const playPromise = video.play();
    if (playPromise !== void 0)
      playPromise
        .then(() => {
          setIsPlaying(true);
          setErrorMessage(null);
        })
        .catch((err) => {
          console.warn(
            "Autoplay deferred or awaiting user tap:",
            err?.message || err,
          );
          setIsPlaying(false);
        });
    return () => {
      video.pause();
    };
  }, [activeVideoSrc]);
  (0, import_react.useEffect)(() => {
    if (videoRef.current) videoRef.current.volume = isMuted ? 0 : volume;
    try {
      localStorage.setItem("webna_player_volume", volume.toString());
    } catch {}
  }, [volume, isMuted]);
  const resetHideTimer = (0, import_react.useCallback)(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current)
      clearTimeout(hideControlsTimerRef.current);
    if (isPlaying)
      hideControlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3500);
  }, [isPlaying]);
  (0, import_react.useEffect)(() => {
    resetHideTimer();
    return () => {
      if (hideControlsTimerRef.current)
        clearTimeout(hideControlsTimerRef.current);
    };
  }, [isPlaying, resetHideTimer]);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (!video.src && activeVideoSrc) video.src = activeVideoSrc;
      if (video.error) video.load();
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setErrorMessage(null);
        })
        .catch((err) => {
          console.warn("Video playback note:", err?.message || err);
          if (
            err?.name === "NotSupportedError" ||
            String(err?.message).toLowerCase().includes("no supported sources")
          )
            handleVideoError();
          else setIsPlaying(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
    resetHideTimer();
  };
  const handleNext = (0, import_react.useCallback)(() => {
    if (playlist.length <= 1) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
      return;
    }
    if (isShuffle) {
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if (nextIdx === currentIndex && playlist.length > 1)
        nextIdx = (currentIndex + 1) % playlist.length;
      setCurrentIndex(nextIdx);
    } else setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }, [playlist.length, isShuffle, currentIndex]);
  const handlePrev = (0, import_react.useCallback)(() => {
    if (videoRef.current && videoRef.current.currentTime > 3) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      return;
    }
    if (playlist.length <= 1) {
      if (videoRef.current) videoRef.current.currentTime = 0;
      return;
    }
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);
  const handleSkip = (seconds) => {
    if (videoRef.current) {
      const newTime = Math.min(
        Math.max(0, videoRef.current.currentTime + seconds),
        duration || Infinity,
      );
      videoRef.current.currentTime = newTime;
      setProgress(newTime);
      resetHideTimer();
    }
  };
  const handleSeek = (newTime) => {
    setProgress(newTime);
    if (videoRef.current) videoRef.current.currentTime = newTime;
    resetHideTimer();
  };
  const cycleRepeatMode = () => {
    setRepeatMode((current) => {
      if (current === "off") {
        showToast("Repeat All videos");
        return "all";
      }
      if (current === "all") {
        showToast("Repeat Current video");
        return "one";
      }
      showToast("Repeat Off");
      return "off";
    });
  };
  const cycleSpeed = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const nextSpeed =
      speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (videoRef.current) videoRef.current.playbackRate = nextSpeed;
    showToast(`Speed: ${nextSpeed}x`);
  };
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn("Fullscreen toggle error:", err);
    }
  };
  const togglePiP = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        showToast("Picture-in-Picture disabled");
      } else if (document.pictureInPictureEnabled) {
        await video.requestPictureInPicture();
        showToast("Picture-in-Picture enabled");
      }
    } catch (err) {
      console.warn("PiP error:", err);
      showToast("Picture-in-Picture not supported");
    }
  };
  const toggleFavorite = (title) => {
    setFavorites((prev) => {
      const next = prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title];
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(next));
      } catch {}
      return next;
    });
  };
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) setIsMuted(false);
    if (videoRef.current) videoRef.current.volume = newVol;
  };
  const toggleMute = () => {
    if (isMuted) {
      const restoreVol =
        prevVolumeRef.current > 0 ? prevVolumeRef.current : 0.8;
      setIsMuted(false);
      setVolume(restoreVol);
      if (videoRef.current) videoRef.current.volume = restoreVol;
      showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
    } else {
      prevVolumeRef.current = volume > 0 ? volume : 0.8;
      setIsMuted(true);
      if (videoRef.current) videoRef.current.volume = 0;
      showToast("Muted");
    }
  };
  const handleVideoEnded = () => {
    if (stopAfterCurrentTrack) {
      setIsPlaying(false);
      setProgress(0);
      setStopAfterCurrentTrack(false);
      showToast("Stopped playback after video finished");
      return;
    }
    if (repeatMode === "one") {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else if (repeatMode === "all" || currentIndex < playlist.length - 1)
      handleNext();
    else {
      setIsPlaying(false);
      setProgress(0);
    }
  };
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const isFavorite = currentTitle ? favorites.includes(currentTitle) : false;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ref: containerRef,
    onMouseMove: resetHideTimer,
    onClick: resetHideTimer,
    className:
      "fixed inset-0 z-[60] flex flex-col bg-black text-white select-none overflow-hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
        ref: videoRef,
        src: activeVideoSrc || void 0,
        playsInline: true,
        preload: "auto",
        className:
          "absolute inset-0 w-full h-full object-contain cursor-pointer",
        onClick: togglePlay,
        onTimeUpdate: () => {
          if (videoRef.current) setProgress(videoRef.current.currentTime);
        },
        onLoadedMetadata: () => {
          if (videoRef.current) setDuration(videoRef.current.duration);
        },
        onCanPlay: () => {
          setErrorMessage(null);
        },
        onEnded: handleVideoEnded,
        onError: handleVideoError,
      }),
      toastMessage &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "absolute top-16 left-1/2 -translate-x-1/2 z-[90] bg-[#1a1715]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-fade-in pointer-events-none border border-white/10",
          children: toastMessage,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `relative z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/10",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => {
                  if (videoRef.current) videoRef.current.pause();
                  if (onSwitchToAudio) onSwitchToAudio();
                  else onClose();
                },
                className:
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-all hover:bg-white/10",
                title: "Switch to Audio Player",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
                    className: "size-3.5",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Audio player",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                className:
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black shadow-xs transition-all",
                title: "Video Player (Active)",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
                    className: "size-3.5",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Video player",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "hidden sm:block min-w-0 flex-1 px-4 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className:
                  "text-sm font-semibold truncate text-white drop-shadow-sm",
                children: currentTitle,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "text-[11px] text-white/70 truncate",
                children: [
                  currentSubtitle,
                  " • Track ",
                  currentIndex + 1,
                  " of ",
                  playlist.length,
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-1",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: togglePiP,
                className:
                  "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
                title: "Picture in Picture",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  PictureInPicture2,
                  { className: "size-4.5" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => setShowMoreMenu(true),
                className:
                  "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
                title: "Options",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  EllipsisVertical,
                  { className: "size-5" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: onClose,
                className:
                  "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
                title: "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                  className: "size-5",
                }),
              }),
            ],
          }),
        ],
      }),
      !isPlaying &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          onClick: togglePlay,
          className:
            "absolute inset-0 z-10 m-auto size-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl",
          "aria-label": "Play video",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
            className: "size-10 fill-white text-white ml-1",
          }),
        }),
      errorMessage &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 p-3 rounded-2xl bg-destructive/90 text-white text-xs backdrop-blur-md shadow-xl max-w-sm",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
              className: "size-4 shrink-0",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "flex-1 text-left",
              children: errorMessage,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                if (playlist.length > 1) handleNext();
                else if (videoRef.current) {
                  videoRef.current.load();
                  videoRef.current.play().catch(() => {});
                }
              },
              className:
                "px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-lg font-semibold shrink-0 transition-colors",
              children: playlist.length > 1 ? "Next Video" : "Retry",
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-1",
        onClick: togglePlay,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `relative z-20 flex flex-col gap-2.5 px-4 pt-6 pb-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "text-xs font-mono text-white/80 min-w-[42px] text-right",
                children: formatTime(progress),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "relative flex-1 group flex items-center h-6 cursor-pointer",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "range",
                  min: 0,
                  max: duration || 100,
                  step: 0.1,
                  value: progress,
                  onChange: (e) => handleSeek(parseFloat(e.target.value)),
                  className:
                    "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none transition-all group-hover:h-2.5",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-xs font-mono text-white/60 min-w-[42px]",
                children: formatTime(duration),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: cycleRepeatMode,
                    className: `p-2 rounded-xl transition-all ${repeatMode !== "off" ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"}`,
                    title: `Repeat: ${repeatMode}`,
                    children:
                      repeatMode === "one"
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, {
                            className: "size-4.5",
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, {
                            className: "size-4.5",
                          }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => {
                      setIsShuffle((s) => !s);
                      showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
                    },
                    className: `p-2 rounded-xl transition-all ${isShuffle ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"}`,
                    title: "Shuffle",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Shuffle,
                      { className: "size-4.5" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: cycleSpeed,
                    className:
                      "px-2 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors",
                    title: "Playback speed",
                    children: [playbackSpeed, "x"],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: handlePrev,
                    className:
                      "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
                    title: "Previous Video",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      SkipBack,
                      { className: "size-5" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => handleSkip(-10),
                    className:
                      "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
                    title: "Rewind 10s",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      RotateCcw,
                      { className: "size-5" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: togglePlay,
                    className:
                      "size-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg",
                    title: isPlaying ? "Pause" : "Play",
                    children: isPlaying
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
                          className: "size-6 fill-black",
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
                          className: "size-6 fill-black ml-0.5",
                        }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => handleSkip(10),
                    className:
                      "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
                    title: "Forward 10s",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      RotateCw,
                      { className: "size-5" },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: handleNext,
                    className:
                      "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
                    title: "Next Video",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      SkipForward,
                      { className: "size-5" },
                    ),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => toggleFavorite(currentTitle),
                    className: `p-2 rounded-xl transition-all ${isFavorite ? "text-red-500 hover:text-red-400" : "text-white/60 hover:text-white"}`,
                    title: isFavorite
                      ? "Remove from Favorites"
                      : "Add to Favorites",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Heart,
                      {
                        className: `size-5 ${isFavorite ? "fill-current" : ""}`,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: toggleFullscreen,
                    className:
                      "p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/15 transition-all",
                    title: isFullscreen ? "Exit Fullscreen" : "Fullscreen",
                    children: isFullscreen
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, {
                          className: "size-5",
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
                          className: "size-5",
                        }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex items-center justify-between gap-4 pt-2 border-t border-white/10",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2 max-w-[200px] w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: toggleMute,
                    className:
                      "p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
                    title: isMuted ? "Unmute" : "Mute",
                    children:
                      isMuted || volume === 0
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
                            className: "size-4 text-red-400",
                          })
                        : volume < 0.5
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Volume1,
                              { className: "size-4" },
                            )
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Volume2,
                              { className: "size-4" },
                            ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: isMuted ? 0 : volume,
                    onChange: handleVolumeChange,
                    className:
                      "w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none",
                    title: `Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "text-[11px] font-mono text-white/60 min-w-[32px]",
                    children: [Math.round((isMuted ? 0 : volume) * 100), "%"],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-1.5 sm:gap-2 shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () =>
                      setActiveFooterTab(
                        activeFooterTab === "playlists" ? null : "playlists",
                      ),
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
                    title: "View playlists",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                        className: "size-3.5",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Playlist",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () =>
                      setActiveFooterTab(
                        activeFooterTab === "favorites" ? null : "favorites",
                      ),
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
                    title: "View favorites",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                        className: "size-3.5 fill-current text-red-500",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Favorites",
                      }),
                      favorites.length > 0 &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-[10px] bg-red-500/20 text-red-300 font-bold px-1.5 py-0.2 rounded-full",
                          children: favorites.length,
                        }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setSelectedVideoAlbumId(null);
                      setActiveFooterTab(
                        activeFooterTab === "albums" ? null : "albums",
                      );
                    },
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
                    title: "View video albums",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                        className: "size-3.5 text-brand",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Albums",
                      }),
                      videoAlbums.length > 0 &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-[10px] bg-white/20 text-white font-bold px-1.5 py-0.2 rounded-full",
                          children: videoAlbums.length,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      activeFooterTab &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "absolute inset-x-0 bottom-0 z-50 max-h-[75vh] flex flex-col bg-[#141210] border-t border-white/15 rounded-t-3xl shadow-2xl p-5 text-white animate-in slide-in-from-bottom duration-300",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex items-center justify-between pb-3 border-b border-white/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center gap-1 bg-white/10 p-1 rounded-xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setActiveFooterTab("playlists"),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Playlist",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setActiveFooterTab("favorites"),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                          className: "size-3.5 fill-current text-red-500",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Favorites",
                        }),
                        favorites.length > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded-full",
                            children: favorites.length,
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => {
                        setActiveFooterTab("albums");
                        setSelectedVideoAlbumId(null);
                      },
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Albums",
                        }),
                        videoAlbums.length > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "text-[10px] bg-white/20 text-white px-1.5 rounded-full",
                            children: videoAlbums.length,
                          }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: () => setActiveFooterTab(null),
                  className:
                    "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-5",
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex-1 overflow-y-auto py-3 space-y-3",
              children:
                activeFooterTab === "favorites"
                  ? favorites.length === 0
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "text-center py-8 text-white/50 text-xs",
                        children:
                          "No favorite videos yet. Tap the heart icon while watching to add videos to your favorites.",
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "space-y-1.5",
                        children: favorites.map((favTitle, idx) => {
                          const matchIndex = playlist.findIndex(
                            (p) => getItemTitle(p) === favTitle,
                          );
                          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "button",
                                  {
                                    onClick: () => {
                                      if (matchIndex !== -1) {
                                        setCurrentIndex(matchIndex);
                                        setActiveFooterTab(null);
                                      } else
                                        showToast(
                                          `Video "${favTitle}" is not in current queue`,
                                        );
                                    },
                                    className: "flex-1 min-w-0 text-left",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("p", {
                                        className:
                                          "text-sm font-semibold truncate",
                                        children: favTitle,
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("p", {
                                        className: "text-xs text-white/50",
                                        children:
                                          matchIndex !== -1
                                            ? "Tap to play from queue"
                                            : "Saved favorite",
                                      }),
                                    ],
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "button",
                                  {
                                    onClick: () => toggleFavorite(favTitle),
                                    className:
                                      "p-2 text-red-400 hover:text-red-300",
                                    title: "Remove favorite",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)(Trash2, {
                                      className: "size-4",
                                    }),
                                  },
                                ),
                              ],
                            },
                            idx,
                          );
                        }),
                      })
                  : activeFooterTab === "albums"
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "space-y-4",
                        children: selectedVideoAlbumId
                          ? (() => {
                              const album = videoAlbums.find(
                                (a) => a.id === selectedVideoAlbumId,
                              );
                              if (!album) return null;
                              return /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("button", {
                                          onClick: () =>
                                            setSelectedVideoAlbumId(null),
                                          className:
                                            "text-xs font-medium text-brand hover:underline flex items-center gap-1",
                                          children:
                                            "← Back to all video albums",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("span", {
                                          className: "text-xs text-white/50",
                                          children: [
                                            album.items.length,
                                            " ",
                                            album.items.length === 1
                                              ? "video"
                                              : "videos",
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15",
                                      children: [
                                        album.thumbnailUrl
                                          ? /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("img", {
                                              src: album.thumbnailUrl,
                                              alt: album.title,
                                              className:
                                                "size-14 rounded-xl object-cover shrink-0",
                                            })
                                          : /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("div", {
                                              className:
                                                "size-14 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Film, {
                                                className: "size-7",
                                              }),
                                            }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("h4", {
                                              className:
                                                "font-bold text-sm text-white truncate",
                                              children: album.title,
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-xs text-white/60 truncate mt-0.5",
                                              children: album.description,
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("button", {
                                          onClick: () => {
                                            if (album.items.length > 0) {
                                              setCurrentIndex(
                                                album.items[0].index,
                                              );
                                              showToast(
                                                `Playing "${album.title}"`,
                                              );
                                            }
                                          },
                                          className:
                                            "flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Play, {
                                              className:
                                                "size-3.5 fill-black ml-0.5",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              children: "Play All",
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "space-y-1.5",
                                      children: album.items.map(
                                        ({ item, index }) => {
                                          const isCurrent =
                                            index === currentIndex;
                                          const title = getItemTitle(item);
                                          const subtitle =
                                            getItemSubtitle(item);
                                          return /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${isCurrent ? "bg-white/20 border-white/40 text-white" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      setCurrentIndex(index);
                                                      setActiveFooterTab(null);
                                                    },
                                                    className:
                                                      "flex items-center gap-3 min-w-0 flex-1 text-left",
                                                    children: [
                                                      "thumbnailUrl" in item
                                                        ? /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            "img",
                                                            {
                                                              src: item.thumbnailUrl,
                                                              alt: title,
                                                              className:
                                                                "w-12 h-8 rounded-lg object-cover shrink-0",
                                                            },
                                                          )
                                                        : /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                "size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0",
                                                              children:
                                                                /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  Film,
                                                                  {
                                                                    className:
                                                                      "size-4 text-white/60",
                                                                  },
                                                                ),
                                                            },
                                                          ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "min-w-0 flex-1",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-semibold text-xs truncate",
                                                                children: title,
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-[10px] text-white/50 truncate",
                                                                children:
                                                                  subtitle,
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                isCurrent
                                                  ? /* @__PURE__ */ (0,
                                                    import_jsx_runtime.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] bg-brand text-brand-foreground px-2 py-0.5 rounded-full font-semibold ml-2",
                                                        children: "Playing",
                                                      },
                                                    )
                                                  : /* @__PURE__ */ (0,
                                                    import_jsx_runtime.jsx)(
                                                      "button",
                                                      {
                                                        onClick: () => {
                                                          setCurrentIndex(
                                                            index,
                                                          );
                                                          setActiveFooterTab(
                                                            null,
                                                          );
                                                        },
                                                        className:
                                                          "p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white ml-2",
                                                        title:
                                                          "Play this video",
                                                        children:
                                                          /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            Play,
                                                            {
                                                              className:
                                                                "size-3.5 fill-current ml-0.5",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                              ],
                                            },
                                            index,
                                          );
                                        },
                                      ),
                                    },
                                  ),
                                ],
                              });
                            })()
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              import_jsx_runtime.Fragment,
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between gap-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "flex items-center gap-3 min-w-0 flex-1",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("div", {
                                              className:
                                                "size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Disc, {
                                                className: "size-6",
                                              }),
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("div", {
                                              className: "min-w-0 flex-1",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-[10px] uppercase font-bold text-brand tracking-wider",
                                                    children:
                                                      "Current Video Album / Channel",
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("h4", {
                                                  className:
                                                    "font-bold text-sm text-white truncate",
                                                  children:
                                                    currentItem &&
                                                    "channel" in currentItem
                                                      ? currentItem.channel
                                                      : "Uploaded Video Library",
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("p", {
                                                  className:
                                                    "text-xs text-white/60 truncate",
                                                  children: currentTitle,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("button", {
                                          onClick: () => {
                                            const targetAlbum =
                                              videoAlbums.find((a) =>
                                                a.items.some(
                                                  (it) =>
                                                    it.index === currentIndex,
                                                ),
                                              );
                                            if (targetAlbum)
                                              setSelectedVideoAlbumId(
                                                targetAlbum.id,
                                              );
                                          },
                                          className:
                                            "px-3 py-1.5 rounded-xl bg-white text-black text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shrink-0",
                                          children: "View Album",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "space-y-2",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("h4", {
                                          className:
                                            "text-xs font-semibold text-white/60 uppercase tracking-wider",
                                          children: [
                                            "Available Video Albums (",
                                            videoAlbums.length,
                                            ")",
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "grid grid-cols-1 gap-2",
                                          children: [
                                            videoAlbums.map((album) => {
                                              const isCurrentAlbum =
                                                album.items.some(
                                                  (it) =>
                                                    it.index === currentIndex,
                                                );
                                              return /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    setSelectedVideoAlbumId(
                                                      album.id,
                                                    ),
                                                  className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:bg-white/10 ${isCurrentAlbum ? "bg-white/10 border-brand/50 ring-1 ring-brand/30" : "bg-white/5 border-white/10"}`,
                                                  children: [
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_runtime.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center gap-3 min-w-0 flex-1",
                                                        children: [
                                                          album.thumbnailUrl
                                                            ? /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                "img",
                                                                {
                                                                  src: album.thumbnailUrl,
                                                                  alt: album.title,
                                                                  className:
                                                                    "size-11 rounded-xl object-cover shrink-0",
                                                                },
                                                              )
                                                            : /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
                                                                  children:
                                                                    /* @__PURE__ */ (0,
                                                                    import_jsx_runtime.jsx)(
                                                                      Film,
                                                                      {
                                                                        className:
                                                                          "size-5",
                                                                      },
                                                                    ),
                                                                },
                                                              ),
                                                          /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsxs)(
                                                            "div",
                                                            {
                                                              className:
                                                                "min-w-0 flex-1",
                                                              children: [
                                                                /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "font-semibold text-sm text-white truncate",
                                                                    children:
                                                                      album.title,
                                                                  },
                                                                ),
                                                                /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsxs)(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-xs text-white/60 truncate",
                                                                    children: [
                                                                      album
                                                                        .items
                                                                        .length,
                                                                      " ",
                                                                      album
                                                                        .items
                                                                        .length ===
                                                                      1
                                                                        ? "video"
                                                                        : "videos",
                                                                      " ",
                                                                      "• ",
                                                                      album.description,
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_runtime.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-xs text-brand font-medium ml-2 shrink-0",
                                                        children: "Browse →",
                                                      },
                                                    ),
                                                  ],
                                                },
                                                album.id,
                                              );
                                            }),
                                            videoAlbums.length === 0 &&
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("p", {
                                                className:
                                                  "text-center py-8 text-xs text-white/50",
                                                children:
                                                  "No video albums available",
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "input",
                                {
                                  type: "text",
                                  placeholder: "New playlist name...",
                                  value: newPlaylistName,
                                  onChange: (e) =>
                                    setNewPlaylistName(e.target.value),
                                  className:
                                    "flex-1 px-3 py-2 bg-white/10 rounded-xl text-sm border border-white/15 focus:outline-none focus:border-white/40 text-white",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => {
                                    if (!newPlaylistName.trim()) return;
                                    const newP = {
                                      id: `pl-${Date.now()}`,
                                      name: newPlaylistName.trim(),
                                      createdAt: Date.now(),
                                      trackNames: [currentTitle],
                                    };
                                    const next = [...playlists, newP];
                                    setPlaylists(next);
                                    localStorage.setItem(
                                      "webna_video_playlists",
                                      JSON.stringify(next),
                                    );
                                    setNewPlaylistName("");
                                    showToast(`Created "${newP.name}"`);
                                  },
                                  className:
                                    "flex items-center gap-1.5 px-3 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Plus,
                                      { className: "size-4" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: "Create" },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "space-y-2",
                            children: playlists.map((pl) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-sm font-semibold",
                                              children: pl.name,
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("p", {
                                              className:
                                                "text-xs text-white/50",
                                              children: [
                                                pl.trackNames.length,
                                                " ",
                                                pl.trackNames.length === 1
                                                  ? "video"
                                                  : "videos",
                                              ],
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              onClick: () => {
                                                if (
                                                  pl.trackNames.includes(
                                                    currentTitle,
                                                  )
                                                ) {
                                                  showToast(
                                                    "Video already in this playlist",
                                                  );
                                                  return;
                                                }
                                                const updated = playlists.map(
                                                  (p) =>
                                                    p.id === pl.id
                                                      ? {
                                                          ...p,
                                                          trackNames: [
                                                            ...p.trackNames,
                                                            currentTitle,
                                                          ],
                                                        }
                                                      : p,
                                                );
                                                setPlaylists(updated);
                                                localStorage.setItem(
                                                  "webna_video_playlists",
                                                  JSON.stringify(updated),
                                                );
                                                showToast(
                                                  `Added to "${pl.name}"`,
                                                );
                                              },
                                              className:
                                                "flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  FolderPlus,
                                                  { className: "size-3.5" },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  { children: "Add Current" },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: () => {
                                                const updated =
                                                  playlists.filter(
                                                    (p) => p.id !== pl.id,
                                                  );
                                                setPlaylists(updated);
                                                localStorage.setItem(
                                                  "webna_video_playlists",
                                                  JSON.stringify(updated),
                                                );
                                                showToast(
                                                  `Deleted "${pl.name}"`,
                                                );
                                              },
                                              className:
                                                "p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors",
                                              title: "Delete playlist",
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Trash2, {
                                                className: "size-3.5",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    pl.trackNames.length > 0 &&
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("div", {
                                        className:
                                          "pt-2 border-t border-white/10 space-y-1",
                                        children: pl.trackNames.map(
                                          (tName, i) => {
                                            const matchIdx = playlist.findIndex(
                                              (p) => getItemTitle(p) === tName,
                                            );
                                            return /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex items-center justify-between p-1.5 rounded-lg bg-white/5 text-xs hover:bg-white/10",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "button",
                                                    {
                                                      onClick: () => {
                                                        if (matchIdx !== -1) {
                                                          setCurrentIndex(
                                                            matchIdx,
                                                          );
                                                          setActiveFooterTab(
                                                            null,
                                                          );
                                                        } else
                                                          showToast(
                                                            `Video "${tName}" is not in current queue`,
                                                          );
                                                      },
                                                      className:
                                                        "flex items-center gap-2 min-w-0 flex-1 text-left",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Play,
                                                          {
                                                            className:
                                                              "size-3 text-brand shrink-0 ml-0.5",
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "truncate",
                                                            children: tName,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "button",
                                                    {
                                                      onClick: () => {
                                                        const updated =
                                                          playlists.map((p) =>
                                                            p.id === pl.id
                                                              ? {
                                                                  ...p,
                                                                  trackNames:
                                                                    p.trackNames.filter(
                                                                      (
                                                                        _,
                                                                        idx,
                                                                      ) =>
                                                                        idx !==
                                                                        i,
                                                                    ),
                                                                }
                                                              : p,
                                                          );
                                                        setPlaylists(updated);
                                                        localStorage.setItem(
                                                          "webna_video_playlists",
                                                          JSON.stringify(
                                                            updated,
                                                          ),
                                                        );
                                                      },
                                                      className:
                                                        "p-1 text-white/40 hover:text-red-400",
                                                      title:
                                                        "Remove video from playlist",
                                                      children:
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Trash2,
                                                          {
                                                            className: "size-3",
                                                          },
                                                        ),
                                                    },
                                                  ),
                                                ],
                                              },
                                              i,
                                            );
                                          },
                                        ),
                                      }),
                                  ],
                                },
                                pl.id,
                              ),
                            ),
                          }),
                        ],
                      }),
            }),
          ],
        }),
      showMoreMenu &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[80] bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "w-full max-w-sm bg-[#1a1715] border border-white/15 rounded-3xl p-4 shadow-2xl text-white space-y-2 animate-in zoom-in-95 duration-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-2 border-b border-white/10",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0 pr-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm font-semibold truncate",
                        children: currentTitle,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs text-white/60",
                        children: "Options",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowMoreMenu(false),
                    className:
                      "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => {
                  setShowMoreMenu(false);
                  setShowDetailsModal(true);
                },
                className:
                  "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                    className: "size-4.5 text-brand",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Video details & specs",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: () => {
                  setStopAfterCurrentTrack((prev) => {
                    showToast(
                      !prev
                        ? "Will stop after this video finishes"
                        : "Stop after video cancelled",
                    );
                    return !prev;
                  });
                  setShowMoreMenu(false);
                },
                className:
                  "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                    className: "size-4.5 text-amber-400",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: stopAfterCurrentTrack
                      ? "Cancel Stop After Video"
                      : "Stop after this video",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: async () => {
                  setShowMoreMenu(false);
                  if (navigator.share)
                    try {
                      await navigator.share({
                        title: currentTitle,
                        text: `Watching ${currentTitle} on WebNa Video Player`,
                      });
                    } catch {}
                  else {
                    await navigator.clipboard.writeText(currentTitle);
                    showToast("Video title copied to clipboard");
                  }
                },
                className:
                  "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
                    className: "size-4.5 text-blue-400",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "Share video",
                  }),
                ],
              }),
            ],
          }),
        }),
      showDetailsModal &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "w-full max-w-sm bg-[#1c1917] border border-white/15 rounded-3xl p-5 shadow-2xl text-white space-y-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between pb-2 border-b border-white/10",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "text-base font-semibold",
                    children: "Video Details",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => setShowDetailsModal(false),
                    className:
                      "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-xs space-y-2 text-white/80",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                        className: "text-white",
                        children: "Title:",
                      }),
                      " ",
                      currentTitle,
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                        className: "text-white",
                        children: "Duration:",
                      }),
                      " ",
                      formatTime(duration),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                        className: "text-white",
                        children: "Source:",
                      }),
                      " ",
                      "channel" in (currentItem || {})
                        ? "Streaming Catalog"
                        : "Device Storage",
                    ],
                  }),
                  "quality" in (currentItem || {}) &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          className: "text-white",
                          children: "Quality:",
                        }),
                        " ",
                        currentItem.quality,
                      ],
                    }),
                  "size" in (currentItem || {}) &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          className: "text-white",
                          children: "File Size:",
                        }),
                        " ",
                        ((currentItem.size || 0) / 1048576).toFixed(2),
                        " ",
                        "MB",
                      ],
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: () => setShowDetailsModal(false),
                className:
                  "w-full py-2 bg-white text-black text-xs font-semibold rounded-xl mt-2",
                children: "Close",
              }),
            ],
          }),
        }),
    ],
  });
}
function AudioPlayerPanel({
  playerMode: externalPlayerMode,
  onPlayerModeChange,
  initialVideoQueue,
  initialVideoIndex,
  onCloseVideo,
}) {
  const [internalPlayerMode, setInternalPlayerMode] = (0,
  import_react.useState)("audio");
  const currentMode = externalPlayerMode ?? internalPlayerMode;
  const setPlayerMode = (mode) => {
    if (onPlayerModeChange) onPlayerModeChange(mode);
    else setInternalPlayerMode(mode);
  };
  const [audioTab, setAudioTab] = (0, import_react.useState)("foryou");
  const [audioTracks, setAudioTracks] = (0, import_react.useState)([]);
  const [localAudioTracks, setLocalAudioTracks] = (0, import_react.useState)(
    [],
  );
  const [selectedAudioNames, setSelectedAudioNames] = (0,
  import_react.useState)(/* @__PURE__ */ new Set());
  const [activeAudioQueue, setActiveAudioQueue] = (0, import_react.useState)(
    null,
  );
  const [playingAudioIndex, setPlayingAudioIndex] = (0, import_react.useState)(
    null,
  );
  const [musicQuery, setMusicQuery] = (0, import_react.useState)("");
  const [searchResults, setSearchResults] = (0, import_react.useState)([]);
  const [isSearching, setIsSearching] = (0, import_react.useState)(false);
  const [selectedMusicPlatform, setSelectedMusicPlatform] = (0,
  import_react.useState)("spotify");
  const handleMusicSearch = async (e, overrideQuery) => {
    if (e) e.preventDefault();
    const query = (overrideQuery ?? musicQuery).trim();
    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    try {
      const results = await searchMusicTracks({ data: query });
      setSearchResults(results);
    } catch (err) {
      console.error("Music search error:", err);
      const lower = query.toLowerCase();
      const filtered = audioTracks.filter(
        (t) =>
          t.title.toLowerCase().includes(lower) ||
          t.artist.toLowerCase().includes(lower),
      );
      setSearchResults(filtered);
    } finally {
      setIsSearching(false);
    }
  };
  const handleSelectPlatform = async (pId) => {
    setSelectedMusicPlatform(pId);
    if (musicQuery.trim()) handleMusicSearch(void 0, musicQuery.trim());
    else {
      const query =
        {
          all: "Top Hits",
          spotify: "Spotify Top Hits",
          apple: "Apple Music Pop",
          itunes: "Top 40",
          youtube: "Trending Viral",
          amazon: "Amazon Music Prime",
          tidal: "Master Audio Hits",
          deezer: "Deezer Top Chart",
          soundcloud: "SoundCloud Trending",
          bandcamp: "Indie Essentials",
          pandora: "Top Radio Hits",
          qobuz: "Hi-Res Audio Hits",
          napster: "Trending Classics",
          boomplay: "Afrobeats & Pop",
          audiomack: "Hip-Hop Hits",
        }[pId] || "Top Hits";
      setIsSearching(true);
      try {
        const results = await searchMusicTracks({ data: query });
        if (results && results.length > 0) setSearchResults(results);
      } catch (err) {
        console.error("Platform fetch error:", err);
      } finally {
        setIsSearching(false);
      }
    }
  };
  const [videoTab, setVideoTab] = (0, import_react.useState)("foryou");
  const [videoTracks, setVideoTracks] = (0, import_react.useState)([]);
  const [localVideoTracks, setLocalVideoTracks] = (0, import_react.useState)(
    [],
  );
  const [selectedVideoNames, setSelectedVideoNames] = (0,
  import_react.useState)(/* @__PURE__ */ new Set());
  const [activeVideoQueue, setActiveVideoQueue] = (0, import_react.useState)(
    null,
  );
  const [playingVideoIndex, setPlayingVideoIndex] = (0, import_react.useState)(
    null,
  );
  (0, import_react.useEffect)(() => {
    if (currentMode === "audio" && audioTab === "foryou")
      getTrendingTracks().then(setAudioTracks);
  }, [currentMode, audioTab]);
  (0, import_react.useEffect)(() => {
    if (currentMode === "video" && videoTab === "foryou")
      getTrendingVideos().then(setVideoTracks);
  }, [currentMode, videoTab]);
  (0, import_react.useEffect)(() => {
    if (initialVideoQueue && initialVideoQueue.length > 0) {
      setActiveVideoQueue(initialVideoQueue);
      setPlayingVideoIndex(initialVideoIndex ?? 0);
    }
  }, [initialVideoQueue, initialVideoIndex]);
  const [pageFooterModal, setPageFooterModal] = (0, import_react.useState)(
    null,
  );
  const [selectedAlbumItem, setSelectedAlbumItem] = (0, import_react.useState)(
    null,
  );
  const [selectedPlaylistDetailId, setSelectedPlaylistDetailId] = (0,
  import_react.useState)(null);
  const [newPlaylistInput, setNewPlaylistInput] = (0, import_react.useState)(
    "",
  );
  const [audioPlaylists, setAudioPlaylists] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_user_playlists");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: "default-1",
        name: "My Favorite Mix",
        trackNames: [],
      },
      {
        id: "default-2",
        name: "Chill & Focus",
        trackNames: [],
      },
    ];
  });
  const [audioFavorites, setAudioFavorites] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_favorites");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });
  const [videoPlaylists, setVideoPlaylists] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_video_playlists");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: "favs-default",
        name: "Featured Clips",
        trackNames: [],
      },
    ];
  });
  const [videoFavorites, setVideoFavorites] = (0, import_react.useState)(() => {
    try {
      const saved = localStorage.getItem("webna_video_favorites");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });
  (0, import_react.useEffect)(() => {
    try {
      const aPl = localStorage.getItem("webna_user_playlists");
      if (aPl) setAudioPlaylists(JSON.parse(aPl));
      const aFav = localStorage.getItem("webna_favorites");
      if (aFav) setAudioFavorites(JSON.parse(aFav));
      const vPl = localStorage.getItem("webna_video_playlists");
      if (vPl) setVideoPlaylists(JSON.parse(vPl));
      const vFav = localStorage.getItem("webna_video_favorites");
      if (vFav) setVideoFavorites(JSON.parse(vFav));
    } catch {}
  }, [pageFooterModal]);
  const audioAlbums = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    localAudioTracks.forEach((file) => {
      const base = file.name.replace(/\.[^/.]+$/, "");
      let artist = "My Phone Audio";
      let album = "Local Phone Tracks";
      let title = base;
      if (base.includes(" - ")) {
        const parts = base.split(" - ");
        artist = parts[0].trim();
        title = parts[1].trim();
        album = `${artist} Album`;
      }
      if (!map.has(album))
        map.set(album, {
          albumName: album,
          artist,
          tracks: [],
        });
      map.get(album).tracks.push({
        title,
        file,
      });
    });
    audioTracks.forEach((t) => {
      const album = `${t.artist} Essentials`;
      if (!map.has(album))
        map.set(album, {
          albumName: album,
          artist: t.artist,
          tracks: [],
        });
      map.get(album).tracks.push({
        title: t.title,
        trending: t,
      });
    });
    return Array.from(map.values());
  }, [localAudioTracks, audioTracks]);
  const videoAlbums = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    videoTracks.forEach((v) => {
      const ch = v.channel || "Curated Collection";
      if (!map.has(ch))
        map.set(ch, {
          albumName: ch,
          description: `${ch} Video Series`,
          thumbnailUrl: v.thumbnailUrl,
          items: [],
        });
      map.get(ch).items.push(v);
    });
    if (localVideoTracks.length > 0)
      map.set("My Uploaded Videos", {
        albumName: "My Uploaded Videos",
        description: "Videos from your phone storage",
        items: localVideoTracks,
      });
    return Array.from(map.values());
  }, [videoTracks, localVideoTracks]);
  const handleCreateNewPlaylist = (e) => {
    e.preventDefault();
    const name = newPlaylistInput.trim();
    if (!name) return;
    if (currentMode === "audio") {
      const updated = [
        {
          id: `pl-${Date.now()}`,
          name,
          trackNames: [],
        },
        ...audioPlaylists,
      ];
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = [
        {
          id: `vpl-${Date.now()}`,
          name,
          trackNames: [],
        },
        ...videoPlaylists,
      ];
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
    setNewPlaylistInput("");
  };
  const handleDeletePlaylist = (id) => {
    if (currentMode === "audio") {
      const updated = audioPlaylists.filter((p) => p.id !== id);
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.filter((p) => p.id !== id);
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
    if (selectedPlaylistDetailId === id) setSelectedPlaylistDetailId(null);
  };
  const handleRemoveFavorite = (name) => {
    if (currentMode === "audio") {
      const updated = audioFavorites.filter((f) => f !== name);
      setAudioFavorites(updated);
      try {
        localStorage.setItem("webna_favorites", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoFavorites.filter((f) => f !== name);
      setVideoFavorites(updated);
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };
  const resolveAudioItem = (songName) => {
    const local = localAudioTracks.find(
      (f) =>
        f.name === songName ||
        f.name.replace(/\.[^/.]+$/, "") === songName ||
        f.name.toLowerCase() === songName.toLowerCase(),
    );
    if (local) return local;
    const trending = audioTracks.find(
      (t) =>
        t.title === songName ||
        `${t.artist} - ${t.title}` === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (trending) return trending;
    const searched = searchResults.find(
      (t) =>
        t.title === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (searched) return searched;
    return {
      title: songName,
      artist: "Popular Artist",
      coverUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80",
      rank: 1,
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    };
  };
  const playSongByName = (songName) => {
    const localIdx = localAudioTracks.findIndex(
      (f) =>
        f.name === songName ||
        f.name.replace(/\.[^/.]+$/, "") === songName ||
        f.name.toLowerCase() === songName.toLowerCase(),
    );
    if (localIdx !== -1) {
      playFromAudioTracks(localAudioTracks, localIdx);
      setPageFooterModal(null);
      return;
    }
    const trendingIdx = audioTracks.findIndex(
      (t) =>
        t.title === songName ||
        `${t.artist} - ${t.title}` === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (trendingIdx !== -1) {
      playFromAudioTracks(audioTracks, trendingIdx);
      setPageFooterModal(null);
      return;
    }
    const searchIdx = searchResults.findIndex(
      (t) =>
        t.title === songName ||
        t.title.toLowerCase().includes(songName.toLowerCase()),
    );
    if (searchIdx !== -1) {
      playFromAudioTracks(searchResults, searchIdx);
      setPageFooterModal(null);
      return;
    }
    const resolved = resolveAudioItem(songName);
    playFromAudioTracks([resolved], 0);
    setPageFooterModal(null);
  };
  const playPlaylist = (pl, startIndex = 0) => {
    if (pl.trackNames.length === 0) return;
    const queue = pl.trackNames.map((name) => resolveAudioItem(name));
    playFromAudioTracks(
      queue,
      Math.max(0, Math.min(startIndex, queue.length - 1)),
    );
    setPageFooterModal(null);
  };
  const playVideoByName = (videoName) => {
    const localIdx = localVideoTracks.findIndex((f) => f.name === videoName);
    if (localIdx !== -1) {
      playFromVideoTracks(localVideoTracks, localIdx);
      setPageFooterModal(null);
      return;
    }
    const trendingIdx = videoTracks.findIndex((v) => v.title === videoName);
    if (trendingIdx !== -1) {
      playFromVideoTracks(videoTracks, trendingIdx);
      setPageFooterModal(null);
      return;
    }
    if (videoTracks.length > 0) {
      playFromVideoTracks(videoTracks, 0);
      setPageFooterModal(null);
    }
  };
  const toggleAudioFavorite = (name) => {
    setAudioFavorites((prev) => {
      const next = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];
      try {
        localStorage.setItem("webna_favorites", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };
  const toggleVideoFavorite = (name) => {
    setVideoFavorites((prev) => {
      const next = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];
      try {
        localStorage.setItem("webna_video_favorites", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };
  const handleAddTrackToPlaylist = (playlistId, trackName) => {
    if (!trackName.trim()) return;
    if (currentMode === "audio") {
      const updated = audioPlaylists.map((p) => {
        if (p.id === playlistId) {
          if (p.trackNames.includes(trackName)) return p;
          return {
            ...p,
            trackNames: [...p.trackNames, trackName],
          };
        }
        return p;
      });
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.map((p) => {
        if (p.id === playlistId) {
          if (p.trackNames.includes(trackName)) return p;
          return {
            ...p,
            trackNames: [...p.trackNames, trackName],
          };
        }
        return p;
      });
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };
  const handleRemoveTrackFromPlaylist = (playlistId, trackName) => {
    if (currentMode === "audio") {
      const updated = audioPlaylists.map((p) => {
        if (p.id === playlistId)
          return {
            ...p,
            trackNames: p.trackNames.filter((t) => t !== trackName),
          };
        return p;
      });
      setAudioPlaylists(updated);
      try {
        localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    } else {
      const updated = videoPlaylists.map((p) => {
        if (p.id === playlistId)
          return {
            ...p,
            trackNames: p.trackNames.filter((t) => t !== trackName),
          };
        return p;
      });
      setVideoPlaylists(updated);
      try {
        localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };
  const handleAudioFilesAdded = (files) => {
    if (!files || files.length === 0) return;
    const added = Array.from(files);
    setLocalAudioTracks((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const uniqueNew = added.filter(
        (f) => !existingKeys.has(`${f.name}-${f.size}`),
      );
      const combined = [...prev, ...uniqueNew];
      setSelectedAudioNames((prevSel) => {
        const nextSel = new Set(prevSel);
        uniqueNew.forEach((f) => nextSel.add(f.name));
        return nextSel;
      });
      return combined;
    });
  };
  const toggleSelectAudio = (fileName) => {
    setSelectedAudioNames((prev) => {
      const next = new Set(prev);
      if (next.has(fileName)) next.delete(fileName);
      else next.add(fileName);
      return next;
    });
  };
  const toggleSelectAllAudio = () => {
    if (selectedAudioNames.size === localAudioTracks.length)
      setSelectedAudioNames(/* @__PURE__ */ new Set());
    else setSelectedAudioNames(new Set(localAudioTracks.map((f) => f.name)));
  };
  const removeLocalAudioTrack = (index) => {
    const trackToRemove = localAudioTracks[index];
    setLocalAudioTracks((prev) => prev.filter((_, i) => i !== index));
    if (trackToRemove)
      setSelectedAudioNames((prev) => {
        const next = new Set(prev);
        next.delete(trackToRemove.name);
        return next;
      });
  };
  const clearAllAudioTracks = () => {
    setLocalAudioTracks([]);
    setSelectedAudioNames(/* @__PURE__ */ new Set());
  };
  const playFromAudioTracks = (queue, startIndex = 0) => {
    if (queue.length === 0) return;
    setActiveAudioQueue(queue);
    setPlayingAudioIndex(startIndex);
  };
  const handlePlaySelectedAudio = () => {
    const queue = localAudioTracks.filter((t) =>
      selectedAudioNames.has(t.name),
    );
    if (queue.length > 0) playFromAudioTracks(queue, 0);
    else if (localAudioTracks.length > 0)
      playFromAudioTracks(localAudioTracks, 0);
  };
  const handlePlaySingleAudio = (index) => {
    const targetFile = localAudioTracks[index];
    const selectedList = localAudioTracks.filter((t) =>
      selectedAudioNames.has(t.name),
    );
    if (selectedList.length > 1 && selectedAudioNames.has(targetFile.name)) {
      const startIdx = selectedList.findIndex(
        (t) => t.name === targetFile.name,
      );
      playFromAudioTracks(selectedList, Math.max(0, startIdx));
    } else playFromAudioTracks(localAudioTracks, index);
  };
  const handleVideoFilesAdded = (files) => {
    if (!files || files.length === 0) return;
    const added = Array.from(files);
    setLocalVideoTracks((prev) => {
      const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const uniqueNew = added.filter(
        (f) => !existingKeys.has(`${f.name}-${f.size}`),
      );
      const combined = [...prev, ...uniqueNew];
      setSelectedVideoNames((prevSel) => {
        const nextSel = new Set(prevSel);
        uniqueNew.forEach((f) => nextSel.add(f.name));
        return nextSel;
      });
      return combined;
    });
  };
  const toggleSelectVideo = (fileName) => {
    setSelectedVideoNames((prev) => {
      const next = new Set(prev);
      if (next.has(fileName)) next.delete(fileName);
      else next.add(fileName);
      return next;
    });
  };
  const toggleSelectAllVideo = () => {
    if (selectedVideoNames.size === localVideoTracks.length)
      setSelectedVideoNames(/* @__PURE__ */ new Set());
    else setSelectedVideoNames(new Set(localVideoTracks.map((f) => f.name)));
  };
  const removeLocalVideoTrack = (index) => {
    const videoToRemove = localVideoTracks[index];
    setLocalVideoTracks((prev) => prev.filter((_, i) => i !== index));
    if (videoToRemove)
      setSelectedVideoNames((prev) => {
        const next = new Set(prev);
        next.delete(videoToRemove.name);
        return next;
      });
  };
  const clearAllVideoTracks = () => {
    setLocalVideoTracks([]);
    setSelectedVideoNames(/* @__PURE__ */ new Set());
  };
  const playFromVideoTracks = (queue, startIndex = 0) => {
    if (queue.length === 0) return;
    setActiveVideoQueue(queue);
    setPlayingVideoIndex(startIndex);
  };
  const handlePlaySelectedVideo = () => {
    const queue = localVideoTracks.filter((t) =>
      selectedVideoNames.has(t.name),
    );
    if (queue.length > 0) playFromVideoTracks(queue, 0);
    else if (localVideoTracks.length > 0)
      playFromVideoTracks(localVideoTracks, 0);
  };
  const handlePlaySingleVideo = (index) => {
    const targetFile = localVideoTracks[index];
    const selectedList = localVideoTracks.filter((t) =>
      selectedVideoNames.has(t.name),
    );
    if (selectedList.length > 1 && selectedVideoNames.has(targetFile.name)) {
      const startIdx = selectedList.findIndex(
        (t) => t.name === targetFile.name,
      );
      playFromVideoTracks(selectedList, Math.max(0, startIdx));
    } else playFromVideoTracks(localVideoTracks, index);
  };
  const selectedAudioCount = selectedAudioNames.size;
  const isAllAudioSelected =
    localAudioTracks.length > 0 &&
    selectedAudioCount === localAudioTracks.length;
  const selectedVideoCount = selectedVideoNames.size;
  const isAllVideoSelected =
    localVideoTracks.length > 0 &&
    selectedVideoCount === localVideoTracks.length;
  const currentPlaylistsCount =
    currentMode === "audio" ? audioPlaylists.length : videoPlaylists.length;
  const currentFavoritesCount =
    currentMode === "audio" ? audioFavorites.length : videoFavorites.length;
  const currentAlbumsCount =
    currentMode === "audio" ? audioAlbums.length : videoAlbums.length;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col h-full select-none",
          children: [
            pageFooterModal
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex-1 overflow-y-auto min-h-0 space-y-4 px-4 py-3",
                  children: [
                    pageFooterModal === "favorites" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => setPageFooterModal(null),
                                  className:
                                    "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      ChevronLeft,
                                      { className: "size-4" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: "Back to Player" },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "span",
                                {
                                  className:
                                    "text-xs font-semibold text-muted-foreground",
                                  children: [
                                    currentMode === "audio"
                                      ? "Audio Favorites"
                                      : "Video Favorites",
                                    " ",
                                    "(",
                                    currentMode === "audio"
                                      ? audioFavorites.length
                                      : videoFavorites.length,
                                    ")",
                                  ],
                                },
                              ),
                            ],
                          }),
                          (currentMode === "audio"
                            ? audioFavorites
                            : videoFavorites
                          ).length > 0
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                import_jsx_runtime.Fragment,
                                {
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-xs text-muted-foreground font-medium",
                                          children:
                                            currentMode === "audio"
                                              ? "Your favorited songs"
                                              : "Your favorited videos",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("button", {
                                          onClick: () => {
                                            if (currentMode === "audio") {
                                              if (audioFavorites.length > 0)
                                                playSongByName(
                                                  audioFavorites[0],
                                                );
                                            } else if (
                                              videoFavorites.length > 0
                                            )
                                              playVideoByName(
                                                videoFavorites[0],
                                              );
                                          },
                                          className:
                                            "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 transition-all",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Play, {
                                              className:
                                                "size-3.5 fill-current",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              children: "Play All Favorites",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className: "space-y-2",
                                        children: (currentMode === "audio"
                                          ? audioFavorites
                                          : videoFavorites
                                        ).map((name, idx) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/30 transition-all",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-3 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
                                                          children:
                                                            currentMode ===
                                                            "audio"
                                                              ? /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  Music,
                                                                  {
                                                                    className:
                                                                      "size-5",
                                                                  },
                                                                )
                                                              : /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  Film,
                                                                  {
                                                                    className:
                                                                      "size-5",
                                                                  },
                                                                ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "min-w-0 flex-1",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
                                                                children: name,
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsxs)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-[11px] text-[#8c827a] mt-0.5",
                                                                children: [
                                                                  "Favorite #",
                                                                  idx + 1,
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick: () => {
                                                            if (
                                                              currentMode ===
                                                              "audio"
                                                            )
                                                              playSongByName(
                                                                name,
                                                              );
                                                            else
                                                              playVideoByName(
                                                                name,
                                                              );
                                                          },
                                                          className:
                                                            "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
                                                          title: "Play",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Play,
                                                              {
                                                                className:
                                                                  "size-4 fill-current ml-0.5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick: () =>
                                                            handleRemoveFavorite(
                                                              name,
                                                            ),
                                                          className:
                                                            "p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                                          title:
                                                            "Remove from favorites",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Trash2,
                                                              {
                                                                className:
                                                                  "size-4",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            },
                                            name,
                                          ),
                                        ),
                                      },
                                    ),
                                  ],
                                },
                              )
                            : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "text-center text-muted-foreground py-12 flex flex-col items-center justify-center gap-3",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "size-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center",
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Heart, {
                                          className: "size-8",
                                        }),
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-sm font-semibold text-[#3c342d]",
                                          children: "No favorites yet",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("p", {
                                          className:
                                            "text-xs text-[#8c827a] mt-1 max-w-xs",
                                          children: [
                                            "Tap the heart icon on any",
                                            " ",
                                            currentMode === "audio"
                                              ? "song"
                                              : "video",
                                            " in your library or trending feed to add it here.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("button", {
                                      onClick: () => setPageFooterModal(null),
                                      className:
                                        "mt-2 px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition-all",
                                      children: [
                                        "Browse ",
                                        currentMode === "audio"
                                          ? "Songs"
                                          : "Videos",
                                      ],
                                    }),
                                  ],
                                },
                              ),
                        ],
                      }),
                    pageFooterModal === "playlists" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => {
                                    if (selectedPlaylistDetailId)
                                      setSelectedPlaylistDetailId(null);
                                    else setPageFooterModal(null);
                                  },
                                  className:
                                    "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      ChevronLeft,
                                      { className: "size-4" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        children: selectedPlaylistDetailId
                                          ? "Back to Playlists"
                                          : "Back to Player",
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-xs font-semibold text-muted-foreground",
                                  children:
                                    currentMode === "audio"
                                      ? "Audio Playlists"
                                      : "Video Playlists",
                                },
                              ),
                            ],
                          }),
                          selectedPlaylistDetailId
                            ? (() => {
                                const pl = (
                                  currentMode === "audio"
                                    ? audioPlaylists
                                    : videoPlaylists
                                ).find(
                                  (p) => p.id === selectedPlaylistDetailId,
                                );
                                if (!pl) return null;
                                return /* @__PURE__ */ (0,
                                import_jsx_runtime.jsxs)("div", {
                                  className: "space-y-4",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("h4", {
                                              className:
                                                "font-bold text-base text-[#2b2520]",
                                              children: pl.name,
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("p", {
                                              className:
                                                "text-xs text-muted-foreground mt-0.5",
                                              children: [
                                                pl.trackNames.length,
                                                " ",
                                                pl.trackNames.length === 1
                                                  ? "track"
                                                  : "tracks",
                                              ],
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              onClick: () => {
                                                if (pl.trackNames.length > 0)
                                                  if (currentMode === "audio")
                                                    playPlaylist(pl, 0);
                                                  else
                                                    playVideoByName(
                                                      pl.trackNames[0],
                                                    );
                                              },
                                              disabled:
                                                pl.trackNames.length === 0,
                                              className:
                                                "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 disabled:opacity-50",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(Play, {
                                                  className:
                                                    "size-3.5 fill-current",
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  { children: "Play" },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: () =>
                                                handleDeletePlaylist(pl.id),
                                              className:
                                                "p-1.5 text-muted-foreground hover:text-destructive",
                                              title: "Delete playlist",
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Trash2, {
                                                className: "size-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-2",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-xs font-semibold text-muted-foreground",
                                          children:
                                            "Add tracks to this playlist",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("select", {
                                          className:
                                            "w-full rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs text-[#2b2520]",
                                          defaultValue: "",
                                          onChange: (e) => {
                                            if (e.target.value) {
                                              handleAddTrackToPlaylist(
                                                pl.id,
                                                e.target.value,
                                              );
                                              e.target.value = "";
                                            }
                                          },
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("option", {
                                              value: "",
                                              disabled: true,
                                              children:
                                                "Choose from your uploads...",
                                            }),
                                            (currentMode === "audio"
                                              ? localAudioTracks
                                              : localVideoTracks
                                            ).map((f) =>
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "option",
                                                {
                                                  value: f.name,
                                                  children: f.name,
                                                },
                                                f.name,
                                              ),
                                            ),
                                            (currentMode === "audio"
                                              ? audioTracks
                                              : videoTracks
                                            ).map((item) => {
                                              const title =
                                                "title" in item
                                                  ? item.title
                                                  : "";
                                              return /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "option",
                                                {
                                                  value: title,
                                                  children: title,
                                                },
                                                title,
                                              );
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-2",
                                      children: [
                                        pl.trackNames.map((trackName, idx) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs font-mono text-muted-foreground w-4 text-center",
                                                          children: idx + 1,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs font-medium truncate text-[#2b2520]",
                                                          children: trackName,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick: () => {
                                                            if (
                                                              currentMode ===
                                                              "audio"
                                                            )
                                                              playPlaylist(
                                                                pl,
                                                                idx,
                                                              );
                                                            else
                                                              playVideoByName(
                                                                trackName,
                                                              );
                                                          },
                                                          className:
                                                            "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
                                                          title: "Play",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Play,
                                                              {
                                                                className:
                                                                  "size-3.5 fill-current ml-0.5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick: () =>
                                                            handleRemoveTrackFromPlaylist(
                                                              pl.id,
                                                              trackName,
                                                            ),
                                                          className:
                                                            "p-1 text-muted-foreground hover:text-destructive",
                                                          title:
                                                            "Remove from playlist",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Trash2,
                                                              {
                                                                className:
                                                                  "size-3.5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            },
                                            `${trackName}-${idx}`,
                                          ),
                                        ),
                                        pl.trackNames.length === 0 &&
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("p", {
                                            className:
                                              "text-center text-xs text-muted-foreground py-6",
                                            children:
                                              "No tracks in this playlist yet. Add tracks using the selector above.",
                                          }),
                                      ],
                                    }),
                                  ],
                                });
                              })()
                            : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-4",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("form", {
                                      onSubmit: handleCreateNewPlaylist,
                                      className: "flex gap-2",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("input", {
                                          type: "text",
                                          placeholder: "New playlist name...",
                                          value: newPlaylistInput,
                                          onChange: (e) =>
                                            setNewPlaylistInput(e.target.value),
                                          className:
                                            "flex-1 rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs focus:outline-hidden focus:border-brand",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("button", {
                                          type: "submit",
                                          className:
                                            "px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shrink-0 hover:opacity-90 flex items-center gap-1",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Plus, {
                                              className: "size-3.5",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              children: "Create",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className: "space-y-2.5",
                                        children: (currentMode === "audio"
                                          ? audioPlaylists
                                          : videoPlaylists
                                        ).map((pl) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/40 transition-all cursor-pointer",
                                              onClick: () =>
                                                setSelectedPlaylistDetailId(
                                                  pl.id,
                                                ),
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-3 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              ListMusic,
                                                              {
                                                                className:
                                                                  "size-5.5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "min-w-0 flex-1",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "h4",
                                                              {
                                                                className:
                                                                  "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
                                                                children:
                                                                  pl.name,
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsxs)(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-[11px] text-[#8c827a] mt-0.5",
                                                                children: [
                                                                  pl.trackNames
                                                                    .length,
                                                                  " ",
                                                                  pl.trackNames
                                                                    .length ===
                                                                  1
                                                                    ? "track"
                                                                    : "tracks",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    onClick: (e) =>
                                                      e.stopPropagation(),
                                                    children: [
                                                      pl.trackNames.length >
                                                        0 &&
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () => {
                                                              if (
                                                                currentMode ===
                                                                "audio"
                                                              )
                                                                playPlaylist(
                                                                  pl,
                                                                  0,
                                                                );
                                                              else
                                                                playVideoByName(
                                                                  pl
                                                                    .trackNames[0],
                                                                );
                                                            },
                                                            className:
                                                              "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
                                                            title:
                                                              "Play playlist",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Play,
                                                                {
                                                                  className:
                                                                    "size-4 fill-current ml-0.5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick: () =>
                                                            handleDeletePlaylist(
                                                              pl.id,
                                                            ),
                                                          className:
                                                            "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
                                                          title:
                                                            "Delete playlist",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Trash2,
                                                              {
                                                                className:
                                                                  "size-3.5",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            },
                                            pl.id,
                                          ),
                                        ),
                                      },
                                    ),
                                  ],
                                },
                              ),
                        ],
                      }),
                    pageFooterModal === "albums" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => {
                                    if (selectedAlbumItem)
                                      setSelectedAlbumItem(null);
                                    else setPageFooterModal(null);
                                  },
                                  className:
                                    "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      ChevronLeft,
                                      { className: "size-4" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        children: selectedAlbumItem
                                          ? "Back to Albums"
                                          : "Back to Player",
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-xs font-semibold text-muted-foreground",
                                  children:
                                    currentMode === "audio"
                                      ? "Audio Albums"
                                      : "Video Collections",
                                },
                              ),
                            ],
                          }),
                          selectedAlbumItem
                            ? (() => {
                                if (currentMode === "audio") {
                                  const alb = audioAlbums.find(
                                    (a) => a.albumName === selectedAlbumItem,
                                  );
                                  if (!alb) return null;
                                  return /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("div", {
                                            className:
                                              "size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
                                            children: /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Disc, {
                                              className: "size-7",
                                            }),
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("h4", {
                                                className:
                                                  "font-bold text-sm sm:text-base text-[#2b2520] truncate",
                                                children: alb.albumName,
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("p", {
                                                className:
                                                  "text-xs text-muted-foreground mt-0.5",
                                                children: [
                                                  alb.artist,
                                                  " • ",
                                                  alb.tracks.length,
                                                  " tracks",
                                                ],
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("button", {
                                            onClick: () => {
                                              const queue = alb.tracks
                                                .map(
                                                  (t) => t.file || t.trending,
                                                )
                                                .filter((item) =>
                                                  Boolean(item),
                                                );
                                              if (queue.length > 0) {
                                                playFromAudioTracks(queue, 0);
                                                setPageFooterModal(null);
                                              }
                                            },
                                            className:
                                              "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Play, {
                                                className:
                                                  "size-3.5 fill-current",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                children: "Play Album",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("div", {
                                        className: "space-y-1.5",
                                        children: alb.tracks.map((t, idx) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs font-mono text-muted-foreground w-4 text-center",
                                                          children: idx + 1,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs font-medium truncate text-[#2b2520]",
                                                          children: t.title,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      const queue = alb.tracks
                                                        .map(
                                                          (item) =>
                                                            item.file ||
                                                            item.trending,
                                                        )
                                                        .filter((item) =>
                                                          Boolean(item),
                                                        );
                                                      playFromAudioTracks(
                                                        queue,
                                                        idx,
                                                      );
                                                      setPageFooterModal(null);
                                                    },
                                                    className:
                                                      "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
                                                    title: "Play song",
                                                    children:
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        Play,
                                                        {
                                                          className:
                                                            "size-3.5 fill-current ml-0.5",
                                                        },
                                                      ),
                                                  },
                                                ),
                                              ],
                                            },
                                            `${t.title}-${idx}`,
                                          ),
                                        ),
                                      }),
                                    ],
                                  });
                                } else {
                                  const alb = videoAlbums.find(
                                    (a) => a.albumName === selectedAlbumItem,
                                  );
                                  if (!alb) return null;
                                  return /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("div", {
                                            className:
                                              "size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
                                            children: /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Film, {
                                              className: "size-7",
                                            }),
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("h4", {
                                                className:
                                                  "font-bold text-sm sm:text-base text-[#2b2520] truncate",
                                                children: alb.albumName,
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("p", {
                                                className:
                                                  "text-xs text-muted-foreground mt-0.5",
                                                children: [
                                                  alb.description,
                                                  " • ",
                                                  alb.items.length,
                                                  " videos",
                                                ],
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("button", {
                                            onClick: () => {
                                              if (alb.items.length > 0)
                                                playFromVideoTracks(
                                                  alb.items,
                                                  0,
                                                );
                                            },
                                            className:
                                              "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Play, {
                                                className:
                                                  "size-3.5 fill-current",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                children: "Play",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("div", {
                                        className: "space-y-1.5",
                                        children: alb.items.map((item, idx) => {
                                          const title =
                                            "title" in item
                                              ? item.title
                                              : item.name;
                                          return /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5 min-w-0 flex-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs font-mono text-muted-foreground w-4 text-center",
                                                          children: idx + 1,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs font-medium truncate text-[#2b2520]",
                                                          children: title,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      playFromVideoTracks(
                                                        alb.items,
                                                        idx,
                                                      ),
                                                    className:
                                                      "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
                                                    children:
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        Play,
                                                        {
                                                          className:
                                                            "size-3.5 fill-current ml-0.5",
                                                        },
                                                      ),
                                                  },
                                                ),
                                              ],
                                            },
                                            `${title}-${idx}`,
                                          );
                                        }),
                                      }),
                                    ],
                                  });
                                }
                              })()
                            : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-3",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "p",
                                      {
                                        className:
                                          "text-xs text-muted-foreground font-medium",
                                        children:
                                          currentMode === "audio"
                                            ? "Albums organized by artist and uploads"
                                            : "Curated video series and collections",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className: "grid grid-cols-2 gap-3",
                                        children: (currentMode === "audio"
                                          ? audioAlbums
                                          : videoAlbums
                                        ).map((album) => {
                                          const name = album.albumName;
                                          const subtitle =
                                            "artist" in album
                                              ? album.artist
                                              : album.description;
                                          const count =
                                            "tracks" in album
                                              ? album.tracks.length
                                              : album.items.length;
                                          const thumb =
                                            "thumbnailUrl" in album
                                              ? album.thumbnailUrl
                                              : void 0;
                                          return /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              onClick: () =>
                                                setSelectedAlbumItem(name),
                                              className:
                                                "group p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-2.5",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className:
                                                    "size-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform",
                                                  children: thumb
                                                    ? /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "img",
                                                        {
                                                          src: thumb,
                                                          alt: name,
                                                          className:
                                                            "w-full h-full object-cover",
                                                        },
                                                      )
                                                    : currentMode === "audio"
                                                      ? /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Disc,
                                                          {
                                                            className: "size-8",
                                                          },
                                                        )
                                                      : /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Film,
                                                          {
                                                            className: "size-8",
                                                          },
                                                        ),
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className: "w-full min-w-0",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "h4",
                                                        {
                                                          className:
                                                            "font-semibold text-xs text-[#2b2520] truncate group-hover:text-brand transition-colors",
                                                          children: name,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-[10px] text-muted-foreground truncate mt-0.5",
                                                          children: subtitle,
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "inline-block mt-1 text-[9px] font-semibold bg-[#f2ede4] text-[#6b6158] px-2 py-0.5 rounded-full",
                                                          children: [
                                                            count,
                                                            " ",
                                                            count === 1
                                                              ? "track"
                                                              : "tracks",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            },
                                            name,
                                          );
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                        ],
                      }),
                  ],
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_jsx_runtime.Fragment,
                  {
                    children: [
                      currentMode === "audio"
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  className: `flex-1 py-2 text-sm font-semibold transition-colors ${audioTab === "foryou" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
                                  onClick: () => setAudioTab("foryou"),
                                  children: "For you",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  className: `flex-1 py-2 text-sm font-semibold transition-colors ${audioTab === "phone" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
                                  onClick: () => setAudioTab("phone"),
                                  children: [
                                    "My phone",
                                    " ",
                                    localAudioTracks.length > 0 &&
                                      `(${localAudioTracks.length})`,
                                  ],
                                },
                              ),
                            ],
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  className: `flex-1 py-2 text-sm font-semibold transition-colors ${videoTab === "foryou" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
                                  onClick: () => setVideoTab("foryou"),
                                  children: "For you",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  className: `flex-1 py-2 text-sm font-semibold transition-colors ${videoTab === "phone" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
                                  onClick: () => setVideoTab("phone"),
                                  children: [
                                    "My phone",
                                    " ",
                                    localVideoTracks.length > 0 &&
                                      `(${localVideoTracks.length})`,
                                  ],
                                },
                              ),
                            ],
                          }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "flex-1 overflow-y-auto min-h-0 space-y-4 px-4 pb-4",
                        children: [
                          currentMode === "audio" &&
                            (audioTab === "phone"
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "space-y-3 pb-6",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("label", {
                                            className:
                                              "flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Plus, {
                                                className: "size-4.5",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                children:
                                                  localAudioTracks.length === 0
                                                    ? "Select audio files"
                                                    : "Upload / Add more songs",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("input", {
                                                type: "file",
                                                multiple: true,
                                                accept: "audio/*",
                                                className: "hidden",
                                                onChange: (e) => {
                                                  handleAudioFilesAdded(
                                                    e.target.files,
                                                  );
                                                  e.target.value = "";
                                                },
                                              }),
                                            ],
                                          }),
                                          localAudioTracks.length > 0 &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 pl-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            toggleSelectAllAudio,
                                                          className:
                                                            "flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand",
                                                          children: [
                                                            isAllAudioSelected
                                                              ? /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  SquareCheckBig,
                                                                  {
                                                                    className:
                                                                      "size-4 text-brand",
                                                                  },
                                                                )
                                                              : /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  Square,
                                                                  {
                                                                    className:
                                                                      "size-4 text-[#8c827a]",
                                                                  },
                                                                ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "span",
                                                              {
                                                                children:
                                                                  isAllAudioSelected
                                                                    ? "Deselect All"
                                                                    : "Select All",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[11px] text-[#8c827a]",
                                                          children: [
                                                            "(",
                                                            selectedAudioCount,
                                                            "/",
                                                            localAudioTracks.length,
                                                            ")",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            handlePlaySelectedAudio,
                                                          disabled:
                                                            selectedAudioCount ===
                                                              0 &&
                                                            localAudioTracks.length ===
                                                              0,
                                                          className:
                                                            "flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Play,
                                                              {
                                                                className:
                                                                  "size-3.5 fill-current",
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsxs)(
                                                              "span",
                                                              {
                                                                children: [
                                                                  "Play",
                                                                  " ",
                                                                  selectedAudioCount >
                                                                  0
                                                                    ? `Selected (${selectedAudioCount})`
                                                                    : "All",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            clearAllAudioTracks,
                                                          className:
                                                            "p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
                                                          title:
                                                            "Clear all songs",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Trash2,
                                                              {
                                                                className:
                                                                  "size-4",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          localAudioTracks.map((file, i) => {
                                            const isSelected =
                                              selectedAudioNames.has(file.name);
                                            return /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${isSelected ? "bg-white border-brand/40 shadow-xs" : "bg-white/60 border-[#e8e2d9] opacity-75"}`,
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "button",
                                                    {
                                                      onClick: () =>
                                                        toggleSelectAudio(
                                                          file.name,
                                                        ),
                                                      className:
                                                        "p-1.5 text-[#574d46] hover:text-brand",
                                                      title: isSelected
                                                        ? "Unselect"
                                                        : "Select for playback",
                                                      children: isSelected
                                                        ? /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            SquareCheckBig,
                                                            {
                                                              className:
                                                                "size-4.5 text-brand",
                                                            },
                                                          )
                                                        : /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            Square,
                                                            {
                                                              className:
                                                                "size-4.5 text-[#8c827a]",
                                                            },
                                                          ),
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "button",
                                                    {
                                                      className:
                                                        "min-w-0 flex-1 text-left px-2",
                                                      onClick: () =>
                                                        handlePlaySingleAudio(
                                                          i,
                                                        ),
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
                                                            children: file.name,
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsxs)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-[11px] text-[#8c827a] truncate mt-0.5",
                                                            children: [
                                                              (
                                                                file.size /
                                                                1048576
                                                              ).toFixed(2),
                                                              " MB •",
                                                              " ",
                                                              file.name
                                                                .split(".")
                                                                .pop()
                                                                ?.toUpperCase(),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-1",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              toggleAudioFavorite(
                                                                file.name,
                                                              ),
                                                            className: `p-1.5 rounded-lg transition-colors ${audioFavorites.includes(file.name) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
                                                            title:
                                                              audioFavorites.includes(
                                                                file.name,
                                                              )
                                                                ? "Remove from favorites"
                                                                : "Add to favorites",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Heart,
                                                                {
                                                                  className: `size-4 ${audioFavorites.includes(file.name) ? "fill-red-500 text-red-500" : ""}`,
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              handlePlaySingleAudio(
                                                                i,
                                                              ),
                                                            className:
                                                              "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
                                                            title: "Play now",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Play,
                                                                {
                                                                  className:
                                                                    "size-4 fill-current ml-0.5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              removeLocalAudioTrack(
                                                                i,
                                                              ),
                                                            className:
                                                              "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
                                                            title:
                                                              "Remove from list",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Trash2,
                                                                {
                                                                  className:
                                                                    "size-3.5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              },
                                              `${file.name}-${i}`,
                                            );
                                          }),
                                          localAudioTracks.length === 0 &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className:
                                                    "size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Music,
                                                    { className: "size-8" },
                                                  ),
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-sm font-semibold text-[#3c342d]",
                                                          children:
                                                            "No songs uploaded yet",
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs text-[#8c827a] mt-1 max-w-xs",
                                                          children:
                                                            'Tap "Select audio files" above to upload your songs (MP3, WAV, etc.) and play them one by one.',
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                )
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "space-y-4 pb-6",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("h3", {
                                        className:
                                          "font-semibold text-lg flex items-center gap-2",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Sparkles, {
                                            className: "size-5 text-brand",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            children: "Popular now",
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("form", {
                                            onSubmit: handleMusicSearch,
                                            className: "flex gap-2",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("div", {
                                                className: "relative flex-1",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      placeholder:
                                                        selectedMusicPlatform ===
                                                        "all"
                                                          ? "Search any song, artist across all platforms..."
                                                          : `Search tracks on ${selectedMusicPlatform.charAt(0).toUpperCase() + selectedMusicPlatform.slice(1)}...`,
                                                      value: musicQuery,
                                                      onChange: (e) => {
                                                        setMusicQuery(
                                                          e.target.value,
                                                        );
                                                        if (
                                                          !e.target.value.trim()
                                                        ) {
                                                          setSearchResults([]);
                                                          setIsSearching(false);
                                                        }
                                                      },
                                                      className:
                                                        "w-full rounded-2xl border border-[#e8e2d9] bg-white px-4 py-2.5 pl-9 text-sm shadow-inner outline-none focus:border-[#6d5b97]",
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Search,
                                                    {
                                                      className:
                                                        "absolute left-3 top-3 size-4 text-muted-foreground",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  type: "submit",
                                                  className:
                                                    "rounded-2xl bg-[#6d5b97] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity",
                                                  children: isSearching
                                                    ? "Searching..."
                                                    : "Search",
                                                },
                                              ),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("div", {
                                            className:
                                              "flex gap-1.5 overflow-x-auto no-scrollbar py-1",
                                            children: [
                                              {
                                                id: "all",
                                                label: "All Platforms",
                                              },
                                              {
                                                id: "spotify",
                                                label: "Spotify",
                                              },
                                              {
                                                id: "apple",
                                                label: "Apple Music",
                                              },
                                              {
                                                id: "itunes",
                                                label: "iTunes",
                                              },
                                              {
                                                id: "youtube",
                                                label: "YouTube Music",
                                              },
                                              {
                                                id: "amazon",
                                                label: "Amazon Music",
                                              },
                                              {
                                                id: "tidal",
                                                label: "Tidal",
                                              },
                                              {
                                                id: "deezer",
                                                label: "Deezer",
                                              },
                                              {
                                                id: "soundcloud",
                                                label: "SoundCloud",
                                              },
                                              {
                                                id: "bandcamp",
                                                label: "Bandcamp",
                                              },
                                              {
                                                id: "pandora",
                                                label: "Pandora",
                                              },
                                              {
                                                id: "qobuz",
                                                label: "Qobuz",
                                              },
                                              {
                                                id: "napster",
                                                label: "Napster",
                                              },
                                              {
                                                id: "boomplay",
                                                label: "Boomplay",
                                              },
                                              {
                                                id: "audiomack",
                                                label: "Audiomack",
                                              },
                                            ].map((p) =>
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  "data-id": p.id,
                                                  onClick: () =>
                                                    handleSelectPlatform(p.id),
                                                  className: `px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${selectedMusicPlatform === p.id ? "bg-[#6d5b97] text-white shadow-xs" : "bg-white border border-[#e8e2d9] text-[#685d55] hover:bg-[#f6f2ec]"}`,
                                                  children: p.label,
                                                },
                                                p.id,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                      isSearching
                                        ? /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("div", {
                                            className:
                                              "py-12 text-center text-sm text-muted-foreground",
                                            children:
                                              "Searching across music platforms...",
                                          })
                                        : (musicQuery.trim()
                                            ? searchResults
                                            : audioTracks
                                          ).map((track, index) => {
                                            const listToPlay = musicQuery.trim()
                                              ? searchResults
                                              : audioTracks;
                                            encodeURIComponent(
                                              `${track.title} ${track.artist}`,
                                            );
                                            return /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                onClick: () =>
                                                  playFromAudioTracks(
                                                    listToPlay,
                                                    index,
                                                  ),
                                                className:
                                                  "flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#f5efe8] border border-transparent hover:border-[#e8e2d9] transition-all cursor-pointer group",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-muted-foreground w-6 text-right font-mono text-sm",
                                                      children: index + 1,
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "img",
                                                    {
                                                      src: track.coverUrl,
                                                      alt: track.title,
                                                      className:
                                                        "size-12 rounded-xl object-cover shadow-xs shrink-0",
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "min-w-0 flex-1",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "font-semibold text-sm truncate",
                                                            children:
                                                              track.title,
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-xs text-muted-foreground truncate",
                                                            children:
                                                              track.artist,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "button",
                                                    {
                                                      onClick: (e) => {
                                                        e.stopPropagation();
                                                        toggleAudioFavorite(
                                                          track.title,
                                                        );
                                                      },
                                                      className: `p-2 rounded-xl transition-colors ${audioFavorites.includes(track.title) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
                                                      title:
                                                        audioFavorites.includes(
                                                          track.title,
                                                        )
                                                          ? "Remove from favorites"
                                                          : "Add to favorites",
                                                      children:
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Heart,
                                                          {
                                                            className: `size-4.5 ${audioFavorites.includes(track.title) ? "fill-red-500 text-red-500" : ""}`,
                                                          },
                                                        ),
                                                    },
                                                  ),
                                                ],
                                              },
                                              track.rank || index,
                                            );
                                          }),
                                    ],
                                  },
                                )),
                          currentMode === "video" &&
                            (videoTab === "phone"
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "space-y-3 pb-6",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("label", {
                                            className:
                                              "flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Plus, {
                                                className: "size-4.5",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                children:
                                                  localVideoTracks.length === 0
                                                    ? "Select video files"
                                                    : "Upload / Add more videos",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("input", {
                                                type: "file",
                                                multiple: true,
                                                accept: "video/*",
                                                className: "hidden",
                                                onChange: (e) => {
                                                  handleVideoFilesAdded(
                                                    e.target.files,
                                                  );
                                                  e.target.value = "";
                                                },
                                              }),
                                            ],
                                          }),
                                          localVideoTracks.length > 0 &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 pl-1",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            toggleSelectAllVideo,
                                                          className:
                                                            "flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand",
                                                          children: [
                                                            isAllVideoSelected
                                                              ? /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  SquareCheckBig,
                                                                  {
                                                                    className:
                                                                      "size-4 text-brand",
                                                                  },
                                                                )
                                                              : /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  Square,
                                                                  {
                                                                    className:
                                                                      "size-4 text-[#8c827a]",
                                                                  },
                                                                ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              "span",
                                                              {
                                                                children:
                                                                  isAllVideoSelected
                                                                    ? "Deselect All"
                                                                    : "Select All",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[11px] text-[#8c827a]",
                                                          children: [
                                                            "(",
                                                            selectedVideoCount,
                                                            "/",
                                                            localVideoTracks.length,
                                                            ")",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsxs)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            handlePlaySelectedVideo,
                                                          disabled:
                                                            selectedVideoCount ===
                                                              0 &&
                                                            localVideoTracks.length ===
                                                              0,
                                                          className:
                                                            "flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all",
                                                          children: [
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Play,
                                                              {
                                                                className:
                                                                  "size-3.5 fill-current",
                                                              },
                                                            ),
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsxs)(
                                                              "span",
                                                              {
                                                                children: [
                                                                  "Play",
                                                                  " ",
                                                                  selectedVideoCount >
                                                                  0
                                                                    ? `Selected (${selectedVideoCount})`
                                                                    : "All",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            clearAllVideoTracks,
                                                          className:
                                                            "p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
                                                          title:
                                                            "Clear all videos",
                                                          children:
                                                            /* @__PURE__ */ (0,
                                                            import_jsx_runtime.jsx)(
                                                              Trash2,
                                                              {
                                                                className:
                                                                  "size-4",
                                                              },
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          localVideoTracks.map((file, i) => {
                                            const isSelected =
                                              selectedVideoNames.has(file.name);
                                            return /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${isSelected ? "bg-white border-brand/40 shadow-xs" : "bg-white/60 border-[#e8e2d9] opacity-75"}`,
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "button",
                                                    {
                                                      onClick: () =>
                                                        toggleSelectVideo(
                                                          file.name,
                                                        ),
                                                      className:
                                                        "p-1.5 text-[#574d46] hover:text-brand",
                                                      title: isSelected
                                                        ? "Unselect"
                                                        : "Select for playback",
                                                      children: isSelected
                                                        ? /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            SquareCheckBig,
                                                            {
                                                              className:
                                                                "size-4.5 text-brand",
                                                            },
                                                          )
                                                        : /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            Square,
                                                            {
                                                              className:
                                                                "size-4.5 text-[#8c827a]",
                                                            },
                                                          ),
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "button",
                                                    {
                                                      className:
                                                        "min-w-0 flex-1 text-left px-2 flex items-center gap-3",
                                                      onClick: () =>
                                                        handlePlaySingleVideo(
                                                          i,
                                                        ),
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Film,
                                                                {
                                                                  className:
                                                                    "size-5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsxs)(
                                                          "div",
                                                          {
                                                            className:
                                                              "min-w-0 flex-1",
                                                            children: [
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
                                                                  children:
                                                                    file.name,
                                                                },
                                                              ),
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsxs)(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "text-[11px] text-[#8c827a] truncate mt-0.5",
                                                                  children: [
                                                                    (
                                                                      file.size /
                                                                      1048576
                                                                    ).toFixed(
                                                                      2,
                                                                    ),
                                                                    " MB •",
                                                                    " ",
                                                                    file.name
                                                                      .split(
                                                                        ".",
                                                                      )
                                                                      .pop()
                                                                      ?.toUpperCase(),
                                                                    " ",
                                                                    "Video",
                                                                  ],
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-1",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              toggleVideoFavorite(
                                                                file.name,
                                                              ),
                                                            className: `p-1.5 rounded-lg transition-colors ${videoFavorites.includes(file.name) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
                                                            title:
                                                              videoFavorites.includes(
                                                                file.name,
                                                              )
                                                                ? "Remove from favorites"
                                                                : "Add to favorites",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Heart,
                                                                {
                                                                  className: `size-4 ${videoFavorites.includes(file.name) ? "fill-red-500 text-red-500" : ""}`,
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              handlePlaySingleVideo(
                                                                i,
                                                              ),
                                                            className:
                                                              "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
                                                            title:
                                                              "Watch video",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Play,
                                                                {
                                                                  className:
                                                                    "size-4 fill-current ml-0.5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              removeLocalVideoTrack(
                                                                i,
                                                              ),
                                                            className:
                                                              "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
                                                            title:
                                                              "Remove from list",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Trash2,
                                                                {
                                                                  className:
                                                                    "size-3.5",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              },
                                              `${file.name}-${i}`,
                                            );
                                          }),
                                          localVideoTracks.length === 0 &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className:
                                                    "size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Video,
                                                    { className: "size-8" },
                                                  ),
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-sm font-semibold text-[#3c342d]",
                                                          children:
                                                            "No videos uploaded yet",
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs text-[#8c827a] mt-1 max-w-xs",
                                                          children:
                                                            'Tap "Select video files" above to upload your movies or clips (MP4, WebM, etc.) and watch them here.',
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                )
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "space-y-4 pb-6",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("h3", {
                                        className:
                                          "font-semibold text-lg flex items-center gap-2",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Sparkles, {
                                            className: "size-5 text-brand",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            children: "Trending Videos",
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("div", {
                                        className: "grid grid-cols-1 gap-3",
                                        children: videoTracks.map(
                                          (video, idx) =>
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                onClick: () =>
                                                  playFromVideoTracks(
                                                    videoTracks,
                                                    idx,
                                                  ),
                                                className:
                                                  "group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 hover:shadow-md transition-all cursor-pointer",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "relative aspect-video w-full sm:w-40 rounded-xl overflow-hidden bg-black shrink-0",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "img",
                                                          {
                                                            src: video.thumbnailUrl,
                                                            alt: video.title,
                                                            className:
                                                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "size-10 rounded-full bg-white/90 text-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform",
                                                                  children:
                                                                    /* @__PURE__ */ (0,
                                                                    import_jsx_runtime.jsx)(
                                                                      Play,
                                                                      {
                                                                        className:
                                                                          "size-4.5 fill-current ml-0.5",
                                                                      },
                                                                    ),
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "absolute bottom-1.5 right-1.5 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 rounded-md backdrop-blur-xs",
                                                            children:
                                                              video.duration,
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "absolute top-1.5 left-1.5 bg-brand text-brand-foreground font-semibold text-[9px] px-1.5 py-0.5 rounded-md",
                                                            children:
                                                              video.quality,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "min-w-0 flex-1",
                                                      children: [
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "h4",
                                                          {
                                                            className:
                                                              "font-semibold text-sm text-[#2b2520] group-hover:text-brand transition-colors line-clamp-2",
                                                            children:
                                                              video.title,
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-xs text-[#8c827a] mt-1",
                                                            children:
                                                              video.channel,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "button",
                                                    {
                                                      onClick: (e) => {
                                                        e.stopPropagation();
                                                        toggleVideoFavorite(
                                                          video.title,
                                                        );
                                                      },
                                                      className: `p-2 rounded-xl transition-colors ${videoFavorites.includes(video.title) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
                                                      title:
                                                        videoFavorites.includes(
                                                          video.title,
                                                        )
                                                          ? "Remove from favorites"
                                                          : "Add to favorites",
                                                      children:
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          Heart,
                                                          {
                                                            className: `size-4.5 ${videoFavorites.includes(video.title) ? "fill-red-500 text-red-500" : ""}`,
                                                          },
                                                        ),
                                                    },
                                                  ),
                                                ],
                                              },
                                              video.id,
                                            ),
                                        ),
                                      }),
                                    ],
                                  },
                                )),
                        ],
                      }),
                    ],
                  },
                ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "shrink-0 border-t border-[#e8e2d9] bg-[#fbf9f5] px-6 py-2.5 flex items-center justify-around shadow-xs z-10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () =>
                    setPageFooterModal((prev) =>
                      prev === "favorites" ? null : "favorites",
                    ),
                  className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "favorites" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                          className: `size-5 ${currentFavoritesCount > 0 && pageFooterModal !== "favorites" ? "text-red-500 fill-red-500/20" : pageFooterModal === "favorites" ? "fill-red-500 text-red-500" : ""}`,
                        }),
                        currentFavoritesCount > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
                            children: currentFavoritesCount,
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-[11px] font-medium",
                      children: "Favorites",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => {
                    setSelectedPlaylistDetailId(null);
                    setPageFooterModal((prev) =>
                      prev === "playlists" ? null : "playlists",
                    );
                  },
                  className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "playlists" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, {
                          className: "size-5",
                        }),
                        currentPlaylistsCount > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
                            children: currentPlaylistsCount,
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-[11px] font-medium",
                      children: "Playlist",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => {
                    setSelectedAlbumItem(null);
                    setPageFooterModal((prev) =>
                      prev === "albums" ? null : "albums",
                    );
                  },
                  className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "albums" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc, {
                          className: "size-5",
                        }),
                        currentAlbumsCount > 0 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
                            children: currentAlbumsCount,
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-[11px] font-medium",
                      children: "Albums",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        activeAudioQueue &&
          activeAudioQueue.length > 0 &&
          playingAudioIndex !== null &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, {
            tracks: activeAudioQueue,
            initialIndex: playingAudioIndex,
            file: activeAudioQueue[playingAudioIndex],
            onClose: () => {
              setActiveAudioQueue(null);
              setPlayingAudioIndex(null);
            },
            onSwitchToVideo: () => {
              setActiveAudioQueue(null);
              setPlayingAudioIndex(null);
              setPlayerMode("video");
            },
          }),
        activeVideoQueue &&
          activeVideoQueue.length > 0 &&
          playingVideoIndex !== null &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoPlayer, {
            tracks: activeVideoQueue,
            initialIndex: playingVideoIndex,
            file: activeVideoQueue[playingVideoIndex],
            onClose: () => {
              setActiveVideoQueue(null);
              setPlayingVideoIndex(null);
              onCloseVideo?.();
            },
            onSwitchToAudio: () => {
              setActiveVideoQueue(null);
              setPlayingVideoIndex(null);
              setPlayerMode("audio");
              onCloseVideo?.();
            },
          }),
      ],
    },
  );
}
var host$3 = (u) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};
function BookmarksManager({ items, onGo, onRemove, onAdd }) {
  const [query, setQuery] = (0, import_react.useState)("");
  const [showAdd, setShowAdd] = (0, import_react.useState)(false);
  const [newTitle, setNewTitle] = (0, import_react.useState)("");
  const [newUrl, setNewUrl] = (0, import_react.useState)("");
  const filtered = items.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.url.toLowerCase().includes(query.toLowerCase()),
  );
  const handleAddSubmit = (e) => {
    e.preventDefault();
    let u = newUrl.trim();
    if (!u) return;
    if (!u.startsWith("http://") && !u.startsWith("https://"))
      u = "https://" + u;
    const t = newTitle.trim() || host$3(u);
    onAdd({
      url: u,
      title: t,
      at: Date.now(),
    });
    setNewTitle("");
    setNewUrl("");
    setShowAdd(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center justify-between gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex size-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
                  className: "size-4.5 fill-amber-500",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "text-sm font-bold text-foreground",
                    children: "Bookmarks",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: [
                      items.length,
                      " ",
                      items.length === 1 ? "page" : "pages",
                      " bookmarked",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            type: "button",
            onClick: () => setShowAdd(!showAdd),
            className:
              "flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90",
            children: [
              showAdd
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-3.5",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                    className: "size-3.5",
                  }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: showAdd ? "Cancel" : "Add Bookmark",
              }),
            ],
          }),
        ],
      }),
      showAdd &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
          onSubmit: handleAddSubmit,
          className:
            "rounded-2xl border border-amber-500/30 bg-amber-500/5 p-3.5 space-y-2.5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "text-xs font-bold text-foreground flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
                  className: "size-3.5 fill-amber-500 text-amber-500",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  children: "Add New Bookmark",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              placeholder: "Title (e.g. My Favorite Site)",
              value: newTitle,
              onChange: (e) => setNewTitle(e.target.value),
              className:
                "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              placeholder: "URL (e.g. https://example.com)",
              value: newUrl,
              onChange: (e) => setNewUrl(e.target.value),
              required: true,
              className:
                "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex justify-end gap-2 pt-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setShowAdd(false),
                  className:
                    "rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted",
                  children: "Cancel",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "submit",
                  className:
                    "rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground",
                  children: "Save Bookmark",
                }),
              ],
            }),
          ],
        }),
      items.length > 2 &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
              className:
                "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search bookmarks...",
              className:
                "w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand",
            }),
          ],
        }),
      filtered.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "mb-3 flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
                  className: "size-7 fill-amber-500/40",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                className: "text-sm font-semibold text-foreground",
                children: query ? "No matching bookmarks" : "No bookmarks yet",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-1 max-w-xs text-xs text-muted-foreground",
                children: query
                  ? "Try searching for a different keyword."
                  : "Bookmark your favorite sites while browsing with the star icon in the address bar, or add one using the button above.",
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs",
            children: filtered.map((item, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      type: "button",
                      onClick: () => onGo(item.url),
                      className:
                        "flex min-w-0 flex-1 items-center gap-3 text-left",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "img",
                            {
                              src: `https://www.google.com/s2/favicons?domain=${host$3(item.url)}&sz=64`,
                              alt: "",
                              className: "size-4.5 rounded-xs object-contain",
                              onError: (e) => {
                                e.target.style.display = "none";
                              },
                            },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "truncate text-sm font-semibold text-foreground",
                              children: item.title || host$3(item.url),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "truncate text-[11px] text-muted-foreground",
                              children: host$3(item.url),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center gap-1 shrink-0",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          onClick: () => onGo(item.url),
                          title: "Open bookmark",
                          className:
                            "rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            ExternalLink,
                            { className: "size-4" },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          onClick: () => onRemove(item),
                          title: "Delete bookmark",
                          className:
                            "rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Trash2,
                            { className: "size-4" },
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                `${item.url}-${i}`,
              ),
            ),
          }),
    ],
  });
}
var host$2 = (u) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};
function SavedLinksManager({ items, onGo, onRemove, onAdd }) {
  const [query, setQuery] = (0, import_react.useState)("");
  const [showAdd, setShowAdd] = (0, import_react.useState)(false);
  const [newTitle, setNewTitle] = (0, import_react.useState)("");
  const [newUrl, setNewUrl] = (0, import_react.useState)("");
  const filtered = items.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.url.toLowerCase().includes(query.toLowerCase()),
  );
  const handleAddSubmit = (e) => {
    e.preventDefault();
    let u = newUrl.trim();
    if (!u) return;
    if (!u.startsWith("http://") && !u.startsWith("https://"))
      u = "https://" + u;
    const t = newTitle.trim() || host$2(u);
    onAdd({
      url: u,
      title: t,
      at: Date.now(),
    });
    setNewTitle("");
    setNewUrl("");
    setShowAdd(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center justify-between gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Bookmark,
                  { className: "size-4.5 fill-brand/20 text-brand" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "text-sm font-bold text-foreground",
                    children: "Saved Links",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: [
                      items.length,
                      " ",
                      items.length === 1 ? "link" : "links",
                      " saved to read later",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            type: "button",
            onClick: () => setShowAdd(!showAdd),
            className:
              "flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90",
            children: [
              showAdd
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-3.5",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                    className: "size-3.5",
                  }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: showAdd ? "Cancel" : "Save Link",
              }),
            ],
          }),
        ],
      }),
      showAdd &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
          onSubmit: handleAddSubmit,
          className:
            "rounded-2xl border border-brand/30 bg-brand/5 p-3.5 space-y-2.5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "text-xs font-bold text-foreground flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
                  className: "size-3.5 text-brand",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  children: "Save a New Link",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              placeholder: "Link Title (e.g. Interesting Article)",
              value: newTitle,
              onChange: (e) => setNewTitle(e.target.value),
              className:
                "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              placeholder: "URL (e.g. https://example.com/article)",
              value: newUrl,
              onChange: (e) => setNewUrl(e.target.value),
              required: true,
              className:
                "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex justify-end gap-2 pt-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setShowAdd(false),
                  className:
                    "rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted",
                  children: "Cancel",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "submit",
                  className:
                    "rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground",
                  children: "Save Link",
                }),
              ],
            }),
          ],
        }),
      items.length > 2 &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
              className:
                "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              type: "text",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search saved links...",
              className:
                "w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand",
            }),
          ],
        }),
      filtered.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "mb-3 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Bookmark,
                  { className: "size-7 fill-brand/20 text-brand" },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                className: "text-sm font-semibold text-foreground",
                children: query
                  ? "No matching saved links"
                  : "No saved links yet",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-1 max-w-xs text-xs text-muted-foreground",
                children: query
                  ? "Try searching for another title or URL."
                  : "Save news stories, articles, and useful websites to read them anytime from this page.",
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs",
            children: filtered.map((item, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      type: "button",
                      onClick: () => onGo(item.url),
                      className:
                        "flex min-w-0 flex-1 items-center gap-3 text-left",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand/10",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "img",
                            {
                              src: `https://www.google.com/s2/favicons?domain=${host$2(item.url)}&sz=64`,
                              alt: "",
                              className: "size-4.5 rounded-xs object-contain",
                              onError: (e) => {
                                e.target.style.display = "none";
                              },
                            },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "truncate text-sm font-semibold text-foreground",
                              children: item.title || host$2(item.url),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "truncate text-[11px] text-muted-foreground",
                              children: host$2(item.url),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center gap-1 shrink-0",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          onClick: () => onGo(item.url),
                          title: "Open link",
                          className:
                            "rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            ExternalLink,
                            { className: "size-4" },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          onClick: () => onRemove(item),
                          title: "Delete saved link",
                          className:
                            "rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Trash2,
                            { className: "size-4" },
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                `${item.url}-${i}`,
              ),
            ),
          }),
    ],
  });
}
var LANGUAGES = [
  {
    code: "en",
    name: "English (US)",
    native: "English",
  },
  {
    code: "es",
    name: "Spanish",
    native: "Español",
  },
  {
    code: "fr",
    name: "French",
    native: "Français",
  },
  {
    code: "de",
    name: "German",
    native: "Deutsch",
  },
  {
    code: "pt",
    name: "Portuguese",
    native: "Português",
  },
  {
    code: "hi",
    name: "Hindi",
    native: "हिन्दी",
  },
  {
    code: "ar",
    name: "Arabic",
    native: "العربية",
  },
  {
    code: "zh",
    name: "Chinese (Simplified)",
    native: "简体中文",
  },
  {
    code: "ja",
    name: "Japanese",
    native: "日本語",
  },
  {
    code: "ru",
    name: "Russian",
    native: "Русский",
  },
  {
    code: "id",
    name: "Indonesian",
    native: "Bahasa Indonesia",
  },
  {
    code: "ko",
    name: "Korean",
    native: "한국어",
  },
  {
    code: "tr",
    name: "Turkish",
    native: "Türkçe",
  },
  {
    code: "it",
    name: "Italian",
    native: "Italiano",
  },
  {
    code: "nl",
    name: "Dutch",
    native: "Nederlands",
  },
];
var INITIAL_PASSWORDS = [
  {
    id: "pwd-1",
    domain: "google.com",
    username: "musichub661@gmail.com",
    password: "••••••••••••",
    updatedAt: Date.now() - 432e6,
  },
  {
    id: "pwd-2",
    domain: "github.com",
    username: "webna-developer",
    password: "••••••••••••",
    updatedAt: Date.now() - 10368e5,
  },
  {
    id: "pwd-3",
    domain: "reddit.com",
    username: "tech_surfer99",
    password: "••••••••••••",
    updatedAt: Date.now() - 1728e6,
  },
];
function SettingsManager({
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
}) {
  const { lang, setLanguage, t } = useAppLanguage();
  const [subView, setSubView] = (0, import_react.useState)(initialSubView);
  const [autoTranslate, setAutoTranslate] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-auto-translate");
    if (val !== null) setAutoTranslate(val !== "false");
  }, []);
  const handleSelectLanguage = (code) => {
    setLanguage(code);
    const langObj = LANGUAGES.find((l) => l.code === code);
    toast.success(
      code === "es"
        ? "Idioma cambiado a Español"
        : `Language changed to ${langObj?.name || code}`,
    );
  };
  const [theme, setTheme] = (0, import_react.useState)("system");
  useEffect(() => {
    const val = localStorage.getItem("webna-theme");
    if (val) setTheme(val);
  }, []);
  const [fontSize, setFontSize] = (0, import_react.useState)("medium");
  useEffect(() => {
    const val = localStorage.getItem("webna-font-size");
    if (val) setFontSize(val);
  }, []);
  const [addressBarPosition, setAddressBarPosition] = (0,
  import_react.useState)("top");
  useEffect(() => {
    const val = localStorage.getItem("webna-address-bar");
    if (val) setAddressBarPosition(val);
  }, []);
  const [highContrast, setHighContrast] = (0, import_react.useState)(false);
  useEffect(() => {
    const val = localStorage.getItem("webna-high-contrast");
    if (val !== null) setHighContrast(val === "true");
  }, []);
  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("webna-theme", newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else if (newTheme === "light")
      document.documentElement.classList.remove("dark");
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    toast.success(`${t("themeAndDisplay")}: ${newTheme}`);
  };
  const applyFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem("webna-font-size", size);
    toast.success(`${t("textScaling")}: ${size}`);
  };
  const handleRatePlayStore = () => {
    const playStoreIntent = "market://details?id=com.webna.browser";
    const webPlayStore =
      "https://play.google.com/store/apps/details?id=com.webna.browser";
    toast.success(
      lang === "es"
        ? "Abriendo Google Play Store para calificar..."
        : "Opening Google Play Store to rate WebNa...",
    );
    try {
      window.location.href = playStoreIntent;
      setTimeout(() => {
        window.open(webPlayStore, "_blank");
      }, 500);
    } catch {
      window.open(webPlayStore, "_blank");
    }
  };
  const handleShareApp = async () => {
    const appShareUrl = "https://webna.app";
    const shareText =
      lang === "es"
        ? "Navegador WebNa: Navegador móvil ultrarrápido y privado con bloqueo de anuncios, reproductor multimedia y descargas. ¡Descárgalo ahora!"
        : "WebNa Browser: Lightning fast, privacy-first mobile browser with ad blocking, audio/video player and downloader. Download now!";
    if (navigator.share)
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
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "name" in err &&
          err.name === "AbortError"
        )
          return;
      }
    navigator.clipboard.writeText(`${shareText}\n${appShareUrl}`);
    toast.success(
      lang === "es"
        ? "¡Enlace de descarga de WebNa copiado al portapapeles!"
        : "WebNa download link copied to clipboard!",
    );
  };
  const [notifPermission, setNotifPermission] = (0, import_react.useState)(
    "default",
  );
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window)
      setNotifPermission(Notification.permission);
  }, []);
  const [notifDownloads, setNotifDownloads] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-downloads");
    if (val !== null) setNotifDownloads(val !== "false");
  }, []);
  const [notifSecurity, setNotifSecurity] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-security");
    if (val !== null) setNotifSecurity(val !== "false");
  }, []);
  const [notifNews, setNotifNews] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-news");
    if (val !== null) setNotifNews(val !== "false");
  }, []);
  const [notifPlayback, setNotifPlayback] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-playback");
    if (val !== null) setNotifPlayback(val !== "false");
  }, []);
  const [notifVibration, setNotifVibration] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-notif-vibration");
    if (val !== null) setNotifVibration(val !== "false");
  }, []);
  const requestNotifPermission = async () => {
    if ("Notification" in window)
      try {
        const res = await Notification.requestPermission();
        setNotifPermission(res);
        if (res === "granted")
          toast.success("Notification permissions enabled for WebNa!");
        else toast.error("Notification permission was denied.");
      } catch {
        toast.error(
          "Could not request notification permissions on this device.",
        );
      }
    else
      toast.info("Notifications are handled natively by your Android system.");
  };
  const sendTestNotification = () => {
    if ("Notification" in window && Notification.permission === "granted")
      new Notification("WebNa Browser", {
        body: "Test notification: Download completed! Sample song was saved.",
        icon: "/favicon.ico",
      });
    toast(
      lang === "es"
        ? "Alerta de notificación WebNa"
        : "WebNa Notification Alert",
      {
        description:
          lang === "es"
            ? "Prueba: ¡Descarga completada! Archivo multimedia guardado."
            : "Sample test: Download completed! Sample media was saved.",
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
          className: "size-4 text-brand",
        }),
      },
    );
  };
  const [safetyTab, setSafetyTab] = (0, import_react.useState)("controls");
  const [httpsOnly, setHttpsOnly] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-https-only");
    if (val !== null) setHttpsOnly(val !== "false");
  }, []);
  const [phishingProtection, setPhishingProtection] = (0,
  import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-phishing-prot");
    if (val !== null) setPhishingProtection(val !== "false");
  }, []);
  const [doNotTrack, setDoNotTrack] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-dnt");
    if (val !== null) setDoNotTrack(val !== "false");
  }, []);
  const [dnsLeakProtection, setDnsLeakProtection] = (0, import_react.useState)(
    true,
  );
  useEffect(() => {
    const val = localStorage.getItem("webna-dns-leak");
    if (val !== null) setDnsLeakProtection(val !== "false");
  }, []);
  const [fingerprintProt, setFingerprintProt] = (0, import_react.useState)(
    true,
  );
  useEffect(() => {
    const val = localStorage.getItem("webna-fingerprint-prot");
    if (val !== null) setFingerprintProt(val !== "false");
  }, []);
  const [cleanLinks, setCleanLinks] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-clean-links");
    if (val !== null) setCleanLinks(val !== "false");
  }, []);
  const [cookiePolicy, setCookiePolicy] = (0, import_react.useState)(
    "block-3rd",
  );
  useEffect(() => {
    const val = localStorage.getItem("webna-cookie-mode");
    if (val === "allow" || val === "block-3rd" || val === "block-all")
      setCookiePolicy(val);
  }, []);
  const [strictDownloads, setStrictDownloads] = (0, import_react.useState)(
    true,
  );
  useEffect(() => {
    const val = localStorage.getItem("webna-strict-downloads");
    if (val !== null) setStrictDownloads(val !== "false");
  }, []);
  const [blockMixedContent, setBlockMixedContent] = (0, import_react.useState)(
    true,
  );
  useEffect(() => {
    const val = localStorage.getItem("webna-block-mixed-content");
    if (val !== null) setBlockMixedContent(val !== "false");
  }, []);
  const [isAuditing, setIsAuditing] = (0, import_react.useState)(false);
  const [auditStep, setAuditStep] = (0, import_react.useState)(0);
  const [lastAuditAt, setLastAuditAt] = (0, import_react.useState)(null);
  useEffect(() => {
    const t = localStorage.getItem("webna-last-audit");
    if (t) setLastAuditAt(Number(t));
  }, []);
  const [savedCards, setSavedCards] = (0, import_react.useState)([]);
  useEffect(() => {
    const s = localStorage.getItem("webna-saved-cards");
    if (s)
      try {
        setSavedCards(JSON.parse(s));
      } catch {}
    else
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
          updatedAt: Date.now() - 864e6,
        },
      ]);
  }, []);
  const [autofillCards, setAutofillCards] = (0, import_react.useState)(true);
  useEffect(() => {
    const val = localStorage.getItem("webna-autofill-cards");
    if (val !== null) setAutofillCards(val !== "false");
  }, []);
  const [showAddCardModal, setShowAddCardModal] = (0, import_react.useState)(
    false,
  );
  const [editingCardId, setEditingCardId] = (0, import_react.useState)(null);
  const [newCardNumber, setNewCardNumber] = (0, import_react.useState)("");
  const [newCardHolder, setNewCardHolder] = (0, import_react.useState)("");
  const [newExpiryMonth, setNewExpiryMonth] = (0, import_react.useState)("12");
  const [newExpiryYear, setNewExpiryYear] = (0, import_react.useState)("28");
  const [newCvv, setNewCvv] = (0, import_react.useState)("");
  const [newBillingAddress, setNewBillingAddress] = (0, import_react.useState)(
    "",
  );
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
  const handleOpenEditCard = (card) => {
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
    let brand = "Card";
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
        if (c.id === editingCardId)
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
      const updated = [
        {
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
        },
        ...savedCards,
      ];
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
  const handleDeleteCard = (id) => {
    const updated = savedCards.filter((c) => c.id !== id);
    setSavedCards(updated);
    localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
    toast.success(
      lang === "es" ? "Tarjeta eliminada." : "Payment card removed.",
    );
  };
  const handleSetDefaultCard = (id) => {
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
  const [isExporting, setIsExporting] = (0, import_react.useState)(false);
  const [isImporting, setIsImporting] = (0, import_react.useState)(false);
  const [syncStatus, setSyncStatus] = (0, import_react.useState)("synced");
  const [lastSyncTime, setLastSyncTime] = (0, import_react.useState)(
    "Just now",
  );
  const fileInputRef = (0, import_react.useRef)(null);
  const handleExportData = () => {
    setIsExporting(true);
    try {
      const backupData = {
        app: "WebNa Browser",
        version: "2.4.0",
        exportedAt: /* @__PURE__ */ new Date().toISOString(),
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
      const dateTag = /* @__PURE__ */ new Date().toISOString().split("T")[0];
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
  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result);
        if (!json || typeof json !== "object")
          throw new Error("Invalid format");
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
        if (json.categories && typeof json.categories === "object")
          setCategories(json.categories);
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
  const [passwords, setPasswords] = (0, import_react.useState)(() => {
    const saved = localStorage.getItem("webna-passwords");
    if (saved)
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PASSWORDS;
      }
    return INITIAL_PASSWORDS;
  });
  const [passwordSearch, setPasswordSearch] = (0, import_react.useState)("");
  const [showPasswordMap, setShowPasswordMap] = (0, import_react.useState)({});
  const [showAddPasswordModal, setShowAddPasswordModal] = (0,
  import_react.useState)(false);
  const [editingPasswordId, setEditingPasswordId] = (0, import_react.useState)(
    null,
  );
  const [newDomain, setNewDomain] = (0, import_react.useState)("");
  const [newUsername, setNewUsername] = (0, import_react.useState)("");
  const [newPasswordVal, setNewPasswordVal] = (0, import_react.useState)("");
  const [savePasswordPrompt, setSavePasswordPrompt] = (0,
  import_react.useState)(() => {
    return localStorage.getItem("webna-save-password-prompt") !== "false";
  });
  const [autoFillEnabled, setAutoFillEnabled] = (0, import_react.useState)(
    () => {
      return localStorage.getItem("webna-autofill-passwords") !== "false";
    },
  );
  const savePasswordsList = (list) => {
    setPasswords(list);
    localStorage.setItem("webna-passwords", JSON.stringify(list));
  };
  const toggleShowPassword = (id) => {
    setShowPasswordMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(
      lang === "es"
        ? `${label} copiado al portapapeles`
        : `${label} copied to clipboard!`,
    );
  };
  const handleDeletePassword = (id) => {
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
  const handleOpenEditPassword = (cred) => {
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
        if (p.id === editingPasswordId)
          return {
            ...p,
            domain: cleanDomain,
            username: newUsername.trim(),
            password: newPasswordVal.trim(),
            updatedAt: Date.now(),
          };
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
      const next = [
        {
          id: "pwd-" + Date.now(),
          domain: cleanDomain,
          username: newUsername.trim(),
          password: newPasswordVal.trim(),
          updatedAt: Date.now(),
        },
        ...passwords,
      ];
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
    for (let i = 0; i < 16; i++)
      gen += chars.charAt(Math.floor(Math.random() * 74));
    setNewPasswordVal(gen);
    toast.success(
      lang === "es"
        ? "¡Contraseña segura generada!"
        : "Strong password generated!",
    );
  };
  const [clearHistorySelected, setClearHistorySelected] = (0,
  import_react.useState)(true);
  const [clearCookiesSelected, setClearCookiesSelected] = (0,
  import_react.useState)(true);
  const [clearCacheSelected, setClearCacheSelected] = (0,
  import_react.useState)(true);
  const [clearBookmarksSelected, setClearBookmarksSelected] = (0,
  import_react.useState)(false);
  const [clearPasswordsSelected, setClearPasswordsSelected] = (0,
  import_react.useState)(false);
  const [clearTimeRange, setClearTimeRange] = (0, import_react.useState)("all");
  const handleExecuteClear = () => {
    const clearedItems = [];
    if (clearHistorySelected) {
      setHistory([]);
      clearedItems.push(t("browsingHistory"));
    }
    if (clearBookmarksSelected) {
      setBookmarks([]);
      clearedItems.push(t("bookmarks"));
    }
    if (clearCookiesSelected) clearedItems.push(t("cookiesSiteData"));
    if (clearCacheSelected) clearedItems.push(t("cachedImages"));
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
  const currentLangLabel =
    LANGUAGES.find((l) => l.code === lang)?.name || "English (US)";
  const subViewTitles = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex flex-col h-full bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex items-center justify-between border-b px-4 py-3 shrink-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              subView !== null &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: () => setSubView(null),
                  className:
                    "p-1 -ml-1 text-foreground hover:bg-muted rounded-full transition-colors",
                  "aria-label": t("back"),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ChevronLeft,
                    { className: "size-6" },
                  ),
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className: "text-xl font-bold tracking-tight text-foreground",
                children: subView ? subViewTitles[subView] : t("settings"),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            onClick: onClose,
            className:
              "p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors",
            "aria-label": t("close"),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
              className: "size-5",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-1 overflow-y-auto p-4 space-y-3",
        children: [
          subView === null &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-3 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("language"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Globe, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("language"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: currentLangLabel,
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("appearance"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Palette, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("appearance"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground capitalize",
                                      children: [theme, " • ", fontSize],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: handleRatePlayStore,
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors group",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Star, {
                                className: "size-5 fill-amber-500",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("rateUs"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("rateSupportOnPlay"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "flex items-center gap-1 text-xs font-semibold text-brand",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            ExternalLink,
                            { className: "size-4" },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: handleShareApp,
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Share2, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("shareApp"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("shareWithFriends"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
                          className: "size-4 text-muted-foreground/60",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("notifications"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Bell, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("notifications"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("notificationsSub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("safety"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(ShieldCheck, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("safetyHub"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("safetyHubSub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("backup"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Database, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("dataBackup"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("dataBackupSub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("passwords"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(KeyRound, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("passwords"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        passwords.length,
                                        " ",
                                        t("savedCredentialsCount"),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("payments"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(CreditCard, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children:
                                        lang === "es"
                                          ? "Métodos de pago"
                                          : "Payment Methods",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        savedCards.length,
                                        " ",
                                        lang === "es"
                                          ? "tarjetas guardadas, autocompletar"
                                          : "saved cards, autofill",
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("privacy"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(FileText, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("privacyPolicy"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("privacySub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "size-5 text-muted-foreground/60" },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setSubView("blockings"),
                      className:
                        "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-9 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(Lock, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "font-medium text-sm text-foreground block",
                                      children: t("blockingsAndShields"),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: t("shieldsSub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-xs text-brand font-semibold px-2.5 py-0.5 rounded-full bg-brand/10",
                          children: t("active"),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "pt-2",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      onClick: () => setSubView("clear-data"),
                      className:
                        "flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive/10 hover:bg-destructive/15 text-destructive p-4 font-semibold text-sm transition-colors border border-destructive/20",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
                          className: "size-4",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("clearAllBrowsingData"),
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "text-center pt-3 text-xs text-muted-foreground space-y-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "font-medium",
                      children: "WebNa Browser v2.4.0 (Android & Web)",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-[11px] text-muted-foreground/70",
                      children: "Fast • Secure • Ad-Free",
                    }),
                  ],
                }),
              ],
            }),
          subView === "language" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "font-semibold text-sm text-foreground",
                      children: t("displayAndSearchLanguage"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground mt-0.5",
                      children: t("chooseLanguageSub"),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-semibold text-sm",
                          children: t("autoTranslateForeign"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children: t("autoTranslateSub"),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      type: "button",
                      role: "switch",
                      "aria-checked": autoTranslate,
                      onClick: () => {
                        const next = !autoTranslate;
                        setAutoTranslate(next);
                        localStorage.setItem(
                          "webna-auto-translate",
                          String(next),
                        );
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${autoTranslate ? "bg-brand" : "bg-muted"}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${autoTranslate ? "translate-x-5" : "translate-x-0"}`,
                        },
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
                      children: t("supportedLanguages"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs",
                      children: LANGUAGES.map((item) => {
                        const isSelected = lang === item.code;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "button",
                          {
                            onClick: () => handleSelectLanguage(item.code),
                            className:
                              "flex w-full items-center justify-between p-3.5 text-left hover:bg-muted/40 transition-colors",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "font-medium text-sm text-foreground block",
                                        children: item.name,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: item.native,
                                      },
                                    ),
                                  ],
                                },
                              ),
                              isSelected &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)(Check, {
                                      className: "size-3.5 stroke-[3]",
                                    }),
                                  },
                                ),
                            ],
                          },
                          item.code,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          subView === "appearance" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "font-semibold text-sm text-foreground",
                      children: t("themeAndDisplay"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground mt-0.5",
                      children: t("appearanceSub"),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
                      children: t("colorTheme"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid grid-cols-3 gap-2",
                      children: [
                        {
                          id: "light",
                          label: t("lightTheme"),
                          Icon: Sun,
                        },
                        {
                          id: "dark",
                          label: t("darkTheme"),
                          Icon: Moon,
                        },
                        {
                          id: "system",
                          label: t("systemTheme"),
                          Icon: Laptop,
                        },
                      ].map(({ id, label, Icon }) => {
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "button",
                          {
                            onClick: () => applyTheme(id),
                            className: `flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border text-center transition-all ${theme === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold shadow-xs" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Icon,
                                { className: "size-5" },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-xs",
                                  children: label,
                                },
                              ),
                            ],
                          },
                          id,
                        );
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
                      children: t("textScaling"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid grid-cols-4 gap-2",
                      children: [
                        {
                          id: "small",
                          label: t("small"),
                          size: "85%",
                        },
                        {
                          id: "medium",
                          label: t("normal"),
                          size: "100%",
                        },
                        {
                          id: "large",
                          label: t("large"),
                          size: "115%",
                        },
                        {
                          id: "xlarge",
                          label: t("huge"),
                          size: "130%",
                        },
                      ].map(({ id, label, size }) => {
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "button",
                          {
                            onClick: () => applyFontSize(id),
                            className: `flex flex-col items-center justify-center p-2.5 rounded-2xl border text-center transition-all ${fontSize === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-xs font-bold",
                                  children: label,
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[10px] text-muted-foreground",
                                  children: size,
                                },
                              ),
                            ],
                          },
                          id,
                        );
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
                      children: t("addressBarPosition"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        {
                          id: "top",
                          label: t("topStandard"),
                        },
                        {
                          id: "bottom",
                          label: t("bottomEasy"),
                        },
                      ].map(({ id, label }) => {
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            onClick: () => {
                              setAddressBarPosition(id);
                              localStorage.setItem("webna-address-bar", id);
                              toast.success(
                                `${t("addressBarPosition")}: ${label}`,
                              );
                            },
                            className: `p-3 rounded-2xl border text-center text-xs font-medium transition-all ${addressBarPosition === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
                            children: label,
                          },
                          id,
                        );
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-semibold text-sm",
                          children: t("highContrast"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children: t("highContrastSub"),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      type: "button",
                      role: "switch",
                      "aria-checked": highContrast,
                      onClick: () => {
                        const next = !highContrast;
                        setHighContrast(next);
                        localStorage.setItem(
                          "webna-high-contrast",
                          String(next),
                        );
                        toast.success(
                          next
                            ? "High contrast enabled"
                            : "High contrast disabled",
                        );
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${highContrast ? "bg-brand" : "bg-muted"}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${highContrast ? "translate-x-5" : "translate-x-0"}`,
                        },
                      ),
                    }),
                  ],
                }),
              ],
            }),
          subView === "notifications" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className:
                                "font-semibold text-sm text-foreground",
                              children: t("androidNotificationPermission"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs text-muted-foreground mt-0.5",
                              children: t("permissionRequiredSub"),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: `text-xs font-bold px-2.5 py-1 rounded-full uppercase ${notifPermission === "granted" ? "bg-emerald-500/10 text-emerald-600" : notifPermission === "denied" ? "bg-destructive/10 text-destructive" : "bg-amber-500/10 text-amber-600"}`,
                          children: notifPermission,
                        }),
                      ],
                    }),
                    notifPermission !== "granted" &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        onClick: requestNotifPermission,
                        className:
                          "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
                            className: "size-3.5",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: t("requestPermission"),
                          }),
                        ],
                      }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
                      children: t("notificationCategories"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "space-y-2.5",
                      children: [
                        {
                          title: t("downloadCompletedAlerts"),
                          desc: t("downloadCompletedSub"),
                          val: notifDownloads,
                          set: (v) => {
                            setNotifDownloads(v);
                            localStorage.setItem(
                              "webna-notif-downloads",
                              String(v),
                            );
                          },
                        },
                        {
                          title: t("safeBrowsingAlerts"),
                          desc: t("safeBrowsingSub"),
                          val: notifSecurity,
                          set: (v) => {
                            setNotifSecurity(v);
                            localStorage.setItem(
                              "webna-notif-security",
                              String(v),
                            );
                          },
                        },
                        {
                          title: t("newsTrendingUpdates"),
                          desc: t("newsTrendingSub"),
                          val: notifNews,
                          set: (v) => {
                            setNotifNews(v);
                            localStorage.setItem("webna-notif-news", String(v));
                          },
                        },
                        {
                          title: t("mediaBackgroundPlayback"),
                          desc: t("mediaPlaybackSub"),
                          val: notifPlayback,
                          set: (v) => {
                            setNotifPlayback(v);
                            localStorage.setItem(
                              "webna-notif-playback",
                              String(v),
                            );
                          },
                        },
                        {
                          title: t("vibrationSoundAlerts"),
                          desc: t("vibrationSub"),
                          val: notifVibration,
                          set: (v) => {
                            setNotifVibration(v);
                            localStorage.setItem(
                              "webna-notif-vibration",
                              String(v),
                            );
                          },
                        },
                      ].map((item, idx) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-0.5 pr-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "h4",
                                      {
                                        className: "font-semibold text-sm",
                                        children: item.title,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "p",
                                      {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: item.desc,
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  type: "button",
                                  role: "switch",
                                  "aria-checked": item.val,
                                  onClick: () => item.set(!item.val),
                                  className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${item.val ? "bg-brand" : "bg-muted"}`,
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsx)("span", {
                                    className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${item.val ? "translate-x-5" : "translate-x-0"}`,
                                  }),
                                },
                              ),
                            ],
                          },
                          idx,
                        ),
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: sendTestNotification,
                  className:
                    "flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-foreground font-medium text-xs hover:bg-muted/40 transition-colors",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
                      className: "size-3.5 text-brand",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: t("sendTestNotification"),
                    }),
                  ],
                }),
              ],
            }),
          subView === "safety" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 p-4 shadow-2xs",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)(ShieldCheck, {
                                className: "size-6 stroke-[2.2]",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h3", {
                                          className:
                                            "font-bold text-sm text-foreground",
                                          children: t("shieldActive"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("span", {
                                          className:
                                            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className:
                                                "size-1.5 rounded-full bg-emerald-500 animate-pulse",
                                            }),
                                            securityScore >= 90
                                              ? t("auditStatusExcellent")
                                              : securityScore >= 70
                                                ? t("auditStatusGood")
                                                : t("auditStatusFair"),
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "p",
                                    {
                                      className:
                                        "text-xs text-muted-foreground mt-0.5 line-clamp-1",
                                      children: t("shieldActiveSub"),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "shrink-0 text-right",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "text-lg font-black text-emerald-600 dark:text-emerald-400 leading-none",
                                children: [securityScore, "%"],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className:
                                  "text-[10px] text-muted-foreground uppercase font-semibold",
                                children: [activeDefensesCount, "/11 active"],
                              },
                            ),
                          ],
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "grid grid-cols-2 p-1 rounded-2xl bg-muted/60 border border-border/60",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      type: "button",
                      onClick: () => setSafetyTab("controls"),
                      className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${safetyTab === "controls" ? "bg-card text-foreground shadow-xs border border-border/60" : "text-muted-foreground hover:text-foreground"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
                          className: "size-3.5 text-brand",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("safetyControlsTab"),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      type: "button",
                      onClick: () => setSafetyTab("audit"),
                      className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${safetyTab === "audit" ? "bg-card text-foreground shadow-xs border border-border/60" : "text-muted-foreground hover:text-foreground"}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
                          className:
                            "size-3.5 text-emerald-600 dark:text-emerald-400",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("safetyAuditTab"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "size-2 rounded-full bg-emerald-500",
                        }),
                      ],
                    }),
                  ],
                }),
                safetyTab === "controls" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-2.5",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      FingerprintPattern,
                                      { className: "size-3.5 text-brand" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                        children: t("privacyAndIdentity"),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[10px] font-semibold text-brand px-2 py-0.5 rounded-full bg-brand/10",
                                  children: "Privacy",
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("adsAndTrackers"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("adsAndTrackersSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked":
                                          blockAds && blockTrackers,
                                        onClick: () => {
                                          const next = !(
                                            blockAds && blockTrackers
                                          );
                                          setBlockAds(next);
                                          setBlockTrackers(next);
                                          localStorage.setItem(
                                            "webna-block-ads",
                                            String(next),
                                          );
                                          localStorage.setItem(
                                            "webna-block-trackers",
                                            String(next),
                                          );
                                          toast.success(
                                            next
                                              ? "Ad & Tracker Shield enabled"
                                              : "Ad & Tracker Shield disabled",
                                          );
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockAds && blockTrackers ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockAds && blockTrackers ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("fingerprintProtection"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t(
                                            "fingerprintProtectionSub",
                                          ),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": fingerprintProt,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${fingerprintProt ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${fingerprintProt ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("cleanLinks"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("cleanLinksSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": cleanLinks,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${cleanLinks ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${cleanLinks ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t(
                                            "blockNotificationRequests",
                                          ),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t(
                                            "blockNotificationRequestsSub",
                                          ),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": blockNotifications,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockNotifications ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockNotifications ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("cookieManagement"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground",
                                          children: t("cookieManagementSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "grid grid-cols-3 gap-1.5 pt-1",
                                        children: [
                                          {
                                            id: "allow",
                                            label: t("cookieAllow"),
                                            desc: "Standard",
                                          },
                                          {
                                            id: "block-3rd",
                                            label: t("cookieBlock3rd"),
                                            desc: "Recommended",
                                          },
                                          {
                                            id: "block-all",
                                            label: t("cookieBlockAll"),
                                            desc: "Strict",
                                          },
                                        ].map((opt) => {
                                          const isSel = cookiePolicy === opt.id;
                                          return /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () => {
                                                setCookiePolicy(opt.id);
                                                localStorage.setItem(
                                                  "webna-cookie-mode",
                                                  opt.id,
                                                );
                                                setBlockCookies(
                                                  opt.id !== "allow",
                                                );
                                                localStorage.setItem(
                                                  "webna-block-cookies",
                                                  String(opt.id !== "allow"),
                                                );
                                                toast.success(
                                                  `Cookie policy set: ${opt.label}`,
                                                );
                                              },
                                              className: `p-2 rounded-xl text-center border transition-all ${isSel ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-bold shadow-2xs" : "border-border/60 bg-muted/30 hover:bg-muted/60 text-muted-foreground"}`,
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-[11px] block leading-tight",
                                                    children: opt.label,
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-[9px] opacity-75 font-normal",
                                                    children: opt.desc,
                                                  },
                                                ),
                                              ],
                                            },
                                            opt.id,
                                          );
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-2.5 pt-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Lock,
                                      {
                                        className:
                                          "size-3.5 text-emerald-600 dark:text-emerald-400",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                        children: t("connectionAndThreat"),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10",
                                  children: "Security",
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("httpsOnlyMode"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("httpsOnlySub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": httpsOnly,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${httpsOnly ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${httpsOnly ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("antiPhishing"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("antiPhishingSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": phishingProtection,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${phishingProtection ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${phishingProtection ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("blockPopupsTitle"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("blockPopupsSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": blockPopups,
                                        onClick: () => {
                                          const next = !blockPopups;
                                          setBlockPopups(next);
                                          localStorage.setItem(
                                            "webna-block-popups",
                                            String(next),
                                          );
                                          toast.success(
                                            next
                                              ? "Pop-up blocker active"
                                              : "Pop-ups allowed",
                                          );
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockPopups ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockPopups ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("blockMixedContent"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("blockMixedContentSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": blockMixedContent,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockMixedContent ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockMixedContent ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("sendDntHeader"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("sendDntSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": doNotTrack,
                                        onClick: () => {
                                          const next = !doNotTrack;
                                          setDoNotTrack(next);
                                          localStorage.setItem(
                                            "webna-dnt",
                                            String(next),
                                          );
                                          toast.success(
                                            next
                                              ? "Global Privacy Control & DNT enabled"
                                              : "DNT headers disabled",
                                          );
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${doNotTrack ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${doNotTrack ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("strictDownloads"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("strictDownloadsSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": strictDownloads,
                                        onClick: () => {
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
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${strictDownloads ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${strictDownloads ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "space-y-0.5 pr-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("h4", {
                                          className:
                                            "font-semibold text-xs text-foreground",
                                          children: t("dnsLeakMitigation"),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-[11px] text-muted-foreground leading-snug",
                                          children: t("dnsLeakSub"),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": dnsLeakProtection,
                                        onClick: () => {
                                          const next = !dnsLeakProtection;
                                          setDnsLeakProtection(next);
                                          localStorage.setItem(
                                            "webna-dns-leak",
                                            String(next),
                                          );
                                          toast.success(
                                            next
                                              ? "DNS leak mitigation active"
                                              : "DNS leak mitigation disabled",
                                          );
                                        },
                                        className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${dnsLeakProtection ? "bg-brand" : "bg-muted"}`,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${dnsLeakProtection ? "translate-x-5" : "translate-x-0"}`,
                                        }),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: () => setSubView("blockings"),
                        className:
                          "flex w-full items-center justify-between rounded-2xl border border-brand/30 bg-brand/5 p-4 text-left hover:bg-brand/10 transition-colors",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "font-semibold text-xs text-brand block",
                                  children: t("detailedShieldPermissions"),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[11px] text-muted-foreground",
                                  children: t("detailedShieldSub"),
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            ChevronRight,
                            { className: "size-4 text-brand" },
                          ),
                        ],
                      }),
                    ],
                  }),
                safetyTab === "audit" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "h4",
                                      {
                                        className:
                                          "font-bold text-sm text-foreground",
                                        children: t("auditScoreTitle"),
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "p",
                                      {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: t("auditScoreSub"),
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xl",
                                  children: [securityScore, "%"],
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "h-2 w-full rounded-full bg-muted overflow-hidden",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsx)("div", {
                              className: `h-full transition-all duration-500 ${securityScore >= 90 ? "bg-emerald-500" : securityScore >= 70 ? "bg-amber-500" : "bg-destructive"}`,
                              style: { width: `${securityScore}%` },
                            }),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-xs text-muted-foreground pt-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  children:
                                    securityScore >= 90
                                      ? `✓ ${t("auditStatusExcellent")}`
                                      : securityScore >= 70
                                        ? `! ${t("auditStatusGood")}`
                                        : `⚠ ${t("auditStatusFair")}`,
                                },
                              ),
                              lastAuditAt &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "span",
                                  {
                                    className: "text-[10px]",
                                    children: [
                                      "Last audit: ",
                                      new Date(
                                        lastAuditAt,
                                      ).toLocaleTimeString(),
                                    ],
                                  },
                                ),
                            ],
                          }),
                          securityScore < 100 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "button",
                              {
                                type: "button",
                                onClick: handleAutoProtectAll,
                                className:
                                  "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 px-3 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Sparkles,
                                    { className: "size-3.5" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    { children: t("optimizeAll") },
                                  ),
                                ],
                              },
                            ),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center gap-2.5",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex size-9 items-center justify-center rounded-xl bg-muted text-foreground",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)(Activity, {
                                      className: `size-4 ${isAuditing ? "animate-spin text-brand" : "text-emerald-600"}`,
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("h4", {
                                        className:
                                          "font-semibold text-xs text-foreground",
                                        children: isAuditing
                                          ? t("runningAudit")
                                          : t("runAudit"),
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("p", {
                                        className:
                                          "text-[11px] text-muted-foreground",
                                        children: isAuditing
                                          ? auditStep === 1
                                            ? "Auditing TLS cipher suites & HTTPS..."
                                            : auditStep === 2
                                              ? "Testing tracker & telemetry filter rules..."
                                              : auditStep === 3
                                                ? "Validating canvas fingerprint obfuscation..."
                                                : "Checking link sanitizer rules..."
                                          : "Performs full integrity check of device shields",
                                      }),
                                    ],
                                  },
                                ),
                              ],
                            }),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "button",
                            {
                              type: "button",
                              onClick: handleRunSecurityAudit,
                              disabled: isAuditing,
                              className:
                                "flex w-full items-center justify-center gap-2 rounded-xl bg-muted hover:bg-muted/80 border border-border py-2.5 text-foreground font-semibold text-xs transition-colors",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  RefreshCw,
                                  {
                                    className: `size-3.5 text-brand ${isAuditing ? "animate-spin" : ""}`,
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "span",
                                  {
                                    children: isAuditing
                                      ? t("runningAudit")
                                      : t("runAudit"),
                                  },
                                ),
                              ],
                            },
                          ),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "text-xs font-bold uppercase tracking-wider text-muted-foreground px-1",
                            children: t("auditChecklist"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "rounded-2xl border border-border/80 bg-card divide-y divide-border/60 overflow-hidden shadow-2xs",
                            children: [
                              {
                                name: t("adsAndTrackers"),
                                active: blockAds && blockTrackers,
                                fix: () => {
                                  setBlockAds(true);
                                  setBlockTrackers(true);
                                  localStorage.setItem(
                                    "webna-block-ads",
                                    "true",
                                  );
                                  localStorage.setItem(
                                    "webna-block-trackers",
                                    "true",
                                  );
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
                                  localStorage.setItem(
                                    "webna-clean-links",
                                    "true",
                                  );
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
                                  localStorage.setItem(
                                    "webna-block-cookies",
                                    "true",
                                  );
                                },
                              },
                              {
                                name: t("httpsOnlyMode"),
                                active: httpsOnly,
                                fix: () => {
                                  setHttpsOnly(true);
                                  localStorage.setItem(
                                    "webna-https-only",
                                    "true",
                                  );
                                },
                              },
                              {
                                name: t("antiPhishing"),
                                active: phishingProtection,
                                fix: () => {
                                  setPhishingProtection(true);
                                  localStorage.setItem(
                                    "webna-phishing-prot",
                                    "true",
                                  );
                                },
                              },
                              {
                                name: t("blockPopupsTitle"),
                                active: blockPopups,
                                fix: () => {
                                  setBlockPopups(true);
                                  localStorage.setItem(
                                    "webna-block-popups",
                                    "true",
                                  );
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
                            ].map((item, idx) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between p-3 text-xs",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        item.active
                                          ? /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(
                                              CircleCheck,
                                              {
                                                className:
                                                  "size-4 text-emerald-600 dark:text-emerald-400 shrink-0",
                                              },
                                            )
                                          : /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(
                                              CircleAlert,
                                              {
                                                className:
                                                  "size-4 text-amber-500 shrink-0",
                                              },
                                            ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "font-medium text-foreground",
                                          children: item.name,
                                        }),
                                      ],
                                    }),
                                    item.active
                                      ? /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10",
                                          children: "Protected",
                                        })
                                      : /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            item.fix();
                                            toast.success(
                                              `Enabled: ${item.name}`,
                                            );
                                          },
                                          className:
                                            "text-[10px] font-bold text-brand px-2 py-0.5 rounded-full bg-brand/10 hover:bg-brand/20 transition-colors",
                                          children: "Enable",
                                        }),
                                  ],
                                },
                                idx,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          subView === "backup" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "font-semibold text-sm text-foreground",
                      children: t("backupAndSync"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground mt-0.5",
                      children: t("backupSub"),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "size-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-base shrink-0",
                              children: "M",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className: "font-bold text-sm block",
                                      children: "musichub661@gmail.com",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        t("cloudSync"),
                                        ":",
                                        " ",
                                        syncStatus === "syncing"
                                          ? "Syncing..."
                                          : "Connected",
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          onClick: handleCloudSync,
                          disabled: syncStatus === "syncing",
                          className:
                            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition-colors disabled:opacity-50",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              RefreshCw,
                              {
                                className: `size-3.5 ${syncStatus === "syncing" ? "animate-spin text-brand" : ""}`,
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              { children: t("syncNow") },
                            ),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex justify-between text-xs text-muted-foreground pt-1 border-t",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("lastCloudSync"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-medium text-foreground",
                          children: lastSyncTime,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "size-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Download,
                            { className: "size-5" },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              className: "font-semibold text-sm",
                              children: t("exportToJson"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs text-muted-foreground",
                              children: t("exportSub"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: handleExportData,
                      disabled: isExporting,
                      className:
                        "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity mt-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: isExporting
                            ? "Exporting..."
                            : t("downloadBackupFile"),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "size-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Upload,
                            { className: "size-5" },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              className: "font-semibold text-sm",
                              children: t("restoreFromBackup"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs text-muted-foreground",
                              children: t("restoreSub"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                      ref: fileInputRef,
                      type: "file",
                      accept: ".json,application/json",
                      onChange: handleImportFile,
                      className: "hidden",
                      id: "restore-file-input",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => fileInputRef.current?.click(),
                      disabled: isImporting,
                      className:
                        "flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-foreground font-semibold text-xs hover:bg-muted/40 transition-colors mt-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
                          className: "size-3.5 text-brand",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: isImporting
                            ? "Reading File..."
                            : t("chooseBackupFile"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          subView === "passwords" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          className: "font-semibold text-sm text-foreground",
                          children: t("savedPasswords"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children: t("passwordVaultSub"),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: handleOpenAddPassword,
                      className:
                        "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                          className: "size-3.5",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("add"),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "relative",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                      type: "text",
                      placeholder: t("searchAccounts"),
                      value: passwordSearch,
                      onChange: (e) => setPasswordSearch(e.target.value),
                      className:
                        "w-full rounded-2xl border border-border bg-card py-2.5 pl-9 pr-4 text-xs outline-none focus:border-brand",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
                      className:
                        "absolute left-3 top-3 size-3.5 text-muted-foreground",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl border border-border/80 bg-card p-3 space-y-2 text-xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("offerToSavePasswords"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          role: "switch",
                          "aria-checked": savePasswordPrompt,
                          onClick: () => {
                            const next = !savePasswordPrompt;
                            setSavePasswordPrompt(next);
                            localStorage.setItem(
                              "webna-save-password-prompt",
                              String(next),
                            );
                          },
                          className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${savePasswordPrompt ? "bg-brand" : "bg-muted"}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "span",
                            {
                              className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${savePasswordPrompt ? "translate-x-4" : "translate-x-0"}`,
                            },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center justify-between border-t pt-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: t("autoFillWebForms"),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          role: "switch",
                          "aria-checked": autoFillEnabled,
                          onClick: () => {
                            const next = !autoFillEnabled;
                            setAutoFillEnabled(next);
                            localStorage.setItem(
                              "webna-autofill-passwords",
                              String(next),
                            );
                          },
                          className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${autoFillEnabled ? "bg-brand" : "bg-muted"}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "span",
                            {
                              className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${autoFillEnabled ? "translate-x-4" : "translate-x-0"}`,
                            },
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "space-y-2.5",
                  children: passwords
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
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          onClick: () => handleOpenEditPassword(cred),
                          className:
                            "rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2.5 cursor-pointer hover:border-brand/50 transition-all",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "flex items-center justify-between",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-2.5 min-w-0",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("img", {
                                          src: `https://www.google.com/s2/favicons?domain=${cred.domain}&sz=32`,
                                          alt: "",
                                          className:
                                            "size-5 rounded-sm shrink-0",
                                          onError: (e) => {
                                            e.target.style.display = "none";
                                          },
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "font-semibold text-sm text-foreground truncate",
                                          children: cred.domain,
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "button",
                                    {
                                      onClick: (e) => {
                                        e.stopPropagation();
                                        handleDeletePassword(cred.id);
                                      },
                                      className:
                                        "text-muted-foreground hover:text-destructive p-1 rounded-lg",
                                      "aria-label": t("delete"),
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(Trash2, {
                                        className: "size-4",
                                      }),
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "space-y-1.5 text-xs",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "text-muted-foreground truncate mr-2",
                                          children: cred.username,
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("button", {
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            copyToClipboard(
                                              cred.username,
                                              "Username",
                                            );
                                          },
                                          className: "p-1 hover:text-brand",
                                          "aria-label": t("copy"),
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Copy, {
                                            className: "size-3.5",
                                          }),
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "font-mono text-xs tracking-wider truncate mr-2",
                                          children: isVisible
                                            ? cred.password
                                            : "••••••••••••",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: (e) => {
                                                e.stopPropagation();
                                                toggleShowPassword(cred.id);
                                              },
                                              className:
                                                "p-1 hover:text-foreground text-muted-foreground",
                                              "aria-label":
                                                "Toggle password view",
                                              children: isVisible
                                                ? /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    EyeOff,
                                                    { className: "size-3.5" },
                                                  )
                                                : /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(Eye, {
                                                    className: "size-3.5",
                                                  }),
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: (e) => {
                                                e.stopPropagation();
                                                copyToClipboard(
                                                  cred.password,
                                                  "Password",
                                                );
                                              },
                                              className:
                                                "p-1 hover:text-brand text-muted-foreground",
                                              "aria-label": t("copy"),
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Copy, {
                                                className: "size-3.5",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                        cred.id,
                      );
                    }),
                }),
              ],
            }),
          showAddPasswordModal &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-bold text-base text-foreground",
                        children: editingPasswordId
                          ? lang === "es"
                            ? "Editar credencial"
                            : "Edit Credential"
                          : t("saveNewCredential"),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: () => setShowAddPasswordModal(false),
                        className: "p-1 text-muted-foreground",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          X,
                          { className: "size-4" },
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className:
                              "text-xs font-semibold text-muted-foreground block mb-1",
                            children: t("websiteDomain"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "e.g. netflix.com",
                            value: newDomain,
                            onChange: (e) => setNewDomain(e.target.value),
                            className:
                              "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className:
                              "text-xs font-semibold text-muted-foreground block mb-1",
                            children: t("usernameEmail"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "e.g. user@example.com",
                            value: newUsername,
                            onChange: (e) => setNewUsername(e.target.value),
                            className:
                              "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between mb-1",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "label",
                                {
                                  className:
                                    "text-xs font-semibold text-muted-foreground",
                                  children: t("passwordLabel"),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  type: "button",
                                  onClick: generateStrongPassword,
                                  className:
                                    "text-[11px] font-semibold text-brand hover:underline",
                                  children: t("generateStrong"),
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "Password",
                            value: newPasswordVal,
                            onChange: (e) => setNewPasswordVal(e.target.value),
                            className:
                              "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-mono outline-none focus:border-brand",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex gap-2 pt-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: () => setShowAddPasswordModal(false),
                        className:
                          "flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground",
                        children: t("cancel"),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: handleAddPassword,
                        className:
                          "flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground shadow-xs",
                        children: editingPasswordId
                          ? lang === "es"
                            ? "Actualizar"
                            : "Update"
                          : t("save"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          subView === "privacy" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8 text-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "font-bold text-base",
                      children: t("privacyCommitment"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Last updated: October 2026 • Valid for Android APK & Web App",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl border border-border/80 bg-card p-4 space-y-4 text-xs leading-relaxed shadow-2xs text-muted-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                      className: "space-y-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-bold text-sm text-foreground",
                          children: "1. Zero-Log Browsing Policy",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "WebNa does not track, collect, store, or sell your search history, URLs, or personal browsing habits. All history, saved bookmarks, and downloads are stored locally on your device storage.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                      className: "space-y-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-bold text-sm text-foreground",
                          children: "2. Android Permissions Transparency",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "WebNa only requests permissions when strictly required for user-initiated actions:",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                          className: "list-disc pl-4 space-y-1 mt-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "strong",
                                  {
                                    className: "text-foreground",
                                    children: "Storage / Downloads:",
                                  },
                                ),
                                " ",
                                "Used solely to save downloaded audio, video, or files to your device.",
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "strong",
                                  {
                                    className: "text-foreground",
                                    children: "Camera & Microphone:",
                                  },
                                ),
                                " ",
                                "Only enabled if you explicitly grant access to a specific site for video calls or audio recording.",
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "strong",
                                  {
                                    className: "text-foreground",
                                    children: "Notifications:",
                                  },
                                ),
                                " ",
                                "Used for alerting when downloads finish and playing media in the background.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                      className: "space-y-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-bold text-sm text-foreground",
                          children: "3. Ad & Tracker Blocking",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "WebNa features built-in shield filters that intercept telemetry requests, known third-party advertising scripts, and cross-site tracking cookies.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                      className: "space-y-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-bold text-sm text-foreground",
                          children: "4. User Data Control",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            'You retain complete sovereignty over your data. You may export all browser data to JSON or completely wipe history, cookies, and cache at any time using the "Clear Browsing Data" tool.',
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                      className: "space-y-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-bold text-sm text-foreground",
                          children: "5. Contact & Data Protection",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          children: [
                            "For any privacy questions or data inquiries, contact:",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: "font-semibold text-brand",
                                children: "privacy@webna.app",
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => {
                    toast.success(
                      lang === "es"
                        ? "¡Política de privacidad confirmada!"
                        : "Privacy policy acknowledged!",
                    );
                    setSubView(null);
                  },
                  className:
                    "flex w-full items-center justify-center gap-2 rounded-2xl bg-brand p-3.5 text-brand-foreground font-semibold text-sm shadow-md",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                      className: "size-4",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: t("iUnderstandAndAcknowledge"),
                    }),
                  ],
                }),
              ],
            }),
          subView === "blockings" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 space-y-1 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "font-semibold text-sm text-foreground",
                      children: t("blockingsAndShields"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: t("shieldsSub"),
                    }),
                  ],
                }),
                [
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
                ].map((item, idx) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-0.5 pr-4",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              className: "font-semibold text-sm",
                              children: item.title,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs text-muted-foreground",
                              children: item.desc,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "button",
                          role: "switch",
                          "aria-checked": item.val,
                          onClick: () => item.set(!item.val),
                          className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${item.val ? "bg-brand" : "bg-muted"}`,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "span",
                            {
                              className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${item.val ? "translate-x-5" : "translate-x-0"}`,
                            },
                          ),
                        }),
                      ],
                    },
                    idx,
                  ),
                ),
              ],
            }),
          subView === "clear-data" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-2xl bg-destructive/10 border border-destructive/20 p-4 space-y-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
                      className:
                        "font-bold text-sm text-destructive flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          TriangleAlert,
                          { className: "size-4" },
                        ),
                        t("clearDataTitle"),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: t("clearDataSub"),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                      className: "text-xs font-semibold text-foreground",
                      children: t("timeRange"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid grid-cols-4 gap-1.5",
                      children: [
                        {
                          id: "hour",
                          label: t("lastHour"),
                        },
                        {
                          id: "day",
                          label: t("twentyFourHours"),
                        },
                        {
                          id: "week",
                          label: t("sevenDays"),
                        },
                        {
                          id: "all",
                          label: t("allTime"),
                        },
                      ].map(({ id, label }) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            onClick: () => setClearTimeRange(id),
                            className: `py-2 px-1 text-center rounded-xl text-xs font-medium transition-colors ${clearTimeRange === id ? "bg-brand text-brand-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
                            children: label,
                          },
                          id,
                        ),
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs",
                  children: [
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
                  ].map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "label",
                      {
                        className:
                          "flex items-center justify-between p-3.5 hover:bg-muted/40 cursor-pointer",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "font-semibold text-xs block text-foreground",
                                  children: item.label,
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[11px] text-muted-foreground",
                                  children: item.desc,
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "checkbox",
                            checked: item.checked,
                            onChange: (e) => item.set(e.target.checked),
                            className: "size-4 accent-brand rounded",
                          }),
                        ],
                      },
                      item.id,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex gap-2 pt-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      onClick: () => setSubView(null),
                      className:
                        "flex-1 rounded-2xl bg-muted py-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80",
                      children: t("cancel"),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      onClick: handleExecuteClear,
                      className:
                        "flex-1 rounded-2xl bg-destructive py-3 text-xs font-semibold text-destructive-foreground shadow-sm hover:opacity-90",
                      children: t("clearDataNow"),
                    }),
                  ],
                }),
              ],
            }),
          subView === "payments" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4 pb-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className:
                                "font-semibold text-sm text-foreground",
                              children:
                                lang === "es"
                                  ? "Métodos de pago y tarjetas"
                                  : "Payment Methods & Cards",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs text-muted-foreground mt-0.5",
                              children:
                                lang === "es"
                                  ? "Guarde tarjetas de débito o crédito para compras rápidas online al estilo Google Pay"
                                  : "Save debit or credit cards for fast online checkout like Google Pay",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          onClick: handleOpenAddCard,
                          className:
                            "flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-brand-foreground shadow-xs hover:opacity-90 transition-opacity",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                              className: "size-4",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                children:
                                  lang === "es" ? "Añadir tarjeta" : "Add Card",
                              },
                            ),
                          ],
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "font-semibold text-sm",
                          children:
                            lang === "es"
                              ? "Rellenar métodos de pago automáticamente"
                              : "Autofill payment methods",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            lang === "es"
                              ? "Permitir que WebNa rellene tarjetas guardadas en formularios de pago online"
                              : "Allow WebNa to fill in saved cards on online checkout forms",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      type: "button",
                      role: "switch",
                      "aria-checked": autofillCards,
                      onClick: () => {
                        const next = !autofillCards;
                        setAutofillCards(next);
                        localStorage.setItem(
                          "webna-autofill-cards",
                          String(next),
                        );
                        toast.success(
                          next
                            ? "Autofill payments enabled"
                            : "Autofill payments disabled",
                        );
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${autofillCards ? "bg-brand" : "bg-muted"}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${autofillCards ? "translate-x-5" : "translate-x-0"}`,
                        },
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between px-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className:
                            "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                          children: [
                            lang === "es"
                              ? "Tarjetas guardadas"
                              : "Saved Cards",
                            " (",
                            savedCards.length,
                            ")",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-[11px] text-muted-foreground",
                          children:
                            lang === "es"
                              ? "Encriptado local seguro"
                              : "Secure Local Encryption",
                        }),
                      ],
                    }),
                    savedCards.length === 0
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "rounded-2xl border border-dashed border-border/80 bg-card/50 p-8 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              CreditCard,
                              {
                                className:
                                  "size-8 mx-auto text-muted-foreground/50 mb-2",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-sm font-medium text-foreground",
                              children:
                                lang === "es"
                                  ? "No hay tarjetas guardadas"
                                  : "No payment cards saved",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "text-xs text-muted-foreground mt-1 mb-4",
                              children:
                                lang === "es"
                                  ? "Añada una tarjeta para compras rápidas en la web."
                                  : "Add a card for fast and secure web checkouts.",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "button",
                              {
                                onClick: handleOpenAddCard,
                                className:
                                  "inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Plus,
                                    { className: "size-4" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      children:
                                        lang === "es"
                                          ? "Añadir primera tarjeta"
                                          : "Add first card",
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "space-y-3",
                          children: savedCards.map((card) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                onClick: () => handleOpenEditCard(card),
                                className:
                                  "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs relative overflow-hidden group cursor-pointer hover:border-brand/50 transition-all",
                                children: [
                                  card.isDefault &&
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "absolute top-0 right-0 bg-brand text-brand-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-xl",
                                        children:
                                          lang === "es"
                                            ? "Predeterminada"
                                            : "Default",
                                      },
                                    ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "flex items-start justify-between",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("div", {
                                            className:
                                              "flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-xs",
                                            children:
                                              card.cardBrand === "Visa"
                                                ? "VISA"
                                                : card.cardBrand ===
                                                    "Mastercard"
                                                  ? "MC"
                                                  : card.cardBrand ===
                                                      "American Express"
                                                    ? "AMEX"
                                                    : "CARD",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("div", {
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("h4", {
                                                className:
                                                  "font-semibold text-sm font-mono tracking-wider",
                                                children: card.cardNumber,
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)("p", {
                                                className:
                                                  "text-xs text-muted-foreground mt-0.5",
                                                children: [
                                                  card.cardHolder,
                                                  " • Exp ",
                                                  card.expiryMonth,
                                                  "/",
                                                  card.expiryYear,
                                                ],
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("p", {
                                                className:
                                                  "text-[11px] text-muted-foreground/70 mt-0.5",
                                                children: card.billingAddress,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between mt-4 pt-3 border-t border-border/60",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            !card.isDefault &&
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  onClick: (e) => {
                                                    e.stopPropagation();
                                                    handleSetDefaultCard(
                                                      card.id,
                                                    );
                                                  },
                                                  className:
                                                    "text-xs font-medium text-brand hover:underline",
                                                  children:
                                                    lang === "es"
                                                      ? "Hacer predeterminada"
                                                      : "Set as default",
                                                },
                                              ),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className:
                                                "text-xs font-medium text-muted-foreground hover:text-brand",
                                              children:
                                                lang === "es"
                                                  ? "Editar"
                                                  : "Edit",
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("div", {
                                          className: "flex items-center gap-1",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("button", {
                                            onClick: (e) => {
                                              e.stopPropagation();
                                              handleDeleteCard(card.id);
                                            },
                                            className:
                                              "flex items-center gap-1 text-xs text-destructive hover:underline p-1.5",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(Trash2, {
                                                className: "size-3.5",
                                              }),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                children:
                                                  lang === "es"
                                                    ? "Eliminar"
                                                    : "Remove",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                              card.id,
                            ),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          showAddCardModal &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-2xl space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-bold text-base text-foreground",
                        children: editingCardId
                          ? lang === "es"
                            ? "Editar tarjeta de pago"
                            : "Edit Payment Card"
                          : lang === "es"
                            ? "Añadir tarjeta de pago"
                            : "Add Payment Card",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: () => setShowAddCardModal(false),
                        className:
                          "size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          X,
                          { className: "size-4" },
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className:
                              "text-xs font-medium text-muted-foreground block mb-1",
                            children:
                              lang === "es"
                                ? "Número de tarjeta"
                                : "Card Number",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "4532 0000 0000 0000",
                            value: newCardNumber,
                            onChange: (e) => setNewCardNumber(e.target.value),
                            className:
                              "w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className:
                              "text-xs font-medium text-muted-foreground block mb-1",
                            children:
                              lang === "es"
                                ? "Nombre del titular"
                                : "Cardholder Name",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "Alex Morgan",
                            value: newCardHolder,
                            onChange: (e) => setNewCardHolder(e.target.value),
                            className:
                              "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "label",
                                {
                                  className:
                                    "text-xs font-medium text-muted-foreground block mb-1",
                                  children: lang === "es" ? "Mes" : "Exp Month",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "select",
                                {
                                  value: newExpiryMonth,
                                  onChange: (e) =>
                                    setNewExpiryMonth(e.target.value),
                                  className:
                                    "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
                                  children: Array.from(
                                    { length: 12 },
                                    (_, i) => {
                                      const m = String(i + 1).padStart(2, "0");
                                      return /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(
                                        "option",
                                        {
                                          value: m,
                                          children: m,
                                        },
                                        m,
                                      );
                                    },
                                  ),
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "label",
                                {
                                  className:
                                    "text-xs font-medium text-muted-foreground block mb-1",
                                  children: lang === "es" ? "Año" : "Exp Year",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "select",
                                {
                                  value: newExpiryYear,
                                  onChange: (e) =>
                                    setNewExpiryYear(e.target.value),
                                  className:
                                    "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
                                  children: [
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "30",
                                    "31",
                                    "32",
                                    "33",
                                  ].map((y) =>
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)(
                                      "option",
                                      {
                                        value: y,
                                        children: ["20", y],
                                      },
                                      y,
                                    ),
                                  ),
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "label",
                                {
                                  className:
                                    "text-xs font-medium text-muted-foreground block mb-1",
                                  children: "CVV / CVC",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "input",
                                {
                                  type: "password",
                                  maxLength: 4,
                                  placeholder: "123",
                                  value: newCvv,
                                  onChange: (e) => setNewCvv(e.target.value),
                                  className:
                                    "w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand",
                                },
                              ),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className:
                              "text-xs font-medium text-muted-foreground block mb-1",
                            children:
                              lang === "es"
                                ? "Dirección de facturación"
                                : "Billing Address",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "123 Main St, City, Country",
                            value: newBillingAddress,
                            onChange: (e) =>
                              setNewBillingAddress(e.target.value),
                            className:
                              "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex gap-2 pt-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: () => setShowAddCardModal(false),
                        className:
                          "flex-1 rounded-xl bg-muted p-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80 transition-colors",
                        children: lang === "es" ? "Cancelar" : "Cancel",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        onClick: handleSaveCard,
                        className:
                          "flex-1 rounded-xl bg-brand p-3 text-xs font-semibold text-brand-foreground hover:opacity-90 transition-opacity",
                        children: editingCardId
                          ? lang === "es"
                            ? "Actualizar tarjeta"
                            : "Update Card"
                          : lang === "es"
                            ? "Guardar tarjeta"
                            : "Save Card",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}
var host$1 = (u) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};
function TabSwitcherPanel({
  tabs,
  activeTabId,
  onSelectTab,
  onCloseTab,
  onNewTab,
  onCloseAll,
}) {
  const { lang } = useAppLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col bg-background px-4 py-3 overflow-y-auto",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex items-center justify-between mb-4 pb-3 border-b border-border/80",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
                  className: "size-4",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "font-bold text-base text-foreground",
                    children:
                      lang === "es" ? "Pestañas del navegador" : "Browser Tabs",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-xs text-muted-foreground",
                    children: [
                      tabs.length,
                      " ",
                      lang === "es" ? "pestañas abiertas" : "open tabs",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: onNewTab,
                className:
                  "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90 transition-opacity",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                    className: "size-3.5",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: lang === "es" ? "Nueva" : "New Tab",
                  }),
                ],
              }),
              tabs.length > 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  onClick: onCloseAll,
                  title: lang === "es" ? "Cerrar todas" : "Close all",
                  className:
                    "flex items-center justify-center size-8 rounded-xl bg-muted text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Trash2,
                    { className: "size-4" },
                  ),
                }),
            ],
          }),
        ],
      }),
      tabs.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center flex-1 py-16 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex size-16 items-center justify-center rounded-full bg-muted/60 text-muted-foreground mb-3",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
                  className: "size-8",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "font-semibold text-sm text-foreground",
                children:
                  lang === "es" ? "No hay pestañas abiertas" : "No open tabs",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs text-muted-foreground mt-1 mb-4",
                children:
                  lang === "es"
                    ? "Abre una nueva pestaña para empezar a navegar."
                    : "Open a new tab to start browsing the web.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                onClick: onNewTab,
                className:
                  "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-brand-foreground text-xs font-semibold",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                    className: "size-4",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: lang === "es" ? "Abrir pestaña" : "Open Tab",
                  }),
                ],
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid grid-cols-2 gap-3 pb-24",
            children: tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  onClick: () => onSelectTab(tab.id),
                  className: `group relative flex flex-col rounded-2xl border bg-card overflow-hidden shadow-xs cursor-pointer transition-all ${isActive ? "border-brand ring-2 ring-brand/30 shadow-md" : "border-border/80 hover:border-brand/40"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center justify-between bg-muted/60 px-3 py-2 border-b border-border/60",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-2 min-w-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: `https://www.google.com/s2/favicons?domain=${host$1(tab.url)}&sz=32`,
                              alt: "",
                              className: "size-4 rounded-xs shrink-0",
                              onError: (e) => {
                                e.target.style.display = "none";
                              },
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "font-medium text-[11px] text-foreground truncate",
                                children:
                                  tab.title || host$1(tab.url) || "New Tab",
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: (e) => {
                            e.stopPropagation();
                            onCloseTab(tab.id);
                          },
                          title: lang === "es" ? "Cerrar pestaña" : "Close tab",
                          className:
                            "flex size-5 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            X,
                            { className: "size-3" },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "h-28 bg-background/50 p-3 flex flex-col justify-between relative overflow-hidden",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "absolute inset-0 opacity-10 bg-gradient-to-br from-brand to-transparent pointer-events-none",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1 z-10",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "text-xs font-semibold text-foreground line-clamp-2",
                              children: tab.title || "WebNa Browser Page",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "text-[10px] text-muted-foreground truncate font-mono",
                              children: tab.url,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex items-center justify-between z-10 pt-2 border-t border-border/40",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: "text-[10px] text-brand font-medium",
                                children: host$1(tab.url),
                              },
                            ),
                            isActive &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className:
                                    "text-[9px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full",
                                  children: lang === "es" ? "Activa" : "Active",
                                },
                              ),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                tab.id,
              );
            }),
          }),
    ],
  });
}
var host = (u) => {
  try {
    return new URL(u).hostname.replace("www.", "");
  } catch {
    return u;
  }
};
var DIAL = [
  {
    t: "Google",
    u: "https://www.google.com/?igu=1",
  },
  {
    t: "Wikipedia",
    u: "https://en.wikipedia.org",
  },
  {
    t: "OpenStreetMap",
    u: "https://www.openstreetmap.org/export/embed.html",
  },
  {
    t: "Hacker News",
    u: "https://news.ycombinator.com",
  },
  {
    t: "Archive",
    u: "https://archive.org",
  },
  {
    t: "MDN",
    u: "https://developer.mozilla.org",
  },
  {
    t: "Bing",
    u: "https://www.bing.com",
  },
  {
    t: "DuckDuckGo",
    u: "https://html.duckduckgo.com/html/",
  },
];
function useStored(k, init) {
  const [v, setV] = (0, import_react.useState)(init);
  (0, import_react.useEffect)(() => {
    const s = localStorage.getItem(k);
    if (s) setV(JSON.parse(s));
  }, [k]);
  const set = (n) => {
    setV(n);
    localStorage.setItem(k, JSON.stringify(n));
  };
  return [v, set];
}
var DEFAULT_ENGINES = {
  Google: "https://www.google.com/search?igu=1&q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://html.duckduckgo.com/html/?q=",
  Brave: "https://search.brave.com/search?q=",
  Ecosia: "https://www.ecosia.org/search?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
  Startpage: "https://www.startpage.com/do/search?query=",
  Yandex: "https://yandex.com/search/?text=",
  Kagi: "https://kagi.com/search?q=",
  Baidu: "https://www.baidu.com/s?wd=",
  Sogou: "https://www.sogou.com/web?query=",
};
function ensureIframeCompatibleUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    if (
      parsed.hostname.includes("google.") &&
      !parsed.searchParams.has("igu")
    ) {
      parsed.searchParams.set("igu", "1");
      return parsed.toString();
    }
    return rawUrl;
  } catch {
    if (rawUrl.includes("google.") && !rawUrl.includes("igu=1"))
      return `${rawUrl}${rawUrl.includes("?") ? "&" : "?"}igu=1`;
    return rawUrl;
  }
}
function getEngineDomain(name) {
  const customDomains = {
    Google: "google.com",
    Bing: "bing.com",
    DuckDuckGo: "duckduckgo.com",
    Brave: "brave.com",
    Ecosia: "ecosia.org",
    Yahoo: "yahoo.com",
    Startpage: "startpage.com",
    Yandex: "yandex.com",
    Kagi: "kagi.com",
    Baidu: "baidu.com",
    Sogou: "sogou.com",
    Gemini: "gemini.google.com",
    ChatGPT: "chatgpt.com",
    Perplexity: "perplexity.ai",
    Claude: "claude.ai",
    Copilot: "copilot.microsoft.com",
    DeepSeek: "deepseek.com",
    Grok: "x.ai",
    Poe: "poe.com",
    Phind: "phind.com",
    "You.com": "you.com",
    "Meta AI": "meta.ai",
    Mistral: "mistral.ai",
    HuggingChat: "huggingface.co",
    "Pi AI": "pi.ai",
  };
  if (customDomains[name]) return customDomains[name];
  if (AI_ENGINES[name]) return AI_ENGINES[name].domain;
  return `${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`;
}
function App() {
  const [tab, setTab] = useStored("webna-tab", "home");
  const [engines, setEngines] = useStored("webna-engines", DEFAULT_ENGINES);
  (0, import_react.useEffect)(() => {
    if (engines) {
      let changed = false;
      const copy = { ...engines };
      if (copy.Google && !copy.Google.includes("igu=1")) {
        copy.Google = "https://www.google.com/search?igu=1&q=";
        changed = true;
      }
      if (copy.ChatGPT) {
        delete copy.ChatGPT;
        changed = true;
      }
      if (changed) setEngines(copy);
    }
  }, [engines, setEngines]);
  const DEFAULT_CATEGORIES = {
    Social: [
      {
        t: "YouTube",
        u: "https://youtube.com",
      },
      {
        t: "Reddit",
        u: "https://reddit.com",
      },
      {
        t: "Twitter / X",
        u: "https://x.com",
      },
      {
        t: "Instagram",
        u: "https://instagram.com",
      },
    ],
    Media: [
      {
        t: "Netflix",
        u: "https://netflix.com",
      },
      {
        t: "Spotify",
        u: "https://spotify.com",
      },
      {
        t: "Twitch",
        u: "https://twitch.tv",
      },
      {
        t: "SoundCloud",
        u: "https://soundcloud.com",
      },
    ],
    News: [
      {
        t: "BBC News",
        u: "https://bbc.com",
      },
      {
        t: "CNN",
        u: "https://cnn.com",
      },
      {
        t: "Reuters",
        u: "https://reuters.com",
      },
    ],
  };
  const { t } = useAppLanguage();
  const [engine, setEngine] = useStored("webna-engine", "Google");
  const [categories, setCategories] = useStored(
    "webna-categories-data",
    DEFAULT_CATEGORIES,
  );
  const [addingCategory, setAddingCategory] = (0, import_react.useState)(false);
  const [newCategory, setNewCategory] = (0, import_react.useState)("");
  const [activeCategory, setActiveCategory] = (0, import_react.useState)(null);
  const safeCategories = (0, import_react.useMemo)(() => {
    if (!categories || typeof categories !== "object")
      return DEFAULT_CATEGORIES;
    if (Array.isArray(categories)) {
      const obj = {};
      categories.forEach((item) => {
        if (typeof item === "string") obj[item] = [];
      });
      return Object.keys(obj).length > 0 ? obj : DEFAULT_CATEGORIES;
    }
    return Object.keys(categories).length > 0 ? categories : DEFAULT_CATEGORIES;
  }, [categories]);
  (0, import_react.useEffect)(() => {
    const keys = Object.keys(safeCategories);
    if (activeCategory && !safeCategories[activeCategory] && keys.length > 0)
      setActiveCategory(null);
  }, [safeCategories, activeCategory]);
  (0, import_react.useEffect)(() => {
    const savedTheme = localStorage.getItem("webna-theme");
    if (savedTheme === "dark") document.documentElement.classList.add("dark");
    else if (savedTheme === "light")
      document.documentElement.classList.remove("dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      document.documentElement.classList.add("dark");
  }, []);
  const [shortcutModalCategory, setShortcutModalCategory] = (0,
  import_react.useState)(null);
  const [shortcutName, setShortcutName] = (0, import_react.useState)("");
  const [shortcutUrl, setShortcutUrl] = (0, import_react.useState)("");
  const [bookmarks, setBookmarks] = useStored("webna-bm", []);
  const [savedLinks, setSavedLinks] = useStored("webna-saved-links", []);
  const [history, setHistory] = useStored("webna-hist", []);
  const [tabs, setTabs] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const s = localStorage.getItem("webna-browser-tabs");
    if (s)
      try {
        setTabs(JSON.parse(s));
      } catch {}
    else
      setTabs([
        {
          id: "tab-1",
          url: "https://www.google.com/?igu=1",
          title: "Google Search",
          active: true,
        },
      ]);
  }, []);
  const [activeTabId, setActiveTabId] = (0, import_react.useState)("tab-1");
  (0, import_react.useEffect)(() => {
    const t = tabs.find((x) => x.active);
    if (t) setActiveTabId(t.id);
  }, [tabs]);
  const [stack, setStack] = (0, import_react.useState)([]);
  const [idx, setIdx] = (0, import_react.useState)(-1);
  const [homeMenu, setHomeMenu] = (0, import_react.useState)(false);
  const [panel, setPanel] = (0, import_react.useState)(null);
  const [blockAds, setBlockAds] = useStored("webna-block-ads", true);
  const [blockPopups, setBlockPopups] = useStored("webna-block-popups", true);
  const [blockTrackers, setBlockTrackers] = useStored(
    "webna-block-trackers",
    true,
  );
  const [blockCookies, setBlockCookies] = useStored(
    "webna-block-cookies",
    false,
  );
  const [blockLocation, setBlockLocation] = useStored(
    "webna-block-location",
    true,
  );
  const [blockMic, setBlockMic] = useStored("webna-block-mic", true);
  const [blockCamera, setBlockCamera] = useStored("webna-block-camera", true);
  const [blockNotifications, setBlockNotifications] = useStored(
    "webna-block-notifications",
    true,
  );
  const [blockAutoplay, setBlockAutoplay] = useStored(
    "webna-block-autoplay",
    true,
  );
  const [blockJs, setBlockJs] = useStored("webna-block-js", false);
  const [playerMode, setPlayerMode] = (0, import_react.useState)("audio");
  const [queuedVideo, setQueuedVideo] = (0, import_react.useState)(null);
  const [article, setArticle] = (0, import_react.useState)(null);
  const browsing = idx >= 0;
  const url = stack[idx] ?? "";
  const open = (rawUrl) => {
    let target = rawUrl;
    if (isCleanLinksEnabled()) target = stripTrackingParams(target);
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("webna-https-only") !== "false" &&
      target.startsWith("http://") &&
      !target.includes("localhost")
    )
      target = target.replace("http://", "https://");
    const u = ensureIframeCompatibleUrl(target);
    const next = [...stack.slice(0, idx + 1), u];
    setStack(next);
    setIdx(next.length - 1);
    setPanel(null);
    setHistory(
      [
        {
          url: u,
          title: host(u),
          at: Date.now(),
        },
        ...history,
      ].slice(0, 300),
    );
  };
  const go = (raw) => {
    const q = raw.trim();
    if (!q) return;
    if (/^https?:\/\//i.test(q)) return open(q);
    if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(q)) return open("https://" + q);
    if (AI_ENGINES[engine]) {
      const ai = AI_ENGINES[engine];
      if (ai.url.includes("?q=") || ai.url.includes("search?q="))
        return open(ai.url + encodeURIComponent(q));
      return open(ai.url);
    }
    if (engine === "Google")
      return open(
        `https://www.google.com/search?igu=1&q=${encodeURIComponent(q)}`,
      );
    const baseEngine =
      engines?.[engine] ||
      DEFAULT_ENGINES[engine] ||
      DEFAULT_ENGINES["Google"] ||
      "https://www.google.com/search?igu=1&q=";
    open(baseEngine + encodeURIComponent(q));
  };
  const home = () => {
    setIdx(-1);
    setStack([]);
  };
  const isSaved = bookmarks.some((b) => b.url === url);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "min-h-[100dvh] bg-background",
    children: [
      browsing
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "fixed inset-0 flex flex-col",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserView, {
              stack,
              idx,
              onNav: go,
              onMove: (d) =>
                setIdx(Math.min(stack.length - 1, Math.max(0, idx + d))),
              onHome: home,
              isSaved,
              onToggleSave: () =>
                setBookmarks(
                  isSaved
                    ? bookmarks.filter((b) => b.url !== url)
                    : [
                        {
                          url,
                          title: host(url),
                          at: Date.now(),
                        },
                        ...bookmarks,
                      ],
                ),
              onOpenPanel: setPanel,
              onOpenPlayer: (mode) => {
                setPlayerMode(mode);
                setTab("player");
                home();
              },
            }),
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w-xl px-4 pb-28",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "sticky top-0 z-30 -mx-4 bg-background px-4 pb-3 pt-4",
                children: [
                  tab === "home" &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "relative mb-3 flex items-center justify-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                          className:
                            "text-2xl font-bold tracking-tight text-brand",
                          children: "WebNa",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          onClick: () => setHomeMenu(true),
                          className:
                            "absolute right-0 p-2 text-muted-foreground",
                          "aria-label": "Settings",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className:
                                "size-6 rounded-full bg-card flex items-center justify-center",
                              children: "⚙️",
                            },
                          ),
                        }),
                      ],
                    }),
                  tab === "player"
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center py-1",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => setPlayerMode("audio"),
                                  className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "audio" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                  "aria-label": "Switch to Audio Player",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Music,
                                      { className: "size-3.5" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: t("audioPlayer") },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => setPlayerMode("video"),
                                  className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "video" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                  "aria-label": "Switch to Video Player",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Film,
                                      { className: "size-3.5" },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      { children: t("videoPlayer") },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          },
                        ),
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
                        onSubmit: go,
                        onLens: () =>
                          window.open("https://lens.google.com", "_blank"),
                        engineName: engine,
                        engineDomain: getEngineDomain(engine),
                        onEngineClick: () => setPanel("search"),
                      }),
                ],
              }),
              tab === "home"
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                            className:
                              "mb-3 text-sm font-semibold text-muted-foreground",
                            children: t("shortcuts"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "grid grid-cols-4 gap-4",
                            children: DIAL.map((d) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  onClick: () => open(d.u),
                                  className: "flex flex-col items-center gap-1",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className:
                                          "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm",
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("img", {
                                          src: `https://www.google.com/s2/favicons?domain=${host(d.u)}&sz=64`,
                                          alt: "",
                                          className: "size-7",
                                        }),
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "span",
                                      {
                                        className: "w-full truncate text-xs",
                                        children: d.t,
                                      },
                                    ),
                                  ],
                                },
                                d.u,
                              ),
                            ),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "my-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                            className:
                              "text-xl font-bold tracking-tight text-foreground",
                            children: "Site/App Hub",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-xs text-muted-foreground mt-0.5",
                            children:
                              "You can keep your favorite sites or apps here for quick access.",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "h2",
                                {
                                  className:
                                    "text-sm font-semibold text-muted-foreground",
                                  children: t("categories"),
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  onClick: () => setAddingCategory(true),
                                  className:
                                    "text-xs font-medium text-brand hover:underline",
                                  children: t("addCategory"),
                                },
                              ),
                            ],
                          }),
                          addingCategory &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "flex gap-2 mb-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "input",
                                    {
                                      type: "text",
                                      placeholder: "Category name",
                                      value: newCategory,
                                      onChange: (e) =>
                                        setNewCategory(e.target.value),
                                      onKeyDown: (e) => {
                                        if (
                                          e.key === "Enter" &&
                                          newCategory.trim()
                                        ) {
                                          const catName = newCategory.trim();
                                          setCategories({
                                            ...safeCategories,
                                            [catName]: [],
                                          });
                                          setActiveCategory(catName);
                                          setNewCategory("");
                                          setAddingCategory(false);
                                        }
                                      },
                                      className:
                                        "flex-1 rounded-xl border bg-card p-2 text-sm outline-none focus:border-brand",
                                      autoFocus: true,
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "button",
                                    {
                                      onClick: () => {
                                        const catName = newCategory.trim();
                                        if (catName) {
                                          setCategories({
                                            ...safeCategories,
                                            [catName]: [],
                                          });
                                          setActiveCategory(catName);
                                          setNewCategory("");
                                          setAddingCategory(false);
                                        }
                                      },
                                      className:
                                        "rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground",
                                      children: "Save",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "button",
                                    {
                                      onClick: () => {
                                        setNewCategory("");
                                        setAddingCategory(false);
                                      },
                                      className:
                                        "rounded-xl bg-muted px-3 py-2 text-xs font-medium text-muted-foreground",
                                      children: "Cancel",
                                    },
                                  ),
                                ],
                              },
                            ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 py-1",
                            children: Object.keys(safeCategories).map((cat) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  onClick: () =>
                                    setActiveCategory(
                                      activeCategory === cat ? null : cat,
                                    ),
                                  className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeCategory === cat ? "bg-brand text-brand-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground bg-transparent"}`,
                                  children: cat,
                                },
                                cat,
                              ),
                            ),
                          }),
                          activeCategory &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "grid grid-cols-4 gap-4",
                                children: [
                                  (safeCategories[activeCategory] || []).map(
                                    (s, i) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "relative group flex flex-col items-center",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              onClick: () => open(s.u),
                                              className:
                                                "flex flex-col items-center gap-1 w-full",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-border/40 group-hover:border-brand/40 transition-colors",
                                                    children:
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "img",
                                                        {
                                                          src: `https://www.google.com/s2/favicons?domain=${host(s.u)}&sz=64`,
                                                          alt: "",
                                                          className: "size-7",
                                                          onError: (e) => {
                                                            e.target.style.display =
                                                              "none";
                                                          },
                                                        },
                                                      ),
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "w-full truncate text-xs text-center",
                                                    children: s.t,
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("button", {
                                              onClick: (e) => {
                                                e.stopPropagation();
                                                const updated = (
                                                  safeCategories[
                                                    activeCategory
                                                  ] || []
                                                ).filter((_, idx) => idx !== i);
                                                setCategories({
                                                  ...safeCategories,
                                                  [activeCategory]: updated,
                                                });
                                              },
                                              title: "Remove shortcut",
                                              className:
                                                "absolute -top-1 -right-1 hidden group-hover:flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground text-[10px]",
                                              children: "✕",
                                            }),
                                          ],
                                        },
                                        i,
                                      ),
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "button",
                                    {
                                      onClick: () => {
                                        setShortcutModalCategory(
                                          activeCategory,
                                        );
                                        setShortcutName("");
                                        setShortcutUrl("");
                                      },
                                      className:
                                        "flex flex-col items-center gap-1 group",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-dashed border-border group-hover:border-brand text-2xl text-muted-foreground transition-colors",
                                          children: "+",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "w-full truncate text-xs text-center font-medium",
                                          children: "Add shortcut",
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                        ],
                      }),
                    ],
                  })
                : tab === "discover"
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Discover, {
                      onOpen: setArticle,
                      onOpenWeb: open,
                      onPlayVideo: (v) => {
                        setQueuedVideo({
                          id: v.id,
                          title: v.title,
                          channel: v.author,
                          videoUrl: v.videoUrl,
                          thumbnailUrl: v.thumbnailUrl,
                          duration: "00:30",
                          durationSeconds: 30,
                          quality: "720p HD",
                        });
                        setPlayerMode("video");
                        setTab("player");
                        setArticle(null);
                        home();
                      },
                    })
                  : tab === "player"
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          AudioPlayerPanel,
                          {
                            playerMode,
                            onPlayerModeChange: setPlayerMode,
                            initialVideoQueue: queuedVideo
                              ? [queuedVideo]
                              : void 0,
                            onCloseVideo: () => setQueuedVideo(null),
                          },
                        ),
                      })
                    : null,
            ],
          }),
      article &&
        !browsing &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleView, {
          link: article,
          onBack: () => setArticle(null),
          onOpenWeb: open,
          isSaved: savedLinks.some((s) => s.url === article),
          onToggleSave: (urlToSave, titleToSave) => {
            if (savedLinks.some((s) => s.url === urlToSave))
              setSavedLinks(savedLinks.filter((s) => s.url !== urlToSave));
            else
              setSavedLinks([
                {
                  url: urlToSave,
                  title: titleToSave,
                  at: Date.now(),
                },
                ...savedLinks,
              ]);
          },
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomTabs, {
        active: tab,
        tabCount: tabs.length,
        onChange: (t) => {
          setTab(t);
          home();
          setArticle(null);
          setPanel(t === "tabs" ? "tabs" : null);
        },
      }),
      panel === "tabs"
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabSwitcherPanel, {
            tabs,
            activeTabId,
            onSelectTab: (id) => {
              setActiveTabId(id);
              setTab("home");
              setPanel(null);
            },
            onCloseTab: (id) => {
              const newTabs = tabs.filter((t) => t.id !== id);
              setTabs(newTabs);
              localStorage.setItem(
                "webna-browser-tabs",
                JSON.stringify(newTabs),
              );
              if (activeTabId === id && newTabs.length > 0)
                setActiveTabId(newTabs[0].id);
            },
            onNewTab: () => {
              const newTab = {
                id: `tab-${Date.now()}`,
                url: "https://www.google.com/?igu=1",
                title: "New Tab",
                active: true,
              };
              const newTabs = [
                ...tabs.map((t) => ({
                  ...t,
                  active: false,
                })),
                newTab,
              ];
              setTabs(newTabs);
              setActiveTabId(newTab.id);
              localStorage.setItem(
                "webna-browser-tabs",
                JSON.stringify(newTabs),
              );
              setTab("home");
              setPanel(null);
            },
            onCloseAll: () => {
              setTabs([]);
              localStorage.removeItem("webna-browser-tabs");
              setTab("home");
              setPanel(null);
            },
          })
        : panel &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "fixed inset-0 z-50 flex flex-col bg-background",
            children:
              panel === "settings" || panel === "blockings"
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsManager, {
                    onClose: () => setPanel(null),
                    initialSubView: panel === "blockings" ? "blockings" : null,
                    bookmarks,
                    setBookmarks,
                    history,
                    setHistory,
                    savedLinks,
                    setSavedLinks,
                    categories: safeCategories,
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
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    import_jsx_runtime.Fragment,
                    {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex items-center justify-between border-b p-3 sm:p-4",
                          children: [
                            panel === "player"
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("button", {
                                        onClick: () => setPlayerMode("audio"),
                                        className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "audio" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                        "aria-label": "Switch to Audio Player",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Music, {
                                            className: "size-3.5",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            children: t("audioPlayer"),
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("button", {
                                        onClick: () => setPlayerMode("video"),
                                        className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "video" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                        "aria-label": "Switch to Video Player",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Film, {
                                            className: "size-3.5",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            children: t("videoPlayer"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                )
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "h2",
                                  {
                                    className: "text-lg font-semibold",
                                    children: {
                                      bookmarks: t("bookmarks"),
                                      "saved-links": t("savedLinks"),
                                      history: t("history"),
                                      settings: t("settings"),
                                      player: t("player"),
                                      account: "Account",
                                      search: t("searchEngines"),
                                      "search-add": t("add"),
                                    }[panel],
                                  },
                                ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "button",
                              {
                                onClick: () => setPanel(null),
                                "aria-label": "Close",
                                children: /* @__PURE__ */ (0,
                                import_jsx_runtime.jsx)(X, {
                                  className: "size-5",
                                }),
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: `flex-1 flex flex-col min-h-0 ${panel === "player" ? "p-0 overflow-hidden" : "p-4 overflow-y-auto"}`,
                          children: [
                            panel === "player" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                AudioPlayerPanel,
                                {
                                  playerMode,
                                  onPlayerModeChange: setPlayerMode,
                                },
                              ),
                            panel === "search" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-6 pb-6",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("section", {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "mb-3 flex items-center justify-between",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("h3", {
                                              className:
                                                "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(Globe, {
                                                  className:
                                                    "size-3.5 text-brand",
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    children: "Search engines",
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("span", {
                                              className:
                                                "text-[11px] text-muted-foreground",
                                              children: [
                                                "Active:",
                                                " ",
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-brand font-semibold",
                                                    children: engine,
                                                  },
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "grid grid-cols-3 gap-2.5 sm:gap-3",
                                          children: [
                                            Object.entries(engines)
                                              .filter(
                                                ([name]) => name !== "ChatGPT",
                                              )
                                              .map(([name]) => {
                                                const isSelected =
                                                  engine === name;
                                                const domain =
                                                  getEngineDomain(name);
                                                return /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => {
                                                      setEngine(name);
                                                      setPanel(null);
                                                    },
                                                    className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${isSelected ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand" : "border-border/60 hover:border-border"}`,
                                                    "aria-label": `Select ${name} search engine`,
                                                    children: [
                                                      isSelected &&
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs",
                                                            children:
                                                              /* @__PURE__ */ (0,
                                                              import_jsx_runtime.jsx)(
                                                                Check,
                                                                {
                                                                  className:
                                                                    "size-2.5 stroke-[3]",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex size-7 items-center justify-center rounded-full",
                                                          children:
                                                            name === "Google"
                                                              ? /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-xl font-bold leading-none",
                                                                    style: {
                                                                      background:
                                                                        "var(--gradient-google)",
                                                                      WebkitBackgroundClip:
                                                                        "text",
                                                                      color:
                                                                        "transparent",
                                                                    },
                                                                    children:
                                                                      "G",
                                                                  },
                                                                )
                                                              : /* @__PURE__ */ (0,
                                                                import_jsx_runtime.jsx)(
                                                                  "img",
                                                                  {
                                                                    src: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
                                                                    alt: name,
                                                                    className:
                                                                      "size-6 object-contain rounded-full",
                                                                    onError: (
                                                                      e,
                                                                    ) => {
                                                                      e.target.style.display =
                                                                        "none";
                                                                    },
                                                                  },
                                                                ),
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs font-medium truncate w-full text-foreground group-hover:text-foreground",
                                                          children: name,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  name,
                                                );
                                              }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("button", {
                                              type: "button",
                                              onClick: () =>
                                                setPanel("search-add"),
                                              className:
                                                "flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-border/80 bg-card/60 p-3 text-center transition-all hover:border-brand hover:bg-card active:scale-95 text-muted-foreground hover:text-foreground",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className:
                                                    "flex size-7 items-center justify-center rounded-full bg-muted font-bold text-sm",
                                                  children: "+",
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-xs font-medium truncate w-full",
                                                    children: "Add",
                                                  },
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("section", {
                                      className:
                                        "pt-4 border-t border-border/60",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "mb-3",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("h3", {
                                              className:
                                                "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  Sparkles,
                                                  {
                                                    className:
                                                      "size-3.5 text-brand",
                                                  },
                                                ),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    children:
                                                      "AI search & chats",
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-[11px] text-muted-foreground mt-0.5",
                                              children:
                                                "Choose popular AI sites and apps to search or chat with",
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("div", {
                                          className:
                                            "grid grid-cols-3 gap-2.5 sm:gap-3",
                                          children: Object.values(
                                            AI_ENGINES,
                                          ).map((ai) => {
                                            const isSelected =
                                              engine === ai.name;
                                            return /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              "button",
                                              {
                                                type: "button",
                                                onClick: () => {
                                                  setEngine(ai.name);
                                                  setPanel(null);
                                                },
                                                className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${isSelected ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand" : "border-border/60 hover:border-border"}`,
                                                title: ai.desc,
                                                "aria-label": `Select ${ai.name}`,
                                                children: [
                                                  isSelected &&
                                                    /* @__PURE__ */ (0,
                                                    import_jsx_runtime.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs",
                                                        children:
                                                          /* @__PURE__ */ (0,
                                                          import_jsx_runtime.jsx)(
                                                            Check,
                                                            {
                                                              className:
                                                                "size-2.5 stroke-[3]",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex size-7 items-center justify-center rounded-full",
                                                      children:
                                                        /* @__PURE__ */ (0,
                                                        import_jsx_runtime.jsx)(
                                                          "img",
                                                          {
                                                            src: `https://www.google.com/s2/favicons?domain=${ai.domain}&sz=64`,
                                                            alt: ai.name,
                                                            className:
                                                              "size-6 object-contain rounded-full",
                                                            onError: (e) => {
                                                              e.target.style.display =
                                                                "none";
                                                            },
                                                          },
                                                        ),
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-xs font-medium truncate w-full text-foreground group-hover:text-foreground",
                                                      children: ai.name,
                                                    },
                                                  ),
                                                ],
                                              },
                                              ai.name,
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                              ),
                            panel === "search-add" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-4",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "input",
                                      {
                                        type: "text",
                                        placeholder: "Engine Name",
                                        id: "new-engine-name",
                                        className:
                                          "w-full rounded-xl border bg-card p-3",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "input",
                                      {
                                        type: "text",
                                        placeholder:
                                          "Query URL (e.g. https://example.com/search?q=)",
                                        id: "new-engine-url",
                                        className:
                                          "w-full rounded-xl border bg-card p-3",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        onClick: () => {
                                          const name =
                                            document.getElementById(
                                              "new-engine-name",
                                            ).value;
                                          const url =
                                            document.getElementById(
                                              "new-engine-url",
                                            ).value;
                                          if (name && url) {
                                            setEngines({
                                              ...engines,
                                              [name]: url,
                                            });
                                            setPanel("search");
                                          }
                                        },
                                        className:
                                          "w-full rounded-xl bg-brand p-3 text-brand-foreground",
                                        children: "Add Search Engine",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        onClick: () => setPanel("search"),
                                        className:
                                          "w-full rounded-xl bg-card p-3",
                                        children: "Cancel",
                                      },
                                    ),
                                  ],
                                },
                              ),
                            panel === "bookmarks" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                BookmarksManager,
                                {
                                  items: bookmarks,
                                  onGo: open,
                                  onRemove: (e) =>
                                    setBookmarks(
                                      bookmarks.filter((b) => b !== e),
                                    ),
                                  onAdd: (e) => setBookmarks([e, ...bookmarks]),
                                },
                              ),
                            panel === "saved-links" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                SavedLinksManager,
                                {
                                  items: savedLinks,
                                  onGo: open,
                                  onRemove: (e) =>
                                    setSavedLinks(
                                      savedLinks.filter((b) => b !== e),
                                    ),
                                  onAdd: (e) =>
                                    setSavedLinks([e, ...savedLinks]),
                                },
                              ),
                            panel === "history" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                import_jsx_runtime.Fragment,
                                {
                                  children: [
                                    history.length > 0 &&
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("button", {
                                        onClick: () => setHistory([]),
                                        className:
                                          "mb-3 text-sm text-destructive",
                                        children: "Clear history",
                                      }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      List,
                                      {
                                        items: history,
                                        onGo: open,
                                        onRemove: (e) =>
                                          setHistory(
                                            history.filter((h) => h !== e),
                                          ),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            panel === "account" &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "space-y-4 p-2",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center gap-4 rounded-2xl bg-card p-4 border shadow-xs",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("div", {
                                          className:
                                            "size-14 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl shrink-0",
                                          children: "M",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("h3", {
                                              className:
                                                "font-bold text-base truncate",
                                              children: "musichub661@gmail.com",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "text-xs text-muted-foreground mt-0.5",
                                              children:
                                                "Connected Account & Cloud Sync",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "rounded-2xl bg-card p-4 border space-y-3 text-xs text-muted-foreground",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "flex justify-between",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              children: "Account Status:",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className:
                                                "font-semibold text-brand",
                                              children: "Active & Verified",
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "flex justify-between",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              children: "Sync Storage:",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className: "font-medium",
                                              children:
                                                "Playlists & Favorites Synced",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                              ),
                          ],
                        }),
                      ],
                    },
                  ),
          }),
      homeMenu &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs animate-in fade-in duration-200",
          onClick: () => setHomeMenu(false),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "w-full rounded-t-3xl bg-card p-4 pb-10 shadow-2xl animate-in slide-in-from-bottom duration-300",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mb-3 flex items-center justify-end border-b pb-2",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    onClick: () => setHomeMenu(false),
                    "aria-label": "Close menu",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  },
                ),
              }),
              [
                {
                  l: t("setDefaultBrowser"),
                  I: Globe,
                  f: () => {
                    setHomeMenu(false);
                    if (navigator.setAppBadge)
                      try {
                        navigator.setAppBadge(1);
                      } catch (e) {
                        console.log(e);
                      }
                    alert(
                      "WebNa is now set as your preferred in-app browser experience! To make WebNa your system default browser on Android/iOS, use your browser's 'Add to Home Screen' or default browser settings.",
                    );
                  },
                },
                {
                  l: t("bookmarks"),
                  I: Star,
                  f: () => {
                    setHomeMenu(false);
                    setPanel("bookmarks");
                  },
                },
                {
                  l: t("history"),
                  I: RotateCw,
                  f: () => {
                    setHomeMenu(false);
                    setPanel("history");
                  },
                },
                {
                  l: t("savedLinks"),
                  I: Bookmark,
                  f: () => {
                    setHomeMenu(false);
                    setPanel("saved-links");
                  },
                },
                {
                  l: t("searchEngines"),
                  I: Search,
                  f: () => {
                    setHomeMenu(false);
                    setPanel("search");
                  },
                },
                {
                  l: t("settings"),
                  I: Settings,
                  f: () => {
                    setHomeMenu(false);
                    setPanel("settings");
                  },
                },
                {
                  l: t("home"),
                  I: House,
                  f: () => {
                    setHomeMenu(false);
                    home();
                    setTab("home");
                    setArticle(null);
                  },
                },
              ].map(({ l, I, f }) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    onClick: f,
                    className:
                      "flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {
                        className: "size-5 text-brand",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: l,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            ],
          }),
        }),
      shortcutModalCategory &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          role: "dialog",
          "aria-modal": "true",
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150",
          onClick: (e) => {
            if (e.target === e.currentTarget) {
              setShortcutModalCategory(null);
              setShortcutName("");
              setShortcutUrl("");
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-base text-foreground",
                        children: "Add shortcut",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "To category:",
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "font-medium text-foreground",
                            children: shortcutModalCategory,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    onClick: () => {
                      setShortcutModalCategory(null);
                      setShortcutName("");
                      setShortcutUrl("");
                    },
                    className:
                      "text-muted-foreground hover:text-foreground p-1 rounded-lg",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                      className: "size-5",
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                        className:
                          "block text-xs font-medium text-muted-foreground mb-1",
                        children: "Shortcut name",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "e.g. YouTube",
                        value: shortcutName,
                        onChange: (e) => setShortcutName(e.target.value),
                        className:
                          "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand",
                        autoFocus: true,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                        className:
                          "block text-xs font-medium text-muted-foreground mb-1",
                        children: "Shortcut link",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "e.g. https://youtube.com or youtube.com",
                        value: shortcutUrl,
                        onChange: (e) => setShortcutUrl(e.target.value),
                        onKeyDown: (e) => {
                          if (e.key === "Enter") {
                            const name = shortcutName.trim();
                            const rawUrl = shortcutUrl.trim();
                            if (name && rawUrl && shortcutModalCategory) {
                              const validUrl =
                                rawUrl.startsWith("http://") ||
                                rawUrl.startsWith("https://")
                                  ? rawUrl
                                  : `https://${rawUrl}`;
                              const current =
                                safeCategories[shortcutModalCategory] || [];
                              setCategories({
                                ...safeCategories,
                                [shortcutModalCategory]: [
                                  ...current,
                                  {
                                    t: name,
                                    u: validUrl,
                                  },
                                ],
                              });
                              setShortcutModalCategory(null);
                              setShortcutName("");
                              setShortcutUrl("");
                            }
                          }
                        },
                        className:
                          "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex gap-2 pt-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      setShortcutModalCategory(null);
                      setShortcutName("");
                      setShortcutUrl("");
                    },
                    className:
                      "flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors",
                    children: "Cancel",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      const name = shortcutName.trim();
                      const rawUrl = shortcutUrl.trim();
                      if (name && rawUrl && shortcutModalCategory) {
                        const validUrl =
                          rawUrl.startsWith("http://") ||
                          rawUrl.startsWith("https://")
                            ? rawUrl
                            : `https://${rawUrl}`;
                        const current =
                          safeCategories[shortcutModalCategory] || [];
                        setCategories({
                          ...safeCategories,
                          [shortcutModalCategory]: [
                            ...current,
                            {
                              t: name,
                              u: validUrl,
                            },
                          ],
                        });
                        setShortcutModalCategory(null);
                        setShortcutName("");
                        setShortcutUrl("");
                      }
                    },
                    disabled: !shortcutName.trim() || !shortcutUrl.trim(),
                    className:
                      "flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground hover:opacity-90 disabled:opacity-50 transition-opacity",
                    children: "Add shortcut",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function List({ items, onGo, onRemove }) {
  if (!items.length)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      className:
        "rounded-2xl bg-card p-4 text-center text-sm text-muted-foreground",
      children: "Nothing here yet",
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-2xl bg-card px-3 shadow-sm",
    children: items.map((e, i) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "flex items-center gap-3 border-b py-3 last:border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: `https://www.google.com/s2/favicons?domain=${host(e.url)}&sz=32`,
              alt: "",
              className: "size-5",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              onClick: () => onGo(e.url),
              className: "min-w-0 flex-1 text-left",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "truncate text-sm font-medium",
                  children: e.title,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "truncate text-xs text-muted-foreground",
                  children: e.url,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => onRemove(e),
              "aria-label": "Remove",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                className: "size-4 text-muted-foreground",
              }),
            }),
          ],
        },
        i,
      ),
    ),
  });
}
//#endregion
export { App as component, getEngineDomain };
