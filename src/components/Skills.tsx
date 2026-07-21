import { skillGroups } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { SkillIcon } from "@/components/SkillIcon";

const accents = ["bg-sun", "bg-ice", "bg-hot text-white", "bg-white"];

export function Skills() {
  return (
    <SectionReveal
      id="skills"
      ariaLabelledBy="skills-heading"
      className="section-gap"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="stamp bg-ink text-paper">02</span>
          <h2 id="skills-heading" className="display text-[clamp(2rem,5vw,3rem)]">
            Toolkit dump
          </h2>
        </div>
        <p className="max-w-[16rem] text-right text-[0.7rem] font-bold uppercase opacity-60">
          Dense on purpose. Resume, not vibes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div
            key={group.group}
            className={`slab p-4 ${accents[i % accents.length]} ${
              i % 2 === 0 ? "offset-1" : "offset-2"
            }`}
          >
            <div className="mb-3 flex items-center justify-between border-b-4 border-ink pb-2">
              <h3 className="display text-lg md:text-xl">
                {group.group === "Platform & Infrastructure"
                  ? "Platform"
                  : group.group === "Developer Experience"
                    ? "DX"
                    : group.group}
              </h3>
              <span className="text-xs font-bold">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="chip text-ink">
                    <SkillIcon id={item.icon} className="size-3.5" />
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
