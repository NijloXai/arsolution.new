'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { faqItems } from '@/data/faq';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Retrouvez les réponses aux questions les plus courantes."
        />

        <div className={styles.list}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${openId === item.id ? styles.open : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                <ChevronIcon isOpen={openId === item.id} />
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={styles.answer}
                role="region"
                aria-hidden={openId !== item.id}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
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
      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
