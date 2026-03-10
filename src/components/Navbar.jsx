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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0">
                  <span className="text-white font-black text-2xl tracking-tighter">S.</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg leading-tight tracking-tight uppercase">Paolo Panarini</span>
                <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em]">Nutrizionista</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
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
              className="group/btn relative px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-emerald-600/20 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Prenota Visita</span>
              <ChevronRight className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
              isOpen ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 gap-2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="p-5 bg-slate-50 rounded-3xl text-lg font-black text-slate-900 flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100"
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </a>
            ))}
          </div>
          
          <a 
            href={SOCIAL_LINKS.miodottore} 
            target="_blank"
            className="mt-4 p-6 bg-emerald-600 text-white text-center rounded-3xl font-black text-lg shadow-xl shadow-emerald-600/30 active:scale-[0.98] transition-transform"
          >
            PRENOTA ORA
          </a>
          
          <div className="mt-auto pb-10 flex flex-col items-center gap-1 text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-widest">Dott. Paolo Panarini</span>
            <span className="text-[10px]">Nutrizionista Roma & Tivoli</span>
          </div>
        </div>
      )}
    </nav>
  );
}
