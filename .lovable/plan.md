## Vision

Dazzle Me is one studio with two equally celebrated crafts rooted in African heritage: **Hair** and **Fashion**. The shared home introduces both with equal weight, then routes users to a dedicated page for each discipline where the full services live.

## Information architecture

```
/           Shared home — unified intro, dual entry points
/hair       Full hair services (braiding, wig making, wig revamping,
            dreadlocks, weaving, hair extensions)
/fashion    Full fashion services (custom-made clothing, alterations,
            African fashion)
```

Each route has its own `head()` (title, description, og:title/description, og:image from its hero) for SEO and shareability.

## Shared home (/)

1. **Header** — logo lockup "Dazzle Me — Hair & Fashion". Nav: Hair · Fashion · Story · Visit · Book.
2. **Unified hero** — a single composition that visually represents both crafts (split or diptych image: a braided crown on one side, an African-fabric garment on the other). Headline reflects both, e.g. *"Where heritage hair meets African fashion."* Two equally-weighted glass CTAs side by side:
   - **Browse hair services →** `/hair`
   - **Browse our fashion collective →** `/fashion`
3. **Stylish divider** (existing diamond motif).
4. **What we do — toggle section.** A single "Services" band with a Hair / Fashion category trigger (segmented pill). Selecting a category swaps in a small card preview (3–4 highlights) with a "See all [Hair|Fashion] services" link to the dedicated page. Animated transition between categories.
5. **Our Story** — refreshed copy: Black hair *and* African fashion as identity, heritage and self-expression. Image pairs both worlds.
6. **Editorial mosaic gallery** — single mixed mosaic blending hair and fashion tiles, each tile subtly tagged "Hair" or "Fashion" on hover. Tiles deep-link to the relevant discipline page.
7. **Testimonials** — mixed reviews covering both services.
8. **Booking CTA band** — single WhatsApp CTA; copy invites enquiries for either hair or fashion.
9. **Location + Google Map** — unchanged (one studio, one address).
10. **Footer** — two columns: Hair links / Fashion links, plus contact and socials.

## /hair page

- Hero specific to hair (existing hero image works) with a hair-focused headline and the Book CTA.
- Full services grid with all six: **Braiding, Wig Making, Wig Revamping, Dreadlocks, Weaving, Hair Extensions** — each a card with a short blurb.
- Short culture paragraph on heritage hair.
- Hair-only gallery strip.
- Cross-link band at the bottom: *"Love African fashion too? Browse our fashion collective →"* linking to `/fashion`.
- Booking CTA + footer.

## /fashion page

- Hero specific to fashion (new generated image — African-print garments, atelier feel).
- Services grid: **Custom-Made Clothing, Alterations, African Fashion** — each a card with a short blurb. Since there are no products yet, copy frames it as a bespoke atelier ("made to order", "by appointment") rather than a catalogue.
- Short story paragraph on African fashion as identity.
- Fashion-only gallery strip (generated placeholders, swap with real lookbook later).
- Cross-link band: *"Need your crown styled too? Browse our hair services →"* linking to `/hair`.
- Booking CTA + footer.

## Design system updates

- Keep current "soft chic" palette (warm greige + champagne) — it suits both disciplines. Introduce a single **subtle accent shift per discipline** using existing tokens: hair sections lean on `--rose`, fashion sections lean on `--gold`. No new heavy colors.
- Reuse glass buttons, diamond divider, Reveal/Stagger motion, Cormorant + Karla typography.
- New shared component: `<ServiceCategoryToggle />` for the home services band.
- New shared component: `<CrossLinkBand />` for the hair↔fashion cross-promo.

## Copy direction

- Headline (home): *"Heritage hair. African fashion. One studio."*
- Sub: *"Dazzle Me is a Middlesbrough atelier where braids, wigs, locs and made-to-order African fashion are crafted by hand."*
- Story: extend current heritage paragraph to celebrate both hair and fashion as expressions of identity.

## SEO

- Per-route `head()` with unique title/description.
- `HairSalon` JSON-LD on `/` and `/hair`; `ClothingStore` JSON-LD on `/fashion`. All share the same address/phone from `src/lib/salon.ts`.
- Update `knowsAbout` to include all hair and fashion services.

## Technical notes

- Add routes: `src/routes/hair.tsx`, `src/routes/fashion.tsx`. Header `<Link>`s use type-safe `to="/hair"` / `to="/fashion"`.
- Refactor `BraidingServices.tsx` → `HairServices.tsx` with the full 6-item list (kept under `/hair`).
- New `FashionServices.tsx` for the 3-item fashion list (under `/fashion`).
- New `HomeServicesToggle.tsx` for the home category-trigger preview.
- Generate 3 new assets: `hero-fashion.jpg` (atelier/African-fabric scene), 2 fashion gallery tiles. Keep existing hero for `/hair`.
- Update `src/lib/salon.ts` tagline to "Hair & African Fashion in Middlesbrough".
- Update root layout meta to reflect the combined brand.

## Placeholders to confirm later

- Real fashion photos (lookbook).
- Real wig / dreadlocks / weaving photos.
- Phone/WhatsApp number (already a placeholder).
- Whether fashion bookings use the same WhatsApp number (assumed yes).
