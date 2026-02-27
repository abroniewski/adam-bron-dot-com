---
title: Moving Data Science Weekly Digest — 2026-02-18
date: 2026-02-18T08:00:00+01:00
public: true
draft: false
category: Work
tags:
  - moving-data-science
  - process-mining
  - ai
excerpt: Weekly Moving Data Science digest with practical enterprise AI and process mining signals.
---

# Moving Data Science
**Published when there are important shifts, and when I actually have the time to synthesise them :-)**

**Draft date:** 2026-02-18  
**Issue ID:** mds-002  
**Read time:** 4-5 min

## One-line thesis
The strongest enterprise data and AI teams this week are not chasing bigger model claims. They are hardening delivery: post-training pipelines, migration reliability, governance simplification, and workflow security controls.

## Forwardable summary
- Enterprise teams are investing in **delivery mechanics**, with Netflix detailing both [LLM post-training scale-up](https://netflixtechblog.com/scaling-llm-post-training-at-netflix-0046f8790194?source=rss----2615bd06b42e---4) and [database migration automation at production depth](https://netflixtechblog.com/automating-rds-postgres-to-aurora-postgres-migration-261ca045447f?source=rss----2615bd06b42e---4).
- Platform-side enablement is shifting from demos to operating patterns, including AWS case material on [AgentCore in IT operations](https://aws.amazon.com/blogs/machine-learning/iberdrola-enhances-it-operations-using-amazon-bedrock-agentcore/) and GitLab partner delivery notes for [DevSecOps-as-a-Service](https://about.gitlab.com/blog/devsecops-as-a-service-on-oracle-cloud-infrastructure-by-data-intensity/).
- Governance pressure is becoming more implementation-friendly in Europe, with EDPB updates on [Digital Omnibus simplification while preserving safeguards](https://www.edpb.europa.eu/news/news/2026/digital-omnibus-edpb-and-edps-support-simplification-and-competitiveness-while_en) and a [2026-2027 work programme focused on practical compliance](https://www.edpb.europa.eu/news/news/2026/edpb-work-programme-2026-2027-easing-compliance-and-strengthening-cooperation-across_en).
- Process orchestration teams are getting concrete operational nudges from Camunda, including [secret management changes in 8.9](https://camunda.com/blog/2026/02/helm-secret-management-changes-in-camunda-8-9/) that matter for production security posture.
- Strategic planning should still account for longer-horizon capital commitment signals such as Reuters’ coverage of a [five-year Google Cloud-Liberty Global AI partnership](https://www.reuters.com/business/media-telecom/google-cloud-liberty-global-strike-five-year-ai-partnership-2026-02-03/).

## What changed this week
The pattern across this week’s source set is consistency: operational reliability and governance execution are now first-class agenda items, not post-rollout cleanup.

Two practical indicators stand out. First, engineering organisations are publishing more “how we shipped it” detail than “what AI can do” positioning. Netflix’s pieces are representative: one tackles computational and workflow realities in post-training, the other tackles migration complexity in a way that most data platform teams immediately recognise.

Second, operating model guidance is increasingly linked to controls, risk ownership, and explicit implementation pathways. The AWS and GitLab-partner case materials are different in context, but both reinforce the same direction: architecture decisions and delivery governance are becoming the differentiator, especially in regulated or high-change environments.

## Why this matters now
For CIO and COO leaders, this is a sequencing signal. Budget should move toward hardening data and delivery foundations before expanding use-case counts.

For CFO stakeholders, the key point is that delivery maturity affects payback. A headline capability without migration reliability, observability, and control mapping will underperform.

For data and analytics leaders, this week argues for one operating stance: fewer parallel pilots, more instrumented production pathways.

## Process Mining Lens
You do not need a full process mining stack to apply process intelligence thinking this quarter. Start with event logs around one high-friction workflow, map expected vs observed paths, and track rework loops.

The Camunda 8.9 secret-management update is useful here because it reinforces an often-missed truth: process intelligence is not only flow visibility, it is also control integrity in live operations. If credentials, handoffs, and automation boundaries are weak, conformance metrics can look healthy while risk exposure quietly increases.

A practical two-week test:
- Choose one workflow with recurring escalations.
- Capture event timestamps, owner/system touchpoints, and fallback reasons.
- Review deviations weekly, then decide whether lightweight conformance checks or fuller process mining tooling is justified.

## Action checklist (next 14 days)
- Consolidate one cross-functional reliability dashboard that combines delivery latency, fallback frequency, and owner accountability.
- Add a governance checkpoint to AI release reviews, aligned with current EDPB simplification guidance.
- Prioritise one process bottleneck for event-log instrumentation before adding net-new AI features.

## Image suggestions
- **Banner prompt:** “Editorial illustration of an enterprise data control room: one side shows model experimentation, the other shows workflow operations with event logs, governance checklists, and process maps, clean modern style, blue/teal palette, no brand logos.”
- **Inline prompt 1:** “Isometric diagram of a data workflow with bottlenecks highlighted in amber, conformance path in green, escalation loop in red, suitable for a business newsletter.”
- **Inline prompt 2:** “Minimalist visual of CIO/CFO/COO decision board balancing speed, risk, and ROI for AI operations, flat design, white background.”

## Sources
- netflixtechblog.com
- aws.amazon.com
- about.gitlab.com
- edpb.europa.eu
- camunda.com
- reuters.com
