"use client";

import { howIWork } from "@/lib/content";
import { PopIn } from "@/components/PopIn";
import { SectionHead } from "@/components/SectionHead";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-head"
      className="flex flex-col gap-7"
    >
      <SectionHead
        id="how-head"
        index="02"
        kicker="Engineering judgment"
        title={howIWork.eyebrow}
        titleMuted={`— ${howIWork.meta}`}
      />

      <PopIn className="flex flex-col border-b-2 border-border" stagger={0.07}>
        {howIWork.principles.map((principle, i) => (
          <div
            key={principle.title}
            data-pop
            className="grid gap-x-10 gap-y-4 border-t border-line py-9 md:grid-cols-[5.5rem_1.05fr_1.25fr] md:grid-rows-[auto_1fr] md:py-11"
          >
            <span
              className="display text-[2.5rem] leading-none text-pink md:row-span-2 md:text-[3rem]"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="display max-w-[20ch] text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[1.02] text-balance md:col-start-2 md:row-start-1">
              <span className="sr-only">Rule {i + 1}: </span>
              {principle.title}
            </h3>

            <p className="flex flex-col gap-0.5 font-mono text-[0.6rem] tracking-[0.12em] uppercase md:col-start-2 md:row-start-2 md:self-start md:pt-1">
              <span className="text-muted">Evidence</span>
              <span className="font-bold text-fg">{principle.evidence}</span>
            </p>

            <p className="max-w-[58ch] text-[1rem] leading-[1.7] text-muted md:col-start-3 md:row-span-2 md:row-start-1 md:text-[1.05rem]">
              {principle.body}
            </p>
          </div>
        ))}
      </PopIn>
    </section>
  );
}
