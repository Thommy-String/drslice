import React, { useState, useEffect } from 'react';
import {
  Home, Wifi, Car, Clock, CheckCircle2,
  Sparkles, Dumbbell, Apple, Stethoscope, FlameKindling,
  ScanLine, MessageCircle, ArrowRight, X, ChevronRight,
  Flame, Salad, HeartPulse, Wind
} from 'lucide-react';
import { SERVICES, SOCIAL_LINKS, DOCTOR_INFO } from '../constants';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

/* ─── MODE DEFINITIONS ─── */
const MODES = [
  {
    key: "In Studio",
    label: "In Studio",
    icon: Home,
    subtitle: "Visita dal vivo presso lo studio",
    color: "emerald",
  },
  {
    key: "Online",
    label: "Online",
    icon: Wifi,
    subtitle: "Videochiamata da dove vuoi",
    color: "indigo",
  },
  {
    key: "A Domicilio",
    label: "A Domicilio",
    icon: Car,
    subtitle: "Comodamente a casa tua",
    color: "fuchsia",
  },
];

/* ─── SPECIALIZATION DEFINITIONS ─── */
const SPECS = [
  { key: "Performance", label: "Nutrizione Sportiva", icon: Dumbbell, color: "orange" },
  { key: "Clinical", label: "Diete Cliniche", icon: Stethoscope, color: "rose" },
  { key: "Keto", label: "Dieta Chetogenica", icon: FlameKindling, color: "purple" },
  { key: "Check-up", label: "Diagnostica", icon: ScanLine, color: "cyan" },
];

