import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight, UtensilsCrossed, Ban, Clock, Sparkles, CheckCircle2, Heart, Brain, Salad, Target, Users, BookOpen, Crown, Utensils, Sunrise, Plane, Moon, Eye } from 'lucide-react'
import { Navbar } from './Navbar'
import { SOCIAL_LINKS } from '../constants'
import logoImg from '../assets/loghi/slice logo. finale_.png'
import mioDottoreLogo from '../assets/loghi/mio-dottore.png'
import doctorImg from '../assets/Paolo/drPaoloPanarini.jpg'

const pillars = [
  {
    letter: 'S',
    title: 'Sostenibilità',
    color: 'emerald',
    icon: <Heart className='w-7 h-7' />,
    tagline: 'Un piano che vive con te',
    description: 'Un piano che non puoi seguire a lungo non serve a nulla. Non ti chiederò di pesare ogni grammo o di rinunciare alle cene fuori. Creiamo insieme abitudini reali che si adattano ai tuoi ritmi, al tuo lavoro, alla tua famiglia — non il contrario.',
    points: ['Adattamento ai tuoi ritmi quotidiani', 'Compatibilità con la vita sociale', 'Nessuna restrizione insostenibile']
  },
  {
    letter: 'L',
    title: 'Libertà',
    color: 'blue',
    icon: <Salad className='w-7 h-7' />,
    tagline: 'Nessun cibo è il nemico',
    description: 'Nessun alimento è proibito. Dimentica le liste di cibi "buoni" e "cattivi". Ti insegno a gestire la pizza del sabato, il dolce della domenica e l\'aperitivo con gli amici senza sensi di colpa — e senza che il percorso ne risenta.',
    points: ['Nessun alimento proibito', 'Gestione delle occasioni sociali', 'Menù settimanale a tua scelta']
  },
  {
    letter: 'I',
    title: 'Individualità',
    color: 'violet',
    icon: <Target className='w-7 h-7' />,
    tagline: 'Calibrato su di te',
    description: 'Non esistono diete copia-incolla. Ogni grammo, ogni scelta, ogni strategia è costruita intorno al tuo metabolismo, ai tuoi gusti e ai tuoi obiettivi specifici. Quello che funziona per qualcun altro potrebbe non funzionare per te.',
    points: ['Piano calibrato sul tuo metabolismo', 'Rispetto dei tuoi gusti alimentari', 'Obiettivi personalizzati e realistici']
  },
  {
    letter: 'C',
    title: 'Consapevolezza',
    color: 'amber',
    icon: <Brain className='w-7 h-7' />,
    tagline: 'Impara per sempre',
    description: 'Questo è il cuore del metodo. Non ti do solo un piano alimentare: ti insegno a capire cosa mangi e perché. Con il tempo imparerai a bilanciare un pasto da solo, a leggere un\'etichetta, a fare la spesa in modo intelligente. Diventerai autonomo — per sempre.',
    points: ['Educazione alimentare completa', 'Autonomia nel bilanciare i pasti', 'Conoscenze che durano tutta la vita']
  },
  {
    letter: 'E',
    title: 'Equilibrio',
    color: 'rose',
    icon: <Users className='w-7 h-7' />,
    tagline: 'Mente e corpo in armonia',
    description: 'La salute non è solo un numero sulla bilancia. È armonia tra mente e corpo, tra gusto e nutrimento, tra disciplina e piacere. Un approccio sereno al cibo è la vera chiave di una trasformazione che dura nel tempo.',
    points: ['Approccio senza stress né ansia', 'Rapporto sano con il cibo', 'Risultati duraturi nel tempo']
  }
]

