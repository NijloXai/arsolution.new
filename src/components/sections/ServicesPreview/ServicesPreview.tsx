import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { ServiceIcon, ArrowRightIcon } from '@/components/icons/Icons';
import { services } from '@/data/services';
import styles from './ServicesPreview.module.css';

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Nos Services"
          subtitle="Une expertise complète en travaux de second œuvre pour tous vos projets de rénovation."
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <ServiceIcon type={service.icon} size={32} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardActions}>
                <Link href={service.href} className={styles.learnMore}>
                  En savoir plus
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/contact" variant="primary" size="lg">
            Demander un devis gratuit
          </Button>
        </div>
      </Container>
    </section>
  );
}
