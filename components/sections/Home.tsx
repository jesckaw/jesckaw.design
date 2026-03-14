'use client'

import { motion } from 'framer-motion'

/* ── Floating card wrapper ── */
function FloatCard({
  children,
  className = '',
  delay = 0,
  amplitude = 10,
  duration = 5,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  amplitude?: number
  duration?: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute bg-white border border-black/[0.07] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] pointer-events-none select-none ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ── Sparkle SVG ── */
function Sparkle({ size = 16, color = '#F472B6' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
    </svg>
  )
}

const sparkles = [
  { top: '11%',  left: '18%',  right: undefined, size: 14, delay: 0.4, color: '#F472B6' },
  { top: '38%',  left: undefined, right: '18%',  size: 11, delay: 1.1, color: '#FBBF24' },
  { top: '66%',  left: '28%',  right: undefined, size: 13, delay: 0.7, color: '#818CF8' },
  { top: '20%',  left: undefined, right: '36%',  size: 10, delay: 1.7, color: '#C084FC' },
  { top: '74%',  left: undefined, right: '6%',   size: 12, delay: 0.2, color: '#F472B6' },
]

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* ── Logo ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="absolute top-7 left-8 z-10"
      >
        <span className="text-[13px] font-extrabold tracking-tight leading-[1.1] border-[2.5px] border-[#0A0A0A] px-2.5 py-1 inline-block">
          jesckaw
        </span>
      </motion.div>

      {/* ── Center content ── */}
      <div className="flex flex-col items-center justify-center w-full h-full pb-24 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2 bg-white border border-black/[0.08] rounded-full px-4 py-1.5 text-[12.5px] font-semibold text-[#0A0A0A]/55 shadow-sm"
        >
          <span className="text-[#F472B6]">✦</span>
          UX Design Portfolio
          <span className="text-[#818CF8]">✦</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center leading-[0.93] tracking-tight select-none"
          style={{ fontSize: 'clamp(52px, 8.5vw, 112px)' }}
        >
          <span className="font-serif italic text-[#0A0A0A]">Designing with</span>
          <br />
          <span className="font-black text-[#0A0A0A]">curiosity</span>
          <span className="font-serif italic text-[#0A0A0A]">{' & care.'}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.5 }}
          className="mt-7 text-[14.5px] text-[#0A0A0A]/40 font-medium tracking-wide text-center max-w-sm"
        >
          Hi, I'm Jessica — a UX designer who loves craft, kawaii things, and making people smile.
        </motion.p>
      </div>

      {/* ── Floating elements ── */}

      {/* Colour palette card — top right */}
      <FloatCard className="top-[9%] right-[7%] p-3.5 flex flex-col gap-2.5" delay={0}>
        <p className="text-[10px] font-bold text-[#0A0A0A]/35 tracking-widest uppercase">Palette</p>
        <div className="flex items-center gap-1.5">
          {['#F472B6', '#C084FC', '#818CF8', '#FBBF24', '#0A0A0A'].map((c) => (
            <div
              key={c}
              className="w-6 h-6 rounded-full border-[1.5px] border-white shadow-sm"
              style={{ background: c }}
            />
          ))}
        </div>
        <p className="text-[10px] font-mono text-[#0A0A0A]/30">#F472B6 ∨</p>
      </FloatCard>

      {/* Keyboard shortcut card — left side */}
      <FloatCard className="top-[26%] left-[5%] p-3 flex items-center gap-2.5" delay={1} amplitude={8}>
        <div className="flex gap-1.5">
          <kbd className="w-10 h-10 bg-[#F5F5F3] border border-black/10 rounded-xl flex items-center justify-center text-[17px] font-bold shadow-[0_2px_0_rgba(0,0,0,0.12)]">
            ⌘
          </kbd>
          <kbd className="w-10 h-10 bg-[#F5F5F3] border border-black/10 rounded-xl flex items-center justify-center text-[13px] font-bold shadow-[0_2px_0_rgba(0,0,0,0.12)]">
            Z
          </kbd>
        </div>
        <span className="text-[11px] text-[#0A0A0A]/35 font-medium">undo it all</span>
      </FloatCard>

      {/* Layers panel — left lower */}
      <FloatCard className="top-[52%] left-[3.5%] overflow-hidden w-44" delay={2} amplitude={7} duration={6}>
        <div className="px-3 py-2 border-b border-black/[0.06] flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#0A0A0A]/40 uppercase tracking-widest">Layers</span>
          <span className="text-[10px] text-[#0A0A0A]/25">4</span>
        </div>
        {[
          { name: 'Frame 3',      indent: false, active: false },
          { name: "Hi, I'm Jessica", indent: true,  active: true  },
          { name: 'Typography',   indent: true,  active: false },
          { name: 'Colours',      indent: true,  active: false },
        ].map((layer) => (
          <div
            key={layer.name}
            className={`flex items-center gap-1.5 text-[11px] py-1.5 ${
              layer.active
                ? 'bg-[#818CF8]/10 text-[#818CF8] font-semibold'
                : 'text-[#0A0A0A]/45'
            }`}
            style={{ paddingLeft: layer.indent ? 20 : 12 }}
          >
            <span className="text-[8px] opacity-70">{layer.active ? '◉' : '○'}</span>
            {layer.name}
          </div>
        ))}
      </FloatCard>

      {/* Tool panel grid — right side */}
      <FloatCard className="top-[30%] right-[4.5%] p-2.5 grid grid-cols-2 gap-1.5 w-[88px]" delay={0.8} amplitude={9} duration={5.5}>
        {(
          [
            { glyph: '↖', active: true },
            { glyph: '↔', active: false },
            { glyph: '✒', active: false },
            { glyph: '⬟', active: false },
            { glyph: '↺', active: false },
            { glyph: 'T',  active: false },
          ] as { glyph: string; active: boolean }[]
        ).map((tool, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold ${
              tool.active
                ? 'bg-[#0A0A0A] text-white'
                : 'bg-[#F5F5F3] text-[#0A0A0A]/55'
            }`}
          >
            {tool.glyph}
          </div>
        ))}
      </FloatCard>

      {/* Cursor + name label — centre right */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{ top: '50%', right: '22%' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="flex items-start gap-1">
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
            <path
              d="M1 1L7.5 19L10 12L17 9L1 1Z"
              fill="#818CF8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-4 bg-[#818CF8] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
            Jessica ✨
          </div>
        </div>
      </motion.div>

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            ...(s.left ? { left: s.left } : { right: s.right }),
          }}
          animate={{ scale: [1, 1.25, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        >
          <Sparkle size={s.size} color={s.color} />
        </motion.div>
      ))}
    </div>
  )
}