const failureReasons = [
  {
    number: '01',
    icon: <UtensilsCrossed className='w-8 h-8' />,
    title: 'La Monotonia',
    subtitle: 'Sempre le stesse 4-5 pietanze',
    description: 'Spesso nelle diete — anche quelle fai da te — si tende a mangiare sempre gli stessi alimenti "sani" per antonomasia: petto di pollo, riso in bianco, insalata scondita. La verità? Con un minimo di accorgimenti è possibile mangiare anche alimenti considerati meno "sani" e dimagrire lo stesso, restando in salute.',
    solution: 'Nel Metodo SLICE ti insegno a rendere la tua alimentazione varia e gustosa, uscendo dal paradigma "dieta = cibi tristi".'
  },
  {
    number: '02',
    icon: <Ban className='w-8 h-8' />,
    title: 'La Mancanza di Libertà',
    subtitle: 'Menù rigidi e imposti dall\'alto',
    description: 'Le diete tradizionali non prevedono che tu possa gestire il tuo menù settimanale in autonomia e scegliere in base alle tue preferenze. Questo porta, sul lungo periodo, ad affrontare i pasti senza più l\'allegria di mangiare qualcosa che ci gratifica — e inevitabilmente all\'abbandono.',
    solution: 'Con il mio approccio sei tu a decidere cosa mangiare. Ti do gli strumenti, tu scegli come usarli.'
  },
  {
    number: '03',
    icon: <Clock className='w-8 h-8' />,
    title: 'La Mancanza di Tempo',
    subtitle: 'Ore ai fornelli che non hai',
    description: 'Si associa lo stare a dieta al doversi preparare pasti elaborati. Questo è un problema enorme per chi lavora e pranza fuori casa, o per chi la sera torna a casa senza energie mentali per dedicarsi alla cucina. Il risultato? Si abbandona.',
    solution: 'Ti insegno strategie pratiche e veloci, adatte anche a chi ha pochissimo tempo per cucinare.'
  }
]

const colorMap = {
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    pill: 'bg-emerald-500/20 text-emerald-300',
    accent: 'bg-emerald-500',
    check: 'text-emerald-400'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/10',
    pill: 'bg-blue-500/20 text-blue-300',
    accent: 'bg-blue-500',
    check: 'text-blue-400'
  },
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/10',
    pill: 'bg-violet-500/20 text-violet-300',
    accent: 'bg-violet-500',
    check: 'text-violet-400'
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    glow: 'shadow-amber-500/10',
    pill: 'bg-amber-500/20 text-amber-300',
    accent: 'bg-amber-500',
    check: 'text-amber-400'
  },
  rose: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    glow: 'shadow-rose-500/10',
    pill: 'bg-rose-500/20 text-rose-300',
    accent: 'bg-rose-500',
    check: 'text-rose-400'
  }
}

