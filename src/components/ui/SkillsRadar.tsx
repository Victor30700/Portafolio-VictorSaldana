"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Architecture",
    items: ["Microservices", "CQRS", "DDD", "Clean Arch"],
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    color: "text-purple-400",
    glow: "group-hover:border-purple-500/50",
    accent: "bg-purple-500/10",
  },
  {
    category: "Frontend",
    items: ["React 19", "Next.js 15", "Tailwind 4", "Three.js"],
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    color: "text-blue-400",
    glow: "group-hover:border-blue-500/50",
    accent: "bg-blue-500/10",
  },
  {
    category: "Backend",
    items: [".NET 10", "Python", "Laravel 12", "Node.js"],
    icon: <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M4 7V5a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v2M12 12h.01" />,
    color: "text-green-400",
    glow: "group-hover:border-green-500/50",
    accent: "bg-green-500/10",
  },
  {
    category: "AI & Data",
    items: ["OpenAI", "TensorFlow", "Computer Vision", "Python"],
    icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />,
    color: "text-rose-400",
    glow: "group-hover:border-rose-500/50",
    accent: "bg-rose-500/10",
  },
  {
    category: "Cloud",
    items: ["Azure", "AWS", "Docker", "CI/CD"],
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
    color: "text-cyan-400",
    glow: "group-hover:border-cyan-500/50",
    accent: "bg-cyan-500/10",
  },
  {
    category: "Game Dev",
    items: ["Unity", "C#", "HLSL", "Blender"],
    icon: <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />,
    color: "text-orange-400",
    glow: "group-hover:border-orange-500/50",
    accent: "bg-orange-500/10",
  }
];

export default function SkillsRadar() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-24 text-white tracking-tight">
        Technical <span className="text-zinc-600">Arsenal</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0c] transition-all duration-500 ${skill.glow} hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
          >
            {/* Massive Hero Icon */}
            <div className={`w-20 h-20 rounded-2xl ${skill.accent} ${skill.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 {skill.icon}
               </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{skill.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-4 py-1.5 text-xs font-semibold text-zinc-400 bg-white/5 rounded-full border border-white/5 group-hover:text-zinc-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Accent Corner Light */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${skill.accent} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity rounded-full`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}