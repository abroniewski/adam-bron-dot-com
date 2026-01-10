
## 1. Project Overview

The Exit Readiness Profile feature replaces and expands the current Seller Onboarding process. It helps business owners assess their exit readiness across three dimensions:

* Personal Readiness
* Financial Readiness
* Business Readiness

The system calculates a readiness score, generates a personalized summary via OpenAI, and provides a downloadable PDF report.

**Key Features:**

* Multi-step assessment questionnaire
* Exit readiness scoring algorithm
* AI-generated personalized summary
* PDF report download
* Data storage in Supabase

## 2. Technical Architecture

### Current Stack

* React (TypeScript)
* Supabase (database + auth)
* Multi-step form component

### Required Additions

* OpenAI API integration
* PDF generation (jsPDF/react-pdf)
* Scoring calculation service
* Enhanced Supabase schema for assessments

## 3. Refactored Development Plan (Based on Actual Performance)

This plan is based on Adam's tracked development velocity and commit analytics (see time_estimate_helper.md). Each phase is designed for high-leverage, LLM-assisted solo work.

### Phase 1: Schema, Scoring, and API Setup (1 day, ~4 hours)
- Design and create Supabase tables (`exit_readiness_assessments`, `exit_readiness_history`)
- Implement scoring algorithm and test with sample data
- Set up OpenAI API integration and test with a basic prompt

### Phase 2: Core Form & State Management (1 day, ~4 hours)
- Build the multi-step form container and navigation logic
- Implement state management (useReducer or custom hook)
- Integrate form validation utility

### Phase 3: Step Components & Data Flow (1 day, ~4 hours)
- Implement all 4 step components (Basic Info, Personal, Financial, Business)
- Wire up data flow between steps and main form
- Connect form to Supabase for save/submit

### Phase 4: Results, Scoring, and AI Summary (0.5 day, ~2 hours)
- Implement results display with score breakdown
- Integrate scoring service and OpenAI summary generation
- Display AI summary in results

### Phase 5: PDF Generation & Download (0.5 day, ~2 hours)
- Integrate jsPDF/html2canvas
- Build PDF report template and download button

### Phase 6: Polish, Testing, and Edge Cases (1 day, ~4 hours)
- Cross-browser/device testing
- Handle edge cases, error states, and polish UI
- Add analytics hooks if needed

## 4. Estimated Time Table

| Phase                                 | Est. Hours |
|----------------------------------------|------------|
| Schema, Scoring, API Setup             | 4          |
| Core Form & State Management           | 4          |
| Step Components & Data Flow            | 4          |
| Results, Scoring, and AI Summary       | 2          |
| PDF Generation & Download              | 2          |
| Polish, Testing, and Edge Cases        | 4          |
| **Total**                              | **20**     |

- **Total Estimated Hours:** **~20 hours**
- **At Adam's average daily output (4.25 hrs/day):** **~5 days**

## 5. Technical Implementation Details

### 5.1 Database Schema

**Tables:**

* `exit_readiness_assessments`
* `exit_readiness_history`

*See original document for full SQL schema.*

### 5.2 Dependencies

```json
"dependencies": {
  "openai": "^4.24.1",
  "jspdf": "^2.5.1",
  "html2canvas": "^1.4.1",
  "uuid": "^9.0.0"
}
```

### 5.3 OpenAI Integration

* Located in `src/lib/openai.ts`
* Uses GPT-4 for custom summaries

### 5.4 PDF Generation

* Located in `src/lib/pdfGenerator.ts`
* Uses `jsPDF` + `html2canvas`
* Branded Huddly AI PDF report

### 5.5 Scoring Service

* Located in `src/lib/scoringService.ts`
* Calculates 3 category scores + weighted overall score

## 6. UI Component Structure

```
ExitReadinessProfile/
├── ExitReadinessForm.tsx
├── components/
│   ├── Step1BasicInfo.tsx
│   ├── Step2PersonalReadiness.tsx
│   ├── Step3FinancialReadiness.tsx
│   ├── Step4BusinessReadiness.tsx
│   └── ResultsDisplay.tsx
├── hooks/
│   ├── useExitReadinessForm.ts
│   └── useScoreCalculation.ts
└── utils/
    ├── formValidation.ts
    └── formatters.ts
```

## 7. Environment Variables

```
VITE_OPENAI_API_KEY=your_openai_api_key
```

## 8. Risks and Mitigations

| Risk                       | Impact | Mitigation                                      |
| -------------------------- | ------ | ----------------------------------------------- |
| OpenAI API cost/limits     | Medium | Caching, prompt optimization, usage limits      |
| Cross-device PDF issues    | Medium | QA on browsers/devices, fallback layout         |
| Complex scoring edge cases | Low    | Broad scenario testing                          |
| OpenAI data privacy        | High   | Server-side calls, data anonymization           |
| UX complexity              | Medium | Progressive flow, save progress, clear guidance |

## 9. Post-Launch Considerations

* Track completion analytics
* Enable score comparisons over time
* Add automated follow-up emails
* Create advisor dashboard for review
* Explore valuation tool integrations

## 10. Conclusion

This roadmap is tailored to Adam's actual development velocity and workflow, leveraging LLM/AI-assisted coding and rapid integration. The Exit Readiness Profile can be completed in approximately 20 focused hours (about 5 days), with each phase designed for efficient, high-leverage solo work.
