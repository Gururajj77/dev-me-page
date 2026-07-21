import { linkItems } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { TextLink } from "@/components/TextLink";

export function Links() {
  return (
    <SectionReveal
      id="links"
      ariaLabelledBy="links-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">Links</p>
      <h2 id="links-heading" className="sr-only">
        Links
      </h2>

      <ul className="flex flex-wrap gap-x-8 gap-y-4">
        {linkItems.map((item) => (
          <li key={item.label}>
            <TextLink
              href={item.href}
              className="text-[1.05rem] text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
