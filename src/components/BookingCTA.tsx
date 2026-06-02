import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl, telUrl } from "@/lib/salon";

export function BookingCTA() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center sm:px-12">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-mauve/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
                Ready for your crown?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                Booking is quick — message us on WhatsApp or call and we'll find a
                time that works for you.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="glass" className="rounded-full px-8 text-base text-primary-foreground">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-5" />
                    Book appointment                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href={telUrl}>
                    <Phone className="size-5" />
                    {salon.phoneDisplay}
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
