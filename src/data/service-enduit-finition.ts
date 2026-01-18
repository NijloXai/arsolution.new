/* =========================
   Donnees specifiques a la page Service Enduit & Finition
   ========================= */

// Reutilisation des types communs
import type { ScopeItem, MethodStep } from './service-platrerie';
export type { ScopeItem, MethodStep };

// =========================
// TYPES SPECIFIQUES ENDUIT
// =========================

export interface EnduitProject {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface EnduitFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface DiagnosticPoint {
  id: string;
  title: string;
  description: string;
  icon: 'crack' | 'wave' | 'smooth' | 'light';
}

export interface BeforeAfterState {
  label: string;
  description: string;
  indicators: string[];
}

// =========================
// PERIMETRE DES PRESTATIONS
// =========================

export const scopeItems: ScopeItem[] = [
  {
    id: 'ratissage',
    title: 'Ratissage & Lissage (Q3/Q4)',
    description: 'Murs parfaitement lisses, ideaux avant peinture laquee ou velours. Finitions qualite Q3 standard ou Q4 haut de gamme pour un rendu miroir.',
    icon: 'finish',
  },
  {
    id: 'airless',
    title: 'Enduit Airless (Mecanise)',
    description: 'Application mecanisee pour grandes surfaces : bureaux, ecoles, collectivites. Rapidite d\'execution et homogeneite parfaite garanties.',
    icon: 'office',
  },
  {
    id: 'decoratifs',
    title: 'Enduits Decoratifs',
    description: 'Effets matiere, stuc venitien, enduit a la chaux. Creez des ambiances uniques avec des textures et des finitions sur-mesure.',
    icon: 'custom',
  },
  {
    id: 'reparation',
    title: 'Rebouchage & Degats des Eaux',
    description: 'Remise a neuf des murs abimes : fissures, impacts, traces d\'humidite. Preparation ideale avant relocation ou revente.',
    icon: 'wall',
  },
];

// =========================
// POINTS DIAGNOSTIQUES
// =========================

export const diagnosticPoints: DiagnosticPoint[] = [
  {
    id: 'planeite',
    title: 'Planeite parfaite',
    description: 'Un mur brut presente des irregularites invisibles a l\'oeil nu, mais revelees par la peinture. L\'enduit corrige ces defauts.',
    icon: 'wave',
  },
  {
    id: 'fissures',
    title: 'Traitement des fissures',
    description: 'Les micro-fissures reapparaissent systematiquement sous la peinture. Seul un enduit adapte garantit un resultat durable.',
    icon: 'crack',
  },
  {
    id: 'lissage',
    title: 'Lissage haute finition',
    description: 'Le niveau de finition Q4 offre un rendu miroir, indispensable pour les peintures brillantes et les laques.',
    icon: 'smooth',
  },
  {
    id: 'lumiere',
    title: 'Controle lumiere rasante',
    description: 'Nous verifions chaque mur sous eclairage rasant pour detecter et corriger la moindre imperfection avant peinture.',
    icon: 'light',
  },
];

// =========================
// METHODE CHANTIER SEREIN
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Protection absolue',
    description: 'Bachage complet des sols, protection des menuiseries et du mobilier. Votre interieur est preserve comme s\'il etait le notre.',
    icon: 'shield',
  },
  {
    number: '02',
    title: 'Poncage sans poussiere',
    description: 'Ponceuses girafes a aspiration integree : 98% de la poussiere captee a la source. Fini les chantiers envahissants.',
    icon: 'sparkles',
  },
  {
    number: '03',
    title: 'Application experte',
    description: 'Enduits appliques aux niveaux Q3 ou Q4 selon vos besoins. Controle systematique sous lampe rasante avant validation.',
    icon: 'paintbrush',
  },
  {
    number: '04',
    title: 'Livraison parfaite',
    description: 'Nettoyage complet du chantier, verification finale point par point. Vous recuperez des murs prets a peindre, zero defaut.',
    icon: 'check',
  },
];

// =========================
// ETATS AVANT/APRES
// =========================

export const beforeState: BeforeAfterState = {
  label: 'Mur brut / abime',
  description: 'Surface irreguliere, defauts visibles',
  indicators: [
    'Fissures et micro-fissures',
    'Traces de reprise visibles',
    'Irregularites de surface',
    'Joints de plaques apparents',
  ],
};

