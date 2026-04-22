import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, Sparkles, Phone, Calendar, Dumbbell, Apple, HeartPulse, Activity, Zap, RefreshCw, Star, HelpCircle, MapPin, Laptop, Map, Target, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES, DOCTOR_INFO, SOCIAL_LINKS } from '../constants';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

const questions = [
  {
    id: 1,
    title: "Qual è il tuo obiettivo principale?",
    subtitle: "Seleziona l'opzione che descrive meglio le tue necessità in questo momento.",
    options: [
      { 
        value: 'base', 
        label: 'Ritrovare il peso forma', 
        desc: 'Dimagrire in modo sano e capire come nutrirmi senza stress.',
        icon: Apple,
        color: 'blue'
      },
      { 
        value: 'sport', 
        label: 'Migliorare le performance', 
        desc: 'Ottimizzare risultati, recupero o massa muscolare.',
        icon: Dumbbell,
        color: 'orange'
      },
      { 
        value: 'clinic', 
        label: 'Gestire una condizione clinica', 
        desc: 'Diabete, colesterolo, IBS o altre patologie.',
        icon: HeartPulse,
        color: 'rose'
      },
      { 
        value: 'bia', 
        label: 'Check-up BIA', 
        desc: 'Conoscere la percentuale di massa magra e grassa.',
        icon: Activity,
        color: 'cyan'
      }
    ]
  },
  {
    id: 2,
    title: "Qual è la tua esperienza con le diete?",
    subtitle: "Ci aiuterà a personalizzare l'approccio psicologico e pratico.",
    options: [
      { 
        value: 'mai_fatta', 
        label: "È la prima volta", 
        desc: 'Non ho mai seguito un vero percorso strutturato.',
        icon: Star,
        color: 'emerald'
      },
      { 
        value: 'poche', 
        label: 'Ho provato qualche volta', 
        desc: 'Fatico a mantenere i risultati a lungo.',
        icon: RefreshCw,
        color: 'indigo'
      },
      { 
        value: 'yoyo', 
        label: 'Effetto Yo-Yo costante', 
        desc: 'Sono stanco/a delle solite diete restrittive.',
        icon: Zap,
        color: 'amber'
      },
      { 
        value: 'esperto', 
        label: 'So cosa fare, ma mi serve una guida', 
        desc: 'Conosco le basi, cerco un professionista.',
        icon: HelpCircle,
        color: 'violet'
      }
    ]
  },
  {
    id: 3,
    title: "Come preferisci svolgere le visite?",
    subtitle: "Scegli la modalità che si adatta meglio alla tua routine.",
    options: [
      { 
        value: 'studio', 
        label: 'Visita in Studio', 
        desc: 'Incontro di persona (Roma, Tivoli, Guidonia).',
        icon: MapPin,
        color: 'emerald'
      },
      { 
        value: 'online', 
        label: 'Consulenza Online', 
        desc: 'Tutto in videochiamata per risparmiare tempo.',
        icon: Laptop,
        color: 'blue'
      },
      { 
        value: 'any', 
        label: 'Mi è indifferente', 
        desc: 'Entrambe, deciderò in base alle disponibilità.',
        icon: Map,
        color: 'slate'
      }
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50', hoverBg: 'group-hover:bg-blue-50', border: 'border-blue-500', 
    hoverBorder: 'hover:border-blue-200', text: 'text-blue-600', iconBg: 'bg-blue-100', iconText: 'text-blue-600'
  },
  orange: {
    bg: 'bg-orange-50', hoverBg: 'group-hover:bg-orange-50', border: 'border-orange-500', 
    hoverBorder: 'hover:border-orange-200', text: 'text-orange-600', iconBg: 'bg-orange-100', iconText: 'text-orange-600'
  },
  rose: {
    bg: 'bg-rose-50', hoverBg: 'group-hover:bg-rose-50', border: 'border-rose-500', 
    hoverBorder: 'hover:border-rose-200', text: 'text-rose-600', iconBg: 'bg-rose-100', iconText: 'text-rose-600'
  },
  cyan: {
    bg: 'bg-cyan-50', hoverBg: 'group-hover:bg-cyan-50', border: 'border-cyan-500', 
    hoverBorder: 'hover:border-cyan-200', text: 'text-cyan-600', iconBg: 'bg-cyan-100', iconText: 'text-cyan-600'
  },
  emerald: {
    bg: 'bg-emerald-50', hoverBg: 'group-hover:bg-emerald-50', border: 'border-emerald-500', 
    hoverBorder: 'hover:border-emerald-200', text: 'text-emerald-600', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600'
  },
  indigo: {
    bg: 'bg-indigo-50', hoverBg: 'group-hover:bg-indigo-50', border: 'border-indigo-500', 
    hoverBorder: 'hover:border-indigo-200', text: 'text-indigo-600', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600'
  },
  amber: {
    bg: 'bg-amber-50', hoverBg: 'group-hover:bg-amber-50', border: 'border-amber-500', 
    hoverBorder: 'hover:border-amber-200', text: 'text-amber-600', iconBg: 'bg-amber-100', iconText: 'text-amber-600'
  },
  violet: {
    bg: 'bg-violet-50', hoverBg: 'group-hover:bg-violet-50', border: 'border-violet-500', 
    hoverBorder: 'hover:border-violet-200', text: 'text-violet-600', iconBg: 'bg-violet-100', iconText: 'text-violet-600'
  },
  slate: {
    bg: 'bg-slate-100', hoverBg: 'group-hover:bg-slate-50', border: 'border-slate-500', 
    hoverBorder: 'hover:border-slate-300', text: 'text-slate-700', iconBg: 'bg-slate-200', iconText: 'text-slate-600'
  }
};

export function ServiceQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (questionIndex, value) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        setIsFinished(true);
        setIsTransitioning(false);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const resetQuiz = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(0);
      setAnswers({});
      setIsFinished(false);
      setIsTransitioning(false);
    }, 300);
  };

  const getRecommendedService = () => {
    const q1 = answers[0]; // obiettivo
    const q3 = answers[2]; // modalità

    if (q1 === 'bia') return SERVICES.find(s => s.name.includes('BIA'));
    if (q1 === 'clinic') return SERVICES.find(s => s.name.includes('Cliniche'));
    if (q1 === 'sport') return SERVICES.find(s => s.name.includes('Sportiva'));
    if (q3 === 'online') return SERVICES.find(s => s.name.includes('online'));
    
    return SERVICES.find(s => s.name.includes('Prima visita'));
  };

  const getThemeColors = (group) => {
    const themes = {
      "Percorso Base": {
        card: "border-blue-100 shadow-[0_40px_80px_-15px_rgba(59,130,246,0.15)] ring-blue-500/20",
        icon: "bg-blue-50 text-blue-600",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30",
        glow: "from-blue-500/10",
        badge: "bg-blue-500/10 text-blue-700 border-blue-200"
      },
      "Smart": {
        card: "border-indigo-100 shadow-[0_40px_80px_-15px_rgba(99,102,241,0.15)] ring-indigo-500/20",
        icon: "bg-indigo-50 text-indigo-600",
        accent: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20",
        glow: "from-indigo-500/10",
        badge: "bg-indigo-500/10 text-indigo-700 border-indigo-200"
      },
      "Performance": {
        card: "border-orange-100 shadow-[0_40px_80px_-15px_rgba(249,115,22,0.15)] ring-orange-500/20",
        icon: "bg-orange-50 text-orange-600",
        accent: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-500 shadow-orange-600/30",
        glow: "from-orange-500/10",
        badge: "bg-orange-500/10 text-orange-700 border-orange-200"
      },
      "Clinical": {
        card: "border-rose-100 shadow-[0_40px_80px_-15px_rgba(244,63,94,0.15)] ring-rose-500/20",
        icon: "bg-rose-50 text-rose-600",
        accent: "text-rose-600",
        button: "bg-rose-600 hover:bg-rose-500 shadow-rose-600/30",
        glow: "from-rose-500/10",
        badge: "bg-rose-500/10 text-rose-700 border-rose-200"
      },
      "Check-up": {
        card: "border-cyan-100 shadow-[0_40px_80px_-15px_rgba(6,182,212,0.15)] ring-cyan-500/20",
        icon: "bg-cyan-50 text-cyan-600",
        accent: "text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/30",
        glow: "from-cyan-500/10",
        badge: "bg-cyan-500/10 text-cyan-700 border-cyan-200"
      },
      "default": {
        card: "border-emerald-100 shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] ring-emerald-500/20",
        icon: "bg-emerald-50 text-emerald-600",
        accent: "text-emerald-600",
        button: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30",
        glow: "from-emerald-500/10",
        badge: "bg-emerald-500/10 text-emerald-700 border-emerald-200"
      }
    };
    return themes[group] || themes["default"];
  };

  const recommendedService = getRecommendedService();
  const theme = getThemeColors(recommendedService?.group);

  const progress = ((currentStep) / questions.length) * 100;

  return (
    <section className="py-12 sm:py-20 bg-transparent relative overflow-visible" id="quiz">
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        
        {/* Header - Ridotto per integrazione in Hero */}
        <div className="text-center mb-8 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-100/50">
            <Sparkles className="w-3 h-3" />
            quiz
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Quiz per scoprire il tuo percorso
          </h2>
        </div>

        {/* Quiz Container - Rimosso l'overflow hidden che tagliava i lati e regolata larghezza */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl shadow-emerald-900/10 border border-slate-100 p-5 sm:p-12 min-h-[400px] flex flex-col relative w-full lg:max-w-none">
          
          {!isFinished ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Domanda {currentStep + 1} di {questions.length}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question Content */}
              <div className={`flex-1 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  {questions[currentStep].title}
                </h3>
                <p className="text-sm text-slate-500 mb-8">
                  {questions[currentStep].subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option) => {
                    const isSelected = answers[currentStep] === option.value;
                    const colors = colorClasses[option.color];
                    const Icon = option.icon;
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(currentStep, option.value)}
                        className={`text-left p-5 rounded-3xl border-2 transition-all duration-300 group relative overflow-hidden ${
                          isSelected 
                            ? `${colors.border} ${colors.bg} shadow-lg shadow-${option.color}-500/10 scale-[1.02]` 
                            : `border-slate-100 bg-white ${colors.hoverBorder} hover:shadow-md`
                        }`}
                      >
                         {/* Subtle Background Elements */}
                        <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full transition-all duration-500 blur-2xl -z-10 ${
                           isSelected ? colors.bg : 'opacity-0 group-hover:opacity-100 ' + colors.bg
                        }`} />

                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'} ${colors.iconBg}`}>
                             <Icon className={`w-5 h-5 ${colors.iconText}`} />
                          </div>
                          
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? `${colors.border} bg-${option.color}-500` : 'border-slate-200'
                          }`}>
                            {isSelected && <CheckCircle2 className={`w-4 h-4 ${option.color === 'slate' ? 'text-slate-700' : 'text-white'}`} fill="currentColor" stroke="none" />}
                          </div>
                        </div>

                        <div>
                          <span className={`block font-bold text-lg mb-1 leading-tight transition-colors duration-300 ${isSelected ? colors.text : 'text-slate-900 group-hover:' + colors.text}`}>
                            {option.label}
                          </span>
                          <p className={`text-xs font-medium leading-relaxed transition-colors duration-300 ${isSelected ? colors.text + ' opacity-80' : 'text-slate-500'}`}>
                            {option.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                    currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-emerald-600'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> Indietro
                </button>
                <div className="text-xs font-medium text-slate-400">
                  {currentStep + 1} / {questions.length}
                </div>
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className={`flex flex-col items-center justify-center text-center flex-1 py-8 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="relative">
                <div className={`absolute inset-0 ${theme.glow.replace('from-', 'bg-').replace('/10', '')} blur-xl opacity-30 rounded-full animate-pulse`} />
                
              </div>
              
              <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${theme.accent} mb-3`}>
                Analisi Completata
              </h3>
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Ecco il tuo risultato
              </h4>
              
              <div className={`w-full mt-6 bg-white rounded-[2.5rem] p-6 md:p-8 border ${theme.card} text-left relative overflow-hidden ring-1 group transition-all hover:-translate-y-1`}>
                {/* Decorative gradients */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${theme.glow} to-transparent rounded-full blur-3xl -z-10 transition-transform group-hover:scale-110`} />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 ${theme.icon} rounded-2xl shadow-sm border border-black/5 flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Target className="w-7 h-7" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black px-3 py-1.5 rounded-full ${theme.badge} uppercase tracking-widest mb-1 block w-fit`}>
                        {recommendedService?.group}
                      </span>
                      <span className={`${theme.accent} font-bold text-sm tracking-wide px-2 py-0.5 rounded-md w-fit`}>
                        Più Adatto a Te
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Investimento
                    </div>
                    <div className={`text-xl sm:text-2xl font-black tracking-tight ${theme.accent} w-fit sm:ml-auto`}>
                      {recommendedService?.price}
                    </div>
                    {recommendedService?.duration && (
                      <div className="text-slate-400 text-sm font-semibold flex items-center justify-start sm:justify-end gap-1.5 mt-1">
                        <Clock className="w-4 h-4" /> {getRecommendedService()?.duration}
                      </div>
                    )}
                  </div>
                </div>
                
                <h5 className={`text-2xl sm:text-4xl font-black mb-3 tracking-tight transition-colors relative z-10 ${theme.accent}`}>
                  {recommendedService?.name}
                </h5>
                <p className="text-slate-600 text-[15px] mb-6 leading-relaxed font-medium relative z-10">
                  {recommendedService?.description}
                </p>

                {recommendedService?.features && (
                  <ul className="mb-8 space-y-3 relative z-10">
                    {recommendedService?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm font-medium text-slate-600">
                        <CheckCircle2 className={`w-5 h-5 ${theme.accent} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 w-full pt-6 relative z-10 border-t border-slate-100">
                  <a 
                    href={SOCIAL_LINKS.miodottore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-[1.5] ${theme.button} text-white font-black text-lg py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl group/btn`}
                  >
                    <img 
                      src={mioDottoreLogo} 
                      alt="MioDottore" 
                      className="w-auto h-7 object-contain brightness-0 invert opacity-90 group-hover/btn:opacity-100 transition-opacity" 
                    />
                    Prenota la tua visita
                  </a>
                  <a 
                    href={`tel:${DOCTOR_INFO.phone}`}
                    className={`flex-1 bg-white border-2 border-slate-100 ${theme.accent} font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 hover:${theme.card.split(' ')[0]} transition-all active:scale-[0.98] shadow-sm group/btn2`}
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 group-hover/btn2:rotate-12 transition-transform" />
                    Chiama per info
                  </a>
                </div>

                {/* Trust Signals Under CTAs */}
                <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-3 relative z-10 px-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[12px] font-bold text-slate-500 uppercase tracking-tight">
                      Nessun pagamento anticipato
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                      Detraibile come spesa medica
                    </span>
                  </div>
                </div>
              </div>

              <button 
                onClick={resetQuiz}
                className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Ripeti il test
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
