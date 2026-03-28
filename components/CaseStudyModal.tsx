'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface Project {
  id: number
  title: string
  category: string
  color: string
  tagline: string
  description: string
  focus: string
  services: string[]
  year: string
  imageUrl?: string
}

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-30 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Centered floating modal */}
          <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none" style={{ padding: '24px' }}>
            <motion.div
              key="modal"
              className="w-full max-w-2xl flex flex-col rounded-3xl overflow-hidden pointer-events-auto"
              style={{ maxHeight: 'calc(100vh - 48px)', backgroundColor: '#FDFCF8' }}
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-4 shrink-0 border-b border-black/8">
                <span className="text-black/70 font-sans font-medium text-sm tracking-wide">
                  {project.title}
                </span>
                <button
                  onClick={onClose}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-black/15 text-black/40 hover:text-black/70 hover:border-black/30 transition-colors"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1">
                {/* Hero image / color block */}
                <div
                  className="w-full relative overflow-hidden"
                  style={{ aspectRatio: '16/7', backgroundColor: project.color }}
                >
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="px-6 py-8 space-y-8">
                  {/* Badge + title + tagline */}
                  <div className="space-y-3">
                    <span className="inline-block border border-black/20 text-black/40 font-sans text-xs tracking-widest uppercase rounded-full px-3 py-1">
                      Project
                    </span>
                    <h2
                      className="text-black font-sans font-medium leading-tight tracking-tight"
                      style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="text-black/35 font-sans leading-snug tracking-tight"
                      style={{ fontSize: 'clamp(16px, 2.2vw, 28px)' }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <div className="border-t border-black/8" />

                  {/* Focus + description */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <div>
                      <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Focus</p>
                      <p className="text-black/70 font-sans text-sm mt-1.5">{project.focus}</p>
                    </div>
                    <p className="text-black/55 font-sans text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Services</p>
                    <div className="flex flex-col gap-1">
                      {project.services.map((s) => (
                        <p key={s} className="text-black/70 font-sans text-sm">{s}</p>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6 pb-2">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Year</p>
                    <p className="text-black/70 font-sans text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
