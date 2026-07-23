import { experience } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

const bar = {
  green: "bg-green",
  blue: "bg-blue",
  yellow: "bg-yellow",
} as const;

export function Experience() {
  return (
    <section id="experience" className="shell py-10 md:py-14">
      <p className="section-label mb-5 text-pink">02 / Experience</p>

      <PopIn>
        <ul data-pop className="tile tile-surface overflow-hidden">
          {experience.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className={`grid gap-3 p-5 md:grid-cols-[11rem_1fr] md:gap-8 md:p-6 ${
                index > 0 ? "border-t-2 border-border" : ""
              }`}
            >
              <div className="flex gap-3 md:block">
                <span
                  className={`mt-1 block h-auto w-1 shrink-0 self-stretch md:hidden ${bar[item.accent]}`}
                  aria-hidden
                />
                <p className="font-mono text-[0.7rem] text-muted uppercase md:pt-1">
                  {item.period}
                </p>
              </div>
              <div className="relative md:pl-4">
                <span
                  className={`absolute top-0 left-0 hidden h-full w-1 md:block ${bar[item.accent]}`}
                  aria-hidden
                />
                <h3 className="display text-xl md:text-2xl">{item.role}</h3>
                <p className="mt-1 font-mono text-xs font-bold tracking-wide text-muted uppercase">
                  {item.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </PopIn>
    </section>
  );
}
