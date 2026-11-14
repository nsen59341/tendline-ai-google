/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";

const NAV_EVENT = "tendline:navigate";

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function scrollToHashTarget(hash: string) {
  const targetId = hash.replace(/^#/, "");
  if (!targetId) return;

  const tryScroll = (attemptsLeft: number) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (attemptsLeft > 0) {
      window.setTimeout(() => tryScroll(attemptsLeft - 1), 60);
    }
  };

  window.requestAnimationFrame(() => tryScroll(8));
}

export function navigateTo(to: string) {
  if (typeof window === "undefined") return;

  const url = new URL(to, window.location.origin);
  const targetPath = normalizePathname(url.pathname);
  const currentPath = normalizePathname(window.location.pathname);

  if (targetPath === currentPath && url.hash) {
    window.history.pushState({}, "", `${targetPath}${url.hash}`);
    scrollToHashTarget(url.hash);
    return;
  }

  window.history.pushState({}, "", `${targetPath}${url.search}${url.hash}`);
  window.dispatchEvent(new Event(NAV_EVENT));

  if (url.hash) {
    scrollToHashTarget(url.hash);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function usePathname(): string {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== "undefined" ? normalizePathname(window.location.pathname) : "/"
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(normalizePathname(window.location.pathname));
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener(NAV_EVENT, handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener(NAV_EVENT, handleRouteChange);
    };
  }, []);

  return pathname;
}
