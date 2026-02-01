"use client";

import ContactForm from "@/components/ui/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 pt-24">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
                      {t.contact.title}
                  </h1>
                  <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                      {t.contact.desc}
                  </p>
                </div>
                
                <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4 group">
                        <span className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-purple-500/50 transition-colors shadow-lg shadow-purple-500/5">
                            <span className="text-xl">✉️</span>
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.contact.email}</span>
                          <a href="mailto:gsaldana709@gmail.com" className="text-zinc-300 hover:text-white transition-colors text-lg font-medium">
                              gsaldana709@gmail.com
                          </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <span className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-green-500/50 transition-colors shadow-lg shadow-green-500/5">
                            <span className="text-xl">📱</span>
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.contact.phone}</span>
                          <a href="https://wa.me/59167679528" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors text-lg font-medium">
                              +591 67679528
                          </a>
                        </div>
                    </div>

                     <div className="flex items-center gap-4 group">
                        <span className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-colors shadow-lg shadow-cyan-500/5">
                            <span className="text-xl">📍</span>
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.contact.location}</span>
                          <span className="text-zinc-300 text-lg font-medium">Bolivia, Worldwide Remote</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-zinc-950 p-8 rounded-2xl border border-white/5 shadow-2xl">
                    <ContactForm />
                </div>
            </div>

        </div>
    </div>
  );
}