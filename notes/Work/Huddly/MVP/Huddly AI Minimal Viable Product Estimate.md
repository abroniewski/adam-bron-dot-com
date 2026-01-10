# 1 Executive Summary

Huddly AI is a cutting-edge “networking chauffeur” that leverages AI to intelligently connect stakeholders such as startup founders, investors, researchers, and enterprise innovation partners. The project’s goal is to deliver a Minimum Viable Product (MVP) that establishes the platform’s core infrastructure while also providing a subset of essential user-facing features. This MVP will enable Huddly AI to immediately build its user base and gather valuable market feedback.

The MVP development is organized around five key epics, each encompassing user stories, tasks, and subtasks to ensure a focused and phased approach:
1. **User Authentication and Onboarding**
2. **Founder-Investor & Investor-Investor Matching**
3. **Auto-Generated Documents**
4. **Messaging**
5. **Dashboard**

The project involves meticulous **User Interface (UI)** and **User Experience (UX)** planning, as well as **Strategic Project Management**, to ensure alignment with the platform’s value proposition. A SCRUM methodology will be employed to prioritize iterative development and deployment.

The project team includes:
- **User Interface and Experience Specialist (UI/UX)**
- **Front-End Developer**
- **Back-End Developer**
- **Data Scientist (DS)**
- **Strategic Project Manager (PM)**

The development timeline is estimated at **12–18 weeks**, with a total project effort of **521–756 hours**. Based on a blended hourly rate of €33 and including a 20% contingency, the total project cost is estimated between **$33,000–$45,000 CAD**. For a fixed-cost contract, the high-end estimate of **$45,000 CAD** will be used.

The MVP will include:
- **AI-powered user onboarding** using chatbots
- **Intelligent matchmaking** between founders, investors, and other stakeholders
- **Automated document generation**, such as investment memos
- **Real-time messaging and notifications**
- A **dashboard** for tracking user KPIs and interactions

This phased approach will ensure scalability and early value delivery, providing Huddly AI with the foundation to become a transformative platform for professional networking.
<div style="page-break-after: always;"></div>

# 2 Introduction & Project Overview

The Huddly AI platform is an AI-driven Software as a Service (SaaS) solution aimed at revolutionizing professional networking. Leveraging an intuitive **AI-agent** and chatbot, it acts as a "networking chauffeur" to intelligently connect stakeholders—startup founders, investors, researchers, enterprise innovation partners, and talent. The platform will provide actionable insights, real-time recommendations, automated document analysis, and specialized tools (e.g., investment memos, research commercialization memos, recruitment portals) to help users form meaningful, productive relationships.
## 2.1 Background

Professional networking is critical in fostering innovation, securing funding, and scaling new ventures. However, many professionals struggle to find the *right* connections—especially across disciplines like academia, corporate innovation, and venture capital. Traditional networking tools often lack the intelligence or data-driven insights necessary to make matches based on nuanced factors such as industry focus, technology interests, research opportunities, or investment theses.

Huddly AI seeks to address these challenges by combining:
- **Graph database technology** to model and query complex relationships.
- **AI-driven recommendation engines** for personalized matchmaking.
- **Automated document processing** to enrich user profiles with meta-data from pitch decks, research papers, and more.
- **Advanced chatbot interactions** to guide users, capture necessary profile details, and continuously refine recommendations.

By unifying these capabilities into a single platform, Huddly AI will accelerate the formation of high-value partnerships and collaborations that might otherwise remain undiscovered.
## 2.2 Long-term Objectives

1. **Facilitate Intelligent Matchmaking**  
   - Implement AI algorithms that identify and connect complementary stakeholders (founders with investors, researchers with enterprises, co-founders with each other, etc.).  
   - Offer personalized recommendations that go beyond superficial profile matching and leverage AI insights.

2. **Streamline User Onboarding and Data Collection**  
   - Deploy an AI-powered chatbot to simplify new user onboarding, gathering essential data in a conversational flow.  
   - Provide just-in-time data entry that continuously refines user profiles without overwhelming them on sign-up.

