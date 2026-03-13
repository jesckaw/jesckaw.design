"use client";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const line = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle bg glow */}
      <div
        className="absolute top-1/4 right-0 w-[45vw] h-[45vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%)" }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-8 md:px-12 w-full pt-24"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-xs tracking-widest uppercase text-muted mb-8 font-mono"
        >
          Designer & Creative — Est. 2024
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-ink font-light"
          >
            Crafting
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-ink font-light italic"
          >
            Stories
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-ink font-light"
          >
            Through Design<span className="text-accent">.</span>
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          variants={line}
          className="w-full h-px bg-stone origin-left mb-12"
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.p
            variants={fadeUp}
            className="text-muted font-body font-light text-base md:text-lg max-w-md leading-relaxed"
          >
            Brand identity, digital experiences, and visual narratives —
            built with intention and refined to feel inevitable.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-8">
            <a href="#work" className="group flex items-center gap-3 text-sm tracking-widest uppercase font-body text-ink">
              <span className="link-underline">View Work</span>
              <span className="w-8 h-px bg-ink group-hover:w-14 transition-all duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-12 bg-accent origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs tracking-widest uppercase text-muted font-mono">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
