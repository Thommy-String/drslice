import React from 'react';
import lazioLogo from '../assets/loghi/medicina-regione-lazio-logo.png';
import intervistaPaolo from '../assets/Paolo/intervistaPaolo.png';

export function TrustBanner() {
  return (
    <div className="bg-transparent pt-3 pb-6 relative z-10 overflow-visible group/trust">
      <div className="max-w-7xl mx-auto flex justify-center px-4 overflow-visible">
        {/* Layout super-compatto: Card orizzontale. Aumentata altezza totale sm:h-20 */}
        <div className="flex flex-col sm:flex-row items-center gap-0 bg-white/80 backdrop-blur-xl border border-white/90 rounded-[1.5rem] sm:rounded-full shadow-[0_8px_30px_-10px_rgba(16,185,129,0.12)] transition-all max-w-3xl overflow-hidden p-1.5 sm:p-1.5 sm:pr-8">
          
          {/* Immagine: aumentata altezza h-28 sm:h-20, allargato spazio laterale e centrato testo */}
          <div className="w-full sm:w-[280px] h-28 sm:h-20 shrink-0 overflow-hidden rounded-2xl sm:rounded-full relative border border-slate-100/50 shadow-inner group-hover/trust:shadow-md transition-shadow">
            {/* Foto di Sfondo */}
            <img 
              src={intervistaPaolo} 
              alt="Intervista Medicina Regione Lazio" 
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.1] transform transition-transform duration-700 group-hover/trust:scale-105" 
            />
            {/* Gradiente solo centrale, lasciando l'intervistatrice (sinistra) e Paolo (destra) a colori pieni */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/85 to-transparent"></div>
            
            {/* Contenuto in Overlay sull'immagine: Intervistato da + Logo (Colorato) al CENTRO */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="flex items-center gap-1 text-slate-600 font-bold italic text-[8px] sm:text-[9px] uppercase tracking-widest mb-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Intervistato da</span>
              </div>
              <img 
                src={lazioLogo} 
                alt="Medicina Regione Lazio" 
                className="h-7 sm:h-8 object-contain drop-shadow-sm mix-blend-multiply" 
              />
            </div>
            
            <div className="absolute inset-0 rounded-2xl sm:rounded-full ring-1 ring-inset ring-black/5 pointer-events-none"></div>
          </div>

          {/* Testo Citazione (Destra / Sotto) */}
          <div className="flex-1 flex items-center pt-3 pb-1.5 sm:py-0 px-4 sm:px-5">
            <p className="text-[11px] sm:text-[13px] text-slate-600 font-medium leading-tight sm:leading-relaxed italic text-center sm:text-left w-full">
              «Un professionista <span className="font-bold text-emerald-900 not-italic">chiaro e preparato</span>. Grazie per aver partecipato all'intervista.»
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