3. **Enhance Decision-Making with Automated Memos**  
   - Offer **Investment Memo Generation** to give investors clear, data-rich summaries of startup opportunities.  
   - Provide **Research Commercialization Memos** that translate academic or scientific research into market-ready insights.

4. **Enable Enterprise & Talent Collaboration**  
   - Develop a **Recruitment Portal** with integrated video AI for efficient screening of candidates.  
   - Launch an **Innovation Partner Problem Definition** area where enterprises pose challenges, driving potential solutions from startups and researchers.

5. **Deliver a Robust, Scalable SaaS Platform**  
   - Utilize modern cloud infrastructure (AWS, GCP, or Azure) and a secure graph database for data storage.  
   - Ensure the architecture is flexible for future feature expansions and growing user bases.  

Through these objectives, Huddly AI aims to streamline professional networking, drive faster innovation cycles, and create meaningful, enduring relationships in the startup and research ecosystems.

The focus of this project is on the startup founder, the startup, and the financial investor. These core users form part of a larger overall ecosystem of users that the platform will incorporate as part of the long term road map.

To better understand the nature of the problem, we identify the primary platform users and how they are connected in the overview below:
- startup founders
- investors
- researchers
- innovation partners (i.e. enterprises)
- talent (i.e. job seekers)
	![[graph.svg]]

## 2.3 MVP Objectives

The MVP development represents the first phase of the implementation of a the long-term technical roadmap. We build core infrastructure while simultaneously delivering a functional subset of user-facing features that can be deployed immediately to start building a user base and gathering market feedback. This approach balances scalability with early value delivery and enables iterative improvement while maintaining long-term goals. With the long term vision in sight, we require careful coordination between foundational and feature-specific development.

<div style="page-break-after: always;"></div>

# 3 Detailed Scope & Feature Overview

The project scope has been developed by identifying the highest priority features needed for a positive user experience that is driven by a targeted connection of founders and investors to raise the capital needed to launch. We breakdown the project by:
- User interface and User Experience planning
- Strategic project management to maintain value proposition alignment
- 5 Epics made up of user stories, tasks, and subtasks
	- User Authentication and Onboarding
	- Founder-Investor & Investor-Investor Matching
	- Auto-Generated Docs
	- Messaging
	- Dashboard

The user stories are drafted from the perspective of our two main users; the startup founder and the financial investor. Feature development will be prioritized and organized into sprints using SCRUM methodology to focus on iterative feature development and deployment.

The hours associated with each sub-task are linked to the team member completing the sub-task. The team is composed of:
- User-interface and user experience specialist (UI/UX)
- Front-end developer (FrontEnd)
- Back-end developer (BackEnd)
- Data Scientist (DS)
- Strategic Project Manager (PM)

## 3.1 **User Interface and User Experience**

Time here is used by the team member focused on the user-interface and user experience (UI/UX). This time is not associated with any specific features, but is needed for initial discovery and delivery.

**Tasks:**
**Initial Client Briefing & Research**
- **Description**: Understanding the client's vision, gathering all necessary project details, analyzing competition, target audience, and creating user personas.
- **Estimated Hours**: 6-8 hours (UI/UX)

**User Journey Mapping / Wireframing**
- **Description**: Mapping out the entire user journey, defining key screens, and wireframing the flow of the application.
- **Estimated Hours**: 6-8 hours (UI/UX)

**Client Feedback/Iterations**
- **Description**: Allocating time for revisions after the initial presentation of designs.
- **Estimated Hours**: 10-15 hours (UI/UX)

**Finalizing Design Assets (Handover)**
- **Description**: Finalizing Figma files, preparing design handoff for developers, and ensuring all components are properly documented.
- **Estimated Hours**: 6-8 hours (UI/UX)

**Post-Delivery Support (optional)**
- **Description**: Offering minor tweaks, addressing questions from developers.
- **Estimated Hours**: 4 hours (UI/UX)

---
## 3.2 Strategic Project Management

