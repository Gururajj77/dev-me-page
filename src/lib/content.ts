export const site = {
  name: "Gururaj J",
  title: "Gururaj J — Frontend Engineer",
  description:
    "Frontend engineer building developer platforms, design systems, and products people actually use.",
  email: "jdotgururaj@gmail.com",
  phone: "+91 94836 93267",
  phoneHref: "tel:+919483693267",
  location: "Bengaluru, India",
  status: "Open to frontend platform roles",
  links: {
    github: "https://github.com/Gururajj77",
    linkedin: "https://www.linkedin.com/in/jgururaj/",
    knotcms: "https://knotcms.com",
    resume: "/resume.pdf",
    email: "mailto:jdotgururaj@gmail.com",
  },
} as const;

export const hero = {
  greeting: "Hello, I'm Gururaj.",
  role: "Frontend Engineer — developer platforms, design systems, and products people actually use.",
} as const;

export const about = {
  body: "I care about the systems behind the interface — shared components, documentation platforms, and tooling that makes other engineers faster. At IBM I work on Carbon Design System, the UI infrastructure thousands of developers depend on. Outside of that, I build KnotCMS end to end: a Cloudflare-based platform that keeps Notion content and Framer CMS in sync without manual work. I enjoy owning hard problems from architecture to polish.",
} as const;

export type SkillIconId =
  | "react"
  | "nextjs"
  | "angular"
  | "typescript"
  | "javascript"
  | "html5"
  | "css3"
  | "cloudflare"
  | "d1"
  | "kv"
  | "webhooks"
  | "rest"
  | "oauth"
  | "githubactions"
  | "designsystems"
  | "lit"
  | "storybook"
  | "payload"
  | "monorepos"
  | "performance"
  | "git"
  | "github"
  | "pnpm"
  | "npm"
  | "turborepo"
  | "codecov"
  | "vite";

export const skillGroups = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    group: "Platform & Infrastructure",
    items: [
      { name: "Cloudflare Workers", icon: "cloudflare" },
      { name: "Cloudflare D1", icon: "d1" },
      { name: "Cloudflare KV", icon: "kv" },
      { name: "Webhooks", icon: "webhooks" },
      { name: "REST APIs", icon: "rest" },
      { name: "OAuth", icon: "oauth" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    group: "Developer Experience",
    items: [
      { name: "Design Systems", icon: "designsystems" },
      { name: "Web Components (Lit)", icon: "lit" },
      { name: "Storybook", icon: "storybook" },
      { name: "Payload CMS", icon: "payload" },
      { name: "Monorepos", icon: "monorepos" },
      { name: "Performance Optimization", icon: "performance" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "pnpm", icon: "pnpm" },
      { name: "npm", icon: "npm" },
      { name: "TurboRepo", icon: "turborepo" },
      { name: "Codecov", icon: "codecov" },
      { name: "Vite", icon: "vite" },
    ],
  },
] as const satisfies ReadonlyArray<{
  group: string;
  items: ReadonlyArray<{ name: string; icon: SkillIconId }>;
}>;

export const experience = [
  {
    company: "IBM India Pvt. Ltd.",
    role: "Frontend Developer, Carbon Design System",
    period: "Feb 2024 — Present",
    summary:
      "Shared UI components and documentation infrastructure for Carbon, supporting thousands of developers — with platform upgrades, content versioning, and release reliability for large NPM audiences.",
  },
  {
    company: "KnotCMS",
    role: "Founder & Engineer",
    period: "Jun 2026 — Present",
    summary:
      "Built a SaaS platform that syncs Notion databases to Framer CMS. Owned architecture, Cloudflare Workers backend, dashboard, billing, and launch end to end.",
  },
  {
    company: "Wipro Limited",
    role: "Project Engineer — Cloud Migration & Modernization",
    period: "Sep 2021 — Feb 2024",
    summary:
      "Led modernization of enterprise applications from WebForms to Angular for Wells Fargo, with reusable component libraries, testing, and CI/CD integration.",
  },
] as const;

export const projects = [
  {
    title: "IBM Carbon Design System",
    href: "https://carbondesignsystem.com",
    description:
      "Shared UI platform and documentation infrastructure used across product teams — components, content systems, and upgrades adopted at scale.",
  },
  {
    title: "KnotCMS",
    href: "https://knotcms.com",
    description:
      "Notion → Framer CMS sync as a product: event-driven Cloudflare architecture, OAuth, billing, webhooks, and a self-service dashboard.",
  },
] as const;

export const education = [
  {
    school: "PES Institute of Technology and Management",
    detail: "Bachelor of Engineering",
    period: "CGPA 7.73",
  },
] as const;

export const linkItems = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "KnotCMS", href: site.links.knotcms },
  { label: "Resume", href: site.links.resume },
  { label: "Email", href: site.links.email },
] as const;

export const footerLinks = linkItems;

export const sectionNav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "links", label: "Links" },
  { id: "contact", label: "Contact" },
] as const;
