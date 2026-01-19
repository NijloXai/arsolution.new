/* =========================
   Donnees specifiques a la page A propos
   ========================= */

// =========================
// TYPES
// =========================

export interface AboutHeroData {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  since: string;
  badges: {
    id: string;
    label: string;
    icon: 'shield' | 'check' | 'file' | 'clock';
  }[];
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
}

export interface NavAnchor {
  id: string;
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ServiceLink {
  id: string;
  title: string;
  href: string;
  icon: 'wall' | 'insulation' | 'finish' | 'paint' | 'layout';
}

export interface EngagementItem {
  id: string;
  title: string;
  description: string;
  icon: 'calendar' | 'sparkles' | 'check' | 'file' | 'user' | 'shield';
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface PublicMarketsHighlight {
  id: string;
  title: string;
  description: string;
}

export interface TeamBullet {
  id: string;
  text: string;
}

export interface ProjectProof {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  project?: string;
}

// =========================
// HERO DATA
// =========================

export const aboutHeroData: AboutHeroData = {
  eyebrow: 'Entreprise familiale depuis 2006',
  title: 'Votre partenaire',
  titleAccent: 'renovation interieure en Alsace',
  subtitle:
    'Specialistes platrerie, isolation et finitions a Strasbourg. Une equipe certifiee RGE, engagee pour des chantiers propres, des delais respectes et un travail soigne.',
  since: 'Depuis 2006',
  badges: [
    { id: 'rge', label: 'Certifie RGE', icon: 'shield' },
    { id: 'decennale', label: 'Garantie Decennale', icon: 'check' },
    { id: 'rcpro', label: 'RC Professionnelle', icon: 'file' },
    { id: 'reponse', label: 'Reponse 24h', icon: 'clock' },
  ],
  ctaPrimary: {
    label: 'Demander un devis gratuit',
    href: '/contact',
  },
  ctaSecondary: {
    label: 'Marches publics : contact dedie',
    href: '/contact?service=marches-publics',
  },
};

// =========================
// NAVIGATION ANCHORS
// =========================

export const navAnchors: NavAnchor[] = [
  { id: 'histoire', label: 'Notre Histoire', href: '#histoire' },
  { id: 'engagements', label: 'Engagements', href: '#engagements' },
  { id: 'methode', label: 'Methode', href: '#methode' },
  { id: 'marches-publics', label: 'Marches Publics', href: '#marches-publics' },
  { id: 'equipe', label: 'Equipe', href: '#equipe' },
];

// =========================
// TIMELINE / HISTOIRE
// =========================

export const timelineItems: TimelineItem[] = [
  {
    year: '2006',
    title: 'Creation de l\'entreprise',
    description:
      'Fondation d\'AR+Solution a Strasbourg. Debut des activites de platrerie et finitions pour particuliers.',
  },
  {
    year: '2012',
    title: 'Certification RGE obtenue',
    description:
      'Reconnaissance officielle de notre expertise en renovation energetique. Ouverture aux marches publics.',
  },
  {
    year: '2020',
    title: 'Expertise confirmee',
    description:
      'Plus de 500 chantiers realises. Equipe stable de 8 professionnels. Specialisation isolation et finitions haut de gamme.',
  },
];

export const missionText =
  'Depuis 2006, AR+Solution accompagne particuliers, professionnels et collectivites dans leurs projets de renovation interieure en Alsace. Notre mission : transformer vos espaces avec un savoir-faire artisanal, des materiaux de qualite et un respect total des delais.';

// =========================
// SERVICE LINKS (MAILLAGE)
// =========================

export const serviceLinks: ServiceLink[] = [
  {
    id: 'platrerie',
    title: 'Platrerie & Faux plafonds',
    href: '/services/platrerie',
    icon: 'wall',
  },
  {
    id: 'isolation',
    title: 'Isolation thermique & phonique',
    href: '/services/isolation',
    icon: 'insulation',
  },
  {
    id: 'enduit',
    title: 'Enduits & Finitions',
    href: '/services/enduit-finition',
    icon: 'finish',
  },
  {
    id: 'peinture',
    title: 'Peinture & Lissage',
    href: '/services/peinture-lissage',
    icon: 'paint',
  },
  {
    id: 'amenagement',
    title: 'Amenagement interieur',
    href: '/services/amenagement-interieur',
    icon: 'layout',
  },
];

// =========================
// ENGAGEMENTS (6 items)
// =========================

export const engagements: EngagementItem[] = [
  {
    id: 'organisation',
    title: 'Organisation rigoureuse',
    description:
      'Chaque chantier est planifie avec precision. Vous connaissez les dates, les etapes et les intervenants.',
    icon: 'calendar',
  },
  {
    id: 'chantier',
    title: 'Chantier respecte',
    description:
      'Protection des sols et meubles, nettoyage quotidien. Votre interieur reste habitable pendant les travaux.',
    icon: 'sparkles',
  },
  {
    id: 'finitions',
    title: 'Finitions 0 defaut',
    description:
      'Controle qualite systematique avant livraison. Nous ne partons qu\'une fois le travail parfait.',
    icon: 'check',
  },
  {
    id: 'transparence',
    title: 'Transparence totale',
    description:
      'Devis detaille poste par poste. Aucune surprise sur la facture finale.',
    icon: 'file',
  },
  {
    id: 'interlocuteur',
    title: 'Interlocuteur unique',
    description:
      'Un referent dedie du premier contact a la reception. Communication fluide et reactive.',
    icon: 'user',
  },
  {
    id: 'garanties',
    title: 'Garanties completes',
    description:
      'Certification RGE, garantie decennale et RC professionnelle. Votre projet est securise.',
    icon: 'shield',
  },
];

// =========================
// METHODE (6 etapes)
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Contact',
    description: 'Premier echange par telephone ou formulaire. Nous comprenons votre besoin.',
    icon: 'phone',
  },
  {
    number: '02',
    title: 'Visite technique',
    description: 'Deplacement gratuit sur site. Releve precis et etude des contraintes.',
    icon: 'eye',
  },
  {
    number: '03',
    title: 'Devis detaille',
    description: 'Proposition claire avec chaque poste explique. Validite 30 jours.',
    icon: 'file',
  },
  {
    number: '04',
    title: 'Planification',
    description: 'Dates definies ensemble selon vos contraintes. Delais discutes et adaptes.',
    icon: 'calendar',
  },
  {
    number: '05',
    title: 'Travaux',
    description: 'Execution soignee par nos equipes. Suivi regulier et points d\'etape.',
    icon: 'tool',
  },
  {
    number: '06',
    title: 'Reception',
    description: 'Controle qualite final. Livraison propre et PV de reception.',
    icon: 'check',
  },
];

