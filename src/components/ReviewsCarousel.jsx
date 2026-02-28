import React from 'react';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

const reviews = [
  {
    id: 1,
    name: 'Antonella',
    service: 'dieta personalizzata',
    text: 'Molto semplice ed efficace nelle spiegazioni, bravo , simpatico, professionale',
    verified: true,
  },
  {
    id: 2,
    name: 'Sara Conti',
    service: 'Visita nutrizionale',
    text: 'Non ci sono parole per la professionalità del dottor Panarini e per la sua innata capacità di mettere a proprio agio il paziente. Il suo metodo è di un\'efficacia unica. Non è una "dieta" ma un percorso che rimane.',
    verified: true,
  },
  {
    id: 3,
    name: 'Cappuccini Elisabetta',
    date: '17 dicembre 2025',
    service: 'Visita di controllo presso Fisioera',
    text: 'Ho trovato un dottore molto preparato e molto convincente nel proprio lavoro',
    verified: true,
  },
  {
    id: 4,
    name: 'Alessandro',
    date: '13 dicembre 2025',
    service: 'educazione alimentare presso Studio Privato Dottor Paolo Panarini',
    text: 'Ottimo l\'approccio iniziale. Medico molto empatico e disponibile all\'ascolto e a fornire le spiegazioni richieste. Per i risultati, essendo la prima visita, provvederò a un aggiornamento più in là. Studio molto confortevole con personale cortese e professionale.',
    verified: true,
  },
  {
    id: 5,
    name: 'Francesca',
    date: '27 ottobre 2025',
    service: 'prima visita nutrizionale presso Centro medico Colaiaco',
    text: 'Disponibile nel rispondere a dubbi e nel personalizzare la dieta in base ai bisogni dell\'utente',
    verified: true,
  },
  {
    id: 6,
    name: 'Marco',
    date: '23 ottobre 2025',
    service: 'prima visita nutrizionale presso Studio Privato Dottor Paolo Panarini',
    text: 'Professionista molto attento, fornisce ottimi consigli e ha un ottimo piano di approccio.',
    verified: true,
  },
  {
    id: 7,
    name: 'Elisa',
    date: '8 ottobre 2025',
    service: 'prima visita nutrizionale presso Farmacia Fabbri - Settebagni',
    text: 'Spiegazioni chiare e disponibilità nell\' ascoltare le esigenze di chi si rivolge a lui. Attenzione ed empatia emotiva verso il suo interlocutore. Consigliatissimo',
    verified: true,
  }
];

export function ReviewsCarousel() {
  return (
    <div className="w-full overflow-hidden mt-6 mb-2 relative z-30 group" 
         style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
      {/* Container that animates */}
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] pointer-events-auto">
        {/* We map twice to create an infinite loop effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <div 
            key={`${review.id}-${index}`} 
            className="w-[280px] bg-white border border-slate-100 rounded-2xl p-5 mx-3 flex-shrink-0 flex flex-col justify-between relative overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
          >
            {/* Very subtile elegant gradient hint at the bottom right */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Header: MioDottore Logo (Left) & Verification Chip (Right) */}
              <div className="flex justify-between items-center mb-5">
                <img 
                  src={mioDottoreLogo} 
                  alt="MioDottore" 
                  className="h-10 sm:h-12 w-auto object-contain transition-all duration-500 opacity-100" 
                />
                {review.verified && (
                  <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] font-bold text-emerald-700 tracking-tight uppercase">Verificata</span>
                  </div>
                )}
              </div>
              
              {/* Testimonial Text */}
              <div className="relative">
                <span className="absolute -top-1 -left-1 text-2xl text-emerald-500/10 font-serif">“</span>
                <p className="text-slate-600 text-[13px] leading-relaxed mb-6 line-clamp-5 italic text-left relative z-10 pl-2">
                  {review.text}
                </p>
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100/80 text-left">
              <div className="w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center text-emerald-600/40 font-bold flex-shrink-0 text-xs shadow-sm">
                {review.name.charAt(0)}
              </div>
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="flex items-center gap-2 w-full">
                  <span className="text-[13px] font-bold text-slate-800 truncate leading-tight">{review.name}</span>
                  <div className="flex text-amber-400 text-[10px] flex-shrink-0">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 truncate mt-0.5">{review.service}</span>
                {review.date && <span className="text-[9px] text-slate-400 mt-0.5 font-medium">{review.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient masks for smooth edges */}
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
