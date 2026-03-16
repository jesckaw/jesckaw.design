'use client'

import type { Section } from '@/app/page'

const iconItems: { id: Section; icon: string }[] = [
  { id: 'about',   icon: '🌸' },
  { id: 'work',    icon: '📁' },
  { id: 'contact', icon: '✉️' },
]

export default function TopNav({
  active,
  onNavigate,
}: {
  active: Section
  onNavigate: (s: Section) => void
}) {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 bg-white border border-black/[0.08] rounded-full px-5 py-2 shadow-sm">
      {/* Name */}
      <button
        onClick={() => onNavigate('home')}
        className="font-serif italic text-[#0A0A0A] text-[17px] mr-1 hover:opacity-60 transition-opacity duration-150"
      >
        jessica
      </button>

      {/* Icon buttons */}
      {iconItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-1">
          <button
            onClick={() => onNavigate(item.id)}
            aria-label={item.id}
            className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-xl transition-colors duration-150 ${
              active === item.id ? 'bg-[#E8E8E8]' : 'bg-[#F3F3F1] hover:bg-[#EBEBEA]'
            }`}
          >
            {item.icon}
          </button>
          <div className={`w-1 h-1 rounded-full bg-[#0A0A0A] transition-opacity duration-200 ${active === item.id ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      ))}

      {/* Chat CTA */}
      <button
        onClick={() => onNavigate('contact')}
        className="ml-1 bg-[#C9E3F2] text-[#0A0A0A] text-[13.5px] font-medium px-5 py-2 rounded-full hover:bg-[#B8D8ED] transition-colors duration-150 whitespace-nowrap"
      >
        Chat with me
      </button>
    </div>
  )
}
