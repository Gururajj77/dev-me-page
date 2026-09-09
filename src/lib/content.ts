export const site = {
  name: "Gururaj J",
  brand: "gururaj.dev",
  title: "Gururaj J — Frontend Engineer",
  description:
    "Frontend engineer building the component systems other engineers ship on, and the product my customers pay for.",
  location: "Bengaluru, IND",
  timezone: "UTC +05:30",
  links: {
    github: "https://github.com/Gururajj77",
    linkedin: "https://www.linkedin.com/in/jgururaj/",
    knotcms: "https://knotcms.com",
    knotcmsDocs: "https://docs.knotcms.com",
    resume: "/resume.pdf",
    email: "mailto:jdotgururaj@gmail.com",
    source: "https://github.com/Gururajj77/dev-me-page",
  },
} as const;

export const hero = {
  eyebrow: "Frontend engineer",
  tagline:
    "I build the component systems other engineers ship on, and the product my customers pay for.",
  bio: "Five years in production frontend, the last two on IBM's Carbon Design System, where I own shared components, upgrade paths, and the docs site that decides whether teams adopt them. Alongside that I run KnotCMS, a Notion to Framer sync with paying customers, where I own onboarding, dashboard, billing, and support myself.",
  availability:
    "Open to frontend engineering roles on small teams. Product surfaces, design systems, developer tooling.",
  availabilityMeta:
    "Bengaluru or remote · UTC +05:30 · 60-day notice · I reply within a day",
  ctaPrimary: "Start a conversation",
  ctaSecondary: "See the case study",
} as const;

export const heroStat = {
  value: "100+",
  label: "product teams ship on components I maintain",
  meta: "6 major upgrades · 0 unplanned breaking changes",
  secondary: [
    { value: "5,000+", label: "developers served" },
    { value: "129K", label: "weekly npm consumers" },
    { value: "85%", label: "test coverage · @carbon/react" },
    { value: "4", label: "core components owned end to end" },
  ],
} as const;

export const shipping = {
  lastShipped: "Shipped 4 days ago",
  lastShippedDetail: "knotcms · billing webhooks",
} as const;

export type CaseMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt: string };

export type CaseStudy = {
  id: string;
  accent: "pink";
  title: string;
  meta: string;
  summary: string;
  points: readonly { label: string; text: string }[];
  tags: readonly string[];
  href: string;
  caseHref?: string;
  /** A real screenshot or clip under /public. When absent, the card renders without a banner. */
  media?: CaseMedia;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "knotcms",
    accent: "pink",
    title: "KnotCMS",
    meta: "Solo product · alongside IBM · since Jun 2026",
    summary:
      "Notion becomes a Framer CMS, kept in sync. A live product with paying users — auth, billing, webhooks and support are all mine.",
    points: [
      {
        label: "Why it matters",
        text: "I have carried a product from idea to invoices, so I understand the cost of the decisions I ask platform teams to make.",
      },
      {
        label: "Running now",
        text: "self-service signup, subscription billing, and a sync that recovers itself when Notion rate-limits.",
      },
      {
        label: "Architecture",
        text: "event-driven Workers, D1 for state, KV for sync cursors, queues for retries, OAuth against Notion and Framer.",
      },
      {
        label: "Hard part",
        text: "idempotent replay — a webhook can arrive twice, late, or out of order, and the CMS must still converge on one correct tree.",
      },
    ],
    tags: ["TypeScript", "Workers", "D1", "KV"],
    href: "https://knotcms.com",
    caseHref: "/work/knotcms",
  },
];

export const howIWork = {
  eyebrow: "How I work",
  meta: "four rules",
  principles: [
    {
      title: "The API is the product",
      body: "A component's props outlive its markup. I design the interface first and defend it in review, because every prop is a promise someone else will hold me to.",
    },
    {
      title: "A breaking change ships with its migration",
      body: "Codemod, lint rule, dual-support window, dated deprecation. If I can't automate the upgrade, the change isn't ready.",
    },
    {
      title: "Docs are adoption, not decoration",
      body: "Nobody adopts what they can't understand alone at 11pm. I measure a component by how few questions it generates.",
    },
    {
      title: "The flow that technically works can still be broken",
      body: "Filtering our side navigation returned the matched page and hid everything beneath it, so anyone searching for a section landed at a dead end. It passed every test. I rebuilt it without waiting for a spec, design adopted it, and our SUPR-Q score went up.",
    },
  ],
} as const;

