'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CaseStudyModal, { type Project } from '@/components/CaseStudyModal'

const projects: Project[] = [
  {
    id: 1,
    title: 'Aura Finance',
    category: 'Fintech',
    color: '#F0EEFF',
    tagline: 'Making personal finance feel less like a chore',
    description: 'Aura is a personal finance platform built to help people actually understand and act on their money. We redesigned the full product experience — from onboarding through daily use — with a focus on clarity, trust, and reducing cognitive load at every step.',
    focus: 'Fintech',
    services: ['Product Design', 'UX Research', 'Design System', 'Prototyping', 'Motion & Interaction'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Aibao',
    category: 'AI',
    color: '#EEF2FF',
    tagline: 'A smarter companion for everyday tasks',
    description: 'Aibao is an AI-powered productivity tool designed to feel natural and human. We crafted the end-to-end experience from early concept through launch — defining the interaction model, visual language, and the fine details that make it feel genuinely useful rather than gimmicky.',
    focus: 'AI / Productivity',
    services: ['Product Design', 'Interaction Design', 'Brand Identity', 'Prototyping'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Noteable',
    category: 'Productivity',
    color: '#FFF7ED',
    tagline: 'Where ideas become something worth keeping',
    description: 'Noteable is a note-taking and knowledge management app for people who think in connections, not folders. We led design from concept to launch — building a system flexible enough for writers, researchers, and makers while staying fast and frictionless for daily capture.',
    focus: 'Productivity',
    services: ['Product Design', 'UX Architecture', 'Design System', 'Content Strategy'],
    year: '2023',
  },
  {
    id: 4,
    title: 'Hoolii',
    category: 'Social',
    color: '#ECFDF5',
    tagline: 'Bringing groups together around the things they love',
    description: 'Hoolii is a social platform built around shared interests and local communities. We designed the full mobile experience — from discovery to group coordination — making it easy for people to find their people and actually show up.',
    focus: 'Social / Community',
    services: ['Product Design', 'UX Research', 'Brand Ecosystem', 'Motion & Interaction'],
    year: '2023',
  },
]

export default function Work({ onModalChange }: { onModalChange?: (open: boolean) => void }) {
  const [selected, setSelected] = useState<Project | null>(null)

  function openModal(project: Project) {
    setSelected(project)
    onModalChange?.(true)
  }

  function closeModal() {
    setSelected(null)
    onModalChange?.(false)
  }

  return (
    <>
      <div className="relative w-full h-full flex flex-col overflow-hidden pt-24 sm:pt-28 md:pt-36 page-x pb-6 sm:pb-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-medium leading-none tracking-tight mb-5 sm:mb-8 shrink-0"
          style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}
        >
          Selected{' '}
          <span className="font-serif italic font-normal" style={{ fontSize: '1.05em' }}>works</span>
        </motion.h2>

        {/* Grid — 1 col on mobile, 2 cols on sm+ */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-h-0">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all duration-300 min-h-[140px] sm:min-h-0 text-left w-full cursor-pointer"
              style={{ backgroundColor: project.color }}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal project={selected} onClose={closeModal} />
    </>
  )
}
