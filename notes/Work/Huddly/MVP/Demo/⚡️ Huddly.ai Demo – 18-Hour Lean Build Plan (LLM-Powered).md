# 🎯 Objective
Connect the live **React + Supabase + Edge Function** front-end (HRS & questionnaire) with a backend **LLM agent** using the MExit infrastructure to create a conversational, readiness-aware coach named **Huddly**.

---

# 🧩 System Architecture

| Component | Project Repo | Status |
|----------|---------------|--------|
| Frontend & Questionnaire | [`huddly-succession-flow`](https://github.com/Moving-Data-Insights/huddly-succession-flow) | ✅ Live |
| Supabase DB (User & HRS data) | `huddly-succession-flow` | ✅ Live |
| Readiness Scoring (Edge Function) | `huddly-succession-flow` | ✅ Live |
| PDF + Briefing Generator | `huddly-succession-flow` | ✅ Working |
| LLM Chatbot + Tools | [`web-scraper`](https://github.com/Moving-Data-Insights/web-scraper) (`rag/app.py`) | ✅ Use as base |
| Vector DB / RAG | `web-scraper` | Optional / Deferred |

---

# 🧠 Execution Strategy

**Keep code where it lives.**
- Extend `web-scraper` with a new FastAPI route `/api/chat` to serve as Huddly’s brain.
- Reuse prompt and LLM logic from MExit.
- Integrate frontend to call this API after questionnaire is complete (handoff to Huddly).
- Memory, context, and scoring data flow from Supabase.

---

# ⏱️ 18-Hour Timeline with Task Checklist

---

## ⬛ Phase 1: Backend Agent Setup in `web-scraper` (Hours 0–2)

- [ ] In `web-scraper/rag/app.py`:
  - [ ] Add new POST endpoint: `/api/chat`
- [ ] In `web-scraper/rag/`:
  - [ ] Create `services/llm.py`
  - [ ] Add CORS middleware to allow frontend calls
- [ ] Configure `.env`:
  - `OPENAI_API_KEY`
  - `SUPABASE_URL` (optional if querying from backend)
- [ ] Deploy backend to Railway if not already

---

## ⬛ Phase 2: Load Persona & Prompt System (Hours 2–4)

- [ ] Add `/prompts/system_prompt.md`
  - Define Huddly’s tone, background, mission
- [ ] Add `services/prompt_manager.py`
  - Centralize prompt loading
  - Expose `load_prompt(name: str) -> str`
- [ ] Copy relevant LLM logic from `briefing.py` (or edge function) into backend

---

## ⬛ Phase 3: LLM Chat Route (Hours 4–6)

- [ ] In `/api/chat`, accept:
```json
{
  "user_id": "abc123",
  "messages": [{ "role": "user", "content": "..." }],
  "context": {
    "readiness_score": 72,
    "pillar_scores": {
      "emotional": 80,
      "financial": 60,
      "business": 70,
      "operational": 50
    },
    "primary_objective": "Sell business in 2 years"
  }
}
````

* [ ] Inject context into the prompt as structured memory
* [ ] Format messages into OpenAI chat API call
* [ ] Return `{"response": "LLM reply here"}`

---

## ⬛ Phase 4: React Chat Integration (Hours 6–8) in `huddly-succession-flow`

* [ ] In `ChatView.jsx`:

  * [ ] Add `useChat()` hook:

    * `messages[]`, `sendMessage()`, `loading`, `error`
* [ ] On final screen of questionnaire:

  * [ ] Call `/api/chat` and send:

    * User ID (from Supabase)
    * HRS scores (already in Supabase)
    * Objective + context (1-pager output optional)
* [ ] Display Huddly’s reply in chat format
* [ ] Add text input + send button

---

## ⬛ Phase 5: Hook Up Briefing Tool (Hours 8–10)

* [ ] Copy prompt from edge function into `/prompts/tools/briefing.md`
* [ ] Create `generate_briefing(context: dict) -> str`
* [ ] (Optional) Expose test-only `/api/tools/briefing` route

---

## ⬛ Phase 6: Final Chat Polish & Error Handling (Hours 10–13)

* [ ] Show "Huddly is thinking..." loader in frontend
* [ ] Retry API failures once
* [ ] Scroll to latest message
* [ ] Confirm flow:

  * Questionnaire → Chat → GPT-4 response personalized with readiness data

---

## ⬛ Phase 7: Refactor & Document (Hours 13–16)

* [ ] Refactor LLM tools into `services/tools/`

  * `readiness_summary.py`
  * `generate_briefing.py`
* [ ] Update README in `web-scraper/rag/`

  * How to add prompts
  * How to test `/api/chat`

---

## ⬛ Phase 8: Record Demo & Final Touches (Hours 16–18)

* [ ] Push final code to GitHub (`main`)
* [ ] Confirm Railway backend deployment
* [ ] Test full flow: questionnaire → LLM agent handoff
* [ ] Record Loom walkthrough
* [ ] Tag as `v0.1-huddly-demo-ready`

---

# ✅ What Will Be Live After 18 Hours

| Feature                                   | Status |
| ----------------------------------------- | ------ |
| `/api/chat` LLM agent                     | ✅      |
| Supabase-fed memory (HRS, user objective) | ✅      |
| Prompt loader + tools                     | ✅      |
| Chat UI → API flow                        | ✅      |
| Modular backend prompt tools              | ✅      |
| Live demo flow                            | ✅      |

---

# 🧱 Deferred / Next SEPs

* Persistent memory (store user facts over time)
* Advisor matching logic
* Chat history threading (per session)
* Upload-based audit logic
* More advanced tool chaining (e.g. next steps planning)

---

# 🧠 Cursor IDE Configuration

```json
{
  "backend": {
    "repo": "Moving-Data-Insights/web-scraper",
    "entry": "rag/app.py",
    "add": "/api/chat (POST)",
    "validate": "Pydantic ChatRequest, ChatResponse",
    "output": "JSON with assistant_message"
  },
  "frontend": {
    "repo": "Moving-Data-Insights/huddly-succession-flow",
    "component": "ChatView.jsx",
    "connectsTo": "api/chat",
    "after": "questionnaire submission"
  },
  "prompts": {
    "directory": "/prompts/",
    "personality": "system_prompt.md",
    "tools": ["briefing.md"],
    "loader": "prompt_manager.py"
  }
}
```