# Schedule Comparedatasets Automation Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "376.8778280542988", height: "474.81900452488685", content: "## Create a new Google Form with several variables:

-Email Address
-Your name 
-What event are you organizing? 
-When does the event take place? 
-Where does the event take place?…[truncated]"
5. **Sticky Note1** `stickyNote` — width: "375.6334841628956", height: "273.23529411764684", content: "### Import this SQL file to create a new table
https://gist.github.com/teds-tech-talks/cf25c60363cba082b9c5a1feca10180f"
6. **Google Sheet Data** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
7. **SQL Get inquiries from Google** `mySql` — operation: **select**, table: `[object Object]`
8. **Rename GSheet variables** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
9. **Compare Datasets** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
10. **Add MySQL records** `mySql` — operation: **upsert**, table: `[object Object]`
11. **No reply too long?** `if` — conditions: "[object Object]"
12. **DB Status assigned?** `if` — conditions: "[object Object]"
13. **DB Status in sync?** `if` — conditions: "[object Object]"
14. **Send Notifications** `noOp` — configured for its default action.
15. **Update GSheet status** `googleSheets` — operation: **update**
16. **Sync MySQL data** `mySql` — operation: **update**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the synchronization of data between Google Sheets and a MySQL database. It starts by fetching data from a Google Sheet and MySQL, renames variables for consistency, compares datasets to identify changes, and updates both the Google Sheet and MySQL records accordingly. It ensures that both systems are in sync, sending notifications when necessary.

### Demonstrate
A business owner might use this workflow to keep their customer inquiries in sync between a Google Form and a MySQL database, ensuring that their CRM and reporting tools are always up-to-date without manual data entry.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and MySQL accounts.
3. Set up a Google Form and corresponding Sheet.
4. Configure the workflow to match your data fields.
5. Test the workflow by submitting a form and checking data sync.

### Practice
Create a Google Form and corresponding Sheet with a few entries. Run the workflow and verify if the entries appear in your MySQL database. Modify some entries and observe how the workflow handles updates and synchronizes data.

### WIIFM
Mastering this workflow enables you to offer data synchronization services, crucial for businesses relying on accurate data across platforms. This capability can enhance your service offerings, attract new customers, and boost income in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, mySql.
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