PM time is estimated as a dependency on the overall project time. If the project is running slowly, the estimate is for 8 hours/week * 14 weeks = 112 hours. If it's running fast, the estimate is for 24 hours/week * 8 weeks = 192 hours

**Tasks:**
**Running the project**
- **Description**: Aligning development with client business goals, facilitating SCRUM, communications between developers and client, scoping and prioritization, backlog management, and developing acceptance criteria.
- **Estimated Hours**: 112-192 hours (PM)

---
## 3.3 **Epic: User Authentication & Onboarding**

### 3.3.1 **User Story: As a user, I want to sign up using a chatbot so that I can get initial matches before fully registering.**

**Acceptance Criteria:**

- The chatbot collects user goals and needs.
- Partial matches are displayed to give a preview.
- Users can sign up using email or SSO (Google, LinkedIn, Discord).
- Users are assigned roles (Founder/Investor) during onboarding.

**Tasks:**
**Display Extracted Data for User Confirmation (HM-8)**
- **Description**: Build functionality to display parsed data from chatbot responses for user review.
- **Estimated Hours**: 11–15 hours
  - UI designs in Figma: 3 hours (UI/UX)
  - Frontend integration: 4–5 hours (FrontEnd)
  - Backend connection to fetch data: 3–5 hours (BackEnd)
  - Testing: 1–2 hours (BackEnd)

**Parse LLM Responses and Store Structured Data in Database (HM-7)**
- **Description**: Process chatbot responses, parse data, and store structured information.
- **Estimated Hours**: 10–15 hours
  - Parsing logic and LLM prompt engineering: 5–7 hours (BackEnd)
  - Database schema adjustments: 3–5 hours (BackEnd)
  - Testing & validation: 2–3 hours (BackEnd)

**Integrate OpenAI API for User Input Processing (HM-6)**
- **Description**: Connect the chatbot to OpenAI's API for NLP-based data extraction and processing.
- **Estimated Hours**: 10–14 hours
  - API integration: 6–8 hours (BackEnd)
  - Input/output handling: 3–4 hours (BackEnd)
  - Testing: 1–2 hours (BackEnd)

**Develop Chatbot Interaction UI for Collecting User Goals (HM-5)**
- **Description**: Build a frontend chatbot UI for user interactions during onboarding.
- **Estimated Hours**: 14–18 hours
  - UI designs in Figma: 8 hours (UI/UX)
  - Frontend implementation and logic (chat flows): 4–6 hours (FrontEnd)
  - Testing & bug fixing: 2–4 hours (FrontEnd)

**Implement SSO Authentication (Google, LinkedIn, Discord) (HM-4)**
- **Description**: Enable single sign-on authentication for easy user login.
- **Estimated Hours**: 16–20 hours
  - UI designs in Figma: 4 hours (UI/UX)
  - Research and setup (OAuth2): 4–6 hours (BackEnd)
  - Backend logic: 5–7 hours (BackEnd)
  - Testing: 3 hours (BackEnd)

### 3.3.2 **User Story: As a user, I want to access my dashboard after signing up so that I can view my matches and progress.**

**Acceptance Criteria:**

- Users see their 3 highest match scores (percentage-based).
- A profile completeness indicator is displayed.
- Users have clear calls to action for next steps.

**Tasks:**
**Create Algorithm for Profile Completeness Calculation (HM-11)**
- **Description**: Develop logic to evaluate and calculate a user's profile completeness based on provided and missing data.
- **Estimated Hours**: 8–11 hours
  - Research & planning: 2-3 hours (BackEnd)
  - Coding: 4-5 hours (BackEnd)
  - Unit testing: 2-3 hours (BackEnd)

 **Implement API to Fetch and Display Matches and Profile Information (HM-10)**
- **Description**: Build backend API to fetch profile details and match data.
- **Estimated Hours**: 12–14 hours
  - API design & setup: 5 hours (BackEnd)
  - Data retrieval logic: 5 hours (BackEnd)
  - Testing & debugging: 2–4 hours (BackEnd)

