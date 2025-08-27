# Splitout Limit Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — width: "1071.752021563343", height: "285.66037735849045", content: "## Scrape latest Paul Graham essays"
4. **Sticky Note5** `stickyNote` — width: "625", height: "607", content: "## Load into Milvus vector database"
5. **Recursive Character Text Splitter1** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "6000"
6. **When chat message received** `chatTrigger` — options: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "280", height: "180", content: "## Step 1
1. Set up a Milvus server based on [this guide](https://milvus.io/docs/install_standalone-docker-compose.md). And then create a collection named `n8n_test`.
2. Click this…[truncated]"
8. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract Text Only').item.json.data }}", jsonMode: "expressionData"
9. **Milvus Vector Store as tool** `vectorStoreMilvus` — mode: "retrieve-as-tool", toolName: "milvus_knowledge_base", toolDescription: "useful when you need to retrieve information"
10. **Sticky Note1** `stickyNote` — width: "280", height: "120", content: "## Step 2
Start to chat with the AI Agent with Milvus tool"
11. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
12. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
13. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
14. **Sticky Note2** `stickyNote` — color: "7", width: "574", height: "629"
15. **Fetch Essay List** `httpRequest` — url: `http://www.paulgraham.com/articles.html`
16. **AI Agent** `agent` — options: "[object Object]"
17. **Extract essay names** `html` — operation: **extractHtmlContent**
18. **Split out into items** `splitOut` — options: "[object Object]", fieldToSplitOut: "essay"
19. **Limit to first 3** `limit` — maxItems: "3"
20. **Fetch essay texts** `httpRequest` — url: `=http://www.paulgraham.com/{{ $json.essay }}`
21. **Extract Text Only** `html` — operation: **extractHtmlContent**
22. **Milvus Vector Store** `vectorStoreMilvus` — mode: "insert", options: "[object Object]", milvusCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of scraping the latest essays from Paul Graham's website and storing them in a Milvus vector database. It fetches the list of essays, extracts their contents, and limits the process to the first three essays. The text is then extracted and stored in a Milvus collection for future retrieval and analysis, potentially using AI tools to interact with the stored data.

**Demonstrate:** A tech consultant might use this workflow to store and analyze content from influential tech essays, helping clients gain insights or develop content strategies based on key themes and ideas in the industry.

**Imitate:** To adapt this workflow, set up a Milvus server and create a collection. Import the workflow into n8n, and connect it to your Milvus and OpenAI accounts. Customize the HTTP request URLs if needed, and execute the workflow to scrape and store essays.

**Practice:** Create a test workflow to scrape a small website's content and store it in a database. Experiment with different text extraction settings and observe how the data is stored and retrieved.

**WIIFM:** Mastering this workflow can enhance your ability to offer advanced data analysis and AI-driven insights to clients. This capability can differentiate your services, attract new customers, and increase revenue by providing unique and valuable automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** milvusApi, openAiApi.
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
