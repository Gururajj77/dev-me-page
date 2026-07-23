import { skillGroups } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

const titleColor = {
  yellow: "text-yellow",
  pink: "text-pink",
  green: "text-green",
  blue: "text-blue",
} as const;

export function Skills() {
  return (
    <section id="skills" className="shell py-10 md:py-14">
      <p className="section-label mb-5 text-yellow">03 / Skills</p>

      <PopIn className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
        {skillGroups.map((group) => (
          <div
            key={group.group}
            data-pop
            className="tile tile-surface tile-lift tile-lift-white p-5"
          >
            <h3 className={`section-label mb-4 ${titleColor[group.accent]}`}>
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PopIn>
    </section>
  );
}
