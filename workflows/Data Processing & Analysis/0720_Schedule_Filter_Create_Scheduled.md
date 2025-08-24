# Schedule Filter Create Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, n8n, splitInBatches.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: n8n (n8n)** - This step performs a key action in the workflow.
4. **Step 3: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
5. **Step 4: create new folder (googleDrive)** - This step performs a key action in the workflow.
6. **Step 5: Convert to File (convertToFile)** - This step performs a key action in the workflow.
7. **Step 6: Google Drive (googleDrive)** - This step performs a key action in the workflow.
8. **Step 7: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Filter (filter)** - This step performs a key action in the workflow.
10. **Step 9: delete folder (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: Get folders (googleDrive)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of creating backups in Google Drive. When executed, it creates a new folder, loops through items, converts them to files, and saves them in the new folder. It also schedules regular backups and cleans up old folders.

### Demonstrate
A business owner might use this workflow to ensure their important documents are backed up regularly without manual intervention. For example, a digital agency can automate the backup of client files every four hours to prevent data loss.

### Imitate
1. Set up a manual trigger in n8n.
2. Add a Google Drive node to create a new folder with a timestamp.
3. Use the splitInBatches node to loop through items that need to be backed up.
4. Convert items to files and save them in the new Google Drive folder.
5. Schedule the workflow to run every four hours.
6. Implement a filter to delete old folders after processing.

### Practice
Try modifying the workflow to back up a different type of file (e.g., images or documents). Change the folder structure or naming convention to see how it affects the organization in Google Drive.

### WIIFM
Mastering this workflow allows you to automate critical backup processes, saving time and reducing the risk of data loss. This skill can attract clients who need reliable data management, enhancing your value as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Get folders" for IDs, table names, and URLs.
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
