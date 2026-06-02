/**
 * assets.ts — single source of truth for every image in the app.
 *
 * HOW TO USE:
 *   import { heroHome, galleryItems } from "@/lib/assets";
 *   <img src={heroHome} />
 *
 * HOW TO UPDATE:
 *   Just swap the Cloudinary URL string. No other file needs to change.
 *
 * All URLs are Cloudinary. To replace a placeholder, upload to Cloudinary
 * and paste the new URL here.
 */

// ─── Hero ──────────────────────────────────────────────────────────────────

export const heroModel =
  "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780393279/Picsart_26-06-02_10-40-27-192_fomkh8.webp";

export const heroHome =
  "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg";

export const heroFashion =
  "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg";

// ─── Story section ─────────────────────────────────────────────────────────

export const storyHair =
  "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780335773/Picsart_26-06-01_18-42-01-996_bmux3e.jpg";

export const storyFashion =
  "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780335773/Picsart_26-06-01_18-42-01-996_bmux3e.jpg"; // TODO: replace with fashion story image

// ─── Gallery ───────────────────────────────────────────────────────────────
//
// Gallery.tsx was importing from @/assets/*.jpg (local files that don't exist).
// Replace those imports with: import { galleryItems } from "@/lib/assets";
// then use galleryItems directly in the items array.

export const gallery = {
  knotless:         "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // TODO: replace with knotless braids photo
  boxBraids:        "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // TODO: replace with box braids photo
  dreadlocks:       "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // TODO: replace with dreadlocks photo
  wig:              "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // TODO: replace with wig photo
  twists:           "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // TODO: replace with twists photo
  fashionAnkara:    "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", // TODO: replace with ankara photo
  fashionTailoring: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", // TODO: replace with tailoring photo
  fashionFabrics:   "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", // TODO: replace with fabrics photo
};