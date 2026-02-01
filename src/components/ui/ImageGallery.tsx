"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setIndex(i);
  const closeLightbox = () => setIndex(null);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (index === null) return;
    setIndex((prev) => (prev! + 1) % images.length);
  }, [index, images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (index === null) return;
    setIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [index, images.length]);

  useEffect(() => {
    if (index === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, nextImage, prevImage]);

  if (images.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-10 text-white tracking-tight border-l-4 border-purple-500 pl-6">
        Project Gallery
      </h2>
      
      {/* Grid with improved gaps and rounding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(idx)}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-zinc-900 shadow-xl"
          >
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Elegant Overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    <span className="text-white font-bold text-sm tracking-wide uppercase">Expand View</span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-5 bg-white/5 hover:bg-white/10 rounded-full hidden md:block"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-5 bg-white/5 hover:bg-white/10 rounded-full hidden md:block"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full h-full flex items-center justify-center"
            >
               <div className="relative w-full h-full max-w-6xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={images[index]}
                    alt={`${title} fullscreen ${index + 1}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="100vw"
                  />
               </div>
            </motion.div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-white/10">
                {index + 1} <span className="mx-2 text-white/20">|</span> {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}