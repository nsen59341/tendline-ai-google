/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BRAND_LOGOS } from "../data/articlesMeta";

interface BrandLogoProps {
  variant: "navbar" | "card";
  className?: string;
}

export default function BrandLogo({ variant, className = "" }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (variant === "navbar") {
    if (hasError) {
      return (
        <span className={`font-sans font-black text-xl tracking-tighter uppercase text-[#1A1A1A] whitespace-nowrap ${className}`}>
          TendLine
        </span>
      );
    }

    return (
      <div
        className={`relative h-11 sm:h-12 w-[158px] sm:w-[180px] overflow-hidden shrink-0 ${className}`}
      >
        <img
          src={BRAND_LOGOS.light}
          alt="TendLine AI Growth Systems"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-center scale-[1.18] mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.22]"
        />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`border border-[#99775C]/40 bg-[#EAE7DD] px-5 py-4 ${className}`}>
        <span className="font-sans font-black text-lg uppercase tracking-widest text-[#1A1A1A] block leading-none">
          TendLine
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#99775C] font-bold mt-1 block">
          AI Growth Systems
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden border border-[#99775C]/35 bg-[#EAE7DD] ${className}`}
    >
      <img
        src={BRAND_LOGOS.textured}
        alt="TendLine AI Growth Systems — Home Services Dispatch Autopilot"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center scale-[1.24]"
      />
    </div>
  );
}
