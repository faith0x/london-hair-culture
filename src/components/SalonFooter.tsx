import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { salon, fullAddress, whatsappUrl } from "@/lib/salon";

export function SalonFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-foreground">
              {salon.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{fullAddress}</p>
            <p className="mt-1 text-sm text-muted-foreground">{salon.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* TODO: link real social profiles */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {salon.name}. Celebrating the heritage of Black hair.
        </div>
      </div>
    </footer>
  );
}
