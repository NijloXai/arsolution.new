import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  FileTextIcon,
  ClockIcon,
} from '@/components/icons/Icons';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      {/* Particules decoratives */}
      <div className={styles.decorativeElements} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.content}>
          <span className={styles.eyebrow}>Expertise second oeuvre en Alsace</span>

          <h1 className={styles.title}>
            Nos services de <span className={styles.titleAccent}>renovation interieure</span> & isolation
          </h1>

          <p className={styles.subtitle}>
            Platrerie, isolation thermique et phonique, peinture et finitions.
            Une equipe certifiee RGE a votre service a Strasbourg et dans toute l&apos;Alsace.
          </p>

          {/* Bandeau preuves */}
          <div className={styles.badges}>
            <div className={styles.badge}>
              <ShieldCheckIcon size={20} />
              <span>RGE Certifie</span>
            </div>
            <div className={styles.badge}>
              <CheckCircleIcon size={20} />
              <span>Garantie Decennale</span>
            </div>
            <div className={styles.badge}>
              <FileTextIcon size={20} />
              <span>RC Pro</span>
            </div>
            <div className={styles.badge}>
              <ClockIcon size={20} />
              <span>Reponse sous 24h</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
            <Button href="/marches-publics" variant="outline" size="lg">
              Acces Marches Publics
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
