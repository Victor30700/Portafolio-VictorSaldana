"use client";

import { motion } from "framer-motion";

export default function AiAugmentedSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-12 my-24">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Next-Gen Workflow
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            AI-Augmented <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Engineering</span>
          </h2>
          
          <p className="text-zinc-400 leading-relaxed">
            I don't just write code; I orchestrate it. By leveraging advanced AI agents for boilerplate generation, testing, and refactoring, I deliver robust solutions at 
            <span className="text-white font-semibold"> 3x speed </span> 
            without compromising quality. This allows me to focus on high-level architecture and complex problem-solving.
          </p>
        </div>

        {/* Visual Representation */}
        <div className="flex-1 w-full max-w-sm">
          <div className="relative aspect-square rounded-2xl bg-zinc-950 border border-white/10 p-6 flex flex-col justify-between">
             {/* Animated Code Block Representation */}
             <div className="space-y-2">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="h-2 bg-zinc-800 rounded" 
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatDelay: 2 }}
                  className="h-2 bg-zinc-800 rounded" 
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatDelay: 2 }}
                  className="h-2 bg-zinc-800 rounded" 
                />
             </div>

             <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-8">
                <span>Human Context</span>
                <span>+</span>
                <span>AI Execution</span>
             </div>

             <div className="mt-4 p-3 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-mono flex items-center gap-2">
                <span className="text-green-400">✓</span> Optimized Output
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
