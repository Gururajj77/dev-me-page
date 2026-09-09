# Gururaj.dev V2 Design Specification

## Objective

Redesign the existing Gururaj.dev homepage without turning it into a generic developer portfolio.

The current site already has a strong editorial/brutalist visual identity. Keep that identity, but change the visual language so the page communicates:

> frontend engineer who builds and maintains systems, platforms, component APIs, documentation infrastructure, migrations, and production product surfaces.

The website should visually connect to the engineering evidence in the resume:

- IBM Carbon Design System
- Shared component ownership
- Component APIs
- Documentation platform
- Design system adoption
- Upgrade/migration systems
- Breaking-change prevention
- CI reliability
- KnotCMS
- Event-driven Cloudflare architecture
- Queues/retries/idempotency
- Billing and provisioning
- Merchant-facing product surfaces
- Production failures and recovery

Do NOT make the site look like:

- a startup landing page
- an AI engineer portfolio
- a cyberpunk developer site
- a terminal-themed portfolio
- a dark-mode SaaS website
- a flashy motion-heavy portfolio
- a conventional "hero + projects + skills" developer portfolio

The design should remain editorial, restrained, highly structured, and slightly brutalist.

---

# 01. Design Direction

## Core visual concept

The visual system should combine:

1. Editorial typography
2. Swiss-style information hierarchy
3. Brutalist borders
4. Technical documentation
5. System diagrams
6. Interface/API vocabulary
7. Production telemetry
8. Strong whitespace
9. Small amounts of fluorescent accent color

The current visual identity is directionally correct.

Do NOT replace it.

Instead, evolve it from:

> developer portfolio

to:

> engineering system / technical portfolio

The site should look like a document describing systems that happen to be extremely well designed.

---

# 02. Preserve Existing Characteristics

Keep:

- warm off-white canvas
- black typography
- black 1px/2px borders
- large condensed/heavy display typography
- monospace metadata
- green accent
- pink accent
- yellow accent
- rectangular buttons
- sharp corners
- almost no border radius
- editorial labels
- numbered sections
- horizontal rules
- dense information blocks
- asymmetric desktop layout

Do NOT introduce:

- gradients
- glassmorphism
- blur effects
- rounded cards
- drop shadows everywhere
- 3D elements
- decorative stock imagery
- avatars
- decorative code snippets
- animated background particles

---

# 03. Core Design Principle

Every major section should answer one of these questions visually:

### A. What system does Gururaj own?

IBM Carbon / KnotCMS

### B. What scale does it operate at?

Developers, npm consumers, implementations, components

### C. What engineering decisions does he make?

APIs, migrations, documentation, failure handling

### D. What happens when things break?

Queues, retries, rollback, cache failures, production debugging

### E. What does he actually build?

Components, documentation platforms, dashboards, billing, sync infrastructure

These concepts should be visible through layout and typography, not only through paragraphs.

---

# 04. Global Design Tokens

Create a small design-token layer if the project does not already have one.

## Colors

Use approximately:

```css
--bg: #F3F0E7;
--surface: #F8F6EF;
--ink: #111111;
--muted: #66635C;
--rule: #D8D4C9;

--green: #00C982;
--pink: #FF4F9A;
--yellow: #FFC400;
```

Do not use these colors everywhere.

Use:

- green for primary action / current / system state
- pink for numbering / emphasis / selected metric
- yellow for important document/download action
- black for engineering/system information
- muted gray for secondary metadata

The page should remain approximately 85-90% neutral.

---

# 05. Borders

Use borders as structural lines, not decoration.

Primary containers:

```css
border: 2px solid var(--ink);
```

Secondary containers:

```css
border: 1px solid var(--rule);
```

Avoid rounded corners.

Use borders to create relationships between sections.

For example:

```text
┌───────────────────────────────┐
│ SYSTEM                        │
│                               │
│ component                    │
│        ↓                      │
│ documentation                │
│        ↓                      │
│ adoption                     │
└───────────────────────────────┘
```

The page should feel assembled from a technical document/grid.

---

# 06. Typography

Use the existing font stack if it is already good.

If typography needs adjustment, use:

## Display

Heavy grotesk / sans-serif.

Characteristics:

- very heavy weight
- tight tracking
- large sizes
- uppercase where appropriate

## Body

Readable neutral sans-serif.

## Metadata

Monospace.

Use monospace for:

- dates
- technologies
- metrics labels
- status
- architecture labels
- section indexes
- system states

Do NOT use monospace for large paragraphs.

