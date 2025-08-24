# Telegram Limit Export Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, splitInBatches, scheduleTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
4. **Step 3: Every Day (scheduleTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Create Folder with DateTime Stamp (googleDrive)** - This step performs a key action in the workflow.
6. **Step 5: Get DateTIme (set)** - This step performs a key action in the workflow.
7. **Step 6: Get Workflows (n8n)** - This step performs a key action in the workflow.
8. **Step 7: Limit to 200 (limit)** - This step performs a key action in the workflow.
9. **Step 8: Convert Workflow to JSON File (convertToFile)** - This step performs a key action in the workflow.
10. **Step 9: Save JSON File to Google Drive Folder (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: Execute Once (noOp)** - This step performs a key action in the workflow.
12. **Step 11: Search Folder Names (googleDrive)** - This step performs a key action in the workflow.
13. **Step 12: Delete Folders (googleDrive)** - This step performs a key action in the workflow.
14. **Step 13: Complete Message (telegram)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Find Folders to Delete (code)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the daily backup of your workflows to Google Drive. It creates timestamped folders, saves workflows as JSON files, deletes old backups, and sends a notification via Telegram when complete.

### Demonstrate
A business owner could use this workflow to ensure that all their automated processes are securely backed up daily, preventing data loss and simplifying recovery in case of errors or changes in workflow.

### Imitate
1. Set up a manual or scheduled trigger in n8n.
2. Create a Google Drive folder with a timestamp.
3. Retrieve and convert your workflows to JSON.
4. Save these files into the created folder.
5. Implement a function to delete folders older than seven days.
6. Send a notification via Telegram upon completion.

### Practice
Try modifying the workflow to back up a different set of files or data, such as customer records or project documents, instead of workflows. Monitor the process and ensure it operates as expected.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, ensuring they have reliable data backups. This can lead to increased trust, recurring revenue opportunities, and a competitive edge in the automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Sticky Note7" for IDs, table names, and URLs.
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
