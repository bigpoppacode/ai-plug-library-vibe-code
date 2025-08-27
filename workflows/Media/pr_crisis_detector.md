# Pr Crisis Detector
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## PR Crisis Detector", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/pr_crisis_detector`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "pr_crisis_detector"
5. **Query** `vectorStoreRedis` — indexName: "pr_crisis_detector"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to detect public relations (PR) crises by analyzing incoming data. It starts with a webhook that receives data, which is then split into manageable chunks. The workflow uses OpenAI to create embeddings of the data and stores them in a Redis vector database. It queries this database to find potential issues, and the results are processed by a chat agent. Finally, the output is logged into a Google Sheet for record-keeping.

**Demonstrate:**  
A company might use this workflow to monitor social media mentions. If a negative trend is detected, the workflow alerts the PR team, allowing them to respond proactively and manage the brand's reputation.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Redis, OpenAI, and Google Sheets accounts.
3. Set up a webhook to receive data (e.g., from social media).
4. Test with sample data to ensure embeddings and queries are functioning.
5. Customize the Google Sheet to fit your logging needs.

**Practice:**  
Create a test webhook and simulate incoming data. Observe how the workflow processes this data, creates embeddings, and logs the results. Modify the input data to see how the workflow detects potential PR issues.

**WIIFM:**  
Mastering this workflow enables you to offer PR crisis detection services, helping clients manage their brand image effectively. This can enhance your service portfolio and attract clients looking for advanced reputation management solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, redisApi, huggingFaceApi, googleSheetsOAuth2Api.
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
  