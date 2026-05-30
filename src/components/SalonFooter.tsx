import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { salon, fullAddress, whatsappUrl } from "@/lib/salon";

export function SalonFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold text-foreground">
              {salon.fullName}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{fullAddress}</p>
            <p className="mt-1 text-sm text-muted-foreground">{salon.tagline}</p>

            <div className="mt-5 flex items-center gap-3">
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Hair</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/hair" className="hover:text-foreground">Braiding</Link></li>
              <li><Link to="/hair" className="hover:text-foreground">Wig making & revamping</Link></li>
              <li><Link to="/hair" className="hover:text-foreground">Dreadlocks</Link></li>
              <li><Link to="/hair" className="hover:text-foreground">Weaving & extensions</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Fashion</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/fashion" className="hover:text-foreground">Custom-made clothing</Link></li>
              <li><Link to="/fashion" className="hover:text-foreground">Alterations</Link></li>
              <li><Link to="/fashion" className="hover:text-foreground">African fashion</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {salon.name}. Celebrating heritage hair and African fashion.
        </div>
      </div>
    </footer>
  );
}
