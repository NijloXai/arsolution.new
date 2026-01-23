/*
  Ce fichier definit le composant TrustBar (barre de confiance).
  Il affiche des indicateurs de confiance avec icones et chiffres cles
  (annees d'experience, nombre de projets, certifications, etc.).
  L'utilisateur voit ces preuves de credibilite juste apres le hero.
*/
import Container from '@/components/ui/Container/Container';
import { TrustIcon } from '@/components/icons/Icons';
import { trustItems } from '@/data/company';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <Container size="xl">
        <div className={styles.items}>
          {trustItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <TrustIcon type={item.icon} size={32} />
              <div className={styles.content}>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
