# Workflow

## 🚀 What It Does
This workflow automates a process involving splitInBatches, graphql, notion.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **n8n Form Trigger** node.
2. **Step 1: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
3. **Step 2: Fetch Linear team details (graphql)** - This step performs a key action in the workflow.
4. **Step 3: Get issue contents (notion)** - This step performs a key action in the workflow.
5. **Step 4: Aggregate (aggregate)** - This step performs a key action in the workflow.
6. **Step 5: Prepare issue data (set)** - This step performs a key action in the workflow.
7. **Step 6: Create linear issue (linear)** - This step performs a key action in the workflow.
8. **Step 7: Set assignee and title (code)** - This step performs a key action in the workflow.
9. **Step 8: Team missing? (if)** - This step performs a key action in the workflow.
10. **Step 9: Set page URL (set)** - This step performs a key action in the workflow.
11. **Step 10: Set team ID (set)** - This step performs a key action in the workflow.
12. **Step 11: Add link to Notion block (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Get issue URL (graphql)** - This step performs a key action in the workflow.
14. **Step 13: Shorten title (openAi)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Unimported, unchecked to_do blocks only (filter)** - This step performs a key action in the workflow.
21. **Step 20: n8n Form Trigger (formTrigger)** - This step performs a key action in the workflow.
22. **Step 21: Get issues (notion)** - This step performs a key action in the workflow.
23. **Step 22: Convert contents to Markdown (code)** - This step performs a key action in the workflow.
24. **Step 23: Respond with error (respondToWebhook)** - This step performs a key action in the workflow.
25. **Step 24: Respond with error1 (respondToWebhook)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of importing tasks from Notion into Linear. It fetches team details, processes issue contents, and creates corresponding issues in Linear, enhancing team collaboration and task management.

### Demonstrate
A business owner managing projects can use this workflow to automatically convert tasks from Notion into Linear issues. This saves time, ensures no tasks are overlooked, and keeps the team aligned on project progress.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a **Form Trigger** node for inputting Notion page URL and Linear team name.
3. Use **GraphQL** to fetch team details from Linear.
4. Add **Notion** nodes to get tasks and format them.
5. Create **Linear** issues from the processed tasks.
6. Test the workflow and adjust the nodes as necessary.

### Practice
Create a simple version of this workflow that only fetches tasks from a Notion page and lists them in a Google Sheet. This will help you understand data flow and node connections.

### WIIFM
Mastering this workflow can significantly improve your efficiency in managing tasks, allowing you to offer automation services to clients. This could lead to increased revenue and a competitive edge in the growing market for AI and automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Loop Over Items" and "Respond with error1" for IDs, table names, and URLs.
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