export const experience = [
  {
    period: "2026",
    periodEnd: "present",
    role: "Founder & engineer, KnotCMS",
    badge: "concurrent",
    detail: "Solo · Cloudflare Workers · paying customers",
  },
  {
    period: "Feb 2024",
    periodEnd: "present",
    role: "Frontend developer",
    detail: "IBM India · Carbon Design System",
  },
  {
    period: "Sep 2021",
    periodEnd: "Feb 2024",
    role: "Project engineer",
    detail: "Wipro · enterprise Angular applications",
  },
] as const;

export const toolkit = {
  everydayLabel: "Every day",
  everydaySubtitle: "5 years+",
  everyday: [
    "TypeScript",
    "React",
    "Lit",
    "Design systems",
    "Storybook",
    "PayloadCMS",
  ],
  comfortableLabel: "Reach for",
  comfortableSubtitle: "shipped with",
  comfortable: ["Next.js", "Cloudflare Workers", "Angular", "MongoDB"],
} as const;

export const contact = {
  headingLines: ["Here's exactly", "what happens next"],
  steps: [
    {
      n: "01",
      label: "Send:",
      text: "the team, the problem you're hiring against, and the level. Two lines is plenty.",
    },
    {
      n: "02",
      label: "I reply within a day",
      text: "with a straight yes or no on fit — no funnel, no recruiter round.",
    },
    {
      n: "03",
      label: "If it fits:",
      text: "30 minutes on your platform problems, and I'll come with questions.",
    },
  ],
  emailLabel: "Email — fastest",
} as const;

export const changelog = {
  linkLabel: "design system",
} as const;

export const knotcmsCase = {
  eyebrow: "Case study",
  title: "KnotCMS",
  tagline: "Notion becomes a Framer CMS, kept in sync.",
  meta: "Solo product · alongside IBM · since Jun 2026",
  stack: ["TypeScript", "Cloudflare Workers", "D1", "KV", "Queues"],
  liveLabel: "Live product",
  docsLabel: "Docs",
  whatItDoes:
    "Framer's CMS has no way to stay in sync with an external source of truth. Writers keep content in Notion, then copy it into Framer by hand every time it changes. KnotCMS connects a Notion database to a Framer collection, maps the fields once, and keeps them in sync from then on. Auth, billing, webhooks and support are all mine.",
  constraint: {
    lede: "Why this runs on Cloudflare Workers, and what that costs.",
    body: 'Workers have hard per-request limits: CPU time, and a cap on outbound subrequests. A sync is fundamentally "read N rows from Notion, write N items to Framer", so the work scales with the user\'s table size while the runtime budget stays fixed. That tension is the whole engineering story.',
    todo: "I need to write 2 to 3 sentences here about why I chose Workers anyway.",
  },
  whereItBroke: {
    body: "Stress testing surfaced a failure at around 7,000 rows. The cause was subrequest fan-out: a single sync invocation issuing more outbound calls than a Worker invocation is allowed to make.",
    todo: "What I actually saw when it failed, the error, the logs, how long it took me to find it.",
  },
  theFix: {
    body: "Moved the sync off a single invocation and onto Cloudflare Queues, with batched invocations. Each batch stays inside the per-invocation limits, and the total sync size is no longer bounded by what one Worker can do in one request.",
    todo: "Batch size, how retries and failures are handled, whether a partial batch failure re-runs the whole sync.",
  },
  numbers: {
    columns: ["", "Tested up to", "Time at that size"],
    rows: [
      { label: "First sync", testedUpTo: "5,000 rows", time: "~3 min" },
      {
        label: "Auto sync",
        testedUpTo: "3,000 rows per trigger",
        time: "~3 min",
      },
    ],
    note: "First sync pulls the full table, so it runs longer than an auto sync of the same size. Auto sync has a lower ceiling because it runs on the webhook path with a tighter budget.",
  },
  firstUser: {
    body: "A real user hit a stuck point during setup, I diagnosed it and changed the docs rather than the code.",
    todo: "What they got stuck on, what I changed.",
  },
  differently: {
    todo: "2 to 3 honest points.",
  },
  closeLine: "Questions about this, or about what I could build for you.",
} as const;
