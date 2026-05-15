import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Settings } from 'lucide-react'
import { DOCTOR_INFO } from '../constants'

export function CookiePolicyPage () {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const openPreferences = () => {
    if (typeof window.openCookiePreferences === 'function') {
      window.openCookiePreferences()
    } else {
      window.dispatchEvent(new Event('sn:open-cookie-preferences'))
    }
  }

  return (
    <main className='min-h-screen bg-white pt-24 pb-20'>
      <div className='max-w-3xl mx-auto px-6'>
        <Link to='/' className='inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 mb-8'>
          <ArrowLeft className='w-4 h-4' /> Torna alla home
        </Link>

        <h1 className='text-3xl sm:text-4xl font-black text-slate-900 mb-2'>Cookie Policy</h1>
        <p className='text-sm text-slate-500 mb-6'>Ultimo aggiornamento: 15 maggio 2026</p>

        <button
          onClick={openPreferences}
          className='inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors mb-10'
        >
          <Settings className='w-4 h-4' />
          Gestisci le tue preferenze cookie
        </button>

        <div className='prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-6'>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-2 mb-3'>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi
              al sito alla visita successiva. Possono essere installati dal sito stesso (cookie di "prima parte") o da siti diversi (cookie di "terze parti").
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>2. Tipologie di cookie utilizzati</h2>

            <div className='border border-slate-200 rounded-xl p-5 mb-4 bg-slate-50'>
              <h3 className='text-base font-black text-slate-900 mb-2'>🟢 Cookie tecnici (necessari)</h3>
              <p className='text-sm mb-2'>
                Necessari al funzionamento del sito e per le finalità strettamente legate alla fornitura del servizio richiesto.
                Non richiedono il consenso dell'utente (art. 122 Codice Privacy).
              </p>
              <table className='w-full text-xs mt-3'>
                <thead>
                  <tr className='border-b border-slate-300'>
                    <th className='text-left py-2 font-bold'>Nome</th>
                    <th className='text-left py-2 font-bold'>Finalità</th>
                    <th className='text-left py-2 font-bold'>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-200'>
                    <td className='py-2 font-mono text-[11px]'>slice_cookie_consent</td>
                    <td className='py-2'>Memorizza le preferenze cookie dell'utente</td>
                    <td className='py-2'>180 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='border border-slate-200 rounded-xl p-5 mb-4'>
              <h3 className='text-base font-black text-slate-900 mb-2'>🟡 Cookie analitici</h3>
              <p className='text-sm'>
                Permettono di raccogliere informazioni in forma aggregata sul numero degli utenti e su come visitano il sito.
                Vengono installati <strong>solo previo consenso</strong> dell'utente.
              </p>
              <p className='text-sm mt-2 text-slate-500 italic'>
                Attualmente nessun cookie analitico è installato. Quando saranno attivati strumenti come Google Analytics 4, verranno
                configurati con anonimizzazione IP e i dettagli (provider, durata, link informativa) saranno aggiornati in questa tabella.
              </p>
            </div>

            <div className='border border-slate-200 rounded-xl p-5 mb-4'>
              <h3 className='text-base font-black text-slate-900 mb-2'>🔴 Cookie di marketing / profilazione</h3>
              <p className='text-sm'>
                Utilizzati per tracciare gli utenti attraverso i siti web e mostrare pubblicità personalizzata (es. Google Ads, Meta Pixel).
                Vengono installati <strong>solo previo consenso esplicito</strong> dell'utente.
              </p>
              <p className='text-sm mt-2 text-slate-500 italic'>
                Attualmente nessun cookie di marketing è installato. Quando saranno attivati, i dettagli verranno aggiunti in questa pagina.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>3. Come gestire le preferenze cookie</h2>
            <p>L'utente può modificare in qualsiasi momento le proprie preferenze:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li>Cliccando il pulsante <strong>"Gestisci le tue preferenze cookie"</strong> in cima a questa pagina.</li>
              <li>Modificando le impostazioni del proprio browser per bloccare o eliminare i cookie:</li>
            </ul>
            <ul className='list-disc pl-6 space-y-1 mt-2 text-sm'>
              <li><a href='https://support.google.com/chrome/answer/95647' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:underline'>Google Chrome</a></li>
              <li><a href='https://support.mozilla.org/it/kb/Gestione%20dei%20cookie' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:underline'>Mozilla Firefox</a></li>
              <li><a href='https://support.apple.com/it-it/guide/safari/sfri11471/mac' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:underline'>Safari</a></li>
              <li><a href='https://support.microsoft.com/it-it/microsoft-edge' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:underline'>Microsoft Edge</a></li>
            </ul>
            <p className='mt-3 text-sm text-slate-500'>
              N.B. Disabilitando i cookie tecnici alcune funzionalità del sito potrebbero non essere disponibili.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>4. Titolare del trattamento</h2>
            <p>
              {DOCTOR_INFO.name} — Viale Trieste 40, 00019 Tivoli (RM).<br />
              Email: <a href={`mailto:${DOCTOR_INFO.email}`} className='text-emerald-600 hover:underline'>{DOCTOR_INFO.email}</a>
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>5. Riferimenti normativi</h2>
            <ul className='list-disc pl-6 space-y-1 text-sm'>
              <li>Regolamento (UE) 2016/679 (GDPR)</li>
              <li>D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018</li>
              <li>Linee guida del Garante per la Protezione dei Dati Personali su cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          <section>
            <p className='text-sm'>
              Per maggiori informazioni sul trattamento dei dati personali, consulta la{' '}
              <Link to='/privacy-policy' className='text-emerald-600 font-semibold hover:underline'>Privacy Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
