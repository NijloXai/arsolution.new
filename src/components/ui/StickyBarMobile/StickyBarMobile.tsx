/*
  Ce fichier definit le composant StickyBarMobile (barre fixe mobile).
  Il affiche une barre fixe en bas de l'ecran sur mobile avec un bouton d'action et un telephone.
  La barre apparait apres un certain scroll et disparait quand le CTA final est visible.
  L'utilisateur peut cliquer pour demander un devis ou appeler directement l'entreprise.
*/
'use client';

// Stockage de la visibilite de la barre et de l'observation du CTA final
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@/components/icons/Icons';
import { companyInfo } from '@/data/company';
import styles from './StickyBarMobile.module.css';

interface StickyBarMobileProps {
  label: string;
  href: string;
  phoneNumber?: string;
  scrollThreshold?: number;
  ctaFinalSelector?: string;
}

export default function StickyBarMobile({
  label,
  href,
  phoneNumber = companyInfo.phone,
  scrollThreshold = 500,
  ctaFinalSelector = '[data-section="cta-final"]',
}: StickyBarMobileProps) {
  // Indique si la barre doit etre visible (apres un certain scroll)
  const [isVisible, setIsVisible] = useState(false);
  // Indique si le CTA final est visible dans le viewport
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  // Reference vers l'observer pour observer le CTA final
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detection du scroll et observation du CTA final pour gerer la visibilite
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };

    const ctaElement = document.querySelector(ctaFinalSelector);
    if (ctaElement) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsCtaVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observerRef.current.observe(ctaElement);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [scrollThreshold, ctaFinalSelector]);

  const shouldShow = isVisible && !isCtaVisible;

  return (
    <div
      className={`${styles.stickyBar} ${shouldShow ? styles.visible : ''}`}
      role="complementary"
      aria-label="Actions rapides"
      aria-hidden={!shouldShow}
    >
      <div className={styles.content}>
        <Link href={href} className={styles.ctaButton}>
          {label}
        </Link>
        {phoneNumber && (
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className={styles.phoneButton}
            aria-label={`Appeler le ${phoneNumber}`}
          >
            <PhoneIcon size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
