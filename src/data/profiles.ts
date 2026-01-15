import type { Profile } from '@/lib/types';

export const profiles: Profile[] = [
  {
    id: 'marches-publics',
    title: 'Marchés Publics & Collectivités',
    description:
      'Dossiers complets, références vérifiables, certifications à jour. Un interlocuteur dédié pour vos appels d\'offres.',
    icon: 'building',
    href: '/marches-publics',
    ctaText: 'Accès acheteurs publics',
    isHighlighted: true,
  },
  {
    id: 'copro-bureaux',
    title: 'Copropriétés & Bureaux',
    description:
      'Rénovation d\'espaces communs, isolation des façades, aménagement de locaux professionnels. Planning adapté à vos contraintes.',
    icon: 'users',
    href: '/contact?profil=copropriete',
    ctaText: 'Nous consulter',
    isHighlighted: false,
  },
  {
    id: 'particuliers',
    title: 'Particuliers',
    description:
      'Rénovation intérieure, isolation thermique et phonique, travaux de finition. Accompagnement personnalisé de A à Z.',
    icon: 'home',
    href: '/contact?profil=particulier',
    ctaText: 'Demander un devis',
    isHighlighted: false,
  },
];
