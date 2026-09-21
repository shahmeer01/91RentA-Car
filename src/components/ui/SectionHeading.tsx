/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SectionHeadingProps } from "../../types";

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = "left",
  className = "",
  id,
}) => {
  const isCentered = align === "center";

  return (
    <div
      id={id}
      className={`space-y-3 ${isCentered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}
    >
      {kicker && (
        <div className="flex items-center gap-2">
          {isCentered && <span className="w-6 h-px bg-[#c89b3c]/50 inline-block" />}
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#c89b3c]">
            {kicker}
          </span>
          <span className="w-6 h-px bg-[#c89b3c]/50 inline-block" />
        </div>
      )}

      <h2 className="text-editorial-h2 text-2xl sm:text-3xl lg:text-4xl text-[#f8f9fa] tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="text-body-default text-sm sm:text-base text-[#9ea8b6] max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
