export const site = {
  name: "Gururaj J",
  title: "Gururaj J — Frontend Engineer",
  description:
    "Frontend engineer building developer platforms, design systems, and products people actually use.",
  email: "jdotgururaj@gmail.com",
  location: "Bengaluru, India",
  links: {
    github: "https://github.com/Gururajj77",
    linkedin: "https://www.linkedin.com/in/jgururaj/",
    knotcms: "https://knotcms.com",
    resume: "/resume.pdf",
    email: "mailto:jdotgururaj@gmail.com",
  },
} as const;

export const hero = {
  name: "I'm Gururaj.",
  intro:
    "Frontend engineer building developer platforms, design systems, and products people actually use.",
  currently: [
    { label: "Working", value: "IBM Carbon Design System" },
    { label: "Building", value: "KnotCMS" },
    {
      label: "Learning",
      value: "Platform infrastructure",
    },
    {
      label: "Seeking",
      value: "Frontend platform roles",
    },
  ],
} as const;

export const about = {
  body: "I care about the systems behind the interface — shared components, documentation platforms, and tooling that makes other engineers faster. At IBM I work on Carbon Design System, the UI infrastructure thousands of developers depend on. Outside of that, I build KnotCMS end to end: a Cloudflare-based platform that keeps Notion content and Framer CMS in sync without manual work. I enjoy owning hard problems from architecture to polish.",
} as const;

export const work = [
  {
    title: "IBM Carbon Design System",
    href: "https://carbondesignsystem.com",
    role: "Frontend Developer",
    period: "2024 — Present",
    description:
      "Shared UI components, documentation infrastructure, and platform upgrades used across thousands of product teams — with a focus on reliability for tens of thousands of weekly NPM consumers.",
  },
  {
    title: "KnotCMS",
    href: "https://knotcms.com",
    role: "Founder & Engineer",
    period: "2026 — Present",
    description:
      "A SaaS platform that automates Notion → Framer CMS synchronization. Event-driven architecture on Cloudflare Workers, with OAuth, billing, webhooks, and a self-service dashboard — owned from idea to production.",
  },
] as const;

/** Quiet craft line under Selected Work — not a resume skills dump. */
export const craft = [
  "React",
  "Next.js",
  "TypeScript",
  "Cloudflare",
  "Design systems",
  "Web Components",
] as const;

export const principles = [
  "Software should feel invisible.",
  "Developer experience is a product.",
  "Build systems, not features.",
  "Ownership matters more than titles.",
  "Ship. Improve. Repeat.",
] as const;

export const timeline = [
  {
    year: "2026",
    title: "Building KnotCMS",
    detail: "Launched a production SaaS for Notion and Framer CMS sync.",
  },
  {
    year: "2024",
    title: "IBM Carbon Design System",
    detail: "Joined India Software Labs to work on shared UI platform infrastructure.",
  },
  {
    year: "2021",
    title: "Started building frontend professionally",
    detail: "Began at Wipro modernizing enterprise applications for Wells Fargo.",
  },
] as const;

export const outside = [
  {
    title: "Independent products",
    body: "KnotCMS is how I practice full ownership — product, architecture, onboarding, billing, and launch — not just the frontend slice.",
  },
  {
    title: "Design systems craft",
    body: "I spend a lot of time thinking about component APIs, documentation platforms, and the invisible infrastructure that keeps product teams consistent.",
  },
  {
    title: "Platform engineering",
    body: "I'm deepening how serverless systems, webhooks, and developer tooling fit together — the layer that makes product surfaces possible.",
  },
] as const;

export const footerLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Resume", href: site.links.resume },
  { label: "Email", href: site.links.email },
] as const;

export const sectionNav = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "principles", label: "Principles" },
  { id: "timeline", label: "Timeline" },
  { id: "outside", label: "Outside" },
] as const;
