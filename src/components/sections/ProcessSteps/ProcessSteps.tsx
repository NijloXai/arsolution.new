/*
  Ce fichier definit le composant ProcessSteps (etapes du processus).
  Il affiche les etapes de la methode de travail de l'entreprise
  avec un design en timeline (numerotation et connecteurs).
  L'utilisateur comprend comment se deroule un projet de A a Z.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { processSteps } from '@/data/process';
import styles from './ProcessSteps.module.css';

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Notre méthode"
          subtitle="Un accompagnement structuré pour des travaux sans stress."
        />

        <div className={styles.steps}>
          {processSteps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>
                <span>{step.number}</span>
              </div>
              {index < processSteps.length - 1 && (
                <div className={styles.connector} />
              )}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