**Develop Dashboard UI (HM-9)**
- **Description**: Design and create frontend components for displaying user profile, matches, and KPIs.
- **Estimated Hours**: 7–10 hours
  - Frontend coding: 5–7 hours (FrontEnd)
  - Testing & adjustments: 2–3 hours (FrontEnd)

---

## 3.4 **Epic: Founder-Investor & Investor-Investor Matching**

### 3.4.1 **User Story: As a founder, I want to find investors based on relevant criteria so that I can connect with the best fit.**

**Acceptance Criteria:**

- Matching algorithm considers predefined criteria.
- Investors are displayed with match scores.
- Users can filter matches (e.g., industry, funding stage, location).

**Tasks:**

**Show Match Percentage & Key Investor Details (HM-25)**
- **Description**: Implement UI to display match percentages and investor details for the top 3 matches.
- **Estimated Hours**: 12–17 hours
  - UI design: 6–8 hours (UI/UX)
  - Frontend integration: 5–6 hours (FrontEnd)
  - Testing: 1–3 hours (FrontEnd)

**Implement Accept/Reject Buttons with Immediate Updates (HM-24)**
- **Description**: Add functionality for accepting or rejecting matches, updating the UI and backend.
- **Estimated Hours**: 10–13 hours
  - Frontend button functionality: 3–4 hours (FrontEnd)
  - Backend integration: 5–6 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

**Develop UI to Display 3 Investor Profiles (HM-23)**
- **Description**: Build UI components to showcase investor profiles, including images and key details.
- **Estimated Hours**: 9–13 hours
  - UI design: 4–6 hours (UI/UX)
  - Frontend coding: 4–5 hours (FrontEnd)
  - Testing: 1–2 hours (FrontEnd)

**Track User Interactions (Accept/Reject History) (HM-22)**
- **Description**: Develop functionality to log user actions for accepting or rejecting matches.
- **Estimated Hours**: 8–11 hours
  - Backend logic: 4–5 hours (BackEnd)
  - Database integration: 3–4 hours (BackEnd)
  - Testing: 1–2 hours (BackEnd)

**Send Investment Memo (HM-XX)**
- **Description**: Designing the process for sending the memo, confirmation messages, and UI for this process.
- **Estimated Hours**: 9–12 hours
  - Figma designs: 5-6 hours (UI/UX)
  - Frontend integration: 3–4 hours (FrontEnd)
  - Testing: 1–2 hours (FrontEnd)

---

### 3.4.2 **User Story: As an investor, I want to find startups and other investors that align with my investment goals so that I can make informed decisions.**

**Acceptance Criteria:**

- The system displays the top 3 startups and 3 co-investors based on predefined matching criteria.
- Match scores are shown as percentages.
- Investors can accept or reject matches, with immediate updates.

**Tasks:**

**Show Match Percentage & Key Details for Startups/Investors (HM-19)**
- **Description**: Implement UI to display match percentages and details for startups and co-investors.
- **Estimated Hours**: 10–14 hours
  - UI design: 4–5 hours (UI/UX)
  - Frontend integration: 5–6 hours (FrontEnd)
  - Testing: 1–3 hours (FrontEnd)

**Implement Accept/Reject UI (HM-18)**
- **Description**: Add accept/reject functionality for startup and co-investor matches.
- **Estimated Hours**: 13–16 hours
  - Frontend development: 6–7 hours (FrontEnd)
  - Backend integration: 5–6 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

**Display 3 Startup Matches & 3 Investor Matches (HM-17)**
- **Description**: Create a user interface to display matches for startups and co-investors.
- **Estimated Hours**: 8–11 hours
  - UI design: 3–4 hours (UI/UX)
  - Frontend coding: 4–5 hours (FrontEnd)
  - Testing: 1–2 hours (FrontEnd)

**Ensure Excluded Matches (Accepted/Rejected) Do Not Reappear in API Results (HM-16)**
- **Description**: Implement backend logic to filter out previously accepted/rejected matches.
- **Estimated Hours**: 10–13 hours
  - API adjustments: 5–6 hours (BackEnd)
  - Database query updates: 3–4 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

