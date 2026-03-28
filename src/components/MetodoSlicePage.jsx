import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, UtensilsCrossed, Ban, Clock, Sparkles, CheckCircle2, Heart, Brain, Salad, Target, Users, BookOpen } from 'lucide-react';
import { Navbar } from './Navbar';
import { SOCIAL_LINKS } from '../constants';
import logoImg from '../assets/loghi/slice logo. finale_.png';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

const pillars = [
  {
    letter: 'S',
    title: 'Sostenibilità',
    color: 'emerald',
    icon: <Heart className="w-7 h-7" />,
    tagline: 'Un piano che vive con te',
    description: 'Un piano che non puoi seguire a lungo non serve a nulla. Non ti chiederò di pesare ogni grammo o di rinunciare alle cene fuori. Creiamo insieme abitudini reali che si adattano ai tuoi ritmi, al tuo lavoro, alla tua famiglia — non il contrario.',
    points: ['Adattamento ai tuoi ritmi quotidiani', 'Compatibilità con la vita sociale', 'Nessuna restrizione insostenibile']
  },
  {
    letter: 'L',
    title: 'Libertà',
    color: 'blue',
    icon: <Salad className="w-7 h-7" />,
    tagline: 'Nessun cibo è il nemico',
    description: 'Nessun alimento è proibito. Dimentica le liste di cibi "buoni" e "cattivi". Ti insegno a gestire la pizza del sabato, il dolce della domenica e l\'aperitivo con gli amici senza sensi di colpa — e senza che il percorso ne risenta.',
    points: ['Nessun alimento proibito', 'Gestione delle occasioni sociali', 'Menù settimanale a tua scelta']
  },
  {
    letter: 'I',
    title: 'Individualità',
    color: 'violet',
    icon: <Target className="w-7 h-7" />,
    tagline: 'Calibrato su di te',
    description: 'Non esistono diete copia-incolla. Ogni grammo, ogni scelta, ogni strategia è costruita intorno al tuo metabolismo, ai tuoi gusti e ai tuoi obiettivi specifici. Quello che funziona per qualcun altro potrebbe non funzionare per te.',
    points: ['Piano calibrato sul tuo metabolismo', 'Rispetto dei tuoi gusti alimentari', 'Obiettivi personalizzati e realistici']
  },
  {
    letter: 'C',
    title: 'Consapevolezza',
    color: 'amber',
    icon: <Brain className="w-7 h-7" />,
    tagline: 'Impara per sempre',
    description: 'Questo è il cuore del metodo. Non ti do solo un piano alimentare: ti insegno a capire cosa mangi e perché. Con il tempo imparerai a bilanciare un pasto da solo, a leggere un\'etichetta, a fare la spesa in modo intelligente. Diventerai autonomo — per sempre.',
    points: ['Educazione alimentare completa', 'Autonomia nel bilanciare i pasti', 'Conoscenze che durano tutta la vita']
  },
  {
    letter: 'E',
    title: 'Equilibrio',
    color: 'rose',
    icon: <Users className="w-7 h-7" />,
    tagline: 'Mente e corpo in armonia',
    description: 'La salute non è solo un numero sulla bilancia. È armonia tra mente e corpo, tra gusto e nutrimento, tra disciplina e piacere. Un approccio sereno al cibo è la vera chiave di una trasformazione che dura nel tempo.',
    points: ['Approccio senza stress né ansia', 'Rapporto sano con il cibo', 'Risultati duraturi nel tempo']
  }
];

