'use client'

import { useState, useRef } from 'react'
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
  {
    id: 5,
    title: 'Lumio',
    category: 'Health',
    color: '#FFF1F2',
    tagline: 'A calmer way to track your mental wellness',
    description: 'Lumio is a mental wellness app designed to help people build healthy habits without the pressure. We created an experience rooted in warmth and simplicity — gentle check-ins, mood tracking, and insights that feel supportive, not clinical.',
    focus: 'Health & Wellness',
    services: ['Product Design', 'UX Research', 'Motion & Interaction', 'Prototyping'],
    year: '2024',
  },
  {
    id: 6,
    title: 'Fieldwork',
    category: 'SaaS',
    color: '#F0FDF4',
    tagline: 'Project management built for people who build things',
    description: 'Fieldwork is a project management tool designed for construction and field service teams. We overhauled the end-to-end experience — from job scheduling to reporting — making complex workflows feel intuitive on both desktop and mobile.',
    focus: 'SaaS / Enterprise',
    services: ['Product Design', 'UX Architecture', 'Design System', 'User Testing'],
    year: '2023',
  },
  {
    id: 7,
    title: 'Deco',
    category: 'E-Commerce',
    color: '#FFFBEB',
    tagline: 'Shopping for home goods that actually feel like you',
    description: 'Deco is a curated home goods e-commerce platform that helps people find pieces that match their personal style. We redesigned the discovery and checkout experience — making browsing feel editorial and purchasing feel effortless.',
    focus: 'E-Commerce',
    services: ['Product Design', 'UX Research', 'Brand Identity', 'Prototyping'],
    year: '2024',
  },
  {
    id: 8,
    title: 'Waypoint',
    category: 'Travel',
    color: '#EFF6FF',
    tagline: 'Trip planning without the tab overload',
    description: 'Waypoint is a collaborative travel planning app that brings itineraries, bookings, and group decisions into one place. We designed the full experience — from destination discovery to day-by-day planning — making group travel actually enjoyable to coordinate.',
    focus: 'Travel / Consumer',
    services: ['Product Design', 'Interaction Design', 'Prototyping', 'Motion & Interaction'],
    year: '2023',
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all duration-300 text-left cursor-pointer flex flex-col justify-between p-5"
      style={{
        backgroundColor: project.color,
        width: '280px',
        height: '200px',
      }}
    >
      <span className="text-xs font-medium text-black/40 uppercase tracking-wider">{project.category}</span>
      <div>
        <p className="font-sans font-semibold text-[#0A0A0A] text-lg leading-snug">{project.title}</p>
        <p className="text-sm text-black/50 mt-1 line-clamp-2">{project.tagline}</p>
      </div>
    </button>
  )
}

export default function Work({ onModalChange }: { onModalChange?: (open: boolean) => void }) {
  const [selected, setSelected] = useState<Project | null>(null)
  const [paused, setPaused] = useState(false)

  function openModal(project: Project) {
    setSelected(project)
    onModalChange?.(true)
  }

  function closeModal() {
    setSelected(null)
    onModalChange?.(false)
  }

  // Duplicate cards for seamless loop
  const doubled = [...projects, ...projects]

  return (
    <>
      <div className="relative w-full h-full flex flex-col overflow-hidden pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-medium leading-none tracking-tight mb-5 sm:mb-8 shrink-0 page-x"
          style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}
        >
          Selected{' '}
          <span className="font-serif italic font-normal" style={{ fontSize: '1.05em' }}>works</span>
        </motion.h2>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-4"
            style={{
              animation: `marquee 18s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
              width: 'max-content',
            }}
          >
            {doubled.map((project, i) => (
              <ProjectCard key={`${project.id}-${i}`} project={project} onClick={() => openModal(project)} />
            ))}
          </div>
        </motion.div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      <CaseStudyModal project={selected} onClose={closeModal} />
    </>
  )
}
