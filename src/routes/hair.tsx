import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import { hair } from "@/lib/assets";

const title = "Hair Services — Dazzle Me Middlesbrough";
const description =
  "Braiding, wig making, wig revamping, dreadlocks, weaving and hair extensions in Middlesbrough — heritage Black hair, hand-crafted by Dazzle Me.";

export const Route = createFileRoute("/hair")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hair" },
    ],
    links: [{ rel: "canonical", href: "/hair" }],
  }),
  component: HairPage,
});

// Dynamic dataset matching your home structure images & execution points
const HAIR_SERVICES = [
  {
    id: "braiding",
    title: "Braiding",
    description: "Box braids, knotless, cornrows, feed-ins, twists — neat parts, clean tension, styles that last.",
    image: hair.braiding || hair.heroHair,
    duration: "2–6 hrs",
    prep: "Freshly washed & blown out",
    steps: ["Custom parting map", "Tension-free installation", "Edges treatment & oiling"],
  },
  {
    id: "wig-making",
    title: "Wig Making",
    description: "Custom wigs built to your measurements, density and texture — natural-looking, comfortable, made to last.",
    image: hair.wigMaking || hair.heroHair,
    duration: "3–5 days",
    prep: "Head measurements sizing check required",
    steps: ["Head circumference mapping", "Premium lace selection", "Custom knot bleaching & plucking"],
  },
  {
    id: "wig-revamping",
    title: "Wig Revamping",
    description: "Bring an old wig back to life — washing, restyling, replacing lace and refreshing the parting.",
    image: hair.wigRevamping || hair.heroHair,
    duration: "2–4 days",
    prep: "Drop-off alignment booking",
    steps: ["Deep conditioning rejuvenation wash", "Lace cleaning & reinforcement", "Precision restyling & hot comb finish"],
  },
  {
    id: "dreadlocks",
    title: "Dreadlocks",
    description: "Starts, retwists and maintenance for healthy, well-kept locs in styles that suit you.",
    image: hair.dreadlocks || hair.heroHair,
    duration: "2–4 hrs",
    prep: "Clean oil-free scalp recommended",
    steps: ["Organic locking growth therapy", "Interlocking or precise palm rolling", "Scalp hydration framework & styling"],
  },
];

function HairPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={hair.heroHair}
              alt="Heritage Black hair braiding studio"
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
                Hair · {salon.city}
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                <span className="block">Our crown,</span>
                <span className="block text-primary">our story.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                Braids, wigs, locs, weaving and extensions — crafted by hand with
                care for the heritage and beauty of Black hair.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Book your appointment →
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* Interactive Services Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block mb-3">
                Heritage Studio Menu
              </span>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Our Signature Crafts
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {HAIR_SERVICES.map((service) => {
                const isExpanded = expandedService === service.id;

                return (
                  <div
                    key={service.id}
                    onClick={() => setExpandedService(isExpanded ? null : service.id)}
                    className="group overflow-hidden rounded-[2rem] border border-foreground/5 bg-white shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    {/* Top Layer: Card Image Split & Overview */}
                    <div className="flex flex-col sm:flex-row min-h-[190px]">
                      {/* Smooth Image Side Blend Layout */}
                      <div className="relative h-48 sm:h-auto sm:w-[42%] flex-none overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-white/20 to-white" />
                      </div>

                      {/* Content Overview Column */}
                      <div className="p-6 sm:w-[58%] flex flex-col justify-center bg-white">
                        <h3 className="font-display text-2xl font-semibold text-foreground tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-foreground/70">
                          {service.description}
                        </p>
                        <div className="mt-4 text-xs font-semibold text-primary/90 tracking-wide">
                          {isExpanded ? "Collapse details ↑" : "Tap to view options & details →"}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Layer: The Saturated Oatmeal Micro-Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          onClick={(e) => e.stopPropagation()} // Prevents accidental closing toggles inside drawer
                          className="border-t border-[#DECFA7]/30 bg-[#F0EAD8] px-6 py-5 overflow-hidden text-left"
                        >
                          <div className="grid grid-cols-2 gap-4 text-xs border-b border-[#DECFA7]/40 pb-4">
                            <div>
                              <span className="block font-semibold text-neutral-500 uppercase tracking-wider scale-95 origin-left">
                                Est. Duration
                              </span>
                              <span className="text-neutral-900 font-bold text-sm block mt-0.5">
                                {service.duration}
                              </span>
                            </div>
                            <div>
                              <span className="block font-semibold text-neutral-500 uppercase tracking-wider scale-95 origin-left">
                                Preparation
                              </span>
                              <span className="text-neutral-900 font-bold text-sm block mt-0.5">
                                {service.prep}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                              Service Execution:
                            </span>
                            <ul className="space-y-1.5">
                              {service.steps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800 font-medium leading-relaxed">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-none" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action CTA Buttons */}
                          <div className="mt-6 flex flex-wrap gap-2.5">
                            <a
                              href={`${whatsappUrl}?text=Hi%20Dazzle%20Me,%20I'd%20like%20to%20inquire%20about%20booking%20a%20${encodeURIComponent(service.title)}%20session.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 min-w-[140px] rounded-full bg-foreground px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-background shadow-sm transition-transform active:scale-95 hover:bg-foreground/90"
                            >
                              Inquire via WhatsApp
                            </a>
                            <a
                              href="#location"
                              className="rounded-full border border-foreground/10 bg-white/80 backdrop-blur-sm px-5 py-2.5 text-center text-xs font-medium tracking-wide text-foreground transition-all hover:bg-white"
                            >
                              Visit us (Map)
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CrossLinkBand
          eyebrow="Also at Dazzle Me"
          title="Love African fashion too?"
          description="Our atelier also designs and tailors custom-made African fashion — ankara, lace and bespoke pieces sewn by hand."
          ctaLabel="Browse our fashion collective"
          ctaTo="/fashion"
          accent="gold"
        />

        <div id="location">
          <BookingCTA />
        </div>
      </main>
      <SalonFooter />
    </div>
  );
}
