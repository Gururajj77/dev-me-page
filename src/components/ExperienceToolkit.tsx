"use client";

import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { experience, site, toolkit } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

const skillCount = toolkit.everyday.length + toolkit.comfortable.length;

export function ExperienceToolkit() {
  return (
    <PopIn className="grid gap-4 md:grid-cols-[1.25fr_1fr]" stagger={0.1}>
      <div data-pop className="flex flex-col gap-6 border border-line p-7 sm:p-8">
        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
          Experience — one timeline, everything on it
        </p>

        <div className="flex flex-col">
          {experience.map((item, i) => (
            <div
              key={item.role}
              className={`grid grid-cols-[6rem_1fr] gap-5 py-5 ${
                i < experience.length - 1 ? "border-b border-line" : "pb-0"
              } ${i === 0 ? "pt-0" : ""}`}
            >
              <div className="pt-1 font-mono text-[0.68rem] leading-relaxed text-muted">
                {item.period} —<br />
                {item.periodEnd}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="text-[1.05rem] font-bold tracking-tight">
                    {item.role}
                  </span>
                  {"badge" in item && item.badge ? (
                    <span className="chip-strong">{item.badge}</span>
                  ) : null}
                </div>
                <p className="font-mono text-[0.68rem] text-muted">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brutal btn-yellow justify-between"
        >
          <span>Résumé — PDF, one page</span>
          <FiArrowRight className="size-4" aria-hidden />
        </a>
      </div>

      <div data-pop className="flex flex-col border border-line">
        <div className="flex items-center justify-between px-7 py-5 sm:px-8">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
            Toolkit
          </p>
          <p className="font-mono text-[0.7rem] text-muted">
            {skillCount}, ranked
          </p>
        </div>

        <div className="grid grid-cols-[7rem_1fr] gap-5 border-t border-line px-7 py-7 sm:grid-cols-[9rem_1fr] sm:px-8">
          <div>
            <p className="font-bold tracking-tight">{toolkit.everydayLabel}</p>
            <p className="mt-1 font-mono text-[0.68rem] text-muted">
              {toolkit.everydaySubtitle}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5">
            {toolkit.everyday.map((item) => (
              <span
                key={item}
                className="border-2 border-border px-4 py-3 font-mono text-[0.88rem] text-fg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[7rem_1fr] gap-5 border-t border-line px-7 py-7 sm:grid-cols-[9rem_1fr] sm:px-8">
          <div>
            <p className="font-bold tracking-tight text-muted">
              {toolkit.comfortableLabel}
            </p>
            <p className="mt-1 font-mono text-[0.68rem] text-muted">
              {toolkit.comfortableSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5">
            {toolkit.comfortable.map((item) => (
              <span
                key={item}
                className="border border-line px-4 py-3 font-mono text-[0.88rem] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line px-7 py-7 sm:px-8">
          <p className="max-w-md text-[0.9rem] leading-relaxed text-muted">
            {toolkit.systemNote}
            <br />
            <a
              href={site.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-fg"
            >
              {toolkit.systemLinkLabel}
            </a>
          </p>
          <FiArrowUpRight className="size-6 shrink-0" aria-hidden />
        </div>
      </div>
    </PopIn>
  );
}
