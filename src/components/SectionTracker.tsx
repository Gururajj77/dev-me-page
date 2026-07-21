"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { sectionNav } from "@/lib/content";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";

registerGsap();

export function SectionTracker() {
  const [active, setActive] = useState<string>(sectionNav[0].id);
  const [visible, setVisible] = useState(false);
  const markerRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const syncActive = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current: (typeof sectionNav)[number]["id"] = sectionNav[0].id;

    for (const item of sectionNav) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) current = item.id;
    }

    setActive(current);
    setVisible(window.scrollY > 48);
  }, []);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncActive);
    };

    syncActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [syncActive]);

  useEffect(() => {
    const marker = markerRef.current;
    const index = sectionNav.findIndex((item) => item.id === active);
    const target = itemRefs.current[index];
    if (!marker || !target) return;

    const y = target.offsetTop + target.offsetHeight / 2 - 3;

    if (prefersReducedMotion()) {
      gsap.set(marker, { y });
      return;
    }

    gsap.to(marker, {
      y,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }, [active, visible]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="On this page"
      className={`section-tracker fixed top-1/2 right-3 z-[60] -translate-y-1/2 transition-opacity duration-500 sm:right-5 md:right-6 lg:right-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative flex items-stretch gap-3 sm:gap-3.5">
        <ul className="flex flex-col justify-between gap-3 py-0.5 sm:gap-3.5">
          {sectionNav.map((item, index) => {
            const isActive = active === item.id;

            return (
              <li
                key={item.id}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
              >
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block text-right text-[0.75rem] leading-none tracking-[-0.01em] transition-colors duration-200 sm:text-[0.8125rem] ${
                    isActive
                      ? "text-fg"
                      : "text-faint/50 hover:text-muted"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div
          aria-hidden="true"
          className="relative w-px self-stretch bg-border"
        >
          <span
            ref={markerRef}
            className="absolute top-0 left-1/2 block size-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_3px_rgb(10_10_10),0_0_12px_rgb(94_139_255_/_0.35)]"
          />
        </div>
      </div>
    </nav>
  );
}
