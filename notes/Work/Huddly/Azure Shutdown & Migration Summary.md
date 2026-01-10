**Date:** April 9, 2025  
**Prepared by:** Adam Broniewski

---

## Objective

Decommission Microsoft Azure infrastructure for the Deep Connect platform and migrate all essential assets into the Moving Data Insights GitHub organization for long-term control and cost optimization.

---

## GitHub Repository Overview

|Repo|Description|
|---|---|
|[`huddly-ai`](https://github.com/Moving-Data-Insights/huddly-ai)|Django-based platform for managing investor-startup matchmaking. Includes user management, geographic data, document processing, role-based access, and SQL Server schema for future database setup.|
|[`deep-connect-api`](https://github.com/Moving-Data-Insights/deep-connect-api)|Node.js/Express backend API for Deep Connect. Provides RESTful endpoints, user auth, and Azure storage integration.|
|[`deep-connect-website`](https://github.com/Moving-Data-Insights/deep-connect-website)|React.js frontend for Deep Connect, originally developed for Coherence Holdings.|

---

## Azure Shutdown Recap

| Task                                                | Status                                   |
| --------------------------------------------------- | ---------------------------------------- |
| 🔌 Disconnected all deployment pipelines            | ✅ Done                                   |
| 🔐 Exported all environment variables and secrets   | ✅ Done                                   |
| 💾 Downloaded blob storage                          | ✅ Done (images only; test files ignored) |
| 🧠 Exported schema                                  | ✅ Done (included in Django repo)         |
| 📦 Migrated GitHub repos into MDI org               | ✅ Done                                   |
| 🔥 Deleted all App Services, DBs, logs, and storage | ✅ Done                                   |
| 🗑️ Deleted `deep-connect` resource group           | ✅ Done                                   |

---

## Cost Comparison – Azure vs Modern Developer Tools

|Platform|Monthly Cost (Estimate)|Notes|
|---|---|---|
|**Azure**|~$38 CAD / mo|Billed for always-on services like App Service Plans, SQL DB, and Static Web App—even when idle. No true free tier for production-ready setups.|
|**Railway**|$0–$5 USD / mo|Free tier includes 500 hours per service. Scales to zero when idle. Great for backend services.|
|**Vercel**|$0–$20 USD / mo|Free tier includes generous bandwidth, CI/CD, and custom domains. Ideal for frontend apps (React, Next.js).|
|**Supabase**|$0–$25 USD / mo|Free tier includes database, auth, storage, and real-time APIs. Excellent Postgres-based alternative to Azure SQL + Blob.|

Migrating off Azure reduces idle costs and simplifies DevOps. New tooling provides **auto-scaling, better free tiers, and modern developer ergonomics** — ideal for startups and lean MVP development.

![[Pasted image 20250409143526.png]]

![[Pasted image 20250409143812.png]]


## 💡 Next Steps

- ✅ Infrastructure is now clean and zero-cost
- ✅ All future development will take place under the MDI GitHub org using Railway/Supabase/Vercel (or alternative platforms)
- ✅ Team can reference GitHub for current state of application logic, schema, and codebase