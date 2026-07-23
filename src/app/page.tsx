import { BentoHome } from "@/components/BentoHome";
import { site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <main>
        <BentoHome />
      </main>
      <footer className="border-t-2 border-border">
        <div className="shell flex flex-wrap items-center justify-between gap-2 py-3">
          <p className="font-mono text-[0.65rem] text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[0.65rem] text-muted">{site.location}</p>
        </div>
      </footer>
    </>
  );
}
