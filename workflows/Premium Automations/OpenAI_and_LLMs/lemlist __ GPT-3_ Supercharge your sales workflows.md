# Lemlist    Gpt 3  Supercharge Your Sales Workflows
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Lemlist - Lead Replied**.
2. **Lemlist - Lead Replied** `lemlistTrigger` — event: "emailsReplied", options: "[object Object]"
3. **OpenAI** `openAi` — prompt: "=The following is a list of emails and the categories they fall into:
Categories=["interested", "Out of office", "unsubscribe", "other"]

Interested is when the reply is positive."…[truncated]"
4. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
5. **Switch** `switch` — rules: "[object Object]", value1: "={{ $json["text"].trim() }}", dataType: "string"
6. **Lemlist - Unsubscribe** `lemlist` — resource: **lead**, operation: **unsubscribe**
7. **lemlist - Mark as interested** `httpRequest` — url: `=https://api.lemlist.com/api/campaigns/YOUR_CAMPAIGN_ID/leads/{{$json["leadEmail"]}}/interested`
8. **HubSpot - Get contact ID** `hubspot` — resource: **contact**
9. **HubSpot - Get contact ID1** `hubspot` — resource: **contact**
10. **Slack1** `slack` — channel/topic: `Your channel name`
11. **HubSpot - Create Deal** `hubspot` — stage: "79009480", authentication: "oAuth2", additionalFields: "[object Object]"
12. **follow up task** `hubspot` — resource: **engagement**
13. **Slack** `slack` — channel/topic: `Your channel name`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email response categorization and follow-up processes. It detects when a lead replies to an email sent via Lemlist. The workflow uses OpenAI to categorize the reply as either "interested," "out of office," "unsubscribe," or "other." Based on the category, it performs actions like unsubscribing the lead, marking them as interested, or creating a follow-up task. For interested leads, it creates deals in HubSpot and sends notifications to Slack, ensuring efficient lead management.

### Demonstrate
A sales team could use this workflow to streamline lead management. When a prospect replies to a campaign email, the workflow categorizes their response and takes appropriate actions, like marking them as interested or unsubscribing them, without manual intervention.

### Imitate
1. Import the workflow into n8n.
2. Connect Lemlist, OpenAI, HubSpot, and Slack accounts.
3. Set up triggers for incoming email replies.
4. Customize categories in the OpenAI node to suit your needs.
5. Test the workflow with sample replies to verify actions.

### Practice
Create a test scenario by sending different types of email replies to your Lemlist campaign. Observe how the workflow processes each reply and updates records in HubSpot, sends Slack notifications, or unsubscribes leads.

### WIIFM
Mastering this workflow allows you to offer automated lead management solutions, increasing sales efficiency and client satisfaction. This expertise can boost your service offerings in an AI automation business, attracting more clients and generating additional income.

## 🔧 Setup Instructions
1. **Connect Credentials:** lemlistApi, hubspotOAuth2Api, openAiApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
