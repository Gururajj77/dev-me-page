import { about } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function About() {
  return (
    <SectionReveal
      id="about"
      ariaLabelledBy="about-heading"
      className="editorial section-block py-20 sm:py-28 md:py-36"
    >
      <p className="eyebrow-rule section-label mb-6 sm:mb-8">About</p>
      <h2
        id="about-heading"
        className="max-w-3xl text-[clamp(1.85rem,5.5vw,2.95rem)] leading-[1.12] font-medium tracking-[-0.035em] text-fg"
      >
        Systems, platforms, and craft.
      </h2>
      <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted sm:mt-10 sm:text-[1.125rem] md:text-[1.2rem]">
        {about.body}
      </p>
    </SectionReveal>
  );
}
