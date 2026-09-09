# Gururaj.dev V2 Refinement Specification for Claude Code

## Objective

The current V2 redesign is directionally correct.

Do **not** rebuild it from scratch.

Do **not** make the page leaner.

Do **not** remove the information density or structured engineering-document approach that the current V2 introduced.

The current V2 has successfully moved the site from:

> developer portfolio

toward:

> frontend engineer who builds systems.

Keep that.

The refinement needed now is to restore some of the original site's visual confidence, personality, typography, whitespace, and editorial rhythm.

The target is:

> **An engineer with unusually strong product and interface taste who builds systems.**

Not:

> a generic developer portfolio

and not:

> an engineering documentation portal.

The existing V2 structure is good and should remain.

The architecture diagram, detailed KnotCMS card, production-failure section, evidence labels, timeline, toolkit layers, and structured metadata should all remain.

The goal is **refinement, not reduction**.

---

# 01. First, inspect the current implementation

Before modifying anything:

1. Inspect the full project structure.
2. Identify the homepage component(s).
3. Identify all homepage sections/components.
4. Identify the current CSS/design-token system.
5. Identify typography and font loading.
6. Identify responsive breakpoints.
7. Identify existing animations.
8. Identify the theme toggle implementation.
9. Run the site locally.
10. Inspect the current rendered page at desktop and mobile widths.

Work from the actual implementation.

Do not assume the existing code matches the previous design specification perfectly.

Do not rewrite working architecture simply to make the visual changes.

---

# 02. Preserve the current V2 information architecture

Keep the current overall page sequence.

The current structure is good:

```text
HEADER
↓
HERO
↓
PRODUCTION FOOTPRINT
↓
CURRENTLY SHIPPING
↓
SELECTED WORK / KNOTCMS
↓
HOW I WORK
↓
EXPERIENCE + TOOLKIT
↓
CONTACT
↓
FOOTER
```

Do not remove sections.

Do not add major new sections.

Do not turn this into a shorter landing page.

The current V2 is allowed to remain information-rich.

The site should feel like a dense but highly intentional technical portfolio.

---

# 03. Preserve the current V2 structuring

This is important.

The current V2 introduced useful structure that should remain.

Keep:

- production footprint panel
- currently shipping panel
- system inspection framing
- KnotCMS architecture diagram
- production failure → architecture change section
- technical metadata
- evidence labels
- numbered engineering principles
- experience timeline
- experience micro-metrics
- UI / Product / Platform toolkit layers
- contact sequence
- section numbering
- system labels
- technical metadata

Do not simplify these into generic cards.

Do not remove details simply to create more whitespace.

The information density is part of the site's identity.

The refinement should make that density easier and more pleasant to scan.

---

# 04. Core visual correction

The current V2 has gone slightly too far toward:

```text
ENGINEERING DOCUMENTATION
```

Bring it back toward:

```text
EDITORIAL PORTFOLIO
+
ENGINEERING SYSTEM
```

The visual balance should be approximately:

```text
60% editorial / personal visual identity
40% technical system language
```

The current structure can remain 100% intact.

This is a **visual hierarchy adjustment**, not a content reduction.

The page should communicate:

> "This person is a serious engineer, and they have unusually good taste."

---

# 05. Preserve the original visual personality

Keep the characteristics that made the original site distinctive:

- warm off-white background
- strong black borders
- large typography
- pink accents
- green primary action
- yellow resume action
- sharp rectangular controls
- asymmetric layouts
- editorial spacing
- oversized headings
- monospace metadata
- minimal rounded corners
- strong horizontal rules

Do not replace the design system.

Do not introduce a new aesthetic.

The current V2 should still clearly look like Gururaj.dev.

---

# 06. Global color system

Keep the current neutral palette.

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

Do not make the page more colorful.

The page should remain approximately 85-90% neutral.

Use:

### Green

- primary CTA
- live/current state
- important system state
- contact block

### Pink

- section numbers
- important emphasis
- selected metrics

