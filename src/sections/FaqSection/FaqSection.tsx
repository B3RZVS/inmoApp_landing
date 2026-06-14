import React, { useEffect, useRef, useCallback } from "react";
import { OBJECTIONS } from "../../constants/content";

import styles from "./FaqSection.module.css";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";
import { Icon } from "../../components/Icon/Icon";

export const FaqSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // Only one FAQ open at a time
  const handleToggle = useCallback((e: Event) => {
    const target = e.currentTarget as HTMLDetailsElement;
    if (!ref.current) return;
    if (target.open) {
      ref.current.querySelectorAll("details").forEach((d) => {
        if (d !== target) d.removeAttribute("open");
      });
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("details");
    items.forEach((item) => item.addEventListener("toggle", handleToggle));

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
      { threshold: 0.08 },
    );
    observer.observe(el);

    return () => {
      items.forEach((item) => item.removeEventListener("toggle", handleToggle));
      observer.disconnect();
    };
  }, [handleToggle]);

  return (
    <section
      id="preguntas"
      ref={ref}
      className={styles.section}
      aria-labelledby="faq-heading"
    >
      <div className={styles.inner}>
        <header className={`${styles.header} reveal`}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-heading" className={styles.headline}>
            Preguntas frecuentes
          </h2>
        </header>

        <div className={`${styles.list} stagger`} role="list">
          {OBJECTIONS.map((item, i) => (
            <details key={i} className={styles.item} open={i === 0}>
              <summary className={styles.summary}>
                <span>{item.q}</span>
                <Icon name="expand_more" size={20} className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
