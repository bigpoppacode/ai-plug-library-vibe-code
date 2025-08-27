# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.answer }}", jsonMode: "expressionData"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
6. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
7. **Sticky Note** `stickyNote` — color: "7", width: "617.2130261221611", height: "420.7389587470384"
8. **Sticky Note1** `stickyNote` — color: "7", width: "563.8350682199533", height: "678.1641960508446"
9. **Sticky Note2** `stickyNote` — color: "7", width: "519.6419932444072", height: "429.11782776909047"
10. **Sticky Note3** `stickyNote` — color: "7", width: "668.3083616841852", height: "528.2386658883073"
11. **Sticky Note4** `stickyNote` — color: "7", width: "536.9288458983389", height: "622.1362463986454"
12. **Sticky Note5** `stickyNote` — color: "7", width: "823.147012265536", height: "868.2579789328703"
13. **Sticky Note6** `stickyNote` — color: "7", width: "536.9288458983389", height: "359.90385684071794"
14. **Sticky Note7** `stickyNote` — color: "7", width: "871.451300407926", height: "541.1135860445843"
15. **Sticky Note8** `stickyNote` — color: "7", width: "924.2798021207429", height: "363.07347551845976"
16. **Sticky Note9** `stickyNote` — color: "5", width: "323.2987132716669", height: "80"
17. **Sticky Note10** `stickyNote` — width: "400.381109509268", height: "679.5610243514676", content: "## Try It Out!

### This workflow generates highly-detailed insights from survey responses. Works best when dealing with a large number of participants.

* Import survey responses …[truncated]"
18. **Sticky Note11** `stickyNote` — color: "5", width: "323.2987132716669", height: "110.05160146874424"
19. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
20. **Get Sheet Details** `httpRequest` — url: `=https://sheets.googleapis.com/v4/spreadsheets/{{ $json.sheetID }}`
21. **Get Survey Results** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
22. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Convert to Question Answer Pairs** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Create Insights Sheet** `googleSheets` — operation: **create**
25. **QA Pairs to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
26. **Get Survey Headers** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
27. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
28. **Extract Questions** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Prep Values For Trigger** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Questions to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "question"
31. **Trigger Insights** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api, qdrantApi.
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
