"use client";

import Link from "next/link";
import HeroScene from "@/components/3d/HeroScene";
import DynamicTitle from "@/components/ui/DynamicTitle";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t, language } = useLanguage();
  
  const featuredProjects = projects
    .filter((p) => p.featured)
    .map((p) => ({
      ...p,
      description: language === "en" ? p.description_en : p.description,
      title: language === "en" && p.title_en ? p.title_en : p.title,
    }));

  return (
    <div className="flex flex-col min-h-screen bg-[#030305] text-white selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <HeroScene />

        {/* Ambient Spotlight */}
        <div className="absolute inset-0 z-0 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(120, 50, 255, 0.08) 0%, rgba(3, 3, 5, 0) 70%)' }} 
        />
        
        {/* Content */}
        <div className="z-10 text-center px-4 space-y-8 max-w-3xl">
          <p className="text-zinc-500 text-sm md:text-base tracking-[0.4em] uppercase font-bold">
            {t.home.role}
          </p>
          
          <DynamicTitle 
            titles={["Senior Fullstack Engineer", "Game Developer", "Software Architect"]} 
          />
          
          <p className="max-w-lg mx-auto text-[#b0b0b0] md:text-xl font-light leading-relaxed">
            {t.home.subtitle}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link 
              href="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all transform hover:scale-105 active:scale-95"
            >
              {t.home.viewProjects}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-600">
           <span className="text-[10px] tracking-widest uppercase">Scroll</span>
           <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-[#030305] relative z-10">
        <div className="max-w-7xl mx-auto mb-16 text-center md:text-left border-b border-white/5 pb-8">
           <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 inline-block">{t.home.featured}</h2>
           <p className="text-zinc-400 text-lg">{t.home.featuredDesc}</p>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

    </div>
  );
}
