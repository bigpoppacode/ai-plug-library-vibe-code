# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "480", height: "440"
3. **Sticky Note1** `stickyNote` — color: "5", width: "330", height: "80"
4. **Sticky Note2** `stickyNote` — color: "5", width: "390", height: "120"
5. **Sticky Note3** `stickyNote` — width: "520", height: "1120", content: "## Try It Out!
### This n8n template powers a "dynamic" or "user-defined" prompts with PDF workflow pattern for a [Airtable](https://airtable.com/invite/r/cKzxFYVc) table. Simply p…[truncated]"
6. **Sticky Note4** `stickyNote` — color: "7", width: "760", height: "440"
7. **Sticky Note5** `stickyNote` — color: "7", width: "620", height: "400"
8. **Sticky Note7** `stickyNote` — color: "7", width: "600", height: "440"
9. **Sticky Note8** `stickyNote` — color: "7", width: "860", height: "580"
10. **Sticky Note9** `stickyNote` — color: "7", width: "420", height: "460"
11. **Sticky Note10** `stickyNote` — color: "7", width: "600", height: "360"
12. **Sticky Note11** `stickyNote` — color: "7", width: "700", height: "500"
13. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
14. **Sticky Note12** `stickyNote` — color: "7", width: "420", height: "460"
15. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
16. **Sticky Note13** `stickyNote` — color: "7", width: "500", height: "440"
17. **Sticky Note6** `stickyNote` — color: "7", width: "300", height: "120"
18. **Airtable Webhook** `webhook` — method: **POST**, path: `/a82f0ae7-678e-49d9-8219-7281e8a2a1b2`
19. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
20. **Sticky Note14** `stickyNote` — color: "5", width: "1020", height: "580"
21. **Get Table Schema** `airtable` — resource: **base**, operation: **getSchema**
22. **Set Airtable Vars** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Get Prompt Fields** `code` — jsCode: "const fields = $input.first().json.fields
 .filter(item => item.description)
 .map((item, idx) => ({
 id: item.id,
 order: idx,
 name: item.name,
 type: item.type,
 description: it…[truncated]"
24. **Get Table Schema1** `airtable` — resource: **base**, operation: **getSchema**
25. **FieldsChanged Webhook** `httpRequest` — method: **POST**, url: `=https://api.airtable.com/v0/bases/{{ $('Set Airtable Vars').first().json.appId }}/webhooks`
26. **Get Webhook Payload** `httpRequest` — url: `=https://api.airtable.com/v0/bases/{{ $('Airtable Webhook').first().json.body.base.id }}/webhooks/{{ $('Airtable Webhook').first().json.body.webhook.id }}/payloads`
27. **Get "Input" Field** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
$input.all()
 .map(item => item.json)
 .find(item => item.id === $('Set Airtable Vars').first().json.tableId)
 .fields
 .find(field => field.name === $('Set Airtable Vars').fir…[truncated]"
28. **Parse Event** `code` — jsCode: "const webhook = $('Airtable Webhook').first().json;
const schema = $('Get Prompt Fields').first().json;
const { payloads } = $input.first().json;
if (!payloads.length) return [];

…[truncated]"
29. **RecordsChanged Webhook** `httpRequest` — method: **POST**, url: `=https://api.airtable.com/v0/bases/{{ $('Set Airtable Vars').first().json.appId }}/webhooks`
30. **Event Type** `switch` — rules: "[object Object]", options: "[object Object]"
31. **Event Ref1** `noOp` — configured for its default action.
32. **Event Ref** `noOp` — configured for its default action.
33. **Get Row** `airtable` — table: `[object Object]`
34. **Filter Valid Fields** `filter` — options: "[object Object]", conditions: "[object Object]"
35. **Filter Valid Rows** `filter` — options: "[object Object]", conditions: "[object Object]"
36. **Fetch Records** `airtable` — operation: **search**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of updating an Airtable database with data extracted from PDFs. It uses webhooks to detect changes in an Airtable table, fetches the table schema, and downloads PDFs from a specified field. The workflow then extracts data from the PDFs using a Large Language Model (LLM) and updates the Airtable records with the extracted data.

### Demonstrate
A consultant could use this workflow to automate data entry from scanned documents into an Airtable database. This is particularly useful for businesses that handle large volumes of documents and need to digitize and organize data efficiently, reducing manual data entry errors and saving time.

### Imitate
1. Import the workflow into n8n.
2. Set up your Airtable base and table with the necessary fields.
3. Configure the Airtable Webhook node to trigger on table changes.
4. Ensure the OpenAI Chat Model nodes have valid API keys.
5. Test the workflow with sample PDF files to verify the extraction and update process.

### Practice
Create a test Airtable table with a few records and PDF attachments. Run the workflow to see how it extracts data from the PDFs and updates the table. Experiment by adding new fields or changing the schema to see how the workflow adapts.

### WIIFM
Mastering this workflow enables you to offer automated document processing services, enhancing your AI automation business. It adds value by reducing manual data entry, improving data accuracy, and saving clients time, which can lead to higher client satisfaction and increased revenue opportunities.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, airtableTokenApi.
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
  