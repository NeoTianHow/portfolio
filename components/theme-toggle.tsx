"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();
let currentTheme: Theme = "dark";

function readStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function notifyThemeListeners() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentTheme;
}

function getServerSnapshot() {
  return "dark" as Theme;
}

function setTheme(theme: Theme) {
  currentTheme = theme;
  applyTheme(theme);
  window.localStorage.setItem("theme", theme);
  notifyThemeListeners();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const storedTheme = readStoredTheme();
    currentTheme = storedTheme;
    applyTheme(storedTheme);
    notifyThemeListeners();
  }, []);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={toggleTheme}
      className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-soft)] px-2.5 py-2 text-[color:var(--muted)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:border-[color:var(--line-strong)] hover:text-[color:var(--text)]"
    >
      <span className="relative grid size-4 place-items-center overflow-hidden">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute size-4 transition duration-300 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3v2.2M12 18.8V21M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M3 12h2.2M18.8 12H21M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" />
          <circle cx="12" cy="12" r="3.7" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute size-4 transition duration-300 ${
            theme === "light" ? "rotate-0 opacity-100" : "rotate-45 opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M20.5 14.5A8 8 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />
        </svg>
      </span>
      <span className="relative h-4 w-8 rounded-full bg-[color:var(--chip)] p-0.5">
        <span
          className={`block size-3 rounded-full bg-[color:var(--accent)] shadow-[0_0_16px_rgba(79,107,255,0.6)] transition-transform ${
            theme === "light" ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
