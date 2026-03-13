import HeroSection from '@/components/HeroSection'
import WorkSlide, { type Project } from '@/components/WorkSlide'

const projects: Project[] = [
  {
    id: 1,
    title: 'AURA › BRAND /DENT/TY',
    category: 'BRAND DESIGN',
    year: '2024',
    gradient: `
      radial-gradient(ellipse 55% 55% at 12% 22%, rgba(35, 65, 30, 0.9) 0%, transparent 65%),
      radial-gradient(ellipse 50% 50% at 78% 68%, rgba(100, 55, 18, 0.85) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 50% 10%, rgba(80, 100, 40, 0.4) 0%, transparent 60%),
      #060604
    `,
  },
  {
    id: 2,
    title: 'LUM/O › D/G/TAL EXPER/ENCE',
    category: 'WEB DESIGN · UX',
    year: '2024',
    gradient: `
      radial-gradient(ellipse 70% 70% at 28% 38%, rgba(45, 55, 115, 0.9) 0%, transparent 68%),
      radial-gradient(ellipse 45% 45% at 72% 28%, rgba(140, 90, 170, 0.55) 0%, transparent 60%),
      radial-gradient(ellipse 35% 35% at 80% 70%, rgba(30, 40, 90, 0.7) 0%, transparent 65%),
      #06060e
    `,
  },
  {
    id: 3,
    title: 'PAR/S WORLD CHAMP/ONSH/PS › YONEX PLAYERS LOUNGE',
    category: 'SPATIAL · VIDEO · PHOTOGRAPHY',
    year: '2024',
    gradient: `
      radial-gradient(ellipse 80% 75% at 45% 38%, rgba(90, 110, 155, 0.85) 0%, rgba(35, 55, 100, 0.65) 55%, transparent 80%),
      radial-gradient(ellipse 40% 40% at 15% 70%, rgba(60, 80, 130, 0.5) 0%, transparent 60%),
      #07080f
    `,
  },
  {
    id: 4,
    title: 'SOLE/L › ED/TOR/AL',
    category: 'EDITORIAL · PRINT',
    year: '2023',
    gradient: `
      radial-gradient(ellipse 60% 60% at 22% 32%, rgba(120, 75, 25, 0.88) 0%, transparent 65%),
      radial-gradient(ellipse 45% 45% at 68% 62%, rgba(175, 130, 50, 0.55) 0%, transparent 62%),
      radial-gradient(ellipse 35% 35% at 80% 20%, rgba(90, 55, 15, 0.5) 0%, transparent 60%),
      #090600
    `,
  },
]

export default function Home() {
  return (
    <div className="scroll-container">
      <HeroSection />
      {projects.map((project, i) => (
        <WorkSlide
          key={project.id}
          project={project}
          index={i}
          total={projects.length}
        />
      ))}
    </div>
  )
}
