# Schedule Filter Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — width: "257.64008049230523", height: "176.97404402400312", content: "## Setup
1. Add `Hubspot` and `Slack` credentials.
2. Adjust polling time.
3. Enable the workflow."
3. **Trigger every 5 minutes** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note4** `stickyNote` — color: "7", width: "225.41119920533646", height: "282.2830454675093"
5. **Sticky Note5** `stickyNote` — color: "7", width: "223.7628185364029", height: "276.3308728978709"
6. **Sticky Note6** `stickyNote` — color: "7", width: "223.7628185364029", height: "276.3308728978709"
7. **Get leads created last 5 minutes** `hubspot` — resource: **company**, operation: **getRecentlyCreatedUpdated**
8. **Keep the ones that make more than $5M in revenue** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Notify sales rep** `slack` — text: "=New high-quality lead 🤑
*Company Name*: {{ $json.properties.name.value }} 
*Website*: {{ $json.properties.website.value }}
*Revenue*: {{ $json.properties.annualrevenue.value }}
*…[truncated]", user: "[object Object]", select: "user"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of identifying high-value leads from HubSpot and notifying sales reps via Slack. Every 5 minutes, it checks for new leads created in HubSpot, filters them to only include those with more than $5 million in revenue, and sends a notification to a sales representative on Slack with the lead details.

**Demonstrate**  
A sales manager could use this workflow to ensure their sales team is immediately aware of new high-value leads, allowing for timely follow-up and increased chances of conversion.

**Imitate**  
1. Import the workflow into your n8n instance.  
2. Add HubSpot and Slack credentials.  
3. Set the polling time in the schedule trigger to match your needs.  
4. Adjust the filter conditions if needed.  
5. Enable the workflow to start receiving notifications.

**Practice**  
Create a test lead in HubSpot with a revenue over $5M and observe the workflow as it captures and processes the lead, sending a notification to your Slack channel. Adjust the filter to test various revenue thresholds.

**WIIFM**  
Mastering this workflow allows you to provide value to businesses by automating lead notifications, enhancing sales efficiency, and improving response times. This can help you attract more clients and generate income through automation solutions and services.

## 🔧 Setup Instructions
1. **Connect Credentials:** hubspotOAuth2Api, slackOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
