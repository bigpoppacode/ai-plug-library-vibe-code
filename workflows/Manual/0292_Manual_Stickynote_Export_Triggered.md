# Manual Stickynote Export Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "450", height: "305", content: "## Save SQL table as a binary XLSX file
### You can send it via e-mail, upload to the file storage or download on your computer.
### Just connect one or two extra n8n Nodes here!"
4. **TableName** `set` — values: "[object Object]", options: "[object Object]"
5. **LoadMySQLData** `mySql` — operation: **executeQuery**
6. **SaveSpreadsheet** `spreadsheetFile` — operation: **toFile**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves data from a specified SQL table and converts it into an XLSX file. It starts with a manual trigger, sets the table name, executes a query to load data from a MySQL database, and then saves the data as a spreadsheet file. This allows for easy sharing or storage of database contents in a common file format.

### Demonstrate
A business owner could use this workflow to export sales data from a MySQL database into an Excel file for monthly reporting. This automates the process of data extraction and saves time on manual data handling.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up your MySQL credentials and ensure access.
3. Modify the "TableName" node to match your desired SQL table.
4. Run the workflow to execute the query and save the data as an XLSX file.
5. Connect additional nodes if you want to email or upload the file.

### Practice
Create a sample SQL table with mock data, then use this workflow to export it as an XLSX file. Experiment by changing table names and running the workflow to see how it handles different datasets.

### WIIFM
Mastering this workflow enables you to offer database-to-spreadsheet services, streamlining data reporting for clients. This can enhance your service offerings, leading to more business opportunities and increased income in AI automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mySql.
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
  