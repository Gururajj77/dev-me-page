export const site = {
  name: "Gururaj J",
  brand: "jdotgururaj.dev",
  /** Canonical origin. Every absolute URL on the site is built from this. */
  url: "https://jdotgururaj.dev",
  role: "Frontend Platform Engineer | Design Systems & Full-Stack",
  /** Short form for structured data (JSON-LD jobTitle). */
  jobTitle: "Frontend Platform Engineer",
  title: "Gururaj J — Frontend Platform Engineer | Design Systems & Full-Stack",
  description:
    "Frontend platform engineer. I build web platforms for humans and AI agents, own core Carbon Design System components at IBM, and build KnotCMS on my own.",
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
  eyebrow: site.role,
  tagline:
    "I build web platforms for both humans and AI agents. At IBM I own core Carbon Design System components, and on my own I build full-stack products like KnotCMS.",
  bio: "Five years of TypeScript and React in production, since 2024 on IBM's Carbon Design System, where I own 4 core components end to end and the docs platform that decides whether teams adopt them. Outside work I build and ship full-stack products on Cloudflare, including KnotCMS, a Notion to Framer sync that won 3 paying customers from 20 signups with zero ad spend.",
  availability:
    "Open to frontend platform, design systems and full-stack product roles.",
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
    // npm API, @carbon/react: 194,257 downloads for Nov 4–10, 2026.
    { value: "190K+", label: "weekly npm downloads" },
    { value: "4", label: "core components owned end to end" },
  ],
} as const;

export const shipping = {
  panelLabel: "Currently shipping",
  product: "KnotCMS",
  productDetail: "billing webhooks",
  status: "Live",
  /**
   * Year-month the item above shipped. Rendered as an absolute month so the
   * card never goes stale. "billing webhooks" was written up on 1 Aug 2026 as
   * "4 days ago", so it shipped in July 2026. Update both fields together.
   */
  shippedOn: "2026-07",
  stack: "Workers / D1 / Queues",
} as const;

