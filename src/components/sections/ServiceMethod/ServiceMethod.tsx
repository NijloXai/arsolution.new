import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ShieldIcon, SparklesIcon, CalendarCheckIcon } from '@/components/icons/Icons';
import type { MethodStep } from '@/data/service-platrerie';
import styles from './ServiceMethod.module.css';

interface ServiceMethodProps {
  steps: MethodStep[];
  highlight?: string;
}

function StepIcon({ type, size = 24 }: { type: string; size?: number }) {
  switch (type) {
    case 'shield':
      return <ShieldIcon size={size} />;
    case 'trash':
      return <TrashIcon size={size} />;
    case 'sparkles':
      return <SparklesIcon size={size} />;
    case 'calendar':
      return <CalendarCheckIcon size={size} />;
    default:
      return <ShieldIcon size={size} />;
  }
}

function TrashIcon({ size = 24 }: { size?: number }) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

export default function ServiceMethod({ steps, highlight }: ServiceMethodProps) {
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
                  <StepIcon type={step.icon} size={24} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {highlight && (
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
