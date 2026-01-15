import type { CompanyInfo, NavItem, TrustItem } from '@/lib/types';

export const companyInfo: CompanyInfo = {
  name: 'AR+Solution',
  phone: '03 88 XX XX XX',
  email: 'contact@arsolution.fr',
  address: '123 Rue Example',
  city: 'Strasbourg',
  postalCode: '67000',
};

export const navigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Marchés Publics', href: '/marches-publics', isHighlighted: true },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export const trustItems: TrustItem[] = [
  {
    icon: 'rge',
    value: 'RGE',
    label: 'Certifié',
  },
  {
    icon: 'shield',
    value: 'Décennale',
    label: 'Garantie',
  },
  {
    icon: 'calendar',
    value: '2006',
    label: 'Depuis',
  },
  {
    icon: 'building',
    value: '15+',
    label: 'Projets',
  },
  {
    icon: 'map',
    value: 'Alsace',
    label: 'Intervention',
  },
];
