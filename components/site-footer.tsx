import type { ReactNode } from "react";
import { profile } from "@/lib/portfolio-data";

function FooterIcon({
  children,
  href,
  label,
}: {
  children: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="grid size-9 place-items-center border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto flex w-full max-w-[1120px] flex-col gap-5 border-t border-[color:var(--line-strong)] px-5 pb-8 pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <p className="font-medium">
        (c) 2026 {profile.name.toLowerCase().replaceAll(" ", "")}.com
      </p>
      <div className="flex items-center gap-3">
        <FooterIcon href={profile.linkedin} label="LinkedIn profile">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
            <path d="M6.94 8.98H3.86V20h3.08V8.98ZM7.2 5.57A1.78 1.78 0 0 0 5.41 3.8a1.78 1.78 0 0 0-1.8 1.77 1.78 1.78 0 0 0 1.8 1.78A1.78 1.78 0 0 0 7.2 5.57ZM20.39 13.66c0-2.96-1.58-4.95-4.14-4.95a3.58 3.58 0 0 0-3.2 1.76V8.98H10.1V20h3.08v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.08v-6.34h.29Z" />
          </svg>
        </FooterIcon>
        <FooterIcon href={`mailto:${profile.email}`} label="Email Neo">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6.5h16v11H4z" />
            <path d="m4.8 7.2 7.2 5.5 7.2-5.5" />
          </svg>
        </FooterIcon>
        <FooterIcon href={profile.resume} label="Download resume">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 3.5h7l3 3V20H7z" />
            <path d="M14 3.5v4h4" />
            <path d="M9.5 14.5h5M9.5 17h3" />
          </svg>
        </FooterIcon>
      </div>
    </footer>
  );
}
