'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Dock from '@/components/Dock'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Work from '@/components/sections/Work'
import Playground from '@/components/sections/Playground'
import Contact from '@/components/sections/Contact'

export type Section = 'home' | 'about' | 'work' | 'playground' | 'contact'

const sectionMap = {
  home: Home,
  about: About,
  work: Work,
  playground: Playground,
  contact: Contact,
}

export default function Page() {
  const [active, setActive] = useState<Section>('home')
  const ActiveSection = sectionMap[active]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#FDFCF8]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <ActiveSection />
        </motion.div>
      </AnimatePresence>
      <Dock active={active} onNavigate={setActive} />
    </div>
  )
}