---

# 07. Page Grid

Desktop:

Use a max-width around:

```css
max-width: 1320px;
```

with approximately:

```css
padding-inline: 32px;
```

The page should use a 12-column conceptual grid.

Do not force every section into a visible 12-column grid.

Use the grid to create intentional asymmetry.

---

# 08. Header

The current header is good.

Keep it minimal.

Left:

```text
GURURAJ.DEV
```

Right:

Theme toggle / existing control.

Do not add:

- navigation menu
- About
- Projects
- Blog
- Services

The homepage should remain a single document.

---

# 09. Hero

## Layout

Desktop:

Two-column structure.

Left:

approximately 2/3 width.

Right:

approximately 1/3 width.

Keep the large name.

The hero should remain:

```text
FRONTEND ENGINEER

GURURAJ J

I build the component systems
other engineers ship on,
and the product my customers
pay for.
```

The title should remain the dominant visual element.

---

# 10. Hero Technical Ownership Strip

Immediately below the main description, create a small structured metadata row.

Example:

```text
SYSTEMS
Carbon / KnotCMS

SURFACE
Components / Docs / Product

OWNERSHIP
Design → API → Implementation → Production
```

This is NOT additional marketing copy.

It is a visual metadata layer.

Use monospace labels above normal text.

The purpose is to immediately establish that the user's ownership spans the entire lifecycle.

---

# 11. Hero Right Side: Production Footprint

The right side should stop looking like a generic statistics card.

Turn it into a "production footprint" panel.

Header:

```text
PRODUCTION FOOTPRINT
```

Then show metrics as structured rows.

Example:

```text
100+
PRODUCT TEAMS
ship on components maintained

5,000+
DEVELOPERS
served internally

73K+
WEEKLY CONSUMERS
public npm

4
CORE COMPONENTS
owned end to end
```

Use the largest number at the top.

Numbers should use heavy display typography.

Labels should use small monospace uppercase typography.

Descriptions should use normal body typography.

Do not use:

- circular charts
- progress bars
- graphs
- decorative icons

The panel should resemble production telemetry or an engineering dashboard, not a marketing statistics widget.

---

# 12. Hero Status Panel

Keep the existing "Still shipping" panel.

Redesign it to look like a system status record.

Example:

```text
CURRENTLY SHIPPING

KNOTCMS
billing webhooks

STATUS
LIVE

LAST SHIPPED
4 DAYS AGO

STACK
Workers / D1 / Queues
```

Use green only for the status.

The panel should feel like a production status record.

---

# 13. Primary CTA

Keep:

```text
START A CONVERSATION →
```

Make it green.

Secondary:

```text
SEE THE CASE STUDY →
```

Keep it white/off-white with black border.

Buttons should remain rectangular.

No pill buttons.

Use subtle hover behavior only.

---

# 14. Selected Work Section

Keep:

```text
SELECTED WORK — IN DEPTH
```

The selected work section should remain a major part of the page.

However, change the project card from a large text block into a **system inspection panel**.

This is the most important redesign in the entire page.

The selected work should demonstrate that the engineer thinks in systems, not only visual interfaces.

---

# 15. KnotCMS Case Study Card

The current content is strong.

Do not rewrite the content as part of this redesign.

Change the presentation.

Desktop layout:

### Left 45%

Project identity and problem.

### Right 55%

Architecture visualization.

The architecture visualization is the key addition.

Represent KnotCMS approximately as:

```text
                    NOTION
                      │
                      │ OAuth / API
                      ↓
              ┌───────────────┐
              │  SYNC ENGINE  │
              └───────┬───────┘
                      │
             ┌────────┼────────┐
             ↓        ↓        ↓
           D1       KV       QUEUES
          state    cursors    retry
             │        │        │
             └────────┼────────┘
                      ↓
                FRAMER CMS
                      │
            ┌─────────┼─────────┐
            ↓         ↓         ↓
         BILLING   DASHBOARD  WEBHOOKS
```

Do not make this a conventional flowchart.

Make it a visual system diagram using:

- black lines
- small rectangular nodes
- monospace labels
- subtle green state indicators

No decorative illustration.

It should look like an architecture diagram from an engineering document.

---

# 16. KnotCMS Production Failure → Architecture Block

Below the architecture, create a compact engineering evidence block.

Title:

```text
PRODUCTION FAILURE
```

Then:

```text
7,000 ROWS
        ↓
WORKERS SUBREQUEST
FAN-OUT FAILURE
        ↓
QUEUE-BASED
BATCHED INVOCATIONS
        ↓
RELIABLE SYNC
```

