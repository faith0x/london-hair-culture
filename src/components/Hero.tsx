import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ServicePeek } from "@/components/ServicePeek";

const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" };
const heroFashionAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" };

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed hero image — completely untouched */}
      <div className="absolute inset-0">
        <img
          src={heroHomeAsset.url}
          alt="Heritage hair and African fashion at Dazzle Me"
          className="h-full w-full animate-hero-drift object-cover object-center"
        />
      </div>

      {/* NO full-image overlays. The image stays 100% visible. */}

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Text container with its own subtle dark backdrop */}
          <div className="inline-block rounded-3xl bg-black/40 px-8 py-6 backdrop-blur-sm">
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Dazzle Me — Hair &amp; Fashion
            </p>

            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-lg">
              <span className="block">Our crown,</span>
              <span className="block">our story.</span>
            </h1>

            <p className="mt-6 flex flex-col items-center gap-1 font-display text-xl font-bold tracking-wide text-white sm:flex-row sm:justify-center sm:gap-4 sm:text-2xl drop-shadow-md">
              <span>Heritage hair.</span>
              <span aria-hidden className="hidden text-white/60 sm:inline">·</span>
              <span>Heritage fashion.</span>
            </p>
          </div>

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
