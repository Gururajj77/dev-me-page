"use client";

import { useRef } from "react";
import { hero, site } from "@/lib/content";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";
import { TextLink } from "@/components/TextLink";

registerGsap();

export function ProfilePanel() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const items = root.querySelectorAll("[data-hero-item]");

      if (prefersReducedMotion()) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.05,
        },
      );
    },
    { scope: ref },
  );

  return (
    <aside
      ref={ref}
      id="intro"
      className="lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:py-16"
    >
      <div className="max-w-md">
        <div
          data-hero-item
          className="mb-8 flex size-20 items-center justify-center rounded-full border border-border bg-surface text-[1.35rem] font-medium tracking-[-0.04em] text-fg sm:size-24 sm:text-[1.5rem]"
          aria-hidden="true"
        >
          GJ
        </div>

        <p data-hero-item className="eyebrow-rule section-label mb-5">
          {site.location}
        </p>

        <h1
          data-hero-item
          className="text-[clamp(2.35rem,5vw,3.35rem)] leading-[1.05] font-medium tracking-[-0.04em] text-fg"
        >
          {hero.greeting}
        </h1>

        <p
          data-hero-item
          className="mt-5 text-[1.05rem] leading-relaxed text-muted sm:text-[1.125rem]"
        >
          {hero.role}
        </p>

        <p
          data-hero-item
          className="mt-5 inline-flex items-center gap-2 text-sm text-fg"
        >
          <span
            className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgb(94_139_255_/_0.2)]"
            aria-hidden="true"
          />
          {site.status}
        </p>

        <dl
          data-hero-item
          className="mt-10 space-y-4 border-t border-border pt-8 text-[0.975rem]"
        >
          <div>
            <dt className="sr-only">Website</dt>
            <dd>
              <TextLink
                href={site.links.knotcms}
                className="text-muted transition-colors hover:text-fg"
              >
                knotcms.com
              </TextLink>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Phone</dt>
            <dd>
              <a
                href={site.phoneHref}
                className="text-muted transition-colors hover:text-fg"
              >
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Email</dt>
            <dd>
              <TextLink
                href={site.links.email}
                className="text-muted transition-colors hover:text-fg"
              >
                {site.email}
              </TextLink>
            </dd>
          </div>
        </dl>

        <div data-hero-item className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.links.resume}
            className="inline-flex items-center justify-center border border-border-strong bg-fg px-5 py-2.5 text-sm font-medium tracking-[-0.01em] text-bg transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-border-strong px-5 py-2.5 text-sm font-medium tracking-[-0.01em] text-fg transition-colors hover:border-muted hover:text-fg"
          >
            Contact me
          </a>
        </div>
      </div>
    </aside>
  );
}
