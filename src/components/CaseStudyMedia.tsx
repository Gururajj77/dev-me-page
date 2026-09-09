import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type CaseStudyMediaProps = {
  src: string;
  alt: string;
  aspect: "16/9" | "16/10" | "2/1";
  caption?: string;
  /** Evidence label above the image, e.g. "01" + "Product surface" + "Sync status". */
  n?: string;
  kicker?: string;
  title?: string;
};

const aspectClass: Record<CaseStudyMediaProps["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "2/1": "aspect-[2/1]",
};

/**
 * A screenshot presented as product evidence: a numbered label on top, a
 * 2px ink frame, a monospace caption beneath. Falls back to a labelled
 * placeholder when the file is missing so a broken path is visible in review.
 */
export function CaseStudyMedia({
  src,
  alt,
  aspect,
  caption,
  n,
  kicker,
  title,
}: CaseStudyMediaProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <figure className="flex flex-col gap-3">
      {kicker ? (
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2.5">
          <p className="meta-label text-fg">
            {n ? <span className="text-pink">{n}</span> : null}
            {n ? " / " : null}
            {kicker}
          </p>
          {title ? (
            <p className="text-[0.95rem] leading-none font-semibold tracking-tight">
              {title}
            </p>
          ) : null}
        </div>
      ) : null}

      <div
        className={`relative w-full overflow-hidden border-2 border-border bg-bg ${aspectClass[aspect]}`}
      >
        {exists ? (
          <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1320px) 1256px, 100vw" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 border border-dashed border-line px-4 text-center">
            <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
              Missing image
            </span>
            <span className="font-mono text-[0.72rem] text-fg">
              {src.split("/").pop()}
            </span>
          </div>
        )}
      </div>

      {caption ? (
        <figcaption className="font-mono text-[0.66rem] leading-relaxed text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
