// Costanti globali del sito
export const DOCTOR_INFO = {
  name: 'Dott. Paolo Panarini',
  role: 'Biologo Nutrizionista',
  phone: '+393408964979',
  phoneDisplay: '340 896 4979',
  email: 'paolo.panarini@email.it', // Da verificare
  whatsappMsg: 'Buongiorno Dott. Panarini, vorrei richiedere informazioni per una visita nutrizionale.'
}

export const LOCATIONS = [
  {
    name: 'Studio Privato Panarini',
    address: 'Viale Trieste 40, Tivoli 00019',
    city: 'Tivoli',
    type: 'Studio Medico',
    phone: DOCTOR_INFO.phone,
    mapsUrl: 'https://maps.app.goo.gl/TXZbjLiGXC7uXG5z5',
    isPrivate: true
  },
  {
    name: 'Fisioera',
    address: 'Via San Polo dei Cavalieri 34, Roma',
    city: 'Roma',
    type: 'Centro Fisioterapico',
    phone: '+39064112211',
    mapsUrl: 'https://maps.app.goo.gl/dENrZ75izvWsVLBP8',
    isPrivate: false
  },
  {
    name: 'Farmacia Fabbri',
    address: 'Via Salaria 1434, Roma 00138',
    city: 'Settebagni (RM)',
    type: 'Farmacia',
    phone: '+39068889410',
    mapsUrl: 'https://maps.app.goo.gl/2e6Mikbg4s5b9QDz5',
    isPrivate: false
  },
  {
    name: 'Parafarmacia NaturalFarma',
    address: "Viale dell'Unione 43, Guidonia Montecelio 00012",
    city: 'Guidonia',
    type: 'Parafarmacia',
    phone: '+390774300300',
    mapsUrl: 'https://maps.app.goo.gl/FhHzFg8cML6V5naFA',
    isPrivate: false
  }
]

