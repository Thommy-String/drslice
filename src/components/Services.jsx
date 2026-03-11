import React from 'react';
import { Clock, Globe, Home, Activity, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { SERVICES, SOCIAL_LINKS, DOCTOR_INFO } from '../constants';

const categoryIcons = {
  "Online": <Globe className="w-5 h-5" />,
  "In Studio": <Home className="w-5 h-5" />,
  "Diagnostica": <Activity className="w-5 h-5" />,
  "Specialistica": <TrendingUp className="w-5 h-5" />
};

const GroupBadge = ({ group }) => {
  const colors = {
    "Percorso Base": "bg-blue-500/10 text-blue-700 border-blue-200",
    "Smart": "bg-indigo-500/10 text-indigo-700 border-indigo-200",
    "Performance": "bg-orange-500/10 text-orange-700 border-orange-200",
    "Clinical": "bg-rose-500/10 text-rose-700 border-rose-200",
    "Check-up": "bg-cyan-500/10 text-cyan-700 border-cyan-200",
    "Percorso Formativo": "bg-lime-500/10 text-lime-700 border-lime-200",
    "Domiciliare": "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-200"
  };
  
  return (
    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border mb-4 inline-block tracking-wider uppercase ${colors[group] || 'bg-slate-50 text-slate-500'}`}>
      {group}
    </span>
  );
};

export function Services() {
  const [activeCategory, setActiveCategory] = React.useState("In Studio");

  const categories = ["Tutti", "In Studio", "Online", "Specialistica", "Diagnostica"];

  const filteredServices = activeCategory === "Tutti" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getThemeColors = (group, isFeatured) => {
    if (isFeatured) return {
      card: "bg-white shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20",
      icon: "bg-emerald-50 text-emerald-600 ring-emerald-100/50",
      accent: "text-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30",
      glow: "from-emerald-500/10 to-emerald-500/5"
    };

    const themes = {
      "Percorso Base": {
        card: "bg-white border-blue-100 hover:border-blue-300 hover:shadow-[0_32px_64px_-16px_rgba(59,130,246,0.1)]",
        icon: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
        glow: "from-blue-500/5 to-transparent"
      },
      "Smart": {
        card: "bg-white border-indigo-100 hover:border-indigo-300 hover:shadow-[0_32px_64px_-16px_rgba(99,102,241,0.1)]",
        icon: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
        accent: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20",
        glow: "from-indigo-500/5 to-transparent"
      },
      "Performance": {
        card: "bg-white border-orange-100 hover:border-orange-300 hover:shadow-[0_32px_64px_-16px_rgba(249,115,22,0.1)]",
        icon: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
        accent: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700 shadow-orange-600/20",
        glow: "from-orange-500/5 to-transparent"
      },
      "Clinical": {
        card: "bg-white border-rose-100 hover:border-rose-300 hover:shadow-[0_32px_64px_-16px_rgba(244,63,94,0.1)]",
        icon: "bg-rose-50 text-rose-600 group-hover:bg-rose-100",
        accent: "text-rose-600",
        button: "bg-rose-600 hover:bg-rose-700 shadow-rose-600/20",
        glow: "from-rose-500/5 to-transparent"
      },
      "Check-up": {
        card: "bg-white border-cyan-100 hover:border-cyan-300 hover:shadow-[0_32px_64px_-16px_rgba(6,182,212,0.1)]",
        icon: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100",
        accent: "text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/20",
        glow: "from-cyan-500/5 to-transparent"
      },
      "Percorso Formativo": {
        card: "bg-white border-lime-100 hover:border-lime-300 hover:shadow-[0_32px_64px_-16px_rgba(132,204,22,0.1)]",
        icon: "bg-lime-50 text-lime-600 group-hover:bg-lime-100",
        accent: "text-lime-600",
        button: "bg-lime-600 hover:bg-lime-700 shadow-lime-600/20",
        glow: "from-lime-500/5 to-transparent"
      },
      "Domiciliare": {
        card: "bg-white border-fuchsia-100 hover:border-fuchsia-300 hover:shadow-[0_32px_64px_-16px_rgba(217,70,239,0.1)]",
        icon: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-100",
        accent: "text-fuchsia-600",
        button: "bg-fuchsia-600 hover:bg-fuchsia-700 shadow-fuchsia-600/20",
        glow: "from-fuchsia-500/5 to-transparent"
      }
    };
    return themes[group] || themes["Percorso Base"];
  };

  return (
    <section className="py-24 bg-slate-50/80 relative overflow-hidden" id="servizi">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full -z-10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full -z-10 blur-[100px] -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Percorsi e Listino
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
            Servizi su misura per te
          </h2>
          
          {/* Category Filter Chips - Compact Wrap */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-lg mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-[10px] sm:text-xs font-black flex items-center gap-2 tracking-widest uppercase cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md border border-emerald-600'
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {cat !== "Tutti" && categoryIcons[cat] && (
                    <span className={`${activeCategory === cat ? 'text-white' : 'text-emerald-500'}`}>
                      {React.cloneElement(categoryIcons[cat], { className: "w-4 h-4 sm:w-4.5 sm:h-4.5" })}
                    </span>
                  )}
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredServices.map((service) => {
            const theme = getThemeColors(service.group, service.featured);
            const serviceId = `service-${service.name.toLowerCase().replace(/\s+/g, '-')}`;
            
            return (
              <div 
                key={service.name}
                id={serviceId}
                className={`group relative flex flex-col p-8 sm:p-10 rounded-[3rem] transition-all duration-300 border hover:-translate-y-1 ${theme.card} ${
                  service.featured ? 'scale-100 lg:scale-105 z-10' : 'scale-100'
                }`}
              >
                {/* Visual Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} rounded-[3rem] -z-10`} />

                {/* Category & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${theme.icon} shadow-sm ring-1 ring-white/50`}>
                    {React.cloneElement(categoryIcons[service.category], { className: "w-6 h-6" })}
                  </div>
                  {service.featured && (
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg shadow-emerald-600/20 tracking-wider">IL PIÙ SCELTO</span>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-grow mb-8 text-left">
                  <GroupBadge group={service.group} />
                  <h3 className={`text-2xl font-black mb-3 leading-tight tracking-tight text-slate-900 group-hover:${theme.accent} transition-colors`}>
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-slate-500">
                    {service.description}
                  </p>

                  {/* Target Audience */}
                  <div className={`mb-6 p-4 rounded-2xl text-xs leading-relaxed ${service.featured ? 'bg-emerald-50/50 text-emerald-800' : 'bg-slate-50 text-slate-600'}`}>
                    <span className={`font-bold block mb-1 uppercase tracking-tight text-[10px] opacity-70 ${theme.accent}`}>A chi si rivolge</span>
                    {service.target}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-left">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme.accent}`} />
                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="flex items-end justify-between mb-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-lg ${theme.icon} bg-opacity-10`}>
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{service.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-black mb-1 ${theme.accent}`}>Investimento</span>
                      <span className="text-3xl font-black tracking-tight text-slate-900">{service.price || "Su Misura"}</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <a 
                  href={SOCIAL_LINKS.miodottore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn w-full py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] text-white shadow-xl ${theme.button}`}
                >
                  <span>{service.price === "Su Preventivo" ? "RICHIEDI INFO" : "PRENOTA ORA"}</span>
                  <CheckCircle2 className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer Support */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-slate-50/50 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Hai ancora dei dubbi?</h4>
              <p className="text-slate-500">Parla direttamente con il Dott. Paolo Panarini per capire il percorso più adatto a te.</p>
            </div>
            <a 
              href={`https://wa.me/${DOCTOR_INFO.phone.replace('+', '')}`}
              className="px-8 py-4 bg-white text-emerald-600 rounded-2xl font-black text-sm shadow-sm border border-emerald-100 hover:bg-emerald-50 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              CHAT WHATSAPP DIRETTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