/** "2026-07" → "Jul 2026". Fixed locale and UTC so server and client agree. */
export function formatMonth(yearMonth: string) {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

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
      "Notion becomes a Framer CMS, kept in sync. Live, with 3 paying customers from 20 signups and zero ad spend. Auth, billing, webhooks and support are all mine.",
    points: [
      {
        label: "Why it matters",
        text: "I have carried a product from idea to invoices, so I understand the cost of the decisions I ask platform teams to make.",
      },
      {
        label: "Traction",
        text: "3 paying customers from 20 signups, all organic through AEO and the Framer marketplace, zero ad spend.",
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
      { label: "Change", text: "Moved the sync out of the request path" },
      // TODO(gururaj): add the verified row count once retested above 7,000.
      {
        label: "Outcome",
        text: "Rebuilt the sync pipeline on Queues with batched invocations",
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
  /**
   * Résumé bullets. `stat` is the one fact to scan for, `text` the one-line
   * explanation under it (both on the tile); `detail` is the résumé wording,
   * used in the markdown version of the page.
   */
  highlights?: readonly {
    label: string;
    stat: string;
    text: string;
    detail?: string;
  }[];
  /** Roles that carry the portfolio story get the larger title treatment. */
  emphasis?: boolean;
};

/** Jobs only. KnotCMS is a project, not a job, and lives in the case study. */
export const experience: readonly ExperienceRecord[] = [
  {
    period: "Feb 2024",
    periodEnd: "present",
    role: "Frontend developer",
    org: "IBM India · Carbon Design System",
    tags: [
      "Components",
      "Documentation",
      "Agent-readable docs",
      "Search",
      "Accessibility automation",
      "Migrations",
      "CI reliability",
    ],
    metrics: [
      "5,000+ developers",
      "190K+ weekly npm downloads",
      "3,400+ implementations",
      "4 components owned",
    ],
    highlights: [
      {
        label: "Agent-readable docs",
        stat: "Any page → .md",
        text: "Docs served as markdown via .md or Accept: text/markdown. Feeds the team's MCP search server.",
        detail:
          "Built AI-agent support for the Carbon docs: any page is served as markdown through a .md URL suffix or Accept: text/markdown content negotiation. The site's content is also the main data source for the team's MCP search server.",
      },
      {
        label: "Docs search",
        stat: "SSR, URL-based",
        text: "Built end to end. Better SEO, fewer client API calls, keywords tracked in Amplitude and Segment.",
        detail:
          "Built the docs search frontend end to end: server-rendered and URL-based for SEO and fewer client API calls, with keyword tracking through Amplitude and Segment.",
      },
      {
        label: "Launch safety",
        stat: "0 broken redirects",
        text: "~400 legacy URLs verified with Playwright for the Oct 1 GA cutover.",
        detail:
          "Owned the redirect strategy for the Oct 1 GA cutover. Verified about 400 legacy URLs with Playwright and set up the Cloudflare bulk-redirect workflow from CSV to production, with zero broken redirects at launch.",
      },
      {
        label: "Accessibility",
        stat: "~100 components",
        text: "Statuses read from Playwright output, removing nearly all manual CMS updates.",
        detail:
          "Automated accessibility statuses for about 100 components, read directly from Playwright output in each Carbon package, removing nearly all manual CMS updates. Added edit restrictions and SSO gating for IBM-only data.",
      },
      {
        label: "CI reliability",
        stat: "2 min → <30s",
        text: "Rescoped a GitHub Actions cache. Failing PRs fell from ~80% to under 10%.",
        detail:
          "Traced CI failures to a GitHub Actions cache keyed on the whole runner filesystem. Rescoped it to Next.js build inputs, cutting the step from over 2 minutes to under 30 seconds and failing PRs from about 80% to under 10%.",
      },
    ],
    emphasis: true,
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
    "Payload CMS",
  ],
  comfortableLabel: "Reach for",
  comfortableSubtitle: "shipped with",
  comfortable: [
    "Next.js",
    "Cloudflare Workers",
    "Angular",
    "MongoDB",
    "Playwright",
    "Amplitude",
    "Segment",
  ],
  layersLabel: "Layers",
  layers: [
    {
      label: "UI",
      items: ["TypeScript", "React", "Lit", "Design systems", "Storybook"],
    },
    {
      label: "Product",
      items: [
        "Next.js",
        "Payload CMS",
        "Angular",
        "REST APIs",
        "MongoDB",
        "Amplitude",
        "Segment",
      ],
    },
    {
      label: "Testing",
      items: ["Playwright"],
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
    body: "Moved the sync out of the webhook request and onto Cloudflare Queues. The handler now verifies the signature, records the event, drops one message and returns in milliseconds, so Notion gets its 200 immediately. A consumer picks the message up in its own invocation with a 15-minute wall-clock budget instead of an HTTP request's, plus retries. A message is one project, not a chunk of rows: the consumer waits out the ten-second quiet window, then pages the Notion database 100 rows at a time and writes to Framer in one remove and one add. The bound moved from an HTTP request to an invocation; it didn't disappear.",
    // TODO(gururaj): add the verified row count once retested above 7,000.
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
          "The lock was also wrong: it expired after three minutes, about as long as a large sync takes, so two syncs could overlap on the same project. TTL now matches the consumer's 15-minute budget, with release in a finally and the TTL only as a crash net.",
          "The last piece is UI. A coalescing flag is invisible internal state, and invisible state is how the original bug survived. So the project card now shows a yellow callout while a follow-up is queued: “New Notion edit queued during the run”, or “A Notion edit is waiting” if a crashed run left a flag behind. Both clear themselves on the next poll.",
          "That's the part worth keeping from all of this. The queue change was architecture. The callout is the reason a user can tell the difference between working and stuck.",
        ],
      },
    ],
  },
  traction: {
    columns: ["", "Count"],
    rows: [
      { label: "Signups", value: "20" },
      { label: "Ran a real sync", value: "5" },
      { label: "Paid", value: "3" },
    ],
    note: "All organic, through AEO and the Framer marketplace, with zero ad spend. 5 of the 20 ran a real sync, and 3 of those 5 paid. I held back feature work until usage justified it.",
  },
  numbers: {
    columns: ["", "Tested up to", "Time at that size"],
    // TODO(gururaj): add the verified row count once retested above 7,000.
    // The first-sync row was removed: its tested size contradicted the failure story.
    rows: [
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
        body: "When the 7,000-row sync failed, the dashboard told me a limit had been exceeded and nothing else. I had to work out the fan-out from first principles. A sync that logs rows read, subrequests made and time spent would have named the problem in one line. The lock TTL was the same mistake in miniature: I set it to three minutes because it sounded reasonable, and a large sync takes about that long. Limits should come from measured numbers, not round ones.",
      },
    ],
  },
  closeLine: "Questions about this, or about what I could build for you.",
} as const;

/**
 * Structured layer for the case-study page. Every value here is drawn from the
 * prose in `knotcmsCase`, the homepage card, or the résumé; nothing new is claimed.
 */
