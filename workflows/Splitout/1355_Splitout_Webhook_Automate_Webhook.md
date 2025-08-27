# Splitout Webhook Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Bitrix24 Handler** `webhook` — method: **POST**, path: `/bitrix24/openchannel-rag-bothandler.php`
3. **Default Data Loader** `documentDefaultDataLoader` — loader: "pdfLoader", options: "[object Object]", dataType: "binary"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkOverlap: "100"
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Sticky Note** `stickyNote` — width: "2168.7691983135305", height: "818.1434255918864", content: "Subworkflow for Register Bot
Here are files vector stored for Open line chanel bot
After files are stored they are moved to subfolder"
7. **Embeddings Ollama** `embeddingsOllama` — model: `nomic-embed-text:latest`
8. **Vector Store Retriever** `retrieverVectorStore` — topK: "10"
9. **Embeddings Ollama1** `embeddingsOllama` — model: `nomic-embed-text:latest`
10. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
11. **Qdrant Vector Store1** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
12. **Credentials** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
13. **Get a list of available storages** `httpRequest` — method: **POST**, url: `[redacted]`
14. **Validate Token** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Get a list of List of Files and Folders** `httpRequest` — method: **POST**, url: `[redacted]`
16. **Route Event** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Error Response** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "[redacted]"
18. **Get a list of Folders files** `httpRequest` — method: **POST**, url: `[redacted]`
19. **Process Message** `function` — functionCode: "[redacted]"
20. **Process Join** `function` — functionCode: "[redacted]"
21. **Process Install** `function` — functionCode: "[redacted]"
22. **Process Delete** `noOp` — configured for its default action.
23. **Split Out folder files and folders** `splitOut` — options: "[object Object]", fieldToSplitOut: "result"
24. **Question and Answer Chain** `chainRetrievalQa` — text: "={{ $json.MESSAGE_ORI }}", options: "[object Object]", promptType: "define"
25. **Send Join Message** `httpRequest` — method: **POST**, url: `=https://{{$json.DOMAIN}}/rest/imbot.message.add?auth={{$json.AUTH}}`
26. **Register Bot** `httpRequest` — method: **POST**, url: `=https://{{ $json.DOMAIN }}/rest/imbot.register?auth={{$json.AUTH}}`
27. **Filter for files** `filter` — options: "[object Object]", conditions: "[object Object]"
28. **Prepare output parameters** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Merge parameters for Subworkflow** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
30. **Download file** `httpRequest` — url: `={{ $json.DOWNLOAD_URL }}`
31. **Send Message** `httpRequest` — method: **POST**, url: `=https://{{ $json.data.DOMAIN }}/rest/imbot.message.add?auth={{ $json.data.AUTH }}`
32. **Execute subworkflow** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"
33. **Move files to Vector stored folder** `httpRequest` — method: **POST**, url: `[redacted]`
34. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
35. **Success Response** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
  "result": true
}"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to automate interactions with a Bitrix24 chatbot system. It handles incoming messages via a webhook, processes the messages, and uses AI to generate responses. The workflow integrates document storage and retrieval, allowing the chatbot to access and use stored data to answer queries. It involves validating incoming tokens, routing events, processing messages, and handling bot installations and deletions.

**Demonstrate:**  
A business owner could use this workflow to manage customer inquiries through a Bitrix24 chat platform, ensuring that responses are informed by the latest stored documents and data, thereby improving customer support efficiency.

**Imitate:**  
1. Set up a Bitrix24 account and configure webhook.  
2. Import the workflow into n8n.  
3. Connect necessary services (e.g., document storage, AI models).  
4. Test with sample data to ensure message routing and responses work.  
5. Monitor for any errors and adjust as needed.

**Practice:**  
Create a test environment with dummy data in Bitrix24 and run the workflow. Experiment with different message inputs to see how the workflow routes them and generates responses, ensuring the AI model pulls context from stored documents accurately.

**WIIFM:**  
Mastering this workflow allows you to offer advanced chatbot solutions, leveraging AI for smart responses and document retrieval. This can enhance client engagement, reduce response time, and potentially increase your business's service offerings, leading to higher revenue.

## 🔧 Setup Instructions
1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
