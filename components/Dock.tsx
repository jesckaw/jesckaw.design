'use client'

import { motion } from 'framer-motion'
import type { Section } from '@/app/page'

const items: { id: Section; label: string; icon: string }[] = [
  { id: 'home',       label: 'Home',       icon: '🏡' },
  { id: 'about',      label: 'About',      icon: '🌸' },
  { id: 'work',       label: 'Work',       icon: '📁' },
  { id: 'playground', label: 'Playground', icon: '🎨' },
  { id: 'contact',    label: 'Contact',    icon: '✉️' },
]

export default function Dock({
  active,
  onNavigate,
}: {
  active: Section
  onNavigate: (s: Section) => void
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 bg-white/75 backdrop-blur-2xl border border-black/[0.07] rounded-[22px] px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.09),0_1px_0_rgba(255,255,255,0.8)_inset]">
      {items.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.2, y: -8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
          onClick={() => onNavigate(item.id)}
          className="relative flex flex-col items-center gap-1 group"
          aria-label={item.label}
        >
          {/* Tooltip */}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            {item.label}
          </span>

          {/* Icon tile */}
          <div
            className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] transition-all duration-200 ${
              active === item.id
                ? 'bg-[#0A0A0A] shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
                : 'bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.07)]'
            }`}
          >
            <span className={active === item.id ? 'brightness-200' : ''}>
              {item.icon}
            </span>
          </div>

          {/* Active dot */}
          <div
            className={`w-1 h-1 rounded-full bg-[#0A0A0A] transition-opacity duration-200 ${
              active === item.id ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.button>
      ))}
    </div>
  )
}
