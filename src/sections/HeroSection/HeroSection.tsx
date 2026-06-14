import React, { useEffect, useRef } from "react";
import { HERO } from "../../constants/content";
import styles from "./HeroSection.module.css";
import { Button } from "../../components/Button/Button";

export const HeroSection: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrolled = window.pageYOffset;
      imgRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} aria-label="Inicio">
      {/* Background */}
      <div className={styles.bg} aria-hidden="true">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className={styles.bgImg}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.eyebrow}>{HERO.eyebrow}</span>

        <h1 className={styles.headline}>{HERO.headline}</h1>

        <p className={styles.subhead}>{HERO.subhead}</p>

        <div className={styles.ctas}>
          <Button variant="white" size="lg">
            {HERO.cta}
          </Button>
          <Button variant="whiteOutline" size="lg">
            {HERO.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};
