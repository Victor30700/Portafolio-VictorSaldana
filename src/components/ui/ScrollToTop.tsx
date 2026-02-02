"use client";

import { motion } from "framer-motion";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-10 pb-32 md:pb-20 flex flex-col items-center justify-center border-t border-white/5 bg-[#030305]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-white transition-colors"
      >
        <div className="p-4 rounded-full border border-white/10 group-hover:border-purple-500/50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
        <span className="text-sm font-medium tracking-widest uppercase">Volver Arriba</span>
      </motion.button>
      
      <div className="mt-10 text-zinc-600 text-xs">
        © {new Date().getFullYear()} Victor Saldaña. All rights reserved.
      </div>
    </footer>
  );
}

