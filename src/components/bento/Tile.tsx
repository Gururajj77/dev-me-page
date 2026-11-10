import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export type Tone = "white" | "red" | "pink" | "blue" | "green" | "yellow" | "violet";

/** Grid footprint. Columns collapse to 2 on phones, so "wide" always fills the row. */
const sizes = {
  "1x1": "col-span-1 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x1": "col-span-2 row-span-1",
  "2x2": "col-span-2 row-span-2",
} as const;

export type TileSize = keyof typeof sizes;

type TileProps = {
  tone?: Tone;
  size?: TileSize;
  index: number;
  className?: string;
  id?: string;
  /** Internal path or external URL. Makes the whole tile a link. */
  href?: string;
  /** Accessible name when the tile is a link. */
  ariaLabel?: string;
  labelledBy?: string;
  children: ReactNode;
};

export function tileClass(tone: Tone, size: TileSize, extra = "") {
  const toneClass = tone === "white" ? "" : `tone-${tone}`;
  return `tile tile-in flex min-w-0 flex-col overflow-hidden ${toneClass} ${sizes[size]} ${extra}`;
}

export function Tile({
  tone = "white",
  size = "1x1",
  index,
  className = "",
  id,
  href,
  ariaLabel,
  labelledBy,
  children,
}: TileProps) {
  const style = { "--i": index } as CSSProperties;
  const cls = tileClass(tone, size, `p-4 ${className}`);

  if (!href) {
    return (
      <section id={id} aria-labelledby={labelledBy} className={cls} style={style}>
        {children}
      </section>
    );
  }

  const linkCls = `${cls} tile-lift`;
  const external = /^https?:|\.pdf$/.test(href);

  if (external) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={linkCls}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link id={id} href={href} aria-label={ariaLabel} className={linkCls} style={style}>
      {children}
    </Link>
  );
}

/** Icon badge left, arrow right — the top row of every link tile. */
export function TileTop({
  icon,
  iconClass,
  showArrow = true,
}: {
  icon?: ReactNode;
  iconClass?: string;
  showArrow?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      {icon ? (
        <span className={`tile-icon ${iconClass ?? ""}`} aria-hidden>
          {icon}
        </span>
      ) : (
        <span />
      )}
      {showArrow ? (
        <FiArrowUpRight className="size-[18px] text-muted" aria-hidden />
      ) : null}
    </div>
  );
}

/** Title + one quiet line, anchored to the tile's bottom edge. */
export function TileFoot({ title, sub }: { title: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mt-auto flex flex-col pt-3">
      <p className="text-[0.95rem] leading-[1.4] font-semibold text-fg">{title}</p>
      {sub ? <p className="text-[0.82rem] leading-[1.45] text-muted">{sub}</p> : null}
    </div>
  );
}
