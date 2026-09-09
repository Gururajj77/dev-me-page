"use client";

import { howIWork } from "@/lib/content";
import { PopIn } from "@/components/PopIn";
import { SectionHead } from "@/components/SectionHead";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-head"
      className="flex flex-col gap-5"
    >
      <SectionHead
        id="how-head"
        index="02"
        label={howIWork.eyebrow}
        meta={howIWork.meta}
      />

      <PopIn className="flex flex-col border-b-2 border-border" stagger={0.07}>
        {howIWork.principles.map((principle, i) => (
          <div
            key={principle.title}
            data-pop
            className="grid gap-x-8 gap-y-3 border-t border-line py-6 md:grid-cols-[4.5rem_1fr_1.35fr] md:grid-rows-[auto_1fr] md:py-7"
          >
            <span
              className="display text-[2rem] leading-none text-pink md:row-span-2 md:text-[2.4rem]"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="display text-[1.15rem] leading-[1.08] tracking-[-0.015em] md:col-start-2 md:row-start-1 md:text-[1.25rem]">
              <span className="sr-only">Rule {i + 1}: </span>
              {principle.title}
            </h3>

            <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-muted md:col-start-3 md:row-span-2 md:row-start-1">
              {principle.body}
            </p>

            <p className="flex flex-col gap-0.5 font-mono text-[0.6rem] tracking-[0.12em] uppercase md:col-start-2 md:row-start-2 md:self-end">
              <span className="text-muted">Evidence</span>
              <span className="font-bold text-fg">{principle.evidence}</span>
            </p>
          </div>
        ))}
      </PopIn>
    </section>
  );
}
