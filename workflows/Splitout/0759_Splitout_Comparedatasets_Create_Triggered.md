# Splitout Comparedatasets Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "7", width: "1080", height: "920"
4. **Sticky Note1** `stickyNote` — color: "7", width: "880", height: "920"
5. **Sticky Note2** `stickyNote` — color: "7", width: "700", height: "440"
6. **Sticky Note3** `stickyNote` — color: "7", width: "700", height: "440"
7. **Sticky Note4** `stickyNote` — color: "7", width: "500", height: "920"
8. **Sticky Note5** `stickyNote` — color: "5", width: "360", height: "1200"
9. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
10. **Gong** `gong` — filters: "[object Object]", options: "[object Object]", returnAll: "true"
11. **Get list of Competitors** `notion` — resource: **database**
12. **Get Integrations** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
13. **Call Aggregator** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "calls"
14. **Comma separate competitors** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Integration Aggregator** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
16. **Comma Separate Integrations** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Merge 3 objects into one** `merge` — numberInputs: "3"
18. **Aggregate Call Data** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "calldata"
19. **Reduce down to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
20. **Split Out Call Data and Competitors** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "calldata[0].calls"
21. **Get Previous Phone Calls** `notion` — resource: **databasePage**, operation: **getAll**
22. **Isolate Only Call IDs** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Only Process New Calls** `compareDatasets` — options: "[object Object]", resolve: "preferInput1", mergeByFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to process Gong sales call data for analysis and enrichment. It captures call data from Gong, integrates additional competitor and integration data from Notion and Google Sheets, and processes the data through various steps to clean and structure it. The workflow aims to enhance the data for further analysis, such as identifying mispronunciations or extracting insights from call transcripts.

### Demonstrate
A sales team could use this workflow to automatically process and analyze sales call data. By enriching the data with competitor and integration details, they can gain deeper insights into sales performance and improve training or strategic decisions based on detailed call analysis.

### Imitate
1. Set up accounts for Gong, Notion, and Google Sheets.
2. Import the workflow into n8n.
3. Configure the Gong, Notion, and Google Sheets nodes with your credentials and data sources.
4. Customize the data processing and analysis steps to fit your specific needs.
5. Test the workflow by running it with sample data.

### Practice
Create a test environment with sample sales call data in Gong, competitor details in Notion, and integration data in Google Sheets. Run the workflow to see how it processes and enriches the data. Adjust node configurations to fine-tune the output.

### WIIFM
Mastering this workflow enables you to offer advanced data processing and analysis services to sales teams, improving their efficiency and decision-making. This capability can attract new clients and increase revenue in your AI automation business by showcasing your ability to deliver actionable insights from complex data sets.

## 🔧 Setup Instructions
1. **Connect Credentials:** gongApi, googleSheetsOAuth2Api, notionApi.
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
