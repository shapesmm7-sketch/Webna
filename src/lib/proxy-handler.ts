import type { IncomingMessage, ServerResponse } from "http";

export async function handleProxyNodeRequest(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  const reqUrl = new URL(req.url || "/", "http://localhost:3000");
  const targetUrlParam = reqUrl.searchParams.get("url");

  if (!targetUrlParam) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Missing url parameter");
    return;
  }

  let target: URL;
  try {
    target = new URL(targetUrlParam);
  } catch {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Invalid target url");
    return;
  }

  try {
    const upstream = await fetch(target.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
    });

    const contentType =
      upstream.headers.get("content-type") || "text/html; charset=utf-8";

    // Set permissive frame and CORS headers
    res.setHeader("Content-Type", contentType);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("X-Frame-Options", "ALLOWALL");

    if (contentType.includes("text/html")) {
      let html = await upstream.text();

      // Remove restrictive CSP and X-Frame meta tags from HTML body
      html = html.replace(
        /<meta[^>]+http-equiv=["']?(?:content-security-policy|x-frame-options)["']?[^>]*>/gi,
        "",
      );

      // Inject <base> tag and navigation interceptor script
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
</script>`;

      if (/<head[^>]*>/i.test(html)) {
        html = html.replace(/<head[^>]*>/i, `$&${baseTag}${interceptScript}`);
      } else {
        html = baseTag + interceptScript + html;
      }

      res.statusCode = upstream.status || 200;
      res.end(html);
    } else {
      const buffer = Buffer.from(await upstream.arrayBuffer());
      res.statusCode = upstream.status || 200;
      res.end(buffer);
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    res.statusCode = 502;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Error loading page</title></head>
<body style="font-family:system-ui,sans-serif;padding:30px;text-align:center;">
  <h2>Unable to load page</h2>
  <p style="color:#666;">${errorMsg}</p>
  <a href="${target.toString()}" target="_blank" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#c25e00;color:#fff;border-radius:12px;text-decoration:none;font-weight:600;">Open Externally</a>
</body>
</html>`);
  }
}

export async function handleProxyFetchRequest(
  request: Request,
): Promise<Response> {
  const reqUrl = new URL(request.url);
  const targetUrlParam = reqUrl.searchParams.get("url");

  if (!targetUrlParam) {
    return new Response("Missing url parameter", { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(targetUrlParam);
  } catch {
    return new Response("Invalid target url", { status: 400 });
  }

  try {
    const upstream = await fetch(target.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
    });

    const contentType =
      upstream.headers.get("content-type") || "text/html; charset=utf-8";

    if (contentType.includes("text/html")) {
      let html = await upstream.text();
      html = html.replace(
        /<meta[^>]+http-equiv=["']?(?:content-security-policy|x-frame-options)["']?[^>]*>/gi,
        "",
      );

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
</script>`;

      if (/<head[^>]*>/i.test(html)) {
        html = html.replace(/<head[^>]*>/i, `$&${baseTag}${interceptScript}`);
      } else {
        html = baseTag + interceptScript + html;
      }

      return new Response(html, {
        status: upstream.status || 200,
        headers: {
          "Content-Type": contentType,
          "Access-Control-Allow-Origin": "*",
          "X-Frame-Options": "ALLOWALL",
        },
      });
    }

    const arrayBuffer = await upstream.arrayBuffer();
    return new Response(arrayBuffer, {
      status: upstream.status || 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "X-Frame-Options": "ALLOWALL",
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return new Response(
      `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;padding:30px;text-align:center;"><h2>Unable to load page</h2><p style="color:#666;">${errorMsg}</p><a href="${target.toString()}" target="_blank" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#c25e00;color:#fff;border-radius:12px;text-decoration:none;font-weight:600;">Open Externally</a></body></html>`,
      {
        status: 502,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }
}
