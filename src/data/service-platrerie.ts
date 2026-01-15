/* =========================
   Donnees specifiques a la page Service Platrerie
   ========================= */

// =========================
// TYPES
// =========================

export interface ScopeItem {
  id: string;
  title: string;
  description: string;
  icon: 'wall' | 'ceiling' | 'finish' | 'insulation';
  link?: {
    href: string;
    label: string;
  };
}

export interface UseCase {
  id: string;
  label: string;
  title: string;
  description: string;
  keywords: string[];
  highlights: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface PlatrerieProject {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface PltrerieFAQ {
  id: string;
  question: string;
  answer: string;
}

// =========================
// PERIMETRE DES PRESTATIONS
// =========================

export const scopeItems: ScopeItem[] = [
  {
    id: 'cloisons',
    title: 'Cloisons & Distribution',
    description: 'Redistribution des espaces avec cloisons seches, doublages BA13 et ossature metallique. Ideal pour creer de nouvelles pieces ou reorganiser vos locaux.',
    icon: 'wall',
  },
  {
    id: 'faux-plafonds',
    title: 'Faux Plafonds Techniques',
    description: 'Plafonds suspendus, dalles acoustiques et plafonds tendus. Solutions adaptees aux bureaux, ecoles et locaux professionnels.',
    icon: 'ceiling',
  },
  {
    id: 'preparation',
    title: 'Preparation & Finitions',
    description: 'Enduits, ratissage et lissage des murs. Preparation parfaite des supports avant peinture pour un rendu impeccable.',
    icon: 'finish',
    link: {
      href: '/services/peinture',
      label: 'Voir nos services peinture',
    },
  },
  {
    id: 'isolation',
    title: 'Isolation Interieure',
    description: 'Doublage thermique et acoustique par l\'interieur. Ameliorez le confort de vos locaux tout en reduisant vos factures energetiques.',
    icon: 'insulation',
    link: {
      href: '/services/isolation',
      label: 'Voir nos services isolation',
    },
  },
];

// =========================
// CAS D'USAGE PAR CIBLE
// =========================

export const useCases: UseCase[] = [
  {
    id: 'collectivites',
    label: 'Collectivites & Marches Publics',
    title: 'Etablissements publics, mairies, ecoles',
    description: 'Nous maitrisons les contraintes des marches publics : interventions en site occupe, respect des normes ERP, gestion des nuisances et coordination avec vos equipes.',
    keywords: ['ERP', 'Normes Feu', 'Site occupe', 'Acoustique', 'Dossier technique'],
    highlights: [
      'Interventions pendant les vacances scolaires ou en horaires decales',
      'Conformite aux normes de securite incendie et acoustiques',
      'Dossier administratif complet fourni sur demande',
      'Coordination avec les autres corps de metier',
    ],
  },
  {
    id: 'professionnels',
    label: 'Professionnels & Coproprietes',
    title: 'Bureaux, commerces, parties communes',
    description: 'Amenagement et renovation de vos espaces professionnels : open-spaces, salles de reunion, circulations. Des solutions modulables adaptees a vos besoins.',
    keywords: ['Modularite', 'Open-space', 'Circulation', 'Isolation phonique'],
    highlights: [
      'Cloisonnement modulable pour bureaux evolutifs',
      'Traitement acoustique entre espaces de travail',
      'Faux plafonds techniques avec integration eclairage',
      'Renovation des parties communes de copropriete',
    ],
  },
  {
    id: 'particuliers',
    label: 'Particuliers',
    title: 'Appartements, maisons, combles',
    description: 'Transformez votre interieur : redistribution des pieces, amenagement de combles, murs parfaitement lisses. Un resultat soigne pour votre confort quotidien.',
    keywords: ['Renovation', 'Murs droits', 'Proprete', 'Design'],
    highlights: [
      'Redistribution complete de votre logement',
      'Amenagement de combles en pieces habitables',
      'Ratissage et lissage pour murs parfaits',
      'Respect de votre quotidien pendant les travaux',
    ],
  },
];

// =========================
// METHODE SERENITE
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Protection rigoureuse',
    description: 'Baches, films protecteurs et scotch de masquage : nous proteges vos sols, meubles et equipements avant chaque intervention.',
    icon: 'shield',
  },
  {
    number: '02',
    title: 'Gestion des dechets',
    description: 'Evacuation quotidienne des gravats et poussieres. Votre chantier reste propre et accessible tout au long des travaux.',
    icon: 'trash',
  },
  {
    number: '03',
    title: 'Nettoyage de fin de chantier',
    description: 'Aspiration complete, nettoyage des surfaces et verification finale. Vous recuperez des locaux prets a l\'emploi.',
    icon: 'sparkles',
  },
  {
    number: '04',
    title: 'Respect du planning',
    description: 'Delais annonces = delais tenus. Planning detaille communique en amont et suivi regulier de l\'avancement.',
    icon: 'calendar',
  },
];