export const methodHighlight =
  'Delais discutes et adaptes selon les contraintes de chaque chantier';

// =========================
// MARCHES PUBLICS SECTION
// =========================

export const publicMarketsHighlights: PublicMarketsHighlight[] = [
  {
    id: 'conformite',
    title: 'Conformite administrative',
    description:
      'Dossiers complets (RGE, decennale, RC Pro, Kbis) fournis sous 24h. Memoire technique sur mesure.',
  },
  {
    id: 'site-occupe',
    title: 'Expertise site occupe',
    description:
      'Interventions en ecoles, EHPAD, bureaux en activite. Horaires adaptes et nuisances minimisees.',
  },
  {
    id: 'references',
    title: 'References verifiables',
    description:
      'Chantiers realises pour mairies, etablissements scolaires et bailleurs. Contacts disponibles.',
  },
];

export const publicMarketsNote =
  'Dossier technique complet sous 24h. Devis DPGF sur mesure.';

// =========================
// EQUIPE
// =========================

export const teamBullets: TeamBullet[] = [
  { id: 'stabilite', text: 'Equipe stable de 8 professionnels salaries' },
  { id: 'experience', text: 'Moyenne de 12 ans d\'experience dans le second oeuvre' },
  { id: 'formation', text: 'Formation continue aux nouvelles techniques et materiaux' },
  { id: 'humain', text: 'Approche humaine : respect, ecoute et conseil' },
  { id: 'fierte', text: 'Fierte du travail bien fait, attention aux details' },
];

export const teamDescription =
  'Chez AR+Solution, l\'humain est au coeur de notre metier. Notre equipe allie savoir-faire technique et qualites relationnelles pour vous accompagner sereinement dans vos projets.';

// =========================
// PREUVES (Projets avant/apres)
// =========================

export const projectProofs: ProjectProof[] = [
  {
    id: 'projet-1',
    title: 'Renovation appartement Strasbourg',
    location: 'Strasbourg Centre (67)',
    beforeImage: '/images/projects/avant-1.jpg',
    afterImage: '/images/projects/apres-1.jpg',
  },
  {
    id: 'projet-2',
    title: 'Isolation combles Schiltigheim',
    location: 'Schiltigheim (67)',
    beforeImage: '/images/projects/avant-2.jpg',
    afterImage: '/images/projects/apres-2.jpg',
  },
  {
    id: 'projet-3',
    title: 'Faux plafonds bureaux',
    location: 'Illkirch (67)',
    beforeImage: '/images/projects/avant-3.jpg',
    afterImage: '/images/projects/apres-3.jpg',
  },
];

// =========================
// AVIS CLIENTS
// =========================

export const reviews: ReviewItem[] = [
  {
    id: 'avis-1',
    author: 'Marie L.',
    rating: 5,
    text: 'Travail impeccable, equipe ponctuelle et chantier toujours propre. Je recommande vivement AR+Solution.',
    project: 'Renovation salon',
  },
  {
    id: 'avis-2',
    author: 'Jean-Pierre D.',
    rating: 5,
    text: 'Isolation parfaite, on sent vraiment la difference. Delais respectes et communication excellente.',
    project: 'Isolation thermique',
  },
];
