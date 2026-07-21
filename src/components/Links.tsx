import { linkItems } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

const styles = ["btn-ink", "btn-hot", "btn", "btn-ice", "btn-ink"];

export function Links() {
  return (
    <SectionReveal
      id="links"
      ariaLabelledBy="links-heading"
      className="section-gap"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-ink text-paper">06</span>
        <h2 id="links-heading" className="display text-[clamp(2rem,5vw,3rem)]">
          Links
        </h2>
      </div>

      <div className="slab bg-sun p-5 md:p-6">
        <ul className="flex flex-wrap gap-3">
          {linkItems.map((item, i) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`btn ${styles[i % styles.length]}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
