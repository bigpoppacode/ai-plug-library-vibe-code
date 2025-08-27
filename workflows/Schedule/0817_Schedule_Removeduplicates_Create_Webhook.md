# Schedule Removeduplicates Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "620", height: "380"
4. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "400"
5. **Sticky Note2** `stickyNote` — color: "7", width: "660", height: "400"
6. **Sticky Note3** `stickyNote` — width: "440", height: "980", content: "## Try it out
### This n8n template can monitor and detect changes to a webpage's contents and notify you only when a change occurs.

Great to keep an eye on and track publicly ava…[truncated]"
7. **Variables** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Fetch Webpage** `httpRequest` — url: `={{ $json.url }}`
9. **Extract Contents** `html` — operation: **extractHtmlContent**
10. **Markdown** `markdown` — html: "={{ $json.content.trim() }}", options: "[object Object]"
11. **Get Hash of Contents** `crypto` — value: "={{ $json.data }}", dataPropertyName: "hash"
12. **Only New Hashes** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
13. **Take a Snapshot** `googleDrive` — operation: **createFromText**
14. **Log Record** `googleSheets` — operation: **append**
15. **Notify of Change** `gmail` — sendTo: "jim@example.com", message: "=site: {{ $('Variables').first().json.url }}
date: {{ $now.toISO() }}
hash: {{ $json.hash }}
contents: {{ $json.gdrive }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow monitors changes on a webpage. It regularly fetches the page, extracts content, and creates a hash of the content. If the hash is new (indicating a change), it logs the change to Google Sheets, saves a snapshot to Google Drive, and sends a notification email.

**Demonstrate:** A business owner could use this workflow to monitor competitor websites for updates in terms of service or pricing, ensuring they stay informed of any changes that might impact their business strategy.

**Imitate:** Import the workflow into n8n, update the URL in the "Variables" node to the webpage you want to track. Ensure the HTML extraction node is configured to capture relevant content. Set up Google Sheets and Gmail credentials, then activate the workflow.

**Practice:** Create a test webpage and make periodic changes. Use the workflow to monitor this page and check if it logs changes correctly in Google Sheets and sends email notifications.

**WIIFM:** Mastering this workflow enables you to offer website monitoring services to clients, allowing them to track competitors or key information. This can enhance your service offerings, attract more clients, and potentially increase your revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googleSheetsOAuth2Api, googleDriveOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
5. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
