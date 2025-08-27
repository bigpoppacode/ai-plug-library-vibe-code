# Splitout Filter Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Email Trigger (IMAP)** `emailReadImap` — options: "[object Object]", postProcessAction: "nothing", downloadAttachments: "true"
3. **Sticky Note** `stickyNote` — width: "493.9330818092735", height: "695.2489786026621", content: "## Workflow Description:
This n8n workflow automates the drafting of email replies for Fastmail using OpenAI's GPT-4 model. Here’s the overall process:

1. **Email Monitoring**: Th…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "3", width: "722.928660826031", height: "285.5319148936168"
5. **Get fields from source email** `set` — options: "[object Object]", assignments: "[object Object]"
6. **OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
7. **Session** `httpRequest` — url: `https://api.fastmail.com/jmap/session`
8. **Get Mailbox IDs** `httpRequest` — method: **POST**, url: `https://api.fastmail.com/jmap/api/`
9. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "methodResponses[0][1].list"
10. **Filter for drafts folder** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **gather data for draft email** `set` — options: "[object Object]", assignments: "[object Object]"
12. **upload draft email** `httpRequest` — method: **POST**, url: `https://api.fastmail.com/jmap/api/`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email reply drafting for Fastmail using OpenAI's GPT-4 model. It monitors an IMAP inbox for new emails, extracts relevant details, and uses OpenAI to draft a personalized response. The draft email is then uploaded to Fastmail's "Drafts" folder for review.

### Demonstrate
A business owner could use this workflow to streamline customer service by automating email responses, saving time on drafting replies, and ensuring consistent communication.

### Imitate
1. Import the workflow into n8n.
2. Set up IMAP and Fastmail API credentials.
3. Configure the OpenAI API key.
4. Customize email extraction and draft settings as needed.
5. Activate the workflow to start automating email drafts.

### Practice
Create a test email account and send a few test emails. Run the workflow to see how it drafts responses using OpenAI. Adjust the AI prompt and email settings to better suit your communication style.

### WIIFM
Mastering this workflow can enhance your service offerings by automating email communication, which improves response times and customer satisfaction. It can be a valuable service for businesses looking to optimize their customer support processes, leading to potential revenue growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, imap, openAiApi.
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
