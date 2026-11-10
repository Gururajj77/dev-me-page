"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FiCheck, FiMail } from "react-icons/fi";
import { site } from "@/lib/content";
import { tileClass } from "./Tile";

const email = site.links.email.replace(/^mailto:/, "");

/** The whole tile is a button: one tap copies the address. */
export function CopyEmailTile({ index }: { index: number }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  const sub =
    state === "copied"
      ? "Copied to clipboard"
      : state === "failed"
        ? email
        : "Tap to copy my email";

  return (
    <button
      type="button"
      onClick={copy}
      className={`${tileClass("yellow", "1x1", "tile-lift cursor-pointer p-4 text-left")}`}
      style={{ "--i": index } as CSSProperties}
    >
      <span className="tile-icon bg-green" aria-hidden>
        {state === "copied" ? (
          <FiCheck className="size-5" />
        ) : (
          <FiMail className="size-5" />
        )}
      </span>
      <span className="mt-auto flex flex-col pt-3">
        <span className="text-[0.95rem] leading-[1.4] font-semibold">Say hi</span>
        <span className="text-[0.82rem] leading-[1.45] break-all text-muted" aria-live="polite">
          {sub}
        </span>
      </span>
    </button>
  );
}
