"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { site } from "@/lib/content";
import { tileClass } from "./Tile";

const city = site.location.split(",")[0];

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

/** Local time in Bengaluru. Renders a placeholder on the server, then ticks. */
export function ClockTile({ index }: { index: number }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="clock-city"
      className={tileClass("white", "1x2")}
      style={{ "--i": index } as CSSProperties}
    >
      {/* Map-like art: a soft grid, two "roads" and a pulsing pin. */}
      <div
        aria-hidden
        className="relative flex-1 overflow-hidden bg-t-green"
        style={{
          backgroundImage:
            "linear-gradient(var(--surface) 2px, transparent 2px), linear-gradient(90deg, var(--surface) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
        }}
      >
        <svg
          viewBox="0 0 200 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
        >
          <path
            d="M140 -10 C 110 60, 170 110, 120 170 S 70 250, 110 320"
            fill="none"
            stroke="#9cc8f0"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M-10 210 L 210 150"
            fill="none"
            stroke="var(--surface)"
            strokeWidth="8"
          />
        </svg>
        <span className="absolute top-[42%] left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/25 [animation-duration:2.4s]" />
          <span className="absolute inset-3 rounded-full bg-accent/20" />
          <span className="relative size-4 rounded-full border-[3px] border-white bg-accent shadow-md" />
        </span>
      </div>

      <div className="relative z-10 -mt-16 p-3">
        <div className="flex flex-col rounded-2xl border border-line bg-surface p-3 shadow-[var(--tile-shadow)]">
          <p id="clock-city" className="text-[0.95rem] leading-[1.4] font-semibold">
            {city}
          </p>
          <p className="text-[0.82rem] leading-[1.45] text-muted">
            <time className="font-mono tabular-nums text-fg" suppressHydrationWarning>
              {time ?? "--:--"}
            </time>{" "}
            local time
          </p>
          <p className="font-mono text-[0.72rem] text-muted">{site.timezone}</p>
        </div>
      </div>
    </section>
  );
}
