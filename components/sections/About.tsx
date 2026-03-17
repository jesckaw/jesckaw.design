'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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

function FigmaIcon() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <svg width="22" height="32" viewBox="0 0 20 30" fill="none">
        {/* Top: red rounded rect */}
        <path d="M0 5a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H5A5 5 0 0 1 0 5z" fill="#F24E1E"/>
        {/* Middle left: purple */}
        <path d="M0 10h10v10H5A5 5 0 0 1 0 15v-5z" fill="#A259FF"/>
        {/* Middle right: blue circle */}
        <circle cx="15" cy="15" r="5" fill="#1ABCFE"/>
        {/* Bottom: green */}
        <path d="M0 20h10v5a5 5 0 0 1-10 0v-5z" fill="#0ACF83"/>
      </svg>
    </div>
  )
}

function ClaudeIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: '#CC5500' }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1 C12 1 13.5 8.5 15.5 10.5 C17.5 12.5 24 12 24 12 C24 12 17.5 11.5 15.5 13.5 C13.5 15.5 12 23 12 23 C12 23 10.5 15.5 8.5 13.5 C6.5 11.5 0 12 0 12 C0 12 6.5 12.5 8.5 10.5 C10.5 8.5 12 1 12 1Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

function PhotoshopIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: '#001E36' }}>
      <span style={{ color: '#31A8FF', fontSize: 14, fontWeight: 700, fontFamily: 'sans-serif', letterSpacing: '-0.5px' }}>Ps</span>
    </div>
  )
}

function PlusIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: '#D0D5DC' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3v12M3 9h12" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function FolderStack() {
  const [hovered, setHovered] = useState(false)

  const icons = [
    { el: <FigmaIcon />, delay: 0 },
    { el: <ClaudeIcon />, delay: 0.04 },
    { el: <PhotoshopIcon />, delay: 0.08 },
    { el: <PlusIcon />, delay: 0.12 },
  ]

  // Layout (220px container, folder 200×160 → top at 30px from container):
  // Dark back:  top 30+16 = 46px
  // Tab flap:   30+0 → 30+32 = 30–62px  (left 90px only)
  // Dark band exposed: tab-bottom(62) → light-body-top(30+52=82) = 62–82px  ← icons sit here on hover
  // Light body: 82–190px  (covers icons at rest)
  //
  // z-index order in card stacking context:
  //   dark back z:2 | tab z:3 | icons z:4 | light body z:5
  // → light body (z:5) covers icons (z:4) when they're inside → hidden at rest
  // → on hover icons translate to y≈18, sitting in the dark-band zone; light body starts at 82px so no overlap → visible

  return (
    <div
      className="relative w-full flex items-center justify-center cursor-pointer select-none"
      style={{ height: 220 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icons — z:4, hidden by light body (z:5) at rest; emerge into dark-band zone on hover */}
      <div
        className="absolute flex gap-2"
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}
      >
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ y: 92 }}
            animate={{ y: hovered ? 18 : 92 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 26,
              delay: hovered ? icon.delay : (icons.length - 1 - i) * 0.035,
            }}
            className="w-11 h-11 rounded-2xl overflow-hidden flex-shrink-0"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.28)' }}
          >
            {icon.el}
          </motion.div>
        ))}
      </div>

      {/* Folder — macOS style */}
      <div className="relative" style={{ width: 200, height: 160 }}>

        {/* 1. Dark back — the full folder volume; dark band is the exposed strip between tab & light body */}
        <div style={{
          position: 'absolute',
          top: 16, left: 0, right: 0, bottom: 0,
          borderRadius: 20,
          background: '#4E90B8',
          boxShadow: '0 8px 28px rgba(50,110,160,0.28), 0 2px 6px rgba(0,0,0,0.1)',
          zIndex: 2,
        }} />

        {/* 2. Tab flap — same dark blue as back, sits upper-left */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: 90, height: 32,
          borderRadius: '10px 10px 0 0',
          background: '#4E90B8',
          zIndex: 3,
        }} />

        {/* 3. Light body — lower lighter section; z:5 hides icons when they're resting inside */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            position: 'absolute',
            top: 38, left: 0, right: 0, bottom: 0,
            borderRadius: 18,
            background: '#B8E0F7',
            zIndex: 5,
          }}
        >
          <span
            className="px-5 py-1.5 rounded-full text-[12px] font-medium"
            style={{ background: 'white', color: 'rgba(10,10,10,0.55)' }}
          >
            current stack
          </span>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <div className="w-full h-full overflow-y-auto pb-32 pt-24 sm:pt-28 md:pt-36 page-x">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
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

        {/* Right card — folder stack */}
        <motion.div {...fadeUp(0.25)} className="bg-white rounded-3xl border border-black/[0.07] shadow-sm flex items-center justify-center min-h-[220px] overflow-hidden">
          <FolderStack />
        </motion.div>
      </div>

      {/* Experience */}
      <motion.div {...fadeUp(0.25)} className="mb-14">
        <h3 className="font-sans font-bold text-[#0A0A0A] mb-1" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>My experience</h3>
        <p className="font-serif italic text-[#0A0A0A]/55 mb-5" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
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
      <motion.div {...fadeUp(0.45)}>
        <h3 className="font-sans font-bold text-[#0A0A0A] mb-5" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
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
