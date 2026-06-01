import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import knotless from "@/assets/gallery-knotless.jpg";
import boxbraids from "@/assets/gallery-boxbraids.jpg";
import dreadlocks from "@/assets/gallery-dreadlocks.jpg";
import wig from "@/assets/gallery-wig.jpg";
import fashionAnkara from "@/assets/gallery-fashion-ankara.jpg";
import fashionTailoring from "@/assets/gallery-fashion-tailoring.jpg";
import fashionFabrics from "@/assets/gallery-fashion-fabrics.jpg";
import twists from "@/assets/gallery-twists.jpg";

type Item = {
  src: string;
  alt: string;
  label: string;
  tag: "Hair" | "Fashion";
  to: "/hair" | "/fashion";
};

const items: Item[] = [
  { src: knotless, alt: "Long knotless box braids", label: "Knotless braids", tag: "Hair", to: "/hair" },
  { src: fashionAnkara, alt: "African ankara two-piece", label: "Ankara two-piece", tag: "Fashion", to: "/fashion" },
  { src: boxbraids, alt: "Sleek box braids", label: "Box braids", tag: "Hair", to: "/hair" },
  { src: fashionTailoring, alt: "Hands sewing custom garment", label: "Custom tailoring", tag: "Fashion", to: "/fashion" },
  { src: dreadlocks, alt: "Long natural dreadlocks", label: "Dreadlocks", tag: "Hair", to: "/hair" },
  { src: fashionFabrics, alt: "Stack of African wax-print fabrics", label: "African prints", tag: "Fashion", to: "/fashion" },
  { src: wig, alt: "Natural-looking curly wig", label: "Wig styling", tag: "Hair", to: "/hair" },
  { src: twists, alt: "Passion twists styled in an updo", label: "Twists", tag: "Hair", to: "/hair" },
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
