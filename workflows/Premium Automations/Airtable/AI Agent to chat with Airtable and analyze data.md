# AI Agent To Chat With Airtable And Analyze Data
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **Sticky Note** `stickyNote` — height: "80", content: "### Replace Mapbox public key - <your_public_key> in code"
4. **Sticky Note1** `stickyNote` — height: "80", content: "### Replace OpenAI connection"
5. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
6. **When chat message received** `chatTrigger` — options: "[object Object]"
7. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
8. **Sticky Note4** `stickyNote` — width: "160", height: "80", content: "### Replace Airtable connection"
9. **Sticky Note5** `stickyNote` — width: "160", height: "80", content: "### Replace OpenAI connection"
10. **Sticky Note6** `stickyNote` — width: "160", height: "80", content: "### Replace Airtable connection"
11. **Sticky Note3** `stickyNote` — width: "1180", height: "80", content: "### Replace OpenAI connection"
12. **Sticky Note7** `stickyNote` — color: "6", width: "1320", height: "780"
13. **Sticky Note8** `stickyNote` — color: "6", width: "2240", height: "1180"
14. **Sticky Note9** `stickyNote` — color: "7", width: "330.5152611046425", height: "239.5888196628349"
15. **Sticky Note10** `stickyNote` — color: "7", width: "636", height: "657"
16. **Sticky Note11** `stickyNote` — color: "7", width: "280", height: "346"
17. **Search records** `toolWorkflow` — name: "search", fields: "[object Object]", schemaType: "manual"
18. **Process data with code** `toolWorkflow` — name: "code", fields: "[object Object]", schemaType: "manual"
19. **Create map image** `toolCode` — name: "create_map", jsCode: "[redacted]", schemaType: "manual"
20. **Get list of bases** `toolWorkflow` — name: "get_bases", fields: "[object Object]", workflowId: "[object Object]"
21. **Get base schema** `toolWorkflow` — name: "get_base_tables_schema", fields: "[object Object]", schemaType: "manual"
22. **AI Agent** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}", agent: "openAiFunctionsAgent", options: "[object Object]"
23. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
24. **Get Bases** `airtable` — resource: **base**
25. **Get Base/Tables schema** `airtable` — resource: **base**, operation: **getSchema**
26. **If filter description exists** `if` — options: "[object Object]", conditions: "[object Object]"
27. **OpenAI - Create thread** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/threads`
28. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
29. **Aggregate1** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
30. **Set schema and prompt** `set` — options: "[object Object]", assignments: "[object Object]"
31. **OpenAI - Send message** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/threads/{{ $('OpenAI - Create thread').item.json.id }}/messages `
32. **OpenAI - Generate search filter** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/chat/completions`
33. **OpenAI - Run assistant** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/threads/{{ $('OpenAI - Create thread').item.json.id }}/runs`
34. **Merge** `merge` — configured for its default action.
35. **OpenAI - Get messages** `httpRequest` — url: `=https://api.openai.com/v1/threads/{{ $('OpenAI - Create thread').item.json.id }}/messages`
36. **Airtable - Search records** `httpRequest` — method: **POST**, url: `=https://api.airtable.com/v0/{{ $('Execute Workflow Trigger').item.json.query.base_id }}/{{ $('Execute Workflow Trigger').item.json.query.table_id }}/listRecords`
37. **If1** `if` — options: "[object Object]", conditions: "[object Object]"
38. **Aggregate2** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
39. **OpenAI - Download File** `httpRequest` — url: `=https://api.openai.com/v1/files/{{ $json.data[0].attachments[0]?.file_id ?? $json.data[0].content.find(x=>x.type=="image_file")?.image_file.file_id }}/content`
40. **Response** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Upload file to get link** `httpRequest` — method: **POST**, url: `=https://tmpfiles.org/api/v1/upload`
42. **Response1** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"

## 💡 AI-Powered Ideas for Improvement
- **Explain:**  
  This n8n workflow enables users to interact with their Airtable data through a chat interface, leveraging OpenAI for natural language processing. It handles user queries about the data, retrieves relevant records, processes them (e.g., aggregation or map creation), and returns the results in a conversational manner. It is particularly useful for dynamically querying datasets, performing mathematical analysis, and generating geographic visualizations.

- **Demonstrate:**  
  A business owner can use this workflow to quickly access sales data stored in Airtable by simply asking questions in natural language, like "Show me the total sales for last month," thus saving time and enhancing decision-making.

- **Imitate:**  
  1. Import the workflow into n8n.
  2. Replace placeholders with your actual Airtable and OpenAI credentials.
  3. Set up a chat interface to receive queries.
  4. Test the workflow with sample questions related to your Airtable data.
  5. Observe how it processes requests and returns data.

- **Practice:**  
  Create a simple Airtable base with a few records. Use the workflow to query the total number of records or to create a map visualization using sample geolocation data. Modify the queries and observe how the workflow adapts.

- **WIIFM:**  
  Mastering this workflow empowers you to offer AI-driven data interaction services, enhancing your automation portfolio. It can attract clients seeking innovative solutions for data management, ultimately boosting your business revenue through new service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, airtableTokenApi, httpQueryAuth.
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
