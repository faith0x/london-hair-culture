import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, Scissors, Sparkles, Shirt, ChevronDown } from "lucide-react";
import { Instagram} from "lucide-react";
import { useState } from "react";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import { fashion, serviceAssets } from "@/lib/assets";

const { heroFashionAsset, fabricImg, ankaraImg, tailoringImg } = fashion;
const title = "African Fashion & Custom Clothing — Dazzle Me Middlesbrough";
const description =
  "Custom-made African fashion, bespoke clothing and expert alterations in Middlesbrough — ankara, lace and wax-print pieces tailored by hand at Dazzle Me.";

export const Route = createFileRoute("/fashion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fashion" },
    ],
    links: [{ rel: "canonical", href: "/fashion" }],
  }),
  component: FashionPage,
});

const lookbook = [
  { src: ankaraImg, alt: "Ankara two-piece design", label: "Ankara two-piece" },
  { src: tailoringImg, alt: "Custom tailoring details", label: "Custom tailoring" },
  { src: fabricImg, alt: "Stack of curated African wax-print fabrics", label: "African prints" },
];

// Structural Details data mapped to asset keys
const fashionServicesData = [
  {
    id: "custom-clothing",
    title: "Custom-Made Clothing",
    icon: Shirt,
    image: serviceAssets["Custom-Made Clothing"],
    description: "Bespoke, made-to-measure premium outfits created exactly to your measurements.",
    extraDetails: "Includes complete custom pattern drafting, traditional or modern styling consultations, lining options, and up to two fitting sessions to ensure an absolute glove-like silhouette."
  },
  {
    id: "african-fashion",
    title: "African Fashion",
    icon: Sparkles,
    image: serviceAssets["African Fashion"],
    description: "Stunning cultural designs cut cleanly from authentic Ankara, Lace, and premium prints.",
    extraDetails: "Specializing in traditional statement sets, elegant coordination pieces, asymmetric modern statements, and celebratory party wear showcasing premium structural craftsmanship."
  },
  {
    id: "alterations",
    title: "Alterations & Repairs",
    icon: Scissors,
    image: serviceAssets["Alterations"],
    description: "Expert resizing, adjustments, structural tailoring, and garment breathing renewals.",
    extraDetails: "From refining delicate necklines and tapering formal hemlines to complete size re-conceptions. We work with everything from lightweight wax fabrics to multi-layered laced garments."
  }
];

function FashionPage() {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroFashionAsset.url}
              alt="Custom-made African fashion atelier"
              className="h-full w-full animate-hero-drift object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/60 to-background/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-5 pt-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto max-w-2xl text-right"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90 backdrop-blur-md">
                <MapPin className="size-3.5 text-gold" />
                Fashion · {salon.city}
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                <span className="block">Bespoke African</span>
                <span className="block text-gold">fashion, by hand.</span>
              </h1>
              <p className="ml-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                A made-to-order atelier — custom clothing, alterations and
                ankara pieces designed around you and the heritage of African
                print.
              </p>
              <div className="mt-8 flex justify-end gap-4">
                <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp →
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VISIT US HIGH-CONTRAST INTERACTIVE PATCH (Fixed for image 1780475617490.jpeg) ── */}
        <section className="relative z-20 -mt-7 flex justify-center px-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full border px-8 text-sm font-medium tracking-wider backdrop-blur-xl transition-all hover:scale-105 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              style={{
                background: "rgba(30, 26, 22, 0.85)", // Solid dark charcoal tone for absolute clarity in light zones
                border: "1px solid rgba(239, 224, 190, 0.35)",
                color: "#EFE4C8",
              }}
            >
              <a href="#visit" className="flex items-center justify-center gap-2.5">
                <MapPin className="size-4 animate-pulse text-gold" />
                <span>Visit Us Today</span>
                <ArrowRight className="size-3.5 opacity-80 text-gold" />
              </a>
            </Button>
          </motion.div>
        </section>

        <Divider />

        {/* ── INTERACTIVE FASHION SERVICES WITH POPULATED IMAGES & TAP DETAILS ── */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Our Expertise</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-foreground">Dazzleme Services</h2>
              <p className="mt-4 text-foreground/60 text-sm">
                Tap on any service block below to reveal explicit tailoring details, fitting cycles, and design specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {fashionServicesData.map((service, idx) => {
                const IconComponent = service.icon;
                const isExpanded = activeDetail === service.id;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col rounded-2xl border border-border/60 bg-muted/30 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-gold/30 hover:bg-muted/50"
                    onClick={() => setActiveDetail(isExpanded ? null : service.id)}
                  >
                    {/* Populated Image Wrapper */}
                    <div className="relative h-64 w-full overflow-hidden bg-muted">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex p-2.5 rounded-xl bg-[#1E1A16]/90 border border-white/10 text-gold shadow-md">
                        <IconComponent className="size-5" />
                      </div>
                      <h3 className="absolute bottom-4 left-5 font-display text-2xl font-medium text-white tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    {/* Basic Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {service.description}
                      </p>
                      
                      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold">
                        <span>{isExpanded ? "Hide specs" : "View extra details"}</span>
                        <ChevronDown className={`size-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    {/* Tap Reveal Accordion Panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="bg-[#1E1A16]/5 border-t border-gold/10 overflow-hidden"
                        >
                          <div className="p-5 text-xs leading-relaxed text-foreground/80 bg-gold/5">
                            <strong className="block uppercase tracking-wider text-[10px] text-gold mb-1.5">What to expect:</strong>
                            {service.extraDetails}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LOOKBOOK STRIP ── */}
        <section className="bg-background pb-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-border/40 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Portfolio</p>
                <h2 className="mt-1 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Atelier Lookbook
                </h2>
              </div>
              <p className="max-w-md text-sm text-foreground/60 sm:text-right">
                A showcase of exquisite craftsmanship, precision tailoring, and vibrant patterns cut cleanly to your unique form.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {lookbook.map((l, i) => (
                <motion.figure
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-muted"
                >
                  <img
                    src={l.src}
                    alt={l.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-5 pt-12">
                    <span className="font-display text-lg font-medium tracking-wide text-background">{l.label}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4">
  <div className="flex size-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
    <Shirt className="size-5" />
  </div>
  <div>
    <h4 className="text-sm font-semibold text-foreground">See Our Latest Designs</h4>
    <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
      <a href="https://www.instagram.com/dazzle_me_couture..." target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
        Instagram
      </a>
      <span>•</span>
      <a href="https://www.tiktok.com/@dazzle_me_couture" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
        TikTok: @dazzle_me_couture
      </a>
    </div>
  </div>
</div>

        {/* ── STUDIOWIDE NAVIGATION ── */}
        <CrossLinkBand
          eyebrow="Also at Dazzle Me"
          title="Need your crown styled too?"
          description="From braids and wigs to dreadlocks and extensions — discover our heritage hair services in the same studio layout."
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
