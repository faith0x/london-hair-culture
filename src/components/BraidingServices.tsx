import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/salon";

const services = [
  {
    name: "Box Braids",
    blurb:
      "Classic, timeless and versatile — neat parts and clean tension for braids that last and look immaculate.",
  },
  {
    name: "Knotless Braids",
    blurb:
      "Lightweight and gentle on your edges, with a seamless, natural fall from root to tip.",
  },
  {
    name: "Cornrows & Feed-ins",
    blurb:
      "Sleek, sculpted patterns — from simple straight-backs to intricate freehand designs.",
  },
  {
    name: "Twists",
    blurb:
      "Passion twists, Senegalese and more — soft, textured styles full of movement.",
  },
  {
    name: "Protective Styles",
    blurb:
      "Styles that shield and nurture your natural hair while keeping you looking your best.",
  },
  {
    name: "Consultation & Styling",
    blurb:
      "Not sure what suits you? We'll talk through length, look and care to find your perfect style.",
  },
];

export function BraidingServices() {
  return (
    <section id="braiding" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What we do
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Braiding is our craft
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every style is created by hand with patience and precision. Here's a
            taste of what we offer — book a consultation and we'll find the look
            that's right for you.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={staggerItem}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_oklch(0.66_0.085_15_/_0.5)]"
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

        {/* Secondary: wigs */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-accent/40 bg-accent/15 p-7 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  We do wigs too
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Wig installs, customisation and styling — just ask when you book.
                </p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Enquire about wigs →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
