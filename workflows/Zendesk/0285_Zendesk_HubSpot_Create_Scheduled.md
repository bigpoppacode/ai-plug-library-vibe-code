# Zendesk Hubspot Create Scheduled
## 🚀 What It Does
Automates a flow using zendesk×3, functionItem×2, merge.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Every 5 minutes**.
2. **Every 5 minutes** `cron` — triggerTimes: "[object Object]"
3. **Get last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
4. **Get modified companies** `hubspot` — resource: **company**, operation: **getRecentlyModified**
5. **Get all Zendesk organisations** `zendesk` — resource: **organization**, operation: **getAll**
6. **Add Zendesk company data to Hubspot data** `merge` — mode: "mergeByKey", propertyName1: "properties.name.value", propertyName2: "name"
7. **Company exists in Zendesk** `if` — conditions: "[object Object]"
8. **Update organisation** `zendesk` — resource: **organization**, operation: **update**
9. **Create organisation** `zendesk` — resource: **organization**
10. **Set new last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow runs every 5 minutes to keep company data in sync between HubSpot and Zendesk. It checks for recently modified companies in HubSpot, retrieves all organizations from Zendesk, and merges the data based on company names. If a company exists in Zendesk, it updates the organization; if not, it creates a new one. Finally, it updates the timestamp of the last execution, ensuring that only changes since the last run are captured.

**Demonstrate**  
A SaaS company could use this workflow to ensure their sales and support teams always have up-to-date customer information, reducing errors and improving customer service efficiency.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your HubSpot and Zendesk accounts.
3. Set the cron trigger to your desired schedule.
4. Adjust the merge and update fields to match your data structure.
5. Test the workflow to ensure it syncs data correctly.

**Practice**  
Create a test environment with sample data in both HubSpot and Zendesk. Run the workflow and verify that updates in HubSpot reflect correctly in Zendesk. Experiment with changing the merge fields to see how it affects the data sync.

**WIIFM**  
Mastering this workflow allows you to offer data synchronization services, ensuring clients' systems are always up-to-date. This can improve customer satisfaction, streamline operations, and provide a valuable upsell opportunity in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** hubspotAppToken, zendeskApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
