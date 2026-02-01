"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Architecture",
    items: ["Microservices", "CQRS", "DDD", "Clean Arch"],
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, // Layers
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    category: "Frontend",
    items: ["React 19", "Next.js 15", "Tailwind 4", "Three.js"],
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, // Shield/UI
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    category: "Backend",
    items: [".NET 10", "Python", "Laravel 12", "Node.js"],
    icon: <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M4 7V5a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v2M12 12h.01" />, // Server
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    category: "AI & Data",
    items: ["OpenAI", "TensorFlow", "Computer Vision", "Python"],
    icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />, // Brain/Eye
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    category: "Cloud",
    items: ["Azure", "AWS", "Docker", "CI/CD"],
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />, // Cloud
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    category: "Game Dev",
    items: ["Unity", "C#", "HLSL", "Blender"],
    icon: <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />, // Gamepad
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  }
];

export default function SkillsRadar() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        Technical <span className="text-zinc-500">Arsenal</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-2xl border ${skill.border} bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/80 transition-all group`}
          >
            <div className={`w-12 h-12 rounded-lg ${skill.bg} ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 {skill.icon}
               </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-3 py-1 text-xs font-medium text-zinc-300 bg-black/40 rounded-md border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
