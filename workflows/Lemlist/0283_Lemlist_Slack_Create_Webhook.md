# Lemlist Slack Create Webhook
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
  - **Explain:** This n8n workflow automates email response categorization and follow-up actions. It triggers upon receiving replies in Lemlist, uses OpenAI to categorize responses (e.g., interested, out of office, unsubscribe), and accordingly updates or interacts with Lemlist, HubSpot, and Slack for follow-up actions and notifications.

- **Demonstrate:** A sales team could use this workflow to automatically categorize email responses, unsubscribe uninterested leads, mark interested leads, and create deals in HubSpot, ensuring efficient lead management and timely follow-up.

- **Imitate:** Import the workflow into n8n. Connect Lemlist, OpenAI, HubSpot, and Slack accounts. Customize campaign IDs and Slack channels. Set triggers for Lemlist email replies. Test the workflow to ensure correct categorization and follow-up actions.

- **Practice:** Create a test email campaign in Lemlist. Send test replies with varying content (e.g., interested, unsubscribe). Run the workflow to see how it categorizes and processes each response. Adjust categorization prompts and actions as needed.

- **WIIFM:** Mastering this workflow allows you to offer automated lead management services, improving client sales efficiency and follow-up processes. This can enhance service offerings, attract more clients, and increase revenue in your automation business.
  
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
  