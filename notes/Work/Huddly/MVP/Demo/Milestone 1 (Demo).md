This doc lays outlines the must have functionality I believe the client wants to see. The time estimates are PIDOOMA estimates for me to build this out with BaaS + cursor + existing frontend. I'm validating some of this with client tomorrow evening (Feb 4).

Questions for Brett
1. What is the goal of the demo?
	1. Identify what he needs to show and to whom.
	2. Review which features absolutely must be in the demo
		1. What needs to function?
		2. What can be faked?
2. Target date for working demo
3. For demo, is it a requirement to use existing front-end?
4. Is there any UI/UX design that needs to be done, or has everything already been completed with Jarret?
5. Is there a domain secured?
6. Can we move forward with T&M with Cap?
7. How will Jarret be integrated?
	1. MDI pays him?
	2. How do we manage issue or delays due to technical ability or availability?
8. Next steps immedietaly after call
9. Schedule follow up call

Meeting Notes - Feb 4 2025

# Elements

## 3.3 **Epic: User Authentication & Onboarding**

### 3.3.1 **User Story: As a user, I want to sign up using a chatbot so that I can get initial matches before fully registering.**

**Display Extracted Data for User Confirmation (HM-8)**
- **Description**: Build functionality to display parsed data from chatbot responses for user review + approve.
- **Estimated Hours**: 16 hours

**Parse LLM Responses and Store Structured Data in Database (HM-7)**
- **Description**: Process chatbot responses, parse data, and store structured information.
- **Estimated Hours**: 16 hours

**Integrate OpenAI API for User Input Processing (HM-6)**
- **Description**: Connect the chatbot to OpenAI's API for NLP-based data extraction and processing.
- **Estimated Hours**: 4 hours

**Develop Chatbot Interaction UI for Collecting User Goals (HM-5)**
- **Description**: Build a frontend chatbot UI for user interactions during onboarding.
- **Estimated Hours**: 16 hours

**Implement SSO Authentication (Google, LinkedIn, Discord) (HM-4)**
- **Description**: Enable single sign-on authentication for easy user login.
- **Estimated Hours**: 8 hours

## 3.4 **Epic: Founder-Investor & Investor-Investor Matching**

### 3.4.1 **User Story: As a founder, I want to find investors based on relevant criteria so that I can connect with the best fit.**

**Show Match Percentage & Key Investor Details (HM-25)**
- **Description**: Implement UI to display match percentages and investor details for the top 3 matches.
- **Estimated Hours**: 4 hours

**Track User Interactions (Accept/Reject History) (HM-22)**
- **Description**: Develop functionality to log user actions for accepting or rejecting matches.
- **Estimated Hours**: 4 hours

## 3.7 **Epic: Dashboard**

### 3.3.2 **User Story: As a user, I want to access my dashboard after signing up so that I can view my matches and progress.**

 **Implement API to Fetch and Display Matches and Profile Information (HM-10)**
- **Description**: Build backend API to fetch profile details and match data.
- **Estimated Hours**: 4 hours

**Develop Dashboard UI (HM-9)**
- **Description**: Identify what will need to be accessible in the dashboard. Design and create frontend components for displaying user profile, matches, and KPIs.
- **Estimated Hours**: 16 hours

**Implement Accept/Reject Buttons with Immediate Updates (HM-24)**
- **Description**: Add functionality for accepting or rejecting matches, updating the UI and backend. Function to read the user type to determine how to store information in database.
- **Estimated Hours**: 8 hours

**Send Investment Memo (HM-XX)**
- **Description**: Designing the process for sending the memo, confirmation messages, and UI for this process. Connected to user emails.
- **Estimated Hours**: 24 hours

**Send Investment Thesis (HM-XX)**
- **Description**: Designing the process for sending the memo, confirmation messages, and UI for this process. Connected to user emails, copy process from investment memos.
- **Estimated Hours**: 4 hours

## 3.5 **Epic: Auto-Generated Docs**

### 3.5.1 **User Story: As a founder, I want to automatically generate an investment memo so that I can present my startup professionally to investors.**

**Document upload functionality (HM-XX)**
- **Description**: User can upload PDF. Text is scraped, parsed and stored appropriately in DB
- **Estimated Hours**: 32 hours

**Retrieve Startup Details from the Database (HM-30)**
- **Description**: Fetch startup details from the database, including data from uploaded documents and chatbot input.
- **Estimated Hours**: 4 hours

**Use OpenAI API to Generate Structured Memo Text (HM-31)**
- **Description**: Use OpenAI API to combine fetched data and generate text to be used for the different section of investment memo.
- **Estimated Hours**: 16 hours

**Extract Key Technologies & Implementation Risks Using NLP (HM-33)**
- **Description**: Use NLP techniques to identify key technologies and potential risks from user-provided data. Prompt engineering to get keywords out.
- **Estimated Hours**: 8 hours

**Update Design of Predefined Memo Format for Consistency (HM-34)**
- **Description**: Design the memo headings and sections in CSS with ability to input generated text blocks. 
- **Estimated Hours**: 16 hours

**Perform a Google Scholar Search Based on Identified Key Technologies (HM-35)**
- **Description**: Python script to connect to Google Scholar API, search for keywords, retrieve stats on those keywords (publication dates).
- **Estimated Hours**: 24 hours

**Parse Google Scholar Results to Extract Relevant Research Trends (HM-36)**
- **Description**: Process and analyze Google Scholar results to identify relevant research trends. Aggregate data.
- **Estimated Hours**: 8 hours

**Generate a Visualization of Research Trends (HM-37)**
- **Description**: Create a visualization of research trends from parsed Google Scholar data. Each keyword is its one line on a line chart with date on the bottom and number of cummulative publications on y axis.
- **Estimated Hours**: 4 hours

**Store Generated Memos in the Database (HM-38)**
- **Description**: Save generated memos to the database for future retrieval and updates.
- **Estimated Hours**: 4 hours

### 3.5.2 **User Story: As an investor, I want to automatically generate an investment thesis so that I can present my investment focus professionally.**

**Create Design of Predefined Thesis Format for Consistency (HM-XX)**
- **Description**: Ensure the memo format is professional, consistent, and ready for presentation.
- **Estimated Hours**: 12 hours

**Use OpenAI to Generate Memo Text (HM-39)**
- **Description**: Leverage OpenAI to draft a structured investment thesis based on investor data.
- **Estimated Hours**: 12 hours

**Store Generated Investment Thesis in the Database (HM-40)**
- **Description**: Save generated investment theses to the database for future reference.
- **Estimated Hours**: 4 hours