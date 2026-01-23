/*
  Ce fichier definit le composant Container (conteneur) reutilisable.
  Il affiche un wrapper avec une largeur maximale configurable (sm, md, lg, xl, full).
  Il permet de centrer et limiter la largeur du contenu sur toutes les pages.
*/
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
