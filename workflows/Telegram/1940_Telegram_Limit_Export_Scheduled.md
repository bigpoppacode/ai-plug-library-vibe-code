# Telegram Limit Export Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×8, googleDrive×4, manualTrigger.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On clicking 'execute'**.
2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Every Day** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "5", width: "800", height: "360"
5. **Sticky Note1** `stickyNote` — color: "3", width: "980", height: "300"
6. **Sticky Note2** `stickyNote` — width: "340", height: "260", content: "## Notify User via Telegram"
7. **Sticky Note3** `stickyNote` — width: "260", height: "340", content: "## Limit for Debugging
Remove this once you have it up and running"
8. **Sticky Note4** `stickyNote` — width: "260", height: "340", content: "## Get All Workflows
"
9. **Sticky Note5** `stickyNote` — width: "260", height: "340", content: "## Create NEW Google Folder
"
10. **Sticky Note6** `stickyNote` — width: "260", height: "340", content: "## Get DateTime Stamp
"
11. **Sticky Note7** `stickyNote` — color: "7", width: "700", height: "1480"
12. **Get DateTIme** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Create Folder with DateTime Stamp** `googleDrive` — resource: **folder**
14. **Get Workflows** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
15. **Limit to 200** `limit` — maxItems: "200"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the daily backup of your n8n workflows to Google Drive. It creates a new folder with a timestamp, retrieves all workflows, converts them to JSON files, and saves them in the created folder. Additionally, it manages storage by retaining only the most recent seven days of backups and notifies you via Telegram once the backup is complete.

- **Demonstrate:** A business owner might use this workflow to ensure their workflow automations are securely backed up and organized, protecting against data loss and minimizing manual backup tasks.

- **Imitate:** Import the workflow into n8n, connect your Google Drive and Telegram accounts, set up the triggers and nodes as described, and customize folder names and retention policies as needed. Test to verify backups and notifications.

- **Practice:** Create a test Google Drive folder and run the workflow. Verify that the workflows are backed up correctly and that old folders are deleted. Modify retention settings to see different outcomes.

- **WIIFM:** Mastering this workflow allows you to offer automated backup solutions to clients, enhancing their data security and operational efficiency. This skill can increase your service offerings, helping you attract and retain clients in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, n8nApi, telegramApi.

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
