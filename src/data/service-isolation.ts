/* =========================
   Donnees specifiques a la page Service Isolation thermique & phonique
   ========================= */

// =========================
// TYPES
// =========================

export interface ComparisonCard {
  id: string;
  icon: 'thermometer' | 'soundwave';
  title: string;
  subtitle: string;
  situations: string[];
}

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

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  forWho: string;
  benefit: string;
  icon: string;
}

export interface RGEAide {
  id: string;
  name: string;
  description: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  link?: {
    href: string;
    label: string;
  };
}

export interface IsolationProject {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface IsolationFAQ {
  id: string;
  question: string;
  answer: string;
}

// =========================
// COMPARAISON THERMIQUE VS PHONIQUE
// =========================

export const comparisonCards: ComparisonCard[] = [
  {
    id: 'thermique',
    icon: 'thermometer',
    title: 'Isolation Thermique',
    subtitle: 'Pour reduire vos factures et garder la chaleur',
    situations: [
      'Combles perdus ou amenages',
      'Murs froids donnant sur l\'exterieur',
      'Bureaux et parties communes mal isoles',
      'Batiments scolaires et ERP',
      'Passoire energetique (DPE E, F, G)',
      'Surchauffe en ete',
    ],
  },
  {
    id: 'phonique',
    icon: 'soundwave',
    title: 'Isolation Phonique',
    subtitle: 'Pour retrouver le calme et la tranquillite',
    situations: [
      'Open-spaces et salles de reunion',
      'Parties communes d\'immeubles',
      'Bureaux en site occupe',
      'Etablissements scolaires et creches',
      'Cloisons entre pieces de vie',
      'Rue passante ou voie ferree',
    ],
  },
];

// =========================
// PERIMETRE DES PRESTATIONS (ZONES D'INTERVENTION)
// =========================

export const scopeItems: ScopeItem[] = [
  {
    id: 'murs',
    title: 'Murs & Doublages',
    description: 'Isolation par l\'interieur (ITI) des murs donnant sur l\'exterieur. Doublage thermique et acoustique avec finitions platre incluses.',
    icon: 'wall',
  },
  {
    id: 'cloisons',
    title: 'Cloisons Separatives',
    description: 'Cloisons acoustiques haute performance entre logements, bureaux ou salles de reunion. Indices d\'affaiblissement jusqu\'a 55 dB.',
    icon: 'wall',
    link: {
      href: '/services/platrerie',
      label: 'Voir nos services platrerie',
    },
  },
  {
    id: 'plafonds',
    title: 'Plafonds & Faux-plafonds',
    description: 'Isolation des planchers hauts, faux-plafonds acoustiques et traitement des bruits d\'impact. Solutions adaptees aux ERP.',
    icon: 'ceiling',
    link: {
      href: '/services/platrerie',
      label: 'Voir nos services platrerie',
    },
  },
  {
    id: 'combles',
    title: 'Combles & Rampants',
    description: 'Isolation des combles perdus et amenageables. Soufflage, rouleaux ou panneaux selon configuration et performance visee.',
    icon: 'insulation',
  },
];

// =========================
// BENEFICES CONCRETS
// =========================

export const benefitItems: BenefitItem[] = [
  {
    id: 'factures',
    title: 'Factures allegees',
    description: 'Reduisez vos depenses de chauffage jusqu\'a 30% grace a une isolation performante.',
    icon: 'piggybank',
  },
  {
    id: 'confort',
    title: 'Confort toute l\'annee',
    description: 'Fini les murs froids en hiver et la surchauffe en ete. Un climat interieur agreable 12 mois sur 12.',
    icon: 'home',
  },
  {
    id: 'calme',
    title: 'Silence et serenite',
    description: 'Attenuez les bruits exterieurs et interieurs pour une qualite de vie preservee.',
    icon: 'volume-off',
  },
  {
    id: 'valeur',
    title: 'Bien valorise',
    description: 'Ameliorez votre DPE et augmentez la valeur de votre patrimoine immobilier.',
    icon: 'trending-up',
  },
  {
    id: 'aides',
    title: 'Eligible aux aides',
    description: 'En tant qu\'artisan RGE, nos travaux vous ouvrent l\'acces a MaPrimeRenov\' et aux CEE.',
    icon: 'badge-check',
  },
  {
    id: 'finitions',
    title: 'Finitions incluses',
    description: 'Nous ne laissons pas le chantier brut : doublage platre et preparation peinture compris.',
    icon: 'sparkles',
  },
];

// =========================
// MATERIAUX & SOLUTIONS
// =========================

export const materialItems: MaterialItem[] = [
  {
    id: 'laine-verre',
    name: 'Laine de verre',
    forWho: 'Usage courant, combles, murs',
    benefit: 'Excellent rapport performance/prix, imputrescible, bonnes proprietes thermiques et acoustiques.',
    icon: 'layers',
  },
  {
    id: 'laine-roche',
    name: 'Laine de roche',
    forWho: 'Acoustique renforcee, locaux techniques',
    benefit: 'Performances acoustiques superieures, resistance au feu, ideale pour les ERP et bureaux.',
    icon: 'shield',
  },
  {
    id: 'biosources',
    name: 'Isolants bio-sources',
    forWho: 'Demarche ecologique, habitat sain',
    benefit: 'Ouate de cellulose, laine de bois : respirants, regulateurs d\'humidite, faible empreinte carbone.',
    icon: 'leaf',
  },
  {
    id: 'polystyrene',
    name: 'Polystyrene / Polyurethane',
    forWho: 'Contraintes d\'epaisseur, sols',
    benefit: 'Tres hautes performances pour faible epaisseur. Ideal quand l\'espace est compte.',
    icon: 'minimize',
  },
];

// =========================
// INFORMATIONS RGE & AIDES
// =========================

export const rgeAides: RGEAide[] = [
  {
    id: 'maprimerenv',
    name: 'MaPrimeRenov\'',
    description: 'Aide de l\'Etat selon revenus et gain energetique. Jusqu\'a 75 EUR/m2 pour l\'isolation des murs.',
  },
  {
    id: 'cee',
    name: 'Certificats d\'Economie d\'Energie (CEE)',
    description: 'Prime versee par les fournisseurs d\'energie. Cumulable avec MaPrimeRenov\'.',
  },
  {
    id: 'ecoptz',
    name: 'Eco-pret a taux zero',
    description: 'Pret sans interet jusqu\'a 50 000 EUR pour financer vos travaux de renovation energetique.',
  },
];

export const rgeDisclaimer = 'En tant qu\'entreprise certifiee RGE, nos factures vous rendent eligible aux aides. Nous vous informons sur les principes, mais les demarches administratives se font via les plateformes officielles (France Renov\', ANAH). Eligibilite selon criteres de revenus et nature des travaux.';

// =========================
// METHODE "SERENITE"
// =========================

export const methodSteps: MethodStep[] = [
  {
    number: '01',
    title: 'Visite technique',
    description: 'Diagnostic sur site pour evaluer vos besoins : thermique, phonique ou les deux. Analyse des contraintes techniques.',
    icon: 'clipboard',
  },
  {
    number: '02',
    title: 'Devis detaille sous 48h',
    description: 'Proposition claire avec materiaux, performances attendues et planning previsionnel.',
    icon: 'file-text',
  },
  {
    number: '03',
    title: 'Protection des lieux',
    description: 'Baches, films et sas de confinement. Nous intervenons en site occupe avec un respect total de votre quotidien.',
    icon: 'shield',
  },
  {
    number: '04',
    title: 'Pose de l\'isolant',
    description: 'Mise en oeuvre selon les regles de l\'art (DTU) par nos equipes qualifiees RGE.',
    icon: 'tool',
  },
  {
    number: '05',
    title: 'Finitions & platrerie',
    description: 'Doublage platre, bandes, enduits. Vous recuperez des murs prets a peindre. Notre expertise platrerie garantit une finition impeccable.',
    icon: 'paint-roller',
    link: {
      href: '/services/platrerie',
      label: 'Decouvrir notre expertise platrerie',
    },
  },
  {
    number: '06',
    title: 'Reception de chantier',
    description: 'Nettoyage complet, verification finale et remise des documents (facture RGE, fiches techniques).',
    icon: 'check-circle',
  },
];

// =========================
// PROJETS / ETUDES DE CAS
// =========================

export const isolationProjects: IsolationProject[] = [
  {
    id: 'projet-appartement',
    title: 'Renovation thermique appartement',
    location: 'Strasbourg Centre (67)',
    type: 'Particulier',
    description: 'Isolation des murs par l\'interieur et faux-plafond acoustique. Passage de DPE F a C. Intervention en site occupe.',
  },
  {
    id: 'projet-bureaux',
    title: 'Correction acoustique bureaux',
    location: 'Illkirch-Graffenstaden (67)',
    type: 'Professionnel',
    description: 'Cloisons acoustiques entre open-space et salles de reunion. Faux-plafonds absorbants. Travaux realises en horaires decales.',
  },
  {
    id: 'projet-ecole',
    title: 'Isolation thermique ecole',
    location: 'Schiltigheim (67)',
    type: 'Marche public',
    description: 'Doublage thermique des murs et plafonds de 6 salles de classe. Intervention pendant les vacances scolaires.',
  },
];

// =========================
// FAQ SPECIFIQUE ISOLATION
// =========================

export const isolationFAQ: IsolationFAQ[] = [
  {
    id: 'epaisseur',
    question: 'Quelle epaisseur d\'isolant pour ne pas perdre trop de place ?',
    answer: 'L\'epaisseur depend de la performance visee et du materiau choisi. En moyenne, comptez 10 a 14 cm pour les murs (ITI) et 20 a 30 cm pour les combles. Avec des isolants haute performance (polyurethane), on peut reduire l\'epaisseur de 30%. Nous optimisons chaque projet pour le meilleur compromis espace/performance.',
  },
  {
    id: 'site-occupe',
    question: 'Intervenez-vous si les bureaux ou le logement sont occupes ?',
    answer: 'Oui, c\'est meme notre specialite. Nous utilisons des sas de confinement, des outils a aspiration integree et travaillons par zones pour limiter les nuisances. Pour les collectivites, nous privilegions les vacances scolaires ou les horaires decales.',
  },
  {
    id: 'duree',
    question: 'Combien de temps durent les travaux d\'isolation ?',
    answer: 'La duree varie selon l\'ampleur : 2-3 jours pour une piece, 1-2 semaines pour un appartement complet, plusieurs semaines pour un batiment. Apres visite technique, nous vous communiquons un planning precis avec les differentes phases.',
  },
  {
    id: 'thermique-phonique',
    question: 'Peut-on combiner isolation thermique et phonique ?',
    answer: 'Absolument, et c\'est souvent recommande. Certains materiaux comme la laine de roche offrent d\'excellentes performances sur les deux tableaux. Nous concevons des solutions sur-mesure qui repondent a vos deux besoins sans multiplier les couches.',
  },
  {
    id: 'rge-obligatoire',
    question: 'Pourquoi choisir un artisan certifie RGE ?',
    answer: 'La certification RGE (Reconnu Garant de l\'Environnement) est obligatoire pour beneficier des aides publiques (MaPrimeRenov\', CEE, eco-PTZ). Elle garantit aussi une formation specifique de nos equipes aux techniques d\'isolation performante.',
  },
  {
    id: 'aides-montant',
    question: 'A combien puis-je pretendre avec les aides ?',
    answer: 'Le montant depend de vos revenus, du type de travaux et de la surface. MaPrimeRenov\' peut couvrir 25 a 75 EUR/m2 pour l\'isolation des murs. Les CEE s\'ajoutent en complement. Nous vous orientons vers les simulateurs officiels pour estimer votre reste a charge.',
  },
  {
    id: 'garanties',
    question: 'Quelles garanties sur les travaux d\'isolation ?',
    answer: 'Tous nos travaux sont couverts par notre garantie decennale et notre RC Pro. En tant qu\'entreprise RGE, nous respectons les DTU en vigueur et utilisons des materiaux certifies ACERMI. Les fiches techniques et certificats vous sont remis a la reception.',
  },
  {
    id: 'finitions',
    question: 'Gerez-vous aussi les finitions apres l\'isolation ?',
    answer: 'Oui, nous proposons une offre complete. L\'isolation est suivie du doublage platre, des bandes et de la preparation des murs. Vous pouvez aussi nous confier la peinture pour un chantier cle en main avec un interlocuteur unique.',
  },
];

// =========================
// ARGUMENTS MARCHES PUBLICS
// =========================

export const publicMarketsArguments = [
  {
    id: 'rge',
    text: 'Certification RGE et dossier administratif complet',
  },
  {
    id: 'site-occupe',
    text: 'Expertise intervention en site occupe (ecoles, mairies)',
  },
  {
    id: 'normes',
    text: 'Maitrise des normes thermiques et acoustiques ERP',
  },
  {
    id: 'reactivite',
    text: 'Reactivite sur appels d\'offres et chiffrages detailles',
  },
  {
    id: 'references',
    text: 'References collectivites et etablissements publics',
  },
];
