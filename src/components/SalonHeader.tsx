import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";
import logo from "@/assets/logo-dazzlemehair.png";

const logo = { url: "https://placehold.co/1920x1080/b45309/ffffff?text=Fashion+Collective" };

const links = [
  { label: "Hair", to: "/hair" as const, kind: "route" as const },
  { label: "Fashion", to: "/fashion" as const, kind: "route" as const },
  { label: "Story", href: "/#story", kind: "anchor" as const },
  { label: "Gallery", href: "/#gallery", kind: "anchor" as const },
  { label: "Visit", href: "/#visit", kind: "anchor" as const },
];

export function SalonHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "left-1/2 top-3 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/30 bg-background/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] backdrop-blur-xl md:top-4 md:w-[calc(100%-2rem)]"
          : "inset-x-0 top-0 w-full bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between ${
          scrolled ? "px-4 py-2.5 md:px-6 md:py-3" : "px-5 py-4"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt={salon.fullName}
            className={`h-9 w-auto transition-all duration-500 md:h-10 ${
              scrolled
                ? "[filter:invert(15%)_sepia(8%)_saturate(800%)_hue-rotate(350deg)_brightness(40%)]"
                : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          />
          <span className="sr-only">{salon.fullName}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.kind === "route" ? (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="glass-dark" className="rounded-full px-6">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-3 rounded-3xl border border-white/30 bg-background/90 shadow-lg backdrop-blur-xl">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) =>
              link.kind === "route" ? (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-foreground/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-foreground/80"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
            <li className="pt-2 pb-1">
              <Button asChild variant="glass-dark" className="w-full rounded-full">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Book Appointment
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
