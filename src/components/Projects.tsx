import { projects } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { TextLink } from "@/components/TextLink";

export function Projects() {
  return (
    <SectionReveal
      id="projects"
      ariaLabelledBy="projects-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">Projects</p>
      <h2
        id="projects-heading"
        className="text-[clamp(1.65rem,3.5vw,2.15rem)] font-medium tracking-[-0.03em] text-fg"
      >
        Selected work.
      </h2>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {projects.map((item) => (
          <li key={item.title} className="py-8 sm:py-9">
            <h3 className="text-[1.25rem] font-medium tracking-[-0.02em] text-fg sm:text-[1.4rem]">
              <TextLink href={item.href} className="text-fg">
                {item.title}
              </TextLink>
            </h3>
            <p className="mt-3 max-w-2xl text-[1.025rem] leading-[1.7] text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
