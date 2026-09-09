"use client";

import type { ReactNode } from "react";
import { PopIn } from "@/components/PopIn";

type Tone = "external" | "engine" | "state" | "product";

const legend: readonly { tone: Tone; label: string }[] = [
  { tone: "external", label: "External system" },
  { tone: "engine", label: "Sync engine" },
  { tone: "state", label: "State / retry" },
  { tone: "product", label: "Product surface" },
];

function Node({
  children,
  sub,
  tone,
  hub = false,
  live = false,
}: {
  children: ReactNode;
  sub?: string;
  tone: Tone;
  hub?: boolean;
  live?: boolean;
}) {
  return (
    <div
      data-node
      className={`arch-node arch-node-${tone} ${hub ? "arch-node-hub" : ""}`}
    >
      <span>
        {live ? <span className="arch-state" aria-hidden /> : null}
        {children}
      </span>
      {sub ? <span className="arch-node-sub">{sub}</span> : null}
    </div>
  );
}

function Stub({ label }: { label?: string }) {
  return (
    <div className="arch-stub" aria-hidden>
      {label ? <span className="arch-stub-label">{label}</span> : null}
    </div>
  );
}

function Fan({ dir }: { dir: "out" | "in" }) {
  return (
    <>
      <div className={`arch-fan arch-fan-${dir} arch-fan-l`} aria-hidden />
      <div className={`arch-fan arch-fan-${dir} arch-fan-c`} aria-hidden />
      <div className={`arch-fan arch-fan-${dir} arch-fan-r`} aria-hidden />
    </>
  );
}

const description =
  "KnotCMS architecture. Notion is the source of truth and feeds a sync engine on Cloudflare Workers over OAuth and the Notion API. The engine uses D1 for state, KV for sync cursors and Queues for retries, then writes to Framer CMS collections. Billing, the dashboard and webhooks sit on top.";

/**
 * HTML/CSS system diagram. Nodes are coloured by tier (see legend), fade in
 * as the card enters the viewport, and connectors are pure CSS. The figure is
 * exposed as one image to assistive technology with a prose description.
 */
export function KnotcmsArchitecture() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <figure role="img" aria-label={description} className="w-full">
        <PopIn className="arch" selector="[data-node]" stagger={0.05} y={6}>
          <div className="arch-span">
            <Node tone="external" sub="source of truth">
              Notion
            </Node>
          </div>

          <Stub label="OAuth / API" />

          <div className="arch-span">
            <Node tone="engine" hub live sub="Cloudflare Workers">
              Sync engine
            </Node>
          </div>

          <Stub />
          <Fan dir="out" />

          <div className="arch-cell">
            <Node tone="state" sub="state">
              D1
            </Node>
          </div>
          <div className="arch-cell">
            <Node tone="state" sub="cursors">
              KV
            </Node>
          </div>
          <div className="arch-cell">
            <Node tone="state" sub="retry">
              Queues
            </Node>
          </div>

          <Fan dir="in" />
          <Stub />

          <div className="arch-span">
            <Node tone="external" hub sub="collections">
              Framer CMS
            </Node>
          </div>

          <Stub />
          <Fan dir="out" />

          <div className="arch-cell">
            <Node tone="product">Billing</Node>
          </div>
          <div className="arch-cell">
            <Node tone="product">Dashboard</Node>
          </div>
          <div className="arch-cell">
            <Node tone="product">Webhooks</Node>
          </div>
        </PopIn>
      </figure>

      <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
        {legend.map((item) => (
          <li
            key={item.tone}
            className="flex items-center gap-2 font-mono text-[0.58rem] font-bold tracking-[0.1em] text-muted uppercase"
          >
            <span className={`arch-swatch arch-node-${item.tone}`} aria-hidden />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
