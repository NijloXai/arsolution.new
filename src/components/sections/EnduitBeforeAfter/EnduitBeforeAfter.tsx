/*
  Ce fichier definit le composant EnduitBeforeAfter (avant/apres enduit).
  Il affiche un slider interactif comparant un mur brut et un mur enduit Q4
  avec les indicateurs visuels de qualite.
  L'utilisateur peut glisser le curseur pour visualiser la transformation.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider/BeforeAfterSlider';
import { CheckIcon, XIcon, FinishIcon } from '@/components/icons/Icons';
import type { BeforeAfterState } from '@/data/service-enduit-finition';
import styles from './EnduitBeforeAfter.module.css';

interface EnduitBeforeAfterProps {
  beforeState?: BeforeAfterState;
  afterState?: BeforeAfterState;
  projectLabel?: string;
}

const defaultBefore: BeforeAfterState = {
  label: 'Avant enduit',
  description: 'Mur brut avec defauts visibles',
  indicators: [
    'Fissures et irregularites',
    'Traces de reprise',
    'Joints apparents',
    'Surface non uniforme',
  ],
};

const defaultAfter: BeforeAfterState = {
  label: 'Apres enduit Q4',
  description: 'Surface parfaitement lisse',
  indicators: [
    'Planeite parfaite',
    'Aucun defaut visible',
    'Pret pour laque',
    'Finition premium',
  ],
};

export default function EnduitBeforeAfter({
  beforeState = defaultBefore,
  afterState = defaultAfter,
  projectLabel = 'Appartement Haussmannien - Strasbourg Neustadt',
}: EnduitBeforeAfterProps) {
  // Contenu visuel du panel "Avant"
  const beforeContent = (
    <div className={styles.panelContent + ' ' + styles.panelBefore}>
      <div className={styles.panelHeader}>
        <span className={styles.panelLabel}>{beforeState.label}</span>
        <div className={styles.qualityBadge + ' ' + styles.qualityBad}>
          <FinishIcon size={18} />
          <span>Brut</span>
        </div>
      </div>

      <div className={styles.wallVisual + ' ' + styles.wallBefore}>
        <div className={styles.wallSurface + ' ' + styles.surfaceRough}>
          <div className={styles.defectCrack} />
          <div className={styles.defectBump} />
          <div className={styles.defectJoint} />
        </div>
      </div>

      <ul className={styles.indicators}>
        {beforeState.indicators.map((indicator, index) => (
          <li key={index} className={styles.indicator + ' ' + styles.indicatorNegative}>
            <span className={styles.indicatorIcon}>
              <XIcon size={14} />
            </span>
            <span>{indicator}</span>
          </li>
        ))}
      </ul>

      {/* Project label visible uniquement dans le panel before */}
      <div className={styles.projectLabel}>
        <span>{projectLabel}</span>
      </div>
    </div>
  );

  // Contenu visuel du panel "Apres"
  const afterContent = (
    <div className={styles.panelContent + ' ' + styles.panelAfter}>
      <div className={styles.panelHeader}>
        <span className={styles.panelLabel}>{afterState.label}</span>
        <div className={styles.qualityBadge + ' ' + styles.qualityGood}>
          <FinishIcon size={18} />
          <span>Finition Q4</span>
        </div>
      </div>

      <div className={styles.wallVisual + ' ' + styles.wallAfter}>
        <div className={styles.wallSurface + ' ' + styles.surfaceSmooth}>
          <div className={styles.lightReflection} />
        </div>
      </div>

      <ul className={styles.indicators}>
        {afterState.indicators.map((indicator, index) => (
          <li key={index} className={styles.indicator + ' ' + styles.indicatorPositive}>
            <span className={styles.indicatorIcon}>
              <CheckIcon size={14} />
            </span>
            <span>{indicator}</span>
          </li>
        ))}
      </ul>

      {/* Project label duplique pour apparaitre aussi dans le panel after */}
      <div className={styles.projectLabel}>
        <span>{projectLabel}</span>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          eyebrow="Visualisez la transformation"
          title="Avant vs Apres : le pouvoir de l'enduit"
          subtitle="Decouvrez l'impact d'un enduit professionnel sur la qualite de vos murs."
        />

        <BeforeAfterSlider
          beforeContent={beforeContent}
          afterContent={afterContent}
          beforeLabel="avant enduit"
          afterLabel="apres enduit Q4"
          ariaLabel="Comparaison avant et apres enduit"
        />
      </Container>
    </section>
  );
}
