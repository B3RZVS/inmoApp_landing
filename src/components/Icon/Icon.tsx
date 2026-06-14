import React from "react";

interface IconProps {
  name: string;
  size?: number;
  fill?: boolean;
  className?: string;
  "aria-hidden"?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  fill = false,
  className = "",
  "aria-hidden": ariaHidden = true,
}) => {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' ${size}`,
        userSelect: "none",
        lineHeight: 1,
      }}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
};