// =========================
// PROJETS GALERIE
// =========================

export const platrerieProjects: PlatrerieProject[] = [
  {
    id: 'projet-ecole',
    title: 'Refection salle de classe',
    location: 'Schiltigheim (67)',
    type: 'Marche public',
    description: 'Remplacement des faux plafonds acoustiques et refection complete des murs. Intervention en site occupe pendant les vacances scolaires.',
  },
  {
    id: 'projet-appartement',
    title: 'Renovation appartement 85m2',
    location: 'Strasbourg Neustadt',
    type: 'Particulier',
    description: 'Redistribution complete avec creation de 2 chambres supplementaires. Ratissage et lissage parfait avant peinture.',
  },
  {
    id: 'projet-bureaux',
    title: 'Amenagement plateau bureaux',
    location: 'Illkirch-Graffenstaden',
    type: 'Professionnel',
    description: 'Creation de 8 bureaux individuels et 2 salles de reunion avec traitement acoustique renforce.',
  },
];

// =========================
// FAQ SPECIFIQUE PLATRERIE
// =========================

export const platrerieFAQ: PltrerieFAQ[] = [
  {
    id: 'horaires',
    question: 'Intervenez-vous en dehors des horaires classiques ou pendant les vacances scolaires ?',
    answer: 'Oui, nous proposons des interventions en horaires decales (soir, week-end) et privilegions les vacances scolaires pour les etablissements publics. Cette flexibilite permet de limiter les nuisances pour les occupants et d\'accelerer les delais de realisation.',
  },
  {
    id: 'acoustique',
    question: 'Quelle est la difference entre une cloison simple et une cloison acoustique ?',
    answer: 'Une cloison simple (type BA13) offre une separation visuelle et une isolation phonique de base. Une cloison acoustique integre des plaques speciales (type Placo Phonique) et une laine minerale haute densite pour atteindre des performances d\'isolation de 45 a 55 dB. Nous vous conseillons selon vos besoins : separation de bureaux, chambre, salle de reunion.',
  },
  {
    id: 'peinture',
    question: 'Gerez-vous egalement la mise en peinture apres les travaux de platrerie ?',
    answer: 'Absolument. Nous proposons une offre globale incluant la preparation des supports (enduit, ratissage) et la mise en peinture finale. Un interlocuteur unique pour l\'ensemble de vos travaux de second oeuvre. Decouvrez nos services de peinture et finitions.',
  },
  {
    id: 'duree',
    question: 'Combien de temps durent generalement les travaux de platrerie ?',
    answer: 'La duree depend de l\'ampleur du projet : une simple cloison peut etre realisee en 1-2 jours, tandis qu\'une redistribution complete d\'appartement prend 2-3 semaines. Apres visite technique, nous vous communiquons un planning detaille avec les differentes phases de travaux.',
  },
  {
    id: 'poussiere',
    question: 'Comment gerez-vous la poussiere et la proprete du chantier ?',
    answer: 'La proprete est notre engagement numero un. Nous utilisons des outils a aspiration integree, installons des sas de confinement si necessaire, et effectuons un nettoyage quotidien. En fin de chantier, une aspiration complete et un nettoyage des surfaces sont systematiquement realises.',
  },
  {
    id: 'garanties',
    question: 'Quelles garanties proposez-vous sur vos travaux de platrerie ?',
    answer: 'Tous nos travaux sont couverts par notre garantie decennale et notre responsabilite civile professionnelle. En tant qu\'entreprise certifiee RGE, nous respectons les normes en vigueur (DTU) et utilisons des materiaux agrees. Vous beneficiez d\'une tranquillite totale avec des documents justificatifs fournis sur demande.',
  },
];

// =========================
// ARGUMENTS MARCHES PUBLICS
// =========================

export const publicMarketsArguments = [
  {
    id: 'dossier',
    text: 'Dossier administratif complet (RGE, Decennale, RC Pro)',
  },
  {
    id: 'normes',
    text: 'Connaissance des normes ERP et securite incendie',
  },
  {
    id: 'reactivite',
    text: 'Reactivite sur appels d\'offres et chiffrages',
  },
  {
    id: 'site-occupe',
    text: 'Expertise intervention en site occupe',
  },
  {
    id: 'references',
    text: 'References collectivites disponibles',
  },
];
