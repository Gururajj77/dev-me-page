import { knotcmsMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(knotcmsMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
