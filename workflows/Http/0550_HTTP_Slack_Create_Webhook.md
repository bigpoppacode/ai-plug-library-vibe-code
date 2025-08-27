# HTTP Slack Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — width: "565.8142732633208", height: "838.7224568543345", content: "[redacted]"
3. **Sticky Note1** `stickyNote` — height: "393.4378126446013", content: "**Step 1.**
Triggered by HubSpot Workflow"
4. **Sticky Note2** `stickyNote` — height: "393.4378126446013", content: "**Step 2.**
Set the Ids of the deal won and the deal created"
5. **Sticky Note3** `stickyNote` — width: "819.2253746903481", height: "393.4378126446013", content: "**Step 3.**
- Get line items IDs from the deal won
- Retrieve the SKUs from those line items
- Get product based on SKUs
- Create new line items from Product IDs and associate to t…[truncated]"
6. **Webhook** `webhook` — path: `/833df60e-a78f-4a59-8244-9694f27cf8ae`
7. **Retrieve deals Ids** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get deal won line items** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v4/associations/deals/line_items/batch/read`
9. **Get batch SKUs from line items** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v3/objects/line_items/batch/read`
10. **Get Batch Product IDs by SKUs** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v3/objects/products/batch/read`
11. **Create Batch line items based on productId and associate to deals** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v3/objects/line_items/batch/create`
12. **Slack** `slack` — text: "=:white_check_mark: {{ `<https://arnaud-growth.app.n8n.cloud/workflow/${$workflow.id}|${$workflow.name}> sucessfull on <https://app-eu1.hubspot.com/contacts/3418361/record/0-3/${$(…[truncated]", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the replication of line items from a won deal to a newly created deal in HubSpot. It starts with a webhook triggered by a HubSpot workflow, retrieves the IDs of the won and new deals, fetches line items from the won deal, retrieves product SKUs, fetches product details, creates new line items for the new deal, and sends a Slack notification upon completion.

- **Demonstrate:** A sales team could use this workflow to automatically transfer line items from a closed deal to a new deal, ensuring consistency and saving time on manual entry, especially in high-volume sales environments.

- **Imitate:** 1) Import the workflow into n8n. 2) Connect your HubSpot and Slack accounts. 3) Set up a HubSpot workflow with a trigger for deal stages. 4) Configure webhook and API nodes with your HubSpot details. 5) Test with a sample deal to ensure line items are replicated correctly.

- **Practice:** Create a sample HubSpot deal and manually trigger the workflow. Verify that the line items from the closed deal are correctly added to the new deal and that you receive a Slack notification confirming the success.

- **WIIFM:** Mastering this workflow allows you to offer automated deal management services, reducing manual errors and increasing efficiency for sales teams. This can enhance client satisfaction and offer an additional revenue stream in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** hubspotAppToken, hubspotOAuth2Api, slackApi.
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
  