"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "hikma-theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initial = stored || "system";
    setMode(initial);
    const resolved = initial === "system" ? getSystemTheme() : initial;
    document.documentElement.setAttribute("data-theme", resolved);

    const handleChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY) === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          event.matches ? "dark" : "light"
        );
      }
    };

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const nextMode = () => {
    const order: ThemeMode[] = ["system", "light", "dark"];
    const currentIndex = order.indexOf(mode);
    const next = order[(currentIndex + 1) % order.length];
    setMode(next);
    localStorage.setItem(STORAGE_KEY, next);
    const resolved = next === "system" ? getSystemTheme() : next;
    document.documentElement.setAttribute("data-theme", resolved);
  };

  return (
    <button
      type="button"
      onClick={nextMode}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:text-[color:var(--ink)] hover-glow"
      style={{
        borderColor: "var(--panel-border)",
        backgroundColor: "var(--panel)",
        color: "var(--muted)",
      }}
      aria-label={`Theme mode: ${mode}. Click to switch mode.`}
      title={`Theme: ${mode}`}
    >
      <span className="sr-only">Theme mode: {mode}</span>
      {mode === "light" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ) : null}
      {mode === "dark" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 1 0 20 14.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {mode === "system" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 20h8M10 16v4M14 16v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ) : null}
    </button>
  );
}
