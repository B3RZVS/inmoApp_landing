import React, { useEffect, useRef } from "react";
import { FEATURES } from "../../constants/content";

import styles from "./FeaturesSection.module.css";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";
import { Icon } from "../../components/Icon/Icon";

export const FeaturesSection: React.FC = () => {
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
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="funciones"
      ref={ref}
      className={styles.section}
      aria-labelledby="features-heading"
    >
      <div className={styles.inner}>
        <header className={`${styles.header} reveal`}>
          <SectionLabel>{FEATURES.eyebrow}</SectionLabel>
          <h2 id="features-heading" className={styles.headline}>
            {FEATURES.headline}
          </h2>
          <p className={styles.subhead}>{FEATURES.subhead}</p>
        </header>

        <div className={`${styles.grid} stagger`}>
          {FEATURES.items.map((item) => (
            <article key={item.title} className={styles.item}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
