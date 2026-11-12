// ============================================================
//  TON FICHIER À MODIFIER
//  Tout le texte du site est ici. Change ce qui est entre
//  guillemets '...' puis enregistre (Cmd + S) : le site se met
//  à jour tout seul dans le navigateur.
//  Astuce : pour une apostrophe dans un texte, utilise ’
//  (et non ') sinon le texte se coupe.
// ============================================================

export const TODO = '[à compléter]'

export const profile = {
  firstName: 'Marie',
  lastName: 'Peretti',
  role: 'Marketing digital & communication événementielle',
  tagline:
    'Diplômée d’un Master Stratégie digitale & innovation communication, forte de 2 ans en alternance chez Airbus, je recherche un CDI en marketing digital et communication événementielle.',
  location: 'Brive-la-Gaillarde',
  email: 'peretti.marie19@gmail.com',
  availability: 'en recherche de CDI',
  // PHOTO : mets ta photo dans le dossier site/public
  // puis écris son nom ici, par ex. '/photo.jpg'. Laisse '' pour afficher tes initiales.
  photo: '/photo.jpg',
  // CV : mets ton CV dans site/public puis écris son nom, par ex. '/cv-marie-peretti.pdf'
  // Laisse '#' pour cacher le bouton « Mon CV ».
  cvUrl: '/cv-marie-peretti.pdf',
  socials: {
    // Colle ici l’adresse de ton profil LinkedIn
    linkedin: 'https://www.linkedin.com/in/marie-peretti-147476269',
  },
}

export const about = {
  paragraphs: [
    'J’ai 24 ans. Après un Bachelor Marketing / Communication à PPA Business School, j’ai obtenu un Master Stratégie digitale & innovation communication à l’École Supérieure de Publicité de Toulouse.',
    'Pendant 2 ans, en alternance à la Quality Academy d’Airbus, j’ai piloté des projets, créé des contenus vidéo et organisé des événements internes. Aujourd’hui, je souhaite mettre ces compétences en gestion de projet et en création de contenu au service d’une entreprise, dans un CDI à Brive-la-Gaillarde.',
    'Je parle anglais couramment (3 mois en Australie). En dehors du travail : rugby, voyages et musique.',
  ],
  values: [
    { title: 'Créative', text: 'Vidéo, visuels, e-mailing : j’aime donner forme aux idées.' },
    { title: 'Solaire', text: 'Pleine d’entrain et de bonne humeur au quotidien.' },
    { title: 'Gestion de projet', text: '2 ans de pilotage de projets à la Quality Academy d’Airbus.' },
  ],
}

export type SkillGroup = { title: string; tone: 'butter' | 'sky' | 'burgundy'; items: string[] }

// COMPÉTENCES : un bloc par carte. tone = couleur de la carte : 'butter' (jaune), 'sky' (bleu) ou 'burgundy' (bordeaux)
export const skillGroups: SkillGroup[] = [
  {
    title: 'Stratégie & projets',
    tone: 'butter',
    items: [
      'Stratégie de communication 360°',
      'Marketing d’influence & UGC',
      'Parcours client',
      'Funnels TOFU / MOFU / BOFU',
      'Lead scoring',
      'Communication événementielle',
      'Gestion de projet',
      'Outils Airbus (EDap, Momindum)',
    ],
  },
  {
    title: 'IA & création de contenu',
    tone: 'sky',
    items: [
      'Canva Pro & Magic Studio',
      'Midjourney / Adobe Firefly',
      'Gemini',
      'DaVinci Resolve',
      'CapCut',
      'Figma',
      'Photoshop & Illustrator (notions)',
    ],
  },
  {
    title: 'Social media',
    tone: 'butter',
    items: ['Meta Business Suite', 'Outils de planification de posts', 'Instagram', 'TikTok', 'LinkedIn', 'Facebook'],
  },
  {
    title: 'CRM & e-mailing',
    tone: 'sky',
    items: ['HubSpot', 'Brevo', 'Mailchimp', 'Newsletters', 'Séquences automatisées'],
  },
  {
    title: 'Ads & data',
    tone: 'butter',
    items: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Looker Studio', 'Excel', 'Analyse de données'],
  },
  { title: 'Savoir-être', tone: 'burgundy', items: ['Créative', 'Solaire', 'Pleine d’entrain', 'Bonne humeur', 'Anglais courant'] },
]

export type Project = {
  title: string
  context: string
  description: string
  role: string
  tags: string[]
  image: string
  link: string
}

