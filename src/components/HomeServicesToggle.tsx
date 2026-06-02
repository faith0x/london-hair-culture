import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useServiceFocus, type ServiceFocus } from "@/components/ServiceFocusContext";
import { serviceAssets } from "@/lib/assets";

const defaultPlaceholder = "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop";

const categories: {
  id: ServiceFocus;
  label: string;
  heading: string;
  tagline: string;
  href: "/hair" | "/fashion";
}[] = [
  { id: "hair", label: "Hair", heading: "Heritage hair", tagline: "Braids, wigs, locs & extensions", href: "/hair" },
  { id: "fashion", label: "Fashion", heading: "Heritage fashion", tagline: "Custom African fashion & alterations", href: "/fashion" },
];

const extraServiceDetails: Record<string, { duration: string; prep: string; steps: string[] }> = {
  "Braiding": { duration: "2–6 hrs", prep: "Freshly washed & blown out", steps: ["Custom parting map", "Tension-free installation", "Edges treatment & oiling"] },
  "Wig Making": { duration: "3–5 days turnaround", prep: "Head measurements required", steps: ["Cap sizing configuration", "Hand-tied or machine sewn", "Custom hairline pre-plucking"] },
  "Wig Revamping": { duration: "2–3 days", prep: "Drop off old unit", steps: ["Deep clarifying detox wash", "Lace cleaning & minor repairs", "Premium restyling & hydration"] },
  "Dreadlocks": { duration: "2–4 hrs", prep: "Clean hair, no heavy oils", steps: ["Section mapping", "Organic interlocking / twisting", "Scalp hydration massage"] },
  "Weaving": { duration: "2.5–4 hrs", prep: "Hair washed & dried", steps: ["Protective braid pattern base", "Secure track installation", "Flawless cut, style & leave-out blend"] },
  "Hair Extensions": { duration: "2–3 hrs", prep: "Consultation required", steps: ["Texture match analysis", "Safe, discreet attachment fitting", "Blending cut & volume styling"] },
  "Custom-Made Clothing": { duration: "1–2 weeks", prep: "Fitting appointment needed", steps: ["Style & fabric consultation", "Precise measurement profiling", "Bespoke tailoring & final adjustments"] },
  "Alterations": { duration: "2–5 days", prep: "Bring the original garment", steps: ["Pinning & fit assessment", "Deconstruction & expert reshaping", "Reinforced premium restitching"] },
  "African Fashion": { duration: "1–2 weeks", prep: "Fabric selection choice", steps: ["Traditional motif alignment", "Heritage-focused pattern cutting", "Custom premium inner lining"] }
};


export const salon = {
  name: "Dazzle Me",
  fullName: "Dazzle Me — Hair & Fashion",
  tagline: "Hair & African Fashion in Middlesbrough",
  addressLine: "92 Newport Road",
  city: "Middlesbrough",
  postcode: "TS1",
  phoneIntl: "447000000000",
  phoneDisplay: "+44 7000 000000",
  hours: [
    { day: "Mon – Fri", time: "9:00 — 19:00" },
    { day: "Saturday", time: "9:00 — 18:00" },
    { day: "Sunday", time: "By appointment" },
  ],
} as const;

export const hairServices = [
  { name: "Braiding", blurb: "Box braids, knotless, cornrows, feed-ins, twists — neat parts, clean tension, styles that last." },
  { name: "Wig Making", blurb: "Custom wigs built to your measurements, density and texture — natural-looking, comfortable, made to last." },
  { name: "Wig Revamping", blurb: "Bring an old wig back to life — washing, restyling, replacing lace and refreshing the parting." },
  { name: "Dreadlocks", blurb: "Starts, retwists and maintenance for healthy, well-kept locs in styles that suit you." },
  { name: "Weaving", blurb: "Sew-ins and weave installs with a flawless blend and a leave-out that looks effortlessly natural." },
  { name: "Hair Extensions", blurb: "Discreet, secure extensions for added length and volume — fitted with care for your natural hair." },
] as const;

export const fashionServices = [
  { name: "Custom-Made Clothing", blurb: "Bespoke garments designed and tailored to your measurements — every seam considered, every detail intentional." },
  { name: "Alterations", blurb: "Expert reshaping and resizing so the pieces you already love fit you perfectly." },
  { name: "African Fashion", blurb: "Ankara, lace and wax-print pieces — gowns, two-pieces and occasion-wear crafted with heritage and care." },
] as const;

