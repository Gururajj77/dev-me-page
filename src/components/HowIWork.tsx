"use client";

import { howIWork } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

export function HowIWork() {
  return (
    <PopIn>
      <div data-pop className="flex flex-col border border-line">
        <div className="flex items-center justify-between px-7 py-5 sm:px-8">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
            {howIWork.eyebrow}
          </p>
          <p className="font-mono text-[0.7rem] text-muted">{howIWork.meta}</p>
        </div>
        {howIWork.principles.map((principle, i) => (
          <div
            key={principle.title}
            className="grid grid-cols-[2.75rem_1fr] gap-5 border-t border-line px-7 py-7 sm:px-8"
          >
            <span className="font-mono text-[1.05rem] text-pink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-[1.15rem] font-bold tracking-tight">
                {principle.title}
              </p>
              <p className="max-w-[70ch] text-[0.92rem] leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PopIn>
  );
}
