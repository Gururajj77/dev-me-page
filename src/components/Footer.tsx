import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-border">
      <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[0.68rem] text-muted">{site.location}</p>
          <a
            href={site.links.resume}
            className="tile tile-surface tile-lift tile-lift-white px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
