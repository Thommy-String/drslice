import React from 'react';
import paoloImg from '../assets/Paolo/drPaoloPanarini.jpg';

export function AboutMe() {
  return (
    <section id="chi-sono" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/4 h-1/2 bg-emerald-50 rounded-br-full -z-10 blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Container */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
              <img 
                src={paoloImg} 
                alt="Paolo Panarini" 
                className="w-full aspect-[4/5] object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 z-20 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-slate-900">1k+</span>
              </div>
              <p className="text-sm font-medium text-slate-500 leading-tight">
                Pazienti aiutati a raggiungere i propri obiettivi
              </p>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-emerald-200/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h2 className="text-base font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">
              La Mia Storia
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Oltre il camice: la mia <span className="text-emerald-600">missione</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Sono <span className="font-bold text-slate-900">Paolo Panarini</span>, Dietista e Nutrizionista con una visione chiara: 
                rendere la sana alimentazione un piacere, non un dovere.
              </p>
              <p>
                Spesso vediamo la dieta come un periodo di privazione, una guerra contro il nostro corpo. 
                Ho fondato il <span className="font-semibold text-emerald-600">Metodo SLICE</span> proprio per abbattere questo muro. 
                Il mio obiettivo è darti gli strumenti per capire come gestire il cibo in ogni situazione: 
                dalla cena con gli amici al pasto veloce in ufficio.
              </p>
              <p>
                La mia formazione clinica mi permette di affrontare ogni caso con il massimo rigore scientifico, 
                ma è l'ascolto dei miei pazienti che ha definito il mio approccio umano e flessibile.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-10">
              <div>
                <p className="text-slate-900 font-bold mb-1">Qualifica</p>
                <p className="text-sm text-slate-500">Dietista & Nutrizionista</p>
              </div>
              <div>
                <p className="text-slate-900 font-bold mb-1">Specialità</p>
                <p className="text-sm text-slate-500">Educazione Alimentare & Lifestyle</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-emerald-500/20"></div>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                  +150
                </div>
              </div>
              <p className="text-sm text-slate-500 italic">
                Unisciti alla community di pazienti soddisfatti.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
