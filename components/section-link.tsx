"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `/#${string}`;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SectionLink({
  children,
  href,
  onClick,
  ...props
}: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) return;

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);

    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
