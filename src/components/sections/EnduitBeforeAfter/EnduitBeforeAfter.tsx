'use client';

import { useState, useRef, useCallback } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { BeforeAfterState } from '@/data/service-enduit-finition';
import styles from './EnduitBeforeAfter.module.css';

interface EnduitBeforeAfterProps {
  beforeState?: BeforeAfterState;
  afterState?: BeforeAfterState;
  projectLabel?: string;
}

const defaultBefore: BeforeAfterState = {
  label: 'Avant enduit',
  description: 'Mur brut avec defauts visibles',
  indicators: [
    'Fissures et irregularites',
    'Traces de reprise',
    'Joints apparents',
    'Surface non uniforme',
  ],
};

const defaultAfter: BeforeAfterState = {
  label: 'Apres enduit Q4',
  description: 'Surface parfaitement lisse',
  indicators: [
    'Planeite parfaite',
    'Aucun defaut visible',
    'Pret pour laque',
    'Finition premium',
  ],
};

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function FinishIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export default function EnduitBeforeAfter({
  beforeState = defaultBefore,
  afterState = defaultAfter,
  projectLabel = 'Appartement Haussmannien - Strasbourg Neustadt',
}: EnduitBeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        setPosition((prev) => Math.max(5, prev - step));
        e.preventDefault();
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        setPosition((prev) => Math.min(95, prev + step));
        e.preventDefault();
        break;
      case 'Home':
        setPosition(5);
        e.preventDefault();
        break;
      case 'End':
        setPosition(95);
        e.preventDefault();
        break;
    }
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsActive(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          eyebrow="Visualisez la transformation"
          title="Avant vs Apres : le pouvoir de l'enduit"
          subtitle="Decouvrez l'impact d'un enduit professionnel sur la qualite de vos murs."
        />

        <div
          ref={containerRef}
          className={styles.sliderContainer}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          role="img"
          aria-label="Comparaison avant et apres enduit"
        >
          {/* Panel Apres (fond - visible a droite) */}
          <div className={styles.panel + ' ' + styles.panelAfter}>
            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>{afterState.label}</span>
                <div className={styles.qualityBadge + ' ' + styles.qualityGood}>
                  <FinishIcon size={18} />
                  <span>Finition Q4</span>
                </div>
              </div>

              <div className={styles.wallVisual + ' ' + styles.wallAfter}>
                <div className={styles.wallSurface + ' ' + styles.surfaceSmooth}>
                  <div className={styles.lightReflection} />
                </div>
              </div>

              <ul className={styles.indicators}>
                {afterState.indicators.map((indicator, index) => (
                  <li key={index} className={styles.indicator + ' ' + styles.indicatorPositive}>
                    <span className={styles.indicatorIcon}>
                      <CheckIcon size={14} />
                    </span>
                    <span>{indicator}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel Avant (overlay - visible a gauche) */}
          <div
            className={styles.panel + ' ' + styles.panelBefore}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>{beforeState.label}</span>
                <div className={styles.qualityBadge + ' ' + styles.qualityBad}>
                  <FinishIcon size={18} />
                  <span>Brut</span>
                </div>
              </div>

              <div className={styles.wallVisual + ' ' + styles.wallBefore}>
                <div className={styles.wallSurface + ' ' + styles.surfaceRough}>
                  <div className={styles.defectCrack} />
                  <div className={styles.defectBump} />
                  <div className={styles.defectJoint} />
                </div>
              </div>

              <ul className={styles.indicators}>
                {beforeState.indicators.map((indicator, index) => (
                  <li key={index} className={styles.indicator + ' ' + styles.indicatorNegative}>
                    <span className={styles.indicatorIcon}>
                      <XIcon size={14} />
                    </span>
                    <span>{indicator}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className={styles.slider}
            style={{ left: `${position}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onKeyDown={handleKeyDown}
            role="slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Curseur de comparaison avant/apres"
            aria-valuetext={`${Math.round(position)}% visible avant, ${Math.round(100 - position)}% visible apres`}
            tabIndex={0}
          >
            <div className={styles.sliderLine} />
            <div className={`${styles.sliderHandle} ${isActive ? styles.sliderHandleActive : ''}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" transform="translate(6, 0)" />
              </svg>
            </div>
          </div>

          {/* Project label */}
          <div className={styles.projectLabel}>
            <span>{projectLabel}</span>
          </div>

          {/* Instructions */}
          <div className={styles.instructions}>
            <span>Faites glisser pour comparer</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
