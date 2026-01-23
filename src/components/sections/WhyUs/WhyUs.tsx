/*
  Ce fichier definit le composant WhyUs (pourquoi nous choisir).
  Il affiche une grille de cartes avec les avantages de l'entreprise
  (expertise, certifications, accompagnement, etc.).
  L'utilisateur decouvre les raisons de faire confiance a AR+Solution.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { WhyUsIcon } from '@/components/icons/Icons';
import { whyUsPoints } from '@/data/whyus';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Pourquoi choisir AR+Solution ?"
          subtitle="6 bonnes raisons de nous confier vos travaux de rénovation intérieure."
        />

        <div className={styles.grid}>
          {whyUsPoints.map((point, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <WhyUsIcon type={point.icon} size={28} />
              </div>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardDescription}>{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
