# Datetime Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, scheduleTrigger, dateTime.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Run Every 5 Minutes (scheduleTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Get 5 Minute Ago Timestamp (dateTime)** - This step performs a key action in the workflow.
5. **Step 4: Get Incidents from ServiceNow (serviceNow)** - This step performs a key action in the workflow.
6. **Step 5: Check if New Incidents (if)** - This step performs a key action in the workflow.
7. **Step 6: Post Error Message if Error with ServiceNow (slack)** - This step performs a key action in the workflow.
8. **Step 7: Sort Incidents in Ascending Order (sort)** - This step performs a key action in the workflow.
9. **Step 8: Post Incident Details to Slack Channel (slack)** - This step performs a key action in the workflow.
10. **Step 9: No Incidents, Do Nothing (noOp)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the monitoring and notification of new incidents from ServiceNow. It checks for incidents created in the last 5 minutes, sorts them, and sends details to a Slack channel or alerts if there’s an error connecting to ServiceNow.

### Demonstrate
A business owner can use this workflow to automate incident reporting for their IT team. Instead of manually checking ServiceNow for new incidents, the owner receives instant Slack notifications, ensuring timely response and improved team efficiency.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Schedule Trigger to run every 5 minutes.
3. Use the DateTime node to get a timestamp for 5 minutes ago.
4. Connect to ServiceNow to fetch incidents created after that timestamp.
5. Use an If node to check if any new incidents exist.
6. Sort incidents and post details to Slack if found; otherwise, do nothing.

### Practice
Create a test version of this workflow that triggers from a manual input (using a Manual Trigger node) instead of a schedule. Simulate incident data and see how it processes and notifies you in Slack.

### WIIFM
Mastering this workflow helps you offer valuable automation services, enabling businesses to improve their incident management processes, respond faster to issues, and ultimately enhance customer satisfaction—all of which can lead to cost savings and increased revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note6" for IDs, table names, and URLs.
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