The important point is that the design visually shows:

> problem → diagnosis → architectural change → outcome

This should be visually prominent enough that a recruiter can understand the engineering story without reading the entire case study.

---

# 17. KnotCMS Technical Metadata

At the bottom of the card:

```text
TYPESCRIPT
WORKERS
D1
KV
QUEUES
OAUTH
WEBHOOKS
```

Render each as small bordered technical tokens.

Avoid rounded badges.

Use rectangular outlined tokens consistent with the existing site.

---

# 18. Case Study CTA

Keep:

```text
READ THE CASE →
```

Align it bottom-right.

Do not make it visually louder than the case study itself.

The CTA should look like a document navigation control.

---

# 19. How I Work

Keep this section.

This is one of the strongest parts of the site.

Do NOT turn it into a generic "My principles" section.

Keep:

```text
HOW I WORK
four rules
```

But make each rule resemble a row in an engineering specification.

---

# 20. Principle Row Structure

Each principle should have:

### Column 1

Large pink index:

```text
01
```

### Column 2

Heavy title.

### Column 3

Explanation.

Desktop example:

```text
01      THE API IS THE PRODUCT
        A component's props outlive its markup...
```

Use strong vertical alignment.

Each row should have:

```css
border-top: 1px solid var(--rule);
```

The entire section gets a final bottom border.

---

# 21. Evidence Micro-labels

Do not add new prose.

Instead, connect principles to relevant work using a tiny metadata label.

Example:

```text
01
THE API IS THE PRODUCT

A component's props outlive its markup...

EVIDENCE
CARBON / COMPONENT API
```

Another:

```text
02
A BREAKING CHANGE SHIPS WITH ITS MIGRATION

...

EVIDENCE
CARBON / PLATFORM UPGRADES
```

Another:

```text
03
DOCS ARE ADOPTION, NOT DECORATION

...

EVIDENCE
CARBON / DOCUMENTATION PLATFORM
```

Another:

```text
04
THE FLOW THAT TECHNICALLY WORKS CAN STILL BE BROKEN

...

EVIDENCE
CARBON / NAVIGATION UX
```

These labels should be small and monospace.

This is important.

It connects the philosophy to actual work instead of making the principles feel like personal-brand copy.

---

# 22. Experience Section

Keep the timeline.

Do NOT turn experience into conventional cards.

The timeline is better suited to the positioning.

Change its visual treatment to resemble an engineering changelog.

Header:

```text
EXPERIENCE
ONE TIMELINE, EVERYTHING ON IT
```

Each job becomes a record.

Example:

```text
2026 → PRESENT

FOUNDER & ENGINEER
KNOTCMS

SOLO
CLOUDFLARE WORKERS
PAYING CUSTOMERS
```

Then:

```text
2024 → PRESENT

FRONTEND DEVELOPER
IBM / CARBON DESIGN SYSTEM

SHARED COMPONENTS
DOCUMENTATION PLATFORM
MIGRATIONS
```

Then:

```text
2021 → 2024

PROJECT ENGINEER
WIPRO / WELLS FARGO

ANGULAR
ENTERPRISE APPLICATIONS
MODERNIZATION
```

Use the date as a strong left-side anchor.

---

# 23. Resume CTA

Keep the yellow resume button.

Make it look like a document/action rather than a marketing CTA.

Use:

```text
RÉSUMÉ — PDF, TWO PAGES →
```

Yellow background.

Black border.

Heavy text.

This is the only yellow primary element on the page.

---

# 24. Experience Micro-Metrics

Where appropriate, show small evidence labels alongside each role.

For IBM:

```text
5,000+ DEVELOPERS
73K+ WEEKLY CONSUMERS
4 COMPONENTS OWNED
```

For KnotCMS:

```text
SOLO SHIPPED
PAYING CUSTOMER
PRODUCTION
```

For Wipro:

```text
5 ENTERPRISE APPS
ANGULAR
MODERNIZATION
```

These should not become giant cards.

Use tiny bordered blocks.

---

# 25. Toolkit Section

Keep the existing "Every day / Reach for" structure.

Do NOT create a logo wall.

Do NOT use colorful technology logos.

Do NOT make every technology equal.

The current ranking idea is good.

Make the section look like a dependency/toolchain inventory.

Example:

