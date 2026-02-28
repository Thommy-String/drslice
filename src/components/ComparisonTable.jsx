import React from 'react';

export function ComparisonTable() {
  const comparativa = [
    { old: 'Schemi rigidi e pesatura al grammo', new: 'Flessibilità e gestione "nella vita vera"' },
    { old: 'Cibi "tristi" e divieti sociali', new: 'Libertà alimentare senza rinunce drastiche' },
    { old: 'Risultati temporanei (effetto yo-yo)', new: 'Educazione definitiva per non tornare indietro' },
    { old: 'Lotta costante contro la fame', new: 'Equilibrio ormonale e sazietà reale' },
  ];

  return (
    <div className="mt-8 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm max-w-xl mx-auto lg:mx-0">
      <div className="grid grid-cols-2 text-sm sm:text-base font-semibold border-b border-slate-200">
        <div className="py-3 px-4 sm:px-5 bg-rose-50/50 text-slate-500 flex items-center gap-2">
          La Dieta Comune
        </div>
        <div className="py-3 px-4 sm:px-5 bg-green-50 text-green-800 flex items-center gap-2">
          Il Metodo SLICE
        </div>
      </div>
      <div className="divide-y divide-slate-100 text-xs sm:text-sm">
        {comparativa.map((item, idx) => (
          <div key={idx} className="grid grid-cols-2 group hover:bg-slate-50 transition-colors">
            <div className="py-3 px-4 sm:px-5 text-slate-500 flex items-start gap-2 pr-2">
              <svg className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="leading-snug">{item.old}</span>
            </div>
            <div className="py-3 px-4 sm:px-5 text-slate-800 flex items-start gap-2 font-medium bg-green-50/30 pl-4 border-l border-slate-100">
              <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-snug">{item.new}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
