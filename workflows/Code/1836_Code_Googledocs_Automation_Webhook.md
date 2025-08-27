# Code Googledocs Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Drive - Doc File Updated**.
  2. **Doc File Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
3. **Sticky Note** `stickyNote` — color: "2", width: "300", height: "340"
4. **Cron** `cron` — triggerTimes: "[object Object]"
5. **Sticky Note1** `stickyNote` — color: "3", width: "660", height: "960"
6. **Google Sheets - Tech Radar** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
7. **Sticky Note2** `stickyNote` — color: "2", width: "300", content: "#2. Convert Document into Vector database (RAG ingestion)


Listen for any file changes and update the vector database. The goal is that the llm agent can interact and retrieve inf…[truncated]"
8. **Google Drive - Doc File Updated** `googleDriveTrigger` — event: "fileUpdated", options: "[object Object]", pollTimes: "[object Object]"
9. **Content - Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "1024", chunkOverlap: "100"
10. **Sticky Note3** `stickyNote` — color: "2", width: "300", content: "#3. Convert Gsheet into MYSQL database

Periodically sync data from gsheet tech radar into mysql database. The goal is so that the llm sql agent can interact with it for certain sc…[truncated]"
11. **Sticky Note4** `stickyNote` — color: "6", width: "2500", height: "960"
12. **Sticky Note11** `stickyNote` — color: "4", width: "150", height: "80"
13. **Sticky Note6** `stickyNote` — color: "4", width: "840", height: "980"
14. **Sticky Note7** `stickyNote` — color: "6", width: "2500", height: "960"
15. **Sticky Note12** `stickyNote` — color: "4", width: "150", height: "80"
16. **Sticky Note8** `stickyNote` — color: "4", width: "840", height: "460"
17. **Sticky Note9** `stickyNote` — color: "6", width: "620", height: "860"
18. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
19. **1_Get DB Schema and Tables List** `mySqlTool` — operation: **executeQuery**
20. **2_Get Table Definition** `mySqlTool` — operation: **executeQuery**
21. **3_Execute actual query** `mySqlTool` — operation: **executeQuery**
22. **Sticky Note10** `stickyNote` — color: "6", width: "1280", height: "620"
23. **Sticky Note13** `stickyNote` — color: "4", width: "540", height: "440"
24. **Pinecone Vector Store (Retrieval)** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
25. **4_RagTool** `toolVectorStore` — name: "techradardata", topK: "5", description: "4_RagTool. Retrieves data from a vector document index.

Tech Quadrant Segmentation

Objective: Categorize technologies into distinct quadrants based on their function: Techniques,…[truncated]"
26. **Sticky Note14** `stickyNote` — color: "4", width: "540", height: "440"
27. **AI Agent - RAG** `agent` — text: "=USER QUESTION: USER QUESTION: {{ $json.query }}.  ==", options: "[object Object]", promptType: "define"
28. **Sticky Note15** `stickyNote` — color: "6", width: "1280", height: "620"
29. **Sticky Note16** `stickyNote` — color: "6", width: "1340", height: "860"
30. **Embeddings - Tech Radar Data Embedding** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
31. **Retrieve Embeddings - Tech Radar Vector DB** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
32. **AI Agent - Retrieval** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
33. **AI Chat Model - Claude 3.5 Sonnet** `lmChatAnthropic` — options: "[object Object]"
34. **AI Chat Model - QwQ 32b** `lmChatGroq` — model: `qwen-qwq-32b`
35. **AI Chatmodel - Deepseek 32B** `lmChatGroq` — model: `deepseek-r1-distill-qwen-32b`
36. **AI Chat Model - llama3-8b** `lmChatGroq` — options: "[object Object]"
37. **API Request - Webhook** `webhook` — method: **POST**, path: `/radar-rag`
38. **User Conversation history** `memoryBufferWindow` — sessionKey: "= {{ ('Webhook').item.json.body.chatInputn.query }}", sessionIdType: "customKey"
39. **MySQL -delete all data** `mySql` — operation: **deleteTable**, table: `[object Object]`
40. **Code - Transform table into rows** `code` — jsCode: "return items.map(item => {
  const row = item.json; // Get each row as JSON
  const textBlock = `
    Name: ${row.name}
    Ring: ${row.ring}
    Quadrant: ${row.quadrant}
    Stra…[truncated]"
41. **Download Doc File From Google Drive** `googleDrive` — operation: **download**
42. **AI Agent -DB Sql Agent** `agent` — text: "=Please answer non-technical way.
====
USER QUESTION: {{ $json.query }}. ", options: "[object Object]", promptType: "define"
43. **LLM - Determine - Agent Input Router** `chainLlm` — text: "=USER QUESTION: "{{ $json.body.chatInput }} "", messages: "[object Object]", promptType: "define"
44. **Google Sheets - Read TechRadar** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
45. **Google Docs - Update GDoc** `googleDocs` — operation: **update**
46. **Pinecone - Vector Store for Embedding Content** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
47. **Determine if  is 'RAG'** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "={{ false }}"
48. **MySQL - insert all from sheets** `mySql` — table: `[object Object]`
49. **Code - Simplify Mapping to Original Query** `code` — jsCode: "var result = $input.all().map(item=>item.json.output)
var query= $('API Request - Webhook').first().json.body.chatInput
return {query:query }"
50. **Codes - Simplify Mapping to Original Query** `code` — jsCode: "var result = $input.all().map(item=>item.json.output)
var query= $('API Request - Webhook').first().json.body.chatInput
return {query:query }"
51. **Execute Workflow - RAG Agent** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
52. **Execute Workflow - Sql Agent** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
53. **AI Agent - Output Guardrail** `agent` — text: "=Researched Answer==
 {{ $json.output }}
==========

 user question: 
 {{ $('API Request - Webhook').item.json.body.chatInput }}", options: "[object Object]", promptType: "define"
54. **API Response - Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of transforming data from Google Sheets into a structured SQL database and a vector database. It updates the SQL database with TechRadar data for AI interaction and converts documents into vector format for retrieval-augmented generation (RAG) by an LLM agent. The workflow ensures that the data is always up-to-date for AI-driven insights and queries.

- **Demonstrate:** A tech company could use this workflow to maintain an updated tech radar database. It helps in strategic decision-making by ensuring the AI has access to the latest data for analysis and reporting.

- **Imitate:** Import the workflow into your n8n instance. Connect your Google Sheets, MySQL, and Pinecone accounts. Set up triggers for data updates. Map your data fields to match the workflow's structure. Run the workflow to test data transformation and AI interactions.

- **Practice:** Create a test Google Sheet with sample tech data. Run the workflow to transform this data into your SQL and vector databases. Verify that the AI agent can access and utilize this data for queries.

- **WIIFM:** Mastering this workflow enables you to offer advanced data management and AI integration services. It positions you to help businesses leverage AI for strategic insights, potentially increasing your client base and revenue in the AI automation market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, mySql, googleSheetsOAuth2Api, googleApi, pineconeApi.
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
  