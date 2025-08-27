# Airport Lounge Finder
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Airport Lounge Finder", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/airport_lounge_finder`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "airport_lounge_finder"
5. **Query** `vectorStoreRedis` — indexName: "airport_lounge_finder"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow, "Airport Lounge Finder," automates the process of finding airport lounges. It starts with a Webhook that receives requests, processes the data by splitting and embedding it, and stores it in a Redis vector database. The workflow then queries this database to find relevant information, uses AI to generate a response, and logs the interaction in a Google Sheet for record-keeping.

### Demonstrate
A travel agency could use this workflow to provide instant lounge recommendations to clients. When a client requests information through a form, the agency can automate the response, providing a faster and more efficient service.

### Imitate
1. Import the workflow into n8n.
2. Set up the Webhook to receive requests.
3. Configure Redis and Cohere for data processing.
4. Connect Google Sheets for logging.
5. Test the workflow with sample data to ensure it retrieves and logs correctly.

### Practice
Create a mock request to the Webhook with airport codes. Observe how the workflow processes the request and returns lounge details. Experiment with different inputs to verify accuracy and explore how changes affect the output.

### WIIFM
Mastering this workflow can help you offer automated travel solutions, enhancing your service offerings. It can improve efficiency and client satisfaction, leading to increased business opportunities and potential upsells in the travel and hospitality industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, redisApi, huggingFaceApi, googleSheetsOAuth2Api.
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
  