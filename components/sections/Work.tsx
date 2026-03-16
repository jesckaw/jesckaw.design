'use client'

const projects = [
  {
    id: 1,
    title: 'buddy',
    category: 'Travel',
    color: '#EEF2FF',
  },
  {
    id: 2,
    title: 'Aura Finance',
    category: 'Fintech',
    color: '#F0EEFF',
  },
  {
    id: 3,
    title: 'Come Play Icons',
    category: 'Illustration',
    color: '#FFF0F6',
  },
  {
    id: 4,
    title: 'HealthLink',
    category: 'Healthcare',
    color: '#ECFDF5',
  },
]

export default function Work() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden pt-24 sm:pt-28 md:pt-36 px-6 sm:px-12 md:px-20 lg:px-28 pb-6 sm:pb-10">
      {/* Heading */}
      <h2
        className="font-sans font-medium leading-none tracking-tight mb-5 sm:mb-8 shrink-0"
        style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}
      >
        Selected{' '}
        <span className="font-serif italic font-normal" style={{ fontSize: '1.05em' }}>works</span>
      </h2>

      {/* Grid — 1 col on mobile, 2 cols on sm+ */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-h-0">
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 min-h-[140px] sm:min-h-0"
          style={{ backgroundColor: projects[0].color }}
        />
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 min-h-[140px] sm:min-h-0"
          style={{ backgroundColor: projects[1].color }}
        />
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 min-h-[140px] sm:min-h-0"
          style={{ backgroundColor: projects[2].color }}
        />
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 min-h-[140px] sm:min-h-0"
          style={{ backgroundColor: projects[3].color }}
        />
      </div>
    </div>
  )
}
