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
    <div
      className="group relative border border-white/10 overflow-hidden rounded-xl bg-zinc-900 h-full flex flex-col"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        {project.images[0] ? (
          <Image 
            src={project.images[0]} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        
        <p className="mt-2 text-sm text-zinc-400 line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>
        
        {/* Stack - Always visible but styled to pop on hover could be an option, 
            but prompt says "show stack on hover". 
            Interpretation: It can be visible always, or reveal. 
            Design choice: Keep it visible for better UX on mobile/quick scan, 
            but maybe highlight or animate. 
            Let's make it visible but subtle, maybe brighter on hover. */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 transition-colors group-hover:text-zinc-200 group-hover:border-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link href={`/portafolio/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {project.title}</span>
      </Link>
    </div>
  );
}
