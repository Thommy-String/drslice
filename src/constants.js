// Costanti globali del sito
export const DOCTOR_INFO = {
  name: "Dott. Paolo Panarini",
  role: "Biologo Nutrizionista",
  phone: "+393408964979",
  phoneDisplay: "340 896 4979",
  email: "paolo.panarini@email.it", // Da verificare
  whatsappMsg: "Buongiorno Dott. Panarini, vorrei richiedere informazioni per una visita nutrizionale.",
};

export const LOCATIONS = [
  {
    name: "Studio Privato Panarini",
    address: "Viale Trieste 40, Tivoli 00019",
    city: "Tivoli",
    type: "Studio Medico",
    phone: DOCTOR_INFO.phone,
    mapsUrl: "https://maps.app.goo.gl/TXZbjLiGXC7uXG5z5",
    isPrivate: true
  },
  {
    name: "Fisioera",
    address: "Via San Polo dei Cavalieri 34, Roma",
    city: "Roma",
    type: "Centro Fisioterapico",
    phone: "+39064112211",
    mapsUrl: "https://maps.app.goo.gl/dENrZ75izvWsVLBP8",
    isPrivate: false
  },
  {
    name: "Farmacia Fabbri",
    address: "Via Salaria 1434, Roma 00138",
    city: "Settebagni (RM)",
    type: "Farmacia",
    phone: "+39068889410",
    mapsUrl: "https://maps.app.goo.gl/2e6Mikbg4s5b9QDz5",
    isPrivate: false
  },
  {
    name: "Parafarmacia NaturalFarma",
    address: "Viale dell'Unione 43, Guidonia Montecelio 00012",
    city: "Guidonia",
    type: "Parafarmacia",
    phone: "+390774300300",
    mapsUrl: "https://maps.app.goo.gl/FhHzFg8cML6V5naFA",
    isPrivate: false
  }
];

