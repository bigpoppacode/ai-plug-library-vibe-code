# Splitout Filter Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — color: "7", width: "600", height: "520"
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note1** `stickyNote` — color: "7", width: "680", height: "520"
5. **Sticky Note2** `stickyNote` — color: "7", width: "1160", height: "500"
6. **Sticky Note3** `stickyNote` — color: "7", width: "880", height: "460"
7. **Sticky Note4** `stickyNote` — width: "440", height: "1260", content: "## Try It Out!
### This n8n template reviews and audits recently active Google Drive files and reports on files with excessively open permissions. This shows how you can automate s…[truncated]"
8. **Create New Sheet** `googleSheets` — operation: **create**
9. **Get Recently Active Documents** `googleDrive` — resource: **fileFolder**
10. **Has Shared with External Users** `filter` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow automates the process of auditing Google Drive files with open permissions. It runs daily, finds recently modified documents, checks their sharing settings, and identifies files shared with external users or publicly accessible. The results are compiled into a Google Sheet, and an email report is sent to notify about these files, ensuring better data security and access control.

**Demonstrate:**  
A company could use this workflow to regularly audit their Google Drive and ensure sensitive documents aren't shared with unauthorized users, maintaining data privacy and compliance with security protocols.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect Google Sheets, Google Drive, and Gmail accounts.
3. Set the Schedule Trigger to run daily.
4. Customize Google Drive search parameters for your organization's needs.
5. Test the workflow to ensure it captures and reports on file permissions correctly.

**Practice:**  
Create a Google Drive folder with test documents. Share some files publicly and with external users. Run the workflow to see how it identifies and reports these files, ensuring the audit process works as expected.

**WIIFM:**  
Mastering this workflow allows you to offer security auditing services, helping clients maintain data integrity and compliance. This can enhance your service offerings, attract security-conscious customers, and increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2, googleDriveOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
