# Stripe homepage recreation

A complete Next.js App Router recreation based on the supplied November 11, 2026 screen recording and Stripe’s public homepage. Built with React, TypeScript, CSS, WebGL, and Canvas 2D.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run check
npm run build
```

The production build exports the site to `out/` for static hosting.

## Included sections and interactions

- Dismissible announcement, hover and click navigation menus, and mobile navigation
- Animated ribbon hero with a changing GDP display and moving customer logo strip
- Six animated product tiles and native dialog product overlays
- Business recommendation form with validation and local demo results
- Stripe Sessions event banner
- Canvas particle sculpture morphing across four metric states, with six lighting themes
- Customer story accordions for Hertz, URBN, Instacart, and Le Monde
- Professional services, startup story carousel, Startups program, and Atlas
- Embedded finance platform illustration and rotating customer testimonial tabs
- Dark developer section with animated integration diagram, flowing strands, and integration paths
- Expanding news carousel, book of the week, final calls to action, and full footer
- Two-step demo newsletter, locale display selector, cookie information, and product guide widget
- Mobile layouts, keyboard focus states, and reduced-motion support

## Files

- `components/stripe-homepage.tsx` — sections, navigation, overlays, forms, and carousels
- `components/motion-graphics.tsx` — ribbon shader, particle sculpture, and developer wave
- `components/product-illustrations.tsx` — animated payment, billing, commerce, card, globe, and platform illustrations
- `lib/homepage-data.ts` — product, customer, news, and footer data
- `app/globals.css` — visual system, animation keyframes, and responsive layouts
- `public/assets/` — locally hosted public Stripe artwork, font, customer logos, and book artwork extracted from the supplied reference recording

## Scope

This is an independent frontend demonstration, not an official Stripe service. No payments are processed, no live sales chat is connected, and no form data is sent to Stripe. Recommendations use local rules. Dashboard and product illustration values are sample data. Account, sales, product, and documentation links open official external websites. Search indexing is disabled.

The motion is recreated in local components rather than embedding the reference recording as the webpage. WebGL gracefully falls back to the ribbon image when unavailable. Offscreen canvas work pauses, and reduced-motion preferences disable decorative movement. Browser automation was unavailable during implementation; production build, TypeScript, static asset checks, and DOM interaction tests provide verification.

Stripe’s name, font, logos, and artwork belong to their respective owners. Reference: https://stripe.com/.
