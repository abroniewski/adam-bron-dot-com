---
title: Graph RAG second brain
date: 2026-01-06
tags: [making, systems, llm, sales]
energy: high
public: true
---

[Building a Graph-Based System to Enhance Sales Insights and Client Interactions] https://www.loom.com/share/96e5b6cab3884177b76113ff37023600

- Built a graph RAG to act as a 2nd brain at Konekti
- Improves on ChatGPT project approach, needed more context and control over sources and quotes
- Breaks down documents into chunks and associates things said with specific features/benefits of the Konekti platform. Identifies trends in conversations
- Need GraphRAG instead of RAG to support validated learning, to make the connection of a persona-in-context and map out the different connections variables have to a benefit track. Regular RAG is not able to maintain this information, it would require too much context to go in everytime a query is being made.
- Parsing of the documents is still struggling to get the correct speaker. Also does not attribute repeat-backs or confirmations from SALES role as being something the lead agrees with
- If attribution is wrong, the whole system will lie confidently. We need to have confidence and traceability as to exactly why a certain painpoint is the right one to focus on.
- Built with ChatGPT and cursor, vibe coded.
- Learnings:
  - Need to have good plan for initial pass, or be build quick MVP to test/scaffold and then be ready to throw away and rebuild as I learn what is important.
  - Creating a demo reveals the most obvious next steps
  - I was over optimizing without actually having tested the outcome. I focused in on some individual issues, but now see that these might get smoothed over with more data and are also easy for a human to ignore.
  - Chasing perfection prevented me from releasing this as complete (or at least as v1).
  - Testing/building with a smaller sample (single transcript) will make it easier to get fundamental parsing correct first
- Next steps: run the entire pipeline and test some queries to see what comes out of it