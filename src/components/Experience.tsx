import { experience } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Experience() {
  return (
    <SectionReveal
      id="experience"
      ariaLabelledBy="experience-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">Experience</p>
      <h2
        id="experience-heading"
        className="text-[clamp(1.65rem,3.5vw,2.15rem)] font-medium tracking-[-0.03em] text-fg"
      >
        Where I&apos;ve built.
      </h2>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="py-8 sm:py-9">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <h3 className="text-[1.2rem] font-medium tracking-[-0.02em] text-fg sm:text-[1.35rem]">
                {item.company}
              </h3>
              <p className="shrink-0 font-mono text-[0.8125rem] tracking-wide text-faint tabular-nums">
                {item.period}
              </p>
            </div>
            <p className="mt-2 text-[0.975rem] text-muted">{item.role}</p>
            <p className="mt-4 max-w-2xl text-[1.025rem] leading-[1.7] text-muted">
              {item.summary}
            </p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
