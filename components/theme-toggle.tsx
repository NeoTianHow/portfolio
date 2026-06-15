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

const rays = [
  [12, 1, 12, 4],
  [12, 20, 12, 23],
  [1, 12, 4, 12],
  [20, 12, 23, 12],
  [4.2, 4.2, 6.5, 6.5],
  [17.5, 17.5, 19.8, 19.8],
  [4.2, 19.8, 6.5, 17.5],
  [17.5, 6.5, 19.8, 4.2],
] as const;

function ThemeIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-[18px] [transform-box:view-box]"
    >
      {/* Crescent bite: a disc that masks the body. It sits clear of the
          body in light mode (full sun) and slides in to carve a crescent
          in dark mode. */}
      <defs>
        <mask id="theme-moon-mask">
          <rect width="24" height="24" fill="white" />
          <circle
            cx="17"
            cy="8"
            r="7"
            fill="black"
            className="origin-center transition-transform duration-500 ease-[var(--ease-out-expo)] [transform-box:view-box]"
            style={{
              transform: isDark ? "translate(0,0)" : "translate(9px,-9px)",
            }}
          />
        </mask>
      </defs>

      {/* Celestial body */}
      <circle
        cx="12"
        cy="12"
        r="5.5"
        fill="currentColor"
        mask="url(#theme-moon-mask)"
        className="origin-center transition-transform duration-500 ease-[var(--ease-out-expo)] [transform-box:view-box]"
        style={{ transform: isDark ? "scale(1.12)" : "scale(1)" }}
      />

      {/* Sun rays: retract, fade, and rotate away for the moon */}
      <g
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        className="origin-center transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)] [transform-box:view-box]"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-45deg) scale(0.4)" : "rotate(0deg) scale(1)",
        }}
      >
        {rays.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
    </svg>
  );
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

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
      className="group grid size-9 place-items-center border border-[color:var(--line-strong)] bg-[color:var(--panel-soft)] text-[color:var(--muted)] transition-[color,border-color] duration-200 ease-[var(--ease-out-quart)] hover:border-[color:var(--accent)] hover:text-[color:var(--text)] active:scale-[0.94]"
    >
      <ThemeIcon isDark={isDark} />
    </button>
  );
}
