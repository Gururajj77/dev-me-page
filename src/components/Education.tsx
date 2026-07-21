import { education } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Education() {
  return (
    <SectionReveal
      id="education"
      ariaLabelledBy="education-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">Education</p>
      <h2 id="education-heading" className="sr-only">
        Education
      </h2>

      <ul className="divide-y divide-border border-y border-border">
        {education.map((item) => (
          <li
            key={item.school}
            className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-9"
          >
            <div>
              <h3 className="text-[1.2rem] font-medium tracking-[-0.02em] text-fg sm:text-[1.35rem]">
                {item.school}
              </h3>
              <p className="mt-2 text-[0.975rem] text-muted">{item.detail}</p>
            </div>
            <p className="shrink-0 font-mono text-[0.8125rem] tracking-wide text-faint">
              {item.period}
            </p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
