"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Software Architecture",
    items: ["Clean Architecture", "DDD", "CQRS", "Microservices", "MVC", "Serverless", "SPA/PWA"],
    color: "from-purple-400 to-indigo-400",
  },
  {
    category: "Frontend Moderno",
    items: ["React 19", "Next.js 15", "Tailwind CSS v4", "TypeScript", "Vite", "Redux/Context API", "SWR"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    category: "Backend & API",
    items: [".NET 10 (C#)", "Laravel 12 (PHP)", "Python (FastAPI)", "Node.js", "RESTful APIs"],
    color: "from-green-400 to-emerald-400",
  },
  {
    category: "Bases de Datos",
    items: ["PostgreSQL", "Google Firestore", "EF Core", "SQL Server"],
    color: "from-orange-400 to-yellow-400",
  },
  {
    category: "IA & Data Science",
    items: ["GPT-4o Integration", "TensorFlow/Keras", "Computer Vision", "Pose Estimation"],
    color: "from-pink-400 to-rose-400",
  },
  {
    category: "Cloud & DevOps",
    items: ["Firebase", "Docker", "Git/GitHub", "CI/CD Pipelines"],
    color: "from-zinc-400 to-slate-400",
  },
];

export default function SkillsRadar() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Technical <span className="text-zinc-500">Arsenal</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all group"
          >
            <h3 className={`text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${skillGroup.color}`}>
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, itemIdx) => (
                <span 
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 border border-white/5 group-hover:border-purple-500/20 group-hover:text-zinc-200 transition-colors"
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