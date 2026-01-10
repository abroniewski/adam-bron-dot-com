**Prepared for:** Austyn Matheson
**Prepared by:** Adam Broniewski
**Date**: 30 May 2025
**Goal:** Build a lean prototype to automate the discovery of grant opportunities from public sources, saving time and increasing capacity.

---

### **Phase 0 – Proof of Concept (Completed)**

**Objective:** Validate that we can reliably extract relevant grant data from two selected websites (Alberta Innovates and ESDC, already provided by Austyn). This phase is exploratory and manual, focused on validating feasibility before building a full product.

* Extract grant data from Alberta Innovates and ESDC.
* Scrape key information: title, deadline, summary, link.
* Output results to a shared Google Sheet or Airtable.
* Focus on websites that do not require login or complex navigation.
* Run the scraper manually or via simple script.

**Delivered**: A working scraper, Airtable view, PDF summary demo, and Loom walkthrough
**Outcome:** Confirmed feasibility of accurate grant extraction and change monitoring
**Cost**: $950 CAD

---

### **Phase 1 – Company-Specific Grant Targeting Engine**

**Objective:** Build a prototype that takes a **real company profile** and generates a tailored list of matching grants, including a summary one-pager and personalized messaging support.

- Scrape/enrich company profile from website (about, keywords, sector)
- Compare against existing grants and score/rank match quality
- Output tailored recommendations with justification
- Generate exportable one-pager (PDF) and optional email draft

**Estimated Time:** 1-2 weeks
**Outcome:** Replaces Austyn’s manual match-checking with an AI-augmented workflow that shows immediate client-facing value
**Cost**: $1250 CAD

---

### **Phase 2 – Lead List Discovery Engine**

**Objective:** Automatically identify **new companies to target** for grant outreach.

- Scrape public business registries or innovation databases (e.g. NRC IRAP, Canadian business grants, Crunchbase-style sources)
- Filter by sector, stage, and location
- Rank companies based on grant alignment potential
- Export lead lists for manual or automated outreach

**Estimated Time:** 2–3 weeks  
**Outcome:** Powers scalable outbound strategy to grow user base and prove platform value

---

### **Phase 3 – Automated End-to-End Pipeline**

**Objective:** Combine targeting engine + lead generation into a fully automated workflow.

- Auto-discover new grants weekly
- Auto-identify matching companies
- Auto-generate and optionally send emails or download PDF packs
- Review dashboard and feedback loop for user validation
- Optional: email digests, CRM sync, team logins

**Estimated Time:** TBD (2–3 weeks for prototype)
**Outcome:** Revenue-ready alpha product for 3–5 client testers

---

### **Next Steps**
| Task                                                            | Owner  | Status / ETA                |
| --------------------------------------------------------------- | ------ | --------------------------- |
| Complete PoC and PDF demo                                       | Adam   | ✅ Done                      |
| Identify real company + grant to test Company Matching Engine   | Austyn | 🟡 Pending (1–3 examples)   |
| Design Phase 1 targeting engine structure & estimate            | Adam   | ✅ Done                      |
| Kick off build of targeting engine prototype                    | Adam   | ⏳ After company input       |
| Define target sources for lead scraping (registries, databases) | Adam   | 🔜 After Phase 1            |
| Draft structure for Phase 2 (lead discovery)                    | Adam   | 🔜 Post-targeting prototype |
