import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { fashionServices } from "@/lib/salon";

export function FashionServices() {
  return (
    <section id="fashion-services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Fashion services
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            African fashion, made to order
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A bespoke atelier — every piece designed around you, cut by hand and
            sewn with the rhythm of African print and craft.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fashionServices.map((service) => (
            <motion.article
              key={service.name}
              variants={staggerItem}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_22px_50px_-24px_oklch(0.82_0.05_80_/_0.6)]"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.blurb}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
