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

        {/* Improved Ambient Spotlight - Depth Focal Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
        
        {/* Content */}
        <div className="z-10 text-center px-4 space-y-10 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1 }}
            className="text-zinc-500 text-xs md:text-sm uppercase font-bold"
          >
            {t.home.role}
          </motion.p>
          
          <div className="space-y-4">
            <DynamicTitle 
              titles={["Fullstack Engineer", "Game Developer", "Software Architect"]} 
            />
            <p className="max-w-xl mx-auto text-[#b0b0b0] md:text-xl font-light leading-relaxed">
              {t.home.subtitle}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link 
              href="/portafolio"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 active:scale-95"
            >
              {t.home.viewProjects}
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-600">
           <span className="text-[10px] tracking-widest uppercase">Explore</span>
           <div className="w-px h-16 bg-gradient-to-b from-zinc-600 to-transparent"></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-4 bg-[#030305] relative z-10">
        <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 inline-block">{t.home.featured}</h2>
           <p className="text-[#b0b0b0] text-lg max-w-2xl">{t.home.featuredDesc}</p>
           <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mt-8" />
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

    </div>
  );
}