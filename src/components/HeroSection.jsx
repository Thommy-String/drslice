// src/components/HeroSection.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Navbar } from './Navbar';
import { TrustBanner } from './TrustBanner';
import { ComparisonTable } from './ComparisonTable';
import { ReviewsCarousel } from './ReviewsCarousel';
import { Services } from './Services';
import { ServiceQuiz } from './ServiceQuiz';
import { HeroServiceTags } from './HeroServiceTags';
import paoloImg from '../assets/Paolo/drPaoloPanarini.jpg';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

export function HeroSection() {
  return (
    <div className="bg-[#f0f7f4] relative isolate font-sans">
      <Navbar />
      
      {/* Dynamic Modern Background Elements - "Deep Medical" Theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glows principali */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-emerald-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-emerald-100/30 rounded-full blur-[140px]" />
        
        {/* Griglia Tecnica Complessa - Sostituisco il pattern semplice con uno più strutturato */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
          <defs>
            <pattern id="complex-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0V60" fill="none" stroke="#10b981" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="#10b981" />
            </pattern>
            <radialGradient id="grad-mesh" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad-mesh-2" cx="80%" cy="20%" r="40%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#complex-grid)" mask="url(#fade-mask)" />
          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#grad-mesh)" />
          </mask>
        </svg>
        
        {/* Linee orbitali soffuse per profondità */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-emerald-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-emerald-500/[0.03] rounded-full" />
        
        {/* Ray of light effect */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-emerald-50/20 to-transparent skew-x-[-20deg] blur-3xl opacity-50" />
      </div>

      {/* Trust Bar (Top) - Ridotto ulteriormente il margine superiore per avvicinarlo alla navbar */}
      <div className="mt-2 md:mt-2 relative z-10 overflow-visible">
        <TrustBanner />
      </div>

      <section className="relative overflow-visible pt-2 pb-12 lg:pt-8 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">

            {/* Desktop Only Content Left / Top -> Now explicitly hidden on mobile since it's moved below image on mobile */}
            <div className="hidden lg:block order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left relative z-20 overflow-visible w-full lg:pr-12">
              
              <div className="mb-8 lg:mb-12 mt-4 lg:mt-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  L&apos;ultimo nutrizionista <br className="hidden lg:block" />
                  <span className="text-emerald-600 relative inline-block">
                    della tua vita.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Ottieni risultati definitivi con il <span className="text-emerald-700 font-bold">Metodo SLICE</span>: 
                  un approccio scientifico senza rinunce drastiche.
                </p>
              </div>

              <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <Button
                    href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto text-lg shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300"
                    icon={
                      <img 
                        src={mioDottoreLogo} 
                        alt="" 
                        className="w-18 h-8 sm:w-14 sm:h-18 object-contain brightness-0 invert" 
                      />
                    }
                  >
                    Prenota la tua visita
                  </Button>
                    
                  {/* Trust/Risk Reversal Signal */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 px-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-tight">
                      Nessun pagamento anticipato
                    </span>
                  </div>
                </div>
              </div>

            </div>


            {/* Image Right / Bottom -> Now Top / First in flow */}
            <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] lg:pl-10 pb-2 lg:pb-0 pt-0 lg:pt-8 -mt-6 lg:-mt-0">
              
              {/* Background abstract elements for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100/40 to-emerald-50/40 rounded-full blur-3xl -z-10"></div>

              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-900/10 bg-white pt-6 px-6 pb-0 aspect-square lg:aspect-[4.2/5] border border-white/80 backdrop-blur-sm top-0 lg:top-4">
                
                {/* Visual Accent/Glass Overlay inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/20 to-transparent rounded-bl-full z-0"></div>

                {/* Main Hero Image */}
                <img
                  src={paoloImg}
                  alt="Dott. Paolo Panarini"
                  className="relative w-full h-full object-cover object-top rounded-t-[1.5rem] z-10 bottom-0 filter contrast-[1.05]"
                  style={{ objectPosition: 'center 15%' }}
                />

                {/* Design element - overlapping graphic */}
                <div className="absolute top-10 -left-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl z-20"></div>

                {/* Refined label - now slightly larger and at bottom-left of the image card */}
                <div className="absolute bottom-6 left-6 z-40 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 md:px-6 md:py-3.5 rounded-2xl shadow-xl border border-white/50 flex flex-col">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-handwriting)' }}>
                      Dott. Paolo Panarini
                    </span>
                    <span className="text-[10px] md:text-xs text-emerald-600 uppercase tracking-[-0.02em] mt-1">
                      Nutrizionista e Dietista
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-4 py-1">
                  <div className="flex items-center gap-3">
                    <img 
                      src={mioDottoreLogo} 
                      alt="MioDottore" 
                      className="h-9 sm:h-11 w-auto object-contain flex-shrink-0" 
                    />
                    <div className="w-[1px] h-4 bg-slate-200"></div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <div className="flex text-amber-400 text-[10px] sm:text-[12px]">
                        ★★★★★
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-widest whitespace-nowrap">150+ RECENSIONI</span>
                </div>
              </div>

              {/* Service tags moved right under the hero image */}
              <div className="block lg:hidden w-full max-w-sm mx-auto mt-6 text-center">
                 <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-3">
                   L&apos;ultimo nutrizionista <br />
                   <span className="text-emerald-600 relative inline-block">
                     della tua vita.
                     <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-200/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                       <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                     </svg>
                   </span>
                 </h1>
                 <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-xs mx-auto mb-5">
                   Ottieni risultati definitivi con il <span className="text-emerald-700 font-bold">Metodo SLICE</span>: 
                   un approccio scientifico senza rinunce drastiche.
                 </p>
                 <div className="flex flex-col gap-3 w-full mb-6">
                   <Button
                     href="https://www.miodottore.it/paolo-panarini/dietista-nutrizionista/tivoli"
                     target="_blank"
                     rel="noopener noreferrer"
                     variant="primary"
                     size="lg"
                     className="w-full text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300"
                     icon={
                       <img 
                         src={mioDottoreLogo} 
                         alt="" 
                         className="w-12 h-6 object-contain brightness-0 invert" 
                       />
                     }
                   >
                     Prenota la tua visita
                   </Button>
                   <div className="flex items-center justify-center gap-2 px-1">
                     <div className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-600">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12"></polyline>
                       </svg>
                     </div>
                     <span className="text-[10px] font-medium text-slate-500 tracking-tight">
                       Nessun pagamento anticipato
                     </span>
                   </div>
                 </div>
                 
                 <HeroServiceTags />
              </div>
            </div>

          </div>

          <div className="hidden lg:flex w-full justify-center max-w-3xl lg:mt-8 mx-auto">
             <HeroServiceTags />
          </div>

          {/* Reviews Carousel */}
          <div className="relative mt-12 px-0 flex justify-center w-[100vw] overflow-hidden ml-[calc(-50vw+50%)]">
            <div className="w-full inline-flex justify-center flex-col items-center">
              <ReviewsCarousel />
            </div>
          </div>

          {/* Quiz Section - Restored under Reviews */}
          <div className="mt-12 z-50 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
            <h3 className="text-xl lg:text-3xl font-black mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              Non sai da dove iniziare?
            </h3>
            <ServiceQuiz />
          </div>

          {/* Moved Services here, just under the Hero logic so it spans full width and acts as a clear divider */}
          <div className="mt-8 lg:mt-12 w-[100vw] ml-[calc(-50vw+50%)] relative z-10 transition-all duration-500">
            <Services />
          </div>

          {/* Underneath the grid, taking full width */}
          <div className="mt-8 sm:mt-12 w-full flex flex-col items-center gap-12 sm:gap-16">

            {/* Comparison Table */}
            <div className="w-[100vw] sm:w-full max-w-5xl px-0 sm:px-6 lg:px-8 z-20">
              <ComparisonTable />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
