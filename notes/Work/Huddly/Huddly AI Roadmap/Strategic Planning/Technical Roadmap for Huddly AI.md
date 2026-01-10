**Goal:**  
Provide step-by-step, phased, detailed instructions for developers to build the platform, following progressive enhancement, mock-first, and modular layering principles.

---

# **Roadmap Overview Structure**

- **Stage Name**
- **Goal of Stage**
- **Concrete Deliverables**
- **Detailed Step-by-Step Instructions**
- **Trigger/Exit Criteria to Move to Next Stage**

---

# **Stage 0: Setup and Static Foundation (Day 0–2)**

### **Goal:**

Launch basic live project (signup/login/dashboard shell) with static hosting on Railway.

### **Deliverables:**

- Vite + TailwindCSS project initialized
- Railway hosting connected
- Supabase project created (Auth + Database ready)
- Static /signup, /login, and /dashboard HTML pages live

### **Step-by-Step:**

1. **Create GitHub repo**: `my-saas-app`
2. **Initialize Vite project**: `npm create vite@latest`
    - Choose `vanilla-ts` template
3. **Install TailwindCSS**:
    - `npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init`
    - Configure Tailwind to watch `/src`
4. **Create public folder structure**:
    - `/public/favicon.ico`
    - `/src/pages/signup.html`, `/login.html`, `/dashboard.html`
5. **Add basic Tailwind layouts** (no interactivity yet)
6. **Deploy to Railway.app**:
    - Connect GitHub repo
    - Set up automatic deployments
7. **Set up Supabase project**:
    - Enable Email/Password Auth
    - Create `users` table with simple schema

### **Exit Criteria:**

- Publicly accessible staging site with basic pages and no errors.
- User can load /signup, /login, /dashboard even if they don’t actually work yet.

---

# **Stage 1: Fake It ‘Til You Make It (Week 1–2)**

### **Goal:**

Let users click through a believable flow using fake data.

### **Deliverables:**

- Fake signup/login success flow
- Fake dashboard showing hardcoded artifacts
- Fake chatbot with canned messages
- Minimal Vanilla JS for tab toggles, modals

### **Step-by-Step:**

1. **Write vanilla JS handlers**:
    - Simple form submissions redirect to dashboard (no real auth yet)
    - Fake dashboard artifacts loaded from hardcoded JSON
2. **Fake Chatbot Flow**:
    - User sends a message → fake AI reply after 1 second delay
3. **Basic Modals**:
    - Open/close modal windows using vanilla JS
4. **HTML5 Form Validation**:
    - Built-in browser validation (`required`, `email`, etc.)
5. **Update GitHub and Railway deployment** after every feature added.

### **Exit Criteria:**

- User can signup/login (fake), view a dashboard, and chat with a fake AI.

---

# **Stage 2: Backend Hooks: Prototype Foundation (Week 3–4)**

### **Goal:**

Enable real persistent user accounts and dashboard content via Supabase.

### **Deliverables:**

- Real signup/login/logout connected to Supabase Auth
- Real user profile saved to Supabase Database
- Artifacts associated with users in DB
- Zod validation for API routes

### **Step-by-Step:**

1. **Add Supabase Client Library** to project.
2. **Connect Supabase Auth:**
    - Real signup/login forms
    - Store JWT tokens client-side
3. **Create simple `profiles` and `artifacts` tables** in Supabase
4. **Build Next.js API Routes**:
    - `/api/signup`
    - `/api/login`
    - `/api/artifacts`
5. **Zod Schema Validation** for all backend data handling.
6. **Replace hardcoded artifacts** → real database queries.
7. **Restrict artifacts visibility to logged-in users only.**

### **Exit Criteria:**

- Real signup/login working.
- Dashboard pulls real, per-user artifacts from DB.
- No unvalidated frontend–>backend communication.

---

# **Stage 3: LLM Smart Integration (Month 2)**

### **Goal:**

Replace fake chatbot with real OpenAI interaction.

### **Deliverables:**

- Real conversations with OpenAI LLM (gpt-4 or gpt-3.5-turbo)
- Server-side OpenAI call orchestration
- Basic session memory (conversation saved per user)

### **Step-by-Step:**

1. **Create backend API route**: `/api/chatbot`
    - Accepts user input
    - Calls OpenAI Chat Completion API
    - Sends back response
2. **Implement server-side OpenAI orchestration** (no direct frontend OpenAI calls)
3. **Add conversation memory**:
    - Save last 5–10 exchanges in Supabase under user session.
4. **Rate limit OpenAI calls** per user (basic protection).

### **Exit Criteria:**

- Live OpenAI-driven chatbot functioning.
- Each user gets context-aware conversations.

---

# **Stage 4: Payment Integration (Month 3)**

### **Goal:**

Enable basic payment plans for users using Stripe.

### **Deliverables:**

- Stripe account and products setup
- One-time payment or basic subscriptions
- Webhook handling for payment confirmation

### **Step-by-Step:**

1. **Set up Stripe account and create plans.**
2. **Add Stripe SDK to project.**
3. **Create backend API route**:
    - `/api/checkout-session`
4. **Build simple Checkout Page**:
    - User chooses plan → redirect to Stripe hosted checkout
5. **Handle Stripe Webhooks**:
    - On successful payment, update user's role/plan in Supabase.
6. **Protect premium features behind subscription paywall if needed.**

### **Exit Criteria:**

- Live payments working.
- Payment status reflected in user dashboard.

---

# **Stage 5: Prototype Complete**

### **Goal:**

Functional working SaaS platform focused on sellers.

### **Deliverables:**

- Real users
- Real dashboard artifacts
- LLM guidance
- Payments flowing

### **Exit Criteria:**

- Ready to onboard first real users and capture feedback.

---

# **Stage 6: Collaboration and Marketplace Expansion (Month 4–6)**

### **Goal:**

Enable buyer/seller interaction, real-time communication, and datarooms.

### **Deliverables:**

- Buyer onboarding
- Listing browsing/search
- Chat between buyers/sellers
- Shared dataroom access
- Real-time file collaboration

### **Step-by-Step:**

1. **Add Buyer Role** in Supabase auth.
2. **Create Listing and Dealroom tables**.
3. **Implement realtime updates**:
    - Use Supabase Realtime for live chat/messages.
    - Or WebSocket server if needed.
4. **Add Listing Marketplace UI**:
    - Filter/search listings
    - Connect buyers and sellers
5. **Expand Artifact Uploads**:
    - Multi-file support
    - Permissions control for shared files

### **Exit Criteria:**

- MVP platform connecting buyers and sellers.
- Real-time updates for listings and messages.

---

# **Quick Visual Milestone Summary**

|Week|Milestone|
|:--|:--|
|0|Setup + Hosting (live static pages)|
|1|Fake flows (dashboard + fake chatbot)|
|3|Real signup/login and dashboard DB|
|5|Live OpenAI chatbot|
|8|Stripe payments|
|12|Prototype complete|
|16–24|Buyer flows, listings, real-time collaboration|
