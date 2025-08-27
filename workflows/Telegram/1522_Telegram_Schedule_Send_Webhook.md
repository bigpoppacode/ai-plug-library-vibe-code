# Telegram Schedule Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Weekly Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note2** `stickyNote` — color: "6", width: "220", height: "424"
4. **Sticky Note3** `stickyNote` — color: "6", width: "460", height: "240"
5. **Sticky Note4** `stickyNote` — color: "6", width: "200", height: "424"
6. **Sticky Note5** `stickyNote` — color: "3", width: "280", height: "204"
7. **Sticky Note10** `stickyNote` — color: "6", width: "260", height: "424"
8. **Sticky Note11** `stickyNote` — color: "7", width: "260", height: "424"
9. **Sticky Note8** `stickyNote` — color: "4", width: "170", height: "204"
10. **Sticky Note** `stickyNote` — width: "170", height: "204", content: "Warning
"
11. **Sticky Note7** `stickyNote` — color: "4", width: "280", height: "204"
12. **Sticky Note6** `stickyNote` — color: "7", width: "1000", height: "720"
13. **Fetch URLs** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
14. **Check SSL** `httpRequest` — url: `=https://ssl-checker.io/api/v1/check/{{ $json["URL"].replace(/^https?:\/\//, "").replace(/\/$/, "") }}`
15. **URLs to Monitor** `googleSheets` — operation: **appendOrUpdate**
16. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Send Alert Email4** `gmail` — message: "=WARNING: SSL Expiry within one month - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", options: "[object Object]", subject: "=URGENT: SSL-certificate invalid, action required! - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}"
18. **Telegram** `telegram` — text: "=URGENT: SSL-certificate invalid, action required! - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", additionalFields: "[object Object]"
19. **Send Alert Email2** `gmail` — message: "=WARNING: SSL Expiry within one month - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", options: "[object Object]", subject: "=WARNING: SSL Expiry within one month - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}"
20. **Send Alert Email1** `gmail` — message: "=SSL Expiry - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", options: "[object Object]", subject: "=INFO: SSL Expiry - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}"
21. **Send Alert Email6** `gmail` — message: "=INFO: SSL Expiry check completed, took no further actions - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", options: "[object Object]", subject: "=INFO: SSL Expiry check completed, took no further actions - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}"
22. **Ntfy4** `Ntfy` — channel/topic: `n8n`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates SSL certificate monitoring for various websites. It runs weekly, fetching URLs from a Google Sheet, then checks their SSL certificates using SSL-Checker.io. Depending on the certificate status (invalid, expiring soon, or valid), it updates the Google Sheet and sends alert emails or Telegram messages, ensuring timely action to prevent SSL expiry issues.

**Demonstrate:**  
A web hosting company could use this workflow to monitor client websites' SSL certificates, ensuring they renew them before expiry, thus avoiding security risks and downtime.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and Gmail accounts.
3. Set up a Google Sheet with a list of URLs to monitor.
4. Customize email alerts and Telegram settings.
5. Test the workflow to ensure it updates and alerts correctly.

**Practice:**  
Set up a test Google Sheet with a few website URLs. Run the workflow and observe how it checks SSL statuses and updates the sheet. Modify some URLs to see how the workflow responds to different SSL statuses.

**WIIFM:**  
Mastering this workflow can help you offer SSL monitoring services to businesses, ensuring their websites remain secure and compliant. This can enhance your service offerings, attract more clients, and generate additional income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2, telegramApi.
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
