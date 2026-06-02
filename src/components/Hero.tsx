import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ServicePeek } from "@/components/ServicePeek";

// Default placeholder URLs — replace with final assets when ready
const heroHomeAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780354485/Picsart_26-06-01_23-54-24-806_anqn9v.jpg" };
const heroFashionAsset = { url: "https://res.cloudinary.com/dnkzhdbo1/image/upload/v1780159998/9c997d9b24d502f0391cc3949ea0d7fd_dih3tg.jpg" };

export function Hero() {
  const containerRef = useRef<<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax offsets — each layer moves at different speeds
  const yBgCirclesFar = useTransform(scrollY, [0, 500], [0, -30]);
  const yBgCirclesMid = useTransform(scrollY, [0, 500], [0, -60]);
  const yBgCirclesClose = useTransform(scrollY, [0, 500], [0, -95]);
  const yModel = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section 
      id="top" 
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#2A2520] py-20"
    >
      {/* =========================================================================
          BACKGROUND LAYER: 3 STACKED OVAL SHADES (Dark cream base)
         ========================================================================= */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
          
          {/* Layer 1: Deepest / Largest Back Oval */}
          <motion.div 
            style={{ y: yBgCirclesFar }}
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute h-[500px] w-[500px] rounded-full bg-[#3D3530]/80 mix-blend-screen blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] sm:h-[700px] sm:w-[700px]"
          />

          {/* Layer 2: Middle Stacked Circle */}
          <motion.div 
            style={{ y: yBgCirclesMid }}
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 0.98, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute h-[400px] w-[400px] rounded-full bg-[#4A423A]/70 shadow-[0_50px_100px_rgba(0,0,0,0.7)] mix-blend-screen blur-sm sm:h-[550px] sm:w-[550px]"
          />

          {/* Layer 3: Foremost Stacked Circle */}
          <motion.div 
            style={{ y: yBgCirclesClose }}
            animate={{ 
              y: [0, -15, 0],
              x: [-5, 5, -5]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute h-[320px] w-[450px] rounded-[50%] bg-[#5C5349]/60 shadow-[0_60px_120px_rgba(0,0,0,0.8)] mix-blend-screen sm:h-[450px] sm:w-[620px]"
          />
        </div>
      </div>

      {/* =========================================================================
          MODEL LAYER: HERO IMAGE (Transparent background model)
         ========================================================================= */}
      <motion.div 
        style={{ y: yModel }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="1000537858.jpg" 
          alt="Heritage Craftsmanship Portrait" 
          className="h-full w-full object-cover object-center opacity-90 sm:w-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.startsWith(window.location.origin + '/')) {
              target.src = '1000537858.jpg';
            }
          }}
        />
        {/* Ground gradient blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#2A2520] via-[#2A2520]/80 to-transparent" />
      </motion.div>

      {/* =========================================================================
          FOREGROUND LAYER: TEXT CONTENT (No blur card — direct on image)
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 mx-auto max-w-3xl px-5 pt-28 pb-16 text-center"
      >
        <p className="font-display text-4xl font-semibold tracking-tight text-[#F4EFEA] sm:text-5xl md:text-6xl">
          Dazzle Me — Hair & Fashion
        </p>

        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[#F4EFEA] sm:text-6xl md:text-7xl">
          <span className="block">Our crown,</span>
          <span className="block">our story.</span>
        </h1>

        <p className="mt-6 flex flex-col items-center gap-1 font-display text-xl font-bold tracking-wide text-[#E8DFD3] sm:flex-row sm:justify-center sm:gap-4 sm:text-2xl">
          <span>Heritage hair.</span>
          <span aria-hidden className="hidden text-[#E8DFD3]/40 sm:inline">·</span>
          <span>Heritage fashion.</span>
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ServicePeek
            imageUrl={heroHomeAsset.url}
            label="Hair services"
            href="/hair"
            button={
              <Button asChild size="lg" variant="glass-dark" className="w-full rounded-full px-8 text-base">
                <Link to="/hair">
                  Browse hair services
                  <span className="ml-1">→</span>
                </Link>
              </Button>
            }
          />
          <ServicePeek
            imageUrl={heroFashionAsset.url}
            label="Fashion collective"
            href="/fashion"
            button={
              <Button asChild size="lg" variant="glass" className="w-full rounded-full px-8 text-base">
                <Link to="/fashion">
                  Browse our fashion collective
                  <span className="ml-1">→</span>
                </Link>
              </Button>
            }
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="glass" className="rounded-full px-10 text-base">
            <a href="#visit">Visit us</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
