import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import {
  PhoneIcon,
  EyeIcon,
  FileTextIcon,
  CalendarIcon,
  ToolIcon,
  CheckCircleIcon,
} from '@/components/icons/Icons';
import { methodSteps, methodHighlight } from '@/data/about';
import styles from './AboutMethod.module.css';

const STEP_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  phone: PhoneIcon,
  eye: EyeIcon,
  file: FileTextIcon,
  calendar: CalendarIcon,
  tool: ToolIcon,
  check: CheckCircleIcon,
};

export default function AboutMethod() {
  return (
    <section id="methode" className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Notre methode"
          subtitle="Un accompagnement structure en 6 etapes pour des travaux sans stress"
        />

        <div className={styles.steps}>
          {methodSteps.map((step, index) => {
            const IconComponent = STEP_ICONS[step.icon] || CheckCircleIcon;
            return (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>
                    <span>{step.number}</span>
                  </div>
                  <div className={styles.stepIcon}>
                    <IconComponent size={20} />
                  </div>
                </div>
                {index < methodSteps.length - 1 && (
                  <div className={styles.connector} />
                )}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight */}
        <div className={styles.highlight}>
          <span className={styles.highlightIcon}>*</span>
          <p className={styles.highlightText}>{methodHighlight}</p>
        </div>
      </Container>
    </section>
  );
}
