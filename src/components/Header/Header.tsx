import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/content";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={styles.header}
      style={{ boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none" }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="inmoApp — inicio">
          inmoApp
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className={styles.actions}>
          <button
            className={styles.loginLink}
            aria-label="Ingresar a tu cuenta"
          >
            Ingresar
          </button>
          <Button variant="primary" size="sm">
            Empezar gratis
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.isOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Navegación móvil"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="primary"
          style={{ marginTop: "var(--space-md)", width: "100%" }}
        >
          Empezar gratis
        </Button>
      </nav>
    </header>
  );
};
