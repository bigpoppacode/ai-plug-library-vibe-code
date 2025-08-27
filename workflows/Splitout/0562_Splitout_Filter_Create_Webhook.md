# Splitout Filter Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Sticky Note** `stickyNote` — height: "440", content: "## Setup
1. Setup your **Gmail** and **Google Drive** credentials
1. Create a free account at https://pdflayer.com/
2. Insert your **pdflayer** API key into the `Setup` node
3. Ins…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "7", width: "608.5129596994967", height: "306.2353014680544"
5. **Setup** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
6. **Only n8n Paddle invoice mails** `if` — options: "[object Object]", conditions: "[object Object]"
7. **Extract "a-tags" from email** `html` — operation: **extractHtmlContent**
8. **Do nothing on other emails** `noOp` — configured for its default action.
9. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "link"
10. **Only keep invoice link** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Download Invoice PDF from URL** `httpRequest` — url: `http://api.pdflayer.com/api/convert`
12. **Upload PDF to Drive** `httpRequest` — method: **POST**, url: `https://www.googleapis.com/upload/drive/v3/files`
13. **Rename file** `googleDrive` — operation: **update**
14. **Move to the correct folder** `googleDrive` — operation: **move**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of downloading and storing invoices from Paddle emails. It starts by monitoring a Gmail account for emails from Paddle containing "Your invoice" in the subject. Once identified, it extracts the invoice link from the email, downloads the invoice as a PDF using the pdflayer API, and uploads it to Google Drive. Finally, the PDF is renamed and moved to a specified folder in Google Drive.

**Demonstrate:** A business owner can use this workflow to automate the retrieval and organization of invoices received via email, ensuring they are stored systematically in Google Drive for easy access and record-keeping.

**Imitate:** To apply this workflow, set up Gmail and Google Drive credentials in n8n. Obtain an API key from pdflayer, then configure the workflow to monitor your email for invoices. Customize the Google Drive folder destination, and test the workflow to ensure invoices are correctly processed and stored.

**Practice:** Create a test Gmail account and send yourself mock Paddle invoices. Set up the workflow to process these emails and verify that the invoices are correctly downloaded and stored in Google Drive. Adjust the workflow to handle different email formats or storage locations.

**WIIFM:** Mastering this workflow allows you to offer automated invoice processing services to businesses, reducing their manual workload and ensuring accurate record-keeping. This service can enhance your automation business, attracting clients who need efficient financial document management solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googleDriveOAuth2Api.
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
