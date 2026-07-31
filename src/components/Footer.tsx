"use client";

import { changelog, site } from "@/lib/content";

function currentPageUpdated() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function Footer() {
  const pageUpdated = currentPageUpdated();

  return (
    <div
      id="changelog"
      className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 font-mono text-[0.68rem] text-muted"
    >
      <p>
        {site.name} · {site.location} · {site.timezone}
      </p>
      <p>
        Built from scratch · {pageUpdated} ·{" "}
        <a
          href={site.links.source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-pink underline-offset-3"
        >
          {changelog.linkLabel}
        </a>
      </p>
    </div>
  );
}
