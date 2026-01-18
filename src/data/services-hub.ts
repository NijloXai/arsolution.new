/* =========================
   Donnees enrichies pour la page Services Hub
   ========================= */

import type { ServiceIconType } from '@/lib/types';

// Caracteristiques detaillees par service
export interface ServiceDetail {
  id: string;
  title: string;
  benefit: string;
  features: string[];
  icon: ServiceIconType;
  href: string;
  ctaText: string;
  ctaHref: string;
}

export const servicesDetailed: ServiceDetail[] = [
  {
    id: 'platrerie',
    title: 'Platrerie & Faux plafonds',
    benefit: 'Redistribuez vos espaces et creez des volumes sur-mesure',
    features: [
      'Cloisons seches et doublages',
      'Faux plafonds suspendus et tendus',
      'Habillage et gaines techniques',
    ],
    icon: 'wall',
    href: '/services/platrerie',
    ctaText: 'Devis Platrerie',
    ctaHref: '/contact?service=platrerie',
  },
  {
    id: 'isolation',
    title: 'Isolation thermique & phonique',
    benefit: 'Reduisez vos factures et gagnez en confort toute l\'annee',
    features: [
      'Isolation des murs par l\'interieur',
      'Isolation des combles et toitures',
      'Traitement acoustique certifie',
    ],
    icon: 'insulation',
    href: '/services/isolation',
    ctaText: 'Devis Isolation',
    ctaHref: '/contact?service=isolation',
  },
  {
    id: 'amenagement',
    title: 'Amenagement interieur',
    benefit: 'Transformez vos espaces avec un interlocuteur unique',
    features: [
      'Reconfiguration complete de locaux',
      'Creation de bureaux et open-spaces',
      'Amenagement de combles habitables',
    ],
    icon: 'layout',
    href: '/services/amenagement-interieur',
    ctaText: 'Devis Amenagement',
    ctaHref: '/contact?service=amenagement-interieur',
  },
  {
    id: 'peinture',
    title: 'Peinture & Lissage',
    benefit: 'Des finitions soignees qui subliment vos interieurs',
    features: [
      'Peinture decorative et technique',
      'Lissage et preparation des supports',
      'Traitement des facades et exterieurs',
    ],
    icon: 'paint',
    href: '/services/peinture-lissage',
    ctaText: 'Devis Peinture',
    ctaHref: '/contact?service=peinture',
  },
  {
    id: 'enduits',
    title: 'Enduits & Finitions',
    benefit: 'Le souci du detail pour un rendu haut de gamme',
    features: [
      'Enduits decoratifs et projetes',
      'Finitions lisses et talochees',
      'Revetements speciaux et techniques',
    ],
    icon: 'finish',
    href: '/services/enduits',
    ctaText: 'Devis Finitions',
    ctaHref: '/contact?service=enduits',
  },
];

// FAQ specifiques a la page services
export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
}

export const servicesFAQ: ServiceFAQ[] = [
  {
    id: 'delais',
    question: 'Quels sont vos delais d\'intervention ?',
    answer: 'Nous intervenons generalement sous 2 a 4 semaines apres validation du devis. Pour les urgences ou petits travaux, des creneaux plus rapides peuvent etre disponibles. Chaque projet fait l\'objet d\'un planning detaille communique avant le demarrage.',
  },
  {
    id: 'site-occupe',
    question: 'Pouvez-vous intervenir si le batiment est occupe ?',
    answer: 'Oui, nous sommes specialises dans les interventions en site occupe. Nous mettons en place des protections renforcees, travaillons par zones et nettoyons chaque soir. Ideal pour les ecoles, bureaux ou logements habites pendant les travaux.',
  },
  {
    id: 'aides',
    question: 'Aidez-vous pour les dossiers d\'aides (MaPrimeRenov\') ?',
    answer: 'En tant qu\'entreprise certifiee RGE, nos travaux d\'isolation sont eligibles aux aides de l\'Etat. Nous vous informons sur les dispositifs existants et vous orientons vers les organismes competents pour constituer vos dossiers.',
  },
  {
    id: 'zone',
    question: 'Quelle est votre zone d\'intervention ?',
    answer: 'Nous intervenons principalement a Strasbourg et dans toute l\'Alsace (Bas-Rhin et Haut-Rhin). Pour les chantiers d\'envergure, nous pouvons etudier des interventions dans les departements limitrophes.',
  },
];

// Donnees pour la galerie mini-portfolio
export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  tags: string[];
  image: string;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: 'projet-1',
    title: 'Renovation bureaux entreprise',
    location: 'Strasbourg Centre',
    tags: ['Platrerie', 'Peinture'],
    image: '/images/portfolio/projet-1.jpg',
  },
  {
    id: 'projet-2',
    title: 'Isolation ecole maternelle',
    location: 'Schiltigheim',
    tags: ['Isolation', 'Site occupe'],
    image: '/images/portfolio/projet-2.jpg',
  },
  {
    id: 'projet-3',
    title: 'Amenagement appartement haussmannien',
    location: 'Strasbourg Neustadt',
    tags: ['Amenagement', 'Finitions'],
    image: '/images/portfolio/projet-3.jpg',
  },
  {
    id: 'projet-4',
    title: 'Faux plafonds salle de reunion',
    location: 'Illkirch',
    tags: ['Platrerie', 'Acoustique'],
    image: '/images/portfolio/projet-4.jpg',
  },
];

// Arguments "Pourquoi nous" specifiques services
export interface WhyUsArgument {
  icon: string;
  title: string;
  description: string;
}

export const whyUsArguments: WhyUsArgument[] = [
  {
    icon: 'shield',
    title: 'Certifications & Garanties',
    description: 'RGE, garantie decennale et RC Pro pour une tranquillite totale.',
  },
  {
    icon: 'sparkles',
    title: 'Proprete irreprochable',
    description: 'Chantier protege et nettoye chaque soir. Respect de vos locaux.',
  },
  {
    icon: 'user',
    title: 'Interlocuteur unique',
    description: 'Un seul contact du devis a la reception pour simplifier vos demarches.',
  },
  {
    icon: 'map',
    title: 'Entreprise locale',
    description: 'Basee en Alsace, reactive et proche de vos chantiers.',
  },
];
