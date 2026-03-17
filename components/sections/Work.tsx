'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'buddy',
    category: 'Travel',
    color: '#EEF2FF',
  },
  {
    id: 2,
    title: 'Aura Finance',
    category: 'Fintech',
    color: '#F0EEFF',
  },
  {
    id: 3,
    title: 'Come Play Icons',
    category: 'Illustration',
    color: '#FFF0F6',
  },
  {
    id: 4,
    title: 'HealthLink',
    category: 'Healthcare',
    color: '#ECFDF5',
  },
]

export default function Work() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden pt-24 sm:pt-28 md:pt-36 page-x pb-6 sm:pb-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-sans font-medium leading-none tracking-tight mb-5 sm:mb-8 shrink-0"
        style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}
      >
        Selected{' '}
        <span className="font-serif italic font-normal" style={{ fontSize: '1.05em' }}>works</span>
      </motion.h2>

      {/* Grid — 1 col on mobile, 2 cols on sm+ */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-h-0">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href="#"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl hover:opacity-90 transition-opacity duration-300 min-h-[140px] sm:min-h-0"
            style={{ backgroundColor: project.color }}
          />
        ))}
      </div>
    </div>
  )
}
