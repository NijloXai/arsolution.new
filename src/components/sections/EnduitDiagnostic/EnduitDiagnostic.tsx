/*
  Ce fichier definit le composant EnduitDiagnostic (diagnostic enduit).
  Il affiche une comparaison visuelle entre un mur brut et un mur enduit Q4
  avec les defauts a corriger et les points diagnostiques.
  L'utilisateur comprend l'importance de la preparation des surfaces.
*/
'use client';

import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { DiagnosticPoint } from '@/data/service-enduit-finition';
import styles from './EnduitDiagnostic.module.css';

interface EnduitDiagnosticProps {
  points: DiagnosticPoint[];
}

function CrackIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L8 8l4 4-4 4 4 6" />
      <path d="M16 6l-3 3" />
      <path d="M8 14l-3 3" />
    </svg>
  );
}

function WaveIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12c2-2 4-4 6-4s4 4 6 4 4-4 6-4 4 2 4 4" />
      <path d="M2 18c2-2 4-4 6-4s4 4 6 4 4-4 6-4 4 2 4 4" />
    </svg>
  );
}

function SmoothIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function LightIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function DiagnosticIcon({ type, size = 24 }: { type: string; size?: number }) {
  switch (type) {
    case 'crack':
      return <CrackIcon size={size} />;
    case 'wave':
      return <WaveIcon size={size} />;
    case 'smooth':
      return <SmoothIcon size={size} />;
    case 'light':
      return <LightIcon size={size} />;
    default:
      return <WaveIcon size={size} />;
  }
}

export default function EnduitDiagnostic({ points }: EnduitDiagnosticProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="L'importance de la preparation"
          title="Pourquoi 80% du resultat final se joue avant la peinture"
          subtitle="Un mur bien prepare est la garantie d'un rendu parfait et durable. Decouvrez les etapes cles d'une finition professionnelle."
        />

        <div className={styles.splitScreen}>
          {/* Cote gauche : Mur brut */}
          <div className={styles.panelBefore}>
            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>Mur brut</span>
                <span className={styles.panelBadge}>Non prepare</span>
              </div>

              <div className={styles.wallIllustration}>
                <div className={styles.wallBefore}>
                  <div className={styles.crack1} />
                  <div className={styles.crack2} />
                  <div className={styles.bump1} />
                  <div className={styles.bump2} />
                  <div className={styles.joint} />
                </div>
              </div>

              <ul className={styles.defectsList}>
                <li>Fissures visibles et micro-fissures</li>
                <li>Irregularites de surface</li>
                <li>Joints de plaques apparents</li>
                <li>Traces de reprise</li>
              </ul>
            </div>
          </div>

          {/* Cote droit : Mur enduit */}
          <div className={styles.panelAfter}>
            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>Mur enduit Q4</span>
                <span className={styles.panelBadgeSuccess}>Pret a peindre</span>
              </div>

              <div className={styles.wallIllustration}>
                <div className={styles.wallAfter}>
                  <div className={styles.shine} />
                </div>
              </div>

              <ul className={styles.benefitsList}>
                <li>Surface parfaitement plane</li>
                <li>Aucun defaut visible</li>
                <li>Ideal pour laques et velours</li>
                <li>Resultat professionnel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Points diagnostiques */}
        <div className={styles.pointsGrid}>
          {points.map((point, index) => (
            <article
              key={point.id}
              className={styles.pointCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.pointIcon}>
                <DiagnosticIcon type={point.icon} size={28} />
              </div>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointDescription}>{point.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
