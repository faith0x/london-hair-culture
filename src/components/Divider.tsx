import { motion } from "motion/react";

export function Divider() {
  return (
    <div className="relative bg-background py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl items-center gap-6 px-5"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border/70" />
        <svg
          width="56"
          height="20"
          viewBox="0 0 56 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary/70"
          aria-hidden="true"
        >
          <path
            d="M2 10 H16"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M40 10 H54"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M28 2 L34 10 L28 18 L22 10 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="28" cy="10" r="1.6" fill="currentColor" />
        </svg>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border/70" />
      </motion.div>
    </div>
  );
}
