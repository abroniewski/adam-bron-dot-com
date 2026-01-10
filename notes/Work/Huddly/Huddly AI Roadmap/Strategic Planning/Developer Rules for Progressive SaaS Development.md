_(Internal Policy for Human Developers and LLM Prompts)_

---

## **1. Start HTML-First**

- Pages must be usable without JavaScript enabled.
- Deliver complete HTML structure first before adding interactivity.
- TailwindCSS is used for styling; no custom CSS unless justified.

---

## **2. Add JavaScript Progressively**

- Use Vanilla JavaScript (TypeScript) for small UI behaviors (form validation, modals, tab toggles).
- Do not introduce frontend frameworks (React, Svelte, etc.) until explicitly triggered in the roadmap.
- All JS must **degrade gracefully** if scripts fail or JS is disabled.

---

## **3. Use Mock Services and Data Early**

- Assume all external APIs (OpenAI, Stripe, Supabase, SendGrid) are mocked during initial development unless stated otherwise.
- Mock services must have the same data shapes as the intended real APIs (use Zod for schema validation).
- Mocks are modular and easily replaceable without breaking the frontend.

---

## **4. Backend API Only Through Controlled Routes**

- All frontend communication with backend must go through **Next.js API Routes**.
- No direct calls to external APIs (e.g., OpenAI, Stripe) from the frontend.
- API routes must validate inputs using Zod.

---

## **5. Implement by Layers, Not Big Bang**

- Implement backend services modularly. For example:
    - `authService.ts` (Supabase auth helpers)
    - `paymentService.ts` (Stripe client)
    - `llmService.ts` (OpenAI calls)
- Each service should work independently and be easily mockable.

---

## **6. Version Every Page with Mocks First**

- Build each page assuming fake data and mock interactions first.
- Confirm the page flows correctly and meets UX before integrating real database or external calls.

---

## **7. Always Modularize Early**

- Extract reusable UI components (navbar, buttons) as partials or separate TSX components once needed.
- Extract external service logic into `/services/` modules from day one.
- Keep API route handlers small, clean, and composable.

---

## **8. Respect the Deployment Rhythm**

- Every commit/PR must be deployable to Railway staging.
- No half-broken states allowed in main branches.
- Maintain working login/signup/dashboard shell even during backend upgrades.

---

## **9. Prioritize User Experience and Resilience**

- Validate user inputs with HTML5 first, then Zod backend validation.
- Build fallback screens for errors (e.g., "Service Unavailable" graceful fallback for chat or payment APIs).
- Pages should load quickly even when external services are slow or down.

---

## **10. Defer Fancy Tech Until Needed**

- No realtime, streaming, complex orchestration unless explicitly triggered by roadmap phases.
- No libraries, SDKs, or services outside the approved stack without CTO review.
- Keep it simple, boring, and maintainable — optimize for speed to usable product.

---

# **Quick Developer Motto**

> "First make it work.  
> Then make it resilient.  
> Then make it real.  
> Then make it smart."

---

# **Summary**

These rules guarantee that:
- Progressive enhancement is respected.
- MVP can launch fast with minimal technical debt.
- Expansion into realtime and marketplace flows happens cleanly later.
- Your platform stays resilient and user-focused.