'use client'

import { motion } from 'framer-motion'

const experiments = [
  {
    id: 1,
    title: 'iOS Aesthetic Themes',
    desc: 'Custom icon packs, widgets, and wallpapers for a cohesive phone aesthetic.',
    tag: 'Illustration',
    color: '#F472B6',
    bg: 'from-[#FDE8EF] to-[#F6D8E7]',
    emoji: '📱',
    size: 'lg',
  },
  {
    id: 2,
    title: 'Motion Studies',
    desc: 'Micro-interaction explorations in Figma and Protopie.',
    tag: 'Motion',
    color: '#818CF8',
    bg: 'from-[#E8EAF9] to-[#D6DAF6]',
    emoji: '✨',
    size: 'sm',
  },
  {
    id: 3,
    title: 'Daily UI Challenges',
    desc: '30 days of UI prompts — speed, constraint, creativity.',
    tag: 'UI Design',
    color: '#E8834A',
    bg: 'from-[#FDF0E8] to-[#F6E0CC]',
    emoji: '🎯',
    size: 'sm',
  },
  {
    id: 4,
    title: 'Type Experiments',
    desc: 'Playing with letterforms, hierarchy, and expressive typography.',
    tag: 'Typography',
    color: '#6EBBE8',
    bg: 'from-[#E3F4FB] to-[#D0EBF8]',
    emoji: 'Aa',
    size: 'sm',
  },
  {
    id: 5,
    title: 'Brand Concept Lab',
    desc: 'Unsolicited rebrand concepts for brands I love.',
    tag: 'Branding',
    color: '#C084FC',
    bg: 'from-[#EDE8FB] to-[#DDD4F7]',
    emoji: '🎨',
    size: 'sm',
  },
]

export default function Playground() {
  return (
    <div className="w-full h-full overflow-y-auto pb-32 pt-16 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-3"
      >
        Playground
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic leading-[1] tracking-tight mb-3"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        Just for{' '}
        <span className="not-italic font-black font-sans">fun.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-[15px] text-[#0A0A0A]/40 font-medium mb-10 max-w-md"
      >
        Experiments, side projects, and things I make purely because I felt like it.
      </motion.p>

      {/* Bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl auto-rows-[160px]">
        {experiments.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${e.bg} border border-black/[0.05] cursor-pointer group flex flex-col justify-between p-5 ${
              e.size === 'lg' ? 'row-span-2' : ''
            }`}
          >
            {/* Emoji / icon */}
            <div className="text-[32px] leading-none">{e.emoji}</div>

            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full inline-block mb-1.5"
                style={{ background: `${e.color}22`, color: e.color }}
              >
                {e.tag}
              </span>
              <h3 className="font-black text-[16px] leading-tight text-[#0A0A0A]">{e.title}</h3>
              {e.size === 'lg' && (
                <p className="text-[13px] text-[#0A0A0A]/45 mt-1.5 leading-snug">{e.desc}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
