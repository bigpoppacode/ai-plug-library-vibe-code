# Schedule HTTP Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every day at 9 am** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note2** `stickyNote` — width: "348.2877732355713", height: "595.2986206729652", content: "## Search for all contacts that last contact date for is known

1. Setup Oauth2 creds using n8n docs
https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottr…[truncated]"
4. **Sticky Note** `stickyNote` — color: "3", width: "289.74216745960825", height: "402.1775107197669"
5. **Sticky Note1** `stickyNote` — color: "5", width: "407.25356360335365", height: "242.51175804432177"
6. **Sticky Note3** `stickyNote` — color: "4", width: "490.3275896931988", height: "496.3776986502359"
7. **Get previously HubSpot contacts** `hubspot` — operation: **search**
8. **if last contacted before a month** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Get Hubspot Contact to engagement** `httpRequest` — url: `=https://api.hubapi.com/crm-associations/v1/associations/{{ $json.id }}/HUBSPOT_DEFINED/9`
10. **if there has been only one engagement** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Set email keys** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Record engagement in HubSpot** `hubspot` — resource: **engagement**
13. **Send outreach email** `gmail` — sendTo: "={{ $json.to }}", message: "={{ $json.html }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates follow-up emails to HubSpot contacts. Every day at 9 am, it searches for contacts in HubSpot who haven't been contacted in over a month. If the contact has only had one previous engagement, it sends a follow-up email via Gmail and records this new engagement in HubSpot.

**Demonstrate:**  
A sales consultant might use this workflow to automatically follow up with leads that haven't been engaged recently, ensuring consistent communication without manual tracking.

**Imitate:**  
1. Set up OAuth2 credentials for HubSpot and Gmail in n8n.
2. Schedule the workflow to run daily at 9 am.
3. Configure the HubSpot search for contacts based on the last contacted date.
4. Set conditions to check engagements and send follow-up emails.
5. Test the workflow to ensure emails are sent and engagements are recorded.

**Practice:**  
Create a test contact in HubSpot with a last contacted date over a month ago. Run the workflow and check if the follow-up email is sent and engagement is recorded. Adjust the conditions and test again.

**WIIFM:**  
Mastering this workflow helps you automate customer follow-ups, improving client retention and satisfaction. This skill can attract clients needing efficient sales processes, increasing your marketability and income in the automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, hubspotOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
