/*
  Ce fichier definit le composant PublicMarketsCompliance (conformite marches publics).
  Il affiche les certifications et garanties necessaires pour les marches publics
  (RGE, garantie decennale, RC Pro) avec un bouton pour demander les documents.
  L'utilisateur acheteur public peut voir les certifications et demander les pieces.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import {
  ShieldCheckIcon,
  ShieldIcon,
  FileTextIcon,
  ClockIcon,
} from '@/components/icons/Icons';
import type { ComplianceItem } from '@/data/marches-publics';
import styles from './PublicMarketsCompliance.module.css';

interface PublicMarketsComplianceProps {
  items: ComplianceItem[];
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  rge: ShieldCheckIcon,
  decennale: ShieldIcon,
  rcpro: FileTextIcon,
};

export default function PublicMarketsCompliance({
  items,
  ctaLabel = 'Demander les pieces administratives',
  ctaHref = '/contact?service=documents',
  note = 'Dossier technique complet sous 24h',
}: PublicMarketsComplianceProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Conformite"
          title="Certifications et garanties"
          subtitle="Tous les documents necessaires pour vos dossiers de marches publics."
        />

        <div className={styles.grid}>
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldIcon;
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent size={32} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaSection}>
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
          {note && (
            <p className={styles.note}>
              <ClockIcon size={16} />
              <span>{note}</span>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
