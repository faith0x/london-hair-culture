import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { FashionServices } from "@/components/FashionServices";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import heroFashionAsset from "@/assets/hero-fashion.jpg.asset.json";
import fabricImg from "@/assets/gallery-fashion-fabrics.jpg";
import ankaraImg from "@/assets/gallery-fashion-ankara.jpg";
import tailoringImg from "@/assets/gallery-fashion-tailoring.jpg";

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
  { src: ankaraImg, alt: "Ankara two-piece", label: "Ankara two-piece" },
  { src: tailoringImg, alt: "Custom tailoring in progress", label: "Custom tailoring" },
  { src: fabricImg, alt: "Stack of African wax-print fabrics", label: "African prints" },
];

function FashionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
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
              <div className="mt-8 flex justify-end">
                <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp →
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Divider />
        <FashionServices />

        {/* Lookbook strip */}
        <section className="bg-background pb-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {lookbook.map((l, i) => (
                <motion.figure
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={l.src}
                    alt={l.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                    <span className="font-display text-lg font-medium text-background">{l.label}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <CrossLinkBand
          eyebrow="Also at Dazzle Me"
          title="Need your crown styled too?"
          description="From braids and wigs to dreadlocks and extensions — discover our heritage hair services in the same studio."
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
