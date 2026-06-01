import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

type Props = {
  /** The Browse CTA button */
  button: ReactNode;
  imageUrl: string;
  label: string;
  href: "/hair" | "/fashion";
};

export function ServicePeek({ button, imageUrl, label, href }: Props) {
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-stretch"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {button}

      {/* Desktop: hover-expand inline panel */}
      <div className="mt-3 hidden sm:block">
        <Link
          to={href}
          aria-label={`View ${label}`}
          tabIndex={hovered ? 0 : -1}
          style={{
            maxHeight: hovered ? "11rem" : "0",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-4px)",
          }}
          className="group/panel relative block overflow-hidden rounded-2xl border border-foreground/10 bg-card/40 backdrop-blur-md transition-[max-height,opacity,transform] duration-500 ease-out"
        >
          <div className="relative h-44 w-full">
            <img
              src={imageUrl}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/panel:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-background" />
            <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-end pr-5">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="font-display text-base">{label}</span>
                <ArrowRight className="size-4 transition-transform group-hover/panel:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile: tap-to-open dialog */}
      <div className="mt-2 flex justify-center sm:hidden">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
            >
              Peek inside ↘
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm overflow-hidden rounded-3xl border-foreground/10 bg-card p-0">
            <VisuallyHiddenPrimitive.Root>
              <DialogTitle>{label}</DialogTitle>
            </VisuallyHiddenPrimitive.Root>
            <Link
              to={href}
              onClick={() => setDialogOpen(false)}
              className="group/m relative block aspect-[3/4] w-full"
            >
              <img
                src={imageUrl}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-background" />
              <div className="absolute inset-y-0 right-0 flex w-1/2 flex-col items-end justify-center gap-2 pr-5 text-right">
                <span className="font-display text-2xl text-foreground">{label}</span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                  View <ArrowRight className="size-4 transition-transform group-hover/m:translate-x-1" />
                </span>
              </div>
            </Link>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
