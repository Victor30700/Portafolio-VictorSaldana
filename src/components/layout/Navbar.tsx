"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { 
      name: t.nav.home, 
      href: "/", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      ) 
    },
    { 
      name: t.nav.portfolio, 
      href: "/portafolio", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      ) 
    },
    { 
      name: t.nav.experience, 
      href: "/sobre-mi", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ) 
    },
    { 
      name: t.nav.contact, 
      href: "/contacto", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ) 
    },
  ];

  return (
    <>
      {/* --- MOBILE TOP BAR (Language Only) --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:hidden pointer-events-none">
         <div className="pointer-events-auto">
             {/* Optional Logo Placeholder if needed */}
         </div>
         <div className="pointer-events-auto bg-black/40 backdrop-blur-md rounded-full border border-white/10 p-1 shadow-lg">
            <LanguageSwitcher />
         </div>
      </div>

      {/* --- DESKTOP TOP NAV --- */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center py-6 px-4 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 pointer-events-auto shadow-lg flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavDesktop"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="w-px h-4 bg-white/20" />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK (Always Visible) --- */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex justify-center pointer-events-none">
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 pointer-events-auto shadow-2xl w-full max-w-sm">
          <ul className="flex justify-between items-center">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`flex flex-col items-center gap-1 transition-colors ${
                      isActive ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {/* Active Indicator Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavMobile"
                        className="absolute -inset-2 bg-white/5 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <div className={isActive ? "text-purple-400" : "text-current"}>
                      {link.icon}
                    </div>
                    
                    {/* Label (Optional: remove 'hidden' if you want text labels on very small screens, 
                        but usually icons are enough. I'll show text for clarity as requested) */}
                    <span className="text-[10px] font-medium tracking-wide">
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
