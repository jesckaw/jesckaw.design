'use client'

import { motion } from 'framer-motion'

const experience = [
  { company: 'Aura Finance', role: 'Product designer', year: '2024– 2026' },
  { company: 'Aibao', role: 'Brand designer', year: '2025' },
  { company: 'Hooli', role: 'Product designer', year: '2023' },
  { company: 'Noteable', role: 'Product designer', year: '2022' },
]

function Sparkle({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0 C12 0 13.2 9.2 14.8 10.8 C16.4 12.4 24 12 24 12 C24 12 16.4 11.6 14.8 13.2 C13.2 14.8 12 24 12 24 C12 24 10.8 14.8 9.2 13.2 C7.6 11.6 0 12 0 12 C0 12 7.6 12.4 9.2 10.8 C10.8 9.2 12 0 12 0 Z" />
    </svg>
  )
}

export default function About() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <div className="w-full h-full overflow-y-auto pb-32 pt-24 sm:pt-28 md:pt-36 px-6 sm:px-10 md:px-16">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0.08)}
        className="font-sans font-bold leading-tight mb-8"
        style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
      >
        Hi again, I'm{' '}
        <span className="font-serif italic font-normal">Jessica</span>
      </motion.h2>

      {/* Two cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl">
        {/* Left card — bio + blob */}
        <motion.div {...fadeUp(0.18)} className="bg-white rounded-3xl p-5 border border-black/[0.07] shadow-sm flex flex-col justify-between min-h-[220px]">
          <p className="text-[14px] leading-[1.5] text-[#0A0A0A]/70 font-medium">
            A product designer in the<br />San Francisco Bay Area
          </p>
          {/* Blob shape */}
          <div className="flex justify-center items-center mt-4">
            <div className="relative w-36 h-36">
              {/* 4-lobed cloud using overlapping circles */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#A8CFDF]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#A8CFDF]" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#A8CFDF]" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#A8CFDF]" />
              <div className="absolute inset-6 rounded-full bg-[#A8CFDF]" />
              {/* Sparkle star */}
              <div className="absolute bottom-3 right-3 z-10">
                <Sparkle size={36} className="text-[#B44EC4]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right card — sparkles + current stack badge */}
        <motion.div {...fadeUp(0.25)} className="bg-white rounded-3xl border border-black/[0.07] shadow-sm flex items-center justify-center min-h-[220px] overflow-hidden">
          <div className="relative w-full flex items-center justify-center" style={{ height: 220 }}>
            {/* Sparkle grid */}
            <div className="grid grid-cols-4 gap-4 absolute inset-4">
              {[14,20,16,14, 22,14,14,20, 14,18,16,14].map((size, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Sparkle size={size} className="text-[#B44EC4]" />
                </div>
              ))}
            </div>
            {/* Current stack badge */}
            <div className="relative z-10 bg-[#D6EBF5] text-[#0A0A0A]/70 text-[12px] font-medium px-4 py-1.5 rounded-full border border-[#A8CFDF]/50">
              current stack
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <motion.div {...fadeUp(0.25)} className="max-w-2xl mb-14">
        <h3 className="font-sans font-bold text-[20px] text-[#0A0A0A] mb-0.5">My experience</h3>
        <p className="font-serif italic text-[15px] text-[#0A0A0A]/55 mb-5">
          in Product, Graphic, and more
        </p>
        <div className="divide-y divide-black/[0.08]">
          {experience.map(({ company, role, year }, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline justify-between py-3.5"
            >
              <span className="text-[14px] text-[#0A0A0A]/85">
                <strong className="font-bold">{company}</strong>
                <span className="font-normal text-[#0A0A0A]/55">, {role}</span>
              </span>
              <span className="text-[13px] font-semibold text-[#0A0A0A]/60 ml-4 shrink-0">{year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Outside of design */}
      <motion.div {...fadeUp(0.45)} className="max-w-2xl">
        <h3 className="font-sans font-bold text-[20px] text-[#0A0A0A] mb-5">
          Outside of <span className="font-serif italic font-normal">design</span>
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square bg-[#D9D9D9]/60 rounded-2xl"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
