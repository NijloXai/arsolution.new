import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { ImageIcon, LocationIcon } from '@/components/icons/Icons';
import { galleryProjects } from '@/data/services-hub';
import styles from './ServicesGallery.module.css';

export default function ServicesGallery() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Nos realisations"
          title="La qualite de nos finitions en images"
          subtitle="Decouvrez quelques-uns de nos chantiers recents a Strasbourg et en Alsace."
        />

        <div className={styles.grid}>
          {galleryProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {/* Placeholder en attendant les vraies images */}
                <div className={styles.imagePlaceholder}>
                  <ImageIcon size={48} />
                  <span>Photo projet</span>
                </div>

                {/* Tags overlay */}
                <div className={styles.tagsOverlay}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardLocation}>
                  <LocationIcon size={14} />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/realisations" variant="primary" size="lg">
            Voir toutes nos realisations
          </Button>
        </div>
      </Container>
    </section>
  );
}