**Send Investment Thesis (HM-XX)**
- **Description**: Designing the process for sending the memo, confirmation messages, and UI for this process.
- **Estimated Hours**: 9–12 hours
  - Figma designs: 5-6 hours (UI/UX)
  - Frontend integration: 3–4 hours (FrontEnd)
  - Testing: 1–2 hours (FrontEnd)

---

## 3.5 **Epic: Auto-Generated Docs**

### 3.5.1 **User Story: As a founder, I want to automatically generate an investment memo so that I can present my startup professionally to investors.**

**Acceptance Criteria:**

- The memo includes key technologies underpinning the startup, commercialization details, and identified implementation risks.
- A visualization of research trends from Google Scholar is generated.
- The memo follows a consistent predefined format.

**Tasks:**

**Retrieve Startup Details from the Database (HM-30)**
- **Description**: Fetch startup details from the database, including data from uploaded documents and chatbot input.
- **Estimated Hours**: 6–10 hours
  - Backend logic: 3–5 hours (DS)
  - Database query setup: 2–3 hours (DS)
  - Testing: 1–2 hours (DS)

**Use OpenAI API to Generate Structured Memo Text (HM-31)**
- **Description**: Utilize OpenAI API to generate a structured investment memo using retrieved data.
- **Estimated Hours**: 8–12 hours
  - API integration: 4–5 hours (DS)
  - Formatting logic: 3–4 hours (DS)
  - Testing: 1–3 hours (DS)

**Pre-Process Extracted Data for AI Consumption (HM-32)**
- **Description**: Prepare data by structuring it for AI input, ensuring consistency and relevance.
- **Estimated Hours**: 6–8 hours
  - Data transformation logic: 3–4 hours (DS)
  - Validation: 2–3 hours (DS)
  - Testing: 1 hour (DS)

**Extract Key Technologies & Implementation Risks Using NLP (HM-33)**
- **Description**: Use NLP techniques to identify key technologies and potential risks from user-provided data.
- **Estimated Hours**: 10–14 hours
  - NLP model setup: 5–7 hours (DS)
  - Data extraction logic: 3–4 hours (DS)
  - Testing: 2–3 hours (DS)

**Update Design of Predefined Memo Format for Consistency (HM-34)**
- **Description**: Ensure the memo format is professional, consistent, and ready for presentation.
- **Estimated Hours**: 7–9 hours
  - Template design: 5–6 hours (UI/UX)
  - Integration: 1–2 hours (DS)
  - Testing: 1 hour (DS)

**Perform a Google Scholar Search Based on Identified Key Technologies (HM-35)**
- **Description**: Query Google Scholar for research trends related to identified key technologies.
- **Estimated Hours**: 6–10 hours
  - API query setup: 3–4 hours (DS)
  - Data retrieval: 2–3 hours (DS)
  - Testing: 1–3 hours (DS)

**Parse Google Scholar Results to Extract Relevant Research Trends (HM-36)**
- **Description**: Process and analyze Google Scholar results to identify relevant research trends.
- **Estimated Hours**: 8–12 hours
  - Data parsing logic: 4–5 hours (DS)
  - Trend analysis: 3–4 hours (DS)
  - Testing: 1–3 hours (DS)

**Generate a Visualization of Research Trends (HM-37)**
- **Description**: Create a visualization of research trends from parsed Google Scholar data.
- **Estimated Hours**: 6–8 hours
  - Visualization logic: 3–4 hours (DS)
  - Frontend integration: 2–3 hours (DS)
  - Testing: 1 hour (DS)

**Store Generated Memos in the Database (HM-38)**
- **Description**: Save generated memos to the database for future retrieval and updates.
- **Estimated Hours**: 4–6 hours
  - Database schema updates: 2–3 hours (DS)
  - Backend integration: 1–2 hours (DS)
  - Testing: 1 hour (DS)

---

