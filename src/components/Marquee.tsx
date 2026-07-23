"use client";

type MarqueeProps = {
  items: readonly string[];
  tone: "yellow" | "green";
  direction?: "left" | "right";
};

export function Marquee({ items, tone, direction = "left" }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];
  const bg = tone === "yellow" ? "bg-yellow" : "bg-green";

  return (
    <div
      className={`marquee ${bg} ${direction === "right" ? "marquee--right" : ""}`}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-8">
            {item}
            <span aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
