/*
  Ce fichier definit le composant AboutEngagements (engagements de l'entreprise).
  Il affiche une grille de 6 cartes avec les promesses qualite de l'entreprise
  (respect des delais, finitions soignees, etc.).
  L'utilisateur decouvre les valeurs et engagements de l'equipe.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import {
  CalendarCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  FileTextIcon,
  UserIcon,
  ShieldCheckIcon,
} from '@/components/icons/Icons';
import { engagements } from '@/data/about';
import styles from './AboutEngagements.module.css';

const ENGAGEMENT_ICONS = {
  calendar: CalendarCheckIcon,
  sparkles: SparklesIcon,
  check: CheckCircleIcon,
  file: FileTextIcon,
  user: UserIcon,
  shield: ShieldCheckIcon,
} as const;

export default function AboutEngagements() {
  return (
    <section id="engagements" className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Nos engagements"
          subtitle="6 promesses que nous tenons sur chaque chantier"
        />

        <div className={styles.grid}>
          {engagements.map((engagement, index) => {
            const IconComponent = ENGAGEMENT_ICONS[engagement.icon];
            return (
              <div
                key={engagement.id}
                className={styles.card}
                data-number={String(index + 1).padStart(2, '0')}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.cardTitle}>{engagement.title}</h3>
                <p className={styles.cardDescription}>{engagement.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
