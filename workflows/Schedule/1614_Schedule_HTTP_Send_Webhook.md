# Schedule HTTP Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Weekly Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — height: "329.860465116279", content: "Triggers the workflow once a week."
4. **Sticky Note1** `stickyNote` — height: "327.0154373927959", content: "Pulls the list of URLs to monitor from the Google Sheet. Ensure you clone the Google Sheet worksheet and update this node with its URL."
5. **Sticky Note2** `stickyNote` — height: "323.89365351629556", content: "Uses SSL-Checker.io to verify the SSL certificate of each URL. Fetches details like the host, validity period, and days remaining until expiry."
6. **Sticky Note3** `stickyNote` — height: "344.1852487135509", content: "Updates the Google Sheet with SSL details, including the expiry date and certificate status."
7. **Sticky Note4** `stickyNote` — height: "344.1852487135509", content: "Checks if any SSL certificate is set to expire in 7 days or less."
8. **Sticky Note5** `stickyNote` — height: "344.1852487135509", content: "Sends an email alert if an SSL certificate is nearing expiry, including the host and days remaining."
9. **Fetch URLs** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
10. **Check SSL** `httpRequest` — url: `=https://ssl-checker.io/api/v1/check/{{ $json["URL"].replace(/^https?:\/\//, "").replace(/\/$/, "") }}`
11. **URLs to Monitor** `googleSheets` — operation: **update**
12. **Expiry Alert** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Send Alert Email** `gmail` — sendTo: "phanineeraj@quantana.com", message: "=SSL Expiry - {{ $json.result.days_left }} Days Left - {{ $json.result.host }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of monitoring SSL certificates for a list of URLs stored in a Google Sheet. It runs weekly to check each URL's SSL certificate using SSL-Checker.io, updates the Google Sheet with the certificate details, and sends an email alert if any certificate is set to expire in 7 days or less. This ensures that the certificates are valid and prevents potential security risks due to expired certificates.

**Demonstrate:**  
A web hosting company can use this workflow to ensure all client websites have valid SSL certificates, preventing downtime or security issues and maintaining trust.

**Imitate:**  
1. Clone and import the workflow in n8n.  
2. Connect your Google Sheets and Gmail accounts.  
3. Update the Google Sheet URL in the workflow.  
4. Schedule the workflow to run weekly.  
5. Test with a few URLs to ensure alerts are sent correctly.

**Practice:**  
Create a Google Sheet with sample URLs. Run the workflow and verify that it updates SSL details and sends alerts for certificates expiring soon. Adjust the sheet to simulate different expiry scenarios.

**WIIFM:**  
Mastering this workflow allows you to offer SSL monitoring services to clients, enhancing their website security. This adds value to your automation services, potentially increasing customer satisfaction and business revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2.
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
