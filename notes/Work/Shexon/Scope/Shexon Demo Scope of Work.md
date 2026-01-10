
## 1. Overview

The Shexon Demo serves as a pre-sales tool to showcase Shexon's capabilities to universities. The primary focus is to highlight career support for students, demonstrating AI-powered career guidance, resume analysis, job matching, and mentorship functionalities. The objective is to illustrate how Shexon can empower students and seamlessly integrate with university career services.

## 2. Features & Use Cases

### 2.1 AI-Powered Career Guidance Chatbot

- Provides real-time career guidance based on university career resources.
- Supports international students with visa and sponsorship-related queries.
- Automates meeting scheduling with career advisors when personalized support is needed.

### 2.2 Document Upload & Processing

- Allows students to upload resumes in **PDF, DOCX, or TXT format**.
- Enables students to **upload a job description** for comparison with their resume.

### 2.3 Resume & Application Review

- AI provides structured feedback on formatting, clarity, and missing skills.
- Identifies skill gaps and suggests relevant certifications or training programs.
- Compares an uploaded resume against an uploaded job description to highlight gaps.

### 2.4 Job Interview Preparation

- AI generates mock interview questions based on target job roles.
- Provides real-time coaching and feedback to improve student responses.

### 2.5 Mentorship & Networking Matching

- Matches students with mocked mentors based on career interests.
- Displays a list of fictional career networking events for exploration.

### 2.6 Job Matching (Mocked)

- Recommends fake job postings to students based on resume content.
- Displays job descriptions, company details, and visa sponsorship status.

## 3. User Stories & Definition of Done

This section outlines the key functionalities of the demo, structured as user stories with clear Definition of Done (DoD) criteria.

### 3.1 UI Profile Card & Session-Based Storage (Foundation Features)

#### **1. UI Profile Card**

**User Story:** As a student, I want my experience to be personalized to my context and to be able to quickly update or correct that context to ensure I receive relevant and accurate responses from the chatbot.

✅ **Definition of Done:**

- Displays **parsed resume details** (skills, experience, education).
- Shows **job preferences, visa status, and career goals**.
- Automatically **updates as the chatbot gathers new insights**.
- Allows **manual updates** to key profile information (e.g., preferred job roles, location preferences, visa status) for better personalization.

#### 2. Session-Based Storage (No Login Required)

**User Story:** As a student, I want my demo experience to persist during my session.

✅ **Definition of Done:**

- User data (resume, chatbot responses, job matches) persist for the session.
- Closing the browser resets the session.
- No database storage of user data (demo-only).

### 3.2 Document Upload & Processing

#### 3. Upload Resume & Job Description

**User Story:** As a student, I want to upload my resume and a job description so I can compare them.

✅ **Definition of Done:**

- Users can upload a **PDF, DOCX, or TXT file** for resume and job description.
- System extracts skills, experience, and education using NLP.
- Parsed resume and job description data are stored in session storage.

### 3.3 AI Chatbot Career Guidance & Visa Support

#### 4. Career Q&A Chatbot

**User Story:** As a student, I want to ask career-related questions and receive AI-generated responses.

✅ **Definition of Done:**

- AI chatbot responds to common career questions.
- The chatbot references sources (mocked knowledge base).
- UI displays suggested prompts (e.g., “How do I get an internship?”).
- Users can type their own custom questions.

#### 5. Visa & Sponsorship Guidance

**User Story:** As an international student, I want to understand visa and work sponsorship options.

✅ **Definition of Done:**

- The chatbot answers visa-related questions.
- Users can select country-specific prompts about work visas.
- The chatbot provides job search tips based on visa status.
- UI displays country-specific visa rules (mocked data).

#### 6. Meeting Scheduler for Career Services (Mocked)

**User Story:** As a student, I want to book a meeting with a career advisor if I need personalized support.

✅ **Definition of Done:**

- Chatbot recognizes when a question needs human support.
- Presents 3 available time slots (mocked).
- User selects a slot, and the system confirms the appointment.
- Chatbot summarizes the conversation for the career advisor.

### 3.4 Resume & Skill Gap Analysis

#### 7. AI Resume Feedback & Skill Gap Detection

**User Story:** As a student, I want AI feedback on my resume compared to a job description so I can improve my chances of getting hired.

✅ **Definition of Done:**

- AI evaluates resume for missing skills, weak formatting, and unclear descriptions.
- AI compares resume against job descriptions and highlights skill gaps.
- Feedback is displayed in a structured UI.

#### 8. AI-Suggested Certifications & Training

**User Story:** As a student, I want suggestions for certifications or training programs.

✅ **Definition of Done:**

- If skills are missing, AI suggests relevant certifications (mocked).
- UI displays structured recommendations.
- Users can click to learn more.

### 3.5 Job Interview Preparation

#### 9. AI-Generated Mock Interview Questions

**User Story:** As a student, I want to practice interview questions based on my target job.

✅ **Definition of Done:**

- AI generates job-specific interview questions.
- Questions dynamically change based on role.
- UI allows students to view, skip, or answer questions.

#### 10. AI Feedback on Interview Responses

**User Story:** As a student, I want AI feedback on my interview responses.

✅ **Definition of Done:**

- AI evaluates responses against best practices.
- Feedback includes strengths & areas to improve.
- Users can retry questions with improved responses.

### 3.6 Job Matching & Mentorship (Mocked Data)

#### 11. AI Job Matching (Mocked Listings)

**User Story:** As a student, I want to see job listings that match my skills.

✅ **Definition of Done:**

- AI matches students to fake job postings.
- UI displays job cards with company & visa sponsorship info.
- Users can click a job to see details.

#### 12. Mentor Matching (Mocked)

**User Story:** As a student, I want to be matched with a mentor based on my career goals.

✅ **Definition of Done:**

- Students select career interests.
- System suggests a fake mentor.
- Users see mentor bio & experience.

#### **13. Discover Networking Events (Mocked)**

**User Story:** As a student, I want to receive direct recommendations for networking events, training sessions, or other programs hosted by the university or external organizations that can help me progress in my job search.

✅ **Definition of Done:**

- The system **displays event recommendations** as **cards** tailored to the student’s profile and career goals.
- Events include **networking sessions, training programs, and workshops** (mocked data).
- Clicking an event **shows details** such as time, location, and how to participate.

