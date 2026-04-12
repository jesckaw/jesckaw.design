'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CaseStudyModal, { type Project } from '@/components/CaseStudyModal'

const projects: Project[] = [
  {
    id: 1,
    title: 'Aura Finance',
    category: 'Fintech',
    color: '#F0EEFF',
    tagline: 'Making personal finance feel less like a chore',
    description: 'I led the design of Aura\'s product experience from 0 to 1, spanning the mobile app, web app, and marketing site. As the team expanded to desktop, I defined how the experience would scale beyond mobile, strengthened the design system, and shaped the end-to-end journey from concept to delivery.',
    role: 'Product Designer',
    company: 'Aura Finance',
    skills: ['Product Design', 'UX Research', 'Design System', 'Prototyping', 'Motion & Interaction', 'Product Strategy'],
    year: '2024 – Present',
    imageUrl: '/aura4.png',
    gallery: [
      '/aura1.png',
      '/aura2.png',
      '/aura3.png',
      '/aura4.png',
      '/aura5.png',
      '/aura6.png',
      '/aura7.png',
      '/aura8.png',
      '/aura9.png',
      '/aura10.png',
    ],
    galleryLayout: ['pair', 'full', 'full', 'full', 'pair', 'full', 'full', 'full'],
    // Outcome: each string is a paragraph. Use "→ " prefix for stats.
    outcome: [
      'I took Aura from concept to delivery across mobile, web, and marketing, building a unified design system that scaled with the product as it expanded to desktop.',
      'Through research, I uncovered that employees lacked the confidence to act on their finances. I redesigned the guided action model to bridge the gap between coaching and daily behavior, turning intention into lasting habits.',
      'And the results followed:\n→ 34% increase in daily active users\n→ 18% improvement in onboarding completion\n→ 27% reduction in support tickets',
    ],
  },
  {
    id: 2,
    title: 'Aibao',
    category: 'Branding',
    color: '#FFF8E7',
    tagline: 'Crafting a brand as warm as the food it serves',
    description: 'I built Aibao\'s full brand identity from the ground up, from the playful mascot and logo system to web design, print collateral, and merchandise. I shaped a warm, approachable presence across every touchpoint, from the storefront to the screen, creating a brand that feels as comforting as the food itself.',
    role: 'Brand Designer',
    company: 'Aibao',
    skills: ['Brand Identity', 'Logo Design', 'Web Design', 'Print Design', 'Merchandise'],
    year: '2024 – Present',
    imageUrl: '/aibao3.png',
    gallery: [
      '/aibao1.png',
      '/aibao2.png',
      '/aibao3.png',
      '/aibao4.png',
      '/aibao5.png',
      '/aibao6.png',
      '/aibao7.png',
    ],
    galleryLayout: ['pair', 'full', 'full', 'pair', 'full'],
    outcome: [
      'The brand design I delivered gave Aibao a recognizable, ownable identity across signage, menus, social media, and web, setting it apart in a crowded food and beverage market.',
      'I also built a reusable design and copy system that scaled content production without sacrificing quality, enabling weekly updates, seasonal campaigns, and consistent storytelling across platforms.',
      'And the results followed:\n→ 44% average website conversion, peaking at 68%\n→ 163% increase in organic discovery\n→ Local ranking from 20th to top 5 within 12 months',
    ],
  },
  {
    id: 3,
    title: 'Noteable',
    category: 'Productivity',
    color: '#FFF7ED',
    tagline: 'Turning raw data into stories worth exploring',
    comingSoon: true,
    imageUrl: '/noteable3.png',
    description: 'Noteable is a note-taking and knowledge management app for people who think in connections, not folders. We led design from concept to launch — building a system flexible enough for writers, researchers, and makers while staying fast and frictionless for daily capture.',
    role: 'Product Designer',
    company: 'Noteable',
    skills: ['Product Design', 'UX Architecture', 'Design System', 'Content Strategy'],
    year: '2023',
    gallery: [
      '/images/noteable/landscape-1.jpg',
      '/images/noteable/detail-1.jpg',
      '/images/noteable/detail-2.jpg',
    ],
    outcome: [
      'Noteable gave knowledge workers a system that finally matched how they think — fluid, connected, and fast enough to keep up with ideas in motion.',
      'The flexible architecture we built supports everything from quick daily notes to deep research webs, without sacrificing speed or simplicity.',
      'And the results followed:\n→ 3x increase in average session length\n→ 60% of users created linked notes within the first week\n→ 28% growth in organic signups month-over-month',
    ],
  },
  {
    id: 4,
    title: 'Hoolii',
    category: 'Social',
    color: '#ECFDF5',
    tagline: 'Reinventing how groups coordinate in iMessage',
    comingSoon: true,
    imageUrl: '/hoolii1.png',
    description: 'Hoolii is a social platform built around shared interests and local communities. We designed the full mobile experience — from discovery to group coordination — making it easy for people to find their people and actually show up.',
    role: 'Product Designer',
    company: 'Hoolii',
    skills: ['Product Design', 'UX Research', 'Brand Ecosystem', 'Motion & Interaction'],
    year: '2023',
    gallery: [
      '/images/hoolii/landscape-1.jpg',
      '/images/hoolii/detail-1.jpg',
      '/images/hoolii/detail-2.jpg',
    ],
    outcome: [
      'Hoolii made it genuinely easy for people to find communities that match their interests and actually show up to real-world events.',
      'The design centered on reducing friction at every step — from discovering a group to coordinating plans with members.',
      'And the results followed:\n→ 45% of new users joined a group within 48 hours\n→ 32% increase in event attendance rates\n→ 67% monthly retention among active group members',
    ],
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
      <div className="relative w-full h-full flex flex-col overflow-y-auto overflow-x-hidden pt-32 sm:pt-28 md:pt-36 page-x pb-28 sm:pb-10">
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
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.18 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl min-h-[140px] sm:min-h-0 text-left w-full cursor-pointer flex flex-col justify-between p-5 sm:p-6 relative overflow-hidden"
              style={{ backgroundColor: project.color }}
            >
              {project.imageUrl && (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={project.imageUrl}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
              )}
              <span className={`text-sm font-medium relative z-10 ${project.imageUrl ? 'text-white/70' : 'text-black/40'}`}>{project.category}</span>
              <div className="relative z-10">
                <span className={`block text-xl sm:text-2xl font-semibold mb-1 ${project.imageUrl ? 'text-white' : 'text-black'}`}>{project.title}</span>
                <span className={`block text-sm sm:text-base leading-snug ${project.imageUrl ? 'text-white/70' : 'text-black/40'}`}>{project.tagline}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <CaseStudyModal project={selected} onClose={closeModal} />
    </>
  )
}
