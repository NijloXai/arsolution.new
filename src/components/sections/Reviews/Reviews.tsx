import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { reviews, reviewStats } from '@/data/reviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <SectionTitle
          title="Ce que disent nos clients"
          subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
        />

        {/* Stats Google */}
        <div className={styles.statsBar}>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>{reviewStats.averageRating}</span>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.round(reviewStats.averageRating)} />
              ))}
            </div>
          </div>
          <div className={styles.statsInfo}>
            <span className={styles.totalReviews}>{reviewStats.totalReviews} avis</span>
            <span className={styles.source}>
              <GoogleIcon />
              {reviewStats.source}
            </span>
          </div>
        </div>

        {/* Grille des avis */}
        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h3 className={styles.author}>{review.author}</h3>
                  <div className={styles.cardStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= review.rating} small />
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.text}>{review.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StarIcon({ filled, small }: { filled: boolean; small?: boolean }) {
  const size = small ? 16 : 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={filled ? styles.starFilled : styles.starEmpty}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
