import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { QualityIcon } from '@/components/icons/Icons';
import type { QualityDetail } from '@/data/service-peinture-lissage';
import styles from './PaintQualityDetails.module.css';

interface PaintQualityDetailsProps {
  details: QualityDetail[];
}

export default function PaintQualityDetails({ details }: PaintQualityDetailsProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Qualite de finition"
          title="La difference se voit dans les details"
          subtitle="Ce qui distingue un travail professionnel d'un simple coup de rouleau."
        />

        <div className={styles.grid} role="list" aria-label="Détails de finition">
          {details.map((detail, index) => (
            <div
              key={detail.id}
              className={styles.card}
              role="listitem"
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  {detail.icon ? (
                    <QualityIcon type={detail.icon} size={32} />
                  ) : (
                    <span className={styles.imageNumber}>{String(index + 1).padStart(2, '0')}</span>
                  )}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{detail.title}</h3>
                <p className={styles.description}>{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
