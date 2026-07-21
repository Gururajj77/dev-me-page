"use client";

import { useRef } from "react";
import { hero, site } from "@/lib/content";
import { gsap, prefersReducedMotion, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const items = root.querySelectorAll("[data-hero-item]");

      if (prefersReducedMotion()) {
        gsap.set(items, { autoAlpha: 1, y: 0, rotate: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 36, rotate: () => gsap.utils.random(-4, 4) },
        {
          autoAlpha: 1,
          y: 0,
          rotate: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "back.out(1.7)",
        },
      );

      const mark = markRef.current;
      if (!mark) return;

      const onMove = (e: PointerEvent) => {
        const r = mark.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(mark, {
          x: x * 14,
          y: y * 14,
          rotate: x * 6,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      const onLeave = () => {
        gsap.to(mark, { x: 0, y: 0, rotate: -3, duration: 0.5, ease: "power3.out" });
      };

      mark.addEventListener("pointermove", onMove);
      mark.addEventListener("pointerleave", onLeave);
      return () => {
        mark.removeEventListener("pointermove", onMove);
        mark.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: ref },
  );

  return (
    <header ref={ref} id="intro" className="relative pt-4 md:pt-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <span data-hero-item className="stamp bg-hot text-white offset-3">
          {site.location}
        </span>
        <span data-hero-item className="stamp bg-ice offset-2">
          {site.status}
        </span>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_200px]">
        <div>
          <p data-hero-item className="mb-3 text-xs font-bold tracking-[0.2em] uppercase">
            ★ Hello I&apos;m
          </p>
          <h1
            data-hero-item
            className="display text-[clamp(3.25rem,14vw,8.5rem)]"
          >
            Guru
            <br />
            raj<span className="text-hot">*</span>
          </h1>
          <div data-hero-item className="slab relative mt-7 max-w-xl bg-white p-4 md:p-5">
            <span className="stamp absolute -top-3 right-2 bg-sun sm:-right-2">
              No template
            </span>
            <p className="text-[0.98rem] leading-snug md:text-[1.08rem]">
              <strong>FRONTEND ENGINEER.</strong> {hero.role}
            </p>
          </div>

          <div data-hero-item className="mt-7 flex flex-wrap gap-3">
            <a href={site.links.resume} className="btn btn-ink">
              Download CV
            </a>
            <a href="#contact" className="btn btn-hot">
              Contact
            </a>
            <a href="#projects" className="btn">
              See Work →
            </a>
          </div>

          <dl
            data-hero-item
            className="mt-8 grid gap-2 sm:grid-cols-3"
          >
            <div className="slab-sm bg-sun p-3">
              <dt className="text-[0.65rem] font-bold uppercase">Site</dt>
              <dd className="mt-1 break-all text-sm font-bold">
                <a href={site.links.knotcms} className="underline">
                  knotcms.com
                </a>
              </dd>
            </div>
            <div className="slab-sm bg-hot p-3 text-white">
              <dt className="text-[0.65rem] font-bold uppercase">Phone</dt>
              <dd className="mt-1 text-sm font-bold">
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div className="slab-sm bg-ice p-3">
              <dt className="text-[0.65rem] font-bold uppercase">Mail</dt>
              <dd className="mt-1 break-all text-sm font-bold">
                <a href={site.links.email}>{site.email}</a>
              </dd>
            </div>
          </dl>
        </div>

        <div data-hero-item className="justify-self-start lg:justify-self-end lg:pt-10">
          <div
            ref={markRef}
            className="slab grid size-[160px] place-items-center bg-ink text-paper offset-1 sm:size-[180px]"
            style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
            aria-hidden="true"
          >
            <div className="text-center">
              <p className="display text-5xl text-sun sm:text-6xl">GJ</p>
              <p className="mt-2 text-[0.65rem] font-bold tracking-widest text-ice uppercase">
                est. 2021
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-[11rem] text-[0.7rem] font-bold uppercase opacity-70">
            * hover the block — it moves
          </p>
        </div>
      </div>
    </header>
  );
}
