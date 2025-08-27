# Code Filter Send Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Calculator** `toolCalculator` — configured for its default action.
5. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
6. **Records by date** `toolWorkflow` — name: "records_by_date_and_or_status", workflowId: "[object Object]", description: "Use this tool to get records filtered by date. You can also filter by status at the same time, if you want."
7. **Sticky Note** `stickyNote` — color: "7", width: "220", height: "400"
8. **Sticky Note1** `stickyNote` — color: "7", width: "300", height: "400"
9. **Sticky Note2** `stickyNote` — color: "7", width: "220", height: "400"
10. **Get transactions by product name** `googleSheetsTool` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
11. **Get all transactions** `googleSheetsTool` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
12. **Sticky Note3** `stickyNote` — color: "4", width: "320", height: "340"
13. **Sticky Note4** `stickyNote` — color: "4", width: "400", content: "## Copy this Sheets file to your Google Drive
https://docs.google.com/spreadsheets/d/18A4d7KYrk8-uEMbu7shoQe_UIzmbTLV1FMN43bjA7qc/edit?gid=0#gid=0"
14. **Sticky Note5** `stickyNote` — color: "7", width: "200", height: "140"
15. **Sticky Note6** `stickyNote` — color: "4", width: "400", content: "### How to connect to Google Sheets?
To connect your n8n to your Google Sheets you're gonna need Google OAuth credentials

See documentation **[here](https://docs.n8n.io/integratio…[truncated]"
16. **Sticky Note7** `stickyNote` — color: "7", width: "170", height: "260"
17. **Sticky Note8** `stickyNote` — color: "7", width: "150", height: "260"
18. **Buffer Memory** `memoryBufferWindow` — configured for its default action.
19. **Sticky Note9** `stickyNote` — color: "7", width: "340", height: "180"
20. **Sticky Note11** `stickyNote` — color: "7", width: "340", height: "320"
21. **Sticky Note12** `stickyNote` — color: "7", width: "1380", height: "520"
22. **Get transactions by status** `googleSheetsTool` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
23. **Sticky Note13** `stickyNote` — color: "4", width: "300", content: "## Change the URL of the Sheets file in all the Sheets tools 👇"
24. **Sticky Note14** `stickyNote` — color: "4", width: "260", height: "100"
25. **Sticky Note10** `stickyNote` — color: "7", width: "740", height: "580"
26. **Sticky Note15** `stickyNote` — width: "740", height: "180", content: "# Need help?
For getting help with this workflow, please create a topic on the community forums here:
https://community.n8n.io/c/questions/"
27. **AI Agent** `agent` — options: "[object Object]"
28. **Google Sheets request** `httpRequest` — url: `https://docs.google.com/spreadsheets/d/18A4d7KYrk8-uEMbu7shoQe_UIzmbTLV1FMN43bjA7qc/gviz/tq`
29. **Code** `code` — jsCode: "// Ensure there's at least one input item.
if (!items || items.length === 0) {
  throw new Error("No input items found.");
}

// Our input is expected to have a 'data' property con…[truncated]"
30. **Filter by status** `filter` — options: "[object Object]", conditions: "[object Object]"
31. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates data analysis by integrating various tools. It begins with a chat message trigger, processes data using OpenAI's GPT-4, calculates values, and retrieves transaction records from Google Sheets based on date and status. It aggregates the data and returns a comprehensive result, enhancing data-driven decision-making.

### Demonstrate
A business owner could use this workflow to automate sales analysis. By querying Google Sheets for sales data and using AI to interpret trends, they can quickly make informed decisions without manual data crunching.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Google Sheets accounts.
3. Set up Google Sheets with your transaction data.
4. Adjust the date and status filters to match your dataset.
5. Test the workflow to ensure it aggregates and analyzes data accurately.

### Practice
Create a Google Sheet with sample sales data. Run the workflow, adjusting date ranges and transaction statuses. Observe how the data is processed and aggregated, and modify parameters to see different outcomes.

### WIIFM
Mastering this workflow enables you to offer advanced data analysis services. By automating complex data tasks, you can attract clients seeking efficient insights, boosting your offerings and income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api.
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
  