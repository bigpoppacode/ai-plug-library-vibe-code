# Splitout Filter Create Scheduled

## 🚀 What It Does
This workflow automates a process involving filter, googleSheets, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Has Shared with External Users (filter)** - This step performs a key action in the workflow.
3. **Step 2: Create New Sheet (googleSheets)** - This step performs a key action in the workflow.
4. **Step 3: Normalise Fields (set)** - This step performs a key action in the workflow.
5. **Step 4: For Each File (splitInBatches)** - This step performs a key action in the workflow.
6. **Step 5: File Ref (noOp)** - This step performs a key action in the workflow.
7. **Step 6: Permissions To Items (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: Aggregate (aggregate)** - This step performs a key action in the workflow.
9. **Step 8: Flatten Rows (set)** - This step performs a key action in the workflow.
10. **Step 9: Rows to Items (splitOut)** - This step performs a key action in the workflow.
11. **Step 10: Send Email Report (Execute Once) (gmail)** - This step performs a key action in the workflow.
12. **Step 11: Get Recently Active Documents (googleDrive)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Filter Out Owner of Document (filter)** - This step performs a key action in the workflow.
19. **Step 18: Append to New Sheet (googleSheets)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow audits Google Drive permissions daily. It checks shared files, creates a report in Google Sheets, and sends an email with findings, ensuring security and compliance by identifying files shared with external users.

### Demonstrate
A business owner could use this workflow to ensure sensitive files in Google Drive aren't exposed to unauthorized users, maintaining data security and compliance while saving time on manual audits.

### Imitate
1. Set up a scheduled trigger to run daily.
2. Use Google Drive node to fetch recently modified files.
3. Filter files shared with external users.
4. Normalize and aggregate data.
5. Create a new Google Sheet for the report.
6. Send an email with the report link.

### Practice
Try modifying the workflow to audit a different Google Drive folder or set a different schedule (e.g., weekly). Observe how the changes affect the output and email content.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, ensuring their data security while saving them time. This could lead to increased demand for your services and higher income opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Has Shared with External Users" and "Sticky Note4" for IDs, table names, and URLs.
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