const failureReasons = [
  {
    number: '01',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: 'La Monotonia',
    subtitle: 'Sempre le stesse 4-5 pietanze',
    description: 'Spesso nelle diete — anche quelle fai da te — si tende a mangiare sempre gli stessi alimenti "sani" per antonomasia: petto di pollo, riso in bianco, insalata scondita. La verità? Con un minimo di accorgimenti è possibile mangiare anche alimenti considerati meno "sani" e dimagrire lo stesso, restando in salute.',
    solution: 'Nel Metodo SLICE ti insegno a rendere la tua alimentazione varia e gustosa, uscendo dal paradigma "dieta = cibi tristi".'
  },
  {
    number: '02',
    icon: <Ban className="w-8 h-8" />,
    title: 'La Mancanza di Libertà',
    subtitle: 'Menù rigidi e imposti dall\'alto',
    description: 'Le diete tradizionali non prevedono che tu possa gestire il tuo menù settimanale in autonomia e scegliere in base alle tue preferenze. Questo porta, sul lungo periodo, ad affrontare i pasti senza più l\'allegria di mangiare qualcosa che ci gratifica — e inevitabilmente all\'abbandono.',
    solution: 'Con il mio approccio sei tu a decidere cosa mangiare. Ti do gli strumenti, tu scegli come usarli.'
  },
  {
    number: '03',
    icon: <Clock className="w-8 h-8" />,
    title: 'La Mancanza di Tempo',
    subtitle: 'Ore ai fornelli che non hai',
    description: 'Si associa lo stare a dieta al doversi preparare pasti elaborati. Questo è un problema enorme per chi lavora e pranza fuori casa, o per chi la sera torna a casa senza energie mentali per dedicarsi alla cucina. Il risultato? Si abbandona.',
    solution: 'Ti insegno strategie pratiche e veloci, adatte anche a chi ha pochissimo tempo per cucinare.'
  }
];

const colorMap = {
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    pill: 'bg-emerald-500/20 text-emerald-300',
    accent: 'bg-emerald-500',
    check: 'text-emerald-400'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/10',
    pill: 'bg-blue-500/20 text-blue-300',
    accent: 'bg-blue-500',
    check: 'text-blue-400'
  },
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/10',
    pill: 'bg-violet-500/20 text-violet-300',
    accent: 'bg-violet-500',
    check: 'text-violet-400'
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    glow: 'shadow-amber-500/10',
    pill: 'bg-amber-500/20 text-amber-300',
    accent: 'bg-amber-500',
    check: 'text-amber-400'
  },
  rose: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    glow: 'shadow-rose-500/10',
    pill: 'bg-rose-500/20 text-rose-300',
    accent: 'bg-rose-500',
    check: 'text-rose-400'
  }
};

