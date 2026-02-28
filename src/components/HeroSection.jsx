// src/components/HeroSection.jsx
import React from 'react';
import { Button } from './Button';
import paoloImg from '../assets/Paolo/drPaoloPanarini.jpg';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

export function HeroSection() {
  return (
    <div className="bg-white">
      {/* Trust Bar (Top) */}
      <div className="bg-green-600 text-white text-sm py-2 px-4 text-center font-medium">
        <p>
          Oltre <span className="font-bold">1000+</span> pazienti soddisfatti in tutta Italia
        </p>
      </div>

      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* Image Right / Bottom -> Now Top / First in flow */}
            <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-md lg:pl-10">
              {/* Background abstract elements for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100/40 to-emerald-50/40 rounded-full blur-3xl -z-10"></div>
              
              {/* Simple tilted textual label */}
              <div className="absolute -top-4 -left-4 md:-top-4 md:-left-8 lg:-top-6 lg:-left-12 z-40 transform -rotate-[10deg]">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 rounded shadow-sm border border-slate-50/50 flex flex-col">
                  <span className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-slate-800 underline decoration-green-500 decoration-[2px] underline-offset-4" style={{ fontFamily: 'var(--font-handwriting)' }}>
                    Dott. Paolo Panarini
                  </span>
                  <span className="text-[10px] md:text-xs lg:text-sm text-slate-500 mt-0.5 uppercase tracking-widest font-medium">
                    Nutrizionista e Dietista
                  </span>
                </div>
              </div>

              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-green-900/10 bg-gradient-to-b from-green-50 to-white pt-6 px-6 pb-0 aspect-square lg:aspect-[4/5] border border-white top-0 lg:-top-6">
                
                {/* Visual Accent/Blob inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-300/30 to-transparent rounded-bl-full"></div>
                
                {/* Main Hero Image */}
                <img 
                  src={paoloImg} 
                  alt="Dott. Paolo Panarini" 
                  className="relative w-full h-full object-cover object-top rounded-t-[1.5rem] z-10 bottom-0 filter contrast-[1.05]"
                  style={{ objectPosition: 'center 15%' }}
                />
                
                {/* Design element - overlapping graphic */}
                <div className="absolute top-10 -left-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl z-20"></div>
              </div>
            </div>

            {/* Content Left / Top -> Now Bottom / Second in flow */}
            <div className="order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left relative z-20">
              <div className="inline-flex flex-col items-center lg:items-start mb-6">
                <div className="flex flex-row items-center gap-3 mb-1">
                  <img src={mioDottoreLogo} alt="MioDottore Logo" className="h-14 sm:h-16 lg:h-20 object-contain" />
                  <div className="flex items-center text-yellow-300 text-lg sm:text-xl">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    Oltre <span className="text-slate-900 font-extrabold">88+</span> recensioni verificate
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                L’ultimo nutrizionista della tua{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">vita</span>
              </h1>
              
              <p className="mt-6 text-xl md:text-2xl font-medium text-slate-700 max-w-xl mx-auto lg:mx-0 leading-snug">
                Impara a mangiare tutto e non aver mai più bisogno di un piano alimentare.
              </p>
              
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto lg:mx-0">
                Senza restrizioni estreme, senza rinunce inutili. Trasforma le tue abitudini in modo sostenibile e ritrova il tuo peso forma per sempre.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli?filter%5Btype%5D=positive#profile-reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg shadow-lg shadow-green-600/30 flex items-center justify-center gap-2"
                >
                  {/* Calendar / Schedule SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  </svg>
                  Prenota una visita
                </Button>
                <Button 
                  href="https://wa.me/390000000000" // Sostituisci in futuro con il tuo numero di telefono
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg backdrop-blur-sm bg-white/50 flex items-center justify-center gap-2"
                >
                  {/* Whatsapp SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Invia messaggio
                </Button>
              </div>

              {/* Social Proof Below CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {/* Placeholder Avatar Images */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 object-cover" 
                      src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} 
                      alt={`Paziente ${i}`} 
                    />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-600 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start text-yellow-500 mb-1">
                    {'★'.repeat(5)}
                  </div>
                  <p>Valutato 5/5 da oltre <span className="text-gray-900 font-bold">500+</span> recensioni</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
