'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import BeforeAfterSlider from './BeforeAfterSlider';
import { projects } from '@/data/projects';
import styles from './PortfolioPreview.module.css';

export default function PortfolioPreview() {
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
                <LocationIcon />
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

function LocationIcon() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
