# Tech Stack - Initial Thoughts

Thanks for the reply and continued interest!

I agree with you. I think for now we let PrescribeIT continue to build the EMR and PMS integration while we focus on the PMS to patient integration. Ultimately, I think the patient data is the most important anyways.

The first core feature would be the ****

**patient picks up their medication and can scan the label of the bottle/box to their app** and it **creates an entry** which the patient 
**reviews and confirms** before 
**going into their medicine cabinet**. Then, the app would 
**track refill and compliance** with 
**reminders/alarms/notifications**.

I can work on the pitch deck and add whatever process flow/tech slide you guys produce to show the commercial side and the tech side.

I think the next two features would be the gamification/scoring of the patients adherence and symptom tracker. When the patient remembers to take their medication they log it and then that is captured in a database, awards are unlocked and a score is shared.

The other feature would be the symptom tracker. Every day/week. A patient is prompted with 5 questions. These questions can be developed through some interviews with pharmacists and doctors to come up with high level questions that help track outcomes. I.e., are you feeling better, would you like to talk to a medical professional, etc.

1. Backend
    1. HIPA
    2. QR code generated for medication + parameters (dosage, how often taken etc., how long to take etc.)
2. App
    1. QR code scanner
    2. medicine cabinet view and review
    3. reminders, tracking compliance, symptom changes
3. Backend 2 data storage (for patient)
    1. HIPA

# Tech Stack

1. **DB for medication info (Postgres)** (DB for medication storage)
2. **Application1 on desktop(??)** - at pharmacy that converts text input into QR code
3. QR code generator - [Nayuki QR-code-generator](https://github.com/nayuki/QR-Code-generator/tree/master/python)
    1. *Q: research encrypted QR codes. Is encryption/security knowledge necessary for POC? What depth to aim for for initial funding?*
4. **Application2 on mobile (NodeJS)**: Data input
    1. converts QR code into text
    2. fills in medicine cabinet with info
    3. *Q: how to store data with mobile/cloud?*
    4. *Q: how to keep this data secure, keep access to data independent of internet connection. This would be beyond POC.*
5. **Application2 on mobile (NodeJS)**: User interaction
    1. reminders to follow prescription
    2. reminder for refill
    3. Background information on drug
6. **Application2 on mobile (NodeJS)**: Next evolution
    1. scoring health and symptom changes
    2. connecting used with health care aide

## NEXT STEPS

Read - HIPPA compliance requirements