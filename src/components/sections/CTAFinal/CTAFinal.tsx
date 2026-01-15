'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import styles from './CTAFinal.module.css';

const projectTypes = [
  { value: '', label: 'Type de projet' },
  { value: 'platrerie', label: 'Plâtrerie & Faux plafonds' },
  { value: 'isolation', label: 'Isolation thermique & phonique' },
  { value: 'amenagement', label: 'Aménagement intérieur' },
  { value: 'peinture', label: 'Peinture & Lissage' },
  { value: 'enduits', label: 'Enduits & Finitions' },
  { value: 'autre', label: 'Autre projet' },
];

export default function CTAFinal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    projectType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>Prêt à démarrer votre projet ?</h2>
            <p className={styles.subtitle}>
              Recevez un devis détaillé et gratuit sous 48h. Notre équipe vous
              accompagne de A à Z pour tous vos travaux de rénovation intérieure.
            </p>
            <ul className={styles.benefits}>
              <li>
                <CheckIcon />
                <span>Devis gratuit et sans engagement</span>
              </li>
              <li>
                <CheckIcon />
                <span>Réponse sous 48h ouvrées</span>
              </li>
              <li>
                <CheckIcon />
                <span>Visite technique sur site</span>
              </li>
            </ul>

            <div className={styles.publicCta}>
              <p className={styles.publicLabel}>Vous êtes une collectivité ?</p>
              <Button href="/marches-publics" variant="outline">
                Accès Marchés Publics
              </Button>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="votre@email.fr"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="06 XX XX XX XX"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="postalCode" className={styles.label}>
                  Code postal
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="67000"
                  pattern="[0-9]{5}"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.label}>
                  Type de projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Recevoir mon devis gratuit
            </Button>

            <p className={styles.formNote}>
              En soumettant ce formulaire, vous acceptez d&apos;être contacté par
              AR+Solution concernant votre demande de devis.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
