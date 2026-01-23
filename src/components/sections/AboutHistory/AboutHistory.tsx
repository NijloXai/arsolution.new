/*
  Ce fichier definit le composant AboutHistory (histoire de l'entreprise).
  Il affiche une timeline avec les dates cles, la mission de l'entreprise
  et les liens vers les differents services.
  L'utilisateur decouvre l'evolution de l'entreprise depuis sa creation.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ServiceIcon, ArrowRightIcon } from '@/components/icons/Icons';
import { timelineItems, missionText, serviceLinks } from '@/data/about';
import styles from './AboutHistory.module.css';

export default function AboutHistory() {
  return (
    <section id="histoire" className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Notre histoire"
          subtitle="De l'artisanat local a l'expertise reconnue en Alsace"
        />

        {/* Timeline */}
        <div className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <div key={item.year} className={styles.timelineItem}>
              <div className={styles.timelineYear}>
                <span>{item.year}</span>
              </div>
              {index < timelineItems.length - 1 && (
                <div className={styles.timelineConnector} />
              )}
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className={styles.mission}>
          <h3 className={styles.missionTitle}>Notre mission</h3>
          <p className={styles.missionText}>{missionText}</p>
        </div>

        {/* Services maillage */}
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Nos domaines d&apos;expertise</h3>
          <div className={styles.servicesGrid}>
            {serviceLinks.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  <ServiceIcon type={service.icon} size={24} />
                </div>
                <span className={styles.serviceTitle}>{service.title}</span>
                <ArrowRightIcon size={16} className={styles.serviceArrow} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
