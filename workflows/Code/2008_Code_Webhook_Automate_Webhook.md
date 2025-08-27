# Code Webhook Automate Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note2**.
  2. **Webhook** `webhook` — path: `/time-track`
3. **Sticky Note** `stickyNote` — width: "1120", height: "180", content: "## Check if the Worksheet Exists"
4. **Sticky Note1** `stickyNote` — width: "600", height: "280", content: "## Log Check-In or Check-Out"
5. **Sticky Note2** `stickyNote` — color: "3", width: "380", height: "640"
6. **Google Drive** `googleDrive` — resource: **fileFolder**
7. **Return if Null** `code` — jsCode: "return [{json: {empty: items.length == 1 && Object.keys(items[0].json).length == 0}}];"
8. **Doesn't exist?** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Create Worksheet** `googleSheets` — resource: **spreadsheet**
10. **Set Logging Details** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "Date": "{{ $now.format('yyyy-MM-dd') }}",
  "Time": "{{ $now.format('hh:mm') }}",
  "Direction":"Check-In"
}
"
11. **Create Log** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates time tracking using location triggers. When you enter or exit a location, your device sends a signal via a webhook to check if a Google Sheet for logging exists. If not, it creates one. It then logs the check-in or check-out time and direction (e.g., in or out) in the sheet, providing an automatic and accurate record of work hours.

### Demonstrate
A business owner could use this workflow to automate employee attendance tracking, reducing manual errors and ensuring accurate payroll calculations. It provides a seamless way to verify when employees start and finish their workday based on their location.

### Imitate
1. Import the workflow into n8n.
2. Set up webhooks on your device to trigger on location changes.
3. Connect your Google Drive and Google Sheets accounts.
4. Customize the Google Sheet details (e.g., name, columns).
5. Test by simulating location changes to see if logs are correctly created.

### Practice
Create a test Google Sheet and simulate entering and exiting a location using your device to trigger the webhook. Check if the times and directions are logged accurately. Adjust any settings in n8n if needed to ensure smooth operation.

### WIIFM
Mastering this workflow can help you offer automated time tracking solutions to businesses, enhancing their operational efficiency. This can lead to improved client satisfaction, enabling you to expand your service offerings and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  