### 3.5.2 **User Story: As an investor, I want to automatically generate an investment thesis so that I can present my investment focus professionally.**

**Acceptance Criteria:**

- The thesis includes the investor's goals, preferences, and investment history.
- The thesis follows a consistent predefined format.

**Tasks:**

**Use OpenAI to Generate Memo Text (HM-39)**
- **Description**: Leverage OpenAI to draft a structured investment thesis based on investor data.
- **Estimated Hours**: 8–12 hours
  - API integration: 4–5 hours (DS)
  - Formatting logic: 3–4 hours (DS)
  - Testing: 1–3 hours (DS)

**Create Design of Predefined Thesis Format for Consistency (HM-XX)**
- **Description**: Ensure the memo format is professional, consistent, and ready for presentation.
- **Estimated Hours**: 10–11 hours
  - Template design: 8 hours (UI/UX)
  - Integration: 1–2 hours (DS)
  - Testing: 1 hour (DS)

**Store Generated Investment Thesis in the Database (HM-40)**
- **Description**: Save generated investment theses to the database for future reference.
- **Estimated Hours**: 4–6 hours
  - Database schema updates: 2–3 hours (DS)
  - Backend integration: 1–2 hours (DS)
  - Testing: 1 hour (DS)

---
## 3.6 **Epic: Messaging**

### 3.6.1 **User Story: As a founder, I want to message investors so that I can clarify questions before connecting.**

**Acceptance Criteria:**

- Real-time messaging functionality with WebSocket.
- Notifications for unread messages displayed in the dashboard.
- Conversations stored for reference.

**Tasks:**

**Implement WebSocket-Based Real-Time Messaging (HM-44)**
- **Description**: Develop real-time messaging capabilities using WebSocket for instant communication between users.
- **Estimated Hours**: 16–20 hours
  - WebSocket setup and server integration: 6–8 hours (BackEnd)
  - Figma designs: 4 hours (UI/UX)
  - Frontend real-time messaging integration: 4–6 hours (FrontEnd)
  - Testing: 2 hours  (BackEnd)

**Set Up Notification System for Unread Messages (HM-45)**
- **Description**: Implement a notification system to alert users of unread messages, integrated with the dashboard.
- **Estimated Hours**: 8–11 hours
  - Backend logic for tracking unread messages: 3–4 hours (BackEnd)
  - Frontend UI setup for displaying notifications: 4–5 hours (FrontEnd)
  - Testing: 1–2 hours (BackEnd)

---

### 3.6.2 **User Story: As an investor, I want to schedule meetings with founders and other investors so that I can evaluate opportunities efficiently.**

**Acceptance Criteria:**

- Scheduling UI for meeting coordination.
- Automated calendar invites sent to participants.
- Integrated Google Calendar for meeting management.

**Tasks:**

**Integrate Google Calendar API (HM-47)**
- **Description**: Connect the system to Google Calendar for scheduling and syncing meetings.
- **Estimated Hours**: 10–14 hours
  - API integration: 5–7 hours (BackEnd)
  - Authentication and permissions setup: 3–4 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

**Build Scheduling UI (HM-48)**
- **Description**: Design and implement a user interface for selecting meeting time slots and confirming availability.
- **Estimated Hours**: 12–16 hours
  - UI design in Figma: 3-4 hours (UI/UX)
  - Frontend implementation: 3-4 hours  (FrontEnd)
  - Backend integration for calendar data: 4–5 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

**Implement Automated Calendar Invites (HM-49)**
- **Description**: Automatically send calendar invites to participants based on confirmed meeting times.
- **Estimated Hours**: 6–8 hours
  - Backend logic for sending invites: 3–4 hours (BackEnd)
  - Email/calendar service integration: 2–3 hours (BackEnd)
  - Testing: 1 hour (BackEnd)

---

## 3.7 **Epic: Dashboard**

### 3.7.1 **User Story: As a user, I want a dashboard that tracks my progress so that I can manage my investor/startup connections efficiently.**

**Acceptance Criteria:**

