# Moving Data Science Weekly Digest

**Date:** 2026-04-29

This week’s signal is clear: agentic AI is only useful when the underlying process is understood, testable, and governed.

## What changed
- [QPR: AI Agents Cannot Navigate Broken Processes](https://www.qpr.com/blog/ai-agents-cannot-navigate-broken-processes) makes the process intelligence argument directly: if the workflow is broken, agents will automate the breakage faster.
- [Uber: How Uber Built an Agentic System to Automate Design Specs in Minutes](https://www.uber.com/blog/automate-design-specs/) shows the upside of a bounded, local agentic workflow. Uber says the system serves thousands of engineers, spans 7 implementation stacks, and reduces a documentation workflow from weeks to minutes.
- [Camunda: Getting Fast Feedback with Camunda Task Tester](https://camunda.com/blog/2026/03/getting-fast-feedback-with-camunda-task-tester/) reinforces that workflow logic needs fast feedback loops before full deployment.
- [SAP: Joule with SAP Signavio Solutions Now Generally Available](https://news.sap.com/2026/02/process-conversation-joule-sap-signavio-solutions-generally-available/) shows process context becoming conversational and actionable across SAP and non-SAP systems.
- [The New Stack: Why AI-driven operations are pushing governance beyond a compliance issue and into an operational priority](https://thenewstack.io/five-pillars-ai-governance/) puts governance where it belongs: in the operating model.

## Main argument
The pattern is not more AI. It is more control around AI.

Teams are discovering that agents are only as reliable as the process they sit inside. QPR’s point is blunt: if the process is broken, the agent simply executes brokenness faster. Uber shows the opposite case. When the workflow is well bounded, close to source data, and constrained by a clear acceptance bar, the automation can collapse work from weeks into minutes.

Camunda adds the missing discipline layer: fast feedback on task logic and mappings before production deployment. SAP shows the enterprise packaging of the same idea, where process context becomes part of everyday work rather than a separate analyst exercise.

For leaders, the implication is practical. Before scaling agentic workflows, they need an evidence base for the workflow itself: event logs, exception paths, approval loops, and bottlenecks. That is where process intelligence earns its keep. It can show where automation is safe, where conformance is weak, and where humans still need to stay in the loop.

## Process Mining Lens
Process mining is moving from reporting to runtime guardrail. The key question is no longer only “what happened?” but “can an agent safely act here without creating hidden rework, compliance drift, or a longer queue?”

Use event logs to identify bottlenecks, exceptions, and conformance gaps before handing a workflow to an AI agent. If you do not have a dedicated process-mining platform, the lighter fallback is still useful: map the critical steps, instrument handoffs, and test the most common exception paths with a small number of real cases.

## Case snapshot
Uber is the cleanest example this week. The system stays local, rooted in source design data, and scoped tightly enough to produce a finished spec page quickly. That constraint matters. This is not a blank cheque for autonomy. It works because the scope is bounded, the data stays inside the network, and the output is a specific artefact with a clear acceptance bar.

## Action checklist
1. Pick one agentic workflow and trace the actual process using event logs or manual samples.
2. Add a fast feedback step before deployment. Even a lightweight tester or checklist can catch bad mappings early.
3. Define one governance rule for agent action. For example, require human review for low-confidence steps, policy exceptions, or unresolved conformance issues.

## CTA
The next wave of enterprise AI will be won by teams that can prove a process is ready for automation, not just that a model is capable.
