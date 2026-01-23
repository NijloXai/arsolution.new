/*
  Ce fichier definit le composant AboutPublicMarkets (marches publics sur page A propos).
  Il affiche une section dediee aux collectivites avec les avantages cles
  et les liens vers l'espace marches publics et le contact referent.
  L'utilisateur acheteur public peut acceder a son espace dedie.
*/
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import { BuildingLandmarkIcon, CheckIcon } from '@/components/icons/Icons';
import { publicMarketsHighlights, publicMarketsNote } from '@/data/about';
import styles from './AboutPublicMarkets.module.css';

export default function AboutPublicMarkets() {
  return (
    <section id="marches-publics" className={styles.section}>
      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.iconColumn}>
            <div className={styles.iconWrapper}>
              <BuildingLandmarkIcon size={48} />
            </div>
          </div>

          <div className={styles.textColumn}>
            <span className={styles.eyebrow}>Marches publics & Collectivites</span>
            <h2 className={styles.title}>
              Partenaire de confiance des acteurs publics en Alsace
            </h2>

            <div className={styles.highlights}>
              {publicMarketsHighlights.map((item) => (
                <div key={item.id} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <CheckIcon size={18} />
                  </div>
                  <div className={styles.highlightContent}>
                    <h3 className={styles.highlightTitle}>{item.title}</h3>
                    <p className={styles.highlightDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.note}>
              <span className={styles.noteIcon}>*</span>
              <p className={styles.noteText}>{publicMarketsNote}</p>
            </div>

            <div className={styles.ctas}>
              <Button href="/marches-publics" variant="secondary" size="lg">
                Espace Marches Publics
              </Button>
              <Button href="/contact?service=marches-publics" variant="outline" size="lg">
                Contact referent
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
