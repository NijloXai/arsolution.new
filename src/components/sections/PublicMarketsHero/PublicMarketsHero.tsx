import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  FileTextIcon,
  ClockIcon,
  BuildingIcon,
} from '@/components/icons/Icons';
import type { HeroData } from '@/data/marches-publics';
import styles from './PublicMarketsHero.module.css';

interface PublicMarketsHeroProps {
  data: HeroData;
}

export default function PublicMarketsHero({ data }: PublicMarketsHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Particules decoratives */}
      <div className={styles.decorativeElements} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.content}>
          {/* Icon service */}
          <div className={styles.serviceIcon}>
            <BuildingIcon size={40} />
          </div>

          <span className={styles.eyebrow}>{data.eyebrow}</span>

          <h1 className={styles.title}>
            {data.title}
            {data.titleAccent && (
              <>
                {' '}
                <span className={styles.titleAccent}>{data.titleAccent}</span>
              </>
            )}
          </h1>

          <p className={styles.subtitle}>{data.subtitle}</p>

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
            <Button href={data.ctaPrimary.href} variant="primary" size="lg">
              {data.ctaPrimary.label}
            </Button>
            <Button href={data.ctaSecondary.href} variant="outline" size="lg">
              {data.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
