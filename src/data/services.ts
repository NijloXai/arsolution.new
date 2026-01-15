/* =========================
   Services simplifie (derive de services-hub)
   Utilise par ServicesPreview et Footer
   ========================= */

import type { Service } from '@/lib/types';
import { servicesDetailed } from './services-hub';

// Descriptions courtes pour la page d'accueil
const serviceDescriptions: Record<string, string> = {
  platrerie:
    'Cloisons, doublages et plafonds suspendus pour tous types de bâtiments. Travaux soignés et finitions impeccables.',
  isolation:
    'Solutions certifiées RGE pour améliorer la performance énergétique de votre bâtiment et réduire les nuisances sonores.',
  amenagement:
    'Transformation et optimisation de vos espaces intérieurs. Création de bureaux, salles de réunion, espaces de vie.',
  peinture:
    'Travaux de peinture intérieure et extérieure. Préparation des supports et finitions de qualité professionnelle.',
  enduits:
    'Enduits décoratifs, projections et finitions haut de gamme. Préparation et traitement de tous types de supports.',
};

// Derive les services simplifies depuis les services detailles
export const services: Service[] = servicesDetailed.map((service) => ({
  id: service.id,
  title: service.title,
  description: serviceDescriptions[service.id] || service.benefit,
  icon: service.icon,
  href: service.href,
  ctaHref: service.ctaHref,
}));