```text
TOOLKIT                                      10, RANKED

EVERY DAY
5 YEARS+

[TypeScript] [React] [Lit]
[Design systems] [Storybook] [PayloadCMS]

REACH FOR
SHIPPED WITH

[Next.js] [Cloudflare Workers]
[Angular] [MongoDB]
```

Keep technologies as rectangular outlined tokens.

No pills.

---

# 26. Toolkit System Layers

Visually separate the toolkit into three layers.

### UI

```text
TypeScript
React
Lit
CSS
Design systems
Storybook
```

### Product

```text
Next.js
Payload CMS
Angular
REST APIs
State management
```

### Platform

```text
Workers
D1
KV
Queues
R2
Webhooks
OAuth
```

These can remain inside the existing toolkit section.

The purpose is to visually show that the user's work spans:

```text
UI
 ↓
PRODUCT
 ↓
PLATFORM
```

Do not add a large diagram.

Use three subtle horizontal bands or labels.

---

# 27. Contact Section

Keep the existing:

```text
HERE'S EXACTLY
WHAT HAPPENS NEXT
```

This is good.

Treat the green section as the final "interface contract."

Inside:

```text
01
SEND
team + problem + level

02
REPLY
yes/no on fit within a day

03
IF IT FITS
30-minute platform discussion
```

Make the numbers monospace/pink.

Make the labels bold.

---

# 28. Email Block

Keep the email block white.

It should look like an input/control rather than a decorative card.

Example:

```text
EMAIL — FASTEST

jdotgururaj@gmail.com
                                →
```

Use a black 2px border.

No rounded corners.

---

# 29. Social Links

GitHub and LinkedIn should remain secondary.

Two equal-width boxes.

Do not use giant social icons.

Example:

```text
GitHub                         ↗
LinkedIn                       ↗
```

Keep them structurally similar to the email control but visually subordinate.

---

# 30. Footer

Keep it extremely minimal.

Current concept:

```text
Gururaj J · Bengaluru, IND · UTC +05:30
```

is good.

Keep it.

Add no social clutter.

---

# 31. Mobile Layout

Do not simply stack the desktop layout.

Design mobile deliberately.

At <= 768px:

### Header

Simple horizontal row.

### Hero

Single column.

Name remains large but reduce size enough to avoid awkward wrapping.

### Metrics

Two-column grid:

```text
100+          5,000+
teams         developers

73K+          4
consumers     components
```

### Status

Full width.

### KnotCMS

Stack:

```text
PROJECT
↓
ARCHITECTURE
↓
FAILURE → FIX
↓
TECH STACK
```

### Principles

Three columns become:

```text
01
TITLE
DESCRIPTION
EVIDENCE
```

### Experience

Timeline becomes a vertical list.

### Toolkit

Token groups wrap naturally.

### Contact

Full width.

Do not introduce horizontal scrolling.

---

# 32. Responsive Typography

Suggested desktop:

```css
Hero name: 72-96px
Hero statement: 34-44px
Section heading: 42-56px
Metric number: 48-72px
Project title: 32-42px
Body: 15-17px
Metadata: 10-12px
```

Mobile:

```css
Hero name: 48-64px
Hero statement: 28-34px
Section heading: 32-40px
Metric number: 36-48px
Body: 15-16px
```

Do not let typography create horizontal overflow.

Adjust exact values based on the existing font metrics and actual viewport.

---

# 33. Animation

Keep animation extremely restrained.

Allowed:

- subtle hover background change
- border color transition
- button movement of 2-4px
- architecture nodes appearing when entering viewport
- very subtle status indicator

Not allowed:

- parallax
- scroll-jacking
- text scrambling
- huge entrance animations
- animated gradients
- floating cards
- cursor-following effects
- WebGL
- infinite marquees

The site should still look excellent with all animation disabled.

---

# 34. Architecture Diagram Implementation

Prefer HTML/CSS over a giant image.

Use semantic/accessible HTML elements where practical.

Conceptually:

```html
<div>
  <div>NOTION</div>
  <div>SYNC ENGINE</div>
  <div>D1</div>
  <div>KV</div>
  <div>QUEUES</div>
  <div>FRAMER CMS</div>
</div>
```

Use CSS borders and pseudo-elements for connectors where practical.

If the existing project already has an appropriate diagram system, use it.

Do NOT add a large visualization library just for this.

The diagram should remain lightweight and responsive.

---

# 35. Content Rules

This is a DESIGN redesign.

Do not rewrite the existing copy.

Do not invent:

- metrics
- clients
- achievements
- technologies
- job titles
- customer counts
- performance numbers

The resume is the source of truth for factual claims.