### Yellow

- résumé action

### Black

- main typography
- structural borders
- engineering content

### Muted gray

- secondary copy
- metadata
- supporting descriptions

---

# 07. Typography hierarchy

The current V2 is too small in several places.

Increase the scale of the things that should dominate.

Suggested desktop targets:

```text
Hero name:
72-96px

Hero statement:
34-44px

Section headings:
42-56px

Major metric:
56-76px

Project title:
32-42px

Principle title:
26-34px

Job title:
20-26px

Body:
15-17px

Metadata:
9-11px
```

Suggested mobile:

```text
Hero name:
48-64px

Hero statement:
28-34px

Section heading:
32-40px

Major metric:
36-48px

Principle title:
24-30px

Body:
15-16px

Metadata:
9-10px
```

These are visual targets, not absolute values.

Use the actual font metrics.

The key requirement:

> Important information should look important.

---

# 08. Do not overuse monospace

The current V2 uses monospace correctly in concept, but slightly too frequently.

Monospace should communicate:

> metadata / system state / technical annotation

Use monospace for:

- dates
- technology labels
- section indexes
- status
- architecture labels
- evidence labels
- small metric labels
- system states

Use the main sans-serif for:

- hero
- section titles
- project names
- principle titles
- job titles
- important statements
- descriptions
- body copy

Do not make the entire page feel like a terminal or technical documentation site.

---

# 09. Restore whitespace without reducing content

Do not solve density by deleting content.

Instead:

- increase spacing between major sections
- increase spacing around major headings
- increase padding around important panels
- increase space around project titles
- increase line-height in body copy
- allow large visual elements to breathe

Inside detailed sections, metadata can remain dense.

The intended rhythm is:

```text
BIG IDEA
    ↓
supporting detail
    ↓
technical metadata
    ↓
BIG IDEA
```

not:

```text
small label
small label
small label
small label
small label
```

---

# 10. Hero

Keep the current V2 hero structure.

Desktop should remain approximately:

```text
┌──────────────────────────────────────┬─────────────────────┐
│                                      │                     │
│ FRONTEND ENGINEER                    │ PRODUCTION          │
│                                      │ FOOTPRINT            │
│ GURURAJ J                            │                     │
│                                      │ 100+                │
│ I build the component systems        │ ...                 │
│ other engineers ship on,             │                     │
│ and the product my customers         │                     │
│ pay for.                             │                     │
│                                      │                     │
│ SYSTEMS / SURFACE / OWNERSHIP        │ CURRENTLY SHIPPING  │
│                                      │                     │
│ CTA / CASE STUDY                     │                     │
└──────────────────────────────────────┴─────────────────────┘
```

Keep the ownership strip.

Keep the right-side production footprint.

Keep the currently-shipping panel.

Do not make the hero leaner.

---

# 11. Hero name

Make:

```text
GURURAJ J
```

the dominant personal visual anchor.

The name should feel like a personal identity mark.

It should not look like a section heading.

Keep the pink offset/shadow treatment from the original design if it is currently present.

Do not remove the visual personality around the name.

Do not introduce a gradient.

The name should be the first thing the eye understands.

---

# 12. Hero statement

Keep the current statement:

```text
I build the component systems
other engineers ship on,
and the product my customers
pay for.
```

It should remain large and confident.

Do not make this text smaller to fit more metadata.

The statement is the positioning.

The technical metadata beneath it is proof.

---

# 13. Hero technical ownership strip

Keep:

```text
SYSTEMS
Carbon / KnotCMS

SURFACE
Components / Docs / Product

OWNERSHIP
Design → API → Implementation → Production
```

This is good.

Do not remove it.

Make it visually subordinate to the hero statement.

Use:

- small uppercase monospace labels
- readable sans-serif values
- subtle rules
- generous horizontal spacing

Do not turn it into three giant cards.

---

# 14. Production footprint

Keep the current V2 production footprint panel and its structured format.

Do not reduce it to only three numbers.

