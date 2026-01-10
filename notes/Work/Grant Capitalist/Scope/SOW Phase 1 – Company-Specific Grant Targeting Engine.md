
**Prepared for:** Austyn Matheson
**Prepared by:** Adam Broniewski
**Date:** 30 May 2025

*This phase builds on the PoC by enabling personalised grant matching based on a real company profile. The goal is to simulate Austyn’s manual workflow and deliver a tailored, client-ready output.*

---

### 1. **Company Profile Ingestion**

* Accept a company name and website URL as input.
* Automatically extract core company details from the site: sector, keywords, services, location.
* Supplement with manual metadata (if needed): size, client type, funding history, etc.

---

### 2. **Grant Matching Logic**

* Score and rank existing scraped grants based on fit with the target company profile.
* Factors include: keywords, sector, eligibility language, and deadlines.
* Output a top-matching list with confidence scores or rationale tags.

---

### 3. **One-Page Summary PDF Generator**

* Build a Jinja2-based template for a clean, exportable PDF overview.
* PDF includes: matched grants, scores, summaries, deadlines, and key alignment notes.
* Designed to resemble a lightweight “funding strategy brief” Austyn can send to clients.

---

### 4. **Outreach Drafting Support (Optional Add-on)**

* Optionally generate a cold outreach draft email or intro paragraph tailored to the client and matched grants.
* Will be a stub function or template ready for future automation.

---

### 5. **Success Criteria Checklist**

* A quick checklist showing that the prototype met expectations:

  * Can we extract enough from a company website to identify relevant grants?
  * Did the match rankings make sense to a human?
  * Is the PDF helpful for client communication?
  * What would be needed to scale this to 10+ companies?

---

### 6. **Review & Next Steps**

* Review results together and determine scope for lead list automation and/or a dashboard UI.
* Option to define fixed-scope deliverables or shift to a flexible retainer model.


July 2nd - follow up after 
what am i looking for in 3-4 bullet points.