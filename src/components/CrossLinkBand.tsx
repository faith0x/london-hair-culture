import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

interface CrossLinkBandProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: "/hair" | "/fashion" | "/";
  accent?: "rose" | "gold";
}

export function CrossLinkBand({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo,
  accent = "rose",
}: CrossLinkBandProps) {
  const ring =
    accent === "rose"
      ? "from-rose/30 via-transparent to-gold/20"
      : "from-gold/30 via-transparent to-rose/20";

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center sm:px-12`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ring} opacity-70`}
            />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </span>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                {title}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  to={ctaTo}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground/85 px-7 py-3 text-sm font-medium text-background backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 hover:bg-foreground"
                >
                  {ctaLabel}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
