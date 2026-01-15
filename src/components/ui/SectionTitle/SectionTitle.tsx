import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tag?: 'h2' | 'h3';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  tag: Tag = 'h2',
  className = '',
}: SectionTitleProps) {
  const classNames = [styles.wrapper, styles[align], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <Tag className={styles.title}>{title}</Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
