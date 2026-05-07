import React, { useState, useEffect } from 'react'
import { X, Cookie, ChevronDown, ChevronUp, Check, Shield } from 'lucide-react'

const COOKIE_KEY = 'slice_cookie_consent'
const COOKIE_EXPIRY_DAYS = 365

function setCookie (name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

function getCookie (name) {
  return document.cookie.split('; ').reduce((acc, part) => {
    const [k, v] = part.split('=')
    return k === name ? decodeURIComponent(v) : acc
  }, null)
}

export function CookieBanner () {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const saved = getCookie(COOKIE_KEY)
    if (saved) return // already chose — never show again
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  const save = (consent) => {
    setCookie(COOKIE_KEY, JSON.stringify(consent), COOKIE_EXPIRY_DAYS)
    setVisible(false)

    // Activate tracking only if marketing accepted
    if (consent.marketing) {
      // window.gtag?.('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' })
      // fbq?.('consent', 'grant')
    }
  }

  const acceptAll = () => save({ analytics: true, marketing: true })
  const rejectAll = () => save({ analytics: false, marketing: false })
  const saveCustom = () => {
    setSaved(true)
    setTimeout(() => {
      save(prefs)
    }, 900)
  }

  if (!visible) return null

  return (
    <div
      role='dialog'
      aria-label='Preferenze cookie'
      aria-modal='true'
      className='fixed bottom-0 left-0 right-0 z-[2147483640] sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-[420px] animate-slide-up'
    >
      <div className='mx-3 mb-3 sm:mx-0 sm:mb-0 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-black/15 overflow-hidden'>

        {/* Top accent bar */}
        <div className='h-1 w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500' />

        <div className='p-5 sm:p-6'>

          {/* Header */}
          <div className='flex items-start justify-between gap-3 mb-4'>
            <div className='flex items-center gap-2.5'>
              <div className='w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0'>
                <Cookie className='w-4.5 h-4.5 text-emerald-600' style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <p className='text-[15px] font-black text-slate-900 leading-tight'>Preferenze cookie</p>
                <p className='text-[11px] text-slate-400 font-medium mt-0.5 flex items-center gap-1'>
                  <Shield className='w-3 h-3' />
                  Conforme GDPR
                </p>
              </div>
            </div>
            <button
              onClick={rejectAll}
              aria-label='Chiudi e rifiuta tutti'
              className='w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0 mt-0.5'
            >
              <X className='w-4 h-4' />
            </button>
          </div>

          {/* Body */}
          <p className='text-[13px] text-slate-500 leading-relaxed mb-5'>
            Utilizziamo cookie tecnici (necessari) e, con il tuo consenso, cookie analitici e di marketing. Puoi scegliere liberamente. Leggi la nostra{' '}
            <a href='/cookie-policy' className='text-emerald-600 font-semibold hover:underline'>
              Cookie Policy
            </a>
            .
          </p>

          {/* Personalizza expander */}
          <button
            onClick={() => setExpanded(e => !e)}
            className='w-full flex items-center justify-between text-[12px] font-bold text-slate-500 hover:text-slate-700 transition-colors mb-3 group'
            aria-expanded={expanded}
          >
            <span>Personalizza preferenze</span>
            {expanded
              ? <ChevronUp className='w-4 h-4 group-hover:text-emerald-600 transition-colors' />
              : <ChevronDown className='w-4 h-4 group-hover:text-emerald-600 transition-colors' />}
          </button>

          {expanded && (
            <div className='space-y-2.5 mb-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100'>
              {/* Tecnici — always on */}
              <div className='flex items-center justify-between gap-3'>
                <div>
                  <p className='text-[13px] font-bold text-slate-700'>Cookie tecnici</p>
                  <p className='text-[11px] text-slate-400 mt-0.5'>Necessari per il funzionamento del sito</p>
                </div>
                <div className='w-10 h-5.5 rounded-full bg-emerald-500 flex items-center justify-end px-0.5 flex-shrink-0' style={{ height: '22px' }}>
                  <div className='w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center'>
                    <Check className='w-2.5 h-2.5 text-emerald-500' />
                  </div>
                </div>
              </div>

              <div className='h-px bg-slate-200' />

              {/* Analitici */}
              <div className='flex items-center justify-between gap-3'>
                <div>
                  <p className='text-[13px] font-bold text-slate-700'>Cookie analitici</p>
                  <p className='text-[11px] text-slate-400 mt-0.5'>Statistiche anonime sull'utilizzo del sito</p>
                </div>
                <button
                  onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                  aria-checked={prefs.analytics}
                  role='switch'
                  aria-label='Cookie analitici'
                  className={`w-10 flex-shrink-0 rounded-full transition-colors duration-200 flex items-center px-0.5 ${prefs.analytics ? 'bg-emerald-500 justify-end' : 'bg-slate-300 justify-start'}`}
                  style={{ height: '22px' }}
                >
                  <div className='w-4 h-4 rounded-full bg-white shadow-sm' />
                </button>
              </div>

              <div className='h-px bg-slate-200' />

              {/* Marketing */}
              <div className='flex items-center justify-between gap-3'>
                <div>
                  <p className='text-[13px] font-bold text-slate-700'>Cookie di marketing</p>
                  <p className='text-[11px] text-slate-400 mt-0.5'>Pubblicità personalizzata (Google Ads, Meta)</p>
                </div>
                <button
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  aria-checked={prefs.marketing}
                  role='switch'
                  aria-label='Cookie di marketing'
                  className={`w-10 flex-shrink-0 rounded-full transition-colors duration-200 flex items-center px-0.5 ${prefs.marketing ? 'bg-emerald-500 justify-end' : 'bg-slate-300 justify-start'}`}
                  style={{ height: '22px' }}
                >
                  <div className='w-4 h-4 rounded-full bg-white shadow-sm' />
                </button>
              </div>

              <button
                onClick={saveCustom}
                disabled={saved}
                className={`w-full mt-1 py-2 rounded-lg border text-[12px] font-bold transition-all duration-200 ${
                  saved
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-600'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {saved ? '✓ Preferenze salvate' : 'Salva preferenze'}
              </button>
            </div>
          )}

          {/* CTA row — Rifiuta e Accetta visivamente equivalenti */}
          <div className='grid grid-cols-2 gap-2.5'>
            <button
              onClick={rejectAll}
              className='py-3 rounded-xl border-2 border-slate-200 text-[13px] font-black text-slate-700 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] transition-all duration-150'
            >
              Rifiuta tutti
            </button>
            <button
              onClick={acceptAll}
              className='py-3 rounded-xl text-[13px] font-black text-white active:scale-[0.98] transition-all duration-150'
              style={{ backgroundColor: '#10b981', boxShadow: '0 4px 14px rgba(16,185,129,0.35)' }}
            >
              Accetta tutti
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
