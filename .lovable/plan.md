# Image, Copy & Interaction Refresh

## 1. New image assets

Download 3 Cloudinary images, upload via `lovable-assets`:

- `src/assets/hero-home.jpg` — new home hero (`b5e33a40...tekxua.jpg`)
- `src/assets/hero-fashion.jpg` — fashion hero + fashion story (`9c997d9b...dih3tg.jpg`)
- `src/assets/story-hair.jpg` — hair story (`52cc7d82...vh1kg3.jpg`)

These same images are reused everywhere (hero, story, peek panels, modal) — no new image generation.

## 2. Hero (`src/components/Hero.tsx`) — single image

- Replace diptych with **single full-bleed** `hero-home.jpg` + existing gradient washes.
- Copy:
  - Chip: `Dazzle Me — Hair & Fashion`
  - H1: `Our crown,` / `our story.`
  - Taglines: `Heritage hair.` / `Heritage fashion.`
- CTAs:
  - Row 1: `Browse hair services` + `Browse our fashion collective` — each wrapped in a new `ServicePeek` component.
  - Row 2 (centered): `Visit us` glass button → smooth scrolls to `#location`.

## 3. ServicePeek — responsive peek (no modal on desktop)

New `src/components/ServicePeek.tsx`. Props: `image`, `label`, `href`, `cta`.

**Desktop (`sm:` and up) — hover-expand panel, no modal:**
- The Browse button + a collapsed peek panel live in a shared container.
- On hover/focus of the container, an **inline panel** expands directly below the button:
  - Width matches the button group; height grows from 0 → ~180px with `transition-[max-height,opacity] duration-500 ease-out`.
  - Inside: the actual image pinned **left** (uses the new image asset directly — no separate generated thumb), fading right via `bg-gradient-to-r from-transparent via-background/70 to-background` to reveal label + `View →` link to `/hair` or `/fashion`.
  - The whole panel is itself a `<Link>` so clicking anywhere on the image-area routes to the page.
- Uses CSS `group-hover` / `group-focus-within` — no JS state needed.

**Mobile (`< sm`) — tap-to-open modal:**
- Small `Peek inside ↘` text trigger below each Browse button.
- shadcn `Dialog` (`max-w-sm`, tall) with same image-left / fade-right / View arrow layout.
- Hidden on `sm:` and up via `sm:hidden`; the inline panel is hidden on mobile via `hidden sm:block`.

This satisfies "use the image link directly" — the same `hero-home.jpg` / `hero-fashion.jpg` assets back both the peek panel and the modal, no extra art.

## 4. HomeServicesToggle (`src/components/HomeServicesToggle.tsx`)

- Show `Heritage hair` / `Heritage fashion` heading that swaps with active toggle (AnimatePresence fade).
- **Sequential card animation**: each card uses `motion.article` with `transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22,1,0.36,1] }}` so they appear one-by-one rather than together.
- Lift `active` state to context (see #5).

## 5. Story image follows toggle (`src/components/Story.tsx` + new context)

- New `src/components/ServiceFocusContext.tsx`: `{ active: 'hair'|'fashion', setActive }`. Default `hair`.
- Wrap home page (`src/routes/index.tsx`) in `<ServiceFocusProvider>`.
- `HomeServicesToggle` reads/writes context (replaces internal `useState`).
- `Story` consumes context:
  - `hair` → `story-hair.jpg`
  - `fashion` → `hero-fashion.jpg`
  - Cross-fade image via `AnimatePresence` keyed on `active`.

## 6. Gallery (`src/components/Gallery.tsx`)

- Heading: `Our works` (was `A glimpse of our work`).
- Bigger: `text-6xl sm:text-7xl md:text-8xl`, tighter tracking.

## 7. Fashion route hero (`src/routes/fashion.tsx`)

- Swap fashion hero background to new `hero-fashion.jpg`.

## Technical notes

- Asset upload: `curl -o /tmp/x.jpg <url> && lovable-assets create --file /tmp/x.jpg --filename <name>.jpg > src/assets/<name>.jpg.asset.json`, then `import x from "@/assets/<name>.jpg.asset.json"`; use `x.url`.
- `Visit us` is `<a href="#location">`; verify/add `id="location"` to `LocationMap` root.
- Glass button system preserved.
- No edits to `src/lib/salon.ts` or `src/routeTree.gen.ts`.

## Files

Create:
- `src/components/ServicePeek.tsx`
- `src/components/ServiceFocusContext.tsx`
- `src/assets/hero-home.jpg.asset.json`
- `src/assets/hero-fashion.jpg.asset.json`
- `src/assets/story-hair.jpg.asset.json`

Edit:
- `src/components/Hero.tsx`
- `src/components/HomeServicesToggle.tsx`
- `src/components/Story.tsx`
- `src/components/Gallery.tsx`
- `src/components/LocationMap.tsx` (id check)
- `src/routes/index.tsx` (wrap provider)
- `src/routes/fashion.tsx` (image swap)
