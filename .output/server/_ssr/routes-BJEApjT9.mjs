import { n as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { a as fallbackImage, c as validImage, n as FOOTBALL_PLACEHOLDER, o as findOgImage, r as dec, s as tag, t as DEFAULT_IMAGE } from "./news-shared-DeMLIqT_.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as AI_ENGINES } from "./routes-CiiPL19k.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-W8PplFEm.mjs";
import { $ as FingerprintPattern, A as Plus, B as Menu, C as Search, Ct as Activity, D as Repeat, E as RotateCcw, F as Palette, G as ListMusic, H as Lock, I as Music, J as KeyRound, K as Layers, L as Moon, M as PictureInPicture2, N as Phone, O as Repeat1, P as Pause, Q as FolderPlus, R as Minimize2, S as Send, St as ArrowLeft, T as RotateCw, U as ListX, V as Maximize2, W as ListPlus, X as Heart, Y as House, Z as Globe, _ as Shuffle, _t as ChevronLeft, a as Video, at as EllipsisVertical, b as Share2, bt as Bell, c as TriangleAlert, ct as Database, d as Star, dt as Compass, et as Film, f as Square, ft as Clock, g as SkipBack, gt as ChevronRight, h as SkipForward, ht as CircleAlert, i as Volume1, it as ExternalLink, j as Play, k as RefreshCw, l as Trash2, lt as CreditCard, m as Sparkles, mt as CircleCheck, n as VolumeX, nt as Eye, o as User, ot as Download, p as SquareCheckBig, pt as CirclePlay, q as Laptop, r as Volume2, rt as EyeOff, s as Upload, st as Disc, t as X, tt as FileText, u as Sun, ut as Copy, v as Shield, vt as Check, w as ScanSearch, x as Settings, xt as ArrowRight, y as ShieldCheck, yt as Bookmark, z as Mic } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJEApjT9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
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
		siteAppHubSub: "You can keep your favorite sites or apps here for quick access.",
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
		chooseLanguageSub: "Choose the preferred language for menus, search queries, and content.",
		autoTranslateForeign: "Auto-translate foreign sites",
		autoTranslateSub: "Offer Google translate bar for foreign languages",
		supportedLanguages: "Supported Languages",
		themeAndDisplay: "Theme & Display",
		appearanceSub: "Customize colors, font scaling, and navigation toolbar placement.",
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
		highContrastSub: "Deep pure blacks to save battery on OLED Android displays",
		androidNotificationPermission: "Android Notification Permission",
		permissionRequiredSub: "Required for download completions and background audio",
		requestPermission: "Request Permission",
		notificationCategories: "Notification Categories",
		downloadCompletedAlerts: "Download completed alerts",
		downloadCompletedSub: "Notify when videos, MP3s, or files finish downloading",
		safeBrowsingAlerts: "Safe browsing alerts",
		safeBrowsingSub: "Warn when a site has known security risks or scams",
		newsTrendingUpdates: "News & trending updates",
		newsTrendingSub: "Daily morning highlights from the Discover feed",
		mediaBackgroundPlayback: "Media background playback",
		mediaPlaybackSub: "Keep playback controls in your Android notification shade",
		vibrationSoundAlerts: "Vibration & Sound alerts",
		vibrationSub: "Vibrate on high-priority download or security warnings",
		sendTestNotification: "Send Test Notification",
		shieldActive: "WebNa Sentinel Shield",
		shieldActiveSub: "On-device privacy filters and encrypted network guard active",
		safetyControlsTab: "Protection Controls",
		safetyAuditTab: "Safety Health & Audit",
		privacyAndIdentity: "Privacy & Anti-Tracking Shield",
		privacyAndIdentitySub: "Guard device identifiers, URL parameters, and suppress web push noise",
		connectionAndThreat: "Connection & Threat Defense",
		connectionAndThreatSub: "Enforce encrypted transport, pop-up barriers, and malicious domain blocking",
		adsAndTrackers: "Intrusive Ads & Web Trackers",
		adsAndTrackersSub: "Hides banner ads, video overlays, and stops invisible telemetry beacons.",
		fingerprintProtection: "Device Anti-Fingerprinting",
		fingerprintProtectionSub: "Masks canvas rendering, audio context, and hardware signatures from cross-site profilers.",
		cleanLinks: "Link Sanitizer (URL Tracking Stripper)",
		cleanLinksSub: "Automatically strips utm_, fbclid, gclid, and referral trackers when navigating or sharing links.",
		blockNotificationRequests: "Silent Browsing (Mute Push Requests)",
		blockNotificationRequestsSub: "Silently drops website prompts asking permission to send push notifications.",
		cookieManagement: "Cookie & Storage Isolation Policy",
		cookieManagementSub: "Choose how cookies and site storage behave across browsing sessions.",
		cookieAllow: "Allow All",
		cookieBlock3rd: "Block 3rd-Party",
		cookieBlockAll: "Block All Cookies",
		httpsOnlyMode: "Strict HTTPS Upgrade",
		httpsOnlySub: "Enforce encrypted connections; warn before loading unencrypted HTTP.",
		antiPhishing: "Phishing & Malware Sentry",
		antiPhishingSub: "Proactively inspects domains against known malicious databases and deceptive web traps.",
		blockPopupsTitle: "Pop-up & Window Blocker",
		blockPopupsSub: "Intercepts unauthorized new windows, hidden tabs, and deceptive redirect loops.",
		blockMixedContent: "Insecure Mixed Content Barrier",
		blockMixedContentSub: "Blocks unencrypted HTTP elements, images, and scripts from executing on HTTPS pages.",
		sendDntHeader: "Global Privacy Control (Do Not Track)",
		sendDntSub: "Transmits DNT and Sec-GPC signals requesting websites not to sell or profile your data.",
		strictDownloads: "Drive-by Download Guard",
		strictDownloadsSub: "Blocks automatic background downloads unless explicitly initiated by your tap.",
		dnsLeakMitigation: "DNS & WebRTC Leak Shield",
		dnsLeakSub: "Prevents real IP address leaks through WebRTC peer connections and encrypted DNS.",
		auditScoreTitle: "Protection Rating",
		auditScoreSub: "Calculated in real-time from your active privacy & security defenses",
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
		detailedShieldSub: "Configure ads, pop-ups, cookies, camera & location permissions",
		backupAndSync: "Backup & Synchronization",
		backupSub: "Never lose your bookmarks, saved links, custom search engines, or history.",
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
		passwordVaultSub: "Secure local credential vault with one-tap copy & autofill",
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
		iUnderstandAndAcknowledge: "I Understand & Acknowledge"
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
		chooseLanguageSub: "Elige el idioma preferido para menús, consultas de búsqueda y contenido.",
		autoTranslateForeign: "Traducir sitios extranjeros automáticamente",
		autoTranslateSub: "Ofrecer barra de Google Traductor para idiomas extranjeros",
		supportedLanguages: "Idiomas compatibles",
		themeAndDisplay: "Tema y visualización",
		appearanceSub: "Personaliza colores, tamaño de fuente y posición de la barra de navegación.",
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
		highContrastSub: "Negros puros y profundos para ahorrar batería en pantallas OLED",
		androidNotificationPermission: "Permiso de notificaciones de Android",
		permissionRequiredSub: "Requerido para descargas completadas y audio en segundo plano",
		requestPermission: "Solicitar permiso",
		notificationCategories: "Categorías de notificaciones",
		downloadCompletedAlerts: "Alertas de descarga completada",
		downloadCompletedSub: "Avisar cuando se descarguen videos, MP3 o archivos",
		safeBrowsingAlerts: "Alertas de navegación segura",
		safeBrowsingSub: "Avisar si un sitio web tiene riesgos de seguridad conocidos",
		newsTrendingUpdates: "Noticias y tendencias",
		newsTrendingSub: "Destacados diarios de la mañana desde la pestaña Descubrir",
		mediaBackgroundPlayback: "Reproducción multimedia en segundo plano",
		mediaPlaybackSub: "Mantener controles en la barra de notificaciones de Android",
		vibrationSoundAlerts: "Alertas con vibración y sonido",
		vibrationSub: "Vibrar con avisos de seguridad o descargas importantes",
		sendTestNotification: "Enviar notificación de prueba",
		shieldActive: "Escudo Centinela WebNa",
		shieldActiveSub: "Filtros de privacidad en el dispositivo y guardia de red cifrada activos",
		safetyControlsTab: "Controles de protección",
		safetyAuditTab: "Auditoría de seguridad",
		privacyAndIdentity: "Privacidad y protección contra rastreo",
		privacyAndIdentitySub: "Protege identificadores de dispositivo, limpia URLs y silencia avisos web",
		connectionAndThreat: "Seguridad de red y amenazas",
		connectionAndThreatSub: "Fuerza transporte cifrado, barrera de pop-ups y bloqueo de dominios maliciosos",
		adsAndTrackers: "Anuncios y rastreadores invasivos",
		adsAndTrackersSub: "Oculta anuncios molestos, capas de video y detiene balizas de telemetría invisibles.",
		fingerprintProtection: "Protección contra huellas digitales",
		fingerprintProtectionSub: "Oculta el renderizado de canvas, contexto de audio y firmas de hardware ante rastreadores.",
		cleanLinks: "Limpiador de enlaces (Sin rastreadores)",
		cleanLinksSub: "Elimina automáticamente utm_, fbclid, gclid y etiquetas de seguimiento al abrir o compartir enlaces.",
		blockNotificationRequests: "Navegación silenciosa (Sin avisos de push)",
		blockNotificationRequestsSub: "Rechaza silenciosamente las molestas solicitudes de sitios para enviarte notificaciones push.",
		cookieManagement: "Política de aislamiento de cookies",
		cookieManagementSub: "Define cómo interactúan las cookies y el almacenamiento de datos entre sitios.",
		cookieAllow: "Permitir todas",
		cookieBlock3rd: "Bloquear de 3ros",
		cookieBlockAll: "Bloquear todas",
		httpsOnlyMode: "Modo HTTPS estricto",
		httpsOnlySub: "Fuerza conexiones cifradas; avisa antes de cargar páginas HTTP no seguras.",
		antiPhishing: "Protección antiphishing y malware",
		antiPhishingSub: "Inspecciona dominios contra listas de amenazas y sitios fraudulentos en tiempo real.",
		blockPopupsTitle: "Bloqueador de ventanas emergentes",
		blockPopupsSub: "Impide la apertura de ventanas emergentes no autorizadas y bucles de redirección.",
		blockMixedContent: "Filtro de contenido mixto no seguro",
		blockMixedContentSub: "Bloquea elementos, scripts e imágenes HTTP sin cifrar en páginas HTTPS seguras.",
		sendDntHeader: "Control de privacidad global (No rastrear)",
		sendDntSub: "Transmite señales DNT y Sec-GPC solicitando a los sitios no vender ni perfilar tus datos.",
		strictDownloads: "Protección contra descargas silenciosas",
		strictDownloadsSub: "Detiene descargas automáticas en segundo plano a menos que toques el enlace directamente.",
		dnsLeakMitigation: "Protección contra fugas DNS y WebRTC",
		dnsLeakSub: "Evita fugas de tu dirección IP real a través de conexiones WebRTC y fuerza DNS privado.",
		auditScoreTitle: "Calificación de protección",
		auditScoreSub: "Calculado en tiempo real según tus defensas de privacidad y seguridad activas",
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
		detailedShieldSub: "Configurar anuncios, ventanas emergentes, cookies y cámara",
		backupAndSync: "Copia de seguridad y sincronización",
		backupSub: "No pierdas nunca tus marcadores, enlaces guardados o historial.",
		cloudSync: "Sincronización en la nube",
		syncNow: "Sincronizar ahora",
		lastCloudSync: "Última sincronización:",
		exportToJson: "Exportar a archivo JSON",
		exportSub: "Descarga una copia completa de marcadores, enlaces e historial.",
		downloadBackupFile: "Descargar copia de seguridad (.json)",
		restoreFromBackup: "Restaurar desde copia",
		restoreSub: "Carga un archivo de respaldo WebNa previamente guardado.",
		chooseBackupFile: "Elegir archivo (.json)",
		savedPasswords: "Contraseñas guardadas",
		passwordVaultSub: "Bóveda local segura con copia y autorrelleno en un toque",
		searchAccounts: "Buscar cuentas o sitios web...",
		offerToSavePasswords: "Ofrecer guardar contraseñas web",
		autoFillWebForms: "Autorrellenar formularios web",
		saveNewCredential: "Guardar nueva credencial",
		websiteDomain: "Dominio web o URL",
		usernameEmail: "Usuario / Correo electrónico",
		passwordLabel: "Contraseña",
		generateStrong: "Generar segura",
		clearDataTitle: "Borrar datos de navegación",
		clearDataSub: "Selecciona los elementos que deseas eliminar de este dispositivo.",
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
		iUnderstandAndAcknowledge: "Entendido y aceptado"
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
		iUnderstandAndAcknowledge: "J'ai compris et j'accepte"
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
		iUnderstandAndAcknowledge: "Verstanden & Zustimmen"
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
		iUnderstandAndAcknowledge: "Entendi e concordo"
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
		iUnderstandAndAcknowledge: "فهمت وأوافق"
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
		iUnderstandAndAcknowledge: "我已阅读并知晓"
	}
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
		window.dispatchEvent(new CustomEvent("webna-language-change", { detail: lang }));
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
		return (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] || TRANSLATIONS.en[key] || fallback || key;
	};
	return {
		lang,
		setLanguage: setAppLanguage,
		t
	};
}
var _jsxFileName$12 = "/app/applet/src/components/BottomTabs.tsx";
function BottomTabs({ active, onChange, tabCount = 1 }) {
	const { t, lang } = useAppLanguage();
	const items = [
		{
			id: "home",
			label: t("home"),
			Icon: House
		},
		{
			id: "discover",
			label: t("discover"),
			Icon: Compass
		},
		{
			id: "player",
			label: t("player"),
			Icon: CirclePlay
		},
		{
			id: "tabs",
			label: lang === "es" ? "Pestañas" : "Tabs",
			Icon: Layers,
			badge: tabCount
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background py-2 shadow-lg",
		children: items.map(({ id, label, Icon, badge }) => {
			const on = active === id;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => onChange(id),
				className: `relative flex flex-col items-center justify-center gap-1 px-3 py-1 text-xs font-medium ${on ? "text-primary" : "text-muted-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: `size-6 ${on ? "stroke-[2.5]" : "stroke-2"}` }, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 39,
						columnNumber: 15
					}, this), badge !== void 0 && badge > 0 && /* @__PURE__ */ (void 0)("span", {
						className: "absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-brand-foreground",
						children: badge
					}, void 0, false, {
						fileName: _jsxFileName$12,
						lineNumber: 41,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$12,
					lineNumber: 38,
					columnNumber: 13
				}, this), label]
			}, id, true, {
				fileName: _jsxFileName$12,
				lineNumber: 33,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/SearchBar.tsx";
function SearchBar({ value = "", onSubmit, onLens, engineName = "Google", engineDomain = "google.com", onEngineClick }) {
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
			alert("Voice search is not supported in this browser. Try Chrome or Safari.");
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
				if (e.error === "not-allowed") alert("Microphone permission was denied. Please allow microphone access in your browser settings.");
				else console.warn("Speech recognition error:", e.error);
			};
			r.onend = () => {
				setListening(false);
			};
			r.start();
		} catch (err) {
			setListening(false);
			console.error("Voice search start error:", err);
			alert("Could not start voice recognition. Please check microphone permissions.");
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
		"Pi AI"
	].includes(engineName) ? t("askOrType").replace("{engine}", engineName) : t("searchWithOrType").replace("{engine}", engineName);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			if (q.trim()) onSubmit(q.trim());
		},
		className: "flex items-center gap-2 rounded-full bg-card px-3.5 py-2 shadow-sm border border-border/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onEngineClick,
				className: "flex items-center justify-center -ml-1 p-1 rounded-full hover:bg-muted/70 active:scale-95 transition-all shrink-0",
				title: `Current engine: ${engineName}. Tap to change.`,
				"aria-label": `Change search engine, currently ${engineName}`,
				children: engineName === "Google" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-lg font-bold leading-none px-0.5",
					style: {
						background: "var(--gradient-google)",
						WebkitBackgroundClip: "text",
						color: "transparent"
					},
					children: "G"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 122,
					columnNumber: 11
				}, this) : !imgFailed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: `https://www.google.com/s2/favicons?domain=${engineDomain}&sz=64`,
					alt: engineName,
					onError: () => setImgFailed(true),
					className: "size-5 rounded-full object-contain"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 133,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "size-5 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center",
					children: engineName.charAt(0)
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 140,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 114,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				onFocus: (e) => e.target.select(),
				placeholder,
				className: "min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 146,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: voice,
				"aria-label": "Voice search",
				title: listening ? "Listening... Speak now" : "Search with voice",
				className: `p-1 rounded-full transition-colors ${listening ? "bg-brand/20 animate-pulse text-brand" : "text-muted-foreground hover:text-foreground"}`,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mic, { className: `size-4.5 ${listening ? "text-brand" : "text-muted-foreground hover:text-foreground"}` }, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 164,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 153,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onLens,
				"aria-label": "Google Lens",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScanSearch, { className: "size-4.5 text-muted-foreground hover:text-foreground" }, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 169,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 168,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "submit",
				"aria-label": "Search",
				className: "p-1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4.5 text-brand hover:scale-105 transition-transform" }, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 172,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 171,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 107,
		columnNumber: 5
	}, this);
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
	"fbadid"
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
			if (TRACKING_PARAM_PREFIXES.some((prefix) => lower === prefix || lower.startsWith(prefix))) toDelete.push(key);
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
var _jsxFileName$10 = "/app/applet/src/components/BrowserView.tsx";
function resolveIframeSrc(rawUrl) {
	if (!rawUrl) return "";
	try {
		const parsed = new URL(rawUrl);
		const host = parsed.hostname.toLowerCase();
		if (host.includes("google.") && !parsed.searchParams.has("igu")) {
			parsed.searchParams.set("igu", "1");
			return parsed.toString();
		}
		if (host.includes("google.") || host.includes("wikipedia.org") || host.includes("archive.org")) return rawUrl;
		if (host.includes("openstreetmap.org")) {
			if (parsed.pathname === "/" || !parsed.pathname.includes("export/embed.html")) return "https://www.openstreetmap.org/export/embed.html";
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
		return u.replace("?igu=1&", "?").replace("&igu=1", "").replace("?igu=1", "");
	} catch {
		return u;
	}
}
function BrowserView({ stack, idx, onNav, onMove, onHome, isSaved, onToggleSave, onOpenPanel, onOpenPlayer, isIncognito = false, onToggleIncognito }) {
	const rawUrl = stack[idx] ?? "";
	const [reload, setReload] = (0, import_react.useState)(0);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [addr, setAddr] = (0, import_react.useState)(null);
	const btn = "p-2 rounded-full disabled:opacity-30";
	const displayUrl = getDisplayUrl(rawUrl);
	const iframeSrc = resolveIframeSrc(rawUrl);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (addr) onNav(addr);
					setAddr(null);
				},
				className: "mx-3 mt-3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm border border-border/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						value: addr ?? displayUrl,
						onChange: (e) => setAddr(e.target.value),
						onFocus: (e) => e.target.select(),
						className: "min-w-0 flex-1 bg-transparent text-sm outline-none",
						inputMode: "url",
						placeholder: "Search or enter URL"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 119,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onToggleSave,
						"aria-label": isSaved ? "Remove from bookmarks" : "Add to bookmarks",
						title: isSaved ? "Bookmarked (tap to remove)" : "Bookmark this page",
						className: "p-1 rounded-full transition-transform active:scale-90",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: `size-4.5 transition-colors ${isSaved ? "fill-amber-400 text-amber-500 drop-shadow-xs" : "text-muted-foreground hover:text-foreground"}` }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 134,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 127,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setReload(reload + 1),
						"aria-label": "Reload",
						title: "Reload",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCw, { className: "size-4 text-muted-foreground hover:text-foreground" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 148,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 142,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => {
							window.open(displayUrl, "_blank");
						},
						"aria-label": "Open in external browser",
						title: "Open in new window",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4 text-muted-foreground hover:text-foreground" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 158,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 150,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 111,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-3 mt-1.5 flex items-center justify-between rounded-xl bg-muted/60 px-3 py-1 text-[11px] text-muted-foreground border border-border/30",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "truncate pr-2 font-medium",
					children: (() => {
						try {
							return new URL(displayUrl).hostname.replace("www.", "");
						} catch {
							return displayUrl || "Web page";
						}
					})()
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 162,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => {
						window.open(displayUrl, "_blank");
					},
					className: "flex items-center gap-1 shrink-0 font-semibold text-brand hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open Full Site" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 178,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3" }, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 179,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 171,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 161,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
				src: iframeSrc,
				title: "Web page",
				className: "mt-2 w-full flex-1 border-0 bg-card",
				allow: "fullscreen; clipboard-read; clipboard-write; encrypted-media; picture-in-picture; web-share; geolocation; microphone; camera",
				sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
			}, iframeSrc + reload, false, {
				fileName: _jsxFileName$10,
				lineNumber: 183,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-24 flex items-center justify-around border-t bg-card py-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						className: btn,
						disabled: idx === 0,
						onClick: () => onMove(-1),
						"aria-label": "Back",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 199,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 193,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						className: btn,
						disabled: idx >= stack.length - 1,
						onClick: () => onMove(1),
						"aria-label": "Forward",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 207,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 201,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						className: btn,
						onClick: onHome,
						"aria-label": "Home",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(House, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 210,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 209,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						className: btn,
						onClick: () => setMenu(true),
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 213,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 212,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$10,
				lineNumber: 192,
				columnNumber: 7
			}, this),
			menu && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs",
				onClick: () => setMenu(false),
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full rounded-t-3xl bg-card p-4 pb-8 shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "mb-2 flex items-center justify-between border-b pb-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "text-sm font-bold text-foreground",
							children: "Menu"
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 226,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setMenu(false),
							"aria-label": "Close menu",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 228,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 227,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 225,
						columnNumber: 13
					}, this), [
						{
							l: isIncognito ? "Turn off Incognito" : "Incognito mode",
							I: EyeOff,
							f: () => {
								setMenu(false);
								if (onToggleIncognito) onToggleIncognito();
							}
						},
						{
							l: "Bookmarks",
							I: Star,
							f: () => onOpenPanel("bookmarks")
						},
						{
							l: "Saved links",
							I: Bookmark,
							f: () => onOpenPanel("saved-links")
						},
						{
							l: "History",
							I: RotateCw,
							f: () => onOpenPanel("history")
						},
						{
							l: "Audio player",
							I: Music,
							f: () => onOpenPlayer("audio")
						},
						{
							l: "Video player",
							I: Film,
							f: () => onOpenPlayer("video")
						},
						{
							l: "Settings",
							I: Menu,
							f: () => onOpenPanel("settings")
						},
						{
							l: "Account",
							I: House,
							f: () => onOpenPanel("account")
						},
						{
							l: "Share clean link",
							I: Share2,
							f: async () => {
								let shareUrl = displayUrl;
								if (isCleanLinksEnabled()) shareUrl = stripTrackingParams(shareUrl);
								if (navigator.share) try {
									await navigator.share({
										title: "WebNa Browser",
										url: shareUrl
									});
									return;
								} catch {}
								navigator.clipboard.writeText(shareUrl);
								toast.success("Clean link copied to clipboard!");
							}
						},
						{
							l: "Open in external browser",
							I: ExternalLink,
							f: () => {
								window.open(displayUrl, "_blank");
							}
						},
						{
							l: "Quit app",
							I: X,
							f: () => onHome()
						}
					].map(({ l, I, f }) => /* @__PURE__ */ (void 0)("button", {
						onClick: () => {
							f();
							setMenu(false);
						},
						className: "flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors",
						children: [/* @__PURE__ */ (void 0)(I, { className: "size-5 text-brand" }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 319,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: l }, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 320,
							columnNumber: 17
						}, this)]
					}, l, true, {
						fileName: _jsxFileName$10,
						lineNumber: 311,
						columnNumber: 15
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 221,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 217,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 110,
		columnNumber: 5
	}, this);
}
var createSsrRpc = (functionId) => {
	const url = "/./_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function parseRssFeed(xml, feedUrl, fallbackSource) {
	const items = [];
	const seenLinks = /* @__PURE__ */ new Set();
	const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
	for (const [, it] of itemMatches) {
		if (!it) continue;
		const rawTitle = it.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/i)?.[1] || tag(it, "title");
		const rawDesc = it.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i)?.[1] || tag(it, "description");
		const rawLink = it.match(/<link><!\[CDATA\[([\s\S]*?)\]\]><\/link>/i)?.[1] || it.match(/<link>([\s\S]*?)<\/link>/i)?.[1]?.trim() || tag(it, "link");
		const pubDate = tag(it, "pubDate");
		const cleanLink = dec(rawLink).trim();
		const cleanTitleRaw = dec(rawTitle).trim();
		const cleanDesc = dec(rawDesc).replace(/<[^>]*>/g, "").trim();
		const dedupeKey = cleanLink || cleanTitleRaw;
		if (!dedupeKey || seenLinks.has(dedupeKey)) continue;
		seenLinks.add(dedupeKey);
		let source = tag(it, "source");
		if (!source) if (fallbackSource) source = fallbackSource;
		else if (feedUrl.includes("bbci.co.uk") || cleanLink.includes("bbc.")) source = "BBC Sport";
		else if (feedUrl.includes("espn.com") || cleanLink.includes("espn.")) source = "ESPN";
		else if (feedUrl.includes("nytimes.com") || cleanLink.includes("nytimes.")) source = "The New York Times";
		else if (cleanTitleRaw.includes(" - ")) source = cleanTitleRaw.split(" - ").pop()?.trim() || "News";
		else try {
			source = new URL(cleanLink).hostname.replace("www.", "");
		} catch {
			source = "News";
		}
		const cleanTitle = cleanTitleRaw.endsWith(" - " + source) ? cleanTitleRaw.slice(0, -(source.length + 3)) : cleanTitleRaw;
		const mediaThumb = it.match(/<(?:media:)?thumbnail[^>]*?\surl=["']([^"']+)["']/i)?.[1] || it.match(/<(?:media:)?thumbnail[^>]+url=["']([^"']+)["']/i)?.[1];
		const mediaContent = it.match(/<(?:media:)?content[^>]*?\surl=["']([^"']+)["']/i)?.[1] || it.match(/<(?:media:)?content[^>]+url=["']([^"']+)["']/i)?.[1];
		const enclosure = it.match(/<enclosure[^>]*?\surl=["']([^"']+)["']/i)?.[1] || it.match(/<enclosure[^>]+url=["']([^"']+)["']/i)?.[1];
		const imgMatch = rawDesc.match(/<img[^>]*?\ssrc=["']([^"']+)["']/i)?.[1] || it.match(/<content:encoded>[\s\S]*?<img[^>]*?\ssrc=["']([^"']+)["']/i)?.[1];
		let thumbnail = mediaThumb || mediaContent || enclosure || imgMatch || null;
		if (thumbnail) {
			thumbnail = dec(thumbnail).trim();
			if (thumbnail.startsWith("//")) thumbnail = "https:" + thumbnail;
			if (thumbnail.includes("ichef.bbci.co.uk/ace/standard/")) thumbnail = thumbnail.replace(/\/standard\/\d+\//, "/standard/800/");
		}
		items.push({
			title: cleanTitle,
			link: cleanLink,
			pubDate,
			source,
			thumbnail: thumbnail || void 0,
			description: cleanDesc || void 0
		});
	}
	return items;
}
var FALLBACK_FOOTBALL_ITEMS = [
	{
		title: "Champions League Quarter-Finals: Thrilling Encounters Set the Stage",
		link: "https://www.espn.com/soccer/story/_/id/champions-league-preview",
		pubDate: (/* @__PURE__ */ new Date()).toUTCString(),
		source: "ESPN",
		thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
		description: "European heavyweights prepare for high-stakes quarter-final showdowns with tactical masterclasses expected across all fixtures."
	},
	{
		title: "Premier League Title Race Heats Up as Top Contenders Clash",
		link: "https://www.bbc.co.uk/sport/football/articles/premier-league-title-race",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toUTCString(),
		source: "BBC Sport",
		thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80",
		description: "The race for the English Premier League crown enters its decisive final stretch with crucial fixtures this weekend."
	},
	{
		title: "Tactical Analysis: How Modern Full-Backs Transform the Game",
		link: "https://www.espn.com/soccer/story/_/id/tactical-fullbacks",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 72e5)).toUTCString(),
		source: "ESPN",
		thumbnail: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop&q=80",
		description: "An in-depth look at inverted full-backs and how tactical innovation is reshaping modern football formations."
	},
	{
		title: "International Break Preview: World Cup Qualifiers Heat Up Worldwide",
		link: "https://www.bbc.co.uk/sport/football/articles/world-cup-qualifiers",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 144e5)).toUTCString(),
		source: "BBC Sport",
		thumbnail: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&auto=format&fit=crop&q=80",
		description: "National teams prepare for crucial qualification matches as players return to represent their countries on the global stage."
	},
	{
		title: "Rising Stars: The Young Prospects Making Waves in European Leagues",
		link: "https://www.espn.com/soccer/story/_/id/rising-stars-europe",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 216e5)).toUTCString(),
		source: "ESPN",
		thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&auto=format&fit=crop&q=80",
		description: "Profiling the breakout teenagers lighting up top-flight football leagues across Europe this season."
	}
];
var FALLBACK_GENERAL_NEWS = [
	{
		title: "Global Tech Summit Highlights Breakthroughs in AI and Quantum Computing",
		link: "https://www.bbc.co.uk/news/technology-summit",
		pubDate: (/* @__PURE__ */ new Date()).toUTCString(),
		source: "BBC News",
		thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
		description: "Industry leaders gather to discuss the next wave of computing architecture and sustainable technology innovations."
	},
	{
		title: "Global Markets Rally Following Positive Economic Forecasts",
		link: "https://www.nytimes.com/economy-rally",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toUTCString(),
		source: "The New York Times",
		thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
		description: "Stock indexes reached new milestones as trade agreements and inflation metrics show encouraging stability."
	},
	{
		title: "Major Leap Forward in Renewable Energy Grid Storage Efficiency",
		link: "https://www.bbc.co.uk/news/science-energy",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 72e5)).toUTCString(),
		source: "BBC News",
		thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
		description: "Scientists unveil a novel battery design capable of stabilizing regional power grids using sustainable materials."
	},
	{
		title: "Space Telescope Captures Unprecedented Detail of Distant Nebula",
		link: "https://www.bbc.co.uk/news/science-space",
		pubDate: (/* @__PURE__ */ new Date(Date.now() - 144e5)).toUTCString(),
		source: "BBC News",
		thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
		description: "Astronomers celebrate high-resolution imagery revealing star formation processes in deep space."
	}
];
var newsCache = /* @__PURE__ */ new Map();
newsCache.set("https://feeds.bbci.co.uk/news/rss.xml", {
	items: FALLBACK_GENERAL_NEWS,
	timestamp: Date.now()
});
async function fetchAndCacheNews(feedUrl) {
	try {
		const r = await fetch(feedUrl, {
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
				Accept: "application/rss+xml, application/xml, text/xml, */*"
			},
			signal: AbortSignal.timeout(8e3)
		});
		if (!r.ok) throw new Error("feed " + r.status);
		const items = parseRssFeed(await r.text(), feedUrl);
		const missing = items.slice(0, 12).filter((it) => !it.thumbnail && it.link.startsWith("http"));
		if (missing.length > 0) await Promise.allSettled(missing.map(async (item) => {
			const og = await findOgImage(item.link);
			if (og) item.thumbnail = og;
		}));
		if (items.length > 0) {
			newsCache.set(feedUrl, {
				items,
				timestamp: Date.now()
			});
			return items;
		}
		const prev = newsCache.get(feedUrl);
		return prev ? prev.items : FALLBACK_GENERAL_NEWS;
	} catch (e) {
		const prev = newsCache.get(feedUrl);
		return prev ? prev.items : FALLBACK_GENERAL_NEWS;
	}
}
if (typeof fetch !== "undefined") setTimeout(() => {
	fetchAndCacheNews("https://feeds.bbci.co.uk/news/rss.xml").catch(() => {});
}, 100);
var getNews = createServerFn({ method: "GET" }).inputValidator((d) => d).handler(createSsrRpc("bfbec92a60869ea1e09c7f95f0839b6952da957ddfb9e9d7e780b3072625bd4f"));
var cachedFootballItems = [...FALLBACK_FOOTBALL_ITEMS];
var isFetchingFootball = false;
async function refreshFootballCache() {
	if (isFetchingFootball) return cachedFootballItems;
	isFetchingFootball = true;
	try {
		try {
			const espnRes = await fetch("https://www.espn.com/espn/rss/soccer/news", {
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
					Accept: "application/rss+xml, application/xml, text/xml, */*"
				},
				signal: AbortSignal.timeout(6e3)
			});
			if (espnRes.ok && espnRes.status === 200) {
				const text = await espnRes.text();
				if (text && text.includes("<item>") && text.length > 200) {
					const items = parseRssFeed(text, "https://www.espn.com/espn/rss/soccer/news", "ESPN");
					if (items.length > 0) {
						cachedFootballItems = items;
						return items;
					}
				}
			}
		} catch {}
		try {
			const bbcRes = await fetch("https://feeds.bbci.co.uk/sport/football/rss.xml", {
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
					Accept: "application/rss+xml, application/xml, text/xml, */*"
				},
				signal: AbortSignal.timeout(8e3)
			});
			if (bbcRes.ok) {
				const items = parseRssFeed(await bbcRes.text(), "https://feeds.bbci.co.uk/sport/football/rss.xml", "BBC Sport");
				if (items.length > 0) {
					cachedFootballItems = items;
					return items;
				}
			}
		} catch {}
		if (cachedFootballItems.length > 0) return cachedFootballItems;
		return FALLBACK_FOOTBALL_ITEMS;
	} finally {
		isFetchingFootball = false;
	}
}
if (typeof fetch !== "undefined") setTimeout(() => {
	refreshFootballCache().catch(() => {});
}, 100);
var getFootballNews = createServerFn({ method: "GET" }).handler(createSsrRpc("0ec82f665f21f8137a72aa7c79c6a4b115662d17f0e8fd9fe00bc51789fe9299"));
var resolveNews = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("a3071d49fef0c4e200c04884cdb0bdc49a01a98fd796e18ba9329ca56e4dd094"));
var getArticle = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("2d9ab34da3812c140e34a8ff8418d3b07aa14e8e0c4153bb9620ccb96a43fc49"));
/**
* Normalizes TikTok cover URLs to ensure they display reliably in all web browsers.
* TikTok CDN links frequently use .heic formats or block direct hotlinking with crossOrigin.
* Passing them through wsrv.nl converts them to universal high-speed JPEGs.
*/
function normalizeTikTokCoverUrl(rawUrl) {
	if (!rawUrl) return "";
	let fullUrl = rawUrl.trim();
	if (fullUrl.startsWith("/")) fullUrl = `https://www.tikwm.com${fullUrl}`;
	if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) return fullUrl;
	return `https://wsrv.nl/?url=${encodeURIComponent(fullUrl)}&output=jpg`;
}
var FALLBACK_TIKTOK_VIDEOS = [
	{
		video_id: "7680205818096127252",
		title: "Se que otro amor encontrarás #indirectas #estadoparawhatsapp #music #parati #video",
		image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		play: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		subtitle: "@user361528580 • 319.8K views",
		author_id: "user361528580",
		author_name: "User 361528",
		play_count: 319802,
		digg_count: 42100,
		tiktokWebUrl: "https://www.tiktok.com/@user361528580/video/7680205818096127252"
	},
	{
		video_id: "7681206916353166624",
		title: "This is what heaven must look like. A waterfall falling straight into the ocean #nature #travel #fyp",
		image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		play: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		subtitle: "@briddl • 12.1M views",
		author_id: "briddl",
		author_name: "Briddl",
		play_count: 12132757,
		digg_count: 980400,
		tiktokWebUrl: "https://www.tiktok.com/@briddl/video/7681206916353166624"
	},
	{
		video_id: "7689205393364487455",
		title: "POV: Trying this viral transition trend for the first time #fyp #trending",
		image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		play: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		subtitle: "@brookemonk_ • 18.5M views",
		author_id: "brookemonk_",
		author_name: "Brooke Monk",
		play_count: 18549599,
		digg_count: 24e5,
		tiktokWebUrl: "https://www.tiktok.com/@brookemonk_/video/7689205393364487455"
	},
	{
		video_id: "7691409088852266254",
		title: "Love an updo moment 🤎🧸 #hairinspo #hairtok #voluminoushair #capcut",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
		play: "https://media.w3.org/2010/05/sintel/trailer.mp4",
		subtitle: "@j_sophia • 1.9M views",
		author_id: "j_sophia",
		author_name: "Sophia J",
		play_count: 1984249,
		digg_count: 312e3,
		tiktokWebUrl: "https://www.tiktok.com/@j_sophia/video/7691409088852266254"
	},
	{
		video_id: "7694020380368899329",
		title: "Viral mood & daily vibe #глобальныерекомендации #крутая #тренд #vibes",
		image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		origin_cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1080&auto=format&fit=crop&q=80",
		videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		play: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		subtitle: "@befishechka • 3.0M views",
		author_id: "befishechka",
		author_name: "Befishechka",
		play_count: 3086439,
		digg_count: 489e3,
		tiktokWebUrl: "https://www.tiktok.com/@befishechka/video/7694020380368899329"
	}
];
var cachedVideos = [];
var isFetchingTikTok = false;
function formatViews(count) {
	if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
	if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
	return count > 0 ? count.toLocaleString() : "Trending";
}
function parseVideosFromResponse(json) {
	if (!json || typeof json !== "object") return [];
	const obj = json;
	if (Array.isArray(obj.data)) return obj.data;
	if (obj.data && typeof obj.data === "object") {
		const dataObj = obj.data;
		if (Array.isArray(dataObj.videos)) return dataObj.videos;
		if (Array.isArray(dataObj.posts)) return dataObj.posts;
		const values = Object.values(dataObj);
		if (values.length > 0 && typeof values[0] === "object" && values[0] !== null) return values;
	}
	return [];
}
function mapToTikTokVideos(items) {
	const seenIds = /* @__PURE__ */ new Set();
	const results = [];
	for (let index = 0; index < items.length; index++) {
		const v = items[index];
		if (!v) continue;
		const videoId = String(v.video_id || v.id || `tik-${Date.now()}-${index}`);
		if (seenIds.has(videoId)) continue;
		seenIds.add(videoId);
		const rawCover = v.cover || v.origin_cover || v.cover_url || v.dynamic_cover || v.ai_dynamic_cover || "";
		const playUrl = v.play || v.hdplay || v.wmplay || "";
		if (!playUrl) continue;
		const authorId = v.author?.unique_id || v.author?.nickname || "tiktok.creator";
		const authorName = v.author?.nickname || authorId;
		const playCount = typeof v.play_count === "number" ? v.play_count : 15e4;
		const diggCount = typeof v.digg_count === "number" ? v.digg_count : 24e3;
		const title = typeof v.title === "string" && v.title.trim() ? v.title.trim() : typeof v.content_desc === "string" && v.content_desc.trim() ? v.content_desc.trim() : typeof v.desc === "string" && v.desc.trim() ? v.desc.trim() : "Trending TikTok Viral Clip #fyp";
		const subtitle = `@${authorId} • ${formatViews(playCount)} views`;
		const tiktokWebUrl = `https://www.tiktok.com/@${authorId.replace(/^@/, "")}/video/${videoId}`;
		const optimizedCover = normalizeTikTokCoverUrl(rawCover);
		results.push({
			video_id: videoId,
			title,
			image: optimizedCover,
			cover: optimizedCover,
			origin_cover: rawCover.startsWith("/") ? `https://www.tikwm.com${rawCover}` : rawCover,
			videoUrl: playUrl.startsWith("/") ? `https://www.tikwm.com${playUrl}` : playUrl,
			play: playUrl.startsWith("/") ? `https://www.tikwm.com${playUrl}` : playUrl,
			subtitle,
			author_id: authorId,
			author_name: authorName,
			play_count: playCount,
			digg_count: diggCount,
			tiktokWebUrl
		});
	}
	return results;
}
async function refreshTikTokCache(count = 20) {
	if (isFetchingTikTok) return cachedVideos.length > 0 ? cachedVideos : FALLBACK_TIKTOK_VIDEOS;
	isFetchingTikTok = true;
	try {
		try {
			const primaryResponse = await fetch("https://www.tikwm.com/api/feed/list", {
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					count,
					region: "US"
				}),
				signal: AbortSignal.timeout(6e3)
			});
			if (primaryResponse.ok) {
				const json = await primaryResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							return mapped;
						}
					}
				}
			}
		} catch {}
		try {
			const formResponse = await fetch("https://www.tikwm.com/api/feed/list", {
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `count=${count}&region=US`,
				signal: AbortSignal.timeout(6e3)
			});
			if (formResponse.ok) {
				const json = await formResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							return mapped;
						}
					}
				}
			}
		} catch {}
		try {
			const getListResponse = await fetch(`https://www.tikwm.com/api/feed/list?count=${count}&region=US`, {
				method: "GET",
				headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36" },
				signal: AbortSignal.timeout(6e3)
			});
			if (getListResponse.ok) {
				const json = await getListResponse.json();
				if (json && json.code === 0) {
					const rawVideos = parseVideosFromResponse(json);
					if (rawVideos.length > 0) {
						const mapped = mapToTikTokVideos(rawVideos);
						if (mapped.length > 0) {
							cachedVideos = mapped;
							return mapped;
						}
					}
				}
			}
		} catch {}
		if (cachedVideos.length > 0) return cachedVideos;
		cachedVideos = FALLBACK_TIKTOK_VIDEOS;
		return FALLBACK_TIKTOK_VIDEOS;
	} finally {
		isFetchingTikTok = false;
	}
}
if (typeof fetch !== "undefined") setTimeout(() => {
	refreshTikTokCache(20).catch(() => {});
}, 200);
var getTikTokFeed = createServerFn({ method: "GET" }).inputValidator((d) => d ?? {}).handler(createSsrRpc("12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c"));
var _jsxFileName$9 = "/app/applet/src/components/Discover.tsx";
var CHIPS = [
	{
		l: "For You",
		t: ""
	},
	{
		l: "World",
		t: "WORLD"
	},
	{
		l: "Technology",
		t: "TECHNOLOGY"
	},
	{
		l: "Sports",
		t: "SPORTS"
	},
	{
		l: "Business",
		t: "BUSINESS"
	},
	{
		l: "Science",
		t: "SCIENCE"
	},
	{
		l: "Entertainment",
		t: "ENTERTAINMENT"
	}
];
function feedUrl(topic) {
	return {
		"": "https://feeds.bbci.co.uk/news/rss.xml",
		WORLD: "https://feeds.bbci.co.uk/news/world/rss.xml",
		TECHNOLOGY: "https://feeds.bbci.co.uk/news/technology/rss.xml",
		SPORTS: "https://feeds.bbci.co.uk/sport/rss.xml",
		BUSINESS: "https://feeds.bbci.co.uk/news/business/rss.xml",
		SCIENCE: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
		ENTERTAINMENT: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"
	}[topic] || "https://feeds.bbci.co.uk/news/rss.xml";
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
	const [items, setItems] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		try {
			const cached = localStorage.getItem("webna-feed-v4-");
			if (cached) {
				const parsed = JSON.parse(cached);
				return parsed.length > 0 ? parsed : null;
			}
		} catch {}
		return null;
	});
	const [shown, setShown] = (0, import_react.useState)(8);
	const [footballItems, setFootballItems] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		try {
			const cached = localStorage.getItem("webna-football-news-cache");
			if (cached) {
				const parsed = JSON.parse(cached);
				return parsed.length > 0 ? parsed : null;
			}
		} catch {}
		return null;
	});
	const [footballLoading, setFootballLoading] = (0, import_react.useState)(false);
	const [footballError, setFootballError] = (0, import_react.useState)(false);
	const [footballShown, setFootballShown] = (0, import_react.useState)(8);
	const [tiktokVideos, setTikTokVideos] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		try {
			const cached = localStorage.getItem("webna-tiktok-cached");
			if (cached) {
				const parsed = JSON.parse(cached);
				return parsed.length > 0 ? parsed : null;
			}
		} catch {}
		return null;
	});
	const [tiktokLoading, setTiktokLoading] = (0, import_react.useState)(false);
	const [tiktokError, setTiktokError] = (0, import_react.useState)(false);
	const [pull, setPull] = (0, import_react.useState)(0);
	const startY = (0, import_react.useRef)(null);
	const sentinel = (0, import_react.useRef)(null);
	"" + topic;
	const loadNews = (0, import_react.useCallback)(async (force = false, currentTopic = topic) => {
		const currentKey = "webna-feed-v4-" + currentTopic;
		const cached = localStorage.getItem(currentKey);
		if (cached && !force) try {
			const parsed = JSON.parse(cached);
			const seen = /* @__PURE__ */ new Set();
			const unique = parsed.filter((it) => {
				const u = it.link || it.title;
				if (!u || seen.has(u)) return false;
				seen.add(u);
				return true;
			});
			if (unique.length > 0) setItems(unique);
		} catch {}
		try {
			const list = await getNews({ data: { rss: feedUrl(currentTopic) } });
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
			try {
				localStorage.setItem(currentKey, JSON.stringify(unique));
			} catch {}
		} catch {
			if (!cached) setItems([]);
		}
	}, [topic]);
	const fetchTikTokFeedData = (0, import_react.useCallback)(async (force = false) => {
		const cached = localStorage.getItem("webna-tiktok-cached");
		let hasData = false;
		if (cached && !force) try {
			const parsed = JSON.parse(cached);
			if (parsed && parsed.length > 0) {
				setTikTokVideos(parsed);
				hasData = true;
			}
		} catch {}
		if (!hasData) setTiktokLoading(true);
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
			} else if (!hasData) setTiktokError(true);
		} catch (err) {
			console.warn("Failed to fetch live TikTok trends:", err);
			if (!hasData) setTiktokError(true);
		} finally {
			setTiktokLoading(false);
		}
	}, []);
	const loadFootball = (0, import_react.useCallback)(async (force = false) => {
		const cached = localStorage.getItem("webna-football-news-cache");
		let hasData = false;
		if (cached && !force) try {
			const parsed = JSON.parse(cached);
			if (Array.isArray(parsed) && parsed.length > 0) {
				setFootballItems(parsed);
				hasData = true;
			}
		} catch {}
		if (!hasData) setFootballLoading(true);
		setFootballError(false);
		try {
			const list = await getFootballNews();
			if (!list || list.length === 0) throw new Error("No football news items returned");
			setFootballItems(list);
			setFootballShown(8);
			try {
				localStorage.setItem("webna-football-news-cache", JSON.stringify(list));
			} catch {}
		} catch (err) {
			console.error("Error loading football news:", err);
			if (!hasData) setFootballError(true);
		} finally {
			setFootballLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadNews(false, "");
		fetchTikTokFeedData(false);
		loadFootball(false);
	}, [
		loadNews,
		fetchTikTokFeedData,
		loadFootball
	]);
	(0, import_react.useEffect)(() => {
		if (topic) loadNews(false, topic);
	}, [topic, loadNews]);
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
	}, [
		items,
		footballItems,
		viewMode
	]);
	const handleVideoClick = (video) => {
		if (onPlayVideo) onPlayVideo({
			id: video.video_id,
			title: video.title,
			videoUrl: video.videoUrl || video.play,
			thumbnailUrl: video.image || video.cover,
			author: video.author_name || video.author_id
		});
		else onOpen(video.videoUrl || video.play);
	};
	const handleOpenFootballArticle = (url) => {
		if (onOpenWeb) onOpenWeb(url);
		else onOpen(url);
	};
	const handleOpenOnTikTok = (e, video) => {
		e.stopPropagation();
		const cleanAuthor = (video.author_id || "tiktok").replace(/^@/, "");
		const tiktokUrl = video.tiktokWebUrl || `https://www.tiktok.com/@${cleanAuthor}/video/${video.video_id}`;
		if (onOpenWeb) onOpenWeb(tiktokUrl);
		else if (typeof window !== "undefined") window.open(tiktokUrl, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		onTouchStart: (e) => {
			if (window.scrollY <= 0 && (e.currentTarget.parentElement?.scrollTop ?? 0) <= 0) startY.current = e.touches[0].clientY;
		},
		onTouchMove: (e) => {
			if (startY.current !== null) setPull(Math.min(80, Math.max(0, e.touches[0].clientY - startY.current)));
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
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { height: pull },
				className: "flex items-center justify-center text-xs text-muted-foreground",
				children: pull > 60 ? "Release to refresh" : pull > 0 ? "Pull to refresh" : ""
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 356,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-4 flex gap-1 rounded-xl bg-card p-1 shadow-xs border border-border/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setViewMode("news"),
						className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold transition-all ${viewMode === "news" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: "News"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 365,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setViewMode("tiktok"),
						className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${viewMode === "tiktok" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Video, { className: "size-3.5 sm:size-4" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 383,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "TikTok Trends" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 384,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 375,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setViewMode("football"),
						className: `flex-1 rounded-lg py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${viewMode === "football" ? "bg-brand text-brand-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "⚽ Football" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 394,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 386,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 364,
				columnNumber: 7
			}, this),
			viewMode === "football" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3",
				children: [
					footballLoading && (!footballItems || footballItems.length === 0) && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-3 mb-2",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "w-full bg-muted/70 rounded-full h-1.5 overflow-hidden",
								role: "progressbar",
								"aria-label": "Loading football news",
								children: /* @__PURE__ */ (void 0)("div", { className: "bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 409,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 404,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-center text-xs text-muted-foreground font-medium",
								children: "Fetching latest football headlines and match updates..."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 411,
								columnNumber: 17
							}, this),
							Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (void 0)("div", {
								className: "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
								children: [/* @__PURE__ */ (void 0)("div", { className: "aspect-video animate-pulse bg-muted" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 421,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 p-3.5",
									children: [
										/* @__PURE__ */ (void 0)("div", { className: "h-4 animate-pulse rounded bg-muted" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 423,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", { className: "h-3 w-4/5 animate-pulse rounded bg-muted" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 424,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", { className: "h-3 w-1/3 animate-pulse rounded bg-muted" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 425,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 422,
									columnNumber: 21
								}, this)]
							}, i, true, {
								fileName: _jsxFileName$9,
								lineNumber: 417,
								columnNumber: 19
							}, this))
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 403,
						columnNumber: 15
					}, this),
					!footballLoading && footballError && (!footballItems || footballItems.length === 0) && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3",
								children: /* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 438,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 437,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("h3", {
								className: "text-base font-semibold text-foreground mb-1",
								children: "Failed to load football news"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 440,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mb-4 max-w-xs mx-auto",
								children: "Unable to retrieve the soccer feeds right now. Please check your connection and try again."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 443,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => loadFootball(true),
								className: "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all",
								children: [/* @__PURE__ */ (void 0)(RotateCw, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 451,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Retry" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 452,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 447,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 436,
						columnNumber: 15
					}, this),
					!footballLoading && !footballError && footballItems && footballItems.length === 0 && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-border/60 bg-card p-6 text-center my-4",
						children: [/* @__PURE__ */ (void 0)("p", {
							className: "text-sm text-muted-foreground mb-3",
							children: "No football news available right now."
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 463,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => loadFootball(true),
							className: "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs",
							children: [/* @__PURE__ */ (void 0)(RotateCw, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 470,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Refresh" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 471,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 466,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 462,
						columnNumber: 15
					}, this),
					footballItems?.slice(0, footballShown).map((it, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => handleOpenFootballArticle(it.link),
						className: "group mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all active:scale-[0.99]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative aspect-video w-full overflow-hidden bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: it.thumbnail || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
								alt: it.title,
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
								loading: "lazy",
								onError: (e) => {
									e.target.src = FOOTBALL_PLACEHOLDER;
								}
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 483,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-2.5 left-2.5 rounded-md bg-black/65 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs flex items-center gap-1 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "⚽" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 493,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: it.source || "Football" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 494,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 492,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 482,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "line-clamp-2 text-sm font-bold text-foreground leading-snug",
									children: it.title
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 499,
									columnNumber: 17
								}, this),
								it.description && /* @__PURE__ */ (void 0)("p", {
									className: "mt-1.5 line-clamp-2 text-xs text-muted-foreground/90 leading-relaxed",
									children: it.description
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 503,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-2.5 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-medium text-foreground/80",
												children: it.source
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 509,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 512,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ago(it.pubDate) }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 513,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 508,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-brand font-semibold text-[11px] group-hover:underline",
										children: "Read article"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 515,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 507,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 498,
							columnNumber: 15
						}, this)]
					}, `fb-${it.link || "no-link"}-${idx}-${it.title?.slice(0, 15) || "no-title"}`, true, {
						fileName: _jsxFileName$9,
						lineNumber: 477,
						columnNumber: 13
					}, this)),
					footballItems && footballShown < footballItems.length && /* @__PURE__ */ (void 0)("div", {
						ref: sentinel,
						className: "h-10"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 524,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 399,
				columnNumber: 9
			}, this) : viewMode === "tiktok" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3",
				children: [
					tiktokLoading && (!tiktokVideos || tiktokVideos.length === 0) && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-3 mb-2",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "w-full bg-muted/70 rounded-full h-1.5 overflow-hidden",
								role: "progressbar",
								"aria-label": "Loading TikTok trends",
								children: /* @__PURE__ */ (void 0)("div", { className: "bg-brand h-full w-2/3 animate-[pulse_1s_ease-in-out_infinite] rounded-full" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 537,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 532,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-center text-xs text-muted-foreground font-medium",
								children: "Fetching trending videos from feed..."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 539,
								columnNumber: 15
							}, this),
							Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (void 0)("div", {
								className: "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "aspect-video animate-pulse bg-muted flex items-center justify-center",
									children: /* @__PURE__ */ (void 0)(Play, { className: "size-10 text-muted-foreground/30" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 550,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 549,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2 p-3",
									children: [/* @__PURE__ */ (void 0)("div", { className: "h-4 animate-pulse rounded bg-muted" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 553,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", { className: "h-3.5 w-1/2 animate-pulse rounded bg-muted" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 554,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 552,
									columnNumber: 19
								}, this)]
							}, `skeleton-tik-${i}`, true, {
								fileName: _jsxFileName$9,
								lineNumber: 545,
								columnNumber: 17
							}, this))
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 531,
						columnNumber: 13
					}, this),
					!tiktokLoading && tiktokError && (!tiktokVideos || tiktokVideos.length === 0) && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 text-center my-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-3",
								children: /* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 567,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 566,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("h3", {
								className: "text-base font-semibold text-foreground mb-1",
								children: "Failed to load TikTok trends"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 569,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mb-4 max-w-xs mx-auto",
								children: "Unable to retrieve the trending feed right now. Please check your connection and try again."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 572,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => fetchTikTokFeedData(true),
								className: "inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground shadow-xs hover:bg-brand/90 active:scale-95 transition-all",
								children: [/* @__PURE__ */ (void 0)(RotateCw, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 580,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Retry" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 581,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 576,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 565,
						columnNumber: 15
					}, this),
					!tiktokLoading && !tiktokError && tiktokVideos && tiktokVideos.length === 0 && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl border border-border/60 bg-card p-6 text-center my-4",
						children: [/* @__PURE__ */ (void 0)("p", {
							className: "text-sm text-muted-foreground mb-3",
							children: "No trending videos found."
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 592,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => fetchTikTokFeedData(true),
							className: "inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-xs",
							children: [/* @__PURE__ */ (void 0)(RotateCw, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 599,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Refresh" }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 600,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 595,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 591,
						columnNumber: 15
					}, this),
					tiktokVideos?.map((v, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "group mb-4 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/50 hover:border-brand/40 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							role: "button",
							tabIndex: 0,
							onClick: () => handleVideoClick(v),
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") handleVideoClick(v);
							},
							className: "relative aspect-video w-full cursor-pointer overflow-hidden bg-neutral-900",
							title: `Play "${v.title}" in WebNa Player`,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: v.image && v.image.startsWith("http") ? v.image : v.cover && v.cover.startsWith("http") ? v.cover : `https://wsrv.nl/?url=${encodeURIComponent(v.origin_cover || v.cover)}&output=jpg`,
									alt: v.title,
									referrerPolicy: "no-referrer",
									className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
									loading: "lazy",
									onError: (e) => {
										const imgEl = e.currentTarget;
										const stage = imgEl.getAttribute("data-fallback-stage") || "0";
										if (stage === "0" && v.origin_cover && imgEl.src !== v.origin_cover) {
											imgEl.setAttribute("data-fallback-stage", "1");
											imgEl.src = `https://wsrv.nl/?url=${encodeURIComponent(v.origin_cover)}&output=jpg`;
										} else if (stage === "1") {
											imgEl.setAttribute("data-fallback-stage", "2");
											imgEl.src = `https://images.weserv.nl/?url=${encodeURIComponent(v.origin_cover || v.cover)}&output=jpg`;
										} else if (stage === "2" && v.origin_cover) {
											imgEl.setAttribute("data-fallback-stage", "3");
											imgEl.src = v.origin_cover;
										}
									}
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 622,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md border border-white/20 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-5 fill-white ml-0.5 text-white" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 657,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 656,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 655,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute bottom-2 right-2 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs border border-white/10",
									children: v.play_count > 0 ? `${v.play_count.toLocaleString()} views` : "Trending"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 661,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 611,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-3.5 space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									onClick: () => handleVideoClick(v),
									className: "line-clamp-2 text-sm font-bold text-foreground cursor-pointer hover:text-brand transition-colors",
									children: v.title
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 670,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "truncate text-xs text-muted-foreground font-medium",
									children: v.subtitle
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 677,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "pt-2 flex items-center justify-between gap-2 border-t border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => handleOpenOnTikTok(e, v),
										className: "inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs active:scale-95 transition-all border border-neutral-700/60",
										title: "Watch full video on TikTok",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
												className: "size-3.5 fill-current text-[#25F4EE]",
												viewBox: "0 0 24 24",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.891 2.896 2.896 0 0 1-2.892-2.891 2.896 2.896 0 0 1 2.892-2.892c.328 0 .641.057.933.161V9.45a6.34 6.34 0 0 0-.933-.069 6.34 6.34 0 0 0-6.335 6.336 6.34 6.34 0 0 0 6.335 6.336 6.34 6.34 0 0 0 6.335-6.336V9.012a8.163 8.163 0 0 0 4.887 1.605V7.172a4.773 4.773 0 0 1-1.116-.486z" }, void 0, false, {
													fileName: _jsxFileName$9,
													lineNumber: 695,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 690,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Watch on TikTok" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 697,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3 text-[#FE2C55] opacity-90" }, void 0, false, {
												fileName: _jsxFileName$9,
												lineNumber: 698,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 684,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => handleVideoClick(v),
										className: "inline-flex items-center gap-1.5 rounded-xl bg-brand/10 hover:bg-brand/20 px-3 py-1.5 text-xs font-semibold text-brand active:scale-95 transition-all",
										title: "Play in WebNa Player",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 708,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Play in Player" }, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 709,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 702,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 682,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 669,
							columnNumber: 15
						}, this)]
					}, `tik-${v.video_id || "no-id"}-${idx}-${v.author_id || "no-author"}`, true, {
						fileName: _jsxFileName$9,
						lineNumber: 606,
						columnNumber: 13
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 528,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4",
					children: CHIPS.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setTopic(c.t),
						className: `shrink-0 rounded-full px-4 py-1.5 text-sm ${topic === c.t ? "bg-brand text-brand-foreground font-semibold shadow-xs" : "bg-card shadow-xs border border-border/40 text-muted-foreground"}`,
						children: c.l
					}, `chip-${c.l}`, false, {
						fileName: _jsxFileName$9,
						lineNumber: 721,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 719,
					columnNumber: 11
				}, this),
				!items && Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (void 0)("div", {
					className: "mb-3 overflow-hidden rounded-2xl bg-card shadow-xs border border-border/40",
					children: [/* @__PURE__ */ (void 0)("div", { className: "aspect-video animate-pulse bg-muted" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 741,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "space-y-2 p-3",
						children: [/* @__PURE__ */ (void 0)("div", { className: "h-4 animate-pulse rounded bg-muted" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 743,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("div", { className: "h-4 w-2/3 animate-pulse rounded bg-muted" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 744,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 742,
						columnNumber: 17
					}, this)]
				}, `skeleton-news-${i}`, true, {
					fileName: _jsxFileName$9,
					lineNumber: 737,
					columnNumber: 15
				}, this)),
				items?.length === 0 && /* @__PURE__ */ (void 0)("p", {
					className: "py-10 text-center text-sm text-muted-foreground",
					children: "Couldn't load news. Pull down to retry."
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 750,
					columnNumber: 13
				}, this),
				items?.slice(0, shown).map((it, idx) => {
					const img = it.thumbnail;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => onOpen(it.link),
						className: "mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-xs border border-border/40 hover:border-brand/40 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsImg, {
							src: img,
							fallback: fallbackImage(topic)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 763,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "line-clamp-2 text-sm font-bold text-foreground",
								children: it.title
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 765,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: `https://www.google.com/s2/favicons?domain=${(() => {
											try {
												return new URL(it.link).hostname;
											} catch {
												return "bbc.co.uk";
											}
										})()}&sz=32`,
										alt: "",
										className: "size-4 rounded-full"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 769,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "truncate",
										children: it.source
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 780,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "ml-auto shrink-0",
										children: ago(it.pubDate)
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 781,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 768,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 764,
							columnNumber: 17
						}, this)]
					}, `news-${it.link || "no-link"}-${idx}-${it.title?.slice(0, 15) || "no-title"}`, true, {
						fileName: _jsxFileName$9,
						lineNumber: 758,
						columnNumber: 15
					}, this);
				}),
				items && shown < items.length && /* @__PURE__ */ (void 0)("div", {
					ref: sentinel,
					className: "h-10"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 789,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 717,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 328,
		columnNumber: 5
	}, this);
}
function NewsImg({ src, fallback }) {
	const [err, setErr] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setErr(0);
	}, [src]);
	let currentSrc = fallback;
	if (validImage(src)) if (err === 0) currentSrc = src;
	else if (err === 1 && src.includes("/standard/800/")) currentSrc = src.replace("/standard/800/", "/standard/240/");
	else if (err < 3) currentSrc = fallback;
	else currentSrc = DEFAULT_IMAGE;
	else currentSrc = err >= 1 ? DEFAULT_IMAGE : fallback;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src: currentSrc,
		alt: "",
		referrerPolicy: "no-referrer",
		onError: () => setErr((e) => e + 1),
		className: "aspect-video w-full bg-muted object-cover",
		loading: "lazy"
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 826,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/ArticleView.tsx";
function ArticleView({ link, onBack, onOpenWeb, isSaved, onToggleSave }) {
	const [a, setA] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		setA(null);
		(async () => {
			const art = await getArticle({ data: { url: await resolveNews({ data: { url: link } }) } });
			if (live) setA(art);
		})().catch(() => live && setA({
			url: link,
			site: "",
			title: "",
			paragraphs: []
		}));
		return () => {
			live = false;
		};
	}, [link]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-background pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "sticky top-0 z-10 flex items-center gap-2 bg-background/95 px-3 py-3 backdrop-blur",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onBack,
					className: "rounded-full bg-card p-2 shadow-sm",
					"aria-label": "Back",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 42,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "min-w-0 flex-1 truncate text-sm text-muted-foreground",
					children: a?.site || "Loading…"
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				a && onToggleSave && /* @__PURE__ */ (void 0)("button", {
					onClick: () => onToggleSave(a.url, a.title || a.site || "Article"),
					className: "flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm hover:bg-muted",
					title: isSaved ? "Saved to links" : "Save to saved links",
					"aria-label": "Save link",
					children: [/* @__PURE__ */ (void 0)(Bookmark, { className: `size-4 ${isSaved ? "fill-brand text-brand" : "text-muted-foreground"}` }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 54,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: isSaved ? "text-brand font-semibold" : "",
						children: isSaved ? "Saved" : "Save"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 59,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 48,
					columnNumber: 11
				}, this),
				a && /* @__PURE__ */ (void 0)("button", {
					onClick: () => onOpenWeb(a.url),
					className: "flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm",
					children: [/* @__PURE__ */ (void 0)(Globe, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 69,
						columnNumber: 13
					}, this), "Web"]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 65,
					columnNumber: 11
				}, this),
				a && /* @__PURE__ */ (void 0)("a", {
					href: a.url,
					target: "_blank",
					rel: "noreferrer",
					className: "rounded-full bg-card p-2 shadow-sm",
					"aria-label": "Open externally",
					children: /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 81,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 36,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
			className: "mx-auto max-w-xl px-4",
			children: !a ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-video animate-pulse rounded-2xl bg-muted" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 88,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 animate-pulse rounded bg-muted" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 89,
						columnNumber: 13
					}, this),
					Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 animate-pulse rounded bg-muted" }, i, false, {
						fileName: _jsxFileName$8,
						lineNumber: 91,
						columnNumber: 15
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 87,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				a.image && /* @__PURE__ */ (void 0)("img", {
					src: a.image,
					alt: "",
					referrerPolicy: "no-referrer",
					className: "mb-4 aspect-video w-full rounded-2xl object-cover"
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 97,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mb-4 text-2xl font-bold leading-tight",
					children: a.title
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 104,
					columnNumber: 13
				}, this),
				a.paragraphs.length ? a.paragraphs.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-4 leading-relaxed",
					children: p
				}, i, false, {
					fileName: _jsxFileName$8,
					lineNumber: 107,
					columnNumber: 17
				}, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl bg-card p-4 text-sm",
					children: ["This article can't be shown in reader mode.", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => onOpenWeb(a.url),
						className: "mt-3 block font-medium text-brand",
						children: "Open web page"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 114,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 112,
					columnNumber: 15
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 95,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 85,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var getTrendingTracks = createServerFn({ method: "GET" }).handler(createSsrRpc("97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6"));
/**
* Searches across music platforms.
* When the user selects Spotify, returns authentic Spotify track metadata, Spotify artwork,
* direct Spotify links (open.spotify.com), and playable audio previews.
* When the user selects Apple Music, returns Apple Music / iTunes tracks with official previews and Apple links.
*/
var searchMusicTracks = createServerFn({ method: "GET" }).validator((input) => {
	if (typeof input === "string") return {
		term: input,
		platform: "all"
	};
	return {
		term: input?.term || "",
		platform: input?.platform || "all"
	};
}).handler(createSsrRpc("d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4"));
var TRENDING_VIDEOS = [
	{
		id: "flower-1",
		title: "Blooming Flower - Nature Macro Time-Lapse",
		channel: "Nature & Botanical Wonders",
		videoUrl: "/videos/flower.mp4",
		fallbackUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
		duration: "00:05",
		durationSeconds: 5,
		quality: "1080p HD"
	},
	{
		id: "bbb-2",
		title: "Big Buck Bunny - Animated Short Film",
		channel: "Blender Animation Studio",
		videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
		fallbackUrl: "/videos/flower.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
		duration: "00:33",
		durationSeconds: 33,
		quality: "720p HD"
	},
	{
		id: "sintel-3",
		title: "Sintel - Fantasy Quest Film",
		channel: "Durian Open Movie Project",
		videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
		fallbackUrl: "/videos/movie_300.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
		duration: "00:52",
		durationSeconds: 52,
		quality: "720p HD"
	},
	{
		id: "movie-4",
		title: "Cinematic Motion Odyssey",
		channel: "World Cinema Arts",
		videoUrl: "/videos/movie_300.mp4",
		fallbackUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
		duration: "00:12",
		durationSeconds: 12,
		quality: "1080p HD"
	},
	{
		id: "bbb-webm-5",
		title: "Big Buck Bunny - WebM 480p Edition",
		channel: "Blender Foundation",
		videoUrl: "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm",
		fallbackUrl: "/videos/flower.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
		duration: "09:56",
		durationSeconds: 596,
		quality: "480p WebM"
	},
	{
		id: "sintel-webm-6",
		title: "Sintel - 4K Remaster Showcase",
		channel: "Open Movie Project",
		videoUrl: "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.480p.vp9.webm",
		fallbackUrl: "/videos/movie_300.mp4",
		thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
		duration: "14:48",
		durationSeconds: 888,
		quality: "480p WebM"
	}
];
async function getTrendingVideos() {
	return TRENDING_VIDEOS;
}
var _jsxFileName$7 = "/app/applet/src/components/AudioPlayer.tsx";
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
	if (mimeType && mimeType !== file.type) return new Blob([file], { type: mimeType });
	return file;
}
function parseTrackMetadata(item) {
	if (!item) return {
		artist: "Unknown Artist",
		title: "Music Track",
		album: "Music Album"
	};
	if (typeof item === "object" && isTrendingTrack(item)) return {
		artist: item.artist || "Artist",
		title: item.title || "Track",
		album: `${item.artist || "Artist"} Essentials`
	};
	const base = (typeof item === "string" ? item : item.name || "Track").replace(/\.[^/.]+$/, "");
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
		album
	};
}
var BASE_WAVE_BARS = [
	.22,
	.26,
	.3,
	.35,
	.42,
	.5,
	.6,
	.72,
	.82,
	.9,
	.96,
	.92,
	.82,
	.72,
	.64,
	.58,
	.62,
	.72,
	.84,
	.94,
	1,
	.96,
	.88,
	.78,
	.7,
	.62,
	.54,
	.48,
	.44,
	.46,
	.52,
	.58,
	.66,
	.74,
	.82,
	.88,
	.86,
	.8,
	.72,
	.64,
	.56,
	.5,
	.46,
	.48,
	.54,
	.62,
	.7,
	.76,
	.8,
	.82,
	.8,
	.74,
	.68,
	.6,
	.54,
	.46,
	.38,
	.32,
	.28,
	.24,
	.2,
	.16
];
function AudioPlayer({ file, tracks = [], initialIndex = 0, onClose, onSwitchToVideo }) {
	const playlist = (0, import_react.useMemo)(() => {
		if (tracks && tracks.length > 0) return tracks;
		if (file) return [file];
		return [];
	}, [tracks, file]);
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(() => {
		if (initialIndex >= 0 && initialIndex < playlist.length) return initialIndex;
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
		if (!currentTrack) return {
			artist: "Unknown Artist",
			title: "Music Track",
			album: "Music Album"
		};
		if (isTrendingTrack(currentTrack)) return {
			artist: currentTrack.artist || "Artist",
			title: currentTrack.title || "Track",
			album: `${currentTrack.artist} Essentials`
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
	const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = (0, import_react.useState)(false);
	const [showAlbumModal, setShowAlbumModal] = (0, import_react.useState)(false);
	const [showArtistModal, setShowArtistModal] = (0, import_react.useState)(false);
	const [showPlaylist, setShowPlaylist] = (0, import_react.useState)(false);
	const [showEqualizer, setShowEqualizer] = (0, import_react.useState)(false);
	const [showSleepTimer, setShowSleepTimer] = (0, import_react.useState)(false);
	const [toastMessage, setToastMessage] = (0, import_react.useState)(null);
	const [showFooterModal, setShowFooterModal] = (0, import_react.useState)(false);
	const [activeFooterTab, setActiveFooterTab] = (0, import_react.useState)("playlists");
	const [selectedAlbumName, setSelectedAlbumName] = (0, import_react.useState)(null);
	const albumsList = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		playlist.forEach((trackFile, index) => {
			const meta = parseTrackMetadata(trackFile);
			const albumKey = meta.album || "Default Album";
			if (!map.has(albumKey)) map.set(albumKey, {
				albumName: albumKey,
				artist: meta.artist,
				tracks: []
			});
			map.get(albumKey).tracks.push({
				file: trackFile,
				index
			});
		});
		return Array.from(map.values());
	}, [playlist]);
	const [userPlaylists, setUserPlaylists] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("webna_user_playlists");
			if (saved) return JSON.parse(saved);
		} catch {}
		return [{
			id: "default-1",
			name: "My Favorite Mix",
			createdAt: Date.now(),
			trackNames: []
		}, {
			id: "default-2",
			name: "Chill & Focus",
			createdAt: Date.now(),
			trackNames: []
		}];
	});
	const [newPlaylistName, setNewPlaylistName] = (0, import_react.useState)("");
	const [selectedPlaylistId, setSelectedPlaylistId] = (0, import_react.useState)(null);
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
		const updated = [{
			id: "pl-" + Date.now(),
			name: trimmed,
			createdAt: Date.now(),
			trackNames: currentTrack ? [currentTrack.name] : []
		}, ...userPlaylists];
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
					trackNames: [...pl.trackNames, currentTrack.name]
				};
			}
			return pl;
		});
		savePlaylists(updated);
	};
	const removeTrackFromPlaylist = (playlistId, trackName) => {
		const updated = userPlaylists.map((pl) => {
			if (pl.id === playlistId) return {
				...pl,
				trackNames: pl.trackNames.filter((n) => n !== trackName)
			};
			return pl;
		});
		savePlaylists(updated);
		showToast("Removed track from playlist");
	};
	const [activePreset, setActivePreset] = (0, import_react.useState)("Flat (Original)");
	const [sleepTimerMinutes, setSleepTimerMinutes] = (0, import_react.useState)(null);
	const [sleepRemainingSeconds, setSleepRemainingSeconds] = (0, import_react.useState)(null);
	const [favorites, setFavorites] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("webna_music_favorites");
			return saved ? JSON.parse(saved) : [];
		} catch {
			return [];
		}
	});
	const isFavorited = currentTrack ? favorites.includes(currentTrack.name) : false;
	const toggleFavorite = () => {
		if (!currentTrack) return;
		setFavorites((prev) => {
			const next = prev.includes(currentTrack.name) ? prev.filter((name) => name !== currentTrack.name) : [...prev, currentTrack.name];
			try {
				localStorage.setItem("webna_music_favorites", JSON.stringify(next));
			} catch {}
			showToast(next.includes(currentTrack.name) ? "Added to favorites ❤️" : "Removed from favorites");
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
			setToastMessage((cur) => cur === msg ? null : cur);
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
			setSleepRemainingSeconds((s) => s !== null ? s - 1 : null);
		}, 1e3);
		return () => clearInterval(timer);
	}, [sleepRemainingSeconds]);
	const setSleepTimer = (minutes) => {
		setSleepTimerMinutes(minutes);
		setSleepRemainingSeconds(minutes ? minutes * 60 : null);
		setShowSleepTimer(false);
		showToast(minutes ? `Sleep timer set for ${minutes} min` : "Sleep timer turned off");
	};
	const audioRef = (0, import_react.useRef)(null);
	const [audioUrl, setAudioUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!currentTrack) return;
		if (isTrendingTrack(currentTrack)) {
			const url = currentTrack.previewUrl || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
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
		if (playPromise !== void 0) playPromise.then(() => {
			setIsPlaying(true);
		}).catch((err) => {
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
			const restoreVol = prevVolumeRef.current > 0 ? prevVolumeRef.current : .8;
			setIsMuted(false);
			setVolume(restoreVol);
			if (audioRef.current) audioRef.current.volume = restoreVol;
			showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
		} else {
			prevVolumeRef.current = volume > 0 ? volume : .8;
			setIsMuted(true);
			if (audioRef.current) audioRef.current.volume = 0;
			showToast("Muted");
		}
	};
	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (audio.paused) audio.play().then(() => setIsPlaying(true)).catch((err) => {
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
			if (nextIdx === currentIndex && playlist.length > 1) nextIdx = (currentIndex + 1) % playlist.length;
			setCurrentIndex(nextIdx);
		} else setCurrentIndex((prev) => (prev + 1) % playlist.length);
	}, [
		playlist.length,
		isShuffle,
		currentIndex
	]);
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
			const newTime = Math.min(Math.max(0, audioRef.current.currentTime + seconds), duration || Infinity);
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
		const speeds = [
			.75,
			1,
			1.25,
			1.5,
			2
		];
		const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
		setPlaybackSpeed(nextSpeed);
		if (audioRef.current) audioRef.current.playbackRate = nextSpeed;
		showToast(`Speed: ${nextSpeed}x`);
	};
	const handleShare = async () => {
		if (!currentTrack) return;
		if (navigator.share) try {
			await navigator.share({
				title: currentTrack.name,
				text: `Listening to ${currentTrack.name} on WebNa Music Player`
			});
		} catch {}
		else try {
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
		} else if (repeatMode === "all" || currentIndex < playlist.length - 1) handleNext();
		else {
			setIsPlaying(false);
			setProgress(0);
		}
	};
	const [waveAnimationTime, setWaveAnimationTime] = (0, import_react.useState)(0);
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
	const favoriteTracksInPlaylist = playlist.filter((t) => favorites.includes(t.name));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-[60] flex flex-col bg-[#fbf9f6] text-[#2b2520] select-none overflow-hidden",
		children: [
			toastMessage && /* @__PURE__ */ (void 0)("div", {
				className: "absolute top-14 left-1/2 -translate-x-1/2 z-[90] bg-[#3a322c]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-fade-in pointer-events-none",
				children: toastMessage
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 785,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-2 px-4 pt-3 pb-2 shrink-0 border-b border-[#eee7de]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 bg-[#f0eae0] p-1 rounded-xl shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							className: "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-brand shadow-xs transition-all",
							title: "Audio Player (Active)",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Music, { className: "size-3.5 text-brand" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 799,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Audio player" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 800,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 795,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => {
								if (audioRef.current) audioRef.current.pause();
								if (onSwitchToVideo) onSwitchToVideo();
								else onClose();
							},
							className: "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#7c726a] hover:text-[#2b2520] hover:bg-white/60 transition-all",
							title: "Switch to Video Player",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Film, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 814,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Video player" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 815,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 802,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 794,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => setShowMoreMenu(true),
							className: "p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform",
							"aria-label": "More options",
							title: "Options",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-5 text-[#4a423a]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 827,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 821,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: onClose,
							className: "p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform",
							"aria-label": "Close player",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5 text-[#4a423a]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 834,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 829,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 820,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 792,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0 flex items-center justify-between px-1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0 flex-1 pr-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-sm font-semibold truncate leading-tight",
							children: getAudioItemTitle(currentTrack) || "Music Player"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 841,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-[#8c827a] truncate mt-0.5",
							children: isTrendingTrack(currentTrack) ? currentTrack.artist : playlist.length > 1 ? `Track ${currentIndex + 1} of ${playlist.length}` : "Local Audio"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 844,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 840,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 839,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 791,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 flex flex-col items-center justify-center px-6 py-1 min-h-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative size-48 sm:size-56 rounded-full bg-[#f1ebe3] flex items-center justify-center shadow-inner my-auto transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: `size-40 sm:size-44 rounded-full bg-gradient-to-tr from-[#6d5b97]/20 to-[#9e8ec2]/30 flex items-center justify-center border-4 border-white/60 shadow-sm overflow-hidden transition-transform duration-700 ${isPlaying ? "rotate-360 duration-[12000ms] ease-linear repeat-infinite" : ""}`,
						children: getAudioItemCover(currentTrack) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: getAudioItemCover(currentTrack),
							alt: "",
							className: "size-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 866,
							columnNumber: 15
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-4xl sm:text-5xl select-none",
							children: "🎵"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 872,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 858,
						columnNumber: 11
					}, this), isPlaying && /* @__PURE__ */ (void 0)("div", { className: "absolute inset-0 rounded-full border-2 border-dashed border-[#6d5b97]/30 animate-spin duration-[16000ms]" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 876,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 857,
					columnNumber: 9
				}, this), errorMessage && /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-2 p-2 rounded-xl bg-destructive/10 text-destructive text-xs text-center w-full max-w-sm mt-2",
					children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 882,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("span", { children: errorMessage }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 883,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 881,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 856,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "w-full max-w-md mx-auto px-5 pb-2 pt-1 flex flex-col gap-3.5 shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between text-[#574d46] px-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setShowPlaylist(true),
								className: "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
								title: "Playlist queue",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListMusic, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 898,
									columnNumber: 13
								}, this), playlist.length > 1 && /* @__PURE__ */ (void 0)("span", {
									className: "absolute -top-0.5 -right-0.5 bg-[#6d5b97] text-white text-[9px] size-3.5 rounded-full flex items-center justify-center font-bold",
									children: playlist.length
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 900,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 893,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setShowEqualizer(true),
								className: "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform",
								title: "Equalizer & Track Info",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreditCard, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 912,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 907,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: toggleFavorite,
								className: `p-1.5 active:scale-90 transition-transform ${isFavorited ? "text-[#d14343]" : "hover:text-[#6d5b97]"}`,
								title: isFavorited ? "Favorited" : "Add to favorites",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: `size-5 transition-colors ${isFavorited ? "fill-[#d14343] text-[#d14343]" : ""}` }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 923,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 916,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: cycleRepeatMode,
								className: `p-1.5 relative active:scale-90 transition-transform ${repeatMode !== "off" ? "text-[#6d5b97]" : "hover:text-[#6d5b97]"}`,
								title: `Repeat: ${repeatMode}`,
								children: [repeatMode === "one" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Repeat1, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 939,
									columnNumber: 15
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Repeat, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 941,
									columnNumber: 15
								}, this), repeatMode === "all" && /* @__PURE__ */ (void 0)("span", { className: "absolute bottom-1 right-1 size-1.5 rounded-full bg-[#6d5b97]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 944,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 931,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setShowSleepTimer(true),
								className: `p-1.5 relative active:scale-90 transition-transform ${sleepRemainingSeconds !== null ? "text-[#6d5b97]" : "hover:text-[#6d5b97]"}`,
								title: "Sleep timer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 958,
									columnNumber: 13
								}, this), sleepRemainingSeconds !== null && /* @__PURE__ */ (void 0)("span", {
									className: "absolute -top-1 -right-2 bg-[#6d5b97] text-white text-[8px] px-1 rounded-full font-mono",
									children: [Math.ceil(sleepRemainingSeconds / 60), "m"]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 960,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 949,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: handleShare,
								className: "p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform",
								title: "Share track",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share2, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 972,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 967,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 891,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							ref: waveformRef,
							className: "h-12 w-full flex items-center justify-between gap-[2.5px] sm:gap-[3px] cursor-pointer select-none py-1 relative group",
							onPointerDown: (e) => {
								isDraggingRef.current = true;
								calculateSeekFromPointer(e.clientX);
							},
							onPointerMove: (e) => {
								if (isDraggingRef.current) calculateSeekFromPointer(e.clientX);
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
									const harmonic = Math.sin(waveAnimationTime * 6 + index * .35) * .28 + Math.cos(waveAnimationTime * 4 - index * .2) * .15;
									liveMultiplier = Math.max(.3, 1 + harmonic);
								}
								const barHeightPct = Math.min(100, Math.max(14, baseHeight * 100 * liveMultiplier));
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex-1 flex flex-col justify-center items-center h-full relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: `w-[2.5px] sm:w-[3px] rounded-full transition-all duration-75 ${isPast ? "bg-[#6d5b97]" : "bg-[#cfc8c2] dark:bg-muted-foreground/30"}`,
										style: { height: `${barHeightPct}%` }
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1022,
										columnNumber: 19
									}, this), isCurrent && /* @__PURE__ */ (void 0)("div", { className: "absolute top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#6d5b97] shadow-md border-2 border-white pointer-events-none ring-2 ring-[#6d5b97]/30 scale-110" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1033,
										columnNumber: 21
									}, this)]
								}, index, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1018,
									columnNumber: 17
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 978,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between text-xs font-medium text-[#7a6f67] px-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatTime(progress) }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1042,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatTime(duration) }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1043,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1041,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 977,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between px-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => {
									setIsShuffle(!isShuffle);
									showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
								},
								className: `p-2 transition-transform active:scale-90 ${isShuffle ? "text-[#6d5b97]" : "text-[#574d46] hover:text-[#6d5b97]"}`,
								title: "Toggle shuffle",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shuffle, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1062,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1050,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: handlePrev,
								className: "p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform",
								title: "Previous track",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkipBack, { className: "size-6 fill-current" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1071,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1066,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: togglePlay,
								className: "size-16 rounded-full bg-[#6d5b97] hover:bg-[#5e4d87] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all mx-2",
								"aria-label": isPlaying ? "Pause" : "Play",
								children: isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "size-8 fill-current" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1081,
									columnNumber: 15
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-8 fill-current ml-1" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1083,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1075,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: handleNext,
								className: "p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform",
								title: "Next track",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkipForward, { className: "size-6 fill-current" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1093,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1088,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: cycleSpeed,
								className: "px-2.5 py-1 rounded-full bg-[#ece6f2] hover:bg-[#dfd7e8] text-[#6d5b97] font-semibold text-xs tracking-tight active:scale-95 transition-all shadow-xs",
								title: "Change playback speed",
								children: [playbackSpeed.toFixed(1), "x"]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1097,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1048,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center gap-12 text-[#685d55]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => handleSkip(-10),
							className: "flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
							title: "Rewind 10 seconds",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1113,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[7.5px] font-bold absolute top-[5px]",
								children: "10"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1114,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1108,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => handleSkip(10),
							className: "flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative",
							title: "Forward 10 seconds",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCw, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1124,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[7.5px] font-bold absolute top-[5px]",
								children: "10"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1125,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1119,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1107,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-t border-[#e8e2d9] pt-2.5 pb-1 mt-0.5 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5 px-3 py-1.5 bg-white/80 rounded-2xl border border-[#e8e2d9] shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: toggleMute,
								className: "p-1 rounded-lg text-[#685d55] hover:text-[#6d5b97] hover:bg-black/5 active:scale-90 transition-all shrink-0",
								title: isMuted || volume === 0 ? "Unmute" : "Mute",
								"aria-label": isMuted || volume === 0 ? "Unmute" : "Mute",
								children: isMuted || volume === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VolumeX, { className: "size-4.5 text-[#d14343]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1143,
									columnNumber: 17
								}, this) : volume < .5 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume1, { className: "size-4.5 text-[#6d5b97]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1145,
									columnNumber: 17
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "size-4.5 text-[#6d5b97]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1147,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1135,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "range",
									min: "0",
									max: "1",
									step: "0.01",
									value: isMuted ? 0 : volume,
									onChange: handleVolumeChange,
									className: "w-full h-1.5 bg-[#e4ddd5] rounded-lg appearance-none cursor-pointer accent-[#6d5b97] transition-all",
									"aria-label": "Playback volume"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1152,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-semibold text-[#7a6f67] w-9 text-right font-mono shrink-0 select-none",
									children: isMuted ? "0%" : `${Math.round(volume * 100)}%`
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1162,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1151,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1134,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-xs gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => {
										setActiveFooterTab("playlists");
										setSelectedPlaylistId(null);
										setShowFooterModal(true);
									},
									className: "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]",
									title: "View playlists",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListMusic, { className: "size-4 text-[#6d5b97] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1180,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-xs",
											children: "Playlist"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1181,
											columnNumber: 15
										}, this),
										userPlaylists.length > 0 && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0",
											children: userPlaylists.length
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1183,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1171,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => {
										setActiveFooterTab("favorites");
										setShowFooterModal(true);
									},
									className: "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#d14343]",
									title: "View favorites",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "size-4 fill-[#d14343] text-[#d14343] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1198,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-xs",
											children: "Favorites"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1199,
											columnNumber: 15
										}, this),
										favorites.length > 0 && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] bg-red-50 text-[#d14343] font-bold px-1.5 py-0.2 rounded-full shrink-0",
											children: favorites.length
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1201,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1190,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => {
										setActiveFooterTab("albums");
										setSelectedAlbumName(null);
										setShowFooterModal(true);
									},
									className: "flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]",
									title: "View albums",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disc, { className: "size-4 text-[#6d5b97] shrink-0" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1217,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-semibold text-xs",
											children: "Albums"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1218,
											columnNumber: 15
										}, this),
										albumsList.length > 0 && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0",
											children: albumsList.length
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1220,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1208,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1169,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1132,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 889,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("audio", {
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
				}
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 1230,
				columnNumber: 7
			}, this),
			showMoreMenu && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
				onClick: () => setShowMoreMenu(false),
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-white rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-200 text-[#1a1a1a]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 mb-2 border-b border-[#f0ece5]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "font-semibold text-sm truncate",
								children: parsedMeta.title
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1257,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-[#8c827a] truncate",
								children: parsedMeta.artist
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1260,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1256,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowMoreMenu(false),
							className: "p-1 rounded-full hover:bg-black/5 text-[#7a6f67]",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1268,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 1264,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1255,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "divide-y divide-[#f5f1eb] text-sm font-medium",
						children: [
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setShowMoreMenu(false);
									setShowAlbumModal(true);
								},
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(Disc, { className: "size-5 text-[#2b2520]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1282,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Go to album"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1283,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1275,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setShowMoreMenu(false);
									setShowArtistModal(true);
								},
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(User, { className: "size-5 text-[#2b2520]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1294,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Go to artist"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1295,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1287,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setShowMoreMenu(false);
									setActiveFooterTab("playlists");
									setSelectedPlaylistId(null);
									setShowFooterModal(true);
								},
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(ListPlus, { className: "size-5 text-[#2b2520]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1308,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Add to playlist"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1309,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1299,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: handleSetAsRingtone,
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-5 text-[#2b2520]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1317,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Set as ringtone"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1318,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1313,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									toggleFavorite();
									setShowMoreMenu(false);
								},
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#d14343] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(Heart, { className: `size-5 ${isFavorited ? "fill-[#d14343] text-[#d14343]" : "text-[#2b2520]"}` }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1329,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: isFavorited ? "Remove from favorites" : "Add to favorites"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1336,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1322,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: handleRemoveTrack,
								className: "w-full flex items-center gap-4 py-3.5 text-[#d14343] hover:opacity-80 active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(ListX, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1346,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Remove"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1347,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1342,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									const nextState = !stopAfterCurrentTrack;
									setStopAfterCurrentTrack(nextState);
									setShowMoreMenu(false);
									showToast(nextState ? "Will stop playback after this track" : "Stop after this track disabled");
								},
								className: "w-full flex items-center justify-between py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (void 0)(Send, { className: "size-5 text-[#2b2520]" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1365,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[15px]",
										children: "Stop after this track"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1366,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1364,
									columnNumber: 17
								}, this), stopAfterCurrentTrack && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6d5b97] font-bold" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1369,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1351,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setShowMoreMenu(false);
									handleShare();
								},
								className: "w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left",
								children: [/* @__PURE__ */ (void 0)(Share2, { className: "size-5 text-[#2b2520]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1381,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[15px]",
									children: "Share"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1382,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1374,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1273,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 1250,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 1246,
				columnNumber: 9
			}, this),
			showAlbumModal && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Disc, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1395,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-base",
								children: "Album Overview"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1396,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1394,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowAlbumModal(false),
							className: "p-1 rounded-full hover:bg-black/5",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5 text-[#5e534a]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1402,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 1398,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1393,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-16 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (void 0)(Disc, { className: "size-8 text-[#6d5b97]" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1409,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1408,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (void 0)("h4", {
											className: "font-bold text-sm text-[#2b2520] truncate",
											children: parsedMeta.album
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1412,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-[#8c827a] truncate mt-0.5",
											children: parsedMeta.artist
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1415,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-[#6d5b97] font-medium mt-1",
											children: [
												playlist.length,
												" ",
												playlist.length === 1 ? "track" : "tracks",
												" available"
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1418,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1411,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1407,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-1.5 max-h-48 overflow-y-auto",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-xs font-semibold text-[#8c827a] uppercase",
									children: "Tracks in this Album / Session"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1426,
									columnNumber: 17
								}, this), playlist.map((t, idx) => /* @__PURE__ */ (void 0)("button", {
									onClick: () => {
										setCurrentIndex(idx);
										setShowAlbumModal(false);
									},
									className: `w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-left transition-colors ${idx === currentIndex ? "bg-[#ece6f2] text-[#6d5b97] font-semibold" : "bg-white border border-[#e8e2d9] hover:bg-[#f6f2ec]"}`,
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "truncate flex-1",
										children: t.name
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1442,
										columnNumber: 21
									}, this), idx === currentIndex && /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full ml-2",
										children: "Playing"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1444,
										columnNumber: 23
									}, this)]
								}, idx, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1430,
									columnNumber: 19
								}, this))]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1425,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowAlbumModal(false),
								className: "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]",
								children: "Close"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1452,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1406,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 1392,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 1391,
				columnNumber: 9
			}, this),
			showArtistModal && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(User, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1469,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-base",
								children: "Artist Profile"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1470,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1468,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowArtistModal(false),
							className: "p-1 rounded-full hover:bg-black/5",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5 text-[#5e534a]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1476,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 1472,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1467,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-16 rounded-full bg-[#ece6f2] flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (void 0)(User, { className: "size-8 text-[#6d5b97]" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1483,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1482,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-base text-[#2b2520] truncate",
										children: parsedMeta.artist
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1486,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-[#8c827a] mt-0.5",
										children: ["Track: ", parsedMeta.title]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1489,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1485,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1481,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("a", {
								href: `https://www.google.com/search?q=${encodeURIComponent(parsedMeta.artist + " music")}`,
								target: "_blank",
								rel: "noreferrer",
								className: "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#e8e2d9] text-xs font-semibold text-[#6d5b97] hover:bg-[#ece6f2]/50 transition-colors",
								children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1502,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: [
									"Search ",
									parsedMeta.artist,
									" on Google"
								] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1503,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1496,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowArtistModal(false),
								className: "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]",
								children: "Close"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1506,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 1480,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 1466,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 1465,
				columnNumber: 9
			}, this),
			showFooterModal && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2 bg-[#ece6f2]/80 p-1 rounded-xl",
								children: [
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											setActiveFooterTab("playlists");
											setSelectedPlaylistId(null);
										},
										className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-[#6d5b97] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
										children: [/* @__PURE__ */ (void 0)(ListMusic, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1535,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Playlist" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1536,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1524,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => setActiveFooterTab("favorites"),
										className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-[#d14343] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
										children: [
											/* @__PURE__ */ (void 0)(Heart, { className: "size-3.5 fill-[#d14343] text-[#d14343]" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1546,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: "Favorites" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1547,
												columnNumber: 19
											}, this),
											favorites.length > 0 && /* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] bg-red-100 text-[#d14343] px-1.5 rounded-full",
												children: favorites.length
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1549,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1538,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											setActiveFooterTab("albums");
											setSelectedAlbumName(null);
										},
										className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-[#6d5b97] shadow-xs" : "text-[#685d55] hover:text-[#2b2520]"}`,
										children: [
											/* @__PURE__ */ (void 0)(Disc, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1565,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("span", { children: "Albums" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1566,
												columnNumber: 19
											}, this),
											albumsList.length > 0 && /* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] bg-[#ece6f2] text-[#6d5b97] px-1.5 rounded-full",
												children: albumsList.length
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1568,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1554,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1523,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowFooterModal(false),
								className: "p-1 rounded-full hover:bg-black/5",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-5 text-[#5e534a]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1579,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 1575,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1522,
							columnNumber: 13
						}, this),
						activeFooterTab === "playlists" && /* @__PURE__ */ (void 0)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-4",
							children: selectedPlaylistId ? (() => {
								const pl = userPlaylists.find((p) => p.id === selectedPlaylistId);
								if (!pl) return null;
								return /* @__PURE__ */ (void 0)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("button", {
												onClick: () => setSelectedPlaylistId(null),
												className: "text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1",
												children: "← Back to all playlists"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1595,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-xs text-[#8c827a]",
												children: [pl.trackNames.length, " tracks"]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1601,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1594,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
											children: [/* @__PURE__ */ (void 0)("h4", {
												className: "font-bold text-base text-[#2b2520]",
												children: pl.name
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1607,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("button", {
												onClick: () => addTrackToPlaylist(pl.id),
												className: "flex items-center gap-1 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]",
												children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1614,
													columnNumber: 29
												}, this), "Add Current Track"]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1610,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1606,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: [pl.trackNames.map((trackName, idx) => /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9] text-xs hover:border-[#6d5b97]/40 transition-colors",
												children: [/* @__PURE__ */ (void 0)("button", {
													onClick: () => playSongByName(trackName),
													className: "flex items-center gap-2 min-w-0 flex-1 text-left",
													children: [/* @__PURE__ */ (void 0)(CirclePlay, { className: "size-4 text-[#6d5b97] shrink-0" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1629,
														columnNumber: 33
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium truncate",
														children: trackName
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1630,
														columnNumber: 33
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 1625,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("button", {
													onClick: () => removeTrackFromPlaylist(pl.id, trackName),
													className: "p-1 text-[#a3978e] hover:text-destructive",
													title: "Remove track",
													children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1641,
														columnNumber: 33
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1634,
													columnNumber: 31
												}, this)]
											}, idx, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1621,
												columnNumber: 29
											}, this)), pl.trackNames.length === 0 && /* @__PURE__ */ (void 0)("p", {
												className: "text-center py-8 text-xs text-[#8c827a]",
												children: "No tracks in this playlist yet. Tap \"Add Current Track\" above to add one!"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1646,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1619,
											columnNumber: 25
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1593,
									columnNumber: 23
								}, this);
							})() : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("form", {
								onSubmit: handleCreatePlaylist,
								className: "flex gap-2",
								children: [/* @__PURE__ */ (void 0)("input", {
									type: "text",
									value: newPlaylistName,
									onChange: (e) => setNewPlaylistName(e.target.value),
									placeholder: "New playlist name...",
									className: "flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#e8e2d9] focus:outline-none focus:ring-2 focus:ring-[#6d5b97]"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1661,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "submit",
									className: "flex items-center gap-1.5 px-3 py-2 bg-[#6d5b97] text-white text-xs font-semibold rounded-xl hover:bg-[#5e4d87] transition-colors shadow-xs",
									children: [/* @__PURE__ */ (void 0)(FolderPlus, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1672,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Create" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1673,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1668,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1657,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-xs font-semibold text-[#8c827a] uppercase tracking-wider",
									children: [
										"Your Playlists (",
										userPlaylists.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1678,
									columnNumber: 23
								}, this), userPlaylists.map((pl) => /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-[#6d5b97]/50 shadow-xs transition-all",
									children: [/* @__PURE__ */ (void 0)("button", {
										onClick: () => setSelectedPlaylistId(pl.id),
										className: "flex items-center gap-3 min-w-0 flex-1 text-left",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ (void 0)(ListMusic, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1691,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1690,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "font-semibold text-sm truncate",
												children: pl.name
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1694,
												columnNumber: 31
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-[#8c827a]",
												children: [
													pl.trackNames.length,
													" ",
													pl.trackNames.length === 1 ? "track" : "tracks"
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1697,
												columnNumber: 31
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1693,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1686,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (void 0)("button", {
											onClick: () => addTrackToPlaylist(pl.id),
											className: "p-1.5 text-[#6d5b97] hover:bg-[#ece6f2] rounded-lg",
											title: "Add current track",
											children: /* @__PURE__ */ (void 0)(Plus, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1712,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1707,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => handleDeletePlaylist(pl.id, pl.name),
											className: "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg",
											title: "Delete playlist",
											children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1721,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1714,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1706,
										columnNumber: 27
									}, this)]
								}, pl.id, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1682,
									columnNumber: 25
								}, this))]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1677,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1656,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 1585,
							columnNumber: 15
						}, this),
						activeFooterTab === "favorites" && /* @__PURE__ */ (void 0)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
									className: "font-bold text-sm text-[#2b2520]",
									children: "Favorite Tracks"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1737,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-[#8c827a]",
									children: [
										favorites.length,
										" ",
										favorites.length === 1 ? "song" : "songs",
										" saved"
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1740,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1736,
									columnNumber: 19
								}, this), favorites.length > 0 && favoriteTracksInPlaylist.length > 0 && /* @__PURE__ */ (void 0)("button", {
									onClick: () => playSongByName(favoriteTracksInPlaylist[0].name),
									className: "flex items-center gap-1.5 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]",
									children: [/* @__PURE__ */ (void 0)(CirclePlay, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1753,
										columnNumber: 25
									}, this), "Play Favorites"]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1747,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1735,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-1.5",
								children: [favorites.map((favName, i) => {
									const isCurrentPlaying = currentTrack?.name === favName;
									return /* @__PURE__ */ (void 0)("div", {
										className: `flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${isCurrentPlaying ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]" : "bg-white border-[#e8e2d9] text-[#2b2520]"}`,
										children: [/* @__PURE__ */ (void 0)("button", {
											onClick: () => playSongByName(favName),
											className: "flex items-center gap-2.5 min-w-0 flex-1 text-left",
											children: [/* @__PURE__ */ (void 0)(CirclePlay, { className: `size-4.5 ${isCurrentPlaying ? "text-[#6d5b97]" : "text-[#7a6f67]"}` }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1775,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "font-medium truncate",
													children: favName
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1779,
													columnNumber: 29
												}, this), isCurrentPlaying && /* @__PURE__ */ (void 0)("p", {
													className: "text-[10px] text-[#6d5b97] font-semibold",
													children: "Currently Playing"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1781,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1778,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1771,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => removeFavoriteByName(favName),
											className: "p-1 text-[#d14343] hover:bg-red-50 rounded-lg transition-colors ml-2",
											title: "Remove from favorites",
											children: /* @__PURE__ */ (void 0)(Heart, { className: "size-4 fill-[#d14343]" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1793,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1788,
											columnNumber: 25
										}, this)]
									}, i, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1763,
										columnNumber: 23
									}, this);
								}), favorites.length === 0 && /* @__PURE__ */ (void 0)("div", {
									className: "text-center py-10 space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "size-12 rounded-full bg-red-50 text-[#d14343] flex items-center justify-center mx-auto",
											children: /* @__PURE__ */ (void 0)(Heart, { className: "size-6 fill-[#d14343]" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1802,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1801,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-[#8c827a]",
											children: "No favorite tracks yet."
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1804,
											columnNumber: 23
										}, this),
										currentTrack && /* @__PURE__ */ (void 0)("button", {
											onClick: toggleFavorite,
											className: "inline-flex items-center gap-1.5 text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-4 py-2 rounded-xl hover:bg-[#dfd7e8] transition-colors",
											children: [/* @__PURE__ */ (void 0)(Heart, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1812,
												columnNumber: 27
											}, this), "Favorite Current Song"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1808,
											columnNumber: 25
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1800,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1759,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 1734,
							columnNumber: 15
						}, this),
						activeFooterTab === "albums" && /* @__PURE__ */ (void 0)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-4",
							children: selectedAlbumName ? (() => {
								const album = albumsList.find((a) => a.albumName === selectedAlbumName);
								if (!album) return null;
								return /* @__PURE__ */ (void 0)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("button", {
												onClick: () => setSelectedAlbumName(null),
												className: "text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1",
												children: "← Back to all albums"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1834,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-xs text-[#8c827a]",
												children: [
													album.tracks.length,
													" ",
													album.tracks.length === 1 ? "track" : "tracks"
												]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1840,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1833,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "size-12 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0",
													children: /* @__PURE__ */ (void 0)(Disc, { className: "size-6 animate-spin [animation-duration:8s]" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1848,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1847,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-bold text-sm text-[#2b2520] truncate",
														children: album.albumName
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1851,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#8c827a] truncate",
														children: album.artist
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1854,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 1850,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => {
														if (album.tracks.length > 0) {
															setCurrentIndex(album.tracks[0].index);
															showToast(`Playing "${album.albumName}"`);
														}
													},
													className: "flex items-center gap-1.5 px-3 py-1.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] shadow-xs",
													children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1867,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("span", { children: "Play All" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1868,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 1858,
													columnNumber: 27
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1846,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-1.5",
											children: album.tracks.map(({ file: trackFile, index: trackIdx }) => {
												const isCurrent = trackIdx === currentIndex;
												const meta = parseTrackMetadata(trackFile);
												return /* @__PURE__ */ (void 0)("div", {
													className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${isCurrent ? "bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]" : "bg-white border-[#e8e2d9] hover:bg-[#f6f2ec] text-[#2b2520]"}`,
													children: [/* @__PURE__ */ (void 0)("button", {
														onClick: () => setCurrentIndex(trackIdx),
														className: "flex items-center gap-2.5 min-w-0 flex-1 text-left",
														children: [/* @__PURE__ */ (void 0)(CirclePlay, { className: `size-4 ${isCurrent ? "text-[#6d5b97]" : "text-[#8c827a]"}` }, void 0, false, {
															fileName: _jsxFileName$7,
															lineNumber: 1890,
															columnNumber: 37
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (void 0)("p", {
																className: "font-medium truncate",
																children: meta.title
															}, void 0, false, {
																fileName: _jsxFileName$7,
																lineNumber: 1894,
																columnNumber: 39
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[10px] text-[#8c827a] truncate",
																children: meta.artist
															}, void 0, false, {
																fileName: _jsxFileName$7,
																lineNumber: 1897,
																columnNumber: 39
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName$7,
															lineNumber: 1893,
															columnNumber: 37
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$7,
														lineNumber: 1886,
														columnNumber: 35
													}, this), isCurrent && /* @__PURE__ */ (void 0)("span", {
														className: "text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full font-semibold",
														children: "Playing"
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1903,
														columnNumber: 37
													}, this)]
												}, trackIdx, true, {
													fileName: _jsxFileName$7,
													lineNumber: 1878,
													columnNumber: 33
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1872,
											columnNumber: 25
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1832,
									columnNumber: 23
								}, this);
							})() : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
								className: "p-3.5 rounded-2xl bg-gradient-to-r from-[#ece6f2] to-[#f4eff8] border border-[#ded5e5] flex items-center justify-between gap-3 shadow-xs",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3 min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "size-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#6d5b97] shrink-0",
										children: /* @__PURE__ */ (void 0)(Disc, { className: "size-6" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 1921,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1920,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] uppercase font-bold text-[#6d5b97] tracking-wider",
												children: "Now Playing Album"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1924,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("h4", {
												className: "font-bold text-sm text-[#2b2520] truncate",
												children: parsedMeta.album
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1927,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-[#685d55] truncate",
												children: parsedMeta.artist
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1930,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 1923,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1919,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: () => setSelectedAlbumName(parsedMeta.album),
									className: "px-3 py-1.5 rounded-xl bg-white text-[#6d5b97] text-xs font-semibold hover:bg-white/80 shadow-2xs shrink-0",
									children: "View Tracks"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 1936,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1918,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (void 0)("h4", {
									className: "text-xs font-semibold text-[#8c827a] uppercase tracking-wider",
									children: [
										"Available Albums (",
										albumsList.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1946,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-2",
									children: [albumsList.map((album) => {
										return /* @__PURE__ */ (void 0)("button", {
											onClick: () => setSelectedAlbumName(album.albumName),
											className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:scale-[1.01] ${parsedMeta.album === album.albumName ? "bg-white border-[#6d5b97]/60 shadow-xs ring-1 ring-[#6d5b97]/30" : "bg-white border-[#e8e2d9] hover:border-[#6d5b97]/40 shadow-xs"}`,
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3 min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0",
													children: /* @__PURE__ */ (void 0)(Disc, { className: "size-5" }, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1967,
														columnNumber: 35
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 1966,
													columnNumber: 33
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (void 0)("p", {
														className: "font-semibold text-sm text-[#2b2520] truncate",
														children: album.albumName
													}, void 0, false, {
														fileName: _jsxFileName$7,
														lineNumber: 1970,
														columnNumber: 35
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#8c827a] truncate",
														children: [
															album.artist,
															" • ",
															album.tracks.length,
															" ",
															album.tracks.length === 1 ? "track" : "tracks"
														]
													}, void 0, true, {
														fileName: _jsxFileName$7,
														lineNumber: 1973,
														columnNumber: 35
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$7,
													lineNumber: 1969,
													columnNumber: 33
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$7,
												lineNumber: 1965,
												columnNumber: 31
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-xs text-[#6d5b97] font-medium ml-2 shrink-0",
												children: "Browse →"
											}, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 1982,
												columnNumber: 31
											}, this)]
										}, album.albumName, true, {
											fileName: _jsxFileName$7,
											lineNumber: 1954,
											columnNumber: 29
										}, this);
									}), albumsList.length === 0 && /* @__PURE__ */ (void 0)("p", {
										className: "text-center py-8 text-xs text-[#8c827a]",
										children: "No albums found in current playlist"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 1990,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 1949,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1945,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 1916,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 1824,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 1520,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 1519,
				columnNumber: 9
			}, this),
			showPlaylist && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-t-3xl max-h-[70vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between p-4 border-b border-[#e8e2d9]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (void 0)(ListMusic, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 2010,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("h3", {
									className: "font-semibold text-base",
									children: "Playing Queue"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 2011,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("span", {
									className: "text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-2 py-0.5 rounded-full",
									children: playlist.length
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 2012,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 2009,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowPlaylist(false),
							className: "p-1 rounded-full hover:bg-black/5",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2020,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 2016,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 2008,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "overflow-y-auto p-3 space-y-1 divide-y divide-[#ece6f2]/50",
						children: [playlist.map((track, i) => {
							const isSelected = i === currentIndex;
							return /* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setCurrentIndex(i);
									setShowPlaylist(false);
								},
								className: `w-full flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-colors ${isSelected ? "bg-[#ece6f2] text-[#6d5b97] font-medium" : "hover:bg-black/5 text-[#3b322a]"}`,
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "w-5 text-center text-xs opacity-60",
										children: i + 1
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 2040,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex-1 truncate",
										children: /* @__PURE__ */ (void 0)("p", {
											className: "truncate",
											children: track.name
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2044,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 2043,
										columnNumber: 21
									}, this),
									isSelected && /* @__PURE__ */ (void 0)("span", {
										className: "flex gap-0.5 items-end h-4",
										children: [
											/* @__PURE__ */ (void 0)("span", { className: "w-0.5 h-3 bg-[#6d5b97] animate-pulse" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 2048,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("span", { className: "w-0.5 h-4 bg-[#6d5b97] animate-pulse delay-75" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 2049,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("span", { className: "w-0.5 h-2 bg-[#6d5b97] animate-pulse delay-150" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 2050,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 2047,
										columnNumber: 23
									}, this)
								]
							}, i, true, {
								fileName: _jsxFileName$7,
								lineNumber: 2028,
								columnNumber: 19
							}, this);
						}), playlist.length === 0 && /* @__PURE__ */ (void 0)("p", {
							className: "text-center py-8 text-xs text-[#8c827a]",
							children: "No songs in queue"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 2057,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 2024,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 2007,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 2006,
				columnNumber: 9
			}, this),
			showEqualizer && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2072,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-base",
								children: "Sound & Track Info"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2073,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 2071,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowEqualizer(false),
							className: "p-1 rounded-full hover:bg-black/5",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2079,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 2075,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 2070,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "bg-[#f1ebe3] p-3 rounded-xl text-xs space-y-1.5 text-[#5e534a]",
								children: [
									/* @__PURE__ */ (void 0)("p", {
										className: "font-medium text-[#2b2520] truncate",
										children: currentTrack?.name
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 2085,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (void 0)("span", { children: "File size:" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2089,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-mono",
											children: currentTrack ? `${(currentTrack.size / 1048576).toFixed(2)} MB` : "Unknown"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2090,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 2088,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (void 0)("span", { children: "Format:" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2097,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-mono uppercase",
											children: currentTrack?.name.split(".").pop() || "Audio"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2098,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 2096,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (void 0)("span", { children: "Length:" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2103,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-mono",
											children: formatTime(duration)
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2104,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 2102,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 2084,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold text-[#5e534a] mb-2",
								children: "Sound Profile Preset"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2109,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 gap-2 text-xs",
								children: [
									"Flat (Original)",
									"Bass Boost",
									"Vocal Enhance",
									"Treble Boost"
								].map((preset) => /* @__PURE__ */ (void 0)("button", {
									onClick: () => {
										setActivePreset(preset);
										showToast(`Preset: ${preset}`);
									},
									className: `p-2.5 rounded-lg border text-left transition-all ${activePreset === preset ? "border-[#6d5b97] bg-[#ece6f2] text-[#6d5b97] font-semibold" : "border-[#e0d8cd] hover:bg-black/5 text-[#4a423a]"}`,
									children: /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("span", { children: preset }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2132,
											columnNumber: 25
										}, this), activePreset === preset && /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 text-[#6d5b97]" }, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 2134,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 2131,
										columnNumber: 23
									}, this)
								}, preset, false, {
									fileName: _jsxFileName$7,
									lineNumber: 2119,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2112,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 2108,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowEqualizer(false),
								className: "w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] transition-colors",
								children: "Done"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2142,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 2083,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 2069,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 2068,
				columnNumber: 9
			}, this),
			showSleepTimer && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#fbf9f6] rounded-2xl w-full max-w-xs p-5 shadow-2xl animate-in zoom-in-95 duration-150",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 border-b border-[#e8e2d9]",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-5 text-[#6d5b97]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2159,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-base",
								children: "Sleep Timer"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2160,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 2158,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowSleepTimer(false),
							className: "p-1 rounded-full hover:bg-black/5",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2166,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 2162,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 2157,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "mt-3 space-y-1.5 text-xs",
						children: [
							{
								label: "Turn off timer",
								value: null
							},
							{
								label: "15 minutes",
								value: 15
							},
							{
								label: "30 minutes",
								value: 30
							},
							{
								label: "45 minutes",
								value: 45
							},
							{
								label: "60 minutes",
								value: 60
							}
						].map((opt) => /* @__PURE__ */ (void 0)("button", {
							onClick: () => setSleepTimer(opt.value),
							className: `w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${sleepTimerMinutes === opt.value ? "bg-[#ece6f2] text-[#6d5b97] font-semibold" : "hover:bg-black/5 text-[#3b322a]"}`,
							children: [/* @__PURE__ */ (void 0)("span", { children: opt.label }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2187,
								columnNumber: 19
							}, this), sleepTimerMinutes === opt.value && /* @__PURE__ */ (void 0)(Check, { className: "size-4 text-[#6d5b97]" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 2189,
								columnNumber: 21
							}, this)]
						}, String(opt.value), true, {
							fileName: _jsxFileName$7,
							lineNumber: 2178,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 2170,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 2156,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 2155,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 782,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/VideoPlayer.tsx";
function VideoPlayer({ tracks = [], file, initialIndex = 0, onClose, onSwitchToAudio }) {
	const playlist = (0, import_react.useMemo)(() => {
		if (tracks.length > 0) return tracks;
		if (file) return [file];
		return [];
	}, [tracks, file]);
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(Math.min(initialIndex, Math.max(0, playlist.length - 1)));
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
	const [stopAfterCurrentTrack, setStopAfterCurrentTrack] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("webna_player_volume");
			return saved !== null ? Number(saved) : 1;
		} catch {
			return 1;
		}
	});
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const prevVolumeRef = (0, import_react.useRef)(volume > 0 ? volume : .8);
	const [activeFooterTab, setActiveFooterTab] = (0, import_react.useState)(null);
	const [selectedVideoAlbumId, setSelectedVideoAlbumId] = (0, import_react.useState)(null);
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
			if (!map.has(albumName)) map.set(albumName, {
				id: `album-${albumName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
				title: albumName,
				description,
				thumbnailUrl: thumb,
				items: []
			});
			const entry = map.get(albumName);
			if (!entry.thumbnailUrl && "thumbnailUrl" in item) entry.thumbnailUrl = item.thumbnailUrl;
			entry.items.push({
				item,
				index
			});
		});
		return Array.from(map.values());
	}, [playlist]);
	const [toastMessage, setToastMessage] = (0, import_react.useState)(null);
	const toastTimeoutRef = (0, import_react.useRef)(null);
	const [showMoreMenu, setShowMoreMenu] = (0, import_react.useState)(false);
	const [showDetailsModal, setShowDetailsModal] = (0, import_react.useState)(false);
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
			return saved ? JSON.parse(saved) : [{
				id: "favs-default",
				name: "Featured Clips",
				createdAt: Date.now(),
				trackNames: []
			}];
		} catch {
			return [];
		}
	});
	const [newPlaylistName, setNewPlaylistName] = (0, import_react.useState)("");
	const [isCreatingPlaylist, setIsCreatingPlaylist] = (0, import_react.useState)(false);
	const [selectedPlaylistForAdd, setSelectedPlaylistForAdd] = (0, import_react.useState)(null);
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
	const [hasTriedFallback, setHasTriedFallback] = (0, import_react.useState)(false);
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
		console.warn("Video load error for:", activeVideoSrc, video?.error?.message);
		if (!hasTriedFallback && currentItem && "fallbackUrl" in currentItem && currentItem.fallbackUrl && activeVideoSrc !== currentItem.fallbackUrl) {
			setHasTriedFallback(true);
			setActiveVideoSrc(currentItem.fallbackUrl);
			showToast("Switching to backup video stream...");
			return;
		}
		setIsPlaying(false);
		if (currentItem && "name" in currentItem) setErrorMessage(`Unable to decode "${currentItem.name}". Your browser may not support this video format.`);
		else setErrorMessage("Video stream could not be loaded. Please check your connection or tap to retry.");
	}, [
		activeVideoSrc,
		hasTriedFallback,
		currentItem
	]);
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
		if (playPromise !== void 0) playPromise.then(() => {
			setIsPlaying(true);
			setErrorMessage(null);
		}).catch((err) => {
			console.warn("Autoplay deferred or awaiting user tap:", err?.message || err);
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
		if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
		if (isPlaying) hideControlsTimerRef.current = setTimeout(() => {
			setShowControls(false);
		}, 3500);
	}, [isPlaying]);
	(0, import_react.useEffect)(() => {
		resetHideTimer();
		return () => {
			if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
		};
	}, [isPlaying, resetHideTimer]);
	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			if (!video.src && activeVideoSrc) video.src = activeVideoSrc;
			if (video.error) video.load();
			video.play().then(() => {
				setIsPlaying(true);
				setErrorMessage(null);
			}).catch((err) => {
				console.warn("Video playback note:", err?.message || err);
				if (err?.name === "NotSupportedError" || String(err?.message).toLowerCase().includes("no supported sources")) handleVideoError();
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
			if (nextIdx === currentIndex && playlist.length > 1) nextIdx = (currentIndex + 1) % playlist.length;
			setCurrentIndex(nextIdx);
		} else setCurrentIndex((prev) => (prev + 1) % playlist.length);
	}, [
		playlist.length,
		isShuffle,
		currentIndex
	]);
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
			const newTime = Math.min(Math.max(0, videoRef.current.currentTime + seconds), duration || Infinity);
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
		const speeds = [
			.5,
			.75,
			1,
			1.25,
			1.5,
			2
		];
		const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
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
			const next = prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title];
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
			const restoreVol = prevVolumeRef.current > 0 ? prevVolumeRef.current : .8;
			setIsMuted(false);
			setVolume(restoreVol);
			if (videoRef.current) videoRef.current.volume = restoreVol;
			showToast(`Volume unmuted (${Math.round(restoreVol * 100)}%)`);
		} else {
			prevVolumeRef.current = volume > 0 ? volume : .8;
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
		} else if (repeatMode === "all" || currentIndex < playlist.length - 1) handleNext();
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: containerRef,
		onMouseMove: resetHideTimer,
		onClick: resetHideTimer,
		className: "fixed inset-0 z-[60] flex flex-col bg-black text-white select-none overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
				ref: videoRef,
				src: activeVideoSrc || void 0,
				playsInline: true,
				preload: "auto",
				className: "absolute inset-0 w-full h-full object-contain cursor-pointer",
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
				onError: handleVideoError
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 606,
				columnNumber: 7
			}, this),
			toastMessage && /* @__PURE__ */ (void 0)("div", {
				className: "absolute top-16 left-1/2 -translate-x-1/2 z-[90] bg-[#1a1715]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-fade-in pointer-events-none border border-white/10",
				children: toastMessage
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 632,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `relative z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => {
								if (videoRef.current) videoRef.current.pause();
								if (onSwitchToAudio) onSwitchToAudio();
								else onClose();
							},
							className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-all hover:bg-white/10",
							title: "Switch to Audio Player",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Music, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 659,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Audio player" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 660,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 647,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black shadow-xs transition-all",
							title: "Video Player (Active)",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Film, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 667,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Video player" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 668,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 663,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 646,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hidden sm:block min-w-0 flex-1 px-4 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-sm font-semibold truncate text-white drop-shadow-sm",
							children: currentTitle
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 674,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-white/70 truncate",
							children: [
								currentSubtitle,
								" • Track ",
								currentIndex + 1,
								" of ",
								playlist.length
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 677,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 673,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: togglePiP,
								className: "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
								title: "Picture in Picture",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PictureInPicture2, { className: "size-4.5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 689,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 684,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setShowMoreMenu(true),
								className: "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
								title: "Options",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EllipsisVertical, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 697,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 692,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: onClose,
								className: "p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors",
								title: "Close",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 705,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 700,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 683,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 638,
				columnNumber: 7
			}, this),
			!isPlaying && /* @__PURE__ */ (void 0)("button", {
				onClick: togglePlay,
				className: "absolute inset-0 z-10 m-auto size-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl",
				"aria-label": "Play video",
				children: /* @__PURE__ */ (void 0)(Play, { className: "size-10 fill-white text-white ml-1" }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 717,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 712,
				columnNumber: 9
			}, this),
			errorMessage && /* @__PURE__ */ (void 0)("div", {
				className: "absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 p-3 rounded-2xl bg-destructive/90 text-white text-xs backdrop-blur-md shadow-xl max-w-sm",
				children: [
					/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 shrink-0" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 724,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("span", {
						className: "flex-1 text-left",
						children: errorMessage
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 725,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("button", {
						onClick: () => {
							if (playlist.length > 1) handleNext();
							else if (videoRef.current) {
								videoRef.current.load();
								videoRef.current.play().catch(() => {});
							}
						},
						className: "px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-lg font-semibold shrink-0 transition-colors",
						children: playlist.length > 1 ? "Next Video" : "Retry"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 726,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 723,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1",
				onClick: togglePlay
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 743,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `relative z-20 flex flex-col gap-2.5 px-4 pt-6 pb-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-mono text-white/80 min-w-[42px] text-right",
								children: formatTime(progress)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 755,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative flex-1 group flex items-center h-6 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "range",
									min: 0,
									max: duration || 100,
									step: .1,
									value: progress,
									onChange: (e) => handleSeek(parseFloat(e.target.value)),
									className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none transition-all group-hover:h-2.5"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 760,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 759,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-mono text-white/60 min-w-[42px]",
								children: formatTime(duration)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 771,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 754,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: cycleRepeatMode,
										className: `p-2 rounded-xl transition-all ${repeatMode !== "off" ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"}`,
										title: `Repeat: ${repeatMode}`,
										children: repeatMode === "one" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Repeat1, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 790,
											columnNumber: 17
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Repeat, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 792,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 780,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => {
											setIsShuffle((s) => !s);
											showToast(!isShuffle ? "Shuffle On" : "Shuffle Off");
										},
										className: `p-2 rounded-xl transition-all ${isShuffle ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"}`,
										title: "Shuffle",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shuffle, { className: "size-4.5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 808,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 796,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: cycleSpeed,
										className: "px-2 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors",
										title: "Playback speed",
										children: [playbackSpeed, "x"]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 811,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 779,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: handlePrev,
										className: "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
										title: "Previous Video",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkipBack, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 827,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 822,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => handleSkip(-10),
										className: "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
										title: "Rewind 10s",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 835,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 830,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: togglePlay,
										className: "size-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg",
										title: isPlaying ? "Pause" : "Play",
										children: isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "size-6 fill-black" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 844,
											columnNumber: 17
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-6 fill-black ml-0.5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 846,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 838,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => handleSkip(10),
										className: "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
										title: "Forward 10s",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCw, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 855,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 850,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: handleNext,
										className: "p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all",
										title: "Next Video",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkipForward, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 863,
											columnNumber: 15
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 858,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 821,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => toggleFavorite(currentTitle),
									className: `p-2 rounded-xl transition-all ${isFavorite ? "text-red-500 hover:text-red-400" : "text-white/60 hover:text-white"}`,
									title: isFavorite ? "Remove from Favorites" : "Add to Favorites",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: `size-5 ${isFavorite ? "fill-current" : ""}` }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 878,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 869,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: toggleFullscreen,
									className: "p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/15 transition-all",
									title: isFullscreen ? "Exit Fullscreen" : "Fullscreen",
									children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 887,
										columnNumber: 17
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 889,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 881,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 868,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 777,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-4 pt-2 border-t border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 max-w-[200px] w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: toggleMute,
									className: "p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
									title: isMuted ? "Unmute" : "Mute",
									children: isMuted || volume === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VolumeX, { className: "size-4 text-red-400" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 905,
										columnNumber: 17
									}, this) : volume < .5 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume1, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 907,
										columnNumber: 17
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 909,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 899,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "range",
									min: 0,
									max: 1,
									step: .01,
									value: isMuted ? 0 : volume,
									onChange: handleVolumeChange,
									className: "w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none",
									title: `Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 913,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-mono text-white/60 min-w-[32px]",
									children: [Math.round((isMuted ? 0 : volume) * 100), "%"]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 924,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 898,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5 sm:gap-2 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setActiveFooterTab(activeFooterTab === "playlists" ? null : "playlists"),
									className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
									title: "View playlists",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListMusic, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 945,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Playlist" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 946,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 932,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setActiveFooterTab(activeFooterTab === "favorites" ? null : "favorites"),
									className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
									title: "View favorites",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: "size-3.5 fill-current text-red-500" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 963,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Favorites" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 964,
											columnNumber: 15
										}, this),
										favorites.length > 0 && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] bg-red-500/20 text-red-300 font-bold px-1.5 py-0.2 rounded-full",
											children: favorites.length
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 966,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 950,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => {
										setSelectedVideoAlbumId(null);
										setActiveFooterTab(activeFooterTab === "albums" ? null : "albums");
									},
									className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-black shadow-md" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"}`,
									title: "View video albums",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disc, { className: "size-3.5 text-brand" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 987,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Albums" }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 988,
											columnNumber: 15
										}, this),
										videoAlbums.length > 0 && /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] bg-white/20 text-white font-bold px-1.5 py-0.2 rounded-full",
											children: videoAlbums.length
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 990,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 973,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 930,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 896,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 746,
				columnNumber: 7
			}, this),
			activeFooterTab && /* @__PURE__ */ (void 0)("div", {
				className: "absolute inset-x-0 bottom-0 z-50 max-h-[75vh] flex flex-col bg-[#141210] border-t border-white/15 rounded-t-3xl shadow-2xl p-5 text-white animate-in slide-in-from-bottom duration-300",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between pb-3 border-b border-white/10",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-1 bg-white/10 p-1 rounded-xl",
						children: [
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => setActiveFooterTab("playlists"),
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "playlists" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
								children: [/* @__PURE__ */ (void 0)(ListMusic, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1012,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Playlist" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1013,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1004,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => setActiveFooterTab("favorites"),
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "favorites" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
								children: [
									/* @__PURE__ */ (void 0)(Heart, { className: "size-3.5 fill-current text-red-500" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1024,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { children: "Favorites" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1025,
										columnNumber: 17
									}, this),
									favorites.length > 0 && /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded-full",
										children: favorites.length
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1027,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1016,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setActiveFooterTab("albums");
									setSelectedVideoAlbumId(null);
								},
								className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeFooterTab === "albums" ? "bg-white text-black shadow-xs" : "text-white/70 hover:text-white"}`,
								children: [
									/* @__PURE__ */ (void 0)(Disc, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1044,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { children: "Albums" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1045,
										columnNumber: 17
									}, this),
									videoAlbums.length > 0 && /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] bg-white/20 text-white px-1.5 rounded-full",
										children: videoAlbums.length
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1047,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1033,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 1003,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("button", {
						onClick: () => setActiveFooterTab(null),
						className: "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 1058,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 1054,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 1002,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex-1 overflow-y-auto py-3 space-y-3",
					children: activeFooterTab === "favorites" ? favorites.length === 0 ? /* @__PURE__ */ (void 0)("div", {
						className: "text-center py-8 text-white/50 text-xs",
						children: "No favorite videos yet. Tap the heart icon while watching to add videos to your favorites."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 1065,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (void 0)("div", {
						className: "space-y-1.5",
						children: favorites.map((favTitle, idx) => {
							const matchIndex = playlist.findIndex((p) => getItemTitle(p) === favTitle);
							return /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: () => {
										if (matchIndex !== -1) {
											setCurrentIndex(matchIndex);
											setActiveFooterTab(null);
										} else showToast(`Video "${favTitle}" is not in current queue`);
									},
									className: "flex-1 min-w-0 text-left",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "text-sm font-semibold truncate",
										children: favTitle
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1093,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-white/50",
										children: matchIndex !== -1 ? "Tap to play from queue" : "Saved favorite"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1096,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1080,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: () => toggleFavorite(favTitle),
									className: "p-2 text-red-400 hover:text-red-300",
									title: "Remove favorite",
									children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1108,
										columnNumber: 27
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1103,
									columnNumber: 25
								}, this)]
							}, idx, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1076,
								columnNumber: 23
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 1070,
						columnNumber: 17
					}, this) : activeFooterTab === "albums" ? /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4",
						children: selectedVideoAlbumId ? (() => {
							const album = videoAlbums.find((a) => a.id === selectedVideoAlbumId);
							if (!album) return null;
							return /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("button", {
											onClick: () => setSelectedVideoAlbumId(null),
											className: "text-xs font-medium text-brand hover:underline flex items-center gap-1",
											children: "← Back to all video albums"
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1126,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-white/50",
											children: [
												album.items.length,
												" ",
												album.items.length === 1 ? "video" : "videos"
											]
										}, void 0, true, {
											fileName: _jsxFileName$6,
											lineNumber: 1132,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1125,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15",
										children: [
											album.thumbnailUrl ? /* @__PURE__ */ (void 0)("img", {
												src: album.thumbnailUrl,
												alt: album.title,
												referrerPolicy: "no-referrer",
												crossOrigin: "anonymous",
												className: "size-14 rounded-xl object-cover shrink-0"
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1141,
												columnNumber: 29
											}, this) : /* @__PURE__ */ (void 0)("div", {
												className: "size-14 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
												children: /* @__PURE__ */ (void 0)(Film, { className: "size-7" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1150,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1149,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("h4", {
													className: "font-bold text-sm text-white truncate",
													children: album.title
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1154,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-white/60 truncate mt-0.5",
													children: album.description
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1157,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$6,
												lineNumber: 1153,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													if (album.items.length > 0) {
														setCurrentIndex(album.items[0].index);
														showToast(`Playing "${album.title}"`);
													}
												},
												className: "flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0",
												children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-black ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1170,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Play All" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1171,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$6,
												lineNumber: 1161,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1139,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: album.items.map(({ item, index }) => {
											const isCurrent = index === currentIndex;
											const title = getItemTitle(item);
											const subtitle = getItemSubtitle(item);
											return /* @__PURE__ */ (void 0)("div", {
												className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${isCurrent ? "bg-white/20 border-white/40 text-white" : "bg-white/5 border-white/10 hover:bg-white/10 text-white"}`,
												children: [/* @__PURE__ */ (void 0)("button", {
													onClick: () => {
														setCurrentIndex(index);
														setActiveFooterTab(null);
													},
													className: "flex items-center gap-3 min-w-0 flex-1 text-left",
													children: ["thumbnailUrl" in item ? /* @__PURE__ */ (void 0)("img", {
														src: item.thumbnailUrl,
														alt: title,
														referrerPolicy: "no-referrer",
														crossOrigin: "anonymous",
														className: "w-12 h-8 rounded-lg object-cover shrink-0"
													}, void 0, false, {
														fileName: _jsxFileName$6,
														lineNumber: 1198,
														columnNumber: 37
													}, this) : /* @__PURE__ */ (void 0)("div", {
														className: "size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0",
														children: /* @__PURE__ */ (void 0)(Film, { className: "size-4 text-white/60" }, void 0, false, {
															fileName: _jsxFileName$6,
															lineNumber: 1207,
															columnNumber: 39
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$6,
														lineNumber: 1206,
														columnNumber: 37
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "font-semibold text-xs truncate",
															children: title
														}, void 0, false, {
															fileName: _jsxFileName$6,
															lineNumber: 1211,
															columnNumber: 37
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-white/50 truncate",
															children: subtitle
														}, void 0, false, {
															fileName: _jsxFileName$6,
															lineNumber: 1214,
															columnNumber: 37
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName$6,
														lineNumber: 1210,
														columnNumber: 35
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$6,
													lineNumber: 1190,
													columnNumber: 33
												}, this), isCurrent ? /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] bg-brand text-brand-foreground px-2 py-0.5 rounded-full font-semibold ml-2",
													children: "Playing"
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1220,
													columnNumber: 35
												}, this) : /* @__PURE__ */ (void 0)("button", {
													onClick: () => {
														setCurrentIndex(index);
														setActiveFooterTab(null);
													},
													className: "p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white ml-2",
													title: "Play this video",
													children: /* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current ml-0.5" }, void 0, false, {
														fileName: _jsxFileName$6,
														lineNumber: 1232,
														columnNumber: 37
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1224,
													columnNumber: 35
												}, this)]
											}, index, true, {
												fileName: _jsxFileName$6,
												lineNumber: 1182,
												columnNumber: 31
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1176,
										columnNumber: 25
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1124,
								columnNumber: 23
							}, this);
						})() : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
							className: "p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-3 min-w-0 flex-1",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
									children: /* @__PURE__ */ (void 0)(Disc, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1248,
										columnNumber: 27
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1247,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] uppercase font-bold text-brand tracking-wider",
											children: "Current Video Album / Channel"
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1251,
											columnNumber: 27
										}, this),
										/* @__PURE__ */ (void 0)("h4", {
											className: "font-bold text-sm text-white truncate",
											children: currentItem && "channel" in currentItem ? currentItem.channel : "Uploaded Video Library"
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1254,
											columnNumber: 27
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-white/60 truncate",
											children: currentTitle
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1259,
											columnNumber: 27
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1250,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1246,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									const targetAlbum = videoAlbums.find((a) => a.items.some((it) => it.index === currentIndex));
									if (targetAlbum) setSelectedVideoAlbumId(targetAlbum.id);
								},
								className: "px-3 py-1.5 rounded-xl bg-white text-black text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shrink-0",
								children: "View Album"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1265,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1245,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (void 0)("h4", {
								className: "text-xs font-semibold text-white/60 uppercase tracking-wider",
								children: [
									"Available Video Albums (",
									videoAlbums.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1282,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 gap-2",
								children: [videoAlbums.map((album) => {
									return /* @__PURE__ */ (void 0)("button", {
										onClick: () => setSelectedVideoAlbumId(album.id),
										className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:bg-white/10 ${album.items.some((it) => it.index === currentIndex) ? "bg-white/10 border-brand/50 ring-1 ring-brand/30" : "bg-white/5 border-white/10"}`,
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 min-w-0 flex-1",
											children: [album.thumbnailUrl ? /* @__PURE__ */ (void 0)("img", {
												src: album.thumbnailUrl,
												alt: album.title,
												referrerPolicy: "no-referrer",
												crossOrigin: "anonymous",
												className: "size-11 rounded-xl object-cover shrink-0"
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1302,
												columnNumber: 35
											}, this) : /* @__PURE__ */ (void 0)("div", {
												className: "size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0",
												children: /* @__PURE__ */ (void 0)(Film, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1311,
													columnNumber: 37
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1310,
												columnNumber: 35
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("p", {
													className: "font-semibold text-sm text-white truncate",
													children: album.title
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1315,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-white/60 truncate",
													children: [
														album.items.length,
														" ",
														album.items.length === 1 ? "video" : "videos",
														" ",
														"• ",
														album.description
													]
												}, void 0, true, {
													fileName: _jsxFileName$6,
													lineNumber: 1318,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$6,
												lineNumber: 1314,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$6,
											lineNumber: 1300,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-brand font-medium ml-2 shrink-0",
											children: "Browse →"
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1328,
											columnNumber: 31
										}, this)]
									}, album.id, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1291,
										columnNumber: 29
									}, this);
								}), videoAlbums.length === 0 && /* @__PURE__ */ (void 0)("p", {
									className: "text-center py-8 text-xs text-white/50",
									children: "No video albums available"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1336,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1285,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1281,
							columnNumber: 21
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1243,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 1116,
						columnNumber: 15
					}, this) : /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("input", {
								type: "text",
								placeholder: "New playlist name...",
								value: newPlaylistName,
								onChange: (e) => setNewPlaylistName(e.target.value),
								className: "flex-1 px-3 py-2 bg-white/10 rounded-xl text-sm border border-white/15 focus:outline-none focus:border-white/40 text-white"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1349,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									if (!newPlaylistName.trim()) return;
									const newP = {
										id: `pl-${Date.now()}`,
										name: newPlaylistName.trim(),
										createdAt: Date.now(),
										trackNames: [currentTitle]
									};
									const next = [...playlists, newP];
									setPlaylists(next);
									localStorage.setItem("webna_video_playlists", JSON.stringify(next));
									setNewPlaylistName("");
									showToast(`Created "${newP.name}"`);
								},
								className: "flex items-center gap-1.5 px-3 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all",
								children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1376,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Create" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1377,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1356,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1348,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: playlists.map((pl) => /* @__PURE__ */ (void 0)("div", {
								className: "p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
										className: "text-sm font-semibold",
										children: pl.name
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1389,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-white/50",
										children: [
											pl.trackNames.length,
											" ",
											pl.trackNames.length === 1 ? "video" : "videos"
										]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1390,
										columnNumber: 27
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1388,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (void 0)("button", {
											onClick: () => {
												if (pl.trackNames.includes(currentTitle)) {
													showToast("Video already in this playlist");
													return;
												}
												const updated = playlists.map((p) => p.id === pl.id ? {
													...p,
													trackNames: [...p.trackNames, currentTitle]
												} : p);
												setPlaylists(updated);
												localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
												showToast(`Added to "${pl.name}"`);
											},
											className: "flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg",
											children: [/* @__PURE__ */ (void 0)(FolderPlus, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1422,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Add Current" }, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1423,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$6,
											lineNumber: 1396,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => {
												const updated = playlists.filter((p) => p.id !== pl.id);
												setPlaylists(updated);
												localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
												showToast(`Deleted "${pl.name}"`);
											},
											className: "p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors",
											title: "Delete playlist",
											children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1440,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 1425,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 1395,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1387,
									columnNumber: 23
								}, this), pl.trackNames.length > 0 && /* @__PURE__ */ (void 0)("div", {
									className: "pt-2 border-t border-white/10 space-y-1",
									children: pl.trackNames.map((tName, i) => {
										const matchIdx = playlist.findIndex((p) => getItemTitle(p) === tName);
										return /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between p-1.5 rounded-lg bg-white/5 text-xs hover:bg-white/10",
											children: [/* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													if (matchIdx !== -1) {
														setCurrentIndex(matchIdx);
														setActiveFooterTab(null);
													} else showToast(`Video "${tName}" is not in current queue`);
												},
												className: "flex items-center gap-2 min-w-0 flex-1 text-left",
												children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3 text-brand shrink-0 ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1470,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "truncate",
													children: tName
												}, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1471,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$6,
												lineNumber: 1457,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													const updated = playlists.map((p) => p.id === pl.id ? {
														...p,
														trackNames: p.trackNames.filter((_, idx) => idx !== i)
													} : p);
													setPlaylists(updated);
													localStorage.setItem("webna_video_playlists", JSON.stringify(updated));
												},
												className: "p-1 text-white/40 hover:text-red-400",
												title: "Remove video from playlist",
												children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 1494,
													columnNumber: 35
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 1473,
												columnNumber: 33
											}, this)]
										}, i, true, {
											fileName: _jsxFileName$6,
											lineNumber: 1453,
											columnNumber: 31
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1447,
									columnNumber: 25
								}, this)]
							}, pl.id, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1383,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 1381,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 1347,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 1062,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 1001,
				columnNumber: 9
			}, this),
			showMoreMenu && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[80] bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full max-w-sm bg-[#1a1715] border border-white/15 rounded-3xl p-4 shadow-2xl text-white space-y-2 animate-in zoom-in-95 duration-200",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-2 border-b border-white/10",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "min-w-0 pr-2",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-semibold truncate",
									children: currentTitle
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1516,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-white/60",
									children: "Options"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1517,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 1515,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowMoreMenu(false),
								className: "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1523,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1519,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1514,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: () => {
								setShowMoreMenu(false);
								setShowDetailsModal(true);
							},
							className: "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
							children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-4.5 text-brand" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1534,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Video details & specs" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1535,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1527,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: () => {
								setStopAfterCurrentTrack((prev) => {
									showToast(!prev ? "Will stop after this video finishes" : "Stop after video cancelled");
									return !prev;
								});
								setShowMoreMenu(false);
							},
							className: "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
							children: [/* @__PURE__ */ (void 0)(Clock, { className: "size-4.5 text-amber-400" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1552,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: stopAfterCurrentTrack ? "Cancel Stop After Video" : "Stop after this video" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1553,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1538,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: async () => {
								setShowMoreMenu(false);
								if (navigator.share) try {
									await navigator.share({
										title: currentTitle,
										text: `Watching ${currentTitle} on WebNa Video Player`
									});
								} catch {}
								else {
									await navigator.clipboard.writeText(currentTitle);
									showToast("Video title copied to clipboard");
								}
							},
							className: "flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left",
							children: [/* @__PURE__ */ (void 0)(Share2, { className: "size-4.5 text-blue-400" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1579,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Share video" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1580,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1560,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 1513,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 1512,
				columnNumber: 9
			}, this),
			showDetailsModal && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full max-w-sm bg-[#1c1917] border border-white/15 rounded-3xl p-5 shadow-2xl text-white space-y-3",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-2 border-b border-white/10",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "text-base font-semibold",
								children: "Video Details"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1591,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => setShowDetailsModal(false),
								className: "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 1596,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 1592,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1590,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "text-xs space-y-2 text-white/80",
							children: [
								/* @__PURE__ */ (void 0)("p", { children: [
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-white",
										children: "Title:"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1601,
										columnNumber: 17
									}, this),
									" ",
									currentTitle
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1600,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("p", { children: [
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-white",
										children: "Duration:"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1604,
										columnNumber: 17
									}, this),
									" ",
									formatTime(duration)
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1603,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("p", { children: [
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-white",
										children: "Source:"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1608,
										columnNumber: 17
									}, this),
									" ",
									"channel" in (currentItem || {}) ? "Streaming Catalog" : "Device Storage"
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1607,
									columnNumber: 15
								}, this),
								"quality" in (currentItem || {}) && /* @__PURE__ */ (void 0)("p", { children: [
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-white",
										children: "Quality:"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1615,
										columnNumber: 19
									}, this),
									" ",
									currentItem.quality
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1614,
									columnNumber: 17
								}, this),
								"size" in (currentItem || {}) && /* @__PURE__ */ (void 0)("p", { children: [
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-white",
										children: "File Size:"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 1621,
										columnNumber: 19
									}, this),
									" ",
									((currentItem.size || 0) / 1048576).toFixed(2),
									" ",
									"MB"
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 1620,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 1599,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: () => setShowDetailsModal(false),
							className: "w-full py-2 bg-white text-black text-xs font-semibold rounded-xl mt-2",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 1629,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 1589,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 1588,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 599,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/AudioPlayerPanel.tsx";
function AudioPlayerPanel({ playerMode: externalPlayerMode, onPlayerModeChange, initialVideoQueue, initialVideoIndex, onCloseVideo, onOpenUrl }) {
	const [internalPlayerMode, setInternalPlayerMode] = (0, import_react.useState)("audio");
	const currentMode = externalPlayerMode ?? internalPlayerMode;
	const setPlayerMode = (mode) => {
		if (onPlayerModeChange) onPlayerModeChange(mode);
		else setInternalPlayerMode(mode);
	};
	const [audioTab, setAudioTab] = (0, import_react.useState)("foryou");
	const [audioTracks, setAudioTracks] = (0, import_react.useState)([]);
	const [localAudioTracks, setLocalAudioTracks] = (0, import_react.useState)([]);
	const [selectedAudioNames, setSelectedAudioNames] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [activeAudioQueue, setActiveAudioQueue] = (0, import_react.useState)(null);
	const [playingAudioIndex, setPlayingAudioIndex] = (0, import_react.useState)(null);
	const [musicQuery, setMusicQuery] = (0, import_react.useState)("");
	const [searchResults, setSearchResults] = (0, import_react.useState)([]);
	const [isSearching, setIsSearching] = (0, import_react.useState)(false);
	const [selectedMusicPlatform, setSelectedMusicPlatform] = (0, import_react.useState)("spotify");
	const handleMusicSearch = async (e, overrideQuery, overridePlatform) => {
		if (e) e.preventDefault();
		const query = (overrideQuery ?? musicQuery).trim();
		const platformToSearch = overridePlatform ?? selectedMusicPlatform;
		if (!query) {
			setSearchResults([]);
			setIsSearching(false);
			return;
		}
		setIsSearching(true);
		try {
			const results = await searchMusicTracks({ data: {
				term: query,
				platform: platformToSearch
			} });
			setSearchResults(results);
		} catch (err) {
			console.error("Music search error:", err);
			const lower = query.toLowerCase();
			const filtered = audioTracks.filter((t) => t.title.toLowerCase().includes(lower) || t.artist.toLowerCase().includes(lower));
			setSearchResults(filtered);
		} finally {
			setIsSearching(false);
		}
	};
	const handleSelectPlatform = async (pId) => {
		setSelectedMusicPlatform(pId);
		const trimmed = musicQuery.trim();
		if (trimmed) handleMusicSearch(void 0, trimmed, pId);
		else {
			const query = {
				all: "Top Hits 2026",
				spotify: "Today's Top Hits",
				apple: "Apple Music Top Hits",
				itunes: "iTunes Top 40",
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
				audiomack: "Hip-Hop Hits"
			}[pId] || "Top Hits";
			setIsSearching(true);
			try {
				const results = await searchMusicTracks({ data: {
					term: query,
					platform: pId
				} });
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
	const [localVideoTracks, setLocalVideoTracks] = (0, import_react.useState)([]);
	const [selectedVideoNames, setSelectedVideoNames] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [activeVideoQueue, setActiveVideoQueue] = (0, import_react.useState)(null);
	const [playingVideoIndex, setPlayingVideoIndex] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (currentMode === "audio" && audioTab === "foryou") getTrendingTracks().then(setAudioTracks);
	}, [currentMode, audioTab]);
	(0, import_react.useEffect)(() => {
		if (currentMode === "video" && videoTab === "foryou") getTrendingVideos().then(setVideoTracks);
	}, [currentMode, videoTab]);
	(0, import_react.useEffect)(() => {
		if (initialVideoQueue && initialVideoQueue.length > 0) {
			setActiveVideoQueue(initialVideoQueue);
			setPlayingVideoIndex(initialVideoIndex ?? 0);
		}
	}, [initialVideoQueue, initialVideoIndex]);
	const [pageFooterModal, setPageFooterModal] = (0, import_react.useState)(null);
	const [selectedAlbumItem, setSelectedAlbumItem] = (0, import_react.useState)(null);
	const [selectedPlaylistDetailId, setSelectedPlaylistDetailId] = (0, import_react.useState)(null);
	const [newPlaylistInput, setNewPlaylistInput] = (0, import_react.useState)("");
	const [audioPlaylists, setAudioPlaylists] = (0, import_react.useState)(() => {
		try {
			const saved = localStorage.getItem("webna_user_playlists");
			if (saved) return JSON.parse(saved);
		} catch {}
		return [{
			id: "default-1",
			name: "My Favorite Mix",
			trackNames: []
		}, {
			id: "default-2",
			name: "Chill & Focus",
			trackNames: []
		}];
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
		return [{
			id: "favs-default",
			name: "Featured Clips",
			trackNames: []
		}];
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
			if (!map.has(album)) map.set(album, {
				albumName: album,
				artist,
				tracks: []
			});
			map.get(album).tracks.push({
				title,
				file
			});
		});
		audioTracks.forEach((t) => {
			const album = `${t.artist} Essentials`;
			if (!map.has(album)) map.set(album, {
				albumName: album,
				artist: t.artist,
				tracks: []
			});
			map.get(album).tracks.push({
				title: t.title,
				trending: t
			});
		});
		return Array.from(map.values());
	}, [localAudioTracks, audioTracks]);
	const videoAlbums = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		videoTracks.forEach((v) => {
			const ch = v.channel || "Curated Collection";
			if (!map.has(ch)) map.set(ch, {
				albumName: ch,
				description: `${ch} Video Series`,
				thumbnailUrl: v.thumbnailUrl,
				items: []
			});
			map.get(ch).items.push(v);
		});
		if (localVideoTracks.length > 0) map.set("My Uploaded Videos", {
			albumName: "My Uploaded Videos",
			description: "Videos from your phone storage",
			items: localVideoTracks
		});
		return Array.from(map.values());
	}, [videoTracks, localVideoTracks]);
	const handleCreateNewPlaylist = (e) => {
		e.preventDefault();
		const name = newPlaylistInput.trim();
		if (!name) return;
		if (currentMode === "audio") {
			const updated = [{
				id: `pl-${Date.now()}`,
				name,
				trackNames: []
			}, ...audioPlaylists];
			setAudioPlaylists(updated);
			try {
				localStorage.setItem("webna_user_playlists", JSON.stringify(updated));
			} catch (err) {
				console.error(err);
			}
		} else {
			const updated = [{
				id: `vpl-${Date.now()}`,
				name,
				trackNames: []
			}, ...videoPlaylists];
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
		const local = localAudioTracks.find((f) => f.name === songName || f.name.replace(/\.[^/.]+$/, "") === songName || f.name.toLowerCase() === songName.toLowerCase());
		if (local) return local;
		const trending = audioTracks.find((t) => t.title === songName || `${t.artist} - ${t.title}` === songName || t.title.toLowerCase().includes(songName.toLowerCase()));
		if (trending) return trending;
		const searched = searchResults.find((t) => t.title === songName || t.title.toLowerCase().includes(songName.toLowerCase()));
		if (searched) return searched;
		return {
			title: songName,
			artist: "Popular Artist",
			coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80",
			rank: 1,
			previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
		};
	};
	const playSongByName = (songName) => {
		const localIdx = localAudioTracks.findIndex((f) => f.name === songName || f.name.replace(/\.[^/.]+$/, "") === songName || f.name.toLowerCase() === songName.toLowerCase());
		if (localIdx !== -1) {
			playFromAudioTracks(localAudioTracks, localIdx);
			setPageFooterModal(null);
			return;
		}
		const trendingIdx = audioTracks.findIndex((t) => t.title === songName || `${t.artist} - ${t.title}` === songName || t.title.toLowerCase().includes(songName.toLowerCase()));
		if (trendingIdx !== -1) {
			playFromAudioTracks(audioTracks, trendingIdx);
			setPageFooterModal(null);
			return;
		}
		const searchIdx = searchResults.findIndex((t) => t.title === songName || t.title.toLowerCase().includes(songName.toLowerCase()));
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
		playFromAudioTracks(queue, Math.max(0, Math.min(startIndex, queue.length - 1)));
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
			const next = prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name];
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
			const next = prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name];
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
						trackNames: [...p.trackNames, trackName]
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
						trackNames: [...p.trackNames, trackName]
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
				if (p.id === playlistId) return {
					...p,
					trackNames: p.trackNames.filter((t) => t !== trackName)
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
				if (p.id === playlistId) return {
					...p,
					trackNames: p.trackNames.filter((t) => t !== trackName)
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
			const uniqueNew = added.filter((f) => !existingKeys.has(`${f.name}-${f.size}`));
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
		if (selectedAudioNames.size === localAudioTracks.length) setSelectedAudioNames(/* @__PURE__ */ new Set());
		else setSelectedAudioNames(new Set(localAudioTracks.map((f) => f.name)));
	};
	const removeLocalAudioTrack = (index) => {
		const trackToRemove = localAudioTracks[index];
		setLocalAudioTracks((prev) => prev.filter((_, i) => i !== index));
		if (trackToRemove) setSelectedAudioNames((prev) => {
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
		const queue = localAudioTracks.filter((t) => selectedAudioNames.has(t.name));
		if (queue.length > 0) playFromAudioTracks(queue, 0);
		else if (localAudioTracks.length > 0) playFromAudioTracks(localAudioTracks, 0);
	};
	const handlePlaySingleAudio = (index) => {
		const targetFile = localAudioTracks[index];
		const selectedList = localAudioTracks.filter((t) => selectedAudioNames.has(t.name));
		if (selectedList.length > 1 && selectedAudioNames.has(targetFile.name)) {
			const startIdx = selectedList.findIndex((t) => t.name === targetFile.name);
			playFromAudioTracks(selectedList, Math.max(0, startIdx));
		} else playFromAudioTracks(localAudioTracks, index);
	};
	const handleVideoFilesAdded = (files) => {
		if (!files || files.length === 0) return;
		const added = Array.from(files);
		setLocalVideoTracks((prev) => {
			const existingKeys = new Set(prev.map((f) => `${f.name}-${f.size}`));
			const uniqueNew = added.filter((f) => !existingKeys.has(`${f.name}-${f.size}`));
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
		if (selectedVideoNames.size === localVideoTracks.length) setSelectedVideoNames(/* @__PURE__ */ new Set());
		else setSelectedVideoNames(new Set(localVideoTracks.map((f) => f.name)));
	};
	const removeLocalVideoTrack = (index) => {
		const videoToRemove = localVideoTracks[index];
		setLocalVideoTracks((prev) => prev.filter((_, i) => i !== index));
		if (videoToRemove) setSelectedVideoNames((prev) => {
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
		const queue = localVideoTracks.filter((t) => selectedVideoNames.has(t.name));
		if (queue.length > 0) playFromVideoTracks(queue, 0);
		else if (localVideoTracks.length > 0) playFromVideoTracks(localVideoTracks, 0);
	};
	const handlePlaySingleVideo = (index) => {
		const targetFile = localVideoTracks[index];
		const selectedList = localVideoTracks.filter((t) => selectedVideoNames.has(t.name));
		if (selectedList.length > 1 && selectedVideoNames.has(targetFile.name)) {
			const startIdx = selectedList.findIndex((t) => t.name === targetFile.name);
			playFromVideoTracks(selectedList, Math.max(0, startIdx));
		} else playFromVideoTracks(localVideoTracks, index);
	};
	const selectedAudioCount = selectedAudioNames.size;
	const isAllAudioSelected = localAudioTracks.length > 0 && selectedAudioCount === localAudioTracks.length;
	const selectedVideoCount = selectedVideoNames.size;
	const isAllVideoSelected = localVideoTracks.length > 0 && selectedVideoCount === localVideoTracks.length;
	const currentPlaylistsCount = currentMode === "audio" ? audioPlaylists.length : videoPlaylists.length;
	const currentFavoritesCount = currentMode === "audio" ? audioFavorites.length : videoFavorites.length;
	const currentAlbumsCount = currentMode === "audio" ? audioAlbums.length : videoAlbums.length;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col h-full select-none",
			children: [pageFooterModal ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 overflow-y-auto min-h-0 space-y-4 px-4 py-3",
				children: [
					pageFooterModal === "favorites" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("button", {
								onClick: () => setPageFooterModal(null),
								className: "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
								children: [/* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 861,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Back to Player" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 862,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 857,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: [
									currentMode === "audio" ? "Audio Favorites" : "Video Favorites",
									" ",
									"(",
									currentMode === "audio" ? audioFavorites.length : videoFavorites.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 864,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 856,
							columnNumber: 17
						}, this), (currentMode === "audio" ? audioFavorites : videoFavorites).length > 0 ? /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground font-medium",
								children: currentMode === "audio" ? "Your favorited songs" : "Your favorited videos"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 880,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									if (currentMode === "audio") {
										if (audioFavorites.length > 0) playSongByName(audioFavorites[0]);
									} else if (videoFavorites.length > 0) playVideoByName(videoFavorites[0]);
								},
								className: "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 transition-all",
								children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 897,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Play All Favorites" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 898,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 885,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 879,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: (currentMode === "audio" ? audioFavorites : videoFavorites).map((name, idx) => /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/30 transition-all",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3 min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
										children: currentMode === "audio" ? /* @__PURE__ */ (void 0)(Music, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 914,
											columnNumber: 33
										}, this) : /* @__PURE__ */ (void 0)(Film, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 916,
											columnNumber: 33
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 912,
										columnNumber: 29
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
											children: name
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 920,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-[#8c827a] mt-0.5",
											children: ["Favorite #", idx + 1]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 923,
											columnNumber: 31
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 919,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 911,
									columnNumber: 27
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											if (currentMode === "audio") playSongByName(name);
											else playVideoByName(name);
										},
										className: "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
										title: "Play",
										children: /* @__PURE__ */ (void 0)(Play, { className: "size-4 fill-current ml-0.5" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 939,
											columnNumber: 31
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 930,
										columnNumber: 29
									}, this), /* @__PURE__ */ (void 0)("button", {
										onClick: () => handleRemoveFavorite(name),
										className: "p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
										title: "Remove from favorites",
										children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 946,
											columnNumber: 31
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 941,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 929,
									columnNumber: 27
								}, this)]
							}, name, true, {
								fileName: _jsxFileName$5,
								lineNumber: 907,
								columnNumber: 25
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 902,
							columnNumber: 21
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 878,
							columnNumber: 19
						}, this) : /* @__PURE__ */ (void 0)("div", {
							className: "text-center text-muted-foreground py-12 flex flex-col items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "size-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center",
									children: /* @__PURE__ */ (void 0)(Heart, { className: "size-8" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 956,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 955,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-semibold text-[#3c342d]",
									children: "No favorites yet"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 959,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-[#8c827a] mt-1 max-w-xs",
									children: [
										"Tap the heart icon on any",
										" ",
										currentMode === "audio" ? "song" : "video",
										" in your library or trending feed to add it here."
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 962,
									columnNumber: 23
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 958,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setPageFooterModal(null),
									className: "mt-2 px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition-all",
									children: ["Browse ", currentMode === "audio" ? "Songs" : "Videos"]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 968,
									columnNumber: 21
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 954,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 855,
						columnNumber: 15
					}, this),
					pageFooterModal === "playlists" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									if (selectedPlaylistDetailId) setSelectedPlaylistDetailId(null);
									else setPageFooterModal(null);
								},
								className: "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
								children: [/* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 991,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", { children: selectedPlaylistDetailId ? "Back to Playlists" : "Back to Player" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 992,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 983,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: currentMode === "audio" ? "Audio Playlists" : "Video Playlists"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 998,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 982,
							columnNumber: 17
						}, this), selectedPlaylistDetailId ? (() => {
							const pl = (currentMode === "audio" ? audioPlaylists : videoPlaylists).find((p) => p.id === selectedPlaylistDetailId);
							if (!pl) return null;
							return /* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
											className: "font-bold text-base text-[#2b2520]",
											children: pl.name
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1018,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: [
												pl.trackNames.length,
												" ",
												pl.trackNames.length === 1 ? "track" : "tracks"
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1021,
											columnNumber: 29
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1017,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													if (pl.trackNames.length > 0) if (currentMode === "audio") playPlaylist(pl, 0);
													else playVideoByName(pl.trackNames[0]);
												},
												disabled: pl.trackNames.length === 0,
												className: "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 disabled:opacity-50",
												children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1038,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Play" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1039,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1027,
												columnNumber: 29
											}, this), /* @__PURE__ */ (void 0)("button", {
												onClick: () => handleDeletePlaylist(pl.id),
												className: "p-1.5 text-muted-foreground hover:text-destructive",
												title: "Delete playlist",
												children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1046,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1041,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1026,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1016,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "text-xs font-semibold text-muted-foreground",
											children: "Add tracks to this playlist"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1053,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("select", {
											className: "w-full rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs text-[#2b2520]",
											defaultValue: "",
											onChange: (e) => {
												if (e.target.value) {
													handleAddTrackToPlaylist(pl.id, e.target.value);
													e.target.value = "";
												}
											},
											children: [
												/* @__PURE__ */ (void 0)("option", {
													value: "",
													disabled: true,
													children: "Choose from your uploads..."
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1066,
													columnNumber: 29
												}, this),
												(currentMode === "audio" ? localAudioTracks : localVideoTracks).map((f) => /* @__PURE__ */ (void 0)("option", {
													value: f.name,
													children: f.name
												}, f.name, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1073,
													columnNumber: 31
												}, this)),
												(currentMode === "audio" ? audioTracks : videoTracks).map((item) => {
													const title = "title" in item ? item.title : "";
													return /* @__PURE__ */ (void 0)("option", {
														value: title,
														children: title
													}, title, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1083,
														columnNumber: 33
													}, this);
												})
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1056,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1052,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [pl.trackNames.map((trackName, idx) => /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5 min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-mono text-muted-foreground w-4 text-center",
													children: idx + 1
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1099,
													columnNumber: 33
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs font-medium truncate text-[#2b2520]",
													children: trackName
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1102,
													columnNumber: 33
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1098,
												columnNumber: 31
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("button", {
													onClick: () => {
														if (currentMode === "audio") playPlaylist(pl, idx);
														else playVideoByName(trackName);
													},
													className: "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
													title: "Play",
													children: /* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current ml-0.5" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1116,
														columnNumber: 35
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1107,
													columnNumber: 33
												}, this), /* @__PURE__ */ (void 0)("button", {
													onClick: () => handleRemoveTrackFromPlaylist(pl.id, trackName),
													className: "p-1 text-muted-foreground hover:text-destructive",
													title: "Remove from playlist",
													children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1128,
														columnNumber: 35
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1118,
													columnNumber: 33
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1106,
												columnNumber: 31
											}, this)]
										}, `${trackName}-${idx}`, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1094,
											columnNumber: 29
										}, this)), pl.trackNames.length === 0 && /* @__PURE__ */ (void 0)("p", {
											className: "text-center text-xs text-muted-foreground py-6",
											children: "No tracks in this playlist yet. Add tracks using the selector above."
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1135,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1092,
										columnNumber: 25
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1015,
								columnNumber: 23
							}, this);
						})() : /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (void 0)("form", {
								onSubmit: handleCreateNewPlaylist,
								className: "flex gap-2",
								children: [/* @__PURE__ */ (void 0)("input", {
									type: "text",
									placeholder: "New playlist name...",
									value: newPlaylistInput,
									onChange: (e) => setNewPlaylistInput(e.target.value),
									className: "flex-1 rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs focus:outline-hidden focus:border-brand"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1152,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "submit",
									className: "px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shrink-0 hover:opacity-90 flex items-center gap-1",
									children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1163,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Create" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1164,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1159,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1148,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: (currentMode === "audio" ? audioPlaylists : videoPlaylists).map((pl) => /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/40 transition-all cursor-pointer",
									onClick: () => setSelectedPlaylistDetailId(pl.id),
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3 min-w-0 flex-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ (void 0)(ListMusic, { className: "size-5.5" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1181,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1180,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (void 0)("h4", {
												className: "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
												children: pl.name
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1184,
												columnNumber: 31
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-[#8c827a] mt-0.5",
												children: [
													pl.trackNames.length,
													" ",
													pl.trackNames.length === 1 ? "track" : "tracks"
												]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1187,
												columnNumber: 31
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1183,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1179,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1.5",
										onClick: (e) => e.stopPropagation(),
										children: [pl.trackNames.length > 0 && /* @__PURE__ */ (void 0)("button", {
											onClick: () => {
												if (currentMode === "audio") playPlaylist(pl, 0);
												else playVideoByName(pl.trackNames[0]);
											},
											className: "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
											title: "Play playlist",
											children: /* @__PURE__ */ (void 0)(Play, { className: "size-4 fill-current ml-0.5" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1210,
												columnNumber: 33
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1201,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => handleDeletePlaylist(pl.id),
											className: "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
											title: "Delete playlist",
											children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1218,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1213,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1196,
										columnNumber: 27
									}, this)]
								}, pl.id, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1174,
									columnNumber: 25
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1169,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1146,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 981,
						columnNumber: 15
					}, this),
					pageFooterModal === "albums" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-2 border-b border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									if (selectedAlbumItem) setSelectedAlbumItem(null);
									else setPageFooterModal(null);
								},
								className: "flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline",
								children: [/* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1240,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", { children: selectedAlbumItem ? "Back to Albums" : "Back to Player" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1241,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1233,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: currentMode === "audio" ? "Audio Albums" : "Video Collections"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1245,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1232,
							columnNumber: 17
						}, this), selectedAlbumItem ? (() => {
							if (currentMode === "audio") {
								const alb = audioAlbums.find((a) => a.albumName === selectedAlbumItem);
								if (!alb) return null;
								return /* @__PURE__ */ (void 0)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
												children: /* @__PURE__ */ (void 0)(Disc, { className: "size-7" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1264,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1263,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("h4", {
													className: "font-bold text-sm sm:text-base text-[#2b2520] truncate",
													children: alb.albumName
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1267,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-muted-foreground mt-0.5",
													children: [
														alb.artist,
														" • ",
														alb.tracks.length,
														" tracks"
													]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 1270,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1266,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													const queue = alb.tracks.map((t) => t.file || t.trending).filter((item) => Boolean(item));
													if (queue.length > 0) {
														playFromAudioTracks(queue, 0);
														setPageFooterModal(null);
													}
												},
												className: "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90",
												children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1288,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Play Album" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1289,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1274,
												columnNumber: 29
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1262,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: alb.tracks.map((t, idx) => /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2.5 min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-mono text-muted-foreground w-4 text-center",
													children: idx + 1
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1300,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs font-medium truncate text-[#2b2520]",
													children: t.title
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1303,
													columnNumber: 35
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1299,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													const queue = alb.tracks.map((item) => item.file || item.trending).filter((item) => Boolean(item));
													playFromAudioTracks(queue, idx);
													setPageFooterModal(null);
												},
												className: "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
												title: "Play song",
												children: /* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1320,
													columnNumber: 35
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1307,
												columnNumber: 33
											}, this)]
										}, `${t.title}-${idx}`, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1295,
											columnNumber: 31
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1293,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1261,
									columnNumber: 25
								}, this);
							} else {
								const alb = videoAlbums.find((a) => a.albumName === selectedAlbumItem);
								if (!alb) return null;
								return /* @__PURE__ */ (void 0)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
												children: /* @__PURE__ */ (void 0)(Film, { className: "size-7" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1336,
													columnNumber: 31
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1335,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (void 0)("h4", {
													className: "font-bold text-sm sm:text-base text-[#2b2520] truncate",
													children: alb.albumName
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1339,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs text-muted-foreground mt-0.5",
													children: [
														alb.description,
														" • ",
														alb.items.length,
														" videos"
													]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 1342,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1338,
												columnNumber: 29
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => {
													if (alb.items.length > 0) playFromVideoTracks(alb.items, 0);
												},
												className: "flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90",
												children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1353,
													columnNumber: 31
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Play" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1354,
													columnNumber: 31
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1346,
												columnNumber: 29
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1334,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5",
										children: alb.items.map((item, idx) => {
											const title = "title" in item ? item.title : item.name;
											return /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2.5 min-w-0 flex-1",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-xs font-mono text-muted-foreground w-4 text-center",
														children: idx + 1
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1368,
														columnNumber: 37
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs font-medium truncate text-[#2b2520]",
														children: title
													}, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1371,
														columnNumber: 37
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 1367,
													columnNumber: 35
												}, this), /* @__PURE__ */ (void 0)("button", {
													onClick: () => playFromVideoTracks(alb.items, idx),
													className: "size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors",
													children: /* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current ml-0.5" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1381,
														columnNumber: 37
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1375,
													columnNumber: 35
												}, this)]
											}, `${title}-${idx}`, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1363,
												columnNumber: 33
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1358,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1333,
									columnNumber: 25
								}, this);
							}
						})() : /* @__PURE__ */ (void 0)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground font-medium",
								children: currentMode === "audio" ? "Albums organized by artist and uploads" : "Curated video series and collections"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1394,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 gap-3",
								children: (currentMode === "audio" ? audioAlbums : videoAlbums).map((album) => {
									const name = album.albumName;
									const subtitle = "artist" in album ? album.artist : album.description;
									const count = "tracks" in album ? album.tracks.length : album.items.length;
									const thumb = "thumbnailUrl" in album ? album.thumbnailUrl : void 0;
									return /* @__PURE__ */ (void 0)("div", {
										onClick: () => setSelectedAlbumItem(name),
										className: "group p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-2.5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "size-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform",
											children: thumb ? /* @__PURE__ */ (void 0)("img", {
												src: thumb,
												alt: name,
												className: "w-full h-full object-cover"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1424,
												columnNumber: 33
											}, this) : currentMode === "audio" ? /* @__PURE__ */ (void 0)(Disc, { className: "size-8" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1430,
												columnNumber: 33
											}, this) : /* @__PURE__ */ (void 0)(Film, { className: "size-8" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1432,
												columnNumber: 33
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1422,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "w-full min-w-0",
											children: [
												/* @__PURE__ */ (void 0)("h4", {
													className: "font-semibold text-xs text-[#2b2520] truncate group-hover:text-brand transition-colors",
													children: name
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1436,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("p", {
													className: "text-[10px] text-muted-foreground truncate mt-0.5",
													children: subtitle
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1439,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "inline-block mt-1 text-[9px] font-semibold bg-[#f2ede4] text-[#6b6158] px-2 py-0.5 rounded-full",
													children: [
														count,
														" ",
														count === 1 ? "track" : "tracks"
													]
												}, void 0, true, {
													fileName: _jsxFileName$5,
													lineNumber: 1442,
													columnNumber: 31
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1435,
											columnNumber: 29
										}, this)]
									}, name, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1417,
										columnNumber: 27
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1399,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1393,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 1231,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 852,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [currentMode === "audio" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					className: `flex-1 py-2 text-sm font-semibold transition-colors ${audioTab === "foryou" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
					onClick: () => setAudioTab("foryou"),
					children: "For you"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 1460,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					className: `flex-1 py-2 text-sm font-semibold transition-colors ${audioTab === "phone" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
					onClick: () => setAudioTab("phone"),
					children: [
						"My phone",
						" ",
						localAudioTracks.length > 0 && `(${localAudioTracks.length})`
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 1470,
					columnNumber: 17
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 1459,
				columnNumber: 15
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					className: `flex-1 py-2 text-sm font-semibold transition-colors ${videoTab === "foryou" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
					onClick: () => setVideoTab("foryou"),
					children: "For you"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 1485,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					className: `flex-1 py-2 text-sm font-semibold transition-colors ${videoTab === "phone" ? "border-b-2 border-brand text-brand" : "text-muted-foreground hover:text-foreground"}`,
					onClick: () => setVideoTab("phone"),
					children: [
						"My phone",
						" ",
						localVideoTracks.length > 0 && `(${localVideoTracks.length})`
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 1495,
					columnNumber: 17
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 1484,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 overflow-y-auto min-h-0 space-y-4 px-4 pb-4",
				children: [currentMode === "audio" && (audioTab === "phone" ? /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3 pb-6",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (void 0)("label", {
							className: "flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all",
							children: [
								/* @__PURE__ */ (void 0)(Plus, { className: "size-4.5" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1519,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: localAudioTracks.length === 0 ? "Select audio files" : "Upload / Add more songs" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1520,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (void 0)("input", {
									type: "file",
									multiple: true,
									accept: "audio/*",
									className: "hidden",
									onChange: (e) => {
										handleAudioFilesAdded(e.target.files);
										e.target.value = "";
									}
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1525,
									columnNumber: 25
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1518,
							columnNumber: 23
						}, this), localAudioTracks.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2 pl-1",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: toggleSelectAllAudio,
									className: "flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand",
									children: [isAllAudioSelected ? /* @__PURE__ */ (void 0)(SquareCheckBig, { className: "size-4 text-brand" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1545,
										columnNumber: 33
									}, this) : /* @__PURE__ */ (void 0)(Square, { className: "size-4 text-[#8c827a]" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1547,
										columnNumber: 33
									}, this), /* @__PURE__ */ (void 0)("span", { children: isAllAudioSelected ? "Deselect All" : "Select All" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1549,
										columnNumber: 31
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1540,
									columnNumber: 29
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-[#8c827a]",
									children: [
										"(",
										selectedAudioCount,
										"/",
										localAudioTracks.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1555,
									columnNumber: 29
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1539,
								columnNumber: 27
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: handlePlaySelectedAudio,
									disabled: selectedAudioCount === 0 && localAudioTracks.length === 0,
									className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all",
									children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1569,
										columnNumber: 31
									}, this), /* @__PURE__ */ (void 0)("span", { children: [
										"Play",
										" ",
										selectedAudioCount > 0 ? `Selected (${selectedAudioCount})` : "All"
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1570,
										columnNumber: 31
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1561,
									columnNumber: 29
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: clearAllAudioTracks,
									className: "p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
									title: "Clear all songs",
									children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1583,
										columnNumber: 31
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1578,
									columnNumber: 29
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1560,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1538,
							columnNumber: 25
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 1517,
						columnNumber: 21
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "space-y-1.5",
						children: [localAudioTracks.map((file, i) => {
							const isSelected = selectedAudioNames.has(file.name);
							return /* @__PURE__ */ (void 0)("div", {
								className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${isSelected ? "bg-white border-brand/40 shadow-xs" : "bg-white/60 border-[#e8e2d9] opacity-75"}`,
								children: [
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => toggleSelectAudio(file.name),
										className: "p-1.5 text-[#574d46] hover:text-brand",
										title: isSelected ? "Unselect" : "Select for playback",
										children: isSelected ? /* @__PURE__ */ (void 0)(SquareCheckBig, { className: "size-4.5 text-brand" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1611,
											columnNumber: 33
										}, this) : /* @__PURE__ */ (void 0)(Square, { className: "size-4.5 text-[#8c827a]" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1613,
											columnNumber: 33
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1603,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										className: "min-w-0 flex-1 text-left px-2",
										onClick: () => handlePlaySingleAudio(i),
										children: [/* @__PURE__ */ (void 0)("p", {
											className: "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
											children: file.name
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1621,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-[#8c827a] truncate mt-0.5",
											children: [
												(file.size / 1048576).toFixed(2),
												" MB •",
												" ",
												file.name.split(".").pop()?.toUpperCase()
											]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1624,
											columnNumber: 31
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1617,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => toggleAudioFavorite(file.name),
												className: `p-1.5 rounded-lg transition-colors ${audioFavorites.includes(file.name) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
												title: audioFavorites.includes(file.name) ? "Remove from favorites" : "Add to favorites",
												children: /* @__PURE__ */ (void 0)(Heart, { className: `size-4 ${audioFavorites.includes(file.name) ? "fill-red-500 text-red-500" : ""}` }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1644,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1631,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => handlePlaySingleAudio(i),
												className: "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
												title: "Play now",
												children: /* @__PURE__ */ (void 0)(Play, { className: "size-4 fill-current ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1657,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1652,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => removeLocalAudioTrack(i),
												className: "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
												title: "Remove from list",
												children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1664,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1659,
												columnNumber: 31
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1630,
										columnNumber: 29
									}, this)
								]
							}, `${file.name}-${i}`, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1595,
								columnNumber: 27
							}, this);
						}), localAudioTracks.length === 0 && /* @__PURE__ */ (void 0)("div", {
							className: "text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand",
								children: /* @__PURE__ */ (void 0)(Music, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1674,
									columnNumber: 29
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1673,
								columnNumber: 27
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-sm font-semibold text-[#3c342d]",
								children: "No songs uploaded yet"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1677,
								columnNumber: 29
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-[#8c827a] mt-1 max-w-xs",
								children: "Tap \"Select audio files\" above to upload your songs (MP3, WAV, etc.) and play them one by one."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1680,
								columnNumber: 29
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1676,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1672,
							columnNumber: 25
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 1591,
						columnNumber: 21
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 1515,
					columnNumber: 19
				}, this) : /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-6",
					children: [
						/* @__PURE__ */ (void 0)("h3", {
							className: "font-semibold text-lg flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-5 text-brand" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1694,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Popular now" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1695,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1693,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (void 0)("form", {
								onSubmit: handleMusicSearch,
								className: "flex gap-2",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: selectedMusicPlatform === "all" ? "Search any song, artist across all platforms..." : `Search tracks on ${selectedMusicPlatform.charAt(0).toUpperCase() + selectedMusicPlatform.slice(1)}...`,
										value: musicQuery,
										onChange: (e) => {
											setMusicQuery(e.target.value);
											if (!e.target.value.trim()) {
												setSearchResults([]);
												setIsSearching(false);
											}
										},
										className: "w-full rounded-2xl border border-[#e8e2d9] bg-white px-4 py-2.5 pl-9 text-sm shadow-inner outline-none focus:border-[#6d5b97]"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1702,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-3 size-4 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1724,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1701,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "submit",
									className: "rounded-2xl bg-[#6d5b97] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity",
									children: isSearching ? "Searching..." : "Search"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1726,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1700,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex gap-1.5 overflow-x-auto no-scrollbar py-1",
								children: [
									{
										id: "all",
										label: "All Platforms"
									},
									{
										id: "spotify",
										label: "Spotify"
									},
									{
										id: "apple",
										label: "Apple Music"
									},
									{
										id: "itunes",
										label: "iTunes"
									},
									{
										id: "youtube",
										label: "YouTube Music"
									},
									{
										id: "amazon",
										label: "Amazon Music"
									},
									{
										id: "tidal",
										label: "Tidal"
									},
									{
										id: "deezer",
										label: "Deezer"
									},
									{
										id: "soundcloud",
										label: "SoundCloud"
									},
									{
										id: "bandcamp",
										label: "Bandcamp"
									},
									{
										id: "pandora",
										label: "Pandora"
									},
									{
										id: "qobuz",
										label: "Qobuz"
									},
									{
										id: "napster",
										label: "Napster"
									},
									{
										id: "boomplay",
										label: "Boomplay"
									},
									{
										id: "audiomack",
										label: "Audiomack"
									}
								].map((p) => /* @__PURE__ */ (void 0)("button", {
									type: "button",
									"data-id": p.id,
									onClick: () => handleSelectPlatform(p.id),
									className: `px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${selectedMusicPlatform === p.id ? "bg-[#6d5b97] text-white shadow-xs" : "bg-white border border-[#e8e2d9] text-[#685d55] hover:bg-[#f6f2ec]"}`,
									children: p.label
								}, p.id, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1753,
									columnNumber: 27
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 1735,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1699,
							columnNumber: 21
						}, this),
						isSearching ? /* @__PURE__ */ (void 0)("div", {
							className: "py-12 text-center text-sm text-muted-foreground",
							children: "Searching across music platforms..."
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 1774,
							columnNumber: 23
						}, this) : (musicQuery.trim() ? searchResults : audioTracks).map((track, index) => {
							const listToPlay = musicQuery.trim() ? searchResults : audioTracks;
							return /* @__PURE__ */ (void 0)("div", {
								onClick: () => playFromAudioTracks(listToPlay, index),
								className: "flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#f5efe8] border border-transparent hover:border-[#e8e2d9] transition-all cursor-pointer group",
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "text-muted-foreground w-6 text-right font-mono text-sm",
										children: index + 1
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1791,
										columnNumber: 31
									}, this),
									/* @__PURE__ */ (void 0)("img", {
										src: track.coverUrl,
										alt: track.title,
										className: "size-12 rounded-xl object-cover shadow-xs shrink-0"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1794,
										columnNumber: 31
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1.5 mb-0.5",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "font-semibold text-sm truncate",
												children: track.title
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1801,
												columnNumber: 35
											}, this), track.platform === "spotify" ? /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-[#1DB954]/15 px-1.5 py-0.2 text-[10px] font-semibold text-[#1DB954]",
												children: [/* @__PURE__ */ (void 0)("svg", {
													className: "size-2.5 fill-current",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (void 0)("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.31c-.216.353-.674.464-1.026.25-2.812-1.718-6.351-2.106-10.52-1.152-.403.093-.807-.156-.9-.56-.093-.404.156-.807.56-.9 4.568-1.043 8.487-.604 11.636 1.336.352.216.463.674.25 1.026zm1.464-3.255c-.272.443-.85.584-1.293.313-3.218-1.978-8.125-2.55-11.93-1.393-.497.15-1.026-.134-1.176-.63-.15-.497.134-1.026.63-1.176 4.35-1.32 9.776-.684 13.456 1.593.443.272.584.85.313 1.293zm.126-3.39c-3.86-2.292-10.222-2.503-13.88-1.393-.591.178-1.22-.162-1.398-.753-.178-.59.162-1.22.753-1.398 4.214-1.28 11.238-1.034 15.68 1.602.532.316.707 1.004.391 1.536-.316.532-1.004.707-1.546.406z" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1810,
														columnNumber: 41
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1806,
													columnNumber: 39
												}, this), "Spotify"]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1805,
												columnNumber: 37
											}, this) : track.platform === "apple" ? /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-[#FC3C44]/15 px-1.5 py-0.2 text-[10px] font-semibold text-[#FC3C44]",
												children: [/* @__PURE__ */ (void 0)("svg", {
													className: "size-2.5 fill-current",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (void 0)("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.02.63-2.67 1.4-.58.67-1.09 1.76-.95 2.82 1.03.08 2.05-.53 2.68-1.29z" }, void 0, false, {
														fileName: _jsxFileName$5,
														lineNumber: 1820,
														columnNumber: 41
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 1816,
													columnNumber: 39
												}, this), "Apple"]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 1815,
												columnNumber: 37
											}, this) : track.platformName ? /* @__PURE__ */ (void 0)("span", {
												className: "inline-flex shrink-0 items-center rounded-md bg-muted px-1.5 py-0.2 text-[10px] font-semibold text-muted-foreground",
												children: track.platformName
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1825,
												columnNumber: 37
											}, this) : null]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 1800,
											columnNumber: 33
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-muted-foreground truncate",
											children: track.artist
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1830,
											columnNumber: 33
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1799,
										columnNumber: 31
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-0.5",
										children: [track.externalUrl && /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: (e) => {
												e.stopPropagation();
												if (onOpenUrl) onOpenUrl(track.externalUrl);
												else window.open(track.externalUrl, "_blank");
											},
											title: `Open on ${track.platformName || "Platform"}`,
											className: "p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-[#eae4dc] transition-colors",
											children: /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1852,
												columnNumber: 37
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1836,
											columnNumber: 35
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: (e) => {
												e.stopPropagation();
												toggleAudioFavorite(track.title);
											},
											className: `p-1.5 rounded-xl transition-colors ${audioFavorites.includes(track.title) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
											title: audioFavorites.includes(track.title) ? "Remove from favorites" : "Add to favorites",
											children: /* @__PURE__ */ (void 0)(Heart, { className: `size-4 ${audioFavorites.includes(track.title) ? "fill-red-500 text-red-500" : ""}` }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1871,
												columnNumber: 35
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1855,
											columnNumber: 33
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1834,
										columnNumber: 31
									}, this)
								]
							}, `${track.id || track.rank || "track"}-${index}`, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1784,
								columnNumber: 29
							}, this);
						})
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 1692,
					columnNumber: 19
				}, this)), currentMode === "video" && (videoTab === "phone" ? /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3 pb-6",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (void 0)("label", {
							className: "flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all",
							children: [
								/* @__PURE__ */ (void 0)(Plus, { className: "size-4.5" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1895,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (void 0)("span", { children: localVideoTracks.length === 0 ? "Select video files" : "Upload / Add more videos" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1896,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (void 0)("input", {
									type: "file",
									multiple: true,
									accept: "video/*",
									className: "hidden",
									onChange: (e) => {
										handleVideoFilesAdded(e.target.files);
										e.target.value = "";
									}
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1901,
									columnNumber: 25
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1894,
							columnNumber: 23
						}, this), localVideoTracks.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2 pl-1",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: toggleSelectAllVideo,
									className: "flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand",
									children: [isAllVideoSelected ? /* @__PURE__ */ (void 0)(SquareCheckBig, { className: "size-4 text-brand" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1921,
										columnNumber: 33
									}, this) : /* @__PURE__ */ (void 0)(Square, { className: "size-4 text-[#8c827a]" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1923,
										columnNumber: 33
									}, this), /* @__PURE__ */ (void 0)("span", { children: isAllVideoSelected ? "Deselect All" : "Select All" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1925,
										columnNumber: 31
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1916,
									columnNumber: 29
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-[#8c827a]",
									children: [
										"(",
										selectedVideoCount,
										"/",
										localVideoTracks.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1931,
									columnNumber: 29
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1915,
								columnNumber: 27
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: handlePlaySelectedVideo,
									disabled: selectedVideoCount === 0 && localVideoTracks.length === 0,
									className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all",
									children: [/* @__PURE__ */ (void 0)(Play, { className: "size-3.5 fill-current" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1945,
										columnNumber: 31
									}, this), /* @__PURE__ */ (void 0)("span", { children: [
										"Play",
										" ",
										selectedVideoCount > 0 ? `Selected (${selectedVideoCount})` : "All"
									] }, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1946,
										columnNumber: 31
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 1937,
									columnNumber: 29
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: clearAllVideoTracks,
									className: "p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
									title: "Clear all videos",
									children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1959,
										columnNumber: 31
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 1954,
									columnNumber: 29
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1936,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 1914,
							columnNumber: 25
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 1893,
						columnNumber: 21
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "space-y-1.5",
						children: [localVideoTracks.map((file, i) => {
							const isSelected = selectedVideoNames.has(file.name);
							return /* @__PURE__ */ (void 0)("div", {
								className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${isSelected ? "bg-white border-brand/40 shadow-xs" : "bg-white/60 border-[#e8e2d9] opacity-75"}`,
								children: [
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => toggleSelectVideo(file.name),
										className: "p-1.5 text-[#574d46] hover:text-brand",
										title: isSelected ? "Unselect" : "Select for playback",
										children: isSelected ? /* @__PURE__ */ (void 0)(SquareCheckBig, { className: "size-4.5 text-brand" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1987,
											columnNumber: 33
										}, this) : /* @__PURE__ */ (void 0)(Square, { className: "size-4.5 text-[#8c827a]" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1989,
											columnNumber: 33
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 1979,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										className: "min-w-0 flex-1 text-left px-2 flex items-center gap-3",
										onClick: () => handlePlaySingleVideo(i),
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ (void 0)(Film, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 1998,
												columnNumber: 33
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 1997,
											columnNumber: 31
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (void 0)("p", {
												className: "font-semibold text-xs sm:text-sm text-[#2b2520] truncate",
												children: file.name
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 2001,
												columnNumber: 33
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-[#8c827a] truncate mt-0.5",
												children: [
													(file.size / 1048576).toFixed(2),
													" MB •",
													" ",
													file.name.split(".").pop()?.toUpperCase(),
													" ",
													"Video"
												]
											}, void 0, true, {
												fileName: _jsxFileName$5,
												lineNumber: 2004,
												columnNumber: 33
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 2e3,
											columnNumber: 31
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 1993,
										columnNumber: 29
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => toggleVideoFavorite(file.name),
												className: `p-1.5 rounded-lg transition-colors ${videoFavorites.includes(file.name) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
												title: videoFavorites.includes(file.name) ? "Remove from favorites" : "Add to favorites",
												children: /* @__PURE__ */ (void 0)(Heart, { className: `size-4 ${videoFavorites.includes(file.name) ? "fill-red-500 text-red-500" : ""}` }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 2026,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 2013,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => handlePlaySingleVideo(i),
												className: "size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs",
												title: "Watch video",
												children: /* @__PURE__ */ (void 0)(Play, { className: "size-4 fill-current ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 2039,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 2034,
												columnNumber: 31
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => removeLocalVideoTrack(i),
												className: "p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors",
												title: "Remove from list",
												children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 2046,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 2041,
												columnNumber: 31
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$5,
										lineNumber: 2012,
										columnNumber: 29
									}, this)
								]
							}, `${file.name}-${i}`, true, {
								fileName: _jsxFileName$5,
								lineNumber: 1971,
								columnNumber: 27
							}, this);
						}), localVideoTracks.length === 0 && /* @__PURE__ */ (void 0)("div", {
							className: "text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand",
								children: /* @__PURE__ */ (void 0)(Video, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 2056,
									columnNumber: 29
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2055,
								columnNumber: 27
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-sm font-semibold text-[#3c342d]",
								children: "No videos uploaded yet"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2059,
								columnNumber: 29
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-[#8c827a] mt-1 max-w-xs",
								children: "Tap \"Select video files\" above to upload your movies or clips (MP4, WebM, etc.) and watch them here."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2062,
								columnNumber: 29
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 2058,
								columnNumber: 27
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 2054,
							columnNumber: 25
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 1967,
						columnNumber: 21
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 1891,
					columnNumber: 19
				}, this) : /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-6",
					children: [/* @__PURE__ */ (void 0)("h3", {
						className: "font-semibold text-lg flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-5 text-brand" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 2076,
							columnNumber: 23
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Trending Videos" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 2077,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 2075,
						columnNumber: 21
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "grid grid-cols-1 gap-3",
						children: videoTracks.map((video, idx) => /* @__PURE__ */ (void 0)("div", {
							onClick: () => playFromVideoTracks(videoTracks, idx),
							className: "group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 hover:shadow-md transition-all cursor-pointer",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "relative aspect-video w-full sm:w-40 rounded-xl overflow-hidden bg-black shrink-0",
									children: [
										/* @__PURE__ */ (void 0)("img", {
											src: video.thumbnailUrl,
											alt: video.title,
											className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 2087,
											columnNumber: 29
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center",
											children: /* @__PURE__ */ (void 0)("div", {
												className: "size-10 rounded-full bg-white/90 text-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform",
												children: /* @__PURE__ */ (void 0)(Play, { className: "size-4.5 fill-current ml-0.5" }, void 0, false, {
													fileName: _jsxFileName$5,
													lineNumber: 2094,
													columnNumber: 33
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 2093,
												columnNumber: 31
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 2092,
											columnNumber: 29
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "absolute bottom-1.5 right-1.5 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 rounded-md backdrop-blur-xs",
											children: video.duration
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 2097,
											columnNumber: 29
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "absolute top-1.5 left-1.5 bg-brand text-brand-foreground font-semibold text-[9px] px-1.5 py-0.5 rounded-md",
											children: video.quality
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 2100,
											columnNumber: 29
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 2086,
									columnNumber: 27
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-semibold text-sm text-[#2b2520] group-hover:text-brand transition-colors line-clamp-2",
										children: video.title
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 2106,
										columnNumber: 29
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-[#8c827a] mt-1",
										children: video.channel
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 2109,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 2105,
									columnNumber: 27
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: (e) => {
										e.stopPropagation();
										toggleVideoFavorite(video.title);
									},
									className: `p-2 rounded-xl transition-colors ${videoFavorites.includes(video.title) ? "text-red-500" : "text-[#a3978e] hover:text-red-500"}`,
									title: videoFavorites.includes(video.title) ? "Remove from favorites" : "Add to favorites",
									children: /* @__PURE__ */ (void 0)(Heart, { className: `size-4.5 ${videoFavorites.includes(video.title) ? "fill-red-500 text-red-500" : ""}` }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 2130,
										columnNumber: 29
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 2114,
									columnNumber: 27
								}, this)
							]
						}, video.id, true, {
							fileName: _jsxFileName$5,
							lineNumber: 2081,
							columnNumber: 25
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 2079,
						columnNumber: 21
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 2074,
					columnNumber: 19
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 1511,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 1456,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shrink-0 border-t border-[#e8e2d9] bg-[#fbf9f5] px-6 py-2.5 flex items-center justify-around shadow-xs z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setPageFooterModal((prev) => prev === "favorites" ? null : "favorites"),
						className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "favorites" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: `size-5 ${currentFavoritesCount > 0 && pageFooterModal !== "favorites" ? "text-red-500 fill-red-500/20" : pageFooterModal === "favorites" ? "fill-red-500 text-red-500" : ""}` }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2162,
								columnNumber: 15
							}, this), currentFavoritesCount > 0 && /* @__PURE__ */ (void 0)("span", {
								className: "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
								children: currentFavoritesCount
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2172,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 2161,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-medium",
							children: "Favorites"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 2177,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 2149,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							setSelectedPlaylistDetailId(null);
							setPageFooterModal((prev) => prev === "playlists" ? null : "playlists");
						},
						className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "playlists" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListMusic, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2194,
								columnNumber: 15
							}, this), currentPlaylistsCount > 0 && /* @__PURE__ */ (void 0)("span", {
								className: "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
								children: currentPlaylistsCount
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2196,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 2193,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-medium",
							children: "Playlist"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 2201,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 2180,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							setSelectedAlbumItem(null);
							setPageFooterModal((prev) => prev === "albums" ? null : "albums");
						},
						className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${pageFooterModal === "albums" ? "text-brand font-bold scale-105" : "text-[#7b7167] hover:text-foreground active:scale-95"}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disc, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2218,
								columnNumber: 15
							}, this), currentAlbumsCount > 0 && /* @__PURE__ */ (void 0)("span", {
								className: "absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center",
								children: currentAlbumsCount
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 2220,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 2217,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-medium",
							children: "Albums"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 2225,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 2204,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 2148,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 849,
			columnNumber: 7
		}, this),
		activeAudioQueue && activeAudioQueue.length > 0 && playingAudioIndex !== null && /* @__PURE__ */ (void 0)(AudioPlayer, {
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
			}
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 2234,
			columnNumber: 11
		}, this),
		activeVideoQueue && activeVideoQueue.length > 0 && playingVideoIndex !== null && /* @__PURE__ */ (void 0)(VideoPlayer, {
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
			}
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 2254,
			columnNumber: 11
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 848,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/BookmarksManager.tsx";
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
	const filtered = items.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) || b.url.toLowerCase().includes(query.toLowerCase()));
	const handleAddSubmit = (e) => {
		e.preventDefault();
		let u = newUrl.trim();
		if (!u) return;
		if (!u.startsWith("http://") && !u.startsWith("https://")) u = "https://" + u;
		const t = newTitle.trim() || host$3(u);
		onAdd({
			url: u,
			title: t,
			at: Date.now()
		});
		setNewTitle("");
		setNewUrl("");
		setShowAdd(false);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex size-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-4.5 fill-amber-500" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 63,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "Bookmarks"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 67,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[11px] text-muted-foreground",
						children: [
							items.length,
							" ",
							items.length === 1 ? "page" : "pages",
							" bookmarked"
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 68,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 62,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setShowAdd(!showAdd),
					className: "flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90",
					children: [showAdd ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 79,
						columnNumber: 22
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 79,
						columnNumber: 51
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: showAdd ? "Cancel" : "Add Bookmark" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 80,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 74,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			showAdd && /* @__PURE__ */ (void 0)("form", {
				onSubmit: handleAddSubmit,
				className: "rounded-2xl border border-amber-500/30 bg-amber-500/5 p-3.5 space-y-2.5",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "text-xs font-bold text-foreground flex items-center gap-1.5",
						children: [/* @__PURE__ */ (void 0)(Star, { className: "size-3.5 fill-amber-500 text-amber-500" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 91,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Add New Bookmark" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 92,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 90,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("input", {
						type: "text",
						placeholder: "Title (e.g. My Favorite Site)",
						value: newTitle,
						onChange: (e) => setNewTitle(e.target.value),
						className: "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 94,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("input", {
						type: "text",
						placeholder: "URL (e.g. https://example.com)",
						value: newUrl,
						onChange: (e) => setNewUrl(e.target.value),
						required: true,
						className: "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 101,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex justify-end gap-2 pt-1",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setShowAdd(false),
							className: "rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 110,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "submit",
							className: "rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground",
							children: "Save Bookmark"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 117,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 109,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 86,
				columnNumber: 9
			}, this),
			items.length > 2 && /* @__PURE__ */ (void 0)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 130,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("input", {
					type: "text",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search bookmarks...",
					className: "w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 131,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 129,
				columnNumber: 9
			}, this),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-3 flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-7 fill-amber-500/40" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 145,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 144,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
						className: "text-sm font-semibold text-foreground",
						children: query ? "No matching bookmarks" : "No bookmarks yet"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 147,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 max-w-xs text-xs text-muted-foreground",
						children: query ? "Try searching for a different keyword." : "Bookmark your favorite sites while browsing with the star icon in the address bar, or add one using the button above."
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 150,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 143,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs",
				children: filtered.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onGo(item.url),
						className: "flex min-w-0 flex-1 items-center gap-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: `https://www.google.com/s2/favicons?domain=${host$3(item.url)}&sz=64`,
								alt: "",
								className: "size-4.5 rounded-xs object-contain",
								onError: (e) => {
									e.target.style.display = "none";
								}
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 169,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 168,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "truncate text-sm font-semibold text-foreground",
								children: item.title || host$3(item.url)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 179,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "truncate text-[11px] text-muted-foreground",
								children: host$3(item.url)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 182,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 178,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 163,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onGo(item.url),
							title: "Open bookmark",
							className: "rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 195,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 189,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onRemove(item),
							title: "Delete bookmark",
							className: "rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 203,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 197,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 188,
						columnNumber: 15
					}, this)]
				}, `${item.url}-${i}`, true, {
					fileName: _jsxFileName$4,
					lineNumber: 159,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 157,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/SavedLinksManager.tsx";
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
	const filtered = items.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) || b.url.toLowerCase().includes(query.toLowerCase()));
	const handleAddSubmit = (e) => {
		e.preventDefault();
		let u = newUrl.trim();
		if (!u) return;
		if (!u.startsWith("http://") && !u.startsWith("https://")) u = "https://" + u;
		const t = newTitle.trim() || host$2(u);
		onAdd({
			url: u,
			title: t,
			at: Date.now()
		});
		setNewTitle("");
		setNewUrl("");
		setShowAdd(false);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: "size-4.5 fill-brand/20 text-brand" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 63,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "Saved Links"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 67,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[11px] text-muted-foreground",
						children: [
							items.length,
							" ",
							items.length === 1 ? "link" : "links",
							" saved to read later"
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 68,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 62,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setShowAdd(!showAdd),
					className: "flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90",
					children: [showAdd ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 80,
						columnNumber: 22
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 80,
						columnNumber: 51
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: showAdd ? "Cancel" : "Save Link" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 81,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 75,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			showAdd && /* @__PURE__ */ (void 0)("form", {
				onSubmit: handleAddSubmit,
				className: "rounded-2xl border border-brand/30 bg-brand/5 p-3.5 space-y-2.5",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "text-xs font-bold text-foreground flex items-center gap-1.5",
						children: [/* @__PURE__ */ (void 0)(Bookmark, { className: "size-3.5 text-brand" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 92,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("span", { children: "Save a New Link" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 93,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 91,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("input", {
						type: "text",
						placeholder: "Link Title (e.g. Interesting Article)",
						value: newTitle,
						onChange: (e) => setNewTitle(e.target.value),
						className: "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 95,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("input", {
						type: "text",
						placeholder: "URL (e.g. https://example.com/article)",
						value: newUrl,
						onChange: (e) => setNewUrl(e.target.value),
						required: true,
						className: "w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 102,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex justify-end gap-2 pt-1",
						children: [/* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setShowAdd(false),
							className: "rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted",
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 111,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "submit",
							className: "rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground",
							children: "Save Link"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 118,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 110,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 87,
				columnNumber: 9
			}, this),
			items.length > 2 && /* @__PURE__ */ (void 0)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 131,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("input", {
					type: "text",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search saved links...",
					className: "w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 132,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 130,
				columnNumber: 9
			}, this),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-3 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bookmark, { className: "size-7 fill-brand/20 text-brand" }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 146,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 145,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
						className: "text-sm font-semibold text-foreground",
						children: query ? "No matching saved links" : "No saved links yet"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 148,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 max-w-xs text-xs text-muted-foreground",
						children: query ? "Try searching for another title or URL." : "Save news stories, articles, and useful websites to read them anytime from this page."
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 151,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 144,
				columnNumber: 9
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs",
				children: filtered.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onGo(item.url),
						className: "flex min-w-0 flex-1 items-center gap-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand/10",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: `https://www.google.com/s2/favicons?domain=${host$2(item.url)}&sz=64`,
								alt: "",
								className: "size-4.5 rounded-xs object-contain",
								onError: (e) => {
									e.target.style.display = "none";
								}
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 170,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 169,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "truncate text-sm font-semibold text-foreground",
								children: item.title || host$2(item.url)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 180,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "truncate text-[11px] text-muted-foreground",
								children: host$2(item.url)
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 183,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 179,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 164,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onGo(item.url),
							title: "Open link",
							className: "rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 196,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 190,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => onRemove(item),
							title: "Delete saved link",
							className: "rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 204,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 198,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 189,
						columnNumber: 15
					}, this)]
				}, `${item.url}-${i}`, true, {
					fileName: _jsxFileName$3,
					lineNumber: 160,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 158,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/SettingsManager.tsx";
var LANGUAGES = [
	{
		code: "en",
		name: "English (US)",
		native: "English"
	},
	{
		code: "es",
		name: "Spanish",
		native: "Español"
	},
	{
		code: "fr",
		name: "French",
		native: "Français"
	},
	{
		code: "de",
		name: "German",
		native: "Deutsch"
	},
	{
		code: "pt",
		name: "Portuguese",
		native: "Português"
	},
	{
		code: "hi",
		name: "Hindi",
		native: "हिन्दी"
	},
	{
		code: "ar",
		name: "Arabic",
		native: "العربية"
	},
	{
		code: "zh",
		name: "Chinese (Simplified)",
		native: "简体中文"
	},
	{
		code: "ja",
		name: "Japanese",
		native: "日本語"
	},
	{
		code: "ru",
		name: "Russian",
		native: "Русский"
	},
	{
		code: "id",
		name: "Indonesian",
		native: "Bahasa Indonesia"
	},
	{
		code: "ko",
		name: "Korean",
		native: "한국어"
	},
	{
		code: "tr",
		name: "Turkish",
		native: "Türkçe"
	},
	{
		code: "it",
		name: "Italian",
		native: "Italiano"
	},
	{
		code: "nl",
		name: "Dutch",
		native: "Nederlands"
	}
];
var INITIAL_PASSWORDS = [
	{
		id: "pwd-1",
		domain: "google.com",
		username: "musichub661@gmail.com",
		password: "••••••••••••",
		updatedAt: Date.now() - 432e6
	},
	{
		id: "pwd-2",
		domain: "github.com",
		username: "webna-developer",
		password: "••••••••••••",
		updatedAt: Date.now() - 10368e5
	},
	{
		id: "pwd-3",
		domain: "reddit.com",
		username: "tech_surfer99",
		password: "••••••••••••",
		updatedAt: Date.now() - 1728e6
	}
];
function SettingsManager({ onClose, initialSubView = null, bookmarks, setBookmarks, history, setHistory, savedLinks, setSavedLinks, categories, setCategories, blockAds, setBlockAds, blockPopups, setBlockPopups, blockTrackers, setBlockTrackers, blockCookies, setBlockCookies, blockLocation, setBlockLocation, blockMic, setBlockMic, blockCamera, setBlockCamera, blockNotifications, setBlockNotifications, blockAutoplay, setBlockAutoplay, blockJs, setBlockJs }) {
	const { lang, setLanguage, t } = useAppLanguage();
	const [subView, setSubView] = (0, import_react.useState)(initialSubView);
	const [autoTranslate, setAutoTranslate] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-auto-translate");
		if (val !== null) setAutoTranslate(val !== "false");
	}, []);
	const handleSelectLanguage = (code) => {
		setLanguage(code);
		const langObj = LANGUAGES.find((l) => l.code === code);
		toast.success(code === "es" ? "Idioma cambiado a Español" : `Language changed to ${langObj?.name || code}`);
	};
	const [theme, setTheme] = (0, import_react.useState)("system");
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-theme");
		if (val) setTheme(val);
	}, []);
	const [fontSize, setFontSize] = (0, import_react.useState)("medium");
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-font-size");
		if (val) setFontSize(val);
	}, []);
	const [addressBarPosition, setAddressBarPosition] = (0, import_react.useState)("top");
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-address-bar");
		if (val) setAddressBarPosition(val);
	}, []);
	const [highContrast, setHighContrast] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-high-contrast");
		if (val !== null) setHighContrast(val === "true");
	}, []);
	const applyTheme = (newTheme) => {
		setTheme(newTheme);
		localStorage.setItem("webna-theme", newTheme);
		if (newTheme === "dark") document.documentElement.classList.add("dark");
		else if (newTheme === "light") document.documentElement.classList.remove("dark");
		else {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
		const webPlayStore = "https://play.google.com/store/apps/details?id=com.webna.browser";
		toast.success(lang === "es" ? "Abriendo Google Play Store para calificar..." : "Opening Google Play Store to rate WebNa...");
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
		const shareText = lang === "es" ? "Navegador WebNa: Navegador móvil ultrarrápido y privado con bloqueo de anuncios, reproductor multimedia y descargas. ¡Descárgalo ahora!" : "WebNa Browser: Lightning fast, privacy-first mobile browser with ad blocking, audio/video player and downloader. Download now!";
		if (navigator.share) try {
			await navigator.share({
				title: "WebNa Browser",
				text: shareText,
				url: appShareUrl
			});
			toast.success(lang === "es" ? "¡Gracias por compartir WebNa!" : "Thanks for sharing WebNa!");
			return;
		} catch (err) {
			if (err && typeof err === "object" && "name" in err && err.name === "AbortError") return;
		}
		navigator.clipboard.writeText(`${shareText}\n${appShareUrl}`);
		toast.success(lang === "es" ? "¡Enlace de descarga de WebNa copiado al portapapeles!" : "WebNa download link copied to clipboard!");
	};
	const [notifPermission, setNotifPermission] = (0, import_react.useState)("default");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "Notification" in window) setNotifPermission(Notification.permission);
	}, []);
	const [notifDownloads, setNotifDownloads] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-notif-downloads");
		if (val !== null) setNotifDownloads(val !== "false");
	}, []);
	const [notifSecurity, setNotifSecurity] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-notif-security");
		if (val !== null) setNotifSecurity(val !== "false");
	}, []);
	const [notifNews, setNotifNews] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-notif-news");
		if (val !== null) setNotifNews(val !== "false");
	}, []);
	const [notifPlayback, setNotifPlayback] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-notif-playback");
		if (val !== null) setNotifPlayback(val !== "false");
	}, []);
	const [notifVibration, setNotifVibration] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-notif-vibration");
		if (val !== null) setNotifVibration(val !== "false");
	}, []);
	const requestNotifPermission = async () => {
		if ("Notification" in window) try {
			const res = await Notification.requestPermission();
			setNotifPermission(res);
			if (res === "granted") toast.success("Notification permissions enabled for WebNa!");
			else toast.error("Notification permission was denied.");
		} catch {
			toast.error("Could not request notification permissions on this device.");
		}
		else toast.info("Notifications are handled natively by your Android system.");
	};
	const sendTestNotification = () => {
		if ("Notification" in window && Notification.permission === "granted") new Notification("WebNa Browser", {
			body: "Test notification: Download completed! Sample song was saved.",
			icon: "/favicon.ico"
		});
		toast(lang === "es" ? "Alerta de notificación WebNa" : "WebNa Notification Alert", {
			description: lang === "es" ? "Prueba: ¡Descarga completada! Archivo multimedia guardado." : "Sample test: Download completed! Sample media was saved.",
			icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "size-4 text-brand" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 393,
				columnNumber: 15
			}, this)
		});
	};
	const [safetyTab, setSafetyTab] = (0, import_react.useState)("controls");
	const [httpsOnly, setHttpsOnly] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-https-only");
		if (val !== null) setHttpsOnly(val !== "false");
	}, []);
	const [phishingProtection, setPhishingProtection] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-phishing-prot");
		if (val !== null) setPhishingProtection(val !== "false");
	}, []);
	const [doNotTrack, setDoNotTrack] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-dnt");
		if (val !== null) setDoNotTrack(val !== "false");
	}, []);
	const [dnsLeakProtection, setDnsLeakProtection] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-dns-leak");
		if (val !== null) setDnsLeakProtection(val !== "false");
	}, []);
	const [fingerprintProt, setFingerprintProt] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-fingerprint-prot");
		if (val !== null) setFingerprintProt(val !== "false");
	}, []);
	const [cleanLinks, setCleanLinks] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-clean-links");
		if (val !== null) setCleanLinks(val !== "false");
	}, []);
	const [cookiePolicy, setCookiePolicy] = (0, import_react.useState)("block-3rd");
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-cookie-mode");
		if (val === "allow" || val === "block-3rd" || val === "block-all") setCookiePolicy(val);
	}, []);
	const [strictDownloads, setStrictDownloads] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-strict-downloads");
		if (val !== null) setStrictDownloads(val !== "false");
	}, []);
	const [blockMixedContent, setBlockMixedContent] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-block-mixed-content");
		if (val !== null) setBlockMixedContent(val !== "false");
	}, []);
	const [isAuditing, setIsAuditing] = (0, import_react.useState)(false);
	const [auditStep, setAuditStep] = (0, import_react.useState)(0);
	const [lastAuditAt, setLastAuditAt] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const t = localStorage.getItem("webna-last-audit");
		if (t) setLastAuditAt(Number(t));
	}, []);
	const [savedCards, setSavedCards] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const s = localStorage.getItem("webna-saved-cards");
		if (s) try {
			setSavedCards(JSON.parse(s));
		} catch {}
		else setSavedCards([{
			id: "card-1",
			cardNumber: "•••• •••• •••• 4242",
			cardHolder: "Alex Morgan",
			expiryMonth: "08",
			expiryYear: "28",
			cvv: "•••",
			billingAddress: "123 Silicon Valley Way, CA",
			isDefault: true,
			cardBrand: "Visa",
			updatedAt: Date.now() - 864e6
		}]);
	}, []);
	const [autofillCards, setAutofillCards] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const val = localStorage.getItem("webna-autofill-cards");
		if (val !== null) setAutofillCards(val !== "false");
	}, []);
	const [showAddCardModal, setShowAddCardModal] = (0, import_react.useState)(false);
	const [editingCardId, setEditingCardId] = (0, import_react.useState)(null);
	const [newCardNumber, setNewCardNumber] = (0, import_react.useState)("");
	const [newCardHolder, setNewCardHolder] = (0, import_react.useState)("");
	const [newExpiryMonth, setNewExpiryMonth] = (0, import_react.useState)("12");
	const [newExpiryYear, setNewExpiryYear] = (0, import_react.useState)("28");
	const [newCvv, setNewCvv] = (0, import_react.useState)("");
	const [newBillingAddress, setNewBillingAddress] = (0, import_react.useState)("");
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
			toast.error(lang === "es" ? "Por favor ingrese el número de tarjeta y titular." : "Please enter card number and cardholder name.");
			return;
		}
		const cleanNum = newCardNumber.replace(/\s+/g, "");
		let brand = "Card";
		if (cleanNum.startsWith("4")) brand = "Visa";
		else if (cleanNum.startsWith("5") || cleanNum.startsWith("2")) brand = "Mastercard";
		else if (cleanNum.startsWith("3")) brand = "American Express";
		else if (cleanNum.startsWith("6")) brand = "Discover";
		const last4 = cleanNum.length >= 4 ? cleanNum.slice(-4) : "4242";
		const masked = cleanNum.includes("•") ? newCardNumber : `•••• •••• •••• ${last4}`;
		if (editingCardId) {
			const updated = savedCards.map((c) => {
				if (c.id === editingCardId) return {
					...c,
					cardNumber: masked,
					cardHolder: newCardHolder.trim(),
					expiryMonth: newExpiryMonth,
					expiryYear: newExpiryYear,
					billingAddress: newBillingAddress.trim() || c.billingAddress,
					cardBrand: brand !== "Card" ? brand : c.cardBrand,
					updatedAt: Date.now()
				};
				return c;
			});
			setSavedCards(updated);
			localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
			setShowAddCardModal(false);
			setEditingCardId(null);
			toast.success(lang === "es" ? "¡Tarjeta de pago actualizada con éxito!" : "Payment card updated successfully!");
		} else {
			const updated = [{
				id: `card-${Date.now()}`,
				cardNumber: masked,
				cardHolder: newCardHolder.trim(),
				expiryMonth: newExpiryMonth,
				expiryYear: newExpiryYear,
				cvv: "•••",
				billingAddress: newBillingAddress.trim() || "Default Address",
				isDefault: savedCards.length === 0,
				cardBrand: brand,
				updatedAt: Date.now()
			}, ...savedCards];
			setSavedCards(updated);
			localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
			setShowAddCardModal(false);
			toast.success(lang === "es" ? "¡Tarjeta de pago guardada de forma segura!" : "Payment card saved securely for online checkout!");
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
		toast.success(lang === "es" ? "Tarjeta eliminada." : "Payment card removed.");
	};
	const handleSetDefaultCard = (id) => {
		const updated = savedCards.map((c) => ({
			...c,
			isDefault: c.id === id
		}));
		setSavedCards(updated);
		localStorage.setItem("webna-saved-cards", JSON.stringify(updated));
		toast.success(lang === "es" ? "Tarjeta predeterminada actualizada." : "Default payment card updated.");
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
		strictDownloads
	].filter(Boolean).length;
	const securityScore = Math.round(activeDefensesCount / 11 * 100);
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
			toast.success(lang === "es" ? `¡Auditoría completada! Protección del navegador: ${securityScore}%` : `Audit completed! Browser protection rated at ${securityScore}%`);
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
	const [lastSyncTime, setLastSyncTime] = (0, import_react.useState)("Just now");
	const fileInputRef = (0, import_react.useRef)(null);
	const handleExportData = () => {
		setIsExporting(true);
		try {
			const backupData = {
				app: "WebNa Browser",
				version: "2.4.0",
				exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
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
					phishingProtection
				}
			};
			const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
			const downloadAnchor = document.createElement("a");
			downloadAnchor.setAttribute("href", dataStr);
			const dateTag = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
			downloadAnchor.setAttribute("download", `webna-backup-${dateTag}.json`);
			document.body.appendChild(downloadAnchor);
			downloadAnchor.click();
			downloadAnchor.remove();
			toast.success(lang === "es" ? "¡Copia de seguridad descargada exitosamente!" : "Backup downloaded successfully!");
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
				if (!json || typeof json !== "object") throw new Error("Invalid format");
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
				if (json.categories && typeof json.categories === "object") setCategories(json.categories);
				toast.success(lang === "es" ? `¡Copia restaurada! (${restoredBookmarks} marcadores, ${restoredSaved} enlaces, ${restoredHistory} historial)` : `Backup restored! (${restoredBookmarks} bookmarks, ${restoredSaved} saved links, ${restoredHistory} history items)`);
				setSubView(null);
			} catch {
				toast.error(lang === "es" ? "No se pudo restaurar. El archivo no es un JSON de WebNa válido." : "Could not restore backup. Please ensure the file is a valid WebNa backup JSON.");
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
			toast.success(lang === "es" ? "Sincronización en la nube completada." : "Cloud sync complete: All bookmarks and settings are up to date.");
		}, 1200);
	};
	const [passwords, setPasswords] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("webna-passwords");
		if (saved) try {
			return JSON.parse(saved);
		} catch {
			return INITIAL_PASSWORDS;
		}
		return INITIAL_PASSWORDS;
	});
	const [passwordSearch, setPasswordSearch] = (0, import_react.useState)("");
	const [showPasswordMap, setShowPasswordMap] = (0, import_react.useState)({});
	const [showAddPasswordModal, setShowAddPasswordModal] = (0, import_react.useState)(false);
	const [editingPasswordId, setEditingPasswordId] = (0, import_react.useState)(null);
	const [newDomain, setNewDomain] = (0, import_react.useState)("");
	const [newUsername, setNewUsername] = (0, import_react.useState)("");
	const [newPasswordVal, setNewPasswordVal] = (0, import_react.useState)("");
	const [savePasswordPrompt, setSavePasswordPrompt] = (0, import_react.useState)(() => {
		return localStorage.getItem("webna-save-password-prompt") !== "false";
	});
	const [autoFillEnabled, setAutoFillEnabled] = (0, import_react.useState)(() => {
		return localStorage.getItem("webna-autofill-passwords") !== "false";
	});
	const savePasswordsList = (list) => {
		setPasswords(list);
		localStorage.setItem("webna-passwords", JSON.stringify(list));
	};
	const toggleShowPassword = (id) => {
		setShowPasswordMap((prev) => ({
			...prev,
			[id]: !prev[id]
		}));
	};
	const copyToClipboard = (text, label) => {
		navigator.clipboard.writeText(text);
		toast.success(lang === "es" ? `${label} copiado al portapapeles` : `${label} copied to clipboard!`);
	};
	const handleDeletePassword = (id) => {
		const next = passwords.filter((p) => p.id !== id);
		savePasswordsList(next);
		toast.success(lang === "es" ? "Credencial eliminada" : "Credential removed from saved passwords.");
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
			toast.error(lang === "es" ? "Por favor completa todos los campos" : "Please fill in all fields.");
			return;
		}
		const cleanDomain = newDomain.trim().replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
		if (editingPasswordId) {
			const next = passwords.map((p) => {
				if (p.id === editingPasswordId) return {
					...p,
					domain: cleanDomain,
					username: newUsername.trim(),
					password: newPasswordVal.trim(),
					updatedAt: Date.now()
				};
				return p;
			});
			savePasswordsList(next);
			setEditingPasswordId(null);
			setNewDomain("");
			setNewUsername("");
			setNewPasswordVal("");
			setShowAddPasswordModal(false);
			toast.success(lang === "es" ? "Credencial actualizada" : "Password credential updated successfully.");
		} else {
			const next = [{
				id: "pwd-" + Date.now(),
				domain: cleanDomain,
				username: newUsername.trim(),
				password: newPasswordVal.trim(),
				updatedAt: Date.now()
			}, ...passwords];
			savePasswordsList(next);
			setNewDomain("");
			setNewUsername("");
			setNewPasswordVal("");
			setShowAddPasswordModal(false);
			toast.success(lang === "es" ? `¡Contraseña guardada para ${cleanDomain}!` : `Saved password for ${cleanDomain}!`);
		}
	};
	const generateStrongPassword = () => {
		const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
		let gen = "";
		for (let i = 0; i < 16; i++) gen += chars.charAt(Math.floor(Math.random() * 74));
		setNewPasswordVal(gen);
		toast.success(lang === "es" ? "¡Contraseña segura generada!" : "Strong password generated!");
	};
	const [clearHistorySelected, setClearHistorySelected] = (0, import_react.useState)(true);
	const [clearCookiesSelected, setClearCookiesSelected] = (0, import_react.useState)(true);
	const [clearCacheSelected, setClearCacheSelected] = (0, import_react.useState)(true);
	const [clearBookmarksSelected, setClearBookmarksSelected] = (0, import_react.useState)(false);
	const [clearPasswordsSelected, setClearPasswordsSelected] = (0, import_react.useState)(false);
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
		toast.success(lang === "es" ? `Borrado: ${clearedItems.join(", ")}` : `Cleared: ${clearedItems.join(", ")}`);
		setSubView(null);
	};
	const currentLangLabel = LANGUAGES.find((l) => l.code === lang)?.name || "English (US)";
	const subViewTitles = {
		language: t("language"),
		appearance: t("appearance"),
		notifications: t("notifications"),
		safety: t("safetyHub"),
		backup: t("dataBackup"),
		passwords: t("passwords"),
		privacy: t("privacyPolicy"),
		blockings: t("blockingsAndShields"),
		"clear-data": t("clearBrowsingData")
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col h-full bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between border-b px-4 py-3 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [subView !== null && /* @__PURE__ */ (void 0)("button", {
					onClick: () => setSubView(null),
					className: "p-1 -ml-1 text-foreground hover:bg-muted rounded-full transition-colors",
					"aria-label": t("back"),
					children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-6" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 1027,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 1022,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-xl font-bold tracking-tight text-foreground",
					children: subView ? subViewTitles[subView] : t("settings")
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 1030,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 1020,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: onClose,
				className: "p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors",
				"aria-label": t("close"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 1039,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 1034,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 1019,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex-1 overflow-y-auto p-4 space-y-3",
			children: [
				subView === null && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2.5",
							children: [
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("language"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400",
											children: /* @__PURE__ */ (void 0)(Globe, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1056,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1055,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("language")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1059,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: currentLangLabel
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1062,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1058,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1054,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1067,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1050,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("appearance"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400",
											children: /* @__PURE__ */ (void 0)(Palette, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1077,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1076,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("appearance")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1080,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground capitalize",
											children: [
												theme,
												" • ",
												fontSize
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1083,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1079,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1075,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1088,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1071,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: handleRatePlayStore,
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors group",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500",
											children: /* @__PURE__ */ (void 0)(Star, { className: "size-5 fill-amber-500" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1098,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1097,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("rateUs")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1101,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("rateSupportOnPlay")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1104,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1100,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1096,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1 text-xs font-semibold text-brand",
										children: /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1110,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1109,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1092,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: handleShareApp,
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
											children: /* @__PURE__ */ (void 0)(Share2, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1121,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1120,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("shareApp")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1124,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("shareWithFriends")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1127,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1123,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1119,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(Share2, { className: "size-4 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1132,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1115,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("notifications"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500",
											children: /* @__PURE__ */ (void 0)(Bell, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1142,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1141,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("notifications")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1145,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("notificationsSub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1148,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1144,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1140,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1153,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1136,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("safety"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand",
											children: /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1163,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1162,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("safetyHub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1166,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("safetyHubSub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1169,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1165,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1161,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1174,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1157,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("backup"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
											children: /* @__PURE__ */ (void 0)(Database, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1184,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1183,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("dataBackup")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1187,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("dataBackupSub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1190,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1186,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1182,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1195,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("passwords"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500",
											children: /* @__PURE__ */ (void 0)(KeyRound, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1205,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1204,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("passwords")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1208,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: [
												passwords.length,
												" ",
												t("savedCredentialsCount")
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1211,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1207,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1203,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1216,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1199,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("payments"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
											children: /* @__PURE__ */ (void 0)(CreditCard, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1226,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1225,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: lang === "es" ? "Métodos de pago" : "Payment Methods"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1229,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: [
												savedCards.length,
												" ",
												lang === "es" ? "tarjetas guardadas, autocompletar" : "saved cards, autofill"
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1232,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1228,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1224,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1240,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1220,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("privacy"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500",
											children: /* @__PURE__ */ (void 0)(FileText, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1250,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1249,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("privacyPolicy")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1253,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("privacySub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1256,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1252,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1248,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-5 text-muted-foreground/60" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1261,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1244,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setSubView("blockings"),
									className: "flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-9 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500",
											children: /* @__PURE__ */ (void 0)(Lock, { className: "size-5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1271,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1270,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: t("blockingsAndShields")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1274,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: t("shieldsSub")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1277,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1273,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1269,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-brand font-semibold px-2.5 py-0.5 rounded-full bg-brand/10",
										children: t("active")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1282,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1265,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1048,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (void 0)("button", {
								onClick: () => setSubView("clear-data"),
								className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive/10 hover:bg-destructive/15 text-destructive p-4 font-semibold text-sm transition-colors border border-destructive/20",
								children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1294,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: t("clearAllBrowsingData") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1295,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1290,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 1289,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "text-center pt-3 text-xs text-muted-foreground space-y-1",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "font-medium",
								children: "WebNa Browser v2.4.0 (Android & Web)"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1301,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-[11px] text-muted-foreground/70",
								children: "Fast • Secure • Ad-Free"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1304,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1300,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 1047,
					columnNumber: 11
				}, this),
				subView === "language" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-sm text-foreground",
								children: t("displayAndSearchLanguage")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1315,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: t("chooseLanguageSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1318,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1314,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
								className: "font-semibold text-sm",
								children: t("autoTranslateForeign")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1325,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: t("autoTranslateSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1328,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1324,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								role: "switch",
								"aria-checked": autoTranslate,
								onClick: () => {
									const next = !autoTranslate;
									setAutoTranslate(next);
									localStorage.setItem("webna-auto-translate", String(next));
								},
								className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${autoTranslate ? "bg-brand" : "bg-muted"}`,
								children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${autoTranslate ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1345,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1332,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1323,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
								children: t("supportedLanguages")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1354,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs",
								children: LANGUAGES.map((item) => {
									const isSelected = lang === item.code;
									return /* @__PURE__ */ (void 0)("button", {
										onClick: () => handleSelectLanguage(item.code),
										className: "flex w-full items-center justify-between p-3.5 text-left hover:bg-muted/40 transition-colors",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-medium text-sm text-foreground block",
											children: item.name
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1367,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs text-muted-foreground",
											children: item.native
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1370,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1366,
											columnNumber: 23
										}, this), isSelected && /* @__PURE__ */ (void 0)("div", {
											className: "flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground",
											children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[3]" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1376,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1375,
											columnNumber: 25
										}, this)]
									}, item.code, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1361,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1357,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1353,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 1313,
					columnNumber: 11
				}, this),
				subView === "appearance" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-sm text-foreground",
								children: t("themeAndDisplay")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1391,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: t("appearanceSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1394,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1390,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
								children: t("colorTheme")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1401,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									{
										id: "light",
										label: t("lightTheme"),
										Icon: Sun
									},
									{
										id: "dark",
										label: t("darkTheme"),
										Icon: Moon
									},
									{
										id: "system",
										label: t("systemTheme"),
										Icon: Laptop
									}
								].map(({ id, label, Icon }) => {
									return /* @__PURE__ */ (void 0)("button", {
										onClick: () => applyTheme(id),
										className: `flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border text-center transition-all ${theme === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold shadow-xs" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
										children: [/* @__PURE__ */ (void 0)(Icon, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1425,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-xs",
											children: label
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1426,
											columnNumber: 23
										}, this)]
									}, id, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1416,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1404,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1400,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
								children: t("textScaling")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1435,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-4 gap-2",
								children: [
									{
										id: "small",
										label: t("small"),
										size: "85%"
									},
									{
										id: "medium",
										label: t("normal"),
										size: "100%"
									},
									{
										id: "large",
										label: t("large"),
										size: "115%"
									},
									{
										id: "xlarge",
										label: t("huge"),
										size: "130%"
									}
								].map(({ id, label, size }) => {
									return /* @__PURE__ */ (void 0)("button", {
										onClick: () => applyFontSize(id),
										className: `flex flex-col items-center justify-center p-2.5 rounded-2xl border text-center transition-all ${fontSize === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-xs font-bold",
											children: label
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1456,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] text-muted-foreground",
											children: size
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1457,
											columnNumber: 23
										}, this)]
									}, id, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1447,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1438,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1434,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
								children: t("addressBarPosition")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1468,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [{
									id: "top",
									label: t("topStandard")
								}, {
									id: "bottom",
									label: t("bottomEasy")
								}].map(({ id, label }) => {
									return /* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											setAddressBarPosition(id);
											localStorage.setItem("webna-address-bar", id);
											toast.success(`${t("addressBarPosition")}: ${label}`);
										},
										className: `p-3 rounded-2xl border text-center text-xs font-medium transition-all ${addressBarPosition === id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold" : "border-border/80 bg-card hover:bg-muted/40 text-foreground"}`,
										children: label
									}, id, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1478,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1471,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1467,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
								className: "font-semibold text-sm",
								children: t("highContrast")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1501,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: t("highContrastSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1502,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1500,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								role: "switch",
								"aria-checked": highContrast,
								onClick: () => {
									const next = !highContrast;
									setHighContrast(next);
									localStorage.setItem("webna-high-contrast", String(next));
									toast.success(next ? "High contrast enabled" : "High contrast disabled");
								},
								className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${highContrast ? "bg-brand" : "bg-muted"}`,
								children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${highContrast ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1522,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1506,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1499,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 1389,
					columnNumber: 11
				}, this),
				subView === "notifications" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "font-semibold text-sm text-foreground",
									children: t("androidNotificationPermission")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1538,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: t("permissionRequiredSub")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1541,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1537,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: `text-xs font-bold px-2.5 py-1 rounded-full uppercase ${notifPermission === "granted" ? "bg-emerald-500/10 text-emerald-600" : notifPermission === "denied" ? "bg-destructive/10 text-destructive" : "bg-amber-500/10 text-amber-600"}`,
									children: notifPermission
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1545,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1536,
								columnNumber: 15
							}, this), notifPermission !== "granted" && /* @__PURE__ */ (void 0)("button", {
								onClick: requestNotifPermission,
								className: "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs",
								children: [/* @__PURE__ */ (void 0)(Bell, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1563,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: t("requestPermission") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1564,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1559,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1535,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1",
								children: t("notificationCategories")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1571,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-2.5",
								children: [
									{
										title: t("downloadCompletedAlerts"),
										desc: t("downloadCompletedSub"),
										val: notifDownloads,
										set: (v) => {
											setNotifDownloads(v);
											localStorage.setItem("webna-notif-downloads", String(v));
										}
									},
									{
										title: t("safeBrowsingAlerts"),
										desc: t("safeBrowsingSub"),
										val: notifSecurity,
										set: (v) => {
											setNotifSecurity(v);
											localStorage.setItem("webna-notif-security", String(v));
										}
									},
									{
										title: t("newsTrendingUpdates"),
										desc: t("newsTrendingSub"),
										val: notifNews,
										set: (v) => {
											setNotifNews(v);
											localStorage.setItem("webna-notif-news", String(v));
										}
									},
									{
										title: t("mediaBackgroundPlayback"),
										desc: t("mediaPlaybackSub"),
										val: notifPlayback,
										set: (v) => {
											setNotifPlayback(v);
											localStorage.setItem("webna-notif-playback", String(v));
										}
									},
									{
										title: t("vibrationSoundAlerts"),
										desc: t("vibrationSub"),
										val: notifVibration,
										set: (v) => {
											setNotifVibration(v);
											localStorage.setItem("webna-notif-vibration", String(v));
										}
									}
								].map((item, idx) => /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "space-y-0.5 pr-4",
										children: [/* @__PURE__ */ (void 0)("h4", {
											className: "font-semibold text-sm",
											children: item.title
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1627,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-muted-foreground",
											children: item.desc
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1628,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1626,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										role: "switch",
										"aria-checked": item.val,
										onClick: () => item.set(!item.val),
										className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${item.val ? "bg-brand" : "bg-muted"}`,
										children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${item.val ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1641,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1632,
										columnNumber: 21
									}, this)]
								}, idx, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1622,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1574,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1570,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: sendTestNotification,
							className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-foreground font-medium text-xs hover:bg-muted/40 transition-colors",
							children: [/* @__PURE__ */ (void 0)(Send, { className: "size-3.5 text-brand" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1657,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: t("sendTestNotification") }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 1658,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1653,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 1534,
					columnNumber: 11
				}, this),
				subView === "safety" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 p-4 shadow-2xs",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30",
										children: /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-6 stroke-[2.2]" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1671,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1670,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)("h3", {
											className: "font-bold text-sm text-foreground",
											children: t("shieldActive")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1675,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
											children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1679,
												columnNumber: 25
											}, this), securityScore >= 90 ? t("auditStatusExcellent") : securityScore >= 70 ? t("auditStatusGood") : t("auditStatusFair")]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1678,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1674,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground mt-0.5 line-clamp-1",
										children: t("shieldActiveSub")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1687,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1673,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1669,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "shrink-0 text-right",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "text-lg font-black text-emerald-600 dark:text-emerald-400 leading-none",
										children: [securityScore, "%"]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1695,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[10px] text-muted-foreground uppercase font-semibold",
										children: [activeDefensesCount, "/11 active"]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1698,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1694,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1668,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 1667,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-2 p-1 rounded-2xl bg-muted/60 border border-border/60",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setSafetyTab("controls"),
								className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${safetyTab === "controls" ? "bg-card text-foreground shadow-xs border border-border/60" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (void 0)(Shield, { className: "size-3.5 text-brand" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1716,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: t("safetyControlsTab") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 1717,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1707,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setSafetyTab("audit"),
								className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${safetyTab === "audit" ? "bg-card text-foreground shadow-xs border border-border/60" : "text-muted-foreground hover:text-foreground"}`,
								children: [
									/* @__PURE__ */ (void 0)(Activity, { className: "size-3.5 text-emerald-600 dark:text-emerald-400" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1728,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { children: t("safetyAuditTab") }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1729,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 1730,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 1719,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1706,
							columnNumber: 13
						}, this),
						safetyTab === "controls" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-2.5",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between px-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(FingerprintPattern, { className: "size-3.5 text-brand" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1741,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
												children: t("privacyAndIdentity")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1742,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1740,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] font-semibold text-brand px-2 py-0.5 rounded-full bg-brand/10",
											children: "Privacy"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1746,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1739,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("adsAndTrackers")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1755,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("adsAndTrackersSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1758,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1754,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": blockAds && blockTrackers,
													onClick: () => {
														const next = !(blockAds && blockTrackers);
														setBlockAds(next);
														setBlockTrackers(next);
														localStorage.setItem("webna-block-ads", String(next));
														localStorage.setItem("webna-block-trackers", String(next));
														toast.success(next ? "Ad & Tracker Shield enabled" : "Ad & Tracker Shield disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockAds && blockTrackers ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockAds && blockTrackers ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1785,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1762,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1753,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("fingerprintProtection")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1798,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("fingerprintProtectionSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1801,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1797,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": fingerprintProt,
													onClick: () => {
														const next = !fingerprintProt;
														setFingerprintProt(next);
														localStorage.setItem("webna-fingerprint-prot", String(next));
														toast.success(next ? "Anti-Fingerprint masking enabled" : "Anti-Fingerprint masking disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${fingerprintProt ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${fingerprintProt ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1826,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1805,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1796,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("cleanLinks")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1837,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("cleanLinksSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1840,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1836,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": cleanLinks,
													onClick: () => {
														const next = !cleanLinks;
														setCleanLinks(next);
														localStorage.setItem("webna-clean-links", String(next));
														toast.success(next ? "Link Sanitizer active (tracking tags stripped)" : "Link Sanitizer disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${cleanLinks ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${cleanLinks ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1865,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1844,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1835,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("blockNotificationRequests")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1876,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("blockNotificationRequestsSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1879,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1875,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": blockNotifications,
													onClick: () => {
														const next = !blockNotifications;
														setBlockNotifications(next);
														localStorage.setItem("webna-block-notifications", String(next));
														toast.success(next ? "Silent browsing enabled (push requests muted)" : "Notification requests allowed");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockNotifications ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockNotifications ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 1904,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1883,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1874,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
													className: "font-semibold text-xs text-foreground",
													children: t("cookieManagement")
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1917,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-[11px] text-muted-foreground",
													children: t("cookieManagementSub")
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1920,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1916,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-3 gap-1.5 pt-1",
													children: [
														{
															id: "allow",
															label: t("cookieAllow"),
															desc: "Standard"
														},
														{
															id: "block-3rd",
															label: t("cookieBlock3rd"),
															desc: "Recommended"
														},
														{
															id: "block-all",
															label: t("cookieBlockAll"),
															desc: "Strict"
														}
													].map((opt) => {
														return /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => {
																setCookiePolicy(opt.id);
																localStorage.setItem("webna-cookie-mode", opt.id);
																setBlockCookies(opt.id !== "allow");
																localStorage.setItem("webna-block-cookies", String(opt.id !== "allow"));
																toast.success(`Cookie policy set: ${opt.label}`);
															},
															className: `p-2 rounded-xl text-center border transition-all ${cookiePolicy === opt.id ? "border-brand bg-brand/10 text-brand ring-1 ring-brand font-bold shadow-2xs" : "border-border/60 bg-muted/30 hover:bg-muted/60 text-muted-foreground"}`,
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[11px] block leading-tight",
																children: opt.label
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 1968,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-[9px] opacity-75 font-normal",
																children: opt.desc
															}, void 0, false, {
																fileName: _jsxFileName$2,
																lineNumber: 1971,
																columnNumber: 31
															}, this)]
														}, opt.id, true, {
															fileName: _jsxFileName$2,
															lineNumber: 1944,
															columnNumber: 29
														}, this);
													})
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 1924,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1915,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1751,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1738,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-2.5 pt-2",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between px-1",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)(Lock, { className: "size-3.5 text-emerald-600 dark:text-emerald-400" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1986,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
												children: t("connectionAndThreat")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 1987,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 1985,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10",
											children: "Security"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 1991,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1984,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("httpsOnlyMode")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2e3,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("httpsOnlySub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2003,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 1999,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": httpsOnly,
													onClick: () => {
														const next = !httpsOnly;
														setHttpsOnly(next);
														localStorage.setItem("webna-https-only", String(next));
														toast.success(next ? "Strict HTTPS enforcement enabled" : "HTTPS enforcement relaxed");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${httpsOnly ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${httpsOnly ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2028,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2007,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 1998,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("antiPhishing")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2039,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("antiPhishingSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2042,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2038,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": phishingProtection,
													onClick: () => {
														const next = !phishingProtection;
														setPhishingProtection(next);
														localStorage.setItem("webna-phishing-prot", String(next));
														toast.success(next ? "Phishing & malware sentry active" : "Phishing sentry disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${phishingProtection ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${phishingProtection ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2067,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2046,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2037,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("blockPopupsTitle")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2080,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("blockPopupsSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2083,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2079,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": blockPopups,
													onClick: () => {
														const next = !blockPopups;
														setBlockPopups(next);
														localStorage.setItem("webna-block-popups", String(next));
														toast.success(next ? "Pop-up blocker active" : "Pop-ups allowed");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockPopups ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockPopups ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2106,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2087,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2078,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("blockMixedContent")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2117,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("blockMixedContentSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2120,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2116,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": blockMixedContent,
													onClick: () => {
														const next = !blockMixedContent;
														setBlockMixedContent(next);
														localStorage.setItem("webna-block-mixed-content", String(next));
														toast.success(next ? "Mixed content blocked" : "Mixed content permitted");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${blockMixedContent ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${blockMixedContent ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2145,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2124,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2115,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("sendDntHeader")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2158,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("sendDntSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2161,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2157,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": doNotTrack,
													onClick: () => {
														const next = !doNotTrack;
														setDoNotTrack(next);
														localStorage.setItem("webna-dnt", String(next));
														toast.success(next ? "Global Privacy Control & DNT enabled" : "DNT headers disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${doNotTrack ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${doNotTrack ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2183,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2165,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2156,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("strictDownloads")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2194,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("strictDownloadsSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2197,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2193,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": strictDownloads,
													onClick: () => {
														const next = !strictDownloads;
														setStrictDownloads(next);
														localStorage.setItem("webna-strict-downloads", String(next));
														toast.success(next ? "Drive-by download guard enabled" : "Strict download guard disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${strictDownloads ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${strictDownloads ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2222,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2201,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2192,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "space-y-0.5 pr-3",
													children: [/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-xs text-foreground",
														children: t("dnsLeakMitigation")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2233,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground leading-snug",
														children: t("dnsLeakSub")
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2236,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2232,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													role: "switch",
													"aria-checked": dnsLeakProtection,
													onClick: () => {
														const next = !dnsLeakProtection;
														setDnsLeakProtection(next);
														localStorage.setItem("webna-dns-leak", String(next));
														toast.success(next ? "DNS leak mitigation active" : "DNS leak mitigation disabled");
													},
													className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${dnsLeakProtection ? "bg-brand" : "bg-muted"}`,
													children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${dnsLeakProtection ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2258,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2240,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2231,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 1996,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 1983,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setSubView("blockings"),
									className: "flex w-full items-center justify-between rounded-2xl border border-brand/30 bg-brand/5 p-4 text-left hover:bg-brand/10 transition-colors",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-xs text-brand block",
										children: t("detailedShieldPermissions")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2277,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-[11px] text-muted-foreground",
										children: t("detailedShieldSub")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2280,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2276,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4 text-brand" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2284,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2271,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 1736,
							columnNumber: 15
						}, this),
						safetyTab === "audit" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "font-bold text-sm text-foreground",
												children: t("auditScoreTitle")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2296,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-muted-foreground",
												children: t("auditScoreSub")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2299,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2295,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xl",
												children: [securityScore, "%"]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2303,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2294,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "h-2 w-full rounded-full bg-muted overflow-hidden",
											children: /* @__PURE__ */ (void 0)("div", {
												className: `h-full transition-all duration-500 ${securityScore >= 90 ? "bg-emerald-500" : securityScore >= 70 ? "bg-amber-500" : "bg-destructive"}`,
												style: { width: `${securityScore}%` }
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2310,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2309,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between text-xs text-muted-foreground pt-1",
											children: [/* @__PURE__ */ (void 0)("span", { children: securityScore >= 90 ? `✓ ${t("auditStatusExcellent")}` : securityScore >= 70 ? `! ${t("auditStatusGood")}` : `⚠ ${t("auditStatusFair")}` }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2323,
												columnNumber: 21
											}, this), lastAuditAt && /* @__PURE__ */ (void 0)("span", {
												className: "text-[10px]",
												children: ["Last audit: ", new Date(lastAuditAt).toLocaleTimeString()]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2331,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2322,
											columnNumber: 19
										}, this),
										securityScore < 100 && /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: handleAutoProtectAll,
											className: "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 px-3 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity",
											children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2344,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", { children: t("optimizeAll") }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2345,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2339,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2293,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex size-9 items-center justify-center rounded-xl bg-muted text-foreground",
												children: /* @__PURE__ */ (void 0)(Activity, { className: `size-4 ${isAuditing ? "animate-spin text-brand" : "text-emerald-600"}` }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2355,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2354,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
												className: "font-semibold text-xs text-foreground",
												children: isAuditing ? t("runningAudit") : t("runAudit")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2360,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-muted-foreground",
												children: isAuditing ? auditStep === 1 ? "Auditing TLS cipher suites & HTTPS..." : auditStep === 2 ? "Testing tracker & telemetry filter rules..." : auditStep === 3 ? "Validating canvas fingerprint obfuscation..." : "Checking link sanitizer rules..." : "Performs full integrity check of device shields"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2363,
												columnNumber: 25
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2359,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2353,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2352,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: handleRunSecurityAudit,
										disabled: isAuditing,
										className: "flex w-full items-center justify-center gap-2 rounded-xl bg-muted hover:bg-muted/80 border border-border py-2.5 text-foreground font-semibold text-xs transition-colors",
										children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: `size-3.5 text-brand ${isAuditing ? "animate-spin" : ""}` }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2384,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: isAuditing ? t("runningAudit") : t("runAudit") }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2387,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2378,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2351,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground px-1",
										children: t("auditChecklist")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2395,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-border/80 bg-card divide-y divide-border/60 overflow-hidden shadow-2xs",
										children: [
											{
												name: t("adsAndTrackers"),
												active: blockAds && blockTrackers,
												fix: () => {
													setBlockAds(true);
													setBlockTrackers(true);
													localStorage.setItem("webna-block-ads", "true");
													localStorage.setItem("webna-block-trackers", "true");
												}
											},
											{
												name: t("fingerprintProtection"),
												active: fingerprintProt,
												fix: () => {
													setFingerprintProt(true);
													localStorage.setItem("webna-fingerprint-prot", "true");
												}
											},
											{
												name: t("cleanLinks"),
												active: cleanLinks,
												fix: () => {
													setCleanLinks(true);
													localStorage.setItem("webna-clean-links", "true");
												}
											},
											{
												name: t("blockNotificationRequests"),
												active: blockNotifications,
												fix: () => {
													setBlockNotifications(true);
													localStorage.setItem("webna-block-notifications", "true");
												}
											},
											{
												name: t("cookieManagement"),
												active: cookiePolicy !== "allow",
												fix: () => {
													setCookiePolicy("block-3rd");
													localStorage.setItem("webna-cookie-mode", "block-3rd");
													setBlockCookies(true);
													localStorage.setItem("webna-block-cookies", "true");
												}
											},
											{
												name: t("httpsOnlyMode"),
												active: httpsOnly,
												fix: () => {
													setHttpsOnly(true);
													localStorage.setItem("webna-https-only", "true");
												}
											},
											{
												name: t("antiPhishing"),
												active: phishingProtection,
												fix: () => {
													setPhishingProtection(true);
													localStorage.setItem("webna-phishing-prot", "true");
												}
											},
											{
												name: t("blockPopupsTitle"),
												active: blockPopups,
												fix: () => {
													setBlockPopups(true);
													localStorage.setItem("webna-block-popups", "true");
												}
											},
											{
												name: t("blockMixedContent"),
												active: blockMixedContent,
												fix: () => {
													setBlockMixedContent(true);
													localStorage.setItem("webna-block-mixed-content", "true");
												}
											},
											{
												name: t("sendDntHeader"),
												active: doNotTrack,
												fix: () => {
													setDoNotTrack(true);
													localStorage.setItem("webna-dnt", "true");
												}
											},
											{
												name: t("strictDownloads"),
												active: strictDownloads,
												fix: () => {
													setStrictDownloads(true);
													localStorage.setItem("webna-strict-downloads", "true");
												}
											}
										].map((item, idx) => /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between p-3 text-xs",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-2",
												children: [item.active ? /* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-emerald-600 dark:text-emerald-400 shrink-0" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2515,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 text-amber-500 shrink-0" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2517,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-medium text-foreground",
													children: item.name
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2519,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2513,
												columnNumber: 25
											}, this), item.active ? /* @__PURE__ */ (void 0)("span", {
												className: "text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10",
												children: "Protected"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2524,
												columnNumber: 27
											}, this) : /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													item.fix();
													toast.success(`Enabled: ${item.name}`);
												},
												className: "text-[10px] font-bold text-brand px-2 py-0.5 rounded-full bg-brand/10 hover:bg-brand/20 transition-colors",
												children: "Enable"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2528,
												columnNumber: 27
											}, this)]
										}, idx, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2509,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2399,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2394,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2291,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 1665,
					columnNumber: 11
				}, this),
				subView === "backup" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-sm text-foreground",
								children: t("backupAndSync")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2552,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: t("backupSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2555,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2551,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "size-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-base shrink-0",
										children: "M"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2564,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
										className: "font-bold text-sm block",
										children: "musichub661@gmail.com"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2568,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-muted-foreground",
										children: [
											t("cloudSync"),
											":",
											" ",
											syncStatus === "syncing" ? "Syncing..." : "Connected"
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2571,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2567,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2563,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: handleCloudSync,
									disabled: syncStatus === "syncing",
									className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition-colors disabled:opacity-50",
									children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: `size-3.5 ${syncStatus === "syncing" ? "animate-spin text-brand" : ""}` }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2582,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: t("syncNow") }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2585,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2577,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2562,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex justify-between text-xs text-muted-foreground pt-1 border-t",
								children: [/* @__PURE__ */ (void 0)("span", { children: t("lastCloudSync") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2589,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-medium text-foreground",
									children: lastSyncTime
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2590,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2588,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2561,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (void 0)(Download, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2600,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2599,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
									className: "font-semibold text-sm",
									children: t("exportToJson")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2603,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: t("exportSub")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2604,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2602,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2598,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: handleExportData,
								disabled: isExporting,
								className: "flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity mt-2",
								children: [/* @__PURE__ */ (void 0)(Download, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2614,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: isExporting ? "Exporting..." : t("downloadBackupFile") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2615,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2609,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2597,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "size-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ (void 0)(Upload, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2625,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2624,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-semibold text-sm",
										children: t("restoreFromBackup")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2628,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground",
										children: t("restoreSub")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2631,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2627,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2623,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("input", {
									ref: fileInputRef,
									type: "file",
									accept: ".json,application/json",
									onChange: handleImportFile,
									className: "hidden",
									id: "restore-file-input"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2636,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => fileInputRef.current?.click(),
									disabled: isImporting,
									className: "flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-foreground font-semibold text-xs hover:bg-muted/40 transition-colors mt-2",
									children: [/* @__PURE__ */ (void 0)(Upload, { className: "size-3.5 text-brand" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2649,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("span", { children: isImporting ? "Reading File..." : t("chooseBackupFile") }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2650,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2644,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2622,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 2550,
					columnNumber: 11
				}, this),
				subView === "passwords" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-sm text-foreground",
								children: t("savedPasswords")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2663,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: t("passwordVaultSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2666,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2662,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: handleOpenAddPassword,
								className: "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90",
								children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2674,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", { children: t("add") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2675,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2670,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2661,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (void 0)("input", {
								type: "text",
								placeholder: t("searchAccounts"),
								value: passwordSearch,
								onChange: (e) => setPasswordSearch(e.target.value),
								className: "w-full rounded-2xl border border-border bg-card py-2.5 pl-9 pr-4 text-xs outline-none focus:border-brand"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2681,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(Lock, { className: "absolute left-3 top-3 size-3.5 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2688,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2680,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl border border-border/80 bg-card p-3 space-y-2 text-xs",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("span", { children: t("offerToSavePasswords") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2694,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									role: "switch",
									"aria-checked": savePasswordPrompt,
									onClick: () => {
										const next = !savePasswordPrompt;
										setSavePasswordPrompt(next);
										localStorage.setItem("webna-save-password-prompt", String(next));
									},
									className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${savePasswordPrompt ? "bg-brand" : "bg-muted"}`,
									children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${savePasswordPrompt ? "translate-x-4" : "translate-x-0"}` }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2711,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2695,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2693,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between border-t pt-2",
								children: [/* @__PURE__ */ (void 0)("span", { children: t("autoFillWebForms") }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2719,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									role: "switch",
									"aria-checked": autoFillEnabled,
									onClick: () => {
										const next = !autoFillEnabled;
										setAutoFillEnabled(next);
										localStorage.setItem("webna-autofill-passwords", String(next));
									},
									className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${autoFillEnabled ? "bg-brand" : "bg-muted"}`,
									children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${autoFillEnabled ? "translate-x-4" : "translate-x-0"}` }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2736,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2720,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2718,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2692,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-2.5",
							children: passwords.filter((p) => p.domain.toLowerCase().includes(passwordSearch.toLowerCase()) || p.username.toLowerCase().includes(passwordSearch.toLowerCase())).map((cred) => {
								const isVisible = showPasswordMap[cred.id];
								return /* @__PURE__ */ (void 0)("div", {
									onClick: () => handleOpenEditPassword(cred),
									className: "rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2.5 cursor-pointer hover:border-brand/50 transition-all",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-2.5 min-w-0",
											children: [/* @__PURE__ */ (void 0)("img", {
												src: `https://www.google.com/s2/favicons?domain=${cred.domain}&sz=32`,
												alt: "",
												className: "size-5 rounded-sm shrink-0",
												onError: (e) => {
													e.target.style.display = "none";
												}
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2767,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "font-semibold text-sm text-foreground truncate",
												children: cred.domain
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2775,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2766,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: (e) => {
												e.stopPropagation();
												handleDeletePassword(cred.id);
											},
											className: "text-muted-foreground hover:text-destructive p-1 rounded-lg",
											"aria-label": t("delete"),
											children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2787,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2779,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2765,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-1.5 text-xs",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-muted-foreground truncate mr-2",
												children: cred.username
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2793,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("button", {
												onClick: (e) => {
													e.stopPropagation();
													copyToClipboard(cred.username, "Username");
												},
												className: "p-1 hover:text-brand",
												"aria-label": t("copy"),
												children: /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2804,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2796,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2792,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "font-mono text-xs tracking-wider truncate mr-2",
												children: isVisible ? cred.password : "••••••••••••"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 2809,
												columnNumber: 27
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("button", {
													onClick: (e) => {
														e.stopPropagation();
														toggleShowPassword(cred.id);
													},
													className: "p-1 hover:text-foreground text-muted-foreground",
													"aria-label": "Toggle password view",
													children: isVisible ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2822,
														columnNumber: 33
													}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2824,
														columnNumber: 33
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2813,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("button", {
													onClick: (e) => {
														e.stopPropagation();
														copyToClipboard(cred.password, "Password");
													},
													className: "p-1 hover:text-brand text-muted-foreground",
													"aria-label": t("copy"),
													children: /* @__PURE__ */ (void 0)(Copy, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2835,
														columnNumber: 31
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 2827,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 2812,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2808,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2791,
										columnNumber: 23
									}, this)]
								}, cred.id, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2760,
									columnNumber: 21
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 2746,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 2660,
					columnNumber: 11
				}, this),
				showAddPasswordModal && /* @__PURE__ */ (void 0)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",
					children: /* @__PURE__ */ (void 0)("div", {
						className: "w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "font-bold text-base text-foreground",
									children: editingPasswordId ? lang === "es" ? "Editar credencial" : "Edit Credential" : t("saveNewCredential")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2852,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: () => setShowAddPasswordModal(false),
									className: "p-1 text-muted-foreground",
									children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2863,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2859,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2851,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "text-xs font-semibold text-muted-foreground block mb-1",
										children: t("websiteDomain")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2869,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "e.g. netflix.com",
										value: newDomain,
										onChange: (e) => setNewDomain(e.target.value),
										className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2872,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2868,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "text-xs font-semibold text-muted-foreground block mb-1",
										children: t("usernameEmail")
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2881,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "e.g. user@example.com",
										value: newUsername,
										onChange: (e) => setNewUsername(e.target.value),
										className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2884,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2880,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (void 0)("label", {
											className: "text-xs font-semibold text-muted-foreground",
											children: t("passwordLabel")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2894,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: generateStrongPassword,
											className: "text-[11px] font-semibold text-brand hover:underline",
											children: t("generateStrong")
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2897,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2893,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "Password",
										value: newPasswordVal,
										onChange: (e) => setNewPasswordVal(e.target.value),
										className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-mono outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2905,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 2892,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2867,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex gap-2 pt-2",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: () => setShowAddPasswordModal(false),
									className: "flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground",
									children: t("cancel")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2916,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: handleAddPassword,
									className: "flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground shadow-xs",
									children: editingPasswordId ? lang === "es" ? "Actualizar" : "Update" : t("save")
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 2922,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 2915,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 2850,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 2849,
					columnNumber: 11
				}, this),
				subView === "privacy" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8 text-foreground",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-1",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-bold text-base",
								children: t("privacyCommitment")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2941,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: "Last updated: October 2026 • Valid for Android APK & Web App"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 2942,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2940,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl border border-border/80 bg-card p-4 space-y-4 text-xs leading-relaxed shadow-2xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (void 0)("section", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-sm text-foreground",
										children: "1. Zero-Log Browsing Policy"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2949,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", { children: "WebNa does not track, collect, store, or sell your search history, URLs, or personal browsing habits. All history, saved bookmarks, and downloads are stored locally on your device storage." }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2952,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2948,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("section", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (void 0)("h4", {
											className: "font-bold text-sm text-foreground",
											children: "2. Android Permissions Transparency"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2961,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("p", { children: "WebNa only requests permissions when strictly required for user-initiated actions:" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 2964,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("ul", {
											className: "list-disc pl-4 space-y-1 mt-1",
											children: [
												/* @__PURE__ */ (void 0)("li", { children: [
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-foreground",
														children: "Storage / Downloads:"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2970,
														columnNumber: 21
													}, this),
													" ",
													"Used solely to save downloaded audio, video, or files to your device."
												] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2969,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("li", { children: [
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-foreground",
														children: "Camera & Microphone:"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2977,
														columnNumber: 21
													}, this),
													" ",
													"Only enabled if you explicitly grant access to a specific site for video calls or audio recording."
												] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2976,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("li", { children: [
													/* @__PURE__ */ (void 0)("strong", {
														className: "text-foreground",
														children: "Notifications:"
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 2984,
														columnNumber: 21
													}, this),
													" ",
													"Used for alerting when downloads finish and playing media in the background."
												] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 2983,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 2968,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2960,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("section", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-sm text-foreground",
										children: "3. Ad & Tracker Blocking"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2992,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", { children: "WebNa features built-in shield filters that intercept telemetry requests, known third-party advertising scripts, and cross-site tracking cookies." }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 2995,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 2991,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("section", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-sm text-foreground",
										children: "4. User Data Control"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3003,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", { children: "You retain complete sovereignty over your data. You may export all browser data to JSON or completely wipe history, cookies, and cache at any time using the \"Clear Browsing Data\" tool." }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3006,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3002,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("section", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (void 0)("h4", {
										className: "font-bold text-sm text-foreground",
										children: "5. Contact & Data Protection"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3014,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", { children: [
										"For any privacy questions or data inquiries, contact:",
										" ",
										/* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-brand",
											children: "privacy@webna.app"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 3019,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3017,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3013,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 2947,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: () => {
								toast.success(lang === "es" ? "¡Política de privacidad confirmada!" : "Privacy policy acknowledged!");
								setSubView(null);
							},
							className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-brand p-3.5 text-brand-foreground font-semibold text-sm shadow-md",
							children: [/* @__PURE__ */ (void 0)(Check, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3037,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: t("iUnderstandAndAcknowledge") }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3038,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3026,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 2939,
					columnNumber: 11
				}, this),
				subView === "blockings" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "rounded-2xl bg-card p-4 border border-border/80 space-y-1 shadow-2xs",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "font-semibold text-sm text-foreground",
							children: t("blockingsAndShields")
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 3047,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: t("shieldsSub")
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 3050,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 3046,
						columnNumber: 13
					}, this), [
						{
							title: "Block Ads & Banners",
							desc: "Prevent intrusive banner ads and video overlays.",
							val: blockAds,
							set: setBlockAds
						},
						{
							title: "Block Pop-ups & Redirects",
							desc: "Prevent malicious new tabs and forced page redirections.",
							val: blockPopups,
							set: setBlockPopups
						},
						{
							title: "Block Cross-site Trackers",
							desc: "Block hidden scripts tracking your browsing behavior.",
							val: blockTrackers,
							set: setBlockTrackers
						},
						{
							title: "Block Third-party Cookies",
							desc: "Block external cookies used for behavioral advertising.",
							val: blockCookies,
							set: setBlockCookies
						},
						{
							title: "Location Access",
							desc: "Require permission before any site uses device GPS coordinates.",
							val: blockLocation,
							set: setBlockLocation
						},
						{
							title: "Microphone Access",
							desc: "Shield device microphone from unauthorized access.",
							val: blockMic,
							set: setBlockMic
						},
						{
							title: "Camera Access",
							desc: "Shield device camera from unauthorized web access.",
							val: blockCamera,
							set: setBlockCamera
						},
						{
							title: "Site Notifications",
							desc: "Block push notification spam prompts on websites.",
							val: blockNotifications,
							set: setBlockNotifications
						},
						{
							title: "Sound Auto Play",
							desc: "Prevent videos and background audio from playing automatically.",
							val: blockAutoplay,
							set: setBlockAutoplay
						},
						{
							title: "Strict JavaScript Mode",
							desc: "Disable JavaScript on unverified sites for extreme security.",
							val: blockJs,
							set: setBlockJs
						}
					].map((item, idx) => /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "space-y-0.5 pr-4",
							children: [/* @__PURE__ */ (void 0)("h4", {
								className: "font-semibold text-sm",
								children: item.title
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3119,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: item.desc
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3120,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3118,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							role: "switch",
							"aria-checked": item.val,
							onClick: () => item.set(!item.val),
							className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${item.val ? "bg-brand" : "bg-muted"}`,
							children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${item.val ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3131,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 3122,
							columnNumber: 17
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName$2,
						lineNumber: 3114,
						columnNumber: 15
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 3045,
					columnNumber: 11
				}, this),
				subView === "clear-data" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-destructive/10 border border-destructive/20 p-4 space-y-1",
							children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-bold text-sm text-destructive flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3147,
									columnNumber: 17
								}, this), t("clearDataTitle")]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3146,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: t("clearDataSub")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3150,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3145,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (void 0)("label", {
								className: "text-xs font-semibold text-foreground",
								children: t("timeRange")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3157,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-4 gap-1.5",
								children: [
									{
										id: "hour",
										label: t("lastHour")
									},
									{
										id: "day",
										label: t("twentyFourHours")
									},
									{
										id: "week",
										label: t("sevenDays")
									},
									{
										id: "all",
										label: t("allTime")
									}
								].map(({ id, label }) => /* @__PURE__ */ (void 0)("button", {
									onClick: () => setClearTimeRange(id),
									className: `py-2 px-1 text-center rounded-xl text-xs font-medium transition-colors ${clearTimeRange === id ? "bg-brand text-brand-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
									children: label
								}, id, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3167,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3160,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3156,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs",
							children: [
								{
									id: "hist",
									label: t("browsingHistory"),
									desc: `${history.length} items logged`,
									checked: clearHistorySelected,
									set: setClearHistorySelected
								},
								{
									id: "cookies",
									label: t("cookiesSiteData"),
									desc: "Signs you out of most websites",
									checked: clearCookiesSelected,
									set: setClearCookiesSelected
								},
								{
									id: "cache",
									label: t("cachedImages"),
									desc: "Frees up storage space",
									checked: clearCacheSelected,
									set: setClearCacheSelected
								},
								{
									id: "saved",
									label: t("bookmarks"),
									desc: `${bookmarks.length + savedLinks.length} items`,
									checked: clearBookmarksSelected,
									set: setClearBookmarksSelected
								},
								{
									id: "pwds",
									label: t("savedPasswords"),
									desc: `${passwords.length} credentials`,
									checked: clearPasswordsSelected,
									set: setClearPasswordsSelected
								}
							].map((item) => /* @__PURE__ */ (void 0)("label", {
								className: "flex items-center justify-between p-3.5 hover:bg-muted/40 cursor-pointer",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-semibold text-xs block text-foreground",
									children: item.label
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3226,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-muted-foreground",
									children: item.desc
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3229,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3225,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("input", {
									type: "checkbox",
									checked: item.checked,
									onChange: (e) => item.set(e.target.checked),
									className: "size-4 accent-brand rounded"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3233,
									columnNumber: 19
								}, this)]
							}, item.id, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3221,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 3183,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex gap-2 pt-2",
							children: [/* @__PURE__ */ (void 0)("button", {
								onClick: () => setSubView(null),
								className: "flex-1 rounded-2xl bg-muted py-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80",
								children: t("cancel")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3245,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: handleExecuteClear,
								className: "flex-1 rounded-2xl bg-destructive py-3 text-xs font-semibold text-destructive-foreground shadow-sm hover:opacity-90",
								children: t("clearDataNow")
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3251,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3244,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 3144,
					columnNumber: 11
				}, this),
				subView === "payments" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-4 pb-8",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded-2xl bg-card p-4 border border-border/80 shadow-2xs",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "font-semibold text-sm text-foreground",
									children: lang === "es" ? "Métodos de pago y tarjetas" : "Payment Methods & Cards"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3267,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: lang === "es" ? "Guarde tarjetas de débito o crédito para compras rápidas online al estilo Google Pay" : "Save debit or credit cards for fast online checkout like Google Pay"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3272,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3266,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: handleOpenAddCard,
									className: "flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-brand-foreground shadow-xs hover:opacity-90 transition-opacity",
									children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3282,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "es" ? "Añadir tarjeta" : "Add Card" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3283,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3278,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3265,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 3264,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
								className: "font-semibold text-sm",
								children: lang === "es" ? "Rellenar métodos de pago automáticamente" : "Autofill payment methods"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3291,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: lang === "es" ? "Permitir que WebNa rellene tarjetas guardadas en formularios de pago online" : "Allow WebNa to fill in saved cards on online checkout forms"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3296,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3290,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								role: "switch",
								"aria-checked": autofillCards,
								onClick: () => {
									const next = !autofillCards;
									setAutofillCards(next);
									localStorage.setItem("webna-autofill-cards", String(next));
									toast.success(next ? "Autofill payments enabled" : "Autofill payments disabled");
								},
								className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${autofillCards ? "bg-brand" : "bg-muted"}`,
								children: /* @__PURE__ */ (void 0)("span", { className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${autofillCards ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3320,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3302,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3289,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between px-1",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: [
										lang === "es" ? "Tarjetas guardadas" : "Saved Cards",
										" (",
										savedCards.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3331,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-muted-foreground",
									children: lang === "es" ? "Encriptado local seguro" : "Secure Local Encryption"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3335,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3330,
								columnNumber: 15
							}, this), savedCards.length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-dashed border-border/80 bg-card/50 p-8 text-center",
								children: [
									/* @__PURE__ */ (void 0)(CreditCard, { className: "size-8 mx-auto text-muted-foreground/50 mb-2" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3344,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-sm font-medium text-foreground",
										children: lang === "es" ? "No hay tarjetas guardadas" : "No payment cards saved"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3345,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground mt-1 mb-4",
										children: lang === "es" ? "Añada una tarjeta para compras rápidas en la web." : "Add a card for fast and secure web checkouts."
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3350,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										onClick: handleOpenAddCard,
										className: "inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-4" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 3359,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "es" ? "Añadir primera tarjeta" : "Add first card" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 3360,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3355,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3343,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: savedCards.map((card) => /* @__PURE__ */ (void 0)("div", {
									onClick: () => handleOpenEditCard(card),
									className: "rounded-2xl border border-border/80 bg-card p-4 shadow-2xs relative overflow-hidden group cursor-pointer hover:border-brand/50 transition-all",
									children: [
										card.isDefault && /* @__PURE__ */ (void 0)("div", {
											className: "absolute top-0 right-0 bg-brand text-brand-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-xl",
											children: lang === "es" ? "Predeterminada" : "Default"
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 3376,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-start justify-between",
											children: /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-xs",
													children: card.cardBrand === "Visa" ? "VISA" : card.cardBrand === "Mastercard" ? "MC" : card.cardBrand === "American Express" ? "AMEX" : "CARD"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 3382,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("div", { children: [
													/* @__PURE__ */ (void 0)("h4", {
														className: "font-semibold text-sm font-mono tracking-wider",
														children: card.cardNumber
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 3392,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: [
															card.cardHolder,
															" • Exp ",
															card.expiryMonth,
															"/",
															card.expiryYear
														]
													}, void 0, true, {
														fileName: _jsxFileName$2,
														lineNumber: 3395,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] text-muted-foreground/70 mt-0.5",
														children: card.billingAddress
													}, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 3399,
														columnNumber: 29
													}, this)
												] }, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 3391,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 3381,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 3380,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between mt-4 pt-3 border-t border-border/60",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-3",
												children: [!card.isDefault && /* @__PURE__ */ (void 0)("button", {
													onClick: (e) => {
														e.stopPropagation();
														handleSetDefaultCard(card.id);
													},
													className: "text-xs font-medium text-brand hover:underline",
													children: lang === "es" ? "Hacer predeterminada" : "Set as default"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 3409,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-medium text-muted-foreground hover:text-brand",
													children: lang === "es" ? "Editar" : "Edit"
												}, void 0, false, {
													fileName: _jsxFileName$2,
													lineNumber: 3421,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 3407,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1",
												children: /* @__PURE__ */ (void 0)("button", {
													onClick: (e) => {
														e.stopPropagation();
														handleDeleteCard(card.id);
													},
													className: "flex items-center gap-1 text-xs text-destructive hover:underline p-1.5",
													children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 3433,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("span", { children: lang === "es" ? "Eliminar" : "Remove" }, void 0, false, {
														fileName: _jsxFileName$2,
														lineNumber: 3434,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$2,
													lineNumber: 3426,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3425,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 3406,
											columnNumber: 23
										}, this)
									]
								}, card.id, true, {
									fileName: _jsxFileName$2,
									lineNumber: 3370,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 3368,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 3329,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 3263,
					columnNumber: 11
				}, this),
				showAddCardModal && /* @__PURE__ */ (void 0)("div", {
					className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
					children: /* @__PURE__ */ (void 0)("div", {
						className: "w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-2xl space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "font-bold text-base text-foreground",
									children: editingCardId ? lang === "es" ? "Editar tarjeta de pago" : "Edit Payment Card" : lang === "es" ? "Añadir tarjeta de pago" : "Add Payment Card"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3451,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: () => setShowAddCardModal(false),
									className: "size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3464,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3460,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3450,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "text-xs font-medium text-muted-foreground block mb-1",
										children: lang === "es" ? "Número de tarjeta" : "Card Number"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3470,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "4532 0000 0000 0000",
										value: newCardNumber,
										onChange: (e) => setNewCardNumber(e.target.value),
										className: "w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3473,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3469,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "text-xs font-medium text-muted-foreground block mb-1",
										children: lang === "es" ? "Nombre del titular" : "Cardholder Name"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3483,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "Alex Morgan",
										value: newCardHolder,
										onChange: (e) => setNewCardHolder(e.target.value),
										className: "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3486,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3482,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "text-xs font-medium text-muted-foreground block mb-1",
												children: lang === "es" ? "Mes" : "Exp Month"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3497,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("select", {
												value: newExpiryMonth,
												onChange: (e) => setNewExpiryMonth(e.target.value),
												className: "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
												children: Array.from({ length: 12 }, (_, i) => {
													const m = String(i + 1).padStart(2, "0");
													return /* @__PURE__ */ (void 0)("option", {
														value: m,
														children: m
													}, m, false, {
														fileName: _jsxFileName$2,
														lineNumber: 3508,
														columnNumber: 27
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3500,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 3496,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "text-xs font-medium text-muted-foreground block mb-1",
												children: lang === "es" ? "Año" : "Exp Year"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3516,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("select", {
												value: newExpiryYear,
												onChange: (e) => setNewExpiryYear(e.target.value),
												className: "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand",
												children: [
													"26",
													"27",
													"28",
													"29",
													"30",
													"31",
													"32",
													"33"
												].map((y) => /* @__PURE__ */ (void 0)("option", {
													value: y,
													children: ["20", y]
												}, y, true, {
													fileName: _jsxFileName$2,
													lineNumber: 3526,
													columnNumber: 27
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3519,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 3515,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "text-xs font-medium text-muted-foreground block mb-1",
												children: "CVV / CVC"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3534,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "password",
												maxLength: 4,
												placeholder: "123",
												value: newCvv,
												onChange: (e) => setNewCvv(e.target.value),
												className: "w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 3537,
												columnNumber: 21
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 3533,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3495,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "text-xs font-medium text-muted-foreground block mb-1",
										children: lang === "es" ? "Dirección de facturación" : "Billing Address"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3549,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "123 Main St, City, Country",
										value: newBillingAddress,
										onChange: (e) => setNewBillingAddress(e.target.value),
										className: "w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 3554,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 3548,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3468,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex gap-2 pt-2",
								children: [/* @__PURE__ */ (void 0)("button", {
									onClick: () => setShowAddCardModal(false),
									className: "flex-1 rounded-xl bg-muted p-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80 transition-colors",
									children: lang === "es" ? "Cancelar" : "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3565,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									onClick: handleSaveCard,
									className: "flex-1 rounded-xl bg-brand p-3 text-xs font-semibold text-brand-foreground hover:opacity-90 transition-opacity",
									children: editingCardId ? lang === "es" ? "Actualizar tarjeta" : "Update Card" : lang === "es" ? "Guardar tarjeta" : "Save Card"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 3571,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 3564,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 3449,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 3448,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 1044,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 1017,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/TabSwitcherPanel.tsx";
var host$1 = (u) => {
	try {
		return new URL(u).hostname.replace("www.", "");
	} catch {
		return u;
	}
};
function TabSwitcherPanel({ tabs, activeTabId, onSelectTab, onCloseTab, onNewTab, onCloseAll }) {
	const { lang } = useAppLanguage();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col bg-background px-4 py-3 overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between mb-4 pb-3 border-b border-border/80",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 43,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-bold text-base text-foreground",
					children: lang === "es" ? "Pestañas del navegador" : "Browser Tabs"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						tabs.length,
						" ",
						lang === "es" ? "pestañas abiertas" : "open tabs"
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 50,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 46,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 42,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onNewTab,
					className: "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90 transition-opacity",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 60,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "es" ? "Nueva" : "New Tab" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 56,
					columnNumber: 11
				}, this), tabs.length > 0 && /* @__PURE__ */ (void 0)("button", {
					onClick: onCloseAll,
					title: lang === "es" ? "Cerrar todas" : "Close all",
					className: "flex items-center justify-center size-8 rounded-xl bg-muted text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
					children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 69,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 55,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 41,
			columnNumber: 7
		}, this), tabs.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col items-center justify-center flex-1 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex size-16 items-center justify-center rounded-full bg-muted/60 text-muted-foreground mb-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-8" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 78,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-semibold text-sm text-foreground",
					children: lang === "es" ? "No hay pestañas abiertas" : "No open tabs"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 81,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-muted-foreground mt-1 mb-4",
					children: lang === "es" ? "Abre una nueva pestaña para empezar a navegar." : "Open a new tab to start browsing the web."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 84,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onNewTab,
					className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-brand-foreground text-xs font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 93,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: lang === "es" ? "Abrir pestaña" : "Open Tab" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 94,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 77,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 gap-3 pb-24",
			children: tabs.map((tab) => {
				const isActive = tab.id === activeTabId;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: () => onSelectTab(tab.id),
					className: `group relative flex flex-col rounded-2xl border bg-card overflow-hidden shadow-xs cursor-pointer transition-all ${isActive ? "border-brand ring-2 ring-brand/30 shadow-md" : "border-border/80 hover:border-brand/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between bg-muted/60 px-3 py-2 border-b border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: `https://www.google.com/s2/favicons?domain=${host$1(tab.url)}&sz=32`,
								alt: "",
								className: "size-4 rounded-xs shrink-0",
								onError: (e) => {
									e.target.style.display = "none";
								}
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 114,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium text-[11px] text-foreground truncate",
								children: tab.title || host$1(tab.url) || "New Tab"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 122,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 113,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: (e) => {
								e.stopPropagation();
								onCloseTab(tab.id);
							},
							title: lang === "es" ? "Cerrar pestaña" : "Close tab",
							className: "flex size-5 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 134,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 126,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 112,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-28 bg-background/50 p-3 flex flex-col justify-between relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 opacity-10 bg-gradient-to-br from-brand to-transparent pointer-events-none" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 140,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1 z-10",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-semibold text-foreground line-clamp-2",
									children: tab.title || "WebNa Browser Page"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 142,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[10px] text-muted-foreground truncate font-mono",
									children: tab.url
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 145,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 141,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between z-10 pt-2 border-t border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-brand font-medium",
									children: host$1(tab.url)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 150,
									columnNumber: 21
								}, this), isActive && /* @__PURE__ */ (void 0)("span", {
									className: "text-[9px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full",
									children: lang === "es" ? "Activa" : "Active"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 154,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 149,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 139,
						columnNumber: 17
					}, this)]
				}, tab.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 102,
					columnNumber: 15
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 98,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 39,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
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
		u: "https://www.google.com/?igu=1"
	},
	{
		t: "Wikipedia",
		u: "https://en.wikipedia.org"
	},
	{
		t: "OpenStreetMap",
		u: "https://www.openstreetmap.org/export/embed.html"
	},
	{
		t: "Hacker News",
		u: "https://news.ycombinator.com"
	},
	{
		t: "Archive",
		u: "https://archive.org"
	},
	{
		t: "MDN",
		u: "https://developer.mozilla.org"
	},
	{
		t: "Bing",
		u: "https://www.bing.com"
	},
	{
		t: "DuckDuckGo",
		u: "https://html.duckduckgo.com/html/"
	}
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
	Sogou: "https://www.sogou.com/web?query="
};
function ensureIframeCompatibleUrl(rawUrl) {
	try {
		const parsed = new URL(rawUrl);
		if (parsed.hostname.includes("google.") && !parsed.searchParams.has("igu")) {
			parsed.searchParams.set("igu", "1");
			return parsed.toString();
		}
		return rawUrl;
	} catch {
		if (rawUrl.includes("google.") && !rawUrl.includes("igu=1")) return `${rawUrl}${rawUrl.includes("?") ? "&" : "?"}igu=1`;
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
		"Pi AI": "pi.ai"
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
				u: "https://youtube.com"
			},
			{
				t: "Reddit",
				u: "https://reddit.com"
			},
			{
				t: "Twitter / X",
				u: "https://x.com"
			},
			{
				t: "Instagram",
				u: "https://instagram.com"
			}
		],
		Media: [
			{
				t: "Netflix",
				u: "https://netflix.com"
			},
			{
				t: "Spotify",
				u: "https://spotify.com"
			},
			{
				t: "Twitch",
				u: "https://twitch.tv"
			},
			{
				t: "SoundCloud",
				u: "https://soundcloud.com"
			}
		],
		News: [
			{
				t: "BBC News",
				u: "https://bbc.com"
			},
			{
				t: "CNN",
				u: "https://cnn.com"
			},
			{
				t: "Reuters",
				u: "https://reuters.com"
			}
		]
	};
	const { t } = useAppLanguage();
	const [engine, setEngine] = useStored("webna-engine", "Google");
	const [categories, setCategories] = useStored("webna-categories-data", DEFAULT_CATEGORIES);
	const [addingCategory, setAddingCategory] = (0, import_react.useState)(false);
	const [newCategory, setNewCategory] = (0, import_react.useState)("");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(null);
	const safeCategories = (0, import_react.useMemo)(() => {
		if (!categories || typeof categories !== "object") return DEFAULT_CATEGORIES;
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
		if (activeCategory && !safeCategories[activeCategory] && keys.length > 0) setActiveCategory(null);
	}, [safeCategories, activeCategory]);
	(0, import_react.useEffect)(() => {
		const savedTheme = localStorage.getItem("webna-theme");
		if (savedTheme === "dark") document.documentElement.classList.add("dark");
		else if (savedTheme === "light") document.documentElement.classList.remove("dark");
		else if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.classList.add("dark");
	}, []);
	const [shortcutModalCategory, setShortcutModalCategory] = (0, import_react.useState)(null);
	const [shortcutName, setShortcutName] = (0, import_react.useState)("");
	const [shortcutUrl, setShortcutUrl] = (0, import_react.useState)("");
	const [bookmarks, setBookmarks] = useStored("webna-bm", []);
	const [savedLinks, setSavedLinks] = useStored("webna-saved-links", []);
	const [history, setHistory] = useStored("webna-hist", []);
	const [tabs, setTabs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const s = localStorage.getItem("webna-browser-tabs");
		if (s) try {
			setTabs(JSON.parse(s));
		} catch {}
		else setTabs([{
			id: "tab-1",
			url: "https://www.google.com/?igu=1",
			title: "Google Search",
			active: true
		}]);
	}, []);
	const [activeTabId, setActiveTabId] = (0, import_react.useState)("tab-1");
	(0, import_react.useEffect)(() => {
		const t = tabs.find((x) => x.active);
		if (t) setActiveTabId(t.id);
	}, [tabs]);
	const [stack, setStack] = (0, import_react.useState)([]);
	const [idx, setIdx] = (0, import_react.useState)(-1);
	const [homeMenu, setHomeMenu] = (0, import_react.useState)(false);
	const [isIncognito, setIsIncognito] = (0, import_react.useState)(false);
	const [panel, setPanel] = (0, import_react.useState)(null);
	const [blockAds, setBlockAds] = useStored("webna-block-ads", true);
	const [blockPopups, setBlockPopups] = useStored("webna-block-popups", true);
	const [blockTrackers, setBlockTrackers] = useStored("webna-block-trackers", true);
	const [blockCookies, setBlockCookies] = useStored("webna-block-cookies", false);
	const [blockLocation, setBlockLocation] = useStored("webna-block-location", true);
	const [blockMic, setBlockMic] = useStored("webna-block-mic", true);
	const [blockCamera, setBlockCamera] = useStored("webna-block-camera", true);
	const [blockNotifications, setBlockNotifications] = useStored("webna-block-notifications", true);
	const [blockAutoplay, setBlockAutoplay] = useStored("webna-block-autoplay", true);
	const [blockJs, setBlockJs] = useStored("webna-block-js", false);
	const [playerMode, setPlayerMode] = (0, import_react.useState)("audio");
	const [queuedVideo, setQueuedVideo] = (0, import_react.useState)(null);
	const [article, setArticle] = (0, import_react.useState)(null);
	const browsing = idx >= 0;
	const url = stack[idx] ?? "";
	const open = (rawUrl) => {
		let target = rawUrl;
		if (isCleanLinksEnabled()) target = stripTrackingParams(target);
		if (typeof window !== "undefined" && localStorage.getItem("webna-https-only") !== "false" && target.startsWith("http://") && !target.includes("localhost")) target = target.replace("http://", "https://");
		const u = ensureIframeCompatibleUrl(target);
		const next = [...stack.slice(0, idx + 1), u];
		setStack(next);
		setIdx(next.length - 1);
		setPanel(null);
		if (!isIncognito) setHistory([{
			url: u,
			title: host(u),
			at: Date.now()
		}, ...history].slice(0, 300));
	};
	const go = (raw) => {
		const q = raw.trim();
		if (!q) return;
		if (/^https?:\/\//i.test(q)) return open(q);
		if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(q)) return open("https://" + q);
		if (AI_ENGINES[engine]) {
			const ai = AI_ENGINES[engine];
			if (ai.url.includes("?q=") || ai.url.includes("search?q=")) return open(ai.url + encodeURIComponent(q));
			return open(ai.url);
		}
		if (engine === "Google") return open(`https://www.google.com/search?igu=1&q=${encodeURIComponent(q)}`);
		const baseEngine = engines?.[engine] || DEFAULT_ENGINES[engine] || DEFAULT_ENGINES["Google"] || "https://www.google.com/search?igu=1&q=";
		open(baseEngine + encodeURIComponent(q));
	};
	const home = () => {
		setIdx(-1);
		setStack([]);
	};
	const isSaved = bookmarks.some((b) => b.url === url);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[100dvh] bg-background",
		children: [
			browsing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fixed inset-0 flex flex-col",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrowserView, {
					stack,
					idx,
					onNav: go,
					onMove: (d) => setIdx(Math.min(stack.length - 1, Math.max(0, idx + d))),
					onHome: home,
					isSaved,
					onToggleSave: () => setBookmarks(isSaved ? bookmarks.filter((b) => b.url !== url) : [{
						url,
						title: host(url),
						at: Date.now()
					}, ...bookmarks]),
					onOpenPanel: setPanel,
					onOpenPlayer: (mode) => {
						setPlayerMode(mode);
						setTab("player");
						home();
					},
					isIncognito,
					onToggleIncognito: () => setIsIncognito(!isIncognito)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 342,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 341,
				columnNumber: 19
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-xl px-4 pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "sticky top-0 z-30 -mx-4 bg-background px-4 pb-3 pt-4",
					children: [tab === "home" && /* @__PURE__ */ (void 0)("div", {
						className: "relative mb-3 flex items-center justify-center",
						children: [/* @__PURE__ */ (void 0)("h1", {
							className: "text-2xl font-bold tracking-tight text-brand",
							children: "WebNa"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 354,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setHomeMenu(true),
							className: "absolute right-0 p-2 text-muted-foreground",
							"aria-label": "Settings",
							children: /* @__PURE__ */ (void 0)("div", {
								className: "size-6 rounded-full bg-card flex items-center justify-center",
								children: "⚙️"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 358,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 357,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 353,
						columnNumber: 32
					}, this), tab === "player" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center py-1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setPlayerMode("audio"),
								className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "audio" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								"aria-label": "Switch to Audio Player",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Music, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 366,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("audioPlayer") }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 367,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 365,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setPlayerMode("video"),
								className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "video" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								"aria-label": "Switch to Video Player",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Film, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 370,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("videoPlayer") }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 371,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 369,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 364,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 363,
						columnNumber: 33
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchBar, {
						onSubmit: go,
						onLens: () => window.open("https://lens.google.com", "_blank"),
						engineName: engine,
						engineDomain: getEngineDomain(engine),
						onEngineClick: () => setPanel("search")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 24
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 352,
					columnNumber: 11
				}, this), tab === "home" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mb-3 text-sm font-semibold text-muted-foreground",
							children: t("shortcuts")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-4 gap-4",
							children: DIAL.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => open(d.u),
								className: "flex flex-col items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: `https://www.google.com/s2/favicons?domain=${host(d.u)}&sz=64`,
										alt: "",
										className: "size-7"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 384,
										columnNumber: 25
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 383,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "w-full truncate text-xs",
									children: d.t
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 386,
									columnNumber: 23
								}, this)]
							}, d.u, true, {
								fileName: _jsxFileName,
								lineNumber: 382,
								columnNumber: 34
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 381,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 377,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "my-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-xl font-bold tracking-tight text-foreground",
								children: "Site/App Hub"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 391,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "You can keep your favorite sites or apps here for quick access."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 394,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 390,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "text-sm font-semibold text-muted-foreground",
									children: t("categories")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 401,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setAddingCategory(true),
									className: "text-xs font-medium text-brand hover:underline",
									children: t("addCategory")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 404,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 400,
								columnNumber: 17
							}, this),
							addingCategory && /* @__PURE__ */ (void 0)("div", {
								className: "flex gap-2 mb-3",
								children: [
									/* @__PURE__ */ (void 0)("input", {
										type: "text",
										placeholder: "Category name",
										value: newCategory,
										onChange: (e) => setNewCategory(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter" && newCategory.trim()) {
												const catName = newCategory.trim();
												setCategories({
													...safeCategories,
													[catName]: []
												});
												setActiveCategory(catName);
												setNewCategory("");
												setAddingCategory(false);
											}
										},
										className: "flex-1 rounded-xl border bg-card p-2 text-sm outline-none focus:border-brand",
										autoFocus: true
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 409,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											const catName = newCategory.trim();
											if (catName) {
												setCategories({
													...safeCategories,
													[catName]: []
												});
												setActiveCategory(catName);
												setNewCategory("");
												setAddingCategory(false);
											}
										},
										className: "rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground",
										children: "Save"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 421,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										onClick: () => {
											setNewCategory("");
											setAddingCategory(false);
										},
										className: "rounded-xl bg-muted px-3 py-2 text-xs font-medium text-muted-foreground",
										children: "Cancel"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 435,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 408,
								columnNumber: 36
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 py-1",
								children: Object.keys(safeCategories).map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setActiveCategory(activeCategory === cat ? null : cat),
									className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeCategory === cat ? "bg-brand text-brand-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground bg-transparent"}`,
									children: cat
								}, cat, false, {
									fileName: _jsxFileName,
									lineNumber: 444,
									columnNumber: 59
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 443,
								columnNumber: 17
							}, this),
							activeCategory && /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-4 gap-4",
								children: [(safeCategories[activeCategory] || []).map((s, i) => /* @__PURE__ */ (void 0)("div", {
									className: "relative group flex flex-col items-center",
									children: [/* @__PURE__ */ (void 0)("button", {
										onClick: () => open(s.u),
										className: "flex flex-col items-center gap-1 w-full",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-border/40 group-hover:border-brand/40 transition-colors",
											children: /* @__PURE__ */ (void 0)("img", {
												src: `https://www.google.com/s2/favicons?domain=${host(s.u)}&sz=64`,
												alt: "",
												className: "size-7",
												onError: (e) => {
													e.target.style.display = "none";
												}
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 452,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 451,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "w-full truncate text-xs text-center",
											children: s.t
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 456,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 450,
										columnNumber: 25
									}, this), /* @__PURE__ */ (void 0)("button", {
										onClick: (e) => {
											e.stopPropagation();
											const updated = (safeCategories[activeCategory] || []).filter((_, idx) => idx !== i);
											setCategories({
												...safeCategories,
												[activeCategory]: updated
											});
										},
										title: "Remove shortcut",
										className: "absolute -top-1 -right-1 hidden group-hover:flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground text-[10px]",
										children: "✕"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 460,
										columnNumber: 25
									}, this)]
								}, i, true, {
									fileName: _jsxFileName,
									lineNumber: 449,
									columnNumber: 75
								}, this)), /* @__PURE__ */ (void 0)("button", {
									onClick: () => {
										setShortcutModalCategory(activeCategory);
										setShortcutName("");
										setShortcutUrl("");
									},
									className: "flex flex-col items-center gap-1 group",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-dashed border-border group-hover:border-brand text-2xl text-muted-foreground transition-colors",
										children: "+"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 477,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "w-full truncate text-xs text-center font-medium",
										children: "Add shortcut"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 480,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 472,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 448,
								columnNumber: 36
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 399,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 376,
					columnNumber: 29
				}, this) : tab === "discover" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Discover, {
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
							quality: "720p HD"
						});
						setPlayerMode("video");
						setTab("player");
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 486,
					columnNumber: 43
				}, this) : tab === "player" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AudioPlayerPanel, {
						playerMode,
						onPlayerModeChange: setPlayerMode,
						initialVideoQueue: queuedVideo ? [queuedVideo] : void 0,
						onCloseVideo: () => setQueuedVideo(null),
						onOpenUrl: open
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 500,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 499,
					columnNumber: 34
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 351,
				columnNumber: 18
			}, this),
			article && !browsing && /* @__PURE__ */ (void 0)(ArticleView, {
				link: article,
				onBack: () => setArticle(null),
				onOpenWeb: open,
				isSaved: savedLinks.some((s) => s.url === article),
				onToggleSave: (urlToSave, titleToSave) => {
					if (savedLinks.some((s) => s.url === urlToSave)) setSavedLinks(savedLinks.filter((s) => s.url !== urlToSave));
					else setSavedLinks([{
						url: urlToSave,
						title: titleToSave,
						at: Date.now()
					}, ...savedLinks]);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 504,
				columnNumber: 32
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BottomTabs, {
				active: tab,
				tabCount: tabs.length,
				onChange: (t) => {
					setTab(t);
					home();
					setArticle(null);
					setPanel(t === "tabs" ? "tabs" : null);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 517,
				columnNumber: 7
			}, this),
			panel === "tabs" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabSwitcherPanel, {
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
					localStorage.setItem("webna-browser-tabs", JSON.stringify(newTabs));
					if (activeTabId === id && newTabs.length > 0) setActiveTabId(newTabs[0].id);
				},
				onNewTab: () => {
					const newTab = {
						id: `tab-${Date.now()}`,
						url: "https://www.google.com/?igu=1",
						title: "New Tab",
						active: true
					};
					const newTabs = [...tabs.map((t) => ({
						...t,
						active: false
					})), newTab];
					setTabs(newTabs);
					setActiveTabId(newTab.id);
					localStorage.setItem("webna-browser-tabs", JSON.stringify(newTabs));
					setTab("home");
					setPanel(null);
				},
				onCloseAll: () => {
					setTabs([]);
					localStorage.removeItem("webna-browser-tabs");
					setTab("home");
					setPanel(null);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 524,
				columnNumber: 27
			}, this) : panel && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-background",
				children: panel === "settings" || panel === "blockings" ? /* @__PURE__ */ (void 0)(SettingsManager, {
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
					setBlockJs
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 557,
					columnNumber: 62
				}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between border-b p-3 sm:p-4",
					children: [panel === "player" ? /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner",
						children: [/* @__PURE__ */ (void 0)("button", {
							onClick: () => setPlayerMode("audio"),
							className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "audio" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							"aria-label": "Switch to Audio Player",
							children: [/* @__PURE__ */ (void 0)(Music, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 561,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", { children: t("audioPlayer") }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 562,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 560,
							columnNumber: 23
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setPlayerMode("video"),
							className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${playerMode === "video" ? "bg-white dark:bg-background text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							"aria-label": "Switch to Video Player",
							children: [/* @__PURE__ */ (void 0)(Film, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 565,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("span", { children: t("videoPlayer") }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 566,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 564,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 559,
						columnNumber: 41
					}, this) : /* @__PURE__ */ (void 0)("h2", {
						className: "text-lg font-semibold",
						children: {
							bookmarks: t("bookmarks"),
							"saved-links": t("savedLinks"),
							history: t("history"),
							settings: t("settings"),
							player: t("player"),
							account: "Account",
							search: t("searchEngines"),
							"search-add": t("add")
						}[panel]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 568,
						columnNumber: 30
					}, this), /* @__PURE__ */ (void 0)("button", {
						onClick: () => setPanel(null),
						"aria-label": "Close",
						children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 581,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 580,
						columnNumber: 19
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 558,
					columnNumber: 17
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: `flex-1 flex flex-col min-h-0 ${panel === "player" ? "p-0 overflow-hidden" : "p-4 overflow-y-auto"}`,
					children: [
						panel === "player" && /* @__PURE__ */ (void 0)(AudioPlayerPanel, {
							playerMode,
							onPlayerModeChange: setPlayerMode,
							onOpenUrl: open
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 585,
							columnNumber: 42
						}, this),
						panel === "search" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-6 pb-6",
							children: [/* @__PURE__ */ (void 0)("section", { children: [/* @__PURE__ */ (void 0)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
									children: [/* @__PURE__ */ (void 0)(Globe, { className: "size-3.5 text-brand" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 591,
										columnNumber: 29
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Search engines" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 592,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 590,
									columnNumber: 27
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-muted-foreground",
									children: [
										"Active:",
										" ",
										/* @__PURE__ */ (void 0)("strong", {
											className: "text-brand font-semibold",
											children: engine
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 596,
											columnNumber: 29
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 594,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 589,
								columnNumber: 25
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-3 gap-2.5 sm:gap-3",
								children: [Object.entries(engines).filter(([name]) => name !== "ChatGPT").map(([name]) => {
									const isSelected = engine === name;
									const domain = getEngineDomain(name);
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => {
											setEngine(name);
											setPanel(null);
										},
										className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${isSelected ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand" : "border-border/60 hover:border-border"}`,
										"aria-label": `Select ${name} search engine`,
										children: [
											isSelected && /* @__PURE__ */ (void 0)("span", {
												className: "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs",
												children: /* @__PURE__ */ (void 0)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 610,
													columnNumber: 39
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 609,
												columnNumber: 50
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex size-7 items-center justify-center rounded-full",
												children: name === "Google" ? /* @__PURE__ */ (void 0)("span", {
													className: "text-xl font-bold leading-none",
													style: {
														background: "var(--gradient-google)",
														WebkitBackgroundClip: "text",
														color: "transparent"
													},
													children: "G"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 613,
													columnNumber: 58
												}, this) : /* @__PURE__ */ (void 0)("img", {
													src: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
													alt: name,
													className: "size-6 object-contain rounded-full",
													onError: (e) => {
														e.target.style.display = "none";
													}
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 619,
													columnNumber: 49
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 612,
												columnNumber: 35
											}, this),
											/* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-medium truncate w-full text-foreground group-hover:text-foreground",
												children: name
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 623,
												columnNumber: 35
											}, this)
										]
									}, name, true, {
										fileName: _jsxFileName,
										lineNumber: 605,
										columnNumber: 26
									}, this);
								}), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setPanel("search-add"),
									className: "flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-border/80 bg-card/60 p-3 text-center transition-all hover:border-brand hover:bg-card active:scale-95 text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-7 items-center justify-center rounded-full bg-muted font-bold text-sm",
										children: "+"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 629,
										columnNumber: 29
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs font-medium truncate w-full",
										children: "Add"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 632,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 628,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 601,
								columnNumber: 25
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 588,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("section", {
								className: "pt-4 border-t border-border/60",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "mb-3",
									children: [/* @__PURE__ */ (void 0)("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "size-3.5 text-brand" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 643,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("span", { children: "AI search & chats" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 644,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 642,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-muted-foreground mt-0.5",
										children: "Choose popular AI sites and apps to search or chat with"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 646,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 641,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-3 gap-2.5 sm:gap-3",
									children: Object.values(AI_ENGINES).map((ai) => {
										const isSelected = engine === ai.name;
										return /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												setEngine(ai.name);
												setPanel(null);
											},
											className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${isSelected ? "border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand" : "border-border/60 hover:border-border"}`,
											title: ai.desc,
											"aria-label": `Select ${ai.name}`,
											children: [
												isSelected && /* @__PURE__ */ (void 0)("span", {
													className: "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs",
													children: /* @__PURE__ */ (void 0)(Check, { className: "size-2.5 stroke-[3]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 659,
														columnNumber: 37
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 658,
													columnNumber: 48
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex size-7 items-center justify-center rounded-full",
													children: /* @__PURE__ */ (void 0)("img", {
														src: `https://www.google.com/s2/favicons?domain=${ai.domain}&sz=64`,
														alt: ai.name,
														className: "size-6 object-contain rounded-full",
														onError: (e) => {
															e.target.style.display = "none";
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 662,
														columnNumber: 35
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 661,
													columnNumber: 33
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "text-xs font-medium truncate w-full text-foreground group-hover:text-foreground",
													children: ai.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 666,
													columnNumber: 33
												}, this)
											]
										}, ai.name, true, {
											fileName: _jsxFileName,
											lineNumber: 654,
											columnNumber: 26
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 651,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 640,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 586,
							columnNumber: 42
						}, this),
						panel === "search-add" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("input", {
									type: "text",
									placeholder: "Engine Name",
									id: "new-engine-name",
									className: "w-full rounded-xl border bg-card p-3"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 675,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("input", {
									type: "text",
									placeholder: "Query URL (e.g. https://example.com/search?q=)",
									id: "new-engine-url",
									className: "w-full rounded-xl border bg-card p-3"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 676,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => {
										const name = document.getElementById("new-engine-name").value;
										const url = document.getElementById("new-engine-url").value;
										if (name && url) {
											setEngines({
												...engines,
												[name]: url
											});
											setPanel("search");
										}
									},
									className: "w-full rounded-xl bg-brand p-3 text-brand-foreground",
									children: "Add Search Engine"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 677,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ (void 0)("button", {
									onClick: () => setPanel("search"),
									className: "w-full rounded-xl bg-card p-3",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 690,
									columnNumber: 23
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 674,
							columnNumber: 46
						}, this),
						panel === "bookmarks" && /* @__PURE__ */ (void 0)(BookmarksManager, {
							items: bookmarks,
							onGo: open,
							onRemove: (e) => setBookmarks(bookmarks.filter((b) => b !== e)),
							onAdd: (e) => setBookmarks([e, ...bookmarks])
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 694,
							columnNumber: 45
						}, this),
						panel === "saved-links" && /* @__PURE__ */ (void 0)(SavedLinksManager, {
							items: savedLinks,
							onGo: open,
							onRemove: (e) => setSavedLinks(savedLinks.filter((b) => b !== e)),
							onAdd: (e) => setSavedLinks([e, ...savedLinks])
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 695,
							columnNumber: 47
						}, this),
						panel === "history" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [history.length > 0 && /* @__PURE__ */ (void 0)("button", {
							onClick: () => setHistory([]),
							className: "mb-3 text-sm text-destructive",
							children: "Clear history"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 697,
							columnNumber: 46
						}, this), /* @__PURE__ */ (void 0)(List, {
							items: history,
							onGo: open,
							onRemove: (e) => setHistory(history.filter((h) => h !== e))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 700,
							columnNumber: 23
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 696,
							columnNumber: 43
						}, this),
						panel === "account" && /* @__PURE__ */ (void 0)("div", {
							className: "space-y-4 p-2",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-4 rounded-2xl bg-card p-4 border shadow-xs",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "size-14 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl shrink-0",
									children: "M"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 704,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (void 0)("h3", {
										className: "font-bold text-base truncate",
										children: "musichub661@gmail.com"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 708,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Connected Account & Cloud Sync"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 711,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 707,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 703,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl bg-card p-4 border space-y-3 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Account Status:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 718,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-semibold text-brand",
										children: "Active & Verified"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 719,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 717,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (void 0)("span", { children: "Sync Storage:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 724,
										columnNumber: 27
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-medium",
										children: "Playlists & Favorites Synced"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 725,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 723,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 716,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 702,
							columnNumber: 43
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 584,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 557,
					columnNumber: 975
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 556,
				columnNumber: 22
			}, this),
			homeMenu && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs animate-in fade-in duration-200",
				onClick: () => setHomeMenu(false),
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full rounded-t-3xl bg-card p-4 pb-10 shadow-2xl animate-in slide-in-from-bottom duration-300",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "mb-3 flex items-center justify-end border-b pb-2",
						children: /* @__PURE__ */ (void 0)("button", {
							onClick: () => setHomeMenu(false),
							"aria-label": "Close menu",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 740,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 739,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 738,
						columnNumber: 13
					}, this), [
						{
							l: isIncognito ? "Turn off Incognito" : "Incognito mode",
							I: EyeOff,
							f: () => {
								setHomeMenu(false);
								setIsIncognito(!isIncognito);
								toast.success(isIncognito ? "Incognito mode turned off" : "Incognito mode turned on");
							}
						},
						{
							l: t("setDefaultBrowser"),
							I: Globe,
							f: () => {
								setHomeMenu(false);
								if (navigator.setAppBadge) try {
									navigator.setAppBadge(1);
								} catch (e) {
									console.log(e);
								}
								alert("WebNa is now set as your preferred in-app browser experience! To make WebNa your system default browser on Android/iOS, use your browser's 'Add to Home Screen' or default browser settings.");
							}
						},
						{
							l: t("bookmarks"),
							I: Star,
							f: () => {
								setHomeMenu(false);
								setPanel("bookmarks");
							}
						},
						{
							l: t("history"),
							I: RotateCw,
							f: () => {
								setHomeMenu(false);
								setPanel("history");
							}
						},
						{
							l: t("savedLinks"),
							I: Bookmark,
							f: () => {
								setHomeMenu(false);
								setPanel("saved-links");
							}
						},
						{
							l: t("searchEngines"),
							I: Search,
							f: () => {
								setHomeMenu(false);
								setPanel("search");
							}
						},
						{
							l: t("settings"),
							I: Settings,
							f: () => {
								setHomeMenu(false);
								setPanel("settings");
							}
						},
						{
							l: t("home"),
							I: House,
							f: () => {
								setHomeMenu(false);
								home();
								setTab("home");
								setArticle(null);
							}
						}
					].map(({ l, I, f }) => /* @__PURE__ */ (void 0)("button", {
						onClick: f,
						className: "flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors",
						children: [/* @__PURE__ */ (void 0)(I, { className: "size-5 text-brand" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 814,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: l }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 815,
							columnNumber: 17
						}, this)]
					}, l, true, {
						fileName: _jsxFileName,
						lineNumber: 813,
						columnNumber: 15
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 737,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 736,
				columnNumber: 20
			}, this),
			shortcutModalCategory && /* @__PURE__ */ (void 0)("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150",
				onClick: (e) => {
					if (e.target === e.currentTarget) {
						setShortcutModalCategory(null);
						setShortcutName("");
						setShortcutUrl("");
					}
				},
				children: /* @__PURE__ */ (void 0)("div", {
					className: "w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
								className: "font-semibold text-base text-foreground",
								children: "Add shortcut"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 831,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"To category:",
									" ",
									/* @__PURE__ */ (void 0)("span", {
										className: "font-medium text-foreground",
										children: shortcutModalCategory
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 836,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 834,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 830,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								onClick: () => {
									setShortcutModalCategory(null);
									setShortcutName("");
									setShortcutUrl("");
								},
								className: "text-muted-foreground hover:text-foreground p-1 rounded-lg",
								"aria-label": "Close",
								children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 846,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 841,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 829,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
								className: "block text-xs font-medium text-muted-foreground mb-1",
								children: "Shortcut name"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 852,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								placeholder: "e.g. YouTube",
								value: shortcutName,
								onChange: (e) => setShortcutName(e.target.value),
								className: "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand",
								autoFocus: true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 855,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 851,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
								className: "block text-xs font-medium text-muted-foreground mb-1",
								children: "Shortcut link"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 859,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								placeholder: "e.g. https://youtube.com or youtube.com",
								value: shortcutUrl,
								onChange: (e) => setShortcutUrl(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter") {
										const name = shortcutName.trim();
										const rawUrl = shortcutUrl.trim();
										if (name && rawUrl && shortcutModalCategory) {
											const validUrl = rawUrl.startsWith("http://") || rawUrl.startsWith("https://") ? rawUrl : `https://${rawUrl}`;
											const current = safeCategories[shortcutModalCategory] || [];
											setCategories({
												...safeCategories,
												[shortcutModalCategory]: [...current, {
													t: name,
													u: validUrl
												}]
											});
											setShortcutModalCategory(null);
											setShortcutName("");
											setShortcutUrl("");
										}
									}
								},
								className: "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 862,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 858,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 850,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex gap-2 pt-1",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => {
									setShortcutModalCategory(null);
									setShortcutName("");
									setShortcutUrl("");
								},
								className: "flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 886,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => {
									const name = shortcutName.trim();
									const rawUrl = shortcutUrl.trim();
									if (name && rawUrl && shortcutModalCategory) {
										const validUrl = rawUrl.startsWith("http://") || rawUrl.startsWith("https://") ? rawUrl : `https://${rawUrl}`;
										const current = safeCategories[shortcutModalCategory] || [];
										setCategories({
											...safeCategories,
											[shortcutModalCategory]: [...current, {
												t: name,
												u: validUrl
											}]
										});
										setShortcutModalCategory(null);
										setShortcutName("");
										setShortcutUrl("");
									}
								},
								disabled: !shortcutName.trim() || !shortcutUrl.trim(),
								className: "flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground hover:opacity-90 disabled:opacity-50 transition-opacity",
								children: "Add shortcut"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 893,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 885,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 828,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 821,
				columnNumber: 33
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 340,
		columnNumber: 10
	}, this);
}
function List({ items, onGo, onRemove }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "rounded-2xl bg-card p-4 text-center text-sm text-muted-foreground",
		children: "Nothing here yet"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 927,
		columnNumber: 29
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-2xl bg-card px-3 shadow-sm",
		children: items.map((e, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-3 border-b py-3 last:border-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: `https://www.google.com/s2/favicons?domain=${host(e.url)}&sz=32`,
					alt: "",
					className: "size-5"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 932,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => onGo(e.url),
					className: "min-w-0 flex-1 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "truncate text-sm font-medium",
						children: e.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 934,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: e.url
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 935,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 933,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => onRemove(e),
					"aria-label": "Remove",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 938,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 937,
					columnNumber: 11
				}, this)
			]
		}, i, true, {
			fileName: _jsxFileName,
			lineNumber: 931,
			columnNumber: 28
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 930,
		columnNumber: 10
	}, this);
}
//#endregion
export { App as component, getEngineDomain };
