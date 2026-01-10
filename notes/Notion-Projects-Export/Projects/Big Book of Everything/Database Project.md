# Database Project

Created: September 22, 2021 12:38 PM
Updated: September 22, 2021 1:31 PM

ACTION ITEMS

Share GitHub examples

Read and try to setup environment

Milestone: Read spec to have informed conversation, look at youtube videos

- Phases of project
    - Develop Scope
        - Review and understand TPC spec
    - Setup environment
        - Understand file types
        - Understand data types
        - Determine where data goes
        - Dedicated server?
            - Are there any requirements for where to host in the spec.
            - Azure -> Azure is operating system that can be used to
    - Data Loading
        - Def'n: Benchmark performance of loading data from OLTP to Warehouse
        - Build data, understand
        - Files coming in zip
            - ANSI SQL -> Not specific to SQL
            - Templates exist that will generate executable SQL
    - Data refresh - incremental phase when extra data is added takes lots of time
        - Will need to do manual tweaks
    - Report
        - Needs to follow TDC spec

# SQL Server Background Notes

- MS SQL server
- Server vs Client
- Facebook - on my PC I am client, FB has a server with data
- Microsoft SQL server clients -> used to interface with the server
- SQL server management studio
- Azure MS studio
- Programming language
    - SQL server has programming language called T-SQL
    - DBMS -> database management system
    - SQL is like "latin" - T-SQL (or call it SQL server)
- Relational languages have 3 components:
    - DML - data modeling langage (e.g. SELECT)
    - DDL - data definition language (e.g. MUTATE/ create objects)
    - Programability - if/else, programming etc.
    - each language might have slightly different words they use for the commands
- Compile