/* ─── Small Rune Diamond (sits at line ends) ─── */
function Rune({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary/70 flex-none ${className}`}
      aria-hidden="true"
    >
      <path d="M10 2 L16 10 L10 18 L4 10 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="10" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function HomeServicesToggle() {
  const { active, setActive } = useServiceFocus();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const items = active === "hair" ? hairServices.slice(0, 4) : fashionServices;
  const current = categories.find((c) => c.id === active)!;

  const handleScrollToMap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const mapSection = document.getElementById("contact") || document.getElementById("footer") || document.querySelector("footer");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What we do</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">Two crafts, one studio</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Tap any service card to view preparation details, session durations, or to instantly inquire via WhatsApp.</p>
        </Reveal>

        {/* 3D Tactile Slider Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative inline-flex rounded-full border border-neutral-800 bg-[#161412] p-1.5 shadow-[inset_0_3px_6px_rgba(0,0,0,0.6),0_10px_25px_-5px_rgba(0,0,0,0.3)] backdrop-blur-md">
            {categories.map((c) => {
              const isSelected = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActive(c.id);
                    setExpandedService(null);
                  }}
                  className={`relative z-10 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 sm:px-9 ${
                    isSelected
                      ? "text-[#1E1A16] font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="toggle-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className="absolute inset-0 -z-10 rounded-full bg-[#EFE9E1] shadow-[0_4px_14px_rgba(239,233,225,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]"
                    />
                  )}
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex h-12 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={current.heading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {current.heading}
            </motion.h3>
          </AnimatePresence>
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground">{current.tagline}</p>

{/* Heritage Diamond Divider — Detailed Ends, Fading to Center */}
<div className="mt-10 flex items-center justify-between w-full max-w-2xl mx-auto px-4 text-foreground/40 pointer-events-none select-none">
  
  {/* LEFT DIAMOND EMBLEM (From 1000538075.jpg) */}
  <div className="flex items-center flex-none">
    {/* Outer accent whisker */}
    <span className="w-3 h-[1px] bg-current opacity-50" />
    {/* Diamond with centered dynamic dot core */}
    <div className="relative w-3 h-3 mx-2 border border-current rotate-45 flex items-center justify-center">
      <span className="absolute w-1 h-1 bg-current rounded-full" />
    </div>
    {/* Inner accent whisker */}
    <span className="w-3 h-[1px] bg-current opacity-50" />
  </div>
  
  {/* Left Track: Starts solid from emblem point, completely fades out to center */}
  <div className="h-[1px] flex-1 bg-gradient-to-r from-border via-border/30 to-transparent ml-2" />
  
  {/* Central Fade Cushion Gap for Breathing Space */}
  <div className="w-16 flex-none" />
  
  {/* Right Track: Starts transparent at center, returns to solid at emblem point */}
  <div className="h-[1px] flex-1 bg-gradient-to-l from-border via-border/30 to-transparent mr-2" />
  
  {/* RIGHT DIAMOND EMBLEM (From 1000538075.jpg) */}
  <div className="flex items-center flex-none">
    {/* Inner accent whisker */}
    <span className="w-3 h-[1px] bg-current opacity-50" />
    {/* Diamond with centered dynamic dot core */}
    <div className="relative w-3 h-3 mx-2 border border-current rotate-45 flex items-center justify-center">
      <span className="absolute w-1 h-1 bg-current rounded-full" />
    </div>
    {/* Outer accent whisker */}
    <span className="w-3 h-[1px] bg-current opacity-50" />
  </div>

</div>




        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((service) => {
              const imageUrl = serviceAssets[service.name] || defaultPlaceholder;
              const isExpanded = expandedService === service.name;
              const details = extraServiceDetails[service.name];

              const serviceText = encodeURIComponent(`Hi Dazzle Me! I see your "${service.name}" service on your site and want to check availability.`);
              const customWhatsAppUrl = `https://wa.me/${salon.phoneIntl}?text=${serviceText}`;

              return (
                <motion.article
                  key={service.name}
                  layout="position"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setExpandedService(isExpanded ? null : service.name)}
                  className={`group relative flex w-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer bg-card ${
                    isExpanded
                      ? "border-primary/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-primary/20"
                      : "border-border hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                  }`}
                >
                  <div className="flex h-40 w-full flex-row">
                    <div className="relative h-full flex-none w-36 min-w-36 overflow-hidden sm:w-48 sm:min-w-48">
                      <motion.img
                        layout
                        src={imageUrl}
                        alt={service.name}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-card z-20" />
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col justify-center p-5 pl-2 pr-6">
                      <h4 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                        {service.name}
                      </h4>
                      <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {service.blurb}
                      </p>

                      {!isExpanded && (
                        <span className="mt-2 self-start text-[10px] font-semibold uppercase tracking-wider text-primary/70 opacity-0 transition-opacity group-hover:opacity-100">
                          Tap to view details ↓
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Half: Interactive Utility Drawer on Expansion */}
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      /* Swapped to a solid, highly-saturated warm honey-biscuit tone with darker borders */
      className="border-t border-[#CBB689]/40 bg-[#E6D2B1] px-6 py-5 overflow-hidden"
    >
      {/* internal content dividers shifted slightly darker to stay legible against the rich background */}
      <div className="grid grid-cols-2 gap-4 text-xs border-b border-[#CBB689]/50 pb-4">
        <div>
          <span className="block font-medium text-neutral-600">Est. Duration</span>
          <span className="text-neutral-900 font-semibold">{details?.duration || "Variable"}</span>
        </div>
        <div>
          <span className="block font-medium text-neutral-600">Preparation</span>
          <span className="text-neutral-900 font-semibold">{details?.prep || "Standard"}</span>
        </div>
      </div>

      <div className="mt-4">
        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Service Execution:</span>
        <ul className="space-y-1.5">
          {details?.steps.map((step, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-neutral-800 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary flex-none" />
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Custom Interactive Floating Action Ovals */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <a
          href={customWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 min-w-[140px] rounded-full bg-foreground px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-background shadow-md transition-transform active:scale-95 hover:bg-foreground/90"
        >
          Inquire via WhatsApp
        </a>
        
        <button
          onClick={handleScrollToMap}
          className="rounded-full border border-foreground/10 bg-card px-5 py-2.5 text-xs font-medium tracking-wide text-foreground transition-all hover:bg-neutral-100"
        >
          Visit us (Map)
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>


                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <Link to={current.href} className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-foreground/10">
            See all {current.label.toLowerCase()} services
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
