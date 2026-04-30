import React from 'react'
import { Stethoscope, Monitor, HeartPulse, Activity, Activity as Pulse, FileText, Apple, Baby, Calendar, Dumbbell, Home } from 'lucide-react'

const serviceTags = [
  { label: 'Prima visita dietistica', icon: Stethoscope, color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100', id: 'prima-visita-nutrizionale' },
  { label: 'Consulenza online', icon: Monitor, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100', id: 'consulenza-online' },
  { label: 'Visita nutrizionale', icon: Apple, color: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-100', id: 'prima-visita-nutrizionale' },
  { label: 'Visita di controllo', icon: Calendar, color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100', id: 'visita-di-controllo' },
  { label: 'Analisi BIA', icon: Activity, color: 'text-cyan-700', bg: 'bg-cyan-50', border: 'border-cyan-100', id: 'analisi-bia-avanzata' },
  { label: 'Educazione alimentare', icon: Baby, color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-100', id: 'educazione-alimentare' },
  { label: 'Dieta per sportivi', icon: Dumbbell, color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-100', id: 'nutrizione-sportiva' },
  { label: 'Visita a domicilio', icon: Home, color: 'text-pink-700', bg: 'bg-pink-50', border: 'border-pink-100', id: 'visita-a-domicilio' }
]

export function HeroServiceTags () {
  const handleClick = (id) => {
    if (!id) return
    const element = document.getElementById(`service-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const TagRenderer = ({ tag }) => {
    const Icon = tag.icon
    return (
      <div
        onClick={() => handleClick(tag.id)}
        className={`flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl ${tag.bg} ${tag.color} border ${tag.border} shadow-sm text-center w-full min-h-[60px] cursor-pointer hover:shadow-md transition-shadow`}
      >
        <Icon className='w-4 h-4 shrink-0 opacity-80' />
        <span className='text-[9px] sm:text-[10px] font-bold uppercase tracking-wide leading-[1.1] w-full' style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
          {tag.label}
        </span>
      </div>
    )
  }

  return (
    <div className='w-full mt-4 sm:mt-6 px-1'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {serviceTags.map((tag, idx) => (
          <TagRenderer key={idx} tag={tag} />
        ))}
      </div>
    </div>
  )
}
