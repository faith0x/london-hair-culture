import { MapPin, Clock, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { salon, fullAddress, mapsEmbedUrl, mapsDirectionsUrl } from "@/lib/salon";

export function LocationMap() {
  return (
    <section id="visit" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Visit us
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Find us in {salon.city}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-8 rounded-3xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Address
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {salon.addressLine}
                    <br />
                    {salon.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-primary" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Opening hours
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {salon.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4 text-muted-foreground">
                        <span>{h.day}</span>
                        <span className="font-medium text-foreground/80">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button asChild className="mt-auto rounded-full">
                <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                  <Navigation className="size-4" />
                  Get directions
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_70px_-30px_oklch(0.31_0.035_30_/_0.4)]">
              <iframe
                title={`Map showing ${fullAddress}`}
                src={mapsEmbedUrl}
                className="h-[360px] w-full lg:h-full"
                style={{ minHeight: 360, border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
