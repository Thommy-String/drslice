// src/components/HeroSection.jsx
import React from 'react';
import { Button } from './Button';
import { Navbar } from './Navbar';
import { TrustBanner } from './TrustBanner';
import { ComparisonTable } from './ComparisonTable';
import { ReviewsCarousel } from './ReviewsCarousel';
import paoloImg from '../assets/Paolo/drPaoloPanarini.jpg';
import mioDottoreLogo from '../assets/loghi/mio-dottore.png';

export function HeroSection() {
  return (
    <div className="bg-[#FAFAFA] relative isolate">
      <Navbar />
      
      {/* Dynamic Modern Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle Mesh Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]" />
        
        {/* Modern Grid Pattern */}
        <svg className="absolute inset-0 h-full w-full stroke-slate-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
        </svg>

        {/* Decorative Floating Shapes */}
        <div className="absolute top-1/4 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-emerald-200 to-transparent opacity-20 hidden lg:block" />
        <div className="absolute top-1/2 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-20 hidden lg:block" />
      </div>

      {/* Trust Bar (Top) */}
      <div className="mt-16 md:mt-20 relative z-10">
        <TrustBanner />
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

              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-900/10 bg-white pt-6 px-6 pb-0 aspect-square lg:aspect-[4/5] border border-white/80 backdrop-blur-sm top-0 lg:-top-6">
                
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
              </div>

              {/* Review Summary & Trust Signals - SPOSTATO SOTTO L'IMMAGINE */}
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
            </div>

            {/* Content Left / Top -> Now Bottom / Second in flow */}
            <div className="order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left relative z-20 overflow-visible w-full">
              
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                L’ultimo nutrizionista della tua{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">vita</span>
              </h1>

              <p className="mt-6 text-md md:text-2xl font-medium text-slate-400 max-w-xl mx-auto lg:mx-0 leading-snug">
                Il segreto per un corpo sano non è togliere cibi, ma imparare a bilanciarli tutti con il Metodo SLICE.
              </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                
              </div>

              <div className="flex flex-col items-center lg:items-start mt-8 mb-6 w-full -ml-4 sm:-ml-8 lg:-ml-12 pl-4 sm:pl-8 lg:pl-12">

                {/* Reviews Carousel - MARGINE AZZERATO */}
                <div className="w-[110vw] sm:w-[500px] lg:w-[600px] xl:w-[700px] relative left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 mt-0">
                  <ReviewsCarousel />
                </div>

              </div>

              <ComparisonTable />

              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
