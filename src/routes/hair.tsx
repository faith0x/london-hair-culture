import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";
import { Instagram, Scissors } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import { hair, serviceAssets } from "@/lib/assets";

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

// Interactive hair service schema mapped to specific asset repository keys
const HAIR_SERVICES_DATA = [
  {
    id: "braiding",
    title: "Braiding",
    description: "Box braids, knotless, cornrows, feed-ins, twists — neat parts, clean tension, styles that last.",
    image: serviceAssets["Braiding"],
    duration: "2–6 hrs",
    prep: "Freshly washed & blown out",
    steps: ["Custom parting map", "Tension-free installation", "Edges treatment & oiling"]
  },
  {
    id: "wig-making",
    title: "Wig Making",
    description: "Custom wigs built to your measurements, density and texture — natural-looking, comfortable, made to last.",
    image: serviceAssets["Wig Making"],
    duration: "3–5 days",
    prep: "Head measurements required",
    steps: ["Cap fitting & sizing", "Premium bundle weaving", "Custom hairline customization"]
  },
  {
    id: "wig-revamping",
    title: "Wig Revamping",
    description: "Bring an old wig back to life — washing, restyling, replacing lace and refreshing the parting.",
    image: serviceAssets["Wig Revamping"],
    duration: "24–48 hrs",
    prep: "Drop off uninstalled wig",
    steps: ["Deep conditioning bath", "Lace cleaning & minor repairs", "Precision hot-tool styling"]
  },
  {
    id: "dreadlocks",
    title: "Dreadlocks",
    description: "Starts, retwists and maintenance for healthy, well-kept locs in styles that suit you.",
    image: serviceAssets["Dreadlocks"],
    duration: "2–4 hrs",
    prep: "Clean hair, no heavy oils",
    steps: ["Scalp detox assessment", "Organic twisting gel locking", "Under-dryer style setting"]
  },
  {
    id: "weaving",
    title: "Weaving",
    description: "Flawless traditional, leave-out, or closure sew-ins with precise flat braiding tracks and seamless texturised blending.",
    image: serviceAssets["Weaving"],
    duration: "2–4 hrs",
    prep: "Hair washed, blown out; bundles clean and dry",
    steps: ["Flat anchor foundation cornrows", "Secure perimeter net application", "Tracks sewing & final blending cut"]
  },
  {
    id: "hair-extensions",
    title: "Hair Extensions",
    description: "Premium clip-ins, tape-ins, and bespoke installations engineered to add natural volume, luxurious length, and dynamic movement.",
    image: serviceAssets["Hair Extensions"],
    duration: "1.5–3 hrs",
    prep: "Clarifying wash, completely blown out, no oils",
    steps: ["Weight-distribution sectioning", "Seamless flat-bond integration", "Custom layered framing and style finish"]
  }
];

function HairPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
                DazzleMe hair and fashion  · {salon.city}
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                <span className="block">Our crown,</span>
                <span className="block text-primary">our story.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                Braids, wigs, locs, weaving and extensions — crafted by hand with
                care for the heritage and beauty of Black hair.
              </p>
              
              {/* Dual Hero Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base shadow-sm">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Book your appointment →
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

        {/* Heritage Diamond Divider */}
        <div className="mt-14 flex items-center justify-between w-full max-w-2xl mx-auto px-4 text-foreground/40 pointer-events-none select-none">
          <div className="flex items-center flex-none">
            <span className="w-3 h-[1px] bg-current opacity-50" />
            <div className="relative w-3 h-3 mx-2 border border-current rotate-45 flex items-center justify-center">
              <span className="absolute w-1 h-1 bg-current rounded-full" />
            </div>
            <span className="w-3 h-[1px] bg-current opacity-50" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-border via-border/30 to-transparent ml-2" />
          <div className="w-16 flex-none" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-border via-border/30 to-transparent mr-2" />
          <div className="flex items-center flex-none">
            <span className="w-3 h-[1px] bg-current opacity-50" />
            <div className="relative w-3 h-3 mx-2 border border-current rotate-45 flex items-center justify-center">
              <span className="absolute w-1 h-1 bg-current rounded-full" />
            </div>
            <span className="w-3 h-[1px] bg-current opacity-50" />
          </div>
        </div>

        {/* Dynamic Services Grid Layout */}
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {HAIR_SERVICES_DATA.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className="flex flex-col overflow-hidden rounded-[24px] border border-foreground/5 bg-card transition-all duration-300 hover:shadow-md cursor-pointer h-fit"
                >
                  {/* Summary Header View */}
                  <div className="flex h-44 sm:h-48 items-center relative">
                    <div className="relative w-1/3 h-full flex-none overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-card/40 to-card" />
                    </div>

                    <div className="flex-1 px-5 py-4">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Oatmeal Linen Context Utilities Drawer */}
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
                              Service Execution:
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

        <CrossLinkBand
          eyebrow="Also at Dazzle Me"
          title="Love African fashion too?"
          description="Our atelier also designs and tailors custom-made African fashion — ankara, lace and bespoke pieces sewn by hand."
          ctaLabel="Browse our fashion collective"
          ctaTo="/fashion"
          accent="gold"
        />

        <BookingCTA />
      </main>
      <SalonFooter />
    </div>
  );
}
