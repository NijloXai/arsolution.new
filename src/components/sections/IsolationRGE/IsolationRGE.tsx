/*
  Ce fichier definit le composant IsolationRGE (certification RGE et aides).
  Il affiche le badge RGE, les aides financieres disponibles (MaPrimeRenov, etc.)
  et un disclaimer sur les conditions d'eligibilite.
  L'utilisateur decouvre les aides accessibles grace a la certification RGE.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { RGEAide } from '@/data/service-isolation';
import styles from './IsolationRGE.module.css';

interface IsolationRGEProps {
  aides: RGEAide[];
  disclaimer: string;
}

function BadgeRGEIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function InfoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export default function IsolationRGE({ aides, disclaimer }: IsolationRGEProps) {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          eyebrow="Certification & aides"
          title="RGE et aides financieres : ce qu'il faut savoir"
          subtitle="En tant qu'artisan certifie RGE, nos travaux vous ouvrent l'acces aux aides a la renovation energetique."
        />

        <div className={styles.content}>
          {/* Badge RGE */}
          <div className={styles.badgeSection}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <BadgeRGEIcon size={48} />
              </div>
              <div className={styles.badgeText}>
                <span className={styles.badgeTitle}>Certifie RGE</span>
                <span className={styles.badgeSubtitle}>Reconnu Garant de l&apos;Environnement</span>
              </div>
            </div>
            <p className={styles.badgeDescription}>
              La certification RGE est obligatoire pour que vos travaux soient eligibles aux aides publiques.
              Elle garantit notre expertise en renovation energetique.
            </p>
          </div>

          {/* Liste des aides */}
          <div className={styles.aidesSection}>
            <h3 className={styles.aidesTitle}>Aides disponibles</h3>
            <ul className={styles.aidesList}>
              {aides.map((aide) => (
                <li key={aide.id} className={styles.aideItem}>
                  <div className={styles.aideIcon}>
                    <CheckCircleIcon size={20} />
                  </div>
                  <div className={styles.aideContent}>
                    <h4 className={styles.aideName}>{aide.name}</h4>
                    <p className={styles.aideDescription}>{aide.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className={styles.disclaimer}>
            <div className={styles.disclaimerIcon}>
              <InfoIcon size={20} />
            </div>
            <p className={styles.disclaimerText}>{disclaimer}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
