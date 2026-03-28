import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Ban, Clock, UtensilsCrossed } from 'lucide-react';
import { DOCTOR_INFO } from '../constants';
import logoImg from '../assets/loghi/slice logo. finale_.png';

const steps = [
  {
    letter: 'S',
    title: 'Sostenibilità',
    description: 'Un piano che si adatta alla tua vita reale: pranzi fuori, cene in famiglia, ritmi di lavoro. Se non è sostenibile, non funziona.'
  },
  {
    letter: 'L',
    title: 'Libertà',
    description: 'Nessun alimento è proibito. Impari a gestire la pizza, i dolci e le cene fuori senza sensi di colpa — e senza riprendere peso.'
  },
  {
    letter: 'I',
    title: 'Individualità',
    description: 'Zero diete copia-incolla. Ogni scelta è calibrata su di te: il tuo metabolismo, i tuoi gusti, i tuoi obiettivi.'
  },
  {
    letter: 'C',
    title: 'Consapevolezza',
    description: 'Ti insegno a bilanciare un pasto da solo. Diventerai autonomo nella gestione della tua alimentazione, per sempre.'
  },
  {
    letter: 'E',
    title: 'Equilibrio',
    description: 'La salute è armonia tra mente e corpo. Un approccio sereno al cibo è la chiave di una trasformazione che dura nel tempo.'
  }
];

const failureReasons = [
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: 'La Monotonia',
    description: 'Mangiare sempre le stesse 4-5 pietanze "sane" porta all\'abbandono. Con il Metodo SLICE scopri che si può dimagrire anche mangiando ciò che ami.'
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: 'La Mancanza di Libertà',
    description: 'Le diete rigide tolgono la gioia del pasto. Nel mio metodo sei tu a scegliere cosa mangiare, ogni giorno, con consapevolezza.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'La Mancanza di Tempo',
    description: 'Non serve stare ore ai fornelli. Ti insegno strategie pratiche per chi lavora, pranza fuori o torna a casa senza energie.'
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
    <section id="metodo" className="py-24 bg-[#0B0F19] overflow-hidden relative">
      {/* Cinematic Background Elements - Blu notte come AboutMe/Footer */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          <div className="flex justify-center mb-8">
            <img src={logoImg} alt="Slice Nutrizione Logo" className="h-24 lg:h-32 w-auto object-contain brightness-0 invert opacity-90" />
          </div>

          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">
            Il Metodo
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            S.L.I.C.E.
          </h3>
          <p className="text-lg text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Non è solo un piano alimentare. È un percorso che ti insegna a gestire la tua alimentazione <span className="text-white font-medium">in autonomia, per sempre</span> — senza monotonia, senza rinunce, senza stare ore ai fornelli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.letter} 
              onMouseEnter={() => { if (isDesktop) setActiveIndex(index); }}
              onMouseLeave={() => { if (isDesktop) setActiveIndex(-1); }}
              className={`methodology-card group relative bg-[#0D121F] border rounded-3xl p-8 py-12 transition-all duration-300 overflow-hidden flex flex-col items-center text-center cursor-default ${
                activeIndex === index 
                  ? 'border-emerald-500/50 bg-[#121826] ring-1 ring-emerald-500/20 shadow-[0_0_60px_-12px_rgba(16,185,129,0.3)] lg:-translate-y-2' 
                  : 'border-white/5'
              }`}
            >
              {/* Large Background Letter */}
              <div className={`absolute -top-6 -right-4 text-9xl font-black transition-all duration-500 select-none ${
                activeIndex === index ? 'text-emerald-500/10 scale-110 rotate-12' : 'text-white/[0.02]'
              }`}>
                {step.letter}
              </div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 transition-all duration-500 ${
                activeIndex === index 
                  ? 'bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-600/20 rotate-3' 
                  : 'bg-white/5 text-emerald-400'
              }`}>
                {step.letter}
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
          <p className="text-slate-500 text-sm font-light italic mb-6">
            "Semplifica la tua alimentazione, potenzia la tua vita."
          </p>
        </div>

        {/* 3 Motivi del Fallimento */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
              Perché le diete falliscono?
            </h3>
            <p className="text-slate-400 font-light max-w-xl mx-auto">
              Nella mia pratica clinica ho individuato 3 fattori critici. Il Metodo SLICE li affronta tutti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {failureReasons.map((reason, index) => (
              <div key={index} className="relative bg-[#0D121F] border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.03] select-none">{index + 1}</div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{reason.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA verso pagina dedicata */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl p-10 px-14 border border-emerald-500/10">
            <p className="text-white font-bold text-lg md:text-xl max-w-md">
              Vuoi scoprire nel dettaglio come funziona il Metodo SLICE?
            </p>
            <Link 
              to="/metodo-slice"
              className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Scopri il Metodo Completo
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
