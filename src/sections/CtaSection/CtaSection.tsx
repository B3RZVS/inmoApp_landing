import React, { useEffect, useRef } from "react";
import { FINAL_CTA } from "../../constants/content";
import styles from "./CtaSection.module.css";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";

const TRUST_ITEMS = [
  { icon: "lock", label: "Sin tarjeta requerida" },
  { icon: "cancel", label: "Cancelá cuando quieras" },
  { icon: "support_agent", label: "Soporte por WhatsApp" },
] as const;

export const CtaSection: React.FC = () => {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-label="Empezar con inmoApp"
    >
      <div className={styles.inner}>
        <h2 className={`${styles.headline} reveal`}>{FINAL_CTA.headline}</h2>
        <p className={`${styles.subhead} reveal`}>{FINAL_CTA.subhead}</p>

        <div className={`${styles.ctas} reveal`}>
          <Button variant="white" size="lg">
            {FINAL_CTA.cta}
          </Button>
          <Button variant="whiteOutline" size="lg">
            {FINAL_CTA.ctaSecondary}
          </Button>
        </div>

        <div className={`${styles.trust} reveal`}>
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className={styles.trustItem}>
              <Icon name={item.icon} size={16} className={styles.trustIcon} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
