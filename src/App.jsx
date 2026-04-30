import { Routes, Route, Navigate } from 'react-router-dom'
import { HeroSection } from './components/HeroSection'
import { Methodology } from './components/Methodology'
import { Locations } from './components/Locations'
import { AboutMe } from './components/AboutMe'
import { Services } from './components/Services'
import { ComparisonTable } from './components/ComparisonTable'
import { ServiceQuiz } from './components/ServiceQuiz'
import { MetodoSlicePage } from './components/MetodoSlicePage'
import { DOCTOR_INFO, SOCIAL_LINKS, LOCATIONS, SERVICES } from './constants'
import mioDottoreLogo from './assets/loghi/mio-dottore.png'
import { Phone, MapPin, Mail, Instagram, Facebook, ExternalLink, Calendar, Sparkles } from 'lucide-react'

function HomePage () {
  return (
    <>
      <HeroSection />

      <main>
        <Methodology />
        <Services />
        <Locations />
        <AboutMe />

        {/* Quiz Section */}
        <div className='py-16 flex flex-col items-center justify-center max-w-lg mx-auto w-full px-6'>
          <h3 className='text-xl lg:text-3xl font-black mb-4 flex items-center gap-2'>
            <Sparkles className='w-5 h-5 text-emerald-500' />
            Non sai da dove iniziare?
          </h3>
          <ServiceQuiz />
        </div>

        {/* Comparison Table */}
        <div className='w-full flex justify-center pb-16'>
          <div className='w-[100vw] ml-[calc(-50vw+50%)] lg:ml-0 lg:w-full sm:max-w-5xl px-0 sm:px-6 lg:px-8'>
            <ComparisonTable />
          </div>
        </div>
      </main>
    </>
  )
}

function App () {
  return (
    <div className='min-h-screen bg-slate-50 font-sans text-slate-900 relative'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/metodo-slice' element={<MetodoSlicePage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <footer className='bg-slate-900 pt-20 pb-12 text-white overflow-hidden relative' id='contatti'>
        {/* Decorative background glow */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent' />
        <div className='absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none' />

        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16'>

            {/* Branding & Mission */}
            <div className='lg:col-span-4 space-y-6'>
              <div className='flex flex-col'>
                <span className='text-2xl font-black tracking-tighter text-white'>
                  Dott. Paolo Panarini
                </span>
                <span className='text-xs font-bold uppercase tracking-[0.3em] text-emerald-500 mt-1'>
                  Dietista & Nutrizionista
                </span>
              </div>
              <p className='text-slate-400 font-medium leading-relaxed max-w-sm'>
                Specializzato in nutrizione clinica e sportiva. Il mio obiettivo è trasformare il tuo rapporto con il cibo attraverso il metodo scientifico e la consapevolezza.
              </p>
              <div className='flex gap-4'>
                <a href={SOCIAL_LINKS.instagram} target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all'>
                  <Instagram className='w-5 h-5' />
                </a>
                <a href={SOCIAL_LINKS.facebook} target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all'>
                  <Facebook className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links / Info */}
            <div className='lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <h4 className='text-sm font-black uppercase tracking-widest text-white'>I Nostri Servizi</h4>
                <ul className='space-y-3'>
                  {SERVICES.map((service, idx) => (
                    <li key={idx}>
                      <a
                        href={`#service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={(e) => {
                          e.preventDefault()
                          const id = `service-${service.name.toLowerCase().replace(/\s+/g, '-')}`
                          const element = document.getElementById(id)
                          if (element) {
                            const offset = 100 // Offset for sticky headers or better visibility
                            const elementPosition = element.getBoundingClientRect().top
                            const offsetPosition = elementPosition + window.pageYOffset - offset
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            })
                          }
                        }}
                        className='text-sm font-bold text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2'
                      >
                        <div className='w-1 h-1 rounded-full bg-emerald-500/40' />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='space-y-6'>
                <h4 className='text-sm font-black uppercase tracking-widest text-white'>Le Nostre Sedi</h4>
                <ul className='space-y-4'>
                  {LOCATIONS.map((loc, idx) => (
                    <li key={idx}>
                      <a
                        href={loc.mapsUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-start gap-3 group'
                      >
                        <div className='w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-500 transition-all'>
                          <MapPin className='w-4 h-4' />
                        </div>
                        <div className='text-left'>
                          <p className='text-sm font-bold text-slate-300 group-hover:text-white transition-colors leading-tight'>{loc.name}</p>
                          <p className='text-[11px] text-slate-500 font-medium leading-tight mt-0.5'>{loc.address}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs Column */}
            <div className='lg:col-span-3 space-y-4'>
              <h4 className='text-sm font-black uppercase tracking-widest text-white mb-6'>Inizia Ora</h4>

              <a
                href={SOCIAL_LINKS.miodottore}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between p-4 bg-white rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-white/5'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center p-2.5'>
                    <img src={mioDottoreLogo} alt='' className='w-full h-full object-contain' />
                  </div>
                  <div>
                    <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5'>Prenota Online</p>
                    <p className='text-base font-black text-slate-900 leading-none tracking-tight'>MioDottore.it</p>
                  </div>
                </div>
                <ExternalLink className='w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors mr-1' />
              </a>

              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className='group flex items-center justify-between p-4 bg-emerald-600 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-emerald-600/20'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white'>
                    <Calendar className='w-5 h-5' />
                  </div>
                  <div>
                    <p className='text-[10px] font-black text-emerald-100/60 uppercase tracking-widest leading-none mb-1'>Chiamata Diretta</p>
                    <p className='text-sm font-black text-white leading-none'>Prenota Telefonicamente</p>
                  </div>
                </div>
                <Phone className='w-4 h-4 text-emerald-300 group-hover:text-white transition-colors' />
              </a>
            </div>

          </div>

          <div className='pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-slate-500 text-xs font-bold uppercase tracking-widest text-center md:text-left'>
              © {new Date().getFullYear()} Dott. Paolo Panarini. Dietista & Nutrizionista. P.IVA 1234567890
            </p>
            <div className='flex gap-8'>
              <a href='#' className='text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors'>Privacy Policy</a>
              <a href='#' className='text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
