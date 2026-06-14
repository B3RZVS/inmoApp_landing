import React from "react";
import { FOOTER_LINKS } from "../../constants/content";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>inmoApp</span>
          <p className={styles.tagline}>
            El sistema de gestión todo-en-uno para corredores inmobiliarios que
            arrancan en Argentina.
          </p>
        </div>

        {/* Producto */}
        <div className={styles.linkGroup}>
          <span className={styles.groupLabel}>Producto</span>
          {FOOTER_LINKS.producto.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Empresa */}
        <div className={styles.linkGroup}>
          <span className={styles.groupLabel}>Empresa</span>
          {FOOTER_LINKS.empresa.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {currentYear} inmoApp. Todos los derechos reservados.
        </span>
        <nav className={styles.legal} aria-label="Legal">
          <a href="/privacidad" className={styles.legalLink}>
            Privacidad
          </a>
          <a href="/terminos" className={styles.legalLink}>
            Términos
          </a>
        </nav>
      </div>
    </footer>
  );
};
