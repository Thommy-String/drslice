import React from 'react';
import { GraduationCap, Award, Heart, Lightbulb, Sparkles, Quote, BookOpen, Utensils, Brain } from 'lucide-react';
import aboutMeImg from '../assets/Paolo/aboutmeDottPaolo.jpg';

export function AboutMe() {
  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden relative" id="chi-sono">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Visual Side: Minimal Image (now even smaller) */}
          <div className="lg:w-1/5 md:w-1/3 w-1/2 mx-auto lg:mx-0">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={aboutMeImg} 
                  alt="Dott. Paolo Panarini" 
                  className="w-full aspect-[4/5] object-cover scale-105"
                />
              </div>
              {/* Minimal Accent */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-xl -z-10" />
            </div>
          </div>

          {/* Content Side: Minimalist Narrative (takes up more space) */}
          <div className="lg:w-4/5">
            <div className="mb-12">
              <div className="h-0.5 w-12 bg-emerald-500 mb-6" />
              <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                Dott. <span className="font-semibold italic">Paolo Panarini</span>
              </h2>
            </div>

            {/* Academic Section - Refined */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80">Laurea Magistrale</span>
                </div>
                <h4 className="text-white text-lg font-bold leading-tight">Scienza della Nutrizione Umana</h4>
                <p className="text-slate-500 text-sm italic">Università di Roma Tor Vergata</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80">Laurea Triennale</span>
                </div>
                <h4 className="text-white text-lg font-bold leading-tight">Dietistica</h4>
                <p className="text-slate-500 text-sm italic">Tesi d'eccellenza in ambito clinico</p>
              </div>
            </div>

            {/* Narrative Timeline Style - Reduced weight */}
            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
              
              {/* Point 1 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 leading-relaxed text-base">
                    Formazione clinica tra <span className="text-white">Toscana e Roma</span>, consolidata con un approccio basato sull'evidenza scientifica e l'aggiornamento costante.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-500/50 group-hover:text-blue-400 transition-colors">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 leading-relaxed text-base">
                    La nutrizione come <span className="text-white italic">empatia scientifica</span>: un ascolto attivo che trasforma i parametri clinici in cambiamenti reali.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-amber-500/50 group-hover:text-amber-400 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 leading-relaxed text-base">
                    <span className="text-white font-medium">Metodo Slice:</span> flessibilità e rigore clinico per adattare la scienza ai ritmi della vita quotidiana.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
