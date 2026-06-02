import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Clean parallax offsets
  const yBgCirclesFar = useTransform(scrollY, [0, 500], [0, -30]);
  const yBgCirclesMid = useTransform(scrollY, [0, 500], [0, -60]);
  const yBgCirclesClose = useTransform(scrollY, [0, 500], [0, -95]);
  const yModel = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#1E1A16] py-20"
    >
      {/* =========================================================================
          BACKGROUND LAYER: CENTER-STACKED FLOATING OVAL SHADES
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
            className="absolute h-[500px] w-[500px] rounded-full bg-[#EFE9E1]/5 mix-blend-screen blur-xl sm:h-[700px] sm:w-[700px]"
          />

          {/* Layer 2: Middle Stacked Circle (Casts heavy shadow down onto Layer 1) */}
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
            className="absolute h-[400px] w-[400px] rounded-full bg-[#E8DFD3]/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] mix-blend-screen blur-sm sm:h-[550px] sm:w-[550px]"
          />

          {/* Layer 3: Foremost Stacked Circle (Casts heavy shadow down onto Layer 2) */}
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
            className="absolute h-[320px] w-[450px] rounded-[50%] bg-[#F4EFEA]/15 shadow-[0_60px_120px_rgba(0,0,0,0.9)] mix-blend-screen sm:h-[450px] sm:w-[620px]"
          />
        </div>
      </div>

      {/* =========================================================================
          MODEL LAYER: CUTOUT IMAGE (Forced to visibility via higher z-index)
         ========================================================================= */}
      <motion.div 
        style={{ y: yModel }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="1000537853.jpg" 
          alt="Heritage Craftsmanship Portrait" 
          className="h-full w-full object-cover object-center opacity-90 sm:w-auto"
          onError={(e) => {
            // Fallback just in case Bolt is choking on the root slash pathing
            const target = e.target as HTMLImageElement;
            if (target.src.startsWith(window.location.origin + '/')) {
              target.src = '1000537853.jpg';
            }
          }}
        />
        {/* Ground gradient blend */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1E1A16] via-[#1E1A16]/80 to-transparent" />
      </motion.div>

      {/* =========================================================================
          FOREGROUND LAYER: GLASSMORPHISM CONTENT CARD
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 mx-auto max-w-xl px-6 text-center"
      >
        <div className="rounded-3xl border border-white/10 bg-[#1E1A16]/30 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#EFE9E1]/80">
            Dazzle Me — Hair & Fashion
          </span>
          
          <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-[#F4EFEA] sm:text-5xl">
            Our crown,<br />our story.
          </h1>
          
          <p className="mt-4 text-sm font-medium tracking-wide text-[#E8DFD3]/70">
            Heritage hair. <span className="mx-2 opacity-40">•</span> Heritage fashion.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button className="rounded-full bg-[#EFE9E1] px-6 py-3 text-xs font-semibold tracking-wider text-[#1E1A16] transition-transform active:scale-95 hover:bg-white">
              Browse hair services →
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold tracking-wider text-[#F4EFEA] backdrop-blur-sm transition-colors hover:bg-white/10">
              Browse our fashion collective
            </button>
          </div>

          <button className="mt-4 rounded-full bg-[#E8DFD3]/20 px-8 py-2.5 text-xs font-medium text-[#F4EFEA] transition-colors hover:bg-[#E8DFD3]/30">
            Visit us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
