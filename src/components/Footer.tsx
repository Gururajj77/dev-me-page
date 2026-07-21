import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-gap">
      <div className="saw mb-6" aria-hidden="true" />
      <div className="slab bg-ink p-5 text-paper md:flex md:items-end md:justify-between md:p-6">
        <div>
          <p className="display text-3xl text-sun md:text-4xl">{site.name}</p>
          <p className="mt-2 text-xs font-bold tracking-wide text-ice uppercase">
            Brutal mode · {site.location}
          </p>
        </div>
        <p className="mt-4 text-xs font-bold uppercase opacity-70 md:mt-0">
          © {new Date().getFullYear()} — not a framer template
        </p>
      </div>
    </footer>
  );
}
