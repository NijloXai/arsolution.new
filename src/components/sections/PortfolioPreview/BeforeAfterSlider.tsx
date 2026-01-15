'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = 'Avant',
  afterLabel = 'Après',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Image Après (fond) */}
      <div className={styles.imageWrapper}>
        <div className={styles.placeholder}>
          <span>{afterLabel}</span>
        </div>
        <span className={styles.label + ' ' + styles.labelAfter}>{afterLabel}</span>
      </div>

      {/* Image Avant (overlay) */}
      <div
        className={styles.imageOverlay}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className={styles.placeholder + ' ' + styles.placeholderBefore}>
          <span>{beforeLabel}</span>
        </div>
        <span className={styles.label + ' ' + styles.labelBefore}>{beforeLabel}</span>
      </div>

      {/* Slider handle */}
      <div
        className={styles.slider}
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
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
    </div>
  );
}
