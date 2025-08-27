# Code Webhook Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Everyday at 7PM** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "857.9236217062975", height: "220.18022408852067", content: "### New order is sent to the Webhook via POST with params {orderID, orderPrice}"
4. **Sticky Note1** `stickyNote` — width: "1202.2434730902464", height: "235.62797364881823", content: "### Daily summary sent to email at 7PM"
5. **Sticky Note2** `stickyNote` — color: "4", width: "607.7708924207209", height: "893.1187181589532"
6. **Sticky Note4** `stickyNote` — color: "3", width: "170", height: "80"
7. **Sticky Note5** `stickyNote` — color: "3", width: "170", height: "80"
8. **Webhook** `webhook` — method: **POST**, path: `/e9e62c98-390d-4d16-bc77-a13b043bf1cf`
9. **Yesterday Date** `code` — jsCode: "// Create a new date object for yesterday, 7pm
const yesterday = new Date();
yesterday.setDate( new Date().getDate() - 1); 
yesterday.setHours(19, 0, 0, 0);
const isoString = yeste…[truncated]"
10. **Set Order Fields** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Airtable Get Today's Orders** `airtable` — operation: **search**, table: `[object Object]`
12. **Store Order** `airtable` — operation: **create**, table: `[object Object]`
13. **HTML** `html` — html: "<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body>
  <table>
    <tr> 
      {{ Object.keys($input.first().json).map(propname=>'<td>'+propname+'</td>').join(''…[truncated]"
14. **Send to Gmail** `gmail` — sendTo: "axelrose20272027@gmail.com", message: "={{ $json.html }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of collecting and summarizing daily orders. It receives new orders via a webhook, stores them in Airtable, and at 7 PM daily, retrieves the day's orders to send a summary email. This ensures efficient order management and timely reporting.

### Demonstrate
A small e-commerce business could use this workflow to automate daily order summaries, reducing manual work and ensuring timely updates to their team or stakeholders about the day's sales performance.

### Imitate
1. Import the workflow into n8n.
2. Set up Airtable with fields for orderID and orderPrice.
3. Configure the webhook to receive order data.
4. Customize the Airtable and Gmail nodes with your credentials.
5. Test by sending a POST request to the webhook URL with sample order data.

### Practice
Create a test Airtable base with fields for orderID and orderPrice. Send test orders to the webhook and ensure the data is stored correctly in Airtable. Verify the daily summary email is formatted and sent as expected.

### WIIFM
Mastering this workflow can help you offer automated reporting solutions to clients, enhancing their operational efficiency and communication. This capability can attract new clients and increase your service offerings, potentially boosting your income as an automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableTokenApi, gmailOAuth2.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  