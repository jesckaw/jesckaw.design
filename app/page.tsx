'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TopNav from '@/components/TopNav'
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
  const [modalOpen, setModalOpen] = useState(false)
  const ActiveSection = sectionMap[active]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#FDFCF8]">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full"
        >
          <ActiveSection onModalChange={active === 'work' ? setModalOpen : undefined} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {!modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TopNav active={active} onNavigate={setActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
