'use client'

import type { Section } from '@/app/page'

const iconItems: { id: Section; icon: string; label: string }[] = [
  { id: 'about',   icon: '🌸', label: 'About' },
  { id: 'work',    icon: '📁', label: 'Work' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
]

export default function TopNav({
  active,
  onNavigate,
}: {
  active: Section
  onNavigate: (s: Section) => void
}) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-2.5 bg-white border border-black/[0.08] rounded-full px-3 sm:px-5 py-2 shadow-sm max-w-[calc(100vw-24px)]">
      {/* Name */}
      <button
        onClick={() => onNavigate('home')}
        className="font-serif italic text-[#0A0A0A] text-[15px] sm:text-[17px] mr-0.5 sm:mr-1 hover:opacity-60 transition-opacity duration-150 shrink-0"
      >
        jessica
      </button>

      {/* Icon buttons */}
      {iconItems.map((item) => (
        <div key={item.id} className="relative flex flex-col items-center gap-1 shrink-0 group">
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            {item.label}
          </span>
          <button
            onClick={() => onNavigate(item.id)}
            aria-label={item.label}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] flex items-center justify-center text-lg sm:text-xl transition-colors duration-150 ${
              active === item.id ? 'bg-[#E8E8E8]' : 'bg-[#F3F3F1] hover:bg-[#EBEBEA]'
            }`}
          >
            {item.icon}
          </button>
          <div className={`w-1 h-1 rounded-full bg-[#0A0A0A] transition-opacity duration-200 ${active === item.id ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      ))}

      {/* Chat CTA — hidden on small screens since ✉️ covers contact */}
      <button
        onClick={() => onNavigate('contact')}
        className="hidden sm:block ml-1 bg-[#C9E3F2] text-[#0A0A0A] text-[13.5px] font-medium px-5 py-2 rounded-full hover:bg-[#B8D8ED] transition-colors duration-150 whitespace-nowrap shrink-0"
      >
        Chat with me
      </button>
    </div>
  )
}
