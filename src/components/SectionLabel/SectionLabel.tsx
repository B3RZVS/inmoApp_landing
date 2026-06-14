import React from "react";
import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  light = false,
}) => (
  <span className={`${styles.label} ${light ? styles.light : ""}`}>
    {children}
  </span>
);
