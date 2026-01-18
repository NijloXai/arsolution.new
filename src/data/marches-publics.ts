/* =========================
   Donnees specifiques a la page Marches Publics
   ========================= */

// =========================
// TYPES
// =========================

export interface HeroData {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
}

export interface PrestationItem {
  id: string;
  title: string;
  icon: 'wall' | 'insulation' | 'finish' | 'paint' | 'layout';
  services: string[];
  sites: string[];
  link: {
    href: string;
    label: string;
  };
}

export interface ReferenceItem {
  id: string;
  title: string;
  location: string;
  sector: 'ecole' | 'mairie' | 'bureaux' | 'erp';
  sectorLabel: string;
  workType: string;
  duration: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface EngagementItem {
  id: string;
  title: string;
  description: string;
  icon: 'calendar' | 'sparkles' | 'user' | 'volume';
}

export interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  icon: 'rge' | 'decennale' | 'rcpro';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// =========================
// HERO
// =========================

export const heroData: HeroData = {
  eyebrow: 'Partenaire des collectivites en Alsace',
  title: 'Travaux de platrerie, isolation & finitions',
  titleAccent: 'Marches publics - Strasbourg & Alsace',
  subtitle: 'Specialiste intervention site occupe | Dossier technique complet sous 24h | Devis DPGF sur mesure',
  ctaPrimary: {
    label: 'Contacter pour marche public',
    href: '/contact?service=marches-publics',
  },
  ctaSecondary: {
    label: 'Appeler',
    href: 'tel:+33388000000',
  },
};

// =========================
// PRESTATIONS
// =========================

export const prestations: PrestationItem[] = [
  {
    id: 'platrerie',
    title: 'Platrerie & Faux plafonds',
    icon: 'wall',
    services: [
      'Cloisons seches et doublages',
      'Faux plafonds acoustiques et techniques',
      'Plafonds suspendus modulaires',
      'Gaines techniques et trappes',
    ],
    sites: ['Ecoles', 'Mairies', 'Bureaux', 'ERP'],
    link: {
      href: '/services/platrerie',
      label: 'En savoir plus',
    },
  },
  {
    id: 'isolation',
    title: 'Isolation thermique & phonique',
    icon: 'insulation',
    services: [
      'Isolation par l\'interieur (ITI)',
      'Doublage thermique conforme RT',
      'Traitement acoustique murs/plafonds',
      'Isolation des combles',
    ],
    sites: ['Batiments publics', 'Logements sociaux', 'Bureaux'],
    link: {
      href: '/services/isolation',
      label: 'En savoir plus',
    },
  },
  {
    id: 'enduit-finition',
    title: 'Enduits & Finitions',
    icon: 'finish',
    services: [
      'Enduits de lissage et ratissage',
      'Preparation des supports',
      'Rebouchage et reparations',
      'Finitions soignees',
    ],
    sites: ['Renovations', 'Neufs', 'Tous batiments'],
    link: {
      href: '/services/enduit-finition',
      label: 'En savoir plus',
    },
  },
  {
    id: 'peinture-lissage',
    title: 'Peinture & Lissage',
    icon: 'paint',
    services: [
      'Peinture professionnelle',
      'Lissage mural parfait',
      'Peinture technique (anti-humidite, etc.)',
      'Mise en couleur et decoration',
    ],
    sites: ['Locaux professionnels', 'Couloirs', 'Bureaux'],
    link: {
      href: '/services/peinture-lissage',
      label: 'En savoir plus',
    },
  },
  {
    id: 'amenagement-interieur',
    title: 'Renovation interieure',
    icon: 'layout',
    services: [
      'Redistribution des espaces',
      'Amenagement de locaux',
      'Lot finitions complet',
      'Coordination multi-corps de metier',
    ],
    sites: ['Parties communes', 'Bureaux', 'Espaces d\'accueil'],
    link: {
      href: '/services/amenagement-interieur',
      label: 'En savoir plus',
    },
  },
];

// =========================
// REFERENCES
// =========================

export const references: ReferenceItem[] = [
  {
    id: 'ref-ecole',
    title: 'Ecole primaire Jean Mace',
    location: 'Schiltigheim (67)',
    sector: 'ecole',
    sectorLabel: 'Ecole',
    workType: 'Faux plafonds acoustiques & peinture',
    duration: '3 semaines',
  },
  {
    id: 'ref-mairie',
    title: 'Services techniques',
    location: 'Illkirch-Graffenstaden (67)',
    sector: 'mairie',
    sectorLabel: 'Mairie',
    workType: 'Cloisons & amenagement bureaux',
    duration: '2 semaines',
  },
  {
    id: 'ref-bureaux',
    title: 'Plateau bureaux Wacken',
    location: 'Strasbourg (67)',
    sector: 'bureaux',
    sectorLabel: 'Bureaux',
    workType: 'Isolation phonique & plafonds',
    duration: '4 semaines',
  },
  {
    id: 'ref-erp',
    title: 'EHPAD renovation',
    location: 'Haguenau (67)',
    sector: 'erp',
    sectorLabel: 'ERP',
    workType: 'Renovation complete etage',
    duration: '6 semaines',
  },
];

// =========================
// METHODE - ETAPES
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Contact',
    description: 'Prise de contact et analyse de votre besoin. Reponse sous 48h.',
    icon: 'phone',
  },
  {
    number: '02',
    title: 'Visite technique',
    description: 'Releve sur site et etude des contraintes specifiques.',
    icon: 'eye',
  },
  {
    number: '03',
    title: 'Devis detaille',
    description: 'Chiffrage precis avec planning previsionnel.',
    icon: 'file',
  },
  {
    number: '04',
    title: 'Planification',
    description: 'Coordination avec vos equipes et planning valide.',
    icon: 'calendar',
  },
  {
    number: '05',
    title: 'Travaux',
    description: 'Execution dans le respect des delais et contraintes.',
    icon: 'tool',
  },
  {
    number: '06',
    title: 'Reception',
    description: 'Livraison propre et verifiee. PV de reception.',
    icon: 'check',
  },
];

