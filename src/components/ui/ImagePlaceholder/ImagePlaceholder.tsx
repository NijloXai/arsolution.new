import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  variant?: 'light' | 'dark';
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4';
  className?: string;
}

export default function ImagePlaceholder({
  width,
  height,
  text = 'Image',
  variant = 'light',
  aspectRatio,
  className = '',
}: ImagePlaceholderProps) {
  const classNames = [styles.placeholder, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    height: height
      ? typeof height === 'number'
        ? `${height}px`
        : height
      : undefined,
    aspectRatio: aspectRatio,
  };

  return (
    <div className={classNames} style={style} role="img" aria-label={text}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
