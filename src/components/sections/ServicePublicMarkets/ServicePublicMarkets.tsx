/*
  Ce fichier definit la section Marches Publics pour les pages de services.
  Il affiche les garanties et avantages pour les acheteurs publics et architectes.
  L'utilisateur peut cliquer sur le bouton pour contacter le service dedie.
*/
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import { BuildingLandmarkIcon, CheckIcon } from '@/components/icons/Icons';
import styles from './ServicePublicMarkets.module.css';

interface Argument {
  id: string;
  text: string;
}

interface ServicePublicMarketsProps {
  arguments: Argument[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServicePublicMarkets({
  arguments: args,
  ctaLabel = 'Contacter le service Pros / Marches Publics',
  ctaHref = '/contact?service=marches-publics',
}: ServicePublicMarketsProps) {
  return (
    <section className={styles.section}>
      {/* Decorative elements */}
      <div className={styles.decorativeElements} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.iconColumn}>
            <div className={styles.iconWrapper}>
              <BuildingLandmarkIcon size={56} />
            </div>
          </div>

          <div className={styles.textColumn}>
            <span className={styles.eyebrow}>Acheteurs publics & Architectes</span>
            <h2 className={styles.title}>
              Vos garanties pour les marches publics
            </h2>
            <p className={styles.description}>
              Mairies, gestionnaires de patrimoine, etablissements scolaires : nous comprenons
              vos exigences et contraintes specifiques. Dossier administratif complet,
              intervention en site occupe et transparence totale sur l&apos;avancement des travaux.
            </p>

            <ul className={styles.arguments}>
              {args.map((arg) => (
                <li key={arg.id} className={styles.argument}>
                  <span className={styles.argumentIcon}>
                    <CheckIcon size={18} />
                  </span>
                  <span>{arg.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cta}>
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
