import React, { useState, useEffect } from 'react'
import { CheckCircle2, Star } from 'lucide-react'
import { DOCTOR_INFO } from '../constants'
import drPhoto from '../assets/Paolo/drPaoloPanarini.png'
import mioDottore from '../assets/loghi/mio-dottore.png'

export function MobileCTA () {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waHref = `https://wa.me/${DOCTOR_INFO.phone.replace(/\+|\s/g, '')}?text=${encodeURIComponent('Ciao Dott. Paolo, vorrei ...')}`

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[99990] transition-transform duration-500 ease-out sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='mx-3 mb-3 rounded-2xl shadow-2xl shadow-black/20 border border-white/25 backdrop-blur-2xl bg-white/55 overflow-hidden'>

        {/* Top: avatar + identity + CTA in one row */}
        <div className='flex items-center gap-3 px-3 pt-3 pb-2.5'>
          {/* Avatar */}
          <div className='relative flex-shrink-0'>
            <img
              src={drPhoto}
              alt='Dott. Paolo Panarini'
              className='w-12 h-12 rounded-full object-cover object-top border-2 border-white shadow-md'
            />
            <span className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white block' />
          </div>

          {/* Identity */}
          <div className='flex-1 min-w-0'>
            <div className='flex items-center justify-between gap-1'>
              <p className='text-[14px] font-black text-slate-900 leading-tight'>Dott. Paolo Panarini</p>
              <div className='flex items-center gap-1 flex-shrink-0'>
                <img src={mioDottore} alt='MioDottore' className='h-7 object-contain opacity-80' />
                <div className='flex gap-0'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-2 h-2 text-yellow-400 fill-yellow-400' />
                  ))}
                </div>
                <span className='text-[10px] font-bold text-slate-600 ml-0.5'>5.0</span>
              </div>
            </div>
            <p className='text-[11px] text-slate-400 leading-tight mt-0.5 tracking-tight'>
              Nutrizionista - Dietista · <span className='font-semibold text-slate-600'>Roma - Tivoli - Guidonia</span>
            </p>
            <p className='text-[11px] text-slate-600 leading-snug mt-1'>
              Esperto in nutrizione e ricomposizione corporea
              <span className='font-bold text-emerald-600'> per lavoratori impegnati, studenti e sportivi ambiziosi.</span>
            </p>
          </div>
        </div>

        {/* CTA button */}
        <a
          href={waHref}
          target='_blank'
          rel='noopener noreferrer'
          className='mx-3 mb-1 flex items-center justify-center gap-2 rounded-xl py-2.5 active:scale-[0.98] transition-transform duration-150'
          style={{ backgroundColor: '#25D366', boxShadow: '0 4px 14px rgba(37,211,102,0.40)' }}
        >
          <svg className='w-4 h-4 flex-shrink-0' viewBox='0 0 24 24' fill='white'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
          </svg>
          <span className='text-[15px] font-black text-white tracking-tight'>Scrivi al Dott. Paolo</span>
        </a>

        {/* Trust signal */}
        <div className='flex items-center justify-center gap-1 pb-2'>
          <CheckCircle2 className='w-3 h-3 text-emerald-500 flex-shrink-0' />
          <span className='text-[11px] font-medium text-slate-400 tracking-tight'>Nessun obbligo di acquisto</span>
        </div>

      </div>
    </div>
  )
}
