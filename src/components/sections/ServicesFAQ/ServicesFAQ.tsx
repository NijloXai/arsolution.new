'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ChevronDownIcon } from '@/components/icons/Icons';
import { servicesFAQ } from '@/data/services-hub';
import styles from './ServicesFAQ.module.css';

export default function ServicesFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions frequentes"
          subtitle="Les reponses a vos interrogations sur nos services et notre fonctionnement."
        />

        <div className={styles.list}>
          {servicesFAQ.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${openId === item.id ? styles.open : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`services-faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                <span className={styles.chevronWrapper}>
                  <ChevronDownIcon
                    size={20}
                    className={`${styles.chevron} ${openId === item.id ? styles.chevronOpen : ''}`}
                  />
                </span>
              </button>
              <div
                id={`services-faq-answer-${item.id}`}
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
