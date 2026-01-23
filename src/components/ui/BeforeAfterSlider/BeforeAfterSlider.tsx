/*
  Ce fichier definit le composant BeforeAfterSlider (slider avant/apres generique).
  Il gere la logique commune du slider interactif (position, glissement, clavier).
  Les composants parents fournissent le contenu visuel via beforeContent et afterContent.
  L'utilisateur peut glisser le curseur pour comparer les deux etats.
*/
'use client';

// Stockage de la position du curseur et de l'etat de glissement
import { useState, useRef, useCallback, type ReactNode } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeContent: ReactNode;
  afterContent: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  ariaLabel?: string;
  instructions?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeContent,
  afterContent,
  beforeLabel = 'Avant',
  afterLabel = 'Apres',
  ariaLabel = 'Comparaison avant et apres',
  instructions = 'Faites glisser pour comparer',
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  // Position du curseur en pourcentage (0 a 100)
  const [position, setPosition] = useState(initialPosition);
  // Indique si l'utilisateur est en train de glisser le curseur
  const [isDragging, setIsDragging] = useState(false);
  // Indique si le curseur est actif (pour le style)
  const [isActive, setIsActive] = useState(false);
  // Reference vers le conteneur pour calculer la position relative
  const containerRef = useRef<HTMLDivElement>(null);

  // Calcule la nouvelle position du curseur en fonction de la position de la souris
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  // Gestion du clavier pour l'accessibilite
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
    <div
      ref={containerRef}
      className={styles.sliderContainer}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      role="img"
      aria-label={ariaLabel}
    >
      {/* Panel Apres (fond - visible a droite) */}
      <div className={styles.panel + ' ' + styles.panelAfter}>
        {afterContent}
      </div>

      {/* Panel Avant (overlay - visible a gauche) */}
      <div
        className={styles.panel + ' ' + styles.panelBefore}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeContent}
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
        aria-label="Curseur de comparaison"
        aria-valuetext={`${Math.round(position)}% ${beforeLabel}, ${Math.round(100 - position)}% ${afterLabel}`}
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

      {/* Instructions */}
      <div className={styles.instructions}>
        <span>{instructions}</span>
      </div>
    </div>
  );
}
