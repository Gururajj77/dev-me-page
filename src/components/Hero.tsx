"use client";

import { useRef } from "react";
import { hero } from "@/lib/content";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = root.querySelectorAll("[data-hero-item]");

      if (prefersReducedMotion()) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.08,
        },
      );
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      id="intro"
      className="editorial flex min-h-[100svh] section-block flex-col justify-center py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-4xl">
        <p data-hero-item className="eyebrow-rule section-label mb-6 sm:mb-8">
          Bengaluru
        </p>

        <h1
          data-hero-item
          className="text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.98] font-medium tracking-[-0.04em] text-fg"
        >
          {hero.name}
        </h1>

        <p
          data-hero-item
          className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:mt-9 sm:text-[1.125rem] md:text-[1.3rem] md:leading-[1.65]"
        >
          {hero.intro}
        </p>
      </div>

      <dl
        data-hero-item
        className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-7 border-t border-border-strong pt-8 sm:mt-20 sm:gap-x-10 sm:gap-y-9 sm:pt-11 md:mt-24 lg:max-w-none lg:grid-cols-4"
      >
        {hero.currently.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="text-[0.75rem] tracking-[0.12em] text-faint uppercase sm:text-[0.8125rem]">
              {item.label}
            </dt>
            <dd className="mt-2 text-[0.975rem] leading-snug text-fg sm:mt-2.5 sm:text-[1.05rem] md:text-[1.125rem]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
