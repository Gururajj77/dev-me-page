import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type CaseStudyMediaProps = {
  src: string;
  alt: string;
  aspect: "16/9" | "16/10";
  caption?: string;
};

const aspectClass: Record<CaseStudyMediaProps["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
};

export function CaseStudyMedia({ src, alt, aspect, caption }: CaseStudyMediaProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`relative w-full overflow-hidden border border-line bg-bg ${aspectClass[aspect]}`}
      >
        {exists ? (
          <Image src={src} alt={alt} fill className="object-cover" />
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
        <figcaption className="font-mono text-[0.68rem] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