export function MetodoSlicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0B0F19] min-h-screen font-sans text-white">
      <Navbar dark />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/8 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm font-medium mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Torna alla Home
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src={logoImg} alt="Slice Nutrizione Logo" className="h-20 lg:h-28 w-auto object-contain brightness-0 invert opacity-80" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              Guida Completa
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Il Metodo<br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
                S.L.I.C.E.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-6">
              Non è solo un piano alimentare. È un percorso che ti insegna a gestire la tua alimentazione <span className="text-white font-semibold">in autonomia, per tutta la vita</span>.
            </p>

            <p className="text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Grazie ad un affiancamento costante e un'attenzione rivolta all'educazione alimentare, imparerai a bilanciare i tuoi pasti da solo — portandoti dietro queste conoscenze per sempre, evitando di riprendere peso in futuro.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ PERCHÉ LE DIETE FALLISCONO ═══════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0E1225] to-[#0B0F19]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-400 uppercase tracking-[0.3em] mb-4">Il Problema</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Perché le diete <span className="text-red-400">falliscono</span>?
            </h3>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Nel corso della mia pratica clinica ho individuato 3 fattori critici che determinano l'abbandono delle diete. Il Metodo SLICE nasce per risolverli tutti.
            </p>
          </div>

          <div className="space-y-8">
            {failureReasons.map((reason, index) => (
              <div key={index} className="group relative">
                <div className="bg-[#0D121F] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-red-500/20 transition-all duration-500 overflow-hidden">
                  {/* Large number background */}
                  <div className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.02] select-none leading-none">{reason.number}</div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                      {reason.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-red-400/60 text-xs font-black uppercase tracking-widest">{reason.number}</span>
                      </div>
                      <h4 className="text-2xl font-black text-white mb-1">{reason.title}</h4>
                      <p className="text-sm text-slate-500 font-medium mb-4">{reason.subtitle}</p>
                      <p className="text-slate-400 font-light leading-relaxed mb-5">{reason.description}</p>
                      
                      {/* Solution */}
                      <div className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-emerald-300 text-sm font-medium leading-relaxed">{reason.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ I 5 PILASTRI S.L.I.C.E. ═══════════════ */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">La Soluzione</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              I 5 Pilastri del Metodo
            </h3>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
              Ogni lettera rappresenta un principio fondamentale del percorso. Insieme, formano un sistema completo e scientificamente validato.
            </p>
          </div>

          <div className="space-y-12">
            {pillars.map((pillar, index) => {
              const colors = colorMap[pillar.color];
              const isEven = index % 2 === 0;
              
              return (
                <div key={pillar.letter} className="group">
                  <div className={`relative bg-[#0D121F] border border-white/5 rounded-3xl overflow-hidden hover:${colors.border} transition-all duration-500`}>
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${colors.accent} opacity-50`} />
                    
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                      {/* Letter/Icon Side */}
                      <div className={`lg:w-1/3 ${colors.bg} flex flex-col items-center justify-center p-10 lg:p-14 relative overflow-hidden`}>
                        <div className={`absolute text-[200px] font-black ${colors.text} opacity-[0.07] select-none leading-none`}>
                          {pillar.letter}
                        </div>
                        <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 relative z-10`}>
                          {pillar.icon}
                        </div>
                        <div className={`text-6xl md:text-7xl font-black ${colors.text} relative z-10`}>
                          {pillar.letter}
                        </div>
                        <span className={`text-xs font-black uppercase tracking-widest ${colors.text} mt-2 relative z-10`}>
                          {pillar.tagline}
                        </span>
                      </div>

                      {/* Content Side */}
                      <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <div className={`inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full ${colors.pill} text-[10px] font-black uppercase tracking-widest mb-5`}>
                          Pilastro {index + 1}
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-400 font-light leading-relaxed text-base mb-8">
                          {pillar.description}
                        </p>
                        <div className="space-y-3">
                          {pillar.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className={`w-5 h-5 ${colors.check} shrink-0`} />
                              <span className="text-sm text-slate-300 font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ COME FUNZIONA IL PERCORSO ═══════════════ */}
      <section className="py-24 relative">
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
                description: 'Conosciamo la tua storia, i tuoi obiettivi e le tue abitudini. Eseguo un\'analisi della composizione corporea e valutiamo insieme il punto di partenza.'
              },
              {
                step: '02',
                title: 'Piano Personalizzato',
                description: 'Costruisco il tuo piano alimentare su misura. Non una dieta generica: un percorso pensato per il tuo stile di vita, i tuoi gusti e i tuoi ritmi.'
              },
              {
                step: '03',
                title: 'Educazione & Autonomia',
                description: 'Ti insegno a leggere le etichette, a bilanciare i pasti, a fare la spesa intelligente. Settimana dopo settimana diventi sempre più autonomo.'
              },
              {
                step: '04',
                title: 'Affiancamento Costante',
                description: 'Non ti lascio solo. Controlli periodici, supporto continuo e aggiustamenti in base ai tuoi progressi e ai cambiamenti nella tua vita.'
              },
              {
                step: '05',
                title: 'Libertà Definitiva',
                description: 'L\'obiettivo finale è che tu non abbia più bisogno di me. Avrai le conoscenze per gestire la tua alimentazione in autonomia, per sempre.'
              }
            ].map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#0B0F19] z-10" />
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:w-1/2' : 'md:pl-16 md:text-left md:w-1/2 md:ml-auto'}`}>
                  <span className="text-emerald-500 text-xs font-black uppercase tracking-widest">{item.step}</span>
                  <h4 className="text-xl font-black text-white mt-1 mb-3">{item.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CITAZIONE ═══════════════ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl border border-emerald-500/10 p-12 md:p-16">
            <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-8">
              "Non voglio darti un piano da seguire per 3 mesi. Voglio insegnarti a mangiare bene per il <span className="text-emerald-400 font-semibold not-italic">resto della tua vita</span>."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-black">PP</div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Dott. Paolo Panarini</p>
                <p className="text-slate-500 text-xs">Dietista & Nutrizionista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINALE ═══════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Pronto a cambiare le regole?
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Il primo passo è una visita conoscitiva. Nessun impegno, nessun pagamento anticipato. Scopriamo insieme se il Metodo SLICE è adatto a te.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={SOCIAL_LINKS.miodottore}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <img src={mioDottoreLogo} alt="" className="w-10 h-6 object-contain brightness-0 invert" />
              Prenota la tua visita
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-slate-500 font-medium">Nessun pagamento anticipato richiesto</span>
          </div>
        </div>
      </section>
    </div>
  );
}
