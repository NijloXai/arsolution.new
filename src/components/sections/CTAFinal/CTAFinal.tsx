/*
  Ce fichier definit le composant CTAFinal (appel a l'action final).
  Il affiche un formulaire de demande de devis avec les avantages
  (devis gratuit, reponse 48h, visite technique).
  L'utilisateur peut remplir le formulaire pour recevoir un devis gratuit.
*/
'use client';

// Stockage des donnees du formulaire et de l'etat d'envoi
import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import { CheckCircleIcon } from '@/components/icons/Icons';
import styles from './CTAFinal.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

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
  // Donnees du formulaire (nom, email, telephone, code postal, type de projet)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    projectType: '',
  });
  // Etat de l'envoi du formulaire (idle, loading, success, error)
  const [status, setStatus] = useState<FormStatus>('idle');
  // Message d'erreur en cas d'echec de l'envoi
  const [errorMessage, setErrorMessage] = useState('');

  // Met a jour les donnees du formulaire a chaque modification d'un champ
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset error state when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  // Envoie le formulaire au serveur lors de la soumission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        postalCode: '',
        projectType: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.'
      );
    }
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
                <CheckCircleIcon size={20} />
                <span>Devis gratuit et sans engagement</span>
              </li>
              <li>
                <CheckCircleIcon size={20} />
                <span>Réponse sous 48h ouvrées</span>
              </li>
              <li>
                <CheckCircleIcon size={20} />
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

            {/* Message de succès */}
            {status === 'success' && (
              <div className={styles.successMessage}>
                <CheckCircleIcon size={24} />
                <p>Votre demande a été envoyée avec succès ! Nous vous contacterons sous 48h.</p>
              </div>
            )}

            {/* Message d'erreur */}
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
              {status === 'loading' ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
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
