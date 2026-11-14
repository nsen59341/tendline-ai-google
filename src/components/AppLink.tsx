/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MouseEvent, ReactNode } from "react";
import { navigateTo } from "../utils/navigation";

interface AppLinkProps {
  href: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function AppLink({
  href,
  className,
  id,
  ariaLabel,
  target,
  rel,
  onClick,
  children,
}: AppLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (
      isExternal ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      target === "_blank"
    ) {
      return;
    }

    e.preventDefault();
    navigateTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      id={id}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
