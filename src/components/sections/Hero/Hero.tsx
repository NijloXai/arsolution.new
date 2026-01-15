import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>Artisan certifié RGE en Alsace</span>
            <h1 className={styles.title}>
              Travaux de <span className={styles.titleAccent}>Plâtrerie</span>, Isolation & Finitions à Strasbourg
            </h1>
            <p className={styles.subtitle}>
              Votre interlocuteur unique pour la rénovation intérieure. Fiabilité,
              certifications RGE et respect des délais garantis.
            </p>

            {/* Bandeau preuves */}
            <div className={styles.badges}>
              <div className={styles.badge}>
                <ShieldIcon />
                <span>RGE Certifié</span>
              </div>
              <div className={styles.badge}>
                <CheckIcon />
                <span>Garantie Décennale</span>
              </div>
              <div className={styles.badge}>
                <FileIcon />
                <span>RC Pro</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href="/marches-publics" variant="outline" size="lg">
                Accès Marchés Publics
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <BuildingIcon />
              <span>Photo chantier AR+Solution</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}
