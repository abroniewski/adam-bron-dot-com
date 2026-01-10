---
title: MVP WAGO Integrated Sales Expert
date: 2025-08-18
tags:
  - llm
  - MVP
  - vibe-code
energy: driven
public: true
---
**Date:** 18 August 2025  
**Prepared for:** Tyrone Visser - WAGO 
**Prepared by:** Adam Broniewski - Moving Data Insights

USE SRS template, software requirements specification
function and non functional requirements
user workflow

---

## Executive Summary

The Level-2 Proof of Concept proved the feasibility of a deterministic selection engine, branded web app, and export-ready BOMs. The MVP will now extend this into a tool the sales team can pilot for real quoting workflows.

Key new capabilities:
- **Selection confirmation with rationale capture** → captures tribal knowledge and creates the foundation of a knowledge loop.
- **Price integration** → instant quote totals and customer-ready exports.
- **Explanations (“why this part”)** → transparent logic plus learned insights.
- **Knowledge-base feedback loop** → dashboards for usage and swap-out rates.
- **SOP builder** → automatically generate component-type SOPs from real usage.
- **Architecture design** → blueprint for incorporating learned rationale into selection and LLM context.

---

## 1. Selection Confirmation, Alternatives Comparison & Rationale Capture

### POC baseline

- Deterministic selection engine with dynamic programming allocation and validation.
- No user confirmation or rationale capture.
- No display of valid alternatives.

### User stories

- **As a sales engineer, I want to see the system’s chosen component alongside all valid alternatives so that I can compare options and make the most appropriate selection.**
    
- **As a sales engineer, I want to confirm my final choice and provide a short rationale so that my decision is captured for future reference and learning.**
    
- **As a sales engineer, I want my confirmed choice and rationale to appear in the BOM export so that my customer-ready quote reflects both technical accuracy and the reasoning behind it.**
    
- **As the system, I want to store the user’s confirmed choice, rationale, and whether it matched or overrode the system’s initial suggestion so that I can track overrides and feed insights into the knowledge base.**
    
- **As the system, I want to persist rationales in a database tied to component IDs and configuration context so that institutional knowledge can be built and reused across future configurations.**
    

### Acceptance criteria

- Comparison view displays the system’s choice and all valid alternatives.
- Standard attributes are shown: capacity, protocol, waste, price (when available), rationale text.
- Rationale field is mandatory before proceeding.
- Stored data includes: component ID, configuration ID, requirements snapshot, rationale text, timestamp, and swap flag.
- Confirmed choice and rationale are visible in the BOM export.

### Dev considerations

- Extend schema with `selections` and `rationales` tables.
- API endpoints:
    - GET → fetch candidates (system choice + valid alternatives).
    - POST → submit confirmation + rationale (atomic transaction).
- UI: comparison table/cards with rationale input, validation on submission.
- Migration script to seed initial rationales (developer-only; no UI required).

---

## 2. Price Integration (remove)

### POC baseline

- No schema, UI, or export support for prices.

### User stories

- **As a sales engineer, I want to see the unit price of each component in the UI so that I can discuss cost implications with customers during configuration.**
    
- **As a sales engineer, I want the BOM export to include unit prices, line totals, and a grand total so that I can provide customers with an accurate, ready-to-share quote.**
    
- **As the system, I want to ingest a single CSV/Excel file with price data once at deployment so that components in the catalog are enriched with pricing information without requiring live ERP integration.**
    

### Acceptance criteria

- Database extended with `price` and `currency` fields for each component.
- One-time ingestion process validates product IDs and logs any mismatches or missing data.
- UI displays per-item prices and running totals during configuration.
- BOM exports (CSV + PDF/HTML) include per-line prices, subtotal, and total in the configured currency.

### Dev considerations

- Update BOM generator and export templates to calculate and display totals.
- Build ingestion script with validation and reporting.
- Only one currency supported for MVP (configurable at system level).

---

## 3. Explanations — “Why This Part?”

### POC baseline

- OpenAI response includes a naïve rationale string.
- Not shown in UI; not validated or improved.

### User stories

- **As a sales engineer, I want to see a clear explanation for why the system chose a component so that I can trust the recommendation and explain it to my customer.**
    
- **As the system, I want to combine algorithm-derived reasoning, LLM commentary, and learned rationales so that explanations improve over time and reflect both rules and field experience.**

### Acceptance criteria

- Explanations shown in UI for chosen component and alternatives:
    - Algorithmic reasoning from rule matches.
    - Naïve LLM rationale (labeled appropriately).
    - Learned rationale summary if past rationales exist.