Where the website currently contains a metric that differs from the resume, DO NOT silently modify it as part of this design task.

Instead, preserve the current site's content unless a value must be changed for an explicit content task.

This implementation is primarily visual.

---

# 36. Information Hierarchy

The final page should visually communicate this hierarchy:

```text
IDENTITY
Frontend engineer
        ↓
SYSTEMS
Carbon + KnotCMS
        ↓
SCALE
developers / consumers / implementations
        ↓
ENGINEERING JUDGMENT
APIs / migrations / docs / UX
        ↓
PRODUCTION
failure / recovery / architecture
        ↓
EXPERIENCE
IBM / KnotCMS / Wipro
        ↓
TOOLCHAIN
UI / Product / Platform
        ↓
CONTACT
```

This hierarchy matters more than adding visual decoration.

---

# 37. What NOT to Change

Do not change:

- overall one-page architecture
- off-white background
- editorial/brutalist direction
- strong black borders
- large typography
- green CTA section
- numbered principles
- timeline concept
- compact toolkit
- minimal header
- minimal footer

The goal is not to create a new website.

The goal is to make the current website communicate the engineering depth already present in the resume.

---

# 38. Visual Test

After implementation, temporarily hide all body copy and inspect the page.

The page should still visually communicate:

```text
ENGINEER
    ↓
COMPONENT SYSTEMS
    ↓
PRODUCT SYSTEMS
    ↓
PLATFORM
    ↓
PRODUCTION
```

If it instead looks like:

```text
PORTFOLIO
    ↓
PROJECT CARD
    ↓
SKILLS
    ↓
CONTACT
```

the redesign has failed.

The visual hierarchy must communicate systems ownership even before the user reads every paragraph.

---

# 39. Implementation Constraints

Before changing anything:

1. Inspect the existing project structure.
2. Identify the current components.
3. Identify the current CSS/design-token system.
4. Reuse existing components where sensible.
5. Do not rewrite the application architecture just to implement the visual redesign.
6. Do not introduce a new UI framework.
7. Do not introduce a new CSS framework unless the project already uses one.
8. Keep accessibility intact.
9. Keep semantic HTML.
10. Keep keyboard navigation.
11. Keep existing links and interactions working.
12. Keep existing theme toggle functionality working.
13. Keep the site fast.
14. Keep the existing content unless the specification explicitly changes its presentation.
15. Avoid unnecessary dependencies.

---

# 40. Implementation Order and Final Acceptance Criteria

## Implementation order

Implement in this order:

### Phase 1
Global design tokens and typography.

### Phase 2
Hero + production footprint.

### Phase 3
KnotCMS system card + architecture visualization.

### Phase 4
How I Work principles.

### Phase 5
Experience timeline.

### Phase 6
Toolkit.

### Phase 7
Contact.

### Phase 8
Mobile layout.

### Phase 9
Micro-interactions.

Do not start with animation.

---

## Final acceptance criteria

The redesign is complete only if all of these are true:

- [ ] It still immediately looks like Gururaj.dev.
- [ ] It does not resemble a generic developer portfolio.
- [ ] It retains the off-white / black / green / pink / yellow visual system.
- [ ] The hero clearly establishes frontend + systems ownership.
- [ ] Metrics look like production telemetry, not generic portfolio statistics.
- [ ] KnotCMS visually communicates architecture.
- [ ] KnotCMS visually communicates failure → diagnosis → architectural fix.
- [ ] The four principles visually connect to real engineering work.
- [ ] Experience reads like an engineering timeline/changelog.
- [ ] Toolkit communicates UI → Product → Platform.
- [ ] Contact remains simple and direct.
- [ ] No unnecessary gradients.
- [ ] No excessive animation.
- [ ] No rounded-card SaaS aesthetic.
- [ ] No decorative developer clichés.
- [ ] Desktop has strong asymmetric editorial composition.
- [ ] Mobile is intentionally designed rather than simply stacked.
- [ ] Existing content and functionality remain intact.
- [ ] Accessibility is not degraded.
- [ ] Performance is not degraded.
- [ ] The site looks credible to a senior frontend/design-systems hiring manager within the first 10 seconds.

---

# Final design test

Ask this after implementation:

> "If I saw this site without reading the copy, would I assume this person mainly makes landing pages?"

If yes, redesign failed.

The correct impression should be:

> "This person builds interfaces, but they think in systems."

That is the entire purpose of V2.

The goal is not to make the website prettier.

The goal is to make the visual system prove the engineering identity already present in the resume.
