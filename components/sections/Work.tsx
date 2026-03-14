'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* ─────────────────────── types ─────────────────────── */
type Row = { label: string; type: 'head' | 'val' | 'sub' | 'btn' | 'tag' }
type Sticky = { text: string; top?: string; bottom?: string; left?: string; right?: string; rotate: number; bg: string }

type Project = {
  id: number
  windowTitle: string
  name: string
  category: string
  categoryBg: string
  platform: string
  description: string
  mockupBg: string
  phone1Gradient: string
  phone2Gradient: string
  stickies: Sticky[]
  rows1: Row[]
  rows2: Row[]
}

/* ─────────────────────── data ─────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    windowTitle: 'Buddy — Travel Planning',
    name: 'buddy',
    category: 'Travel',
    categoryBg: '#4F6CF7',
    platform: 'iOS app',
    description:
      'Reimagining how people plan trips — with smart recommendations, real-time booking, and a companion who actually gets you.',
    mockupBg: '#EEF2FF',
    phone1Gradient: 'linear-gradient(160deg, #4F6CF7, #818CF8)',
    phone2Gradient: 'linear-gradient(160deg, #C084FC, #F472B6)',
    stickies: [
      { text: 'Berlin 🗺️', top: '14%', left: '8%',  rotate: -5, bg: '#FEF9C3' },
      { text: 'Book now! ✓', top: '18%', right: '8%', rotate: 3,  bg: '#D1FAE5' },
      { text: 'Trip starts ✈️', bottom: '18%', left: '5%', rotate: -2, bg: '#FDE8EF' },
    ],
    rows1: [
      { label: 'Where to?', type: 'head' },
      { label: 'Berlin, Germany', type: 'val' },
      { label: 'Jun 12 – Jun 15', type: 'sub' },
      { label: '3 nights · 2 travellers', type: 'tag' },
    ],
    rows2: [
      { label: 'Hotel Adlon', type: 'head' },
      { label: '⭐ 4.9  ·  $280/night', type: 'sub' },
      { label: 'Book →', type: 'btn' },
    ],
  },
  {
    id: 2,
    windowTitle: 'Aura Finance',
    name: 'Aura Finance',
    category: 'Fintech',
    categoryBg: '#4F6CF7',
    platform: 'Web app',
    description:
      'Turning financial coaching into guided, repeatable action. Build better money habits with clarity and calm.',
    mockupBg: '#F0EEFF',
    phone1Gradient: 'linear-gradient(160deg, #6366F1, #4F6CF7)',
    phone2Gradient: 'linear-gradient(160deg, #8B5CF6, #6366F1)',
    stickies: [
      { text: 'Save $2000+ 💰', top: '16%', left: '5%',  rotate: -4, bg: '#FEF9C3' },
      { text: 'Get Coaching insights!', top: '20%', right: '5%', rotate: 3,  bg: '#D1FAE5' },
      { text: 'Oh no! 😅', bottom: '18%', right: '6%', rotate: -2, bg: '#FDE8EF' },
    ],
    rows1: [
      { label: 'Total Balance', type: 'head' },
      { label: '$12,480.00', type: 'val' },
      { label: '+$340 this month', type: 'sub' },
      { label: '↑ 12% vs last month', type: 'tag' },
    ],
    rows2: [
      { label: 'Coaching Goal', type: 'head' },
      { label: '🎯 Emergency Fund', type: 'sub' },
      { label: '68% complete →', type: 'btn' },
    ],
  },
  {
    id: 3,
    windowTitle: 'Come Play Icons',
    name: 'Come Play Icons',
    category: 'Illustration',
    categoryBg: '#F472B6',
    platform: 'Icon pack',
    description:
      'A kawaii-inspired iOS icon set for custom aesthetic phone setups. 60+ icons with Sanrio-inspired charm and pastel gradients.',
    mockupBg: '#FFF0F6',
    phone1Gradient: 'linear-gradient(160deg, #F472B6, #FBBF24)',
    phone2Gradient: 'linear-gradient(160deg, #C084FC, #F472B6)',
    stickies: [
      { text: '60+ icons 🌸', top: '16%', left: '7%',  rotate: -4, bg: '#FDE8EF' },
      { text: 'Sanrio vibes ✨', top: '18%', right: '7%', rotate: 3,  bg: '#FEF9C3' },
      { text: 'Hello Kitty 🎀', bottom: '18%', left: '6%', rotate: -2, bg: '#EDE8FB' },
    ],
    rows1: [
      { label: 'Pastel Collection', type: 'head' },
      { label: 'iOS Icon Pack', type: 'val' },
      { label: '60 icons · 6 themes', type: 'sub' },
      { label: 'Sanrio · Aesthetic', type: 'tag' },
    ],
    rows2: [
      { label: 'Preview', type: 'head' },
      { label: '🎀 🌷 🍡 🌸 🎠', type: 'sub' },
      { label: 'Download all →', type: 'btn' },
    ],
  },
  {
    id: 4,
    windowTitle: 'HealthLink',
    name: 'HealthLink',
    category: 'Healthcare',
    categoryBg: '#10B981',
    platform: 'Web app',
    description:
      'Making telemedicine feel human. A virtual care platform that reduces friction and puts patient wellbeing first.',
    mockupBg: '#ECFDF5',
    phone1Gradient: 'linear-gradient(160deg, #059669, #10B981)',
    phone2Gradient: 'linear-gradient(160deg, #0EA5E9, #38BDF8)',
    stickies: [
      { text: 'Dr. Smith 👩‍⚕️', top: '16%', left: '6%',  rotate: -3, bg: '#D1FAE5' },
      { text: 'Today 3pm ✓', top: '18%', right: '7%', rotate: 3,  bg: '#FEF9C3' },
      { text: 'Feeling better! 💊', bottom: '18%', right: '6%', rotate: -2, bg: '#E0F2FE' },
    ],
    rows1: [
      { label: 'My Appointments', type: 'head' },
      { label: 'Dr. Sarah Kim', type: 'val' },
      { label: 'Today · 3:00 PM', type: 'sub' },
      { label: 'General Practice', type: 'tag' },
    ],
    rows2: [
      { label: 'Video Visit', type: 'head' },
      { label: '🟢 Doctor is ready', type: 'sub' },
      { label: 'Join now →', type: 'btn' },
    ],
  },
]

/* ─────────────────────── phone screen ─────────────────────── */
function PhoneScreen({ gradient, rows }: { gradient: string; rows: Row[] }) {
  return (
    <div
      className="w-28 h-52 rounded-[18px] border-2 border-white/25 shadow-2xl overflow-hidden shrink-0 flex flex-col"
      style={{ background: gradient }}
    >
      {/* Notch bar */}
      <div className="h-5 shrink-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.12)' }}>
        <div className="w-8 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
      </div>
      {/* Rows */}
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        {rows.map((row, i) => {
          if (row.type === 'head')
            return (
              <div key={i} className="bg-white/15 rounded-lg px-2 py-1">
                <span className="text-white/60 text-[7.5px] font-bold uppercase tracking-wide">{row.label}</span>
              </div>
            )
          if (row.type === 'val')
            return (
              <div key={i} className="px-2">
                <span className="text-white font-black text-[13px] leading-tight">{row.label}</span>
              </div>
            )
          if (row.type === 'sub')
            return (
              <div key={i} className="px-2">
                <span className="text-white/60 text-[8px] font-medium">{row.label}</span>
              </div>
            )
          if (row.type === 'tag')
            return (
              <div key={i} className="mx-2 bg-white/15 rounded-md px-1.5 py-0.5 inline-block self-start">
                <span className="text-white/70 text-[7px] font-semibold">{row.label}</span>
              </div>
            )
          if (row.type === 'btn')
            return (
              <div key={i} className="mx-1 mt-auto bg-white/25 rounded-lg px-2 py-1.5 text-center">
                <span className="text-white text-[8px] font-bold">{row.label}</span>
              </div>
            )
          return null
        })}
      </div>
    </div>
  )
}

