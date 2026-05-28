import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import knotless from "@/assets/gallery-knotless.jpg";
import cornrows from "@/assets/gallery-cornrows.jpg";
import twists from "@/assets/gallery-twists.jpg";
import wig from "@/assets/gallery-wig.jpg";

const items = [
  { src: knotless, alt: "Long knotless box braids", label: "Knotless braids" },
  { src: cornrows, alt: "Intricate cornrow braid patterns", label: "Cornrows" },
  { src: twists, alt: "Passion twists styled in an updo", label: "Twists" },
  { src: wig, alt: "Natural-looking curly wig install", label: "Wig styling" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            A few of our favourite looks
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A glimpse of the work we love. Replace these with your own photos any time.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <motion.figure
              key={item.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                <span className="font-display text-lg font-medium text-background">
                  {item.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