The current structured density is useful.

The panel should retain the feeling of:

```text
PRODUCTION FOOTPRINT

100+
product teams ship on
components maintained

5,000+
developers served

129K
weekly npm consumers

85%
test coverage

4
core components owned end to end
```

Use the actual current site values.

Do not invent, correct, reconcile, or change content during this design task.

The purpose is visual hierarchy.

Make the top metric visually dominant while keeping the other metrics visible.

---

# 15. Production footprint hierarchy

Within the footprint panel:

### Primary

The largest number should be the dominant element.

### Secondary

Other metrics should be clearly visible but smaller.

### Tertiary

Labels and descriptions should be smaller.

The structure should resemble:

```text
100+

PRODUCT TEAMS
ship on components maintained


5,000+     DEVELOPERS SERVED

129K       WEEKLY NPM CONSUMERS

85%        TEST COVERAGE

4          CORE COMPONENTS
```

Do not turn the panel into a dashboard with charts.

Typography and rules are enough.

---

# 16. Currently Shipping panel

Keep the current V2 panel.

It should remain a compact production-status record:

```text
CURRENTLY SHIPPING

PRODUCT
KnotCMS · billing webhooks

STATUS
LIVE

LAST SHIPPED
4 days ago

STACK
Workers / D1 / Queues

PAGE UPDATED
...
```

Do not remove its metadata.

Instead, create a hierarchy between:

- title
- product
- live status
- supporting metadata

The current structured panel is useful.

---

# 17. Selected Work section

Keep:

```text
SELECTED WORK — IN DEPTH
```

Keep the small section number.

Keep the "system inspection" framing.

The section should feel like the user is moving from the personal introduction into a deep engineering artifact.

Do not make this section shorter.

---

# 18. KnotCMS card

Keep the current V2 structure.

The project should continue to have:

```text
SYSTEM / PROJECT
↓
PROJECT DESCRIPTION
↓
WHY IT MATTERS
↓
RUNNING NOW
↓
ARCHITECTURE
↓
PRODUCTION FAILURE
↓
TECHNICAL METADATA
↓
CASE STUDY CTA
```

This structure is good.

Do not flatten it into:

```text
KnotCMS
one paragraph
one diagram
one button
```

The detailed structure is part of what makes the project credible.

---

# 19. KnotCMS architecture diagram

Keep the existing architecture diagram.

**Do not simplify it into a smaller four-node diagram.**

The current level of technical detail is intentional and should remain.

Keep the relationships between:

```text
NOTION
↓
SYNC ENGINE
↓
D1 / KV / QUEUES
↓
FRAMER CMS
↓
BILLING / DASHBOARD / WEBHOOKS
```

The architecture should continue to show the actual system structure.

However, improve the visual presentation:

- increase whitespace around the diagram
- make nodes slightly larger
- make labels more readable
- use stronger visual hierarchy between primary and secondary nodes
- keep connectors clean
- avoid unnecessary visual noise
- maintain the existing engineering-diagram aesthetic

Do not replace the diagram with a decorative illustration.

Do not use colorful nodes.

Do not add icons.

Do not use gradients.

The architecture should remain a serious technical visualization.

---

# 20. KnotCMS architecture hierarchy

Make the primary path visually obvious:

```text
NOTION
   ↓
SYNC ENGINE
   ↓
QUEUES
   ↓
FRAMER CMS
```

Then visually subordinate infrastructure:

```text
D1
KV
WEBHOOKS
OAUTH
```

And downstream product surfaces:

```text
BILLING
DASHBOARD
WEBHOOKS
```

This does NOT mean removing those nodes.

It means using:

- size
- line weight
- spacing
- typography

to create hierarchy.

The diagram can remain detailed.

It simply should not make every node equally important.

---

# 21. KnotCMS production failure block

Keep the existing detailed production-failure section.

This is one of the strongest parts of the page.

Use the existing structure around:

