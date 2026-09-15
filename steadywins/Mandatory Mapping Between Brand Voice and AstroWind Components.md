Here is the English version of the previous response.

---

This brand voice document upgrades the Sabri Suby methodology from a “reference framework” to a **mandatory execution standard**. It directly constrains component selection, copy population, and visual hierarchy decisions in the AstroWind rebuild. Below is the mapping from that document into engineering actions.

---

## 1. Mandatory Mapping Between Brand Voice and AstroWind Components

Each of the five core principles in the document corresponds to specific widget types and configuration requirements:

| Brand Voice Principle | Required Component | AstroWind Widget | Configuration Notes |
|---|---|---|---|
| **1. Unapologetic, high-energy sales drive** | Hero must contain an aggressive claim + one dominant CTA | `Hero` / `HeroSplit` | Disable soft `HeroText` variants; CTA copy must start with a verb |
| **2. Ruthless problem identification** | A separate “pain amplification” block placed before the value proposition | `Features` (used in reverse: framed as “what you are losing”) | Use warning/loss icons instead of checkmarks |
| **3. Irresistible value stacking** | Value stack table + risk-reversal guarantee | `Pricing` + `Steps` + custom `ValueStack` component | Must show “total value vs. your price” comparison |
| **4. Artificial scarcity and brutal urgency** | Countdown + client-cap counter + deadline | `Countdown` + `Stats` | Countdown must be tied to a real deadline, not reset on a loop |
| **5. Concrete ROI and brutal specificity** | Data cards + exact deliverable list + timeline | `Stats` + `Steps` + `Timeline` | Every number must be precise; ban vague terms like “many” or “a lot” |

**Key engineering decision:** The “Words That Are Ours” table in the document should be encoded as **global copy replacement rules**. In AstroWind’s `src/config.yaml` and component defaults, replace all generic terms with brand-specific terms. For example, the default `newsletter` widget title “Subscribe to our newsletter” must be replaced with something like “Claim Your Market Dominance Briefing.”

---

## 2. How Copy Rhythm Constrains Page Layout

The document explicitly requires “single-line punchy paragraphs” and “short, aggressive statements.” This directly affects AstroWind’s `text` component configuration.

**Layout patterns to avoid:**
- Long paragraphs in the `Prose` component (more than 2 lines)
- Multi-column `Features` grids with descriptions longer than 8 words
- `FAQs` with answers longer than 3 sentences

**Layout patterns to adopt:**
- `Hero` headline under 8 words; subheadline under 15 words
- `Steps` component: each step description under 12 words
- `Testimonials` must contain specific numbers (revenue growth, ranking improvement, time period)

The sample copy in the document can be used directly as a template for component copy:

> *“Target the terms. Claim the traffic. Own the market.”*

That rhythm — 3 short sentences, 3–4 words each, verb-first — should become the rhythm standard for all section headings.

---

## 3. Managing the Tension Between Tone and Audience

This is a **risk point** that needs to be flagged clearly.

LeadGenie’s audience consists of **senior living community operators and sales directors** — a highly relationship-driven, long-sales-cycle, compliance-sensitive B2B vertical. The brand voice document’s words like “crush, dominate, obliterate” may backfire with this audience: they can come across as unprofessional, untrustworthy, or even offensive.

**Recommended adaptation strategy:**

| Original Term | Senior Living B2B Adaptation | What Is Preserved |
|---|---|---|
| crush, obliterate | outpace, outperform | Competitive edge preserved; violent metaphor replaced |
| Search Engine Prey | competitors losing to you | Competitive framing preserved; predatory language replaced |
| Godfather Offer | The Steady Wins Advantage | Value stacking preserved; mafia metaphor replaced |
| Countdown + client cap | Keep, but tie to “this quarter’s occupancy growth window” | Urgency preserved; framing adapted to industry cycle |

**Core judgment:** The brand voice document’s **rhythm and structure** — short sentences, active voice, specific numbers, urgency — are fully applicable to senior living B2B. What needs adjustment is the **violent metaphor and mafia-culture references**. Those work in Suby’s consumer marketing context but, in front of senior living operators, trigger the signal: “This person does not understand our industry.”

---

## 4. Immediate Next Steps

1. **Build brand voice lint rules.** Add a copy checklist to `arthelokyo/astrowind`’s `AGENTS.md` so every AI-assisted copy generation automatically checks for banned words (help, try, strive, synergy, etc.).

2. **Create a custom ValueStack component.** AstroWind has no native “value stack” widget. Create one under `src/components/widgets/` with this structure: main deliverable + 3–5 bonuses + total value calculation + risk-reversal guarantee + CTA.

3. **Bind the countdown to a real event.** The default `Countdown` widget loops, which violates the document’s “artificial scarcity” principle — scarcity must be real and non-repeating. Modify the component logic to bind to a specific date, such as “this quarter’s intake window close date.”

4. **Rewrite all default copy.** AstroWind’s 30+ widgets ship with default English copy. Each must be replaced with brand-voice-compliant copy. This can be done in bulk using the repo’s built-in AI skills, but human review is still required to verify rhythm and tone.

If you can provide the actual copy from the current LeadGenie page — screenshots or exported HTML — I can annotate each sentence that violates the brand voice document and provide rewritten versions that fit AstroWind’s component structure.