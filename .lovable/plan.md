## Dazzlemehair — Landing Page

A soft-pastel, culture-forward landing page for Dazzlemehair, a Middlesbrough salon specializing in **Black hair braiding** — with wigs offered as a secondary service. Single scrolling page with WhatsApp/phone booking and a Google Map near the end, with polished, dynamic motion throughout.

### Focus & emphasis
- **Braiding is the hero** (~90% of the message): box braids, knotless braids, cornrows, twists and other protective styles get the spotlight in headlines, imagery, and the services section.
- **Wigs are a secondary "we do this too"** mention — present but clearly not the lead.
- **No treatments, no prices, no products** anywhere.

### Look & feel
- **Palette (soft pastel):** warm cream background, dusty rose, soft mauve, and a muted gold accent for warmth and culture. Defined as design tokens in `src/styles.css` (oklch), light and dark variants.
- **Typography:** an elegant display serif for headings (e.g. Cormorant) paired with a clean, warm sans for body (e.g. Karla) — soft, editorial, feminine.
- **Motion (dynamic, professional):** scroll-triggered reveals (fade + slide), a subtle parallax/ken-burns drift on the hero image, staggered entrance for service and gallery cards, smooth hover lifts, and an animated underline on nav links. Tasteful and high-end.

### Copy provided
- **Hero headline:** "HERITAGE HAIR: OUR CROWN, OUR STORY" (display serif, emphasis lines stacked), with a supporting line that centers braiding.
- **Our Story / culture:** "Black hair is more than style — it is history, identity and culture. Here at Dazzle Me we celebrate the meaning, beauty and heritage of Black hair."

### Page sections (top to bottom)
1. **Header / nav** — "Dazzlemehair", anchor links (Braiding, Our Story, Gallery, Reviews), and a "Book Appointment" button (WhatsApp/phone). Animated link underlines.
2. **Hero** — soft pastel backdrop with a generated image of beautifully styled braids, the "HERITAGE HAIR: OUR CROWN, OUR STORY" headline, a braiding-focused supporting line, and the primary booking CTA. Gentle parallax/drift motion.
3. **Braiding services** — the main section, category cards described qualitatively (no prices/products/treatments): box braids, knotless braids, cornrows, twists, protective styles, plus consultations & styling. Staggered reveal on scroll. A short "We do wigs too" callout sits below as the secondary offering.
4. **Our Story (culture)** — the provided culture story copy paired with an image, refined reveal animation.
5. **Gallery** — responsive grid of braiding styles (generated placeholders to swap for real photos), staggered entrance and hover zoom.
6. **Testimonials** — a few client review cards to build trust, with subtle motion.
7. **Booking CTA band** — a clear "Book your appointment" section repeating the WhatsApp/phone action.
8. **Location + Google Map** — embedded map highlighting **92 Newport Road, Middlesbrough**, with address and hours beside it, just before the footer.
9. **Footer** — salon name, address, contact, social placeholders.

### Booking behavior
- "Book Appointment" buttons use a WhatsApp link (`https://wa.me/<number>?text=...`) with a `tel:` fallback.
- Phone / WhatsApp number is a clearly marked **placeholder** until you provide the real number.

### Google Map
- Embedded via a standard Google Maps `<iframe>` for the Middlesbrough address — no API key or backend needed.

### Technical notes
- Content in `src/routes/index.tsx`, with small focused components under `src/components/` (Header, Hero, BraidingServices, Story, Gallery, Testimonials, Booking, LocationMap, Footer).
- Design tokens added to `src/styles.css`; fonts loaded via the document head.
- Motion implemented with `framer-motion` (whileInView reveals, staggered children) plus CSS for ambient hero drift.
- Generated images saved under `src/assets/` and imported as ES modules.
- SEO: page title, meta description, single H1, semantic sections, alt text, and LocalBusiness JSON-LD with the salon's address.
- No database/auth required since booking is a link.

### Items I'll mark as placeholders for you to confirm
- Phone / WhatsApp number
- Real photos (gallery + hero)
- Real testimonial quotes
- Opening hours