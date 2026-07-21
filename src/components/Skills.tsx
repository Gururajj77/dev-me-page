import { skillGroups } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { SkillIcon } from "@/components/SkillIcon";

const groupLabel: Record<string, string> = {
  Frontend: "Frontend",
  "Platform & Infrastructure": "Platform",
  "Developer Experience": "DX",
  Tools: "Tools",
};

export function Skills() {
  return (
    <SectionReveal
      id="skills"
      ariaLabelledBy="skills-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-4">Skills</p>
      <h2
        id="skills-heading"
        className="text-[clamp(1.65rem,3.5vw,2.15rem)] font-medium tracking-[-0.03em] text-fg"
      >
        Toolkit.
      </h2>

      <div className="mt-7 space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.group}
            className="grid items-start gap-2 sm:grid-cols-[5.5rem_1fr] sm:gap-5"
          >
            <h3 className="pt-1.5 text-[0.6875rem] tracking-[0.14em] text-faint uppercase">
              {groupLabel[group.group] ?? group.group}
            </h3>
            <ul className="flex flex-wrap gap-1.5" aria-label={group.group}>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="inline-flex items-center gap-1.5 border border-border py-1 pr-2 pl-1.5 text-[0.75rem] leading-none text-muted transition-colors hover:border-border-strong hover:text-fg sm:text-[0.8125rem]">
                    <SkillIcon
                      id={item.icon}
                      className="size-3.5 shrink-0 opacity-75"
                    />
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
