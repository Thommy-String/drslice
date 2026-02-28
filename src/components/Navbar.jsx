import React, { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
            </a>
          </div>

          {/* Navigation & Hamburger (Right) */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <a href="#metodo" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Il Metodo</a>
              <a href="#chi-sono" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Chi Sono</a>
              <a href="#recensioni" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Recensioni</a>
              <a href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli" target="_blank" className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20">
                Prenota Ora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (Fittizio) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#metodo" onClick={() => setIsOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-emerald-600">Il Metodo</a>
          <a href="#chi-sono" onClick={() => setIsOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-emerald-600">Chi Sono</a>
          <a href="#recensioni" onClick={() => setIsOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-emerald-600">Recensioni</a>
          <a 
            href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli" 
            target="_blank"
            className="block w-full py-3 bg-emerald-600 text-center text-white rounded-xl font-bold"
          >
            Prenota Ora
          </a>
        </div>
      )}
    </nav>
  );
}
