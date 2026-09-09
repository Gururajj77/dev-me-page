"use client";

import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { contact, site } from "@/lib/content";
import { PopIn } from "@/components/PopIn";
import { SectionHead } from "@/components/SectionHead";

/* Ink stays dark on the green panel in both themes. */
const ink = "#111111";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex scroll-mt-6 flex-col gap-7"
    >
      <SectionHead as="p" index="04" kicker="Contact" />

      <PopIn>
        <div
          data-pop
          className="tile grid gap-10 bg-green p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:p-12"
          style={{ color: ink, borderColor: ink }}
        >
          <div className="flex flex-col gap-8">
            <h2
              id="contact-heading"
              className="display text-[clamp(2.25rem,5vw,3.6rem)] leading-[0.96]"
            >
              {contact.headingLines[0]}
              <br />
              {contact.headingLines[1]}
            </h2>

            <ol
              className="flex flex-col border-t-2"
              style={{ borderColor: ink }}
            >
              {contact.steps.map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[2.75rem_1fr] gap-4 border-b py-5 border-[#111111]/25"
                >
                  <span
                    className="inline-flex h-fit w-fit px-1.5 py-0.5 font-mono text-[0.68rem] font-bold text-pink"
                    style={{ background: ink }}
                  >
                    {step.n}
                  </span>
                  <p className="text-[1.05rem] leading-[1.6]">
                    <strong className="font-bold">{step.label}</strong>{" "}
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-3">
            <a
              href={site.links.email}
              className="group flex min-w-0 items-center justify-between gap-4 border-2 bg-[#f8f6ef] px-6 py-6 text-[#111111] transition-colors hover:bg-[#111111] hover:text-green"
              style={{ borderColor: ink }}
            >
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase opacity-70">
                  {contact.emailLabel}
                </span>
                <span className="truncate text-[1.2rem] font-bold tracking-tight">
                  jdotgururaj@gmail.com
                </span>
              </span>
              <FiArrowRight
                className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-2 px-4 py-4 text-[0.95rem] font-bold transition-colors hover:bg-[#111111] hover:text-green"
                style={{ borderColor: ink }}
              >
                GitHub <FiArrowUpRight className="size-4" aria-hidden />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-2 px-4 py-4 text-[0.95rem] font-bold transition-colors hover:bg-[#111111] hover:text-green"
                style={{ borderColor: ink }}
              >
                LinkedIn <FiArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </PopIn>
    </section>
  );
}
