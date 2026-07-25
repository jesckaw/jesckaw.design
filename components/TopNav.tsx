'use client'

import { useEffect, useState } from 'react'

type SectionId = 'home' | 'work' | 'about' | 'contact'

const sectionIds: SectionId[] = ['home', 'work', 'about', 'contact']

const iconItems: { id: SectionId; icon: string; label: string }[] = [
  { id: 'work',    icon: '📁', label: 'Work' },
  { id: 'about',   icon: '🌸', label: 'About' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
]

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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
        className="ml-3 bg-[#C9E3F2] text-[#0A0A0A] text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-[#B8D8ED] transition-colors duration-150 whitespace-nowrap shrink-0"
      >
        Chat with me
      </button>
    </div>
  )
}

export default function TopNav() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-2.5 bg-white border border-black/[0.08] rounded-full pl-6 pr-8 sm:px-6 py-2.5 sm:py-3 shadow-sm">
      {/* Name */}
      <button
        onClick={() => scrollToSection('home')}
        className="font-serif italic text-[#0A0A0A] text-[24px] sm:text-[28px] mr-0 sm:mr-3 shrink-0 group/name overflow-hidden"
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
            onClick={() => scrollToSection(item.id)}
            aria-label={item.label}
            className={`w-12 h-12 sm:w-12 sm:h-12 rounded-[12px] flex items-center justify-center text-xl sm:text-2xl transition-colors duration-150 ${
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
