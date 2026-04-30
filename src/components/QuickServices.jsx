import React from 'react'
import { Apple, Laptop, Trophy, HeartPulse, Activity, ArrowRight } from 'lucide-react'

const quickServices = [
  {
    id: 'base',
    icon: Apple,
    title: 'Percorso Base',
    desc: 'Dimagrimento e rieducazione alimentare.',
    theme: 'text-blue-600 bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-600 text-white shadow-blue-600/30'
  },
  {
    id: 'online',
    icon: Laptop,
    title: 'Smart Online',
    desc: 'Il tuo piano a distanza, con la massima flessibilità.',
    theme: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-600 text-white shadow-indigo-600/30'
  },
  {
    id: 'sport',
    icon: Trophy,
    title: 'Sport e Performance',
    desc: 'Ottimizzazione per superare i tuoi limiti.',
    theme: 'text-orange-600 bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-600 text-white shadow-orange-600/30'
  },
  {
    id: 'clinical',
    icon: HeartPulse,
    title: 'Diete Cliniche',
    desc: 'Supporto nutrizionale mirato per patologie.',
    theme: 'text-rose-600 bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-600 text-white shadow-rose-600/30'
  },
  {
    id: 'bia',
    icon: Activity,
    title: 'Analisi BIA',
    desc: 'Test avanzato della composizione corporea.',
    theme: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    iconBg: 'bg-cyan-600 text-white shadow-cyan-600/30'
  }
]

export function QuickServices () {
  return (
    <div className='w-full py-10 bg-white relative z-20 border-b border-slate-100 overflow-hidden'>

      {/* Intestazione */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-end justify-between'>
        <div>
          <h2 className='text-xl sm:text-2xl font-black text-slate-900 tracking-tight'>
            Come posso aiutarti?
          </h2>
          <p className='text-sm font-medium text-slate-500 mt-1'>
            Scegli il percorso più adatto alle tue esigenze.
          </p>
        </div>
        <div className='hidden sm:flex text-[10px] font-bold uppercase tracking-widest text-slate-400 gap-1 items-center'>
          <span>Scorri per scoprire</span>
          <ArrowRight className='w-3 h-3' />
        </div>
      </div>

      {/* Slider Orizzontale */}
      <div className='w-full overflow-hidden'>
        <div
          className='flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 pb-8 pt-2'
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {/* Spazio invisibile iniziale per allineamento mobile elegante */}
          <div className='w-0 sm:hidden flex-shrink-0' />

          {quickServices.map((service) => {
            const Icon = service.icon
            return (
              <a
                href='#servizi'
                key={service.id}
                className='group relative flex flex-col justify-between w-[240px] sm:w-[280px] flex-shrink-0 bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 snap-start shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 block'
              >
                {/* Header Card: Icona + Freccia */}
                <div className='flex justify-between items-start mb-6'>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.iconBg}`}>
                    <Icon className='w-6 h-6' strokeWidth={2.5} />
                  </div>
                  <div className='w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors'>
                    <ArrowRight className='w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:-rotate-45 transition-all duration-300' strokeWidth={2.5} />
                  </div>
                </div>

                {/* Contenuto Testuale */}
                <div>
                  <h3 className='text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-slate-500 font-medium leading-snug line-clamp-2'>
                    {service.desc}
                  </p>
                </div>
              </a>
            )
          })}

          {/* Spazio invisibile finale per permettere lo scroll completo */}
          <div className='w-4 sm:w-8 flex-shrink-0' />
        </div>
      </div>
    </div>
  )
}
