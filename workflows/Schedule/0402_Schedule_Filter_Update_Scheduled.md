# Schedule Filter Update Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — width: "922.8914139860617", height: "1171.2381808131183", content: "# Node Descriptions

## Retrieve Customer Messages Data (Google Sheets Node ):
**Purpose and Use Cases:**
The primary purpose of this node is to retrieve data from a Google Sheets …[truncated]"
3. **Sticky Note1** `stickyNote` — width: "1386.7301333853884", height: "539.317352764935", content: "# The Workflow"
4. **Sticky Note2** `stickyNote` — color: "7", width: "2358.9018586668417", height: "1194.0044652590357"
5. **Sticky Note3** `stickyNote` — width: "342.9710297084147", height: "601.2740375761717", content: "## Copy this template to get started :
- [Google Sheets](https://docs.google.com/spreadsheets/d/1efCCzfeUX0AETz2wsULQN90OBCOKK-gBoDaptzcBHdE/edit?usp=sharing)

## Workflow Nodes Do…[truncated]"
6. **Sticky Note4** `stickyNote` — width: "1024.157503378047", height: "602.8437691253422", content: "## Workflow Overview:

The workflow begins with the "Google Sheets Trigger" node, which monitors a specified Google Sheet for new row additions. Upon detection of a new row, the wo…[truncated]"
7. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
8. **Retrieve Customer Messages Data** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
9. **Filter Status (Waiting for sending)** `filter` — options: "[object Object]", conditions: "[object Object]"
10. **Send a message (Gmail)** `gmail` — sendTo: "={{ $json.Email }}", message: "={{ $json.Subject }}", options: "[object Object]"
11. **Merge fields** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
12. **Set data** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
13. **Update Message Status** `googleSheets` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates sending emails from a Google Sheet. It starts by retrieving data from a Google Sheet, filters rows based on specific criteria (like "Waiting for sending" status and today's date), and sends emails via Gmail using the filtered data. The workflow then updates the Google Sheet to mark the emails as sent, ensuring the process is tracked and managed efficiently.

**Demonstrate**  
A business owner could use this workflow to automate email communication with customers about new offers or updates, saving time and ensuring timely delivery without manual intervention.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and Gmail accounts.
3. Set up a schedule to trigger the workflow.
4. Customize the Google Sheet with columns for Email, Subject, etc.
5. Run the workflow to test email sending and sheet update.

**Practice**  
Create a test Google Sheet with sample customer data and run the workflow. Observe how the emails are sent and the sheet updates. Modify the data and re-run to see how changes affect the workflow.

**WIIFM**  
Mastering this workflow allows you to offer automated email marketing services to clients, enhancing their customer engagement and communication efforts. This can increase your business offerings and provide a steady income stream by reducing manual tasks for businesses.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2.
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
