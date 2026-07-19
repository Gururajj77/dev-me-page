import { principles } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Principles() {
  return (
    <SectionReveal
      id="principles"
      ariaLabelledBy="principles-heading"
      className="editorial section-block py-20 sm:py-28 md:py-36"
    >
      <p className="eyebrow-rule section-label mb-8 sm:mb-10">Principles</p>
      <h2 id="principles-heading" className="sr-only">
        Principles
      </h2>

      <ul className="max-w-4xl space-y-5 sm:space-y-6 md:space-y-8">
        {principles.map((line, index) => (
          <li
            key={line}
            className="grid grid-cols-[2rem_1fr] items-baseline gap-3 sm:grid-cols-[2.5rem_1fr] sm:gap-4 md:grid-cols-[3.25rem_1fr] md:gap-6"
          >
            <span
              className="font-mono text-[0.6875rem] tracking-wider text-faint tabular-nums sm:text-[0.75rem] md:text-[0.8125rem]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[clamp(1.35rem,5vw,2.85rem)] leading-[1.2] font-medium tracking-[-0.035em] text-fg">
              {line}
            </span>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
