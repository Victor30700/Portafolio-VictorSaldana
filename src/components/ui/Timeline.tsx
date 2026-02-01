"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={containerRef} className="relative container mx-auto px-4 py-12">
      {/* Vertical Line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 origin-top"
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10 mt-1.5" />

            {/* Content Spacer for desktop centered layout */}
            <div className="hidden md:block flex-1" />

            {/* Content Card */}
            <div className="flex-1 ml-8 md:ml-0">
              <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <span className="text-sm font-mono text-purple-400 mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-zinc-400 mb-4">{exp.company}</h4>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