```text
PROBLEM
7,000 ROWS

FAILURE
WORKERS SUBREQUEST FAN-OUT

CHANGE
QUEUE-BASED BATCHED INVOCATIONS

OUTCOME
RELIABLE SYNC
```

Do not remove the detailed labels or supporting context.

Make the actual values larger than the metadata.

The visual hierarchy should be:

```text
7,000 ROWS
        ↓
WORKERS SUBREQUEST FAN-OUT
        ↓
QUEUE-BASED BATCHED INVOCATIONS
        ↓
RELIABLE SYNC
```

The user should understand the story quickly.

---

# 22. KnotCMS technical metadata

Keep the technical tokens:

```text
TypeScript
Workers
D1
KV
Queues
OAuth
Webhooks
```

Keep them rectangular.

Keep them compact.

No pill shapes.

No technology logos.

No colorful badges.

The technical metadata should support the architecture rather than compete with it.

---

# 23. KnotCMS CTA

Keep:

```text
READ THE CASE →
```

Keep it bottom-right.

Keep it visually subordinate to the project title and architecture.

It should feel like document navigation.

Do not turn it into a giant CTA.

---

# 24. How I Work

Keep the current four-rule structure.

Keep:

```text
01
THE API IS THE PRODUCT

02
A BREAKING CHANGE SHIPS WITH ITS MIGRATION

03
DOCS ARE ADOPTION, NOT DECORATION

04
THE FLOW THAT TECHNICALLY WORKS CAN STILL BE BROKEN
```

Keep the detailed descriptions.

Keep the evidence labels.

Do not reduce this section.

---

# 25. How I Work visual hierarchy

The current V2 makes these rows too uniform.

Retain the structured three-column layout, but increase the visual weight of the principle titles.

Each row should read:

```text
01

THE API IS
THE PRODUCT

EVIDENCE
CARBON / COMPONENT API

A component's props outlive its markup...
```

The title should be much larger than:

- evidence label
- supporting description
- metadata

The descriptions can remain the same length.

Do not remove them.

---

# 26. Principle evidence labels

Keep:

```text
EVIDENCE
CARBON / COMPONENT API
```

and equivalent mappings.

These are important because they prove the principles come from actual work.

Make them small.

Do not make them visually louder than the principle.

Use monospace.

---

# 27. Principle section spacing

Do not compress the four rows.

Give each row enough vertical space for:

- number
- title
- evidence
- description

Use horizontal rules to separate them.

The section should feel like four distinct ideas, not four records in a table.

---

# 28. Experience section

Keep the timeline.

Keep the current V2 structured layout.

Do not convert the timeline into large cards.

The timeline is an important part of the engineering-story format.

The issue is not that the timeline is too detailed.

The issue is that the current typography makes it feel too compressed.

Increase:

- job title size
- company name visibility
- vertical spacing
- metric readability

Keep:

- dates
- metadata
- evidence tokens
- role structure

---

# 29. IBM experience hierarchy

IBM should remain the strongest professional experience block.

The page should visually communicate:

```text
IBM / CARBON DESIGN SYSTEM

FRONTEND DEVELOPER

5,000+ DEVELOPERS
73K+ WEEKLY CONSUMERS
3,400+ IMPLEMENTATIONS

COMPONENTS
DOCUMENTATION
NAVIGATION
MIGRATIONS
CI RELIABILITY
```

Do not reproduce the entire resume.

Do not reduce it to only:

```text
SHARED COMPONENTS
DOCUMENTATION
MIGRATIONS
```

Give the IBM entry enough visual presence to communicate scale.

The resume confirms the depth of this work, including component ownership, documentation infrastructure, navigation UX, migration paths, and CI reliability. The website should visually support that story.

---

# 30. KnotCMS experience hierarchy

KnotCMS should communicate:

```text
FOUNDER & ENGINEER

SOLO
PRODUCTION
PAYING CUSTOMER
CLOUDFLARE
```

Keep these as compact evidence labels.

The large KnotCMS case study already provides the detailed story.

Do not duplicate all of the case-study content here.

