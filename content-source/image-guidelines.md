\# Steady Wins — Package Image Guidelines



\### Naming convention + where each variant belongs



Every package ships with 3 image variants. This doc defines the naming pattern and where each one should (and shouldn't) be used, so anyone adding a new package follows the same system.



\---



\## The 3 variants



Using \*\*20 Day SEO Boost\*\* as the reference example:



| # | File name pattern | Example | What it is |

| --- | --- | --- | --- |

| 1 | `\[package-slug]` — no version, no "text-only" | `20-days-seo-boost.png` | Title only, transparent background |

| 2 | `steady-wins-\[package-slug]-\[tagline]-text-only` | `steady-wins-20-days-seo-boost-push-the-button-text-only.png` | Full branded text, centered, with background |

| 3 | `steady-wins-\[package-slug]-\[tagline]v2` | `steady-wins-20-days-seo-boost-push-the-buttonv2.png` | Photo + full branded text — the YouTube-thumbnail-style version |



\*\*Naming rule for new packages:\*\* keep the package slug and tagline consistent across all 3 filenames for a given package — only the suffix (nothing / `-text-only` / `v2`) changes. That's what makes the pattern greppable and lets anything automated (a build script, a CMS query) find all 3 variants for a package from one base name.



\---



\## Where each one goes



\### Variant 1 — No-bg, title only



\*\*Use for:\*\*



\- \*\*`/services` package grid.\*\* This is the primary use case — at small card size, this is the only variant that stays legible and doesn't fight for attention against 8 neighboring cards. Transparent background means it also drops cleanly onto the dark site background with no visible box edge.

\- \*\*Small placement on individual package pages\*\* — e.g. top-left near the breadcrumb/eyebrow, as a compact brand mark for that package rather than a hero image.

\- Anywhere the image needs to sit over a colored or dark panel without a background clash: email headers, PDF proposal headers, print collateral.



\*\*Don't use for:\*\* anything that needs to grab attention on its own in a busy feed (social shares, video thumbnails, ads) — it's deliberately quiet, and quiet loses in a thumbnail grid competing against loud neighbors.



\---



\### Variant 2 — Text-only, centered, with background



\*\*Use for:\*\*



\- Contexts that want full branded messaging but no photo of a person — print handouts, PDF one-pagers, partner/affiliate co-marketing materials where a stock photo might feel mismatched, or a blog/insights post's featured image for that package.

\- A fallback or A/B-test alternate for social share images, if you ever want to test "message-led" vs. "photo-led" thumbnails.



\*\*Don't use for:\*\* the services grid (too much going on at small size compared to Variant 1) or as the main package-page hero (Variant 3 already owns that job, and running both would be redundant).



\---



\### Variant 3 — Photo + text (v2 / YouTube-thumbnail style)



\*\*Use for:\*\*



\- \*\*YouTube video thumbnails\*\* — this is its native format (16:9, dense stacked type, built to win attention against other thumbnails in a feed). Use it as-is, uncropped.

\- \*\*Fiverr / marketplace gig cover images\*\* — same logic: built for a small competing grid where bold wins.

\- \*\*The individual package page hero\*\* — but not as-is. Crop to isolate the photo/graphic (drop the baked-in text since the page's real HTML headline already carries that, and baked-in image text isn't accessible or searchable) and let it anchor one side of the hero, as we did for the 20 Day SEO Boost redesign.

\- \*\*Open Graph / social share image\*\* for the package page link — this is exactly the context it's built for: grabbing attention in a crowded social feed.

\- \*\*Paid ad creative\*\* on platforms where thumbnail competition is high (social feed ads, display retargeting).



\*\*Don't use for:\*\* the services grid (too dense at small size) or anywhere that already has its own real HTML headline right next to it uncropped (creates duplicate messaging, like the original page-1 draft had).



\---



\## Quick reference table



| Placement | Variant |

| --- | --- |

| `/services` package grid | 1 — No-bg |

| Package page — small brand mark | 1 — No-bg |

| Package page — hero (cropped) | 3 — v2 |

| Open Graph / social share image | 3 — v2 |

| YouTube thumbnail | 3 — v2 (uncropped) |

| Fiverr / marketplace gig cover | 3 — v2 (uncropped) |

| Paid social / display ad creative | 3 — v2 |

| PDF proposal / print collateral | 2 — Text-only |

| Blog/insights featured image | 2 — Text-only |

| Email header | 1 — No-bg (or 2, if more branding needed) |



\---



\## Technical notes



\- \*\*Variant 1 (no-bg):\*\* export as PNG with alpha transparency — this is the one variant where transparency actually matters, so don't flatten it to JPEG.

\- \*\*Variant 3 (v2):\*\* native aspect ratio should stay 16:9 (matches YouTube/thumbnail standards) — don't distort it to fit other placements; crop instead of stretching.

\- \*\*File size:\*\* compress before uploading. The v2 image is the heaviest of the three (photo-based) — a source PNG can run 2MB+; export a web-optimized JPEG (quality \\\~80–85) for any on-site use, and keep the full-quality source only where the platform requires it (e.g. YouTube thumbnail upload).

\- \*\*Alt text:\*\* none of these images should rely on their baked-in text to convey meaning to screen readers or search engines — write real alt text describing what's visually shown wherever these are placed as `<img>` elements, since the baked-in text isn't machine-readable.



\---



\## For new packages



When a new package ships, generate all 3 variants using the naming pattern above before publishing the package page — the guidelines here assume all 3 exist. If a package only has one or two variants, default to Variant 1 (no-bg) for the grid and fall back to whichever exists for the hero, rather than leaving a package without a grid image.

