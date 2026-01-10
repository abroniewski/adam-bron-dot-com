UI

- login page
- chat page
	- chat window
		- suggested clickable prompts to continue convo
	- profile card
		- shows key data/info about the user
			- University & Degree Program
			- Graduation Year
			- **Student Type** (International/Domestic)
			- **Target Job Roles / Career Goals**
			- **Preferred Industries** _(e.g., Data Science, Finance, Healthcare)_
			- **Location Preferences** _(City, Country, Remote/Hybrid/In-person)_
			- **Willingness to Relocate** _(Yes/No)_
			- **Visa Sponsorship Requirement** _(Yes/No, Country-Specific Rules)_  
			    _(Critical for international students—filters jobs accordingly)_
			- **Key Skills & Technologies** _(e.g., Python, SQL, Machine Learning)_
			- **Work Experience** _(Current & past job roles)_
			- **Certifications & Training** _(e.g., AWS Certified, PMP, Google Analytics)_
			- **Education History** _(Degree, School, Graduation Year)_
			- **Soft Skills & Competencies** _(Extracted from resume or chatbot Q&A)_
			- **Missing Skills for Target Job Roles** _(Based on comparison with job descriptions)_
			- **Recommended Certifications or Workshops** _(Auto-generated)_
			- **Gaps in Experience Level** _(e.g., Missing internships for entry-level jobs)_
			- **Missing Skills for Target Job Roles** _(Based on comparison with job descriptions)_
			- **Recommended Certifications or Workshops** _(Auto-generated)_
			- **Gaps in Experience Level** _(e.g., Missing internships for entry-level jobs)_
			- **Interested in a Mentor?** _(Yes/No)_
			- **Desired Mentor Background** _(Industry, Experience Level)_
			- **Preferred Networking Events** _(Tech meetups, University career fairs, etc.)_
			- **Past Career Services Meetings** _(Booked, Attended, Feedback Summary)_
			- **Workshop Attendance & Engagement** _(Tracks participation in training sessions)_
			- **Most Frequented Career Questions** _(Identifies user patterns for better proactive support)_
			- **Visa Sponsorship Need?** _(Yes/No)_
			- **Eligible Visa Types** _(Extracted from chatbot Q&A or manual selection)_
			- **Work Authorization Status** _(E.g., "OPT for US Students", "Work Permit Pending")_
			- **Step-by-Step Visa Assistance Progress** _(Tracks what part of the visa process they’re in)_


- fix data flow with global states
	- add edit context feature
	- card on right side. When the card is expanded, it shows relevant job opportunities the user can apply for. 
		1. Job opportunities will only be displayed if the job_seeker_profiles is populated with preferred_industries, location_preferences, and needs_visa_sponsorship
			1. If the minimum information is not yet gathered in the user profile, a prompt suggestion button will be displayed that says "Find relevant jobs". When the user clicks this button, it will send text into the main chatbox that says "Help me find my ideal job. Let's build my basic profile with my industry and locations preferences and visa sponsorship needs". 
		2. 3 job matches are shown as cards with basic information. There's a "Learn More" button on each card the user can click. When they click, a job posting card appears below the chat with all of the role details.
	- create an LLM bot that generates 3 job postings based on data from the user
		1. LLM is triggered as soon as the there is data populated in all 3 fields of the job_seeker_profiles for: preferred_industries, location_preferences, and needs_visa_sponsorship. When these 3 fields have values the LLM also runs if there is a change or update to any of these fields: preferred_industries, location_preferences, and needs_visa_sponsorship, target_job_roles, key_skills, soft_skills, certifications
		2. include all fields from the job_seeker_profiles as context into the prompt.
		3. Creates 3 jobs that cover a range of opportunities where there is a good match with information in the profile that exists, and a range of options for missing profile information. So the jobs are as different as they can possibly be, while still matching on all of the available profile info.
		4. LLM response is returned in a structured JSON object
			{
			  "job_id": "12345",
			  "title": "Software Engineer",
			  "company": {
				"name": "TechCorp",
				"industry": "Technology",
				"size": "500-1000 employees",
				"location": {
				  "city": "San Francisco",
				  "state": "CA",
				  "country": "USA",
				  "remote": true
				}
			  },
			  "employment_type": "Full-time",
			  "contract_type": "Permanent",
			  "job_description": "We are looking for a Software Engineer to join our team...",
			  "responsibilities": [
				"Develop and maintain scalable applications",
				"Collaborate with cross-functional teams",
				"Write clean and efficient code"
			  ],
			  "requirements": {
				"experience_level": "Mid-Level",
				"years_of_experience": "3+",
				"education": "Bachelor’s Degree in Computer Science or related field",
				"skills": [
				  "Python",
				  "Django",
				  "REST APIs",
				  "AWS"
				],
				"certifications": [
				  "AWS Certified Developer",
				  "Scrum Master"
				]
			  },
			  "salary": {
				"min": 80000,
				"max": 100000,
				"currency": "USD",
				"compensation_type": "Annual"
			  },
			  "benefits": [
				"Health Insurance",
				"401(k) Matching",
				"Remote Work Options",
				"Flexible Hours"
			  ],
			  "work_schedule": {
				"hours_per_week": 40,
				"schedule_type": "Flexible"
			  },
			  "application_details": {
				"apply_url": "https://techcorp.com/jobs/12345",
				"contact_email": "hr@techcorp.com",
				"deadline": "2025-04-01"
			  },
			  "recruitment_process": [
				"Phone Screen",
				"Technical Interview",
				"Final Interview with Hiring Manager"
			  ],
			  "keywords": [
				"Software Engineer",
				"Backend Development",
				"Python",
				"Remote Work"
			  ],
			  "posted_date": "2025-03-14"
			}
		5. LLM response is stored in a table in the database called job_board
		6. a table called user_job_matches is updated with the values of the users uuid  and the job id.
	- improve profile card creation LLM