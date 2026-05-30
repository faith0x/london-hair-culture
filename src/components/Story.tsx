import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import storyImage from "@/assets/story-braiding.jpg";

export function Story() {
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_70px_-30px_oklch(0.31_0.035_30_/_0.5)]">
            <img
              src={storyImage}
              alt="Braider carefully creating knotless braids for a seated client"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
