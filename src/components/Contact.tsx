"use client";

import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { contact, site } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

export function Contact() {
  return (
    <PopIn>
      <div
        data-pop
        id="contact"
        className="tile bg-green grid gap-8 p-8 text-[var(--on-accent)] sm:p-10 md:grid-cols-[1.1fr_1fr]"
      >
        <div className="flex flex-col gap-5">
          <h2 className="display text-[clamp(2rem,5.5vw,3rem)] leading-[0.98]">
            {contact.headingLines[0]}
            <br />
            {contact.headingLines[1]}
          </h2>
          <div className="flex flex-col gap-3.5 text-[1.02rem] leading-relaxed">
            {contact.steps.map((step) => (
              <div key={step.n} className="flex gap-3">
                <span className="pt-0.5 font-mono text-[0.72rem] font-bold">
                  {step.n}
                </span>
                <div>
                  <strong className="font-bold">{step.label}</strong>{" "}
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <a
            href={site.links.email}
            className="flex items-center justify-between gap-4 border-2 border-[#14120f] bg-[#fffdf8] px-6 py-5 text-[#14120f] shadow-[5px_5px_0_#14120f] transition-transform hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#14120f]"
          >
            <span className="flex flex-col gap-1">
              <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase opacity-60">
                {contact.emailLabel}
              </span>
              <span className="text-[1.15rem] font-bold tracking-tight">
                jdotgururaj@gmail.com
              </span>
            </span>
            <FiArrowRight className="size-5 shrink-0" aria-hidden />
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border-2 border-[#14120f] px-4 py-3.5 text-[0.95rem] font-bold text-[#14120f] transition-colors hover:bg-[#14120f] hover:text-green"
            >
              GitHub <FiGithub className="size-4" aria-hidden />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border-2 border-[#14120f] px-4 py-3.5 text-[0.95rem] font-bold text-[#14120f] transition-colors hover:bg-[#14120f] hover:text-green"
            >
              LinkedIn <FiLinkedin className="size-4" aria-hidden />
            </a>
          </div>

          <p className="pt-1 font-mono text-[0.68rem] leading-relaxed">
            {contact.notLookingFor}
          </p>
        </div>
      </div>
    </PopIn>
  );
}
