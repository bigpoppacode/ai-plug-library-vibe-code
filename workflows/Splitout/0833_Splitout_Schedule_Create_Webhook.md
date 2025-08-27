# Splitout Schedule Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Sticky Note** `stickyNote` — color: "7", width: "440", content: "## 1. Get Subscribers from Excel
[Learn more about the Excel node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftexcel)

Excel can be an easy way to st…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "620", height: "220"
6. **Sticky Note2** `stickyNote` — color: "7", width: "580", height: "180"
7. **Sticky Note3** `stickyNote` — color: "7", width: "580", height: "200"
8. **Sticky Note4** `stickyNote` — color: "7", width: "580", height: "200"
9. **Sticky Note5** `stickyNote` — color: "5", width: "200", height: "120"
10. **Sticky Note6** `stickyNote` — color: "5", width: "280", height: "120"
11. **Sticky Note7** `stickyNote` — width: "500", height: "1000", content: "## Try It Out!
### This n8n template builds a newsletter ("daily digest") delivery service which pulls and summarises the latest n8n.io template in select categories defined by sub…[truncated]"
12. **Get Subscribers** `microsoftExcel` — resource: **worksheet**, operation: **readRows**
13. **Parse Rows** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Get Unique Categories** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Categories to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "categories"
16. **Fetch Latest 10 per Category** `httpRequest` — url: `=https://n8n.io/api/product-api/workflows/search`
17. **Append Category** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the delivery of a daily newsletter that summarizes the latest n8n.io templates in selected categories. It pulls subscriber information from an Excel sheet, fetches the latest templates using an API, summarizes them using AI, and sends the digest via email using Outlook.

**Demonstrate:**  
A business owner could use this workflow to keep their team updated on the latest automation templates relevant to their field, enhancing their ability to implement new solutions quickly and effectively.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Microsoft Excel and Outlook accounts.  
3. Set up the Excel sheet with subscriber details and categories.  
4. Schedule the workflow to run daily.  
5. Test to ensure emails are sent correctly.

**Practice:**  
Create a simple Excel sheet with a few email addresses and categories. Run the workflow and check how the summaries are generated and delivered. Experiment with different categories to see the changes in the newsletter content.

**WIIFM:**  
Mastering this workflow enables you to offer a valuable service to clients by automating information dissemination, improving client engagement, and potentially increasing your income through upselling automation services as part of an AI-driven business.

## 🔧 Setup Instructions
1. **Connect Credentials:** microsoftExcelOAuth2Api, openAiApi, microsoftOutlookOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
