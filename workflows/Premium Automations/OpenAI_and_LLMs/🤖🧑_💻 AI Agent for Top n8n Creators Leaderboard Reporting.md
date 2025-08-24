# 🤖🧑 💻 AI Agent For Top N8n Creators Leaderboard Reporting

## 🚀 What It Does
This workflow automates a process involving httpRequest, set, aggregate.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: stats_aggregate_creators (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: stats_aggregate_workflows (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Global Variables (set)** - This step performs a key action in the workflow.
5. **Step 4: Parse Workflow Data (set)** - This step performs a key action in the workflow.
6. **Step 5: Parse Creators Data (set)** - This step performs a key action in the workflow.
7. **Step 6: Aggregate (aggregate)** - This step performs a key action in the workflow.
8. **Step 7: gpt-4o-mini (lmChatOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
10. **Step 9: Workflow Tool (toolWorkflow)** - This step performs a key action in the workflow.
11. **Step 10: creator-summary (convertToFile)** - This step performs a key action in the workflow.
12. **Step 11: Workflow Response (set)** - This step performs a key action in the workflow.
13. **Step 12: Save creator-summary.md (readWriteFile)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Creators Data (set)** - This step performs a key action in the workflow.
23. **Step 22: Workflows Data (set)** - This step performs a key action in the workflow.
24. **Step 23: Merge Creators & Workflows (merge)** - This step performs a key action in the workflow.
25. **Step 24: Split Out Creators (splitOut)** - This step performs a key action in the workflow.
26. **Step 25: Split Out Workflows (splitOut)** - This step performs a key action in the workflow.
27. **Step 26: Sort By Top Weekly Creator Inserts (sort)** - This step performs a key action in the workflow.
28. **Step 27: Sort By Top Weekly Workflow Inserts (sort)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
32. **Step 31: Take Top 10 Creators (limit)** - This step performs a key action in the workflow.
33. **Step 32: Take Top 50 Workflows (limit)** - This step performs a key action in the workflow.
34. **Step 33: Google Drive (googleDrive)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Convert Markdown to HTML (markdown)** - This step performs a key action in the workflow.
39. **Step 38: n8n Creators Stats Agent (agent)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
42. **Step 41: Create Top 10 Workflows List (chainLlm)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note16 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Convert Top 10 Markdown to HTML (markdown)** - This step performs a key action in the workflow.
47. **Step 46: Gmail Creators & Workflows Report (gmail)** - This step performs a key action in the workflow.
48. **Step 47: Telegram Top 10 Workflows List (telegram)** - This step performs a key action in the workflow.
49. **Step 48: Gmail Top 10 Workflows List (gmail)** - This step performs a key action in the workflow.
50. **Step 49: Sticky Note17 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow collects and processes data about top n8n creators and workflows. It aggregates stats, interacts with AI for insights, generates reports, and distributes them via email and messaging platforms.

### Demonstrate
A business owner might use this workflow to automatically generate weekly reports on their top-performing workflows and contributors, saving time and ensuring consistent communication with their team.

### Imitate
1. Set up an n8n instance.
2. Create a new workflow.
3. Add HTTP Request nodes to pull data from creators and workflows.
4. Use Set nodes to process and parse the data.
5. Integrate AI nodes for insights.
6. Output results to Google Drive or email.

### Practice
Try modifying the workflow to track different metrics, like user engagement or feedback scores, and create a report that summarizes this data weekly.

### WIIFM
Mastering this workflow allows you to automate reporting, enhance data insights, and improve client communication, creating value that can attract more customers and increase revenue for your automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "stats_aggregate_creators" and "Sticky Note17" for IDs, table names, and URLs.
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
