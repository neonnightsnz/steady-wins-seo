# Steady Wins workspace instructions

This repository is a static Astro 7 site deployed to Cloudflare Pages.

## Project layout

- `src/` — active Astro application code.
- `public/` — served-as-is assets, headers, redirects, favicon, and robots.txt.
- `docs/reference-material/` — source drafts, templates, and visual references.
- `docs/archive/` — historical prototypes and legacy configs; Git-ignored.
- `.agents/rules/` — committed agent behaviour rules.
- `.agents/scratchpads/` and `.agents/logs/` — local-only agent workspace.

Do not import from `docs/` or `.agents/` in production code.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro dev server |
| `npm run check` | Run Astro, ESLint, and Prettier checks |
| `npm run build` | Build the static site to `dist/` |
| `npm run verify` | Run check and build together |
| `npm run preview` | Preview `dist/` with Wrangler Pages locally |

## Before pushing

Run `npm run verify`. Keep `src/`, `public/`, config files, and package scripts at the repository root. Review that no files from `docs/archive/` or `.agents/scratchpads/` are being committed.

## Site-specific notes

Offer content, slugs, accents, and image mappings live in `src/data/offers.ts`. Shared site configuration lives in `src/data/site.ts`. The active Astro config is `astro.config.ts`.
