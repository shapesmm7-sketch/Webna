globalThis.__nitro_main__ = import.meta.url;
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx+unenv.mjs";
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/styles-QRBSzRTG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e227-oVErTuU9csersuF6rGBMI3NyV1A\"",
		"mtime": "2026-10-24T08:10:37.136Z",
		"size": 123431,
		"path": "../public/assets/styles-QRBSzRTG.css"
	},
	"/assets/routes-ChbrbIlp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a130-42f3QoAcFjct6+P1sa0LDSfH3f0\"",
		"mtime": "2026-10-24T08:10:37.136Z",
		"size": 500016,
		"path": "../public/assets/routes-ChbrbIlp.js"
	},
	"/assets/aistudio/Screenshot_20261020-180522_Chrome_e8c7bc53.jpg": {
		"type": "image/jpeg",
		"etag": "\"28dbe-tt14X789hWRGnwhNWOKFraDD2hM\"",
		"mtime": "2026-10-24T08:10:38.274Z",
		"size": 167358,
		"path": "../public/assets/aistudio/Screenshot_20261020-180522_Chrome_e8c7bc53.jpg"
	},
	"/assets/aistudio/Screenshot_20261020-181223_Chrome_68251b26.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a7cb-KE0JeEjm2iTOwkxYqiWNSwXw1d0\"",
		"mtime": "2026-10-24T08:10:38.275Z",
		"size": 239563,
		"path": "../public/assets/aistudio/Screenshot_20261020-181223_Chrome_68251b26.jpg"
	},
	"/assets/aistudio/Screenshot_20261020-182922_Chrome_60a493bd.jpg": {
		"type": "image/jpeg",
		"etag": "\"48edd-tdNLeMT6uRmCLiyhaNYhbyfErAw\"",
		"mtime": "2026-10-24T08:10:38.275Z",
		"size": 298717,
		"path": "../public/assets/aistudio/Screenshot_20261020-182922_Chrome_60a493bd.jpg"
	},
	"/assets/aistudio/Screenshot_20261021-002604_Chrome_4eef11fe.jpg": {
		"type": "image/jpeg",
		"etag": "\"48e85-GIwwv5250KgJHBzaT4T8dzUgDTI\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 298629,
		"path": "../public/assets/aistudio/Screenshot_20261021-002604_Chrome_4eef11fe.jpg"
	},
	"/assets/aistudio/Screenshot_20261021-003326_Chrome_1cc66c5f.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c59a-aMEg9vQ3k6fkd2yozuYF+W66kRQ\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 181658,
		"path": "../public/assets/aistudio/Screenshot_20261021-003326_Chrome_1cc66c5f.jpg"
	},
	"/assets/aistudio/Screenshot_20261021-085542_Chrome_e3d90fec.jpg": {
		"type": "image/jpeg",
		"etag": "\"442f2-J4W+ZlDG0Tf52J9einktST49i88\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 279282,
		"path": "../public/assets/aistudio/Screenshot_20261021-085542_Chrome_e3d90fec.jpg"
	},
	"/assets/aistudio/Screenshot_20261021-104011_Chrome_56d3714a.jpg": {
		"type": "image/jpeg",
		"etag": "\"440bf-4fKLH9I3cQ6wEmVHETge/odo9V4\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 278719,
		"path": "../public/assets/aistudio/Screenshot_20261021-104011_Chrome_56d3714a.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-172821_Chrome_fa965f02.jpg": {
		"type": "image/jpeg",
		"etag": "\"36853-CdD4NurHQlYAbBc5jKeNBkMG45Q\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 223315,
		"path": "../public/assets/aistudio/Screenshot_20261022-172821_Chrome_fa965f02.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-191152_Chrome_2193105d.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d09a-JpBgkM5qAd9l1FGplDIUjTJieYk\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 315546,
		"path": "../public/assets/aistudio/Screenshot_20261022-191152_Chrome_2193105d.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-180442_d4a1d11b.jpg": {
		"type": "image/jpeg",
		"etag": "\"53165-xZL2FHCqm4BZVcx2nXI0lPX6oyw\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 340325,
		"path": "../public/assets/aistudio/Screenshot_20261022-180442_d4a1d11b.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-211635_Chrome_b7fad753.jpg": {
		"type": "image/jpeg",
		"etag": "\"55133-jKN7ZYys0SiLXUWO17kUedBirlw\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 348467,
		"path": "../public/assets/aistudio/Screenshot_20261022-211635_Chrome_b7fad753.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-190105_Chrome_572fc3df.jpg": {
		"type": "image/jpeg",
		"etag": "\"44054-uPLHqLW+Qi2Hev2mXySYmpNsPLQ\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 278612,
		"path": "../public/assets/aistudio/Screenshot_20261022-190105_Chrome_572fc3df.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-212215_Chrome_238ea3ab.jpg": {
		"type": "image/jpeg",
		"etag": "\"52b6a-O7GAGG/AkA8o3r+oXC5Y2MYVhgE\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 338794,
		"path": "../public/assets/aistudio/Screenshot_20261022-212215_Chrome_238ea3ab.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-212605_Chrome_283a4fa2.jpg": {
		"type": "image/jpeg",
		"etag": "\"3fd25-2zkr5sWT2+WL865iSegR3JQyM80\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 261413,
		"path": "../public/assets/aistudio/Screenshot_20261022-212605_Chrome_283a4fa2.jpg"
	},
	"/assets/aistudio/Screenshot_20261023-112822_Chrome_45bc82f5.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f388-o1Zlv7aRcVAhZSuRumkMjmgylnk\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 324488,
		"path": "../public/assets/aistudio/Screenshot_20261023-112822_Chrome_45bc82f5.jpg"
	},
	"/assets/aistudio/Screenshot_20261023-122556_Chrome_3edb392f.jpg": {
		"type": "image/jpeg",
		"etag": "\"30d68-9ikkPFQbuj5dScspXKEstPyBOvE\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 200040,
		"path": "../public/assets/aistudio/Screenshot_20261023-122556_Chrome_3edb392f.jpg"
	},
	"/assets/aistudio/Screenshot_20261022-180419_0d8313d2.jpg": {
		"type": "image/jpeg",
		"etag": "\"5dd5d-9fIgB3QjhJTghaHdXOqlvXn6A8o\"",
		"mtime": "2026-10-24T08:10:38.277Z",
		"size": 384349,
		"path": "../public/assets/aistudio/Screenshot_20261022-180419_0d8313d2.jpg"
	},
	"/assets/index-DYK8nNH1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c0da-2/Qqh07e1FdqUNzduaNQVmsO3cA\"",
		"mtime": "2026-10-24T08:10:37.135Z",
		"size": 639194,
		"path": "../public/assets/index-DYK8nNH1.js"
	},
	"/assets/aistudio/Screenshot_20261023-115602_Chrome_0096ea37.jpg": {
		"type": "image/jpeg",
		"etag": "\"9844d-Csy8Xgm7iFBpwLHiOwXbQVYBAts\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 623693,
		"path": "../public/assets/aistudio/Screenshot_20261023-115602_Chrome_0096ea37.jpg"
	},
	"/videos/flower.mp4": {
		"type": "video/mp4",
		"etag": "\"1137b7-+08VoVyi5fkN62AMjxKHCOQ84iI\"",
		"mtime": "2026-10-24T08:10:38.275Z",
		"size": 1128375,
		"path": "../public/videos/flower.mp4"
	},
	"/assets/aistudio/Screenshot_20261023-131343_WebNa_1683f15b.jpg": {
		"type": "image/jpeg",
		"etag": "\"8646-Oyh9ckdhye3vl6PSdZz1nJcSSPc\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 34374,
		"path": "../public/assets/aistudio/Screenshot_20261023-131343_WebNa_1683f15b.jpg"
	},
	"/assets/aistudio/Screenshot_20261023-132353_WebNa_5f20aadd.jpg": {
		"type": "image/jpeg",
		"etag": "\"89e2-8B8S9FAl+M47KbWaI8ISRxhTHDY\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 35298,
		"path": "../public/assets/aistudio/Screenshot_20261023-132353_WebNa_5f20aadd.jpg"
	},
	"/assets/aistudio/Screenshot_20261023-125228_Chrome_6cd98852.jpg": {
		"type": "image/jpeg",
		"etag": "\"3730c-IL5QimpW9cZ+9Dkt4Mdtr9tU14M\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 226060,
		"path": "../public/assets/aistudio/Screenshot_20261023-125228_Chrome_6cd98852.jpg"
	},
	"/assets/aistudio/Screenshot_20261023-181447_Chrome_015c848d.jpg": {
		"type": "image/jpeg",
		"etag": "\"68f4-P5TdjE78E/eUSvHRKQZqNpCRyCw\"",
		"mtime": "2026-10-24T08:10:38.278Z",
		"size": 26868,
		"path": "../public/assets/aistudio/Screenshot_20261023-181447_Chrome_015c848d.jpg"
	},
	"/videos/movie_300.mp4": {
		"type": "video/mp4",
		"etag": "\"2a1519-5SMFKT007zq0gF4FAL6qkJrL/4E\"",
		"mtime": "2026-10-24T08:10:38.276Z",
		"size": 2757913,
		"path": "../public/videos/movie_300.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6qWkqV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
