"use client";

import { useState } from "react";
import { howIWork, playground } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

type Variant = "solid" | "outline";
type Size = "sm" | "md";

export function Playground() {
  const [variant, setVariant] = useState<Variant>("solid");
  const [size, setSize] = useState<Size>("md");
  const [loading, setLoading] = useState(false);

  const sizeClasses =
    size === "md"
      ? "min-w-[188px] px-6.5 py-4 text-base"
      : "min-w-[152px] px-4.5 py-2.5 text-sm";
  const variantClasses =
    variant === "solid"
      ? "bg-green text-[var(--on-accent)]"
      : "bg-transparent text-fg";

  const code = `<Button variant="${variant}" size="${size}"${loading ? " loading" : ""}>Save changes</Button>`;

  return (
    <PopIn className="grid gap-4 md:grid-cols-[1.25fr_1fr]" stagger={0.1}>
      <div
        data-pop
        className="tile tile-surface tile-lift flex flex-col gap-6 p-7 sm:p-8"
      >
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
            {playground.eyebrow}
          </p>
          <h2 className="display text-[clamp(1.5rem,3.5vw,1.9rem)]">
            {playground.heading}
          </h2>
          <p className="max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
            {playground.sub}
          </p>
        </div>

        <div className="flex min-h-[7.5rem] items-center justify-center border border-dashed border-line bg-bg p-9">
          <button
            type="button"
            aria-busy={loading}
            className={`inline-flex items-center justify-center gap-2.5 border-2 border-border font-semibold tracking-tight shadow-[3px_3px_0_var(--border)] transition-opacity ${sizeClasses} ${variantClasses} ${loading ? "cursor-progress opacity-70" : "cursor-pointer"}`}
          >
            {loading ? "Saving…" : playground.label}
          </button>
        </div>

        <div className="flex flex-wrap gap-7">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
              variant
            </p>
            <div className="seg-group">
              <button
                type="button"
                className="seg-btn"
                data-active={variant === "solid"}
                onClick={() => setVariant("solid")}
              >
                solid
              </button>
              <button
                type="button"
                className="seg-btn"
                data-active={variant === "outline"}
                onClick={() => setVariant("outline")}
              >
                outline
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
              size
            </p>
            <div className="seg-group">
              <button
                type="button"
                className="seg-btn"
                data-active={size === "sm"}
                onClick={() => setSize("sm")}
              >
                sm
              </button>
              <button
                type="button"
                className="seg-btn"
                data-active={size === "md"}
                onClick={() => setSize("md")}
              >
                md
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
              loading
            </p>
            <button
              type="button"
              aria-pressed={loading}
              onClick={() => setLoading((v) => !v)}
              className={`border-2 border-border px-3 py-1.5 font-mono text-[0.65rem] font-bold tracking-wide uppercase transition-colors ${loading ? "bg-border text-bg" : "text-muted hover:text-fg"}`}
            >
              {loading ? "on" : "off"}
            </button>
          </div>
        </div>

        <p className="border-t border-line pt-4 font-mono text-[0.72rem] leading-relaxed text-muted">
          {code}
        </p>
      </div>

      <div data-pop className="flex flex-col border border-line">
        <div className="flex items-center justify-between px-7 py-5 sm:px-8">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
            {howIWork.eyebrow}
          </p>
          <p className="font-mono text-[0.7rem] text-muted">{howIWork.meta}</p>
        </div>
        {howIWork.principles.map((principle, i) => (
          <div
            key={principle.title}
            className="grid grid-cols-[2.75rem_1fr] gap-5 border-t border-line px-7 py-7 sm:px-8"
          >
            <span className="font-mono text-[1.05rem] text-pink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-[1.15rem] font-bold tracking-tight">
                {principle.title}
              </p>
              <p className="max-w-[46ch] text-[0.92rem] leading-relaxed text-muted">
                {principle.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PopIn>
  );
}
