import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { DOCTOR_INFO, SOCIAL_LINKS } from '../constants'
import mioDottoreLogo from '../assets/loghi/mio-dottore.png'

export function StickyFooter () {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none sm:hidden'>
      <div className='max-w-md mx-auto flex gap-3 pointer-events-auto'>
        {/* WhatsApp/Phone CTA */}
        <a
          href={`tel:${DOCTOR_INFO.phone}`}
          className='flex-1 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center justify-center gap-3 active:scale-95 transition-transform'
        >
          <div className='w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600'>
            <Phone className='w-5 h-5' />
          </div>
          <div className='text-left'>
            <p className='text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1'>Chiamaci</p>
            <p className='text-sm font-black text-slate-900 leading-none'>Contatto</p>
          </div>
        </a>

        {/* MioDottore CTA */}
        <a
          href={SOCIAL_LINKS.miodottore}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-[1.5] bg-slate-900 shadow-xl rounded-2xl p-4 flex items-center justify-center gap-3 active:scale-95 transition-transform'
        >
          <img
            src={mioDottoreLogo}
            alt='MioDottore'
            className='w-10 h-10 object-contain brightness-0 invert'
          />
          <div className='text-left'>
            <p className='text-[10px] font-black uppercase tracking-widest text-slate-300/60 leading-none mb-1'>Prenota</p>
            <p className='text-sm font-black text-white leading-none'>Online</p>
          </div>
        </a>
      </div>
    </div>
  )
}

// Per Desktop, integriamo una barra più elegante o un widget flottante se preferisci,
// ma solitamente lo "Sticky Footer" è vitale su Mobile.
// Aggiungiamo anche la versione Desktop sottile:

export function DesktopStickyCTA () {
  return (
    <div className='hidden sm:flex fixed bottom-8 right-8 z-50 flex-col gap-3'>
      <a
        href={`tel:${DOCTOR_INFO.phone}`}
        className='group bg-white border border-slate-100 shadow-2xl rounded-2xl p-3 flex items-center gap-3 hover:translate-x-[-8px] transition-all duration-300'
      >
        <div className='w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform'>
          <Phone className='w-6 h-6' />
        </div>
        <div className='pr-4'>
          <p className='text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5'>Hai domande?</p>
          <p className='text-sm font-black text-slate-900'>Parla con il Dottore</p>
        </div>
      </a>

      <a
        href={SOCIAL_LINKS.miodottore}
        target='_blank'
        rel='noopener noreferrer'
        className='group bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-3 flex items-center gap-3 hover:translate-x-[-8px] transition-all duration-300'
      >
        <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform'>
          <img src={mioDottoreLogo} alt='' className='w-full h-full object-contain' />
        </div>
        <div className='pr-4 text-left'>
          <p className='text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5'>MioDottore</p>
          <p className='text-sm font-black text-white'>Prenota Visita</p>
        </div>
      </a>
    </div>
  )
}
