# GoogleSlides Extractfromfile Create Triggered

## 🚀 What It Does
This workflow automates a process involving googleDrive, googleSheets, googleDriveTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **New Leads Arrived** node.
2. **Step 1: Download by ID (googleDrive)** - This step performs a key action in the workflow.
3. **Step 2: MoveToLeadListFolder (googleDrive)** - This step performs a key action in the workflow.
4. **Step 3: Add Presentation ID to Lead List (googleSheets)** - This step performs a key action in the workflow.
5. **Step 4: Get all Leads (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: Create new Sheet (googleSheets)** - This step performs a key action in the workflow.
7. **Step 6: Merge Data for new Lead Document (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: New Leads Arrived (googleDriveTrigger)** - This step performs a key action in the workflow.
9. **Step 8: File Type? (switch)** - This step performs a key action in the workflow.
10. **Step 9: Combine Empty New Document with CSV Data (merge)** - This step performs a key action in the workflow.
11. **Step 10: Create Custom Presentation (googleSlides)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Extract Information from CSV file (extractFromFile)** - This step performs a key action in the workflow.
15. **Step 14: Copy Presentation Template (googleDrive)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of customized presentations for new leads. It triggers when a new lead file is added to Google Drive, processes that file, extracts relevant data, updates a Google Sheet, and generates a personalized Google Slides presentation.

### Demonstrate
A business owner receiving multiple leads daily can use this workflow to automate the creation of tailored presentations, saving time and ensuring consistency in outreach, which enhances client engagement and accelerates the sales process.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Sheets accounts.
3. Configure the trigger to watch a specific folder for new lead files.
4. Adjust the data mapping for your specific lead data structure.
5. Test the workflow by adding a new lead file.

### Practice
Experiment by modifying the presentation template used in the workflow. Change the text placeholders to include additional lead information, and observe how the workflow generates different presentations based on the lead data.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, streamline their sales processes, and create consistent branding, ultimately leading to increased customer satisfaction and potential revenue growth for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Download by ID" and "Copy Presentation Template" for IDs, table names, and URLs.
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
