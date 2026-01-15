import type { ProcessStep } from '@/lib/types';

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Contact',
    description: 'Décrivez votre projet par téléphone ou formulaire. Nous vous répondons sous 48h.',
    icon: 'phone',
  },
  {
    number: 2,
    title: 'Visite technique',
    description: 'Un technicien se déplace gratuitement pour évaluer vos besoins sur site.',
    icon: 'clipboard',
  },
  {
    number: 3,
    title: 'Devis détaillé',
    description: 'Recevez un devis clair et complet, chaque poste est expliqué.',
    icon: 'file',
  },
  {
    number: 4,
    title: 'Planification',
    description: 'Nous définissons ensemble le planning d\'intervention adapté à vos contraintes.',
    icon: 'calendar',
  },
  {
    number: 5,
    title: 'Réalisation',
    description: 'Nos équipes interviennent avec rigueur. Suivi régulier et réception finale.',
    icon: 'check',
  },
];
