/*
  Ce fichier definit le composant AboutHero (hero de la page A propos).
  Il affiche le titre, la proposition de valeur, les badges de confiance,
  une image de l'equipe et les boutons d'action.
  L'utilisateur decouvre l'identite de l'entreprise des l'arrivee sur la page.
*/
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  FileTextIcon,
  ClockIcon,
} from '@/components/icons/Icons';
import { aboutHeroData } from '@/data/about';
import styles from './AboutHero.module.css';

const BADGE_ICONS = {
  shield: ShieldCheckIcon,
  check: CheckCircleIcon,
  file: FileTextIcon,
  clock: ClockIcon,
} as const;

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.decorativeElements} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.grid}>
          {/* Colonne texte */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>{aboutHeroData.eyebrow}</span>

            <h1 className={styles.title}>
              {aboutHeroData.title}{' '}
              <span className={styles.titleAccent}>{aboutHeroData.titleAccent}</span>
            </h1>

            <p className={styles.subtitle}>{aboutHeroData.subtitle}</p>

            {/* Badges glassmorphism */}
            <div className={styles.badges}>
              {aboutHeroData.badges.map((badge) => {
                const IconComponent = BADGE_ICONS[badge.icon];
                return (
                  <div key={badge.id} className={styles.badge}>
                    <IconComponent size={18} />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Button href={aboutHeroData.ctaPrimary.href} variant="primary" size="lg">
                {aboutHeroData.ctaPrimary.label}
              </Button>
              <Button href={aboutHeroData.ctaSecondary.href} variant="outline" size="lg">
                {aboutHeroData.ctaSecondary.label}
              </Button>
            </div>
          </div>

          {/* Colonne image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder
                width={400}
                height={500}
                text="Equipe AR+Solution"
              />
              <div className={styles.sinceTag}>
                <span>{aboutHeroData.since}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
