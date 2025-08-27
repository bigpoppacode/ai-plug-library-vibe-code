# Code Filter Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "7", width: "1449.2963504228514", height: "612.0936015224503"
4. **Sticky Note2** `stickyNote` — color: "7", width: "927.5", height: "486.5625"
5. **Sticky Note3** `stickyNote` — width: "185.9375", height: "183.85014518022527", content: "## Try me out

Click the 'Chat' button at the bottom and enter:

_Which is our biggest customer?_"
6. **List columns tool** `toolWorkflow` — name: "list_columns", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
7. **Get customer tool** `toolWorkflow` — name: "get_customer", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
8. **Get column values tool** `toolWorkflow` — name: "column_values", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
9. **Sticky Note** `stickyNote` — color: "7", width: "432.3271051132649", height: "179.21380662202682"
10. **Sticky Note4** `stickyNote` — width: "179.99762227826224", height: "226.64416053838073", content: "Change the URL of the Google Sheet here"
11. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-3.5-turbo-0125`
12. **Chat Trigger** `chatTrigger` — configured for its default action.
13. **Set Google Sheet URL** `set` — fields: "[object Object]", options: "[object Object]"
14. **AI Agent** `agent` — agent: "reActAgent", options: "[object Object]"
15. **Get Google sheet contents** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
16. **Check operation** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Get column names** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
18. **Prepare column data** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
19. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
20. **Prepare output** `code` — jsCode: "return {
 'response': JSON.stringify($input.all().map(x => x.json))
}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to interact with a Google Sheet, allowing users to query specific customer data using AI. It utilizes OpenAI's chat model to interpret user queries, retrieve relevant data from a Google Sheet, and return the requested information. It can list column names, retrieve specific customer data, and fetch column values, based on user queries.

**Demonstrate:**  
A business owner might use this workflow to quickly find out which of their customers has the highest purchase volume, without manually searching through a large spreadsheet.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and OpenAI accounts.
3. Set up the Google Sheet URL in the "Set Google Sheet URL" node.
4. Use the Chat Trigger to input queries like "Which is our biggest customer?" and observe the output.

**Practice:**  
Create a Google Sheet with sample customer data. Run the workflow and use different queries to retrieve data, like listing all column names or finding specific customer details. Experiment by changing the data in the sheet to see how the workflow adapts.

**WIIFM:**  
Mastering this workflow can enhance your ability to offer AI-driven data analysis services, improving decision-making processes for clients. It can lead to new opportunities for automation consulting, increasing your value proposition and potential income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi.
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
  