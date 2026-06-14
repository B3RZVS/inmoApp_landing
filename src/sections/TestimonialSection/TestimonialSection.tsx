import React, { useEffect, useRef } from "react";
import { TESTIMONIAL } from "../../constants/content";
import styles from "./TestimonialSection.module.css";

export const TestimonialSection: React.FC = () => {
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-label="Testimonio">
      <div className={styles.inner}>
        <blockquote className="reveal">
          <span className={styles.quoteIcon} aria-hidden="true">
            "
          </span>
          <p className={styles.quote}>{TESTIMONIAL.quote}</p>
          <footer className={styles.attribution}>
            <div className={styles.avatar} aria-hidden="true">
              <span className="material-symbols-outlined">person</span>
            </div>
            <cite style={{ fontStyle: "normal" }}>
              <span className={styles.author}>{TESTIMONIAL.author}</span>
              <span className={styles.role}>{TESTIMONIAL.role}</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
