export interface Project {
  id: number
  title: string       // use stylized slashes e.g. "NKORA › BRAND /DENT/TY"
  category: string    // e.g. "BRAND DESIGN" or "SPATIAL · VIDEO · PHOTOGRAPHY"
  year: string
  gradient: string    // CSS background value — radial gradients matching project palette
}

interface Props {
  project: Project
  index: number
  total: number
}

export default function WorkSlide({ project, index, total }: Props) {
  return (
    <section
      className="snap-section flex items-center text-white"
      style={{ background: project.gradient }}
    >
      {/* Left: vertical dots + project info */}
      <div className="relative z-20 flex items-center gap-6 h-full pl-8 pr-4 shrink-0">
        {/* Vertical pagination dots */}
        <div className="flex flex-col items-center gap-[7px]">
          <span className="text-white/50 text-[10px] mb-1">▶</span>
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-1 h-3 bg-white'
                  : 'w-1 h-1 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Text info */}
        <div className="flex flex-col gap-3 max-w-[260px]">
          <span className="text-[10px] text-white/50 uppercase tracking-[0.25em]">
            Recent Work
          </span>
          <h2
            className="font-extrabold uppercase leading-[1.05]"
            style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
          >
            {project.title}
          </h2>
          <span className="text-[10px] text-white/45 uppercase tracking-[0.2em]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Center: project image */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-6">
        <div
          className="w-full bg-white/8 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center"
          style={{ maxWidth: 720, aspectRatio: '16/10' }}
        >
          {/*
            Replace this placeholder with a Next.js <Image /> when ready:
            <Image src="/projects/project-name.jpg" fill alt={project.title} className="object-cover" />
          */}
          <p className="text-white/20 text-xs font-mono select-none">Add project image</p>
        </div>
      </div>

      {/* Bottom center: CTA pill */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#work"
          className="flex items-center gap-2 border border-white/30 rounded-full px-6 py-2.5 text-[11px] uppercase tracking-widest text-white/60 hover:text-white hover:border-white/60 transition-colors"
        >
          Discover all projects →
        </a>
      </div>

      {/* Top-right pause/play */}
      <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
        <span className="text-black text-[11px] font-bold tracking-tight leading-none">| ||</span>
      </div>
    </section>
  )
}
