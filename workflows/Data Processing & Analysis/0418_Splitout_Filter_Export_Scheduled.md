# Splitout Filter Export Scheduled

## 🚀 What It Does
This workflow automates a process involving httpRequest, filter, clearbit.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Get Leads (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Filter Leads by company criteria (filter)** - This step performs a key action in the workflow.
4. **Step 3: Enrich company (clearbit)** - This step performs a key action in the workflow.
5. **Step 4: Setup (set)** - This step performs a key action in the workflow.
6. **Step 5: Get all Leedfeeder accounts (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Only for wanted accounts (filter)** - This step performs a key action in the workflow.
8. **Step 7: Split out accounts (splitOut)** - This step performs a key action in the workflow.
9. **Step 8: Split Out Leads (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Filter leads by engagement (filter)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Save leads to Google Sheets (googleSheets)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates lead generation by fetching leads from Leadfeeder, filtering them based on company size and engagement, enriching their data with Clearbit, and saving the results to Google Sheets for easy tracking.

### Demonstrate
A business owner could use this workflow to automate the process of identifying potential clients based on specific company criteria, ensuring they focus on high-quality leads without manual data entry, ultimately saving time and increasing sales efficiency.

### Imitate
1. Import the workflow into n8n.
2. Set up your Leadfeeder and Google Sheets credentials.
3. Adjust the filtering criteria in the "Filter Leads" node.
4. Run the workflow to fetch, filter, enrich, and save leads.
5. Review the data in Google Sheets.

### Practice
Create a simplified version of the workflow that only fetches leads from Leadfeeder and saves them to Google Sheets without filtering or enrichment. This will help you understand the basic functioning of nodes and data flow.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, streamline lead management, and increase your income by providing efficient, scalable solutions that save businesses time and resources.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get Leads" and "Save leads to Google Sheets" for IDs, table names, and URLs.
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
