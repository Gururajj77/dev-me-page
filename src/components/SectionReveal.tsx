"use client";

import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer";
  id?: string;
  ariaLabelledBy?: string;
};

export function SectionReveal({
  children,
  className,
  as: Tag = "section",
  id,
  ariaLabelledBy,
}: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref as never}
      id={id}
      aria-labelledby={ariaLabelledBy}
      data-reveal
      className={className}
    >
      {children}
    </Tag>
  );
}
