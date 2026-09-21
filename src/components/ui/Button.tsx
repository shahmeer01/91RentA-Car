/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant, ButtonSize } from "../../types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  href,
  target,
  rel,
  id,
  ...props
}) => {
  // Padding rule: Horizontal padding is exactly 2x vertical padding.
  // sm: py-2 px-4 (16px x 8px)
  // md: py-3 px-6 (24px x 12px)
  // lg: py-4 px-8 (32px x 16px)
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "py-2 px-4 text-xs font-semibold tracking-wide",
    md: "py-3 px-6 text-sm font-semibold tracking-wide min-h-[44px]",
    lg: "py-4 px-8 text-base font-semibold tracking-wide min-h-[48px]",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#c29b4e] hover:bg-[#b38d3f] text-[#0b0d11] font-semibold transition-colors duration-200 active:scale-[0.98]",
    gold:
      "bg-[#c29b4e] hover:bg-[#b38d3f] text-[#0b0d11] font-semibold transition-colors duration-200 active:scale-[0.98]",
    secondary:
      "bg-transparent hover:bg-white/[0.05] text-[#f8f9fa] border border-white/[0.14] hover:border-white/[0.24] transition-colors duration-200 active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-[#f8f9fa] border border-white/[0.18] hover:border-[#c29b4e] transition-colors duration-200 active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-[#9ea8b6] hover:text-[#f8f9fa] transition-colors duration-150",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-lg whitespace-nowrap cursor-pointer select-none font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c89b3c]";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
      >
        {iconLeft && <span className="shrink-0 flex items-center">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0 flex items-center">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button id={id} className={combinedClasses} {...props}>
      {iconLeft && <span className="shrink-0 flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0 flex items-center">{iconRight}</span>}
    </button>
  );
};

export default Button;
