/*
  Ce fichier definit le composant SectionSkeleton (placeholder de chargement).
  Il affiche un rectangle anime pendant le chargement des sections en lazy loading.
  L'utilisateur voit une animation de chargement le temps que le contenu reel s'affiche.
*/
import styles from './SectionSkeleton.module.css';

interface SectionSkeletonProps {
  height?: string;
}

export default function SectionSkeleton({ height = '400px' }: SectionSkeletonProps) {
  return (
    <div className={styles.skeleton} style={{ minHeight: height }}>
      <div className={styles.shimmer} />
    </div>
  );
}
