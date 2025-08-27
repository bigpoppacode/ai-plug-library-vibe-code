# MicrosoftExcel Manual Create Triggered
  ## 🚀 What It Does
  Automates a flow using salesforce×3, merge×3, manualTrigger.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Microsoft Excel** `microsoftExcel` — resource: **worksheet**, operation: **getContent**
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
  **Explain:**  
This workflow automates the process of syncing company and contact data from a Microsoft Excel spreadsheet to Salesforce. It retrieves company data from Excel, checks Salesforce for existing accounts, and updates or creates new accounts and contacts. This ensures that Salesforce is always updated with the latest data from the spreadsheet, preventing duplicates and maintaining data integrity.

**Demonstrate:**  
A business owner could use this workflow to ensure their Salesforce CRM is always up-to-date with the latest company data from Excel, automatically adding new entries and updating existing ones. This reduces manual data entry and errors, enhancing sales team efficiency.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect to your Microsoft Excel and Salesforce accounts.
3. Configure the Excel node to point to your spreadsheet.
4. Adjust the Salesforce nodes with your account settings and fields.
5. Execute the workflow to ensure it syncs data correctly.

**Practice:**  
Create a small Excel file with sample company data and run the workflow. Check Salesforce to ensure the data is updated correctly, and test with different scenarios like adding new companies and updating existing ones.

**WIIFM:**  
Mastering this workflow can help you offer data integration services, improving your client's CRM efficiency. This can lead to increased client satisfaction and retention, and open up opportunities for offering more comprehensive automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** salesforceOAuth2Api, microsoftExcelOAuth2Api.
  
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
  