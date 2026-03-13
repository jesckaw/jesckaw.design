"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Aura Brand Identity",
    category: "Brand Identity",
    year: "2024",
    description: "Complete visual identity system for a luxury wellness brand — logomark, typography, color palette, and brand guidelines.",
    tags: ["Branding", "Identity", "Print"],
    color: "#E8DDD0",
    image: null,
  },
  {
    id: "02",
    title: "Lumio Digital Experience",
    category: "Web Design",
    year: "2024",
    description: "Immersive digital experience for an architecture firm. Custom interactions, scroll storytelling, and editorial layout.",
    tags: ["Web", "UX", "Motion"],
    color: "#D9E4DC",
    image: null,
  },
  {
    id: "03",
    title: "Soleil Editorial",
    category: "Editorial Design",
    year: "2023",
    description: "Print and digital editorial design for an independent lifestyle magazine — 80-page quarterly issue.",
    tags: ["Editorial", "Print", "Typography"],
    color: "#E4DDD9",
    image: null,
  },
  {
    id: "04",
    title: "Verd Packaging",
    category: "Packaging",
    year: "2023",
    description: "Sustainable packaging system for an organic skincare range. Material exploration and print production.",
    tags: ["Packaging", "Print", "Sustainability"],
    color: "#DCE4DD",
    image: null,
  },
];

function ProjectRow({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href="#" className="project-card block py-10 border-b border-stone group">
        <div className="flex items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-start md:items-center gap-6 md:gap-12">
            <span className="font-mono text-xs text-muted mt-1 md:mt-0 shrink-0">{project.id}</span>
            <div>
              <h3 className="font-display text-3xl md:text-5xl font-light text-ink group-hover:text-accent transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-sm text-muted mt-1 font-body">{project.description}</p>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex flex-col items-end gap-2 shrink-0">
            <span className="text-xs tracking-widest uppercase text-muted font-mono">{project.category}</span>
            <span className="text-xs text-muted font-mono">{project.year}</span>
            <div className="flex gap-2 mt-1">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 border border-stone text-muted font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-accent"
          initial={{ x: -10, opacity: 0 }}
          animate={hovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>
      </a>

      {/* Hover color block */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed top-1/2 right-16 -translate-y-1/2 w-72 h-72 rounded pointer-events-none z-10"
            style={{ backgroundColor: project.color }}
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full flex items-center justify-center text-stone font-mono text-xs tracking-widest">
              {/* Replace with: <Image src={project.image} fill alt={project.title} className="object-cover" /> */}
              Add project image
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-8 md:px-12 py-32">
      {/* Heading */}
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-6xl md:text-8xl font-light text-ink">
          Selected
          <br />
          <span className="italic">Work</span>
        </h2>
        <p className="hidden md:block text-muted text-sm font-mono tracking-wide max-w-xs text-right">
          A curated selection of recent projects across brand, digital, and print.
        </p>
      </div>

      {/* Project list */}
      <div>
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>

      {/* View all */}
      <div className="mt-16 flex justify-center">
        <a href="#" className="group flex items-center gap-4 text-sm tracking-widest uppercase font-body text-muted hover:text-ink transition-colors duration-300">
          <span className="w-8 h-px bg-muted group-hover:w-14 group-hover:bg-ink transition-all duration-500" />
          All Projects
          <span className="w-8 h-px bg-muted group-hover:w-14 group-hover:bg-ink transition-all duration-500" />
        </a>
      </div>
    </section>
  );
}