export const afterState: BeforeAfterState = {
  label: 'Apres enduit Q4',
  description: 'Surface parfaitement lisse et uniforme',
  indicators: [
    'Planeite parfaite',
    'Aucun defaut visible',
    'Pret pour laque ou velours',
    'Rendu professionnel garanti',
  ],
};

// =========================
// PROJETS GALERIE
// =========================

export const enduitProjects: EnduitProject[] = [
  {
    id: 'projet-haussmannien',
    title: 'Ratissage complet appartement',
    location: 'Strasbourg Neustadt',
    type: 'Particulier',
    description: 'Remise a neuf des murs d\'un appartement haussmannien de 120m2. Ratissage Q4 complet avant peinture laquee dans le sejour.',
  },
  {
    id: 'projet-ecole',
    title: 'Renovation 6 salles de classe',
    location: 'Schiltigheim (67)',
    type: 'Marche public',
    description: 'Enduit airless sur 800m2 de murs. Intervention pendant les vacances scolaires, delais tenus a la journee pres.',
  },
  {
    id: 'projet-bureaux',
    title: 'Mise en finition plateau bureaux',
    location: 'Illkirch-Graffenstaden',
    type: 'Professionnel',
    description: 'Application mecanisee airless pour un plateau de 500m2. Finition Q3 homogene, livree en 5 jours ouvrables.',
  },
];

// =========================
// FAQ SPECIFIQUE ENDUIT
// =========================

export const enduitFAQ: EnduitFAQ[] = [
  {
    id: 'poussiere',
    question: 'Le poncage genere-t-il beaucoup de poussiere ?',
    answer: 'Non, nous utilisons exclusivement des ponceuses girafes a aspiration integree qui captent 98% de la poussiere a la source. Combine a nos sas de protection et baches, votre interieur reste propre tout au long du chantier. C\'est l\'un de nos engagements qualite les plus apprecies par nos clients.',
  },
  {
    id: 'difference',
    question: 'Quelle difference entre lissage et ratissage ?',
    answer: 'Le lissage consiste a appliquer une fine couche d\'enduit pour uniformiser la surface (finition Q3). Le ratissage est un travail plus approfondi : plusieurs passes d\'enduit pour obtenir une planeite parfaite (finition Q4), indispensable avant peinture laquee ou satinee. Nous vous conseillons selon le rendu final souhaite.',
  },
  {
    id: 'delais',
    question: 'Combien de temps pour enduire un salon ou une salle de classe ?',
    answer: 'Un salon standard (25-30m2 de murs) necessite 2-3 jours de travail incluant le sechage entre les passes. Une salle de classe complete (environ 80m2 de murs) demande 3-4 jours avec notre materiel airless. Les delais precis dependent de l\'etat initial des murs et du niveau de finition souhaite.',
  },
  {
    id: 'budget',
    question: 'Quel budget prevoir pour des travaux d\'enduit ?',
    answer: 'Les tarifs varient selon l\'etat des murs et le niveau de finition : comptez environ 15-25€/m2 pour un ratissage Q3 standard, et 25-40€/m2 pour une finition Q4 haut de gamme. Ces fourchettes incluent la preparation, l\'application et la verification finale. Un devis precis est etabli apres visite technique gratuite.',
  },
  {
    id: 'peinture',
    question: 'Proposez-vous egalement la mise en peinture ?',
    answer: 'Oui, nous proposons une offre globale enduit + peinture avec un interlocuteur unique. C\'est la solution ideale pour un resultat parfait : la qualite de l\'enduit conditionne directement le rendu final de la peinture. Decouvrez notre service Peinture & Lissage pour plus de details.',
  },
];

// =========================
// ARGUMENTS MARCHES PUBLICS
// =========================

export const publicMarketsArguments = [
  {
    id: 'dtu',
    text: 'DTU 59.1 respecte (preparation des supports)',
  },
  {
    id: 'finition',
    text: 'Niveaux de finition Q3 et Q4 maitrises',
  },
  {
    id: 'airless',
    text: 'Application mecanisee Airless grandes surfaces',
  },
  {
    id: 'site-occupe',
    text: 'Intervention en site occupe (poncage aspirant)',
  },
  {
    id: 'references',
    text: 'References collectivites et ecoles disponibles',
  },
];
