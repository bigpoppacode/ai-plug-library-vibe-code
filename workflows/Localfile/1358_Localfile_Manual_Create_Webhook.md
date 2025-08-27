# Localfile Manual Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Local File Trigger**.
  2. **Local File Trigger** `localFileTrigger` — path: `//home/node/host_mount/local_file_search`
3. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — color: "7", width: "665.0909497859384", height: "596.8351502261468"
5. **Sticky Note4** `stickyNote` — width: "372.51107341403605", height: "356.540665091993", content: "## Try It Out!
### This workflow does the following:
* Monitors a target folder for changes using the local file trigger
* Synchronises files in the target folder with their vector…[truncated]"
6. **Embeddings Mistral Cloud** `embeddingsMistralCloud` — options: "[object Object]"
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
8. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
9. **Chat Trigger** `chatTrigger` — configured for its default action.
10. **Mistral Cloud Chat Model** `lmChatMistralCloud` — model: `mistral-small-2402`
11. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
12. **Embeddings Mistral Cloud1** `embeddingsMistralCloud` — options: "[object Object]"
13. **Sticky Note1** `stickyNote` — color: "7", width: "847.032584995578", height: "335.8400964393443"
14. **Sticky Note2** `stickyNote` — color: "7", width: "855.9952607674757", height: "433.01782147687817"
15. **Sticky Note3** `stickyNote` — color: "7", width: "846.8204626627492", height: "629.9714759033081"
16. **Sticky Note5** `stickyNote` — color: "7", width: "744.4578330639196", height: "759.7908149448928"
17. **Qdrant Vector Store1** `vectorStoreQdrant` — qdrantCollection: "[object Object]"
18. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Question and Answer Chain** `chainRetrievalQa` — configured for its default action.
20. **Handle File Event** `switch` — rules: "[object Object]", options: "[object Object]"
21. **Search For Existing Point** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/{{ $('Set Variables').item.json.qdrant_collection }}/points/scroll`
22. **Search For Existing Point1** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/{{ $('Set Variables').item.json.qdrant_collection }}/points/scroll`
23. **Has Existing Point?** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Has Existing Point?1** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Delete Existing Point1** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/{{ $('Set Variables').item.json.qdrant_collection }}/points/delete`
26. **Delete Existing Point** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/{{ $('Set Variables').item.json.qdrant_collection }}/points/delete`
27. **Remap for File_Added Flow** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Read File** `readWriteFile` — options: "[object Object]", fileSelector: "={{ $json.file_added }}"
29. **Prepare Embedding Document** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow monitors a specified folder for file changes and manages these files using a vector database (Qdrant). When a file is added, changed, or deleted, it updates the vector database accordingly. It also integrates with an AI model to create a question-and-answer agent for handling inquiries based on the files in the folder.

### Demonstrate
A consultant might use this workflow to automate document management and make information retrieval more efficient. For example, a law firm could use it to manage legal documents and enable quick access to case-related information through an AI agent.

### Imitate
1. Set up the workflow in n8n and configure the Local File Trigger to monitor your folder.
2. Connect Qdrant and Mistral Cloud accounts.
3. Adjust the vector store and AI model settings to match your use case.
4. Test the workflow with a sample file to ensure it updates the vector database and responds to queries correctly.

### Practice
Create a test folder with sample documents. Run the workflow to see how it processes file changes and interacts with the AI model. Experiment by adding, modifying, and deleting files to observe the workflow's response.

### WIIFM
Mastering this workflow enables you to offer advanced document management and AI-powered information retrieval services. This can enhance your service portfolio, attract new clients, and increase revenue by leveraging AI and automation in a practical, value-driven way.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mistralCloudApi, qdrantApi.
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
  