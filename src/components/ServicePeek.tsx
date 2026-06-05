import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  /** The Browse CTA button */
  button: ReactNode;
  imageUrl: string;
  label: string;
  href: "/hair" | "/fashion";
};

/**
 * Wraps a Browse CTA with a contextual image guide.
 * - Desktop (sm+): hover/focus expands an inline panel with the image (left)
 * - Mobile: Clean, un-cluttered interactive component container.
 */
export function ServicePeek({ button, imageUrl, label, href }: Props) {
  return (
    <div className="flex flex-col items-center sm:items-stretch w-full">
      {button}

      {/* Desktop: hover-expand inline panel */}
      <div className="group/peek relative mt-3 hidden sm:block w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-foreground/10"
        />
        <Link
          to={href}
          aria-label={`View ${label}`}
          className="group/panel relative block overflow-hidden rounded-2xl border border-foreground/10 bg-card/40 backdrop-blur-md transition-[max-height,opacity,transform] duration-500 ease-out max-h-0 opacity-0 -translate-y-1 group-hover/peek:max-h-48 group-hover/peek:opacity-100 group-hover/peek:translate-y-0 focus-within:max-h-48 focus-within:opacity-100 focus-within:translate-y-0"
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
    </div>
  );
}
