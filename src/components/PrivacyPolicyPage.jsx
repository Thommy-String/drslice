import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { DOCTOR_INFO } from '../constants'

export function PrivacyPolicyPage () {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className='min-h-screen bg-white pt-24 pb-20'>
      <div className='max-w-3xl mx-auto px-6'>
        <Link to='/' className='inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 mb-8'>
          <ArrowLeft className='w-4 h-4' /> Torna alla home
        </Link>

        <h1 className='text-3xl sm:text-4xl font-black text-slate-900 mb-2'>Privacy Policy</h1>
        <p className='text-sm text-slate-500 mb-10'>Ultimo aggiornamento: 15 maggio 2026</p>

        <div className='prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-6'>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è <strong>{DOCTOR_INFO.name}</strong>,
              Biologo Nutrizionista, con studio in Viale Trieste 40, 00019 Tivoli (RM).<br />
              Email: <a href={`mailto:${DOCTOR_INFO.email}`} className='text-emerald-600 hover:underline'>{DOCTOR_INFO.email}</a><br />
              Telefono: <a href={`tel:${DOCTOR_INFO.phone}`} className='text-emerald-600 hover:underline'>{DOCTOR_INFO.phoneDisplay}</a>
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>2. Tipologie di dati raccolti</h2>
            <p>Il Titolare può raccogliere le seguenti categorie di dati personali:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li><strong>Dati di contatto</strong> forniti volontariamente dall'utente (nome, cognome, email, numero di telefono) tramite il modulo di contatto, telefono o WhatsApp.</li>
              <li><strong>Dati di navigazione</strong> raccolti automaticamente in forma aggregata (indirizzo IP anonimizzato, tipo di browser, sistema operativo, pagine visitate) — solo se l'utente fornisce consenso ai cookie analitici.</li>
              <li><strong>Dati sanitari</strong> (categoria particolare ex art. 9 GDPR) raccolti esclusivamente in fase di visita nutrizionale e trattati nel rispetto del segreto professionale.</li>
            </ul>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>3. Finalità e base giuridica del trattamento</h2>
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>Risposta a richieste di contatto</strong> — base giuridica: esecuzione di misure precontrattuali (art. 6.1.b GDPR).</li>
              <li><strong>Erogazione delle prestazioni professionali</strong> (visite nutrizionali, piani alimentari) — base giuridica: esecuzione del contratto e tutela della salute (art. 9.2.h GDPR).</li>
              <li><strong>Adempimenti fiscali e di legge</strong> — base giuridica: obbligo legale (art. 6.1.c GDPR).</li>
              <li><strong>Statistiche di navigazione anonime</strong> — base giuridica: consenso (art. 6.1.a GDPR), revocabile in qualsiasi momento.</li>
              <li><strong>Marketing diretto</strong> (es. campagne pubblicitarie, retargeting) — base giuridica: consenso esplicito (art. 6.1.a GDPR).</li>
            </ul>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>4. Modalità di trattamento e conservazione</h2>
            <p>
              I dati sono trattati con strumenti elettronici e/o cartacei, con misure di sicurezza adeguate a prevenire accessi non autorizzati, perdita o distruzione.
              I dati sanitari sono conservati per il periodo previsto dalla normativa sulla documentazione sanitaria (in genere 10 anni).
              I dati di contatto sono conservati per il tempo strettamente necessario alla finalità per cui sono stati raccolti, salvo obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>5. Comunicazione dei dati a terzi</h2>
            <p>I dati personali possono essere comunicati a:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li>Consulenti fiscali e commercialisti del Titolare (per adempimenti contabili).</li>
              <li>Autorità pubbliche e organi di controllo, ove richiesto dalla legge.</li>
              <li>Fornitori di servizi tecnici (hosting, piattaforma di prenotazione) nominati Responsabili del trattamento ex art. 28 GDPR.</li>
            </ul>
            <p>I dati <strong>non sono diffusi</strong> e <strong>non vengono trasferiti</strong> al di fuori dello Spazio Economico Europeo, salvo per i servizi di cui alla Cookie Policy.</p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>6. Diritti dell'interessato</h2>
            <p>Ai sensi degli artt. 15-22 GDPR, l'utente ha diritto a:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li>Accesso ai propri dati personali e relative informazioni.</li>
              <li>Rettifica dei dati inesatti o incompleti.</li>
              <li>Cancellazione dei dati ("diritto all'oblio") nei casi previsti.</li>
              <li>Limitazione del trattamento.</li>
              <li>Portabilità dei dati in formato strutturato e leggibile.</li>
              <li>Opposizione al trattamento per finalità di marketing.</li>
              <li>Revoca del consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
              <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href='https://www.garanteprivacy.it' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:underline'>www.garanteprivacy.it</a>).</li>
            </ul>
            <p className='mt-3'>Per esercitare i propri diritti, l'interessato può scrivere a: <a href={`mailto:${DOCTOR_INFO.email}`} className='text-emerald-600 hover:underline'>{DOCTOR_INFO.email}</a>.</p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>7. Cookie</h2>
            <p>
              Per informazioni dettagliate sull'uso dei cookie tecnici, analitici e di marketing, si rimanda alla{' '}
              <Link to='/cookie-policy' className='text-emerald-600 font-semibold hover:underline'>Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-black text-slate-900 mt-8 mb-3'>8. Modifiche</h2>
            <p>
              Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento, dandone informativa sul sito.
              Si invita a consultare periodicamente questa pagina.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
