# Readbinaryfiles Filter Import Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Read Binary Files** `readBinaryFiles` — fileSelector: "=./.n8n/*.csv"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of importing multiple CSV files into Google Sheets. It starts manually, reads CSV files from a specified directory, processes each file one by one, removes duplicate entries based on user names, filters out unsubscribed users, sorts the remaining entries by subscription date, and finally uploads the cleaned and sorted data to a Google Sheet.

### Demonstrate
A business owner could use this workflow to regularly update their customer list in Google Sheets with the latest data from CSV files, ensuring that only unique, active subscribers are included. This helps maintain an organized and up-to-date customer database for marketing and communications.

### Imitate
1. Import the workflow into n8n.
2. Set the file path to your CSV directory.
3. Connect your Google Sheets account.
4. Customize the CSV reading and filtering settings to match your data structure.
5. Execute the workflow to test and ensure data is accurately uploaded.

### Practice
Create a test CSV file with sample data. Run the workflow to see how it handles duplicates and unsubscribed entries. Adjust the node settings to experiment with different filtering and sorting criteria to see how it affects the final output in Google Sheets.

### WIIFM
Mastering this workflow allows you to efficiently manage and update customer data, reducing manual errors and saving time. This skill can be offered as a service to businesses needing streamlined data management, potentially generating income through automation consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api.
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
