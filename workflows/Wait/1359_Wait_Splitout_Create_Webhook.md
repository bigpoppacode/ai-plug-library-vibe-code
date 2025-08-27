# Wait Splitout Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings Mistral Cloud** `embeddingsMistralCloud` — options: "[object Object]"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.content }}", jsonMode: "expressionData"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "2000"
6. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
7. **Sticky Note** `stickyNote` — color: "7", width: "571.4359274276384", height: "352.65642339230595"
8. **Sticky Note1** `stickyNote` — color: "7", width: "777.897719182587", height: "503.3459981018574"
9. **Sticky Note2** `stickyNote` — color: "7", width: "1045.1698686248747", height: "771.1260499456115"
10. **Sticky Note3** `stickyNote` — color: "7", width: "858.1415560000298", height: "513.2269439624808"
11. **Sticky Note4** `stickyNote` — color: "7", width: "1030.0926850706744", height: "577.7854680142904"
12. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
13. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: ""
14. **Window Buffer Memory1** `memoryBufferWindow` — configured for its default action.
15. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
16. **Ask Tool** `toolWorkflow` — name: "query_tax_code_knowledgebase", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
17. **Search Tool** `toolWorkflow` — name: "get_tax_code_section", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
18. **Sticky Note5** `stickyNote` — width: "383.14868794462586", height: "563.604204119637", content: "## Try Me Out!
### This workflow builds an AI powered Legal assistant who answers questions about tax codes.
* Download publically available tax code PDFs from the relevant governm…[truncated]"
19. **Sticky Note6** `stickyNote` — color: "5", width: "489.3944544742706", height: "131.61363932813174"
20. **Get Tax Code Zip File** `httpRequest` — url: `https://statutes.capitol.texas.gov/Docs/Zips/TX.pdf.zip`
21. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
22. **AI Agent** `agent` — options: "[object Object]"
23. **Extract Zip Files** `compression` — configured for its default action.
24. **Get Mistral Embeddings** `httpRequest` — method: **POST**, url: `https://api.mistral.ai/v1/embeddings`
25. **Use Qdrant Scroll API** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/texas_tax_codes/points/scroll`
26. **Files as Items** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "$binary"
27. **Use Qdrant Search API1** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/texas_tax_codes/points/search`
28. **Get Search Response** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Extract PDF Contents** `extractFromFile` — operation: **pdf**
30. **Get Ask Response** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Extract From Chapter** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Map To Sections** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Sections To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "section"
34. **Only Valid Sections** `filter` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** mistralCloudApi, qdrantApi, openAiApi.
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
