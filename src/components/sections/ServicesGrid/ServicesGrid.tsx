import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { servicesDetailed } from '@/data/services-hub';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Nos expertises"
          title="Une expertise complete pour vos travaux"
          subtitle="Du diagnostic a la reception, nous prenons en charge l'ensemble de vos projets de renovation interieure."
        />

        <div className={styles.grid}>
          {servicesDetailed.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>

              <p className={styles.cardBenefit}>{service.benefit}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardActions}>
                <Link href={service.href} className={styles.learnMore}>
                  En savoir plus
                  <ArrowIcon />
                </Link>
                <Button href={service.ctaHref} variant="primary" size="sm">
                  {service.ctaText}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const iconProps = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'wall':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      );
    case 'insulation':
      return (
        <svg {...iconProps}>
          <path d="M12 3v18" />
          <path d="M18 6H6" />
          <path d="M20 12H4" />
          <path d="M18 18H6" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case 'paint':
      return (
        <svg {...iconProps}>
          <path d="M19 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
          <path d="m12 11-1-9h2l-1 9" />
        </svg>
      );
    case 'finish':
      return (
        <svg {...iconProps}>
          <path d="M2 22 16 8" />
          <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
          <path d="M22 2 17 7" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
  }
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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
