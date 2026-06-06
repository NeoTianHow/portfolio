"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();
let currentTheme: Theme = "light";

function readStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "light";
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
  return "light" as Theme;
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
      className="inline-flex h-9 items-center gap-2 border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] px-3 text-xs font-black text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--text)]"
    >
      <span aria-hidden="true" className="font-mono text-[11px]">
        {theme === "dark" ? "LIGHT" : "DARK"}
      </span>
      <span className="block h-3 w-3 bg-[color:var(--accent)]" />
    </button>
  );
}
