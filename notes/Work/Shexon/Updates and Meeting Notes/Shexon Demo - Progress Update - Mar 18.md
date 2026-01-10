Time Completed: 36hrs over 6 days
Time Remaining: 52hrs -> 9 days of effort
@ 2 days/ week (with vacation April 10 - April 20) -> Complete by end of April.

![[Pasted image 20250318140915.png]]

## 1. Overview

The Shexon Demo serves as a pre-sales tool to showcase Shexon's capabilities to universities. The primary focus is to highlight career support for students, demonstrating AI-powered career guidance, resume analysis, job matching, and mentorship functionalities. The objective is to illustrate how Shexon can empower students and seamlessly integrate with university career services.

## 2. Features & Use Cases

### 2.1 AI-Powered Career Guidance Chatbot (50% complete)

- Provides real-time career guidance based on university career resources.
- Supports international students with visa and sponsorship-related queries.
- Automates meeting scheduling with career advisors when personalized support is needed.

### 2.2 Document Upload & Processing (60% complete)

- Allows students to upload resumes in **PDF, DOCX, or TXT format**.
- Enables students to **upload a job description** for comparison with their resume.

### 2.3 Resume & Application Review (60% complete)

- AI provides structured feedback on formatting, clarity, and missing skills.
- Identifies skill gaps and suggests relevant certifications or training programs.
- Compares an uploaded resume against an uploaded job description to highlight gaps.

### 2.4 Job Interview Preparation (20% complete)

- AI generates mock interview questions based on target job roles.
- Provides real-time coaching and feedback to improve student responses.

### 2.5 Mentorship & Networking Matching (mock data) (90% complete)

- Matches students with mocked mentors based on career interests.
- Displays a list of fictional career networking events for exploration.


### 2.6 Job Matching (mock data) (90% complete)

- Recommends fake job postings to students based on resume content.
- Displays job descriptions, company details, and visa sponsorship status.

## 3. User Stories & Definition of Done

This section outlines the key functionalities of the demo, structured as user stories with clear Definition of Done (DoD) criteria.

### 3.1 UI Profile Card & Session-Based Storage (Foundation Features)

#### **1. UI Profile Card** (2hrs)

**User Story:** As a student, I want my experience to be personalized to my context and to be able to quickly update or correct that context to ensure I receive relevant and accurate responses from the chatbot.

✅ **Definition of Done:**

- [COMPLETE] Displays **parsed resume details** (skills, experience, education).
- [COMPLETE] Shows **job preferences, visa status, and career goals**.
- [COMPLETE] Automatically **updates as the chatbot gathers new insights**.
- [TODO] Allows **manual updates** to key profile information (e.g., preferred job roles, location preferences, visa status) for better personalisation. -> need to add edit feature to each section. Need to make it possible to edit, not just fully replace. Needs to handle a list or single entry.

#### 2. Session-Based Storage (Complete)

**User Story:** As a student, I want my demo experience to persist during my session.

✅ **Definition of Done:**

- [COMPLETE] User data (resume, chatbot responses, job matches) persist for the session.
- [N/A] Closing the browser resets the session -> created login for users. data persists sessions to session. Added data-reset function.
- [N/A] No database storage of user data (demo-only). -> database has been setup

### 3.2 Document Upload & Processing

#### 3. Upload Resume & Job Description (8hrs)

**User Story:** As a student, I want to upload my resume and a job description so I can compare them.

✅ **Definition of Done:**

- [TODO] Users can upload a **PDF, DOCX, or TXT file** for resume and job description.
- [COMPLETE] System extracts skills, experience, and education using NLP.
	- currently extracted from copy/paste in chat box
- [COMPLETE] Parsed resume and job description data are stored in session storage.

### 3.3 AI Chatbot Career Guidance & Visa Support

#### 4. Career Q&A Chatbot (Complete)

**User Story:** As a student, I want to ask career-related questions and receive AI-generated responses.

✅ **Definition of Done:**

- [COMPLETE] AI chatbot responds to common career questions.
- [COMPLETE] The chatbot references sources (mocked knowledge base).
- [COMPLETE] UI displays suggested prompts (e.g., “How do I get an internship?”).
- [COMPLETE] Users can type their own custom questions.

