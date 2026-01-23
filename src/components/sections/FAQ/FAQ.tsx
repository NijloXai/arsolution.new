/*
  Ce fichier definit le composant FAQ (foire aux questions) unifie.
  Il affiche une liste de questions/reponses en accordeon.
  Utilisable sur toutes les pages avec des items et styles personnalisables.
  L'utilisateur peut cliquer sur une question pour voir la reponse.
*/
'use client';

// Stockage de l'id de la question actuellement ouverte
import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { ChevronDownIcon } from '@/components/icons/Icons';
import styles from './FAQ.module.css';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'alt-background';
  idPrefix?: string;
}

export default function FAQ({
  items,
  eyebrow,
  title = 'Questions frequentes',
  subtitle,
  variant = 'default',
  idPrefix = 'faq',
}: FAQProps) {
  // Id de la question actuellement ouverte (null si aucune)
  const [openId, setOpenId] = useState<string | null>(null);

  // Ouvre ou ferme une question au clic
  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const sectionClassName = variant === 'alt-background'
    ? `${styles.section} ${styles.sectionAlt}`
    : styles.section;

  return (
    <section className={sectionClassName}>
      <Container size="lg">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className={styles.list}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${openId === item.id ? styles.open : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`${idPrefix}-answer-${item.id}`}
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
                id={`${idPrefix}-answer-${item.id}`}
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
