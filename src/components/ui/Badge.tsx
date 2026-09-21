/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BadgeProps } from "../../types";

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  id,
}) => {
  const variantStyles = {
    default: "bg-[#191e29] text-[#9ea8b6] border border-[rgba(255,255,255,0.08)]",
    gold: "bg-[rgba(200,155,60,0.12)] text-[#c89b3c] border border-[rgba(200,155,60,0.28)]",
    verified: "bg-[#141a24] text-[#f8f9fa] border border-[rgba(200,155,60,0.4)] shadow-[0_0_12px_rgba(200,155,60,0.1)]",
    outline: "bg-transparent text-[#9ea8b6] border border-[rgba(255,255,255,0.14)]",
  }[variant];

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide whitespace-nowrap ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
