# Mondaycom Splitout Import Triggered
  ## 🚀 What It Does
  Automates a flow using code×7, stickyNote×5, merge×4.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "752.1995067108865", height: "335.74971164936585", content: "PULL ALL BOARDRELATION COLUMNS AND THEIR DATA"
4. **Sticky Note1** `stickyNote` — width: "748.2468880082052", height: "237.44804034647325", content: "PULL ALL SUBITEMS AND THEIR COLUMN DATA
"
5. **Sticky Note2** `stickyNote` — color: "4", width: "325.58246828143024", height: "352.5605536332179"
6. **Sticky Note4** `stickyNote` — color: "5", width: "677.0818915801614", height: "605.5742002344051"
7. **Edit Fields** `set` — fields: "[object Object]", options: "[object Object]"
8. **Sticky Note3** `stickyNote` — color: "6", width: "418.4714893828877", height: "302.08861782546296"
9. **GET ITEM** `mondayCom` — resource: **boardItem**, operation: **get**
10. **Execute Workflow** `executeWorkflow` — options: "[object Object]", workflowId: "ZdGZh4qmOqTQe1oq"
11. **GET ALL COLUMNS** `code` — jsCode: "function createColumnValuesArray(data) {
  const result = {};
  data.forEach(item => {
    const name = item.id;
    result[name] = item;
  });

  return result;
}

columns = $inpu…[truncated]"
12. **GET ALL COLUMNS2** `code` — jsCode: "function createColumnValuesArray(data) {
  const result = {};
  data.forEach(item => {
  if (item.type != "subtasks") {
    const name = item.column.title;
    result[name] = item;…[truncated]"
13. **PULL SUBITEMS** `code` — jsCode: "//Search for "Subitems" column
const columnName = "Subitems"
function getColumnValue(item, columnId) {
    const column = item.column_values.find(column => column.column.title === …[truncated]"
14. **GET ALL RELATIONS** `code` — jsCode: "var data = $input.last().json.columnValuesById;
i = 0;
relations = [];
for (var key in data) {
    if (data[key].type == "board_relation") {
      relations[i] = data[key];
      i…[truncated]"
15. **Merge2** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
16. **SPLIT SUBITEMS1** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "linkedPulseIds"
17. **GET LINKEDPULSES1** `code` — mode: "runOnceForEachItem", jsCode: "data = $input.item.json.value
id = $input.item.json.id
name = $input.item.json.column.title

const linkedPulseID = JSON.parse(data).linkedPulseIds

return { "linkedPulse": linkedPu…[truncated]"
18. **GET EACH SUBITEM1** `mondayCom` — resource: **boardItem**, operation: **get**
19. **SPLIT LINKED PULSES1** `splitOut` — include: "=", options: "[object Object]", fieldToSplitOut: "linkedPulse"
20. **GET ALL COLUMNS1** `code` — mode: "runOnceForEachItem", jsCode: "function createColumnValuesArray(data) {
  const result = {};
  data.forEach(item => {
    const name = item.id;
    result[name] = item;
  });

  return result;
}

columns = $inpu…[truncated]"
21. **PULL LINKEDPULSE1** `mondayCom` — resource: **boardItem**, operation: **get**
22. **Aggregate1** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "subitems"
23. **GET ALL COLUMNS3** `code` — mode: "runOnceForEachItem", jsCode: "function createColumnValuesArray(data) {
  const result = {};
  data.forEach(item => {
    const name = item.id;
    result[name] = item;
  });

  return result;
}

columns = $inpu…[truncated]"
24. **Merge4** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
25. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "boardrelations"
26. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
27. **Merge1** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow retrieves data from a Monday.com board item, including its subitems and related columns. It processes and combines this data into a comprehensive JSON output, which can be used for further analysis or reporting.

- **Demonstrate:** A project manager could use this workflow to consolidate all task details and dependencies from a Monday.com board into a single report, simplifying project tracking and decision-making.

- **Imitate:** To apply this workflow, copy the nodes into a new n8n workflow. Update the workflow ID in the "Execute Workflow" node. Set the "pulse" variable in the "Edit Fields" node to the ID of the Monday.com item you want to analyze.

- **Practice:** Create a test board in Monday.com with items and subitems. Run the workflow and observe how it aggregates the data. Modify some fields in Monday.com and rerun the workflow to see how it updates the output.

- **WIIFM:** Mastering this workflow enables you to offer comprehensive data aggregation services to clients using Monday.com, enhancing their project management capabilities and potentially increasing your service offerings and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mondayComApi.
  
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
  