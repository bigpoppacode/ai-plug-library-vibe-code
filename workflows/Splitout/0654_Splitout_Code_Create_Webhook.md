# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Airtable to n8n Form", formFields: "[object Object]"
3. **On form submission1** `formTrigger` — options: "[object Object]", formTitle: "Baserow to n8n Form", formFields: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "446.4999999999999", height: "834.0643999999993", content: "## Try It Out!
### This template is an example of how you could replace Airtable or Baserow forms with n8n forms. Though debateable whether this is actually useful, it is a cool de…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "600.75", height: "675.625"
6. **Sticky Note2** `stickyNote` — color: "7", width: "616.40625", height: "677.1875"
7. **Sticky Note3** `stickyNote` — color: "7", width: "483.015625", height: "677.1875"
8. **Sticky Note4** `stickyNote` — color: "7", width: "602.265625", height: "677.1875"
9. **Sticky Note5** `stickyNote` — color: "7", width: "824.3125", height: "677.1875"
10. **Sticky Note6** `stickyNote` — color: "5", width: "264.0997209302325", height: "99.50571162790695"
11. **Sticky Note7** `stickyNote` — color: "5", width: "259.5844837209301", height: "80"
12. **Get Base Schema** `airtable` — resource: **base**, operation: **getSchema**
13. **Baserow List Fields** `httpRequest` — url: `=https://api.baserow.io/api/database/fields/table/{{ $json.TableId }}/`
14. **Filter Table** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Covert to n8n Form Fields1** `code` — mode: "runOnceForEachItem", jsCode: "function createField (
  label = '',
  type = '',
  options = {},
) {
  return {
    fieldLabel: label,
    fieldType: type,
    formatDate: options.formatDate,
    fieldOptions: o…[truncated]"
16. **Fields to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "fields"
17. **Filter Unsupported FieldTypes1** `filter` — options: "[object Object]", conditions: "[object Object]"
18. **Covert to n8n Form Fields** `code` — mode: "runOnceForEachItem", jsCode: "function createField (
  label = '',
  type = '',
  options = {},
) {
  return {
    fieldLabel: label,
    fieldType: type,
    formatDate: options.formatDate,
    fieldOptions: o…[truncated]"
19. **Combine Fields1** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
20. **Filter Unsupported FieldTypes** `filter` — options: "[object Object]", conditions: "[object Object]"
21. **Render Form1** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{ $json.data }}"
22. **Combine Fields** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
23. **Prep Data for Insert1** `code` — mode: "runOnceForEachItem", jsCode: "const schema = $('Baserow List Fields').all().map(input => input.json);
const data = $input.item.json;

// 1. filter out file inputs
const fileKeys = schema.filter(item => item.typ…[truncated]"
24. **Render Form** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{ $json.data }}"
25. **Baserow Create Row** `httpRequest` — method: **POST**, url: `=https://api.baserow.io/api/database/rows/table/{{ $('On form submission1').first().json.TableId }}/?user_field_names=true`
26. **Prep Data for Insert** `code` — mode: "runOnceForEachItem", jsCode: "const schema = $('Fields to List').all().map(input => input.json);
const data = $input.item.json;

// 1. filter out file inputs
const fileKeys = schema.filter(item => item.type ===…[truncated]"
27. **Files To List1** `code` — jsCode: "let results = [];

const fileInputs = $('Combine Fields1').first().json.data.filter(item => item.fieldType === 'file');

if (!fileInputs.length) return [];

const { json, binary } …[truncated]"
28. **Airtable Create Record** `airtable` — operation: **create**, table: `[object Object]`
29. **Baserow Upload File** `httpRequest` — method: **POST**, url: `https://api.baserow.io/api/user-files/upload-file/`
30. **Files To List** `code` — jsCode: "let results = [];

const fileInputs = $('Combine Fields').first().json.data.filter(item => item.fieldType === 'file');

if (!fileInputs.length) return [];

const { json, binary } =…[truncated]"
31. **Group By FieldName** `code` — jsCode: "const pairs = $input.all().map((item, idx) => ({
  field: $('Files To List1').itemMatching(idx).json.fieldLabel,
  file: item.json,
}));

const groups = {};
pairs.forEach(pair => {…[truncated]"
32. **Update Airtable Row** `httpRequest` — method: **POST**, url: `=https://content.airtable.com/v0/{{ $('On form submission').first().json.BaseId }}/{{ $('Airtable Create Record').first().json.id }}/{{ $json.fieldLabel }}/uploadAttachment`
33. **Baserow Update Row** `httpRequest` — method: **PATCH**, url: `=https://api.baserow.io/api/database/rows/table/{{ $('On form submission1').first().json.TableId }}/{{ $('Baserow Create Row').first().json.id }}/?user_field_names=true`
34. **Show Completion!1** `form` — operation: **completion**
35. **Show Completion!** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the creation of forms using n8n for Airtable and Baserow tables. Upon form submission, it retrieves the table schema, converts it into n8n form fields, and renders a form. Data submitted through the form is then inserted into either Airtable or Baserow, handling file uploads separately.

- **Demonstrate:** A developer could use this workflow to dynamically generate forms for database tables, allowing users to submit data that is automatically organized and stored in their chosen database, streamlining data collection and management.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Airtable and Baserow accounts. 3. Set up form submissions to trigger the workflow. 4. Customize the table and fields in Airtable/Baserow. 5. Test by submitting data through the generated form.

- **Practice:** Create a simple Airtable table with a few fields, use the workflow to generate a form, and submit data. Verify that the data is correctly inserted into Airtable, including handling any file uploads separately.

- **WIIFM:** Mastering this workflow can help you efficiently create dynamic forms for clients, improving data collection processes. This adds value to your services, potentially increasing client satisfaction and opening opportunities for additional projects in automation and data management.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi, httpHeaderAuth.
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
