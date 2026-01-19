'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container/Container';
import { navAnchors } from '@/data/about';
import styles from './AboutStickyNav.module.css';

export default function AboutStickyNav() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navAnchors.forEach((anchor) => {
      const element = document.getElementById(anchor.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.nav} aria-label="Navigation page A propos">
      <Container size="xl">
        <ul className={styles.list}>
          {navAnchors.map((anchor) => (
            <li key={anchor.id}>
              <a
                href={anchor.href}
                onClick={(e) => handleClick(e, anchor.href)}
                className={`${styles.link} ${activeSection === anchor.id ? styles.active : ''}`}
                aria-current={activeSection === anchor.id ? 'true' : undefined}
              >
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
