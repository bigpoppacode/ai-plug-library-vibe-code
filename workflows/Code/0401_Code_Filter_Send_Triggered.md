# Code Filter Send Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note1** `stickyNote` — color: "7", width: "1549", height: "612"
3. **Sticky Note2** `stickyNote` — color: "7", width: "1068", height: "547"
4. **Sticky Note3** `stickyNote` — width: "185.9375", height: "183.85014518022527", content: "## Try me out

Click the 'Chat' button at the bottom and enter:

_Which is our biggest customer?_"
5. **Sticky Note** `stickyNote` — color: "7", width: "572", height: "219"
6. **Sticky Note4** `stickyNote` — width: "179.99762227826224", height: "226.64416053838073", content: "Change the URL of the Google Sheet here"
7. **When chat message received** `chatTrigger` — options: "[object Object]"
8. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
9. **Simple Memory** `memoryBufferWindow` — configured for its default action.
10. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
11. **List columns tool** `toolWorkflow` — name: "list_columns", workflowId: "[object Object]", description: "List all column names in customer data

Call this tool to find out what data is available for each customer. It should be called first at the beginning to understand which columns …[truncated]"
12. **Get column values tool** `toolWorkflow` — name: "column_values", workflowId: "[object Object]", description: "Get the specified column value for all customers

Use this tool to find out which customers have a certain value for a given column. Returns an array of JSON objects, one per custo…[truncated]"
13. **Get customer tool** `toolWorkflow` — name: "get_customer", workflowId: "[object Object]", description: "Get all columns for a given customer

The input should be a stringified row number of the customer to fetch; only single string inputs are allowed. Returns a JSON object with all t…[truncated]"
14. **AI Agent** `agent` — options: "[object Object]"
15. **Set Google Sheet URL** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Get Google sheet contents** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
17. **Check operation** `switch` — rules: "[object Object]", options: "[object Object]"
18. **Get column names** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Prepare column data** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
21. **Prepare output** `code` — jsCode: "return {
  'response': JSON.stringify($input.all().map(x => x.json))
}"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow integrates Google Sheets and OpenAI to answer customer queries. When a chat message is received, it triggers the workflow, which uses an AI agent to analyze the message, fetch relevant data from a Google Sheet, and provide a response. This setup allows users to query customer data efficiently without manually searching through large datasets.

- **Demonstrate:** A business owner could use this workflow to quickly answer customer inquiries about their biggest clients. It streamlines customer service by providing instant, data-backed responses, enhancing customer satisfaction.

- **Imitate:** To apply this workflow, import it into n8n, connect your Google Sheets and OpenAI accounts, and customize the Google Sheet URL in the workflow. Test by sending a chat message like "Which is our biggest customer?" to see how the AI retrieves and responds with data.

- **Practice:** Create a test Google Sheet with customer data, including sales figures. Run the workflow and try different queries to see how the AI responds. Modify the data to observe changes in the response logic.

- **WIIFM:** Mastering this workflow can enhance your service offerings by providing automated customer insights. It helps attract clients looking for efficient data retrieval solutions, allowing you to generate income by offering AI-driven customer service enhancements.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api.
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
  