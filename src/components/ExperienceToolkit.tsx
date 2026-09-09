"use client";

import { FiArrowRight } from "react-icons/fi";
import { experience, site, toolkit } from "@/lib/content";
import { PopIn } from "@/components/PopIn";
import { SectionHead } from "@/components/SectionHead";

const skillCount = toolkit.everyday.length + toolkit.comfortable.length;

export function ExperienceToolkit() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-head"
      className="flex flex-col gap-5"
    >
      <SectionHead
        id="experience-head"
        index="03"
        label="Experience"
        meta="One timeline, everything on it"
      />

      <PopIn className="grid gap-4 lg:grid-cols-[1.25fr_1fr]" stagger={0.1}>
        {/* ---------- Timeline as a changelog ---------- */}
        <div data-pop className="flex flex-col border border-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-7">
            <p className="meta-label text-fg">Timeline</p>
            <p className="font-mono text-[0.64rem] text-muted">
              {experience.length} records
            </p>
          </div>

          <ol className="flex flex-col">
            {experience.map((item, i) => (
              <li
                key={item.role + item.org}
                className={`grid gap-3 px-5 py-5 sm:px-7 md:grid-cols-[10rem_1fr] md:gap-6 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <p className="font-mono text-[0.7rem] leading-relaxed font-bold tracking-[0.06em] uppercase">
                  {item.period}
                  <span className="text-muted"> → </span>
                  {item.periodEnd}
                </p>

                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="display text-[1.15rem] leading-tight">
                      {item.role}
                    </h3>
                    {item.badge ? (
                      <span className="chip-soft">{item.badge}</span>
                    ) : null}
                  </div>
                  <p className="text-[0.92rem] leading-snug font-semibold tracking-tight">
                    {item.org}
                  </p>
                  <p className="font-mono text-[0.62rem] leading-relaxed tracking-[0.08em] text-muted uppercase">
                    {item.tags.join(" · ")}
                  </p>
                  <ul className="flex flex-wrap gap-1.5 pt-0.5">
                    {item.metrics.map((metric) => (
                      <li key={metric} className="chip-strong">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-auto border-t border-line p-5 sm:p-7">
            <a
              href={site.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-yellow w-full justify-between"
            >
              <span>Résumé — PDF, two pages</span>
              <FiArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* ---------- Toolkit as a toolchain inventory ---------- */}
        <div data-pop className="flex flex-col border border-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-7">
            <p className="meta-label text-fg">Toolkit</p>
            <p className="font-mono text-[0.64rem] text-muted">
              {skillCount}, ranked
            </p>
          </div>

          <div className="grid grid-cols-[6.5rem_1fr] gap-5 px-5 py-6 sm:grid-cols-[8rem_1fr] sm:px-7">
            <div>
              <p className="font-bold tracking-tight">{toolkit.everydayLabel}</p>
              <p className="mt-1 font-mono text-[0.64rem] text-muted uppercase">
                {toolkit.everydaySubtitle}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {toolkit.everyday.map((item) => (
                <li
                  key={item}
                  className="border-2 border-border px-3 py-2 font-mono text-[0.8rem] font-bold text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-[6.5rem_1fr] gap-5 border-t border-line px-5 py-6 sm:grid-cols-[8rem_1fr] sm:px-7">
            <div>
              <p className="font-bold tracking-tight text-muted">
                {toolkit.comfortableLabel}
              </p>
              <p className="mt-1 font-mono text-[0.64rem] text-muted uppercase">
                {toolkit.comfortableSubtitle}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {toolkit.comfortable.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-2 font-mono text-[0.8rem] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* UI → Product → Platform */}
          <div className="mt-auto flex flex-col gap-3 border-t border-line px-5 py-6 sm:px-7">
            <p className="meta-label">{toolkit.layersLabel}</p>
            <ol className="grid gap-7 sm:grid-cols-3 sm:gap-5">
              {toolkit.layers.map((layer, i) => {
                const last = i === toolkit.layers.length - 1;
                return (
                  <li
                    key={layer.label}
                    className="relative flex flex-col gap-1.5 border-t-2 border-border pt-2.5"
                  >
                    <span className="font-mono text-[0.66rem] font-bold tracking-[0.12em] uppercase">
                      {layer.label}
                    </span>
                    <span className="font-mono text-[0.64rem] leading-relaxed text-muted">
                      {layer.items.join(" · ")}
                    </span>
                    {!last ? (
                      <>
                        <span
                          aria-hidden
                          className="absolute -bottom-[1.4rem] left-0 font-mono text-[0.8rem] leading-none text-muted sm:hidden"
                        >
                          ↓
                        </span>
                        <span
                          aria-hidden
                          className="absolute top-0 -right-3.5 hidden font-mono text-[0.8rem] leading-none text-muted sm:block"
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
        </div>
      </PopIn>
    </section>
  );
}
