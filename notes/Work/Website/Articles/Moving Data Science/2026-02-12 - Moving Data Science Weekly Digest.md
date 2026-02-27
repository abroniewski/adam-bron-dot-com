---
title: Moving Data Science Weekly Digest — 2026-02-12
date: 2026-02-12T08:00:00+01:00
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
**Published when there are important shifts, and when I actually have the time to synthesize them :-)**

**Published date:** 2026-02-12  
**Issue ID:** mds-001-v5  
**Read time:** 5-6 min

## One-line thesis
Enterprise AI is entering an execution-first phase, and teams that can measure workflow outcomes reliably are moving ahead of teams still optimising isolated demos.

## Recent signals
- AI products are increasingly tied to process context, not only chat interfaces, with [SAP making Joule with SAP Signavio generally available](https://news.sap.com/2026/02/process-conversation-joule-sap-signavio-solutions-generally-available/).
- In the latest reporting, procurement signals are becoming longer-horizon, with Reuters covering both a [five-year Google Cloud-Liberty Global partnership](https://www.reuters.com/business/media-telecom/google-cloud-liberty-global-strike-five-year-ai-partnership-2026-02-03/) and a [$200m Snowflake-OpenAI deal](https://www.reuters.com/business/snowflake-partners-with-openai-200-million-ai-deal-2026-02-02/).
- Current external guidance is tightening value expectations, with [Forrester highlighting stronger proof pressure](https://www.forrester.com/press-newsroom/forrester-tech-security-2026-predictions/) and [Gartner cautioning that long-term customer-service economics can underperform in some scenarios](https://www.gartner.com/en/newsroom/press-releases/2026-01-26-gartner-predicts-genai-cost-per-resolution-for-customer-service-will-exceed-offshore-human-agent-costs-by-2030).
- Platform operators are publishing more controls-first implementation patterns, including Google on [scaling AI from experimentation to enterprise reality](https://cloud.google.com/transform/scaling-ai-from-experimentation-to-enterprise-reality-google) and AWS FSI examples on [mission-critical and agentic deployments](https://aws.amazon.com/blogs/industries/financial-institutions-advance-mission-critical-workloads-and-agentic-ai-at-reinvent-2025/).

## Main argument
The strategic question in enterprise AI is changing. It is no longer mainly about whether a team can build a capable model experience. It is about whether that capability can be operated inside live business workflows with accountable ownership, measurable outcomes, and reliable fallback paths.

That shift applies well beyond process mining circles. Data science and analytics teams in almost every organisation face the same operational failure modes: handoffs that break under load, unclear ownership between teams, weak instrumentation, and escalation logic that is defined late. These issues often dominate outcomes more than model quality alone.

A useful framing is to treat AI delivery as an operating system problem. Some organisations call the supporting layer process intelligence. Others call it workflow analytics, event instrumentation, or decision observability. The label matters less than the capability to observe where work flows, where it stalls, and which interventions change business outcomes.

## Signals that support the argument

### 1) Workflow context is becoming a product primitive
- What happened: SAP positioned conversational AI directly inside process context with [Joule + SAP Signavio GA](https://news.sap.com/2026/02/process-conversation-joule-sap-signavio-solutions-generally-available/).
- Why it matters: this reduces the distance between AI output and operational action, which is where many pilots degrade.
- Caveat: product announcements indicate direction, not guaranteed realised outcomes.

### 2) Platform commitments are moving from pilots to multi-year bets
- What happened: Reuters reports a [Google Cloud-Liberty Global five-year agreement](https://www.reuters.com/business/media-telecom/google-cloud-liberty-global-strike-five-year-ai-partnership-2026-02-03/) and [Snowflake’s $200m OpenAI partnership](https://www.reuters.com/business/snowflake-partners-with-openai-200-million-ai-deal-2026-02-02/).
- Why it matters: long-horizon commitments increase the cost of weak architecture and operating-model choices.
- Caveat: large contract value does not guarantee delivery quality at workflow level.

### 3) Economics and governance are constraining scale decisions
- What happened: [Forrester’s 2026 outlook](https://www.forrester.com/press-newsroom/forrester-tech-security-2026-predictions/) and [Gartner’s customer-service cost warning](https://www.gartner.com/en/newsroom/press-releases/2026-01-26-gartner-predicts-genai-cost-per-resolution-for-customer-service-will-exceed-offshore-human-agent-costs-by-2030) reinforce value-proof pressure.
- Why it matters: funding decisions are increasingly tied to operational KPIs, not adoption narratives.
- Caveat: cost and impact vary significantly by workflow design, labour mix, and service expectations.

### 4) Case-style signal: process intelligence supporting AI transformation
- What happened: A Process Excellence Network report on [Fujitsu and Celonis](https://www.processexcellencenetwork.com/process-mining/news/fujitsu-taps-celonis-to-drive-ai-transformation-with-process-intelligence) describes process intelligence being used to support AI transformation and selected operational improvements.
- Why it matters: this is useful as a directional operating pattern rather than a direct benchmark.
- Caveat: case metrics should be treated as directional until validated against your own baseline, scope, and definitions.

## Operator lens: where teams get stuck
**Core bottleneck:** exception and rework loops across team handoffs, especially between service, operations, and data teams.

- Lightweight checks for any analytics team:
  - Track weekly rework rate by workflow stage.
  - Track time-to-resolution split by first-touch vs escalated cases.
  - Track top 5 recurring fallback reasons in agent-assisted flows.
- Advanced option if event-level tooling is mature:
  - Measure conformance drift between designed and observed paths.
  - Use this as a secondary diagnostic, not a day-one requirement.

## What to do in the next 30 days
- **Builders (data/ML/engineering):** instrument one production workflow with event timestamps, actor/system IDs, and fallback reasons in one shared dashboard.
- **Analysts/Translators:** define 2 outcome KPIs and 2 reliability KPIs before rollout, then review weekly with the workflow owner.
- **Leaders:** enforce stage gates at day 30 and day 90, with baseline captured, owner assigned, KPI movement visible, and escalation path tested.

## Sources used
- news.sap.com - https://news.sap.com/2026/02/process-conversation-joule-sap-signavio-solutions-generally-available/
- reuters.com - https://www.reuters.com/business/media-telecom/google-cloud-liberty-global-strike-five-year-ai-partnership-2026-02-03/
- reuters.com - https://www.reuters.com/business/snowflake-partners-with-openai-200-million-ai-deal-2026-02-02/
- forrester.com - https://www.forrester.com/press-newsroom/forrester-tech-security-2026-predictions/
- gartner.com - https://www.gartner.com/en/newsroom/press-releases/2026-01-26-gartner-predicts-genai-cost-per-resolution-for-customer-service-will-exceed-offshore-human-agent-costs-by-2030
- cloud.google.com - https://cloud.google.com/transform/scaling-ai-from-experimentation-to-enterprise-reality-google
- aws.amazon.com - https://aws.amazon.com/blogs/industries/financial-institutions-advance-mission-critical-workloads-and-agentic-ai-at-reinvent-2025/
- processexcellencenetwork.com - https://www.processexcellencenetwork.com/process-mining/news/fujitsu-taps-celonis-to-drive-ai-transformation-with-process-intelligence