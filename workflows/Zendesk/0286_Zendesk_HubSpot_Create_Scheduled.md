# Zendesk Hubspot Create Scheduled
## 🚀 What It Does
Automates a flow using zendesk×4, hubspot×3, functionItem×2.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Every 5 minutes**.
2. **Every 5 minutes** `cron` — triggerTimes: "[object Object]"
3. **Get last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
4. **Get tickets updated after last execution** `zendesk` — operation: **getAll**
5. **Get user data of Ticket requester** `zendesk` — resource: **user**, operation: **get**
6. **Only keep needed data** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
7. **Add user data** `merge` — mode: "mergeByKey", propertyName1: "requester_id", propertyName2: "id"
8. **Ticket Exists** `if` — conditions: "[object Object]"
9. **Update existing ticket** `hubspot` — resource: **ticket**, operation: **update**
10. **Create or update contact** `hubspot` — resource: **contact**
11. **Update External Id in Zendesk for contact** `zendesk` — resource: **user**, operation: **update**
12. **Create new Ticket** `hubspot` — resource: **ticket**
13. **Update Zendesk ticket with External Id** `zendesk` — operation: **update**
14. **Set new last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow automates the process of synchronizing ticket data between Zendesk and HubSpot every 5 minutes. It retrieves updated tickets from Zendesk, fetches user data for each ticket, and updates or creates corresponding records in HubSpot. It ensures that all ticket interactions are accurately reflected in both systems, enhancing customer support efficiency.

- **Demonstrate:** A customer support team might use this workflow to keep Zendesk and HubSpot in sync, ensuring that all ticket updates are captured in their CRM for accurate reporting and follow-up.

- **Imitate:** Import the workflow into n8n, connect your Zendesk and HubSpot accounts, and set up the cron trigger. Customize the Zendesk queries and HubSpot updates to match your organization's data structure. Test the workflow to verify data synchronization.

- **Practice:** Create a test ticket in Zendesk, run the workflow, and check if the ticket data appears in HubSpot correctly. Modify ticket details in Zendesk and observe how the workflow updates HubSpot.

- **WIIFM:** Mastering this workflow can streamline customer support operations, ensuring accurate data across platforms. This can enhance service delivery, improve customer satisfaction, and position you as a valuable asset in integrating and automating CRM systems, potentially increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** zendeskApi, hubspotOAuth2Api.
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
