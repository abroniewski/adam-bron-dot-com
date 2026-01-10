# Adam’s thoughts and general task list to get demo live

- turn MExit into customizable RAG LLM accessible via API call
- Use Zod to enforce all types as we will be moving across multiple internal services communicating via API and REST calls. 
- Decide how to manage auxiliary functions that were used to generate the RAG vector DB. where should these exist? With the RAG LLM? In their own service? They are together now, let’s keep it practical and not move something we don’t have to, but let’s make sure we are documenting things well and have good process and development hygiene in place. 
- Chatbot personality -> write a life summary/CV with memories and experiences that we want Huddly to have. We will also develop his personality, mannerisms, style, etc. so that they really feel like a real person to the user. 
- The users should all have a similar experience with the chatbot, but each experience should be personal. Huddly will need to remember key details about the user. This would be easiest done using an industry standard long term memory system of key information the user shares. We should take advantage of the best API coding structure and model that can manage the conversational context and stuff for us. Let’s off load the tech as much as possible. 
- Build a database with key information about the user as we come across. This will happen during conversations with the chatbot Huddly. We need to be scraping all file uploads, conversations, text, VMs etc. for data about the user the we can store in a structured database. This is the information we determine to be most essential in the context of growing a business to prepare for liquidation of assets (selling your shares or exiting your company). 
- Use the scoring system being used to generate readiness scores along with the information gathered through the questionnaire being fed by the website backend (schema drive UI). We will continue storing user data and information in this central database as it is already connected to the scoring system and the website, which is the technical core of the system. 
- Do a top to bottom analysis and audit on the website codebase. Implement Zod for all type safety. Review the current cursor rules being used. Summarize the codebase tech stack and any future adjustments or changes that need to be made to accommodate the technical vision. 
- Given how we are looking to use the system, future proof it by adjusting or adding things like Zod. We need to be careful not to refactor too so much that we start breaking things that work. It’s a fragile system.
# Scope in Brett’s Words:
Although @Fatima brought me up to speed on the conversation, I want to make sure the call to action is clear before you leave for holidays @Adam.
We're getting more signals and feedback form our focus group saying build the prototype now, particularly with platforms emerging.What we're looking to build right away is the updated website w/Quick Readiness Quiz, followed by a basic platform for business owners to sign up and proceed interacting with the AI, until being prompted to connect with an certified advisor. On the advisor side we would like the launch of the Huddly Advisor Network to connect professionals with new leads based on a one-time referral fee.For the platform, and to continue pushing ahead on development, I suspect we need:You as technical leadA UX designer (we're thinking Faizan, I like his style)And a software developer?A detailed and updated product scope in the Google Docs.This is not meant to curtail our engagement with MExit. That said, although we followed up in-person they seem quite slow to respond. After all they are old, legacy-minded, and more coaches than anything.

# Scope and Focus from Fatima
Huddly AI – Meeting Notes

  

Date: [Insert Date]

Attendees: Adam, Brett, Fatima

Purpose: Brainstorming on module design, auditing functionality, readiness scoring, chatbot personality, and demo planning.

  

⸻

  

🧭 1. Meeting Overview

• Main Focus Areas:

• Defining a Quality Assurance / Auditing module

• Conceptualising a Huddly Readiness Score (HRS)

• Laying out the Huddly AI chatbot UX and role

• Preparing for demo development

• Clarifying vision, branding, and market positioning

  

⸻

  

🧩 2. Key Discussion Points

  

A. Auditing Module Concept

• Proposed as a distinct module within the Huddly platform.

• Designed to spot-check documents or data from a pre-defined list of 50 high-risk areas.

• Auditing logic:

• Randomly selects ~10 of 50 areas per client file.

• Requests verification artifacts (e.g., March 2024 invoice log).

• If discrepancies found, triggers human review or flags for escalation.

• Potential for dual-stream validation:

• Paper/document-based vs. interview-based

• Emphasis on partnering with auditors if manual verification is required outside platform capabilities.

  

B. Validation Streams

• Differentiation between:

• Automatable checks (data/documents)

• Conversational validation (human interviews)

• Concept to allow platform-generated prompts to request data or initiate outreach to relevant people for verification.

  

C. Huddly Readiness Score (HRS)

• Proposed as a market-standardised trust metric, akin to a credit score.

• Would classify sellers into readiness tiers (low, medium, high).

• Score becomes a market signal: enables segmentation, improves trust, increases liquidity.

• Trademark name discussed: “HRS – Huddly Readiness Score”.

  

D. Empowering Sellers with Choices

• Strategic branding point: frame Huddly as offering choices rather than simply “options.”

• “Empowering sellers and buyers with choices” seen as emotionally and strategically impactful.

• Rejected “liquidation” language in favour of positive, empowering terminology.

  

E. Chatbot UX & Onboarding Experience

• Users start with a questionnaire → then land in a dashboard/workspace.

• Central to the workspace is a chat-style coach (Huddly AI).

• Bot uses uploaded context to chat, guide, and coach users conversationally.

• Acts as a friendly, low-barrier introduction to the Huddly ecosystem.

• Proposed as both a demo and entry-point to deeper platform functionality.

  

F. Reusing M Exit Infrastructure

• Existing M Exit onboarding and knowledge base structure can be rebranded and repurposed.

• Plan to feed curated knowledge documents and blogs into a RAG (retrieval-augmented generation) chatbot.

• Emphasis on collecting:

• High-quality articles (e.g., structured blogs)

• Research PDFs < 30 pages

• Flagged sources as “fundamentals” vs. “complementary”

  

G. Bot Personality Design

• Discussion on creating a defined personality for Huddly AI:

• Ideas included: down-to-earth tech bro, neutral gender, empathetic tone, 20 years of psychology experience.

• Goal: make the chatbot feel relatable, intelligent, and emotionally aware.

• Proposal to define a backstory or “CV” that shapes the bot’s voice and behaviour.

• Action: Brett and Fatima to explore this as part of UX design.

  

⸻

  

✅ 3. Decisions Made

• Auditing module to be explored as a distinct feature set.

• Demo will simulate chatbot onboarding flow with existing M Exit logic.

• Move forward with development of readiness score concept.

• Reuse M Exit resources for knowledge ingestion into chatbot.

• Begin defining bot personality with traits and backstory.

• Adam to develop demo scope and effort estimation.

⸻

📌 4. Action Items & Next Steps

|   |   |   |   |
|---|---|---|---|
|Task|Owner|Due Date|Notes|
|Create architecture for auditing module concept|Adam|TBD|Include spot-check logic and escalation mechanism|
|Develop demo outline (time, scope, effort)|Adam|Next meeting|Based on onboarding â†’ dashboard â†’ Huddly AI chat|
|Share blog resources and documents for knowledge ingestion|Team|Ongoing|Prioritise high-quality, short, structured sources|
|Define bot personality profile (â€œCVâ€)|Brett & Fatima|TBD|Use tech bro + psychologist mix; tone = empathetic, neutral|
|Refine HRS (Huddly Readiness Score) framework|Adam & Brett|TBD|Define key indicators and scoring logic|
