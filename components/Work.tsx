"use client";

const projects = [
  {
    id: "01",
    title: "Aura Brand Identity",
    category: "Brand Identity",
    year: "2024",
    color: "#E8DDD0",
    image: null,
    gridArea: "top-left",
  },
  {
    id: "02",
    title: "Lumio Digital Experience",
    category: "Web Design",
    year: "2024",
    color: "#D9E4DC",
    image: null,
    gridArea: "top-right",
  },
  {
    id: "03",
    title: "Soleil Editorial",
    category: "Editorial Design",
    year: "2023",
    color: "#E4DDD9",
    image: null,
    gridArea: "bottom-left",
  },
  {
    id: "04",
    title: "Verd Packaging",
    category: "Packaging",
    year: "2023",
    color: "#DCE4DD",
    image: null,
    gridArea: "bottom-right",
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-8 md:px-12 py-32">
      {/* Heading */}
      <h2 className="font-display text-6xl md:text-8xl font-light text-ink mb-16">
        Selected <span className="italic">Works</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Top row — equal columns */}
        <a
          href="#"
          className="aspect-[4/3] rounded-2xl bg-stone/40 block overflow-hidden hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[0].color }}
        />
        <a
          href="#"
          className="aspect-[4/3] rounded-2xl bg-stone/40 block overflow-hidden hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[1].color }}
        />

        {/* Bottom row — narrow + wide */}
        <a
          href="#"
          className="col-span-1 aspect-[3/4] rounded-2xl bg-stone/40 block overflow-hidden hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[2].color }}
        />
        <a
          href="#"
          className="col-span-1 aspect-[3/2] rounded-2xl bg-stone/40 block overflow-hidden hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: projects[3].color }}
        />
      </div>
    </section>
  );
}
