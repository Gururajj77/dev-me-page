"use client";

import { FiArrowRight, FiFileText, FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import { hero, site } from "@/lib/content";
import { useTheme } from "@/components/ThemeProvider";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Profile() {
  const { theme, toggle } = useTheme();

  return (
    <header className="tile-in flex flex-col gap-4 xl:sticky xl:top-16">
      <div className="relative w-fit pb-3">
        <div
          aria-hidden
          className="display grid size-[120px] place-items-center rounded-full text-[2.75rem] text-white"
          style={{
            background:
              "radial-gradient(120% 120% at 25% 15%, #ffb36b 0%, #ff6a3d 45%, #d9366b 100%)",
          }}
        >
          {initials}
        </div>
        <span
          aria-hidden
          className="absolute right-[-32px] bottom-0 rotate-[6deg] rounded-full border border-line bg-surface px-3 py-2 text-[0.8rem] leading-none font-semibold shadow-[var(--tile-shadow)]"
        >
          hi there 👋
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <p className="meta-label">{hero.eyebrow}</p>
        <h1 className="display text-[2.75rem] text-fg">{site.name}</h1>
      </div>

      <p className="text-[1.06rem] leading-[1.55] text-pretty text-muted">{hero.tagline}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Status">
        <li className="chip-soft">
          <FiMapPin className="size-[14px]" aria-hidden />
          {site.location}
        </li>
        <li className="chip-soft">
          <span className="status-dot live-dot" aria-hidden />
          <span className="text-fg">Open to roles</span>
        </li>
      </ul>

      <div className="flex items-center gap-2 pt-2">
        <a href="#contact" className="btn btn-ink">
          {hero.ctaPrimary}
          <FiArrowRight className="size-4" aria-hidden />
        </a>
        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <FiFileText className="size-4" aria-hidden />
          Résumé
        </a>
        <button
          type="button"
          className="icon-btn"
          onClick={toggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <FiMoon className="size-[18px]" aria-hidden />
          ) : (
            <FiSun className="size-[18px]" aria-hidden />
          )}
        </button>
      </div>
    </header>
  );
}
