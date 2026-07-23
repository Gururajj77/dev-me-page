"use client";

import { useRef } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { hero, site } from "@/lib/content";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  SplitText,
  useGSAP,
} from "@/lib/gsap";

registerGsap();

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const name = nameRef.current;
      if (!root || !name) return;

      if (prefersReducedMotion()) return;

      const split = SplitText.create(name, {
        type: "chars",
        charsClass: "name-char",
        aria: "auto",
      });

      gsap.fromTo(
        split.chars,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.035,
          ease: "power2.out",
          delay: 0.05,
        },
      );

      const tiles = root.querySelectorAll<HTMLElement>("[data-hero-tile]");
      gsap.fromTo(
        tiles,
        { autoAlpha: 0, y: 18, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.15,
          clearProps: "transform",
        },
      );

      return () => split.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="top" className="shell pt-8 pb-6 md:pt-12 md:pb-8">
      <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[auto_auto] md:gap-3">
        <div
          data-hero-tile
          className="tile tile-surface tile-lift col-span-full p-5 md:col-span-6 md:row-span-2 md:p-7 lg:col-span-7"
        >
          <p className="mb-4 flex items-center gap-2 font-mono text-[0.7rem] font-bold tracking-[0.08em] text-green uppercase">
            <span className="status-dot" aria-hidden />
            {hero.role}
          </p>
          <h1
            ref={nameRef}
            className="display hard-shadow-pink text-[clamp(3.2rem,12vw,6.5rem)] text-fg"
          >
            Gururaj J
          </h1>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base">
            {hero.bio}
          </p>
        </div>

        <div
          data-hero-tile
          className="tile tile-surface tile-lift tile-lift-white flex flex-col justify-between p-4 md:col-span-3 lg:col-span-2"
        >
          <FiMapPin className="size-5 text-fg" aria-hidden />
          <div className="mt-8">
            <p className="font-mono text-xs font-bold tracking-wide uppercase">
              {site.location}
            </p>
            <p className="mt-1 font-mono text-[0.65rem] text-muted">
              {site.timezone}
            </p>
          </div>
        </div>

        <div
          data-hero-tile
          className="tile tile-lift tile-lift-white flex flex-col justify-between bg-yellow p-4 text-[var(--on-accent)] md:col-span-3 lg:col-span-3"
        >
          <p className="display text-[clamp(3rem,8vw,4.5rem)] leading-none">
            {site.years}
          </p>
          <p className="mt-4 font-mono text-[0.65rem] font-bold tracking-wide uppercase">
            {site.yearsLabel}
          </p>
        </div>

        <a
          data-hero-tile
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tile tile-surface tile-lift tile-lift-white flex items-center justify-between gap-3 p-4 md:col-span-3 lg:col-span-2"
        >
          <span className="flex items-center gap-3 font-mono text-xs font-bold tracking-wide uppercase">
            <FiGithub className="size-5" aria-hidden />
            GitHub
          </span>
          <FiArrowUpRight className="size-4" aria-hidden />
        </a>

        <a
          data-hero-tile
          href={site.links.email}
          className="tile tile-lift tile-lift-white flex items-center justify-between gap-3 bg-green p-4 text-[var(--on-accent)] md:col-span-3 lg:col-span-3"
        >
          <span className="flex min-w-0 flex-col gap-1">
            <span className="flex items-center gap-2 font-mono text-xs font-bold tracking-wide uppercase">
              <FiMail className="size-4" aria-hidden />
              Email me
            </span>
            <span className="truncate font-mono text-[0.65rem] opacity-80">
              {site.email}
            </span>
          </span>
          <FiArrowUpRight className="size-4 shrink-0" aria-hidden />
        </a>
      </div>
    </section>
  );
}
