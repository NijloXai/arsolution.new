import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import Button from '@/components/ui/Button/Button';
import styles from './InterventionZone.module.css';

const cities = {
  'Bas-Rhin (67)': [
    'Strasbourg',
    'Schiltigheim',
    'Illkirch-Graffenstaden',
    'Haguenau',
    'Lingolsheim',
    'Bischheim',
    'Sélestat',
    'Ostwald',
  ],
  'Haut-Rhin (68)': [
    'Colmar',
    'Mulhouse',
    'Saint-Louis',
    'Wittenheim',
    'Illzach',
    'Rixheim',
    'Kingersheim',
    'Cernay',
  ],
};

export default function InterventionZone() {
  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.content}>
          <div className={styles.text}>
            <SectionTitle
              title="Zone d'intervention"
              subtitle="Basés à Strasbourg, nous intervenons sur l'ensemble de l'Alsace."
              align="left"
            />

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <LocationIcon />
                <div>
                  <h3 className={styles.infoTitle}>Siège social</h3>
                  <p className={styles.infoText}>Strasbourg (67000)</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <TruckIcon />
                <div>
                  <h3 className={styles.infoTitle}>Rayon d&apos;intervention</h3>
                  <p className={styles.infoText}>Alsace entière (67 & 68)</p>
                </div>
              </div>
            </div>

            <Button href="/contact" variant="primary">
              Vérifier ma commune
            </Button>
          </div>

          <div className={styles.cities}>
            {Object.entries(cities).map(([department, cityList]) => (
              <div key={department} className={styles.department}>
                <h3 className={styles.departmentTitle}>{department}</h3>
                <ul className={styles.cityList}>
                  {cityList.map((city) => (
                    <li key={city} className={styles.city}>
                      <CheckIcon />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className={styles.moreText}>
              Et de nombreuses autres communes...
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
