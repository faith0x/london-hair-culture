import { motion } from "motion/react";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import heroImage from "@/assets/hero-dazzlemehair.webp";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image with ambient drift */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dazzlemehair — Black hair braiding studio in Middlesbrough"
          width={1600}
          height={2000}
          className="h-full w-full animate-hero-drift object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md">
            <MapPin className="size-3.5 text-primary" />
            {salon.city}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Heritage Hair:</span>
            <span className="block text-primary">Our Crown,</span>
            <span className="block">Our Story</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            A Middlesbrough studio devoted to box braids, knotless braids,
            cornrows, protective styles and wigs — crafted with care for the
            beauty and heritage of Black hair.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="glass" className="rounded-full px-8 text-base">
              <a href="#braiding">
                Explore braiding
                <span className="ml-1">→</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
