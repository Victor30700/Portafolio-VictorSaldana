"use client";

import Image from "next/image";
import Timeline from "@/components/ui/Timeline";
import AiAugmentedSection from "@/components/ui/AiAugmentedSection";
import SkillsRadar from "@/components/ui/SkillsRadar";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030305] text-white pt-24 pb-12 overflow-hidden relative">
      
      {/* Background Ambient Light */}
      <div className="absolute top-0 left-1/4 w-full h-full pointer-events-none" 
           style={{ background: 'radial-gradient(circle at center, rgba(80, 50, 200, 0.05) 0%, rgba(3, 3, 5, 0) 60%)' }} 
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
             {/* Spot Light behind photo */}
             <div className="absolute -inset-20 bg-purple-600/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
             
             <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-zinc-800 to-zinc-950 border border-white/10 shadow-2xl overflow-hidden">
                <Image 
                  src="/assets/projects/yo/yo.jpeg" 
                  alt="Victor Hugo Saldaña Ortiz" 
                  fill 
                  className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  priority
                />
             </div>
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 pb-2">
                {t.about.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-purple-400 mt-2">
                {t.about.role}
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#b0b0b0] text-lg leading-relaxed max-w-2xl"
            >
              {t.about.intro}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
               <a 
                 href="https://www.linkedin.com/in/victor-hugo-saldana-ortiz-372a35271" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5"
               >
                 LinkedIn
               </a>
               <a 
                 href="https://github.com/Victor30700" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 rounded-full bg-zinc-900 border border-white/5 text-[#b0b0b0] hover:text-white hover:border-white/20 transition-all"
               >
                 GitHub
               </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
            <p className="text-[#b0b0b0] text-lg leading-relaxed text-center mb-12 font-light">
                {t.about.bio}
            </p>
            <AiAugmentedSection />
        </div>

        <div className="my-32">
            <h2 className="text-4xl font-bold text-center mb-20 text-white tracking-tight">{t.about.trajectory}</h2>
            <Timeline />
        </div>

        <div className="max-w-6xl mx-auto mb-24">
            <SkillsRadar />
        </div>
      </div>
    </div>
  );
}