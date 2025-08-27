# Schedule Gmail Send Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every day at 9 am** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note2** `stickyNote` — width: "348.2877732355713", height: "526.4585335073351", content: "## Search for all contacts that last contact date for is unknown

1. Setup Oauth2 creds using n8n docs
https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspot…[truncated]"
4. **Sticky Note** `stickyNote` — color: "3", width: "289.74216745960825", height: "402.1775107197669"
5. **Sticky Note1** `stickyNote` — color: "5", width: "407.25356360335365", height: "242.51175804432177"
6. **Get uncontacted HubSpot contacts** `hubspot` — operation: **search**
7. **Set keys** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Send outreach email** `gmail` — sendTo: "={{ $json.properties.email }}", message: "={{ $json.html }}", options: "[object Object]"
9. **Record engagement in HubSpot** `hubspot` — resource: **engagement**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of sending outreach emails to HubSpot contacts who haven't been contacted before. Every day at 9 am, it searches HubSpot for contacts without a last contact date, prepares personalized outreach emails using Gmail, and records the engagement back in HubSpot to update the contact's status.

### Demonstrate
A sales consultant could use this workflow to ensure no potential leads are missed by automating follow-up emails to new contacts in HubSpot. This increases the chance of engagement and conversion without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Connect your HubSpot and Gmail accounts.
3. Set the schedule trigger to match your preferred time.
4. Customize the email content in the "Set keys" node.
5. Test the workflow to ensure emails are sent and engagements are recorded.

### Practice
Create a test contact in HubSpot with no last contact date, then run the workflow. Check if the contact receives an email and if the engagement is recorded in HubSpot. Adjust email content and timing as needed.

### WIIFM
Mastering this workflow enables you to offer automated email outreach services, enhancing your client's lead management and increasing your value as an automation consultant. This can lead to more clients and additional income streams.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
