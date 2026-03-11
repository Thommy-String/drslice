import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`relative w-full z-[100] ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0">
                  <span className="text-white font-black text-xl tracking-tighter">S.</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-md leading-tight tracking-tight uppercase">Dott. Paolo Panarini</span>
                <span className="text-emerald-600 text-[10px] uppercase tracking-[-0.05em]">Dietista - Nutrizionista</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={SOCIAL_LINKS.miodottore} 
              target="_blank" 
              className="group/btn relative px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-emerald-600/20 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Prenota Visita</span>
              <ChevronRight className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 relative z-[120] ${
              isOpen ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-2xl z-[110] transition-all duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full p-6 pt-24">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`group p-6 rounded-[2rem] bg-slate-50/50 text-2xl font-bold text-slate-900 flex items-center justify-between transition-all duration-500 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/50 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50 + 150}ms` : '0ms' }}
              >
                <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                <ChevronRight className="w-6 h-6 text-emerald-500 transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          
          <div className={`mt-auto mb-8 transition-all duration-700 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? '350ms' : '0ms' }}>
            <a 
              href={SOCIAL_LINKS.miodottore}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full p-6 bg-slate-900 text-white rounded-[2rem] text-xl font-bold transition-all hover:bg-emerald-600 shadow-2xl shadow-slate-900/20"
            >
              <span>Prenota Visita</span>
              <div className="bg-white/20 p-2 rounded-full">
                <ChevronRight className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
