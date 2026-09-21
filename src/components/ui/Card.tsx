/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hoverable?: boolean;
  padded?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  id,
  hoverable = false,
  padded = true,
}) => {
  return (
    <div
      id={id}
      className={`bg-[#12161e] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all duration-300 ${
        hoverable
          ? "hover:border-[rgba(200,155,60,0.3)] hover:bg-[#161b24] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : ""
      } ${padded ? "p-6 sm:p-7" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
