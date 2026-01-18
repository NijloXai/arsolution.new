import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import {
  SchoolIcon,
  BuildingIcon,
  OfficeIcon,
  HospitalIcon,
  MapPinIcon,
  ClockIcon,
  ToolIcon,
} from '@/components/icons/Icons';
import type { ReferenceItem } from '@/data/marches-publics';
import styles from './PublicMarketsReferences.module.css';

interface PublicMarketsReferencesProps {
  items: ReferenceItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const sectorIcons = {
  ecole: SchoolIcon,
  mairie: BuildingIcon,
  bureaux: OfficeIcon,
  erp: HospitalIcon,
};

const sectorColors = {
  ecole: 'blue',
  mairie: 'green',
  bureaux: 'purple',
  erp: 'orange',
};

export default function PublicMarketsReferences({
  items,
  ctaLabel = 'Voir toutes les references',
  ctaHref = '/realisations',
}: PublicMarketsReferencesProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="References"
          title="Nos realisations secteur public"
          subtitle="Decouvrez nos chantiers realises pour des collectivites et etablissements publics."
        />

        <div className={styles.grid}>
          {items.map((item) => {
            const SectorIcon = sectorIcons[item.sector] || BuildingIcon;
            const colorClass = styles[`sector${sectorColors[item.sector]}`] || '';
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.imagePlaceholder}>
                    <SectorIcon size={48} />
                  </div>
                  <span className={`${styles.sectorBadge} ${colorClass}`}>
                    {item.sectorLabel}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>

                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <MapPinIcon size={16} />
                      <span>{item.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <ToolIcon size={16} />
                      <span>{item.workType}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <ClockIcon size={16} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrapper}>
          <Button href={ctaHref} variant="secondary" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
