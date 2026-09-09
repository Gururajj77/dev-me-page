# jdotgururaj.dev — repositioning spec

## Context

This is a personal site for Gururaj J, frontend engineer at IBM on the Carbon Design System, and solo founder of KnotCMS (a Notion to Framer CMS sync running on Cloudflare Workers, with paying customers).

The site currently positions him as a **frontend platform engineer who serves other developers**. That framing is accurate but narrow. It costs him consideration for product engineering roles at small teams, which is what he is now targeting.

The immediate trigger is an application to a Frontend Engineer role at a ~30 person payments company. That job is about owning product surfaces end to end: dashboard, checkout, onboarding, billing, analytics. Their posting explicitly says it is not a role that converts Figma into React, and asks for demonstrable care for interface craft plus product judgment without a spec.

The site as written tells that reader he wants a different job.

## Goal

Reposition from **"I build infrastructure other engineers ship on"** to **"I build the primitives underneath and own the last ten percent on top, and I run a product real customers pay for."**

Both halves are true today. The site only shows one.

## Non-goals

Do not redesign. The visual system, typography, color, layout, and grid stay exactly as they are. This is a copy, content, and asset change.

Do not touch the live interactive component demo. It is the strongest element on the page and works as is.

Do not add animation, scroll effects, or new page routes.

Do not soften the technical depth. The goal is to widen the claim, not dilute it.

---

## Changes

### 1. Placeholder assets (blocking, highest priority)

Both case study cards currently render grey placeholder blocks reading `DROP: COMPONENT GALLERY + UPGRADE DIFF` and `DROP: DASHBOARD SHOT OR 12S SYNC CLIP`.

These are the two largest visual elements on the page. On a site whose thesis is "try it, don't take my word for it," shipping notes-to-self is disqualifying.

- **KnotCMS card:** replace with a real screenshot of the dashboard, or a short looping clip of a sync running. No blockers here, this is his own product.
- **Carbon card:** replace with a real asset, but **check with his IBM lead first**. There is a standing constraint that Carbon migration work cannot be published externally. Public open-source component screenshots are likely fine; anything showing internal migration tooling or internal product surfaces is not. If in doubt, use a public Carbon component gallery shot only.

If either asset is not ready, remove the image block for that card entirely rather than shipping a placeholder.

### 2. Hero

**Eyebrow label**

- Current: `FRONTEND PLATFORM ENGINEER`
- New: `FRONTEND ENGINEER`

**Headline**

- Current: "I build the component systems and docs infrastructure other engineers ship on."
- New: "I build the component systems other engineers ship on, and the product my customers pay for."

**Body paragraph**

- Current copy contains "product teams I never meet" and "Nights and weekends I run KnotCMS."
- Both must go. The first says he is distant from users. The second tells a founder his product is a hobby.
- New:

> Five years in production frontend, the last two on IBM's Carbon Design System, where I own shared components, upgrade paths, and the docs site that decides whether teams adopt them. Alongside that I run KnotCMS, a Notion to Framer sync with paying customers, where I own onboarding, dashboard, billing, and support myself.

**Availability line**

- Current: "Open to senior frontend-platform roles — design systems, DX tooling, docs platforms."
- New: "Open to frontend engineering roles on small teams. Product surfaces, design systems, developer tooling."
- Keep the metadata line beneath it unchanged (location, timezone, notice period, reply time).

### 3. Stats panel

- Update `40K WEEKLY NPM CONSUMERS` to `73K`. Verify the current figure before shipping.
- Add one row: `4` / `CORE COMPONENTS OWNED END TO END`. This fact is already elsewhere on the page and deserves the panel.
- Leave `5,000+ developers served`, `85% test coverage`, `6 major upgrades`, and `0 unplanned breaking changes` as they are.

### 4. Remove the exclusions line

In the contact block, delete:

> Not looking for: agency contracts, unpaid trials, or "quick calls" without a role.

It is the only defensive statement on the page. It reads as bracing for disrespect, and at a small company a founder may legitimately want a short informal call. Cutting it costs nothing.

### 5. Experience timeline

The KnotCMS row currently reads `Solo · evenings and weekends, alongside IBM`.

- New: `Solo · Cloudflare Workers · paying customers`
- Keep the `CONCURRENT` tag.

Same reasoning as the hero. He has now three times described his own product as smaller than it is, and that pattern is visible to anyone reading closely.

### 6. Add a fourth rule to "How I work"

All three current rules are about serving developers. Not one is about serving a user. That is the exact gap this repositioning needs to close.

- Change the section subtitle from `three rules` to `four rules`.
- Add:

**04 — The flow that technically works can still be broken**

> Filtering our side navigation returned the matched page and hid everything beneath it, so anyone searching for a section landed at a dead end. It passed every test. I rebuilt it without waiting for a spec, design adopted it, and our SUPR-Q score went up.

Keep the existing three rules unchanged. They are well written and the opinions are real.

### 7. Carbon case card copy

Add one line to the Carbon card that shows product judgment, not just platform ownership. Suggested addition under "My part":

> **Called differently:** argued the docs search page away from a per-result illustration layout we had no assets to fill by launch, and shipped a text-first design instead.

### 8. Résumé link

The `RÉSUMÉ — PDF, ONE PAGE` button must point at the updated resume. The current PDF is out of date: it uses an older self-description, lists stale figures, and omits the design and CI work. Confirm the file is replaced, not just the link.

Also note the label says "one page" and the new version is likely two. Update the label to match reality.

### 9. Reading mode toggle

The header has a `READING AS: RECRUITER / ENGINEER` toggle. Verify every copy change above lands correctly in both modes, and that neither mode still carries "platform roles only" framing or the removed lines.

---

## Acceptance checklist

- [ ] No placeholder blocks render anywhere on the page
- [ ] The phrase "nights and weekends" does not appear
- [ ] The phrase "product teams I never meet" does not appear
- [ ] The "Not looking for" line is gone
- [ ] NPM consumer figure matches the current verified number
- [ ] Hero headline names both the platform work and the product
- [ ] Availability line does not restrict to platform roles
- [ ] Fourth rule is present and the subtitle says four
- [ ] Résumé PDF is the current version and the page-count label is accurate
- [ ] Both recruiter and engineer reading modes are consistent
- [ ] Live component demo is unchanged and still keyboard reachable
- [ ] Nothing about the visual design has changed

## One judgment call left open

The stats panel is entirely Carbon. That reinforces the platform framing before the reader gets anywhere near KnotCMS. Consider whether one KnotCMS figure belongs there.

The honest numbers are small right now. A single paying customer displayed as a stat reads weaker than no stat at all. Recommendation: leave the panel Carbon-only until the KnotCMS numbers can carry themselves.
