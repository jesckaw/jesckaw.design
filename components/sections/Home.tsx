'use client'

import { motion } from 'framer-motion'

function Flower({
  size = 480,
  petalColor = '#8ECDE8',
  starColor = '#8B35B0',
}: {
  size?: number
  petalColor?: string
  starColor?: string
}) {
  const r = size / 2
  const pr = size * 0.25   // petal radius
  const d = size * 0.165   // petal offset from center
  const arm = size * 0.16  // star arm length
  const w = size * 0.047   // star waist half-width

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={r} cy={r - d} r={pr} fill={petalColor} />
      <circle cx={r} cy={r + d} r={pr} fill={petalColor} />
      <circle cx={r - d} cy={r} r={pr} fill={petalColor} />
      <circle cx={r + d} cy={r} r={pr} fill={petalColor} />
      {/* 4-pointed sparkle star */}
      <path
        d={`M ${r},${r - arm} L ${r + w},${r - w} L ${r + arm},${r} L ${r + w},${r + w} L ${r},${r + arm} L ${r - w},${r + w} L ${r - arm},${r} L ${r - w},${r - w} Z`}
        fill={starColor}
      />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Blue flower — bottom left */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ bottom: -160, left: -160 }}
      >
        <Flower size={500} petalColor="#9BD2E5" starColor="#8B35B0" />
      </div>

      {/* Pink flower — right side */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ right: -180, top: '28%' }}
      >
        <Flower size={520} petalColor="#E86FA4" starColor="#7A1040" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-6 px-6">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center leading-[0.95] tracking-tight select-none"
          style={{ fontSize: 'clamp(48px, 7.5vw, 100px)' }}
        >
          <span className="font-serif italic text-[#0A0A0A]">Designing with</span>
          <br />
          <span className="font-black text-[#0A0A0A]">cur</span>
          <span
            className="inline-block w-[2px] rounded-full bg-[#0A0A0A] mx-[1px] align-middle"
            style={{
              height: 'clamp(36px, 5.5vw, 74px)',
              animation: 'blink 1.1s ease-in-out infinite',
            }}
          />
          <span className="font-black text-[#0A0A0A]">osity</span>
          <span className="font-serif italic text-[#0A0A0A]">{' & care.'}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38, duration: 0.5 }}
          className="mt-7 text-[15px] text-[#0A0A0A]/50 font-medium text-center max-w-[480px] leading-relaxed"
        >
          Hi I&apos;m Jessica a multidisciplinary designer who transforms early
          ideas into seamless, scalable products.
        </motion.p>
      </div>
    </div>
  )
}
