# Splitout Datetime Create Webhook

## 🚀 What It Does
This workflow automates a process involving set, scheduleTrigger, manualTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Set snapshot attributes (set)** - This step performs a key action in the workflow.
3. **Step 2: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
4. **Step 3: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Credential (set)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Authorization (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: List instances (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Split Out (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: UUID (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: TRACE ID (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: List snapshots (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: UUID1 (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Merge (merge)** - This step performs a key action in the workflow.
18. **Step 17: get Date & Time (dateTime)** - This step performs a key action in the workflow.
19. **Step 18: Delete existing snapshot (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Create a new snapshot (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Create a new snapshot1 (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: UUID2 (httpRequest)** - This step performs a key action in the workflow.
23. **Step 22: UUID3 (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: UUID4 (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Formatted Date (dateTime)** - This step performs a key action in the workflow.
29. **Step 28: Whether snapshot there is no snapshot (if)** - This step performs a key action in the workflow.
30. **Step 29: set snapshot attributes (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of creating and managing backups (snapshots) for virtual servers hosted on Contabo. It checks for existing snapshots, deletes old ones, and creates new ones based on a set schedule or manual trigger.

### Demonstrate
A web development agency could use this workflow to ensure their client’s virtual servers are backed up daily. This guarantees that in case of any issues (like a server crash), they can quickly restore the server to its last known good state, minimizing downtime.

### Imitate
1. Import the workflow into n8n.
2. Set up a **Schedule Trigger** to run daily.
3. Fill in the **Credential** node with your Contabo API credentials.
4. Adjust the **Set snapshot attributes** node to include your server details.
5. Test the workflow to see it create a snapshot.

### Practice
Try adjusting the schedule in the **Schedule Trigger** node to run every hour instead of daily. Observe how it affects the snapshot creation process and check if multiple snapshots are being created as expected.

### WIIFM
Mastering this workflow can help you offer reliable backup solutions to clients, enhancing their data security. This positions you as a valuable partner in their operations, potentially leading to long-term contracts and increased income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Set snapshot attributes" and "set snapshot attributes" for IDs, table names, and URLs.
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
