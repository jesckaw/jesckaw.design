"use client";
import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", href: "https://instagram.com/jesckaw" },
  { label: "Behance", href: "https://behance.net/jesckaw" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jesckaw" },
  { label: "Dribbble", href: "https://dribbble.com/jesckaw" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-stone">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Main CTA */}
        <div className="mb-24">
          <p className="text-xs tracking-widest uppercase text-muted font-mono mb-8">
            Let's Work Together
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-light text-ink leading-[0.9] mb-12">
            Have a project
            <br />
            in <span className="italic text-accent">mind?</span>
          </h2>

          <a
            href="mailto:hello@jesckaw.design"
            className="group inline-flex items-center gap-6 text-ink"
          >
            <span className="font-display text-2xl md:text-4xl font-light link-underline after:bg-accent">
              hello@jesckaw.design
            </span>
            <motion.span
              className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, borderColor: "#C9A96E" }}
              transition={{ duration: 0.3 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-ink/10 mb-16" />

        {/* Footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <span className="font-display text-2xl text-ink">
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
                className="link-underline after:bg-accent text-sm tracking-widest uppercase font-mono text-muted hover:text-ink transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted font-mono text-xs">
            © {new Date().getFullYear()} Jesckaw Design
          </p>
        </div>
      </div>
    </section>
  );
}
