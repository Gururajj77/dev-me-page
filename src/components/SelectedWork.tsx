import { craft, work } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { TextLink } from "@/components/TextLink";

export function SelectedWork() {
  return (
    <SectionReveal
      id="work"
      ariaLabelledBy="work-heading"
      className="band section-block py-20 sm:py-28 md:py-36"
    >
      <div className="editorial">
        <p className="eyebrow-rule section-label mb-6 sm:mb-8">Selected work</p>
        <h2
          id="work-heading"
          className="max-w-3xl text-[clamp(1.85rem,5.5vw,2.95rem)] leading-[1.12] font-medium tracking-[-0.035em] text-fg"
        >
          Where attention goes.
        </h2>

        <ul className="mt-12 divide-y divide-border border-y border-border sm:mt-16">
          {work.map((item) => (
            <li key={item.title} className="group py-8 sm:py-10 md:py-12">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-16">
                <div className="min-w-0">
                  <h3 className="text-[1.25rem] leading-tight font-medium tracking-[-0.025em] text-fg sm:text-[1.5rem] md:text-[1.75rem]">
                    <TextLink href={item.href} className="text-fg">
                      {item.title}
                    </TextLink>
                  </h3>
                  <p className="mt-2.5 text-sm text-faint sm:mt-3 md:text-[0.9375rem]">
                    {item.role}
                    <span className="mx-2 text-border-strong" aria-hidden="true">
                      /
                    </span>
                    {item.period}
                  </p>
                </div>
                <p className="max-w-xl text-[1.025rem] leading-[1.7] text-muted sm:text-[1.0625rem] md:text-[1.125rem]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-8 flex max-w-3xl flex-wrap items-center gap-x-0 gap-y-2 font-mono text-[0.75rem] leading-relaxed tracking-wide text-faint sm:mt-10 sm:text-[0.8125rem] md:text-[0.875rem]"
          aria-label="Tools and platforms"
        >
          {craft.map((item, index) => (
            <span key={item} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-border-strong sm:mx-2.5" aria-hidden="true">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </p>
      </div>
    </SectionReveal>
  );
}
