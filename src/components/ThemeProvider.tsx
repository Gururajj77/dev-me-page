"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggle: (event?: MouseEvent<HTMLElement>) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Dark is the default. Only an explicit toggle is remembered, under a new key:
 * the old "theme" key was written on every visit, so it can't tell a real
 * choice from the old light default.
 */
const STORAGE_KEY = "theme-choice";
const DEFAULT_THEME: Theme = "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return DEFAULT_THEME;
}

function saveChoice(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = useCallback((event?: MouseEvent<HTMLElement>) => {
    const next: Theme = theme === "light" ? "dark" : "light";

    const apply = () => {
      setTheme(next);
      document.documentElement.dataset.theme = next;
      saveChoice(next);
    };

    const reduced = prefersReducedMotion();
    const canTransition =
      !reduced &&
      typeof document !== "undefined" &&
      "startViewTransition" in document;

    if (!canTransition) {
      document.documentElement.classList.add("theme-animating");
      apply();
      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-animating");
      }, 320);
      return;
    }

    if (event?.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      document.documentElement.style.setProperty("--theme-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-y", `${y}px`);
    } else {
      document.documentElement.style.setProperty("--theme-x", "50%");
      document.documentElement.style.setProperty("--theme-y", "0%");
    }

    (
      document as Document & {
        startViewTransition: (cb: () => void) => void;
      }
    ).startViewTransition(apply);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
