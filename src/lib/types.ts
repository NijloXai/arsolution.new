/* =========================
   Types partagés AR+Solution
   ========================= */

// Navigation
export interface NavItem {
  label: string;
  href: string;
  isHighlighted?: boolean;
}

// CTAs
export interface CTAProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

// Trust Badges
export interface TrustBadge {
  icon?: string;
  label: string;
}

// Trust Bar Items
export interface TrustItem {
  icon?: string;
  value: string;
  label: string;
}

// Profils
export interface Profile {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href: string;
  ctaText: string;
  isHighlighted?: boolean;
}

// Services
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  ctaHref?: string;
}

// Projets Portfolio
export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
}

// Points forts (Why Us)
export interface WhyUsPoint {
  icon: string;
  title: string;
  description?: string;
}

// Étapes du process
export interface ProcessStep {
  number: number;
  title: string;
  description?: string;
  icon?: string;
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Avis
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

// Formulaire de devis
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  projectType: string;
  message?: string;
}

// Infos entreprise
export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}
