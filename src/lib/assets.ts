// src/lib/assets.ts
// Single source of truth – every image is a Cloudinary URL.

// ─── Hero ──────────────────────────────────────────────────────────
export const hero = {
  heroHomeAsset: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" },
  heroFashionAsset: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" },
  modelPng: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780393279/Picsart_26-06-02_10-40-27-192_fomkh8.webp",
};

// ─── Story ─────────────────────────────────────────────────────────
export const story = {
  storyHairAsset: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780335773/Picsart_26-06-01_18-42-01-996_bmux3e.jpg" },
  storyFashionAsset: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780335773/Picsart_26-06-01_18-42-01-996_bmux3e.jpg" }, // TODO: replace with fashion story
};

// ─── Gallery (each has .url and .alt) ─────────────────────────────
export const gallery = {
  knotless: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", alt: "Knotless braids" },
  boxBraids: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", alt: "Box braids" },
  dreadlocks: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780157385/d9699b8184f25e1562ccbe96b73ab314_z9dchb.jpg", alt: "Dreadlocks" },
  wig: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", alt: "Wig styling" },
  twists: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", alt: "Twists" },
  fashionAnkara: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", alt: "Ankara two-piece" },
  fashionTailoring: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", alt: "Custom tailoring" },
  fashionFabrics: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg", alt: "African fabrics" },
};

// ─── Hair page ─────────────────────────────────────────────────────
export const hair = {
  heroHair: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg", // replace with hair-specific hero
};

// ─── Fashion page ──────────────────────────────────────────────────
export const fashion = {
  heroFashionAsset: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" },
  fabricImg: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg",
  ankaraImg: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg",
  tailoringImg: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg",
};

// ─── Services toggle ───────────────────────────────────────────────
export const serviceAssets: Record<string, string> = {
  Braiding: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780337700/Picsart_26-06-01_19-14-14-903_lbdftq.jpg",
  "Wig Making": "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780157411/69bd8bfcfccb54d856991d13c6a5a4d8_q7noe1.jpg",
  "Wig Revamping": "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780157383/0221935d9f358deef46fe3dc2fdd0a36_blbfm8.jpg",
  Dreadlocks: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780157385/d9699b8184f25e1562ccbe96b73ab314_z9dchb.jpg",
  Weaving: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600&auto=format&fit=crop",
  "Hair Extensions": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
  "Custom-Made Clothing": "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780338346/1142d08f34ed0195ad415f127aab9664_1_um9uuy.jpg",
  Alterations: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  "African Fashion": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
};

// ─── Logo – now a Cloudinary URL (replace with your actual uploaded logo URL) ──
export const logo = "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/logo-dazzlemehair.png"; // TODO: upload logo and replace