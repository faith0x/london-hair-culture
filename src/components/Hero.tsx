import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {ArrowRight, MapPin } from "lucide-react";
import { ServicePeek } from "@/components/ServicePeek";
import { hero } from "@/lib/assets";

//const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-//
//01_23-54-24-806_anqn9v.jpg" };
//const heroFashionAsset = { url: //"https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" //};
//const modelPng = "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780393279/Picsart_26-06-02_10-40-
//192_fomkh8.webp";

// ─── Circle config ─────────────────────────────────────────────────
const { heroHomeAsset, heroFashionAsset, modelPng } = hero;
const CIRCLE_COLOR = "#4A4138";
const CIRCLES = [
  {
    // Layer 1 — back, largest; bleeds glow into raw background
    size: 820,
    // outer glow: wide + soft, bleeds farthest into dark bg
    outerGlow: "0 0 80px 40px rgba(239,224,190,0.18), 0 0 160px 80px rgba(239,224,190,0.07)",
    float: { y: [0, -16, 0],     duration: 9,  delay: 0   },
    parallax: [0, -22] as [number, number],
  },
  {
    // Layer 2 — mid
    size: 590,
    outerGlow: "0 0 60px 30px rgba(239,224,190,0.22)",
    float: { y: [0, 20, 0],      duration: 11, delay: 1.4 },
    parallax: [0, -50] as [number, number],
  },
  {
    // Layer 3 — front, smallest; sharpest, brightest outer ring
    size: 380,
    outerGlow: "0 0 45px 22px rgba(239,224,190,0.30)",
    float: { y: [0, -22, 8, 0],  duration: 13, delay: 0.7 },
    parallax: [0, -82] as [number, number],
  },
];

function CircleLayer({
  config,
  scrollY,
}: {
  config: (typeof CIRCLES)[number];
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  const yParallax = useTransform(scrollY, [0, 600], config.parallax);

  return (
    <motion.div
      style={{ y: yParallax }}
      // Shift up on desktop so circles sit near her head, not her waist
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        animate={{ y: config.float.y }}
        transition={{
          duration: config.float.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: config.float.delay,
        }}
        style={{
          width: config.size,
          height: config.size,
          borderRadius: "50%",
          backgroundColor: CIRCLE_COLOR,
          // Pure outer glow — no inset. The light radiates outward into the gap
          // between this circle and the smaller one on top.
          boxShadow: config.outerGlow,
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Model parallax — slower than deepest oval
  const yModel = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#1E1A16]"
    >
      {/* ── CIRCLE STACK (z-10) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: "translateY(-8%)" }}>
        {CIRCLES.map((circle, i) => (
          <CircleLayer key={i} config={circle} scrollY={scrollY} />
        ))}
      </div>

      {/* ── MODEL PNG (z-20) ── */}
      <motion.div
        style={{ y: yModel }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        {/* On mobile: contain from bottom. On desktop: cover+zoom so no gaps. */}
        <img
          src={modelPng}
          alt="Dazzle Me model portrait"
          className="h-full w-full select-none object-cover"
          style={{ objectPosition: "50% 100%" }}
          draggable={false}
        />
        {/* Ground fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1E1A16] via-[#1E1A16]/70 to-transparent" />
      </motion.div>

      {/* ── CONTENT (z-30) ── */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl text-center"
        >
          {/* Brand name — most pronounced */}
          <p
            className="font-display text-3xl font-bold tracking-[0.18em] uppercase sm:text-4xl"
            style={{
              color: "#EFE4C8",
              textShadow:
                "0 0 40px rgba(239,228,200,0.55), 0 2px 8px rgba(0,0,0,0.9)",
              letterSpacing: "0.22em",
            }}
          >
            Dazzle Me
          </p>

          <p
            className="mt-1 text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: "#B09D7A" }}
          >
            Hair &amp; Fashion
          </p>

          {/* Main headline */}
          <h1
            className="mt-7 font-display text-6xl font-semibold leading-[1.0] tracking-tight sm:text-7xl md:text-8xl"
            style={{
              color: "#F5EDDA",
              textShadow: "0 4px 24px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            <span className="block">Our crown,</span>
            <span className="block">our story.</span>
          </h1>

          {/* Sub-tagline */}
          <p
            className="mt-5 flex flex-col items-center gap-1 text-base font-medium tracking-widest sm:flex-row sm:justify-center sm:gap-5 sm:text-lg"
            style={{
              color: "#C4AA80",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)",
            }}
          >
            <span>Heritage hair.</span>
            <span aria-hidden className="hidden opacity-40 sm:inline">·</span>
            <span>Heritage fashion.</span>
          </p>

          {/* CTAs */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ServicePeek
              imageUrl={heroHomeAsset.url}
              label="Hair services"
              href="/hair"
              button={
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full px-8 text-sm font-semibold tracking-wider"
                  style={{
                    background: "#EFE4C8",
                    color: "#1E1A16",
                    boxShadow: "0 0 28px rgba(239,228,200,0.25)",
                  }}
                >
                  <Link to="/hair">Browse hair services →</Link>
                </Button>
              }
            />
            <ServicePeek
              imageUrl={heroFashionAsset.url}
              label="Fashion collective"
              href="/fashion"
              button={
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full border px-8 text-sm font-semibold tracking-wider backdrop-blur-sm"
                  style={{
                    background: "rgba(239,228,200,0.08)",
                    border: "1px solid rgba(239,228,200,0.25)",
                    color: "#EFE4C8",
                  }}
                >
                  <Link to="/fashion">Browse our fashion collective →</Link>
                </Button>
              }
            />
          </div>

          {/* Visit CTA Patch */}
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full border px-8 text-sm font-medium tracking-wider backdrop-blur-sm"
              style={{
                background: "rgba(239,228,200,0.06)",
                border: "1px solid rgba(239,228,200,0.18)",
                color: "#C4AA80",
              }}
            >
              <a href="#visit" className="flex items-center justify-center gap-2">
                <MapPin className="size-4" style={{ color: "#EFE4C8" }} />
                Visit us
                <ArrowRight className="size-3.5 opacity-80 text-gold" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
