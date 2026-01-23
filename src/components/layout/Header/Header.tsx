/*
  Ce fichier definit le composant Header (en-tete) du site.
  Il affiche le logo, la navigation principale, le telephone et le bouton "Demander un devis".
  Sur mobile, il affiche un menu hamburger qui ouvre un menu plein ecran.
  L'utilisateur peut naviguer vers les differentes pages ou appeler directement l'entreprise.
*/
'use client';

// Stockage de l'etat du menu mobile et du scroll
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import { navigation, companyInfo } from '@/data/company';
import styles from './Header.module.css';

export default function Header() {
  // Indique si le menu mobile est ouvert ou ferme
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Indique si la page a ete scrollee (pour changer le style du header)
  const [isScrolled, setIsScrolled] = useState(false);

  // Detection automatique du scroll pour appliquer un style different au header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ouvre ou ferme le menu mobile au clic sur le bouton hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Ferme le menu mobile (utilise lors d'un clic sur un lien)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container size="xl">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>AR+Solution</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${item.isHighlighted ? styles.highlighted : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className={styles.actions}>
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className={styles.phone}>
              <PhoneIcon />
              <span>{companyInfo.phone}</span>
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Container>
          <nav className={styles.mobileNav}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${item.isHighlighted ? styles.highlighted : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileActions}>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className={styles.mobilePhone}
            >
              <PhoneIcon />
              <span>{companyInfo.phone}</span>
            </a>
            <Button href="/contact" variant="primary" fullWidth onClick={closeMenu}>
              Demander un devis
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
