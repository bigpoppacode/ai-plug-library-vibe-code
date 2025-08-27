# Code Schedule Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, httpRequest×2, agileCrm×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "460", height: "240", content: "### Enrich CRM data with data from French INSEE OpenDatabase API
This workflow takes all company entries from **Agile CRM** and enriches their data using the French [Insee Opendata…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "647", height: "232"
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note2** `stickyNote` — height: "80", content: "👆 You can use any of those two Trigger to start the process."
7. **Sticky Note3** `stickyNote` — width: "380", height: "240", content: "### 🗒️ Notes : 
1. This workflow is made to write over any entry already present. You can change this for each company by setting the **"RO"** Custom Field to **1**, making it rea…[truncated]"
8. **Set Insee API Key** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get all Compagnies from Agile CRM** `agileCrm` — resource: **company**, operation: **getAll**
10. **FilterOut all Company that have the ReadOnly Key set** `code` — jsCode: "// Get input data
const input = $input.all();
const output = input.filter(item => {
    const properties = item.json.properties || [];
    return !properties.some(property => prope…[truncated]"
11. **Find Company in SIREN database** `httpRequest` — url: `=https://api.insee.fr/api-sirene/3.11/siren?q=periode(denominationUniteLegale:"{{ $json.denominationUniteLegale }}")`
12. **clean_route** `noOp` — configured for its default action.
13. **Request all data from SIREN database** `httpRequest` — url: `=https://api.insee.fr/api-sirene/3.11/siret/{{ $json.unitesLegales[0].siren }}{{ $json.unitesLegales[0].periodesUniteLegale[0].nicSiegeUniteLegale }}`
14. **Merge data from CRM and SIREN database with enriched for the CRM** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
15. **Enrich CRM with INSEE Data** `agileCrm` — resource: **company**, operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of enriching company data in Agile CRM using the French INSEE OpenData API. It retrieves all companies from Agile CRM, filters out those marked as read-only, fetches additional data from the INSEE database using the SIREN and SIRET APIs, merges the enriched data, and updates the CRM records with the official address and SIREN number.

### Demonstrate
A business owner could use this workflow to ensure their CRM data is up-to-date with official information, reducing errors and improving data quality for better decision-making.

### Imitate
1. Import the workflow into n8n.
2. Connect your Agile CRM and INSEE API accounts.
3. Set up the API key in the "Set Insee API Key" node.
4. Configure the "RO" field in Agile CRM to prevent overwriting specific records.
5. Test the workflow to verify it updates records correctly.

### Practice
Create a test environment in Agile CRM with sample company data. Use the workflow to enrich this data, and observe how it updates company records with official information from the INSEE database.

### WIIFM
Mastering this workflow allows you to offer data enhancement services to clients, ensuring their CRM data is accurate and reliable. This can increase customer satisfaction and open opportunities for upselling other automation services, boosting your income potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** agileCrmApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  