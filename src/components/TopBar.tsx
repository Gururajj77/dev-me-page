"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { site } from "@/lib/content";
import { useTheme } from "@/components/ThemeProvider";

export function TopBar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-4">
      <p className="font-mono text-[0.8rem] font-bold tracking-[0.16em] uppercase">
        {site.brand}
      </p>
      <button
        type="button"
        className="icon-btn"
        onClick={toggle}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <FiMoon className="size-4" />
        ) : (
          <FiSun className="size-4" />
        )}
      </button>
    </header>
  );
}
