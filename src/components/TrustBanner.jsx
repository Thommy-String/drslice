import React from 'react';
import { Radio } from 'lucide-react';
import lazioLogo from '../assets/loghi/medicina-regione-lazio-logo.png';
import intervistaPaolo from '../assets/Paolo/intervistaPaolo.png';

export function TrustBanner() {
  return (
    <div className="bg-transparent pt-0 pb-2 relative z-10 overflow-visible group/trust">
      <div className="max-w-7xl mx-auto flex justify-center px-4 overflow-visible">
        {/* Layout super-compatto: Card orizzontale. Aumentata altezza totale sm:h-20 */}
        <div className="flex flex-col sm:flex-row items-center gap-0 bg-white/80 backdrop-blur-xl border border-white/90 rounded-[1.5rem] sm:rounded-full shadow-[0_8px_30px_-10px_rgba(16,185,129,0.12)] transition-all max-w-3xl overflow-hidden p-1 sm:p-1.5 sm:pr-6">
          
          {/* Immagine: ridotta altezza h-20 sm:h-14, allargato spazio laterale e centrato testo */}
          <div className="w-full sm:w-[260px] h-20 sm:h-14 shrink-0 overflow-hidden rounded-2xl sm:rounded-full relative border border-slate-100/50 shadow-inner group-hover/trust:shadow-md transition-shadow">
            {/* Foto di Sfondo - Ben visibile ai lati */}
            <img 
              src={intervistaPaolo} 
              alt="Intervista Medicina Regione Lazio" 
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.1] transform transition-transform duration-700 group-hover/trust:scale-105" 
            />
            {/* Blur selettivo chiaro ma molto forte: opaco ma non scuro */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full h-full bg-white/50 backdrop-blur-[24px] [mask-image:radial-gradient(45%_100%_at_center,black_30%,transparent_90%)]"></div>
            </div>
            
            {/* Contenuto in Overlay: Logo COLORATO al CENTRO - Scritta Bianca per contrasto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
              <div className="flex items-center gap-1.5 text-white font-bold italic text-[8px] sm:text-[9px] uppercase tracking-widest mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                <Radio className="w-3 h-3 text-emerald-400 fill-emerald-400/20 animate-pulse" />
                <span>Intervistato da</span>
              </div>
              <img 
                src={lazioLogo} 
                alt="Medicina Regione Lazio" 
                className="h-8 sm:h-8 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" 
              />
            </div>
            
            <div className="absolute inset-0 rounded-2xl sm:rounded-full ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>

          {/* Testo Citazione (Destra / Sotto) */}
          <div className="flex-1 flex items-center pt-2 pb-1.5 sm:py-0 px-4 sm:px-5">
            <p className="text-[14px] sm:text-[12px] text-slate-600 font-medium leading-tight sm:leading-relaxed italic text-center sm:text-left w-full">
              «Un professionista <span className="font-bold text-emerald-900 not-italic">chiaro e preparato</span>. Grazie per aver partecipato all'intervista.»
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
