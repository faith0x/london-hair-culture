import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";

const links = [
  { label: "Braiding", href: "#braiding" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          {salon.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-foreground/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full">
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
