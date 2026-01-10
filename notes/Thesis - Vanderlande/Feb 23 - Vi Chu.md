boyfriend with ASML
going to Taiwan for vacation
BSc and MSc in TU/e, liked Dirk's courses


**------------**

**Agenda**

1.  Introduce myself and the work I am doing for my master’s thesis with TU/e
2.  Gain insight into the work you do
3.  Discuss current and future opportunities to improve client performance (potential questions below). These opportunities will be evaluated as thesis projects.

**Potential Questions**

-   Tell me about what your team does
	- started as give insight via dashboard, want to give more value to customers. Want to be proacetive and predictive in system. To make that happen, the data science builds products for the customer. Understand where data is coming from, cleaned for delivery and then build models and deliver back to clients. They are wanting to sell their value to the rest of the company and then to clients
-   What project or initiative are you currently working on?
	- two streams: proactive and predictive maintenance. Works in predictive maintenance. Looks at driers, carriers, tracks. Where can we get value from system info/data (vibrations, currents), and can we predict where something well go wrong.
	- Currently looking at use cases.
	- Working at product called carrier health. Team is being ramped down though.
	- In the future, looking for use cases where they will have better connection with a use case owner that will be interested in the product.
		- cross sorter -> things moving diagonally
		- instead of tubs, they are carriers that are moving down tracks. Currently, some things will need maintenance. Because there are so many, there is not enough time to check all the carriers.
		- Solution we are looking at is to see if we can 24/7 check on carriers, and when there is planned maintenance, can point out which carriers need maintenance -> could reduce time required.
		- Cross sorter is constantly moving in a loop, so it is not possible to take a carrier out without impacting the whole system
		- Gathering data on the carriers to be able to proactively determine which carriers need to be maintained. Then analyzing the data to determine which carriers should be maintained.
		- Dos Maximo - Database for technicians to keep track of problems, issues, service departments to make tickets etc.
			- This might be a place to quantify issues and do some mining
			- Services can create maintenance tickets, when something breaks down it can get logged, probably somewhere else (SCADA)
			- ACTION: follow up with Dos Maximo person
		![[Pasted image 20230223173416.png]]
-   What is your role specifically? What do you do on a day-to-day basis?
	- Data Science part. Translated image information into wheel diameter. Look at the full pipeline from image to calculated diameter.
	- PAIN POINT: Management wanted to push into production, but it was not ready yet. There are 2 sites with this solution. LHR (2yrs) and Nike. Exists as proof of concept. Currently validating how well the product works.
	- Trying to finish it in a way that it can run without maintenance, and then it will be put on hold. It was paid for up to a point, but now the budget is gone. We want to have a collaboration, but want them to pay.
-   How do our clients make money? What costs them money?
	- For airports: Flying companies need to pay to use the services, looking to keep bagagge moving to flight on time, could be some fee assocaited with late bags 
	- Airports want to optimize system for their specific situation. 
	- Issue is that system does not need high throughput every day, but it needs to perform at a certain throughput for busy season.
		- potentially optimize for everyday use while still handling peak loads.
-   Do you have insight into how the client is measuring our performance? their performance?
	- Need to provide a minimum throughput, load, maximum number of delayed bags, in system time of a bag (e.g. not longer than 10min except when stored).
		- load: number of bags in total that can fit in the system
		- throughput: number of bags that can go in and out of the system
		- In system time: time within the system from point A to point B. If we can minimize time, we can free up time for other bugs
		- PRIMITIVE ALGORTHIM
-   Is there any performance indicator that they should be focusing on more? less?
-   What types of problems are our clients having?
	- integration engineers: on site installation. We don't deliver what we promise and then need to dive in to the process insights tool to understand why.
		- Can help them gain insight into complexe system with decisions happening at multiple levels that make it hard to see an overview.
		- TALK TO Integration engineer - Michiel Stoets
		- 
-   What issues have our clients asked us to solve?
	- Potential: finding missing bags, which parts of the systems. Root cause analysis in the system to complete permenant fixes.
-   What issues do our clients have that they don't know we can help with?
-   What risks exist in the systems and processes we deliver? Which ones seem to be the least controlled?
	- no specific examples. high level, the gap between data science people and the techniciancs. Sometimes things can be installed in a way that is unexpected causing data to be coming in. Don't assume the data we are getting is the way it should.
-   Is there anyone in your team, department or elsewhere in the company you think I should speak with?