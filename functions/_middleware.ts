/**
 * Content negotiation for agents (Cloudflare Pages Functions middleware).
 *
 * The site is a static export. Each page also has a static markdown twin built
 * from the same content (`/index.md`, `/work/knotcms.md`). A request for the
 * HTML path with `Accept: text/markdown` gets the markdown twin; everyone else
 * gets the HTML, with `Vary: Accept` so caches keep the two apart.
 *
 * `public/_routes.json` limits this function to the HTML page routes, so
 * assets, images, the résumé PDF and the `.md` files are served without
 * invoking it.
 */

type Env = { ASSETS: { fetch: (input: Request | URL | string) => Promise<Response> } };

type Context = {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
};

/** HTML route → markdown twin. Keep in sync with `src/lib/markdown.ts`. */
const MARKDOWN_FOR: Record<string, string> = {
  "/": "/index.md",
  "/work/knotcms": "/work/knotcms.md",
};

function normalise(pathname: string) {
  const path = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

/** True when the client ranks text/markdown at least as high as text/html. */
function prefersMarkdown(accept: string | null) {
  if (!accept) return false;
  let markdown = 0;
  let html = 0;
  for (const part of accept.split(",")) {
    const [type, ...params] = part.trim().toLowerCase().split(";");
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    const q = qParam ? Number(qParam.slice(2)) || 0 : 1;
    if (type.trim() === "text/markdown") markdown = Math.max(markdown, q);
    if (type.trim() === "text/html") html = Math.max(html, q);
  }
  return markdown > 0 && markdown >= html;
}

export async function onRequest({ request, env, next }: Context) {
  const url = new URL(request.url);
  const markdownPath = MARKDOWN_FOR[normalise(url.pathname)];
  const negotiable = markdownPath && (request.method === "GET" || request.method === "HEAD");

  if (negotiable && prefersMarkdown(request.headers.get("Accept"))) {
    const asset = await env.ASSETS.fetch(new URL(markdownPath, url));
    if (asset.ok) {
      const headers = new Headers(asset.headers);
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("Content-Location", markdownPath);
      headers.set("Vary", "Accept");
      return new Response(request.method === "HEAD" ? null : asset.body, {
        status: 200,
        headers,
      });
    }
  }

  const response = await next();
  if (!markdownPath) return response;

  const headers = new Headers(response.headers);
  headers.append("Vary", "Accept");
  headers.set("Link", `<${markdownPath}>; rel="alternate"; type="text/markdown"`);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
