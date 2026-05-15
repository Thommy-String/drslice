import React from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { LOCATIONS } from '../constants'

import studioImg from '../assets/sedi/viaTriesteTivoli.jpg'
import fisioImg from '../assets/sedi/fisioera.jpg'
import farmaciaImg from '../assets/sedi/farmaciaFabbri.png'
import naturaImg from '../assets/sedi/naturalFarma-Guidonia.jpg'

const locationImgs = [studioImg, fisioImg, farmaciaImg, naturaImg]

export function HeroServiceTags () {
  const handleClick = () => {
    const el = document.getElementById('sedi')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='w-full mt-4 sm:mt-6 px-1'>
      <p className='text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center mb-3'>
        📍 Dove ricevo
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-2.5'>
        {LOCATIONS.map((loc, idx) => (
          <div
            key={idx}
            onClick={handleClick}
            className='group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
            style={{ aspectRatio: '4/5' }}
          >
            {/* Photo */}
            <img
              src={locationImgs[idx]}
              alt={loc.name}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
            {/* Strong gradient for readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10' />

            {/* Map pin badge top-left */}
            <div className='absolute top-2.5 left-2.5 flex items-center gap-1 bg-emerald-500/90 backdrop-blur-sm rounded-full px-2 py-0.5 shadow-sm'>
              <MapPin className='w-2.5 h-2.5 text-white flex-shrink-0' />
              <span className='text-white text-[9px] font-bold uppercase tracking-wide'>{loc.city}</span>
            </div>

            {/* Text bottom */}
            <div className='absolute bottom-0 left-0 right-0 p-3 text-left'>
              <p className='text-white text-[13px] font-black leading-tight drop-shadow-sm'>{loc.name}</p>
              <div className='flex items-start gap-1 mt-1'>
                <Navigation className='w-2.5 h-2.5 text-emerald-300 flex-shrink-0 mt-0.5' />
                <p className='text-white/80 text-[10px] font-medium leading-snug'>{loc.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
