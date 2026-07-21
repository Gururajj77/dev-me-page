import { projects } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Projects() {
  return (
    <SectionReveal
      id="projects"
      ariaLabelledBy="projects-heading"
      className="section-gap"
    >
      <div className="saw mb-8" aria-hidden="true" />

      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-hot text-white">04</span>
        <h2
          id="projects-heading"
          className="display text-[clamp(2rem,5vw,3rem)]"
        >
          Selected hits
        </h2>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((item, index) => (
          <li key={item.title} className={index === 1 ? "md:mt-10" : ""}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
                className={`slab group block overflow-hidden transition-[transform,box-shadow] duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-ink)] ${
                index % 2 === 0 ? "bg-ink text-paper" : "bg-hot text-white"
              }`}
            >
              <div
                className={`border-b-4 border-ink p-5 ${
                  index % 2 === 0 ? "bg-sun text-ink" : "bg-ice text-ink"
                }`}
              >
                <p className="display text-5xl md:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="display text-[clamp(1.5rem,3.5vw,2.1rem)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed opacity-90">
                  {item.description}
                </p>
                <p className="mt-5 text-sm font-extrabold tracking-wide uppercase group-hover:underline">
                  Open project →
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
