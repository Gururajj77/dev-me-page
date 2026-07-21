import { education } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Education() {
  return (
    <SectionReveal
      id="education"
      ariaLabelledBy="education-heading"
      className="section-gap"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-ink text-paper">05</span>
        <h2
          id="education-heading"
          className="display text-[clamp(2rem,5vw,3rem)]"
        >
          School
        </h2>
      </div>

      {education.map((item) => (
        <div key={item.school} className="slab bg-ice p-5 offset-1 md:p-6">
          <h3 className="display text-[clamp(1.4rem,3.5vw,2.1rem)]">
            {item.school}
          </h3>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold">{item.detail}</p>
            <span className="stamp bg-white">{item.period}</span>
          </div>
        </div>
      ))}
    </SectionReveal>
  );
}
