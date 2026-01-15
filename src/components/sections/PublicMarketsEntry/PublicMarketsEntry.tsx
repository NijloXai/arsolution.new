import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import styles from './PublicMarketsEntry.module.css';

export default function PublicMarketsEntry() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.iconColumn}>
            <div className={styles.iconWrapper}>
              <BuildingIcon />
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
                <CheckIcon />
                <span>Reponse aux appels d&apos;offres</span>
              </li>
              <li>
                <CheckIcon />
                <span>Dossiers administratifs complets</span>
              </li>
              <li>
                <CheckIcon />
                <span>Intervention en site occupe</span>
              </li>
              <li>
                <CheckIcon />
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

function BuildingIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
