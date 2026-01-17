import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { WallIcon, InsulationIcon, FinishIcon, ArrowRightIcon, LayoutIcon, BuildingOfficeIcon } from '@/components/icons/Icons';
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
    case 'layout':
      return <LayoutIcon size={size} />;
    case 'volume':
      return <VolumeIcon size={size} />;
    case 'office':
      return <BuildingOfficeIcon size={size} />;
    case 'custom':
      return <CustomIcon size={size} />;
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

function VolumeIcon({ size = 24 }: { size?: number }) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function CustomIcon({ size = 24 }: { size?: number }) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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
