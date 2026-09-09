import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { knotcmsCase, site } from "@/lib/content";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display text-[clamp(1.5rem,3.5vw,1.9rem)]">{children}</h2>
  );
}

export default function KnotCmsCaseStudyPage() {
  return (
    <main className="shell flex flex-col gap-5 py-5 md:gap-6 md:py-7">
      <Link
        href="/"
        className="font-mono text-[0.7rem] tracking-[0.1em] text-muted uppercase hover:text-fg"
      >
        ← {site.brand}
      </Link>

      <PopIn>
        <div
          data-pop
          className="tile tile-surface tile-lift flex flex-col gap-6 p-7 sm:p-9 md:p-10"
        >
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[0.7rem] tracking-[0.16em] text-pink uppercase">
              {knotcmsCase.eyebrow}
            </p>
            <h1 className="display text-[clamp(2.4rem,6vw,4rem)]">
              {knotcmsCase.title}
            </h1>
            <p className="max-w-[42ch] text-[1.2rem] leading-snug font-semibold tracking-tight">
              {knotcmsCase.tagline}
            </p>
            <p className="font-mono text-[0.72rem] text-muted">
              {knotcmsCase.meta}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {knotcmsCase.stack.map((item) => (
              <span key={item} className="chip-soft">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.links.knotcms}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-surface"
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

          <CaseStudyMedia
            src="/work/knotcms/knotcms-framer-collection.png"
            alt="The resulting Framer CMS collection, populated from Notion."
            aspect="16/10"
          />
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>What it does</SectionHeading>
          <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
            {knotcmsCase.whatItDoes}
          </p>
          <CaseStudyMedia
            src="/work/knotcms/knotcms-mapping.png"
            alt="The field mapping screen in the dashboard, a Notion database on the left, Framer fields on the right, a few fields mapped."
            aspect="16/10"
          />
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>The constraint</SectionHeading>
          <p className="max-w-[70ch] text-[1.05rem] leading-snug font-semibold">
            {knotcmsCase.constraint.lede}
          </p>
          <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
            {knotcmsCase.constraint.body}
          </p>
          <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
            {knotcmsCase.constraint.why}
          </p>
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="tile tile-surface tile-lift flex flex-col gap-5 p-7 sm:p-9 md:p-10"
        >
          <SectionHeading>Where it broke</SectionHeading>
          <p className="max-w-[70ch] text-[1.05rem] leading-relaxed">
            {knotcmsCase.whereItBroke.body}
          </p>
          <p className="max-w-[70ch] text-[1.05rem] leading-relaxed">
            {knotcmsCase.whereItBroke.seen}
          </p>
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>The fix</SectionHeading>
          <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
            {knotcmsCase.theFix.body}
          </p>
          {knotcmsCase.theFix.subsections.map((sub) => (
            <div key={sub.title} className="flex flex-col gap-4">
              <h3 className="max-w-[70ch] text-[1.05rem] leading-snug font-semibold">
                {sub.title}
              </h3>
              {sub.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="max-w-[70ch] text-[1.02rem] leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>Where it stands now</SectionHeading>
          <div className="max-w-[70ch] overflow-x-auto">
            <table className="w-full border-collapse font-mono text-[0.85rem]">
              <thead>
                <tr className="border-b-2 border-border">
                  {knotcmsCase.numbers.columns.map((col, i) => (
                    <th
                      key={col || `col-${i}`}
                      scope="col"
                      className="py-2.5 pr-4 text-left text-[0.68rem] tracking-wide text-muted uppercase"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {knotcmsCase.numbers.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left font-bold"
                    >
                      {row.label}
                    </th>
                    <td className="py-3 pr-4 text-muted">
                      {row.testedUpTo}
                    </td>
                    <td className="py-3 text-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="max-w-[70ch] text-[0.95rem] leading-relaxed text-muted">
            {knotcmsCase.numbers.note}
          </p>
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>The first user</SectionHeading>
          {knotcmsCase.firstUser.paragraphs.map((text, i) => (
            <p key={i} className="max-w-[70ch] text-[1.02rem] leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-col gap-5 border border-line p-7 sm:p-8"
        >
          <SectionHeading>What I&apos;d do differently</SectionHeading>
          {knotcmsCase.differently.points.map((point) => (
            <div key={point.title} className="flex flex-col gap-2">
              <h3 className="max-w-[70ch] text-[1.05rem] leading-snug font-semibold">
                {point.title}
              </h3>
              <p className="max-w-[70ch] text-[1.02rem] leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </PopIn>

      <PopIn>
        <div
          data-pop
          className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6"
        >
          <p className="max-w-[50ch] text-[1rem] leading-relaxed text-muted">
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
