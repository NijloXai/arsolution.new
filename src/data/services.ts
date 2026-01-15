import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'platrerie',
    title: 'Plâtrerie & Faux plafonds',
    description:
      'Cloisons, doublages et plafonds suspendus pour tous types de bâtiments. Travaux soignés et finitions impeccables.',
    icon: 'wall',
    href: '/services/platrerie',
    ctaHref: '/contact?service=platrerie',
  },
  {
    id: 'isolation',
    title: 'Isolation thermique & phonique',
    description:
      'Solutions certifiées RGE pour améliorer la performance énergétique de votre bâtiment et réduire les nuisances sonores.',
    icon: 'insulation',
    href: '/services/isolation',
    ctaHref: '/contact?service=isolation',
  },
  {
    id: 'amenagement',
    title: 'Aménagement intérieur',
    description:
      'Transformation et optimisation de vos espaces intérieurs. Création de bureaux, salles de réunion, espaces de vie.',
    icon: 'layout',
    href: '/services/amenagement',
    ctaHref: '/contact?service=amenagement',
  },
  {
    id: 'peinture',
    title: 'Peinture & Lissage',
    description:
      'Travaux de peinture intérieure et extérieure. Préparation des supports et finitions de qualité professionnelle.',
    icon: 'paint',
    href: '/services/peinture',
    ctaHref: '/contact?service=peinture',
  },
  {
    id: 'enduits',
    title: 'Enduits & Finitions',
    description:
      'Enduits décoratifs, projections et finitions haut de gamme. Préparation et traitement de tous types de supports.',
    icon: 'finish',
    href: '/services/enduits',
    ctaHref: '/contact?service=enduits',
  },
];
