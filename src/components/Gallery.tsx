import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import knotless from "@/assets/gallery-knotless.jpg.asset.json";
import boxBraids from "@/assets/gallery-boxbraids.jpg.asset.json";
import dreadlocks from "@/assets/gallery-dreadlocks.jpg.asset.json";
import wig from "@/assets/gallery-wig.jpg.asset.json";
import twists from "@/assets/gallery-twists.jpg.asset.json";
import fashionAnkara from "@/assets/gallery-fashion-ankara.jpg.asset.json";
import fashionTailoring from "@/assets/gallery-fashion-tailoring.jpg.asset.json";
import fashionFabrics from "@/assets/gallery-fashion-fabrics.jpg.asset.json";

type Item = {
  src: string;
  alt: string;
  label: string;
  tag: "Hair" | "Fashion";
  to: "/hair" | "/fashion";
};

const items: Item[] = [
  { src: knotless.url,         alt: knotless.alt,         label: "Knotless braids",  tag: "Hair",    to: "/hair"    },
  { src: fashionAnkara.url,    alt: fashionAnkara.alt,    label: "Ankara two-piece", tag: "Fashion", to: "/fashion" },
  { src: boxBraids.url,        alt: boxBraids.alt,        label: "Box braids",       tag: "Hair",    to: "/hair"    },
  { src: fashionTailoring.url, alt: fashionTailoring.alt, label: "Custom tailoring", tag: "Fashion", to: "/fashion" },
  { src: dreadlocks.url,       alt: dreadlocks.alt,       label: "Dreadlocks",       tag: "Hair",    to: "/hair"    },
  { src: fashionFabrics.url,   alt: fashionFabrics.alt,   label: "African prints",   tag: "Fashion", to: "/fashion" },
  { src: wig.url,              alt: wig.alt,              label: "Wig styling",       tag: "Hair",    to: "/hair"    },
  { src: twists.url,           alt: twists.alt,           label: "Twists",           tag: "Hair",    to: "/hair"    },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Our works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hair and fashion side by side — every tile a piece of the story.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <motion.figure
              key={item.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <Link to={item.to} className="block">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                    item.tag === "Hair"
                      ? "bg-rose/80 text-foreground"
                      : "bg-gold/80 text-foreground"
                  }`}
                >
                  {item.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                  <span className="font-display text-lg font-medium text-background">
                    {item.label}
                  </span>
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { gallery } from "@/lib/assets"; // Import from assets.ts

type Item = {
  src: string;
  alt: string;
  label: string;
  tag: "Hair" | "Fashion";
  to: "/hair" | "/fashion";
};

const items: Item[] = [
  // Use gallery object directly from assets.ts
  { src: gallery.knotless,         alt: "Knotless braids hairstyle",         label: "Knotless braids",  tag: "Hair",    to: "/hair"    },
  { src: gallery.fashionAnkara,    alt: "Ankara two-piece fashion design",   label: "Ankara two-piece", tag: "Fashion", to: "/fashion" },
  { src: gallery.boxBraids,        alt: "Box braids hairstyle",              label: "Box braids",       tag: "Hair",    to: "/hair"    },
  { src: gallery.fashionTailoring, alt: "Custom tailoring fashion",          label: "Custom tailoring", tag: "Fashion", to: "/fashion" },
  { src: gallery.dreadlocks,       alt: "Dreadlocks hairstyle",              label: "Dreadlocks",      tag: "Hair",    to: "/hair"    },
  { src: gallery.fashionFabrics,   alt: "African print fabrics",             label: "African prints",   tag: "Fashion", to: "/fashion" },
  { src: gallery.wig,              alt: "Wig styling",                       label: "Wig styling",      tag: "Hair",    to: "/hair"    },
  { src: gallery.twists,           alt: "Twists hairstyle",                  label: "Twists",          tag: "Hair",    to: "/hair"    },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Our works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hair and fashion side by side — every tile a piece of the story.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <motion.figure
              key={item.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <Link to={item.to} className="block">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                    item.tag === "Hair"
                      ? "bg-rose/80 text-foreground"
                      : "bg-gold/80 text-foreground"
                  }`}
                >
                  {item.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                  <span className="font-display text-lg font-medium text-background">
                    {item.label}
                  </span>
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}