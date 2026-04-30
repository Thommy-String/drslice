import React, { useRef, useEffect } from 'react';
import { ArrowRight, FileText, Compass, Heart, BookOpen, Crown, ChevronRight, Sparkles, Utensils, Sunrise, Plane, Moon, Eye, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export function Methodology() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // First confetti burst from center
            confetti({
              particleCount: 150,
              spread: 90,
              origin: { x: 0.5, y: 0.5 },
              colors: ['#34D399', '#10B981', '#059669', '#38BDF8', '#06B6D4', '#FBBF24'],
              angle: 45
            });

            // Second burst with delay
            setTimeout(() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0.3, y: 0.3 },
                colors: ['#34D399', '#10B981', '#059669', '#38BDF8'],
                angle: 60
              });
            }, 250);

            // Third burst from different angle
            setTimeout(() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0.7, y: 0.3 },
                colors: ['#06B6D4', '#FBBF24', '#34D399', '#10B981'],
                angle: 120
              });
            }, 500);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
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
          <h3 className="text-3xl md:text-5xl text-white font-black tracking-tight mb-6">
            Ecco cosa faremo insieme
          </h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

          {[
            {
              step: '01',
              title: 'Prima Visita & Analisi',
              description: 'Conosciamo la tua storia, i tuoi obiettivi e le tue abitudini. Eseguo un\'analisi della composizione corporea e valutiamo insieme il punto di partenza. Successivamente faremo un\'analisi ad ogni visita per monitorare con precisione i tuoi progressi.'
            },
            {
              step: '02',
              title: 'Proposta primo piano personalizzato',
              description: 'Costruisco il tuo piano alimentare su misura, basato sulle tue abitudini reali e il tuo stile di vita. Ma non è rigido: se qualcosa non funziona, lo cambiamo. Se le tue esigenze evolvono, il piano si adatta con te.'
            },
            {
              step: '03',
              title: 'Affiancamento Costante',
              description: "Il percorso non è una linea retta: ci sono i giorni no, lo stress al lavoro, o quel momento di crisi personale — come una rottura sentimentale. A differenza dell’approccio medico tradizionale, qui non verrai mai giudicato. Il mio compito è essere presente proprio in quei momenti per gestire lo sfogo, la complicazione o la crisi. Siamo umani, non macchine. Ti offro un supporto a 360 gradi che integra la salute fisica con quella mentale, aiutandoti a rialzarti e a ritrovare l’equilibrio senza sensi di colpa."
            },
            {
              step: '04',
              title: 'Educazione & Autonomia',
              description: 'Ti insegno a leggere le etichette, a bilanciare i pasti, a fare la spesa intelligente. Settimana dopo settimana diventi sempre più autonomo.'
            },
            {
              step: '05',
              title: 'Libertà Definitiva',
              description: 'L\'obiettivo finale è che tu non abbia più bisogno di me. Avrai le conoscenze per gestire la tua alimentazione in autonomia, per sempre.',
              isFinal: true
            }
          ].map((item, index) => (
            <React.Fragment key={index}>
              {item.isFinal && (
                /* ═══ Curved connector arrow between step 04 and step 05 ═══ */
                <div className="relative -mt-4 mb-2 md:mb-4 h-48 md:h-40 pointer-events-none select-none" aria-hidden="true">
                  {/* Mobile: longer, more pronounced S-curve from top-center down to the card */}
                  <svg
                    className="md:hidden absolute inset-0 h-full w-full overflow-visible"
                    viewBox="0 0 200 240"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="arrowGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
                      </linearGradient>
                      <filter id="arrowGlowMobile">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <marker
                        id="arrowHeadMobile"
                        viewBox="0 0 12 12"
                        refX="10"
                        refY="6"
                        markerWidth="7"
                        markerHeight="7"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 11 6 L 0 12 z" fill="#22d3ee" />
                      </marker>
                    </defs>
                    {/* Glow halo */}
                    <path
                      d="M 100 0 C 30 70, 180 150, 100 230"
                      stroke="#10b981"
                      strokeOpacity="0.22"
                      strokeWidth="7"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#arrowGlowMobile)"
                    />
                    {/* Main long S-curve */}
                    <path
                      d="M 100 0 C 30 70, 180 150, 100 230"
                      stroke="url(#arrowGradMobile)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="6 6"
                      className="arrow-dash"
                      markerEnd="url(#arrowHeadMobile)"
                    />
                  </svg>

                  {/* Desktop: dramatic curve starting from the RIGHT (step 04 sits on the right) sweeping down toward center */}
                  <svg
                    className="hidden md:block absolute inset-0 w-full h-full overflow-visible"
                    viewBox="0 0 800 160"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="arrowGradDesktop" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                        <stop offset="40%" stopColor="#34d399" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
                      </linearGradient>
                      <filter id="arrowGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <marker
                        id="arrowHeadDesktop"
                        viewBox="0 0 14 14"
                        refX="11"
                        refY="7"
                        markerWidth="8"
                        markerHeight="8"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 13 7 L 0 14 z" fill="#22d3ee" />
                      </marker>
                    </defs>
                    {/* Glow halo path — starts top-right, curves down toward center */}
                    <path
                      d="M 640 0 C 700 70, 280 70, 400 150"
                      stroke="#10b981"
                      strokeOpacity="0.25"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#arrowGlow)"
                    />
                    {/* Main dashed curve with auto-oriented arrowhead */}
                    <path
                      d="M 640 0 C 700 70, 280 70, 400 150"
                      stroke="url(#arrowGradDesktop)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="8 8"
                      fill="none"
                      className="arrow-dash"
                      markerEnd="url(#arrowHeadDesktop)"
                    />
                  </svg>

                  {/* Floating handwritten label */}
                  <span
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-300/90 text-3xl md:text-3xl font-bold rotate-[-6deg] whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-handwriting), cursive' }}
                  >
                    e finalmente...
                  </span>
                </div>
              )}

              <div className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${item.isFinal ? 'premium-card overflow-hidden bg-gradient-to-br from-emerald-500/15 via-cyan-500/5 to-emerald-500/15 rounded-3xl p-8 md:p-12 border border-emerald-400/40 shadow-2xl shadow-emerald-500/30' : ''}`}>
                {/* Premium animated background for final step */}
                {item.isFinal && (
                  <>
                    {/* Rotating conic gradient halo */}
                    <div className="absolute -inset-px rounded-3xl pointer-events-none premium-rotate-glow opacity-60" />
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-y-0 -inset-x-full premium-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    {/* Soft pulsing glow */}
                    <div className="absolute -top-10 -right-10 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl premium-pulse pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl premium-pulse-delay pointer-events-none" />
                    {/* Floating sparkles */}
                    <Sparkles className="absolute top-6 right-8 w-4 h-4 text-emerald-300/80 premium-float" />
                    <Sparkles className="absolute bottom-8 right-20 w-3 h-3 text-cyan-300/70 premium-float-delay" />
                    <Sparkles className="absolute top-12 left-16 w-3 h-3 text-emerald-200/60 premium-float-slow" />
                  </>
                )}

                {/* Dot */}
                <div className={`absolute ${item.isFinal ? 'left-8 md:left-1/2' : 'left-6 md:left-1/2'} -translate-x-1/2 w-3 h-3 rounded-full ${item.isFinal ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 ring-4 ring-emerald-500/50 shadow-lg shadow-emerald-500/50 premium-dot-pulse' : 'bg-emerald-500 ring-4 ring-[#0B0F19]'} z-10`} />

                {/* Content card */}
                <div ref={item.isFinal ? confettiRef : null} className={`${item.isFinal ? 'relative z-10 w-full' : ''} ${item.isFinal ? '' : `ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:w-1/2' : 'md:pl-16 md:text-left md:w-1/2 md:ml-auto'}`}`}>
                  <span className={`${item.isFinal ? 'text-emerald-300 text-base' : 'text-emerald-500 text-sm'} font-black uppercase tracking-widest`}>{item.step}</span>
                  <h4 className={`${item.isFinal ? 'text-4xl md:text-5xl premium-gradient-text' : 'text-2xl md:text-3xl text-white'} font-black mt-1 mb-3`}>
                    {item.isFinal && <Crown className="inline-block w-8 h-8 md:w-10 md:h-10 mr-2 -mt-1 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] premium-crown" />}
                    {item.title}
                  </h4>
                  <p className={`${item.isFinal ? 'text-emerald-100/90 text-lg' : 'text-slate-400 text-base'} font-light leading-relaxed`}>{item.description}</p>
                  {item.isFinal && (
                    <>
                      {/* Section divider with label */}
                      <div className="mt-10 mb-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-400/40 to-emerald-400/40" />
                        <span className="text-[10px] font-black tracking-[0.25em] uppercase text-emerald-300/90">
                          Ecco cosa saprai fare
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-400/40 to-emerald-400/40" />
                      </div>

                      {/* Daily life scenes grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          {
                            icon: Utensils,
                            tag: 'Mangiare fuori',
                            accent: 'emerald',
                            title: 'Poter scegliere dal menù senza sensi di colpa',
                            parts: [
                              'Apri il menù e ',
                              { b: 'non cerchi la cosa con meno calorie' },
                              '. Scegli quello che ti va, perché sai esattamente come bilanciare quel pasto nei prossimi giorni. ',
                              { b: 'Goditi pasti liberi senza rinunciare alle uscite con amici.' }
                            ]
                          },
                          {
                            icon: Sunrise,
                            tag: 'Il giorno dopo un evento o serata',
                            accent: 'amber',
                            title: 'Svegliarsi dopo un grande evento senza rimpianti',
                            parts: [
                              'Ti svegli dopo una cena abbondante o un matrimonio. Invece di sentirti in colpa o digiunare per "punizione", ',
                              { b: 'sai esattamente cosa mangiare per riequilibrarti' },
                              '. ',
                              { b: 'Hai il controllo, non la paura.' }
                            ]
                          },
                          {
                            icon: Plane,
                            tag: 'Viaggiare Leggeri',
                            accent: 'cyan',
                            title: 'Godersi i piatti tipici in vacanza senza il terrore di rovinare i progressi',
                            parts: [
                              'Parti per una settimana e ',
                              { b: 'ti godi i sapori locali' },
                              '. Non torni con l’ansia della bilancia, perché hai imparato a gestire i volumi e la fame nervosa ',
                              { b: 'anche fuori dalla tua zona di comfort.' }
                            ]
                          },
                          {
                            icon: Moon,
                            tag: 'Padronanza Emotiva',
                            accent: 'violet',
                            title: 'Gestire lo stress di una giornata storta senza usare il frigo come valvola di sfogo',
                            parts: [
                              'Sei stanco, il lavoro è stato un inferno. Invece di svuotare la dispensa per noia o rabbia, ',
                              { b: 'hai la forza mentale e gli strumenti per dominare lo stress' },
                              ' senza cercare conforto nel cibo.'
                            ]
                          },
                          {
                            icon: Eye,
                            tag: 'Piacersi',
                            accent: 'rose',
                            title: 'Guardarsi allo specchio e piacersi',
                            fullWidth: true,
                            parts: [
                              'Non conti più i giorni che mancano alla fine del percorso, perché ',
                              { b: 'questo è il tuo nuovo stile di vita che riesci a seguire senza sforzi' },
                              '. Sei una persona che sa come nutrirsi. Ti vedi bene, ti senti bene indossando i vestiti, hai energia da vendere e ',
                              { b: 'sai che questo risultato rimarrà tuo per tutta la vita.' }
                            ]
                          }
                        ].map((scene, i) => {
                          const SceneIcon = scene.icon;
                          const accents = {
                            emerald: { glow: 'from-emerald-500/15 to-emerald-500/0', tag: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30', icon: 'text-emerald-300', bigIcon: 'text-emerald-400/10', bar: 'from-emerald-400 to-emerald-600', hover: 'hover:border-emerald-400/50' },
                            amber: { glow: 'from-amber-500/15 to-amber-500/0', tag: 'text-amber-200 bg-amber-500/15 border-amber-400/30', icon: 'text-amber-200', bigIcon: 'text-amber-400/10', bar: 'from-amber-300 to-amber-500', hover: 'hover:border-amber-400/50' },
                            cyan: { glow: 'from-cyan-500/15 to-cyan-500/0', tag: 'text-cyan-200 bg-cyan-500/15 border-cyan-400/30', icon: 'text-cyan-200', bigIcon: 'text-cyan-400/10', bar: 'from-cyan-300 to-cyan-500', hover: 'hover:border-cyan-400/50' },
                            violet: { glow: 'from-violet-500/15 to-violet-500/0', tag: 'text-violet-200 bg-violet-500/15 border-violet-400/30', icon: 'text-violet-200', bigIcon: 'text-violet-400/10', bar: 'from-violet-300 to-violet-500', hover: 'hover:border-violet-400/50' },
                            rose: { glow: 'from-rose-500/15 to-rose-500/0', tag: 'text-rose-200 bg-rose-500/15 border-rose-400/30', icon: 'text-rose-200', bigIcon: 'text-rose-400/10', bar: 'from-rose-300 to-rose-500', hover: 'hover:border-rose-400/50' },
                          }[scene.accent];

                          return (
                            <div
                              key={i}
                              className={`group/scene relative overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 ${accents.hover} backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 ${scene.fullWidth ? 'md:col-span-2' : ''}`}
                            >
                              {/* Left accent bar */}
                              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${accents.bar} opacity-70 group-hover/scene:opacity-100 transition-opacity`} />

                              {/* Big watermark icon */}
                              <SceneIcon
                                className={`absolute -bottom-4 -right-4 w-32 h-32 ${accents.bigIcon} pointer-events-none group-hover/scene:scale-110 group-hover/scene:rotate-6 transition-transform duration-500`}
                                strokeWidth={1.2}
                              />

                              {/* Diagonal hover glow */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${accents.glow} opacity-0 group-hover/scene:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                              <div className="relative text-left">
                                {/* Header row: small icon chip + tag */}
                                <div className="flex items-center gap-3 mb-4">
                                  <div className={`shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${accents.icon} group-hover/scene:rotate-[-8deg] group-hover/scene:scale-110 transition-transform duration-300`}>
                                    <SceneIcon className="w-5 h-5" />
                                  </div>
                                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${accents.tag}`}>
                                    {scene.tag}
                                  </span>
                                </div>

                                <h5 className="text-white font-black text-xl md:text-2xl mb-3 leading-tight tracking-tight">
                                  {scene.title}
                                </h5>
                                <p className="text-slate-200/85 text-base md:text-[17px] font-light leading-relaxed">
                                  {scene.parts.map((p, j) =>
                                    typeof p === 'string'
                                      ? <React.Fragment key={j}>{p}</React.Fragment>
                                      : <strong key={j} className="text-white font-bold">{p.b}</strong>
                                  )}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>


                    </>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/metodo"
            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 group"
          >
            Leggi il Metodo Completo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-sm text-slate-400 font-light">Scopri il metodo SLICE più a fondo</p>
        </div>
      </div>
    </section>
  );
}
