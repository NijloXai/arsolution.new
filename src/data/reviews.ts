import type { Review } from '@/lib/types';

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Marie L.',
    rating: 5,
    text: 'Excellente entreprise ! Travail soigné, équipe ponctuelle et chantier laissé propre. Je recommande vivement pour tous travaux de plâtrerie.',
    date: '2024-11',
  },
  {
    id: '2',
    author: 'Jean-Pierre M.',
    rating: 5,
    text: 'Isolation thermique réalisée dans les règles de l\'art. Le devis était clair et respecté. Très satisfait du résultat.',
    date: '2024-10',
  },
  {
    id: '3',
    author: 'Commune de Schiltigheim',
    rating: 5,
    text: 'Collaboration professionnelle sur la rénovation de notre salle des fêtes. Respect des délais et qualité de finition remarquable.',
    date: '2024-09',
  },
  {
    id: '4',
    author: 'Sophie K.',
    rating: 5,
    text: 'Rénovation complète de notre appartement. L\'équipe a été à l\'écoute et les finitions sont impeccables. Merci !',
    date: '2024-08',
  },
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 28,
  source: 'Google',
};
