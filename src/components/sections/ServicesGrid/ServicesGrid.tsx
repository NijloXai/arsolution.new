import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { ServiceIcon, CheckIcon, ArrowRightIcon } from '@/components/icons/Icons';
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
                  <ServiceIcon type={service.icon} size={28} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>

              <p className={styles.cardBenefit}>{service.benefit}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <CheckIcon size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardActions}>
                <Link href={service.href} className={styles.learnMore}>
                  En savoir plus
                  <ArrowRightIcon size={16} />
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
