"use client";

import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { hero, heroOwnership, heroStat, shipping } from "@/lib/content";
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

/** Border classes for the 2 × 2 metric grid on small screens, single column from lg. */
function metricBorders(i: number, count: number) {
  const classes = ["border-line"];
  if (i % 2 === 0) classes.push("border-r", "lg:border-r-0");
  if (i < count - 2) classes.push("border-b");
  if (i < count - 1) classes.push("lg:border-b");
  else classes.push("lg:border-b-0");
  return classes.join(" ");
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
      gsap.set(tiles, { autoAlpha: 0, y: 12 });
      gsap.set(meta, { autoAlpha: 0, y: -4 });

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
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        },
        0.2,
      );

      return () => split.revert();
    },
    { scope: rootRef },
  );

  const metricCount = heroStat.secondary.length;

  return (
    <section
      ref={rootRef}
      id="top"
      aria-labelledby="hero-name"
      className="grid gap-4 lg:grid-cols-[2fr_1fr] lg:items-stretch"
    >
      {/* ---------- Identity ---------- */}
      <div
        data-hero-tile
        className="tile tile-surface flex flex-col gap-6 p-5 sm:p-8 lg:p-10"
      >
        <p
          data-hero-meta
          className="flex items-center gap-2.5 font-mono text-[0.68rem] font-bold tracking-[0.16em] text-green uppercase"
        >
          <span className="status-dot" aria-hidden />
          {hero.eyebrow}
        </p>

        <h1
          id="hero-name"
          ref={nameRef}
          className="display hard-shadow-pink text-[clamp(2.5rem,12vw,5rem)] text-fg lg:text-[clamp(4rem,8vw,6rem)]"
        >
          Gururaj J
        </h1>

        <p className="max-w-[24ch] text-[clamp(1.35rem,2.4vw,2.25rem)] leading-[1.05] font-bold tracking-tight text-balance">
          {hero.tagline}
        </p>

        <p className="max-w-[64ch] text-[0.95rem] leading-relaxed text-muted text-pretty md:text-base">
          {hero.bio}
        </p>

        {/* Technical ownership strip */}
        <dl className="grid border-y border-line sm:grid-cols-3">
          {heroOwnership.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1 py-3.5 ${
                i > 0
                  ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-5"
                  : ""
              } ${i < heroOwnership.length - 1 ? "sm:pr-5" : ""}`}
            >
              <dt className="meta-label">{item.label}</dt>
              <dd className="text-[0.9rem] leading-snug font-semibold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex items-start gap-3.5">
          <span className="mt-1.5 size-2.5 shrink-0 bg-green" aria-hidden />
          <div className="flex flex-col gap-1.5">
            <p className="text-[1.05rem] leading-snug font-semibold">
              {hero.availability}
            </p>
            <p className="font-mono text-[0.68rem] leading-relaxed text-muted">
              {hero.availabilityMeta}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3.5 pt-1">
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

      {/* ---------- Production footprint + status ---------- */}
      <div className="flex flex-col gap-4">
        <section
          data-hero-tile
          aria-labelledby="footprint-label"
          className="tile tile-surface flex flex-1 flex-col"
        >
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line px-5 py-3.5 sm:px-6">
            <h2 id="footprint-label" className="meta-label text-fg">
              {heroStat.panelLabel}
            </h2>
            <p className="font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
              {heroStat.panelMeta}
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 lg:grid-cols-1">
            <div className="col-span-2 flex flex-col justify-center gap-2 border-b border-line px-5 py-5 sm:px-6 lg:col-span-1">
              <p className="display text-[clamp(3rem,4.5vw,4.5rem)] leading-none text-pink">
                {heroStat.value}
              </p>
              <p className="max-w-[28ch] font-mono text-[0.64rem] leading-relaxed font-bold tracking-[0.1em] text-fg uppercase">
                {heroStat.label}
              </p>
            </div>

            {heroStat.secondary.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1.5 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-4 ${metricBorders(
                  i,
                  metricCount,
                )}`}
              >
                <p className="display text-[1.6rem] leading-none tabular-nums lg:w-[6rem] lg:shrink-0">
                  {stat.value}
                </p>
                <p className="font-mono text-[0.6rem] leading-relaxed tracking-[0.08em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-auto border-t border-line px-5 py-3 font-mono text-[0.6rem] tracking-[0.06em] text-muted uppercase sm:px-6">
            {heroStat.meta}
          </p>
        </section>

        <section
          data-hero-tile
          aria-labelledby="status-label"
          className="border border-line"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 sm:px-6">
            <h2 id="status-label" className="meta-label">
              {shipping.panelLabel}
            </h2>
            <p className="font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
              status record
            </p>
          </div>
          <dl className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-2.5 px-5 py-4 font-mono text-[0.7rem] leading-snug sm:px-6">
            <dt className="meta-label pt-px">Product</dt>
            <dd>
              {shipping.product}{" "}
              <span className="text-muted">· {shipping.productDetail}</span>
            </dd>

            <dt className="meta-label pt-px">Status</dt>
            <dd className="flex items-center gap-1.5 font-bold text-green uppercase">
              <span className="live-dot size-1.5 bg-green" aria-hidden />
              {shipping.status}
            </dd>

            <dt className="meta-label pt-px">Last shipped</dt>
            <dd>{shipping.lastShipped}</dd>

            <dt className="meta-label pt-px">Stack</dt>
            <dd>{shipping.stack}</dd>

            <dt className="meta-label pt-px">Page updated</dt>
            <dd>
              {pageUpdated} ·{" "}
              <a
                href="#changelog"
                className="underline decoration-pink underline-offset-3"
              >
                changelog
              </a>
            </dd>
          </dl>
        </section>
      </div>
    </section>
  );
}