/* ─────────────────────── slide variants ─────────────────────── */
const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as number[] } },
  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.22 } }),
}

/* ─────────────────────── outer decorations ─────────────────────── */
function StarOutline({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z"
        stroke="#0A0A0A"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

function CursorSVG({ color = '#4F6CF7' }: { color?: string }) {
  return (
    <svg width="24" height="30" viewBox="0 0 18 22" fill="none">
      <path d="M1 1L7.5 19L10 12L17 9L1 1Z" fill={color} stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

/* ─────────────────────── main component ─────────────────────── */
export default function Work() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + projects.length) % projects.length)
  }

  const p = projects[current]

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden pt-8 px-10 pb-28">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="shrink-0 mb-5"
      >
        <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#0A0A0A]/35 mb-1">Work</p>
        <h2
          className="font-serif italic leading-none tracking-tight"
          style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}
        >
          Selected{' '}
          <span className="not-italic font-black font-sans">projects.</span>
        </h2>
      </motion.div>

      {/* ── Main row ── */}
      <div className="flex-1 flex items-center gap-6 min-h-0">

        {/* ── Browser window ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col bg-white rounded-2xl border border-black/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.09)] overflow-hidden"
          style={{ flex: '1.35', height: '100%', maxHeight: 420 }}
        >
          {/* Title bar — 3-column layout to prevent overlap */}
          <div className="shrink-0 h-10 bg-[#F5F5F3] border-b border-black/[0.06] grid grid-cols-[auto_1fr_auto] items-center px-4 gap-2">
            {/* Left: Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            {/* Center: title */}
            <span className="text-[12px] font-semibold text-[#0A0A0A]/50 truncate text-center px-2">
              {p.windowTitle}
            </span>
            {/* Right: Prev / Next / Menu */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => go(-1)}
                className="text-[11px] font-semibold text-[#0A0A0A]/55 px-2.5 py-1 bg-white border border-black/10 rounded-lg hover:bg-[#EFEFED] transition-colors"
              >
                ‹ Prev
              </button>
              <button
                onClick={() => go(1)}
                className="text-[11px] font-semibold text-[#0A0A0A]/55 px-2.5 py-1 bg-white border border-black/10 rounded-lg hover:bg-[#EFEFED] transition-colors"
              >
                Next ›
              </button>
              <button className="text-[14px] text-[#0A0A0A]/40 px-2 py-1 bg-white border border-black/10 rounded-lg hover:bg-[#EFEFED] transition-colors">
                ≡
              </button>
            </div>
          </div>

          {/* Mockup content */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center"
            style={{ background: p.mockupBg, transition: 'background 0.4s ease' }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={p.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center px-8 gap-5"
              >
                <PhoneScreen gradient={p.phone1Gradient} rows={p.rows1} />
                <PhoneScreen gradient={p.phone2Gradient} rows={p.rows2} />

                {/* Sticky notes */}
                {p.stickies.map((s, i) => (
                  <div
                    key={i}
                    className="absolute px-2.5 py-1.5 rounded-lg shadow-md text-[10px] font-bold text-[#0A0A0A]/75 whitespace-nowrap pointer-events-none z-10"
                    style={{
                      background: s.bg,
                      transform: `rotate(${s.rotate}deg)`,
                      top: s.top,
                      bottom: s.bottom,
                      left: s.left,
                      right: s.right,
                    }}
                  >
                    {s.text}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Platform tag */}
            <div className="absolute bottom-3.5 left-4 bg-white/75 backdrop-blur-sm border border-black/[0.07] rounded-full px-3 py-1 text-[11px] font-semibold text-[#0A0A0A]/55 z-20">
              {p.platform}
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-3.5 right-4 flex gap-1.5 z-20">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? 'bg-[#0A0A0A]/50 w-3' : 'bg-[#0A0A0A]/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Info panel ── */}
        <div className="flex flex-col justify-center" style={{ flex: '1', maxWidth: 360 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={p.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-4"
            >
              {/* Category pill */}
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-bold text-white"
                style={{ background: p.categoryBg }}
              >
                {p.category}
              </span>

              {/* Title */}
              <h3
                className="font-black tracking-tight text-[#0A0A0A] leading-none"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#0A0A0A]/55 font-medium leading-relaxed">
                {p.description}
              </p>

              {/* Project counter */}
              <p className="text-[12px] font-semibold text-[#0A0A0A]/25">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Outer decorative stickers ── */}

      {/* Outlined stars — right side */}
      <div className="absolute top-[20%] right-[2%] pointer-events-none">
        <StarOutline size={22} />
      </div>
      <div className="absolute top-[34%] right-[5%] pointer-events-none">
        <StarOutline size={16} />
      </div>
      <div className="absolute top-[50%] right-[1.5%] pointer-events-none">
        <StarOutline size={20} />
      </div>

      {/* Filled sparkle — top left */}
      <motion.div
        className="absolute top-[15%] left-[3%] pointer-events-none"
        animate={{ rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#F472B6">
          <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-[28%] left-[2%] pointer-events-none"
        animate={{ rotate: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
        </svg>
      </motion.div>

      {/* Cute blob mascot — top right corner */}
      <motion.div
        className="absolute top-[8%] right-[0.5%] pointer-events-none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="w-14 h-14 bg-[#DBEAFE] rounded-2xl flex items-center justify-center text-2xl border-2 border-white shadow-md">
          🐣
        </div>
      </motion.div>

      {/* Thumbs up card — bottom right */}
      <motion.div
        className="absolute bottom-[26%] right-[1%] pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        <div className="w-12 h-12 bg-[#FDE8EF] rounded-2xl flex items-center justify-center text-xl border-2 border-white shadow-md">
          👍
        </div>
      </motion.div>

      {/* Cursor — bottom area */}
      <motion.div
        className="absolute bottom-[30%] left-[5%] pointer-events-none"
        animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <CursorSVG color="#4F6CF7" />
      </motion.div>
    </div>
  )
}
