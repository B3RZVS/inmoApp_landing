import React, { useEffect, useRef } from "react";
import { PRICING } from "../../constants/content";

import styles from "./PricingSection.module.css";
import { SectionLabel } from "../../components/SectionLabel/SectionLabel";
import { Icon } from "../../components/Icon/Icon";
import { Button } from "../../components/Button/Button";

export const PricingSection: React.FC = () => {
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
      id="precios"
      ref={ref}
      className={styles.section}
      aria-labelledby="pricing-heading"
    >
      <div className={styles.inner}>
        <header className={`${styles.header} reveal`}>
          <SectionLabel>{PRICING.eyebrow}</SectionLabel>
          <h2 id="pricing-heading" className={styles.headline}>
            {PRICING.headline}
          </h2>
          <p className={styles.subhead}>{PRICING.subhead}</p>
        </header>

        <div className={`${styles.grid} stagger`}>
          {PRICING.plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ""}`}
            >
              {/* {plan.badge && <span className={styles.badge}>{plan.badge}</span>} */}

              <div>
                <p className={styles.planName}>{plan.name}</p>
                <p className={styles.price}>{plan.price}</p>
                <p className={styles.period}>{plan.period}</p>
              </div>

              <div className={styles.divider} />

              <ul
                className={styles.featureList}
                aria-label={`Incluye en plan ${plan.name}`}
              >
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Icon
                      name="check_circle"
                      size={18}
                      className={styles.featureCheck}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "primary" : "outline"}
                style={{ width: "100%" }}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
