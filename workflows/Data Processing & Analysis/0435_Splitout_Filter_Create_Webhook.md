# Splitout Filter Create Webhook

## 🚀 What It Does
This workflow automates a process involving stickyNote, clearbit, pipedrive.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Enrich company (clearbit)** - This step performs a key action in the workflow.
5. **Step 4: Get all leads (pipedrive)** - This step performs a key action in the workflow.
6. **Step 5: Add Organization ID to data (set)** - This step performs a key action in the workflow.
7. **Step 6: Keep leads that match the criteria (filter)** - This step performs a key action in the workflow.
8. **Step 7: Trigger every 5 minutes (scheduleTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Setup (set)** - This step performs a key action in the workflow.
10. **Step 9: Send alert to Slack (slack)** - This step performs a key action in the workflow.
11. **Step 10: Merge data (merge)** - This step performs a key action in the workflow.
12. **Step 11: Get organization details (pipedrive)** - This step performs a key action in the workflow.
13. **Step 12: Get all organization keys (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Get all lead keys (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Split out lead field data (splitOut)** - This step performs a key action in the workflow.
18. **Step 17: Split out organization field (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Show only custom lead fields (filter)** - This step performs a key action in the workflow.
20. **Step 19: Show only custom organization fields (filter)** - This step performs a key action in the workflow.
21. **Step 20: Mark lead as enriched in Pipedrive (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates lead enrichment by fetching leads from Pipedrive, enhancing their data using Clearbit, and sending alerts to Slack for qualified leads. It runs every 5 minutes, filtering leads based on specific criteria like revenue and employee count.

### Demonstrate
A business owner could use this workflow to streamline lead qualification. For example, a sales team receives immediate updates on high-value leads that meet specific criteria, allowing them to prioritize outreach and close deals faster.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a Schedule Trigger to run every 5 minutes.
3. Use the Pipedrive node to fetch all leads.
4. Implement a Clearbit node to enrich lead data.
5. Add filters for revenue and employee count.
6. Set up a Slack node to send alerts for qualified leads.

### Practice
Try modifying the filter conditions in the workflow to see how it changes the leads that trigger Slack notifications. Experiment with different revenue thresholds or employee counts to understand the impact on lead quality.

### WIIFM
Mastering this workflow allows you to provide immediate value to clients by enhancing their lead management processes. It can help you attract customers seeking automation solutions, ultimately generating income through service offerings and improving business efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note" and "Mark lead as enriched in Pipedrive" for IDs, table names, and URLs.
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
