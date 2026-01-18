'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import {
  CheckCircleIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from '@/components/icons/Icons';
import styles from './PublicMarketsCTAFinal.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const projectTypes = [
  { value: '', label: 'Type de travaux' },
  { value: 'platrerie', label: 'Platrerie & Faux plafonds' },
  { value: 'isolation', label: 'Isolation thermique & phonique' },
  { value: 'enduits', label: 'Enduits & Finitions' },
  { value: 'peinture', label: 'Peinture & Lissage' },
  { value: 'renovation', label: 'Renovation interieure' },
  { value: 'multi-lots', label: 'Multi-lots / Complet' },
];

export default function PublicMarketsCTAFinal() {
  const [formData, setFormData] = useState({
    organisme: '',
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'marches-publics',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setStatus('success');
      setFormData({
        organisme: '',
        name: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez reessayer.'
      );
    }
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              Contacter notre service <span className={styles.titleAccent}>Marches Publics</span>
            </h2>
            <p className={styles.subtitle}>
              Un interlocuteur dedie pour repondre a vos appels d&apos;offres et demandes de chiffrage.
            </p>

            <ul className={styles.benefits}>
              <li>
                <CheckCircleIcon size={20} />
                <span>Reponse sous 24 a 48h ouvrees</span>
              </li>
              <li>
                <CheckCircleIcon size={20} />
                <span>Dossier administratif complet</span>
              </li>
              <li>
                <CheckCircleIcon size={20} />
                <span>Visite technique sur site</span>
              </li>
              <li>
                <CheckCircleIcon size={20} />
                <span>Chiffrage detaille et justifie</span>
              </li>
            </ul>

            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Coordonnees directes</h3>
              <div className={styles.contactItems}>
                <a href="tel:+33388000000" className={styles.contactItem}>
                  <PhoneIcon size={18} />
                  <span>03 88 00 00 00</span>
                </a>
                <a href="mailto:contact@arsolution.fr" className={styles.contactItem}>
                  <MailIcon size={18} />
                  <span>contact@arsolution.fr</span>
                </a>
                <div className={styles.contactItem}>
                  <MapPinIcon size={18} />
                  <span>Strasbourg (67000)</span>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="organisme" className={styles.label}>
                Organisme / Collectivite
              </label>
              <input
                type="text"
                id="organisme"
                name="organisme"
                value={formData.organisme}
                onChange={handleChange}
                className={styles.input}
                placeholder="Nom de l'organisme"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nom du contact
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

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Telephone
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
                <label htmlFor="projectType" className={styles.label}>
                  Type de travaux
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

            <div className={styles.formGroup}>
              <label htmlFor="location" className={styles.label}>
                Lieu du chantier
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ville ou code postal"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Decrivez brievement votre projet..."
                rows={3}
              />
            </div>

            {status === 'success' && (
              <div className={styles.successMessage}>
                <CheckCircleIcon size={24} />
                <p>Votre demande a ete envoyee avec succes ! Nous vous contacterons sous 48h.</p>
              </div>
            )}

            {status === 'error' && errorMessage && (
              <div className={styles.errorMessage}>
                <p>{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>

            <p className={styles.formNote}>
              <ClockIcon size={14} />
              <span>Reponse garantie sous 24 a 48h ouvrees</span>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
