"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const CATEGORIES = [
    t.portfolio.filterAll, 
    t.portfolio.filterWeb, 
    t.portfolio.filterGame
  ];

  // Mapping logic for filtering
  const mapCategory = (cat: string) => {
    if (cat === t.portfolio.filterWeb) return "Web";
    if (cat === t.portfolio.filterGame) return "Game";
    return "All";
  };

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: language === "en" ? p.description_en : p.description,
    title: language === "en" && p.title_en ? p.title_en : p.title,
  }));

  const filteredProjects = localizedProjects.filter((project) => {
    const internalCat = mapCategory(activeCategory);
    if (internalCat === "All") return true;
    return project.category === internalCat;
  });

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {t.portfolio.title}
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <ProjectGrid projects={filteredProjects} />

        {/* CTA Section */}
        <div className="border-t border-white/10 mt-24 pt-12 flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">{t.portfolio.ctaTitle}</h3>
          <p className="text-zinc-400 max-w-lg">
            {t.portfolio.ctaDesc}
          </p>
          <div className="flex gap-4">
            <Link
              href="/sobre-mi"
              className="px-6 py-3 rounded-full bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              {t.portfolio.btnJourney}
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              {t.portfolio.btnTalk}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
