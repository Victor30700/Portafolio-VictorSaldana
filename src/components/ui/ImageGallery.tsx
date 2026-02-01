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

  // Keyboard navigation
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
    <section>
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(idx)}
            className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group cursor-pointer bg-zinc-900"
          >
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    Expand View
                </span>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors z-50 p-4 bg-black/20 hover:bg-black/50 rounded-full hidden md:block"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors z-50 p-4 bg-black/20 hover:bg-black/50 rounded-full hidden md:block"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Main Image */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center pointer-events-none"
            >
               <div className="relative w-full h-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
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
            
            {/* Caption/Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 bg-zinc-800/80 backdrop-blur px-6 py-2 rounded-full text-sm font-mono border border-white/10">
                {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
