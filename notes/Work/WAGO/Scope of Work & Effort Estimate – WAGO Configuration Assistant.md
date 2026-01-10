**Date:** 12 June 2025  
**Prepared for:** Tyrone Visser - WAGO 
**Prepared by:** Adam Broniewski - Moving Data Insights

---

# Executive Summary

WAGO already maintains a comprehensive, publicly accessible spreadsheet of approved parts, prices and configuration rules. Today that gold‑mine of information lives outside the daily flow of work—sales reps scan rows, copy‑paste part numbers, and rely on tribal memory to spot incompatibilities. Our phased LLM assistant brings that knowledge **into the conversation itself**.

- **Why now?** GPT‑4o can instantly transform a rep’s rough requirements into a validated bill‑of‑materials (BOM) and a perfectly formatted CSV for WAGO’s online configurator. No re‑typing, no manual fixes—just accurate data in minutes.
    
- **Streamlined operations (MVP)**
    
    - Guided chat with Smart‑Tag auto‑suggestions and live “fits / doesn’t fit” feedback speeds selection and cuts errors.
    - Real‑time price look‑ups surface cost impact early, reducing back‑and‑forth and rework.
    - One‑click PDF/HTML quotes mean a customer‑ready deliverable the same day.
        
- **Building an institutional knowledge loop**
    
    - Each configuration stores the final part choices and a short “why we picked it” note.
    - These rationales feed a searchable knowledge base, surfacing best practices to new hires and future deals.
    - Over time the assistant evolves from “quick helper” to **source of onboarding, SOPs and continuous improvement insights**.
        
The result: faster quotes, fewer mistakes, and a living repository that captures WAGO’s cultural know‑how instead of letting it walk out the door.

<div style="page-break-after: always;"></div>

# Success Criteria

- **Level-1 POC:** A sales engineer can paste the **Markdown bill-of-materials (BOM)** into an email/Teams chat **and** import the accompanying **CSV** straight into WAGO’s online design tool without manual fixes.
- **Level-2 POC:** A product owner can open the polished web app, run a _live_ configuration with **Smart-Tag** guidance and zero validation errors, **export a branded PDF/HTML quote**, **record which suggested part was chosen along with a short rationale**, and still obtain the original Level-1 Markdown + CSV—all in one seamless flow.
- **MVP:** The internal sales team is using a pilot to support customer quotes using the tool. Includes: **real-time price data, design-fit validation, part justifications/explanations, and builds a knowledge-base**. Auto-generated Standard Operating Procedures (SOPs) from the knowledge-base, making institutional employee knowledge accessible company wide.

# Assumptions & Dependencies

- WAGO supplies Excel parts list, CSV spec & brand assets before kick‑off.    
- GPT‑4o API access is available.
- PoCs run locally; no hosting budget until MVP.
- Production auth, ERP integration, penetration testing and GDPR paperwork are **out of scope** for PoCs.
- AI coding assistants accelerate dev velocity but do not eliminate the need for robust engineering judgment; estimates factor both in.


# Detailed Scope of Work

##  Level‑1 PoC (8 h)

**Cost: Free, included in initial 10hr exploration time**

| Work package                   | Detail (what we build)                                           | Business value (why it matters)                                                |
| ------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Project bootstrap              | Vite/React repo with WAGO colour tokens                          | Gives us a runnable playground for all future work                             |
| Data ingest                    | One-click load of the Excel product listing into in-memory store | Puts the entire catalogue at the chatbot’s fingertips with zero infrastructure |
| Chatbot input layer            | Shadcn chat UI wired to OpenAI GPT-4o                            | Removes training overhead—sales just “talk” to the system                      |
| LLM commentary + BOM generator | GPT-4o returns Markdown pros/cons + JSON that renders to CSV     | Turns raw specs into persuasive talking points and a machine-ready list        |
| CSV exporter                   | Writes configurator-spec CSV alongside the Markdown              | Eliminates double-entry and speeds the hand-off to the online tool             |

## Level-2 POC (+16 h incremental, 24 h stand‑alone)

**Cost: $ 1600 (8 non-billable + 16 billable hours)**

| Work package                                   | Detail (what we add)                                                                                                                                                      | Business value (why a decision-maker cares)                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **All items from Level-1 POC**                 | -                                                                                                                                                                         | -                                                                                                                                   |
| **Branded UI & “Demo-mode” polish**            | WAGO fonts, colours, icon set, subtle animations, plus a full-screen toggle for clean demos                                                                               | Stakeholders see a product that already _looks shipped_, boosting confidence to fund the next step                                  |
| **Smart-Tag & validation**                     | **Smart-Tag** auto-suggest in the chat stream _and_ real-time “fits / doesn’t fit” flags                                                                                  | Actively _prevents_ configuration errors, not just listing parts                                                                    |
| **Executive-ready quote export**               | One-click PDF + HTML proposal: logo header, part table, price placeholders, revision tag                                                                                  | Gives sales a deliverable they can email a customer the same day, makes the POC feel customer-ready                                 |
| **Selection confirmation & rationale capture** | After suggestions appear, the user picks the part they actually chose and adds a short “Why I picked this” note; entries are stored locally for the future knowledge base | Demonstrates how real-world choices will feed a learning loop. This is the path to a curated knowledge base and auto-generated SOPs |

## MVP Roadmap (1-3 months)
*Timing, costs, and work packages depended on what is discovered during POC phase.*

**Cost: Estimate €20k - €35k**

| Work package                           | Detail                                                      | Business value                                                                                |
| -------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Price integration                      | Ingest price-list Data + currency handling                  | Lets reps answer “how much?” on the spot                                                      |
| Design-fit validation engine           | Rule checks for inter-module compatibility                  | Prevents costly mis-configurations before they reach engineering                              |
| Advanced prompt logic & chat assistant | Retrieval-augmented prompts, “why this part?” explanations  | Shortens sales cycles with richer, contextual answers. Builds employee and customer knowledge |
| Knowledge-base feedback loop           | Guided confirmation flow → vector store analytics           | Systematically captures tribal knowledge and improves recommendations over time               |
| SOP builder & dashboards               | Auto-generate standard operating procedures + usage metrics | Standardises best practice. Generates documented guidance built from employee knowledge.      |


# Out-of-Scope

- Production-grade authentication, ERP integration, penetration testing and GDPR paperwork remain outside the POC.
- Scope of MVP will be defined on completion of POC.

# Risks & Unknowns

- Initial Excel list quality.
- Smart‑Tag rule complexity.
- Price data quality.

# Next Steps

1. Choose PoC tier (8‑h Level‑1 or lean Level‑2).
2. Approve this Scope of Work and confirm start date.
3. Sign Statement of Work. **Level‑2 PoC is invoiced 100 % upfront; MVP can follow bi-weekly or milestone‑based invoicing.**
4. Development begins