# Slack Manual Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, function, cron.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Current date (function)** - This step performs a key action in the workflow.
4. **Step 3: Every 23:45 (cron)** - This step performs a key action in the workflow.
5. **Step 4: Get Year folder (googleDrive)** - This step performs a key action in the workflow.
6. **Step 5: Get Month folder (googleDrive)** - This step performs a key action in the workflow.
7. **Step 6: Orlen Invoice (gmail)** - This step performs a key action in the workflow.
8. **Step 7: Upload Invoice to Google Drive (googleDrive)** - This step performs a key action in the workflow.
9. **Step 8: Mark as Read (gmail)** - This step performs a key action in the workflow.
10. **Step 9: Merge (merge)** - This step performs a key action in the workflow.
11. **Step 10: Slack (slack)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing Orlen invoices. It triggers manually or at a scheduled time, retrieves the current date, finds the appropriate Google Drive folders for the year and month, fetches unread invoices from Gmail, uploads them to Google Drive, marks them as read, and sends a notification via Slack.

### Demonstrate
A business owner could use this workflow to automatically manage invoice processing. For example, every day at 11:45 PM, the workflow retrieves any unread invoices from Orlen, organizes them by month in Google Drive, and notifies the team in Slack, saving time and reducing manual errors.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** or **Cron Trigger** for scheduled execution.
3. Insert a **Function Node** to get the current date.
4. Use two **Google Drive Nodes** to find the year and month folders.
5. Add a **Gmail Node** to fetch unread invoices.
6. Use another **Google Drive Node** to upload the invoices.
7. Add a **Gmail Node** to mark invoices as read.
8. Insert a **Slack Node** to notify the team.
9. Test the workflow and adjust any settings as necessary.

### Practice
Try running the workflow manually to see how it processes an Orlen invoice. Modify the email query to fetch a different sender or type of attachment, then observe how the workflow adapts. This will help reinforce understanding of how each node operates.

### WIIFM
Mastering this workflow allows you to automate repetitive tasks in your business, saving time and reducing errors. This skill can be monetized, enabling you to offer automation services to clients, enhance operational efficiency, and create scalable solutions that generate income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Slack" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
