import { outside } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function OutsideWork() {
  return (
    <SectionReveal
      id="outside"
      ariaLabelledBy="outside-heading"
      className="editorial section-block py-20 sm:py-28 md:py-36"
    >
      <p className="eyebrow-rule section-label mb-6 sm:mb-8">Outside work</p>
      <h2
        id="outside-heading"
        className="max-w-3xl text-[clamp(1.85rem,5.5vw,2.95rem)] leading-[1.12] font-medium tracking-[-0.035em] text-fg"
      >
        Where curiosity goes.
      </h2>

      <ul className="mt-12 grid gap-10 border-t border-border pt-10 sm:mt-16 sm:gap-12 sm:pt-12 md:grid-cols-3 md:gap-12">
        {outside.map((item, index) => (
          <li key={item.title} className="min-w-0">
            <p className="font-mono text-[0.75rem] tracking-wider text-faint tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-[1.075rem] font-medium tracking-[-0.015em] text-fg sm:mt-4 sm:text-[1.125rem] md:text-[1.2rem]">
              {item.title}
            </h3>
            <p className="mt-3 text-[1.025rem] leading-[1.7] text-muted sm:mt-4 sm:text-[1.0625rem]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
