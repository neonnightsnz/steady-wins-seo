# Steady Wins website rebuild

## Source review

- `steadywins/steady-wins-brand-voice.md`: direct, energetic, conversion-focused voice.
- `steadywins/Mandatory Mapping Between Brand Voice and AstroWind Components.md`: hero, pain, value, process, and FAQ sequence. Its LeadGenie/senior-living passage conflicts with the Steady Wins brief and is not adopted.
- `steadywins/Seo Packages - seo images.csv.csv`: nine package names and visual colour directions; no confirmed prices or deliverable quantities.
- `steadywins/index.html` and mirror file inventory: HTTrack index and Google sign-in captures, not recoverable website copy. Cookies and cache files are not site assets.
- Existing `AGENTS.md`, README, Astro configuration, navigation, layouts, widgets, and relevant `.agents/skills/` guides reviewed.

## Implementation plan

1. Preserve Astro 7, Tailwind 4, TypeScript, npm lockfile, shared widgets, theme switching, mobile navigation, and blog routing.
2. Establish an ink/white/yellow visual system, oversized editorial typography, clear section numbering, and package-specific accents from the CSV.
3. Rebuild the homepage around the Keyword Ranking Engine: bold hero, search visibility problems, package catalogue, value stack, process, FAQs, and clear next steps.
4. Add reusable package data and detail pages. Rebuild services, pricing, about, and contact to remove template sales content. Retain template examples outside public routes and replace demo blog posts with clearly authored Steady Wins guidance.
5. Use factual metadata and configuration-derived organization schema. Keep launch indexing disabled until the public origin is confirmed. Preserve existing social-preview assets; do not generate unrequested social cards.
6. Connect enquiries when a verified email or booking destination is supplied. Do not silently submit an inert form or invent contact information.
7. Run production build, Astro/ESLint/Prettier checks, and desktop/mobile browser checks including theme switching, blog, menu, package navigation, and enquiry behaviour.
8. Review hosting availability after validation. Record any launch blockers and verification results here.

## Content rules and unresolved inputs

- Package descriptions are editorial interpretations of names, not approved contractual deliverables.
- Do not publish example $499 pricing, 10% discounts, ranking deadlines, revenue results, testimonials, bonus valuations, guarantees, or client caps as facts.
- A countdown requires a confirmed real deadline. Omit it until supplied.
- Public domain, contact destination, commercial terms, prices, and exact scope need owner confirmation.
- The PBN package name is preserved from the source catalogue without inventing safety or ranking guarantees.

## Verification

- Rebuilt homepage, services catalogue, nine package detail pages, pricing, about, contact, and website information pages.
- Added two Steady Wins planning articles; preserved original template posts and demo pages in `reference/astrowind/` outside public routing.
- `npm run build`: passed; 24 pages generated, configured Inter font downloaded and self-hosted. Initial sandbox font download failed; network-enabled build succeeded.
- `npm run check`: passed; Astro checked 102 files with zero errors, warnings, or hints; ESLint and Prettier passed.
- Prettier now accepts native checkout line endings (`endOfLine: auto`), avoiding an unrelated rewrite of the repository's supplied instructions. npm install changed only dependency metadata in the lockfile, not versions.
- Production HTML audit: 23 content pages each have one H1 and launch `noindex`; all local link destinations exist. Homepage WebSite/Organization JSON-LD matches configuration.
- Browser review: desktop homepage in light and dark mode; mobile homepage, responsive menu opening and closing on navigation; production blog and all nine catalogue entries; representative package detail page.
- Brief builder: required fields prevent empty submission; completed sample brief displays the explicit local-download status. No enquiry is transmitted.
- Owner-only Sites preview registered at `https://steady-wins-seo.gritty-bream-1893.chatgpt.site`; canonical origin uses this actual preview URL. Public indexing remains disabled.

## Launch handover

- Confirm the public domain and enquiry email or booking URL. Set the destination in `src/data/packages.ts` and update `src/config.yaml` for the public origin.
- Review package descriptions, prices, scope, service terms, and contact/privacy information before a public launch.
- The current contact page downloads a brief; it is not an enquiry submission service. A confirmed email/booking link can be enabled without adding a server.
- Original social-preview imagery is retained as instructed by the Sites workflow; commission a branded social card separately if desired.
- Source captures containing cookies and sign-in pages remain local and are excluded from Git publication.
