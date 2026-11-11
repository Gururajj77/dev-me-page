/**
 * Markdown versions of each page, built from the same content as the HTML so
 * the two can't drift. Served statically at `<path>.md` and, through
 * `functions/_middleware.ts`, at the page's own path for `Accept: text/markdown`.
 */
import {
  caseStudies,
  experience,
  formatMonth,
  hero,
  heroStat,
  howIWork,
  knotcmsCase,
  knotcmsCaseSpec,
  shipping,
  site,
  toolkit,
} from "@/lib/content";

const abs = (path: string) => `${site.url}${path}`;
const email = site.links.email.replace(/^mailto:/, "");

/** Every markdown page, used by llms.txt. */
export const markdownPages = [
  {
    title: "Home",
    path: "/",
    md: "/index.md",
    summary: "Who I am, IBM Carbon work, KnotCMS, experience, toolkit and contact.",
  },
  {
    title: "KnotCMS case study",
    path: "/work/knotcms",
    md: "/work/knotcms.md",
    summary:
      "Solo SaaS on Cloudflare Workers: architecture, the 5,000-row failure, the Queues rebuild, traction and lessons.",
  },
] as const;

function table(columns: readonly string[], rows: readonly (readonly string[])[]) {
  const head = `| ${columns.map((c) => c || " ").join(" | ")} |`;
  const rule = `| ${columns.map(() => "---").join(" | ")} |`;
  return [head, rule, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");
}

export function homeMarkdown() {
  const study = caseStudies[0];

  return `# ${site.name}

${site.role}

${hero.tagline}

${hero.bio}

- Site: ${site.url}
- Résumé (PDF): ${abs(site.links.resume)}
- GitHub: ${site.links.github}
- LinkedIn: ${site.links.linkedin}
- Email: ${email}
- Location: ${site.location} · ${site.timezone}

## ${heroStat.panelLabel}: ${heroStat.panelMeta}

- ${heroStat.value} ${heroStat.label}
- ${heroStat.meta}
${heroStat.secondary.map((s) => `- ${s.value} ${s.label}`).join("\n")}

## Featured project: ${study.title}

${study.meta}

${study.summary}

${study.points.map((p) => `- **${p.label}:** ${p.text}`).join("\n")}

Where it broke: ${study.failure?.map((f) => `${f.label}: ${f.text}`).join(" → ")}

- Live product: ${study.href}
- Case study: ${abs(study.caseHref ?? "/work/knotcms")} (markdown: ${abs("/work/knotcms.md")})

Currently shipping: ${shipping.product}, ${shipping.productDetail}. ${shipping.status}, shipped ${formatMonth(shipping.shippedOn)}. ${shipping.stack}.

## Experience

${experience
  .map(
    (job) => `### ${job.role}, ${job.org}

${job.period} – ${job.periodEnd}

${job.metrics.join(" · ")}
${job.highlights?.length ? `\n${job.highlights.map((h) => `- **${h.label}:** ${h.detail ?? h.text}`).join("\n")}\n` : ""}`,
  )
  .join("\n")}
## ${howIWork.eyebrow}

${howIWork.principles.map((p, i) => `${i + 1}. **${p.title}.** ${p.body}`).join("\n")}

## Toolkit

- ${toolkit.everydayLabel} (${toolkit.everydaySubtitle}): ${toolkit.everyday.join(", ")}
- ${toolkit.comfortableLabel} (${toolkit.comfortableSubtitle}): ${toolkit.comfortable.join(", ")}
${toolkit.layers.map((l) => `- ${l.label}: ${l.items.join(", ")}`).join("\n")}

## Contact

${hero.availability}

${hero.availabilityMeta}

Email ${email} with the team, the problem you're hiring against, and the level. I reply within a day with a straight yes or no on fit.
`;
}

export function knotcmsMarkdown() {
  const c = knotcmsCase;

  return `# ${c.title} case study

${c.tagline}

${c.meta} · by ${site.name} (${site.url})

- Live product: ${site.links.knotcms}
- Docs: ${site.links.knotcmsDocs}
- Stack: ${c.stack.join(", ")}

## What it does

${c.whatItDoes}

## Architecture

${knotcmsCaseSpec.architectureLine}

## Constraint

${c.constraint.lede}

${c.constraint.body}

${c.constraint.why}

## Where it broke

${c.whereItBroke.body}

${c.whereItBroke.seen}

## The fix

${c.theFix.body}

${c.theFix.subsections
  .map((s) => `### ${s.title}\n\n${s.paragraphs.join("\n\n")}`)
  .join("\n\n")}

## Where it stands now

${table(
  c.traction.columns,
  c.traction.rows.map((r) => [r.label, r.value]),
)}

${c.traction.note}

${table(
  c.numbers.columns,
  c.numbers.rows.map((r) => [r.label, r.testedUpTo, r.time]),
)}

${c.numbers.note}

## The first user

${c.firstUser.paragraphs.join("\n\n")}

## What I'd do differently

${c.differently.points.map((p, i) => `${i + 1}. **${p.title}.** ${p.body}`).join("\n\n")}

---

${c.closeLine} Email ${email}.
`;
}

export function llmsTxt() {
  return `# ${site.name}

> ${site.role}. ${hero.tagline}

${hero.bio}

${hero.availability} ${hero.availabilityMeta}.

Every page is also available as markdown: add \`.md\` to the path, or request the page with \`Accept: text/markdown\`.

## Pages

${markdownPages.map((p) => `- [${p.title}](${abs(p.md)}): ${p.summary}`).join("\n")}

## Links

- [Résumé (PDF)](${abs(site.links.resume)})
- [GitHub](${site.links.github})
- [LinkedIn](${site.links.linkedin})
- [KnotCMS](${site.links.knotcms})
- Email: ${email}
`;
}
