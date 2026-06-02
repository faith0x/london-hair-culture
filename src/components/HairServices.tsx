import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { hairServices } from "@/lib/salon";

const serviceImages: Record<string, string> = {
  "Braiding": "https://images.unsplash.com/photo-1646615570534-1188046b85ff?q=80&w=600&auto=format&fit=crop",
  "Wig Making": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
  "Wig Revamping": "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
  "Dreadlocks": "https://images.unsplash.com/photo-1605497746444-11f81d11ff2b?q=80&w=600&auto=format&fit=crop",
  "Weaving": "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600&auto=format&fit=crop",
  "Hair Extensions": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
};

const defaultPlaceholder = "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop";

export function HairServices() {
  return (
    <section id="hair-services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Hair services</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">Heritage hair, hand-crafted</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Braids, wigs, locs and extensions — every look built with patience, precision and a deep respect for Black hair.</p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {hairServices.map((service) => {
            const imageUrl = serviceImages[service.name] || defaultPlaceholder;

            return (
              <motion.article
                key={service.name}
                variants={staggerItem}
                className="group relative flex h-44 w-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-400 hover:-translate-y-1 hover:border-primary/30"
              >
                {/* 
                  UNBREAKABLE BOUNDARY FRAME:
                  Using matching w, min-w, and max-w completely locks the size down.
                  No image dimension can shrink or stretch this box anymore.
                */}
                <div className="relative h-full w-40 min-w-40 max-w-40 overflow-hidden sm:w-64 sm:min-w-64 sm:max-w-64 shrink-0">
                  <img
                    src={imageUrl}
                    alt={service.name}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* RICH VISIBLE RIGHT-EDGE FADE BLEND */}
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent via-card/50 to-card sm:w-32 z-10 pointer-events-none" />
                </div>

                {/* Text Track Container */}
                <div className="relative z-10 flex flex-1 flex-col justify-center p-5 pl-4 pr-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {service.blurb}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
