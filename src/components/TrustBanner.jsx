import React from 'react';
import lazioLogo from '../assets/loghi/medicina-regione-lazio-logo.png';

export function TrustBanner() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2 sm:py-3 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 relative z-10 text-sm">
        
        {/* Sezione Badge Moderno & Logo */}
        <div className="flex items-center gap-3">
          {/* Badge "Intervista" stile discreto */}
          <div className="flex items-center gap-1.5 text-slate-500 font-medium italic text-xs sm:text-sm">
            {/* Icona Microfono */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 6.5a.5.5 0 0 0-1 0v1a5.5 5.5 0 0 0 5 5.478v1.522a.5.5 0 0 0 1 0v-1.522a5.5 5.5 0 0 0 5-5.478v-1a.5.5 0 0 0-1 0v1a4.5 4.5 0 0 1-9 0z"/>
              <path d="M8 11a3 3 0 0 0 3-3V3a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3"/>
            </svg>
            Intervista
          </div>
          
          <img 
            src={lazioLogo} 
            alt="Medicina Regione Lazio" 
            className="h-6 sm:h-8 object-contain opacity-90 hover:opacity-100 cursor-default transition-opacity duration-300" 
          />
        </div>
        
        {/* Separatore elegante (solo desktop) */}
        <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></div>
        
        {/* Testo elegante senza virgolettoni grafici e con highlight */}
        <div className="flex items-center max-w-xl text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            «Ottimo, un intervento <span className="font-bold text-slate-900 bg-green-100 px-1 py-0.5 rounded">sicuramente molto utile</span> per chi ci ascolta.»
          </p>
        </div>

      </div>
    </div>
  );
}
