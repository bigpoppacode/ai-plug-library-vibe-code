# GoogleSlides Extractfromfile Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **New Leads Arrived**.
  2. **New Leads Arrived** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "4", width: "960", height: "340"
4. **Sticky Note1** `stickyNote` — color: "4", width: "1300", height: "520"
5. **File Type?** `switch` — rules: "[object Object]", options: "[object Object]"
6. **Download by ID** `googleDrive` — operation: **download**
7. **Extract Information from CSV file** `extractFromFile` — options: "[object Object]"
8. **Create new Sheet** `googleSheets` — resource: **spreadsheet**
9. **Combine Empty New Document with CSV Data** `merge` — mode: "chooseBranch", useDataOfInput: "2"
10. **Merge Data for new Lead Document** `googleSheets` — operation: **append**
11. **Get all Leads** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
12. **MoveToLeadListFolder** `googleDrive` — operation: **move**
13. **Copy Presentation Template** `googleDrive` — operation: **copy**
14. **Create Custom Presentation** `googleSlides` — operation: **replaceText**
15. **Add Presentation ID to Lead List** `googleSheets` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the creation of custom presentations for new leads. When a new file is created in a specific Google Drive folder, the workflow checks if it's a CSV file. It then downloads the file, extracts the data, and creates a new Google Sheet with this information. A presentation template is copied, and the extracted data is used to customize the presentation. Finally, the presentation ID is added to the lead list for tracking.

**Demonstrate**  
A sales consultant could use this workflow to automate the creation of personalized sales presentations for each new lead, saving time and ensuring consistency.

**Imitate**  
1. Set up a Google Drive folder to watch for new files.
2. Import the workflow into n8n.
3. Connect your Google account to n8n.
4. Customize the template and Google Sheet settings to fit your lead data.
5. Test the workflow with a sample CSV file.

**Practice**  
Create a small CSV file with lead data and place it in the designated Google Drive folder. Run the workflow and check if a new customized presentation is created and logged in your Google Sheet.

**WIIFM**  
Mastering this workflow enables you to offer automated presentation creation as a service to businesses, increasing efficiency and appeal in sales processes. This can lead to higher client satisfaction and potential revenue growth in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, googleSheetsOAuth2Api, googleSlidesOAuth2Api.
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
  