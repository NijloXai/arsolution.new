/*
  Ce fichier definit le composant PortfolioPreview (apercu du portfolio).
  Il affiche un slider avant/apres avec navigation entre les projets.
  L'utilisateur peut voir les realisations et comparer l'avant et l'apres.
*/
'use client';

// Stockage du projet actuellement affiche
import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import { LocationIcon } from '@/components/icons/Icons';
import BeforeAfterSlider from './BeforeAfterSlider';
import { projects } from '@/data/projects';
import styles from './PortfolioPreview.module.css';

export default function PortfolioPreview() {
  // Index du projet actuellement affiche dans le slider
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Nos Réalisations"
          subtitle="Découvrez nos projets avant/après et la qualité de nos finitions."
        />

        <div className={styles.content}>
          {/* Slider principal */}
          <div className={styles.sliderWrapper}>
            <BeforeAfterSlider />

            {/* Info projet */}
            <div className={styles.projectInfo}>
              <span className={styles.category}>{activeProject.category}</span>
              <h3 className={styles.projectTitle}>{activeProject.title}</h3>
              <p className={styles.projectLocation}>
                <LocationIcon size={16} />
                {activeProject.location}
              </p>
            </div>
          </div>

          {/* Navigation projets */}
          <div className={styles.navigation}>
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`${styles.navButton} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Voir ${project.title}`}
              >
                <span className={styles.navCategory}>{project.category}</span>
                <span className={styles.navTitle}>{project.title}</span>
                <span className={styles.navLocation}>{project.location}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Button href="/realisations" variant="outline" size="lg">
            Voir toutes nos réalisations
          </Button>
        </div>
      </Container>
    </section>
  );
}
