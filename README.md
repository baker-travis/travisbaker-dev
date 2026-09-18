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

The development server prints the local URL when it starts.

## Validation

```bash
npm test
```

This creates the production build and verifies the rendered portfolio content
and metadata.

## Project structure

- `app/page.jsx` — interactive portfolio content and page structure
- `app/globals.css` — light/dark visual system and responsive layout
- `app/layout.tsx` — document shell and metadata
- `public/travis-baker-resume.pdf` — downloadable public résumé
- `.openai/hosting.json` — Sites deployment configuration

The site runs on the vinext/Cloudflare Workers-compatible starter and does not
require a database, external runtime API, or client-side JavaScript state.
