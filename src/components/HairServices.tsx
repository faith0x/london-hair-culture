import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { hairServices } from "@/lib/salon";

// Curated high-quality placeholder images matching each hair service type
const serviceImages: Record<string, string> = {
  "Braiding": "https://images.unsplash.com/photo-1646615570534-1188046b85ff?q=80&w=600&auto=format&fit=crop",
  "Wig Making": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
  "Wig Revamping": "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
  "Dreadlocks": "https://images.unsplash.com/photo-1605497746444-11f81d11ff2b?q=80&w=600&auto=format&fit=crop",
  "Weaving": "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600&auto=format&fit=crop",
  "Hair Extensions": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
};

// Fallback image url if a service name doesn't match
const defaultPlaceholder = "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop";

export function HairServices() {
  return (
    <section id="hair-services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Hair services
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Heritage hair, hand-crafted
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Braids, wigs, locs and extensions — every look built with patience,
            precision and a deep respect for Black hair.
          </p>
        </Reveal>

        {/* Changed layout grid to columns of 1 or 2 to give the horizontal cards beautiful breathing room */}
        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {hairServices.map((service) => {
            const imageUrl = serviceImages[service.name] || defaultPlaceholder;

            return (
              <motion.article
                key={service.name}
                variants={staggerItem}
                className="group relative flex h-44 w-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)]"
              >
                {/* Left Aligned Image Wrapper */}
                <div className="relative h-full w-2/5 shrink-0 overflow-hidden sm:w-1/3">
                  <img
                    src={imageUrl}
                    alt={service.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Flawless Horizontal Blend Overlay — Fades smoothly from transparent directly into your card color */}
                  <div className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-r from-transparent via-card/50 to-card" />
                </div>

                {/* Right Aligned Text Container */}
                <div className="relative z-10 flex w-3/5 flex-col justify-center p-5 pl-1 sm:w-2/3 sm:p-6 sm:pl-2">
                  <h3 className="font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
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
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Hair services
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Heritage hair, hand-crafted
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Braids, wigs, locs and extensions — every look built with patience,
            precision and a deep respect for Black hair.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {hairServices.map((service) => {
            const imageUrl = serviceImages[service.name] || defaultPlaceholder;

            return (
              <motion.article
                key={service.name}
                variants={staggerItem}
                className="group relative flex h-44 w-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)]"
              >
                {/* Guaranteed Sizing Frame with Fallback Gray Background Color */}
                <div className="relative h-full w-[140px] min-w-[140px] shrink-0 overflow-hidden bg-muted/10 sm:w-[220px] sm:min-w-[220px]">
                  <img
                    src={imageUrl}
                    alt={service.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Master 3-Stop Horizontal Fade Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-card/30 via-card/85 to-card" />
                </div>

                {/* Content Track */}
                <div className="relative z-10 flex flex-1 flex-col justify-center p-5 pl-2 pr-6">
                  <h3 className="font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
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
