# HANDOFF — Steady Wins site

_Last updated: end of session (branch `main`). For the original build plan see [PLAN.md](./PLAN.md)._

This is the session-memory document for continuing work. It records the **current truth**, not a transcript.

---

## Current Project State

### What changed this session
1. **Transparent logo + services-card artwork (last task, COMPLETE + committed).**
   - `src/components/Logo.astro`: removed the white `rounded-lg/bg-white` card; logo now sits directly on the background. Static `/images/logo.png` + animated `/images/logo-animated.gif`; hover swaps via CSS opacity cross-fade (no layout shift).
   - `src/assets/styles/steadywins.css`: `.sw-package-image-wrap` had its inner container removed (background/border/radius/overflow dropped; now only `aspect-ratio:12/4; margin`), and `.sw-package-image` uses `object-fit: contain` so the card glow passes behind the transparent title artwork.
   - Re-imported updated transparent `*-packages.png` into `public/images/offers/` (kept destination filenames), plus updated logo PNG/GIF from `steadywins/SEO Business Images/steady-wins-logo/`.
   - Fixed a latent mismatch: `keywords-that-rank` `imagePackages` pointed at a non-existent `.jpg`; tracked asset is `.png`. Updated `src/data/packages.ts` to `keywords-that-rank-packages.png`.
2. **Content pipeline skeleton (IN PROGRESS — scaffolded but NOT wired).**
   - Created `content-source/` (docs migrated: `brand-voice.md`, `image-guidelines.md`, `service-playbook.md`, `copy-master.md`; `packages/{id}.md` x 9; `assets/{title,text,thumbnail,grid}/`).
   - Created `manifest.json` (9 packages, structural fields + asset refs; canonical ids per approved registry).
   - **Not implemented:** the 3 scripts, `src/data/generated/`, and `package.json` build/dev hooks. The live site still reads hand-authored `src/data/packages.ts` + `src/data/packageExtra.ts`.

### Current architecture (relevant to continuing)
- Astro 7 + Tailwind 4 static site. Live package data is **hand-authored** in `src/data/packages.ts` (+ `packageExtra.ts`), imported by `PackageGrid.astro` and `[slug].astro`.
- `content-source/` + `manifest.json` exist as the intended future single-source-of-truth, but are a **non-breaking skeleton only** — nothing reads them yet.
- Site serves images from `public/images/offers/`; source artwork lives in `steadywins/SEO Business Images/` (per-package folders) and is manually mirrored.

### Decisions locked in
- **Category taxonomy (approved):** exactly `core`, `content`, `links`, `strategy`; Nitrous SEO Add-on = `core` + an `addOn/eligibility` badge, NOT a fifth category. Do not use `Core SEO` as a category value.
- **Canonical service registry (approved, immutable):** ids = `20-day-seo-boost`, `content-that-ranks`, `hard-hitting-guest-posts`, `keywords-that-rank`, `new-links-all-month`, `nitrous-seo-addon`, `seo-perfect-storm`, `easy-seo-quick-wins`, `the-pbn-network-whip`. `id` is structural + immutable; display name/sub-brand/tagline/CTA are changeable copy.
- **Manifest owns:** structural identity/config + asset references. **Copy lives only in `content-source/packages/{id}.md`.** Never duplicate copy fields into the manifest.
- **Asset slots (approved):** exactly three — `title` (transparent/no-bg title-only), `text` (centered-text), `thumbnail` (16:9 photo+text). Slot describes the VARIANT, not placement. No aliases (no `hero`/`secondary`/`no-bg-title-only` as manifest keys). A 4th `grid` slot was added in the scaffold to preserve the current wide card banner — reconsider before finalising.
- **Structural vs copy:** copy/images/presentation/CSS apply directly; structural fields (id, displayName, slug/route, price+billing, category, add/remove package) require approval with old->new diff.
- **Iteration contract (representative-first):** REFERENCE -> ONE representative page/package -> user visual review -> approval -> THEN propagate. Do NOT bulk-propagate before approval. Applies to the still-open services-page redesign.

### Current representative implementation
- `/services/` page (acts as the packages/services catalogue). The approved brief says make it a **decision page**, but **not yet implemented** — see Pending below. No propagated pattern has been approved this session.

### Pending user review
- The last committed work (transparent logo + services-card transparency) was handed as the **representative implementation and is waiting for visual review/approval** before any similar treatment is propagated elsewhere.
- The **`/services/` decision-page redesign** (approved brief) is **NOT IMPLEMENTED.** Brief asks for: decision-oriented intro ("Start with where your site is right now. We'll show you the next move."), four repeated category icons (core/content/links/strategy), a "Where is your site right now?" decision section, keep the 9-card grid below it, no taglines on service cards (keep them on detail pages under the CTA), and use `assets.title` transparent PNGs where present (semantic visually-hidden H1 + `alt=""`).

### Known issues
- **PBN Network Whip `copy.cta` has a leaked guardrail string** in the live `src/data/packages.ts`: it ends with "...for you. -- # One more guardrail note for whoever ships these live ... confirm 10-15 links is your actual delivery range". Auto-fixed only once the generator pipeline replaces hand-authored TS. Not affecting build, but wrong copy on the live detail page.
- `content-source/` is excluded from Prettier (added to `.prettierignore`) — intentional (human-authored content), but `prettier --check .` does not cover it.

### Next recommended step
There are two valid continuations. The **single most logical next action**: implement the `/services/` decision page (approved brief) as the representative implementation and stop for visual review — it is the acknowledged UX problem and the iteration-contract entry point. Alternative (only if the services page is deprioritised): finish wiring the content pipeline so the site builds from `manifest.json` + `content-source/`.

### After approval (of the representative /services/ page)
- Propagate the four-category icon system and any card/asset treatment to package detail pages per the iteration contract.
- Reconcile `manifest.json` asset slots (finalise 3 vs the extra `grid` slot) and wire the pipeline scripts + `src/data/generated/` + build hooks; then fix the PBN cta leak automatically and remove hand-authored `packages.ts`.

### Important paths/files
- `src/pages/services.astro`, `src/components/widgets/PackageGrid.astro` — catalogue UI.
- `src/data/packages.ts`, `src/data/packageExtra.ts` — LIVE package data (hand-authored; pipeline not wired).
- `src/pages/packages/[slug].astro` — package detail page (renders `imageV2` hero + `packageExtra` sections).
- `src/components/Logo.astro`, `src/assets/styles/steadywins.css` — logo + card visuals (this session's work).
- `manifest.json`, `content-source/` — approved pipeline skeleton (not wired).
- `docs/steady-wins-reviews.csv` — testimonials source.
- `steadywins/steady-wins-brand-voice.md`, `steadywins/SEO Business Images/steady-wins-image-guidelines.md`, `reference/service-playbook.md`, `reference/pages copy/steady-wins-page-copy.md` — references (mirrored into `content-source/`).

### Commands
- `npm run dev` (localhost:4321) · `npm run build` · `npm run preview`
- `npm run check` (astro check + ESLint + Prettier)

### Do not do
- Do not use `steady-seo` as a conceptual service name; canonical identity is the approved registry id.
- Do not add `add-on`/`Core SEO` as primary categories.
- Do not propagate any layout/card/asset pattern beyond `/services/` until the representative is approved.
- Do not hand-edit the (future) `src/data/generated/` build artifact once the pipeline is wired.
- Do not treat `content-source/` + `manifest.json` as live: no code reads them yet.
