/*
  Ce fichier definit le composant IsolationBeforeAfter (avant/apres isolation).
  Il affiche un slider interactif comparant l'etat avant et apres isolation
  avec temperature, confort et indicateurs de performance.
  L'utilisateur peut glisser le curseur pour visualiser la difference.
*/
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider/BeforeAfterSlider';
import { ThermometerIcon, SoundwaveIcon, CheckIcon, XIcon } from '@/components/icons/Icons';
import styles from './IsolationBeforeAfter.module.css';

interface BeforeAfterState {
  label: string;
  temperature?: string;
  comfort?: string;
  description: string;
  indicators: string[];
}

interface IsolationBeforeAfterProps {
  beforeState?: BeforeAfterState;
  afterState?: BeforeAfterState;
}

const defaultBefore: BeforeAfterState = {
  label: 'Avant isolation',
  temperature: '14°C',
  comfort: 'Inconfortable',
  description: 'Murs froids, courants d\'air, factures elevees',
  indicators: [
    'Deperditions thermiques',
    'Bruits exterieurs',
    'Humidite, condensation',
    'Facture energie elevee',
  ],
};

const defaultAfter: BeforeAfterState = {
  label: 'Apres isolation',
  temperature: '21°C',
  comfort: 'Confortable',
  description: 'Chaleur conservee, silence, economies',
  indicators: [
    'Chaleur homogene',
    'Calme et serenite',
    'Air sain, sans condensation',
    'Jusqu\'a -30% sur la facture',
  ],
};

export default function IsolationBeforeAfter({
  beforeState = defaultBefore,
  afterState = defaultAfter,
}: IsolationBeforeAfterProps) {
  // Contenu visuel du panel "Avant"
  const beforeContent = (
    <div className={styles.panelContent + ' ' + styles.panelBefore}>
      <div className={styles.panelHeader}>
        <span className={styles.panelLabel}>{beforeState.label}</span>
        <div className={styles.temperature + ' ' + styles.temperatureCold}>
          <ThermometerIcon size={20} />
          <span>{beforeState.temperature}</span>
        </div>
      </div>

      <div className={styles.illustration + ' ' + styles.illustrationBefore}>
        <div className={styles.house}>
          <div className={styles.houseRoof} />
          <div className={styles.houseBody}>
            <div className={styles.houseWindow} />
          </div>
        </div>
        <div className={styles.snowflakes}>
          <span>*</span>
          <span>*</span>
          <span>*</span>
        </div>
      </div>

      <div className={styles.comfortBadge + ' ' + styles.comfortBad}>
        <SoundwaveIcon size={16} />
        <span>{beforeState.comfort}</span>
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
    </div>
  );

  // Contenu visuel du panel "Apres"
  const afterContent = (
    <div className={styles.panelContent + ' ' + styles.panelAfter}>
      <div className={styles.panelHeader}>
        <span className={styles.panelLabel}>{afterState.label}</span>
        <div className={styles.temperature + ' ' + styles.temperatureWarm}>
          <ThermometerIcon size={20} />
          <span>{afterState.temperature}</span>
        </div>
      </div>

      <div className={styles.illustration + ' ' + styles.illustrationAfter}>
        <div className={styles.house}>
          <div className={styles.houseRoof} />
          <div className={styles.houseBody}>
            <div className={styles.houseWindow} />
          </div>
        </div>
        <div className={styles.sunIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className={styles.comfortBadge + ' ' + styles.comfortGood}>
        <SoundwaveIcon size={16} />
        <span>{afterState.comfort}</span>
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
    </div>
  );

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          eyebrow="Visualisez la difference"
          title="Avant vs Apres isolation"
          subtitle="Decouvrez l'impact concret d'une isolation performante sur votre quotidien."
        />

        <BeforeAfterSlider
          beforeContent={beforeContent}
          afterContent={afterContent}
          beforeLabel="avant isolation"
          afterLabel="apres isolation"
          ariaLabel="Comparaison avant et apres isolation"
        />
      </Container>
    </section>
  );
}
