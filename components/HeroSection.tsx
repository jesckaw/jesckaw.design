'use client'

import { useState, useEffect } from 'react'

function Clock({ tz, label, active }: { tz: string; label: string; active?: boolean }) {
  const [time, setTime] = useState('--:-- --')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [tz])

  return (
    <div className="text-right">
      <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-0.5 flex items-center justify-end gap-1.5">
        {active && <span className="text-white/70">▶</span>}
        {label}
      </div>
      <div className="text-sm text-white tabular-nums font-medium">{time}</div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      className="snap-section flex flex-col text-white"
      style={{
        background: `
          radial-gradient(circle 650px at 8% 18%, rgba(45, 85, 115, 0.7) 0%, transparent 68%),
          radial-gradient(ellipse 85% 80% at 58% 48%, #bf3e28 0%, #7a1508 52%, #050202 100%)
        `,
      }}
    >
      {/* Nav */}
      <nav className="relative z-20 flex items-start justify-between px-8 pt-7 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight">jesckaw</span>
          <span className="text-white/25">|</span>
          <span className="text-sm text-white/45 font-light">design</span>
        </div>

        {/* Nav links — two columns */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#work" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Work</a>
            <a href="#services" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Services</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#about" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">About</a>
            <a href="mailto:hello@jesckaw.design" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Live clocks */}
        <div className="flex flex-col gap-3">
          <Clock tz="America/New_York" label="New York" active />
          <Clock tz="Europe/London" label="London" />
          <Clock tz="Asia/Tokyo" label="Tokyo" />
        </div>
      </nav>

      {/* Main headline */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-8 text-center">
        <h1
          className="font-extrabold leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          We are a studio<br />
          <em className="not-italic">of collective</em><br />
          creativity.
        </h1>
      </div>

      {/* Bottom strip */}
      <div className="relative z-20 flex items-end justify-between px-8 pb-7 shrink-0">
        {/* Decorative badge */}
        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-white/50 text-xs">✦</span>
        </div>

        {/* Descriptor columns */}
        <div className="flex gap-16">
          <div>
            <p className="text-sm font-medium">Based in [City].</p>
            <p className="text-xs text-white/40 mt-0.5">Born online.</p>
          </div>
          <div>
            <p className="text-sm font-medium">Design-driven</p>
            <p className="text-xs text-white/40 mt-0.5">creative studio</p>
          </div>
          <div>
            <p className="text-sm font-medium">Branding, digital</p>
            <p className="text-xs text-white/40 mt-0.5">and visual identity</p>
          </div>
        </div>

        {/* Scroll hint */}
        <span className="text-white/40 text-lg">↓</span>
      </div>
    </section>
  )
}
