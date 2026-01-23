/*
  Ce fichier definit le composant ServiceUseCases (cas d'usage par cible).
  Il affiche des onglets pour differents profils (collectivites, pros, particuliers)
  avec les avantages et points cles specifiques a chaque cible.
  L'utilisateur peut choisir son profil pour voir les solutions adaptees.
*/
'use client';

// Stockage de l'onglet actif
import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { CheckIcon, BuildingLandmarkIcon, BuildingOfficeIcon, HomeIcon } from '@/components/icons/Icons';
import type { UseCase } from '@/data/service-platrerie';
import styles from './ServiceUseCases.module.css';

interface ServiceUseCasesProps {
  useCases: UseCase[];
}

function UseCaseIcon({ id, size = 24 }: { id: string; size?: number }) {
  switch (id) {
    case 'collectivites':
      return <BuildingLandmarkIcon size={size} />;
    case 'professionnels':
      return <BuildingOfficeIcon size={size} />;
    case 'particuliers':
      return <HomeIcon size={size} />;
    default:
      return <BuildingLandmarkIcon size={size} />;
  }
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  // Id du cas d'usage actuellement selectionne
  const [activeId, setActiveId] = useState(useCases[0]?.id || '');

  const activeCase = useCases.find((uc) => uc.id === activeId);

  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Vous etes..."
          title="Des solutions adaptees a chaque projet"
          subtitle="Collectivites, professionnels ou particuliers : nous adaptons notre approche a vos contraintes specifiques."
        />

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Types de clients">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              className={`${styles.tab} ${activeId === useCase.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(useCase.id)}
              role="tab"
              aria-selected={activeId === useCase.id}
              aria-controls={`panel-${useCase.id}`}
              id={`tab-${useCase.id}`}
            >
              <UseCaseIcon id={useCase.id} size={20} />
              <span>{useCase.label}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        {activeCase && (
          <div
            className={styles.panel}
            role="tabpanel"
            id={`panel-${activeCase.id}`}
            aria-labelledby={`tab-${activeCase.id}`}
          >
            <div className={styles.panelContent}>
              <div className={styles.panelText}>
                <h3 className={styles.panelTitle}>{activeCase.title}</h3>
                <p className={styles.panelDescription}>{activeCase.description}</p>

                {/* Keywords */}
                <div className={styles.keywords}>
                  {activeCase.keywords.map((keyword) => (
                    <span key={keyword} className={styles.keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.panelHighlights}>
                <h4 className={styles.highlightsTitle}>Points cles</h4>
                <ul className={styles.highlightsList}>
                  {activeCase.highlights.map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      <span className={styles.highlightIcon}>
                        <CheckIcon size={18} />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
