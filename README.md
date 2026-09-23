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
npm run lint
npm test
```

This creates the static production build in `out/` and verifies the rendered
portfolio content, metadata, and résumé asset.

## Deploy to Cloudflare

The site is deployed as static assets on Cloudflare Workers. Static asset
requests do not invoke Worker code.

GitHub Actions runs lint, the production build, and rendered-page checks for
pull requests targeting `master`. Every push to `master` deploys the tested
`out/` artifact to [travisbaker.dev](https://travisbaker.dev) after checks pass.
Pull requests never deploy. You can also run **CI and deploy** manually from
the Actions tab; only runs on `master` deploy to production.

### One-time GitHub setup

In the repository's **Settings → Secrets and variables → Actions**, add:

- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account that owns `travisbaker-dev`.
- `CLOUDFLARE_API_TOKEN` — a Cloudflare API token created using the
  **Edit Cloudflare Workers** template, scoped to that account and the
  `travisbaker.dev` zone. Retain the template's Workers deployment and route
  permissions so Wrangler can manage the configured custom domain.

See [Cloudflare's GitHub Actions setup](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)
for token creation. Store the token only as an Actions secret; the local
`wrangler login` OAuth session is not a CI credential.

The workflow uses GitHub's `production` environment, read-only repository
permissions, pinned action revisions, and the lockfile's Wrangler version.
Deployments are serialized so they cannot overlap. If Cloudflare Workers Builds
is also connected to this repository, disable its automatic builds to avoid
duplicate deployments.

### Manual fallback

Authenticate once, then deploy from your machine when needed:

```bash
npx wrangler login
npm run deploy
```

## Project structure

- `app/page.jsx` — interactive portfolio content and page structure
- `app/globals.css` — light/dark visual system and responsive layout
- `app/layout.tsx` — document shell and metadata
- `public/favicon.svg` — source for the TB favicon (ICO and Apple PNG fallbacks alongside it)
- `.github/workflows/ci.yml` — pull request checks and production deployment
- `public/travis-baker-resume.pdf` — downloadable public résumé
- `wrangler.jsonc` — Cloudflare static-assets deployment configuration

The site uses Next.js static export and does not require a database, server-side
runtime, or external API.
