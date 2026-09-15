# Steady Wins implementation guide

Read this together with [AGENTS.md](AGENTS.md), which remains the authoritative technical guide, and [PLAN.md](PLAN.md).

## Source of truth

Read the two Markdown briefs and package CSV in `steadywins/`. Do not publish the HTTrack cache, Google sign-in captures, cookies, or mirror assets. Do not treat the unrelated LeadGenie paragraph as this business's audience.

## Brand and design

- Brand: Steady Wins. Core phrase: Keywords That Rank.
- Write short, active sentences. Lead with buyer intent and a clear action.
- Use Keyword Ranking Engine, qualified buyer traffic, and growth strategy where natural.
- Avoid corporate filler, violent metaphors, unsupported superiority, and fabricated urgency.
- Hero heading under eight words; short supporting copy; one dominant CTA.
- Use shared theme tokens, strong ink/yellow contrast, generous whitespace, and the package colour directions.
- Preserve responsive navigation, visible keyboard focus, reduced-motion support, and light/dark readability.

## Truth and conversion

- Examples in the voice guide are not approved offers.
- Publish only confirmed prices, deliverable counts, dates, guarantees, client outcomes, and contact information.
- Never invent a countdown, client-cap counter, testimonial, or monetary value stack.
- Keep package content in a shared typed data file. Detail pages and navigation must derive from it.
- Forms must perform a real documented action. Explain local-only actions honestly.
- Build WebSite/Organization structured data from site configuration only.
- Do not enable indexing until the canonical origin and public content are confirmed.

## Engineering workflow

Follow the matching `.agents/skills/` guide before project-specific work. Preserve Astro/Tailwind architecture and npm dependencies. Reuse existing widgets where suitable; custom widgets belong in `src/components/widgets/`.

After changes, run `npm run build` and `npm run check`. Visually verify homepage, blog, dark mode, mobile menu, and the changed user journey. Record actual results and unresolved launch inputs in PLAN.md.
