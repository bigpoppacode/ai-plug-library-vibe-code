# Edge Device Log Compressor
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Edge Device Log Compressor", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/edge_device_log_compressor`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "edge_device_log_compressor"
5. **Query** `vectorStoreRedis` — indexName: "edge_device_log_compressor"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow compresses and processes logs from edge devices. It starts by receiving logs via a webhook, splits the logs into manageable chunks, creates embeddings for these chunks, and stores them in a Redis vector store for efficient querying. The workflow then uses an AI agent to analyze the data and appends the results to a Google Sheet for record-keeping.

### Demonstrate
A developer managing IoT devices could use this workflow to automate log processing, making it easier to analyze and store data efficiently. This helps in quickly identifying issues and optimizing device performance.

### Imitate
1. Import the workflow into n8n.
2. Set up the webhook to receive log data.
3. Connect Redis and Google Sheets accounts.
4. Configure the AI agent with your analysis criteria.
5. Test the workflow with sample log data to ensure proper functionality.

### Practice
Create a mock dataset of logs and run the workflow to see how it processes and stores data. Experiment with different chunk sizes and overlap settings in the splitter to see their impact on the embeddings.

### WIIFM
Mastering this workflow enables you to offer automated log analysis services, helping businesses optimize their IoT operations. This can increase your value proposition, attract more clients, and generate additional revenue streams in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, redisApi, anthropicApi, googleSheetsOAuth2Api.
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
  