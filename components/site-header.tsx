"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { MonogramMark } from "@/components/icons";

const navLinks = [
  { label: "home", href: "/#home" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: `mailto:${profile.email}` },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[color:var(--header)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 ease-[var(--ease-out-quart)] ${
        scrolled
          ? "border-[color:var(--line-strong)] shadow-[0_8px_24px_rgba(21,24,26,0.06)]"
          : "border-[color:var(--line)]"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center bg-[color:var(--text)] text-[color:var(--canvas)] transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:-translate-y-0.5">
            <MonogramMark className="size-6" />
          </span>
          <span className="text-base font-black tracking-[-0.02em] text-[color:var(--text)]">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-[color:var(--muted)] md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.label} href={link.href} className="nav-link transition-colors duration-200 hover:text-[color:var(--accent)]">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="nav-link transition-colors duration-200 hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] text-[color:var(--text)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`mx-auto grid w-full max-w-[1120px] px-5 transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-out-quint)] md:hidden ${
          open
            ? "grid-rows-[1fr] pb-5 opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
        <div className="surface border border-[color:var(--line)] p-3">
          <nav className="flex flex-col gap-1 text-sm font-bold text-[color:var(--muted)]">
            {navLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-[color:var(--chip)] hover:text-[color:var(--text)]">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="px-4 py-3 hover:bg-[color:var(--chip)] hover:text-[color:var(--text)]">
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-3 border-t border-[color:var(--line)] pt-3">
            <ThemeToggle />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
