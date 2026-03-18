'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Blue flower — bottom left */}
      <div
        className="absolute z-0 pointer-events-none select-none"
        style={{ bottom: -160, left: -160 }}
      >
        <Image src="/blue-flw.svg" alt="" width={500} height={500} />
      </div>

      {/* Pink flower — right side */}
      <div
        className="absolute z-0 pointer-events-none select-none"
        style={{ right: -180, top: '28%' }}
      >
        <Image src="/pink-flw.svg" alt="" width={520} height={520} />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-6 px-6">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(48px, 7.5vw, 100px)' }}
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
