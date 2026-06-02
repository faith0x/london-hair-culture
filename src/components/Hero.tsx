import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for smooth parallax layers
  const { scrollY } = useScroll();
  
  // Each layer moves at a slightly different speed relative to scroll
  const yBgCirclesFar = useTransform(scrollY, [0, 500], [0, -40]);
  const yBgCirclesMid = useTransform(scrollY, [0, 500], [0, -80]);
  const yBgCirclesClose = useTransform(scrollY, [0, 500], [0, -120]);
  const yModel = useTransform(scrollY, [0, 500], [0, -30]);
  const yTextCard = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <section 
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#1E1A16] py-20"
    >
      {/* =========================================================================
          BACKGROUND PARALLAX LAYER: STACKED FLOATING CREAM SHADES
          Darker base background color (#1E1A16) keeps header white text readable.
         ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Deepest/Largest Oval Shade */}
        <motion.div 
          style={{ y: yBgCirclesFar }}
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute left-[10%] top-[15%] h-[400px] w-[500px] rounded-[50%] bg-[#EFE9E1]/10 mix-blend-screen blur-md sm:h-[600px] sm:w-[750px]"
        />

        {/* Layer 2: Middle Stacked Circle (Has heavy shadow cast onto Layer 1 underneath) */}
        <motion.div 
          style={{ y: yBgCirclesMid }}
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute right-[5%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#E8DFD3]/15 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.75)] mix-blend-screen blur-sm sm:h-[500px] sm:w-[500px]"
        />

        {/* Layer 3: Foremost Stacked Circle (Heavy shadow cast down onto Layer 2) */}
        <motion.div 
          style={{ y: yBgCirclesClose }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute left-[25%] bottom-[10%] h-[280px] w-[400px] rounded-[50%] bg-[#F4EFEA]/20 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.85)] mix-blend-screen sm:h-[420px] sm:w-[600px]"
        />
      </div>

      {/* =========================================================================
          MODEL LAYER: CUTOUT IMAGE (1000537853.jpg Placeholder)
          Sits beautifully in front of the floating shades.
         ========================================================================= */}
      <motion.div 
        style={{ y: yModel }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <img 
          src="/1000537853.jpg" 
          alt="Heritage Craftsmanship Portrait" 
          className="h-full w-full object-cover object-center opacity-85 mix-blend-normal sm:w-auto"
        />
        {/* Subtle ground dynamic fade blend at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#1E1A16] to-transparent" />
      </motion.div>

      {/* =========================================================================
          FOREGROUND LAYER: GLASSMORPHISM CONTENT CARD
         ========================================================================= */}
      <motion.div 
        style={{ y: yTextCard }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto max-w-xl px-6 text-center"
      >
        <div className="rounded-3xl border border-white/10 bg-[#1E1A16]/40 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
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
