import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import { fashion, serviceAssets } from "@/lib/assets";

export const Route = createFileRoute("/fashion")({
  component: FashionPage,
});

const FASHION_SERVICES_DATA = [
  {
    id: "custom-made",
    title: "Custom-Made Clothing",
    description: "Bespoke African fashion tailored to your measurements — ankara, lace, agbada, and contemporary fusion pieces.",
    image: serviceAssets["Custom-Made Clothing"],
    duration: "5–14 days",
    prep: "Measurements & fabric selection",
    steps: ["Style consultation", "Pattern drafting & fitting", "Hand-finished construction"]
  },
  {
    id: "alterations",
    title: "Alterations",
    description: "Precision resizing, restyling, and repairs to make any garment fit perfectly and look brand new.",
    image: serviceAssets["Alterations"],
    duration: "2–5 days",
    prep: "Bring garment for assessment",
    steps: ["Fit assessment", "Seam restructuring", "Pressing & final check"]
  },
  {
    id: "african-fashion",
    title: "African Fashion",
    description: "Ready-to-wear and made-to-order pieces celebrating vibrant African prints, textures, and silhouettes.",
    image: serviceAssets["African Fashion"],
    duration: "3–10 days",
    prep: "Style preference discussion",
    steps: ["Fabric curation", "Design sketch approval", "Tailored construction"]
  }
];

const LOOKBOOK = [
  { src: fashion.lookbook1, label: "Ankara Evening" },
  { src: fashion.lookbook2, label: "Lace Bridal" },
  { src: fashion.lookbook3, label: "Fusion Street" },
  { src: fashion.lookbook4, label: "Agbada Set" },
];

function FashionPage() {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
        <section className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={fashion.heroFashion}
              alt="African fashion atelier"
              className="h-full w-full animate-hero-drift object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-5 pt-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90 backdrop-blur-md">
                <MapPin className="size-3.5 text-primary" />
                Fashion · {salon.city}
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                <span className="block">Bespoke African</span>
                <span className="block text-primary">fashion, by hand.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                Custom-made clothing, alterations, and African fashion — designed
                and sewn with precision in our Middlesbrough atelier.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base shadow-sm">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Book a fitting →
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="rounded-full px-7 text-base border-foreground/20 hover:bg-foreground/5 backdrop-blur-sm transition-all gap-2 text-foreground">
                  <Link to="/contact">
                    <MapPin className="size-4 text-primary" />
                    Visit us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Our Expertise
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-foreground">
              Dazzleme Services
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
              Tap on any service block below to reveal explicit tailoring details, fitting cycles, and design specifications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FASHION_SERVICES_DATA.map((service) => {
              const isExpanded = activeDetail === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveDetail(isExpanded ? null : service.id)}
                  className="flex flex-col overflow-hidden rounded-[24px] border border-foreground/5 bg-card transition-all duration-300 hover:shadow-md cursor-pointer h-fit"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  <div className="px-5 py-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <button className="mt-3 text-xs font-medium text-primary hover:underline">
                      {isExpanded ? "Hide specs" : "View extra details"}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-[hsl(42,40%,92%)]"
                      >
                        <div className="border-t border-[#DECFA7]/30 px-6 py-5">
                          <div className="grid grid-cols-2 gap-4 text-xs border-b border-[#DECFA7]/40 pb-4">
                            <div>
                              <span className="block font-medium text-neutral-600">Est. Duration</span>
                              <span className="text-neutral-900 font-semibold">{service.duration}</span>
                            </div>
                            <div>
                              <span className="block font-medium text-neutral-600">Preparation</span>
                              <span className="text-neutral-900 font-semibold">{service.prep}</span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                              What to expect:
                            </span>
                            <ul className="space-y-1.5">
                              {service.steps.map((step, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-neutral-800 font-medium">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-none" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-2.5">
                            <a
                              href={`${whatsappUrl}&text=Hi,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(service.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 min-w-[140px] rounded-full bg-foreground px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-background shadow-md transition-transform active:scale-95 hover:bg-foreground/90"
                            >
                              Inquire via WhatsApp
                            </a>
                            <Link
                              to="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="rounded-full border border-foreground/10 bg-card px-5 py-2.5 text-center text-xs font-medium tracking-wide text-foreground transition-all hover:bg-neutral-100 flex items-center justify-center gap-1.5"
                            >
                              <MapPin className="size-3.5 text-muted-foreground" />
                              Visit us
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The Portfolio
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-foreground">
              Atelier Lookbook
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
              A showcase of exquisite craftsmanship, precision tailoring, and vibrant patterns cut cleanly to your unique form.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOOKBOOK.map((item, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl group">
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-foreground/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <CrossLinkBand
          eyebrow="Also at Dazzle Me"
          title="Need your hair done too?"
          description="Our studio also specialises in heritage Black hair — braids, wigs, locs, weaving and extensions."
          ctaLabel="Browse our hair services"
          ctaTo="/hair"
          accent="rose"
        />

        <BookingCTA />
      </main>
      <SalonFooter />
    </div>
  );
}
