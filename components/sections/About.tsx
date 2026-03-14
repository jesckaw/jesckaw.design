'use client'

import { motion } from 'framer-motion'

const skills = [
  'Figma', 'Prototyping', 'User Research', 'Illustration',
  'Brand Design', 'Motion Design', 'Design Systems', 'Typography',
]

const facts = [
  { label: 'Based in', value: 'Los Angeles, CA' },
  { label: 'Currently', value: 'Open to opportunities' },
  { label: 'Education', value: 'BFA in Graphic Design' },
  { label: 'Loves', value: 'Sanrio, matcha & pixels' },
]

export default function About() {
  return (
    <div className="w-full h-full overflow-y-auto pb-32 pt-16 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-3"
      >
        About
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic leading-[1] tracking-tight mb-10"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        Nice to{' '}
        <span className="not-italic font-black font-sans">meet you.</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="space-y-5"
        >
          <p className="text-[17px] leading-[1.7] text-[#0A0A0A]/75">
            I'm <strong className="font-bold text-[#0A0A0A]">Jessica</strong>, a UX and product
            designer who believes the best interfaces feel invisible — like they were made{' '}
            <span className="font-serif italic">just for you</span>.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#0A0A0A]/55">
            My design process starts with curiosity and ends with craft. I love working at the intersection
            of playful aesthetics and purposeful function — whether that's a healthcare app, a travel
            companion, or a kawaii icon set.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#0A0A0A]/55">
            When I'm not in Figma, I'm probably customising my phone screen, collecting stamps, or
            watching Studio Ghibli for the hundredth time.
          </p>

          {/* Skills */}
          <div className="pt-4">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0A0A0A]/30 mb-3">
              Skills & tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="bg-white border border-black/[0.09] rounded-full px-3.5 py-1 text-[12.5px] font-semibold text-[#0A0A0A]/70 shadow-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-4"
        >
          {/* Avatar placeholder */}
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#F9E8F3] via-[#EDE8FB] to-[#E8EDFB] rounded-3xl flex items-center justify-center mb-6 border border-black/[0.04]">
            <div className="text-center space-y-2">
              <div className="text-6xl">🌸</div>
              <p className="text-[12px] text-[#0A0A0A]/30 font-medium">Photo coming soon</p>
            </div>
          </div>

          {/* Facts */}
          <div className="bg-white border border-black/[0.07] rounded-2xl p-5 shadow-sm space-y-3">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#0A0A0A]/30 uppercase tracking-wide">{label}</span>
                <span className="text-[13px] font-semibold text-[#0A0A0A]/75">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
