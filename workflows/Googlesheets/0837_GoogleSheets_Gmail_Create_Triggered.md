# GoogleSheets Gmail Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Note2** `stickyNote` — color: "7", width: "920", height: "660"
4. **Note3** `stickyNote` — color: "7", width: "820", height: "660"
5. **Note4** `stickyNote` — color: "7", width: "760", height: "820"
6. **Sticky Note4** `stickyNote` — color: "6", width: "560", height: "660"
7. **Sticky Note** `stickyNote` — color: "6", width: "560", height: "660"
8. **Sticky Note2** `stickyNote` — color: "6", height: "540", content: "# 3. Configure storage location
## Set where to store files from the `parent folder` dropdown"
9. **Lookup in Sheets** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
10. **Search Company Folder1** `googleDrive` — resource: **fileFolder**
11. **Company Folder Exists** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Create Company Folder** `googleDrive` — resource: **folder**
13. **YYYY/MM** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
14. **Search For Folder** `googleDrive` — resource: **fileFolder**
15. **Check If Folder Exists** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Create Month Folder** `googleDrive` — resource: **folder**
17. **Gmail** `gmail` — operation: **get**
18. **Split Up Binary Data1** `function` — functionCode: "let results = [];

for (item of items) {
    for (key of Object.keys(item.binary)) {
        results.push({
            json: {
                fileName: item.binary[key].fileName
…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of organizing email attachments received via Gmail. It triggers when a new email with a specific label is received, checks a Google Sheet to verify if the sender's company is whitelisted, and then organizes the attachments into a structured folder system in Google Drive. Folders are created based on the company name and the email's date (YYYY/MM format), ensuring all files are neatly stored for easy access.

**Demonstrate:**  
A business owner could use this workflow to automatically organize invoices received via email into company-specific folders in Google Drive, saving time on manual file management and ensuring documents are easily retrievable.

**Imitate:**  
1. Set up a Gmail trigger for labeled emails.  
2. Use Google Sheets to maintain a whitelist of company emails.  
3. Configure Google Drive nodes to check for existing folders and create new ones based on company and date.  
4. Test the workflow with a sample email to ensure attachments are correctly organized.

**Practice:**  
Create a test environment with a few sample emails and a Google Sheet whitelist. Run the workflow to see how it organizes attachments. Modify the workflow to add more conditions or organize files differently.

**WIIFM:**  
Mastering this workflow enables you to offer automated document management solutions to clients, enhancing their operational efficiency and potentially increasing your service offerings and revenue as a consultant or automation service provider.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, gmailOAuth2, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  