export const SERVICES = [
  // ── IN STUDIO ──
  { 
    name: "Prima visita nutrizionale", 
    price: "100 € - 120 €", 
    category: "In Studio",
    group: "Percorso Base",
    description: "L'inizio del tuo cambiamento. Un incontro approfondito per definire la rotta verso il tuo benessere.",
    duration: "60 min",
    featured: true,
    target: "Ideale per chi vuole iniziare un percorso serio e personalizzato.",
    details: {
      cosè: "La prima visita è un colloquio approfondito in cui il Dottore analizza il tuo stato di salute, le tue abitudini alimentari e il tuo stile di vita. Non è una semplice pesata: è il punto di partenza per costruire un percorso nutrizionale cucito su misura per te.",
      comeFunziona: "Nella prima parte si raccoglie l'anamnesi completa (patologie, farmaci, storia del peso, allergie). Si passa poi alle misurazioni: peso, circonferenze e analisi della composizione corporea tramite BIA professionale. Infine si definiscono insieme gli obiettivi e il piano alimentare personalizzato viene consegnato entro 5 giorni lavorativi.",
      benefici: [
        "Quadro completo del tuo stato nutrizionale e metabolico",
        "Piano alimentare 100% personalizzato sulle tue esigenze",
        "Analisi BIA della composizione corporea inclusa",
        "Obiettivi chiari, realistici e misurabili",
        "Supporto continuo dal primo giorno"
      ]
    },
    features: [
      "Anamnesi patologica e fisiologica",
      "Valutazione abitudini alimentari",
      "Rilevazione misure antropometriche",
      "Analisi composizione corporea (BIA)",
      "Consegna piano alimentare entro 5gg"
    ]
  },
  { 
    name: "Visita di controllo", 
    price: "50 € - 60 €", 
    category: "In Studio",
    group: "Percorso Base",
    description: "Il motore della costanza. Monitoriamo i progressi e affiniamo la strategia per restare in scia.",
    duration: "30 min",
    target: "Per chi ha già effettuato la prima visita e vuole mantenere i risultati.",
    features: [
      "Monitoraggio peso e circonferenze",
      "Revisione dello schema alimentare",
      "Rilevazione BIA di controllo",
      "Supporto motivazionale continuo",
      "Aggiustamenti basati sul feedback"
    ]
  },
  { 
    name: "Educazione alimentare", 
    price: "60 € - 70 €", 
    category: "In Studio",
    group: "Percorso Formativo",
    description: "Impara a gestire la tua alimentazione con consapevolezza, senza piano alimentare. Pura conoscenza applicata.",
    duration: "60 min",
    target: "Chi vuole capire come funziona la nutrizione e imparare a mangiare bene in autonomia.",
    note: "Non prevede il rilascio di un piano alimentare.",
    features: [
      "Insegnamento lettura delle etichette",
      "Pianificazione dei pasti settimanali",
      "Gestione della spesa intelligente",
      "Approccio intuitivo senza restrizioni rigide",
      "Materiale didattico in OMAGGIO"
    ]
  },
  { 
    name: "Piano Allenamento su Misura", 
    price: "Su Preventivo", 
    category: "In Studio",
    group: "Training",
    description: "Sinergia perfetta tra nutrizione e movimento. Un programma di allenamento cucito addosso alle tue esigenze.",
    duration: "30 min",
    target: "Per chi vuole massimizzare i risultati estetici e di salute abbinando l'esercizio fisico corretto alla dieta.",
    features: [
      "Valutazione della mobilità articolare",
      "Test di forza e resistenza iniziali",
      "Programmazione periodizzata mensile",
      "Video tutorial per ogni esercizio",
      "Integrazione con il piano alimentare"
    ]
  },

  // ── A DOMICILIO ──
  { 
    name: "Prima visita a domicilio", 
    price: "120 € - 150 €", 
    category: "A Domicilio",
    group: "Domiciliare",
    description: "La professionalità del nutrizionista comodamente a casa tua. Stessa qualità dello studio, nel tuo ambiente.",
    duration: "60 min",
    target: "Persone a mobilità ridotta, neo-mamme o chi preferisce l'intimità domestica.",
    features: [
      "Visita nutrizionale completa a casa tua",
      "Valutazione della dispensa domestica",
      "Consigli pratici su cucina e bilance",
      "Analisi antropometriche portatili",
      "Stesso standard qualitativo dello studio"
    ]
  },
  { 
    name: "Controllo a domicilio", 
    price: "60 € - 80 €", 
    category: "A Domicilio",
    group: "Domiciliare",
    description: "Monitoraggio dei progressi senza spostarti da casa. Follow-up professionale nel tuo comfort.",
    duration: "30 min",
    target: "Per chi ha già effettuato la prima visita a domicilio e vuole continuare il percorso comodamente.",
    features: [
      "Monitoraggio peso e circonferenze",
      "Revisione e aggiustamento del piano",
      "Rilevazione BIA portatile di controllo",
      "Supporto motivazionale continuo",
      "Feedback e strategie personalizzate"
    ]
  },

  // ── ONLINE ──
  { 
    name: "Percorso Online", 
    price: "Su Preventivo", 
    category: "Online",
    group: "Smart",
    description: "Il tuo percorso nutrizionale completo, ovunque tu sia. Con formula di pagamento flessibile.",
    duration: "60 min",
    target: "Lavoratori fuori sede, studenti o chi preferisce la comodità del digitale.",
    note: "Disponibile con pagamento mensile, semestrale o annuale anticipato.",
    features: [
      "Videochiamata HD su piattaforma sicura",
      "Analisi del diario alimentare",
      "Valutazione obiettivi a distanza",
      "Invio kit per auto-rilevazioni",
      "Piano alimentare digitale incluso"
    ]
  },
  { 
    name: "Allenamento Online", 
    price: "Su Preventivo", 
    category: "Online",
    group: "Training",
    description: "Il tuo trainer digitale sempre con te. Un programma di allenamento professionale accessibile da ovunque.",
    duration: "30 min",
    target: "Per chi si allena a casa o in palestra e vuole una guida tecnica esperta a distanza.",
    features: [
      "Video-call di valutazione tecnica",
      "Scheda digitale interattiva",
      "Check settimanali via chat/video",
      "Correzione dell'esecuzione tramite video",
      "Adattamento costante in base ai feedback"
    ]
  },

  // ── DIETE SPECIALISTICHE ──
  { 
    name: "Nutrizione Sportiva", 
    price: "Su Preventivo", 
    category: "Diete",
    group: "Performance",
    description: "Ottimizza il carburante per il tuo motore. Per chi non si accontenta di partecipare.",
    duration: "60 min",
    target: "Atleti agonisti, amatori evoluti e sportivi di endurance.",
    features: [
      "Piani pre/intra/post workout",
      "Strategie di integrazione mirata",
      "Gestione del peso categoria (sport da combattimento)",
      "Ottimizzazione del recupero muscolare",
      "Protocolli per gare e competizioni"
    ]
  },
  { 
    name: "Diete Cliniche", 
    price: "Su Preventivo", 
    category: "Diete",
    group: "Clinical",
    description: "La nutrizione come terapia. Percorsi mirati per la gestione nutrizionale di patologie diagnosticate.",
    duration: "60 min",
    target: "Persone con Diabete, Colon Irritabile (FODMAP), Celiachia o Intolleranze.",
    features: [
      "Supporto nutrizionale per patologie IG",
      "Gestione sindrome metabolica",
      "Protocolli anti-infiammatori",
      "Educazione alimentare terapeutica",
      "Coordinamento con il medico curante"
    ]
  },
  { 
    name: "Dieta Chetogenica", 
    price: "Su Preventivo", 
    category: "Diete",
    group: "Keto",
    description: "Protocolli VLCKD (Very Low Calorie Ketogenic Diet) per un reset metabolico rapido e controllato.",
    duration: "60 min",
    target: "Pazienti con obesità, insulino-resistenza o che necessitano di un dimagrimento rapido pre-intervento.",
    details: {
      cosè: "La dieta chetogenica è un protocollo alimentare a bassissimo contenuto di carboidrati e alto contenuto di grassi che induce il corpo a utilizzare i grassi come fonte primaria di energia, producendo corpi chetonici al posto del glucosio.",
      comeFunziona: "Riducendo drasticamente i carboidrati (sotto i 20-50g/giorno), il fegato converte i grassi in corpi chetonici che diventano il carburante principale per cervello e muscoli. Il Dottore monitora costantemente i livelli di chetosi tramite analisi specifiche, gestendo ogni fase: induzione, mantenimento e reintroduzione graduale dei carboidrati.",
      benefici: [
        "Perdita di massa grassa rapida preservando la massa muscolare",
        "Riduzione significativa della fame e degli attacchi di appetito",
        "Miglioramento della sensibilità insulinica e del profilo glicemico",
        "Riduzione dei trigliceridi e miglioramento del profilo lipidico",
        "Effetto anti-infiammatorio sistemico",
        "Maggiore lucidità mentale e stabilità energetica"
      ]
    },
    features: [
      "Protocolli VLCKD scientificamente validati",
      "Monitoraggio dei corpi chetonici",
      "Gestione della transizione e reintroduzione",
      "Integrazione specifica per chetosi",
      "Supporto costante durante la fase d'urto"
    ]
  },

  // ── DIAGNOSTICA ──
  { 
    name: "Analisi BIA Avanzata", 
    price: "35 € - 40 €", 
    category: "Diagnostica",
    group: "Check-up",
    description: "Oltre il semplice peso. Scopri di cosa è fatto veramente il tuo corpo.",
    duration: "15 min",
    target: "Chi vuole monitorare massa magra, grassa e stato di idratazione.",
    features: [
      "Analisi Akern® BIA 101 New Edition",
      "Valutazione Acqua Intracellulare",
      "Stima della Massa Muscolare Scheletrica",
      "Analisi del Metabolismo Basale",
      "Report cartaceo/digitale immediato"
    ]
  }
];

export const NAV_LINKS = [
  { label: "Il Metodo", href: "#metodo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Dove Ricevo", href: "#sedi" },
  { label: "Recensioni", href: "#recensioni" },
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dr.slice_/",
  facebook: "https://www.facebook.com/SliceNutrizione/?locale=it_IT",
  miodottore: "https://www.miodottore.it/paolo-panarini/nutrizionista/tivoli"
};
