import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export default function Container({
  children,
  size = 'lg',
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  const classNames = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(' ');

  return <Component className={classNames}>{children}</Component>;
}
