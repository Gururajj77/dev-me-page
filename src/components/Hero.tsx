"use client";

import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { hero, heroStat, shipping } from "@/lib/content";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  SplitText,
  useGSAP,
} from "@/lib/gsap";

registerGsap();

function currentPageUpdated() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const pageUpdated = currentPageUpdated();

  useGSAP(
    () => {
      const root = rootRef.current;
      const name = nameRef.current;
      if (!root || !name) return;

      const tiles = root.querySelectorAll<HTMLElement>("[data-hero-tile]");
      const meta = root.querySelectorAll<HTMLElement>("[data-hero-meta]");

      if (prefersReducedMotion()) {
        gsap.set([name, ...tiles, ...meta], { clearProps: "all", autoAlpha: 1 });
        return;
      }

      const split = SplitText.create(name, {
        type: "chars",
        charsClass: "name-char",
        aria: "auto",
      });

      gsap.set(split.chars, { autoAlpha: 0, yPercent: 110 });
      gsap.set(tiles, { autoAlpha: 0, y: 22, scale: 0.96 });
      gsap.set(meta, { autoAlpha: 0, y: -6 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(meta, { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.05 });
      tl.to(
        split.chars,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
          stagger: { each: 0.025, from: "start" },
        },
        0.08,
      );
      tl.to(
        tiles,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.4)",
          clearProps: "transform",
        },
        0.2,
      );

      return () => split.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="top"
      className="grid gap-4 md:grid-cols-[2fr_1fr] md:items-stretch"
    >
      <div
        data-hero-tile
        className="tile tile-surface tile-lift flex flex-col gap-6 p-7 sm:p-9 md:p-10"
      >
        <p
          data-hero-meta
          className="flex items-center gap-2.5 font-mono text-[0.7rem] font-bold tracking-[0.16em] text-green uppercase"
        >
          <span className="status-dot" aria-hidden />
          {hero.eyebrow}
        </p>

        <h1
          ref={nameRef}
          className="display hard-shadow-pink text-[clamp(2.6rem,7.5vw,5.5rem)] text-fg"
        >
          Gururaj J
        </h1>

        <p className="max-w-[26ch] text-[1.35rem] leading-tight font-semibold tracking-tight text-balance md:text-[1.65rem]">
          {hero.tagline}
        </p>

        <p className="max-w-[64ch] text-[0.95rem] leading-relaxed text-muted text-pretty md:text-base">
          {hero.bio}
        </p>

        <div className="flex items-start gap-3.5 border-t border-line pt-6">
          <span
            className="live-dot mt-1.5 size-2.5 shrink-0 rounded-full bg-green"
            aria-hidden
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-[1.05rem] leading-snug font-semibold">
              {hero.availability}
            </p>
            <p className="font-mono text-[0.7rem] leading-relaxed text-muted">
              {hero.availabilityMeta}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3.5">
          <a href="#contact" className="btn-brutal btn-green">
            {hero.ctaPrimary}
            <FiArrowRight className="size-4" aria-hidden />
          </a>
          <a href="#work" className="btn-brutal btn-surface">
            {hero.ctaSecondary}
            <FiArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          data-hero-tile
          className="tile tile-surface tile-lift flex flex-1 flex-col gap-6 p-7"
        >
          <div className="flex flex-col gap-2">
            <p className="display hard-shadow-ink text-[clamp(2.6rem,6vw,4rem)] leading-none text-pink">
              {heroStat.value}
            </p>
            <p className="text-[1.05rem] leading-snug font-semibold tracking-tight">
              {heroStat.label}
            </p>
            <p className="font-mono text-[0.66rem] tracking-wide text-muted uppercase">
              {heroStat.meta}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-line pt-5">
            {heroStat.secondary.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="font-mono text-[0.85rem] font-bold text-fg">
                  {stat.value}
                </span>
                <span className="text-right font-mono text-[0.64rem] tracking-wide text-muted uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-hero-tile
          className="flex flex-col gap-3 border border-line p-5"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
            Still shipping
          </p>
          <div className="flex flex-col gap-1.5 font-mono text-[0.72rem] leading-relaxed">
            <div>
              {shipping.lastShipped}{" "}
              <span className="text-muted">— {shipping.lastShippedDetail}</span>
            </div>
            <div>
              Page updated {pageUpdated} ·{" "}
              <a
                href="#changelog"
                className="underline decoration-pink underline-offset-3"
              >
                changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
