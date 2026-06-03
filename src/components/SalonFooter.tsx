import { Instagram, MessageCircle, Scissors, Shirt } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { salon, fullAddress, whatsappUrl } from "@/lib/salon";

// Custom inline SVG designed to mirror Lucide's stroke dynamics exactly
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

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

            {/* Complete Unified Social Array */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Business Connection"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dazzle_me_couture?igsh=MW1pbDFpdmhhMnd2Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="size-5" />
              </a>

              <div className="h-6 w-px bg-border mx-1 hidden sm:block" /> {/* Subtle divider to organize groups */}

              {/* --- HAIR TIKTOK GROUP --- */}
              {/* Hair Indicator Icon */}
              <div 
                title="Hair Services Section"
                className="flex size-10 items-center justify-center rounded-full border border-dashed border-primary/40 bg-primary/5 text-primary"
              >
                <Scissors className="size-5" />
              </div>
              {/* Hair TikTok Link */}
              <a
                href="https://www.tiktok.com/@dazzlemehair"
                target="_blank"
                rel="noreferrer"
                title="Dazzle Me Hair TikTok"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <TikTokIcon className="size-5" />
              </a>

              <div className="h-6 w-px bg-border mx-1 hidden sm:block" /> {/* Subtle divider to organize groups */}

              {/* --- CLOTHES TIKTOK GROUP --- */}
              {/* Clothes Indicator Icon */}
              <div 
                title="Fashion & Couture Section"
                className="flex size-10 items-center justify-center rounded-full border border-dashed border-amber-500/40 bg-amber-500/5 text-amber-500"
              >
                <Shirt className="size-5" />
              </div>
              {/* Clothes TikTok Link */}
              <a
                href="https://www.tiktok.com/@dazzle_me_couture"
                target="_blank"
                rel="noreferrer"
                title="Dazzle Me Couture Fashion TikTok"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-amber-500 hover:text-amber-500"
              >
                <TikTokIcon className="size-5" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">Fashion</p>
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
