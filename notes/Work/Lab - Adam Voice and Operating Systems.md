---
title: Lab - Adam Voice and Operating Systems
date: 2026-03-01T03:10:00+01:00
public: true
draft: false
category: Work
tags:
  - lab
  - systems
  - automation
excerpt: Detailed description of the Adam Voice system and core operating tools.
---

# Lab - Adam Voice and Operating Systems

## Adam Voice System

### Objective
Build a reusable writing system that sounds like Adam across channels, while avoiding generic AI voice.

### How it works
1. Ingest historical writing with strong human provenance.
2. Prioritise samples older than two years.
3. Build a style corpus and channel playbooks.
4. Generate drafts by channel mode.
5. Compare assistant draft vs Adam final version.
6. Convert edit deltas into updated style rules.

### Current state
- Source manifest established.
- Initial 24-sample corpus pass completed.
- LinkedIn and Email playbook v1 completed.
- Next phase: iterative draft cycles and v2 refinement.

### Key assets
- `ops/adam-voice/source-manifest.md`
- `ops/adam-voice/style-corpus-v1.md`
- `ops/adam-voice/channel-playbook-v1.md`

## Operating Systems and Tools

### 1) Konekti Daily Market Digest
**Objective:** Daily strategic digest for enterprise AI and process analytics moves.

**How it works:**
- Runs source scans.
- Filters for strategic relevance.
- Synthesises storyline, stakeholder impact, competitor signals, and pipeline actions.

**Assets:**
- `ops/konekti-digest/WORKFLOW.md`
- `ops/konekti-digest/run_master_source_scan.py`
- `ops/konekti-digest/daily-source-scan/*`
- `drafts/konekti-daily-market-digest-*.html`

### 2) Moving Data Science / Weekly Digest stream
**Objective:** Publish practical weekly insight briefings.

**How it works:**
- Curates themes from monitored sources.
- Scores for practical value.
- Ships concise, action-oriented digests.

**Assets:**
- `notes/Work/Website/Articles/Moving Data Science/*`
- `notes/Goals and Life Planning/signal and soil weekly digest/*`

### 3) LinkedIn operations system
**Objective:** Repeatable engine for ideation, drafting, review, posting, and reporting.

**How it works:**
- Idea intake -> scoring -> draft -> review -> posting -> analytics loop.

**Assets:**
- `konekti-linkedin-ops/WORKFLOW_OVERVIEW.md`
- `konekti-linkedin-ops/01_Idea-Pipeline/*`
- `konekti-linkedin-ops/03_Drafts/*`
- `konekti-linkedin-ops/04_Review/*`
- `konekti-linkedin-ops/07_Tracking/*`
- `konekti-linkedin-ops/08_Reporting/*`

### 4) Railway Lab publishing workflow
**Objective:** Fast project shipping with consistent subdomain conventions.

**How it works:**
- Reuses existing Railway services.
- Publishes with `<project>.lab.adambron.com` convention.
- Keeps deployment flow documented and repeatable.

**Assets:**
- `ops/railway-lab/WORKFLOW.md`
- `ops/railway-lab/gelato/server.js`
