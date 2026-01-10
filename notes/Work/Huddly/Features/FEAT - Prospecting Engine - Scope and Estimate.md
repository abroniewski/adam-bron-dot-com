## 1. Project Overview

This feature introduces an AI-assisted system to identify small business owners likely to be open to exit planning within 12–24 months. The tool automates data gathering, signal detection, lead scoring, and outreach generation.

**Key Features:**
- JSON-defined Buy Box for target criteria
- Multi-source data aggregation pipeline
- Feature engineering & signal scoring
- Lead scoring model (XGBoost)
- GPT-powered personalized outreach
- Human feedback loop & model retraining

## 2. Technical Architecture

### Stack

- **Scraping & ETL:** Python, Scrapy, Playwright
- **Storage:** PostgreSQL or MongoDB, AWS S3
- **Modeling:** Scikit-learn, XGBoost, MLflow
- **Orchestration:** Airflow
- **Outreach:** GPT-4 + LangChain + Airtable/Hubspot

## 3. Refactored Development Plan

Based on Adam's development metrics (4.25 hrs/day, 0.85 hrs/commit) and accounting for the technical complexity of this project, this work is scoped for **~9-10 days / 40 hours** of LLM-assisted development.

### Phase 1: Project Setup & Buy Box Definition (1 day, ~4 hrs)
- Set up development environment for Python data pipeline
- Define JSON schema for Buy Box filters
- Create admin UI mockup for criteria configuration
- Finalize acquisition criteria with Brett
- Build test harness for filter validation

### Phase 2: Data Source Integration (2.5 days, ~10 hrs)
- **Day 1 (Morning):** Set up database schema and storage architecture
- **Day 1 (Afternoon):** Build primary scraper for business listings (Manta or similar)
- **Day 2:** Implement 2-3 additional data sources with unified entity schema
- **Day 3 (Half Day):** Create data integration tests and snapshot storage

### Phase 3: Feature Engineering & Signal Detection (2 days, ~8 hrs)
- **Day 1:** Build core feature extraction pipeline (business age, size, activity)
- **Day 2:** Implement specialized signals (~30-40 features)
  - Website activity metrics
  - Social media footprint
  - Review sentiment and frequency
  - Business license status
  - Owner age approximation (if available)

### Phase 4: Modeling & Scoring System (1.5 days, ~6 hrs)
- **Day 1:** Develop initial XGBoost model with mock-labeled data
- **Day 2 (Half Day):** Build scoring pipeline and results visualization
- Create model versioning and serialization system
- Implement feature importance tracking

### Phase 5: Outreach Generation System (2 days, ~8 hrs)
- **Day 1:** Create GPT prompt engineering framework
- Build personalized outreach templates based on business context
- **Day 2:** Develop follow-up sequence generator
- Integrate with Airtable/Hubspot for outreach tracking
- Implement response handling and callback system

### Phase 6: Integration & Deployment (1 day, ~4 hrs)
- Set up Airflow DAGs for orchestration
- Create admin dashboard (simple)
- Document API endpoints and usage
- Deploy initial version with test cases

## 4. Estimated Time Table

| Phase                         | Est. Hours | Complexity Factors |
|------------------------------|------------|-------------------|
| Project Setup & Buy Box      | 4          | Multiple tech stack components, collaboration |
| Data Source Integration      | 10         | New scrapers, unified schema, error handling |
| Feature Engineering          | 8          | Signal extraction algorithms, data normalization |
| Modeling & Scoring           | 6          | ML model configuration, validation metrics |
| Outreach Generation          | 8          | Prompt engineering, multi-step sequences |
| Integration & Deployment     | 4          | Orchestration, documentation, deployment |
| **Total**                    | **40**     | |

**At Adam's average output (4.25 hrs/day):** ~9-10 days

## 5. Required Files / Modules

```
prospecting/
├── buybox/
│   ├── schema.json
│   └── filter_config.py
├── ingestion/
│   ├── manta_scraper.py
│   ├── yelp_scraper.py
│   ├── business_license_api.py
│   └── entity_unifier.py
├── features/
│   ├── extractors/
│   │   ├── website_signals.py
│   │   ├── social_signals.py
│   │   └── financial_signals.py
│   └── signal_processor.py
├── modeling/
│   ├── lead_score_model.py
│   ├── model_training.py
│   └── feature_importance.py
├── outreach/
│   ├── templates/
│   │   ├── initial_contact.py
│   │   └── follow_up.py
│   ├── gpt_outreach.py
│   └── response_tracker.py
├── admin/
│   ├── dashboard.py
│   └── config_interface.py
├── orchestration/
│   ├── data_pipeline.py
│   └── airflow_dags/
│       ├── daily_scraping.py
│       └── model_retrain.py
└── utils/
    ├── logger.py
    ├── schema_validators.py
    └── storage.py
```

## 6. Dependencies

```json
"dependencies": {
  "python": "^3.10",
  "openai": "^1.6.0",
  "langchain": "^0.2.0",
  "scikit-learn": "^1.4.0",
  "xgboost": "^2.0.2",
  "playwright": "^1.42.0",
  "scrapy": "^2.11.0",
  "mlflow": "^2.9.0",
  "pandas": "^2.2.0",
  "fastapi": "^0.110.0",
  "streamlit": "^1.34.0",
  "apache-airflow": "^2.8.0"
}
```

## 7. Risks & Mitigations

| Risk                            | Impact | Mitigation                             |
| ------------------------------- | ------ | -------------------------------------- |
| Source API limitations          | High   | Use rotating scrapers, cache responses |
| Data quality inconsistencies    | High   | Build robust data validation pipeline  |
| Sparse early label data         | Medium | Use heuristics or expert-labeled seeds |
| Cold start GPT outreach tone    | Medium | Iterate on prompt + monitor replies    |
| Outreach CRM compatibility      | Low    | Start with Airtable, then integrate CRM APIs |
| Technical learning curve        | Medium | Leverage LLMs for code generation, focus on architecture |
| Owner identification difficulty | High   | Focus on business-level profiling      |

## 8. Post-Launch Extensions

* Human-in-the-loop labeling tool (Label Studio)
* Outreach A/B testing framework
* Scoring model explainability dashboard
* Integration with acquisition CRMs
* Automated model retraining based on outcome data
* Geographic expansion modules

## 9. Conclusion

This roadmap provides a realistic plan for building an AI-powered SMB prospecting engine in approximately 40 hours of focused development time. By accounting for the technical complexity and learning curves associated with this project, the phases are structured to align with Adam's development style – focused bursts of productive work with clear deliverables. 

The time allocation (40 hours) reflects the added complexity of working with multiple data sources, ML modeling, and creating a full data pipeline architecture. This approach prioritizes building a solid foundation first, then layering in the intelligent components, rather than trying to implement everything at once.

Each phase is designed to produce a functional component that can be demonstrated and validated, allowing for iterative improvement. This provides natural checkpoints for reviewing progress and adjusting course if needed.