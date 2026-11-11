import Link from "next/link";
import type { CSSProperties } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import {
  caseStudies,
  contact,
  experience,
  formatMonth,
  hero,
  heroStat,
  knotcmsCaseSpec,
  shipping,
  site,
  toolkit,
} from "@/lib/content";
import { ClockTile } from "./ClockTile";
import { CopyEmailTile } from "./CopyEmailTile";
import { PrinciplesTile } from "./PrinciplesTile";
import { Tile, TileFoot, TileTop, tileClass } from "./Tile";

const study = caseStudies[0];
const failure = study.failure ?? [];
const order = (i: number) => ({ "--i": i }) as CSSProperties;
const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?[^/]+\//, "").replace(/\/$/, "");

/* ---------- Feature: KnotCMS ---------- */

function KnotcmsTile({ index }: { index: number }) {
  const flow = knotcmsCaseSpec.flow;

  return (
    <section
      aria-labelledby="knotcms-title"
      className={tileClass("violet", "2x2", "gap-4 p-4")}
      style={order(index)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="meta-label">{knotcmsCaseSpec.systemLabel}</p>
        <span className="chip-soft">
          <span className="status-dot live-dot" aria-hidden />
          <span className="text-fg">{shipping.status}</span>
        </span>
      </div>

      {/* Sync path, drawn as three nodes */}
      <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-3">
        <ol className="flex items-center gap-2" aria-label="Sync path">
          {flow.map((node, i) => (
            <li key={node} className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className={`flex min-h-11 w-full items-center justify-center rounded-xl px-2 text-center font-mono text-[0.72rem] leading-[1.2] font-medium ${
                  i === 1 ? "bg-fg text-bg" : "bg-soft text-fg"
                }`}
              >
                {node}
              </span>
              {i < flow.length - 1 ? (
                <FiArrowRight className="size-4 flex-none text-muted" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="text-center font-mono text-[0.72rem] text-muted">
          {knotcmsCaseSpec.infrastructure.join(" · ")}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <h2 id="knotcms-title" className="display text-[2.1rem] text-fg">
          {study.title}
        </h2>
        <p className="text-[0.92rem] leading-[1.55] text-pretty text-muted">{study.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {study.caseHref ? (
          <Link href={study.caseHref} className="btn btn-ink">
            {hero.ctaSecondary}
            <FiArrowRight className="size-4" aria-hidden />
          </Link>
        ) : null}
        <a href={study.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          {new URL(study.href).host}
          <FiArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}

/* ---------- Carbon footprint ---------- */

function CarbonTile({ index }: { index: number }) {
  return (
    <section
      aria-labelledby="carbon-label"
      className={tileClass("blue", "2x2", "gap-4 p-4")}
      style={order(index)}
    >
      <div className="flex flex-col gap-2">
        <h2 id="carbon-label" className="meta-label">
          {heroStat.panelLabel}
        </h2>
        <p className="text-[0.82rem] text-muted">{heroStat.panelMeta}</p>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <p className="display text-[3.5rem] text-fg tabular-nums">{heroStat.value}</p>
        <p className="text-[1rem] leading-[1.4] font-semibold text-balance">{heroStat.label}</p>
        <p className="font-mono text-[0.72rem] text-muted">{heroStat.meta}</p>
      </div>

      <dl className="grid grid-cols-2 gap-2 [&>div:last-child:nth-child(odd)]:col-span-2">
        {heroStat.secondary.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse rounded-2xl bg-surface p-3"
          >
            <dt className="text-[0.78rem] leading-[1.4] text-muted">{stat.label}</dt>
            <dd className="font-display text-[1.4rem] leading-[1.1] font-extrabold tracking-[-0.03em] tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------- Experience ---------- */

/** "5,000+ developers" → ["5,000+", "developers"]; non-numeric metrics stay whole. */
function splitMetric(metric: string): [string, string] {
  const match = metric.match(/^([~<>]?[\d.,]+[A-Za-z+%]*)\s+(.*)$/);
  return match ? [match[1], match[2]] : ["", metric];
}

function ExperienceTile({ index }: { index: number }) {
  const since = experience.at(-1)?.period.split(" ").pop();

  return (
    <section
      aria-labelledby="experience-label"
      className={tileClass("white", "2x3", "gap-4 p-4")}
      style={order(index)}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 id="experience-label" className="meta-label">
          Experience
        </h2>
        <p className="meta-label">
          {experience.length} roles{since ? ` · since ${since}` : null}
        </p>
      </div>

      <ol className="flex flex-1 flex-col gap-4">
        {experience.map((job) => {
          const current = job.periodEnd === "present";
          return (
            <li
              key={job.org}
              className="flex flex-col gap-3 border-t border-line pt-4 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-x-3">
                  <h3 className="text-[1rem] leading-[1.4] font-semibold">{job.role}</h3>
                  <p className="flex items-center gap-2 font-mono text-[0.72rem] text-muted">
                    {current ? <span className="status-dot live-dot" aria-hidden /> : null}
                    {job.period} — {job.periodEnd}
                  </p>
                </div>
                <p className="text-[0.85rem] leading-[1.45] text-muted">
                  {job.org}
                  {job.badge ? <> · {job.badge}</> : null}
                </p>
              </div>

              <ul
                className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.72rem] leading-[1.3]"
                aria-label={`${job.org}, key numbers`}
              >
                {job.metrics.map((metric) => {
                  const [value, label] = splitMetric(metric);
                  return (
                    <li key={metric} className="text-muted">
                      {value ? <span className="font-medium text-fg">{value} </span> : null}
                      {label}
                    </li>
                  );
                })}
              </ul>

              {job.highlights?.length ? (
                <ul className="flex flex-col rounded-2xl bg-soft">
                  {job.highlights.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col border-t border-line px-3 py-2 first:border-t-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h4 className="meta-label">{item.label}</h4>
                        <p className="font-mono text-[0.72rem] leading-[1.3] font-medium whitespace-nowrap text-fg">
                          {item.stat}
                        </p>
                      </div>
                      <p className="text-[0.8rem] leading-[1.45] text-pretty text-muted">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

/* ---------- Toolkit ---------- */

function ToolkitTile({ index }: { index: number }) {
  const groups = [
    { label: `${toolkit.everydayLabel} · ${toolkit.everydaySubtitle}`, items: toolkit.everyday },
    { label: `${toolkit.comfortableLabel} · ${toolkit.comfortableSubtitle}`, items: toolkit.comfortable },
  ];

  return (
    <section
      aria-labelledby="toolkit-label"
      className={tileClass("white", "2x1", "gap-3 p-4")}
      style={order(index)}
    >
      <h2 id="toolkit-label" className="sr-only">
        Toolkit
      </h2>
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2">
          <p className="meta-label">{group.label}</p>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="chip-strong bg-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

/* ---------- Contact ---------- */

function ContactTile({ index }: { index: number }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={tileClass("green", "2x2", "scroll-mt-16 gap-4 p-4")}
      style={order(index)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="meta-label">{contact.headingLines.join(" ")}</p>
        <span className="status-dot live-dot" aria-hidden />
      </div>

      <div className="flex flex-col gap-2">
        <h2
          id="contact-title"
          className="font-display text-[1.4rem] leading-[1.2] font-semibold tracking-[-0.02em] text-balance"
        >
          {hero.availability}
        </h2>
        <p className="font-mono text-[0.72rem] leading-[1.5] text-muted">{hero.availabilityMeta}</p>
      </div>

      <ol className="flex flex-col gap-2">
        {contact.steps.map((step) => (
          <li key={step.n} className="flex gap-3 text-[0.85rem] leading-[1.5]">
            <span className="font-mono text-[0.72rem] leading-[1.75] text-muted">{step.n}</span>
            <span>
              <span className="font-semibold">{step.label}</span>{" "}
              <span className="text-muted">{step.text}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-auto flex flex-wrap gap-2">
        <a href={site.links.email} className="btn btn-ink">
          <FiMail className="size-4" aria-hidden />
          {contact.emailLabel}
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          LinkedIn
          <FiArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}

/* ---------- Grid ---------- */

export function Bento() {
  return (
    <div
      id="work"
      className="grid scroll-mt-16 auto-rows-[minmax(168px,auto)] grid-cols-2 gap-4 [grid-auto-flow:dense] md:grid-cols-4"
    >
      <KnotcmsTile index={0} />

      <Tile
        index={1}
        href={site.links.github}
        ariaLabel={`GitHub, ${handle(site.links.github)}`}
      >
        <TileTop icon={<FiGithub className="size-5" />} iconClass="bg-fg text-bg" />
        <TileFoot title="GitHub" sub={`@${handle(site.links.github)}`} />
      </Tile>

      <Tile
        index={2}
        href={site.links.linkedin}
        ariaLabel={`LinkedIn, ${handle(site.links.linkedin)}`}
      >
        <TileTop icon={<FiLinkedin className="size-5" />} iconClass="bg-[#0a66c2]" />
        <TileFoot title="LinkedIn" sub={handle(site.links.linkedin)} />
      </Tile>

      <ClockTile index={3} />

      <Tile index={4} tone="green" labelledBy="shipping-label">
        <div className="flex items-center justify-between gap-3">
          <h2 id="shipping-label" className="meta-label">
            {shipping.panelLabel}
          </h2>
          <span className="status-dot live-dot flex-none" aria-hidden />
        </div>
        <TileFoot
          title={
            <>
              {shipping.product} · {shipping.productDetail}
            </>
          }
          sub={
            <>
              {shipping.status} · shipped{" "}
              <time dateTime={shipping.shippedOn}>{formatMonth(shipping.shippedOn)}</time>
              <span className="block font-mono text-[0.72rem]">{shipping.stack}</span>
            </>
          }
        />
      </Tile>

      <CarbonTile index={5} />

      <CopyEmailTile index={6} />

      <Tile
        index={7}
        tone="red"
        size="2x1"
        href="/work/knotcms#failure"
        ariaLabel={`Where it broke: ${failure[0]?.text}. Read the failure in the KnotCMS case study`}
        className="gap-3"
      >
        <div className="flex items-start justify-between gap-3">
          <p className="meta-label">Where it broke</p>
          <FiArrowUpRight className="size-[18px] text-muted" aria-hidden />
        </div>
        <p className="display text-[2.1rem] text-accent tabular-nums">{failure[0]?.text}</p>
        <ol className="mt-auto flex flex-col gap-2">
          {failure.slice(1).map((step) => (
            <li key={step.label} className="flex gap-3 text-[0.85rem] leading-[1.4]">
              <span className="w-[72px] flex-none font-mono text-[0.72rem] leading-[1.65] text-muted">
                {step.label}
              </span>
              <span className="text-fg">
                {step.text}
                {step.detail ? <span className="text-muted"> — {step.detail}</span> : null}
              </span>
            </li>
          ))}
        </ol>
      </Tile>

      <PrinciplesTile index={8} />
      <ExperienceTile index={9} />
      <ToolkitTile index={10} />
      <ContactTile index={11} />

      <Tile index={12} tone="red" href={site.links.resume} ariaLabel="Résumé, PDF">
        <TileTop icon={<FiFileText className="size-5" />} iconClass="bg-accent" />
        <TileFoot title="Résumé" sub="PDF" />
      </Tile>

      <Tile index={13} tone="violet" href={site.links.source} ariaLabel="Source code for this site on GitHub">
        <TileTop icon={<FiCode className="size-5" />} iconClass="bg-[#6d4aff]" />
        <TileFoot title="This site" sub="Source on GitHub" />
      </Tile>
    </div>
  );
}
