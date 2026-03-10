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
  },
  {
    name: "Centro Medico Colaiaco",
    address: "Via dei Monti Tiburtini 572, Roma 00157",
    city: "Roma",
    type: "Poliambulatorio",
    phone: "+390645472000",
    mapsUrl: "https://maps.app.goo.gl/XXGtMjD1tNwowWRh8",
    isPrivate: false
  }
];

export const SERVICES = [
  { 
    name: "Prima visita nutrizionale", 
    price: "100 € - 120 €", 
    category: "In Studio",
    group: "Percorso Base",
    description: "L'inizio del tuo cambiamento. Un incontro approfondito per definire la rotta verso il tuo benessere.",
    duration: "60-90 min",
    featured: true,
    target: "Ideale per chi vuole iniziare un percorso serio e personalizzato.",
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
    price: "50 €", 
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
    name: "Consulenza online", 
    price: "50 €", 
    category: "Digitale",
    group: "Smart",
    description: "La flessibilità della tecnologia al servizio della tua salute. Ovunque tu sia.",
    duration: "45 min",
    target: "Ideale per lavoratori fuori sede, studenti o chi ha poco tempo.",
    features: [
      "Videochiamata HD su piattaforma sicura",
      "Analisi del diario alimentare",
      "Valutazione obiettivi a distanza",
      "Invio kit per auto-rilevazioni",
      "Piano alimentare digitale incluso"
    ]
  },
  { 
    name: "Nutrizione Sportiva", 
    price: "Su Preventivo", 
    category: "Specialistica",
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
    category: "Specialistica",
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
    name: "Analisi BIA Avanzata", 
    price: "35 €", 
    category: "Diagnostica",
    group: "Check-up",
    description: "Oltre il semplice peso. Scopri di cosa è fatto veramente il tuo corpo.",
    duration: "20 min",
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
  instagram: "https://instagram.com/dott.paolopanarini",
  facebook: "https://facebook.com/dott.paolopanarini",
  miodottore: "https://www.miodottore.it/paolo-panarini/nutrizionista/tivoli"
};