---

# 31. Wipro experience hierarchy

Keep Wipro visually subordinate to IBM and KnotCMS.

Use:

```text
PROJECT ENGINEER

WIPRO · WELLS FARGO

5 ENTERPRISE APPS
ANGULAR
MODERNIZATION
```

Do not make every role visually equal.

The visual hierarchy should reflect the actual portfolio story.

---

# 32. Experience micro-metrics

Keep the current small bordered evidence tokens.

Do not turn them into giant cards.

Examples:

```text
5,000+ DEVELOPERS
73K+ WEEKLY CONSUMERS
4 COMPONENTS OWNED
```

Use compact groups where possible.

The goal is to provide proof without overwhelming the role titles.

---

# 33. Resume button

Keep:

```text
RÉSUMÉ — PDF, TWO PAGES →
```

Keep the yellow background.

Keep the black border.

Keep it prominent.

This remains the strongest action inside the experience area.

Do not introduce another competing CTA.

---

# 34. Toolkit

Keep the current V2 toolkit structure.

Keep:

```text
EVERY DAY
```

and:

```text
REACH FOR
```

Keep the technology tokens.

Keep the ranking concept if it already exists.

Do not turn this into a logo wall.

Do not add proficiency percentages.

Do not add technology logos.

Do not add colorful icons.

---

# 35. Toolkit layers

Keep the UI / Product / Platform concept.

Make it more readable without making it larger than necessary.

Use:

```text
01 / UI

TypeScript
React
Lit
Design systems
Storybook


02 / PRODUCT

Next.js
Payload CMS
Angular
REST APIs
State management


03 / PLATFORM

Workers
D1
KV
Queues
R2
Webhooks
OAuth
```

The layer headings should be readable.

The technologies should remain compact rectangular tokens.

---

# 36. UI → Product → Platform hierarchy

Keep the visual relationship:

```text
UI
────────────

PRODUCT
────────────

PLATFORM
────────────
```

This is useful because it communicates the breadth of the user's work.

Do not turn this into a giant diagram.

Do not remove the layers.

Use spacing and horizontal rules to create hierarchy.

---

# 37. Contact section

Keep the current green contact block almost exactly as structured.

It is one of the strongest visual elements of the site.

Keep:

```text
HERE'S EXACTLY
WHAT HAPPENS NEXT
```

Keep the three-step structure:

```text
01 SEND
02 REPLY
03 IF IT FITS
```

Keep the email block.

Keep GitHub and LinkedIn.

Do not add more content.

The green section should feel like the final interface contract of the page.

---

# 38. Mobile layout

Do not simply stack desktop.

Keep the information density.

At <= 768px:

## Header

Simple horizontal row.

## Hero

Single column.

Keep large typography.

## Production metrics

Two-column grid where possible.

Example:

```text
5,000+       73K+

developers   consumers

80% → <10%
CI failures
```

Other metrics can remain visible beneath.

Do not delete information simply because the viewport is smaller.

## KnotCMS

Stack:

```text
PROJECT
↓
ARCHITECTURE
↓
PRODUCTION FAILURE
↓
TECHNICAL METADATA
↓
CTA
```

Keep the architecture detail.

If necessary, make the diagram taller rather than shrinking every label to unreadable sizes.

## Principles

Each becomes:

```text
01
TITLE
EVIDENCE
DESCRIPTION
```

Give each enough vertical space.

## Experience

Vertical timeline.

## Toolkit

Three layers stacked vertically.

## Contact

Full width.

No horizontal scrolling.

---

# 39. Animation and interaction

Keep motion restrained.

Allowed:

- subtle hover background changes
- subtle border transitions
- 2-4px button movement
- gentle architecture-node reveal
- subtle live-status indicator

Do not introduce:

- parallax
- scroll-jacking
- text scrambling
- animated gradients
- cursor-following effects
- WebGL
- infinite marquees
- floating cards
- excessive section reveals

The site should look excellent with animation disabled.

---

