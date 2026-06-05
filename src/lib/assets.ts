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
  knotless: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670012/596cf3bac37f947b129cb990c06a1a3c_1_gsciq4.jpg", alt: "Knotless braids" },
  boxBraids: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670035/1941ea0bd0db5b36a9bf8ac21e9152f6_wxxk2k.jpg", alt: "Box braids" },
  dreadlocks: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670022/5fc03ca59aeb88eb43b92e209a28ba4b_cnttup.jpg", alt: "Dreadlocks" },
  wig: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670032/2d0454f23e05f4a8e3b6c76ff466b580_gzwthu.jpg", alt: "Wig styling" },
  twists: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670021/934ce64a8286a8d8ffe02533fadae099_or0hw9.jpg", alt: "Twists" },
  fashionAnkara: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670019/57981916beaf799a7f2d189a5fee2d3d_y4iamu.jpg", alt: "Ankara two-piece" },
  fashionTailoring: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670017/29f468d7fcf8ede681a8af92e7d54d3e_hoqs9w.jpg", alt: "Custom tailoring" },
  fashionFabrics: { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780670015/9abf1b4e74ce07e855f9406e7c18d78d_cdb4fy.jpg", alt: "African fabrics" },
};

// ─── Hair page ─────────────────────────────────────────────────────
export const hair = {
  heroHair: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780385768/hero-dazzlemehair-Eqo8Q7iR6NGNiYRykRrwui_g11erz.webp", // replace with hair-specific hero
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
  Alterations: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780338346/2b95cc0f68a60ee1fea7b938574f6063_lbqf9s.jpg",
  "African Fashion": "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780338346/5ac922216e8b96e40199593d92f99a11_lpake2.jpg",
};

// ─── Logo – now a Cloudinary URL (replace with your actual uploaded logo URL) ──
export const logo = "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780073104/Picsart_26-05-29_06-07-56-040_buicng.png"; // TODO: upload logo and replace