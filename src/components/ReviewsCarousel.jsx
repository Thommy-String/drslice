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
            className="w-[280px] bg-white border border-slate-100 shadow-sm rounded-xl p-4 mx-2 flex-shrink-0 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-green-100"
          >
            <div>
              {/* Header: MioDottore Logo (Left) & Verification Chip (Right) */}
              <div className="flex justify-between items-center mb-3">
                <img src={mioDottoreLogo} alt="MioDottore" className="h-8 sm:h-9 w-auto object-contain" />
                {review.verified && (
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[9px] font-bold text-green-700 tracking-wide uppercase">Verificata</span>
                  </div>
                )}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-600 text-[14px] leading-relaxed mb-4 line-clamp-3 italic text-left">
                "{review.text}"
              </p>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-100 text-left">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center text-green-800 font-bold shadow-inner flex-shrink-0 text-sm">
                {review.name.charAt(0)}
              </div>
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[13px] font-bold text-slate-800 truncate leading-tight">{review.name}</span>
                  <div className="flex text-[#FFC107] text-[12px] ml-2">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#00b398] truncate mt-0.5">{review.service}</span>
                {review.date && <span className="text-[9px] text-slate-400 mt-0.5">{review.date}</span>}
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
