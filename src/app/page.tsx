"use client";

import HeroScene from "@/components/3d/HeroScene";
import DynamicTitle from "@/components/ui/DynamicTitle";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  
  // Filtrar y mapear proyectos con descripción localizada
  const featuredProjects = projects
    .filter((p) => p.featured)
    .map((p) => ({
      ...p,
      description: language === "en" ? p.description_en : p.description,
      title: language === "en" && p.title_en ? p.title_en : p.title,
    }));

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-purple-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <HeroScene />
        
        {/* Content Content - Z-index to be above canvas */}
        <div className="z-10 text-center px-4 space-y-6">
          <p className="text-zinc-400 text-sm md:text-base tracking-widest uppercase font-medium">
            {t.home.role}
          </p>
          
          <DynamicTitle 
            titles={["Senior Fullstack Engineer", "Game Developer", "Software Architect"]} 
          />
          
          <p className="max-w-md mx-auto text-zinc-400 md:text-lg">
            {t.home.subtitle}
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-zinc-500">
           ↓
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
           <h2 className="text-3xl font-bold mb-4">{t.home.featured}</h2>
           <p className="text-zinc-400">{t.home.featuredDesc}</p>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

    </div>
  );
}
