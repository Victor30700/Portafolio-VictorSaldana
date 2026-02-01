"use client";

import Image from "next/image";
import Timeline from "@/components/ui/Timeline";
import AiAugmentedSection from "@/components/ui/AiAugmentedSection";
import SkillsRadar from "@/components/ui/SkillsRadar";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      
      {/* Hero Section - Real Info */}
      <div className="container mx-auto px-4 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-2xl rotate-6 blur-2xl opacity-20" />
             <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/assets/projects/yo/yo.jpeg" 
                  alt="Victor Hugo Saldaña Ortiz" 
                  fill 
                  className="object-cover"
                  priority
                />
             </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              {t.about.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-purple-400">
              {t.about.role}
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t.about.intro}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
               <a 
                 href="https://www.linkedin.com/in/victor-hugo-saldana-ortiz-372a35271" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-6 py-2 rounded-full bg-zinc-900 border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-2"
               >
                 LinkedIn
               </a>
               <a 
                 href="https://github.com/Victor30700" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-6 py-2 rounded-full bg-zinc-900 border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-2"
               >
                 GitHub
               </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Core Methodology */}
        <div className="max-w-5xl mx-auto">
            <p className="text-zinc-300 text-lg leading-relaxed text-center mb-12">
                {t.about.bio}
            </p>
            <AiAugmentedSection />
        </div>

        {/* Experience Timeline */}
        <div className="my-24">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">{t.about.trajectory}</h2>
            <Timeline />
        </div>

        {/* Skills - ATS Optimized */}
        <div className="max-w-6xl mx-auto">
            <SkillsRadar />
        </div>

      </div>
    </div>
  );
}