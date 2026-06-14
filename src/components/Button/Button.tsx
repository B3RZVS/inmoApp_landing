import React from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "ghost" | "white" | "whiteOutline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  href,
  children,
  className = "",
  ...props
}) => {
  const classes = [
    styles.btn,
    styles[variant],
    size !== "md" ? styles[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (Tag === "a") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
