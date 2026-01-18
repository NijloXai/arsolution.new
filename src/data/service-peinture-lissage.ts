/* =========================
   Donnees specifiques a la page Service Peinture & Lissage
   ========================= */

// Reutilisation des types communs
import type { ScopeItem, MethodStep } from './service-platrerie';
export type { ScopeItem, MethodStep };

// =========================
// TYPES SPECIFIQUES PEINTURE
// =========================

export interface PeintureProject {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface PeintureFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface QualityDetail {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

// =========================
// PERIMETRE DES PRESTATIONS
// =========================

export const scopeItems: ScopeItem[] = [
  {
    id: 'decorative',
    title: 'Peinture Decorative',
    description: 'Murs, plafonds, boiseries. Conseils colorimetriques, finitions mates, velours ou satinees pour un resultat personnalise.',
    icon: 'finish',
  },
  {
    id: 'grands-volumes',
    title: 'Grands Volumes & Airless',
    description: 'Application mecanisee pour bureaux, cages d\'escalier et locaux professionnels. Rapidite et homogeneite parfaite.',
    icon: 'office',
  },
  {
    id: 'techniques',
    title: 'Finitions Techniques',
    description: 'Peintures lessivables, anti-humidite, depolluantes. Solutions adaptees aux contraintes de chaque espace.',
    icon: 'custom',
  },
];

// =========================
// QUALITE DE FINITION
// =========================

export const qualityDetails: QualityDetail[] = [
  {
    id: 'rechampi',
    title: 'Le Rechampi',
    description: 'Lignes de separation murs/plafonds nettes, sans bavures. Le detail qui fait la difference.',
    icon: 'droplet',
  },
  {
    id: 'tendu',
    title: 'Le Tendu',
    description: 'Pas de trace de rouleau, application uniforme grace au lissage fin prealable.',
    icon: 'layers',
  },
  {
    id: 'plinthes',
    title: 'Plinthes & Boiseries',
    description: 'Pas de gouttes au sol, joints acryliques propres avant peinture.',
    icon: 'frame',
  },
];

// =========================
// METHODE CHANTIER SEREIN
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Protection integrale',
    description: 'Baches sur les sols, films sur le mobilier, scotch de masquage professionnel. Votre interieur est protege comme le notre.',
    icon: 'shield',
  },
  {
    number: '02',
    title: 'Demontage technique',
    description: 'Prises electriques, interrupteurs, radiateurs : nous demontons pour peindre derriere et garantir un resultat impeccable.',
    icon: 'tool',
  },
  {
    number: '03',
    title: 'Application experte',
    description: 'Peintures premium Ecolabel A+, application soignee en plusieurs couches pour une couvrance parfaite et durable.',
    icon: 'paintbrush',
  },
  {
    number: '04',
    title: 'Nettoyage complet',
    description: 'Remontage des equipements, aspiration complete, nettoyage des surfaces. Vous recuperez un interieur pret a vivre.',
    icon: 'sparkles',
  },
];

// =========================
// PROJETS GALERIE
// =========================

export const peintureProjects: PeintureProject[] = [
  {
    id: 'projet-bureaux-centre',
    title: 'Mise en blanc bureaux 400m2',
    location: 'Strasbourg Centre',
    type: 'Professionnel',
    description: 'Remise en peinture complete d\'un plateau de bureaux en site occupe. Application Airless pour un rendu homogene et une intervention rapide.',
  },
  {
    id: 'projet-appartement-neudorf',
    title: 'Mise en teintes appartement',
    location: 'Strasbourg Neudorf',
    type: 'Particulier',
    description: 'Renovation complete avec conseils colorimetriques. Couleurs tendance (Bleu nuit, Terracotta) et finitions velours haut de gamme.',
  },
  {
    id: 'projet-ecole-schiltigheim',
    title: 'Renovation salles de classe',
    location: 'Schiltigheim (67)',
    type: 'Marche public',
    description: 'Peinture lessivable et depolluante pour 6 salles de classe. Intervention pendant les vacances scolaires, peintures certifiees A+.',
  },
];

// =========================
// FAQ SPECIFIQUE PEINTURE
// =========================

export const peintureFAQ: PeintureFAQ[] = [
  {
    id: 'type-peinture',
    question: 'Quel type de peinture utilisez-vous ?',
    answer: 'Nous travaillons exclusivement avec des peintures professionnelles de marques reconnues (Seigneurie, Zolpan). Toutes nos peintures interieures sont certifiees A+ (tres faibles emissions de COV), garantissant un air interieur sain. Pour les locaux sensibles (ecoles, creches), nous proposons des gammes depolluantes et Ecolabel.',
  },
  {
    id: 'finition',
    question: 'Mat, Velours ou Satin : que choisir ?',
    answer: 'Le Mat profond masque les defauts et offre un rendu contemporain, ideal pour les plafonds et pieces calmes. Le Velours (ou Satin leger) apporte de la luminosite et resiste mieux aux frottements : parfait pour les chambres et sejours. Le Satin est lessivable et convient aux pieces humides, couloirs et cuisines. Nous vous conseillons lors de la visite technique.',
  },
  {
    id: 'delai',
    question: 'Combien de temps pour peindre un appartement 80m2 ?',
    answer: 'Pour un appartement de 80m2 avec preparation standard des supports, comptez 5 a 7 jours ouvrables. Ce delai inclut la protection, la preparation des murs (rebouchage, egrenage), l\'application de deux couches de peinture et le nettoyage final. La duree peut varier selon l\'etat initial des murs et le nombre de couleurs souhaitees.',
  },
  {
    id: 'odeur',
    question: 'Vos peintures sentent-elles fort ?',
    answer: 'Non, les peintures que nous utilisons sont a phase aqueuse (acryliques) avec de tres faibles emissions de COV. L\'odeur est minime et se dissipe en quelques heures apres application. Vous pouvez rester dans votre logement pendant les travaux sans desagrement, et les pieces sont habitables des le lendemain.',
  },
  {
    id: 'preparation',
    question: 'La preparation des murs est-elle incluse ?',
    answer: 'Oui, notre devis inclut systematiquement la preparation des supports : rebouchage des fissures et trous, egrenage, ponçage et depoussierage. Pour les murs tres abimes necessitant un ratissage complet ou un enduit de lissage, nous vous orientons vers notre offre globale platrerie + peinture avec un seul interlocuteur.',
  },
];

// =========================
// ARGUMENTS MARCHES PUBLICS
// =========================

export const publicMarketsArguments = [
  {
    id: 'ecolabel',
    text: 'Peintures certifiees A+ et Ecolabel',
  },
  {
    id: 'site-occupe',
    text: 'Expertise intervention en site occupe',
  },
  {
    id: 'airless',
    text: 'Application Airless grands volumes',
  },
  {
    id: 'decennale',
    text: 'Garantie Decennale et RC Pro attestees',
  },
  {
    id: 'references',
    text: 'References collectivites et ecoles',
  },
];
