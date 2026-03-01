---
title: Operating Systems and Automations
date: 2026-03-01T02:57:00+01:00
public: true
draft: false
category: Work
tags:
  - lab
  - automation
  - systems
  - operations
excerpt: Active systems inventory with objective and operating model for each tool and workflow.
---

# Operating Systems and Automations

This page documents core systems currently running in my stack and how they operate.

## 1) Konekti Daily Market Digest

### Objective
Produce a daily strategic digest for leadership and commercial action, focused on enterprise AI/process analytics market movement.

### How it works
- Daily source scan collects candidate stories.
- Signals are filtered for relevance to Konekti scope.
- Final digest synthesises into:
  - key storyline
  - stakeholder impact
  - pipeline actions
  - competitor watch
- Output is prepared for direct in-email consumption.

### Working assets
- `ops/konekti-digest/WORKFLOW.md`
- `ops/konekti-digest/run_master_source_scan.py`
- `ops/konekti-digest/daily-source-scan/*`
- `drafts/konekti-daily-market-digest-*.html`

---

## 2) Moving Data Science / Weekly Digest stream

### Objective
Track and publish regular insight briefings on data, AI, and adjacent market changes under the Moving Data Science stream.

### How it works
- Weekly digest notes are drafted from curated source monitoring.
- Candidate topics are scored for practical value.
- Final post packages the week into actionable highlights.

### Working assets
- `notes/Work/Website/Articles/Moving Data Science/*`
- `notes/Goals and Life Planning/signal and soil weekly digest/*`

---

## 3) LinkedIn operations system

### Objective
Run a repeatable content engine for ideation, drafting, review, posting, and reporting.

### How it works
- Structured pipeline:
  1. idea intake
  2. scoring
  3. draft creation
  4. review checklist
  5. posting handoff
  6. tracking and reporting
- Supports ongoing optimisation using analytics and review logs.

### Working assets
- `konekti-linkedin-ops/WORKFLOW_OVERVIEW.md`
- `konekti-linkedin-ops/01_Idea-Pipeline/*`
- `konekti-linkedin-ops/03_Drafts/*`
- `konekti-linkedin-ops/04_Review/*`
- `konekti-linkedin-ops/07_Tracking/*`
- `konekti-linkedin-ops/08_Reporting/*`

---

## 4) Railway Lab publishing workflow

### Objective
Ship lightweight web projects quickly with stable subdomain conventions and minimal deployment friction.

### How it works
- Build and deploy via Railway service updates.
- Map custom domains using convention:
  - `<project>.lab.adambron.com`
- Keep service reuse and deployment hygiene explicit.

### Working assets
- `ops/railway-lab/WORKFLOW.md`
- `ops/railway-lab/gelato/server.js`

---

## 5) Adam Voice System (linked)

### Objective
Generate writing that sounds like Adam by channel and improve via edit-feedback loops.

### How it works
- Historical source ingestion
- Channel playbook rules
- Draft -> final delta learning

[View full Adam Voice System card →](/work/the-lab/adam-voice-system)

---

## Operating principle
Each system is documented with:
- objective
- repeatable process
- artefacts and file locations
- update loop

That keeps execution consistent even as tools evolve.
