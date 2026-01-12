Subject: Design Guidance – AdamBron.com

# Design Guidance for AdamBron.com

*A slow, honest, time-capsule website inspired by digital gardens, without becoming one.*

---

## 1. Core Intent (Non-Negotiable)

**AdamBron.com is not a portfolio, blog, or product.**

It is:

> **A collection of time capsules.**
> Some lead with artefacts. Some lead with words.
> All are honest.
>
> No optimisation.
> No direction required.

Everything in this document exists to **protect that intent over time**.

If a design or technical decision adds pressure to *write differently*, *categorise prematurely*, or *explain too much*, it is the wrong decision.

---

## 2. Foundational Philosophy

### 2.1 Writing comes first, structure follows

* Writing happens in Obsidian, freely and messily.
* The website is a *projection layer*, not a constraint.
* The site adapts to the notes, never the other way around.

### 2.2 Accretion, not expansion

The site grows by **adding capsules**, not by adding sections, features, or systems.

If something new is added, it should:

* Reduce friction for reading
* Never introduce friction for writing

---

## 3. The Atomic Unit: A Time Capsule

### 3.1 What a capsule is

A capsule is a snapshot of a moment in time.

It may include:

* Words
* Artefacts (images, Loom videos, repos, screenshots)
* Or both

It does **not** need to:

* Conclude
* Connect
* Explain itself
* Fit a category

### 3.2 Capsule metadata (minimal, optional)

Capsules may include frontmatter such as:

```yaml
title:
date:
public: true
energy:
```

Rules:

* `public: true` is the only publishing gate.
* `date` is used when the capsule *represents a moment intentionally*.
* If `date` is missing, file metadata may be used.
* No metadata field is ever required except `public`.

Metadata adds *texture*, not structure.

---

## 4. Content Scope (What Belongs)

Anything honest belongs.

Examples:

* Tech experiments
* Half-finished systems
* Cat forts
* Travel moments
* Reflections
* Goals
* Paused projects
* Things that may never be finished

The site makes **no promise of relevance or completion**.

---

## 5. Navigation & Information Architecture

### 5.1 Early stage (default)

At the beginning, the site should have:

* A homepage
* A chronological list of public capsules
* Individual capsule pages

That is a *complete website*.

No sections.
No categories.
No filtering required.

### 5.2 Scaling principle for navigation

Only add navigation when **friction appears**, not when possibility appears.

Valid reasons to add structure:

* “I can’t find older things.”
* “I want to look back by year.”
* “Reading is becoming overwhelming.”

Invalid reasons:

* “This could be organised better.”
* “Other sites have sections.”
* “It feels empty.”

### 5.3 Acceptable future structures (when needed)

If structure is introduced, prefer **lenses**, not sections:

* Time-based views (year, month)
* Soft filters (has artefact, has words)
* Optional metadata views (energy, tone)

Avoid:

* Hard taxonomies
* Required categories
* Folder-mirrored navigation

---

## 6. Design & UI Principles (Borrowed Carefully from Digital Gardens)

### 6.1 Calm over clever

* Minimal UI
* Generous whitespace
* Readable typography
* No visual urgency

The site should feel like:

> “Nothing is fighting you here.”

### 6.2 Reading first

* No infinite scroll pressure
* No engagement metrics
* No “latest”, “popular”, or “recommended”

Time exists, but softly.

### 6.3 Confidence in incompleteness

Never apologise for:

* Unfinished ideas
* Sparse content
* Long gaps between capsules

The site should behave as if:

> “This is exactly the right amount of site.”

---

## 7. Relationship to Digital Garden Patterns

### 7.1 What is intentionally borrowed

* Public thinking
* Long-lived content
* Non-linear exploration
* Calm, legible UI
* Respect for the reader

### 7.2 What is intentionally *not* borrowed (yet)

* Heavy section taxonomies (Essays, Notes, Patterns)
* Prominent graph views
* Growth-stage labelling
* Knowledge-base framing

If these emerge later, they must be:

* Earned by volume
* Introduced gently
* Optional to engage with

---

## 8. Scaling Rules (Critical)

When faced with multiple implementation options, apply these rules **in order**:

1. **Does this change how I write capsules?**

   * If yes → reject.
2. **Does this introduce a new obligation?**

   * If yes → reject.
3. **Does this only affect how things are read or found?**

   * If yes → consider.
4. **Can this be ignored by the reader?**

   * If yes → good.
5. **Can this be removed later without loss?**

   * If yes → safe.

Write these rules into the codebase as comments if needed.

---

## 9. What “Done” Looks Like

AdamBron.com is successful if:

* There are only a handful of capsules.
* There are long gaps between posts.
* Some capsules are strange or playful.
* Some never connect to anything else.
* The site feels quiet, personal, and unforced.

Failure looks like:

* Optimisation pressure
* Over-categorisation
* Explaining too much
* Building features to justify the site

---

## 10. Final Reminder (For the Developer and the Author)

> If building the site becomes more interesting than adding a capsule, pause.

The site exists to *hold time*, not to consume it.

---

**This document is the source of truth.**
If a future decision contradicts its spirit, this document wins.
