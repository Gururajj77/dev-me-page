"use client";

import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

/**
 * Fades children in (short upward travel, no scale) when the wrapper enters the
 * viewport. Targets `[data-pop]` descendants by default; pass `selector` to
 * animate a different set, e.g. architecture nodes.
 */
export function PopIn({
  children,
  className,
  stagger = 0.06,
  selector = "[data-pop]",
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  selector?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const items = el.querySelectorAll<HTMLElement>(selector);
      const targets = items.length ? items : [el];

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger,
          clearProps: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [selector, stagger, y] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
