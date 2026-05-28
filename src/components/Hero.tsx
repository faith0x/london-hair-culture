import { motion } from "motion/react";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import heroImage from "@/assets/hero-braids.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image with ambient drift */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Black woman with intricate freshly styled box braids"
          width={1280}
          height={1600}
          className="h-full w-full animate-hero-drift object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
            <MapPin className="size-3.5 text-primary" />
            {salon.city}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="block">Heritage Hair:</span>
            <span className="block text-primary">Our Crown,</span>
            <span className="block">Our Story</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            A Middlesbrough braiding studio devoted to box braids, knotless braids,
            cornrows and protective styles — crafted with care for the beauty and
            heritage of Black hair. (We do wigs too.)
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Book Appointment
              </a>
            </Button>
            <a
              href="#braiding"
              className="group text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
            >
              Explore braiding
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