export function MetodoSlicePage () {
  const [showConfetti, setShowConfetti] = useState(false)
  const confettiRef = React.useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Trigger confetti when component mounts (once)
  useEffect(() => {
    const triggerConfetti = () => {
      // Create confetti particles
      if (confettiRef.current) {
        const container = confettiRef.current
        const colors = ['#10b981', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#3b82f6']

        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement('div')
          confetti.style.position = 'fixed'
          confetti.style.width = Math.random() * 10 + 5 + 'px'
          confetti.style.height = confetti.style.width
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
          confetti.style.borderRadius = '50%'
          confetti.style.left = container.getBoundingClientRect().left + container.offsetWidth / 2 + 'px'
          confetti.style.top = container.getBoundingClientRect().top + 'px'
          confetti.style.pointerEvents = 'none'
          confetti.style.zIndex = '9999'

          const xVelocity = (Math.random() - 0.5) * 8
          const yVelocity = Math.random() * -10 - 5
          let x = parseFloat(confetti.style.left)
          let y = parseFloat(confetti.style.top)
          let vx = xVelocity
          let vy = yVelocity

          document.body.appendChild(confetti)

          const animate = () => {
            x += vx
            y += vy
            vy += 0.1 // gravity
            vx *= 0.99 // air resistance

            confetti.style.left = x + 'px'
            confetti.style.top = y + 'px'
            confetti.style.opacity = Math.max(0, 1 - (y - parseFloat(container.getBoundingClientRect().top)) / 500)

            if (y < window.innerHeight + 100) {
              requestAnimationFrame(animate)
            } else {
              if (document.body.contains(confetti)) {
                document.body.removeChild(confetti)
              }
            }
          }

          animate()
        }
      }
    }

    // We'll trigger confetti on scroll to step 05
    const handleScroll = () => {
      if (confettiRef.current) {
        const rect = confettiRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && !showConfetti) {
          setShowConfetti(true)
          triggerConfetti()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showConfetti])

  return (
    <div className='bg-[#0B0F19] min-h-screen font-sans text-white overflow-x-hidden'>
      <Navbar dark />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className='relative pt-12 pb-2 lg:pt-20 lg:pb-32 overflow-hidden'>
        {/* Background effects */}
        <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/8 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/2 pointer-events-none' />

        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* Back link */}
          <Link to='/' className='inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm font-medium mb-12 transition-colors group'>
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
            Torna alla Home
          </Link>

          <div className='text-center'>
            <div className='flex justify-center mb-8'>
              <img src={logoImg} alt='Slice Nutrizione Logo' className='h-20 lg:h-28 w-auto object-contain brightness-0 invert opacity-80' />
            </div>

            {/* Doctor Photo */}
            <div className='flex justify-center mb-10'>
              <div className='relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/20'>
                <img
                  src={doctorImg}
                  alt='Dott. Paolo Panarini'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-emerald-500/20'>
              <BookOpen className='w-3.5 h-3.5' />
              Guida Completa
            </div>

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]'>
              Il Metodo<br />
              <span className='bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent'>
                S.L.I.C.E.
              </span>
            </h1>

          </div>
        </div>
      </section>

      {/* ═══════════════ 3 OBIETTIVI ═══════════════ */}
      <section className='relative overflow-hidden'>
        {/* Full-bleed dark background */}
        <div className='absolute inset-0 bg-[#070B14]' />

        {/* ── Section header ── */}
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8'>
            I 3 Obiettivi del Percorso
          </div>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-8'>
            Ecco i 3 obiettivi <br />
            <span className='bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent'>del metodo.</span>
          </h2>
          <p className='text-lg md:text-xl text-slate-300 leading-relaxed mb-6 max-w-3xl mx-auto'>
            Una trasformazione che dura non si costruisce su un unico pilastro. Se lavori solo sulla composizione corporea senza affrontare il mindset e l'educazione alimentare, prima o poi tornerai al punto di partenza. Il Metodo SLICE funziona è stato creato per affrontare <strong className='text-white font-semibold'>tutti e tre gli aspetti insieme</strong>.
          </p>
        </div>

        {/* ── Obiettivo 01 — Educazione ── */}
        <div className='relative z-10 border-t border-white/5'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16'>
            {/* Left: number + label */}
            <div className='shrink-0 flex flex-col items-start gap-3 lg:w-48'>
              <span className='text-[clamp(5rem,12vw,9rem)] font-black leading-none text-emerald-500/40 select-none -ml-2 tracking-tighter'>1</span>
              <span className='text-3xl lg:text-5xl font-black tracking-tight text-emerald-400'>Educazione</span>
              <div className='w-12 h-px bg-emerald-500/40' />
            </div>
            {/* Center: main content */}
            <div className='flex-1 min-w-0'>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-6'>
                La tua trasformazione parte <span className='text-emerald-400'>dalla clinica, non dalle ipotesi.</span>
              </p>
              <p className='text-slate-400 text-base leading-relaxed max-w-2xl'>
                Analisi del sangue, composizione corporea, quadro metabolico — tutto esaminato insieme prima di impostare qualsiasi piano. Colesterolo alto, glicemia, tiroide: nulla viene ignorato. Non si parte dal cibo, <strong className='text-slate-200 font-semibold'>si parte da te.</strong>
              </p>
            </div>

          </div>
        </div>

        {/* ── Obiettivo 02 — Mindset ── */}
        <div className='relative z-10 border-t border-white/5'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16'>
            {/* Left: number + label */}
            <div className='shrink-0 flex flex-col items-start gap-3 lg:w-48'>
              <span className='text-[clamp(5rem,12vw,9rem)] font-black leading-none text-sky-500/40 select-none -ml-2 tracking-tighter'>2</span>
              <span className='text-4xl lg:text-6xl font-black tracking-tight text-sky-400'>Mindset</span>
              <div className='w-12 h-px bg-sky-500/40' />
            </div>
            {/* Center: main content */}
            <div className='flex-1 min-w-0'>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-6'>
                Gestione dello <span className='text-sky-400'>Stress e riprogrammazione delle abitudini</span>
              </p>
              <p className='text-slate-400 text-base leading-relaxed max-w-2xl'>
                Questo non è un programma automatico. Sei una persona, non un numero. Lavoriamo insieme sui veri problemi della tua vita: lo stress, l'abitudine, le emozioni legate al cibo. Quando senti di voler mollare — e capita a tutti — sono qui per sostenerti, capire cosa sta succedendo e trovare insieme la soluzione. <strong className='text-slate-200 font-semibold'>Faccio da guida anche quando il percorso mentale diventa difficile.</strong>
              </p>
            </div>

          </div>
        </div>

        {/* ── Obiettivo 03 — Composizione Corporea ── */}
        <div className='relative z-10 border-t border-white/5'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16'>
            {/* Left: number + label */}
            <div className='shrink-0 flex flex-col items-start gap-3 lg:w-48'>
              <span className='text-[clamp(5rem,12vw,9rem)] font-black leading-none text-violet-500/40 select-none -ml-2 tracking-tighter'>3</span>
              <span className='text-3xl lg:text-5xl font-black tracking-tight text-violet-400'>Composizione Corporea</span>
              <div className='w-12 h-px bg-violet-500/40' />
            </div>
            {/* Center: main content */}
            <div className='flex-1 min-w-0'>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight mb-6'>
                Risulati visibili allo specchio.<span className='text-violet-400'> Un corpo di cui andrai fiero.</span>
              </p>
              <p className='text-slate-400 text-base leading-relaxed max-w-2xl'>
                Meno massa grassa, più massa muscolare, una silhouette che cambia in modo tangibile. <strong className='text-slate-200 font-semibold'>Quando le persone intorno a te iniziano a dirtelo, sai che il lavoro ha funzionato.</strong>
              </p>
            </div>

          </div>
          <div className='border-t border-white/5' />
        </div>
      </section>

      {/* ═══════════════ COME FUNZIONA IL PERCORSO ═══════════════ */}
      <section className='py-24 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0E1225] to-[#0B0F19]' />

        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4'>Il Percorso</h2>
            <h3 className='text-3xl md:text-5xl font-black tracking-tight mb-6'>
              Cosa succede in pratica?
            </h3>
          </div>

          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent' />

            {[
              {
                step: '01',
                title: 'Prima Visita & Analisi',
                description: 'Conosciamo la tua storia, i tuoi obiettivi e le tue abitudini. Eseguo un\'analisi della composizione corporea e valutiamo insieme il punto di partenza. Successivamente faremo un\'analisi ad ogni visita per monitorare con precisione i tuoi progressi.'
              },
              {
                step: '02',
                title: 'Piano Personalizzato & Adattabile',
                description: 'Costruisco il tuo piano alimentare su misura, basato sulle tue abitudini reali e il tuo stile di vita. Ma non è rigido: se qualcosa non funziona, lo cambiamo. Se le tue esigenze evolvono, il piano si adatta con te.'
              },
              {
                step: '03',
                title: 'Affiancamento Costante',
                description: 'Il percorso non è una linea retta: ci sono i giorni no, lo stress al lavoro, o quel momento di crisi personale — come una rottura sentimentale. A differenza dell’approccio medico tradizionale, qui non verrai mai giudicato. Il mio compito è essere presente proprio in quei momenti per gestire lo sfogo, la complicazione o la crisi. Siamo umani, non macchine. Ti offro un supporto a 360 gradi che integra la salute fisica con quella mentale, aiutandoti a rialzarti e a ritrovare l’equilibrio senza sensi di colpa.'
              },
              {
                step: '04',
                title: 'Educazione & Autonomia',
                description: 'Ti insegno a leggere le etichette, a bilanciare i pasti, a fare la spesa intelligente. Settimana dopo settimana diventi sempre più autonomo.'
              },
              {
                step: '05',
                title: 'Libertà Definitiva',
                description: 'L\'obiettivo finale è che tu non abbia più bisogno di me. Avrai le conoscenze per gestire la tua alimentazione in autonomia, per sempre.',
                isFinal: true
              }
            ].map((item, index) => (
            <React.Fragment key={index}>
              {item.isFinal && (
                /* ═══ Curved connector arrow between step 04 and step 05 ═══ */
                <div className='relative -mt-4 mb-2 md:mb-4 h-48 md:h-40 pointer-events-none select-none' aria-hidden='true'>
                  {/* Mobile: longer, more pronounced S-curve from top-center down to the card */}
                  <svg
                    className='md:hidden absolute inset-0 h-full w-full overflow-visible'
                    viewBox='0 0 200 240'
                    preserveAspectRatio='none'
                    fill='none'
                  >
                    <defs>
                      <linearGradient id='arrowGradMobile' x1='0%' y1='0%' x2='100%' y2='100%'>
                        <stop offset='0%' stopColor='#10b981' stopOpacity='0.2' />
                        <stop offset='50%' stopColor='#34d399' stopOpacity='0.9' />
                        <stop offset='100%' stopColor='#22d3ee' stopOpacity='1' />
                      </linearGradient>
                      <filter id='arrowGlowMobile'>
                        <feGaussianBlur stdDeviation='2.5' result='blur' />
                        <feMerge>
                          <feMergeNode in='blur' />
                          <feMergeNode in='SourceGraphic' />
                        </feMerge>
                      </filter>
                      <marker
                        id='arrowHeadMobile'
                        viewBox='0 0 12 12'
                        refX='10'
                        refY='6'
                        markerWidth='7'
                        markerHeight='7'
                        orient='auto-start-reverse'
                      >
                        <path d='M 0 0 L 11 6 L 0 12 z' fill='#22d3ee' />
                      </marker>
                    </defs>
                    {/* Glow halo */}
                    <path
                      d='M 100 0 C 30 70, 180 150, 100 230'
                      stroke='#10b981'
                      strokeOpacity='0.22'
                      strokeWidth='7'
                      strokeLinecap='round'
                      fill='none'
                      filter='url(#arrowGlowMobile)'
                    />
                    {/* Main long S-curve */}
                    <path
                      d='M 100 0 C 30 70, 180 150, 100 230'
                      stroke='url(#arrowGradMobile)'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeDasharray='6 6'
                      className='arrow-dash'
                      markerEnd='url(#arrowHeadMobile)'
                    />
                  </svg>

                  {/* Desktop: dramatic curve starting from the RIGHT (step 04 sits on the right) sweeping down toward center */}
                  <svg
                    className='hidden md:block absolute inset-0 w-full h-full overflow-visible'
                    viewBox='0 0 800 160'
                    preserveAspectRatio='none'
                    fill='none'
                  >
                    <defs>
                      <linearGradient id='arrowGradDesktop' x1='100%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='#10b981' stopOpacity='0.15' />
                        <stop offset='40%' stopColor='#34d399' stopOpacity='0.9' />
                        <stop offset='100%' stopColor='#22d3ee' stopOpacity='1' />
                      </linearGradient>
                      <filter id='arrowGlow'>
                        <feGaussianBlur stdDeviation='3' result='blur' />
                        <feMerge>
                          <feMergeNode in='blur' />
                          <feMergeNode in='SourceGraphic' />
                        </feMerge>
                      </filter>
                      <marker
                        id='arrowHeadDesktop'
                        viewBox='0 0 14 14'
                        refX='11'
                        refY='7'
                        markerWidth='8'
                        markerHeight='8'
                        orient='auto-start-reverse'
                      >
                        <path d='M 0 0 L 13 7 L 0 14 z' fill='#22d3ee' />
                      </marker>
                    </defs>
                    {/* Glow halo path — starts top-right, curves down toward center */}
                    <path
                      d='M 640 0 C 700 70, 280 70, 400 150'
                      stroke='#10b981'
                      strokeOpacity='0.25'
                      strokeWidth='8'
                      strokeLinecap='round'
                      fill='none'
                      filter='url(#arrowGlow)'
                    />
                    {/* Main dashed curve with auto-oriented arrowhead */}
                    <path
                      d='M 640 0 C 700 70, 280 70, 400 150'
                      stroke='url(#arrowGradDesktop)'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeDasharray='8 8'
                      fill='none'
                      className='arrow-dash'
                      markerEnd='url(#arrowHeadDesktop)'
                    />
                  </svg>

                  {/* Floating handwritten label */}
                  <span
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-300/90 text-3xl md:text-3xl font-bold rotate-[-6deg] whitespace-nowrap'
                    style={{ fontFamily: 'var(--font-handwriting), cursive' }}
                  >
                    e finalmente...
                  </span>
                </div>
              )}

              <div className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${item.isFinal ? 'premium-card overflow-hidden bg-gradient-to-br from-emerald-500/15 via-cyan-500/5 to-emerald-500/15 rounded-3xl p-8 md:p-12 border border-emerald-400/40 shadow-2xl shadow-emerald-500/30' : ''}`}>
                {/* Premium animated background for final step */}
                {item.isFinal && (
                  <>
                    {/* Rotating conic gradient halo */}
                    <div className='absolute -inset-px rounded-3xl pointer-events-none premium-rotate-glow opacity-60' />
                    {/* Shimmer sweep */}
                    <div className='absolute inset-0 rounded-3xl overflow-hidden pointer-events-none'>
                      <div className='absolute inset-y-0 -inset-x-full premium-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent' />
                    </div>
                    {/* Soft pulsing glow */}
                    <div className='absolute -top-10 -right-10 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl premium-pulse pointer-events-none' />
                    <div className='absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl premium-pulse-delay pointer-events-none' />
                    {/* Floating sparkles */}
                    <Sparkles className='absolute top-6 right-8 w-4 h-4 text-emerald-300/80 premium-float' />
                    <Sparkles className='absolute bottom-8 right-20 w-3 h-3 text-cyan-300/70 premium-float-delay' />
                    <Sparkles className='absolute top-12 left-16 w-3 h-3 text-emerald-200/60 premium-float-slow' />
                  </>
                )}

                {/* Dot */}
                <div className={`absolute ${item.isFinal ? 'left-8 md:left-1/2' : 'left-6 md:left-1/2'} -translate-x-1/2 w-3 h-3 rounded-full ${item.isFinal ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 ring-4 ring-emerald-500/50 shadow-lg shadow-emerald-500/50 premium-dot-pulse' : 'bg-emerald-500 ring-4 ring-[#0B0F19]'} z-10`} />

                {/* Content card */}
                <div ref={item.isFinal ? confettiRef : null} className={`${item.isFinal ? 'relative z-10 w-full' : ''} ${item.isFinal ? '' : `ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:w-1/2' : 'md:pl-16 md:text-left md:w-1/2 md:ml-auto'}`}`}>
                  <span className={`${item.isFinal ? 'text-emerald-300 text-base' : 'text-emerald-500 text-sm'} font-black uppercase tracking-widest`}>{item.step}</span>
                  <h4 className={`${item.isFinal ? 'text-4xl md:text-5xl premium-gradient-text' : 'text-2xl md:text-3xl text-white'} font-black mt-1 mb-3`}>
                    {item.isFinal && <Crown className='inline-block w-8 h-8 md:w-10 md:h-10 mr-2 -mt-1 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] premium-crown' />}
                    {item.title}
                  </h4>
                  <p className={`${item.isFinal ? 'text-emerald-100/90 text-lg' : 'text-slate-400 text-base'} font-light leading-relaxed`}>{item.description}</p>
                  {item.isFinal && (
                    <>
                      {/* Section divider with label */}
                      <div className='mt-10 mb-6 flex items-center gap-4'>
                        <div className='h-px flex-1 bg-gradient-to-r from-transparent via-emerald-400/40 to-emerald-400/40' />
                        <span className='text-[10px] font-black tracking-[0.25em] uppercase text-emerald-300/90'>
                          Ecco cosa saprai fare
                        </span>
                        <div className='h-px flex-1 bg-gradient-to-l from-transparent via-emerald-400/40 to-emerald-400/40' />
                      </div>

                      {/* Daily life scenes grid */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {[
                          {
                            icon: Utensils,
                            tag: 'Mangiare fuori',
                            accent: 'emerald',
                            title: 'Poter scegliere dal menù senza sensi di colpa',
                            parts: [
                              'Apri il menù e ',
                              { b: 'non cerchi la cosa con meno calorie' },
                              '. Scegli quello che ti va, perché sai esattamente come bilanciare quel pasto nei prossimi giorni. ',
                              { b: 'Goditi pasti liberi senza rinunciare alle uscite con amici.' }
                            ]
                          },
                          {
                            icon: Sunrise,
                            tag: 'Il giorno dopo un evento o serata',
                            accent: 'amber',
                            title: 'Svegliarsi dopo un grande evento senza rimpianti',
                            parts: [
                              'Ti svegli dopo una cena abbondante o un matrimonio. Invece di sentirti in colpa o digiunare per "punizione", ',
                              { b: 'sai esattamente cosa mangiare per riequilibrarti' },
                              '. ',
                              { b: 'Hai il controllo, non la paura.' }
                            ]
                          },
                          {
                            icon: Plane,
                            tag: 'Viaggiare Leggeri',
                            accent: 'cyan',
                            title: 'Mangiare in base a dove ti trovi senza stressarti',
                            parts: [
                              'Sei in vacanza in un posto nuovo. Ami assaggiare cose nuove e non sai in anticipo cosa mangerai?  ',
                              { b: 'Riesci a inserire lo strappo alla regola mangiando tranquillamente ad occhio,' },
                              ' e al ritorno dalla vacanza sarai in ottima forma. La flessibilità rende la dieta sostenibile.'
                            ]
                          },
                          {
                            icon: Moon,
                            tag: 'Routine Notturna',
                            accent: 'indigo',
                            title: 'Conoscere i pasti da non abbinare per riposare davvero',
                            parts: [
                              'Evita abbinamenti pesanti la sera. ',
                              { b: 'Quando sai come digerire correttamente' },
                              ', il tuo riposo migliora significativamente e ',
                              { b: 'ti svegli pieno di energia' },
                              ' e pronto per affrontare la giornata.'
                            ]
                          }
                        ].map((scene, i) => (
                          <div key={i} className={`group relative bg-[#06090e]/60 border border-white/5 rounded-2xl p-5 hover:bg-[#06090e]/80 hover:border-${scene.accent}-500/20 transition-all duration-300 flex flex-col`}>
                            <div className='flex items-center gap-3 mb-3'>
                              <div className={`w-8 h-8 rounded-lg bg-${scene.accent}-500/10 flex items-center justify-center shrink-0`}>
                                <scene.icon className={`w-4 h-4 text-${scene.accent}-400`} />
                              </div>
                              <span className={`text-[10px] font-black uppercase tracking-wider text-${scene.accent}-400/80`}>{scene.tag}</span>
                            </div>
                            <h5 className='text-sm font-bold text-white mb-2 leading-tight'>{scene.title}</h5>
                            <p className='text-xs text-slate-400 font-light leading-relaxed flex-1'>
                              {scene.parts.map((p, j) => p.b ? <strong key={j} className='text-slate-200 font-medium'>{p.b}</strong> : p)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className='mt-8 pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4'>
                        <div className='flex items-center gap-3 w-full sm:w-auto'>
                          <div className='w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]'>
                            <Eye className='w-5 h-5 text-emerald-400' />
                          </div>
                          <div>
                            <p className='text-sm text-emerald-300 font-bold'>Il vero traguardo</p>
                            <p className='text-xs text-emerald-100/60'>Diventare il dietista di te stesso</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PERCHÉ LE DIETE FALLISCONO ═══════════════ */}
      <section className='py-24 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0E1225] to-[#0B0F19]' />

        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-bold text-red-400 uppercase tracking-[0.3em] mb-4'>Il Problema</h2>
            <h3 className='text-3xl md:text-5xl font-black tracking-tight mb-6'>
              Perché le diete <span className='text-red-400'>falliscono</span>?
            </h3>
            <p className='text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed'>
              Nel corso della mia pratica clinica ho individuato 3 fattori critici che determinano l'abbandono delle diete. Il Metodo SLICE nasce per risolverli tutti.
            </p>
          </div>

          <div className='space-y-8'>
            {failureReasons.map((reason, index) => (
              <div key={index} className='group relative'>
                <div className='bg-[#0D121F] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-red-500/20 transition-all duration-500 overflow-hidden'>
                  {/* Large number background */}
                  <div className='absolute -top-4 -right-2 text-[120px] font-black text-white/[0.02] select-none leading-none'>{reason.number}</div>

                  <div className='flex flex-col md:flex-row gap-8 items-start'>
                    <div className='w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors'>
                      {reason.icon}
                    </div>

                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-1'>
                        <span className='text-red-400/60 text-xs font-black uppercase tracking-widest'>{reason.number}</span>
                      </div>
                      <h4 className='text-2xl font-black text-white mb-1'>{reason.title}</h4>
                      <p className='text-sm text-slate-500 font-medium mb-4'>{reason.subtitle}</p>
                      <p className='text-slate-400 font-light leading-relaxed mb-5'>{reason.description}</p>

                      {/* Solution */}
                      <div className='flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4'>
                        <CheckCircle2 className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5' />
                        <p className='text-emerald-300 text-sm font-medium leading-relaxed'>{reason.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ I 5 PILASTRI S.L.I.C.E. ═══════════════ */}
      <section className='py-24 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none' />

        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4'>La Soluzione</h2>
            <h3 className='text-3xl md:text-5xl font-black tracking-tight mb-6'>
              I 5 Pilastri del Metodo
            </h3>
            <p className='text-lg text-slate-400 font-light max-w-2xl mx-auto'>
              Ogni lettera rappresenta un principio fondamentale del percorso. Insieme, formano un sistema completo e scientificamente validato.
            </p>
          </div>

          <div className='space-y-12'>
            {pillars.map((pillar, index) => {
              const colors = colorMap[pillar.color]
              const isEven = index % 2 === 0

              return (
                <div key={pillar.letter} className='group'>
                  <div className={`relative bg-[#0D121F] border border-white/5 rounded-3xl overflow-hidden hover:${colors.border} transition-all duration-500`}>
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${colors.accent} opacity-50`} />

                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                      {/* Letter/Icon Side */}
                      <div className={`lg:w-1/3 ${colors.bg} flex flex-col items-center justify-center p-10 lg:p-14 relative overflow-hidden`}>
                        <div className={`absolute text-[200px] font-black ${colors.text} opacity-[0.07] select-none leading-none`}>
                          {pillar.letter}
                        </div>
                        <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 relative z-10`}>
                          {pillar.icon}
                        </div>
                        <div className={`text-6xl md:text-7xl font-black ${colors.text} relative z-10`}>
                          {pillar.letter}
                        </div>
                        <span className={`text-xs font-black uppercase tracking-widest ${colors.text} mt-2 relative z-10`}>
                          {pillar.tagline}
                        </span>
                      </div>

                      {/* Content Side */}
                      <div className='lg:w-2/3 p-8 md:p-12 flex flex-col justify-center'>
                        <div className={`inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full ${colors.pill} text-[10px] font-black uppercase tracking-widest mb-5`}>
                          Pilastro {index + 1}
                        </div>
                        <h4 className='text-3xl md:text-4xl font-black text-white mb-5 tracking-tight'>
                          {pillar.title}
                        </h4>
                        <p className='text-slate-400 font-light leading-relaxed text-base mb-8'>
                          {pillar.description}
                        </p>
                        <div className='space-y-3'>
                          {pillar.points.map((point, i) => (
                            <div key={i} className='flex items-center gap-3'>
                              <CheckCircle2 className={`w-5 h-5 ${colors.check} shrink-0`} />
                              <span className='text-sm text-slate-300 font-medium'>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CITAZIONE ═══════════════ */}
      <section className='py-20 relative'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
          <div className='bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl border border-emerald-500/10 p-12 md:p-16'>
            <Sparkles className='w-8 h-8 text-emerald-400 mx-auto mb-6' />
            <blockquote className='text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-8'>
              "Non voglio darti un piano da seguire per 3 mesi. Voglio insegnarti a mangiare bene per il <span className='text-emerald-400 font-semibold not-italic'>resto della tua vita</span>."
            </blockquote>
            <div className='flex items-center justify-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-black'>PP</div>
              <div className='text-left'>
                <p className='text-white font-bold text-sm'>Dott. Paolo Panarini</p>
                <p className='text-slate-500 text-xs'>Dietista & Nutrizionista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINALE ═══════════════ */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent' />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none' />

        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
          <h2 className='text-3xl md:text-5xl font-black tracking-tight mb-6'>
            Pronto a cambiare le regole?
          </h2>
          <p className='text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed'>
            Il primo passo è una visita conoscitiva. Nessun impegno, nessun pagamento anticipato. Scopriamo insieme se il Metodo SLICE è adatto a te.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href={SOCIAL_LINKS.miodottore}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5'
            >
              <img src={mioDottoreLogo} alt='' className='w-10 h-6 object-contain brightness-0 invert' />
              Prenota la tua visita
              <ChevronRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
            </a>

            <Link
              to='/'
              className='inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors'
            >
              <ArrowLeft className='w-4 h-4' />
              Torna alla Home
            </Link>
          </div>

          <div className='flex items-center justify-center gap-2 mt-6'>
            <CheckCircle2 className='w-4 h-4 text-emerald-500' />
            <span className='text-xs text-slate-500 font-medium'>Nessun pagamento anticipato richiesto</span>
          </div>
        </div>
      </section>
    </div>
  )
}
