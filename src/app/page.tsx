import type { Metadata } from "next";
import { Bento } from "@/components/bento/Bento";
import { Profile } from "@/components/bento/Profile";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.brand,
    type: "profile",
  },
};

export default function HomePage() {
  return (
    <>
      <a
        href="#work"
        className="sr-only text-sm font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-fg focus:px-4 focus:py-3 focus:text-bg"
      >
        Skip to the work
      </a>
      <main className="shell flex flex-col gap-8 py-16 xl:flex-row xl:items-start xl:gap-16">
        <div className="xl:w-[360px] xl:flex-none xl:self-stretch">
          <Profile />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <Bento />
          <footer className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.75rem] text-muted">
            <p>
              © {new Date().getFullYear()} {site.name} · {site.brand}
            </p>
            <p>
              {site.location} · {site.timezone}
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
