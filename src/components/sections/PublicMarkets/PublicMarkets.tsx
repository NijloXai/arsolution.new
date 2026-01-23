/*
  Ce fichier definit le composant PublicMarkets (marches publics) pour la page d'accueil.
  Il affiche une section dediee aux acheteurs publics avec les avantages
  (dossiers complets, certifications, interlocuteur dedie) et des statistiques.
  L'utilisateur peut acceder a l'espace marches publics ou contacter l'entreprise.
*/
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import styles from './PublicMarkets.module.css';

const features = [
  {
    icon: 'folder',
    title: 'Dossiers complets',
    description: 'DC1, DC2, mémoire technique, références vérifiables. Tout est prêt.',
  },
  {
    icon: 'shield',
    title: 'Certifications à jour',
    description: 'RGE, Qualibat, attestations d\'assurance et Kbis actualisés.',
  },
  {
    icon: 'user',
    title: 'Interlocuteur dédié',
    description: 'Un contact unique pour vos appels d\'offres et le suivi des marchés.',
  },
];

export default function PublicMarkets() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.badge}>Acheteurs publics</span>
            <h2 className={styles.title}>
              Marchés Publics & Collectivités
            </h2>
            <p className={styles.subtitle}>
              Vous êtes une mairie, une collectivité ou un établissement public ?
              AR+Solution vous accompagne dans vos projets de rénovation avec
              rigueur et transparence.
            </p>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctas}>
              <Button href="/marches-publics" variant="primary" size="lg">
                Accès espace acheteurs
              </Button>
              <Button href="mailto:marches@arsolution.fr" variant="outline" size="lg">
                marches@arsolution.fr
              </Button>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Marchés publics réalisés</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Réceptions sans réserve</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>48h</span>
              <span className={styles.statLabel}>Délai de réponse</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case 'folder':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      );
    case 'shield':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'user':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
}
