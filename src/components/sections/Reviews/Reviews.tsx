import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { StarIcon, GoogleIcon } from '@/components/icons/Icons';
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
                <StarIcon
                  key={star}
                  filled={star <= Math.round(reviewStats.averageRating)}
                  size={24}
                  className={star <= Math.round(reviewStats.averageRating) ? styles.starFilled : styles.starEmpty}
                />
              ))}
            </div>
          </div>
          <div className={styles.statsInfo}>
            <span className={styles.totalReviews}>{reviewStats.totalReviews} avis</span>
            <span className={styles.source}>
              <GoogleIcon size={16} />
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
                      <StarIcon
                        key={star}
                        filled={star <= review.rating}
                        size={16}
                        className={star <= review.rating ? styles.starFilled : styles.starEmpty}
                      />
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
