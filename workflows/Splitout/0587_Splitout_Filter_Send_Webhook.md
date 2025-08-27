# Splitout Filter Send Webhook
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
**Explain**  
This n8n workflow automates the process of drafting email replies for Fastmail using OpenAI's GPT-4. It starts by monitoring an IMAP inbox for new emails, extracting details like the sender, subject, and body. These details are sent to OpenAI, which generates a draft response. The workflow then connects to Fastmail's API to retrieve session details and mailbox IDs, identifies the "Drafts" folder, prepares the draft with the AI-generated response, and uploads it to the Fastmail drafts folder.

**Demonstrate**  
A busy consultant could use this workflow to handle client emails efficiently, ensuring timely and personalized responses without manual drafting. This saves time and maintains client communication quality.

**Imitate**  
1. Configure your IMAP email account in n8n.  
2. Set up Fastmail API credentials and OpenAI API key.  
3. Import the workflow into n8n.  
4. Adjust the workflow to match your email handling needs.  
5. Test the workflow to confirm drafts are correctly uploaded.

**Practice**  
Create a test email account and send a few test emails. Use the workflow to generate responses and check the drafts in your Fastmail account. Experiment with different email contents to see how the AI drafts vary.

**WIIFM**  
Mastering this workflow allows you to offer automated email response services, enhancing client communication and saving time. This can boost client satisfaction, leading to increased retention and potential upselling opportunities in your automation business.

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
