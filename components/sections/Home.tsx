'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* ── Center content ── */}
      <div className="flex flex-col items-center justify-center w-full h-full pb-24 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 bg-white border border-black/[0.08] rounded-full px-4 py-1.5 text-[12.5px] font-semibold text-[#0A0A0A]/55 shadow-sm"
        >
          <span className="text-[#F472B6]">✦</span>
          UX Design Portfolio
          <span className="text-[#818CF8]">✦</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center leading-[0.93] tracking-tight select-none"
          style={{ fontSize: 'clamp(52px, 8.5vw, 112px)' }}
        >
          <span className="font-serif italic text-[#0A0A0A]">Designing with</span>
          <br />
          <span className="font-black text-[#0A0A0A]">curiosity</span>
          <span className="font-serif italic text-[#0A0A0A]">{' & care.'}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.5 }}
          className="mt-7 text-[14.5px] text-[#0A0A0A]/40 font-medium tracking-wide text-center max-w-sm"
        >
          Hi, I'm Jessica — a UX designer who loves craft, kawaii things, and making people smile.
        </motion.p>
      </div>
    </div>
  )
}
