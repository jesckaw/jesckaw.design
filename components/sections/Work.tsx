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
    <div className="relative w-full h-full flex flex-col overflow-hidden pt-36 px-10 pb-10">
      {/* Heading */}
      <h2
        className="font-sans font-medium leading-none tracking-tight mb-8 shrink-0"
        style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}
      >
        Selected{' '}
        <span className="font-serif italic font-normal" style={{ fontSize: '1.05em' }}>works</span>
      </h2>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
        {/* Top-left */}
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[0].color }}
        />
        {/* Top-right */}
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[1].color }}
        />
        {/* Bottom-left (narrower) */}
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 col-span-1"
          style={{ backgroundColor: projects[2].color }}
        />
        {/* Bottom-right (wider) */}
        <a
          href="#"
          className="rounded-2xl hover:opacity-90 transition-opacity duration-300 col-span-1"
          style={{ backgroundColor: projects[3].color }}
        />
      </div>
    </div>
  )
}
