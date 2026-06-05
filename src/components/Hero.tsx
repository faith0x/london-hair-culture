import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { ServicePeek } from "@/components/ServicePeek";
import { hero } from "@/lib/assets";

const { heroHomeAsset, heroFashionAsset, modelPng } = hero;
const CIRCLE_COLOR = "#4A4138";

// Config containing base settings for our multi-layer aura stack
const CIRCLES = [
  {
    size: 820,
    baseGlowOpacity: 0.18,
    boostGlowOpacity: 0.32,
    baseRadius: 80,
    boostRadius: 140,
    float: { y: [0, -16, 0], duration: 9, delay: 0 },
    parallax: [0, -22] as [number, number],
  },
  {
    size: 590,
    baseGlowOpacity: 0.22,
    boostGlowOpacity: 0.40,
    baseRadius: 60,
    boostRadius: 100,
    float: { y: [0, 20, 0], duration: 11, delay: 1.4 },
    parallax: [0, -50] as [number, number],
  },
  {
    size: 380,
    baseGlowOpacity: 0.30,
    boostGlowOpacity: 0.55,
    baseRadius: 45,
    boostRadius: 75,
    float: { y: [0, -22, 8, 0], duration: 13, delay: 0.7 },
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

  // Dynamic Scroll Mapping: Intensify blur spread and alpha opacity as user scrolls down
  const glowRadius = useTransform(scrollY, [0, 500], [config.baseRadius, config.boostRadius]);
  const glowOpacity = useTransform(scrollY, [0, 500], [config.baseGlowOpacity, config.boostGlowOpacity]);
  
  // Safe multi-value transformer that prevents container build environments from throwing token errors
  const boxShadow = useTransform(
    () => `0 0 ${glowRadius.get()}px ${glowRadius.get() / 2}px rgba(239, 224, 190, ${glowOpacity.get()})`
  );

  return (
    <motion.div
      style={{ y: yParallax }}
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
          boxShadow: boxShadow,
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yModel = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#1E1A16]"
    >
      {/* ── CIRCLE STACK ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: "translateY(-8%)" }}>
        {CIRCLES.map((circle, i) => (
          <CircleLayer key={i} config={circle} scrollY={scrollY} />
        ))}
      </div>

      {/* ── MODEL PNG ── */}
      <motion.div
        style={{ y: yModel }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <img
          src={modelPng}
          alt="Dazzle Me model portrait"
          className="h-full w-full select-none object-cover"
          style={{ objectPosition: "50% 100%" }}
          draggable={false}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1E1A16] via-[#1E1A16]/70 to-transparent" />
      </motion.div>

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl text-center"
        >
          {/* Main Brand Identifier */}
          <p
            className="font-display text-3xl font-bold tracking-[0.18em] uppercase sm:text-4xl"
            style={{
              color: "#EFE4C8",
              textShadow: "0 0 40px rgba(239,228,200,0.55), 0 2px 8px rgba(0,0,0,0.9)",
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

          {/* Elevated Luxury Copy Intent */}
          <h1
            className="mt-7 font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
            style={{
              color: "#F5EDDA",
              textShadow: "0 4px 24px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            <span className="block">Expert Styling,</span>
            <span className="block">Custom Tailoring.</span>
          </h1>

          {/* Explanatory Sub-tagline utilizing exact owner keywords */}
          <p
            className="mt-5 flex flex-col items-center gap-1 text-sm font-medium tracking-widest sm:flex-row sm:justify-center sm:gap-4 sm:text-base"
            style={{
              color: "#C4AA80",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)",
            }}
          >
            <span>Professional Hair Styling</span>
            <span aria-hidden className="hidden opacity-40 sm:inline">·</span>
            <span>Custom Cloth Sewing Services</span>
          </p>

          {/* Service Links Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ServicePeek
              imageUrl={heroHomeAsset.url}
              label="Hair services"
              href="/hair"
              button={
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full border px-8 text-sm font-semibold tracking-wider backdrop-blur-md"
                  style={{
                    background: "rgba(239,228,200,0.08)",
                    border: "1px solid rgba(239,228,200,0.25)",
                    color: "#EFE4C8",
                  }}
                >
                  <Link to="/hair">Browse hair services →</Link>
                </Button>
              }
            />
            <ServicePeek
              imageUrl={heroFashionAsset.url}
              label="Fashion services"
              href="/fashion"
              button={
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full border px-8 text-sm font-semibold tracking-wider backdrop-blur-md"
                  style={{
                    background: "rgba(239,228,200,0.08)",
                    border: "1px solid rgba(239,228,200,0.25)",
                    color: "#EFE4C8",
                  }}
                >
                  <Link to="/fashion">Browse fashion services →</Link>
                </Button>
              }
            />
          </div>

          {/* Solidified High-Contrast Visit Component Anchor Link */}
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-sm font-semibold tracking-wider transition-transform active:scale-95"
              style={{
                background: "#EFE4C8",
                color: "#1E1A16",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <a href="#visit" className="flex items-center justify-center gap-2">
                <MapPin className="size-4" />
                Visit us
                <ArrowRight className="size-3.5 opacity-90" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
