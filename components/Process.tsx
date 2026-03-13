"use client";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "Every engagement begins with deep listening. I immerse myself in your world — your goals, audience, competitors, and aspirations. Workshops, interviews, and research form the foundation.",
  },
  {
    num: "02",
    title: "Define",
    description:
      "From discovery, a clear strategy emerges. We define positioning, voice, and visual territory. This is the compass that guides every creative decision that follows.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "Concepts are explored across multiple directions before convergence. I believe in showing the thinking — rough sketches, refined mockups, and the reasoning behind each choice.",
  },
  {
    num: "04",
    title: "Deliver",
    description:
      "Final assets are produced with obsessive attention to detail. Comprehensive handoff documentation ensures your team can steward the work confidently into the future.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 max-w-7xl mx-auto px-8 md:px-12">
      {/* Heading */}
      <div className="mb-20">
        <p className="text-xs tracking-widest uppercase text-muted font-mono mb-4">Process</p>
        <h2 className="font-display text-6xl md:text-8xl font-light text-ink">
          How I <span className="italic">Work</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
        {steps.map((step) => (
          <div key={step.num} className="group">
            <div className="flex items-start gap-8">
              <span className="font-mono text-xs text-accent mt-1 shrink-0">{step.num}</span>
              <div>
                <h3 className="font-display text-4xl font-light text-ink mb-4 group-hover:italic transition-all duration-500">
                  {step.title}
                </h3>
                <div className="w-8 h-px bg-stone mb-4 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                <p className="text-muted font-body font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
