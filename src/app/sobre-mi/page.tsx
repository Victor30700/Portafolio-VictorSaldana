"use client";

import Image from "next/image";
import Timeline from "@/components/ui/Timeline";
import AiAugmentedSection from "@/components/ui/AiAugmentedSection";
import SkillsRadar from "@/components/ui/SkillsRadar";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t, language } = useLanguage();

  // Helper para resaltar texto (podría ser más dinámico, pero lo haremos directo para precisión)
  const renderBio = () => {
    if (language === 'es') {
      return (
        <>
          Ingeniero especializado en el diseño y desarrollo de soluciones empresariales escalables y productos digitales modernos. Mi enfoque combina una sólida arquitectura backend <span className="text-purple-400 font-bold">(.NET 10.0, Laravel 12, Python)</span> con interfaces de usuario de última generación <span className="text-cyan-400 font-bold">(Next.js 15, React 19, Tailwind 4)</span>.
        </>
      );
    }
    return (
      <>
        Systems Engineer specialized in designing and developing scalable enterprise solutions and modern digital products. My focus combines solid backend architecture <span className="text-purple-400 font-bold">(.NET 10.0, Laravel 12, Python)</span> with cutting-edge user interfaces <span className="text-cyan-400 font-bold">(Next.js 15, React 19, Tailwind 4)</span>.
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white pt-32 pb-12 overflow-hidden relative">
      
      {/* Background Ambient Light */}
      <div className="absolute top-0 left-1/4 w-full h-full pointer-events-none" 
           style={{ background: 'radial-gradient(circle at center, rgba(80, 50, 200, 0.03) 0%, rgba(3, 3, 5, 0) 60%)' }} 
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          {/* Profile Photo - Unified Rounding 2xl */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group shrink-0"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
             
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-px bg-gradient-to-b from-white/20 to-transparent shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                  <Image 
                    src="/assets/projects/yo/yo.jpeg" 
                    alt="Victor Hugo Saldaña Ortiz" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 hover:scale-100"
                    priority
                  />
                </div>
             </div>
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-zinc-600 tracking-tight">
                {t.about.title}
              </h1>
              <p className="text-lg md:text-xl font-medium text-purple-400 mt-4 tracking-wide uppercase">
                {t.about.role}
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#e2e8f0] text-xl leading-relaxed max-w-3xl font-light"
            >
              {renderBio()}
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
                 className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all shadow-xl"
               >
                 LinkedIn
               </a>
               <a 
                 href="https://github.com/Victor30700" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
               >
                 GitHub
               </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
            <p className="text-[#94a3b8] text-lg leading-relaxed text-center mb-24 font-light italic">
                "{t.about.bio}"
            </p>
            <AiAugmentedSection />
        </div>

        <div className="my-40">
            <h2 className="text-4xl font-bold text-center mb-24 text-white tracking-tight">{t.about.trajectory}</h2>
            <Timeline />
        </div>

        <div className="max-w-6xl mx-auto mb-32">
            <SkillsRadar />
        </div>
      </div>
    </div>
  );
}
