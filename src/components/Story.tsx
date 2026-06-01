import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { useServiceFocus } from "@/components/ServiceFocusContext";


const storyFashionAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" };
const storyHairAsset = { url: "https://placehold.co/1920x1080/b45309/ffffff?text=Fashion+Collective" };

export function Story() {
  const { active } = useServiceFocus();
  const image = active === "hair" ? storyHairAsset.url : storyFashionAsset.url;
  const alt =
    active === "hair"
      ? "Braider creating heritage hair styles"
      : "Custom-made African fashion piece";

  return (
    <section id="story" className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Our crown, our cloth, our culture
          </h2>
          <p className="mt-6 font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">
            Black hair and African fashion are more than style — they are
            history, identity and belonging.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            At Dazzle Me we celebrate both. From intricate braids, locs and
            beautifully crafted wigs to ankara gowns and bespoke pieces sewn by
            hand, every look is a continuation of generations of craft — a
            quiet act of pride, care and self-expression.
          </p>
        </Reveal>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_70px_-30px_oklch(0.31_0.035_30_/_0.5)]">
            <div className="aspect-[4/5] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={image}
                  src={image}
                  alt={alt}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
