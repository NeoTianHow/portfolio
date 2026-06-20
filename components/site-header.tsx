"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRightIcon, MonogramMark } from "@/components/icons";

const navLinks = [
  { label: "home", href: "/#home" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: `mailto:${profile.email}` },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = "site-mobile-menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
          className="group flex min-h-11 items-center gap-3"
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
              <a key={link.label} href={link.href} className="nav-link inline-flex min-h-11 items-center px-1.5 transition-colors duration-200 hover:text-[color:var(--accent)]">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="nav-link inline-flex min-h-11 items-center px-1.5 transition-colors duration-200 hover:text-[color:var(--accent)]">
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
          className="group relative inline-flex size-11 items-center justify-center border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] text-[color:var(--text)] transition-[border-color,background-color,transform] duration-200 ease-[var(--ease-out-quart)] hover:border-[color:var(--accent)] active:scale-[0.96] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ease-[var(--ease-out-quint)] ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 bg-current transition-[opacity,transform] duration-200 ease-[var(--ease-out-quart)] ${
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ease-[var(--ease-out-quint)] ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        id={menuId}
        aria-hidden={!open}
        className={`mx-auto grid w-full max-w-[1120px] px-5 transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-out-quint)] md:hidden ${
          open
            ? "grid-rows-[1fr] pb-5 opacity-100"
            : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
        <div className="border-t border-[color:var(--line)] py-2">
          <nav className="grid text-base font-black tracking-[-0.01em] text-[color:var(--soft-text)]">
            {navLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="group flex min-h-12 items-center justify-between border-b border-[color:var(--line)] px-1 transition-colors duration-200 hover:text-[color:var(--text)] focus-visible:text-[color:var(--text)]">
                  <span>{link.label}</span>
                  <ArrowRightIcon className="size-4 text-[color:var(--accent)] opacity-75 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
                </a>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="group flex min-h-12 items-center justify-between border-b border-[color:var(--line)] px-1 transition-colors duration-200 hover:text-[color:var(--text)] focus-visible:text-[color:var(--text)]">
                  <span>{link.label}</span>
                  <ArrowRightIcon className="size-4 text-[color:var(--accent)] opacity-75 transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:translate-x-1" />
                </Link>
              )
            )}
          </nav>
          <div className="flex min-h-12 items-center justify-between px-1 pt-2 text-sm font-bold text-[color:var(--muted)]">
            <span>Theme</span>
            <ThemeToggle />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
