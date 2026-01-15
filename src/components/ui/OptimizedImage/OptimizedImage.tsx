'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  // Si pas de src ou erreur de chargement, afficher placeholder
  if (!src || hasError) {
    return <ImagePlaceholder width={width} height={height} text={alt} />;
  }

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        onError={() => setHasError(true)}
        className={styles.image}
      />
    </div>
  );
}
