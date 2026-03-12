"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const services = [
  { title: "Brand Identity", items: ["Logo & Logomark", "Visual Systems", "Brand Guidelines", "Stationery Design"] },
  { title: "Digital Design", items: ["Web Design", "UI/UX", "Interactive Experiences", "Motion Design"] },
  { title: "Editorial", items: ["Print Design", "Magazine Layout", "Book Design", "Typography"] },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-widest uppercase text-muted font-mono mb-8"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-8"
            >
              Design is about{" "}
              <span className="italic">reducing</span>{" "}
              until only the essential remains.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-muted font-body font-light text-base leading-relaxed mb-6"
            >
              I'm a designer and creative director with a focus on brand systems, 
              digital experiences, and editorial design. My work sits at the intersection 
              of strategy and craft — where meaning and aesthetics meet.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-muted font-body font-light text-base leading-relaxed"
            >
              Every project starts with listening — understanding what a brand is, 
              what it aspires to be, and who it speaks to. Then comes the slow, 
              deliberate work of making that visible.
            </motion.p>
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] overflow-hidden bg-stone"
          >
            <motion.div className="absolute inset-0" style={{ y: imgY }}>
              {/* Replace with: <Image src="/about-photo.jpg" fill alt="Jesckaw" className="object-cover scale-110" /> */}
              <div className="w-full h-full bg-gradient-to-br from-stone via-cream to-stone flex items-center justify-center">
                <p className="text-muted font-mono text-xs tracking-widest">Add your photo here</p>
              </div>
            </motion.div>
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="font-mono text-xs text-muted tracking-widest">DESIGNER / CREATIVE</p>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="divider mb-16" />
          <p className="text-xs tracking-widest uppercase text-muted font-mono mb-12">Services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-display text-2xl font-light text-ink mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted font-body text-sm">
                      <span className="w-4 h-px bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
