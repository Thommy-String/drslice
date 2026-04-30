import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS } from '../constants'
import logoImg from '../assets/loghi/slice logo. finale_.png'

export function Navbar ({ dark = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Build correct href: on sub-pages, prefix with /
  const getNavHref = (href) => isHome ? href : `/${href}`

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY < 50 || currentScrollY < lastScrollY.current) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[99999] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${
      scrolled
        ? (dark ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/5 py-1.5 shadow-sm' : 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-1.5 shadow-sm')
        : (dark ? 'bg-[#0B0F19] py-1.5' : 'bg-[#f0f7f4] lg:bg-transparent py-1.5')
    }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-12 lg:h-16'>

          {/* Logo Section */}
          <div className='flex-shrink-0'>
            <Link to='/' className='group flex items-center gap-2.5'>
              <div className='relative'>
                <img src={logoImg} alt='Slice Nutrizione Logo' className={`h-8 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${dark ? 'brightness-0 invert' : ''}`} />
              </div>
              <div className='flex flex-col'>
                <span className={`font-bold text-md leading-tight tracking-tight uppercase ${dark ? 'text-white' : 'text-slate-900'}`}>Dott. Paolo Panarini</span>
                <span className='text-emerald-600 text-[10px] uppercase tracking-[-0.05em]'>Dietista - Nutrizionista</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:gap-8'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={getNavHref(link.href)}
                className={`text-sm font-bold hover:text-emerald-600 transition-colors tracking-tight ${dark ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.miodottore}
              target='_blank'
              className={`group/btn relative px-5 py-2.5 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl flex items-center gap-2 overflow-hidden ${dark ? 'bg-white/10 shadow-white/5 hover:shadow-emerald-600/20' : 'bg-slate-900 shadow-slate-900/10 hover:shadow-emerald-600/20'}`} rel='noreferrer'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500' />
              <span className='relative z-10'>Prenota Visita</span>
              <ChevronRight className='w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform' />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 relative z-[999999] ${
              isOpen ? 'bg-slate-900 text-white' : (dark ? 'bg-white/10 text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-400' : 'bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600')
            }`}
            aria-label='Menu'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-2xl z-[110] transition-all duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      >
        <div className='flex flex-col h-full p-6 pt-20 overflow-y-auto'>

          <div
            className={`mb-6 transition-all duration-700 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
            style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
          >
            <a
              href={SOCIAL_LINKS.miodottore}
              target='_blank'
              onClick={() => setIsOpen(false)}
              className='flex items-center justify-between w-full p-5 bg-slate-900 text-white rounded-[1.5rem] text-lg font-bold transition-all hover:bg-emerald-600 shadow-xl shadow-slate-900/20' rel='noreferrer'
            >
              <span>Prenota Visita</span>
              <div className='bg-white/20 p-2 rounded-full'>
                <ChevronRight className='w-5 h-5' />
              </div>
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={getNavHref(link.href)}
                onClick={() => setIsOpen(false)}
                className={`group p-4 rounded-[1.5rem] bg-slate-50/50 text-xl font-bold text-slate-900 flex items-center justify-between transition-all duration-500 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/50 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50 + 200}ms` : '0ms' }}
              >
                <span className='group-hover:translate-x-2 transition-transform duration-300'>{link.label}</span>
                <ChevronRight className='w-5 h-5 text-emerald-500 transform group-hover:translate-x-1 transition-all' />
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}
