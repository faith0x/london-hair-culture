import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { hairServices, fashionServices } from "@/lib/salon";
import { useServiceFocus, type ServiceFocus } from "@/components/ServiceFocusContext";

const serviceAssets: Record<string, string> = {
  "Braiding": "https://images.unsplash.com/photo-1646615570534-1188046b85ff?q=80&w=600&auto=format&fit=crop",
  "Wig Making": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
  "Wig Revamping": "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
  "Dreadlocks": "https://images.unsplash.com/photo-1605497746444-11f81d11ff2b?q=80&w=600&auto=format&fit=crop",
  "Weaving": "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600&auto=format&fit=crop",
  "Hair Extensions": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
  "Custom-Made Clothing": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop",
  "Alterations": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  "African Fashion": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
};

const defaultPlaceholder = "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop";

const categories: {
  id: ServiceFocus;
  label: string;
  heading: string;
  tagline: string;
  href: "/hair" | "/fashion";
}[] = [
  {
    id: "hair",
    label: "Hair",
    heading: "Heritage hair",
    tagline: "Braids, wigs, locs & extensions",
    href: "/hair",
  },
  {
    id: "fashion",
    label: "Fashion",
    heading: "Heritage fashion",
    tagline: "Custom African fashion & alterations",
    href: "/fashion",
  },
];

export function HomeServicesToggle() {
  const { active, setActive } = useServiceFocus();
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

        <div className="mt-8 flex h-12 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={current.heading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {current.heading}
            </motion.h3>
          </AnimatePresence>
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground">{current.tagline}</p>

        <AnimatePresence mode="wait">
          <div key={active} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((service, i) => {
              const imageUrl = serviceAssets[service.name] || defaultPlaceholder;

              return (
                <motion.article
                  key={service.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-40 w-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.05)]"
                >
                  {/* Identical Layout Parity Configuration Wrapper */}
                  <div className="relative h-full w-[140px] min-w-[140px] shrink-0 overflow-hidden bg-muted/10 sm:w-[220px] sm:min-w-[220px]">
                    <img
                      src={imageUrl}
                      alt={service.name}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-card/30 via-card/85 to-card" />
                  </div>

                  {/* Content Element Wrapper */}
                  <div className="relative z-10 flex flex-1 flex-col justify-center p-5 pl-2 pr-6">
                    <h4 className="font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {service.name}
                    </h4>
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.blurb}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
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
