import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ServicePeek } from "@/components/ServicePeek";

const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" };
const heroFashionAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" };
const modelPng = "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780393279/Picsart_26-06-02_10-40-27-192_fomkh8.webp";

// ─── Oval layer config ─────────────────────────────────────────────
// Back → Front: larger/darker → smaller/brighter
const OVALS = [
  {
    // Layer 1 — back, largest, faintest
    size: "w-[680px] h-[520px] sm:w-[820px] sm:h-[620px]",
    bg: "bg-[#3A332A]",
    // Inward glow: subtle warm crème ring
    shadow: "shadow-[inset_0_0_40px_6px_rgba(239,233,217,0.10),0_60px_120px_-20px_rgba(0,0,0,0.85)]",
    // Outer ambient glow against background — matches last oval spec (applied to all, strongest on back)
    outerGlow: "",
    float: { y: [0, -14, 0], duration: 9, delay: 0 },
    parallax: [0, -25],
  },
  {
    // Layer 2 — mid, noticeably lighter
    size: "w-[520px] h-[400px] sm:w-[640px] sm:h-[490px]",
    bg: "bg-[#4A4137]",
    shadow: "shadow-[inset_0_0_50px_10px_rgba(239,233,217,0.16),0_50px_100px_-16px_rgba(0,0,0,0.80)]",
    outerGlow: "",
    float: { y: [0, 18, 0], duration: 11, delay: 1.2 },
    parallax: [0, -50],
  },
  {
    // Layer 3 — front, smallest, brightest, glows outward against background
    size: "w-[380px] h-[290px] sm:w-[480px] sm:h-[360px]",
    bg: "bg-[#5E5346]",
    shadow: "shadow-[inset_0_0_60px_14px_rgba(239,233,217,0.22),0_0_80px_30px_rgba(239,233,217,0.07),0_40px_80px_-12px_rgba(0,0,0,0.75)]",
    outerGlow: "",
    float: { y: [0, -20, 6, 0], duration: 13, delay: 0.6 },
    parallax: [0, -80],
  },
];

function OvalLayer({
  config,
  scrollY,
}: {
  config: (typeof OVALS)[number];
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  const yParallax = useTransform(scrollY, [0, 600], config.parallax);

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
        className={`
          rounded-[50%]
          ${config.size}
          ${config.bg}
          ${config.shadow}
        `}
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
      {/* ── OVAL STACK (z-10) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        {OVALS.map((oval, i) => (
          <OvalLayer key={i} config={oval} scrollY={scrollY} />
        ))}
      </div>

      {/* ── MODEL PNG (z-20) ── */}
      <motion.div
        style={{ y: yModel }}
        className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none"
      >
        <img
          src={modelPng}
          alt="Dazzle Me model portrait"
          className="h-full w-auto max-w-none object-contain object-bottom select-none"
          draggable={false}
        />
        {/* Ground fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1E1A16] via-[#1E1A16]/60 to-transparent" />
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

          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full border px-10 text-sm font-medium tracking-wider backdrop-blur-sm"
              style={{
                background: "rgba(239,228,200,0.06)",
                border: "1px solid rgba(239,228,200,0.18)",
                color: "#C4AA80",
              }}
            >
              <a href="#visit">Visit us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
