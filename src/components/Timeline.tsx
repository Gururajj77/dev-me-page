"use client";

import { useRef } from "react";
import { timeline } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function Timeline() {
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      const line = list.querySelector<HTMLElement>("[data-timeline-line]");
      if (!line) return;

      if (prefersReducedMotion()) {
        gsap.set(line, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: listRef },
  );

  return (
    <SectionReveal
      id="timeline"
      ariaLabelledBy="timeline-heading"
      className="band section-block py-20 sm:py-28 md:py-36"
    >
      <div className="editorial">
        <p className="eyebrow-rule section-label mb-6 sm:mb-8">Timeline</p>
        <h2
          id="timeline-heading"
          className="max-w-3xl text-[clamp(1.85rem,5.5vw,2.95rem)] leading-[1.12] font-medium tracking-[-0.035em] text-fg"
        >
          A few markers.
        </h2>

        <ul ref={listRef} className="relative mt-12 max-w-2xl sm:mt-16">
          <li
            aria-hidden="true"
            data-timeline-line
            className="absolute top-2 bottom-2 left-[0.2rem] w-px origin-top bg-gradient-to-b from-accent/50 via-border-strong to-border md:left-[0.28rem]"
          />

          {timeline.map((item) => (
            <li
              key={`${item.year}-${item.title}`}
              className="relative grid grid-cols-[3.75rem_1fr] gap-4 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-7 md:grid-cols-[5.5rem_1fr] md:gap-10 md:py-8"
            >
              <div className="relative pt-1">
                <span
                  aria-hidden="true"
                  className="absolute top-[0.55rem] left-0 size-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgb(10_10_10)]"
                />
                <time className="pl-4 font-mono text-[0.75rem] tracking-wide text-faint tabular-nums sm:pl-5 sm:text-[0.8125rem] md:pl-6 md:text-[0.875rem]">
                  {item.year}
                </time>
              </div>
              <div className="min-w-0">
                <h3 className="text-[1.125rem] leading-snug font-medium tracking-[-0.02em] text-fg sm:text-[1.25rem] md:text-[1.375rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
