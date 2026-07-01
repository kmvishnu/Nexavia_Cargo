
## Goal
Replicate the Nexavia Global Cargo homepage pixel-close to the reference, and set up a 4-page TanStack Router scaffold (Home, About, Services, Contact) with a shared sticky Header and Footer. Only the Home page gets real content this turn; the other three are placeholder routes.

## Design system (extracted from image)
Tokens added to `src/styles.css` via `@theme` + `:root` (oklch):
- `--background`: near-white `#ffffff`
- `--surface-muted`: very light cool gray `#f5f7fa` (cards section bg)
- `--navy` (primary): deep navy `#0a1f44` — header, hero overlay, dark bands, footer
- `--navy-foreground`: white
- `--gold` (accent): warm gold `#d4a24a` — CTA buttons, "Commercial Excellence" headline word, icon circles, stat numbers, link arrows
- `--gold-foreground`: navy
- `--muted-foreground`: slate `#6b7280`
- Radius: `--radius: 0.5rem` (buttons slightly rounded, cards `rounded-lg`)
- Fonts: Inter (body) + Inter tight for headings — loaded via `<link>` in `__root.tsx` head; mapped through `--font-sans` and `--font-display` in `@theme`.
- Container: `max-w-7xl mx-auto px-6`.

## Routing scaffold
New route files under `src/routes/`:
- `index.tsx` — replace placeholder with Home composition
- `about.tsx` — `<PagePlaceholder title="About Us" />`
- `services.tsx` — placeholder
- `contact.tsx` — placeholder

Each route sets its own `head()` with route-specific title/description/OG.

`__root.tsx` updated to render `<SiteHeader />` + `<Outlet />` + `<SiteFooter />` inside the QueryClientProvider, plus the Inter `<link>` tags in `head().links`.

## Components (modular, Next.js-portable — pure presentational, no router-specific imports except in nav)

```
src/components/
  layout/
    SiteHeader.tsx       // sticky, logo + desktop nav + Request a Proposal button + mobile hamburger (Sheet)
    SiteFooter.tsx       // 4-column: brand+blurb+socials, Quick Links, Our Services, Contact Us
    PagePlaceholder.tsx  // simple hero band for /about, /services, /contact
    Container.tsx
  brand/
    NexaviaLogo.tsx      // inline SVG mark (NX with plane) + wordmark
  home/
    Hero.tsx             // navy band, eyebrow, 3-line headline ("Commercial Excellence." in gold), paragraph, two CTAs, right-side cargo plane image
    TrustStrip.tsx       // dark navy card overlapping hero bottom: 6 cells (15+ Years, Global Network, Commercial Focus, Tailored Solutions, Trusted Partner) with Lucide icons in gold circles
    CoreServices.tsx     // "OUR CORE SERVICES" eyebrow + "End-to-End Aviation Solutions" + 4x2 grid of ServiceCard
    ServiceCard.tsx      // image top, centered gold circle icon overlapping, title, description, "Learn More →"
    CharterRange.tsx     // navy band with 6 aircraft silhouettes + labels + gold "View Charter Solutions" button
    StatsRow.tsx         // 4 stats with Lucide icons (Globe, Plane, Package, Users)
    PartnershipCTA.tsx   // navy band with world-map bg, headline + paragraph + gold "Get in Touch" button
```

Lucide icons used: `Plane`, `Globe`, `TrendingUp`, `Puzzle`, `ShieldCheck`, `User`, `Handshake`, `ClipboardList`, `FileCheck`, `Car`, `Package`, `Users`, `Menu`, `ArrowRight`, `MapPin`, `Phone`, `Mail`, `Globe2`, `Facebook`, `Instagram`, `Linkedin`.

## Images
The hero plane and the 8 service card photos are decorative. Plan:
- Hero: single generated image `hero-cargo-plane.jpg` (1600x1100) — 747F nose-loading cargo at dusk with Dubai skyline silhouette, warm navy/gold tone.
- 8 service card images at 800x500 each (airline tail, 777 nose, ULD pallets, parked jets, AWB paperwork, engine nacelle, customs desk, car carrier).
- World-map faint background for PartnershipCTA section (1600x500, low-contrast navy).
- All saved to `src/assets/` and imported as ES modules.

## Header behavior
- Sticky, white background, subtle bottom border, slight shadow on scroll.
- Desktop ≥ lg: logo left, nav center (`Home, About Us, Our Services ▾, Industries, Network, News & Insights, Contact Us`), gold "Request a Proposal" button right. Active link gets gold underline (matches the "Home" underline in the image).
- Mobile: hamburger opens shadcn `Sheet` with the same links stacked + CTA.
- "Our Services" desktop item is a `DropdownMenu` listing the 8 services — keeps the nav matching the image while only 4 real routes exist (non-existent items render as `<a>` to `#` for now; real `<Link>` only for Home/About/Services/Contact).

## Footer
Navy background, 4 columns + brand column on the left:
1. Logo + blurb + social icons (Linkedin, Facebook, Instagram, Mail)
2. Quick Links (Home, About Us, Our Services, Industries, Network, News & Insights, Contact Us)
3. Our Services (8 service names)
4. Contact Us (address, phone, email, website) with Lucide icons
Bottom bar: `© 2025 Nexavia Global Cargo LLC. All Rights Reserved.` centered.

## Modularity / Next.js portability
- No TanStack-specific imports in `components/home/*` or `components/brand/*`.
- Only `SiteHeader`, `SiteFooter`, `PagePlaceholder`, and route files import from `@tanstack/react-router`. Swapping to `next/link` later is a one-file change per component.
- All content (nav items, service cards, stats, footer links) lives in `src/components/layout/nav-config.ts` and `src/components/home/home-content.ts` so copy edits don't touch JSX.

## Out of scope this turn
About, Services, Contact page bodies. After Home is done I'll stop and ask for the next page's direction.
