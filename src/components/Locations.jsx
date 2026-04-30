import React from 'react'
import { MapPin, Phone } from 'lucide-react'
import { LOCATIONS } from '../constants'

// Import images for locations
import studioPrivatoImg from '../assets/sedi/viaTriesteTivoli.jpg'
import fisioeraImg from '../assets/sedi/fisioera.jpg'
import farmaciaFabbriImg from '../assets/sedi/farmaciaFabbri.png'
import naturalFarmaImg from '../assets/sedi/naturalFarma-Guidonia.jpg'
import colaiacoImg from '../assets/sedi/centro-medico-colaico.jpg'
import googleMapsLogo from '../assets/loghi/Google_Maps_icon_(2020).svg.png'

const locationImages = {
  'Studio Privato Panarini': studioPrivatoImg,
  Fisioera: fisioeraImg,
  'Farmacia Fabbri': farmaciaFabbriImg,
  'Parafarmacia NaturalFarma': naturalFarmaImg,
  'Centro Medico Colaiaco': colaiacoImg
}

export function Locations () {
  return (
    <section className='py-20 bg-slate-50/50 relative z-10' id='sedi'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-14 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl'>
            Dove trovarmi
          </h2>
          <p className='mt-4 text-slate-500 text-lg max-w-2xl mx-auto'>
            Ricevo su appuntamento in 4 studi tra Roma e provincia. Scegli la sede più comoda per te.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className={`group relative ${idx === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''}`}
            >
              <div className='relative h-80 sm:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 transition-all duration-700 hover:-translate-y-2'>
                {/* Background Image with Overlay */}
                <img
                  src={locationImages[loc.name]}
                  alt={loc.name}
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90' />

                {/* Top Actions: City Badge */}
                <div className='absolute top-6 left-6 flex items-start'>
                  <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                    <span className='text-[10px] font-bold text-white uppercase tracking-[0.15em]'>{loc.city}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className='absolute inset-x-0 bottom-0 p-8 flex flex-col'>
                  <div className='mb-6'>
                    <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 block'>
                      {loc.type}
                    </span>
                    <h3 className='text-2xl font-bold text-white mb-2 leading-tight'>
                      {loc.name}
                    </h3>
                    <a
                      href={loc.mapsUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/address inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300'
                    >
                      <img src={googleMapsLogo} alt='' className='w-5 h-5 object-contain' />
                      <span className='text-sm font-medium underline underline-offset-4 decoration-emerald-500 group-hover:decoration-emerald-400'>
                        {loc.address}
                      </span>
                    </a>
                  </div>

                  {/* CTA Button - Modern & Elegant */}
                  <div className='flex gap-3'>
                    <a
                      href={`tel:${loc.phone}`}
                      className='flex-1 flex items-center justify-center gap-2 py-4 bg-white text-slate-950 rounded-2xl font-bold text-sm transition-all duration-300 hover:bg-emerald-50 active:scale-[0.98] shadow-xl shadow-black/20'
                    >
                      <Phone className='w-4 h-4 text-emerald-600' />
                      Chiama e Prenota una Visita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
