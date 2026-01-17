/* =========================
   Donnees specifiques a la page Service Amenagement Interieur
   ========================= */

// Reutilisation des types communs
import type { ScopeItem, UseCase, MethodStep } from './service-platrerie';
export type { ScopeItem, UseCase, MethodStep };

// =========================
// TYPES SPECIFIQUES AMENAGEMENT
// =========================

export interface AmenagementProject {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface AmenagementFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface UniqueInterlocutorPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// =========================
// PERIMETRE DES PRESTATIONS
// =========================

export const scopeItems: ScopeItem[] = [
  {
    id: 'redistribution',
    title: 'Redistribution & Cloisonnement',
    description: 'Creation de pieces, abattement de murs porteurs ou non, nouvelles cloisons seches. Reorganisez completement vos espaces selon vos besoins.',
    icon: 'layout',
  },
  {
    id: 'volumes',
    title: 'Optimisation de volumes',
    description: 'Amenagement de combles, caves et sous-sols. Transformez vos espaces inexploites en pieces habitables et fonctionnelles.',
    icon: 'volume',
  },
  {
    id: 'professionnels',
    title: 'Locaux Professionnels',
    description: 'Bureaux, open-spaces, faux-plafonds techniques et correction acoustique. Solutions adaptees aux contraintes des espaces de travail.',
    icon: 'office',
    link: {
      href: '/services/platrerie',
      label: 'Voir nos faux-plafonds',
    },
  },
  {
    id: 'sur-mesure',
    title: 'Creation sur-mesure',
    description: 'Dressings integres, niches decoratives, coffrages techniques et rangements malins. Des amenagements personnalises pour optimiser chaque recoin.',
    icon: 'custom',
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
    description: 'Nous maitrisons les procedures des marches publics et les contraintes des etablissements recevant du public : conformite ERP, intervention en site occupe, respect des delais administratifs.',
    keywords: ['ERP', 'Conformite', 'Site occupe', 'Appel d\'offres', 'Dossier complet'],
    highlights: [
      'Contact dedie pour les appels d\'offres et dossiers techniques',
      'Interventions planifiees pendant vacances scolaires ou horaires decales',
      'Respect strict des normes incendie, acoustiques et PMR',
      'Dossier administratif complet fourni (RGE, Decennale, attestations)',
    ],
  },
  {
    id: 'professionnels',
    label: 'Professionnels & Coproprietes',
    title: 'Bureaux, commerces, parties communes',
    description: 'Reamenagement de vos locaux professionnels avec une priorite : la continuite de votre activite. Nous minimisons les nuisances et respectons vos contraintes operationnelles.',
    keywords: ['Continuite activite', 'Nuisances limitees', 'Open-space', 'Acoustique'],
    highlights: [
      'Planification adaptee a votre activite (soirs, week-ends)',
      'Gestion rigoureuse de la poussiere et du bruit',
      'Traitement acoustique entre espaces de travail',
      'Renovation des parties communes de copropriete',
    ],
  },
  {
    id: 'particuliers',
    label: 'Particuliers',
    title: 'Appartements, maisons, combles',
    description: 'Transformez votre interieur selon vos envies : redistribution des pieces, amenagement de combles, creation de rangements. Un accompagnement sur-mesure pour un resultat a la hauteur de vos attentes.',
    keywords: ['Confort', 'Design', 'Proprete', 'Conseil'],
    highlights: [
      'Conseil esthetique et technique personnalise',
      'Protection soignee de vos meubles et sols',
      'Chantier propre : nettoyage quotidien assure',
      'Respect de votre quotidien pendant les travaux',
    ],
  },
];

// =========================
// ARGUMENTS INTERLOCUTEUR UNIQUE
// =========================

export const uniqueInterlocutorPoints: UniqueInterlocutorPoint[] = [
  {
    id: 'coordination',
    title: 'Coordination fluide',
    description: 'Plus de "c\'est la faute du peintre" ou de conflits entre corps de metier. Un seul responsable gere l\'ensemble du chantier.',
    icon: 'users',
  },
  {
    id: 'planning',
    title: 'Planning unique et maitrise',
    description: 'Un seul calendrier, pas de trous dans le planning entre deux artisans. Les travaux s\'enchainent sans temps mort.',
    icon: 'calendar',
  },
  {
    id: 'coherence',
    title: 'Coherence technique',
    description: 'L\'isolation est pensee des le depart pour la finition peinture. Chaque etape prepare la suivante pour un resultat optimal.',
    icon: 'puzzle',
  },
  {
    id: 'economie',
    title: 'Gain de temps et economies',
    description: 'Moins d\'allers-retours, moins de frais de deplacement multiples, delais reduits. Un budget mieux maitrise.',
    icon: 'piggy-bank',
  },
];

// =========================
// METHODE SERENITE
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Visite technique & Devis precis',
    description: 'Nous etudions votre projet sur place, identifions les contraintes techniques et vous fournissons un devis detaille et transparent.',
    icon: 'clipboard',
  },
  {
    number: '02',
    title: 'Planification & Protection',
    description: 'Etablissement du planning detaille, installation des protections : baches sur les sols, films sur les meubles, sas anti-poussiere si necessaire.',
    icon: 'shield',
  },
  {
    number: '03',
    title: 'Travaux coordonnes',
    description: 'Enchainement fluide des corps de metier : platrerie, isolation puis peinture. Un chef de chantier unique supervise l\'avancement.',
    icon: 'tool',
  },
  {
    number: '04',
    title: 'Nettoyage & Reception',
    description: 'Evacuation des gravats, aspiration complete, nettoyage des surfaces. Visite de reception finale pour valider ensemble le resultat.',
    icon: 'sparkles',
  },
];

