import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ServicePeek } from "@/components/ServicePeek";

// Default placeholder URLs — replace with final assets when ready
const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" };
const heroFashionAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" };

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

      {/* 1. TOP GRADIENT: Extra headroom safety for your header elements */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* 2. FOOLPROOF RADIAL STUDIO FLARE (Using inline styles to prevent Tailwind compilation drops) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
          style={{
  background: "radial-gradient(ellipse 90% 55% at 50% 45%, rgba(224, 236, 255, 0.4) 0%, rgba(253, 246, 238, 0.2) 50%, transparent 55%)"
}}


      />

      {/* 3. BOTTOM FADE: Clean transition to the rest of the layout */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

      {/* Content Container — Text is fully exposed and reads perfectly in brown against the light flare */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Dazzle Me — Hair &amp; Fashion
          </p>

          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Our crown,</span>
            <span className="block">our story.</span>
          </h1>

          <p className="mt-6 flex flex-col items-center gap-1 font-display text-xl font-bold tracking-wide text-foreground sm:flex-row sm:justify-center sm:gap-4 sm:text-2xl">
            <span>Heritage hair.</span>
            <span aria-hidden className="hidden text-foreground/40 sm:inline">·</span>
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
