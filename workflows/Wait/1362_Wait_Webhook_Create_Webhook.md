# Wait Webhook Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Detect new lead in Google Sheets**.
2. **Sticky Note** `stickyNote` — width: "1260", height: "320", content: "# Outbound lead qualification call workflow"
3. **Sticky Note4** `stickyNote` — color: "5", width: "1260", height: "320"
4. **Sticky Note2** `stickyNote` — color: "4", width: "1400", height: "1100"
5. **Detect new lead in Google Sheets** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
6. **Receive inbound call from RetellAI (webhook)** `webhook` — method: **POST**, path: `/ebd11c9b-129c-4b59-8c27-9a4b567305f7`
7. **Receive post-call data from RetellAI (webhook)** `webhook` — method: **POST**, path: `/f8878b78-43ea-4caa-b16c-cde9aaf2e9b1`
8. **Sticky Note1** `stickyNote` — width: "1260", height: "400", content: "# ✅ General Workflow Explanation
##  This workflow automates outbound and inbound lead calls with RetellAI, Google Sheets, OpenAI, and Gmail. It handles:

Scheduling and reminding …[truncated]"
9. **Send SMS reminder to call lead in 5 minutes** `twilio` — resource: **call**
10. **Check if phone number exists in Google Sheets** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
11. **Filter for analyzed calls only** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **Wait 5 minutes before making call** `wait` — unit: "minutes", amount: "1"
13. **Send response to inbound webhook call** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
  "call_inbound": {
    "dynamic_variables": {
        "name": "{{ $json.Name }}"
    }
  }
}"
14. **Check if call was outbound** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Call new lead using RetellAI** `httpRequest` — method: **POST**, url: `https://api.retellai.com/v2/create-phone-call`
16. **Update lead record in Google Sheets** `googleSheets` — operation: **update**
17. **Generate call summary with OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
18. **Send call summary email** `gmail` — sendTo: "youremail@gmail.com", message: "=Name:
{{ $json.body.call.call_analysis.custom_analysis_data.first_name }}

Number:
{{ $json.body.call.call_analysis.custom_analysis_data.phone_number }}

Qualification:
{{ $json.b…[truncated]", options: "[object Object]"
19. **Send confirmation email to lead** `gmail` — sendTo: "youremail@gmail.com", message: "=New roofing appointment:

Client Name:
{{ $('Check if call was outbound').item.json.body.call.call_analysis.custom_analysis_data.first_name }}

Client Number:
{{ $('Check if call …[truncated]", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of managing outbound and inbound lead calls using RetellAI, Google Sheets, OpenAI, and Gmail. It detects new leads from Google Sheets, sends SMS reminders for calls, places calls using RetellAI, updates lead records, and sends call summaries via email. It ensures seamless scheduling, call handling, and post-call updates, enhancing lead qualification efficiency.

**Demonstrate:**  
A sales team could use this workflow to automate lead follow-up calls, ensuring timely communication and record-keeping, ultimately improving sales conversion rates.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Google Sheets, RetellAI, Twilio, OpenAI, and Gmail accounts.  
3. Customize the Google Sheets structure and webhook URLs.  
4. Test the workflow by adding a new lead to Google Sheets and observing the automated process.

**Practice:**  
Create a test Google Sheet with lead data, run the workflow, and verify that SMS reminders are sent, calls are made, and summaries are received via email. Modify lead data to explore different workflow paths.

**WIIFM:**  
Mastering this workflow allows you to offer automated lead management services, enhancing client marketing efforts. This can lead to increased sales, improved client satisfaction, and opportunities for monetizing your AI automation expertise.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsTriggerOAuth2Api, twilioApi, googleSheetsOAuth2Api, gmailOAuth2, openAiApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
