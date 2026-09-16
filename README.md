# Inquivesta — The Science Feast

Next.js (App Router) site for the Inquivesta science fest. Built so the
home page, events listing, event detail pages, team pages, etc. all share
the exact same look and the exact same components — edit a value once and
it updates everywhere.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit things (single source of truth)

| What you want to change | File |
|---|---|
| Colors, fonts, spacing tokens | `app/globals.css` (`:root` block) → mapped in `tailwind.config.js` |
| Fest name, dates, nav links, socials | `lib/site-config.js` |
| Event list (title, images, date, venue...) | `data/events.js` |
| Sponsor list | `data/sponsors.js` |
| Header / footer (appear on every page) | `components/layout/Navbar.jsx`, `components/layout/Footer.jsx` |

Because color/type live in CSS variables read by Tailwind, you never need
to hunt through component files to re-theme the site — change the hex
values in `globals.css` once.

## Reusable building blocks

- `components/ui/WaveDivider.jsx` — the hand-drawn "chalk wave" section
  divider used everywhere. Pass `from`/`to` colors to match the sections
  it sits between.
- `components/ui/CountdownTimer.jsx` — ticking countdown, currently used
  in the hero; drop it into an event page for a per-event countdown too.
- `components/ui/EventCard.jsx` — event preview card with a built-in
  image slideshow (auto-detects single vs. multiple images). Used on the
  home page's featured strip and intended for reuse on `/events`.
- `components/ui/SectionHeading.jsx`, `components/ui/Button.jsx` —
  consistent heading and button treatments for every page you add.

## Home page structure (`app/page.js`)

```
Hero (countdown)
 └─ WaveDivider
About
 └─ WaveDivider
FeaturedEvents (top 3 events, slideshow cards)
 └─ WaveDivider
EventsCTA (brief + button to /events)
Sponsors
 └─ WaveDivider
```

## Next pages to build (same components, new routes)

- `app/events/page.js` — reuse `EventCard` in a grid over all of
  `data/events.js`.
- `app/events/[slug]/page.js` — look up the event by slug from the same
  data file for a detail page.
- `app/register/page.js` — registration form.
- `app/teams/page.js`, `app/about/page.js`, `app/contact/page.js`.

All of these automatically get the same Navbar, Footer, fonts, and color
theme because they're set once in `app/layout.js` and `app/globals.css`.

## Notes

- Images currently pull from Unsplash as placeholders — swap the URLs in
  `data/events.js` for your own event photos (or local files in
  `public/images/`) before launch.
- Sponsor logos render as text wordmark plates as placeholders — swap in
  `components/sections/Sponsors.jsx` for `<Image>` once you have real
  logo files in `public/images/sponsors/`.
- Motion respects `prefers-reduced-motion` (see `app/globals.css`).
