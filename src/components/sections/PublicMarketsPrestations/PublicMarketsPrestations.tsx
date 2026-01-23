/*
  Ce fichier definit le composant PublicMarketsPrestations (prestations marches publics).
  Il affiche une grille de cartes avec les services adaptes aux marches publics,
  incluant les types de travaux et les sites d'intervention.
  L'utilisateur acheteur public peut voir les prestations compatibles marches publics.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import {
  WallIcon,
  InsulationIcon,
  FinishIcon,
  PaintIcon,
  LayoutIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons/Icons';
import type { PrestationItem } from '@/data/marches-publics';
import styles from './PublicMarketsPrestations.module.css';

interface PublicMarketsPrestationsProps {
  items: PrestationItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const iconMap = {
  wall: WallIcon,
  insulation: InsulationIcon,
  finish: FinishIcon,
  paint: PaintIcon,
  layout: LayoutIcon,
};

export default function PublicMarketsPrestations({
  items,
  ctaLabel = 'Demander un chiffrage',
  ctaHref = '/contact?service=marches-publics',
}: PublicMarketsPrestationsProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Nos prestations"
          title="Services compatibles marches publics"
          subtitle="Des prestations adaptees aux exigences des collectivites et etablissements publics."
        />

        <div className={styles.grid}>
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || WallIcon;
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <ul className={styles.servicesList}>
                  {item.services.map((service, index) => (
                    <li key={index} className={styles.serviceItem}>
                      <span className={styles.checkIcon}>
                        <CheckIcon size={14} />
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.sitesWrapper}>
                  <span className={styles.sitesLabel}>Types de sites :</span>
                  <div className={styles.sitesTags}>
                    {item.sites.map((site, index) => (
                      <span key={index} className={styles.siteTag}>
                        {site}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={item.link.href} className={styles.cardLink}>
                  <span>{item.link.label}</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrapper}>
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
