import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
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
                  <ImageIcon />
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
                  <LocationIcon />
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

function ImageIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
