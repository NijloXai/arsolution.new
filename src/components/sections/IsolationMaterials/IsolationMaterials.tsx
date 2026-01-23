/*
  Ce fichier definit le composant IsolationMaterials (materiaux isolation).
  Il affiche une grille de cartes presentant les differents materiaux isolants
  avec leurs caracteristiques et usages recommandes.
  L'utilisateur decouvre les materiaux adaptes a son projet.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { MaterialItem } from '@/data/service-isolation';
import styles from './IsolationMaterials.module.css';

interface IsolationMaterialsProps {
  items: MaterialItem[];
}

function LayersIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ShieldIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LeafIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function MinimizeIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function MaterialIcon({ type, size = 28 }: { type: string; size?: number }) {
  switch (type) {
    case 'layers':
      return <LayersIcon size={size} />;
    case 'shield':
      return <ShieldIcon size={size} />;
    case 'leaf':
      return <LeafIcon size={size} />;
    case 'minimize':
      return <MinimizeIcon size={size} />;
    default:
      return <LayersIcon size={size} />;
  }
}

export default function IsolationMaterials({ items }: IsolationMaterialsProps) {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          eyebrow="Notre expertise"
          title="Des materiaux adaptes a chaque contrainte"
          subtitle="Nous selectionnons les isolants les plus performants selon votre projet, vos contraintes d'espace et vos objectifs."
        />

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article
              key={item.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardIcon}>
                <MaterialIcon type={item.icon} size={28} />
              </div>

              <h3 className={styles.cardName}>{item.name}</h3>

              <div className={styles.cardMeta}>
                <span className={styles.cardLabel}>Ideal pour</span>
                <p className={styles.cardForWho}>{item.forWho}</p>
              </div>

              <div className={styles.cardDivider} />

              <p className={styles.cardBenefit}>{item.benefit}</p>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Nous travaillons exclusivement avec des materiaux certifies et des marques reconnues (Isover, Rockwool, Knauf...).
          Fiches techniques fournies sur demande.
        </p>
      </Container>
    </section>
  );
}
