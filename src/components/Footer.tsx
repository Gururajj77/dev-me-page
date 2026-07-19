import { footerLinks, site } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { TextLink } from "@/components/TextLink";

export function Footer() {
  return (
    <SectionReveal as="footer" className="editorial py-16 sm:py-20 md:py-24">
      <div className="flex flex-col gap-8 border-t border-border-strong pt-8 sm:gap-10 sm:pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[1.125rem] font-medium tracking-[-0.02em] text-fg sm:text-[1.25rem]">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-faint">{site.location}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <TextLink
                  href={link.href}
                  className="text-[0.9375rem] text-muted transition-colors duration-300 hover:text-fg sm:text-[0.975rem]"
                >
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SectionReveal>
  );
}
