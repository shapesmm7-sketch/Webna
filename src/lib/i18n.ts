import { useState, useEffect } from "react";

export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "pt"
  | "hi"
  | "ar"
  | "zh"
  | "ja"
  | "ru"
  | "id"
  | "ko"
  | "tr"
  | "it"
  | "nl";

export interface TranslationDict {
  // Main Settings
  settings: string;
  language: string;
  appearance: string;
  rateUs: string;
  shareApp: string;
  notifications: string;
  safetyHub: string;
  dataBackup: string;
  passwords: string;
  privacyPolicy: string;
  blockingsAndShields: string;
  clearBrowsingData: string;
  clearAllBrowsingData: string;
  aboutWebNa: string;
  active: string;
  rateSupportOnPlay: string;
  ratedStars: string;
  shareWithFriends: string;
  notificationsSub: string;
  safetyHubSub: string;
  dataBackupSub: string;
  savedCredentialsCount: string;
  privacySub: string;
  shieldsSub: string;

  // Navigation & Home
  home: string;
  discover: string;
  player: string;
  audioPlayer: string;
  videoPlayer: string;
  shortcuts: string;
  categories: string;
  addCategory: string;
  siteAppHub: string;
  siteAppHubSub: string;
  bookmarks: string;
  history: string;
  savedLinks: string;
  searchEngines: string;
  setDefaultBrowser: string;
  searchWithOrType: string;
  askOrType: string;
  cancel: string;
  save: string;
  add: string;
  delete: string;
  copied: string;
  copy: string;
  back: string;
  close: string;

  // Language section
  displayAndSearchLanguage: string;
  chooseLanguageSub: string;
  autoTranslateForeign: string;
  autoTranslateSub: string;
  supportedLanguages: string;

  // Appearance section
  themeAndDisplay: string;
  appearanceSub: string;
  colorTheme: string;
  lightTheme: string;
  darkTheme: string;
  systemTheme: string;
  textScaling: string;
  small: string;
  normal: string;
  large: string;
  huge: string;
  addressBarPosition: string;
  topStandard: string;
  bottomEasy: string;
  highContrast: string;
  highContrastSub: string;

  // Notifications section
  androidNotificationPermission: string;
  permissionRequiredSub: string;
  requestPermission: string;
  notificationCategories: string;
  downloadCompletedAlerts: string;
  downloadCompletedSub: string;
  safeBrowsingAlerts: string;
  safeBrowsingSub: string;
  newsTrendingUpdates: string;
  newsTrendingSub: string;
  mediaBackgroundPlayback: string;
  mediaPlaybackSub: string;
  vibrationSoundAlerts: string;
  vibrationSub: string;
  sendTestNotification: string;

  // Safety hub
  shieldActive: string;
  shieldActiveSub: string;
  safetyControlsTab: string;
  safetyAuditTab: string;
  privacyAndIdentity: string;
  privacyAndIdentitySub: string;
  connectionAndThreat: string;
  connectionAndThreatSub: string;
  adsAndTrackers: string;
  adsAndTrackersSub: string;
  fingerprintProtection: string;
  fingerprintProtectionSub: string;
  cleanLinks: string;
  cleanLinksSub: string;
  blockNotificationRequests: string;
  blockNotificationRequestsSub: string;
  cookieManagement: string;
  cookieManagementSub: string;
  cookieAllow: string;
  cookieBlock3rd: string;
  cookieBlockAll: string;
  httpsOnlyMode: string;
  httpsOnlySub: string;
  antiPhishing: string;
  antiPhishingSub: string;
  blockPopupsTitle: string;
  blockPopupsSub: string;
  blockMixedContent: string;
  blockMixedContentSub: string;
  sendDntHeader: string;
  sendDntSub: string;
  strictDownloads: string;
  strictDownloadsSub: string;
  dnsLeakMitigation: string;
  dnsLeakSub: string;
  auditScoreTitle: string;
  auditScoreSub: string;
  auditStatusExcellent: string;
  auditStatusGood: string;
  auditStatusFair: string;
  runAudit: string;
  runningAudit: string;
  auditComplete: string;
  optimizeAll: string;
  allProtected: string;
  auditChecklist: string;
  detailedShieldPermissions: string;
  detailedShieldSub: string;

  // Data backup
  backupAndSync: string;
  backupSub: string;
  cloudSync: string;
  syncNow: string;
  lastCloudSync: string;
  exportToJson: string;
  exportSub: string;
  downloadBackupFile: string;
  restoreFromBackup: string;
  restoreSub: string;
  chooseBackupFile: string;

  // Passwords
  savedPasswords: string;
  passwordVaultSub: string;
  searchAccounts: string;
  offerToSavePasswords: string;
  autoFillWebForms: string;
  saveNewCredential: string;
  websiteDomain: string;
  usernameEmail: string;
  passwordLabel: string;
  generateStrong: string;

  // Clear data
  clearDataTitle: string;
  clearDataSub: string;
  timeRange: string;
  lastHour: string;
  twentyFourHours: string;
  sevenDays: string;
  allTime: string;
  browsingHistory: string;
  cookiesSiteData: string;
  cachedImages: string;
  clearDataNow: string;

  // Privacy Policy
  privacyCommitment: string;
  iUnderstandAndAcknowledge: string;
}

const TRANSLATIONS: Record<string, TranslationDict> = {
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

    // Safety hub
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

    // Safety hub
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

// Listeners for reactive language updates
type LangListener = (lang: LanguageCode) => void;
const listeners = new Set<LangListener>();

export function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("webna-language") as LanguageCode;
  return saved && TRANSLATIONS[saved] ? saved : "en";
}

export function setAppLanguage(lang: LanguageCode) {
  if (typeof window !== "undefined") {
    localStorage.setItem("webna-language", lang);
    window.dispatchEvent(
      new CustomEvent("webna-language-change", { detail: lang }),
    );
  }
  listeners.forEach((fn) => fn(lang));
}

export function useAppLanguage() {
  const [lang, setLang] = useState<LanguageCode>(getStoredLanguage);

  useEffect(() => {
    const handleUpdate = (nextLang: LanguageCode) => setLang(nextLang);
    listeners.add(handleUpdate);

    const onCustomEvent = (e: Event) => {
      const custom = e as CustomEvent<LanguageCode>;
      if (custom.detail) setLang(custom.detail);
    };

    window.addEventListener("webna-language-change", onCustomEvent);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener("webna-language-change", onCustomEvent);
    };
  }, []);

  const t = (key: keyof TranslationDict, fallback?: string): string => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || fallback || key;
  };

  return { lang, setLanguage: setAppLanguage, t };
}
