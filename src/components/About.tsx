import { about } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function About() {
  return (
    <SectionReveal
      id="about"
      ariaLabelledBy="about-heading"
      className="section-gap"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-ink text-paper">01</span>
        <span className="text-xs font-bold tracking-[0.18em] uppercase">
          About
        </span>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="slab absolute inset-2 bg-hot opacity-90"
        />
        <div className="slab relative bg-white p-5 md:p-8">
          <h2
            id="about-heading"
            className="display mb-5 text-[clamp(2.2rem,6vw,3.75rem)]"
          >
            I build the boring
            <br />
            infrastructure
            <span className="bg-sun px-1">people love</span>
            <br />
            to forget.
          </h2>
          <p className="max-w-2xl text-[1.02rem] leading-relaxed md:text-[1.1rem]">
            {about.body}
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
