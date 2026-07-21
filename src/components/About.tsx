import { about } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function About() {
  return (
    <SectionReveal
      id="about"
      ariaLabelledBy="about-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">About</p>
      <h2
        id="about-heading"
        className="text-[clamp(1.65rem,3.5vw,2.15rem)] font-medium tracking-[-0.03em] text-fg"
      >
        Systems, platforms, and craft.
      </h2>
      <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted sm:text-[1.125rem]">
        {about.body}
      </p>
    </SectionReveal>
  );
}
