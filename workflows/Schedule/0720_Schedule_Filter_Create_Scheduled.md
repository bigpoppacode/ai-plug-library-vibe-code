# Schedule Filter Create Scheduled
## 🚀 What It Does
Automates a flow using googleDrive×4, manualTrigger, n8n.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On clicking 'execute'**.
2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **create new folder** `googleDrive` — resource: **folder**
5. **n8n** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of creating backups of workflow data on Google Drive. It periodically creates a new folder in Google Drive, converts workflow data into JSON files, and stores them in the newly created folder. It also checks for existing backup folders and deletes them to manage storage space efficiently.

**Demonstrate:** A business owner could use this workflow to automatically back up their workflow configurations every 4 hours. This ensures they have the latest version of their workflows, reducing the risk of data loss and enabling quick recovery if needed.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Google Drive account.
3. Set up the schedule trigger to run every 4 hours.
4. Customize the folder name and location in Google Drive.
5. Test the workflow to ensure it creates and manages backups as expected.

**Practice:** Set up a test Google Drive folder and run the workflow. Check if the workflow creates a folder, converts data to JSON, and deletes older folders. Adjust the schedule to run more frequently for testing purposes.

**WIIFM:** Mastering this workflow allows you to offer data backup services, ensuring clients' workflows are always recoverable. This adds value by enhancing data security and reliability, potentially increasing your service offerings and client trust in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** n8nApi, googleDriveOAuth2Api.

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
