import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SalonHeader } from "@/components/SalonHeader";
import { Divider } from "@/components/Divider";
import { HairServices } from "@/components/HairServices";
import { CrossLinkBand } from "@/components/CrossLinkBand";
import { BookingCTA } from "@/components/BookingCTA";
import { SalonFooter } from "@/components/SalonFooter";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";


const heroHair = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780385768/hero-dazzlemehair-Eqo8Q7iR6NGNiYRykRrwui_g11erz.webp" };

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

function HairPage() {
  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
        <section className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroHair}
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
        <HairServices />

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
