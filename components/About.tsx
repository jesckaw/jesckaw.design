"use client";

const services = [
  { title: "Brand Identity", items: ["Logo & Logomark", "Visual Systems", "Brand Guidelines", "Stationery Design"] },
  { title: "Digital Design", items: ["Web Design", "UI/UX", "Interactive Experiences", "Motion Design"] },
  { title: "Editorial", items: ["Print Design", "Magazine Layout", "Book Design", "Typography"] },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          {/* Text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted font-mono mb-8">
              About
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-8">
              Design is about{" "}
              <span className="italic">reducing</span>{" "}
              until only the essential remains.
            </h2>
            <p className="text-muted font-body font-light text-base leading-relaxed mb-6">
              I'm a designer and creative director with a focus on brand systems,
              digital experiences, and editorial design. My work sits at the intersection
              of strategy and craft — where meaning and aesthetics meet.
            </p>
            <p className="text-muted font-body font-light text-base leading-relaxed">
              Every project starts with listening — understanding what a brand is,
              what it aspires to be, and who it speaks to. Then comes the slow,
              deliberate work of making that visible.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[3/4] overflow-hidden bg-stone">
            <div className="absolute inset-0">
              {/* Replace with: <Image src="/about-photo.jpg" fill alt="Jesckaw" className="object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-br from-stone via-cream to-stone flex items-center justify-center">
                <p className="text-muted font-mono text-xs tracking-widest">Add your photo here</p>
              </div>
            </div>
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="font-mono text-xs text-muted tracking-widest">DESIGNER / CREATIVE</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="divider mb-16" />
          <p className="text-xs tracking-widest uppercase text-muted font-mono mb-12">Services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title}>
                <h3 className="font-display text-2xl font-light text-ink mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted font-body text-sm">
                      <span className="w-4 h-px bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
