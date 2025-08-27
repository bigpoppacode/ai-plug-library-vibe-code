# Commodity Price Tracker
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Commodity Price Tracker", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/commodity_price_tracker`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "commodity_price_tracker"
5. **Query** `vectorStoreRedis` — indexName: "commodity_price_tracker"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow is designed to track commodity prices. It receives data through a webhook, processes it, and stores it in a Redis vector database for efficient querying and retrieval. The data is split into chunks, embedded for semantic understanding, and stored. The workflow can also query this database to fetch relevant information, which is then processed by an AI agent and logged in a Google Sheet for further analysis.

**Demonstrate:** A commodities trader could use this workflow to automatically track and analyze price changes, enabling them to make informed trading decisions quickly.

**Imitate:** 1. Import the workflow into n8n. 2. Set up your webhook to receive price data. 3. Connect your Redis and Google Sheets accounts. 4. Customize the Google Sheet to log the information you need. 5. Test the workflow by sending sample data through the webhook.

**Practice:** Create a mock Google Sheet and simulate receiving commodity price data via the webhook. Verify that the data is correctly processed and logged in the sheet, adapting inputs to see how the workflow handles different scenarios.

**WIIFM:** Mastering this workflow allows you to offer clients real-time data tracking and analysis services, enhancing their decision-making capabilities. This can lead to new business opportunities and increase your revenue potential in the AI automation industry.
  
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
  