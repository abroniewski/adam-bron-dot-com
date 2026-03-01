---
title: Railway Lab Publishing Workflow
date: 2026-03-01T03:25:00+01:00
public: true
draft: false
category: Work
tags:
  - lab
  - railway
  - deployment
excerpt: Repeatable workflow for shipping projects with consistent lab subdomains.
---

# Railway Lab Publishing Workflow

## Objective
Ship lightweight projects quickly with consistent subdomain conventions and deployment hygiene.

## How it works
1. Reuse existing Railway services.
2. Deploy updates from known source path.
3. Map custom domain using `<project>.lab.adambron.com`.
4. Verify build, route, and metadata.
5. Document deploy IDs and DNS status.

## Working assets
- `ops/railway-lab/WORKFLOW.md`
- `ops/railway-lab/gelato/server.js`
