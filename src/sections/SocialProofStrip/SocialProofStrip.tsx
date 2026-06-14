import React, { useEffect, useRef } from "react";
import { SOCIAL_PROOF } from "../../constants/content";
import styles from "./SocialProofStrip.module.css";

export const SocialProofStrip: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll(".reveal").forEach((child) =>
              child.classList.add("is-visible"),
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.strip} aria-label="Métricas">
      <div className={styles.inner}>
        {SOCIAL_PROOF.map((item) => (
          <div key={item.label} className={`${styles.item} reveal`}>
            <div className={styles.value}>{item.value}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
