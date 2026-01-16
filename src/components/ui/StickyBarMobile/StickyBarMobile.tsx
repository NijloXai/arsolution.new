'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@/components/icons/Icons';
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
  phoneNumber = '03 88 00 00 00',
  scrollThreshold = 500,
  ctaFinalSelector = '[data-section="cta-final"]',
}: StickyBarMobileProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
