import { Language } from '../types';

export interface TranslationStrings {
  appName: string;
  appSubtitle: string;
  sanctuaryDesc: string;
  navGabriel: string;
  navRefuge: string;
  navOracle: string;
  navTelekinesis: string;
  navSettings: string;
  
  // Gabriel Portal
  portalTitle: string;
  portalSubtitle: string;
  portalDescription: string;
  bookAppointmentBtn: string;
  nextAppointmentTitle: string;
  noUpcomingAppointment: string;
  noUpcomingDesc: string;
  enterMeetBtn: string;
  myAppointmentsBtn: string;
  appointmentsHistoryTitle: string;
  noAppointmentsYet: string;
  confirmBookingTitle: string;
  scheduleDetails: string;
  durationLabel: string;
  modalityLabel: string;
  withGabrielLabel: string;
  openGoogleCalendarBooking: string;
  registerSavedAppointment: string;
  inputName: string;
  inputEmail: string;
  inputDate: string;
  inputTime: string;
  inputTopic: string;
  topicPlaceholder: string;
  saveAppointmentBtn: string;
  cancelBtn: string;
  deleteBtn: string;
  confirmedBadge: string;
  addToCalendarBtn: string;
  gabrielConfigTitle: string;
  googleBookingUrlLabel: string;
  googleBookingUrlHelp: string;
  saveConfigBtn: string;
  
  // Refuge / Community
  refugeTitle: string;
  refugeSubtitle: string;
  newPostBtn: string;
  filterAll: string;
  filterIntuition: string;
  filterUnburden: string;
  filterDreams: string;
  filterTelekinesis: string;
  filterGrowth: string;
  lightCandleBtn: string;
  candlesLit: string;
  replyBtn: string;
  postTitleLabel: string;
  postContentLabel: string;
  postAuthorLabel: string;
  postCountryLabel: string;
  postCategoryLabel: string;
  publishPostBtn: string;
  gabrielGuidanceBadge: string;
  anonymousLabel: string;
  
  // Oracle / Tarot
  oracleTitle: string;
  oracleSubtitle: string;
  spreadSingleTitle: string;
  spreadSingleDesc: string;
  spreadTrinityTitle: string;
  spreadTrinityDesc: string;
  spreadThresholdTitle: string;
  spreadThresholdDesc: string;
  shuffleCardsBtn: string;
  drawCardBtn: string;
  tapToReveal: string;
  lightAspect: string;
  shadowAspect: string;
  guidanceAspect: string;
  saveSpreadNotesBtn: string;
  spreadSavedNotice: string;
  bringToGabrielCall: string;
  
  // Telekinesis & Focus
  telekinesisTitle: string;
  telekinesisSubtitle: string;
  telekinesisIntro: string;
  breatheIn: string;
  holdBreath: string;
  breatheOut: string;
  stillness: string;
  startExerciseBtn: string;
  stopExerciseBtn: string;
  coherenceScore: string;
  mindCalmLevel: string;
  arcanezConceptNote: string;
  
  // PWA
  pwaInstall: string;
  pwaInstallOnIOS: string;
  pwaIosTitle: string;
  pwaIosStep1: string;
  pwaIosStep2: string;
  pwaClose: string;
  offlineMessage: string;
}

