const fs = require('fs');

const data = fs.readFileSync('/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx', 'utf8');

const regex = /\/\*\ \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\n   DietSpotlightCard — Compact card\n   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\ \*\/\nfunction DietSpotlightCard\(\{ diet, onOpen \}\) \{[\s\S]*?\}\n\n\/\* \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\n   MAIN COMPONENT/g;

const replaceWith = `/* ═══════════════════════════════════
   DietSpotlightCard — Compact card
   ═══════════════════════════════════ */
function DietSpotlightCard({ diet, onOpen }) {
  const c = dietSpotlightColors[diet.color];
  const Icon = diet.icon;

  return (
    <div
      className={\`group relative flex flex-col bg-white border rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-[300px] \${c.border}\`}
      onClick={() => onOpen(diet)}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={\`p-4 rounded-2xl \${c.iconBg}\`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="flex h-3 w-3 relative">
            <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${c.dot}\`}></span>
            <span className={\`relative inline-flex rounded-full h-3 w-3 \${c.dot}\`}></span>
          </span>
        </div>
        <div className="flex items-center">
          <span className={\`text-[11px] font-bold px-3 py-1.5 rounded-full \${c.badge} uppercase tracking-widest\`}>
            {diet.badge}
          </span>
        </div>
      </div>

      <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-tight">{diet.name}</h4>
      <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 flex-grow">{diet.tagline}</p>

      <div className="mt-auto flex flex-col gap-6">
        <ul className="flex flex-col gap-3">
          {diet.benefits.slice(0, 3).map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
              <span className={\`w-1.5 h-1.5 mt-1.5 rounded-full \${c.dot} inline-block flex-shrink-0\`} />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
            Clicca per esplorare
          </span>
          <button
            className={\`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all shadow-md group-hover:shadow-lg \${c.btn}\`}
            onClick={(e) => { e.stopPropagation(); onOpen(diet); }}
          >
            Scopri di più
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   MAIN COMPONENT`;

const updatedData = data.replace(regex, replaceWith);

fs.writeFileSync('/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx', updatedData, 'utf8');

