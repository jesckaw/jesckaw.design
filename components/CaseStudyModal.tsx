'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

export interface Project {
  id: number
  title: string
  category: string
  color: string
  tagline: string
  description: string
  role: string
  company: string
  skills: string[]
  year: string
  imageUrl?: string
  gallery?: string[]
  comingSoon?: boolean
  /**
   * Defines the gallery layout as a sequence of rows.
   * 'full' = single full-width image, 'pair' = two images side by side.
   * Images are consumed in order from the gallery array.
   * If omitted, defaults to repeating [full, pair] pattern.
   */
  galleryLayout?: ('full' | 'pair')[]
  /**
   * Outcome section shown after the gallery.
   * Each string is rendered as a separate paragraph.
   * Use "→ " prefix for result/stat lines.
   */
  outcome?: string[]
}

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

function GalleryImage({ src, aspectRatio, sizes }: { src: string; aspectRatio: string; sizes: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden bg-black/5 relative" style={{ aspectRatio }}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-black/5" />
      )}
      <Image
        src={src}
        alt=""
        fill
        className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
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

          {/* Centered floating modal (desktop) / bottom sheet (mobile) */}
          <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center pointer-events-none sm:p-6">
            <motion.div
              key="modal"
              className="w-full max-w-4xl flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden pointer-events-auto"
              style={{ maxHeight: 'calc(100vh - 40px)', backgroundColor: '#FDFCF8' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
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
                {project.comingSoon ? (
                  <div className="flex flex-col items-center justify-center py-24 px-6" style={{ backgroundColor: project.color }}>
                    <p className="text-black/20 font-sans text-xs uppercase tracking-widest mb-3">Coming Soon</p>
                    <h2 className="text-black font-sans font-medium text-2xl sm:text-3xl tracking-tight mb-2">{project.title}</h2>
                    <p className="text-black/40 font-sans text-sm">{project.tagline}</p>
                  </div>
                ) : (
                <>
                {/* Hero image / color block */}
                <div
                  className="w-full relative overflow-hidden"
                  style={{ aspectRatio: '16/7', backgroundColor: project.color }}
                >
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority
                    />
                  )}
                </div>

                {/* Content */}
                <div className="px-6 py-8 space-y-8">
                  {/* Badge + title + tagline */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <div className="pt-1">
                      <span className="inline-block border border-black/20 text-black/40 font-sans text-xs tracking-widest uppercase rounded-full px-3 py-1">
                        Project
                      </span>
                    </div>
                    <div className="space-y-1">
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
                  </div>

                  <div className="border-t border-black/8" />

                  {/* Role */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Role</p>
                    <p className="text-black/70 font-sans text-sm">{project.role}</p>
                  </div>

                  {/* Company */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Company</p>
                    <p className="text-black/70 font-sans text-sm">{project.company}</p>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Skills</p>
                    <p className="text-black/70 font-sans text-sm">{project.skills.join(', ')}</p>
                  </div>

                  {/* Year */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                    <p className="text-black/35 font-sans text-xs uppercase tracking-widest">Year</p>
                    <p className="text-black/70 font-sans text-sm">{project.year}</p>
                  </div>

                  {/* Focus */}
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6 pb-2">
                    <div>
                      <p className="text-black/35 font-sans text-xs uppercase tracking-widest mb-2">Focus</p>
                      <p className="text-black/70 font-sans text-sm font-medium">{project.category}</p>
                    </div>
                    <p className="text-black/55 font-sans text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="px-6 pb-8 flex flex-col gap-3">
                    {(() => {
                      const images = project.gallery!
                      let idx = 0
                      const layout = project.galleryLayout ?? (() => {
                        const rows: ('full' | 'pair')[] = []
                        let remaining = images.length
                        while (remaining > 0) {
                          rows.push('full'); remaining--
                          if (remaining >= 2) { rows.push('pair'); remaining -= 2 }
                          else if (remaining === 1) { rows.push('full'); remaining-- }
                        }
                        return rows
                      })()

                      return layout.map((type, rowIdx) => {
                        if (type === 'full' && idx < images.length) {
                          const src = images[idx++]
                          return (
                            <GalleryImage key={rowIdx} src={src} aspectRatio="16/9" sizes="(max-width: 896px) 100vw, 848px" />
                          )
                        }
                        if (type === 'pair' && idx < images.length) {
                          const leftSrc = images[idx++]
                          const rightSrc = idx < images.length ? images[idx++] : undefined
                          return (
                            <div key={rowIdx} className="grid grid-cols-2 gap-3">
                              <GalleryImage src={leftSrc} aspectRatio="1/1" sizes="(max-width: 896px) 50vw, 420px" />
                              {rightSrc && (
                                <GalleryImage src={rightSrc} aspectRatio="1/1" sizes="(max-width: 896px) 50vw, 420px" />
                              )}
                            </div>
                          )
                        }
                        return null
                      })
                    })()}
                  </div>
                )}

                {/* Outcome */}
                {project.outcome && project.outcome.length > 0 && (
                  <div className="px-6 pb-8">
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-x-6">
                      <p className="text-black/70 font-sans text-sm font-medium">Outcome</p>
                      <div className="space-y-4">
                        {project.outcome.map((text, i) => (
                          <p key={i} className="text-black/45 font-sans text-sm leading-relaxed whitespace-pre-line">
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
