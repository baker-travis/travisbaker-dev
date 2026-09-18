# Travis Baker — Portfolio

The source for Travis Baker’s personal portfolio: a clean, text-first,
single-page site highlighting application architecture, developer platforms,
career progression, and selected engineering case studies.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Validation

```bash
npm test
```

This creates the static production build in `out/` and verifies the rendered
portfolio content, metadata, and résumé asset.

## Deploy to Cloudflare

The site is deployed as static assets on Cloudflare Workers. Static asset
requests do not invoke Worker code.

Authenticate once, then deploy:

```bash
npx wrangler login
npm run deploy
```

For automatic deployments, connect the `baker-travis/travisbaker-dev`
repository in Cloudflare Workers Builds. Cloudflare uses `wrangler.jsonc` for
the project name and static output directory.

## Project structure

- `app/page.jsx` — interactive portfolio content and page structure
- `app/globals.css` — light/dark visual system and responsive layout
- `app/layout.tsx` — document shell and metadata
- `public/travis-baker-resume.pdf` — downloadable public résumé
- `wrangler.jsonc` — Cloudflare static-assets deployment configuration

The site uses Next.js static export and does not require a database, server-side
runtime, or external API.
