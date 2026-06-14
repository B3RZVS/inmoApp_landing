import React, { useEffect, useRef } from "react";
import { HOW_IT_WORKS } from "../../constants/content";

import styles from "./HowItWorksSection.module.css";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";

export const HowItWorksSection: React.FC = () => {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="como-funciona"
      ref={ref}
      className={styles.section}
      aria-labelledby="how-heading"
    >
      <div className={styles.inner}>
        <header className={`${styles.header} reveal`}>
          <SectionLabel>{HOW_IT_WORKS.eyebrow}</SectionLabel>
          <h2 id="how-heading" className={styles.headline}>
            {HOW_IT_WORKS.headline}
          </h2>
        </header>

        <div className={`${styles.steps} stagger`}>
          {HOW_IT_WORKS.steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
