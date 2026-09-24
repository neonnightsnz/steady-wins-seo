# Project workspace rules

- Live Astro code stays in `src/`; served-as-is assets stay in `public/`.
- `docs/reference-material/` and `docs/archive/` are context only; production code must not import from them.
- `.agents/rules/` is committed. `.agents/scratchpads/` and `.agents/logs/` are local-only.
- Before pushing, run `npm run verify`.
- The active Astro config is `astro.config.ts`; do not rename it without a build-tested reason.
