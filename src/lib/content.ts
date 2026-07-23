export const site = {
  name: "Gururaj J",
  brand: "gururaj.dev",
  title: "Gururaj J — Frontend Engineer",
  description:
    "Frontend engineer building developer platforms, design systems, and products people actually use.",
  email: "jdotgururaj@gmail.com",
  phone: "+91 94836 93267",
  phoneHref: "tel:+919483693267",
  location: "Bengaluru, India",
  timezone: "UTC +05:30 · IST",
  status: "Open to frontend platform roles",
  years: "05",
  yearsLabel: "Years in production frontend",
  links: {
    github: "https://github.com/Gururajj77",
    linkedin: "https://www.linkedin.com/in/jgururaj/",
    knotcms: "https://knotcms.com",
    carbon: "https://carbondesignsystem.com",
    resume: "/resume.pdf",
    email: "mailto:jdotgururaj@gmail.com",
  },
} as const;

export const hero = {
  role: "Frontend Engineer — Developer Platforms",
  bio: "I build the systems behind the interface — shared components, documentation platforms, and tooling that make other engineers faster. At IBM I work on Carbon Design System. Outside of that, I ship KnotCMS end to end.",
} as const;

export const stackTicker = [
  "React",
  "TypeScript",
  "Next.js",
  "Web Components",
  "Cloudflare Workers",
  "Storybook",
  "Design Systems",
  "Lit",
  "D1",
  "OAuth",
  "Monorepos",
  "CI/CD",
] as const;

export const ctaTicker = [
  "Open to interesting problems",
  "Let's talk",
  "Email me",
  "Design systems",
  "Developer platforms",
] as const;

export const projects = [
  {
    title: "KnotCMS",
    role: "Founder & Engineer",
    period: "Jun 2026 — Present",
    href: "https://knotcms.com",
    accent: "green" as const,
    mark: "K",
    description:
      "Notion → Framer CMS sync as a product: event-driven Cloudflare architecture, OAuth, billing, webhooks, and a self-service dashboard.",
    tags: [
      "TypeScript",
      "Cloudflare Workers",
      "D1",
      "KV",
      "OAuth",
      "Webhooks",
    ],
  },
  {
    title: "Carbon Design System",
    role: "Frontend Developer / IBM",
    period: "Feb 2024 — Present",
    href: "https://carbondesignsystem.com",
    accent: "blue" as const,
    mark: "C",
    description:
      "Shared UI platform and documentation infrastructure used across product teams — components, content systems, and upgrades adopted at scale.",
    tags: ["React", "TypeScript", "Lit", "Storybook", "Monorepos", "CI/CD"],
  },
] as const;

export const metrics = [
  {
    value: "0",
    label: "Manual content updates",
    accent: "yellow" as const,
  },
  {
    value: "5,000+",
    label: "Developers served",
    accent: "pink" as const,
  },
  {
    value: "40K",
    label: "Weekly NPM consumers",
    accent: "green" as const,
  },
  {
    value: "85%",
    label: "Test coverage · @carbon/react",
    accent: "blue" as const,
  },
] as const;

export const experience = [
  {
    company: "KnotCMS",
    role: "Founder & Engineer",
    period: "Jun 2026 — Present",
    accent: "green" as const,
    summary:
      "Built a SaaS platform that syncs Notion databases to Framer CMS. Owned architecture, Cloudflare Workers backend, dashboard, billing, and launch end to end.",
  },
  {
    company: "IBM India Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Feb 2024 — Present",
    accent: "blue" as const,
    summary:
      "Shared UI components and documentation infrastructure for Carbon, supporting thousands of developers — platform upgrades, content versioning, and release reliability.",
  },
  {
    company: "Wipro Limited",
    role: "Project Engineer",
    period: "Sep 2021 — Feb 2024",
    accent: "yellow" as const,
    summary:
      "Led modernization of enterprise applications from WebForms to Angular for Wells Fargo, with reusable component libraries, testing, and CI/CD integration.",
  },
] as const;

export const skillGroups = [
  {
    group: "React & TypeScript",
    accent: "yellow" as const,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Design & Web",
    accent: "pink" as const,
    items: [
      "Design Systems",
      "Web Components (Lit)",
      "Storybook",
      "Performance",
      "Vite",
    ],
  },
  {
    group: "Platform & Infrastructure",
    accent: "green" as const,
    items: [
      "Cloudflare Workers",
      "Cloudflare D1",
      "Cloudflare KV",
      "REST APIs",
      "OAuth",
      "Webhooks",
      "GitHub Actions",
    ],
  },
  {
    group: "Developer Experience",
    accent: "blue" as const,
    items: [
      "Monorepos",
      "TurboRepo",
      "pnpm",
      "npm",
      "Git",
      "Codecov",
      "Payload CMS",
    ],
  },
] as const;

export const nav = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