#### 5. Visa & Sponsorship Guidance (4hrs)

**User Story:** As an international student, I want to understand visa and work sponsorship options.

✅ **Definition of Done:**

- [COMPLETE] The chatbot answers visa-related questions.
- [TODO] Users can select country-specific prompts about work visas.
- [TODO] The chatbot provides job search tips based on visa status.
	- need to test and dig into knowledge base + prompting
- ~~[TODO] UI displays country-specific visa rules (mocked data).~~
	- no UI. Suggest removing this.

#### 6. Meeting Scheduler for Career Services (8hrs)

**User Story:** As a student, I want to book a meeting with a career advisor if I need personalized support.

✅ **Definition of Done:**

- [TODO] Chatbot recognizes when a question needs human support.
- [TODO] Presents 3 available time slots (mocked).
- [TODO] User selects a slot, and the system confirms the appointment.
- [TODO] Chatbot summarizes the conversation for the career advisor.

### 3.4 Resume & Skill Gap Analysis

#### 7. AI Resume Feedback & Skill Gap Detection (8hrs)

**User Story:** As a student, I want AI feedback on my resume compared to a job description so I can improve my chances of getting hired.

✅ **Definition of Done:**

- [COMPLETE] AI evaluates resume for missing skills, weak formatting, and unclear descriptions.
- [COMPLETE] AI compares resume against job descriptions and highlights skill gaps.
- [TODO] Feedback is displayed in a structured UI.
	- Need to add UI for Resume review against a job posting

#### 8. AI-Suggested Certifications & Training (2hrs)

**User Story:** As a student, I want suggestions for certifications or training programs.

✅ **Definition of Done:**

- [TODO] If skills are missing, AI suggests relevant certifications (mocked).
	- Included in UI for resume review
- [TODO] UI displays structured recommendations.
	- will have suggested certifications appear in right hand navigation (same as jobs, mentors and events)
- [TODO] Users can click to learn more.
	- will make UI cards same as jobs, mentors and events

### 3.5 Job Interview Preparation

#### 9. AI-Generated Mock Interview Questions (6hrs)

**User Story:** As a student, I want to practice interview questions based on my target job.

✅ **Definition of Done:**

- [COMPLETE] AI generates job-specific interview questions.
- [COMPLETE] Questions dynamically change based on role.
- [TODO] UI allows students to view, skip, or answer questions.
	- Need to create Interview prep UI

#### 10. AI Feedback on Interview Responses (2hrs)

**User Story:** As a student, I want AI feedback on my interview responses.

✅ **Definition of Done:**

- [TODO] AI evaluates responses against best practices.
- [TODO] Feedback includes strengths & areas to improve.
- [TODO] Users can retry questions with improved responses.

### 3.6 Job Matching & Mentorship (Mocked Data)

#### 11. AI Job Matching (mocked data) (4hrs)

**User Story:** As a student, I want to see job listings that match my skills.

✅ **Definition of Done:**

- [TODO] AI matches students to fake job postings.
	- Create ±30 mock job postings with keywords, search against this table for a match based on student profile, show best matches -> currently jobs are static and not specific to the students profile.
- [COMPLETE] UI displays job cards with company & visa sponsorship info.
- [COMPLETE] Users can click a job to see details.

#### 12. Mentor Matching (mocked data) (4hrs)

**User Story:** As a student, I want to be matched with a mentor based on my career goals.

✅ **Definition of Done:**

- [COMPLETE] Students select career interests.
- [COMPLETE] System suggests a fake mentor.
- [COMPLETE] Users see mentor bio & experience.

#### **13. Discover Networking Events (Mocked)** (4hrs)

**User Story:** As a student, I want to receive direct recommendations for networking events, training sessions, or other programs hosted by the university or external organizations that can help me progress in my job search.

✅ **Definition of Done:**

- [COMPLETE] The system **displays event recommendations** as **cards** 
- [COMPLETE] Events include **networking sessions, training programs, and workshops** (mocked data).
- [TODO] Events are tailored to the student’s profile and career goals.
	- Make a list of 6-8 events with some keywords. Search for events based on student profile/requests against the keywords to display. Currently showing 3 static mock events.
- [COMPLETE] Clicking an event **shows details** such as time, location, and how to participate.

