import React from 'react';
import { DOCTOR_INFO } from '../constants';

const steps = [
  {
    letter: 'S',
    title: 'Sostenibilità',
    description: 'Un piano che non puoi seguire a lungo non serve a nulla. Creiamo abitudini che si adattano alla tua vita, non il contrario.'
  },
  {
    letter: 'L',
    title: 'Libertà',
    description: 'Nessun alimento è proibito. Impariamo a gestire la pizza, le cene fuori e i dolci senza sensi di colpa.'
  },
  {
    letter: 'I',
    title: 'Individualità',
    description: 'Non esistono diete copia-incolla. Ogni grammo e ogni scelta sono calibrati sul tuo metabolismo e i tuoi gusti.'
  },
  {
    letter: 'C',
    title: 'Consapevolezza',
    description: 'Ti insegno a capire cosa mangi e perché. Diventerai autonomo nella gestione della tua alimentazione per sempre.'
  },
  {
    letter: 'E',
    title: 'Equilibrio',
    description: 'La salute è armonia tra mente e corpo. Un approccio sereno al cibo è la chiave della tua trasformazione.'
  }
];

export function Methodology() {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    // Check if we are on desktop
    const checkIsDesktop = () => {
      const desktop = window.innerWidth >= 768; // md breakpoint in tailwind is 768px
      setIsDesktop(desktop);
      // Reset active state when switching to desktop to prevent stuck active styles
      if (desktop) {
        setActiveIndex(-1);
      }
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    // Scroll animation on mobile
    const handleScroll = () => {
      // Very strict check: do absolutely nothing on scroll if desktop
      if (window.innerWidth >= 768) return; 
      
      const cards = document.querySelectorAll('.methodology-card');
      const viewportCenter = window.innerHeight / 2;
      
      let currentActive = -1;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Restore fluid scroll bounding logic
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentActive = index;
        }
      });
      
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // setTimeout solves immediate flashing on page reload
    setTimeout(handleScroll, 100); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  return (
    <section id="metodo" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          

          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
            Il Metodo
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            S.L.I.C.E.
          </h3>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            Un approccio scientifico, umano e sostenibile per trasformare il tuo rapporto con il cibo senza rinunce estreme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.letter} 
              onMouseEnter={() => { if (isDesktop) setActiveIndex(index); }}
              onMouseLeave={() => { if (isDesktop) setActiveIndex(-1); }}
              className={`methodology-card group relative bg-[#0A0A0A] border rounded-3xl p-8 py-12 transition-all duration-300 overflow-hidden flex flex-col items-center text-center cursor-default ${
                activeIndex === index 
                  ? 'border-emerald-500/50 bg-[#0F0F0F] ring-1 ring-emerald-500/20 shadow-[0_0_60px_-12px_rgba(16,185,129,0.3)] lg:-translate-y-2' 
                  : 'border-white/5'
              }`}
            >
              {/* Large Background Letter */}
              <div className={`absolute -top-4 -right-2 transition-all duration-500 pointer-events-none ${
                activeIndex === index 
                  ? 'opacity-30 scale-110' 
                  : 'opacity-[0.03]'
              }`}>
                <span className={`text-[12rem] font-black leading-none transition-colors duration-500 ${
                  activeIndex === index ? 'text-emerald-500' : 'text-white'
                }`}>
                  {step.letter}
                </span>
              </div>
              
              <div className="relative z-10 w-full">
                <div className={`text-5xl font-black mb-6 font-mono transition-all duration-300 ${
                  activeIndex === index ? 'text-emerald-400 scale-110' : 'text-emerald-500/20'
                }`}>
                  {step.letter}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${
                  activeIndex === index ? 'text-slate-100' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Scroll Line Detail */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transition-transform duration-300 origin-left ${
                activeIndex === index ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-light italic">
            "Semplifica la tua alimentazione, potenzia la tua vita."
          </p>
        </div>
      </div>
    </section>
  );
}
