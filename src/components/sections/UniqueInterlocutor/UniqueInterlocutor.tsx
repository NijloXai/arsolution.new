/*
  Ce fichier definit le composant UniqueInterlocutor (interlocuteur unique).
  Il affiche une comparaison entre travailler avec 3 artisans differents
  et avoir un seul interlocuteur avec AR+Solution.
  L'utilisateur comprend l'avantage d'un expert global.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import {
  InterlocutorIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
} from '@/components/icons/Icons';
import type { UniqueInterlocutorPoint } from '@/data/service-amenagement-interieur';
import styles from './UniqueInterlocutor.module.css';

interface UniqueInterlocutorProps {
  points: UniqueInterlocutorPoint[];
  ctaHref?: string;
  ctaLabel?: string;
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
                <InterlocutorIcon type={point.icon} size={24} />
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
