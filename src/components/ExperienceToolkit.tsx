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
      className="flex flex-col gap-7"
    >
      <SectionHead
        id="experience-head"
        index="03"
        kicker="Timeline"
        title="Experience"
        meta="One timeline, everything on it."
      />

      <PopIn className="grid gap-5 lg:grid-cols-[1.25fr_1fr]" stagger={0.1}>
        {/* ---------- Timeline as a changelog ---------- */}
        <div data-pop className="flex flex-col border border-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4 sm:px-8">
            <p className="meta-label text-fg">Timeline</p>
            <p className="font-mono text-[0.62rem] text-muted">
              {experience.length} records
            </p>
          </div>

          <ol className="flex flex-col">
            {experience.map((item, i) => (
              <li
                key={item.role + item.org}
                className={`grid gap-4 px-6 py-7 sm:px-8 md:grid-cols-[9.5rem_1fr] md:gap-8 md:py-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <p className="font-mono text-[0.7rem] leading-relaxed font-bold tracking-[0.06em] uppercase">
                  {item.period}
                  <span className="text-muted"> → </span>
                  {item.periodEnd}
                </p>

                <div className="flex flex-col gap-3">
                  <p
                    className={`text-[0.95rem] leading-snug font-semibold tracking-tight ${
                      item.emphasis ? "" : "text-muted"
                    }`}
                  >
                    {item.org}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3
                      className={`display leading-[1.02] ${
                        item.emphasis
                          ? "text-[clamp(1.5rem,2vw,1.75rem)]"
                          : "text-[1.2rem] text-muted"
                      }`}
                    >
                      {item.role}
                    </h3>
                    {item.badge ? (
                      <span className="chip-soft">{item.badge}</span>
                    ) : null}
                  </div>

                  <p className="font-mono text-[0.62rem] leading-relaxed tracking-[0.08em] text-muted uppercase">
                    {item.tags.join(" · ")}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 pt-1">
                    {item.metrics.map((metric) => (
                      <li
                        key={metric}
                        className={item.emphasis ? "chip-strong" : "chip-soft"}
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-auto border-t border-line p-6 sm:p-8">
            <a
              href={site.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-yellow w-full justify-between py-4 text-[0.9rem]"
            >
              <span>Résumé — PDF, two pages</span>
              <FiArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* ---------- Toolkit as a toolchain inventory ---------- */}
        <div data-pop className="flex flex-col border border-line">
          <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4 sm:px-8">
            <p className="meta-label text-fg">Toolkit</p>
            <p className="font-mono text-[0.62rem] text-muted">
              {skillCount}, ranked
            </p>
          </div>

          <div className="grid grid-cols-[6.5rem_1fr] gap-5 px-6 py-7 sm:grid-cols-[8rem_1fr] sm:px-8">
            <div>
              <p className="text-[1.05rem] font-bold tracking-tight">
                {toolkit.everydayLabel}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] text-muted uppercase">
                {toolkit.everydaySubtitle}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {toolkit.everyday.map((item) => (
                <li
                  key={item}
                  className="border-2 border-border px-3.5 py-2.5 font-mono text-[0.85rem] font-bold text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-[6.5rem_1fr] gap-5 border-t border-line px-6 py-7 sm:grid-cols-[8rem_1fr] sm:px-8">
            <div>
              <p className="text-[1.05rem] font-bold tracking-tight text-muted">
                {toolkit.comfortableLabel}
              </p>
              <p className="mt-1 font-mono text-[0.62rem] text-muted uppercase">
                {toolkit.comfortableSubtitle}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {toolkit.comfortable.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3.5 py-2.5 font-mono text-[0.85rem] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* UI → Product → Platform: three stacked bands */}
          <div className="mt-auto flex flex-col border-t-2 border-border">
            <p className="meta-label px-6 pt-5 sm:px-8">{toolkit.layersLabel}</p>
            <ol className="flex flex-col">
              {toolkit.layers.map((layer, i) => (
                <li
                  key={layer.label}
                  className={`flex flex-col gap-3 px-6 py-5 sm:px-8 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <p className="flex items-baseline gap-2.5 font-mono text-[0.7rem] font-bold tracking-[0.14em] uppercase">
                    <span className="text-pink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted" aria-hidden>
                      /
                    </span>
                    <span>{layer.label}</span>
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {layer.items.map((item) => (
                      <li key={item} className="chip-strong">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PopIn>
    </section>
  );
}
