import React, { useEffect, useRef } from "react";
import { PROBLEM } from "../../constants/content";

import styles from "./ProblemSection.module.css";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";
import { Icon } from "../../components/Icon/Icon";

export const ProblemSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll(".reveal, .stagger").forEach((child) =>
              child.classList.add("is-visible"),
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="problem-heading"
    >
      <div className={styles.inner}>
        <header className={`${styles.header} reveal`}>
          <SectionLabel>{PROBLEM.eyebrow}</SectionLabel>
          <h2 id="problem-heading" className={styles.headline}>
            {PROBLEM.headline}
          </h2>
          <p className={styles.subhead}>{PROBLEM.subhead}</p>
        </header>

        <div className={`${styles.grid} stagger`}>
          {PROBLEM.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <Icon name={card.icon} size={22} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
