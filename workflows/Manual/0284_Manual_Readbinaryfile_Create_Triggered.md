# Manual Readbinaryfile Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Read From File** `readBinaryFile` — filePath: "/home/node/.n8n/concerts-2023.csv"
4. **Convert To Spreadsheet** `spreadsheetFile` — options: "[object Object]"
5. **Insert into MySQL** `mySql` — table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of reading data from a CSV file called "concerts-2023.csv," converting it into a spreadsheet format, and then inserting the data into a MySQL database table named "concerts_2023_csv." It starts with a manual trigger, reads the file, processes the data, and finally stores it in a structured database format for easy access and analysis.

### Demonstrate
A record label could use this workflow to import concert schedules from a CSV file into their database, ensuring all concert details are easily accessible for planning and reporting purposes.

### Imitate
1. Import the workflow into n8n.
2. Connect your MySQL database credentials.
3. Place your CSV file at the specified file path.
4. Adjust the table name and columns in the MySQL node to match your database schema.
5. Execute the workflow to test the data import.

### Practice
Create a CSV file with sample concert data. Run the workflow to see how it imports the data into a MySQL database. Modify some data in the CSV and rerun the workflow to observe changes in the database.

### WIIFM
Mastering this workflow enables you to automate data imports, reducing manual entry errors and saving time. This skill can enhance your service offerings, allowing you to manage data efficiently for clients, potentially increasing your income in an AI automation business.
  
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
  