import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  tag?: 'h2' | 'h3';
  showLine?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  tag: Tag = 'h2',
  showLine = true,
  className = '',
}: SectionTitleProps) {
  const classNames = [styles.wrapper, styles[align], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {showLine && (
        <span 
          className={`${styles.decorativeLine} ${align === 'center' ? styles.lineCenter : ''}`} 
          aria-hidden="true"
        />
      )}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