/* ─── COLOR MAPS ─── */
const modeColors = {
  emerald: {
    activeBg: "bg-emerald-600",
    activeText: "text-white",
    activeShadow: "shadow-emerald-600/25",
    ring: "ring-emerald-500",
    lightBg: "bg-emerald-50",
    text: "text-emerald-700",
    accent: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    expandBg: "bg-emerald-50/60",
    iconBg: "bg-emerald-100 text-emerald-600",
    btn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20",
    dot: "bg-emerald-500",
    priceBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  indigo: {
    activeBg: "bg-indigo-600",
    activeText: "text-white",
    activeShadow: "shadow-indigo-600/25",
    ring: "ring-indigo-500",
    lightBg: "bg-indigo-50",
    text: "text-indigo-700",
    accent: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
    expandBg: "bg-indigo-50/60",
    iconBg: "bg-indigo-100 text-indigo-600",
    btn: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20",
    dot: "bg-indigo-500",
    priceBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  fuchsia: {
    activeBg: "bg-fuchsia-600",
    activeText: "text-white",
    activeShadow: "shadow-fuchsia-600/25",
    ring: "ring-fuchsia-500",
    lightBg: "bg-fuchsia-50",
    text: "text-fuchsia-700",
    accent: "text-fuchsia-600",
    badge: "bg-fuchsia-100 text-fuchsia-700",
    expandBg: "bg-fuchsia-50/60",
    iconBg: "bg-fuchsia-100 text-fuchsia-600",
    btn: "bg-fuchsia-600 hover:bg-fuchsia-700 shadow-fuchsia-600/20",
    dot: "bg-fuchsia-500",
    priceBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  },
};

const specColors = {
  orange: {
    cardBorder: "border-orange-200 hover:border-orange-400",
    cardShadow: "hover:shadow-orange-500/10",
    iconBg: "bg-orange-100 text-orange-600",
    accent: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
    btn: "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/20",
  },
  rose: {
    cardBorder: "border-rose-200 hover:border-rose-400",
    cardShadow: "hover:shadow-rose-500/10",
    iconBg: "bg-rose-100 text-rose-600",
    accent: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    btn: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20",
  },
  purple: {
    cardBorder: "border-purple-200 hover:border-purple-400",
    cardShadow: "hover:shadow-purple-500/10",
    iconBg: "bg-purple-100 text-purple-600",
    accent: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    btn: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20",
  },
  cyan: {
    cardBorder: "border-cyan-200 hover:border-cyan-400",
    cardShadow: "hover:shadow-cyan-500/10",
    iconBg: "bg-cyan-100 text-cyan-600",
    accent: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
    btn: "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/20",
  },
};

/* ═══════════════════════════════════
   ServiceCard — Always-Open Card
   ═══════════════════════════════════ */
function ServiceCard({ service, colorSet }) {
  const isFeatured = service.featured;

  return (
    <div className={`group relative flex flex-col p-7 sm:p-8 rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isFeatured
        ? 'border-emerald-300 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10'
        : 'border-slate-200 hover:border-slate-300'
    }`}>
      {/* "IL PIÙ SCELTO" badge */}
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-emerald-600/30 tracking-widest uppercase whitespace-nowrap">
            ⭐ Il più scelto
          </span>
        </div>
      )}

      {/* Header: icon + price */}
      <div className={`flex items-start justify-between ${isFeatured ? 'mt-2 mb-5' : 'mb-5'}`}>
        <div className={`p-3 rounded-2xl ${colorSet.iconBg} shadow-sm`}>
          {service.group === "Training"
            ? <Dumbbell className="w-5 h-5" />
            : <CheckCircle2 className="w-5 h-5" />}
        </div>
        <span className={`text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-xl border ${colorSet.priceBg}`}>
          {service.price || "Su Preventivo"}
        </span>
      </div>

      {/* Title + duration */}
      <h4 className="text-xl font-black text-slate-900 tracking-tight mb-1">{service.name}</h4>
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
        <Clock className="w-3.5 h-3.5" />
        <span className="font-medium">{service.duration}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>

      {/* Extended details (Cos'è, Come funziona, Benefici) */}
      {service.details && (
        <div className="mb-5 space-y-3">
          {service.details.cosè && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${colorSet.accent}`}>Cos'è</span>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{service.details.cosè}</p>
            </div>
          )}
          {service.details.comeFunziona && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${colorSet.accent}`}>Come funziona</span>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{service.details.comeFunziona}</p>
            </div>
          )}
          {service.details.benefici && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${colorSet.accent}`}>Benefici</span>
              <ul className="mt-1.5 space-y-1.5">
                {service.details.benefici.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colorSet.accent}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Note */}
      {service.note && (
        <div className="mb-5 px-3 py-2.5 rounded-lg bg-amber-50 border border-amber-200/60 text-xs text-amber-800 font-medium leading-relaxed">
          ℹ️ {service.note}
        </div>
      )}

      {/* Target */}
      <div className={`mb-5 p-3.5 rounded-xl text-xs leading-relaxed ${colorSet.expandBg}`}>
        <span className={`font-bold uppercase tracking-wider text-[10px] ${colorSet.accent}`}>A chi si rivolge</span>
        <p className="mt-1 text-slate-600">{service.target}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-grow">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorSet.accent}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div>
        <a
          href={`https://wa.me/${DOCTOR_INFO.phone.replace("+", "")}?text=${encodeURIComponent("vorrei maggiori informazioni su " + service.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-3 transition-all shadow-lg ${colorSet.btn}`}
        >
          <MessageCircle className="w-5 h-5" />
          INVIA MESSAGGIO AL DOTTORE
          
        </a>
        <p className="text-center text-[12px] text-slate-400 mt-2 tracking-wide">Nessun obbligo di acquisto</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   SpecCard — Specialization Card
   ═══════════════════════════════════ */
function SpecCard({ service, spec }) {
  const c = specColors[spec.color];
  const Icon = spec.icon;

  return (
    <div className={`group relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.cardBorder} ${c.cardShadow}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${c.iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${c.badge} uppercase tracking-wider`}>
          {spec.label}
        </span>
      </div>

      <h4 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h4>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>

      {/* Extended details (Cos'è, Come funziona, Benefici) */}
      {service.details && (
        <div className="mb-5 space-y-3">
          {service.details.cosè && (
            <div className={`p-3.5 rounded-xl bg-slate-50 border border-slate-100`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${c.accent}`}>Cos'è</span>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{service.details.cosè}</p>
            </div>
          )}
          {service.details.comeFunziona && (
            <div className={`p-3.5 rounded-xl bg-slate-50 border border-slate-100`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${c.accent}`}>Come funziona</span>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{service.details.comeFunziona}</p>
            </div>
          )}
          {service.details.benefici && (
            <div className={`p-3.5 rounded-xl bg-slate-50 border border-slate-100`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${c.accent}`}>Benefici</span>
              <ul className="mt-1.5 space-y-1.5">
                {service.details.benefici.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${c.accent}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{service.duration}</span>
        <span className="text-slate-300">·</span>
        <span className={`font-bold ${c.accent}`}>{service.price || "Su Preventivo"}</span>
      </div>

      <p className="text-xs text-slate-400 mb-4 leading-relaxed flex-grow">
        <span className={`font-bold ${c.accent}`}>Per: </span>{service.target}
      </p>

      <div>
        <a
          href={`https://wa.me/${DOCTOR_INFO.phone.replace("+", "")}?text=${encodeURIComponent("vorrei maggiori informazioni su " + service.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${c.btn}`}
        >
          <MessageCircle className="w-5 h-5" />
          INVIA MESSAGGIO AL DOTTORE 
        </a>
        <p className="text-center text-[12px] text-slate-400 mt-2 tracking-wide">Nessun obbligo di acquisto</p>
      </div>
    </div>
  );
}

/* ─── DIET SPOTLIGHT DATA ─── */
const DIET_SPOTLIGHTS = [
  {
    id: "keto",
    icon: Flame,
    color: "purple",
    badge: "Protocollo VLCKD",
    name: "Dieta Chetogenica",
    tagline: "Reset metabolico",
    intro: "Meno di 50g di carboidrati al giorno. Senza glucosio disponibile, il fegato produce corpi chetonici dai grassi — e il corpo smette di bruciare zuccheri e inizia a bruciare grasso. È una delle diete più studiate e clinicamente efficaci per il dimagrimento rapido.",
    sections: [
      {
        label: "Si parte dal cibo vero — quello che trovi al supermercato",
        body: "Il piano chetogenico inizia sempre impostando l'alimentazione con alimenti comuni: carne, pesce, uova, formaggi, verdure. Nessun prodotto sostitutivo, nessun costoso low carb confezionato. Questi prodotti non ti permettono di sostenere il piano nel tempo — e spesso non ne hai nemmeno bisogno.",
        sectionColor: "amber",
      },
      {
        label: "Prodotti low carb? Solo se migliorano davvero la tua vita",
        body: "C'è la possibilità di personalizzare il piano aggiungendo prodotti low carb in base alle esigenze individuali — ma sempre valutando insieme la qualità degli alimenti e il loro bilanciamento per mantenere l'approccio chetogenico. Non è un obbligo, è un'opzione che si decide insieme.",
        sectionColor: "purple",
      },
      {
        label: "Integratori su misura — non un pacchetto uguale per tutti",
        body: "Vengono utilizzati integratori in base alla fase del percorso chetogenico o per ottimizzare le energie nella giornata. Vengono sempre discussi insieme, in base alle reali esigenze della persona. Nessun protocollo standard preconfezionato.",
        sectionColor: "indigo",
      }
    ],
    benefits: [
      "Perdi grasso velocemente senza perdere muscolo",
      "La fame sparisce già dopo i primi giorni",
      "Mangi cibo vero — nessun prodotto costoso",
    ],
    target: "Chi ha una quantità significativa di peso da perdere e vuole farlo in modo rapido ma controllato. Indicata anche per chi ha insulino-resistenza, pre-diabete, o deve perdere peso prima di un intervento chirurgico. Non adatta a chi vuole semplicemente 'mangiare sano' senza una reale necessità clinica."
  },
  {
    id: "fodmap",
    icon: Salad,
    color: "green",
    badge: "Protocollo Low-FODMAP",
    name: "Colon Irritabile",
    tagline: "Torna a mangiare senza paura. Un protocollo clinico rigoroso.",
    intro: "Il colon irritabile (IBS) non ha una cura farmacologica definitiva. Ma esiste un protocollo dietetico validato internazionalmente — la dieta Low-FODMAP — che in studi clinici riduce i sintomi nell'80% dei pazienti. Funziona eliminando temporaneamente i carboidrati fermentabili che fermentano nell'intestino e causano gonfiore, dolore e irregolarità.",
    sections: [
      {
        label: "Fase 1 — Eliminazione: si tolgono i cibi che fermentano",
        body: "Il piano segue le linee guida internazionali con una prima fase di dieta low-FODMAP, a basso contenuto di oligosaccaridi. Si accompagna a un'integrazione mirata alla risoluzione della disbiosi intestinale, che spesso è alla base del colon irritabile. È la fase di 'washout': l'intestino si calma, i sintomi si azzerano.",
        sectionColor: "emerald",
      },
      {
        label: "Fase 2 — Reintroduzione: si testa la tolleranza, un alimento alla volta",
        body: "Quando la persona ha completato il ciclo di integrazione e non ha più sintomi intestinali, si reintroducono gli alimenti tolti uno alla volta. Ogni reazione viene registrata e valutata. Alla fine si sa esattamente quali alimenti causano davvero problemi — e quali invece si possono mangiare liberamente.",
        sectionColor: "teal",
      },
      {
        label: "Risultato: un piano da mantenere nel tempo, costruito su di te",
        body: "L'obiettivo finale è avere un piano alimentare personalizzato che include solo gli alimenti che veramente creano problemi. Niente restrizioni inutili, niente generalizzazioni. Una dieta che si regge nel tempo perché è costruita sulla tua tolleranza reale.",
        sectionColor: "green",
      }
    ],
    benefits: [
      "Il gonfiore si riduce già nelle prime 2 settimane",
      "Scopri esattamente quali cibi ti fanno stare male",
      "Torni a mangiare fuori senza ansia",
    ],
    target: "Chi soffre da mesi o anni di gonfiore addominale, dolori intestinali, alternanza di diarrea e stitichezza, o gas eccessivo senza una causa organica identificata. Spesso sono persone che hanno già provato di tutto senza risultati duraturi. Il protocollo funziona anche in caso di disbiosi intestinale diagnosticata o sospettata."
  },
  {
    id: "metabolic",
    icon: HeartPulse,
    color: "rose",
    badge: "Patologie Metaboliche",
    name: "Ipertensione, Colesterolo, Diabete",
    tagline: "La nutrizione come alleata dei tuoi farmaci. Con l'obiettivo di non usarli più.",
    intro: "Ipertensione, colesterolo alto e diabete di tipo 2 hanno tutti una cosa in comune: l'alimentazione è uno dei fattori più potenti per controllarli — spesso più di quanto il paziente si aspetti. Non si tratta di mangiare in bianco. Si tratta di capire quali alimenti lavorano contro di te e sostituirli con altri che lavorano per te.",
    sections: [
      {
        label: "Il piano indica chiaramente cosa peggiora la patologia — e cosa la migliora",
        body: "Il piano alimentare viene costruito con attenzione precisa agli alimenti che possono peggiorare la condizione (ipertensione, colesterolo alto, glicemia fuori controllo) e a quelli che invece possono migliorarla. L'obiettivo non è solo seguire una dieta, ma portarsi a casa un'educazione alimentare solida da mantenere nel tempo.",
        sectionColor: "rose",
      },
      {
        label: "Integrazione mirata — per tenere sotto controllo la condizione nel tempo",
        body: "Vengono selezionati integratori specifici che supportano il controllo della patologia nel lungo periodo. Non una lista standard, ma una scelta ragionata sulla base del quadro clinico individuale e dei farmaci già in uso.",
        sectionColor: "pink",
      },
      {
        label: "L'obiettivo finale: ridurre i farmaci ed evitare i problemi futuri",
        body: "Con il giusto approccio alimentare e una costanza nel tempo, l'obiettivo è ridurre gradualmente la dipendenza dai farmaci — e prevenire le complicazioni future. Non è una promessa immediata: è un traguardo reale, costruito passo dopo passo insieme.",
        sectionColor: "orange",
      }
    ],
    benefits: [
      "Valori migliorati già al prossimo esame del sangue",
      "Capisci cosa mangiare — senza dipendere dal medico",
      "Obiettivo: ridurre o eliminare i farmaci",
    ],
    target: "Persone con ipertensione, colesterolo alto (LDL elevato o trigliceridi fuori range), diabete di tipo 2 o sindrome metabolica. Anche chi ha ricevuto una diagnosi recente e vuole gestire la condizione prima di iniziare — o in parallelo — a una terapia farmacologica."
  },
  {
    id: "reflux",
    icon: Wind,
    color: "sky",
    badge: "Disturbi Gastrici",
    name: "Reflusso & Gastrite",
    tagline: "Smettila di dipendere dagli antiacidi. Impara a mangiare in modo che prevenga il problema.",
    intro: "Il reflusso gastroesofageo e la gastrite non sono solo una questione di 'cosa mangi'. Sono il risultato di come mangi, quanto mangi in una volta, a che ora, e di alcuni comportamenti quotidiani che aumentano la pressione sullo sfintere esofageo. Gli antiacidi tamponano il sintomo. La dieta risolve il meccanismo.",
    sections: [
      {
        label: "Una lista chiara: cosa peggiora l'acidità e cosa la migliora",
        body: "Il piano include una lista specifica di alimenti che migliorano l'iperacidità gastrica e una lista di quelli che la peggiorano. Non consigli generici da internet: indicazioni precise, costruite sulla tua storia clinica e le tue abitudini quotidiane.",
        sectionColor: "sky",
      },
      {
        label: "Piccoli trucchi comportamentali — anche quando mangi fuori",
        body: "Non è solo questione di cosa metti nel piatto. Il piano include attenzione ai comportamenti quotidiani: come gestire i pasti fuori casa, i ritmi della digestione, le abitudini serali. Piccole modifiche che, applicate con costanza, riducono i sintomi in modo significativo.",
        sectionColor: "cyan",
      },
      {
        label: "L'obiettivo: eliminare la dipendenza dai farmaci antiacidi",
        body: "Gli antiacidi tamponano il problema ma non lo risolvono. L'obiettivo del percorso è creare le condizioni alimentari e comportamentali per cui non ne hai più bisogno — o ne hai bisogno molto meno. Sempre in accordo con il tuo medico.",
        sectionColor: "blue",
      }
    ],
    benefits: [
      "Meno bruciore già nelle prime settimane",
      "Mangi fuori casa senza rimpianti la sera",
      "Smetti di dipendere dagli antiacidi",
    ],
    target: "Chi soffre di reflusso gastroesofageo, gastrite, ernia iatale o bruciore ricorrente dopo i pasti. Spesso sono persone che prendono antiacidi (IPP o gastroprotettori) da mesi o anni, e vogliono capire se è possibile ridurli o eliminarli con un approccio alimentare mirato."
  }
];

const dietSpotlightColors = {
  purple: {
    iconBg: "bg-purple-100 text-purple-600",
    accent: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
    border: "border-purple-100 hover:border-purple-300",
    btn: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/20",
    pill: "bg-purple-50 border-purple-100",
    dot: "bg-purple-500",
    labelColor: "text-purple-600",
    drawerHeader: "bg-gradient-to-br from-purple-600 to-indigo-700",
    checkColor: "text-purple-500",
  },
  green: {
    iconBg: "bg-emerald-100 text-emerald-600",
    accent: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-100 hover:border-emerald-300",
    btn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20",
    pill: "bg-emerald-50 border-emerald-100",
    dot: "bg-emerald-500",
    labelColor: "text-emerald-600",
    drawerHeader: "bg-gradient-to-br from-emerald-600 to-teal-700",
    checkColor: "text-emerald-500",
  },
  rose: {
    iconBg: "bg-rose-100 text-rose-600",
    accent: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    border: "border-rose-100 hover:border-rose-300",
    btn: "bg-rose-600 hover:bg-rose-700 shadow-rose-600/20",
    pill: "bg-rose-50 border-rose-100",
    dot: "bg-rose-500",
    labelColor: "text-rose-600",
    drawerHeader: "bg-gradient-to-br from-rose-600 to-pink-700",
    checkColor: "text-rose-500",
  },
  sky: {
    iconBg: "bg-sky-100 text-sky-600",
    accent: "text-sky-600",
    badge: "bg-sky-100 text-sky-700",
    border: "border-sky-100 hover:border-sky-300",
    btn: "bg-sky-600 hover:bg-sky-700 shadow-sky-600/20",
    pill: "bg-sky-50 border-sky-100",
    dot: "bg-sky-500",
    labelColor: "text-sky-600",
    drawerHeader: "bg-gradient-to-br from-sky-600 to-blue-700",
    checkColor: "text-sky-500",
  },
};

const sectionColorMap = {
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   label: "text-amber-700",   num: "bg-amber-100 text-amber-700" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  label: "text-purple-700",  num: "bg-purple-100 text-purple-700" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200",  label: "text-indigo-700",  num: "bg-indigo-100 text-indigo-700" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", label: "text-emerald-700", num: "bg-emerald-100 text-emerald-700" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",    label: "text-teal-700",    num: "bg-teal-100 text-teal-700" },
  green:   { bg: "bg-green-50",   border: "border-green-200",   label: "text-green-700",   num: "bg-green-100 text-green-700" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    label: "text-rose-700",    num: "bg-rose-100 text-rose-700" },
  pink:    { bg: "bg-pink-50",    border: "border-pink-200",    label: "text-pink-700",    num: "bg-pink-100 text-pink-700" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  label: "text-orange-700",  num: "bg-orange-100 text-orange-700" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",     label: "text-sky-700",     num: "bg-sky-100 text-sky-700" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",    label: "text-cyan-700",    num: "bg-cyan-100 text-cyan-700" },
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    label: "text-blue-700",    num: "bg-blue-100 text-blue-700" },
};

/* ═══════════════════════════════════
   DietDrawer — Bottom Sheet Modal
   ═══════════════════════════════════ */
function DietDrawer({ diet, onClose }) {
  const c = dietSpotlightColors[diet.color];
  const Icon = diet.icon;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />

      {/* Drawer */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
        style={{ height: '90vh', maxHeight: '90vh' }}
      >
        {/* ── Hero Header — solid color ── */}
        <div className={`relative ${c.drawerHeader} px-6 pt-4 pb-6 flex-shrink-0`}>
          {/* Drag handle */}
          <div className="flex justify-center mb-4">
            <div className="w-10 h-1 bg-white/30 rounded-full" />
          </div>

          {/* Icon + Badge + Close on same row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/20">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white/70">
                {diet.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
            {diet.name}
          </h2>

          {/* Tagline */}
          <p className="text-base text-white/80 font-medium leading-snug">{diet.tagline}</p>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain bg-slate-50">

          {/* Cos'è — dark card */}
          <div className="px-5 pt-5">
            <div className="bg-slate-900 text-white rounded-2xl px-5 py-5">
              <p className="text-[11px] font-black uppercase tracking-widest text-white/50 mb-2">Cos'è</p>
              <p className="text-base leading-relaxed font-medium">{diet.intro}</p>
            </div>
          </div>

          {/* A chi si rivolge */}
          <div className="px-5 pt-6">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                🎯
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                  A chi si rivolge
                </p>
                <p className="text-[15px] text-slate-700 leading-relaxed">{diet.target}</p>
              </div>
            </div>
          </div>

          {/* Come funziona — sezioni editoriali */}
          <div className="px-5 pt-10 pb-2">
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-8">Come funziona</p>
            <div className="space-y-12">
              {diet.sections.map((s, i) => (
                <div key={i}>
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-300 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-3">{s.label}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 pt-10 pb-10">
            <a
              href={`https://wa.me/${DOCTOR_INFO.phone.replace('+', '')}?text=${encodeURIComponent('vorrei maggiori informazioni su ' + diet.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-3 transition-all shadow-xl ${c.btn}`}
            >
              <MessageCircle className="w-5 h-5" />
              Invia messaggio al Dottore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   DietSpotlightCard — Compact card
   ═══════════════════════════════════ */
function DietSpotlightCard({ diet, onOpen }) {
  const c = dietSpotlightColors[diet.color];
  const Icon = diet.icon;

  return (
    <div
      className={`group relative flex flex-col bg-white border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer ${c.border}`}
      onClick={() => onOpen(diet)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-xl ${c.iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badge} uppercase tracking-wider`}>
          {diet.badge}
        </span>
      </div>

      <h4 className="text-lg font-black text-slate-900 mb-1.5 leading-tight">{diet.name}</h4>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{diet.tagline}</p>

      <div className="flex items-center gap-1.5">
        <ul className="flex flex-wrap gap-1.5 flex-grow">
          {diet.benefits.slice(0, 2).map((b, i) => (
            <li key={i} className={`flex items-center gap-1 text-xs text-slate-500 px-2.5 py-1 rounded-full border ${c.pill}`}>
              <span className={`w-1 h-1 rounded-full ${c.dot} inline-block`} />
              {b}
            </li>
          ))}
        </ul>
        <button
          className={`ml-auto flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-md ${c.btn}`}
          onClick={(e) => { e.stopPropagation(); onOpen(diet); }}
        >
          Apri
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════ */
export function Services() {
  const [activeMode, setActiveMode] = useState("In Studio");
  const [openDiet, setOpenDiet] = useState(null);

  const handleModeChange = (key) => {
    setActiveMode(key);
  };

  const modeServices = SERVICES.filter(s => s.category === activeMode);
  const specServices = SERVICES.filter(s => (s.category === "Diete" || s.category === "Diagnostica") && s.group !== "Keto");

  const currentMode = MODES.find(m => m.key === activeMode);
  const cMode = modeColors[currentMode.color];

  return (
    <section className="py-20 bg-slate-50/80 relative overflow-hidden" id="servizi">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full -z-10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full -z-10 blur-[100px] -translate-x-1/3" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ──────── Section Header ──────── */}
        <div className="text-center mb-12 relative">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[120px] font-black text-slate-100 select-none pointer-events-none leading-none -z-10">01</span>
          <p className="text-[11px] font-black uppercase tracking-widest text-emerald-600 mb-3">Servizi e Listino</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Incontra il Dottore
          </h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
            Scegli la modalità più comoda per te, poi esplora i servizi disponibili.
          </p>
        </div>

        {/* ──────── Mode Selectors (3 Cards) ──────── */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          {MODES.map((mode) => {
            const isActive = activeMode === mode.key;
            const c = modeColors[mode.color];
            const Icon = mode.icon;

            return (
              <button
                key={mode.key}
                onClick={() => handleModeChange(mode.key)}
                className={`relative flex flex-col items-center text-center px-3 py-5 sm:px-6 sm:py-7 rounded-2xl sm:rounded-3xl cursor-pointer border-2 ${
                  isActive
                    ? `${c.activeBg} ${c.activeText} border-transparent shadow-xl ${c.activeShadow}`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 ${
                  isActive ? 'bg-white/20' : 'bg-slate-100'
                }`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                </div>
                <span className="text-xs sm:text-sm font-bold">{mode.label}</span>
                <span className={`text-[10px] sm:text-xs mt-1 hidden sm:block ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                  {mode.subtitle}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-current shadow-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* ──────── Service Cards (always open) ──────── */}
        {/* ──────── Service Cards (always open) ──────── */}
        <div className="mb-20 relative min-h-[400px]">
          {MODES.map((mode) => (
            <div
              key={mode.key}
              className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-opacity ease-out duration-500 ${
                activeMode === mode.key 
                ? 'opacity-100 relative z-10 block visible' 
                : 'opacity-0 absolute inset-x-0 top-0 z-0 pointer-events-none invisible'
              }`}
            >
              {SERVICES.filter(s => s.category === mode.key).map((service) => (
                <ServiceCard
                  key={service.name}
                  service={service}
                  colorSet={modeColors[mode.color]}
                />
              ))}

              {SERVICES.filter(s => s.category === mode.key).length === 0 && (
                <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-400 text-sm">
                  Nessun servizio disponibile per questa modalità.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ──────── Percorsi Specializzati ──────── */}
      </div>{/* close max-w-5xl */}

      {/* Section break — Percorsi Specializzati */}
      <div className="border-t-4 border-emerald-500/20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12 relative">
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[120px] font-black text-emerald-50 select-none pointer-events-none leading-none -z-10">02</span>
            <p className="text-[11px] font-black uppercase tracking-widest text-emerald-600 mb-3">Percorsi Specializzati</p>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Diete Specifiche &amp; Diagnostica
            </h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              Percorsi mirati per obiettivi e patologie particolari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {specServices.map((service) => {
              const spec = SPECS.find(sp =>
                sp.key === service.group ||
                (service.category === "Diagnostica" && sp.key === "Check-up")
              );
              if (!spec) return null;
              return <SpecCard key={service.name} service={service} spec={spec} />;
            })}
          </div>
        </div>
      </div>

      {/* Section break — Percorsi Clinici Dettagliati */}
      <div className="border-t-4 border-indigo-400/20 bg-gradient-to-b from-indigo-50/40 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12 relative">
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[120px] font-black text-indigo-50 select-none pointer-events-none leading-none -z-10">03</span>
            <p className="text-[11px] font-black uppercase tracking-widest text-indigo-500 mb-3">Percorsi Clinici Dettagliati</p>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Approfondisci il tuo percorso
            </h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              Ogni protocollo spiegato nel dettaglio — come funziona, per chi è, cosa aspettarti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIET_SPOTLIGHTS.map((diet) => (
              <DietSpotlightCard key={diet.id} diet={diet} onOpen={setOpenDiet} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* ──────── Footer CTA ──────── */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Hai ancora dei dubbi?</h4>
              <p className="text-sm text-slate-500">Parla direttamente con il Dott. Paolo Panarini.</p>
            </div>
            <a
              href={`https://wa.me/${DOCTOR_INFO.phone.replace('+', '')}?text=${encodeURIComponent(DOCTOR_INFO.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-all shadow-lg shadow-green-600/20 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              SCRIVIMI SU WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* ──────── Diet Drawer ──────── */}
      {openDiet && <DietDrawer diet={openDiet} onClose={() => setOpenDiet(null)} />}
    </section>
  );
}