export const translations: Record<Language, TranslationStrings> = {
  es: {
    appName: "ARCANEZ",
    appSubtitle: "Hijo de Arcano · Círculo de Iniciados",
    sanctuaryDesc: "Un refugio para hablar, compartir problemas, leer el tarot y conectar con personas de distintos países con Gabriel.",
    navGabriel: "Habla con Gabriel",
    navRefuge: "El Refugio",
    navOracle: "El Oráculo",
    navTelekinesis: "Telequinesis & Mente",
    navSettings: "Ajustes",
    
    portalTitle: "ARCANEZ",
    portalSubtitle: "Habla con Gabriel",
    portalDescription: "Un espacio sagrado y privado para conversar, compartir vivencias y conectar.",
    bookAppointmentBtn: "RESERVAR UNA CITA",
    nextAppointmentTitle: "Próxima cita",
    noUpcomingAppointment: "Sin citas programadas",
    noUpcomingDesc: "Reserva un encuentro individual de 30 minutos con Gabriel por Google Meet.",
    enterMeetBtn: "ENTRAR EN MEET",
    myAppointmentsBtn: "MIS CITAS",
    appointmentsHistoryTitle: "Tus Citas con Gabriel",
    noAppointmentsYet: "Aún no tienes citas reservadas. Cuando reserves una sesión, aparecerá aquí.",
    confirmBookingTitle: "Reservar sesión con Gabriel",
    scheduleDetails: "30 min · Castellano · Google Meet · Sin intermediarios",
    durationLabel: "Duración",
    modalityLabel: "Modalidad",
    withGabrielLabel: "Con",
    openGoogleCalendarBooking: "Abrir Agenda de Citas de Google Calendar",
    registerSavedAppointment: "Registrar / Anotar Cita en Arcanez",
    inputName: "Tu nombre o apodo",
    inputEmail: "Tu correo electrónico",
    inputDate: "Fecha",
    inputTime: "Hora",
    inputTopic: "¿De qué te gustaría hablar?",
    topicPlaceholder: "Experiencia personal, lectura de tarot, dudas intuitivas, desahogo...",
    saveAppointmentBtn: "Confirmar y Guardar Cita",
    cancelBtn: "Cancelar",
    deleteBtn: "Eliminar",
    confirmedBadge: "Cita Confirmada",
    addToCalendarBtn: "Añadir a Google Calendar",
    gabrielConfigTitle: "Enlace de Agenda de Google Calendar",
    googleBookingUrlLabel: "URL de Agenda de Citas (Google Appointment Schedule)",
    googleBookingUrlHelp: "Pega el enlace que genera Google Calendar en tu 'Agenda de Citas' para que los miembros reserven directamente.",
    saveConfigBtn: "Guardar Enlace",
    
    refugeTitle: "El Refugio de Arcanez",
    refugeSubtitle: "Comparte tus vivencias, desahogos y sentires en hermandad",
    newPostBtn: "Compartir Vivencia",
    filterAll: "Todo el Refugio",
    filterIntuition: "Intuición & Misterio",
    filterUnburden: "Desahogo Personal",
    filterDreams: "Sueños & Señales",
    filterTelekinesis: "Foco & Mente",
    filterGrowth: "Crecimiento",
    lightCandleBtn: "Acompañar",
    candlesLit: "velas de presencia",
    replyBtn: "Responder con respeto",
    postTitleLabel: "Título o esencia de tu mensaje",
    postContentLabel: "¿Qué necesitas compartir con el círculo?",
    postAuthorLabel: "Tu nombre o apodo",
    postCountryLabel: "País",
    postCategoryLabel: "Temática",
    publishPostBtn: "Publicar en el Círculo",
    gabrielGuidanceBadge: "Respuesta de Gabriel",
    anonymousLabel: "Anónimo",
    
    oracleTitle: "El Oráculo del Arcano",
    oracleSubtitle: "Lectura simbólica para despertar tu intuición",
    spreadSingleTitle: "El Suspiro del Momento",
    spreadSingleDesc: "Una carta para sintonizar con la energía presente y recibir claridad.",
    spreadTrinityTitle: "La Trinidad de Arcanez",
    spreadTrinityDesc: "Tres cartas: Raíz / Pasado · El Espejo / Presente · El Vuelo / Hacia dónde va la energía.",
    spreadThresholdTitle: "El Umbral de la Duda",
    spreadThresholdDesc: "Tres cartas: La Situación actual · El Bloqueo sutil · La Vía de Liberación.",
    shuffleCardsBtn: "Barajar y Sintonizar",
    drawCardBtn: "Revelar Tirada",
    tapToReveal: "Toca una carta para develar su arcano",
    lightAspect: "Aspecto Luminoso",
    shadowAspect: "Aspecto de Sombra / Cuidado",
    guidanceAspect: "Guía para tu camino",
    saveSpreadNotesBtn: "Guardar notas para la cita con Gabriel",
    spreadSavedNotice: "Lectura anotada para tu próxima conversación con Gabriel.",
    bringToGabrielCall: "Vincular a mi próxima cita con Gabriel",
    
    telekinesisTitle: "Telequinesis & Concentración",
    telekinesisSubtitle: "El arte de aquietar la fluctuación mental y enfocar la energía",
    telekinesisIntro: "La telequinesis no es magia externa, sino la culminación de la calma, el foco sostenido y la no-resistencia interior. Sincroniza tu respiración con la Esfera de Arcanez.",
    breatheIn: "Inhala profundamente...",
    holdBreath: "Sostén con quietud...",
    breatheOut: "Exhala y suelta...",
    stillness: "Punto Cero / Trascendencia...",
    startExerciseBtn: "Iniciar Sintonización",
    stopExerciseBtn: "Finalizar Ejercicio",
    coherenceScore: "Nivel de Coherencia",
    mindCalmLevel: "Calma Mental",
    arcanezConceptNote: "Arcanez representa la resonancia entre la intuición y la fuerza de la mente. Dedica 3 minutos antes de entrar a tu cita con Gabriel.",
    
    pwaInstall: "Instalar Arcanez",
    pwaInstallOnIOS: "Instalar en iOS",
    pwaIosTitle: "Instalar en iPhone o iPad",
    pwaIosStep1: "Toca el botón 'Compartir' en la barra inferior de Safari.",
    pwaIosStep2: "Desliza y selecciona 'Añadir a la pantalla de inicio'.",
    pwaClose: "Entendido",
    offlineMessage: "Modo sin conexión — Arcanez funciona en tu dispositivo",
  },
  en: {
    appName: "ARCANEZ",
    appSubtitle: "Son of Arcane · Circle of Initiates",
    sanctuaryDesc: "A sanctuary to talk, share personal problems, read tarot and connect internationally with Gabriel.",
    navGabriel: "Talk with Gabriel",
    navRefuge: "The Refuge",
    navOracle: "The Oracle",
    navTelekinesis: "Telekinesis & Mind",
    navSettings: "Settings",
    
    portalTitle: "ARCANEZ",
    portalSubtitle: "Talk with Gabriel",
    portalDescription: "A sacred and private space to talk, share experiences and connect.",
    bookAppointmentBtn: "BOOK AN APPOINTMENT",
    nextAppointmentTitle: "Next appointment",
    noUpcomingAppointment: "No appointments scheduled",
    noUpcomingDesc: "Book a 30-minute private one-on-one session with Gabriel on Google Meet.",
    enterMeetBtn: "JOIN MEET",
    myAppointmentsBtn: "MY APPOINTMENTS",
    appointmentsHistoryTitle: "Your Appointments with Gabriel",
    noAppointmentsYet: "You haven't booked any appointments yet. When you book one, it will appear here.",
    confirmBookingTitle: "Book a Session with Gabriel",
    scheduleDetails: "30 min · Spanish/English · Google Meet · Direct connection",
    durationLabel: "Duration",
    modalityLabel: "Format",
    withGabrielLabel: "With",
    openGoogleCalendarBooking: "Open Google Calendar Appointment Schedule",
    registerSavedAppointment: "Record / Save Appointment in Arcanez",
    inputName: "Your name or alias",
    inputEmail: "Your email address",
    inputDate: "Date",
    inputTime: "Time",
    inputTopic: "What would you like to speak about?",
    topicPlaceholder: "Personal experience, tarot reading, intuitive questions, unburdening...",
    saveAppointmentBtn: "Confirm & Save Appointment",
    cancelBtn: "Cancel",
    deleteBtn: "Delete",
    confirmedBadge: "Appointment Confirmed",
    addToCalendarBtn: "Add to Google Calendar",
    gabrielConfigTitle: "Google Calendar Appointment Schedule Link",
    googleBookingUrlLabel: "Appointment Schedule URL",
    googleBookingUrlHelp: "Paste your Google Calendar Appointment Schedule link so members can book directly.",
    saveConfigBtn: "Save Link",
    
    refugeTitle: "The Arcanez Refuge",
    refugeSubtitle: "Share personal experiences, questions and challenges in kinship",
    newPostBtn: "Share an Experience",
    filterAll: "All Stories",
    filterIntuition: "Intuition & Mystery",
    filterUnburden: "Personal Unburdening",
    filterDreams: "Dreams & Signs",
    filterTelekinesis: "Focus & Telekinesis",
    filterGrowth: "Personal Growth",
    lightCandleBtn: "Hold Space",
    candlesLit: "candles of presence",
    replyBtn: "Reply respectfully",
    postTitleLabel: "Title or core feeling",
    postContentLabel: "What would you like to share with the circle?",
    postAuthorLabel: "Name or alias",
    postCountryLabel: "Country",
    postCategoryLabel: "Category",
    publishPostBtn: "Publish to Circle",
    gabrielGuidanceBadge: "Gabriel's Guidance",
    anonymousLabel: "Anonymous",
    
    oracleTitle: "The Oracle of Arcane",
    oracleSubtitle: "Symbolic tarot reading to sharpen your intuition",
    spreadSingleTitle: "Breath of the Moment",
    spreadSingleDesc: "A single card for immediate clarity and attunement.",
    spreadTrinityTitle: "The Arcanez Trinity",
    spreadTrinityDesc: "Three cards: Root / Past · The Mirror / Present · Flight / Where energy flows.",
    spreadThresholdTitle: "The Threshold of Doubt",
    spreadThresholdDesc: "Three cards: The Situation · Hidden Blockage · The Path of Release.",
    shuffleCardsBtn: "Shuffle & Attune",
    drawCardBtn: "Reveal Cards",
    tapToReveal: "Tap a card to unveil its arcane mystery",
    lightAspect: "Luminous Aspect",
    shadowAspect: "Shadow Aspect / Warning",
    guidanceAspect: "Guidance for your journey",
    saveSpreadNotesBtn: "Save notes for your call with Gabriel",
    spreadSavedNotice: "Reading saved to bring to your conversation with Gabriel.",
    bringToGabrielCall: "Link to next meeting with Gabriel",
    
    telekinesisTitle: "Telekinesis & Stillness",
    telekinesisSubtitle: "The art of calming mental noise and concentrating vital energy",
    telekinesisIntro: "Telekinesis is not theatrical illusion, but the apex of inner stillness, single-pointed focus, and non-resistance. Synchronize your breath with the Arcanez Orb.",
    breatheIn: "Inhale deeply...",
    holdBreath: "Hold with quiet awareness...",
    breatheOut: "Exhale and surrender...",
    stillness: "Zero Point / Stillness...",
    startExerciseBtn: "Start Attunement",
    stopExerciseBtn: "End Exercise",
    coherenceScore: "Coherence Level",
    mindCalmLevel: "Mental Stillness",
    arcanezConceptNote: "Arcanez stands for the resonance between intuition and mental intent. Practice 3 minutes before meeting with Gabriel.",
    
    pwaInstall: "Install Arcanez",
    pwaInstallOnIOS: "Install on iOS",
    pwaIosTitle: "Install on iPhone or iPad",
    pwaIosStep1: "Tap the 'Share' button in the Safari toolbar.",
    pwaIosStep2: "Scroll down and tap 'Add to Home Screen'.",
    pwaClose: "Got it",
    offlineMessage: "Offline Mode — Arcanez is running on your device",
  },
  fr: {
    appName: "ARCANEZ",
    appSubtitle: "Fils d'Arcane · Cercle d'Initié",
    sanctuaryDesc: "Un refuge pour parler, partager ses problèmes, tirer le tarot et se connecter avec Gabriel.",
    navGabriel: "Parler avec Gabriel",
    navRefuge: "Le Refuge",
    navOracle: "L'Oracle",
    navTelekinesis: "Télékinésie & Esprit",
    navSettings: "Paramètres",
    portalTitle: "ARCANEZ",
    portalSubtitle: "Parler avec Gabriel",
    portalDescription: "Un espace sacré et intime pour dialoguer, partager et se connecter.",
    bookAppointmentBtn: "RÉSERVER UN RENDEZ-VOUS",
    nextAppointmentTitle: "Prochain rendez-vous",
    noUpcomingAppointment: "Aucun rendez-vous planifié",
    noUpcomingDesc: "Réservez un entretien individuel de 30 minutes avec Gabriel sur Google Meet.",
    enterMeetBtn: "REJOINDRE MEET",
    myAppointmentsBtn: "MES RENDEZ-VOUS",
    appointmentsHistoryTitle: "Vos rendez-vous avec Gabriel",
    noAppointmentsYet: "Vous n'avez pas encore de rendez-vous réservé.",
    confirmBookingTitle: "Réserver une session avec Gabriel",
    scheduleDetails: "30 min · Google Meet · Connexion directe",
    durationLabel: "Durée",
    modalityLabel: "Modalité",
    withGabrielLabel: "Avec",
    openGoogleCalendarBooking: "Ouvrir l'agenda de rendez-vous Google Calendar",
    registerSavedAppointment: "Enregistrer le rendez-vous dans Arcanez",
    inputName: "Votre nom ou pseudonyme",
    inputEmail: "Votre adresse e-mail",
    inputDate: "Date",
    inputTime: "Heure",
    inputTopic: "De quoi aimeriez-vous parler ?",
    topicPlaceholder: "Expérience personnelle, tarot, question intuitive...",
    saveAppointmentBtn: "Confirmer & Enregistrer",
    cancelBtn: "Annuler",
    deleteBtn: "Supprimer",
    confirmedBadge: "Rendez-vous Confirmé",
    addToCalendarBtn: "Ajouter à Google Calendar",
    gabrielConfigTitle: "Lien de réservation Google Calendar",
    googleBookingUrlLabel: "URL de l'agenda de rendez-vous",
    googleBookingUrlHelp: "Collez votre lien Google Appointment Schedule.",
    saveConfigBtn: "Enregistrer le lien",
    refugeTitle: "Le Refuge d'Arcanez",
    refugeSubtitle: "Partagez vos doutes et réflexions en toute bienveillance",
    newPostBtn: "Partager une expérience",
    filterAll: "Toutes les histoires",
    filterIntuition: "Intuition & Mystère",
    filterUnburden: "Épanchement personnel",
    filterDreams: "Rêves & Signes",
    filterTelekinesis: "Concentration",
    filterGrowth: "Évolution",
    lightCandleBtn: "Accompagner",
    candlesLit: "bougies de présence",
    replyBtn: "Répondre",
    postTitleLabel: "Titre du message",
    postContentLabel: "Ce que vous ressentez au fond de vous...",
    postAuthorLabel: "Votre nom",
    postCountryLabel: "Pays",
    postCategoryLabel: "Thématique",
    publishPostBtn: "Publier dans le Cercle",
    gabrielGuidanceBadge: "Conseil de Gabriel",
    anonymousLabel: "Anonyme",
    oracleTitle: "L'Oracle de l'Arcane",
    oracleSubtitle: "Tirage symbolique de tarot pour éveiller votre intuition",
    spreadSingleTitle: "Le Souffle du Moment",
    spreadSingleDesc: "Une carte pour obtenir une clarté immédiate.",
    spreadTrinityTitle: "La Trinité d'Arcanez",
    spreadTrinityDesc: "Trois cartes : Racine · Miroir · Envol.",
    spreadThresholdTitle: "Le Seuil du Doute",
    spreadThresholdDesc: "Trois cartes : Situation · Blocage · Libération.",
    shuffleCardsBtn: "Mélanger les cartes",
    drawCardBtn: "Révéler le tirage",
    tapToReveal: "Touchez une carte pour la dévoiler",
    lightAspect: "Aspect Lumineux",
    shadowAspect: "Aspect d'Ombre",
    guidanceAspect: "Guidance pour votre chemin",
    saveSpreadNotesBtn: "Conserver pour le rendez-vous avec Gabriel",
    spreadSavedNotice: "Tirage enregistré pour votre prochaine conversation.",
    bringToGabrielCall: "Associer à ma réunion avec Gabriel",
    telekinesisTitle: "Télékinésie & Concentration",
    telekinesisSubtitle: "L'art de canaliser l'esprit et d'harmoniser l'énergie",
    telekinesisIntro: "La télékinésie commence par un esprit apaisé et un foyer de concentration inébranlable.",
    breatheIn: "Inspirez profondément...",
    holdBreath: "Retenez avec sérénité...",
    breatheOut: "Expirez et relâchez...",
    stillness: "Point Zéro / Calme Absolu...",
    startExerciseBtn: "Commencer la session",
    stopExerciseBtn: "Arrêter",
    coherenceScore: "Niveau de Cohérence",
    mindCalmLevel: "Calme de l'esprit",
    arcanezConceptNote: "Pratiquez 3 minutes avant de rejoindre Gabriel.",
    pwaInstall: "Installer Arcanez",
    pwaInstallOnIOS: "Installer sur iOS",
    pwaIosTitle: "Installer sur iPhone / iPad",
    pwaIosStep1: "Appuyez sur 'Partager' dans Safari.",
    pwaIosStep2: "Sélectionnez 'Sur l'écran d'accueil'.",
    pwaClose: "Fermer",
    offlineMessage: "Mode hors ligne actif",
  },
  it: {
    appName: "ARCANEZ",
    appSubtitle: "Figlio dell'Arcano · Cerchio di Iniziati",
    sanctuaryDesc: "Un rifugio per parlare, condividere problemi, leggere i tarocchi e connettersi con Gabriel.",
    navGabriel: "Parla con Gabriel",
    navRefuge: "Il Rifugio",
    navOracle: "L'Oracolo",
    navTelekinesis: "Telecinesi & Mente",
    navSettings: "Impostazioni",
    portalTitle: "ARCANEZ",
    portalSubtitle: "Parla con Gabriel",
    portalDescription: "Uno spazio sacro e riservato per dialogare, condividere e connettersi.",
    bookAppointmentBtn: "PRENOTA UN APPUNTAMENTO",
    nextAppointmentTitle: "Prossimo appuntamento",
    noUpcomingAppointment: "Nessun appuntamento in programma",
    noUpcomingDesc: "Prenota una sessione individuale di 30 minuti con Gabriel su Google Meet.",
    enterMeetBtn: "ENTRA IN MEET",
    myAppointmentsBtn: "I MIEI APPUNTAMENTI",
    appointmentsHistoryTitle: "I tuoi appuntamenti con Gabriel",
    noAppointmentsYet: "Non hai ancora nessun appuntamento registrato.",
    confirmBookingTitle: "Prenota con Gabriel",
    scheduleDetails: "30 min · Google Meet · Connessione diretta",
    durationLabel: "Durata",
    modalityLabel: "Modalità",
    withGabrielLabel: "Con",
    openGoogleCalendarBooking: "Apri l'agenda appuntamenti Google Calendar",
    registerSavedAppointment: "Registra appuntamento in Arcanez",
    inputName: "Il tuo nome o nickname",
    inputEmail: "La tua email",
    inputDate: "Data",
    inputTime: "Ora",
    inputTopic: "Di cosa desideri parlare?",
    topicPlaceholder: "Esperienza personale, lettura tarocchi, sfogo...",
    saveAppointmentBtn: "Conferma e Salva",
    cancelBtn: "Annulla",
    deleteBtn: "Elimina",
    confirmedBadge: "Appuntamento Confermato",
    addToCalendarBtn: "Aggiungi a Google Calendar",
    gabrielConfigTitle: "Link Agenda Google Calendar",
    googleBookingUrlLabel: "URL Agenda Appuntamenti Google",
    googleBookingUrlHelp: "Incolla il link di Google Appointment Schedule.",
    saveConfigBtn: "Salva Link",
    refugeTitle: "Il Rifugio di Arcanez",
    refugeSubtitle: "Condividi esperienze e riflessioni nel cerchio",
    newPostBtn: "Condividi Esperienza",
    filterAll: "Tutto",
    filterIntuition: "Intuizione",
    filterUnburden: "Sfogo Personale",
    filterDreams: "Sogni & Segni",
    filterTelekinesis: "Mente",
    filterGrowth: "Crescita",
    lightCandleBtn: "Accompagna",
    candlesLit: "candele di presenza",
    replyBtn: "Rispondi",
    postTitleLabel: "Titolo",
    postContentLabel: "Cosa senti di condividere?",
    postAuthorLabel: "Nome",
    postCountryLabel: "Paese",
    postCategoryLabel: "Tema",
    publishPostBtn: "Pubblica",
    gabrielGuidanceBadge: "Consiglio di Gabriel",
    anonymousLabel: "Anonimo",
    oracleTitle: "L'Oracolo dell'Arcano",
    oracleSubtitle: "Lettura simbolica dei tarocchi per l'intuizione",
    spreadSingleTitle: "Il Respiro del Momento",
    spreadSingleDesc: "Una carta per chiarezza immediata.",
    spreadTrinityTitle: "La Trinità di Arcanez",
    spreadTrinityDesc: "Tre carte: Radice · Specchio · Volo.",
    spreadThresholdTitle: "La Soglia del Dubbio",
    spreadThresholdDesc: "Tre carte: Situazione · Blocco · Liberazione.",
    shuffleCardsBtn: "Mescola i Tarocchi",
    drawCardBtn: "Rivela Carte",
    tapToReveal: "Tocca per scoprire la carta",
    lightAspect: "Aspetto Luminoso",
    shadowAspect: "Aspetto d'Ombra",
    guidanceAspect: "Guida intuitiva",
    saveSpreadNotesBtn: "Salva per l'incontro con Gabriel",
    spreadSavedNotice: "Lettura salvata per la chiamata.",
    bringToGabrielCall: "Collega all'appuntamento",
    telekinesisTitle: "Telecinesi & Concentrazione",
    telekinesisSubtitle: "L'arte di calmare la mente e focalizzare la pura intenzione",
    telekinesisIntro: "La quiete mentale è il fondamento della concentrazione profonda.",
    breatheIn: "Inspira...",
    holdBreath: "Trattieni...",
    breatheOut: "Espira...",
    stillness: "Punto Zero...",
    startExerciseBtn: "Inizia",
    stopExerciseBtn: "Termina",
    coherenceScore: "Coerenza",
    mindCalmLevel: "Calma Mentale",
    arcanezConceptNote: "Pratica 3 minuti prima di incontrare Gabriel.",
    pwaInstall: "Installa Arcanez",
    pwaInstallOnIOS: "Installa su iOS",
    pwaIosTitle: "Installa su iPhone / iPad",
    pwaIosStep1: "Tocca 'Condividi' in Safari.",
    pwaIosStep2: "Tocca 'Aggiungi a schermata Home'.",
    pwaClose: "Chiudi",
    offlineMessage: "Modalità non in linea",
  },
  pt: {
    appName: "ARCANEZ",
    appSubtitle: "Filho do Arcano · Círculo de Iniciados",
    sanctuaryDesc: "Um refúgio para falar, desabafar, ler o tarot e se conectar com Gabriel.",
    navGabriel: "Falar com Gabriel",
    navRefuge: "O Refúgio",
    navOracle: "O Oráculo",
    navTelekinesis: "Telecinese & Foco",
    navSettings: "Configurações",
    portalTitle: "ARCANEZ",
    portalSubtitle: "Falar com Gabriel",
    portalDescription: "Um espaço sagrado e privado para conversar, partilhar e conectar.",
    bookAppointmentBtn: "AGENDAR UMA CONVERSA",
    nextAppointmentTitle: "Próxima conversa",
    noUpcomingAppointment: "Nenhum agendamento ativo",
    noUpcomingDesc: "Agende um encontro individual de 30 minutos com Gabriel pelo Google Meet.",
    enterMeetBtn: "ENTRAR NO MEET",
    myAppointmentsBtn: "MEUS AGENDAMENTOS",
    appointmentsHistoryTitle: "Suas conversas com Gabriel",
    noAppointmentsYet: "Você ainda não possui agendamentos.",
    confirmBookingTitle: "Agendar conversa com Gabriel",
    scheduleDetails: "30 min · Google Meet · Ligação direta",
    durationLabel: "Duração",
    modalityLabel: "Modalidade",
    withGabrielLabel: "Com",
    openGoogleCalendarBooking: "Abrir Agenda de Agendamentos do Google Calendar",
    registerSavedAppointment: "Registrar em Arcanez",
    inputName: "Seu nome ou apelido",
    inputEmail: "Seu e-mail",
    inputDate: "Data",
    inputTime: "Hora",
    inputTopic: "Sobre o que gostaria de conversar?",
    topicPlaceholder: "Experiência pessoal, tarot, desabafo...",
    saveAppointmentBtn: "Confirmar e Salvar",
    cancelBtn: "Cancelar",
    deleteBtn: "Excluir",
    confirmedBadge: "Agendamento Confirmado",
    addToCalendarBtn: "Adicionar ao Google Calendar",
    gabrielConfigTitle: "Link da Agenda do Google Calendar",
    googleBookingUrlLabel: "URL da Agenda de Agendamentos Google",
    googleBookingUrlHelp: "Cole o link da sua Agenda de Agendamentos do Google Calendar.",
    saveConfigBtn: "Salvar Link",
    refugeTitle: "O Refúgio de Arcanez",
    refugeSubtitle: "Partilhe suas vivências e sentimentos em fraternidade",
    newPostBtn: "Partilhar Vivência",
    filterAll: "Todas as histórias",
    filterIntuition: "Intuição & Mistério",
    filterUnburden: "Desabafo Pessoal",
    filterDreams: "Sonhos & Sinais",
    filterTelekinesis: "Foco Mental",
    filterGrowth: "Crescimento",
    lightCandleBtn: "Acompanhar",
    candlesLit: "velas de presença",
    replyBtn: "Responder",
    postTitleLabel: "Título",
    postContentLabel: "O que você sente no coração...",
    postAuthorLabel: "Nome",
    postCountryLabel: "País",
    postCategoryLabel: "Tema",
    publishPostBtn: "Publicar no Círculo",
    gabrielGuidanceBadge: "Conselho de Gabriel",
    anonymousLabel: "Anônimo",
    oracleTitle: "O Oráculo do Arcano",
    oracleSubtitle: "Leitura simbólica de tarot para sua intuição",
    spreadSingleTitle: "O Suspiro do Momento",
    spreadSingleDesc: "Uma carta para clareza imediata.",
    spreadTrinityTitle: "A Trindade de Arcanez",
    spreadTrinityDesc: "Três cartas: Raiz · Espelho · Voo.",
    spreadThresholdTitle: "O Limiar da Dúvida",
    spreadThresholdDesc: "Três cartas: Situação · Bloqueio · Libertação.",
    shuffleCardsBtn: "Embaralhar",
    drawCardBtn: "Revelar Cartas",
    tapToReveal: "Toque para virar a carta",
    lightAspect: "Aspecto Luminoso",
    shadowAspect: "Aspecto de Sombra",
    guidanceAspect: "Orientação para o caminho",
    saveSpreadNotesBtn: "Salvar para a conversa com Gabriel",
    spreadSavedNotice: "Tiragem anotada para sua chamada com Gabriel.",
    bringToGabrielCall: "Vincular à conversa",
    telekinesisTitle: "Telecinese & Foco",
    telekinesisSubtitle: "A arte de silenciar a mente e focar a intenção",
    telekinesisIntro: "A calma interior é a chave para o foco e a intuição pura.",
    breatheIn: "Inspire suavemente...",
    holdBreath: "Segure com serenidade...",
    breatheOut: "Expire e relaxe...",
    stillness: "Ponto Zero...",
    startExerciseBtn: "Iniciar",
    stopExerciseBtn: "Finalizar",
    coherenceScore: "Coerência",
    mindCalmLevel: "Calma Mental",
    arcanezConceptNote: "Pratique 3 minutos antes de falar com Gabriel.",
    pwaInstall: "Instalar Arcanez",
    pwaInstallOnIOS: "Instalar no iOS",
    pwaIosTitle: "Instalar no iPhone / iPad",
    pwaIosStep1: "Toque em 'Compartilhar' no Safari.",
    pwaIosStep2: "Toque em 'Adicionar à Tela de Início'.",
    pwaClose: "Fechar",
    offlineMessage: "Modo offline ativo",
  }
};
