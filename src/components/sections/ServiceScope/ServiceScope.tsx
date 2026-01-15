import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { WallIcon, InsulationIcon, FinishIcon, ArrowRightIcon } from '@/components/icons/Icons';
import type { ScopeItem } from '@/data/service-platrerie';
import styles from './ServiceScope.module.css';

interface ServiceScopeProps {
  items: ScopeItem[];
  note?: string;
}

function ScopeIcon({ type, size = 28 }: { type: string; size?: number }) {
  switch (type) {
    case 'wall':
      return <WallIcon size={size} />;
    case 'ceiling':
      return <CeilingIcon size={size} />;
    case 'finish':
      return <FinishIcon size={size} />;
    case 'insulation':
      return <InsulationIcon size={size} />;
    default:
      return <WallIcon size={size} />;
  }
}

function CeilingIcon({ size = 24 }: { size?: number }) {
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
      <path d="M3 9h18" />
      <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
      <path d="M9 9V5" />
      <path d="M15 9V5" />
      <path d="M7 13h2" />
      <path d="M15 13h2" />
      <path d="M7 17h10" />
    </svg>
  );
}

export default function ServiceScope({ items, note }: ServiceScopeProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Notre perimetre"
          title="Ce que nous realisons"
          subtitle="Une expertise complete en platrerie et amenagement interieur, du gros oeuvre aux finitions."
        />

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardIcon}>
                <ScopeIcon type={item.icon} size={28} />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>

              {item.link && (
                <Link href={item.link.href} className={styles.cardLink}>
                  {item.link.label}
                  <ArrowRightIcon size={16} />
                </Link>
              )}
            </article>
          ))}
        </div>

        {note && (
          <p className={styles.note}>
            <span className={styles.noteIcon}>*</span>
            {note}
          </p>
        )}
      </Container>
    </section>
  );
}
