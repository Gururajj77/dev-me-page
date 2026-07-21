import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-sm text-faint">{site.location}</p>
      </div>
    </footer>
  );
}
