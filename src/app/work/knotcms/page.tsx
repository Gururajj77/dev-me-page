import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { knotcmsCase, knotcmsCaseSpec, site, type ChainTone } from "@/lib/content";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";
import { KnotcmsArchitecture } from "@/components/KnotcmsArchitecture";
import { PopIn } from "@/components/PopIn";

export const metadata: Metadata = {
  title: `${knotcmsCase.title} — ${site.name}`,
  description: knotcmsCase.tagline,
  openGraph: {
    title: `${knotcmsCase.title} — ${site.name}`,
    description: knotcmsCase.tagline,
    type: "article",
  },
};

const spec = knotcmsCaseSpec;
const prose = "max-w-[70ch] text-[1.05rem] leading-[1.7]";

/* ---------- Building blocks ---------- */

function CaseSection({
  id,
  n,
  kicker,
  title,
  meta,
  children,
}: {
  id: string;
  n: string;
  kicker: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <PopIn>
      <section
        id={id}
        data-pop
        aria-labelledby={`${id}-title`}
        className="flex scroll-mt-6 flex-col gap-8 border-t-2 border-border pt-6 md:gap-10"
      >
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[0.66rem] font-bold tracking-[0.16em] uppercase">
            <span className="text-pink">{n}</span>
            <span className="text-muted"> / </span>
            {kicker}
          </p>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
            <h2
              id={`${id}-title`}
              className="display text-[clamp(2rem,3.8vw,3.1rem)] text-balance"
            >
              {title}
            </h2>
            {meta ? (
              <p className="pb-1 font-mono text-[0.64rem] tracking-[0.1em] text-muted uppercase">
                {meta}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </section>
    </PopIn>
  );
}

const chainTone: Record<ChainTone, string> = {
  external: "arch-node-external",
  engine: "arch-node-engine",
  state: "arch-node-state",
  plain: "",
  failure: "arch-node-product text-pink",
};

function Chain({
  label,
  nodes,
}: {
  label: string;
  nodes: readonly { label: string; tone: ChainTone }[];
}) {
  return (
    <div className="flex flex-col gap-5 border border-line p-6">
      <p className="meta-label text-fg">{label}</p>
      <ol className="flex flex-col items-center">
        {nodes.map((node, i) => (
          <Fragment key={node.label}>
            {i > 0 ? (
              <li aria-hidden className="h-6 w-0.5 bg-border" />
            ) : null}
            <li
              className={`arch-node ${chainTone[node.tone]} ${
                i === 0 || i === nodes.length - 1 ? "arch-node-mid" : ""
              }`}
            >
              {node.label}
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

/** Four-cell panel: label above a display value, arrows between cells. */
function StepPanel({
  steps,
  columns,
  outcomeLast = false,
  sentence = false,
}: {
  steps: readonly { label: string; text: string }[];
  columns: 3 | 4;
  outcomeLast?: boolean;
  /** Full sentences read better in sentence case than in display caps. */
  sentence?: boolean;
}) {
  const cols = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <ol className={`grid border border-line bg-surface ${cols}`}>
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li
            key={step.label}
            className={`relative flex flex-col gap-2.5 p-5 ${
              i > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""
            }`}
          >
            <span className="meta-label flex items-center gap-1.5">
              {outcomeLast && last ? (
                <span className="size-1.5 bg-green" aria-hidden />
              ) : null}
              {step.label}
            </span>
            <span
              className={
                sentence
                  ? "text-[1.05rem] leading-[1.4] font-bold tracking-tight"
                  : "display text-[1.25rem] leading-[1.05] md:text-[1.35rem]"
              }
            >
              {step.text}
            </span>
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
  );
}

function FactGrid({
  items,
  className = "",
}: {
  items: readonly { label: string; value: string; live?: boolean }[];
  className?: string;
}) {
  return (
    <dl className={`grid border border-line ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1.5 border-line px-5 py-4 [&:nth-child(n+2)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l"
        >
          <dt className="meta-label">{item.label}</dt>
          <dd
            className={`text-[0.95rem] leading-snug font-semibold tracking-tight ${
              item.live ? "flex items-center gap-1.5 text-green uppercase" : ""
            }`}
          >
            {item.live ? (
              <span className="live-dot size-1.5 bg-green" aria-hidden />
            ) : null}
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Page ---------- */

export default function KnotCmsCaseStudyPage() {
  const shots = spec.screenshots;

  return (
    <main className="shell flex flex-col gap-14 py-6 md:gap-20 md:py-8">
      <Link
        href="/"
        className="font-mono text-[0.7rem] tracking-[0.1em] text-muted uppercase hover:text-fg"
      >
        ← {site.brand}
      </Link>

      {/* ---------- Opening: project specification ---------- */}
      <PopIn className="flex flex-col gap-6">
        <header data-pop className="tile tile-surface flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-line px-6 py-4 sm:px-9">
            <p className="meta-label text-fg">{spec.systemLabel}</p>
            <p className="font-mono text-[0.62rem] tracking-[0.06em] text-muted">
              {knotcmsCase.meta}
            </p>
          </div>

          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.35fr_1fr] lg:gap-12 lg:p-12">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <h1 className="display hard-shadow-pink text-[clamp(3rem,9vw,6.25rem)]">
                  {knotcmsCase.title}
                </h1>
                <p className="display text-[clamp(1.35rem,2.6vw,2.1rem)] text-muted">
                  {spec.route}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {spec.tags.map((tag) => (
                  <li key={tag} className="chip-strong">
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="max-w-[30ch] text-[clamp(1.25rem,1.9vw,1.6rem)] leading-[1.15] font-bold tracking-tight text-balance">
                {knotcmsCase.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.links.knotcms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-green"
                >
                  {knotcmsCase.liveLabel}
                  <FiArrowUpRight className="size-4" aria-hidden />
                </a>
                <a
                  href={site.links.knotcmsDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-surface"
                >
                  {knotcmsCase.docsLabel}
                  <FiArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <FactGrid items={spec.facts} className="h-fit sm:grid-cols-2" />
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-line px-6 py-4 sm:px-9">
            <span className="meta-label mr-2">Stack</span>
            {knotcmsCase.stack.map((item) => (
              <span key={item} className="chip-soft">
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* Index: orientation, not navigation */}
        <nav
          data-pop
          aria-label="Case study index"
          className="border-y-2 border-border py-3.5"
        >
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {spec.index.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-mono text-[0.66rem] font-bold tracking-[0.14em] uppercase hover:text-pink"
                >
                  <span className="text-pink">{item.n}</span> {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div data-pop>
          <CaseStudyMedia
            n={shots.overview.n}
            kicker={shots.overview.kicker}
            title={shots.overview.title}
            src={shots.overview.src}
            alt={shots.overview.alt}
            aspect="2/1"
            caption={shots.overview.caption}
          />
        </div>
      </PopIn>

      {/* ---------- 01 SYSTEM ---------- */}
      <CaseSection id="system" n="01" kicker="System" title="What it does">
        <div className="flex flex-col gap-5 border border-line p-6 sm:p-8">
          <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {spec.flow.map((node, i) => (
              <Fragment key={node}>
                {i > 0 ? (
                  <li
                    aria-hidden
                    className="self-center font-mono text-[1.1rem] leading-none text-muted"
                  >
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </li>
                ) : null}
                <li
                  className={`arch-node arch-node-hub w-full sm:w-auto sm:flex-1 ${
                    i === 1 ? "arch-node-engine" : "arch-node-external"
                  }`}
                >
                  {node}
                </li>
              </Fragment>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4">
            <span className="meta-label mr-2">Supporting infrastructure</span>
            {spec.infrastructure.map((item) => (
              <span key={item} className="chip-strong">
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className={prose}>{knotcmsCase.whatItDoes}</p>

        <CaseStudyMedia
          n={shots.mapping.n}
          kicker={shots.mapping.kicker}
          title={shots.mapping.title}
          src={shots.mapping.src}
          alt={shots.mapping.alt}
          aspect="2/1"
          caption={shots.mapping.caption}
        />
      </CaseSection>

      {/* ---------- 02 ARCHITECTURE ---------- */}
      <CaseSection
        id="architecture"
        n="02"
        kicker="Architecture"
        title="Event-driven Workers"
      >
        <div className="grid gap-5 lg:grid-cols-[55fr_45fr]">
          <div className="flex flex-col gap-6 border-2 border-border bg-bg p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="meta-label text-fg">System diagram</p>
              <p className="font-mono text-[0.58rem] tracking-[0.08em] text-muted uppercase">
                Event-driven · Cloudflare
              </p>
            </div>
            <KnotcmsArchitecture />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[1.15rem] leading-[1.5] font-medium">
              {spec.architectureLine}
            </p>
            <FactGrid items={spec.summary} className="sm:grid-cols-2" />
          </div>
        </div>
      </CaseSection>

      {/* ---------- 03 CONSTRAINT ---------- */}
      <CaseSection
        id="constraint"
        n="03"
        kicker="Constraint"
        title="What the system had to handle"
      >
        <ul className="flex flex-wrap gap-2">
          {spec.constraintLabels.map((label) => (
            <li key={label} className="chip-strong">
              {label}
            </li>
          ))}
        </ul>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <p className="max-w-[40ch] text-[1.35rem] leading-[1.25] font-bold tracking-tight text-balance">
              {knotcmsCase.constraint.lede}
            </p>
            <p className={prose}>{knotcmsCase.constraint.body}</p>
          </div>
          <aside className="flex h-fit flex-col gap-4 border-2 border-border p-6 sm:p-7">
            <p className="meta-label text-fg">{spec.whyWorkersLabel}</p>
            <p className="text-[0.98rem] leading-[1.7]">
              {knotcmsCase.constraint.why}
            </p>
          </aside>
        </div>
      </CaseSection>

      {/* ---------- 04 FAILURE ---------- */}
      <CaseSection id="failure" n="04" kicker="Failure" title="Where it broke">
        <div className="tile tile-surface flex flex-col">
          <div className="grid items-end gap-x-10 gap-y-4 p-6 sm:p-9 lg:grid-cols-[auto_1fr]">
            <p className="display text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.88] text-pink">
              {spec.failure.headline}
            </p>
            <p className="display max-w-[16ch] text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.02] text-balance">
              {spec.failure.sub}
            </p>
          </div>
          <div className="border-t-2 border-border p-5 sm:p-7">
            <StepPanel steps={spec.failure.sequence} columns={3} sentence />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className={prose}>{knotcmsCase.whereItBroke.body}</p>
          <p className={prose}>{knotcmsCase.whereItBroke.seen}</p>
        </div>
      </CaseSection>

      {/* ---------- 05 FIX ---------- */}
      <CaseSection id="fix" n="05" kicker="Fix" title="The fix">
        <div className="grid gap-5 md:grid-cols-2">
          <Chain label="Before" nodes={spec.before} />
          <Chain label="After" nodes={spec.after} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="meta-label text-fg">Engineering decision</p>
          <StepPanel steps={spec.decision} columns={4} outcomeLast />
        </div>

        <p className={prose}>{knotcmsCase.theFix.body}</p>

        <div className="flex flex-col border-t border-line">
          {knotcmsCase.theFix.subsections.map((sub, i) => (
            <div
              key={sub.title}
              className="grid gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-[6rem_1fr]"
            >
              <p className="font-mono text-[0.7rem] font-bold tracking-[0.1em] text-pink">
                05.{i + 1}
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="display text-[clamp(1.35rem,2vw,1.7rem)] leading-[1.05]">
                  {sub.title}
                </h3>
                {sub.paragraphs.map((text, j) => (
                  <p key={j} className={prose}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CaseStudyMedia
          n={shots.queue.n}
          kicker={shots.queue.kicker}
          title={shots.queue.title}
          src={shots.queue.src}
          alt={shots.queue.alt}
          aspect="16/9"
          caption={shots.queue.caption}
        />
      </CaseSection>

      {/* ---------- 06 PRODUCTION ---------- */}
      <CaseSection
        id="production"
        n="06"
        kicker="Production"
        title="Where it stands now"
      >
        <FactGrid items={spec.production} className="sm:grid-cols-2 lg:grid-cols-4 lg:[&>div:nth-child(n+2)]:border-t-0 lg:[&>div:nth-child(n+2)]:border-l" />

        <div className="tile tile-surface overflow-x-auto p-6 sm:p-8">
          <table className="w-full border-collapse font-mono text-[0.95rem]">
            <thead>
              <tr className="border-b-2 border-border">
                {knotcmsCase.numbers.columns.map((col, i) => (
                  <th
                    key={col || `col-${i}`}
                    scope="col"
                    className="py-3 pr-6 text-left text-[0.62rem] font-bold tracking-[0.14em] text-muted uppercase"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {knotcmsCase.numbers.rows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-b-0">
                  <th
                    scope="row"
                    className="py-5 pr-6 text-left font-sans text-[1.05rem] font-bold tracking-tight"
                  >
                    {row.label}
                  </th>
                  <td className="py-5 pr-6 text-[1.15rem] font-bold">
                    {row.testedUpTo}
                  </td>
                  <td className="py-5 text-[1.15rem] font-bold">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="max-w-[70ch] text-[0.98rem] leading-[1.7] text-muted">
          {knotcmsCase.numbers.note}
        </p>
      </CaseSection>

      {/* ---------- 07 REAL USAGE ---------- */}
      <CaseSection
        id="real-usage"
        n="07"
        kicker="Real usage"
        title="The first user"
        meta={spec.firstUserSequence.join(" → ")}
      >
        <div className="flex flex-col border-t border-line">
          {knotcmsCase.firstUser.paragraphs.map((text, i) => (
            <div
              key={i}
              className="grid gap-x-10 gap-y-2 border-b border-line py-6 md:grid-cols-[9.5rem_1fr]"
            >
              <p className="meta-label pt-1.5 text-fg">
                <span className="text-pink">{String(i + 1).padStart(2, "0")}</span>{" "}
                {spec.firstUserSequence[i] ?? ""}
              </p>
              <p className={prose}>{text}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* ---------- 08 JUDGMENT ---------- */}
      <CaseSection
        id="judgment"
        n="08"
        kicker="Judgment"
        title="What I'd do differently"
        meta="Engineering retrospective"
      >
        <div className="flex flex-col border-t border-line">
          {knotcmsCase.differently.points.map((point, i) => (
            <div
              key={point.title}
              className="grid gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-[6rem_1fr_1.3fr] md:py-10"
            >
              <p className="display text-[2rem] leading-none text-pink md:text-[2.4rem]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="display max-w-[20ch] text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.05] text-balance">
                {point.title}
              </h3>
              <p className="max-w-[62ch] text-[1rem] leading-[1.7] text-muted">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* ---------- Close ---------- */}
      <PopIn>
        <div
          data-pop
          className="flex flex-wrap items-center justify-between gap-5 border-t-2 border-border pt-7"
        >
          <p className="max-w-[44ch] text-[1.05rem] leading-relaxed text-muted">
            {knotcmsCase.closeLine}
          </p>
          <Link href="/#contact" className="btn-brutal btn-green">
            Start a conversation
            <FiArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </PopIn>
    </main>
  );
}
