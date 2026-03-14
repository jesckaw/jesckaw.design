'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'buddy',
    tagline: 'Your new travel friend.',
    category: 'UX / Product Design',
    year: '2024',
    tags: ['Mobile', 'iOS', 'Travel'],
    bg: 'from-[#FDE8EF] to-[#F8D6E8]',
    accent: '#E879A0',
    emoji: '✈️',
  },
  {
    id: 2,
    title: 'HealthLink',
    tagline: 'Telemedicine made human.',
    category: 'UX / Healthcare',
    year: '2024',
    tags: ['Web App', 'B2C', 'Healthcare'],
    bg: 'from-[#E8EDF9] to-[#D8E4F6]',
    accent: '#6179E8',
    emoji: '🩺',
  },
  {
    id: 3,
    title: 'Come Play Icons',
    tagline: 'A kawaii icon set for your aesthetic.',
    category: 'Illustration / Brand',
    year: '2024',
    tags: ['iOS Icons', 'Illustration', 'Sanrio'],
    bg: 'from-[#FDF3E8] to-[#F9E4CC]',
    accent: '#E8834A',
    emoji: '🌟',
  },
  {
    id: 4,
    title: 'Streamline',
    tagline: 'A design system built to scale.',
    category: 'Design Systems',
    year: '2023',
    tags: ['Figma', 'Tokens', 'Components'],
    bg: 'from-[#EDE8FB] to-[#DDD6F7]',
    accent: '#9B6EE8',
    emoji: '⚡',
  },
]

export default function Work() {
  return (
    <div className="w-full h-full overflow-y-auto pb-32 pt-16 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-3"
      >
        Work
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic leading-[1] tracking-tight mb-10"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        Selected{' '}
        <span className="not-italic font-black font-sans">projects.</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.bg} border border-black/[0.05] cursor-pointer group`}
          >
            <div className="p-7 pb-6">
              {/* Emoji */}
              <div className="text-5xl mb-5">{p.emoji}</div>

              {/* Meta */}
              <div className="flex items-center gap-2 mb-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full"
                    style={{ background: `${p.accent}20`, color: p.accent }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[28px] font-black tracking-tight text-[#0A0A0A] leading-none mb-1">
                {p.title}
              </h3>
              <p className="text-[14px] text-[#0A0A0A]/50 font-medium">{p.tagline}</p>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-7 py-3.5 border-t border-black/[0.06]">
              <span className="text-[12px] font-semibold text-[#0A0A0A]/40">{p.category}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-[#0A0A0A]/35">{p.year}</span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: p.accent }}
                >
                  →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