- The dashboard displays user KPIs (e.g., number of matches, in-progress connections).
- Profile details and progress indicators are visible.
- Users can access notifications directly from the dashboard.

**Tasks:**

**Design Dashboard Wireframes (HM-53)**
- **Description**: Create figma designs to visualize dashboard components, layout, and user interaction points.
- **Estimated Hours**: 12–16 hours
  - Research and design: 8–10 hours (UI/UX)
  - Feedback and revisions: 4–6 hours (UI/UX)

**Implement Dashboard Components (HM-54)**
- **Description**: Build frontend components for the dashboard, including KPIs, notifications, and profile progress.
- **Estimated Hours**: 12–16 hours
  - Frontend implementation: 8–10 hours (FrontEnd)
  - Integration with backend APIs: 3–4 hours (FrontEnd)
  - Testing: 1–2 hours (FrontEnd)

**Develop API for Retrieving KPIs and User Profile Info (HM-55)**
- **Description**: Create a backend API to fetch KPIs and user profile information for display in the dashboard.
- **Estimated Hours**: 10–14 hours
  - API design and setup: 5–6 hours (BackEnd)
  - Data retrieval logic: 3–5 hours (BackEnd)
  - Testing: 2–3 hours (BackEnd)

---

### 3.7.2 **User Story: As a user, I want automated notifications so that I don’t miss critical updates.**

**Acceptance Criteria:**

- Email notifications are sent for key actions (e.g., new matches, messages).
- Notifications are displayed on the dashboard.
- Notification logic supports various triggers and events.

**Tasks:**

**Implement Notification Logic (HM-56)**
- **Description**: Develop logic to trigger notifications based on user actions and system events.
- **Estimated Hours**: 8–12 hours
  - Backend logic setup: 4–6 hours (BackEnd)
  - Event handling implementation: 3–4 hours (BackEnd)
  - Testing: 1–2 hours (BackEnd)

**Display Notifications in the Dashboard (HM-57)**
- **Description**: Add a frontend UI element to display notifications on the dashboard.
- **Estimated Hours**: 10–15 hours
  - UI design in Figma: 4–6 hours (UI/UX)
  - Frontend implementation: 3-5 hours (FrontEnd)
  - Backend integration: 2–3 hours (BackEnd)
  - Testing: 1 hour (BackEnd)

**Send Automated Email Updates (HM-58)**
- **Description**: Enable email notifications for critical updates, using a transactional email service.
- **Estimated Hours**: 8–12 hours
  - Email template design: 3–4 hours (UI/UX)
  - Integration with email service (e.g., SendGrid, AWS SES): 4–6 hours (BackEnd)
  - Testing: 1–2 hours (BackEnd)
<div style="page-break-after: always;"></div>
# 4 Service Costs and Timeline

The estimated hours required to complete the project are rolled up into a low and high end estimate. A contingency of 20% of the high-end of the estimate is added to the total value. The project cost is converted from EUR (€) to CAD ($) using a currency conversion rate of ±1.505.

For completeness of the estimate, the hours of a front-end developer are included in the estimate, with an assumed hourly rate of €30/hour. Huddly AI has indicated a front-end developer will be provided for the duration of the project. All costs for infrastructure and cloud resources will be borne by client. Monthly cost is estimate to be ±$250/month.

For a fixed cost contract, the project will use the high end estimate: **$45,000 CAD**.

![[Pasted image 20250201003041.png]]

A summary of the hours for each component of the project is provide for convenience below.
![[Pasted image 20250201001619.png]]

To account for resource balancing and schedule slippage, an additional 4 weeks of non-working time may be used between completion steps. The total working time of the project is estimated to take between 8-14 weeks + 4 weeks slippage = 12-18 weeks total.

# 5 Payment Terms

- Initial Payment: 50% ($22,500 CAD) upon project commencement 
- Milestone Payment: 25% ($11,250 CAD) at 75% completion milestone 
- Final Payment: 25% ($11,250 CAD) upon final delivery and acceptance 
- Payment Terms: Net 15 from invoice date