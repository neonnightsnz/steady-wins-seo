# Steady Wins

Dark, multi-page portfolio showcase for Steady Wins SEO offers. Built with AstroWind, Astro 7, and a small typed data layer so the visual system can be reused for another client site.

## Run it

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Where things live

- `src/data/offers.ts` — the nine offer records, source copy, prices, route slugs, images, and page accents.
- `src/data/site.ts` — site name, shared description, navigation, and booking URL.
- `src/assets/styles/site.css` — shared dark visual system, layout, responsive rules, drawer, and reduced-motion behaviour.
- `src/components/site/` — the reusable header, offer drawer, cards, and footer.
- `src/pages/` — homepage, Offers index, offer detail route, and Contact page.
- `public/images/offers/` — the nine supplied reference images.

## Change an accent

Edit the `accent` and `cardAccent` fields for an offer in `src/data/offers.ts`. `accent` controls links, labels, borders, and highlights. `cardAccent` is the darker AA-safe background used for the white-text mobile drawer card.

## Add an offer page

1. Add one record to `src/data/offers.ts`.
2. Give it a unique `slug`, an image path, a page accent, source-backed copy, and a darker `cardAccent`.
3. Put its image in `public/images/offers/`.

The `/offers/[slug]` route and the homepage grid are generated automatically from the data file.

## Booking placeholder

Set `bookingUrl` in `src/data/site.ts` to the Cal.com embed URL when it is available. Until then, the contact page shows an intentional placeholder.

## Checks

```bash
npm run build
npm run check
```
