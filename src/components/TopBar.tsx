"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { site } from "@/lib/content";
import { useMode } from "@/components/ModeProvider";
import { useTheme } from "@/components/ThemeProvider";

export function TopBar() {
  const { mode, setMode } = useMode();
  const { theme, toggle } = useTheme();

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 pb-1 md:mb-6">
      <p className="font-mono text-[0.8rem] font-bold tracking-[0.16em] uppercase">
        {site.brand}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <span className="pr-1 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
          Reading as
        </span>
        <div role="tablist" aria-label="Choose how the page is arranged" className="seg-group">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "recruiter"}
            data-active={mode === "recruiter"}
            className="seg-btn"
            onClick={() => setMode("recruiter")}
          >
            Recruiter
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "engineer"}
            data-active={mode === "engineer"}
            className="seg-btn"
            onClick={() => setMode("engineer")}
          >
            Engineer
          </button>
        </div>
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
      </div>
    </div>
  );
}
