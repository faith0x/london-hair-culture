import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";

// TODO: replace with real client reviews
const reviews = [
  {
    quote:
      "My knotless braids were absolutely flawless and lasted for weeks. The care and attention to detail is unreal.",
    name: "Amara O.",
  },
  {
    quote:
      "Felt so at home here. They understand Black hair and treat it with such respect — I won't go anywhere else.",
    name: "Tendai M.",
  },
  {
    quote:
      "Booked through WhatsApp, super easy. Walked out feeling like the best version of myself. Highly recommend.",
    name: "Zainab K.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Reviews
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Loved by our clients
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <motion.blockquote
              key={review.name}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex gap-1 text-accent-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 font-display text-xl leading-snug text-foreground/90">
                “{review.quote}”
              </p>
              <footer className="mt-5 text-sm font-semibold text-muted-foreground">
                — {review.name}
              </footer>
            </motion.blockquote>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
