"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-zinc-900 rounded-full p-1 border border-white/10">
      <button
        onClick={() => setLanguage("es")}
        className={`relative px-3 py-1 text-xs font-bold rounded-full transition-colors z-10 ${
          language === "es" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        ES
        {language === "es" && (
          <motion.div
            layoutId="lang-switch"
            className="absolute inset-0 bg-zinc-700 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1 text-xs font-bold rounded-full transition-colors z-10 ${
          language === "en" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
        {language === "en" && (
          <motion.div
            layoutId="lang-switch"
            className="absolute inset-0 bg-zinc-700 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
}
