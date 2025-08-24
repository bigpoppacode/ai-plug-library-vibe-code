# Code Manual Create Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, code, executeWorkflowTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Set parameters for next run (code)** - This step performs a key action in the workflow.
4. **Step 3: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Dummy input data (set)** - This step performs a key action in the workflow.
6. **Step 5: Split the desired path (code)** - This step performs a key action in the workflow.
7. **Step 6: Create desired path (code)** - This step performs a key action in the workflow.
8. **Step 7: Check if top folder exists (googleDrive)** - This step performs a key action in the workflow.
9. **Step 8: If top folder doesn't exist (if)** - This step performs a key action in the workflow.
10. **Step 9: Create new subfolder (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: If path has been completely created (if)** - This step performs a key action in the workflow.
12. **Step 11: Return the ID of the last folder (set)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of nested folders in Google Drive based on a provided path. When triggered, it checks if the top-level folder exists, creates it if necessary, and continues creating subfolders until the entire path is established, returning the final folder ID.

### Demonstrate
A business owner can use this workflow to organize project files automatically. For instance, when starting a new project, the workflow can create a structured folder hierarchy like "2024/Projects/ClientName/Reports" in Google Drive, ensuring all team members have a predefined structure for document storage.

### Imitate
1. Import the workflow into n8n.
2. Set a manual trigger to start the workflow.
3. Create a new "Set" node for inputting the desired folder path (e.g., "Projects/Client/Files").
4. Add a "Google Drive" node to check if the top folder exists.
5. Use "If" nodes to create missing folders from the path iteratively.
6. Finally, return the ID of the last created folder.

### Practice
Try modifying the workflow to create a different folder structure, such as "2024/Invoices/ClientName". Test it by running the workflow and checking Google Drive to see if the new structure has been created correctly.

### WIIFM
Mastering this workflow can help you offer automation services to clients, saving them time and improving organization. By creating value through enhanced efficiency and structure, you can attract more customers and increase your income as a consultant or developer in workflow automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note4" for IDs, table names, and URLs.
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
