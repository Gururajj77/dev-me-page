# Gururaj — Personal Site

A minimal "Me Page" built with Next.js, Tailwind CSS, TypeScript, and GSAP.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content

Copy and links live in `src/lib/content.ts`. Resume PDF is served from `public/resume.pdf`.

## Agent-readable

Every page has a markdown twin built from the same content (`src/lib/markdown.ts`):
`/index.md`, `/work/knotcms.md`, plus `/llms.txt`. On Cloudflare Pages,
`functions/_middleware.ts` serves the markdown at the page's own path when a
request sends `Accept: text/markdown`; `public/_routes.json` limits it to the
HTML routes. Test locally with `npm run preview`, then:

```bash
curl -H "Accept: text/markdown" http://localhost:8788/
curl http://localhost:8788/index.md
```

When adding a page, add its route to `markdownPages` in `src/lib/markdown.ts`,
`MARKDOWN_FOR` in the middleware, `public/_routes.json` and `src/app/sitemap.ts`.
