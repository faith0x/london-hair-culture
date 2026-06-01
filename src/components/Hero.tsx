import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ServicePeek } from "@/components/ServicePeek";

// Default placeholder URLs — replace with final assets when ready
const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" };
const heroFashionAsset = { url: "https://placehold.co/1920x1080/b45309/ffffff?text=Fashion+Collective" };

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Single full-bleed hero image */}
      <div className="absolute inset-0">
        <img
          src={heroHomeAsset.url}
          alt="Heritage hair and African fashion at Dazzle Me"
          className="h-full w-full animate-hero-drift object-cover object-center"
        />
      </div>

      {/* Color washes */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/10 to-background/50" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90 backdrop-blur-md">
            Dazzle Me — Hair &amp; Fashion
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Our crown,</span>
            <span className="block">our story.</span>
          </h1>

          <p className="mt-5 flex flex-col items-center gap-1 font-display text-xl text-primary sm:flex-row sm:justify-center sm:gap-4 sm:text-2xl">
            <span>Heritage hair.</span>
            <span aria-hidden className="hidden text-foreground/30 sm:inline">·</span>
            <span>Heritage fashion.</span>
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ServicePeek
              imageUrl={heroHomeAsset.url}
              label="Hair services"
              href="/hair"
              button={
                <Button asChild size="lg" variant="glass-dark" className="w-full rounded-full px-8 text-base">
                  <Link to="/hair">
                    Browse hair services
                    <span className="ml-1">→</span>
                  </Link>
                </Button>
              }
            />
            <ServicePeek
              imageUrl={heroFashionAsset.url}
              label="Fashion collective"
              href="/fashion"
              button={
                <Button asChild size="lg" variant="glass" className="w-full rounded-full px-8 text-base">
                  <Link to="/fashion">
                    Browse our fashion collective
                    <span className="ml-1">→</span>
                  </Link>
                </Button>
              }
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="glass" className="rounded-full px-10 text-base">
              <a href="#visit">Visit us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
