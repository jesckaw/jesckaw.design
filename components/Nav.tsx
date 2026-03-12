"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(249,246,241,0)", "rgba(249,246,241,0.95)"]);
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(232,227,219,0)", "rgba(232,227,219,1)"]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: navBg, borderBottomColor: navBorder, borderBottomWidth: "1px", borderBottomStyle: "solid" }}
    >
      <nav className="max-w-7xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display text-xl tracking-wide text-ink"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Jesckaw<span className="text-accent">.</span>
        </motion.a>

        {/* Links */}
        <motion.ul
          className="hidden md:flex items-center gap-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="link-underline text-sm tracking-widest uppercase font-body text-muted hover:text-ink transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.a
          href="mailto:hello@jesckaw.design"
          className="hidden md:flex items-center gap-2 text-sm font-body text-ink border border-ink px-5 py-2 hover:bg-ink hover:text-cream transition-all duration-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's Talk
        </motion.a>
      </nav>
    </motion.header>
  );
}
