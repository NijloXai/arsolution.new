import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import { CheckIcon } from '@/components/icons/Icons';
import { teamBullets, teamDescription } from '@/data/about';
import styles from './AboutTeam.module.css';

export default function AboutTeam() {
  return (
    <section id="equipe" className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Notre equipe"
          subtitle="Des professionnels passionnes a votre service"
        />

        <div className={styles.grid}>
          {/* Colonne image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder
                width={500}
                height={375}
                text="Equipe AR+Solution"
              />
            </div>
          </div>

          {/* Colonne texte */}
          <div className={styles.textColumn}>
            <p className={styles.description}>{teamDescription}</p>

            <ul className={styles.bullets}>
              {teamBullets.map((bullet) => (
                <li key={bullet.id} className={styles.bulletItem}>
                  <div className={styles.bulletIcon}>
                    <CheckIcon size={16} />
                  </div>
                  <span>{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
