"use client";

import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { caseStudies } from "@/lib/content";
import { PopIn } from "@/components/PopIn";
import { SectionHead } from "@/components/SectionHead";
import { KnotcmsArchitecture } from "@/components/KnotcmsArchitecture";

const diagrams: Partial<Record<string, () => React.JSX.Element>> = {
  knotcms: KnotcmsArchitecture,
};

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-head"
      className="flex scroll-mt-6 flex-col gap-7"
    >
      <SectionHead
        id="work-head"
        index="01"
        kicker="System inspection"
        title="Selected work"
        titleMuted="— in depth"
      />

      <PopIn className="flex flex-col gap-5" stagger={0.08}>
        {caseStudies.map((study, index) => {
          const Diagram = diagrams[study.id];
          const titleId = `${study.id}-title`;
          const titleClass =
            "underline decoration-pink decoration-4 underline-offset-8 hover:decoration-fg";

          return (
            <article
              key={study.id}
              data-pop
              aria-labelledby={titleId}
              className="tile tile-surface flex flex-col"
            >
              {/* ---------- Identity + problem  |  Architecture ---------- */}
              <div
                className={`grid ${Diagram ? "lg:grid-cols-[45fr_55fr]" : ""}`}
              >
                <div className="flex flex-col gap-6 p-6 sm:p-8 lg:border-r-2 lg:border-border lg:p-9">
                  <div className="flex items-center justify-between gap-3">
                    <p className="meta-label">
                      System · {String(index + 1).padStart(2, "0")}
                    </p>
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[0.6rem] font-bold tracking-[0.12em] text-green uppercase hover:text-fg"
                    >
                      Live
                      <FiArrowUpRight className="size-3" aria-hidden />
                    </a>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3
                      id={titleId}
                      className="display text-[clamp(2.25rem,3.4vw,2.75rem)]"
                    >
                      {study.caseHref ? (
                        <Link href={study.caseHref} className={titleClass}>
                          {study.title}
                        </Link>
                      ) : (
                        <a
                          href={study.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={titleClass}
                        >
                          {study.title}
                        </a>
                      )}
                    </h3>
                    <p className="font-mono text-[0.66rem] text-muted">
                      {study.meta}
                    </p>
                  </div>

                  <p className="max-w-[54ch] text-[1.1rem] leading-[1.55] font-medium">
                    {study.summary}
                  </p>

                  <dl className="flex flex-col border-t border-line">
                    {study.points.map((point) => (
                      <div
                        key={point.label}
                        className="grid gap-1.5 border-b border-line py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-5"
                      >
                        <dt className="meta-label pt-1">{point.label}</dt>
                        <dd className="text-[0.95rem] leading-[1.65]">
                          {point.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {Diagram ? (
                  <div className="flex flex-col gap-6 border-t-2 border-border bg-bg p-6 sm:p-8 lg:border-t-0 lg:p-9">
                    <div className="flex items-center justify-between gap-3">
                      <p className="meta-label text-fg">Architecture</p>
                      <p className="font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
                        Event-driven · Cloudflare
                      </p>
                    </div>
                    <Diagram />
                  </div>
                ) : null}
              </div>

              {/* ---------- Production failure → architecture ---------- */}
              {study.failure ? (
                <div className="flex flex-col gap-5 border-t-2 border-border p-6 sm:p-8 lg:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <p className="meta-label text-fg">Production failure</p>
                    <p className="font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
                      problem → diagnosis → change → outcome
                    </p>
                  </div>

                  <ol className="grid border border-line md:grid-cols-4">
                    {study.failure.map((step, i) => {
                      const last = i === study.failure!.length - 1;
                      return (
                        <li
                          key={step.label}
                          className={`relative flex flex-col gap-2.5 p-5 ${
                            i > 0
                              ? "border-t border-line md:border-t-0 md:border-l"
                              : ""
                          }`}
                        >
                          <span className="meta-label flex items-center gap-1.5">
                            {last ? (
                              <span
                                className="size-1.5 bg-green"
                                aria-hidden
                              />
                            ) : null}
                            {step.label}
                          </span>
                          <span className="display text-[1.35rem] leading-[1.02] md:text-[1.45rem]">
                            {step.text}
                          </span>
                          {step.detail ? (
                            <span className="font-mono text-[0.6rem] text-muted">
                              {step.detail}
                            </span>
                          ) : null}

                          {!last ? (
                            <>
                              <span
                                aria-hidden
                                className="absolute top-full left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 bg-surface px-1 font-mono text-[0.8rem] leading-none text-muted max-md:block"
                              >
                                ↓
                              </span>
                              <span
                                aria-hidden
                                className="absolute top-1/2 left-full z-10 hidden -translate-x-1/2 -translate-y-1/2 bg-surface py-0.5 font-mono text-[0.8rem] leading-none text-muted md:block"
                              >
                                →
                              </span>
                            </>
                          ) : null}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ) : null}

              {/* ---------- Technical metadata + navigation ---------- */}
              <div className="flex flex-wrap items-center gap-2 border-t-2 border-border p-5 sm:px-8 lg:px-9">
                {study.tags.map((tag) => (
                  <span key={tag} className="chip-strong">
                    {tag}
                  </span>
                ))}
                {study.caseHref ? (
                  <Link
                    href={study.caseHref}
                    className="ml-auto inline-flex items-center gap-2 py-1 font-mono text-[0.7rem] font-bold tracking-[0.12em] uppercase underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
                  >
                    Read the case
                    <FiArrowRight className="size-4" aria-hidden />
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </PopIn>
    </section>
  );
}
