import { n as __toESM } from "../_runtime.mjs";
import { b as Link, f as Scripts, g as Outlet, h as createRouter, p as HeadContent, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createHashHistory } from "../_libs/tanstack__history.mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as Route$1 } from "./routes-DJVzCArK.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bpg00u2X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "./assets/styles-B0xfFNQD.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") try {
			router.navigate({
				to: "/",
				replace: true
			});
		} catch {}
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-bold text-foreground",
					children: "WebNa"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Loading application..."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs",
						children: "Open Home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	const msg = error instanceof Error ? error.message : String(error);
	if (!(msg.includes("reading 'window'") || msg.includes("reading 'parentNode'") || msg.includes("<!doctype html>") || msg.includes("JSON.parse") || msg.includes("Unexpected token"))) console.error(error);
	(0, import_react.useEffect)(() => {
		if (msg.includes("reading 'window'") || msg.includes("reading 'parentNode'") || msg.includes("<!doctype html>") || msg.includes("JSON.parse") || msg.includes("Unexpected token")) {
			const t = setTimeout(() => {
				try {
					router.invalidate();
					reset();
				} catch {}
			}, 50);
			return () => clearTimeout(t);
		}
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [
		error,
		msg,
		reset,
		router
	]);
	if (msg.includes("reading 'window'") || msg.includes("reading 'parentNode'") || msg.includes("<!doctype html>") || msg.includes("JSON.parse") || msg.includes("Unexpected token")) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-bold text-foreground",
					children: "WebNa"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Resuming session..."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => {
						try {
							router.invalidate();
							reset();
						} catch {}
					},
					className: "mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground",
					children: "Reload Browser"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 93,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 92,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 122,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 117,
		columnNumber: 5
	}, this);
}
var Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
			},
			{ title: "WebNa Browser" },
			{
				name: "description",
				content: "Fast mobile browser with search engines, worldwide news, saved links and media player."
			},
			{
				property: "og:title",
				content: "WebNa Browser"
			},
			{
				property: "og:description",
				content: "Fast mobile browser with search engines, worldwide news, saved links and media player."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 191,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 196,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 194,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 190,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 208,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
			position: "top-center",
			richColors: true,
			closeButton: true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 209,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 206,
		columnNumber: 5
	}, this);
}
var rootRouteChildren = { IndexRoute: Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route
}) };
var routeTree = Route._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient({ defaultOptions: { queries: {
		staleTime: 3e5,
		retry: 1
	} } });
	const isCapacitorOrFile = typeof window !== "undefined" && (Boolean(window.__IS_CAPACITOR__) || window.location.protocol === "file:" || window.location.pathname.endsWith(".html") || window.location.pathname.includes("android_asset") || Boolean(window.Capacitor));
	return createRouter({
		routeTree,
		context: { queryClient },
		history: isCapacitorOrFile ? createHashHistory({ window: typeof window !== "undefined" ? window : void 0 }) : void 0,
		scrollRestoration: !isCapacitorOrFile,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
