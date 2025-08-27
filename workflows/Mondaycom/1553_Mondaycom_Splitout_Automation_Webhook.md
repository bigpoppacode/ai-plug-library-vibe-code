# Mondaycom Splitout Automation Webhook
  ## 🚀 What It Does
  Automates a flow using code×5, mondayCom×3, splitOut×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **GET ITEM** `mondayCom` — resource: **boardItem**, operation: **get**
4. **GET BOARD RELATION** `code` — jsCode: "const columnName = "Additional Contacts"

function getColumnValue(item, columnId) {
    const column = item.column_values.find(column => column.column.title === columnId);
    if (…[truncated]"
5. **PULL SUBITEMS** `code` — jsCode: "//Search for "Subitems" column
const columnName = "Subitems"
function getColumnValue(item, columnId) {
    const column = item.column_values.find(column => column.column.title === …[truncated]"
6. **Convert to File** `convertToFile` — operation: **toJson**
7. **COLUMN BY NAME** `code` — jsCode: "const columnName = "Zoom Date"

function getColumnValue(item, columnId) {
    const column = item.column_values.find(column => column.column.title === columnId);
    if (column) {
…[truncated]"
8. **COLUMN BY ID** `code` — jsCode: "const columnId = "person"

function getColumnValue(item, columnId) {
    const column = item.column_values.find(column => column.id === columnId);
    if (column) {
          retur…[truncated]"
9. **GET LINKEDPULSES** `code` — jsCode: "data = $input.last().json.value
const linkedPulseID = JSON.parse(data).linkedPulseIds
return { "linkedPulse": linkedPulseID}
"
10. **SPLIT SUBITEMS** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "linkedPulseIds"
11. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
12. **SPLIT LINKED PULSES** `splitOut` — include: "=", options: "[object Object]", fieldToSplitOut: "linkedPulse"
13. **GET EACH SUBITEM** `mondayCom` — resource: **boardItem**, operation: **get**
14. **MONDAY UPLOAD** `httpRequest` — method: **POST**, url: `https://api.monday.com/v2/file`
15. **PULL LINKEDPULSE** `mondayCom` — resource: **boardItem**, operation: **get**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to interact with Monday.com boards. It retrieves a board item and its subitems, processes data such as additional contacts and linked pulses, and converts this information into a JSON file. It then manages subitems and related pulses, merging and uploading data back to Monday.com, ensuring seamless data handling and updates.

**Demonstrate:**  
A project manager could use this workflow to automatically update a project's status in Monday.com, ensuring all related tasks and subitems are accurately tracked and linked, improving team collaboration and project visibility.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Monday.com account.
3. Set the item ID to match your board.
4. Customize JavaScript code to fit your data structure.
5. Test and adjust node connections to ensure data flows correctly.

**Practice:**  
Create a test board in Monday.com and manually input a few items and subitems. Run the workflow to observe how it processes and updates the data. Experiment by adding new columns or linked pulses to see how the workflow adapts.

**WIIFM:**  
Mastering this workflow can enhance your ability to automate project management tasks, saving time and reducing errors. Offering such automation solutions can attract clients seeking efficient data management, boosting your service offerings and income potential in automation and AI consulting.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mondayComApi, mondayComOAuth2Api.
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
  