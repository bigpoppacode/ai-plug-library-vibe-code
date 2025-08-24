# Zendesk Hubspot Create Scheduled

## 🚀 What It Does
This workflow automates a process involving merge, functionItem, hubspot.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Add Zendesk company data to Hubspot data** node.
2. **Step 1: Add Zendesk company data to Hubspot data (merge)** - This step performs a key action in the workflow.
3. **Step 2: Set new last execution timestamp (functionItem)** - This step performs a key action in the workflow.
4. **Step 3: Get last execution timestamp (functionItem)** - This step performs a key action in the workflow.
5. **Step 4: Get modified companies (hubspot)** - This step performs a key action in the workflow.
6. **Step 5: Get all Zendesk organisations (zendesk)** - This step performs a key action in the workflow.
7. **Step 6: Company exists in Zendesk (if)** - This step performs a key action in the workflow.
8. **Step 7: Create organisation (zendesk)** - This step performs a key action in the workflow.
9. **Step 8: Update organisation (zendesk)** - This step performs a key action in the workflow.
10. **Step 9: Every 5 minutes (cron)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the synchronization of company data between Zendesk and HubSpot. It checks for modified companies in HubSpot, retrieves all organizations from Zendesk, and either updates existing records or creates new ones, running every 5 minutes to keep data current.

### Demonstrate
A business owner might use this workflow to ensure their customer relationship management (CRM) data in HubSpot is always up-to-date with Zendesk support ticket information, enhancing customer service and operational efficiency without manual data entry.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Cron node to trigger every 5 minutes.
3. Use the HubSpot node to get modified companies since the last execution.
4. Use the Zendesk node to retrieve all organizations.
5. Add a merge node to combine data from both sources.
6. Use an If node to check if each company exists in Zendesk.
7. Create or update organizations in Zendesk based on the check.
8. Set a function item to update the last execution timestamp.

### Practice
Try modifying the workflow to include a logging mechanism that records successful updates or creations in a Google Sheet. This will help you track how many records are synced each time the workflow runs.

### WIIFM
Mastering this workflow allows you to offer valuable data synchronization services, improving client operations and data accuracy. This skill can help you attract customers looking for automation solutions, leading to increased revenue opportunities in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Add Zendesk company data to Hubspot data" and "Every 5 minutes" for IDs, table names, and URLs.
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
