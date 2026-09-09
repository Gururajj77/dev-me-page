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

/** Metadata layer under the hero statement. Labels are monospace, values are body text. */
export const heroOwnership = [
  { label: "Systems", value: "Carbon / KnotCMS" },
  { label: "Surface", value: "Components / Docs / Product" },
  { label: "Ownership", value: "Design → API → Implementation → Production" },
] as const;

export const heroStat = {
  panelLabel: "Production footprint",
  panelMeta: "Carbon Design System · IBM",
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
  panelLabel: "Currently shipping",
  product: "KnotCMS",
  productDetail: "billing webhooks",
  status: "Live",
  lastShipped: "4 days ago",
  stack: "Workers / D1 / Queues",
} as const;

export type FailureStep = {
  label: string;
  text: string;
  detail?: string;
};

export type CaseStudy = {
  id: string;
  accent: "pink";
  title: string;
  meta: string;
  summary: string;
  points: readonly { label: string; text: string }[];
  /** problem → diagnosis → architectural change → outcome */
  failure?: readonly FailureStep[];
  tags: readonly string[];
  href: string;
  caseHref?: string;
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
    failure: [
      { label: "Problem", text: "7,000 rows" },
      { label: "Diagnosis", text: "Workers subrequest fan-out failure" },
      { label: "Change", text: "Queue-based batched invocations" },
      {
        label: "Outcome",
        text: "Reliable sync",
        detail: "tested to 5,000 rows in ~3 min",
      },
    ],
    tags: ["TypeScript", "Workers", "D1", "KV", "Queues", "OAuth", "Webhooks"],
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
      evidence: "Carbon / component API",
    },
    {
      title: "A breaking change ships with its migration",
      body: "Codemod, lint rule, dual-support window, dated deprecation. If I can't automate the upgrade, the change isn't ready.",
      evidence: "Carbon / platform upgrades",
    },
    {
      title: "Docs are adoption, not decoration",
      body: "Nobody adopts what they can't understand alone at 11pm. I measure a component by how few questions it generates.",
      evidence: "Carbon / documentation platform",
    },
    {
      title: "The flow that technically works can still be broken",
      body: "Filtering our side navigation returned the matched page and hid everything beneath it, so anyone searching for a section landed at a dead end. It passed every test. I rebuilt it without waiting for a spec, design adopted it, and our SUPR-Q score went up.",
      evidence: "Carbon / navigation UX",
    },
  ],
} as const;

export type ExperienceRecord = {
  period: string;
  periodEnd: string;
  role: string;
  org: string;
  badge?: string;
  /** What the role was made of. Rendered as a monospace line. */
  tags: readonly string[];
  /** Evidence. Rendered as small bordered blocks. */
  metrics: readonly string[];
};

