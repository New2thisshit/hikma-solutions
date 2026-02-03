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
      className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-[color:var(--ink)] hover-glow"
      style={{
        borderColor: "var(--panel-border)",
        backgroundColor: "var(--panel)",
        color: "var(--muted)",
      }}
      aria-label="Toggle color theme"
    >
      Theme: {mode}
    </button>
  );
}
