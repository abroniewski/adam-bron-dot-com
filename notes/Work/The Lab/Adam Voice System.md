---
title: Adam Voice System
date: 2026-03-01T02:56:00+01:00
public: true
draft: false
category: Work
tags:
  - lab
  - writing-system
  - ai-assist
  - operations
excerpt: A reusable writing system that adapts to channel and continuously learns from Adam’s final edits.
---

# Adam Voice System

## Objective
Create a reusable writing workflow that sounds like Adam across channels, without flattening tone into generic AI text.

Primary goals:
- Preserve authentic voice from pre-LLM writing.
- Adapt by context: LinkedIn, email, WhatsApp, meeting notes, newsletter/blog.
- Improve over time by learning from Adam’s final edits.

## How it works

### 1) Source ingestion and curation
- Start with historical writing where provenance is strongest.
- Prioritise older than ~2 years.
- Tag each sample with:
  - channel
  - likely human-original confidence
  - style attributes (tone, structure, cadence)

Current source map includes:
- Obsidian archived vault and Notion/Evernote exports.
- Historical work documents (TC Energy files, speeches, social drafts).
- Additional passes queued for old LinkedIn and Gmail Sent.

### 2) Corpus and style model
A style corpus is built from selected samples and distilled into explicit rules:
- What to do (voice-positive patterns)
- What to avoid (off-voice patterns)
- Channel-specific templates and formatting behaviours

Working files:
- `ops/adam-voice/source-manifest.md`
- `ops/adam-voice/style-corpus-v1.md`
- `ops/adam-voice/channel-playbook-v1.md`

### 3) Draft generation by channel mode
For each channel mode, the system applies the playbook:
- LinkedIn: reflective insight + practical takeaway
- Email: context + recommendation + explicit next step
- WhatsApp: short, natural, context-rich
- Meeting notes: decisions, owners, dates, actions

### 4) Feedback loop
Each writing cycle captures:
1. assistant draft
2. Adam final version
3. delta analysis (tone, brevity, structure, wording)
4. rule updates to playbook

This turns edits into reusable intelligence.

## Current status
- v1 source manifest complete.
- 24-sample extraction pass complete.
- LinkedIn + Email playbook v1 complete.
- Next: test-draft cycles and update to v2 after edit deltas.

## Why this matters
Most AI writing tools optimise for “good enough”.
This system optimises for recognisable author voice plus consistent execution speed.