# 40. Final QA and acceptance criteria

## Run visual QA at:

```text
1440px
1280px
1024px
768px
390px
```

Check:

- typography
- hierarchy
- spacing
- line length
- borders
- metric readability
- architecture readability
- mobile wrapping
- CTA sizing
- theme toggle
- accessibility
- horizontal overflow
- performance

## The redesign is successful only if:

- [ ] The current V2 structure remains intact.
- [ ] The page does NOT become leaner.
- [ ] The current level of useful information density remains.
- [ ] The KnotCMS architecture diagram remains detailed.
- [ ] The KnotCMS production failure section remains detailed.
- [ ] The production footprint remains structured and information-rich.
- [ ] The four engineering principles remain intact.
- [ ] Evidence labels remain intact.
- [ ] The experience timeline remains intact.
- [ ] UI / Product / Platform toolkit layers remain intact.
- [ ] The green contact section remains intact.
- [ ] The original Gururaj.dev visual personality is more visible again.
- [ ] The hero name is more dominant.
- [ ] Major typography is larger.
- [ ] Important information has stronger visual weight.
- [ ] Supporting metadata is smaller.
- [ ] Monospace is used primarily for technical metadata.
- [ ] Whitespace is increased without deleting useful content.
- [ ] The page feels less like documentation.
- [ ] The page does not become a generic developer portfolio.
- [ ] The page retains the brutalist/editorial character.
- [ ] The page retains the off-white / black / pink / green / yellow palette.
- [ ] Borders remain sharp and structural.
- [ ] There are no gradients.
- [ ] There is no glassmorphism.
- [ ] There is no rounded SaaS-card aesthetic.
- [ ] There are no unnecessary illustrations.
- [ ] There are no unnecessary animations.
- [ ] Existing functionality works.
- [ ] Existing links work.
- [ ] Theme switching works.
- [ ] Accessibility is preserved.
- [ ] Mobile has no horizontal overflow.
- [ ] Performance is not degraded.

---

# Final visual test

After implementation, look at the page without reading the detailed body copy.

It should communicate:

```text
GURURAJ J
      ↓
FRONTEND ENGINEER
      ↓
SYSTEMS
      ↓
PRODUCTION PROOF
      ↓
KNOTCMS
      ↓
ENGINEERING JUDGMENT
      ↓
IBM / EXPERIENCE
      ↓
CONTACT
```

It should NOT communicate:

```text
GENERIC PORTFOLIO
      ↓
PROJECTS
      ↓
SKILLS
      ↓
CONTACT
```

It should also NOT communicate:

```text
ENGINEERING DOCUMENTATION
      ↓
TABLES
      ↓
METADATA
      ↓
TECHNICAL REPORT
```

The correct visual impression is:

> **This is a frontend engineer with serious product taste who builds systems.**

The existing V2 has the systems part.

This refinement should bring back the taste, confidence, scale, and personality.

---

# Execution instruction

Do the work directly.

Do not ask me to choose between multiple visual directions.

Do not propose a new site architecture.

Do not remove sections.

Do not simplify the KnotCMS architecture.

Do not make the page artificially minimal.

Do not rewrite the content unless absolutely required by the existing implementation.

Inspect the current implementation, make the refinement pass, run the application, and iterate until the acceptance criteria are satisfied.

When making a design decision, prefer:

1. preserving the current V2 structure
2. preserving the original site's personality
3. increasing visual hierarchy
4. improving scanability
5. improving spacing
6. improving typography

over:

- deleting information
- adding new sections
- adding new visual effects
- adding new dependencies

After finishing:

1. Run the project.
2. Check for build errors.
3. Check TypeScript errors.
4. Check responsive layouts.
5. Inspect the page visually.
6. Fix obvious typography, spacing, and hierarchy issues.
7. Confirm that existing interactions still work.
8. Only then report what changed.

The goal is:

> **same V2 structure, same useful density, better hierarchy, stronger personality, better visual confidence.**

Do not reinvent it.