// =========================
// PROJETS GALERIE
// =========================

export const amenagementProjects: AmenagementProject[] = [
  {
    id: 'projet-bureaux-schiltigheim',
    title: 'Reamenagement open-space',
    location: 'Schiltigheim (67)',
    type: 'Marche public',
    description: 'Transformation d\'un plateau de 200m2 en espaces de travail modulables. Cloisons vitrees, faux-plafonds acoustiques et isolation phonique renforcee. Intervention en site occupe.',
  },
  {
    id: 'projet-combles-colmar',
    title: 'Amenagement combles 45m2',
    location: 'Colmar (68)',
    type: 'Particulier',
    description: 'Creation d\'une suite parentale sous combles : chambre, salle de bain et dressing integre. Isolation thermique performante et plafonds rampants sur-mesure.',
  },
  {
    id: 'projet-appartement-strasbourg',
    title: 'Redistribution appartement 95m2',
    location: 'Strasbourg Orangerie',
    type: 'Particulier',
    description: 'Abattement de cloisons pour creer un grand sejour ouvert, nouvelle cuisine fermee et ajout d\'une chambre. Finitions haut de gamme avec enduits lisses.',
  },
];

// =========================
// FAQ SPECIFIQUE AMENAGEMENT
// =========================

export const amenagementFAQ: AmenagementFAQ[] = [
  {
    id: 'delais',
    question: 'Quels sont les delais pour un projet d\'amenagement interieur complet ?',
    answer: 'Les delais varient selon l\'ampleur du projet : comptez 1 a 2 semaines pour une simple redistribution de pieces, 3 a 4 semaines pour un amenagement de combles complet. Apres visite technique, nous vous communiquons un planning precis avec les differentes phases de travaux.',
  },
  {
    id: 'site-occupe',
    question: 'Pouvez-vous intervenir si j\'habite dans le logement pendant les travaux ?',
    answer: 'Oui, nous sommes habitues aux interventions en site occupe. Nous mettons en place des sas de protection, assurons un nettoyage quotidien et organisons les travaux piece par piece pour vous permettre de continuer a vivre dans votre logement.',
  },
  {
    id: 'gravats',
    question: 'Comment gerez-vous l\'evacuation des gravats ?',
    answer: 'L\'evacuation des gravats est incluse dans nos prestations. Nous disposons de nos propres bennes et assurons l\'enlevement regulier des dechets. Votre chantier reste propre et accessible tout au long des travaux.',
  },
  {
    id: 'coordination',
    question: 'Dois-je coordonner plusieurs artisans pour mon projet ?',
    answer: 'Non, c\'est tout l\'interet de notre offre globale. Nous gerons l\'ensemble des corps de metier (platrerie, isolation, peinture) avec un interlocuteur unique. Vous n\'avez qu\'un seul contact et nous nous chargeons de la coordination.',
  },
  {
    id: 'murs-porteurs',
    question: 'Pouvez-vous abattre des murs porteurs ?',
    answer: 'Oui, apres etude de structure par un bureau d\'etudes agree. Nous posons les renforts metalliques (IPN, UPN) necessaires et assurons la conformite des travaux. Cette prestation est soumise a declaration prealable en copropriete.',
  },
  {
    id: 'isolation',
    question: 'L\'isolation est-elle incluse dans vos prestations d\'amenagement ?',
    answer: 'Absolument. Nous sommes certifies RGE et integrons systematiquement l\'isolation thermique et acoustique dans nos projets d\'amenagement. Cela vous permet de beneficier des aides a la renovation energetique (MaPrimeRenov\', CEE).',
  },
  {
    id: 'devis',
    question: 'Comment se deroule l\'etablissement du devis ?',
    answer: 'Nous realisons une visite technique gratuite pour evaluer votre projet. Sous 5 jours ouvrables, vous recevez un devis detaille avec le descriptif precis des travaux, les materiaux utilises et le planning previsionnel. Aucun engagement, aucuns frais.',
  },
  {
    id: 'garanties',
    question: 'Quelles garanties proposez-vous sur vos travaux ?',
    answer: 'Tous nos travaux sont couverts par notre garantie decennale et notre responsabilite civile professionnelle. En tant qu\'entreprise certifiee RGE, nous respectons les normes en vigueur (DTU) et utilisons des materiaux agrees. Les attestations sont fournies sur demande.',
  },
];

// =========================
// ARGUMENTS MARCHES PUBLICS
// =========================

export const publicMarketsArguments = [
  {
    id: 'rge',
    text: 'Certification RGE a jour (isolation, efficacite energetique)',
  },
  {
    id: 'decennale',
    text: 'Garantie Decennale et RC Pro attestees',
  },
  {
    id: 'erp',
    text: 'Maitrise des normes ERP (securite incendie, accessibilite)',
  },
  {
    id: 'appels-offres',
    text: 'Experience reponses appels d\'offres publics',
  },
  {
    id: 'site-occupe',
    text: 'Expertise interventions en site occupe',
  },
  {
    id: 'references',
    text: 'References collectivites et etablissements publics',
  },
];
