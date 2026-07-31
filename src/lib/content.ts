export const site = {
  name: "Gururaj J",
  brand: "gururaj.dev",
  title: "Gururaj J — Frontend Engineer",
  description:
    "Frontend platform engineer building the component systems and docs infrastructure other engineers ship on.",
  location: "Bengaluru, IND",
  timezone: "UTC +05:30",
  links: {
    github: "https://github.com/Gururajj77",
    linkedin: "https://www.linkedin.com/in/jgururaj/",
    knotcms: "https://knotcms.com",
    carbon: "https://carbondesignsystem.com",
    resume: "/resume.pdf",
    email: "mailto:jdotgururaj@gmail.com",
    source: "https://github.com/Gururajj77/dev-me-page",
  },
} as const;

export const hero = {
  eyebrow: "Frontend platform engineer",
  tagline:
    "I build the component systems and docs infrastructure other engineers ship on.",
  bio: "Five years in production frontend, the last two on IBM's Carbon Design System — shared components, upgrade paths, and documentation used by product teams I never meet. Nights and weekends I run KnotCMS, a Notion-to-Framer sync I built and operate end to end.",
  availability:
    "Open to senior frontend-platform roles — design systems, DX tooling, docs platforms.",
  availabilityMeta:
    "Bengaluru or remote · UTC +05:30 · 60-day notice · I reply within a day",
  ctaPrimary: "Start a conversation",
  ctaSecondary: "See two case studies",
} as const;

export const heroStat = {
  value: "100+",
  label: "product teams ship on components I maintain",
  meta: "6 major upgrades · 0 unplanned breaking changes",
  secondary: [
    { value: "5,000+", label: "developers served" },
    { value: "40K", label: "weekly npm consumers" },
    { value: "85%", label: "test coverage · @carbon/react" },
  ],
} as const;

export const shipping = {
  lastShipped: "Shipped 4 days ago",
  lastShippedDetail: "knotcms · billing webhooks",
} as const;

export type Mode = "recruiter" | "engineer";

export const caseStudies = [
  {
    id: "carbon",
    dropLabel: "drop: component gallery + upgrade diff",
    accent: "blue" as const,
    title: "Carbon Design System",
    meta: "IBM · Frontend developer · Feb 2024 — present",
    summary:
      "The shared UI platform every IBM product team builds on — and the documentation that decides whether they adopt it.",
    recruiterPoints: [
      {
        label: "Scope",
        text: "100+ consuming teams, 6 major upgrades landed with a written migration path each.",
      },
      {
        label: "My part",
        text: "owned four core components end to end, plus the docs site that made them adoptable without a support ticket.",
      },
    ],
    engineerPoints: [
      {
        label: "Shape",
        text: "Lit web components wrapped for React, tokens as the single source, Storybook as the contract, codemods for every breaking change.",
      },
      {
        label: "Hard part",
        text: "deprecating a prop across 40 repos without a coordinated release — solved with a dual-support window and a lint rule that failed loudly.",
      },
    ],
    tags: ["React", "Lit", "TypeScript", "Storybook"],
    href: "https://carbondesignsystem.com",
  },
  {
    id: "knotcms",
    dropLabel: "drop: dashboard shot or 12s sync clip",
    accent: "pink" as const,
    title: "KnotCMS",
    meta: "Solo product · alongside IBM · since Jun 2026",
    summary:
      "Notion becomes a Framer CMS, kept in sync. A live product with paying users — auth, billing, webhooks and support are all mine.",
    recruiterPoints: [
      {
        label: "Why it matters",
        text: "I have carried a product from idea to invoices, so I understand the cost of the decisions I ask platform teams to make.",
      },
      {
        label: "Running now",
        text: "self-service signup, subscription billing, and a sync that recovers itself when Notion rate-limits.",
      },
    ],
    engineerPoints: [
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
  },
] as const;

export const playground = {
  eyebrow: "Live — a component I own",
  heading: "Try it, don't take my word for it",
  sub: "Every state below is keyboard reachable, announces itself, and holds its size while loading. Tab into it.",
  label: "Save changes",
  loadingLabel: "Saving…",
} as const;

export const howIWork = {
  eyebrow: "How I work",
  meta: "three rules",
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
  ],
} as const;

export const experience = [
  {
    period: "2026",
    periodEnd: "present",
    role: "Founder & engineer, KnotCMS",
    badge: "concurrent",
    detail: "Solo · evenings and weekends, alongside IBM",
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
  systemNote: "This page is built from my own tokens and components.",
  systemLinkLabel: "Read the system",
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
  notLookingFor:
    'Not looking for: agency contracts, unpaid trials, or "quick calls" without a role.',
} as const;

export const changelog = {
  linkLabel: "design system",
} as const;