- Explanations included in PDF/HTML quote.
- Fallback: deterministic explanation shown if LLM unavailable.

### Dev considerations

- Explanation service:
    - Templates for algorithm logic (protocol, channel coverage, waste).
    - Prompt composition to combine algorithm facts with recent rationales.
- Query rationale DB for relevant examples.
- Store generated explanations in `rationales` table with `source = algorithm` and `source = llm`.

---

## 4. Knowledge-Base Feedback Loop & Dashboards

### POC baseline

- No knowledge loop or metrics in code/UI.

### User stories

- **As the system, I want to log every confirmed selection and rationale so that patterns of decision-making can be analysed over time.**
    
- **As an admin, I want to see dashboards of key usage metrics so that I can measure adoption, identify override trends, and support process improvements.**
    

### Acceptance criteria

- Metrics available:
    - Configurations run per time period.
    - Component selection frequency.
    - Swap-out rate (% of overrides).
    - Rationales submitted over time.
- Dashboard displays charts and tables for metrics.
- Admin-only access to dashboard.

### Dev considerations

- Extend schema for tracking selections and rationales.
- Build queries for frequency, swap-out rates, and rationale counts.
- Simple charting in front end (bar/line/pie).
- Lightweight admin auth (role flag or env config).

---

## 5. SOP Builder

### POC baseline

- BOM CSV/PDF exports exist.
- No SOP generation capability.

### User stories

- **As an admin, I want to generate SOPs per component type at the click of a button so that best practices are documented and standardised.**
    
- **As an admin, I want SOPs summarised from real-world rationales so that the guidance reflects actual field knowledge.**
    
- **As an admin, I want SOPs exported as Markdown and PDF so that they are easy to share across the organisation.**
    

### Acceptance criteria

- SOP generation pipeline:
    - Pull rationales by component type.
    - Summarise patterns via LLM.
    - Write Markdown.
    - Render to PDF.
- SOPs downloadable via dashboard with timestamp.
- Content includes requirement patterns, trade-offs, and common rationale themes.

### Dev considerations

- `sops` table: component_type, markdown, pdf_location, generated_at.
- Cache summaries to minimise LLM cost.
- Optional preview before finalising PDF.
- Reuse existing Markdown → PDF pipeline.

---

## 6. Learned Rationale as Tie-Breaker

### POC baseline

- Algorithm is deterministic; no use of learned preferences.

### User stories

- **As the system, I want to apply learned rationale as a tie-breaker when multiple components are equally valid so that recommendations reflect field experience in addition to hard rules.**
    
- **As a sales engineer, I want to see when a tie-break was resolved using field preferences so that I understand why a less obvious component was chosen.**
    

### Acceptance criteria

- Preference scoring applied only when multiple candidates are equally valid under rules.
- Scores derived from:
    - Selection frequency.
    - Swap-out rate.
    - Rationale count (time-decayed).
- Explanation clearly indicates when a tie-break decision used field preferences.

### Dev considerations

- Implement transparent scoring heuristic.
- Ensure deterministic results when scores equal.
- Integrate into selection engine at tie-break step.

---

## Enabler Epic: Knowledge Loop Architecture

### Context / POC baseline

- No design yet for how captured rationales are re-used in explanations, SOPs, and selection tie-breakers.
- Without this, downstream features risk being implemented inconsistently.

### Goal

- Define a **unified architecture** for how rationale data flows through the system, how it is retrieved, and how it is injected into LLM prompts or deterministic logic.
- Ensure this architecture applies consistently to:
    - Component selection explanations.
    - SOP generation.
    - Selection algorithm tie-breakers.
### Deliverable

- A  **design document** that includes:
    - Data model for rationales.
    - Retrieval and indexing strategy.
    - Prompt composition templates (inputs/outputs).
    - Selection tie-breaker scoring approach.
    - Migration/seeding process.
    - Open questions + risk log.
- Diagrams (data flow, sequence flows).
- Sample prompts and example outputs.

### Acceptance criteria

- Document is reviewed and approved by product + tech lead.
- Provides enough clarity for developers to begin building Features 3, 4, 5, and 6 on top of it.
- Identifies a minimal vertical slice (end-to-end test path) that can be implemented early.

### Dev considerations

- Treated as a **time-boxed spike** (e.g. 1–2 sprints max).
- Not a directly user-visible feature but required for features to succeed.
- May produce backlog tickets for implementation once design is approved.

---

## Out of Scope for MVP

- ERP or live price sync.
- Multi-currency support.
- Production-grade SSO, GDPR compliance, penetration testing.