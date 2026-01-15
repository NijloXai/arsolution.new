import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import { LocationIcon, ArrowRightIcon } from '@/components/icons/Icons';
import type { PlatrerieProject } from '@/data/service-platrerie';
import styles from './ServiceGallery.module.css';

interface ServiceGalleryProps {
  projects: PlatrerieProject[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceGallery({
  projects,
  ctaLabel = 'Voir toutes nos realisations',
  ctaHref = '/realisations',
}: ServiceGalleryProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Nos realisations"
          title="La precision se voit dans les details"
          subtitle="Decouvrez quelques-unes de nos realisations en platrerie et amenagement interieur."
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardImage}>
                <ImagePlaceholder width={400} height={300} text={project.title} />
                <span className={styles.cardType}>{project.type}</span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>

                <div className={styles.cardLocation}>
                  <LocationIcon size={16} />
                  <span>{project.location}</span>
                </div>

                <p className={styles.cardDescription}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href={ctaHref} variant="secondary" size="lg">
            {ctaLabel}
            <ArrowRightIcon size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
