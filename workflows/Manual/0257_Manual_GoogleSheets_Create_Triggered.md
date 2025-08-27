# Manual GoogleSheets Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Read Google Sheet** `googleSheets` — sheet: `1cz-4tVi7Nn3j1gh147hROq9l6S4ta06sMfhm2AAI6js`
4. **Search Salesforce accounts** `salesforce` — resource: **search**
5. **Keep new companies** `merge` — mode: "removeKeyMatches", propertyName1: "Company Name", propertyName2: "Name"
6. **Merge existing account data** `merge` — mode: "mergeByKey", propertyName1: "Company Name", propertyName2: "Name"
7. **Remove duplicate companies** `itemLists` — operation: **removeDuplicates**
8. **Account found?** `if` — conditions: "[object Object]"
9. **Create Salesforce account** `salesforce` — resource: **account**
10. **Set Account ID for existing accounts** `renameKeys` — keys: "[object Object]", additionalOptions: "[object Object]"
11. **Set new account name** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
12. **Retrieve new company contacts** `merge` — mode: "mergeByKey", propertyName1: "Company Name", propertyName2: "Name"
13. **Create Salesforce contact** `salesforce` — resource: **contact**, operation: **upsert**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of syncing a Google Sheet containing company data with Salesforce. It reads company details from a Google Sheet, checks if these companies already exist in Salesforce, and updates or creates new Salesforce accounts and contacts accordingly. The workflow ensures no duplicate companies are created and merges existing account data with new information.

**Demonstrate**  
A business owner could use this workflow to ensure their Salesforce CRM is always up-to-date with the latest company data from their Google Sheet, eliminating manual data entry and reducing errors.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and Salesforce accounts.
3. Adjust the Google Sheet ID and Salesforce query to match your data.
4. Test the workflow to ensure it updates Salesforce correctly.

**Practice**  
Create a test Google Sheet with sample company data. Run the workflow and observe how it updates Salesforce, creating new accounts and contacts while avoiding duplicates.

**WIIFM**  
Mastering this workflow can help you offer CRM data synchronization services, enhancing client database accuracy and efficiency. This can improve customer relationship management and open new revenue streams in automation consulting.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, salesforceOAuth2Api.
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
  