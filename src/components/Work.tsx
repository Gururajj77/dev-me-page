import { FiArrowUpRight } from "react-icons/fi";
import { metrics, projects } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

const accentText = {
  green: "text-green",
  blue: "text-blue",
  yellow: "text-yellow",
  pink: "text-pink",
} as const;

const accentBg = {
  green: "bg-green",
  blue: "bg-blue",
  yellow: "bg-yellow",
  pink: "bg-pink",
} as const;

const lift = {
  green: "tile-lift-green",
  blue: "tile-lift-blue",
  yellow: "tile-lift-yellow",
  pink: "tile-lift-pink",
} as const;

export function Work() {
  return (
    <section id="work" className="shell py-10 md:py-14">
      <p className="section-label mb-5 text-green">01 / Selected work</p>

      <PopIn className="grid gap-3 md:grid-cols-2" stagger={0.08}>
        {projects.map((project) => (
          <a
            key={project.title}
            data-pop
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`tile tile-surface tile-lift ${lift[project.accent]} block p-5 md:p-6`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3
                  className={`display text-[clamp(1.5rem,4vw,2.1rem)] ${accentText[project.accent]}`}
                >
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-[0.68rem] text-muted uppercase">
                  {project.role} · {project.period}
                </p>
              </div>
              <span
                className={`grid size-9 shrink-0 place-items-center ${accentBg[project.accent]} text-[var(--on-accent)]`}
                aria-hidden
              >
                <span className="font-mono text-xs font-bold">{project.mark}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted md:text-[0.95rem]">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
            <p
              className={`mt-5 inline-flex items-center gap-1 font-mono text-[0.7rem] font-bold uppercase ${accentText[project.accent]}`}
            >
              Open project <FiArrowUpRight className="size-3.5" />
            </p>
          </a>
        ))}
      </PopIn>

      <PopIn
        className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4"
        stagger={0.06}
      >
        {metrics.map((metric) => (
          <div
            key={metric.label}
            data-pop
            className={`tile tile-lift tile-lift-white p-4 text-[var(--on-accent)] ${accentBg[metric.accent]}`}
          >
            <p className="display text-[clamp(1.8rem,5vw,2.6rem)] leading-none">
              {metric.value}
            </p>
            <p className="mt-3 font-mono text-[0.62rem] font-bold tracking-wide uppercase">
              {metric.label}
            </p>
          </div>
        ))}
      </PopIn>
    </section>
  );
}
