'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Email',     value: 'hello@jesckaw.design',          href: 'mailto:hello@jesckaw.design', emoji: '✉️' },
  { label: 'LinkedIn',  value: 'linkedin.com/in/jesckaw',        href: '#',                           emoji: '💼' },
  { label: 'Dribbble',  value: 'dribbble.com/jesckaw',           href: '#',                           emoji: '🏀' },
  { label: 'Instagram', value: '@jesckaw',                        href: '#',                           emoji: '🌸' },
]

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-28 px-8 text-center">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-4"
      >
        Contact
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic leading-[0.92] tracking-tight mb-5"
        style={{ fontSize: 'clamp(48px, 7.5vw, 100px)' }}
      >
        {"Let's make"}
        <br />
        <span className="not-italic font-black font-sans">something</span>
        <br />
        {'beautiful.'}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[15px] text-[#0A0A0A]/40 font-medium max-w-sm mb-12"
      >
        I'm currently open to new opportunities and collaborations. Say hi — I don't bite! 🌸
      </motion.p>

      {/* Links */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.07 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between bg-white border border-black/[0.07] rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-[20px]">{link.emoji}</span>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#0A0A0A]/35 uppercase tracking-wide">{link.label}</p>
                <p className="text-[13px] font-semibold text-[#0A0A0A]/70">{link.value}</p>
              </div>
            </div>
            <span className="text-[#0A0A0A]/25 group-hover:text-[#F472B6] group-hover:translate-x-1 transition-all text-[16px]">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 text-[12px] text-[#0A0A0A]/25 font-medium"
      >
        Designed & built by Jessica ✦ 2024
      </motion.p>
    </div>
  )
}
