/*
  Ce fichier definit le composant ProfileCards (cartes de profil).
  Il affiche une grille de cartes pour differents profils utilisateurs
  (particuliers, professionnels, collectivites) avec un lien vers leur espace dedie.
  L'utilisateur peut cliquer sur sa carte pour acceder a son parcours personnalise.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ProfileIcon, ArrowRightIcon } from '@/components/icons/Icons';
import { profiles } from '@/data/profiles';
import styles from './ProfileCards.module.css';

export default function ProfileCards() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Vous êtes..."
          subtitle="Découvrez nos solutions adaptées à votre profil et vos besoins spécifiques."
        />

        <div className={styles.grid}>
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={profile.href}
              className={`${styles.card} ${profile.isHighlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.iconWrapper}>
                <ProfileIcon type={profile.icon} size={32} />
              </div>
              <h3 className={styles.cardTitle}>{profile.title}</h3>
              <p className={styles.cardDescription}>{profile.description}</p>
              <span className={styles.cta}>
                {profile.ctaText}
                <ArrowRightIcon size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
