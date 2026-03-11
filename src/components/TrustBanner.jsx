import React from 'react';
import lazioLogo from '../assets/loghi/medicina-regione-lazio-logo.png';

export function TrustBanner() {
  return (
    <div className="bg-transparent pt-1 pb-6 relative z-10 overflow-visible">
      <div className="max-w-7xl mx-auto flex justify-center px-4 overflow-visible">
        {/* Semi-Chip Container: Layout con brand a sinistra e testo a destra */}
        <div className="flex flex-row items-center gap-5 px-5 py-2.5 bg-white/30 backdrop-blur-sm border border-white/50 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all hover:bg-white/40 max-w-2xl">
          
          {/* Colonna Sinistra: Badge sopra e Logo sotto */}
          <div className="flex flex-col items-center justify-center gap-1 shrink-0">
            <div className="flex items-center gap-1 text-slate-400 font-medium italic text-[8px] sm:text-[9px] uppercase tracking-tighter">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-emerald-600/50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 6.5a.5.5 0 0 0-1 0v1a5.5 5.5 0 0 0 5 5.478v1.522a.5.5 0 0 0 1 0v-1.522a5.5 5.5 0 0 0 5-5.478v-1a.5.5 0 0 0-1 0v1a4.5 4.5 0 0 1-9 0z"/>
                <path d="M8 11a3 3 0 0 0 3-3V3a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3"/>
              </svg>
              <span>Intervistato da</span>
            </div>
            
            <img 
              src={lazioLogo} 
              alt="Medicina Regione Lazio" 
              className="h-9 sm:h-11 object-contain opacity-90" 
            />
          </div>

          {/* Sottile Separatore Verticale */}
          <div className="w-px h-10 bg-slate-300/40 shrink-0"></div>

          {/* Testo a Destra */}
          <div className="flex-1">
            <p className="text-[11px] sm:text-xs text-slate-500 italic leading-snug">
              «Un professionista <span className="font-semibold text-emerald-900/70 not-italic">chiaro e preparato</span>. Grazie per aver partecipato all'intervista.»
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
