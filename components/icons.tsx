export function MonogramMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={className}
    >
      {/* N (left + shared central stem) and the N diagonal — inherit currentColor */}
      <rect x="22" y="32" width="15" height="42" fill="currentColor" />
      <rect x="53" y="32" width="15" height="42" fill="currentColor" />
      <polygon points="22,32 37,32 68,74 53,74" fill="currentColor" />
      {/* T crossbar — brand accent */}
      <rect x="44" y="19" width="33" height="14" fill="var(--accent)" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.8 7.2 7.2 5.5 7.2-5.5" />
    </svg>
  );
}
