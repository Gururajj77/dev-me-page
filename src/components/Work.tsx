"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { caseStudies } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

const titleAccent = {
  pink: "underline decoration-pink decoration-4 underline-offset-6",
} as const;

const bannerAccent = {
  pink: "case-banner-pink",
} as const;

const liftAccent = {
  pink: "tile-lift-pink",
} as const;

export function Work() {
  return (
    <section id="work" className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <p className="font-mono text-[0.7rem] tracking-[0.16em] text-muted uppercase">
          Selected work — in depth
        </p>
        <div className="h-0.5 flex-1 bg-border" />
      </div>

      <PopIn
        className={`grid gap-4 ${caseStudies.length > 1 ? "md:grid-cols-2" : ""}`}
        stagger={0.08}
      >
        {caseStudies.map((study) => {
          const cardClassName = `tile tile-surface tile-lift ${liftAccent[study.accent]} flex flex-col`;

          const cardBody = (
            <>
              <div className={`case-banner ${bannerAccent[study.accent]}`}>
                <span className="border border-border bg-surface px-2 py-1 font-mono text-[0.62rem] tracking-wide uppercase">
                  {study.dropLabel}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={`display text-[clamp(1.4rem,3vw,1.8rem)] ${titleAccent[study.accent]}`}
                    >
                      {study.title}
                    </h3>
                    <p className="font-mono text-[0.68rem] text-muted">
                      {study.meta}
                    </p>
                  </div>
                  <FiArrowRight className="mt-1 size-5 shrink-0" aria-hidden />
                </div>

                <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
                  {study.summary}
                </p>

                <div className="flex max-w-[70ch] flex-col gap-2 border-t border-line pt-4 text-[0.92rem] leading-relaxed">
                  {study.points.map((point) => (
                    <div key={point.label}>
                      <strong className="font-bold">{point.label}:</strong>{" "}
                      {point.text}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="chip-soft">
                      {tag}
                    </span>
                  ))}
                  <span className="chip-strong ml-auto">Read the case →</span>
                </div>
              </div>
            </>
          );

          if ("caseHref" in study && study.caseHref) {
            return (
              <Link
                key={study.id}
                data-pop
                href={study.caseHref}
                className={cardClassName}
              >
                {cardBody}
              </Link>
            );
          }

          return (
            <a
              key={study.id}
              data-pop
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClassName}
            >
              {cardBody}
            </a>
          );
        })}
      </PopIn>
    </section>
  );
}
