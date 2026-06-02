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
