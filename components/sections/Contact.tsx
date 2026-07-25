'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Email',    value: 'jessicamei.design@gmail.com',          href: 'mailto:jessicamei.design@gmail.com',    emoji: '✉️' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jessica-mei',          href: 'https://www.linkedin.com/in/jessica-mei/', emoji: '💼' },
]

export default function Contact() {
  return (
    <div className="w-full min-h-screen pt-24 sm:pt-28 md:pt-36 page-x flex flex-col">
      <div className="flex flex-col items-center text-center pb-28 my-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic leading-[0.92] tracking-tight mb-5"
        style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
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
        I'm currently open to new opportunities and collaborations. Just say hi, it's easy. 🌸
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
        Designed & built by Jessica Mei ✦ 2026
      </motion.p>
      </div>
    </div>
  )
}
