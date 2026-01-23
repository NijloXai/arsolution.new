/*
  Ce fichier definit le composant IsolationComparison (comparaison isolation).
  Il affiche deux cartes comparant l'isolation thermique et phonique
  avec les situations adaptees a chaque type.
  L'utilisateur comprend quelle isolation correspond a son besoin.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ThermometerIcon, SoundwaveIcon, CheckIcon } from '@/components/icons/Icons';
import type { ComparisonCard } from '@/data/service-isolation';
import styles from './IsolationComparison.module.css';

interface IsolationComparisonProps {
  cards: ComparisonCard[];
}

function ComparisonIcon({ type, size = 32 }: { type: string; size?: number }) {
  switch (type) {
    case 'thermometer':
      return <ThermometerIcon size={size} />;
    case 'soundwave':
      return <SoundwaveIcon size={size} />;
    default:
      return <ThermometerIcon size={size} />;
  }
}

export default function IsolationComparison({ cards }: IsolationComparisonProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Quel besoin ?"
          title="Thermique ou Phonique : quelle isolation pour votre projet ?"
          subtitle="Deux problematiques differentes, des solutions adaptees. Nos experts vous orientent vers la meilleure approche."
        />

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`${styles.card} ${card.id === 'thermique' ? styles.cardThermique : styles.cardPhonique}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <ComparisonIcon type={card.icon} size={32} />
                </div>
                <div className={styles.cardTitles}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                </div>
              </div>

              <div className={styles.cardDivider} />

              <ul className={styles.situationsList}>
                {card.situations.map((situation, idx) => (
                  <li key={idx} className={styles.situationItem}>
                    <span className={styles.checkIcon}>
                      <CheckIcon size={16} />
                    </span>
                    {situation}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          <span className={styles.noteHighlight}>Bonne nouvelle :</span> Nos solutions combinent souvent les deux performances thermique et acoustique pour un confort optimal.
        </p>
      </Container>
    </section>
  );
}
