"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "home", href: "/#home" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: `mailto:${profile.email}` },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--header)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-[1014px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-lg bg-[linear-gradient(135deg,#4f6bff,#3351d8)] text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(79,107,255,0.35)] transition group-hover:-translate-y-0.5">
            {profile.initials}
          </span>
          <span className="text-base font-bold tracking-[-0.02em] text-[color:var(--text)]">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-[color:var(--muted)] md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-[color:var(--text)]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-[color:var(--text)]"
              >
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
          className="inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--panel-soft)] text-[color:var(--text)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`mx-auto w-full max-w-[1014px] px-5 transition-all duration-300 md:hidden ${
          open
            ? "max-h-72 pb-5 opacity-100"
            : "max-h-0 overflow-hidden pb-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
          <nav className="flex flex-col gap-1 text-sm font-semibold text-[color:var(--muted)]">
            {navLinks.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 transition hover:bg-[color:var(--chip)] hover:text-[color:var(--text)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 transition hover:bg-[color:var(--chip)] hover:text-[color:var(--text)]"
                >
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
    </header>
  );
}
