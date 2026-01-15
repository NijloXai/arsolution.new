import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import { BuildingLandmarkIcon, CheckIcon } from '@/components/icons/Icons';
import styles from './PublicMarketsEntry.module.css';

export default function PublicMarketsEntry() {
  return (
    <section className={styles.section}>
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
              Un partenaire fiable pour vos projets publics en Alsace
            </h2>
            <p className={styles.description}>
              Mairies, ecoles, gestionnaires de patrimoine : nous maitrisons les exigences
              des marches publics. Dossiers administratifs complets, respect des delais,
              intervention en site occupe et transparence totale.
            </p>

            <ul className={styles.highlights}>
              <li>
                <CheckIcon size={20} />
                <span>Reponse aux appels d&apos;offres</span>
              </li>
              <li>
                <CheckIcon size={20} />
                <span>Dossiers administratifs complets</span>
              </li>
              <li>
                <CheckIcon size={20} />
                <span>Intervention en site occupe</span>
              </li>
              <li>
                <CheckIcon size={20} />
                <span>Certifications RGE & garanties</span>
              </li>
            </ul>

            <div className={styles.cta}>
              <Button href="/marches-publics" variant="secondary" size="lg">
                Espace Marches Publics
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
