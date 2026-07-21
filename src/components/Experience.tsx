import { experience } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

const fills = ["bg-sun", "bg-white", "bg-ice"];

export function Experience() {
  return (
    <SectionReveal
      id="experience"
      ariaLabelledBy="experience-heading"
      className="section-gap"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-ink text-paper">03</span>
        <h2
          id="experience-heading"
          className="display text-[clamp(2rem,5vw,3rem)]"
        >
          Work stamps
        </h2>
      </div>

      <ul className="space-y-5">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${item.period}`}
            className={`slab relative p-5 md:p-6 ${fills[index % fills.length]} ${
              index % 2 === 0 ? "offset-1" : "offset-2"
            }`}
          >
            <span className="stamp absolute -top-3 right-4 bg-ink text-paper md:-right-3">
              {item.period}
            </span>
            <p className="text-xs font-bold tracking-widest uppercase opacity-60">
              [{String(index + 1).padStart(2, "0")}]
            </p>
            <h3 className="display mt-2 text-[clamp(1.6rem,4vw,2.6rem)]">
              {item.company}
            </h3>
            <p className="mt-2 text-sm font-bold md:text-base">{item.role}</p>
            <p className="mt-4 border-t-4 border-ink pt-4 text-[0.95rem] leading-relaxed md:text-[1.02rem]">
              {item.summary}
            </p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
