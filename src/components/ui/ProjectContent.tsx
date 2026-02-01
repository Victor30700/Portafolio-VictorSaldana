"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ui/ImageGallery";

// Helper para extraer ID de YouTube
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function ProjectContent({ project }: { project: Project }) {
  const { t, language } = useLanguage();

  const title = language === "en" && project.title_en ? project.title_en : project.title;
  const description = language === "en" ? project.description_en : project.description;
  const architecture = language === "en" && project.architecture_en ? project.architecture_en : project.architecture;
  
  const videoId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Video or Image */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        {videoId ? (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              className="w-full h-full object-cover pointer-events-auto"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
             {/* Gradient overlay for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
          </div>
        ) : project.images[0] ? (
          <>
            <Image
              src={project.images[0]}
              alt={title}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl z-20 pointer-events-none">
           <Link href="/portafolio" className="text-sm text-zinc-400 hover:text-white mb-4 inline-block pointer-events-auto transition-colors">
              ← {t.portfolio.back}
           </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">{title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-6 pointer-events-auto">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pointer-events-auto">
             {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.98 6.14 17.98C5.68 16.81 5.03 16.5 5.03 16.5C4.13 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18.01 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.52 2 12 2Z" fill="currentColor"/></svg>
                  {t.portfolio.viewCode}
                </a>
             )}
             {videoId && (
                 <a 
                   href={`https://www.youtube.com/watch?v=${videoId}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-red-600/90 text-white rounded-full font-bold hover:bg-red-700 transition-colors backdrop-blur-sm"
                 >
                    ▶ {t.portfolio.watchTrailer}
                 </a>
             )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-purple-400">{t.portfolio.overview}</h2>
          <div className="text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </section>

        {/* Engineering/Architecture */}
        {architecture && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-purple-400">
              {t.portfolio.engineering}
            </h2>
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7L12 12L22 7L12 2Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/></svg>
              </div>
              <p className="text-zinc-300 leading-relaxed relative z-10">
                 <strong>{t.portfolio.archStrategy}:</strong> {architecture}
              </p>
            </div>
          </section>
        )}

        {/* Gallery */}
        <ImageGallery images={project.images} title={title} />
      </div>
    </div>
  );
}
