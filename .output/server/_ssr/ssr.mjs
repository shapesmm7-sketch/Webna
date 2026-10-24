//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
async function handleProxyFetchRequest(request) {
	const targetUrlParam = new URL(request.url).searchParams.get("url");
	if (!targetUrlParam) return new Response("Missing url parameter", { status: 400 });
	let target;
	try {
		target = new URL(targetUrlParam);
	} catch {
		return new Response("Invalid target url", { status: 400 });
	}
	try {
		const upstream = await fetch(target.toString(), {
			headers: {
				"User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
				Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.9"
			},
			redirect: "follow",
			signal: AbortSignal.timeout(12e3)
		});
		const contentType = upstream.headers.get("content-type") || "text/html; charset=utf-8";
		if (contentType.includes("text/html")) {
			let html = await upstream.text();
			html = html.replace(/<meta[^>]+http-equiv=["']?(?:content-security-policy|x-frame-options)["']?[^>]*>/gi, "");
			const baseTag = `<base href="${target.origin}${target.pathname}">`;
			const interceptScript = `<script>
(function() {
  document.addEventListener('click', function(e) {
    var a = e.target && e.target.closest('a');
    if (!a || !a.href) return;
    if (a.href.startsWith('javascript:') || a.href.startsWith('#')) return;
    e.preventDefault();
    e.stopPropagation();
    window.location.href = '/api/proxy?url=' + encodeURIComponent(a.href);
  }, true);
})();
<\/script>`;
			if (/<head[^>]*>/i.test(html)) html = html.replace(/<head[^>]*>/i, `$&${baseTag}${interceptScript}`);
			else html = baseTag + interceptScript + html;
			return new Response(html, {
				status: upstream.status || 200,
				headers: {
					"Content-Type": contentType,
					"Access-Control-Allow-Origin": "*",
					"X-Frame-Options": "ALLOWALL"
				}
			});
		}
		const arrayBuffer = await upstream.arrayBuffer();
		return new Response(arrayBuffer, {
			status: upstream.status || 200,
			headers: {
				"Content-Type": contentType,
				"Access-Control-Allow-Origin": "*",
				"X-Frame-Options": "ALLOWALL"
			}
		});
	} catch (err) {
		const errorMsg = err instanceof Error ? err.message : String(err);
		return new Response(`<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;padding:30px;text-align:center;"><h2>Unable to load page</h2><p style="color:#666;">${errorMsg}</p><a href="${target.toString()}" target="_blank" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#c25e00;color:#fff;border-radius:12px;text-decoration:none;font-weight:600;">Open Externally</a></body></html>`, {
			status: 502,
			headers: { "Content-Type": "text/html; charset=utf-8" }
		});
	}
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-OYsSt7Wb.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		if (new URL(request.url).pathname === "/api/proxy") return await handleProxyFetchRequest(request);
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
