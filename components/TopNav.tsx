'use client'

import { useState } from 'react'
import type { Section } from '@/app/page'

const iconItems: { id: Section; icon: string; label: string }[] = [
  { id: 'about',   icon: '🌸', label: 'About' },
  { id: 'work',    icon: '📁', label: 'Work' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
]

function ChatButton() {
  const [show, setShow] = useState(false)

  function handleClick() {
    setShow(true)
    setTimeout(() => setShow(false), 2000)
  }

  return (
    <div className="relative hidden sm:block">
      {show && (
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap animate-fade-in pointer-events-none">
          Coming soon
        </span>
      )}
      <button
        onClick={handleClick}
        className="ml-1 bg-[#C9E3F2] text-[#0A0A0A] text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-[#B8D8ED] transition-colors duration-150 whitespace-nowrap shrink-0"
      >
        Chat with me
      </button>
    </div>
  )
}

export default function TopNav({
  active,
  onNavigate,
}: {
  active: Section
  onNavigate: (s: Section) => void
}) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3.5 bg-white border border-black/[0.08] rounded-full pl-5 pr-7 sm:pl-6 sm:pr-8 py-2 sm:py-2.5 shadow-sm">
      {/* Name */}
      <button
        onClick={() => onNavigate('home')}
        className="font-serif italic text-[#0A0A0A] text-[20px] sm:text-[28px] mr-0 sm:mr-1 shrink-0 group/name overflow-hidden"
      >
        <span className="grid">
          <span className="[grid-area:1/1] transition-all duration-300 ease-in-out group-hover/name:opacity-0 group-hover/name:-translate-y-2">jessica</span>
          <span className="[grid-area:1/1] transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover/name:opacity-100 group-hover/name:translate-y-0">hello :-)</span>
        </span>
      </button>

      {/* Icon buttons */}
      {iconItems.map((item) => (
        <div key={item.id} className="relative shrink-0 group">
          {/* Tooltip */}
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            {item.label}
          </span>
          <button
            onClick={() => onNavigate(item.id)}
            aria-label={item.label}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[11px] sm:rounded-[12px] flex items-center justify-center text-lg sm:text-2xl transition-colors duration-150 ${
              active === item.id ? 'bg-[#E8E8E8]' : 'bg-[#F3F3F1] hover:bg-[#EBEBEA]'
            }`}
          >
            {item.icon}
          </button>
          <div className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-1 h-1 rounded-full bg-[#0A0A0A] transition-opacity duration-200 ${active === item.id ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      ))}

      {/* Chat CTA — hidden on small screens since ✉️ covers contact */}
      <ChatButton />
    </div>
  )
}
