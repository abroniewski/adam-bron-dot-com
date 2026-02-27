---
title: Moving Data Science Weekly Digest — 2026-02-25
date: 2026-02-25T08:00:00+01:00
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
**Published when there are meaningful shifts worth your weekly attention**

**Draft date:** 2026-02-25  
**Issue ID:** mds-003  
**Read time:** 4-5 min

## One-line thesis
Enterprise AI execution is entering a control era: the winners are tightening orchestration, remediation, and governance loops, not just shipping more agent features.

## Forwardable summary
- Vendor and platform signals point to a clear operating shift toward enterprise control, including GitLab’s [self-hosted agent platform and BYOM posture](https://about.gitlab.com/blog/agentic-ai-enterprise-control-self-hosted-duo-agent-platform-and-byom/) and its [vulnerability remediation dashboard refresh](https://about.gitlab.com/blog/track-vulnerability-remediation-with-the-updated-gitlab-security-dashboard/).
- Reliability is becoming contractual, not implied, with GitLab publicly tying [99.9% availability to service credits](https://about.gitlab.com/blog/gitlab-backs-99-9-availability-with-service-credits-for-ultimate-customers/).
- Applied architecture maturity is visible in enterprise engineering detail, such as Netflix’s [MediaFM multimodal foundation work](https://netflixtechblog.com/mediafm-the-multimodal-ai-foundation-for-media-understanding-at-netflix-e8c28df82e2d?source=rss----2615bd06b42e---4).
- Process orchestration is converging with sensitive-data controls, shown in Camunda’s pieces on [insurer operating-model rollout](https://camunda.com/blog/2026/02/how-insurers-scale-agentic-ai-safely-across-their-operating-model-with-orchestration/) and [Skyflow-supported handling patterns](https://camunda.com/blog/2026/02/how-camunda-skyflow-connector-helps-regulated-organizations-orchestrate-sensitive-data/).
- Regulatory pressure remains practical and immediate, with EDPB’s [coordinated right-to-erasure enforcement findings](https://www.edpb.europa.eu/our-work-tools/our-documents/other/coordinated-enforcement-action-implementation-right-erasure_en), while tooling layers continue evolving through releases like [MLflow 3.10.0](https://github.com/mlflow/mlflow/releases/tag/v3.10.0), [Ray 2.54.0](https://github.com/ray-project/ray/releases/tag/ray-2.54.0), and operational telemetry guidance from [OpenTelemetry](https://opentelemetry.io/blog/2026/demystifying-opentelemetry/).

## What changed this week
Compared with prior weeks dominated by capability announcements, this week’s strongest signals are about operating discipline.

First, enterprise buyers are being offered more explicit control surfaces: self-hosted agent options, remediation visibility, and clearer reliability commitments. That is a practical response to procurement and risk teams demanding measurable safeguards before broad rollout.

Second, implementation stories are becoming less abstract. Netflix’s MediaFM write-up reflects production-level thinking around multimodal AI foundations, while Camunda’s insurance and sensitive-data posts push workflow decisions closer to governance and compliance realities.

Third, governance bodies are reinforcing that data rights obligations are an active operational requirement, not a policy appendix. The EDPB right-to-erasure findings should be read as a delivery constraint for AI-enabled workflows touching personal data.

## Why this matters now
For CIO and COO roles, this is a sequencing signal: strengthen reliability and control layers before multiplying autonomous workflows.

For CISO and legal/compliance teams, this week reinforces that observability and remediation must be auditable. “We have controls” is no longer enough without workflow evidence and response timelines.

For data and AI platform leads, the opportunity is concrete: tie model and agent deployment metrics to incident, exception, and remediation paths. That enables better prioritisation and faster board-ready reporting.

## Process Mining Lens
If you want to operationalise this trend quickly, use a process mining approach on one critical AI-enabled workflow.

Start with event logs from request intake, model/agent decision points, human overrides, exception handling, and closure. Then map expected vs actual paths and measure where latency, rework, or policy deviations cluster.

This week’s signals make the lens practical: remediation dashboards and orchestration controls are easier to improve when you can see bottlenecks and conformance gaps directly in event-level flow data.

Constraint to plan for: many teams still have fragmented telemetry across legacy systems. If full process mining tooling is not ready, begin with lightweight conformance checks in BI over existing event tables, then scale into deeper process intelligence once ownership and data quality are stable.

## Action checklist (next 14 days)
- Select one high-risk AI workflow and define a minimum event-log schema (timestamps, owner/system handoffs, exception codes, closure status).
- Add one conformance KPI to weekly ops review, for example “exceptions resolved within target window,” linked to remediation ownership.
- Run a joint governance rehearsal for erasure/compliance requests on that workflow and document failure points before scale-out.

## Image suggestions
- **Banner prompt:** “Modern enterprise operations war room with AI workflow map, process mining event-log streams, conformance dashboard, and governance checklist on large displays, clean editorial style, blue and graphite palette, no logos.”
- **Inline prompt 1:** “Simple process map showing ideal path vs real path for AI-assisted case handling, bottlenecks highlighted, professional infographic style.”
- **Inline prompt 2:** “Executive control panel balancing speed, risk, and compliance for enterprise AI workflows, minimalist flat design, white background.”

## Sources
- about.gitlab.com
- netflixtechblog.com
- camunda.com
- edpb.europa.eu
- opentelemetry.io
- github.com
