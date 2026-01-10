
## **📌 Project Overview**
Huddly.ai is an AI-powered investor-matching platform designed for **pre-seed startup founders**. The goal of this **interactive demo** is to provide potential investors with a **tangible, hands-on experience** by guiding users through a **structured AI-driven funding journey**.

The **core user experience** involves:
1. **Interacting with an AI chatbot** that gathers structured startup data.
2. **Matching the user with investors** based on predefined criteria.
3. **Generating an AI-enhanced investment memo** based on collected information.
4. **Providing a downloadable investment memo as a PDF**.
5. **Displaying matches and the memo in a Webflow-based dashboard**.

---

## **📍 Tech Stack**
### **Frontend**
- **Webflow** (No-code frontend for UI & chatbot interface)
- **JavaScript (Webflow API Integration)** (To send & receive data from backend)

### **Backend**
- **Django (Hosted on Railway.app)** (Handles API, business logic, and database)
- **PostgreSQL (Managed on Railway.app)** (Stores users, investors, and match data)
- **OpenAI GPT-4 API** (AI-powered chatbot & document summarization)

### **File Storage**
- **Django’s existing file handling system** (For pitch deck uploads)
- **Azure Blob Storage (if necessary)** (Already part of the DeepConnect architecture)

### **Deployment & Version Control**
- **GitHub (Single Repository: `huddly-ai-demo`)** (All code for backend, frontend API integrations)
- **Railway.app (Auto-deploys Django backend)** (Continuous deployment from GitHub)

---

## **📍 System Architecture**
### **Frontend (Webflow)**
- **Displays Chatbot UI** → Calls Django API to send & receive user data.
- **Displays Investor Matches** → Fetches from `/get-matches` API.
- **Allows Memo Generation** → Calls `/generate-memo` API when a match is selected.
- **Enables Memo Download** → Provides a PDF for users to download.

### **Backend (Django on Railway.app)**
- **Handles user onboarding** → Accepts chatbot data & stores structured responses.
- **Runs Investor Matching Algorithm** → Uses predefined weights to score matches.
- **Processes Pitch Deck Uploads** → Extracts text and integrates insights.
- **Generates AI-Powered Investment Memo** → Uses OpenAI to summarize & format data.
- **Serves API to Webflow** → Provides structured data & processed results.

### **Database (PostgreSQL on Railway.app)**
- `users` → Stores user profile & chatbot responses.
- `investors` → Pre-generated investor dataset for matching.
- `matches` → Stores user-investor match scores.
- `investment_memos` → Stores AI-generated investment memos.

---

## **📍 Roadmap Phases**

### **Phase 1: System Setup & Hosting**
- Deploy **Django backend** on Railway.app.
- Set up **PostgreSQL database** with schema migrations.
- Configure **environment variables** for API keys & database connections.
- Expose **Django API endpoints**:
  - `/chat` → Handles chatbot responses.
  - `/match` → Runs investor matching algorithm.
  - `/generate-memo` → Creates investment memo PDF.
- Integrate Webflow with Django API:
  - Webflow sends user responses to **Django API**.
  - Webflow fetches **matches & investment memos** from backend.

---

### **Phase 2: AI Chatbot Development**
- Implement **GPT-4-powered chatbot** within Django API.
- Design **conversational flow**:
  1. **General onboarding question** (User’s funding objective).
  2. **Collect required structured responses**:
     - **Industry**
     - **Technology**
     - **Country**
     - **Investment Stage**
  3. **Confirm responses before submission**.
  4. **Once minimum inputs are collected, trigger investor matching**.
- Store chatbot responses **in PostgreSQL**.
- Deploy **chatbot API on Railway.app**.

---

### **Phase 3: Investor Matching Integration**
- **Modify Django Matching Algorithm** to use chatbot-collected data.
- Ensure **Top 3 Matches** are returned based on:
  - Industry alignment **(30%)**
  - Technology alignment **(25%)**
  - Geographic focus **(25%)**
  - Investment stage **(20%)**
- Deploy **API Endpoint: `/get-matches`** for Webflow to fetch matches.

---

### **Phase 4: Investment Memo Generation**
- **Allow pitch deck upload in Webflow** → File sent to Django backend.
- **Extract text from pitch decks** using:
  - **Python pptx library** (Extract slide text).
  - **AI-powered key insights extraction**.
- **Use OpenAI to summarize startup details**:
  - Process **chatbot responses**.
  - Enhance investor insights based on match score.
- **Format memo into a structured HTML template**.
- **Generate PDF using Django’s built-in reporting tools**.
- Deploy **API Endpoint: `/generate-memo`** to Webflow.

---

### **Phase 5: Webflow Frontend & API Integration**
- **Embed Chatbot UI in Webflow**:
  - Calls `/chat` API to interact with OpenAI.
- **Display Investor Matches**:
  - Fetches **Top 3 matches** from `/get-matches` API.
- **Enable Investment Memo Generation**:
  - Clicking a match triggers `/generate-memo` API.
- **Allow PDF Download of Investment Memo**:
  - Webflow fetches and presents **downloadable link**.

---

### **Phase 6: Testing, Optimization & Demo Prep**
- **Test Chatbot Flow**:
  - Verify structured & free-text responses.
  - Ensure **confirmation step before submission**.
- **Validate Investor Matching Logic**:
  - Ensure relevant investors are recommended.
  - Test **match scoring adjustments**.
- **Optimize Investment Memo Output**:
  - Ensure clarity & professional formatting.
  - Refine **AI-generated insights**.
- **Improve API Performance**:
  - Optimize response times for chatbot & matchmaking.
  - Ensure Django can handle multiple concurrent requests.

---

## **📍 Final Deliverable**
A **fully functional interactive demo** where startup founders:
6. **Talk to an AI chatbot** → Provide details on funding needs.
7. **Get matched with 3 investors** → Based on structured AI logic.
8. **Generate an AI-enhanced investment memo** → Summarizing startup data.
9. **Download a PDF investment memo** → From Webflow dashboard.

---

## **📍 GitHub & Deployment Strategy**
**Single Repository:**  
```bash
huddly-ai-demo/
├── backend/                  # Django backend API (Deployed on Railway)
│   ├── apps/                 # Django apps (matchmaking, chatbot, reports)
│   ├── database/             # PostgreSQL schema & migrations
│   ├── manage.py             # Django CLI
│   ├── requirements.txt      # Python dependencies
│   ├── Dockerfile            # For Railway deployment
│   ├── README.md             # Backend documentation
│
├── frontend/                 # Webflow API integrations
│   ├── webflow_integration/  # Scripts for Webflow to connect to Django API
│   ├── README.md             # Frontend setup documentation
│
└── .github/                  # GitHub workflows (for CI/CD)
    ├── deploy.yml            # Auto-deploy workflow for Railway
```

### **Railway Deployment**

- **Auto-deploy Django backend** from GitHub.
- **Enable PostgreSQL managed instance** on Railway.
- **Expose API for Webflow** → Direct communication with chatbot & matchmaking.