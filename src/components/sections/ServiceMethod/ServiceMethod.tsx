/*
  Ce fichier definit le composant ServiceMethod (methode de travail service).
  Il affiche les etapes de la methode en timeline avec un highlight sur les engagements.
  Peut inclure un badge "site occupe" pour les interventions en milieu occupe.
  L'utilisateur comprend le deroulement d'un projet de A a Z.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import {
  ShieldIcon,
  MethodStepIcon,
  BuildingIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/icons/Icons';
import type { MethodStep } from '@/data/service-platrerie';
import styles from './ServiceMethod.module.css';

interface SiteOccupeHighlight {
  title: string;
  items: string[];
}

interface ServiceMethodProps {
  steps: MethodStep[];
  highlight?: string;
  siteOccupeHighlight?: SiteOccupeHighlight;
}

export default function ServiceMethod({ steps, highlight, siteOccupeHighlight }: ServiceMethodProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Notre engagement"
          title="Un chantier propre et des delais tenus"
          subtitle="La methode Serenite : notre engagement pour des travaux sans stress."
        />

        <div className={styles.timeline} role="list" aria-label="Étapes de notre méthode">
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step} role="listitem">
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>
                  <span>{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  <MethodStepIcon type={step.icon} size={24} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                {step.link && (
                  <Link href={step.link.href} className={styles.stepLink}>
                    <span>{step.link.label}</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {siteOccupeHighlight && (
          <div className={styles.siteOccupeBadge}>
            <div className={styles.siteOccupeHeader}>
              <div className={styles.siteOccupeIcon}>
                <BuildingIcon size={24} />
              </div>
              <h3 className={styles.siteOccupeTitle}>{siteOccupeHighlight.title}</h3>
            </div>
            <ul className={styles.siteOccupeList}>
              {siteOccupeHighlight.items.map((item, index) => (
                <li key={index} className={styles.siteOccupeItem}>
                  <span className={styles.siteOccupeCheck}>
                    <CheckIcon size={12} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {highlight && !siteOccupeHighlight && (
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <ShieldIcon size={24} />
            </div>
            <p className={styles.highlightText}>{highlight}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
