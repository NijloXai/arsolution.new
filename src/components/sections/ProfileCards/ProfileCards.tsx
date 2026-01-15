import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
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
                <ProfileIcon type={profile.icon} />
              </div>
              <h3 className={styles.cardTitle}>{profile.title}</h3>
              <p className={styles.cardDescription}>{profile.description}</p>
              <span className={styles.cta}>
                {profile.ctaText}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProfileIcon({ type }: { type?: string }) {
  switch (type) {
    case 'building':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      );
    case 'users':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'home':
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
