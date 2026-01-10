Recording from Feb 21 meeting on warehouses with KG:

# What has been done?

-   Several masters and 2 PhDs have worked on the project
-   Performance spectrum mining has been implemented using ProM
-   Integration engineers were involved in the beginning
-   Process engineers keep things running once set up. Disco was used in the past for parcels, but it was too complicated and didn't work for airports or warehouses.
-   With more complexity, the need for knowledge graphs became more apparent, e.g., pallets with multiple items split and combined
-   Object-centric process mining shifted from 2D to knowledge graphs. The project for warehouses has been put on pause, but they're looking to reuse the same concepts developed for airports.
-   More likely to be implemented in airports with a proactive approach and competition. Warehouses usually build their own systems, and Vanderlande might be brought in for equipment only.

# Process Insights

-   Layout is rendered from an SVG file with data overlaid on top.
-   It's not possible for a bag to jump from one location to another as the PLC assigns a new number to buckets that are in unexpected locations.
-   Some domain knowledge fills gaps if there are bags skipping from a "broken" track to somewhere else.
-   Teams Group -> Files -> Operation Manual shows how to use the tool.
-   Teams Group -> Process Insights Airport Solutions -> Posts (17 January has overall training).
-   ISCID is an area zone equipment ID, three parts: four digits for the area code, then section, then equipment.
-   Tracking report: the system generates XML, and we get a row of data. This is an activity, and the event TTS is the timestamp.
-   PID is an identifier. There's also a file called fact-backed based history. For that, there's an LPC or LPN. When using that file, we use LPN as the identifier. When a bag enters, there is no LPN, and the tracking report only has raw information about what was generated. Fact-backed trace has a view of what was filled in.
-   Fact-backed trace includes register reports, deregister (exit or lost in tracking).
-   Process Insights data is only the tracking reports, nothing from the fact-backed trace.
-   It is static from a download that gets uploaded.
-   Only using eventually follows, not directly follows.
-   Can filter by different attributes.
-   Average travel time is a combination of actual time and things that were computed as expected travel.
-   Specified travel time is the time the bag should be taking from one node to another.
-   Performance ratio is based on time changes due to equipment malfunction.
-   If travel time is greater than 1.2x average travel time, it is considered a blockage.
-   Conveyors will stop if there is a backup, and the timing is calculated based on the speed or stoppage of the track.

Integration engineers use this to check if the system is built correctly (during build and testing). They're also called test engineers. When they do a test, they load the data and check whether everything is okay, looking for something they might have missed manually. This provides a deep dive, multiple bags with similar behavior, visual, etc.
-   In Brussels, they saw two bags take a particular route. When investigating, they found that the route configuration was incorrect and were able to correct it.

Process engineers use it when there's an incident, and they need to do root cause analysis. They're looking to move into proactive analysis. Process engineers have a formal process to do root cause analysis. They also use the tool to communicate what happened with the customer.
-   They also have access to Splunk, a dashboarding tool with SQL queries, which is built in the digital service factory