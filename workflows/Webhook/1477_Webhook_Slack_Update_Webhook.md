# Webhook Slack Update Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note1**.
2. **Sticky Note1** `stickyNote` — color: "7", width: "239.36440675415446", height: "80"
3. **Sticky Note2** `stickyNote` — color: "7", width: "242.34738303232248", height: "131.4798719116814"
4. **Sticky Note** `stickyNote` — color: "7", width: "200.3243983123301", height: "95.26139957883888"
5. **Sticky Note3** `stickyNote` — color: "7", width: "194", height: "100.99999999999997"
6. **Sticky Note4** `stickyNote` — color: "6", width: "226.64074289386136", height: "128.58912785838194"
7. **on new twentycrm event** `webhook` — method: **POST**, path: `/8118bda9-0e4f-44cd-bf64-31020b6d5ab5`
8. **filter required data #eventType mandatory** `set` — options: "[object Object]", assignments: "[object Object]"
9. **events log** `googleSheets` — operation: **append**
10. **message channel evaluation** `if` — options: "[object Object]", conditions: "[object Object]"
11. **email channel for delete eventType** `gmail` — message: "=<h2>Please find below the attached record details</h2><br/><br/> 
<ul>
<li>
objectMetadata_id: {{ $json.objectMetadata.id }}
</li>
<li>
record_id: {{ $json.record.id }}
</li>
</ul…[truncated]", options: "[object Object]", subject: "Record Deleted in TwentyCRM"
12. **message channel for all other eventTypes** `slack` — text: "=event: {{ $json.eventName }}
event_id: {{ $json.objectMetadata.id }}
record_id: {{ $json.record.id }}", select: "channel", channelId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates notifications for events in TwentyCRM. When a new event occurs, it triggers the workflow via a webhook. The event data is filtered and logged into a Google Sheet. Depending on the event type, a decision node directs notifications either to email (for delete events) or to a Slack channel (for all other events).

### Demonstrate
A business owner might use this workflow to keep their team informed of important updates in their CRM, such as record deletions, ensuring timely responses and accountability.

### Imitate
1. Import the workflow into n8n.
2. Connect your TwentyCRM, Google Sheets, Gmail, and Slack accounts.
3. Set up the webhook URL in your TwentyCRM.
4. Customize the Google Sheet and messaging templates.
5. Test by triggering events in TwentyCRM.

### Practice
Create a test event in TwentyCRM and observe how the workflow logs the event and sends notifications. Modify the workflow to handle a new event type and test again.

### WIIFM
Mastering this workflow allows you to offer automated CRM notifications as a service, enhancing client communication and operational efficiency. This can attract new customers and increase your revenue in an AI automation business.

## 🔧 Setup Instructions
1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
