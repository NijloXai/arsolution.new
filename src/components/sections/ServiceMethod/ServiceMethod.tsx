import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ShieldIcon, SparklesIcon, CalendarCheckIcon } from '@/components/icons/Icons';
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
    case 'clipboard':
      return <ClipboardIcon size={size} />;
    case 'file-text':
      return <FileTextIcon size={size} />;
    case 'tool':
      return <ToolIcon size={size} />;
    case 'paint-roller':
      return <PaintRollerIcon size={size} />;
    case 'check-circle':
      return <CheckCircleIcon size={size} />;
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

function BuildingIcon({ size = 24 }: { size?: number }) {
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
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

function ClipboardIcon({ size = 24 }: { size?: number }) {
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
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function FileTextIcon({ size = 24 }: { size?: number }) {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ToolIcon({ size = 24 }: { size?: number }) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function PaintRollerIcon({ size = 24 }: { size?: number }) {
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
      <rect x="2" y="3" width="16" height="5" rx="1" />
      <path d="M18 8v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8" />
      <path d="M12 12v6" />
      <rect x="10" y="18" width="4" height="4" rx="1" />
    </svg>
  );
}

function CheckCircleIcon({ size = 24 }: { size?: number }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
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
                  <StepIcon type={step.icon} size={24} />
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
