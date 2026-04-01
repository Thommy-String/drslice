import React, { useState } from 'react';
import {
  Home, Wifi, Car, Clock, CheckCircle2,
  Sparkles, Dumbbell, Apple, Stethoscope, FlameKindling,
  ScanLine, MessageCircle, ArrowRight
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
          href={SOCIAL_LINKS.miodottore}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-3 transition-all shadow-lg ${colorSet.btn}`}
        >
          <img src={mioDottoreLogo} alt="MioDottore" className="h-6 w-auto object-contain brightness-0 invert" />
          MAGGIORI INFO
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <p className="text-center text-[10px] text-slate-400 mt-2 tracking-wide">Nessun obbligo di acquisto</p>
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
          href={SOCIAL_LINKS.miodottore}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${c.btn}`}
        >
          <img src={mioDottoreLogo} alt="MioDottore" className="h-6 w-auto object-contain brightness-0 invert" />
          MAGGIORI INFO <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <p className="text-center text-[10px] text-slate-400 mt-2 tracking-wide">Nessun obbligo di acquisto</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════ */
export function Services() {
  const [activeMode, setActiveMode] = useState("In Studio");

  const modeServices = SERVICES.filter(s => s.category === activeMode);
  const specServices = SERVICES.filter(s => s.category === "Diete" || s.category === "Diagnostica");

  const currentMode = MODES.find(m => m.key === activeMode);
  const cMode = modeColors[currentMode.color];

  return (
    <section className="py-20 bg-slate-50/80 relative overflow-hidden" id="servizi">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full -z-10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full -z-10 blur-[100px] -translate-x-1/3" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ──────── Section Header ──────── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-5 border border-emerald-100 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Servizi e Listino
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Incontra il Dottore
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
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
                onClick={() => setActiveMode(mode.key)}
                className={`relative flex flex-col items-center text-center px-3 py-5 sm:px-6 sm:py-7 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer border-2 ${
                  isActive
                    ? `${c.activeBg} ${c.activeText} border-transparent shadow-xl ${c.activeShadow}`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {modeServices.map((service) => (
            <ServiceCard
              key={service.name}
              service={service}
              colorSet={cMode}
            />
          ))}

          {modeServices.length === 0 && (
            <div className="col-span-2 text-center py-12 text-slate-400 text-sm">
              Nessun servizio disponibile per questa modalità.
            </div>
          )}
        </div>

        {/* ──────── Percorsi Specializzati ──────── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-600 text-[10px] font-black uppercase tracking-widest mb-5 border border-slate-200 shadow-sm">
              <Apple className="w-3 h-3 text-emerald-500" />
              Percorsi Specializzati
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Diete Specifiche &amp; Diagnostica
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
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
    </section>
  );
}
