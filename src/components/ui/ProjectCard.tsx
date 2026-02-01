"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative border border-white/10 overflow-hidden rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-md h-full flex flex-col shadow-2xl hover:border-purple-500/40 transition-all duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Radial Gradient Follow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Container - Mandatory 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5">
        {project.images[0] ? (
          <div className="relative w-full h-full p-2 group-hover:p-0 transition-all duration-500">
             {/* Sutil background para emular un mockup si es web */}
             <div className={`absolute inset-0 ${project.category === 'Web' ? 'bg-gradient-to-br from-purple-900/20 to-zinc-900' : 'bg-black'}`} />
             <Image 
                src={project.images[0]} 
                alt={project.title} 
                fill 
                className="object-cover rounded-lg group-hover:rounded-none transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
          </div>
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
            No Image
          </div>
        )}
        
        {/* Category Overlay */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-tighter z-10">
            {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="mt-3 text-sm text-[#b0b0b0] line-clamp-3 mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link href={`/portafolio/${project.slug}`} className="absolute inset-0 z-20 rounded-2xl">
        <span className="sr-only">View {project.title}</span>
      </Link>
    </motion.div>
  );
}
