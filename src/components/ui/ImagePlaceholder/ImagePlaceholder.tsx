/*
  Ce fichier definit le composant ImagePlaceholder (placeholder d'image).
  Il affiche un rectangle gris avec une icone d'image quand l'image reelle n'est pas disponible.
  Utilise comme fallback en cas d'erreur de chargement d'image ou d'image manquante.
*/
import { ImageIcon } from '@/components/icons/Icons';
import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
}

export default function ImagePlaceholder({
  width = 400,
  height = 300,
  text = 'Photo',
}: ImagePlaceholderProps) {
  return (
    <div
      className={styles.placeholder}
      style={{ width, height }}
      role="img"
      aria-label={text}
    >
      <ImageIcon size={48} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
