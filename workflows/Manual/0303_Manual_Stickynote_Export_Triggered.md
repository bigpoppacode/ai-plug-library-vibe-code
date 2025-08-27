# Manual Stickynote Export Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "682", height: "280", content: "## Save SQL table as a CSV file
### You can send it via e-mail, upload to the file storage or download on your computer.
### Just connect one or two extra n8n Nodes here!"
4. **TableName** `set` — values: "[object Object]", options: "[object Object]"
5. **LoadMSSQLData** `microsoftSql` — operation: **executeQuery**
6. **SaveCSV** `spreadsheetFile` — operation: **toFile**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow connects to a Microsoft SQL database to retrieve data from a specified table and then saves this data as a CSV file. The process is triggered manually, making it easy to export SQL table data for further use, such as sharing via email or storing in a file system.

### Demonstrate
A business owner might use this workflow to regularly export sales data from an SQL database into a CSV format for reporting purposes, allowing easy distribution to stakeholders or further analysis in spreadsheet software.

### Imitate
1. Import the workflow into n8n.
2. Connect your Microsoft SQL credentials.
3. Set the `TableName` node to your desired SQL table.
4. Trigger the workflow manually to test the data extraction.
5. Customize the CSV file's destination or add additional nodes for further actions.

### Practice
Create a sample SQL table with dummy data. Use this workflow to export the table to a CSV file. Modify the table structure or data and observe how changes are reflected in the CSV output. Experiment with different file storage or email nodes.

### WIIFM
Mastering this workflow enables you to efficiently handle data extraction and conversion tasks, making you valuable to businesses needing regular database exports. This skill can help you offer data management services, enhancing your service portfolio and potentially increasing your revenue stream.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** microsoftSql.
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
  