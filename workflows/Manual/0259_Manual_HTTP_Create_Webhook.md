# Manual HTTP Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Note** `stickyNote` — width: "400", height: "400", content: "## Downloading a file
In this example workflow, the spreadsheet file is downloaded from an HTTP location.

Depending on your scenario you might want to swap the HTTP Request node d…[truncated]"
4. **Download file** `httpRequest` — url: `https://static.thomasmartens.eu/n8n/Excel-File-to-Salesforce.xlsx`
5. **Spreadsheet File** `spreadsheetFile` — options: "[object Object]"
6. **Search Salesforce accounts** `salesforce` — resource: **search**
7. **Keep new companies** `merge` — mode: "removeKeyMatches", propertyName1: "Company Name", propertyName2: "Name"
8. **Merge existing account data** `merge` — mode: "mergeByKey", propertyName1: "Company Name", propertyName2: "Name"
9. **Remove duplicate companies** `itemLists` — operation: **removeDuplicates**
10. **Account found?** `if` — conditions: "[object Object]"
11. **Create Salesforce account** `salesforce` — resource: **account**
12. **Set Account ID for existing accounts** `renameKeys` — keys: "[object Object]", additionalOptions: "[object Object]"
13. **Set new account name** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
14. **Retrieve new company contacts** `merge` — mode: "mergeByKey", propertyName1: "Company Name", propertyName2: "Name"
15. **Create Salesforce contact** `salesforce` — resource: **contact**, operation: **upsert**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of importing company data from a spreadsheet into Salesforce. It downloads a spreadsheet file, extracts company details, checks if they already exist in Salesforce, and either updates existing records or creates new ones. This ensures that Salesforce is always up-to-date with the latest company information.

### Demonstrate
A business owner could use this workflow to streamline the process of updating their Salesforce CRM with new leads or clients from a list, ensuring all company information is current without manual data entry.

### Imitate
1. Import the workflow into n8n.
2. Connect your Salesforce account.
3. Set up the HTTP Request node to download your specific file.
4. Adjust the Spreadsheet File node to match your file format.
5. Test the workflow to ensure it correctly updates or adds records in Salesforce.

### Practice
Create a test spreadsheet with sample company data. Run the workflow to see how it updates Salesforce. Modify the data to test different scenarios, such as adding new companies or updating existing ones.

### WIIFM
Mastering this workflow enables you to offer CRM data management services, helping clients keep their Salesforce data accurate and up-to-date. This can lead to improved customer relationships and operational efficiency, potentially increasing your client base and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** salesforceOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  