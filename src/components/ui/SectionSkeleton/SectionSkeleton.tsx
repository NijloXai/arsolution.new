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
