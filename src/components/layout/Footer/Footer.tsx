/*
  Ce fichier definit le composant Footer (pied de page) du site.
  Il affiche les informations de l'entreprise (logo, description, contact),
  les liens de navigation, les services, les certifications et les mentions legales.
  L'utilisateur peut contacter l'entreprise, naviguer vers les pages ou consulter les mentions legales.
*/
import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import { companyInfo, navigation } from '@/data/company';
import { services } from '@/data/services';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="xl">
        <div className={styles.grid}>
          {/* Colonne Entreprise */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>AR+Solution</span>
            </Link>
            <p className={styles.description}>
              Votre partenaire pour tous vos travaux de plâtrerie, isolation et
              finitions à Strasbourg et en Alsace.
            </p>
            <div className={styles.contact}>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className={styles.contactItem}
              >
                <PhoneIcon />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className={styles.contactItem}>
                <MailIcon />
                <span>{companyInfo.email}</span>
              </a>
              <div className={styles.contactItem}>
                <MapIcon />
                <span>
                  {companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}
                </span>
              </div>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <nav className={styles.nav}>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne Services */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nos Services</h3>
            <nav className={styles.nav}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className={styles.navLink}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Colonne Certifications */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Certifications</h3>
            <div className={styles.certifications}>
              <div className={styles.certification}>
                <ShieldIcon />
                <span>RGE Certifié</span>
              </div>
              <div className={styles.certification}>
                <CheckIcon />
                <span>Garantie Décennale</span>
              </div>
              <div className={styles.certification}>
                <FileIcon />
                <span>RC Professionnelle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} AR+Solution. Tous droits réservés.
          </p>
          <nav className={styles.legal}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
