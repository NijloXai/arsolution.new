import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { ComparisonCard } from '@/data/service-isolation';
import styles from './IsolationComparison.module.css';

interface IsolationComparisonProps {
  cards: ComparisonCard[];
}

function ThermometerIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      <path d="M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
}

function SoundwaveIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 6v12" />
      <path d="M18 8v8" />
      <path d="M22 12h-2" />
      <line x1="2" y1="12" x2="4" y2="12" strokeWidth="3" />
      <line x1="20" y1="12" x2="22" y2="12" strokeWidth="3" />
    </svg>
  );
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

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
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
