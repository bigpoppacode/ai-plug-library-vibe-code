# Splitout Limit Import Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — width: "1071.752021563343", height: "285.66037735849045", content: "## Scrape latest Paul Graham essays"
4. **Sticky Note5** `stickyNote` — width: "625", height: "607", content: "## Load into Milvus vector store"
5. **Recursive Character Text Splitter1** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "6000"
6. **Set max chunks to send to model** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
7. **Embeddings OpenAI2** `embeddingsOpenAi` — model: `text-embedding-ada-002`
8. **When chat message received** `chatTrigger` — options: "[object Object]"
9. **Sticky Note1** `stickyNote` — color: "7", width: "1594", height: "529"
10. **Sticky Note** `stickyNote` — width: "280", height: "180", content: "## Step 1
1. Set up a Milvus server based on [this guide](https://milvus.io/docs/install_standalone-docker-compose.md). And then create a collection named `my_collection`.
2. Click…[truncated]"
11. **Sticky Note2** `stickyNote` — height: "120", content: "## Step 2
Chat and get citations in response"
12. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
13. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract Text Only').item.json.data }}", jsonMode: "expressionData"
14. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
15. **Fetch Essay List** `httpRequest` — url: `http://www.paulgraham.com/articles.html`
16. **Milvus Vector Store in retrieval** `vectorStoreMilvus` — prompt: "answer the question"
17. **Extract essay names** `html` — operation: **extractHtmlContent**
18. **Prepare chunks** `code` — jsCode: "let out = ""
for (const i in $input.all()) {
  let itemText = "--- CHUNK " + i + " ---\n"
  itemText += $input.all()[i].json.document.pageContent + "\n"
  itemText += "\n"
  out +=…[truncated]"
19. **Split out into items** `splitOut` — options: "[object Object]", fieldToSplitOut: "essay"
20. **Answer the query based on chunks** `informationExtractor` — text: "={{ $json.context }}

Question: {{ $('When chat message received').first().json.chatInput }}
Helpful Answer:", options: "[object Object]", schemaType: "manual"
21. **Limit to first 3** `limit` — maxItems: "3"
22. **Compose citations** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Fetch essay texts** `httpRequest` — url: `=http://www.paulgraham.com/{{ $json.essay }}`
24. **Generate response** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Extract Text Only** `html` — operation: **extractHtmlContent**
26. **Milvus Vector Store** `vectorStoreMilvus` — mode: "insert", options: "[object Object]", milvusCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of scraping essays from Paul Graham's website, extracting their content, and storing them in a Milvus vector store for AI-powered retrieval. It uses OpenAI embeddings to transform text into vectors, allowing for efficient querying and retrieval based on user questions. This setup enables a chat interface that can provide answers and citations from the stored essays.

**Demonstrate:**  
A developer could use this workflow to create a searchable database of technical articles, allowing users to query the database and receive precise answers sourced from the content. This is useful for creating educational tools or enhancing customer support.

**Imitate:**  
1. Set up a Milvus server according to the provided guide.
2. Import the workflow into n8n.
3. Configure nodes with your OpenAI and Milvus credentials.
4. Execute the workflow to scrape, process, and store essays.
5. Test the chat interface by querying stored content.

**Practice:**  
Create a test Milvus collection and run the workflow with a small set of essays. Experiment by querying the database using different questions to see how the AI retrieves and cites information from the essays.

**WIIFM:**  
Mastering this workflow can help you create AI-powered knowledge systems, attracting clients who need automated information retrieval solutions. This capability can enhance your service offerings and generate income by providing scalable, AI-driven solutions to complex data retrieval problems.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, milvusApi.
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
