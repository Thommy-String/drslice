import React from 'react';

const steps = [
  {
    letter: 'S',
    title: 'Sostenibilità',
    description: 'Un piano che non puoi seguire a lungo non serve a nulla. Creiamo abitudini che si adattano alla tua vita, non il contrario.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    letter: 'L',
    title: 'Libertà',
    description: 'Nessun alimento è proibito. Impariamo a gestire la pizza, le cene fuori e i dolci senza sensi di colpa.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    letter: 'I',
    title: 'Individualità',
    description: 'Non esistono diete copia-incolla. Ogni grammo e ogni scelta sono calibrati sul tuo metabolismo e i tuoi gusti.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    letter: 'C',
    title: 'Consapevolezza',
    description: 'Ti insegno a capire cosa mangi e perché. Diventerai autonomo nella gestione della tua alimentazione per sempre.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    letter: 'E',
    title: 'Equilibrio',
    description: 'La salute è armonia tra mente e corpo. Un approccio sereno al cibo è la chiave della tua trasformazione.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 11h11l3-11H3z" />
      </svg>
    )
  }
];

export function Methodology() {
  return (
    <section id="metodo" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">
            Il Mio Approccio
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Perché non è la solita <span className="text-emerald-600">triste dieta</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Dimentica le restrizioni estreme e il calcolo ossessivo delle calorie. 
            Il <span className="font-bold text-slate-800">Metodo SLICE</span> è stato progettato per darti risultati reali 
            senza sacrificare il piacere di stare a tavola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.letter} 
              className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black text-slate-900">{step.letter}</span>
              </div>
              
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:rotate-6 transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-600">{step.letter}</span> - {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-emerald-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                Vuoi scoprire come il Metodo SLICE può cambiare le tue abitudini?
              </h4>
              <p className="text-slate-600">
                Prenota un colloquio conoscitivo o una prima visita per iniziare il tuo percorso personalizzato.
              </p>
            </div>
            <a 
              href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli" 
              target="_blank"
              className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 whitespace-nowrap"
            >
              Inizia il tuo cambiamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
