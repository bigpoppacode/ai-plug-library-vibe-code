# Patent Abstract Summarizer
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Patent Abstract Summarizer", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/patent_abstract_summarizer`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "patent_abstract_summarizer"
5. **Query** `vectorStoreSupabase` — indexName: "patent_abstract_summarizer"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatOpenAi` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to summarize patent abstracts. It starts by receiving patent data through a webhook. The text is split into manageable chunks and transformed into embeddings using OpenAI's model. These embeddings are stored and queried in a Supabase vector database. The AI agent generates a summary based on the queried data, which is then appended to a Google Sheet for record-keeping.

### Demonstrate
A tech company could use this workflow to quickly summarize patent documents, making it easier for their R&D team to review and prioritize new innovations, saving time and improving decision-making efficiency.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook endpoint.
3. Configure OpenAI and Supabase credentials.
4. Define the Google Sheet for output.
5. Test the workflow with sample patent data to ensure summaries are correctly generated and logged.

### Practice
Create a test patent document and send it to the webhook endpoint. Verify that the workflow processes it, generates a summary, and logs the result in your Google Sheet. Adjust chunk size or overlap if needed.

### WIIFM
Mastering this workflow allows you to offer patent summarization services, a valuable tool for clients needing quick insights into complex documents. This can enhance your service offerings, attract new clients, and increase revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, googleSheetsOAuth2Api.
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
  