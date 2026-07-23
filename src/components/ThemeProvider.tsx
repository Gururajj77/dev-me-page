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

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme, ready]);

  const toggle = useCallback((event?: MouseEvent<HTMLElement>) => {
    const next: Theme = theme === "light" ? "dark" : "light";

    const apply = () => {
      setTheme(next);
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("theme", next);
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
