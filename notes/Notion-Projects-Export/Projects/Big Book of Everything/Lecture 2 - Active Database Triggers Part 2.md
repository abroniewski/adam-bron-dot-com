# Lecture 2 - Active Database: Triggers Part 2

Created: October 4, 2021 3:40 PM
Updated: October 4, 2021 3:40 PM

# Questions

- Granularities
    - statement-level -> Launch the statement (e.g. update all items in a column) and then launch the the trigger to complete a check
    - Tuple-level -> The rule is triggered after every single tuple is updated (e.g. update 1 data in 1 row, check against the trigger for every single constraint, then update the next row and check again etc.)
        - There could be inconsistencies during an update that become resolved after the full statement is executed.
        - ⚠️ Avoid use of tuple-level triggers as it will result in issues in the long term
        - Oracle has known issues where trigger comparisons can't be completed because the the table being referenced is locked down by the update.
- Immediate execution -> trigger is executed immediately after a command is executed
    - ✅ Preference is to have a trigger deferred until the end of a relevant block of script
        - No way to implement this in MS SQL server
-