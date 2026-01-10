# Idea Canvas → kickoff

# What do we need at this stage?

Proof of Concept → something that can be shared

**core id**: QR code that links doctor/pharmacist/patient

EMR output screen after patient visits doctor

1. Doctor makes a prescription
2. Doctor makes QR code
3. Two Options: change of custody → 
    1. does patient hold onto it, or 
    2. does doctor send it on their behalf
4. Patient goes to pharmacist
5. IF PATIENT HAS QR: Pharmacist scans QR code, all info needed pops up
    1. how much information pops up in QR code? This is where, if additional info is taken from doc or from patients app/med wallet, more info can be provided.
        1. Data can come from doc or from patient. If adding data from doc, could there be a way to only allow certain info to pop up. E.g: the patient cannot get all the info that a pharmacist can get
        2. For patient, want to be able to provide additional info about the drugs, symptoms, 
    2. Absolute necessary information only for first step.
        1. authorisation/ digital signature of doctor
        2. consents and sign-offs would be signficiant
6. Pharmacist Visit → all info pops up
7. Prescription has label with QR code, patient scans it in
    1. drugs show up in patients medicine cabinet that starts to provide automation of refills, reminders, location when driving past etc.
    2. Starting point → static info only
    3. **Big value-add** would be able to turn on reminders to take meds
    

Most important part is to digitise the prescription (part 1). Future state is the management of meds (part 2). Big change is that patient no longer needs to keep track of their prescription.

# Products

QR Code → being sold to pharmacists (automates data entry). Patients would like it to make it easier to manage instead of paper.

App → patients download app to keep track of meds, pharmacies can help track symptoms, get feedback on the progress, do they need med changes etc.

# Technologies and Systems

Chains will have their own systems (in house, proprietary).

Small places are running on out of the box, **Kroll** (recently acquired by Telus). Telus has recently become big player in e-health.

**Fillware** - more popular in east coast? also being used. There are only 2-3 systems. If we broke into Kroll we can capture the market.

Groups exist that run 150-200 shops, might have some proprietary solutions.

If patient goes to new pharmacy, they would need to ask for their documents/history moved over between pharmacies. Pharmacies are the ones that currently do this. If patient owns their own information, they would easily be able to keep.

## Doctors

DPIN → 2-3 years of patient pharmaceutical data. Federal level. Pharmacist can check this out, but not required. Pharmacist could look at it if patient has hard time remembering things.

EMR systems that doctors use, there is a huge amount that exist.

NetCare → shows immunisations, hospital stays etc.

Pharmacies have up to 6 months to upload their information into NetCare, so it can be true, but necessarily up to date.

Systems are different province to province

## Other Systems

PrescripeIT → independent pharmacies reference this

DocLine

# Regulations

HIPA → requirements for health information

PIPA → personal info act

Encrypted databases for patient info.

# Location

Start in Alberta → best scope of service, pharmacist have larger scope in terms of what they can offer.

Colleague has a pharmacy in a medical building. This would be a good place to start testing.

# TODO

**Dan** → send docLine info and recently acquired pharmacy.