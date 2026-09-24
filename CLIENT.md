# Steady Wins — client handover

## Project

- Client / brand: Steady Wins
- Site type: static Astro portfolio showcase
- Production platform: Cloudflare Pages
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

## Accounts and domains

Record the Cloudflare account, Pages project, domain, DNS owner, and handover contact here before launch. Do not store passwords, API tokens, or other secrets in this file.

## Environment variables

The current proof of concept does not require runtime environment variables. Use `.env.example` as the authoritative list if integrations are added later.

## Booking integration

The Contact page has a Cal.com-ready placeholder. Add the approved embed URL in `src/data/site.ts` or move it to an environment variable once the booking flow is confirmed.

## Handover checklist

- Confirm Cloudflare Pages project ownership and production branch.
- Confirm DNS and SSL ownership.
- Confirm the Cal.com booking URL before enabling it.
- Run `npm run verify` before merging to `main`.
