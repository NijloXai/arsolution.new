/*
  Ce fichier definit le composant PublicMarketsMethod (methode marches publics).
  Il affiche les etapes de la methode de travail adaptee aux marches publics,
  le badge site occupe et les engagements qualite.
  L'utilisateur acheteur public comprend l'organisation et le suivi de chantier.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import {
  PhoneIcon,
  EyeIcon,
  FileTextIcon,
  CalendarIcon,
  ToolIcon,
  CheckCircleIcon,
  BuildingIcon,
  CheckIcon,
  SparklesIcon,
  UserIcon,
  VolumeIcon,
} from '@/components/icons/Icons';
import type { MethodStep, EngagementItem } from '@/data/marches-publics';
import styles from './PublicMarketsMethod.module.css';

interface SiteOccupeHighlight {
  title: string;
  items: string[];
}

interface PublicMarketsMethodProps {
  steps: MethodStep[];
  engagements: EngagementItem[];
  siteOccupeHighlight?: SiteOccupeHighlight;
}

const stepIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  phone: PhoneIcon,
  eye: EyeIcon,
  file: FileTextIcon,
  calendar: CalendarIcon,
  tool: ToolIcon,
  check: CheckCircleIcon,
};

const engagementIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  calendar: CalendarIcon,
  sparkles: SparklesIcon,
  user: UserIcon,
  volume: VolumeIcon,
};

export default function PublicMarketsMethod({
  steps,
  engagements,
  siteOccupeHighlight,
}: PublicMarketsMethodProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Notre methode"
          title="Organisation et suivi de chantier"
          subtitle="Un processus eprouve pour des chantiers sans stress, respectueux des delais et des contraintes."
        />

        {/* Timeline des etapes */}
        <div className={styles.timeline} role="list" aria-label="Etapes de notre methode">
          {steps.map((step, index) => {
            const StepIcon = stepIconMap[step.icon] || CheckCircleIcon;
            return (
              <div key={step.number} className={styles.step} role="listitem">
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>
                    <span>{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={styles.connector} aria-hidden="true" />
                  )}
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>
                    <StepIcon size={24} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloc Site Occupe */}
        {siteOccupeHighlight && (
          <div className={styles.siteOccupeBadge}>
            <div className={styles.siteOccupeHeader}>
              <div className={styles.siteOccupeIcon}>
                <BuildingIcon size={24} />
              </div>
              <h3 className={styles.siteOccupeTitle}>{siteOccupeHighlight.title}</h3>
            </div>
            <ul className={styles.siteOccupeList}>
              {siteOccupeHighlight.items.map((item, index) => (
                <li key={index} className={styles.siteOccupeItem}>
                  <span className={styles.siteOccupeCheck}>
                    <CheckIcon size={12} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Grille des engagements */}
        <div className={styles.engagementsSection}>
          <h3 className={styles.engagementsTitle}>Nos engagements</h3>
          <div className={styles.engagementsGrid}>
            {engagements.map((engagement) => {
              const EngagementIcon = engagementIconMap[engagement.icon] || CheckCircleIcon;
              return (
                <div key={engagement.id} className={styles.engagementCard}>
                  <div className={styles.engagementIcon}>
                    <EngagementIcon size={24} />
                  </div>
                  <h4 className={styles.engagementTitle}>{engagement.title}</h4>
                  <p className={styles.engagementDescription}>{engagement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
