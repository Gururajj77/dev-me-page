/**
 * Editorial section header.
 *
 *   01 / KICKER ──────────────────────────────
 *   BIG DISPLAY TITLE — muted tail        meta
 *
 * `title` is optional for sections that carry their own display heading.
 */
export function SectionHead({
  index,
  kicker,
  title,
  titleMuted,
  meta,
  id,
  as: Tag = "h2",
}: {
  index: string;
  kicker: string;
  title?: string;
  titleMuted?: string;
  meta?: string;
  id?: string;
  as?: "h2" | "p";
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <p className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1 font-mono text-[0.66rem] font-bold tracking-[0.16em] uppercase">
          <span className="text-pink">{index}</span>
          <span className="text-muted" aria-hidden>
            /
          </span>
          <span>{kicker}</span>
        </p>
        <div className="h-0.5 min-w-6 flex-1 bg-border" aria-hidden />
      </div>

      {title ? (
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <Tag
            id={id}
            className="display text-[clamp(2.25rem,4.2vw,3.5rem)] text-balance"
          >
            {title}
            {titleMuted ? (
              <>
                {" "}
                <span className="text-muted">{titleMuted}</span>
              </>
            ) : null}
          </Tag>
          {meta ? (
            <p className="max-w-[36ch] pb-1.5 text-[1rem] leading-snug font-medium text-muted sm:text-[1.05rem]">
              {meta}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
