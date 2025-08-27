# Localfile Splitout Send Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, toolCode×2, localFileTrigger.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Watch For Bank Statements**.
  2. **Watch For Bank Statements** `localFileTrigger` — path: `//home/node/host_mount/reconciliation_project`
3. **Get Tenant Details** `toolCode` — name: "get_tenant_details", jsCode: "const xlsx = require('xlsx');

const { spreadsheet_location } = $('Set Variables').item.json;
const sheetName = 'tenants';

const wb = xlsx.readFile(spreadsheet_location, { sheets:…[truncated]", description: "Call this tool to get a tenant's details which includes their tenancy terms, rent amount and any notes attached to their account. Pass in one or an array of either the tenant ID or…[truncated]"
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[{
  "tenant_id": "",
  "tenant_name": "",
  "property_id": "",
  "property_postcode": "",
  "action_required": "",
  "details": "",
  "date": ""
}]"
5. **Sticky Note** `stickyNote` — color: "7", width: "748.2548372021405", height: "457.6238063670572"
6. **Sticky Note1** `stickyNote` — color: "7", width: "634.3165117416636", height: "675.2455596085985"
7. **Sticky Note2** `stickyNote` — color: "7", width: "618.3293247808133", height: "473.7439917476675"
8. **Sticky Note3** `stickyNote` — width: "399.5148533727183", height: "558.2628336538015", content: "## Try It Out!
### This workflow ingests bank statements to analyses them against a list of tenants using an AI Agent. The agent then flags any issues such as missing payments or i…[truncated]"
9. **Get Property Details** `toolCode` — name: "get_property_details", jsCode: "const xlsx = require('xlsx');

const { spreadsheet_location } = $('Set Variables').item.json;
const sheetName = 'properties'

const wb = xlsx.readFile(spreadsheet_location, { sheet…[truncated]", description: "Call this tool to get a property details which includes the address, postcode and type of the property. Pass in one or an array of Property IDs."
10. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
11. **Sticky Note4** `stickyNote` — color: "3", width: "461.5505566920007", height: "106.59049079746408"
12. **Sticky Note5** `stickyNote` — color: "5", width: "302.6142384407349", height: "86.00673806595168"
13. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Get Bank Statement File** `readWriteFile` — options: "[object Object]", fileSelector: "={{ $('Watch For Bank Statements').item.json.path }}"
15. **Get CSV Data** `extractFromFile` — options: "[object Object]"
16. **Reconcile Rental Payments** `agent` — text: "=Bank Statement for {{ $input.first().json.date }} to {{  $input.last().json.date }}:
|date|reference|money in|money out|
|-|-|-|-|
{{ $input.all().map(row => `|${row.json.date}|${…[truncated]", options: "[object Object]", promptType: "define"
17. **Alert Actions To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
18. **Append To Spreadsheet** `code` — jsCode: "const xlsx = require('xlsx');

const { spreadsheet_location } = $('Set Variables').first().json;
const sheetName = 'alerts';

const wb = xlsx.readFile(spreadsheet_location);
xlsx.w…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the reconciliation of rental payments by monitoring for new bank statements saved in a specified folder. It extracts data from these statements, retrieves tenant and property details from a spreadsheet, and uses an AI agent to identify any discrepancies such as missed payments or incorrect amounts. Any issues found are logged into a spreadsheet for further action.

**Demonstrate:**  
A property management company could use this workflow to automatically verify rental payments against bank statements, ensuring timely identification of payment issues and reducing manual reconciliation efforts.

**Imitate:**  
1. Set up a local folder to watch for new bank statements.
2. Configure the workflow in n8n with the spreadsheet location for tenant and property details.
3. Set up the AI agent to analyze the data.
4. Run the workflow to test the reconciliation process.

**Practice:**  
Create a test environment with sample bank statements and tenant data. Run the workflow to see how it processes the data and logs discrepancies. Modify the sample data to test different scenarios and observe the workflow's response.

**WIIFM:**  
Mastering this workflow allows you to offer automated reconciliation services, saving clients time and reducing errors in financial operations. This expertise can attract more clients and boost your income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
  
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
  