# Neighborhood Safety Insights
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Neighborhood Safety Insights", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/neighborhood_safety_insights`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "neighborhood_safety_insights"
5. **Query** `vectorStoreRedis` — indexName: "neighborhood_safety_insights"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow collects neighborhood safety data via a webhook, processes it using AI for insights, stores the data in a Redis vector store, and logs the results in Google Sheets. It uses text splitting and embedding to handle large text inputs and employs AI for generating insights.

### Demonstrate
A community organization could use this workflow to gather safety reports from residents, analyze them for trends or issues, and maintain a log for public awareness or further action.

### Imitate
1. Import the workflow into n8n.
2. Set up the webhook to receive safety data.
3. Connect Redis and Google Sheets accounts.
4. Customize the text processing and AI analysis settings.
5. Test the workflow with sample data submissions.

### Practice
Create a small dataset with safety reports and run the workflow. Check how the AI analyzes and logs the data in Google Sheets. Try modifying the report content to see how AI insights change.

### WIIFM
Mastering this workflow enables you to offer data analysis services, helping communities or businesses identify safety concerns. This skill can attract clients in need of public safety insights, enhancing your service portfolio and income potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, redisApi, anthropicApi, googleSheetsOAuth2Api.
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
  