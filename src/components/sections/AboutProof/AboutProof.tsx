/*
  Ce fichier definit le composant AboutProof (preuves de realisations).
  Il affiche un slider de projets avant/apres avec des avis clients.
  L'utilisateur peut voir les transformations et les temoignages.
*/
'use client';

// Stockage du projet actif et de l'affichage avant/apres
import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import Button from '@/components/ui/Button/Button';
import { StarIcon, ArrowRightIcon } from '@/components/icons/Icons';
import { projectProofs, reviews } from '@/data/about';
import styles from './AboutProof.module.css';

export default function AboutProof() {
  // Index du projet actuellement affiche dans le slider
  const [activeProject, setActiveProject] = useState(0);
  // Indique si on affiche l'image "apres" (true) ou "avant" (false)
  const [showAfter, setShowAfter] = useState(true);

  const currentProject = projectProofs[activeProject];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Nos realisations"
          subtitle="Des transformations qui parlent d'elles-memes"
        />

        <div className={styles.content}>
          {/* Slider avant/apres */}
          <div className={styles.sliderColumn}>
            <div className={styles.slider}>
              <div className={styles.imageContainer}>
                <ImagePlaceholder
                  width={500}
                  height={375}
                  text={`${currentProject.title} - ${showAfter ? 'Apres' : 'Avant'}`}
                />
                <div className={styles.imageLabel}>
                  {showAfter ? 'Apres' : 'Avant'}
                </div>
              </div>

              <div className={styles.toggleBar}>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${!showAfter ? styles.active : ''}`}
                  onClick={() => setShowAfter(false)}
                >
                  Avant
                </button>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${showAfter ? styles.active : ''}`}
                  onClick={() => setShowAfter(true)}
                >
                  Apres
                </button>
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                <p className={styles.projectLocation}>{currentProject.location}</p>
              </div>

              {/* Navigation projets */}
              <div className={styles.projectNav}>
                {projectProofs.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    className={`${styles.projectDot} ${index === activeProject ? styles.active : ''}`}
                    onClick={() => setActiveProject(index)}
                    aria-label={`Voir projet ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Avis clients */}
          <div className={styles.reviewsColumn}>
            <h3 className={styles.reviewsTitle}>Ce que disent nos clients</h3>

            <div className={styles.reviews}>
              {reviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <div className={styles.reviewStars}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        filled={i < review.rating}
                        className={styles.star}
                      />
                    ))}
                  </div>
                  <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                  <div className={styles.reviewMeta}>
                    <span className={styles.reviewAuthor}>{review.author}</span>
                    {review.project && (
                      <span className={styles.reviewProject}>{review.project}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/realisations" className={styles.moreLink}>
              <span>Voir toutes nos realisations</span>
              <ArrowRightIcon size={18} />
            </Link>
          </div>
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