// =========================
// ENGAGEMENTS
// =========================

export const engagements: EngagementItem[] = [
  {
    id: 'planning',
    title: 'Respect du planning',
    description: 'Delais annonces = delais tenus. Jalons communiques et suivis.',
    icon: 'calendar',
  },
  {
    id: 'proprete',
    title: 'Protection & proprete',
    description: 'Protection des zones, nettoyage quotidien, chantier propre.',
    icon: 'sparkles',
  },
  {
    id: 'interlocuteur',
    title: 'Interlocuteur unique',
    description: 'Un referent dedie pour une communication fluide.',
    icon: 'user',
  },
  {
    id: 'nuisances',
    title: 'Gestion des nuisances',
    description: 'Horaires adaptes, travaux silencieux si necessaire.',
    icon: 'volume',
  },
];

// =========================
// COMPLIANCE / CERTIFICATIONS
// =========================

export const complianceItems: ComplianceItem[] = [
  {
    id: 'rge',
    title: 'Certifie RGE',
    description: 'Reconnu Garant de l\'Environnement. Eligibilite aux aides publiques.',
    icon: 'rge',
  },
  {
    id: 'decennale',
    title: 'Garantie Decennale',
    description: 'Assurance decennale en cours de validite. Couverture complete.',
    icon: 'decennale',
  },
  {
    id: 'rcpro',
    title: 'RC Professionnelle',
    description: 'Responsabilite Civile Professionnelle. Protection de vos interets.',
    icon: 'rcpro',
  },
];

// =========================
// FAQ
// =========================

export const faqItems: FAQItem[] = [
  {
    id: 'delai-devis',
    question: 'Quel est le delai de reponse pour un devis ?',
    answer: 'Nous nous engageons a repondre sous 48h ouvrees pour toute demande de devis. Apres visite technique si necessaire, vous recevez un chiffrage detaille avec planning previsionnel.',
  },
  {
    id: 'site-occupe',
    question: 'Intervenez-vous en site occupe ?',
    answer: 'Oui, nous sommes habitues aux interventions en site occupe : ecoles pendant les cours, bureaux en activite, EHPAD avec residents. Nous adaptons nos horaires et methodes pour limiter les nuisances.',
  },
  {
    id: 'proprete',
    question: 'Comment gerez-vous la proprete du chantier ?',
    answer: 'La proprete est notre priorite. Protection systematique des zones (baches, films), nettoyage quotidien des espaces de travail, aspiration et nettoyage complet en fin de chantier.',
  },
  {
    id: 'documents',
    question: 'Quels documents administratifs fournissez-vous ?',
    answer: 'Nous fournissons sur demande : attestation RGE, attestation d\'assurance decennale et RC Pro, Kbis, references de chantiers similaires. Dossier technique complet sous 24h.',
  },
  {
    id: 'zone',
    question: 'Quelle est votre zone d\'intervention ?',
    answer: 'Nous intervenons sur l\'ensemble de l\'Alsace : Strasbourg et son agglomeration, Bas-Rhin (67) et Haut-Rhin (68). Pour les projets hors zone, nous etudions au cas par cas.',
  },
  {
    id: 'petits-chantiers',
    question: 'Acceptez-vous les petits chantiers ?',
    answer: 'Oui, nous traitons aussi bien les petits chantiers (une piece, un couloir) que les projets d\'envergure. Chaque demande est etudiee avec la meme attention.',
  },
  {
    id: 'cctp',
    question: 'Respectez-vous les CCTP des marches publics ?',
    answer: 'Oui, nous etudions systematiquement le Cahier des Clauses Techniques Particulieres. Notre equipe fournit un memoire technique detaille conforme a vos exigences.',
  },
  {
    id: 'dpgf',
    question: 'Comment fonctionne le chiffrage DPGF ?',
    answer: 'Nous remplissons la Decomposition du Prix Global Forfaitaire avec precision. Chaque poste est detaille selon vos quantites. Variantes proposees si le RC le permet.',
  },
  {
    id: 'references-publiques',
    question: 'Avez-vous des references en secteur public ?',
    answer: 'Oui, nous avons realise des chantiers pour des ecoles, mairies, EHPAD et batiments administratifs en Alsace. References disponibles avec coordonnees maitres d\'ouvrage.',
  },
];

// =========================
// SITE OCCUPE HIGHLIGHT
// =========================

export const siteOccupeHighlight = {
  title: 'Expertise site occupe',
  items: [
    'Interventions hors heures ouvrables',
    'Travaux pendant les vacances scolaires',
    'Confinement et protection des zones',
    'Communication avec les occupants',
  ],
};
