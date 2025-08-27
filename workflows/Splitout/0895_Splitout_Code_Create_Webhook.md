# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Start here to update your field list**.
2. **Sticky Note** `stickyNote` — color: "7", width: "2280", height: "460"
3. **Sticky Note1** `stickyNote` — color: "7", width: "3200", height: "700"
4. **Start here to update your field list** `manualTrigger` — configured for its default action.
5. **File upload form** `formTrigger` — options: "[object Object]", formTitle: "title", formFields: "[object Object]"
6. **Sticky Note2** `stickyNote` — color: "4", width: "840", height: "500"
7. **Sticky Note3** `stickyNote` — color: "4", width: "660", height: "500"
8. **Sticky Note4** `stickyNote` — color: "4", width: "640", height: "500"
9. **Sticky Note5** `stickyNote` — color: "4", width: "640", height: "500"
10. **Sticky Note7** `stickyNote` — width: "460", height: "200", content: "## Contact me
- If you need any modification to this workflow
- if you need some help with this workflow
- Or if you need any workflow in n8n, Make, or Langchain / Langgraph

Write…[truncated]"
11. **Sticky Note6** `stickyNote` — color: "4", height: "380", content: "















## List of objects
Define Here the list of the objects you would like to import in Hubspot"
12. **Sticky Note8** `stickyNote` — color: "4", height: "380", content: "















## Filter the list of properties here"
13. **Sticky Note9** `stickyNote` — color: "4", width: "200", height: "380"
14. **Erase Google sheet** `googleSheets` — operation: **clear**
15. **To get the first line of file** `extractFromFile` — operation: **text**
16. **Get the content of file** `extractFromFile` — options: "[object Object]"
17. **Define array of objects** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Set the real fields** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Split by object** `splitOut` — options: "[object Object]", fieldToSplitOut: "object"
20. **Merge fields and data** `merge` — configured for its default action.
21. **Fetch properties from Hubspot** `httpRequest` — url: `=https://api.hubapi.com/crm/v3/properties/{{ $json.object }}`
22. **Get the fields from the sheet** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
23. **Define crm_type** `code` — mode: "runOnceForEachItem", jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one

for (let result of $json.results) {
  result.crm_type = $('Split by object').item.json.obj…[truncated]"
24. **Check if all fields from input are defined** `code` — jsCode: "// 
let type = $('File upload form').first().json['Type of import']
// Get first line of json
let first_line = $('Set the real fields').first().json.real_fields
let keys = Object.v…[truncated]"
25. **Split results** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "results"
26. **If all fields are defined** `if` — options: "[object Object]", conditions: "[object Object]"
27. **Remove hidden and starting with hs_ props fields** `filter` — options: "[object Object]", conditions: "[object Object]"
28. **Set the values for each field** `code` — jsCode: "
function findKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

let out = []
const data = $('Get the content of file').all().map(x => x.json)
c…[truncated]"
29. **Creates the correspondance table** `code` — jsCode: "
let ret = []
let fields = {}
for (let key of $input.first().json.keys) {
  if (!$input.first().json.props.includes(key)) {
    let fieldName = `Set the correct field for '${key}'`…[truncated]"
30. **Transforms the results** `code` — mode: "runOnceForEachItem", jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
let test = []
let entry = $input.item.json.results
return {json: entry}
"
31. **Form to set the correponding field for each input field** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{$json.ret}}"
32. **Append to Google sheet** `googleSheets` — operation: **append**
33. **Set the values for each field1** `code` — jsCode: "
function findKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

let out = []
const data = $('Get the content of file').all().map(x => x.json)
/…[truncated]"
34. **Split all records to import** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "out"
35. **Define properties** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Uploads to Hubspot** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v3/objects/companies`
37. **Form response** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of importing data into HubSpot. It starts by allowing users to upload a CSV file through a form, which is then parsed to extract fields. The workflow checks if all necessary fields are defined and matches them with existing HubSpot properties. If any fields are missing, it prompts the user to set correspondences. Once all fields are mapped, the data is split and prepared for upload into HubSpot as a new company record. The workflow also logs data into a Google Sheet for record-keeping.

- **Demonstrate:** A business owner could use this workflow to streamline the process of importing new customer data into HubSpot from CSV files, saving time and reducing errors in manual data entry.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Google Sheets and HubSpot accounts. 3. Upload a CSV file using the form trigger. 4. Follow prompts to map fields if necessary. 5. Run the workflow to import data into HubSpot and append it to a Google Sheet.

- **Practice:** Create a test CSV file with sample customer data. Run the workflow to see how it processes and imports the data into HubSpot. Experiment by changing field names in the CSV to test the field mapping process.

- **WIIFM:** Mastering this workflow can enhance your automation services by offering efficient data import solutions to businesses, improving their CRM data management. This skill can attract more clients and increase your income in the automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** hubspotOAuth2Api, hubspotDeveloperApi, googleSheetsOAuth2Api.
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
