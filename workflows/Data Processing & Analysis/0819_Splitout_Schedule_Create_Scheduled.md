# Splitout Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, embeddingsOpenAi, documentDefaultDataLoader.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Issues Similarity Database (vectorStoreSupabase)** - This step performs a key action in the workflow.
7. **Step 6: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Find Similar Issues + Assignees (agent)** - This step performs a key action in the workflow.
11. **Step 10: Check User Workflow (jira)** - This step performs a key action in the workflow.
12. **Step 11: For Each User (splitInBatches)** - This step performs a key action in the workflow.
13. **Step 12: Assign User to Ticket (jira)** - This step performs a key action in the workflow.
14. **Step 13: Schedule Trigger1 (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Remove Duplicates (removeDuplicates)** - This step performs a key action in the workflow.
16. **Step 15: Collect Fields (set)** - This step performs a key action in the workflow.
17. **Step 16: Get Unassigned Tickets more than 5 days (jira)** - This step performs a key action in the workflow.
18. **Step 17: For Each Issue (splitInBatches)** - This step performs a key action in the workflow.
19. **Step 18: Issue Ref (noOp)** - This step performs a key action in the workflow.
20. **Step 19: Add Comment to Issue (jira)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Last 50 Resolved (jira)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
29. **Step 28: Issues to Items (splitOut)** - This step performs a key action in the workflow.
30. **Step 29: To Structured Output (informationExtractor)** - This step performs a key action in the workflow.
31. **Step 30: Count Assigned Open Issues per User (summarize)** - This step performs a key action in the workflow.
32. **Step 31: Tally In-Progress Issues per User (set)** - This step performs a key action in the workflow.
33. **Step 32: Sort By Most Capacity (sort)** - This step performs a key action in the workflow.
34. **Step 33: If has Items? (if)** - This step performs a key action in the workflow.
35. **Step 34: Skip (noOp)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Sticky Note7" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

### ⚠️ Automation Ain’t the Same Anymore

Most builders out here are stuck doing $500 workflows and calling it a win.  
That’s not the move.  

I'm closing $6k–$13k deals by stacking simple automations with lightweight AI...  
and it takes me under 2 hours to build most of them.

#### 🧠 Examples From My Own Playbook:
- 🔁 Turned a recurring invoice workflow into a $6,000 retainer that saved 20 hours/week  
- ⚖️ Built an AI-powered lead gen engine for law firms — they paid $13,000 happily  
- 🚀 Launched an SEO agent that outperforms funded companies — using free OpenAI credits  

**Want to learn how to do the same?**  
Inside [Digital Boss Code](https://bigpoppacode.io/go/dbc), I break it all down:

✅ The exact AI components that 3x your pricing overnight  
✅ My $15k Automation Framework using n8n + LangChain  
✅ Word-for-word scripts to close high-ticket deals  
✅ Real client case studies with templates  
✅ How to stop looking like a tech VA and start moving like a Solution Architect  

🔥 Get started at → [bigpoppacode.io/go/dbc](https://bigpoppacode.io/go/dbc)  
Limited time access, early birds get the best bonuses.

---
> Built by [Big Poppa Code](https://bigpoppacode.io) – architecting automations that scale people, profits, and purpose.
