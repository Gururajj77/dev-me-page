"use client";

import { useState } from "react";
import { FiGithub, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { nav, site } from "@/lib/content";
import { useTheme } from "@/components/ThemeProvider";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-bg/95 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between gap-3 md:h-16">
        <a
          href="#top"
          className="font-mono text-xs font-bold tracking-[0.12em] uppercase md:text-sm"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FiGithub className="size-4" />
          </a>
          <button
            type="button"
            className="icon-btn md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <FiX className="size-4" /> : <FiMenu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t-2 border-border md:hidden">
          <div className="shell flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