export const SERVICES = [
  // ── IN STUDIO ──
  {
    name: 'Prima visita nutrizionale',
    price: '100 € - 120 €',
    category: 'In Studio',
    group: 'Percorso Base',
    description: "L'inizio del tuo cambiamento. Un incontro approfondito per definire la rotta verso il tuo benessere.",
    duration: '60 min',
    featured: true,
    target: 'Ideale per chi vuole iniziare un percorso serio e personalizzato.',
    details: {
      cosè: 'La prima visita è un colloquio approfondito in cui il Dottore analizza il tuo stato di salute, le tue abitudini alimentari e il tuo stile di vita. Non è una semplice pesata: è il punto di partenza per costruire un percorso nutrizionale cucito su misura per te.',
      comeFunziona: "Nella prima parte si raccoglie l'anamnesi completa (patologie, farmaci, storia del peso, allergie). Si passa poi alle misurazioni: peso, circonferenze e analisi della composizione corporea tramite BIA professionale. Infine si definiscono insieme gli obiettivi e il piano alimentare personalizzato viene consegnato entro 5 giorni lavorativi.",
      benefici: [
        'Quadro completo del tuo stato nutrizionale e metabolico',
        'Piano alimentare 100% personalizzato sulle tue esigenze',
        'Analisi BIA della composizione corporea inclusa',
        'Obiettivi chiari, realistici e misurabili',
        'Supporto continuo dal primo giorno'
      ]
    },
    features: [
      'Anamnesi patologica e fisiologica',
      'Valutazione abitudini alimentari',
      'Rilevazione misure antropometriche',
      'Analisi composizione corporea (BIA)',
      'Consegna piano alimentare entro 5gg'
    ]
  },
  {
    name: 'Visita di controllo',
    price: '50 € - 60 €',
    category: 'In Studio',
    group: 'Percorso Base',
    description: 'Il motore della costanza. Monitoriamo i progressi. Eseguita ogni 3 settimane.',
    duration: '30 min',
    target: 'Per chi ha già effettuato la prima visita e vuole mantenere i risultati. Ogni 21 giorni.',
    features: [
      'Monitoraggio peso e circonferenze',
      'Revisione dello schema alimentare',
      'Rilevazione BIA di controllo',
      'Supporto motivazionale continuo',
      'Aggiustamenti basati sul feedback',
      'Ogni 3 settimane'
    ]
  },
  {
    name: 'Educazione Alimentare',
    price: '60 € - 70 €',
    category: 'In Studio',
    group: 'Percorso Formativo',
    description: 'La bussola per chi non ha bisogno di una dieta, ma di risposte. Una sessione intensiva per eliminare i falsi miti, ottimizzare i tuoi piatti e smettere di procedere per tentativi.',
    duration: '60 min',
    target: "Per chi sta già bene ma vuole chiarezza su dibbi come ad es. abbinamento cibi o fare la spesa senza l'ansia di sbagliare.",
    note: 'Focus su autonomia e conoscenza. Non prevede il rilascio di un piano alimentare pesato.',
    features: [
      'Abbinamenti strategici (per evitare pesantezza e cali di energia)',
      'Fact-checking nutrizionale: eliminiamo i dubbi su cosa fa bene o male',
      'Decodifica delle etichette: impara a leggere oltre il marketing',
      'La spesa ottimizzata: organizzare la dispensa per mangiare sano in 10 minuti',
      'Risposte dirette alle tue curiosità (integratori, superfood, falsi miti)'
    ]
  },
  {
    name: 'Piano Allenamento su Misura',
    price: 'Prezzo su misura',
    category: 'In Studio',
    group: 'Training',
    description: 'Sinergia perfetta tra nutrizione e movimento. Un programma di allenamento cucito addosso alle tue esigenze.',
    duration: '30 min',
    target: "Per chi vuole massimizzare i risultati estetici e di salute abbinando l'esercizio fisico corretto alla dieta.",
    features: [
      'Valutazione della mobilità articolare',
      'Programmazione periodizzata mensile',
      'Feedback e correzione su tecnica di esecuzione esercizi',
      'Anche allenamenti a casa con attrezzatura limitata'
    ]
  },

  // ── A DOMICILIO ──
  {
    name: 'Prima visita a domicilio',
    price: '120 € - 150 €',
    category: 'A Domicilio',
    group: 'Domiciliare',
    description: 'La professionalità del nutrizionista comodamente a casa tua. Stessa qualità dello studio, nel tuo ambiente.',
    duration: '60 min',
    target: "Persone a mobilità ridotta, neo-mamme o chi preferisce l'intimità domestica.",
    features: [
      'Visita nutrizionale completa a casa tua',
      'Valutazione della dispensa domestica',
      'Consigli pratici su cucina e bilance',
      'Analisi antropometriche portatili',
      'Stesso standard qualitativo dello studio'
    ]
  },
  {
    name: 'Controllo a domicilio',
    price: '60 € - 80 €',
    category: 'A Domicilio',
    group: 'Domiciliare',
    description: 'Monitoraggio dei progressi senza spostarti da casa. Follow-up professionale nel tuo comfort.',
    duration: '30 min',
    target: 'Per chi ha già effettuato la prima visita a domicilio e vuole continuare il percorso comodamente.',
    features: [
      'Monitoraggio peso e circonferenze',
      'Revisione e aggiustamento del piano',
      'Rilevazione BIA portatile di controllo',
      'Supporto motivazionale continuo',
      'Feedback e strategie personalizzate'
    ]
  },

  // ── ONLINE ──
  {
    name: 'Percorso Online',
    price: 'Prezzo su Misura',
    category: 'Online',
    group: 'Smart',
    description: 'Il tuo percorso nutrizionale completo, ovunque tu sia. Con visita di controllo ogni 3 settimane.',
    duration: '60 min',
    target: 'Lavoratori fuori sede, studenti o chi preferisce la comodità del digitale.',
    note: 'Disponibile con pagamento mensile, semestrale o annuale anticipato.',
    features: [
      'Videochiamata su piattaforma sicura',
      'Analisi del diario alimentare',
      'Valutazione obiettivi a distanza',
      'Tutorial PDF come misurare a casa',
      'Piano alimentare digitale incluso',
      'Monitoraggio progressi con foto'
    ]
  },
  {
    name: 'Allenamento Online',
    price: 'Prezzo su Misura',
    category: 'Online',
    group: 'Training',
    description: 'Il tuo trainer digitale sempre con te. Un programma di allenamento professionale accessibile da ovunque.',
    duration: '30 min',
    target: 'Per chi si allena a casa o in palestra e vuole una guida tecnica esperta a distanza.',
    features: [
      'Video-call di valutazione tecnica',
      'Check settimanali via chat/video',
      "Correzione dell'esecuzione tramite video",
      'Adattamento mensile costante in base ai feedback',
      'Monitoriaggio progressi con foto'
    ]
  },

  // ── DIETE SPECIALISTICHE ──
  {
    name: 'Nutrizione Sportiva',
    price: 'Prezzo su Misura',
    category: 'Diete',
    group: 'Performance',
    description: 'Ottimizza il carburante per il tuo motore. Per chi non si accontenta di partecipare.',
    duration: '60 min',
    target: 'Atleti agonisti, amatori evoluti e sportivi di endurance.',
    features: [
      'Piani pre/intra/post workout',
      'Strategie di integrazione mirata',
      'Gestione del peso categoria (sport da combattimento)',
      'Ottimizzazione del recupero muscolare',
      'Protocolli per gare e competizioni'
    ]
  },
  {
    name: 'Diete Cliniche',
    price: 'Prezzo su Misura',
    category: 'Diete',
    group: 'Clinical',
    description: 'La nutrizione come terapia. Percorsi mirati per la gestione nutrizionale di patologie diagnosticate.',
    duration: '60 min',
    target: 'Persone con Diabete, Colon Irritabile (FODMAP), Celiachia o Intolleranze.',
    details: {
      cosè: 'Le diete cliniche sono percorsi nutrizionali costruiti specificamente per gestire patologie diagnosticate come diabete, sindrome metabolica, celiachia, intolleranze alimentari e disturbi intestinali. Non è nutrizione generica: è terapia alimentare basata su evidenze scientifiche.',
      comeFunziona: "Ogni patologia richiede un approccio diverso. Si parte con un'analisi approfondita dei tuoi referti clinici, della tua storia medica e dei farmaci che assumi. Il piano viene costruito per supportare (e spesso ridurre la necessità) della terapia farmacologica, coordinandosi sempre con il tuo medico curante.",
      benefici: [
        'Controllo della patologia senza dipendenza da farmaci',
        'Riduzione dei sintomi già nelle prime settimane',
        'Miglioramento dei marcatori clinici (glicemia, colesterolo, infiammazione)',
        'Qualità della vita significativamente migliore',
        'Prevenzione delle complicanze future'
      ]
    },
    features: [
      'Supporto nutrizionale per patologie IG',
      'Gestione sindrome metabolica',
      'Protocolli anti-infiammatori',
      'Educazione alimentare terapeutica',
      'Coordinamento con il medico curante'
    ]
  },
  {
    name: 'Dieta Chetogenica',
    price: 'Prezzo su Misura',
    category: 'Diete',
    group: 'Keto',
    description: 'Protocolli VLCKD (Very Low Calorie Ketogenic Diet) per un reset metabolico rapido e controllato.',
    duration: '60 min',
    target: 'Pazienti con obesità, insulino-resistenza o che necessitano di un dimagrimento rapido pre-intervento.',
    details: {
      cosè: 'La dieta chetogenica è un protocollo alimentare a bassissimo contenuto di carboidrati e alto contenuto di grassi che induce il corpo a utilizzare i grassi come fonte primaria di energia, producendo corpi chetonici al posto del glucosio.',
      comeFunziona: 'Riducendo drasticamente i carboidrati (sotto i 20-50g/giorno), il fegato converte i grassi in corpi chetonici che diventano il carburante principale per cervello e muscoli. Il Dottore monitora costantemente i livelli di chetosi tramite analisi specifiche, gestendo ogni fase: induzione, mantenimento e reintroduzione graduale dei carboidrati.',
      benefici: [
        'Perdita di massa grassa rapida preservando la massa muscolare',
        'Riduzione significativa della fame e degli attacchi di appetito',
        'Miglioramento della sensibilità insulinica e del profilo glicemico',
        'Riduzione dei trigliceridi e miglioramento del profilo lipidico',
        'Effetto anti-infiammatorio sistemico',
        'Maggiore lucidità mentale e stabilità energetica'
      ]
    },
    features: [
      'Protocolli VLCKD scientificamente validati',
      'Monitoraggio dei corpi chetonici',
      'Gestione della transizione e reintroduzione',
      'Integrazione specifica per chetosi',
      "Supporto costante durante la fase d'urto"
    ]
  },

  // ── DIAGNOSTICA ──
  {
    name: 'Analisi Composizione Corporea',
    price: '35 € - 40 €',
    category: 'Diagnostica',
    group: 'Check-up Professionale',
    description: 'Smetti di guardare solo il peso. Ottieni una mappatura scientifica completa per capire esattamente come sta cambiando il tuo corpo, dentro e fuori.',
    duration: '20 min',
    target: 'Chi vuole monitorare i risultati reali: perdita di grasso, crescita muscolare e stato di idratazione.',
    note: 'Il check-up più accurato per chi cerca dati certi e non stime approssimative.',
    details: {
      cosè: "La composizione corporea è la suddivisione del tuo peso tra massa muscolare, massa grassa, acqua e minerali. La BIA (Bioimpedenziometria) è il metodo Gold Standard per misurarla con precisione scientifica, attraverso l'invio di una corrente elettrica alternata di bassa intensità che rileva la resistenza dei tessuti.",
      comeFunziona: 'Indossi due elettrodi su polso e caviglia di una mano e un piede. La macchina invia una corrente impercettibile che misura quanto tempo impiega a attraversare il corpo. Da questo dato, calcola la composizione corporea completa: quanto muscolo hai, quanto grasso, quanta acqua. Tutto in 3 minuti, senza dolore.',
      benefici: [
        'Scopri esattamente quanto grasso stai perdendo (non solo peso)',
        "Monitora la crescita muscolare durante l'allenamento",
        'Identifica la disidratazione prima che diventi un problema',
        'Stima precisa del tuo metabolismo basale',
        'Report dettagliato chiaro'
      ]
    },
    features: [
      'Bioimpedenziometria ® BIA (Gold Standard)',
      'Mappatura Antropometrica completa (Vita, Addome, Fianchi, Braccia, Gambe)',
      'Analisi dei fluidi: Idratazione, Ritenzione e Acqua Intracellulare',
      'Valutazione della Massa Muscolare Scheletrica e Grasso Viscerale',
      'Stima precisa del Metabolismo Basale',
      'Consegna Report Grafico dettagliato'
    ]
  }
]

export const NAV_LINKS = [
  { label: 'Il Metodo', href: '#metodo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Dove Ricevo', href: '#sedi' },
  { label: 'Recensioni', href: '#recensioni' }
]

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/dr.slice_/',
  facebook: 'https://www.facebook.com/SliceNutrizione/?locale=it_IT',
  miodottore: 'https://www.miodottore.it/paolo-panarini/nutrizionista/tivoli'
}
