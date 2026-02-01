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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative border border-white/5 overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur-sm h-full flex flex-col shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-colors"
      onMouseMove={handleMouseMove}
    >
      {/* Radial Gradient Follow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Container - Fixed Aspect Ratio 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
        {project.images[0] ? (
          <Image 
            src={project.images[0]} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
            No Image
          </div>
        )}
        
        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
            {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        
        <p className="mt-3 text-sm text-zinc-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack - Modern Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
             <span className="text-[10px] px-2 py-1 text-zinc-500">+{project.stack.length - 4}</span>
          )}
        </div>
      </div>

      <Link href={`/portafolio/${project.slug}`} className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl">
        <span className="sr-only">View {project.title}</span>
      </Link>
    </motion.div>
  );
}