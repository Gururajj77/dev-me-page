"use client";

import { useRef } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import {
  experience,
  hero,
  projects,
  site,
  skillGroups,
} from "@/lib/content";
import { useTheme } from "@/components/ThemeProvider";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  SplitText,
  useGSAP,
} from "@/lib/gsap";

registerGsap();

const accentText = {
  green: "text-green",
  blue: "text-blue",
  yellow: "text-yellow",
  pink: "text-pink",
} as const;

const accentBg = {
  green: "bg-green",
  blue: "bg-blue",
  yellow: "bg-yellow",
  pink: "bg-pink",
} as const;

const lift = {
  green: "tile-lift-green",
  blue: "tile-lift-blue",
  yellow: "tile-lift-yellow",
  pink: "tile-lift-pink",
} as const;

const featuredSkills = skillGroups.flatMap((g) => g.items).slice(0, 14);

export function BentoHome() {
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const { theme, toggle } = useTheme();

  useGSAP(
    () => {
      const root = rootRef.current;
      const name = nameRef.current;
      if (!root || !name) return;

      const tiles = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-bento]"),
      );
      const meta = root.querySelectorAll<HTMLElement>("[data-meta]");
      const chips = root.querySelectorAll<HTMLElement>("[data-chip]");

      if (prefersReducedMotion()) {
        gsap.set([name, ...tiles, ...meta, ...chips], {
          clearProps: "all",
          autoAlpha: 1,
        });
        return;
      }

      const split = SplitText.create(name, {
        type: "chars",
        charsClass: "name-char",
        aria: "auto",
      });

      gsap.set(split.chars, { autoAlpha: 0, yPercent: 110 });
      gsap.set(tiles, { autoAlpha: 0, y: 28, scale: 0.94 });
      gsap.set(meta, { autoAlpha: 0, y: -8 });
      gsap.set(chips, { autoAlpha: 0, y: 8 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(meta, {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.05,
      });

      tl.to(
        split.chars,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
          stagger: { each: 0.028, from: "start" },
          ease: "power3.out",
        },
        0.08,
      );

      // Bento assembles left → right, punchy mechanical pop
      tl.to(
        tiles,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.38,
          stagger: 0.055,
          ease: "back.out(1.4)",
          clearProps: "transform",
        },
        0.22,
      );

      tl.to(
        chips,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.28,
          stagger: 0.018,
          ease: "power2.out",
          clearProps: "transform",
        },
        "-=0.2",
      );

      return () => split.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="top" className="shell py-3 md:py-4">
      {/* Slim chrome — not a nav, just brand + theme */}
      <div className="mb-3 flex items-center justify-between gap-3 md:mb-4">
        <p
          data-meta
          className="font-mono text-xs font-bold tracking-[0.14em] text-fg uppercase"
        >
          {site.brand}
        </p>
        <button
          data-meta
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

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-12 md:auto-rows-min">
        <div
          data-bento
          className="tile tile-surface tile-lift col-span-2 flex flex-col gap-3 overflow-hidden p-4 sm:p-5 md:col-span-6 md:row-span-2 md:gap-4 md:p-6 lg:col-span-6"
        >
          <p className="flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-[0.08em] text-green uppercase">
            <span className="status-dot" aria-hidden />
            {hero.role}
          </p>
          <h1
            ref={nameRef}
            className="display hard-shadow-pink overflow-hidden whitespace-nowrap text-[clamp(2.2rem,5.5vw,5.5rem)] text-fg"
          >
            Gururaj J
          </h1>
          <p className="max-w-xl text-[0.82rem] leading-snug text-muted sm:text-[0.9rem] sm:leading-relaxed">
            {hero.bio}
          </p>
          <p className="mt-auto pt-2 font-mono text-[0.65rem] font-bold tracking-wide text-muted uppercase">
            {site.status}
          </p>
        </div>

        <div
          data-bento
          className="tile tile-lift tile-lift-white flex flex-col justify-between bg-yellow p-3 text-[var(--on-accent)] sm:p-4 md:col-span-3 lg:col-span-3"
        >
          <p className="display text-[clamp(2.4rem,6vw,3.75rem)] leading-none">
            {site.years}
          </p>
          <p className="mt-2 font-mono text-[0.6rem] font-bold tracking-wide uppercase sm:text-[0.65rem]">
            {site.yearsLabel}
          </p>
        </div>

        <div
          data-bento
          className="tile tile-surface tile-lift tile-lift-white flex flex-col justify-between p-3 sm:p-4 md:col-span-3 lg:col-span-3"
        >
          <FiMapPin className="size-4 text-fg" aria-hidden />
          <div>
            <p className="font-mono text-[0.7rem] font-bold tracking-wide uppercase sm:text-xs">
              {site.location}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] text-muted">
              {site.timezone}
            </p>
          </div>
        </div>

        <a
          data-bento
          href={site.links.email}
          className="tile tile-lift tile-lift-white flex items-center justify-between gap-2 bg-green p-3 text-[var(--on-accent)] sm:p-4 md:col-span-3 lg:col-span-3"
        >
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase">
              <FiMail className="size-3.5 shrink-0" aria-hidden />
              Email
            </span>
            <span className="truncate font-mono text-[0.58rem] opacity-80">
              {site.email}
            </span>
          </span>
          <FiArrowUpRight className="size-3.5 shrink-0" aria-hidden />
        </a>

        <a
          data-bento
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tile tile-surface tile-lift tile-lift-white flex items-center justify-between gap-2 p-3 sm:p-4 md:col-span-3 lg:col-span-3"
        >
          <span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase">
            <FiGithub className="size-4" aria-hidden />
            GitHub
          </span>
          <FiArrowUpRight className="size-3.5" aria-hidden />
        </a>

        {projects.map((project) => (
          <a
            key={project.title}
            data-bento
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`tile tile-surface tile-lift col-span-2 flex flex-col p-4 sm:p-5 md:col-span-6 ${lift[project.accent]}`}
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h2
                  className={`display text-[clamp(1.25rem,3vw,1.75rem)] ${accentText[project.accent]}`}
                >
                  {project.title}
                </h2>
                <p className="mt-1 font-mono text-[0.6rem] text-muted uppercase">
                  {project.role} · {project.period}
                </p>
              </div>
              <span
                className={`grid size-8 shrink-0 place-items-center ${accentBg[project.accent]} text-[var(--on-accent)]`}
                aria-hidden
              >
                <span className="font-mono text-[0.7rem] font-bold">
                  {project.mark}
                </span>
              </span>
            </div>
            <p className="line-clamp-3 flex-1 text-[0.78rem] leading-snug text-muted sm:text-[0.85rem]">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <li
                  key={tag}
                  data-chip
                  className="chip px-1.5 py-0.5 text-[0.58rem]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}

        <div
          data-bento
          className="tile tile-surface tile-lift tile-lift-white col-span-2 p-4 sm:p-5 md:col-span-5 lg:col-span-5"
        >
          <p className="section-label mb-3 text-pink">Experience</p>
          <ul>
            {experience.map((item, i) => (
              <li
                key={`${item.company}-${item.period}`}
                className={`flex gap-3 py-2.5 ${
                  i > 0 ? "border-t-2 border-border" : "pt-0"
                }`}
              >
                <span
                  className={`mt-1 w-1.5 shrink-0 self-stretch ${accentBg[item.accent]}`}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="display text-[0.95rem] leading-none sm:text-base">
                    {item.role}
                  </p>
                  <p className="mt-1 font-mono text-[0.6rem] text-muted uppercase">
                    {item.company} · {item.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-bento
          className="tile tile-surface tile-lift tile-lift-white col-span-2 p-4 sm:p-5 md:col-span-7 lg:col-span-7"
        >
          <p className="section-label mb-3 text-yellow">Toolkit</p>
          <ul className="flex flex-wrap gap-1.5">
            {featuredSkills.map((skill) => (
              <li key={skill} data-chip className="chip text-fg">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <a
          data-bento
          href={site.links.resume}
          className="tile tile-lift tile-lift-white flex items-center justify-between gap-2 bg-yellow p-3 text-[var(--on-accent)] sm:p-4 md:col-span-3"
        >
          <span className="display text-sm sm:text-base">Resume</span>
          <FiArrowUpRight className="size-4" aria-hidden />
        </a>

        <a
          data-bento
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tile tile-lift tile-lift-white flex items-center justify-between gap-2 bg-blue p-3 text-[var(--on-accent)] sm:p-4 md:col-span-3"
        >
          <span className="display flex items-center gap-2 text-sm sm:text-base">
            <FiLinkedin className="size-4" aria-hidden />
            LinkedIn
          </span>
          <FiArrowUpRight className="size-4" aria-hidden />
        </a>

        <a
          data-bento
          href={site.links.email}
          className="tile tile-lift tile-lift-white col-span-2 flex items-center justify-between gap-3 bg-green p-3 text-[var(--on-accent)] sm:p-4 md:col-span-6"
        >
          <div>
            <p className="display text-sm leading-none sm:text-base">
              Let&apos;s talk
            </p>
            <p className="mt-1 font-mono text-[0.6rem] uppercase opacity-80">
              Open to platform roles
            </p>
          </div>
          <FiArrowUpRight className="size-5 shrink-0" aria-hidden />
        </a>
      </div>
    </section>
  );
}
