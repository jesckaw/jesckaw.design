"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { label: "Instagram", href: "https://instagram.com/jesckaw" },
  { label: "Behance", href: "https://behance.net/jesckaw" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jesckaw" },
  { label: "Dribbble", href: "https://dribbble.com/jesckaw" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-40 bg-ink text-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Main CTA */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase text-muted font-mono mb-8"
          >
            Let's Work Together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-cream leading-[0.9] mb-12"
          >
            Have a project
            <br />
            in <span className="italic text-accent">mind?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="mailto:hello@jesckaw.design"
              className="group inline-flex items-center gap-6 text-cream"
            >
              <span className="font-display text-2xl md:text-4xl font-light link-underline after:bg-accent">
                hello@jesckaw.design
              </span>
              <motion.span
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center"
                whileHover={{ scale: 1.2, borderColor: "#C9A96E" }}
                transition={{ duration: 0.3 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-16" />

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          {/* Logo */}
          <span className="font-display text-2xl text-cream">
            Jesckaw<span className="text-accent">.</span>
          </span>

          {/* Socials */}
          <div className="flex flex-wrap gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline after:bg-accent text-sm tracking-widest uppercase font-mono text-muted hover:text-cream transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted font-mono text-xs">
            © {new Date().getFullYear()} Jesckaw Design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