export const experience: readonly ExperienceRecord[] = [
  {
    period: "2026",
    periodEnd: "present",
    role: "Founder & engineer",
    org: "KnotCMS",
    badge: "concurrent",
    tags: ["Solo", "Cloudflare Workers", "Paying customers"],
    metrics: ["Solo shipped", "Production", "Billing + webhooks"],
  },
  {
    period: "Feb 2024",
    periodEnd: "present",
    role: "Frontend developer",
    org: "IBM India · Carbon Design System",
    tags: ["Shared components", "Documentation platform", "Migrations"],
    metrics: ["5,000+ developers", "129K weekly consumers", "4 components owned"],
  },
  {
    period: "Sep 2021",
    periodEnd: "Feb 2024",
    role: "Project engineer",
    org: "Wipro · Wells Fargo",
    tags: ["Angular", "Enterprise applications", "Modernization"],
    metrics: ["5 enterprise apps", "WebForms → Angular"],
  },
];

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
  layersLabel: "Layers",
  layers: [
    {
      label: "UI",
      items: ["TypeScript", "React", "Lit", "Design systems", "Storybook"],
    },
    {
      label: "Product",
      items: ["Next.js", "PayloadCMS", "Angular", "MongoDB"],
    },
    {
      label: "Platform",
      items: ["Workers", "D1", "KV", "Queues", "OAuth", "Webhooks"],
    },
  ],
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
    why: "I chose Workers because the constraint pushed me toward the architecture I'd have needed anyway. A cap on subrequests forces you to batch and queue, and batching gives you retries, resumability and backpressure as a side effect rather than as a later rewrite. The alternative, one long-running process on a container that bills by the hour, would have looked simpler on day one and left me with a sync that fails silently at row 4,000.",
  },
  whereItBroke: {
    body: "Stress testing surfaced a failure at around 7,000 rows. The cause was subrequest fan-out: a single sync invocation issuing more outbound calls than a Worker invocation is allowed to make.",
    seen: "What I actually saw was not much. The Cloudflare dashboard showed the requests failing with a CPU limit exceeded error and nothing more specific than that. The error named the limit, not the fan-out behind it.",
  },
  theFix: {
    body: "Moved the sync out of the webhook request and onto Cloudflare Queues. The handler now verifies the signature, records the event, drops one message and returns in milliseconds, so Notion gets its 200 immediately. A consumer picks the message up in its own invocation with a 15-minute wall-clock budget instead of an HTTP request's, plus retries. A message is one project, not a chunk of rows: the consumer waits out the ten-second quiet window, then pages the Notion database 100 rows at a time and writes to Framer in one remove and one add. The bound moved from an HTTP request to an invocation; it didn't disappear. Tested envelope: 5,000 rows in about three minutes.",
    subsections: [
      {
        title: "Collapsing bursts, at both ends",
        paragraphs: [
          "Content editors don't make one edit. They make twenty, then stop. So bursts get collapsed twice.",
          "Before a run, each new edit restarts a ten-second quiet window, so twenty edits produce one sync.",
          "During a run is the harder case, and the first version got it wrong. A sync reads Notion at its start, so an edit made mid-run isn't in that run. The queued message for it found the project lock held, treated that as non-retryable, and acked. The edit was gone with no error anywhere, and Framer stayed stale until someone happened to edit again.",
          "The fix isn't to retry. Retrying means every mid-run edit becomes its own retry storm against a lock that's still held. Instead, a message that finds the lock held sets a follow-up flag and acks. The set is conditional on the lock still being held, so it's atomic with the holder's release: either a live holder gets flagged, or the lock is already free and the message just runs the sync itself. When the holder finishes, it releases the lock, consumes the flag, and enqueues exactly one follow-up.",
          "Twenty edits during a three-minute sync produce one follow-up sync, not twenty. Same guarantee as the quiet window, at the other end of the run.",
        ],
      },
      {
        title: "Retries",
        paragraphs: [
          "Each Framer call retries up to four times on transient errors with backoff. An add that fails on a remote image is retried without the image values, so the text still lands. A transient failure of the whole run is retried five times, a minute apart. Auth, plan-limit, schema-mismatch and slug-collision errors are non-retryable and surfaced rather than retried.",
          "There's no partial batch to re-run. A sync is one reconcile, and a retry re-runs all of it. That's safe because writes are keyed, by Notion page id for managed collections and by slug for user collections, so running the same reconcile twice leaves the collection in the same state as running it once.",
        ],
      },
      {
        title: "Making the wait visible",
        paragraphs: [
          "The lock was also wrong: it expired after three minutes while a 5,000-row sync takes about three minutes, so two syncs could overlap on the same project. TTL now matches the consumer's 15-minute budget, with release in a finally and the TTL only as a crash net.",
          "The last piece is UI. A coalescing flag is invisible internal state, and invisible state is how the original bug survived. So the project card now shows a yellow callout while a follow-up is queued: “New Notion edit queued during the run”, or “A Notion edit is waiting” if a crashed run left a flag behind. Both clear themselves on the next poll.",
          "That's the part worth keeping from all of this. The queue change was architecture. The callout is the reason a user can tell the difference between working and stuck.",
        ],
      },
    ],
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
    paragraphs: [
      "The first paying user was a designer at a small studio, setting KnotCMS up for a client. Front-end skills, not a developer, by their own description, which is exactly who the product is for. They got stuck before the first sync: the setup guide still said Integrations where Notion now says Connections, the webhook option was not where the guide pointed, and the page had no help link. I replied with the steps and screenshots within two hours and rewrote the guide the same day.",
      "That was the easy part. The thread ran to twenty-nine emails over twelve days, and they hit six more walls. A verification token that seemed to vanish. A sync that reported success while Framer stayed untouched, which only cleared after starting over with a fresh collection. A slug setting that hyphenated the title field as well as the slug. A reconfigure screen that could not find the only database they had shared. Text fields landing as rich text when they needed plain. And, after all of that, auto-sync silently not firing.",
      "Three of those were bugs, and each fix shipped in under two days: the field chosen as the slug source is left alone, reconfigure lists the current database and lets you add columns, and every text field can be imported as plain or rich. The auto-sync one was a docs step, granting the connection content access, and the honest part is that I had skipped that step in my own testing too. If the person who built it can miss a step, the step is a product problem, not a user problem.",
      "The last thing they reported is the one I keep coming back to. Auto-sync was finally working, but the project page only checked for updates once, when it loaded. Leave it open and Last Sync never moved, so a working pipeline looked stuck. I fixed the polling, renamed “Refresh” to “Refresh Status” because they said sync and refresh sounded like the same thing, and sent them a recording of the statuses updating live.",
      "Between the bug reports they wished me luck with signups. Most of what I changed in those twelve days was not the sync engine. It was the parts a user can see.",
    ],
  },
  differently: {
    points: [
      {
        title: "Watch someone else do the setup before launch",
        body: "Every wall the first user hit was in onboarding, not the engine. The guide said Integrations where Notion now says Connections. The content-access step was easy to skip, and I had skipped it myself in testing. I tested on my own workspace, where everything was already connected, so none of that was visible to me. One session watching a designer set it up on a fresh workspace would have caught most of it before a paying customer did.",
      },
      {
        title: "Start from the principle I ended with",
        body: "The fix section above says invisible state is how the original bug survived. That lesson arrived after three separate silent failures: mid-run edits dropped without an error, a lock that let two syncs overlap, and a Last Sync that never moved because the page only polled once. Each got its own fix. If I had treated every piece of internal state as something a user might need to see, they would have been one design decision instead of three bug reports.",
      },
      {
        title: "Instrument the sync before stress testing it",
        body: "When the 7,000-row sync failed, the dashboard told me a limit had been exceeded and nothing else. I had to work out the fan-out from first principles. A sync that logs rows read, subrequests made and time spent would have named the problem in one line. The lock TTL was the same mistake in miniature: I set it to three minutes because it sounded reasonable, and a 5,000-row sync takes about three minutes. Limits should come from measured numbers, not round ones.",
      },
    ],
  },
  closeLine: "Questions about this, or about what I could build for you.",
} as const;
