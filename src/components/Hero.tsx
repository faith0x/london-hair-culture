import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { salon } from "@/lib/salon";
import heroHair from "@/assets/hero-dazzlemehair.webp";
import heroFashion from "@/assets/hero-fashion.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Diptych background: hair (left) + fashion (right) */}
      <div className="absolute inset-0 grid grid-cols-2">
        <img
          src={heroHair}
          alt="Heritage Black hair braiding"
          width={1200}
          height={2000}
          className="h-full w-full animate-hero-drift object-cover object-center"
        />
        <img
          src={heroFashion}
          alt="Custom-made African fashion"
          width={1200}
          height={2000}
          loading="lazy"
          className="h-full w-full animate-hero-drift object-cover object-center"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      {/* Color washes */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-background/70" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90 backdrop-blur-md">
            <MapPin className="size-3.5 text-primary" />
            {salon.city}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Heritage hair.</span>
            <span className="block text-primary">African fashion.</span>
            <span className="block">One studio.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            Dazzle Me is a Middlesbrough atelier where braids, wigs, locs and
            made-to-order African fashion are crafted by hand — a celebration
            of culture, beauty and self-expression.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="glass-dark" className="rounded-full px-8 text-base">
              <Link to="/hair">
                Browse hair services
                <span className="ml-1">→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass" className="rounded-full px-8 text-base">
              <Link to="/fashion">
                Browse our fashion collective
                <span className="ml-1">→</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
