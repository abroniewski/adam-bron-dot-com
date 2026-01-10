civil engineering
oil and gas, platforms then building green
munich masters, indiana(2015) and TU/Delft PhD 
improving reliability of container goods, 18 person project moving to and from port.
started in DS with masters

**------------**

**Agenda**

1.  Introduce myself and the work I am doing for my master’s thesis with TU/e
2.  Gain insight into the work you do
3.  Discuss current and future opportunities to improve client performance (potential questions below). These opportunities will be evaluated as thesis projects.

**Potential Questions**

-   Tell me about what your team does (digital services factory)
	- Aim is to create digital services. Some based on data that can provide insights to users. Work with Vanderlande experts stationed at airports and on location. Helping with and streamlingin root cause analysis
		- operational improvements - help operators take immediate actions. e.g. bag running late that can miss flight. 
		- Continuous improvement (focus) - process engineers support to help stop or avoid the problem from occuring in the future. Aiming at continuous.
	- DSF - only DS on insights team
-   What project or initiative are you currently working on?
	- When joined, started by building proactive notifications to notify process engineers
	- Use cases - recirculations. Loop around the system. Looking for bag doing unnecessary loops, losing time. COuld be missed bag that misses flight. Ultimately can hamper airports KPIs.
		- Istanbul 2 KPIs, in-system time efficiency and number of missed bags in system
			- in-system time efficiency - bag enters through check-in, once in, receives timestamp for registration and de-registration. Only looking at moving time, excluding storage area time and manual screening process.
				- dynamic KPI for different tiers of bags?
			- These are the 2 main KPIs. Report to Istanbul airport authority. There are full time employees working at airport (vanderlande). SCADA guys are operational, process engineers are a level above this.
				- If there is an incident (e.g. conveyor belt broken). operations logs the incident to excel sheet. Process engineers then complete root cause analysis.
				- MyVanderlande initiative - portal that has SAP type functionality. Proactive notifications can be used etc. 
				- Mining of the excel sheet is possible, has entry since 2020. Everything is logged here, origin of incident, how it was solved etc.
				- IST is new airport and is at caapcity.
					- design capacity - currently operating at 80%, but yet to see how it behaves at full capacity.
						- ACTION ITEM: get vikipedia page with info. 1 way to look at is the number of bags moving through the system
				- july and august have more number of re-circulation. There are seasonal peak loads.
				- main reason for recirculation is when bag misses the divert. Because of problems downstream, things not open, busy area.
					- mechanics are difficult, because when missing divert, it is assigned a new diversion that it will try. If it misses the redundent diversion, it will then come back around
					- forced logic used. If more than 2 recirculations, manual bag picked by operator. OR eject mechanism where a line is open where bag passes through transport line that is only used during forced eject process.
			- number of missed bags - bags that miss a flight. how manmy bags per 1000 have missed their flights. Good airport has less than 5/1000
		- recirculation can be a cause that lowers this
		- Built proof of concept for Istanbul which has state of art. Looking to validate to other airports to see how it can work
	- Also working at Schipol airport. Looking for problematic segments where there are blogged bags/ congestion at some part of the system.
	- Innovate activity - 3 month ideas/projects. Internal transfer bags, that come from different terminal. Heathrow is good use case as they have a good process outlined. Lots of inefficicencies here
		- first part compelted 4 months ago, starting to build prediction model using Baysien Network anaylsis modelling to serve low-level operators so that they can take immediate action on bags.
-   What is your role specifically? What do you do on a day-to-day basis?
-   How do our clients make money? What costs them money?
	- Airports have difference functions, passengers and cargo. 
	- In India, everything is owned by company and private companies will operate
	- Airports have fixed capacity in terms of parking spots. So its essential to have BHS to make sure that when a passenger checks in, and has 45min to get to airplane, the bags need to make it to the airplane. 
	- If not automated, things would be left to operators often, which can lead to lots of problems, missed bags, slow downs. Having systems help to serve overall business goal 
	- Penalties for missed bags? Not sure how it works.
-   Do you have insight into how the client is measuring our performance? their performance?
- For Root Cause Analysis
	- Vanderlande is not providing a sevice at the moment, we are in the discovery phase to see if there is value here. Currently in the process of validating the existence of process engineers that provide insights and notifications
	- Aim is to build service for next year to provide insights to process engineers.
-   Is there any performance indicator that they should be focusing on more? less?
	- most airports have a threshold, if we are within this threshold... 20min threshold for in-system time. How was this threshold set? Could be interesting to revisit the threshold.
-   What types of problems are our clients having?
	- process engineers are the source that provide us with the problems they are having. We work on their pain points.
		- recirculation
		- missed de-registration event (lost in system)
		- falling bags (off of tub)
		- heathrow and schipol have older systems that may have more problems, but just started.
-   What issues have our clients asked us to solve?
-   What issues do our clients have that they don't know we can help with?
-   What risks exist in the systems and processes we deliver? Which ones seem to be the least controlled?
	- mostly we are working in a reactive way, when problem arises we fix it. Looking at things proactively would be a good place to look, to remove the issues that we have.
	- ACTION: roadmap?
	- Prescriptive guidance for operators and engineers, what actions could they take if we see the problem. Process engineers have limited time to investigate. Would be best to help provide a direction to sovle root cause.
-   Is there anyone in your team, department or elsewhere in the company you think I should speak with?
	- Ruut Clemantine (UX designer) - responsible for UX research
	- Liam Mc.... - very rich Vanderlande experience
	- If possible speak to some users or process engineers. Contacts for IST let him.
- 