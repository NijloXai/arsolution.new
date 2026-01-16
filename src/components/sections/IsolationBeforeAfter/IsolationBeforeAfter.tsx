'use client';

import { useState, useRef, useCallback } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './IsolationBeforeAfter.module.css';

interface BeforeAfterState {
  label: string;
  temperature?: string;
  comfort?: string;
  description: string;
  indicators: string[];
}

interface IsolationBeforeAfterProps {
  beforeState?: BeforeAfterState;
  afterState?: BeforeAfterState;
}

const defaultBefore: BeforeAfterState = {
  label: 'Avant isolation',
  temperature: '14°C',
  comfort: 'Inconfortable',
  description: 'Murs froids, courants d\'air, factures elevees',
  indicators: [
    'Deperditions thermiques',
    'Bruits exterieurs',
    'Humidite, condensation',
    'Facture energie elevee',
  ],
};

const defaultAfter: BeforeAfterState = {
  label: 'Apres isolation',
  temperature: '21°C',
  comfort: 'Confortable',
  description: 'Chaleur conservee, silence, economies',
  indicators: [
    'Chaleur homogene',
    'Calme et serenite',
    'Air sain, sans condensation',
    'Jusqu\'a -30% sur la facture',
  ],
};

function ThermometerIcon({ size = 24 }: { size?: number }) {
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
}

function SoundwaveIcon({ size = 24 }: { size?: number }) {
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
      <path d="M2 10v4" />
      <path d="M6 6v12" />
      <path d="M10 9v6" />
      <path d="M14 4v16" />
      <path d="M18 8v8" />
      <path d="M22 11v2" />
    </svg>
  );
}

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

export default function IsolationBeforeAfter({
  beforeState = defaultBefore,
  afterState = defaultAfter,
}: IsolationBeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

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
          eyebrow="Visualisez la difference"
          title="Avant vs Apres isolation"
          subtitle="Decouvrez l'impact concret d'une isolation performante sur votre quotidien."
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
          aria-label="Comparaison avant et apres isolation"
        >
          {/* Panel Apres (fond - visible a droite) */}
          <div className={styles.panel + ' ' + styles.panelAfter}>
            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>{afterState.label}</span>
                <div className={styles.temperature + ' ' + styles.temperatureWarm}>
                  <ThermometerIcon size={20} />
                  <span>{afterState.temperature}</span>
                </div>
              </div>

              <div className={styles.illustration + ' ' + styles.illustrationAfter}>
                <div className={styles.house}>
                  <div className={styles.houseRoof} />
                  <div className={styles.houseBody}>
                    <div className={styles.houseWindow} />
                  </div>
                </div>
                <div className={styles.sunIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              <div className={styles.comfortBadge + ' ' + styles.comfortGood}>
                <SoundwaveIcon size={16} />
                <span>{afterState.comfort}</span>
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
                <div className={styles.temperature + ' ' + styles.temperatureCold}>
                  <ThermometerIcon size={20} />
                  <span>{beforeState.temperature}</span>
                </div>
              </div>

              <div className={styles.illustration + ' ' + styles.illustrationBefore}>
                <div className={styles.house}>
                  <div className={styles.houseRoof} />
                  <div className={styles.houseBody}>
                    <div className={styles.houseWindow} />
                  </div>
                </div>
                <div className={styles.snowflakes}>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </div>
              </div>

              <div className={styles.comfortBadge + ' ' + styles.comfortBad}>
                <SoundwaveIcon size={16} />
                <span>{beforeState.comfort}</span>
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
            role="slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Curseur de comparaison"
            tabIndex={0}
          >
            <div className={styles.sliderLine} />
            <div className={styles.sliderHandle}>
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

          {/* Instructions */}
          <div className={styles.instructions}>
            <span>Faites glisser pour comparer</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
