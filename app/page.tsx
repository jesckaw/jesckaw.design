'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TopNav from '@/components/TopNav'
import Home from '@/components/sections/Home'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

// Kept for backward compatibility with unused legacy nav components.
export type Section = 'home' | 'about' | 'work' | 'playground' | 'contact'

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="relative w-full bg-[#FDFCF8]">
      <AnimatePresence>
        {!modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TopNav />
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work onModalChange={setModalOpen} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
