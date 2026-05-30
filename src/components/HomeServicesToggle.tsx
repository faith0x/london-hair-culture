import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { hairServices, fashionServices } from "@/lib/salon";

type Category = "hair" | "fashion";

const categories: { id: Category; label: string; tagline: string; href: "/hair" | "/fashion" }[] = [
  { id: "hair", label: "Hair", tagline: "Braids, wigs, locs & extensions", href: "/hair" },
  { id: "fashion", label: "Fashion", tagline: "Custom African fashion & alterations", href: "/fashion" },
];

export function HomeServicesToggle() {
  const [active, setActive] = useState<Category>("hair");
  const items = active === "hair" ? hairServices.slice(0, 4) : fashionServices;
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What we do
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Two crafts, one studio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tap a category to preview what we offer — then explore the full
            collection on its dedicated page.
          </p>
        </Reveal>

        {/* Segmented toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex rounded-full border border-border bg-card/70 p-1 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-8 ${
                  active === c.id ? "text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {active === c.id && (
                  <motion.span
                    layoutId="toggle-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-foreground"
                  />
                )}
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">{current.tagline}</p>

        {/* Animated preview cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {items.map((service) => (
              <article
                key={service.name}
                className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.blurb}
                </p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <Link
            to={current.href}
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-foreground/10"
          >
            See all {current.label.toLowerCase()} services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