export const knotcmsCaseSpec = {
  systemLabel: "Case study · System 01",
  route: "Notion → Framer CMS",
  tags: ["Live product", "Solo built", "3 paying customers"],
  facts: [
    { label: "Status", value: "Live", live: true },
    { label: "Role", value: "Founder / engineer" },
    { label: "Type", value: "Production SaaS" },
    { label: "Input", value: "Notion" },
    { label: "Output", value: "Framer CMS" },
    { label: "Infrastructure", value: "Cloudflare Workers" },
  ],
  index: [
    { n: "01", id: "system", label: "System" },
    { n: "02", id: "architecture", label: "Architecture" },
    { n: "03", id: "constraint", label: "Constraint" },
    { n: "04", id: "failure", label: "Failure" },
    { n: "05", id: "fix", label: "Fix" },
    { n: "06", id: "production", label: "Production" },
    { n: "07", id: "real-usage", label: "Real usage" },
    { n: "08", id: "judgment", label: "Judgment" },
  ],
  flow: ["Notion", "KnotCMS sync", "Framer CMS"],
  infrastructure: ["D1", "KV", "Queues", "Webhooks"],
  summary: [
    { label: "Input", value: "Notion database" },
    { label: "Process", value: "KnotCMS sync" },
    { label: "State", value: "D1 / KV" },
    { label: "Async work", value: "Queues" },
    { label: "Output", value: "Framer CMS" },
    { label: "Recovery", value: "Retries / webhook recovery" },
  ],
  architectureLine:
    "Event-driven Workers, D1 for state, KV for sync cursors, queues for retries, OAuth against Notion and Framer.",
  constraintLabels: [
    "CPU time limit",
    "Subrequest cap",
    "Rate limits",
    "Async work",
    "Retries",
    "Ordering",
    "Idempotency",
    "Backpressure",
  ],
  whyWorkersLabel: "Decision — why Workers",
  failure: {
    headline: "7,000 rows",
    sub: "Workers subrequest fan-out failure",
    sequence: [
      {
        label: "Symptom",
        text: "Requests failing with a CPU limit exceeded error, and nothing more specific than that.",
      },
      {
        label: "Root cause",
        text: "A single sync invocation issuing more outbound calls than a Worker invocation is allowed to make.",
      },
      {
        label: "Impact",
        text: "Stress testing surfaced the failure at around 7,000 rows. The error named the limit, not the fan-out behind it.",
      },
    ],
  },
  before: [
    { label: "Notion", tone: "external" },
    { label: "Worker", tone: "engine" },
    { label: "Many subrequests", tone: "plain" },
    { label: "Failure", tone: "failure" },
  ],
  after: [
    { label: "Notion", tone: "external" },
    { label: "Sync", tone: "engine" },
    { label: "Queues", tone: "state" },
    { label: "Batched work", tone: "state" },
    { label: "Framer CMS", tone: "external" },
  ],
  decision: [
    { label: "Decision", text: "Move sync work out of request fan-out" },
    { label: "Constraint", text: "Workers subrequest limit" },
    { label: "Change", text: "Webhook enqueues, a consumer runs the sync" },
    // TODO(gururaj): add the verified row count once retested above 7,000.
    {
      label: "Outcome",
      text: "Rebuilt the sync pipeline on Queues with batched invocations",
    },
  ],
  production: [
    { label: "Status", value: "Live", live: true },
    { label: "Customers", value: "3 paying, from 20 signups" },
    { label: "Billing", value: "Subscriptions, self-service" },
    { label: "Sync", value: "Production" },
  ],
  firstUserSequence: [
    "User",
    "Problem",
    "Diagnosis → fix",
    "Product change",
    "Outcome",
  ],
  screenshots: {
    overview: {
      n: "01",
      kicker: "Product surface",
      title: "Sync status",
      src: "/work/knotcms/knotcms-framer-collection.png",
      alt: "The KnotCMS project overview. The sync pipeline is active, Notion synced to Framer CMS and deployed three hours ago, seven items in Framer, webhook active, auto-publish to the live site.",
      caption:
        "Project overview: connection health and sync direction, last sync and deploy, webhook and auto-publish state.",
    },
    mapping: {
      n: "02",
      kicker: "Product surface",
      title: "Field mapping",
      src: "/work/knotcms/knotcms-mapping.png",
      alt: "The field mapping screen in the dashboard, a Notion database on the left, Framer fields on the right, a few fields mapped.",
      caption:
        "Map fields and set automation: each Notion field becomes a Framer CMS column, text as plain or rich.",
    },
    queue: {
      n: "03",
      kicker: "Infrastructure",
      title: "Cloudflare Queues",
      src: "/work/knotcms/knotcms-queue-dashboard.png",
      alt: "The Cloudflare Queues dashboard showing the sync-jobs queue as active, with five messages queued and an average lag of 13.8 seconds.",
      caption: "The sync-jobs queue in the Cloudflare dashboard.",
    },
  },
} as const;

export type ChainTone =
  | (typeof knotcmsCaseSpec.before)[number]["tone"]
  | (typeof knotcmsCaseSpec.after)[number]["tone"];
