import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { UniqueInterlocutorPoint } from '@/data/service-amenagement-interieur';
import styles from './UniqueInterlocutor.module.css';

interface UniqueInterlocutorProps {
  points: UniqueInterlocutorPoint[];
  ctaHref?: string;
  ctaLabel?: string;
}

function UsersIcon({ size = 24 }: { size?: number }) {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ size = 24 }: { size?: number }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function PuzzleIcon({ size = 24 }: { size?: number }) {
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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.888-.925a2.501 2.501 0 1 0-4.933.926c.053.325-.053.655-.284.885l-1.6 1.6a2.41 2.41 0 0 1-1.707.707 2.41 2.41 0 0 1-1.707-.707l-1.568-1.568a1.007 1.007 0 0 1-.289-.878 2.502 2.502 0 1 0-4.937-.929c-.053.327.06.658.291.889L3.098 17a2.41 2.41 0 0 1-.707 1.707 2.41 2.41 0 0 1-1.707.707" />
      <path d="M8.5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    </svg>
  );
}

function PiggyBankIcon({ size = 24 }: { size?: number }) {
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
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h.01" />
    </svg>
  );
}

function PointIcon({ type, size = 24 }: { type: string; size?: number }) {
  switch (type) {
    case 'users':
      return <UsersIcon size={size} />;
    case 'calendar':
      return <CalendarIcon size={size} />;
    case 'puzzle':
      return <PuzzleIcon size={size} />;
    case 'piggy-bank':
      return <PiggyBankIcon size={size} />;
    default:
      return <UsersIcon size={size} />;
  }
}

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowRightIcon({ size = 16 }: { size?: number }) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function UniqueInterlocutor({
  points,
  ctaHref = '/certifications',
  ctaLabel = 'Voir nos certifications RGE & Assurances'
}: UniqueInterlocutorProps) {
  const withoutUsProblems = [
    '3 artisans differents a contacter',
    'Planning complexe a coordonner',
    'Risques de retards en cascade',
    '"C\'est la faute du peintre..."',
  ];

  const withUsAdvantages = [
    '1 seul interlocuteur',
    'Planning unique et maitrise',
    'Delais tenus',
    'Responsabilite claire',
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Avantage exclusif"
          title="Pourquoi choisir un expert global plutot que 3 artisans ?"
          subtitle="Platrerie, isolation et peinture : un seul interlocuteur pour tous vos travaux de second oeuvre."
        />

        {/* Comparaison visuelle */}
        <div className={styles.comparison}>
          {/* Sans nous */}
          <div className={styles.comparisonCard + ' ' + styles.without}>
            <div className={styles.comparisonHeader}>
              <div className={styles.comparisonIcon + ' ' + styles.iconWithout}>
                <XIcon size={20} />
              </div>
              <h3 className={styles.comparisonTitle}>Sans coordination unique</h3>
            </div>
            <ul className={styles.comparisonList}>
              {withoutUsProblems.map((problem, index) => (
                <li key={index} className={styles.comparisonItem}>
                  <span className={styles.bulletWithout}>
                    <XIcon size={12} />
                  </span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec nous */}
          <div className={styles.comparisonCard + ' ' + styles.with}>
            <div className={styles.comparisonHeader}>
              <div className={styles.comparisonIcon + ' ' + styles.iconWith}>
                <CheckIcon size={20} />
              </div>
              <h3 className={styles.comparisonTitle}>Avec AR+Solution</h3>
            </div>
            <ul className={styles.comparisonList}>
              {withUsAdvantages.map((advantage, index) => (
                <li key={index} className={styles.comparisonItem}>
                  <span className={styles.bulletWith}>
                    <CheckIcon size={12} />
                  </span>
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Points detailles */}
        <div className={styles.pointsGrid}>
          {points.map((point) => (
            <div key={point.id} className={styles.pointCard}>
              <div className={styles.pointIcon}>
                <PointIcon type={point.icon} size={24} />
              </div>
              <h4 className={styles.pointTitle}>{point.title}</h4>
              <p className={styles.pointDescription}>{point.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <Link href={ctaHref} className={styles.cta}>
            <span>{ctaLabel}</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