// PROJETS : un bloc { ... } par projet. Pour en ajouter un, copie un bloc entier
// (de { à },) et colle-le en dessous. Pour en retirer un, supprime son bloc.
//   title       : le nom du projet
//   context     : le cadre (école, entreprise, année)
//   description : 1 ou 2 phrases (ce que tu as fait, pour qui, le résultat)
//   role        : ton rôle dans le projet ('' pour ne rien afficher)
//   tags        : les outils ou thèmes, entre guillemets et séparés par des virgules
//   image       : mets l’image dans site/public puis écris '/nom-image.jpg' ('' = pas d’image)
//   link        : un lien vers le projet (vidéo YouTube, site…) ou '#' s’il n’y en a pas
export const projects: Project[] = [
  {
    title: 'Stratégie de communication Midica',
    context: 'Projet d’école · ESP · 2026',
    description:
      'Redonner un nouveau souffle à une enseigne déco historique de Toulouse auprès des jeunes, sans perdre son côté intergénérationnel. Concept « Midica, toujours proche des Toulousains » : plateforme de marque, street marketing, jeu concours, soirée événementielle en magasin, influence, newsletter et plan réseaux sociaux sur 9 mois.',
    role: 'Responsable marketing digital, gestion de l’influence et de l’événementiel',
    tags: ['Stratégie 360°', 'Événementiel', 'Influence', 'Réseaux sociaux'],
    image: '/projets/midica.jpg',
    link: '#',
  },
  {
    title: 'CRM Week — Sérénis',
    context: 'Projet d’école · ESP × ESD · 2026',
    description:
      'En équipe de 6 (marketing et data), transformer la base clients d’un assureur en moteur de rentabilité. Analyse des segments, stratégie d’acquisition des TPE (Google Ads, Meta, LinkedIn), landing page, stratégie social media, séquences d’e-mailing et lead scoring.',
    role: 'Content manager',
    tags: ['CRM', 'E-mailing', 'Paid media', 'Social media'],
    image: '/projets/serenis-crm.jpg',
    link: '#',
  },
  {
    title: 'Lancement Loom Kids',
    context: 'Projet d’école · ESP · 2026',
    description:
      'Imaginer le lancement d’une gamme enfant pour une marque de mode durable. Idée clé : « la durabilité devient héritage ». Persona, 3 piliers de contenu, fiche produit repensée, campagne « Increvable », série documentaire, crash-tests vidéo et stratégie d’influence.',
    role: 'Responsable parcours client',
    tags: ['Stratégie de contenu', 'Vidéo', 'Influence', 'Mode durable'],
    image: '/projets/loom-kids.jpg',
    link: '#',
  },
]

// PARCOURS : text peut être une phrase '...' ou une liste ['...', '...'] (affichée avec des puces)
export type Step = { period: string; title: string; place: string; text: string | string[] }

export const experience: Step[] = [
  {
    period: '2024 – 2026 · Alternance',
    title: 'Project Leader pédagogique & support communication',
    place: 'Airbus — Quality Academy, Blagnac',
    text: [
      'Gestion de projets (CoC MAKE, authoring tool)',
      'Création de contenus vidéo pour le site de la Quality Academy',
      'Gestion événementielle : team building, Airbus Quality Day',
      'Support digital pour la création de formations (BMS, Problem Solving)',
    ],
  },
  {
    period: '2024',
    title: 'Projet événementiel',
    place: 'Toulouse en Cœur',
    text: ['Création d’un événement de A à Z'],
  },
  {
    period: '2023 – 2024 · Alternance',
    title: 'Responsable projet marketing / communication',
    place: 'Flower Campings, Balma',
    text: [
      'Gestion des activités commerciales',
      'Création de contenus pour les réseaux sociaux et le site web',
      'Gestion des campings avec les directeurs',
    ],
  },
  {
    period: '2023 · Stage',
    title: 'Marketing opérationnel / événementiel',
    place: 'Paris-Normandie, Rouen',
    text: [
      'Gestion des événements pendant l’Armada',
      'Création de contenus pour les supports imprimés, les mails et les conférences',
      'Suivi des retombées de l’événement',
    ],
  },
]

export const education: Step[] = [
  {
    period: '2024 – 2026',
    title: 'Master Stratégie digitale & innovation communication',
    place: 'École Supérieure de Publicité (ESP), Toulouse',
    text: 'Bac +5',
  },
  {
    period: '2020 – 2024',
    title: 'Bachelor Marketing / Communication',
    place: 'PPA Business School',
    text: '',
  },
]

// Menu du site (pas besoin de modifier)
export const nav = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]
