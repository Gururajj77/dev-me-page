/**
 * Numbered editorial section header:  01 / LABEL ────────────── META
 */
export function SectionHead({
  index,
  label,
  meta,
  id,
  as: Tag = "h2",
}: {
  index: string;
  label: string;
  meta?: string;
  id?: string;
  as?: "h2" | "p";
}) {
  return (
    <div className="flex items-center gap-4">
      <Tag
        id={id}
        className="flex shrink-0 items-baseline gap-2.5 font-mono text-[0.7rem] font-bold tracking-[0.16em] uppercase"
      >
        <span className="text-pink">{index}</span>
        <span className="text-muted" aria-hidden>
          /
        </span>
        <span>{label}</span>
      </Tag>
      <div className="h-0.5 min-w-6 flex-1 bg-border" aria-hidden />
      {meta ? (
        <p className="hidden shrink-0 font-mono text-[0.64rem] tracking-[0.08em] text-muted uppercase sm:block">
          {meta}
        </p>
      ) : null}
    </div>
  );
}
