const fs = require('fs');

const methCode = `import React, { useRef, useEffect } from 'react';
import { ArrowRight, FileText, Compass, Heart, BookOpen, Crown, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export function Methodology() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.8 },
              colors: ['#34D399', '#10B981', '#059669', '#38BDF8']
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (confettiRef.current) {
      observer.observe(confettiRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative" id="metodo">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0E1225] to-[#0B0F19]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Il Percorso</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Cosa succede in pratica?
          </h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

          {[
            {
              step: '01',
              title: 'Prima Visita & Analisi',
              description: 'Conosciamo la tua storia, i tuoi obiettivi e le tue abitudini. Eseguo un\\'analisi della composizione corporea e valutiamo insieme il punto di partenza. Successivamente faremo un\\'analisi ad ogni visita per monitorare con precisione i tuoi progressi.'
            },
            {
              step: '02',
              title: 'Piano Personalizzato & Adattabile',
              description: 'Costruisco il tuo piano alimentare su misura, basato sulle tue abitudini reali e il tuo stile di vita. Ma non è rigido: se qualcosa non funziona, lo cambiamo. Se le tue esigenze evolvono, il piano si adatta con te.'
            },
            {
              step: '03',
              title: 'Affiancamento Costante',
              description: 'Non ti lascio solo. Controlli periodici, supporto continuo e aggiustamenti in base ai tuoi progressi e ai cambiamenti nella tua vita.'
            },
            {
              step: '04',
              title: 'Educazione & Autonomia',
              description: 'Ti insegno a leggere le etichette, a bilanciare i pasti, a fare la spesa intelligente. Settimana dopo settimana diventi sempre più autonomo.'
            },
            {
              step: '05',
              title: 'Libertà Definitiva',
              description: 'L\\'obiettivo finale è che tu non abbia più bisogno di me. Avrai le conoscenze per gestire la tua alimentazione in autonomia, per sempre.',
              isFinal: true
            }
          ].map((item, index) => (
            <div key={index} ref={item.isFinal ? confettiRef : null} className={\`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 \${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} \${item.isFinal ? 'bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/30 shadow-2xl shadow-emerald-500/20' : ''}\`}>
              {/* Special background for final step */}
              {item.isFinal && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 rounded-3xl animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                </>
              )}
              
              {/* Dot */}
              <div className={\`absolute \${item.isFinal ? 'left-8 md:left-1/2' : 'left-6 md:left-1/2'} -translate-x-1/2 w-3 h-3 rounded-full \${item.isFinal ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 ring-4 ring-emerald-500/50 shadow-lg shadow-emerald-500/50 animate-pulse' : 'bg-emerald-500 ring-4 ring-[#0B0F19]'} z-10\`} />
              
              {/* Content card */}
              <div className={\`\${item.isFinal ? 'relative z-10 w-full' : ''} \${item.isFinal ? '' : \`ml-16 md:ml-0 \${index % 2 === 0 ? 'md:pr-16 md:text-right md:w-1/2' : 'md:pl-16 md:text-left md:w-1/2 md:ml-auto'}\`}\`}>
                <span className={\`\${item.isFinal ? 'text-emerald-300 text-base' : 'text-emerald-500 text-sm'} font-black uppercase tracking-widest\`}>{item.step}</span>
                <h4 className={\`\${item.isFinal ? 'text-4xl md:text-5xl bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent' : 'text-2xl md:text-3xl text-white'} font-black mt-1 mb-3\`}>{item.title}</h4>
                <p className={\`\${item.isFinal ? 'text-emerald-100/80 text-lg' : 'text-slate-400 text-base'} font-light leading-relaxed\`}>{item.description}</p>
                {item.isFinal && (
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/50 rounded-full">
                    <span className="text-sm font-bold text-emerald-300">Hai raggiunto il traguardo!</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/metodo" 
            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 group"
          >
            Scopri il Metodo Completo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/Methodology.jsx', methCode);
