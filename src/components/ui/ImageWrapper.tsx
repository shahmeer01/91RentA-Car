/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

interface ImageWrapperProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "21/9" | "3/2" | "1/1";
  className?: string;
  overlay?: boolean;
  priority?: boolean;
  id?: string;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  overlay = false,
  id,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "21/9": "aspect-[21/9]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
  }[aspectRatio];

  return (
    <div
      id={id}
      className={`relative overflow-hidden bg-[#161a22] ${aspectClasses} ${className} group`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#12151c] via-[#1a1f2a] to-[#12151c] animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#151922] text-[#647082] p-4 text-center">
          <span className="text-xs uppercase tracking-wider font-semibold">Image Placeholder</span>
          <span className="text-xs text-[#9ea8b6] mt-1 line-clamp-1">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default ImageWrapper;
