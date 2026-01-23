/*
  Ce fichier definit le composant ServiceDetailHero (hero des pages de service).
  Il affiche le titre du service, la proposition de valeur, les badges de confiance
  et les boutons d'action. Reutilisable pour toutes les pages de service detail.
  L'utilisateur peut demander un devis ou acceder a l'espace marches publics.
*/
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  FileTextIcon,
  ClockIcon,
  WallIcon,
} from '@/components/icons/Icons';
import styles from './ServiceDetailHero.module.css';

interface ServiceDetailHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export default function ServiceDetailHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: ServiceDetailHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Particules decoratives */}
      <div className={styles.decorativeElements} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.content}>
          {/* Icon service */}
          <div className={styles.serviceIcon}>
            <WallIcon size={40} />
          </div>

          <span className={styles.eyebrow}>{eyebrow}</span>

          <h1 className={styles.title}>
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className={styles.titleAccent}>{titleAccent}</span>
              </>
            )}
          </h1>

          <p className={styles.subtitle}>{subtitle}</p>

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
              <span>Reponse 48h</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <Button href={ctaPrimary.href} variant="primary" size="lg">
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="outline" size="lg">
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
