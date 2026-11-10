"use client";

import { useState, type CSSProperties } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { howIWork } from "@/lib/content";
import { tileClass } from "./Tile";

const rules = howIWork.principles;
const pad = (n: number) => String(n).padStart(2, "0");

/** The four working rules, one at a time. */
export function PrinciplesTile({ index }: { index: number }) {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  const go = (step: number) =>
    setActive((current) => (current + step + rules.length) % rules.length);

  return (
    <section
      aria-labelledby="principles-label"
      aria-roledescription="carousel"
      className={tileClass("pink", "2x2", "gap-4 p-4")}
      style={{ "--i": index } as CSSProperties}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 id="principles-label" className="meta-label">
          {howIWork.eyebrow} · {howIWork.meta}
        </h2>
        <p className="font-mono text-[0.72rem] tabular-nums text-muted" aria-hidden>
          {pad(active + 1)} / {pad(rules.length)}
        </p>
      </div>

      <div
        key={active}
        aria-live="polite"
        className="tile-in flex flex-1 flex-col gap-3 pt-2"
      >
        <h3 className="font-display text-[1.4rem] leading-[1.2] font-semibold tracking-[-0.02em] text-balance">
          <span className="mark">{rule.title}</span>
        </h3>
        <p className="text-[0.92rem] leading-[1.6] text-pretty text-muted">{rule.body}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="meta-label">{rule.evidence}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="icon-btn"
            onClick={() => go(-1)}
            aria-label="Previous rule"
          >
            <FiChevronLeft className="size-[18px]" aria-hidden />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => go(1)}
            aria-label="Next rule"
          >
            <FiChevronRight className="size-[18px]" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
